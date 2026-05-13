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
const crypto = require('crypto');
const checkoutHelpers = require('./checkout-helpers');
const { createGeminiSupportHandler } = require('./ai-support');
const {
  ACCOUNT_STATUS,
  TERMS_VERSION,
  analyzeSessionRisk,
  buildAccountStatusPatch,
  hashSignal,
  normalizeEmail,
  parseClientIp,
  sanitizeTermsAcceptance,
} = require('./security-helpers');
const {
  buildDefaultP2Lessons,
  buildTemplateId,
  hashScheduleTemplate,
  normalizeAiScheduleDraft,
  normalizeDateKey,
  normalizeRoom,
} = require('./study-schedule');

if (!admin.apps.length) {
  admin.initializeApp();
}

// D0 hardening: Stripe checkout must be server-authoritative.
const CHECKOUT_PRICE_IDS = Object.freeze({
  modulo: 'price_1TJ1A9EIc3OhAJD3rXkMy6dY',
  ciclo: 'price_1TJ1A6EIc3OhAJD3bjmeeYRT',
  cicloClinico: '',
  mensal: 'price_1TJ1ABEIc3OhAJD3OQw563Wo',
});
const GROUP_COUPON_IDS = Object.freeze({
  group10: '',
  group15: '',
  group20: '',
});
const MAX_SELLABLE_MODULE = 6; // venda aberta no momento: modulos 1..6
const ALLOW_CICLO_CLINICO = true;

function getStripeConfigValue(cfg, key, envKey, fallback = '') {
  return String(cfg[key] || process.env[envKey] || fallback || '').trim();
}

function getCheckoutOptions() {
  const cfg = functions.config().stripe || {};
  const priceIds = {
    modulo: getStripeConfigValue(cfg, 'price_modulo', 'STRIPE_PRICE_MODULO', CHECKOUT_PRICE_IDS.modulo),
    ciclo: getStripeConfigValue(cfg, 'price_ciclo', 'STRIPE_PRICE_CICLO', CHECKOUT_PRICE_IDS.ciclo),
    cicloClinico: getStripeConfigValue(
      cfg,
      'price_ciclo_clinico',
      'STRIPE_PRICE_CICLO_CLINICO',
      CHECKOUT_PRICE_IDS.cicloClinico
    ),
    mensal: getStripeConfigValue(cfg, 'price_mensal', 'STRIPE_PRICE_MENSAL', CHECKOUT_PRICE_IDS.mensal),
  };
  const couponIds = {
    group10: getStripeConfigValue(cfg, 'group_coupon_10', 'STRIPE_GROUP_COUPON_10', GROUP_COUPON_IDS.group10),
    group15: getStripeConfigValue(cfg, 'group_coupon_15', 'STRIPE_GROUP_COUPON_15', GROUP_COUPON_IDS.group15),
    group20: getStripeConfigValue(cfg, 'group_coupon_20', 'STRIPE_GROUP_COUPON_20', GROUP_COUPON_IDS.group20),
  };
  const maxSellableModule = parseInt(
    getStripeConfigValue(cfg, 'max_sellable_module', 'MAX_SELLABLE_MODULE', String(MAX_SELLABLE_MODULE)),
    10
  );
  const allowClinicalRaw = getStripeConfigValue(cfg, 'allow_ciclo_clinico', 'ALLOW_CICLO_CLINICO', String(ALLOW_CICLO_CLINICO));
  return {
    priceIds,
    couponIds,
    maxSellableModule: Number.isFinite(maxSellableModule) ? maxSellableModule : MAX_SELLABLE_MODULE,
    allowClinicalCycle: allowClinicalRaw.toLowerCase() !== 'false',
  };
}

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

    const built = checkoutHelpers.buildServerCheckoutIntent(body, getCheckoutOptions());
    if (built.error) {
      res.status(400).json({ error: built.error });
      return;
    }

    const {
      mode,
      price,
      metadata,
      customerEmail,
      quantity,
      discounts,
      allowPromotionCodes,
      participantEmails,
    } = built;

    let groupRef = null;
    if (metadata.purchase_mode === 'group') {
      groupRef = admin.firestore().collection('stripe_group_purchases').doc(metadata.group_id);
      await groupRef.set({
        status: 'checkout_requested',
        groupId: metadata.group_id,
        participantEmails: participantEmails || [],
        participantEmailsHash: metadata.participant_emails_hash || '',
        payerEmail: customerEmail,
        plan: metadata.plan,
        cicloVariant: metadata.ciclo_variant || '',
        groupSize: Number(metadata.group_size || 0) || (participantEmails || []).length,
        discountPercent: Number(metadata.group_discount_percent || 0) || 0,
        price,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      }, { merge: true });
    }

    const sessionParams = {
      mode,
      line_items: [{ price, quantity: quantity || 1 }],
      success_url,
      cancel_url,
      metadata,
      ...(customerEmail ? { customer_email: customerEmail } : {}),
      ...(allowPromotionCodes === false ? {} : { allow_promotion_codes: true }),
      ...(discounts ? { discounts } : {}),
    };
    const session = await stripe.checkout.sessions.create(sessionParams);

    if (groupRef) {
      await groupRef.set({
        status: 'checkout_created',
        stripeSessionId: session.id,
        updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      }, { merge: true });
    }

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

      if (String(meta.purchase_mode || '').toLowerCase() === 'group') {
        const groupId = String(meta.group_id || '').trim();
        if (!groupId) {
          console.warn('checkout.session.completed grupo sem group_id', session.id, meta);
          res.json({ received: true });
          return;
        }

        const groupRef = db.collection('stripe_group_purchases').doc(groupId);
        const groupSnap = await groupRef.get();
        if (!groupSnap.exists) {
          console.warn('checkout.session.completed grupo sem registro', session.id, groupId);
          res.json({ received: true });
          return;
        }
        const groupData = groupSnap.data() || {};
        if (groupData.status === 'paid' && groupData.stripeSessionId === session.id) {
          res.json({ received: true });
          return;
        }

        const participantEmails = groupData.participantEmails || [];
        const groupGrants = checkoutHelpers.buildGroupAccessGrantsForSession(session, participantEmails);
        if (!groupGrants.length) {
          console.warn('checkout.session.completed grupo com participantes invalidos', session.id, groupId);
          res.json({ received: true });
          return;
        }

        const now = new Date().toISOString();
        for (const grant of groupGrants) {
          const participantRef = db.collection('email_access').doc(grant.email);
          const participantSnap = await participantRef.get();
          const prev = participantSnap.exists ? participantSnap.data() : {};
          const mergedMods = mergeModules(prev.modulosAcesso, grant.payload.modulosAcesso);
          const payload = {
            ...grant.payload,
            modulosAcesso: mergedMods.length ? mergedMods : grant.payload.modulosAcesso,
            maxDispositivos: Number(prev.maxDispositivos || 2) || 2,
            atualizadoEm: now,
          };
          if (!participantSnap.exists) payload.criadoEm = now;
          await participantRef.set(payload, { merge: true });
        }

        if (paymentIntentId) {
          await setPaymentState(db, paymentIntentId, {
            status: 'paid',
            email,
            participantEmails: groupGrants.map((g) => g.email),
            plan: resolved.plano,
            groupId,
            lastSessionId: session.id,
            sourceEvent: event.type,
          });
        }

        await groupRef.set({
          status: 'paid',
          stripeSessionId: session.id,
          stripePaymentIntentId: session.payment_intent || null,
          stripeCustomerId: session.customer || null,
          amountBrl: (session.amount_total || 0) / 100,
          currency: session.currency || 'brl',
          paidAt: now,
          updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        }, { merge: true });

        const cupom = String(meta.cupom || '').trim().toUpperCase();
        const embIdHint = String(meta.emb_id || '').trim();
        const embIdResolved =
          (embIdHint.startsWith('emb_') ? embIdHint : null) ||
          (await findAmbassadorIdByCoupon(db, cupom));
        if (cupom && embIdResolved) {
          await db.collection('stripe_ambassador_sales').add({
            embaixadorId: embIdResolved,
            cupom: cupom.toUpperCase(),
            plan: String(meta.plan || '').toLowerCase(),
            ciclo_variant: meta.ciclo_variant || '',
            planPriceKey: String(meta.ciclo_variant || 'basico').toLowerCase() === 'clinico'
              ? 'ciclo_clinico'
              : 'ciclo',
            amountBrl: (session.amount_total || 0) / 100,
            currency: session.currency || 'brl',
            customerEmail: email,
            groupId,
            groupSize: groupGrants.length,
            stripeSessionId: session.id,
            syncedToLocal: false,
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
          });
        }

        res.json({ received: true });
        return;
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
      if (paymentIntentId) {
        const groupQs = await db
          .collection('stripe_group_purchases')
          .where('stripePaymentIntentId', '==', paymentIntentId)
          .limit(1)
          .get();
        if (!groupQs.empty) {
          const groupDoc = groupQs.docs[0];
          const groupData = groupDoc.data() || {};
          const participantEmails = [...new Set((groupData.participantEmails || []).map(normalizeEmail).filter(Boolean))];
          const nowIso = new Date().toISOString();
          let updatedUserDocs = 0;
          for (const participantEmail of participantEmails) {
            const participantRef = db.collection('email_access').doc(participantEmail);
            await participantRef.set(
              {
                ativo: false,
                plano: 'gratuito',
                modulosAcesso: null,
                atualizadoEm: nowIso,
                nota: `Pagamento em grupo reembolsado (Stripe charge ${charge.id})`,
                stripePaymentIntentId: null,
                stripeSessionId: null,
                stripeGroupPurchaseId: groupDoc.id,
              },
              { merge: true }
            );
            try {
              updatedUserDocs += await revokeUsersAccessByEmail(db, participantEmail, {
                plano: 'gratuito',
                modulosAcesso: [1],
                modulo: 1,
                semestre: 1,
                accessSource: 'stripe_refund',
                updatedAt: nowIso,
                lastRefundAt: nowIso,
              });
            } catch (userSyncErr) {
              console.warn('group refund users sync failed', participantEmail, userSyncErr?.message || userSyncErr);
            }
          }
          await groupDoc.ref.set(
            {
              status: 'refunded',
              refundedAt: nowIso,
              refundChargeId: charge.id,
              updatedAt: admin.firestore.FieldValue.serverTimestamp(),
            },
            { merge: true }
          );
          await setPaymentState(db, paymentIntentId, {
            status: 'refunded',
            email: normalizeEmail(charge.billing_details?.email),
            participantEmails,
            groupId: groupDoc.id,
            chargeId: charge.id,
            sourceEvent: event.type,
          });
          console.log('charge.refunded revogou compra em grupo', {
            groupId: groupDoc.id,
            chargeId: charge.id,
            paymentIntentId,
            participantCount: participantEmails.length,
            updatedUserDocs,
          });
          res.json({ received: true });
          return;
        }
      }
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

function validateResumoTraceBody(body) {
  const b = body || {};
  const aulaId = String(b.aulaId || '').trim();
  const materiaId = String(b.materiaId || '').trim();
  const sourceHash = String(b.sourceHash || '').trim().toLowerCase();
  const sourcePath = String(b.sourcePath || '').trim();
  const generatedAt = String(b.generatedAt || '').trim();

  if (!/^[a-z0-9_]+_a\d+$/i.test(aulaId)) return { error: 'aulaId invalido.' };
  if (!/^[a-z0-9_]+$/i.test(materiaId)) return { error: 'materiaId invalido.' };
  if (!/^[a-f0-9]{64}$/.test(sourceHash)) return { error: 'sourceHash invalido.' };
  if (!sourcePath || sourcePath.length > 180 || !sourcePath.startsWith('data/materiais/')) {
    return { error: 'sourcePath invalido.' };
  }
  if (generatedAt && generatedAt.length > 40) return { error: 'generatedAt invalido.' };
  return { aulaId, materiaId, sourceHash, sourcePath, generatedAt };
}

function getResumoTraceSecret() {
  const secret = process.env.RESUMO_TRACE_SECRET || '';
  if (!secret || secret.length < 24) {
    throw new Error('Secret RESUMO_TRACE_SECRET nao configurado ou muito curto.');
  }
  return secret;
}

exports.createResumoTrace = functions
  .runWith({ secrets: ['RESUMO_TRACE_SECRET'] })
  .region('southamerica-east1')
  .https.onRequest(async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
      res.status(204).send('');
      return;
    }
    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Method Not Allowed' });
      return;
    }

    try {
      const authHeader = String(req.headers.authorization || '');
      const match = authHeader.match(/^Bearer\s+(.+)$/i);
      if (!match) {
        res.status(401).json({ error: 'Login necessario para gerar resumo rastreavel.' });
        return;
      }

      const decoded = await admin.auth().verifyIdToken(match[1], true);
      if (!decoded?.uid) {
        res.status(401).json({ error: 'Token Firebase invalido.' });
        return;
      }
      const traceUserSnap = await admin.firestore().collection('users').doc(decoded.uid).get();
      assertAccountAllowed(traceUserSnap.exists ? (traceUserSnap.data() || {}) : {});

      const payload = validateResumoTraceBody(req.body);
      if (payload.error) {
        res.status(400).json({ error: payload.error });
        return;
      }

      const nowIso = new Date().toISOString();
      const nonce = crypto.randomBytes(12).toString('hex');
      const userAgent = String(req.headers['user-agent'] || '').slice(0, 220);
      const userAgentHash = crypto.createHash('sha256').update(userAgent).digest('hex');
      const email = normalizeEmail(decoded.email || '');
      const secret = getResumoTraceSecret();
      const tracePayload = [
        decoded.uid,
        email,
        payload.materiaId,
        payload.aulaId,
        payload.sourceHash,
        nowIso,
        nonce,
      ].join('|');
      const signature = crypto.createHmac('sha256', secret).update(tracePayload).digest('base64url');
      const traceId = `MGP-${signature.slice(0, 26)}`;
      const marker = crypto
        .createHmac('sha256', secret)
        .update(`marker|${traceId}|${payload.sourceHash}`)
        .digest('hex')
        .slice(0, 20)
        .toUpperCase();

      await admin.firestore().collection('summary_renders').doc(traceId).set({
        traceId,
        marker,
        uid: decoded.uid,
        email,
        aulaId: payload.aulaId,
        materiaId: payload.materiaId,
        sourceHash: payload.sourceHash,
        sourcePath: payload.sourcePath,
        generatedAt: payload.generatedAt || null,
        createdAt: nowIso,
        userAgentHash,
        kind: 'resumo_a4',
        version: 1,
      });

      res.json({
        traceId,
        marker,
        createdAt: nowIso,
      });
    } catch (e) {
      console.error('createResumoTrace error:', e);
      const msg = e?.message || 'Erro ao gerar rastreio.';
      if (msg.includes('RESUMO_TRACE_SECRET')) {
        res.status(500).json({ error: 'Rastreio ainda nao configurado no servidor.' });
        return;
      }
      res.status(500).json({ error: 'Nao foi possivel gerar rastreio agora.' });
    }
  });

exports.geminiSupport = functions
  .runWith({ secrets: ['GEMINI_API_KEY'] })
  .region('southamerica-east1')
  .https.onRequest(createGeminiSupportHandler({ admin }));

const SCHEDULE_AI_SCHEMA = {
  type: 'object',
  properties: {
    module: { type: 'number' },
    room: { type: 'string' },
    examDates: {
      type: 'object',
      properties: {
        p1: { type: 'string' },
        p2: { type: 'string' },
        av2: { type: 'string' },
      },
    },
    subjects: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          materiaId: { type: 'string' },
          sigla: { type: 'string' },
          nome: { type: 'string' },
          p1LessonIds: { type: 'array', items: { type: 'string' } },
          notes: { type: 'string' },
        },
      },
    },
    confidence: { type: 'string', enum: ['high', 'medium', 'low'] },
    notes: { type: 'string' },
  },
  required: ['examDates', 'subjects', 'confidence'],
};

function setBasicCors(res) {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
}

function getBearerToken(req) {
  const header = (req.get && req.get('authorization')) || req.headers?.authorization || '';
  const match = String(header).match(/^Bearer\s+(.+)$/i);
  return match ? match[1].trim() : '';
}

function httpError(status, message, code = 'request_error') {
  const err = new Error(message);
  err.status = status;
  err.code = code;
  return err;
}

function sendFunctionError(res, e, fallback = 'Erro interno.') {
  const status = e?.status || 500;
  res.status(status).json({
    error: status >= 500 ? fallback : e.message,
    code: e?.code || 'internal_error',
  });
}

function isDecodedAdmin(decoded) {
  return (
    decoded &&
    decoded.email_verified === true &&
    normalizeEmail(decoded.email) === 'pngjaico@gmail.com'
  );
}

function assertAccountAllowed(userData = {}) {
  const status = String(userData.accountStatus || ACCOUNT_STATUS.ACTIVE).toLowerCase();
  if (status === ACCOUNT_STATUS.BANNED || status === ACCOUNT_STATUS.TEMPORARILY_SUSPENDED) {
    throw httpError(403, 'Conta suspensa ou banida. Entre em contato com o suporte.', 'account_blocked');
  }
}

function accountNeedsTerms(userData = {}) {
  return String(userData.termsVersionAccepted || '') !== TERMS_VERSION;
}

async function verifyFirebaseRequest(req, options = {}) {
  const token = getBearerToken(req);
  if (!token) throw httpError(401, 'Login necessario.', 'missing_token');

  const decoded = await admin.auth().verifyIdToken(token, true);
  if (!decoded?.uid) throw httpError(401, 'Token Firebase invalido.', 'invalid_token');
  if (options.requireAdmin && !isDecodedAdmin(decoded)) {
    throw httpError(403, 'Apenas admin verificado pode executar esta acao.', 'admin_required');
  }

  const db = admin.firestore();
  const userRef = db.collection('users').doc(decoded.uid);
  const userSnap = await userRef.get();
  const userData = userSnap.exists ? (userSnap.data() || {}) : {};
  if (!options.allowBlocked) assertAccountAllowed(userData);
  return { db, decoded, userRef, userData };
}

async function verifyScheduleRequest(req) {
  const context = await verifyFirebaseRequest(req);
  if (accountNeedsTerms(context.userData)) {
    throw httpError(403, 'Aceite os termos atuais para usar o cronograma sincronizado.', 'terms_required');
  }
  return { decoded: context.decoded, userData: context.userData };
}

function extractRequestGeo(req, body = {}) {
  const headers = req?.headers || {};
  return {
    country: String(body.country || headers['x-appengine-country'] || headers['cf-ipcountry'] || '').slice(0, 8).toUpperCase(),
    region: String(body.region || headers['x-appengine-region'] || '').slice(0, 32).toUpperCase(),
    city: String(body.city || headers['x-appengine-city'] || '').slice(0, 80),
  };
}

function buildSessionPayload(req, decoded, body = {}, nowMs = Date.now()) {
  const ip = parseClientIp(req);
  const userAgent = String(req.headers?.['user-agent'] || '').slice(0, 240);
  const rawDevice = String(body.deviceFingerprint || body.deviceId || '').slice(0, 600);
  const rawSession = String(body.sessionId || body.sessionToken || `${decoded.uid}|${rawDevice}|${nowMs}`).slice(0, 600);
  const sessionId = `sess_${hashSignal(rawSession).slice(0, 36)}`;
  const geo = extractRequestGeo(req, body);
  return {
    sessionId,
    uid: decoded.uid,
    email: normalizeEmail(decoded.email || ''),
    deviceHash: hashSignal(rawDevice || `${decoded.uid}|unknown-device`),
    ipHash: hashSignal(ip || 'unknown-ip'),
    userAgentHash: hashSignal(userAgent || 'unknown-ua'),
    timezone: String(body.timezone || '').slice(0, 80),
    country: geo.country,
    region: geo.region,
    city: geo.city,
    createdAtMs: nowMs,
    updatedAtMs: nowMs,
    updatedAt: new Date(nowMs).toISOString(),
  };
}

function sanitizePositiveInt(value, fallback = 1, max = 12) {
  const parsed = parseInt(value, 10);
  if (!Number.isFinite(parsed) || parsed < 1) return fallback;
  return Math.min(parsed, max);
}

function normalizeModulesAccessServer(value) {
  const raw = Array.isArray(value)
    ? value
    : (typeof value === 'string' ? value.split(',') : []);
  const modules = [...new Set(raw
    .map((item) => parseInt(item, 10))
    .filter((item) => Number.isFinite(item) && item >= 1 && item <= 12))]
    .sort((a, b) => a - b);
  return modules.length ? modules : null;
}

function resolveModulesFromGrant(grant = {}) {
  const explicit = normalizeModulesAccessServer(
    grant.modulosAcesso ?? grant.modulos_acesso ?? grant.modulos ?? grant.modules
  );
  if (explicit) return explicit;

  const plan = String(grant.plano || '').toLowerCase();
  if (plan === 'ciclo_basico' || plan === 'ciclo') return [1, 2, 3, 4];
  if (plan === 'ciclo_clinico') return [5, 6, 7, 8];
  if (plan === 'ciclo_internato') return [9, 10, 11, 12];
  if (plan === 'mensal') return [1, 2, 3, 4];
  if (plan === 'modulo') {
    const moduleNumber = sanitizePositiveInt(
      grant.moduloLiberado ?? grant.moduloAcesso ?? grant.moduloNum ?? grant.modulo ?? grant.semestre,
      0,
      12
    );
    return moduleNumber ? [moduleNumber] : null;
  }
  return null;
}

function isEmailAccessGrantValid(grant = {}) {
  if (!grant || grant.ativo === false) return false;
  if (!grant.expira) return true;
  const exp = new Date(grant.expira);
  if (Number.isNaN(+exp)) return false;
  const end = new Date(exp.getFullYear(), exp.getMonth(), exp.getDate(), 23, 59, 59, 999);
  return new Date() <= end;
}

function compactString(value, max = 160) {
  return String(value || '').slice(0, max);
}

async function buildAuthorizedProfilePatch(db, decoded, userData = {}, requested = {}) {
  const email = normalizeEmail(decoded.email || userData.email || requested.email || '');
  const nowIso = new Date().toISOString();
  const semester = sanitizePositiveInt(requested.semestre || requested.modulo || userData.semestre || userData.modulo, 1, 12);
  const grantSnap = email ? await db.collection('email_access').doc(email).get() : null;
  const grant = grantSnap?.exists ? { id: email, ...(grantSnap.data() || {}) } : null;
  const validGrant = grant && isEmailAccessGrantValid(grant);
  const plan = validGrant ? (grant.plano || 'basico') : 'gratuito';
  const modules = validGrant ? resolveModulesFromGrant(grant) : [1];
  const maxDispositivos = validGrant
    ? Math.max(2, Math.min(Number(grant.maxDispositivos || 2) || 2, 12))
    : 2;
  const grantSource = validGrant
    ? (String(grant.accessSource || '').toLowerCase() === 'stripe' ? 'stripe' : 'email_invite')
    : 'demo_account';
  const deviceIds = Array.isArray(requested.deviceIds) ? requested.deviceIds.filter(Boolean).slice(-5) : [];
  const deviceId = compactString(requested.deviceId || deviceIds[deviceIds.length - 1] || '', 180);
  const normalizedDevices = deviceId && !deviceIds.includes(deviceId)
    ? [...deviceIds, deviceId].slice(-5)
    : deviceIds;

  return {
    email,
    plano: plan,
    semestre: modules && !modules.includes(semester) ? modules[0] : semester,
    modulo: modules && !modules.includes(semester) ? modules[0] : semester,
    faculdadeId: compactString(requested.faculdadeId || userData.faculdadeId || 'uninove', 80),
    campusId: compactString(requested.campusId || userData.campusId || 'vergueiro', 80),
    codeHash: '',
    modulosAcesso: modules,
    deviceId,
    deviceIds: normalizedDevices,
    sessionToken: compactString(requested.sessionToken || '', 180),
    maxDispositivos,
    accessSource: grantSource,
    emailGrantId: validGrant ? (grant.id || email) : '',
    criadoEm: userData.criadoEm || nowIso,
    loginDate: compactString(requested.loginDate || nowIso, 80),
    lastSeenAt: compactString(requested.lastSeenAt || nowIso, 80),
    lastSeenUa: compactString(requested.lastSeenUa || '', 180),
    accountStatus: userData.accountStatus || ACCOUNT_STATUS.ACTIVE,
    updatedAt: nowIso,
  };
}

exports.acceptTerms = functions.region('southamerica-east1').https.onRequest(async (req, res) => {
  setBasicCors(res);
  if (req.method === 'OPTIONS') return res.status(204).send('');
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

  try {
    const { db, decoded, userRef, userData } = await verifyFirebaseRequest(req);
    const accepted = sanitizeTermsAcceptance(req.body || {});
    const nowIso = new Date().toISOString();
    const ipHash = hashSignal(parseClientIp(req) || 'unknown-ip');
    const userAgentHash = hashSignal(String(req.headers?.['user-agent'] || '').slice(0, 240));
    const accountStatus = userData.accountStatus || ACCOUNT_STATUS.ACTIVE;
    const patch = {
      email: normalizeEmail(decoded.email || userData.email || ''),
      termsVersionAccepted: accepted.termsVersion,
      termsAcceptedAt: nowIso,
      privacyAcceptedAt: nowIso,
      termsEvidence: {
        ipHash,
        userAgentHash,
        source: 'app',
      },
      accountStatus,
      updatedAt: nowIso,
    };
    await userRef.set(patch, { merge: true });
    await db.collection('security_events').doc(`${decoded.uid}_terms_${accepted.termsVersion}`).set({
      uid: decoded.uid,
      email: patch.email,
      type: 'terms_accepted',
      riskLevel: 'none',
      createdAt: nowIso,
      resolvedAt: nowIso,
      evidence: { termsVersion: accepted.termsVersion },
    }, { merge: true });
    res.json({ ok: true, termsVersion: accepted.termsVersion, patch });
  } catch (e) {
    sendFunctionError(res, e, 'Nao foi possivel registrar aceite dos termos.');
  }
});

exports.syncUserProfileAccess = functions.region('southamerica-east1').https.onRequest(async (req, res) => {
  setBasicCors(res);
  if (req.method === 'OPTIONS') return res.status(204).send('');
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

  try {
    const { db, decoded, userRef, userData } = await verifyFirebaseRequest(req);
    if (accountNeedsTerms(userData)) {
      throw httpError(403, 'Aceite os termos atuais antes de salvar o perfil.', 'terms_required');
    }
    const profilePatch = await buildAuthorizedProfilePatch(db, decoded, userData, req.body?.profile || {});
    await userRef.set(profilePatch, { merge: true });
    res.json({ ok: true, profile: profilePatch });
  } catch (e) {
    sendFunctionError(res, e, 'Nao foi possivel sincronizar perfil autorizado.');
  }
});

exports.recordSessionHeartbeat = functions.region('southamerica-east1').https.onRequest(async (req, res) => {
  setBasicCors(res);
  if (req.method === 'OPTIONS') return res.status(204).send('');
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

  try {
    const { db, decoded, userRef, userData } = await verifyFirebaseRequest(req);
    const nowMs = Date.now();
    const nowIso = new Date(nowMs).toISOString();
    const currentSession = buildSessionPayload(req, decoded, req.body || {}, nowMs);
    const sessionsRef = userRef.collection('sessions');
    const recentSnap = await sessionsRef.orderBy('updatedAtMs', 'desc').limit(20).get();
    const recentSessions = recentSnap.docs
      .filter((docSnap) => docSnap.id !== currentSession.sessionId)
      .map((docSnap) => docSnap.data() || {});
    const risk = analyzeSessionRisk({ currentSession, recentSessions, userData, nowMs });

    await sessionsRef.doc(currentSession.sessionId).set({
      ...currentSession,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAtServer: admin.firestore.FieldValue.serverTimestamp(),
    }, { merge: true });

    await userRef.set({
      lastSecurityHeartbeatAt: nowIso,
      lastSessionId: currentSession.sessionId,
      lastDeviceHash: currentSession.deviceHash,
      lastIpHash: currentSession.ipHash,
    }, { merge: true });

    for (const event of risk.events) {
      const eventKey = hashSignal(`${decoded.uid}|${event.type}|${nowIso.slice(0, 13)}|${JSON.stringify(event.evidence || {})}`).slice(0, 36);
      await db.collection('security_events').doc(`${decoded.uid}_${eventKey}`).set({
        uid: decoded.uid,
        email: normalizeEmail(decoded.email || userData.email || ''),
        type: event.type,
        riskLevel: event.riskLevel,
        createdAt: nowIso,
        resolvedAt: null,
        evidence: event.evidence || {},
        enforcementSuggestion: event.enforcementSuggestion || 'manual_review',
      }, { merge: true });
    }

    res.json({
      ok: true,
      sessionId: currentSession.sessionId,
      accountStatus: userData.accountStatus || ACCOUNT_STATUS.ACTIVE,
      termsRequired: accountNeedsTerms(userData),
      riskLevel: risk.riskLevel,
      events: risk.events.map((event) => ({ type: event.type, riskLevel: event.riskLevel })),
    });
  } catch (e) {
    sendFunctionError(res, e, 'Nao foi possivel registrar sessao.');
  }
});

exports.adminSetAccountStatus = functions.region('southamerica-east1').https.onRequest(async (req, res) => {
  setBasicCors(res);
  if (req.method === 'OPTIONS') return res.status(204).send('');
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

  try {
    const { db, decoded } = await verifyFirebaseRequest(req, { requireAdmin: true, allowBlocked: true });
    const body = req.body || {};
    const targetUid = String(body.uid || '').trim();
    if (!targetUid) throw httpError(400, 'UID alvo obrigatorio.', 'missing_uid');
    const nowIso = new Date().toISOString();
    const patch = buildAccountStatusPatch({
      status: body.status,
      reason: body.reason || '',
      operatorEmail: decoded.email || '',
      nowIso,
    });

    const targetRef = db.collection('users').doc(targetUid);
    const targetSnap = await targetRef.get();
    const targetData = targetSnap.exists ? (targetSnap.data() || {}) : {};
    await targetRef.set(patch, { merge: true });

    if (patch.accountStatus === ACCOUNT_STATUS.BANNED) {
      await admin.auth().updateUser(targetUid, { disabled: true });
      await admin.auth().revokeRefreshTokens(targetUid);
    } else if (patch.accountStatus === ACCOUNT_STATUS.TEMPORARILY_SUSPENDED) {
      await admin.auth().revokeRefreshTokens(targetUid);
    } else if (patch.accountStatus === ACCOUNT_STATUS.ACTIVE || patch.accountStatus === ACCOUNT_STATUS.WARNED) {
      await admin.auth().updateUser(targetUid, { disabled: false });
    }

    const eventId = `${nowIso.replace(/[:.]/g, '-')}_${patch.accountStatus}`;
    await db.collection('account_enforcement').doc(targetUid).collection('events').doc(eventId).set({
      uid: targetUid,
      email: normalizeEmail(targetData.email || body.email || ''),
      ...patch,
      evidence: body.evidence || null,
      createdAt: nowIso,
    });
    await db.collection('security_events').add({
      uid: targetUid,
      email: normalizeEmail(targetData.email || body.email || ''),
      type: `account_${patch.accountStatus}`,
      riskLevel: patch.accountStatus === ACCOUNT_STATUS.ACTIVE ? 'none' : 'high',
      createdAt: nowIso,
      resolvedAt: patch.accountStatus === ACCOUNT_STATUS.ACTIVE ? nowIso : null,
      evidence: {
        reason: patch.statusReason,
        operatorEmail: patch.statusUpdatedBy,
      },
    });

    res.json({ ok: true, uid: targetUid, patch });
  } catch (e) {
    sendFunctionError(res, e, 'Nao foi possivel atualizar status da conta.');
  }
});

exports.getStudyPayload = functions.region('southamerica-east1').https.onRequest(async (req, res) => {
  setBasicCors(res);
  if (req.method === 'OPTIONS') return res.status(204).send('');
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

  try {
    const { decoded, userData } = await verifyFirebaseRequest(req);
    if (accountNeedsTerms(userData)) {
      throw httpError(403, 'Aceite os termos atuais antes de carregar conteudo premium.', 'terms_required');
    }
    res.json({
      ok: true,
      shadow: true,
      uid: decoded.uid,
      email: normalizeEmail(decoded.email || userData.email || ''),
      access: {
        plano: userData.plano || 'gratuito',
        modulosAcesso: Array.isArray(userData.modulosAcesso) ? userData.modulosAcesso : null,
      },
      note: 'Endpoint sombra para migracao futura do conteudo premium autenticado.',
    });
  } catch (e) {
    sendFunctionError(res, e, 'Nao foi possivel preparar payload autenticado.');
  }
});

function compactScheduleMaterias(input) {
  return (Array.isArray(input) ? input : [])
    .filter((m) => m && m.id)
    .slice(0, 12)
    .map((m) => ({
      id: String(m.id).slice(0, 80),
      nome: String(m.nome || '').slice(0, 140),
      sigla: String(m.sigla || '').slice(0, 40),
      modulo: Number(m.modulo || m.semestre || 0) || 0,
      aulas: (Array.isArray(m.aulas) ? m.aulas : []).slice(0, 80).map((a) => ({
        id: String(a.id || '').slice(0, 80),
        tema: String(a.tema || '').slice(0, 180),
      })).filter((a) => a.id),
    }))
    .filter((m) => m.aulas.length);
}

async function enforceScheduleAiLimit(db, uid) {
  const day = new Date().toISOString().slice(0, 10);
  const ref = db.collection('ai_schedule_usage').doc(`${uid}_${day}`);
  const maxDaily = Math.max(1, Math.min(20, Number(process.env.SCHEDULE_AI_DAILY_LIMIT || 5)));
  await db.runTransaction(async (tx) => {
    const snap = await tx.get(ref);
    const hits = Number(snap.exists ? snap.data()?.hits : 0) || 0;
    if (hits >= maxDaily) {
      const err = new Error('Limite diario de leitura por IA atingido. Use o modo manual ou tente amanha.');
      err.status = 429;
      throw err;
    }
    tx.set(ref, { uid, day, hits: hits + 1, updatedAt: Date.now() }, { merge: true });
  });
}

function sanitizeScheduleUpload(body) {
  let text = String(body.text || body.plainText || '').slice(0, 12000);
  const fileName = String(body.fileName || '').slice(0, 160);
  const mimeType = String(body.mimeType || '').slice(0, 120);
  const rawBase64 = String(body.base64 || '').replace(/^data:[^;]+;base64,/, '').replace(/\s+/g, '');
  const allowedMime = (
    mimeType === 'application/pdf' ||
    mimeType === 'image/png' ||
    mimeType === 'image/jpeg' ||
    mimeType === 'image/webp' ||
    mimeType === 'text/plain' ||
    mimeType === 'text/csv'
  );
  if (rawBase64 && !allowedMime) {
    const err = new Error('Tipo de arquivo nao suportado. Envie PDF, foto, CSV ou texto. Para Excel, salve como CSV.');
    err.status = 400;
    throw err;
  }
  if (rawBase64.length > 7_500_000) {
    const err = new Error('Arquivo muito grande. Envie uma versao menor ou use o modo manual.');
    err.status = 413;
    throw err;
  }
  if (!text.trim() && !rawBase64) {
    const err = new Error('Envie um arquivo ou cole o texto do cronograma.');
    err.status = 400;
    throw err;
  }
  if (rawBase64 && (mimeType === 'text/plain' || mimeType === 'text/csv')) {
    const decoded = Buffer.from(rawBase64, 'base64').toString('utf8').slice(0, 12000);
    text = [text.trim(), decoded ? `Conteudo do arquivo ${fileName || 'texto'}:\n${decoded}` : '']
      .filter(Boolean)
      .join('\n\n')
      .slice(0, 12000);
    return { text, fileName, mimeType: 'text/plain', base64: '' };
  }
  return { text, fileName, mimeType, base64: rawBase64 };
}

function buildScheduleAiPrompt({ body, materias, upload }) {
  return [
    'Voce extrai cronograma de provas do MedGradPlus.',
    'Retorne apenas JSON no schema solicitado.',
    'Objetivo: identificar modulo, sala/turma A-J, datas P1/P2/AV2 e quais aulas caem na P1 por disciplina.',
    'Use somente ids de aulas existentes na lista abaixo. Se estiver incerto, deixe vazio e marque confidence como low.',
    'Nao invente aula, materia, data ou sala.',
    `Contexto informado pelo aluno: modulo=${body.module || ''}; sala=${body.room || ''}.`,
    upload.text ? `Texto colado pelo aluno:\n${upload.text}` : '',
    `Materias e aulas validas:\n${JSON.stringify(materias)}`,
  ].filter(Boolean).join('\n\n');
}

async function generateScheduleDraftWithGemini({ apiKey, body, materias, upload }) {
  const { GoogleGenAI } = require('@google/genai');
  const ai = new GoogleGenAI({ apiKey });
  const parts = [{ text: buildScheduleAiPrompt({ body, materias, upload }) }];
  if (upload.base64) {
    parts.push({ inlineData: { mimeType: upload.mimeType, data: upload.base64 } });
  }
  const response = await ai.models.generateContent({
    model: process.env.GEMINI_SCHEDULE_MODEL || process.env.GEMINI_MODEL || 'gemini-2.5-flash-lite',
    contents: [{ role: 'user', parts }],
    config: {
      responseMimeType: 'application/json',
      responseSchema: SCHEDULE_AI_SCHEMA,
      temperature: 0.15,
      topP: 0.8,
      maxOutputTokens: 1800,
    },
  });
  return response?.text || '{}';
}

exports.parseStudySchedule = functions
  .runWith({ secrets: ['GEMINI_API_KEY'], memory: '512MB', timeoutSeconds: 60 })
  .region('southamerica-east1')
  .https.onRequest(async (req, res) => {
    setBasicCors(res);
    if (req.method === 'OPTIONS') return res.status(204).send('');
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

    try {
      const { decoded } = await verifyScheduleRequest(req);
      const db = admin.firestore();
      await enforceScheduleAiLimit(db, decoded.uid);
      const body = req.body || {};
      const materias = compactScheduleMaterias(body.materias);
      if (!materias.length) return res.status(400).json({ error: 'Catalogo de materias ausente.' });
      const upload = sanitizeScheduleUpload(body);
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) throw new Error('Secret GEMINI_API_KEY nao configurado.');
      const raw = await generateScheduleDraftWithGemini({ apiKey, body, materias, upload });
      const draft = normalizeAiScheduleDraft(raw, materias);
      draft.module = draft.module || Number(body.module || 0) || null;
      draft.room = draft.room || normalizeRoom(body.room);
      draft.p2LessonsByMateria = buildDefaultP2Lessons(materias, draft.p1LessonsByMateria);
      res.json({ draft, source: 'ai_draft' });
    } catch (e) {
      console.error('parseStudySchedule error:', e);
      const status = e?.status || 500;
      res.status(status).json({
        error: status >= 500 ? 'Nao foi possivel analisar o cronograma agora. Use o modo manual.' : e.message,
        code: e?.code || 'schedule_ai_error',
      });
    }
  });

exports.confirmStudyScheduleTemplate = functions
  .region('southamerica-east1')
  .https.onRequest(async (req, res) => {
    setBasicCors(res);
    if (req.method === 'OPTIONS') return res.status(204).send('');
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

    try {
      const { decoded, userData } = await verifyScheduleRequest(req);
      const body = req.body || {};
      const schedule = body.schedule || {};
      const moduleNum = Number(schedule.module || userData.modulo || userData.semestre || 0) || 0;
      const room = normalizeRoom(schedule.room);
      const examDates = {
        p1: normalizeDateKey(schedule.examDates?.p1),
        p2: normalizeDateKey(schedule.examDates?.p2),
        av2: normalizeDateKey(schedule.examDates?.av2),
      };
      if (!moduleNum || !room || !examDates.p1) {
        return res.status(400).json({ error: 'Modulo, sala e data da P1 sao obrigatorios para template.' });
      }
      const facultyId = String(userData.faculdadeId || userData.facultyId || 'uninove');
      const campusId = String(userData.campusId || 'vergueiro');
      const templateId = buildTemplateId({ facultyId, campusId, module: moduleNum, room, examDates });
      const ref = admin.firestore().collection('schedule_templates').doc(templateId);
      const templatePayload = {
        facultyId,
        campusId,
        module: moduleNum,
        room,
        examDates,
        p1LessonsByMateria: schedule.p1LessonsByMateria || {},
        p2LessonsByMateria: schedule.p2LessonsByMateria || {},
        source: schedule.source || 'manual',
      };
      await ref.set({
        ...templatePayload,
        templateHash: hashScheduleTemplate(templatePayload),
        updatedAt: new Date().toISOString(),
        lastConfirmedBy: decoded.uid,
        confirmedCount: admin.firestore.FieldValue.increment(1),
      }, { merge: true });
      res.json({ templateId });
    } catch (e) {
      console.error('confirmStudyScheduleTemplate error:', e);
      const status = e?.status || 500;
      res.status(status).json({ error: status >= 500 ? 'Nao foi possivel salvar o template.' : e.message });
    }
  });
