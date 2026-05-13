const crypto = require('crypto');

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const GROUP_MIN_SIZE = 2;
const GROUP_MAX_SIZE = 6;

function normalizeEmail(email) {
  return String(email || '')
    .trim()
    .toLowerCase();
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

function normalizePurchaseMode(v) {
  return String(v || '').trim().toLowerCase() === 'group' ? 'group' : 'individual';
}

function normalizeModuloNum(v, maxSellableModule) {
  const n = parseInt(String(v || ''), 10);
  if (!Number.isFinite(n)) return null;
  if (n < 1 || n > maxSellableModule) return null;
  return n;
}

function coerceParticipantEmailList(input) {
  if (Array.isArray(input)) return input;
  if (typeof input === 'string') {
    return input
      .split(/[\n,;]+/)
      .map((s) => s.trim())
      .filter(Boolean);
  }
  return [];
}

function normalizeParticipantEmails(input) {
  const rawEmails = coerceParticipantEmailList(input);
  const emails = rawEmails.map(normalizeEmail).filter(Boolean);
  if (emails.length < GROUP_MIN_SIZE || emails.length > GROUP_MAX_SIZE) {
    return { error: 'Compra em grupo exige 2 a 6 emails de participantes.' };
  }
  const invalid = emails.find((email) => !EMAIL_RE.test(email));
  if (invalid) return { error: `Email de participante invalido: ${invalid}` };
  const unique = [...new Set(emails)];
  if (unique.length !== emails.length) {
    return { error: 'A compra em grupo contem emails duplicados.' };
  }
  return { emails: unique };
}

function getGroupDiscountForSize(size) {
  if (size === 2) return { percent: 10, couponKey: 'group10' };
  if (size === 3) return { percent: 15, couponKey: 'group15' };
  if (size >= 4 && size <= 6) return { percent: 20, couponKey: 'group20' };
  return null;
}

function hashParticipantEmails(emails) {
  return crypto.createHash('sha256').update(emails.join('|')).digest('hex');
}

function createGroupId() {
  return `grp_${Date.now().toString(36)}_${crypto.randomBytes(8).toString('hex')}`;
}

function getPriceForPlan(plan, cicloVariant, priceIds) {
  if (plan === 'modulo') return priceIds.modulo;
  if (plan === 'mensal') return priceIds.mensal;
  if (cicloVariant === 'clinico') return priceIds.cicloClinico;
  return priceIds.ciclo;
}

function buildServerCheckoutIntent(body, opts = {}) {
  const b = body || {};
  const rawMeta = b.metadata && typeof b.metadata === 'object' ? b.metadata : {};
  const priceIds = opts.priceIds || {};
  const couponIds = opts.couponIds || {};
  const maxSellableModule = Number(opts.maxSellableModule || 4);
  const allowClinicalCycle = opts.allowClinicalCycle === true;
  const plan = normalizePlanKey(b.plan || rawMeta.plan);
  if (!plan) return { error: 'Plano invalido.' };

  const appEmail = normalizeEmail(b.customer_email || rawMeta.app_email || '');
  if (!appEmail || !EMAIL_RE.test(appEmail)) {
    return { error: 'Email invalido.' };
  }

  const purchaseMode = normalizePurchaseMode(rawMeta.purchase_mode || b.purchase_mode);
  if (purchaseMode === 'group' && plan !== 'ciclo') {
    return { error: 'Compra em grupo esta disponivel apenas para ciclos.' };
  }

  let mode = 'payment';
  let price = null;
  let quantity = 1;
  let discounts;
  let allowPromotionCodes = true;
  let participantEmails;
  const metadata = {
    app_email: appEmail,
    plan,
  };

  if (plan === 'modulo') {
    const moduloNum = normalizeModuloNum(rawMeta.modulo_num || b.modulo_num, maxSellableModule);
    if (!moduloNum) return { error: `Modulo invalido. Venda liberada apenas para modulos 1-${maxSellableModule}.` };
    metadata.modulo_num = String(moduloNum);
    price = getPriceForPlan(plan, 'basico', priceIds);
  } else if (plan === 'mensal') {
    const moduloNum = normalizeModuloNum(rawMeta.modulo_num || b.modulo_num, maxSellableModule);
    if (!moduloNum) return { error: `Modulo invalido. Venda liberada apenas para modulos 1-${maxSellableModule}.` };
    metadata.modulo_num = String(moduloNum);
    mode = 'subscription';
    price = getPriceForPlan(plan, 'basico', priceIds);
  } else {
    const cicloVariant = normalizeCycleVariant(rawMeta.ciclo_variant || b.ciclo_variant);
    if (cicloVariant === 'clinico' && !allowClinicalCycle) {
      return { error: 'Ciclo clinico ainda nao disponivel para compra.' };
    }
    metadata.ciclo_variant = cicloVariant;
    price = getPriceForPlan(plan, cicloVariant, priceIds);

    if (purchaseMode === 'group') {
      const normalized = normalizeParticipantEmails(rawMeta.participant_emails || b.participant_emails);
      if (normalized.error) return { error: normalized.error };
      participantEmails = normalized.emails;
      const discount = getGroupDiscountForSize(participantEmails.length);
      const coupon = discount ? couponIds[discount.couponKey] : null;
      if (!discount || !coupon) {
        return { error: 'Cupom Stripe da compra em grupo nao configurado no servidor.' };
      }
      quantity = participantEmails.length;
      discounts = [{ coupon }];
      allowPromotionCodes = false;
      metadata.purchase_mode = 'group';
      metadata.group_id = createGroupId();
      metadata.group_size = String(participantEmails.length);
      metadata.group_discount_percent = String(discount.percent);
      metadata.participant_emails_hash = hashParticipantEmails(participantEmails);
    }
  }

  if (!price || !String(price).startsWith('price_')) {
    return { error: 'Price ID Stripe nao configurado para este plano.' };
  }

  const cupom = String(rawMeta.cupom || b.cupom || '').trim().toUpperCase();
  if (cupom) metadata.cupom = cupom.slice(0, 40);

  const embId = String(rawMeta.emb_id || b.emb_id || '').trim();
  if (embId.startsWith('emb_')) metadata.emb_id = embId.slice(0, 80);

  return {
    mode,
    price,
    quantity,
    metadata,
    customerEmail: appEmail,
    discounts,
    allowPromotionCodes,
    participantEmails,
  };
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
    if (!Number.isFinite(moduloNum) || moduloNum < 1 || moduloNum > 12) return null;
    return {
      plano: 'modulo',
      modulosAcesso: [moduloNum],
      expira: null,
    };
  }
  if (plan === 'mensal') {
    if (!Number.isFinite(moduloNum) || moduloNum < 1 || moduloNum > 12) return null;
    return {
      plano: 'mensal',
      modulosAcesso: [moduloNum],
      expira: null,
    };
  }
  return null;
}

function buildGroupAccessGrantsForSession(session, participantEmails, nowIso = new Date().toISOString()) {
  const meta = session.metadata || {};
  const resolved = resolveGrantFromSession(session);
  const normalized = normalizeParticipantEmails(participantEmails);
  if (!resolved || normalized.error) return [];
  return normalized.emails.map((email) => ({
    email,
    payload: {
      ativo: true,
      plano: resolved.plano,
      modulosAcesso: resolved.modulosAcesso,
      maxDispositivos: 2,
      expira: resolved.expira || null,
      nota: `Stripe ${session.id} - grupo ${meta.group_id || ''}`,
      atualizadoEm: nowIso,
      accessSource: 'stripe',
      stripeSessionId: session.id,
      stripePaymentIntentId: session.payment_intent || null,
      stripeCustomerId: session.customer || null,
      stripeSubscriptionId: session.subscription || null,
      stripeGroupPurchaseId: meta.group_id || null,
      stripeGroupSize: parseInt(meta.group_size || String(normalized.emails.length), 10) || normalized.emails.length,
    },
  }));
}

module.exports = {
  GROUP_MAX_SIZE,
  GROUP_MIN_SIZE,
  buildGroupAccessGrantsForSession,
  buildServerCheckoutIntent,
  getGroupDiscountForSize,
  normalizeEmail,
  normalizeParticipantEmails,
  resolveGrantFromSession,
};
