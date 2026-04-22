/**
 * Webhook Stripe dedicado: grava/atualiza email_access após pagamento (sem convite manual).
 *
 * Crie um SEGUNDO endpoint em Stripe → Webhooks apontando para esta função
 * (além do da extensão firestore-stripe-payments).
 *
 * firebase functions:config:set stripe.secret_key="sk_live_..." stripe.grant_webhook_secret="whsec_..."
 * firebase deploy --only functions:stripeEmailAccessGrant
 *
 * Eventos: checkout.session.completed, customer.subscription.updated,
 * customer.subscription.deleted, invoice.paid, charge.refunded
 */

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { GoogleGenerativeAI } = require('@google/generative-ai');

if (!admin.apps.length) {
  admin.initializeApp();
}

// D0 hardening: Stripe checkout must be server-authoritative.
const CHECKOUT_PRICE_IDS = Object.freeze({
  modulo: 'price_1TJ1A9EIc3OhAJD3rXkMy6dY',
  ciclo: 'price_1TJ1A6EIc3OhAJD3bjmeeYRT',
  mensal: 'price_1TJ1ABEIc3OhAJD3OQw563Wo',
});
const MAX_SELLABLE_MODULE = 4; // venda aberta no momento: modulos 1..4
const ALLOW_CICLO_CLINICO = false;

function normalizePlanKey(v) {
  const p = String(v || '').trim().toLowerCase();
  if (p === 'mensal' || p === 'modulo' || p === 'ciclo') return p;
  return null;
}

function normalizeCycleVariant(v) {
  const s = String(v || '').trim().toLowerCase();
  return s === 'clinico' ? 'clinico' : 'basico';
}

function normalizeModuloNum(v) {
  const n = parseInt(String(v || ''), 10);
  if (!Number.isFinite(n)) return null;
  if (n < 1 || n > MAX_SELLABLE_MODULE) return null;
  return n;
}

function isAllowedCheckoutRedirect(url) {
  try {
    const u = new URL(String(url || '').trim());
    if (u.protocol !== 'https:' && u.hostname !== 'localhost') return false;
    const host = u.hostname.toLowerCase();
    return (
      host === 'medgradplus.web.app' ||
      host === 'medgradplus.firebaseapp.com' ||
      host === 'localhost'
    );
  } catch (_) {
    return false;
  }
}

function buildServerCheckoutIntent(body) {
  const b = body || {};
  const rawMeta = b.metadata && typeof b.metadata === 'object' ? b.metadata : {};
  const plan = normalizePlanKey(b.plan || rawMeta.plan);
  if (!plan) return { error: 'Plano inválido.' };

  const appEmail = normalizeEmail(b.customer_email || rawMeta.app_email || '');
  if (!appEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(appEmail)) {
    return { error: 'Email inválido.' };
  }

  let mode = 'payment';
  let price = null;
  const metadata = {
    app_email: appEmail,
    plan,
  };

  if (plan === 'modulo') {
    const moduloNum = normalizeModuloNum(rawMeta.modulo_num || b.modulo_num);
    if (!moduloNum) return { error: `Módulo inválido. Venda liberada apenas para módulos 1-${MAX_SELLABLE_MODULE}.` };
    metadata.modulo_num = String(moduloNum);
    price = CHECKOUT_PRICE_IDS.modulo;
  } else if (plan === 'mensal') {
    const moduloNum = normalizeModuloNum(rawMeta.modulo_num || b.modulo_num);
    if (!moduloNum) return { error: `Módulo inválido. Venda liberada apenas para módulos 1-${MAX_SELLABLE_MODULE}.` };
    metadata.modulo_num = String(moduloNum);
    mode = 'subscription';
    price = CHECKOUT_PRICE_IDS.mensal;
  } else {
    const cicloVariant = normalizeCycleVariant(rawMeta.ciclo_variant || b.ciclo_variant);
    if (cicloVariant === 'clinico' && !ALLOW_CICLO_CLINICO) {
      return { error: 'Ciclo clínico ainda não disponível para compra.' };
    }
    metadata.ciclo_variant = cicloVariant;
    price = CHECKOUT_PRICE_IDS.ciclo;
  }

  const cupom = String(rawMeta.cupom || b.cupom || '').trim().toUpperCase();
  if (cupom) metadata.cupom = cupom.slice(0, 40);

  return { mode, price, metadata, customerEmail: appEmail };
}

function normalizeEmail(email) {
  return String(email || '')
    .trim()
    .toLowerCase();
}

function isOneTimeStripePlan(plan) {
  const p = String(plan || '').toLowerCase();
  return p === 'modulo' || p === 'ciclo_basico' || p === 'ciclo_clinico';
}

function getPaymentStateRef(db, paymentIntentId) {
  const id = String(paymentIntentId || '').trim();
  if (!id) return null;
  return db.collection('stripe_payment_state').doc(id);
}

async function getPaymentState(db, paymentIntentId) {
  const ref = getPaymentStateRef(db, paymentIntentId);
  if (!ref) return null;
  const snap = await ref.get();
  if (!snap.exists) return null;
  return snap.data() || null;
}

async function setPaymentState(db, paymentIntentId, patch) {
  const ref = getPaymentStateRef(db, paymentIntentId);
  if (!ref) return;
  await ref.set(
    {
      ...patch,
      paymentIntentId: String(paymentIntentId || '').trim(),
      updatedAt: new Date().toISOString(),
    },
    { merge: true }
  );
}

async function isFullyRefundedPaymentIntent(stripe, paymentIntentId) {
  const piId = String(paymentIntentId || '').trim();
  if (!piId) return false;
  try {
    const pi = await stripe.paymentIntents.retrieve(piId, { expand: ['latest_charge'] });
    const latestCharge = pi?.latest_charge;
    if (!latestCharge || typeof latestCharge !== 'object') return false;
    const amount = Number(latestCharge.amount || 0);
    const refunded = Number(latestCharge.amount_refunded || 0);
    return amount > 0 && refunded >= amount;
  } catch (e) {
    console.warn('payment_intent refund check failed', piId, e?.message || e);
    return false;
  }
}

function mergeModules(existing, incoming) {
  const a = [...(existing || []), ...(incoming || [])]
    .map((n) => parseInt(n, 10))
    .filter((n) => Number.isFinite(n) && n >= 1 && n <= 12);
  return [...new Set(a)].sort((x, y) => x - y);
}

function resolveGrantFromSession(session) {
  const meta = session.metadata || {};
  const plan = String(meta.plan || '').toLowerCase();
  const moduloNum = parseInt(meta.modulo_num || '0', 10);

  if (plan === 'ciclo') {
    const v = String(meta.ciclo_variant || 'basico').toLowerCase();
    if (v === 'clinico') {
      return {
        plano: 'ciclo_clinico',
        modulosAcesso: [5, 6, 7, 8],
        expira: null,
      };
    }
    return {
      plano: 'ciclo_basico',
      modulosAcesso: [1, 2, 3, 4],
      expira: null,
    };
  }
  if (plan === 'modulo') {
    if (!Number.isFinite(moduloNum) || moduloNum < 1 || moduloNum > 12) {
      return null;
    }
    return {
      plano: 'modulo',
      modulosAcesso: [moduloNum],
      expira: null,
    };
  }
  if (plan === 'mensal') {
    if (!Number.isFinite(moduloNum) || moduloNum < 1 || moduloNum > 12) {
      return null;
    }
    return {
      plano: 'mensal',
      modulosAcesso: [moduloNum],
      expira: null,
    };
  }
  return null;
}

async function findEmailAccessRefBySubscriptionId(db, subscriptionId) {
  const qs = await db
    .collection('email_access')
    .where('stripeSubscriptionId', '==', subscriptionId)
    .limit(1)
    .get();
  if (qs.empty) return null;
  return qs.docs[0].ref;
}

async function findAmbassadorIdByCoupon(db, couponRaw) {
  const coupon = String(couponRaw || '').trim().toUpperCase();
  if (!coupon) return null;
  const qs = await db
    .collection('users')
    .where('couponCode', '==', coupon)
    .limit(1)
    .get();
  if (!qs.empty) {
    const data = qs.docs[0].data() || {};
    const id = String(data.ambassadorId || '').trim();
    if (id.startsWith('emb_')) return id;
  }
  return null;
}

async function revokeUsersAccessByEmail(db, email, fields) {
  const normalizedEmail = normalizeEmail(email);
  if (!normalizedEmail) return 0;

  const refs = new Map();
  const directQs = await db.collection('users').where('email', '==', normalizedEmail).get();
  directQs.forEach((d) => refs.set(d.ref.path, d.ref));

  // Legacy fallback: some docs may have mixed-case or unnormalized email.
  if (refs.size === 0) {
    const allQs = await db.collection('users').get();
    allQs.forEach((d) => {
      const data = d.data() || {};
      if (normalizeEmail(data.email) === normalizedEmail) {
        refs.set(d.ref.path, d.ref);
      }
    });
  }

  if (!refs.size) return 0;
  const batch = db.batch();
  refs.forEach((ref) => batch.set(ref, fields, { merge: true }));
  await batch.commit();
  return refs.size;
}

function getStripeFromConfig() {
  const cfg = functions.config().stripe || {};
  const secretKey = cfg.secret_key;
  if (!secretKey) {
    throw new Error('Missing stripe.secret_key in functions config.');
  }
  return require('stripe')(secretKey);
}

exports.createStripeCheckoutSession = functions.region('southamerica-east1').https.onRequest(async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    res.status(204).send('');
    return;
  }
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  try {
    const stripe = getStripeFromConfig();
    const body = req.body || {};
    const success_url = String(body.success_url || '').trim();
    const cancel_url = String(body.cancel_url || '').trim();
    if (!success_url || !cancel_url || !isAllowedCheckoutRedirect(success_url) || !isAllowedCheckoutRedirect(cancel_url)) {
      res.status(400).json({ error: 'Invalid success_url/cancel_url' });
      return;
    }

    const built = buildServerCheckoutIntent(body);
    if (built.error) {
      res.status(400).json({ error: built.error });
      return;
    }

    const { mode, price, metadata, customerEmail } = built;

    const session = await stripe.checkout.sessions.create({
      mode,
      line_items: [{ price, quantity: 1 }],
      success_url,
      cancel_url,
      metadata,
      allow_promotion_codes: true,
      ...(customerEmail ? { customer_email: customerEmail } : {}),
    });

    res.json({ id: session.id, url: session.url });
  } catch (e) {
    console.error('createStripeCheckoutSession', e);
    res.status(500).json({ error: e?.message || 'Checkout session error' });
  }
});

exports.stripeEmailAccessGrant = functions.region('southamerica-east1').https.onRequest(async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).send('Method Not Allowed');
    return;
  }

  const cfg = functions.config().stripe || {};
  const webhookSecret = cfg.grant_webhook_secret;
  if (!webhookSecret) {
    console.error('Missing stripe.grant_webhook_secret in functions config.');
    res.status(500).send('Server misconfigured');
    return;
  }

  const stripe = getStripeFromConfig();
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.rawBody, sig, webhookSecret);
  } catch (err) {
    console.error('Webhook signature:', err.message);
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  const db = admin.firestore();

  try {
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      const meta = session.metadata || {};
      const paymentIntentId = String(session.payment_intent || '').trim();
      const emailRaw =
        meta.app_email ||
        session.customer_details?.email ||
        session.customer_email ||
        null;
      const email = normalizeEmail(emailRaw);
      if (!email) {
        console.warn('checkout.session.completed sem email', session.id);
        res.json({ received: true });
        return;
      }

      const resolved = resolveGrantFromSession(session);
      if (!resolved || !resolved.modulosAcesso?.length) {
        console.warn('Plano/metadata inválidos', session.id, meta);
        res.json({ received: true });
        return;
      }

      if (session.mode !== 'subscription' && paymentIntentId) {
        const payState = await getPaymentState(db, paymentIntentId);
        if (String(payState?.status || '').toLowerCase() === 'refunded') {
          console.log('stripeWebhookAction', {
            eventType: event.type,
            action: 'ignore_already_refunded_by_state',
            paymentIntentId,
            email,
            sessionId: session.id,
          });
          res.json({ received: true });
          return;
        }

        const refunded = await isFullyRefundedPaymentIntent(stripe, paymentIntentId);
        if (refunded) {
          await setPaymentState(db, paymentIntentId, {
            status: 'refunded',
            email,
            lastSessionId: session.id,
            sourceEvent: event.type,
          });
          console.log('checkout.session.completed ignorado: pagamento já reembolsado', {
            sessionId: session.id,
            paymentIntentId,
            email,
          });
          res.json({ received: true });
          return;
        }
      }

      const ref = db.collection('email_access').doc(email);
      const snap = await ref.get();
      const prev = snap.exists ? snap.data() : {};
      const mergedMods = mergeModules(prev.modulosAcesso, resolved.modulosAcesso);

      let expira = resolved.expira;
      if (session.mode === 'subscription' && session.subscription) {
        const sub = await stripe.subscriptions.retrieve(session.subscription);
        expira = new Date(sub.current_period_end * 1000).toISOString();
        try {
          await stripe.subscriptions.update(session.subscription, {
            metadata: {
              app_email: email,
              plan: 'mensal',
              modulo_num: String(meta.modulo_num || ''),
            },
          });
        } catch (e) {
          console.warn('subscription metadata update', e.message);
        }
      }

      const now = new Date().toISOString();
      const payload = {
        ativo: true,
        plano: resolved.plano,
        modulosAcesso: mergedMods.length ? mergedMods : resolved.modulosAcesso,
        maxDispositivos: Number(prev.maxDispositivos || 2) || 2,
        expira: expira || null,
        nota: `Stripe ${session.id} · ${meta.plan || ''}`,
        atualizadoEm: now,
        accessSource: 'stripe',
        stripeSessionId: session.id,
        stripePaymentIntentId: session.payment_intent || null,
        stripeCustomerId: session.customer || null,
        stripeSubscriptionId: session.subscription || null,
      };
      if (!snap.exists) payload.criadoEm = now;

      await ref.set(payload, { merge: true });
      if (session.mode !== 'subscription' && paymentIntentId) {
        await setPaymentState(db, paymentIntentId, {
          status: 'paid',
          email,
          plan: resolved.plano,
          lastSessionId: session.id,
          sourceEvent: event.type,
        });
      }

      const cupom = String(meta.cupom || '').trim().toUpperCase();
      const embIdHint = String(meta.emb_id || '').trim();
      const embIdResolved =
        (embIdHint.startsWith('emb_') ? embIdHint : null) ||
        (await findAmbassadorIdByCoupon(db, cupom));
      if (cupom && embIdResolved) {
        const plan = String(meta.plan || '').toLowerCase();
        let planPriceKey = 'modulo';
        if (plan === 'ciclo') {
          planPriceKey =
            String(meta.ciclo_variant || 'basico').toLowerCase() === 'clinico'
              ? 'ciclo_clinico'
              : 'ciclo';
        } else if (plan === 'mensal') {
          planPriceKey = 'mensal';
        }
        await db.collection('stripe_ambassador_sales').add({
          embaixadorId: embIdResolved,
          cupom: cupom.toUpperCase(),
          plan,
          ciclo_variant: meta.ciclo_variant || '',
          planPriceKey,
          amountBrl: (session.amount_total || 0) / 100,
          currency: session.currency || 'brl',
          customerEmail: email,
          stripeSessionId: session.id,
          syncedToLocal: false,
          createdAt: admin.firestore.FieldValue.serverTimestamp(),
        });
      }
    } else if (event.type === 'customer.subscription.updated') {
      const sub = event.data.object;
      let ref = null;
      const metaEmail = normalizeEmail(sub.metadata?.app_email);
      if (metaEmail) {
        ref = db.collection('email_access').doc(metaEmail);
      } else {
        ref = await findEmailAccessRefBySubscriptionId(db, sub.id);
      }
      if (ref) {
        const end = sub.current_period_end
          ? new Date(sub.current_period_end * 1000).toISOString()
          : null;
        const subModulo = parseInt(sub.metadata?.modulo_num || '0', 10);
        const mensalModules = Number.isFinite(subModulo) && subModulo >= 1 && subModulo <= 12
          ? [subModulo]
          : undefined;
        await ref.set(
          {
            expira: end,
            stripeSubscriptionId: sub.id,
            atualizadoEm: new Date().toISOString(),
            ativo: sub.status === 'active' || sub.status === 'trialing',
            ...(mensalModules ? { modulosAcesso: mensalModules } : {}),
          },
          { merge: true }
        );
      }
    } else if (event.type === 'customer.subscription.deleted') {
      const sub = event.data.object;
      let ref = null;
      const metaEmail = normalizeEmail(sub.metadata?.app_email);
      if (metaEmail) {
        ref = db.collection('email_access').doc(metaEmail);
      } else {
        ref = await findEmailAccessRefBySubscriptionId(db, sub.id);
      }
      if (ref) {
        const prev = (await ref.get()).data() || {};
        const isThisSub =
          prev.stripeSubscriptionId === sub.id &&
          String(prev.plano || '').toLowerCase() === 'mensal';
        if (isThisSub) {
          await ref.set(
            {
              ativo: false,
              modulosAcesso: null,
              expira: null,
              stripeSubscriptionId: null,
              atualizadoEm: new Date().toISOString(),
              nota: 'Assinatura mensal encerrada (Stripe)',
            },
            { merge: true }
          );
        }
      }
    } else if (event.type === 'invoice.paid') {
      const inv = event.data.object;
      const subId = inv.subscription;
      if (!subId) {
        res.json({ received: true });
        return;
      }
      const sub = await stripe.subscriptions.retrieve(subId);
      let ref = null;
      const metaEmail = normalizeEmail(sub.metadata?.app_email);
      if (metaEmail) {
        ref = db.collection('email_access').doc(metaEmail);
      } else {
        ref = await findEmailAccessRefBySubscriptionId(db, sub.id);
      }
      if (ref) {
        const subModulo = parseInt(sub.metadata?.modulo_num || '0', 10);
        const mensalModules = Number.isFinite(subModulo) && subModulo >= 1 && subModulo <= 12
          ? [subModulo]
          : [1];
        await ref.set(
          {
            expira: new Date(sub.current_period_end * 1000).toISOString(),
            ativo: true,
            plano: 'mensal',
            modulosAcesso: mensalModules,
            atualizadoEm: new Date().toISOString(),
          },
          { merge: true }
        );
      }
    } else if (event.type === 'charge.refunded') {
      const charge = event.data.object;
      const refundedTotal = Number(charge.amount_refunded || 0);
      const chargedTotal = Number(charge.amount || 0);
      if (!chargedTotal || refundedTotal < chargedTotal) {
        res.json({ received: true });
        return;
      }

      const paymentIntentId = String(charge.payment_intent || '').trim();
      let ref = null;

      if (paymentIntentId) {
        const qs = await db
          .collection('email_access')
          .where('stripePaymentIntentId', '==', paymentIntentId)
          .limit(1)
          .get();
        if (!qs.empty) ref = qs.docs[0].ref;
      }

      if (!ref) {
        const billedEmail = normalizeEmail(charge.billing_details?.email);
        if (billedEmail) {
          ref = db.collection('email_access').doc(billedEmail);
        }
      }

      if (ref) {
        const snap = await ref.get();
        const prev = snap.exists ? (snap.data() || {}) : {};
        const prevPlan = String(prev.plano || '').toLowerCase();
        const prevPaymentIntentId = String(prev.stripePaymentIntentId || '').trim();
        const hasMatchingIntent = paymentIntentId && prevPaymentIntentId && prevPaymentIntentId === paymentIntentId;
        const hasMatchingCustomer =
          String(prev.stripeCustomerId || '').trim() &&
          String(charge.customer || '').trim() &&
          String(prev.stripeCustomerId || '').trim() === String(charge.customer || '').trim();
        const isLegacyStripeOneTime =
          !prevPaymentIntentId &&
          (String(prev.accessSource || '').toLowerCase() === 'stripe' || hasMatchingCustomer) &&
          prevPlan !== 'mensal' &&
          prevPlan !== 'gratuito';

        if ((hasMatchingIntent || isLegacyStripeOneTime) && prevPlan !== 'mensal') {
          await ref.set(
            {
              ativo: false,
              plano: 'gratuito',
              modulosAcesso: null,
              atualizadoEm: new Date().toISOString(),
              nota: `Pagamento reembolsado (Stripe charge ${charge.id})`,
              stripePaymentIntentId: null,
              stripeSessionId: null,
            },
            { merge: true }
          );
          const nowIso = new Date().toISOString();
          let updatedUserDocs = 0;
          try {
            updatedUserDocs = await revokeUsersAccessByEmail(db, ref.id, {
              plano: 'gratuito',
              modulosAcesso: [1],
              modulo: 1,
              semestre: 1,
              accessSource: 'stripe_refund',
              updatedAt: nowIso,
              lastRefundAt: nowIso,
            });
          } catch (userSyncErr) {
            console.warn('refund users sync failed', userSyncErr?.message || userSyncErr);
          }
          if (paymentIntentId) {
            await setPaymentState(db, paymentIntentId, {
              status: 'refunded',
              email: ref.id,
              chargeId: charge.id,
              sourceEvent: event.type,
            });
          }
          console.log('charge.refunded revogou acesso', {
            emailRef: ref.id,
            chargeId: charge.id,
            paymentIntentId,
            prevPlan,
            matchedBy: hasMatchingIntent ? 'payment_intent' : 'legacy',
            updatedUserDocs,
          });
        } else {
          console.log('charge.refunded sem revogacao', {
            emailRef: ref.id,
            chargeId: charge.id,
            paymentIntentId,
            prevPlan,
            hasMatchingIntent,
            hasMatchingCustomer,
            accessSource: String(prev.accessSource || '').toLowerCase(),
          });
        }
      }
      if (paymentIntentId) {
        const existingState = await getPaymentState(db, paymentIntentId);
        if (String(existingState?.status || '').toLowerCase() !== 'refunded') {
          await setPaymentState(db, paymentIntentId, {
            status: 'refunded',
            email: ref ? ref.id : normalizeEmail(charge.billing_details?.email),
            chargeId: charge.id,
            sourceEvent: event.type,
          });
        }
      }
    }

    res.json({ received: true });
  } catch (e) {
    console.error(e);
    res.status(500).send('Handler error');
  }
});

exports.geminiSupport = functions
  .runWith({ secrets: ['GEMINI_API_KEY'] })
  .region('southamerica-east1')
  .https.onRequest(async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.set('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
      res.status(204).send('');
      return;
    }

    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Method Not Allowed' });
      return;
    }

    try {
      const db = admin.firestore();
      const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'unknown';
      const ipKey = String(ip).split(',')[0].trim().replace(/\./g, '_').replace(/:/g, '_');
      
      const now = Date.now();
      const oneHourAgo = now - 3600000;

      // Acceptance Policy: userId is required and must not be Trial/Gratuito
      const { userId, prompt } = req.body;
      if (!userId) {
        res.status(401).json({ error: 'Acesso negado: Login necessário.' });
        return;
      }

      const userDoc = await db.collection('users').doc(userId).get();
      if (!userDoc.exists) {
        res.status(401).json({ error: 'Usuário não encontrado.' });
        return;
      }

      const userData = userDoc.data();
      const isFree = !userData.plano || userData.plano === 'gratuito' || userData.plano === 'trial';
      if (isFree) {
        res.status(403).json({ error: 'O suporte via IA é exclusivo para membros Premium/Plus.' });
        return;
      }
      
      // Abuse Prevention: Rate limit by IP (5 req/hour)
      const limitRef = db.collection('ai_usage_tracking').doc(ipKey);
      const limitSnap = await limitRef.get();
      let usage = limitSnap.exists ? limitSnap.data() : { hits: [] };
      
      usage.hits = (usage.hits || []).filter(ts => ts > oneHourAgo);
      
      if (usage.hits.length >= 5) {
        res.status(429).json({ error: 'Limite de uso atingido (5/hora). Aguarde para continuar.' });
        return;
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) throw new Error('Secret GEMINI_API_KEY não configurado.');

      const genAI = new GoogleGenerativeAI(apiKey);
      const modelsToTry = ['gemini-1.5-flash', 'gemini-1.5-pro', 'gemini-1.0-pro'];
      let lastError = null;
      let responseText = null;

      const systemPrompt = `Você é o "Monitor de Elite" do MedGradPlus (suporte oficial).
PERSONALIDADE: Profissional, acolhedor, focado em alta performance acadêmica.
CONTEXTO DO APP:
- Módulo 1 (Fundamentos/SUS): Disciplinas [sus, semiologia1, bmf1, pmh, pe1]
- Módulo 2 (Cardio/Respi): Disciplinas [bmf2, semiologia2, mad1, bcm1, indicadores, ds]
- Módulo 3 (Gastro/Renal/Pato): Disciplinas [bmf3, semiologia3, mad2, fisiopato3, saude_trabalhador, pe3]
- Módulo 4 (Neuro/Endócrino): Disciplinas [bmf4, semiologia4, fisiopato_farmaco, bioestatistica, pe4]
- Módulo 5 (Clínica/Farmaco): Disciplinas [clinica_medica5, clinica_cirurgica5, farmaco_aplicada]
- Módulo 6 (Clínica Avançada): Disciplinas [clinica_medica6, mfc6, cirurgia_ortopedia, tecnica_operatoria]

REGRAS DE NAVEGAÇÃO (MUITO IMPORTANTE):
Sempre que um aluno pedir para ver uma matéria ou seção, forneça um link no formato markdown: [Nome](#hash).
Padronize os hashes assim:
- Materiais: #materials:ID_DA_MATERIA
- Questões/Simulado: #quiz:ID_DA_MATERIA
- Flashcards: #cards:ID_DA_MATERIA
- Anatomia: #anatomy_hist:anatomy
- Histologia: #anatomy_hist:histology

EXEMPLO: "Claro! [Clique aqui para abrir o Material de BMF3](#materials:bmf3) e focar em **Renal**."

INSTRUÇÕES FINAIS:
- Use **negrito** (estilo Elite Bolding) para destacar termos médicos, conceitos-chave e nomes de órgãos/doenças.
- Se não souber algo, direcione para o suporte via WhatsApp (Botão no Perfil).
- Nunca invente matérias que não estão na lista acima.
- Responda sempre em Português do Brasil.`;

      for (const modelName of modelsToTry) {
        try {
          const model = genAI.getGenerativeModel({ model: modelName, systemInstruction: systemPrompt });
          const prompt = req.body.prompt || 'Olá';
          const result = await model.generateContent(prompt);
          responseText = result.response.text();
          if (responseText) break;
        } catch (err) {
          console.warn(`Falha no modelo ${modelName}, tentando próximo...`, err.message);
          lastError = err;
          // Continua para o próximo modelo se for erro de cota ou modelo não encontrado
          if (err.message.includes('429') || err.message.includes('quota') || err.message.includes('404')) continue;
          else break;
        }
      }

      if (!responseText) {
        throw new Error('Todos os modelos de IA falharam: ' + (lastError?.message || 'Erro desconhecido'));
      }

      // Record successful hit
      usage.hits.push(now);
      await limitRef.set(usage);

      res.json({ response: responseText });
    } catch (e) {
      console.error('geminiSupport error:', e);
      // Mensagem amigável para o usuário final em vez de erro técnico
      res.status(500).json({ error: 'Estamos com uma instabilidade momentânea nos serviços de IA. Por favor, tente novamente em alguns instantes.' });
    }
  });
