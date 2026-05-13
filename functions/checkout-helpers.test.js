const test = require('node:test');
const assert = require('node:assert/strict');

const {
  buildServerCheckoutIntent,
  buildGroupAccessGrantsForSession,
  resolveGrantFromSession,
} = require('./checkout-helpers');

const priceIds = Object.freeze({
  modulo: 'price_modulo',
  ciclo: 'price_ciclo_basico',
  cicloClinico: 'price_ciclo_clinico',
  mensal: 'price_mensal',
});

const couponIds = Object.freeze({
  group10: 'coupon_group_10',
  group15: 'coupon_group_15',
  group20: 'coupon_group_20',
});

const options = Object.freeze({
  priceIds,
  couponIds,
  maxSellableModule: 6,
  allowClinicalCycle: true,
});

test('rejects group checkout with fewer than two participant emails', () => {
  const result = buildServerCheckoutIntent({
    plan: 'ciclo',
    metadata: {
      app_email: 'pagador@example.com',
      ciclo_variant: 'basico',
      purchase_mode: 'group',
      participant_emails: ['pagador@example.com'],
    },
  }, options);

  assert.match(result.error, /2 a 6 emails/i);
});

test('rejects group checkout with duplicate participant emails', () => {
  const result = buildServerCheckoutIntent({
    plan: 'ciclo',
    metadata: {
      app_email: 'pagador@example.com',
      ciclo_variant: 'basico',
      purchase_mode: 'group',
      participant_emails: ['aluno@example.com', ' ALUNO@example.com '],
    },
  }, options);

  assert.match(result.error, /duplicados/i);
});

test('builds a two-person group checkout with 10 percent coupon and no promotion code field', () => {
  const result = buildServerCheckoutIntent({
    plan: 'ciclo',
    metadata: {
      app_email: 'pagador@example.com',
      ciclo_variant: 'basico',
      purchase_mode: 'group',
      participant_emails: ['pagador@example.com', 'colega@example.com'],
    },
  }, options);

  assert.equal(result.error, undefined);
  assert.equal(result.mode, 'payment');
  assert.equal(result.price, 'price_ciclo_basico');
  assert.equal(result.quantity, 2);
  assert.deepEqual(result.discounts, [{ coupon: 'coupon_group_10' }]);
  assert.equal(result.allowPromotionCodes, false);
  assert.equal(result.metadata.purchase_mode, 'group');
  assert.equal(result.metadata.group_size, '2');
  assert.equal(result.metadata.group_discount_percent, '10');
  assert.match(result.metadata.group_id, /^grp_/);
  assert.match(result.metadata.participant_emails_hash, /^[a-f0-9]{64}$/);
  assert.deepEqual(result.participantEmails, ['pagador@example.com', 'colega@example.com']);
});

test('builds a three-person group checkout with 15 percent coupon', () => {
  const result = buildServerCheckoutIntent({
    plan: 'ciclo',
    metadata: {
      app_email: 'pagador@example.com',
      ciclo_variant: 'basico',
      purchase_mode: 'group',
      participant_emails: ['a@example.com', 'b@example.com', 'c@example.com'],
    },
  }, options);

  assert.equal(result.quantity, 3);
  assert.deepEqual(result.discounts, [{ coupon: 'coupon_group_15' }]);
  assert.equal(result.metadata.group_discount_percent, '15');
});

test('builds four-to-six-person group checkouts with 20 percent coupon', () => {
  for (const size of [4, 5, 6]) {
    const result = buildServerCheckoutIntent({
      plan: 'ciclo',
      metadata: {
        app_email: 'pagador@example.com',
        ciclo_variant: 'clinico',
        purchase_mode: 'group',
        participant_emails: Array.from({ length: size }, (_, i) => `aluno${i}@example.com`),
      },
    }, options);

    assert.equal(result.error, undefined);
    assert.equal(result.price, 'price_ciclo_clinico');
    assert.equal(result.quantity, size);
    assert.deepEqual(result.discounts, [{ coupon: 'coupon_group_20' }]);
    assert.equal(result.metadata.group_discount_percent, '20');
  }
});

test('rejects clinical cycle checkout when clinical Stripe price is not configured', () => {
  const result = buildServerCheckoutIntent({
    plan: 'ciclo',
    metadata: {
      app_email: 'pagador@example.com',
      ciclo_variant: 'clinico',
    },
  }, {
    ...options,
    priceIds: { ...priceIds, cicloClinico: '' },
  });

  assert.match(result.error, /price id stripe/i);
});

test('rejects seven-person group checkout', () => {
  const result = buildServerCheckoutIntent({
    plan: 'ciclo',
    metadata: {
      app_email: 'pagador@example.com',
      ciclo_variant: 'clinico',
      purchase_mode: 'group',
      participant_emails: Array.from({ length: 7 }, (_, i) => `aluno${i}@example.com`),
    },
  }, options);

  assert.match(result.error, /2 a 6 emails/i);
});

test('keeps individual checkout behavior with promotion codes enabled', () => {
  const result = buildServerCheckoutIntent({
    plan: 'ciclo',
    metadata: {
      app_email: 'pagador@example.com',
      ciclo_variant: 'basico',
    },
  }, options);

  assert.equal(result.error, undefined);
  assert.equal(result.quantity, 1);
  assert.equal(result.allowPromotionCodes, true);
  assert.equal(result.discounts, undefined);
  assert.equal(result.price, 'price_ciclo_basico');
});

test('builds individual module checkout for modules 5 and 6', () => {
  for (const moduloNum of [5, 6]) {
    const result = buildServerCheckoutIntent({
      plan: 'modulo',
      metadata: {
        app_email: 'aluno@example.com',
        modulo_num: String(moduloNum),
      },
    }, options);

    assert.equal(result.error, undefined);
    assert.equal(result.mode, 'payment');
    assert.equal(result.price, 'price_modulo');
    assert.equal(result.quantity, 1);
    assert.equal(result.metadata.plan, 'modulo');
    assert.equal(result.metadata.modulo_num, String(moduloNum));
  }
});

test('builds monthly checkout for module 6', () => {
  const result = buildServerCheckoutIntent({
    plan: 'mensal',
    metadata: {
      app_email: 'aluno@example.com',
      modulo_num: '6',
    },
  }, options);

  assert.equal(result.error, undefined);
  assert.equal(result.mode, 'subscription');
  assert.equal(result.price, 'price_mensal');
  assert.equal(result.metadata.modulo_num, '6');
});

test('rejects individual module 7 while only modules 1 to 6 are sellable', () => {
  const result = buildServerCheckoutIntent({
    plan: 'modulo',
    metadata: {
      app_email: 'aluno@example.com',
      modulo_num: '7',
    },
  }, options);

  assert.match(result.error, /modulos 1-6/i);
});

test('resolves clinical cycle access for checkout session', () => {
  const grant = resolveGrantFromSession({
    metadata: {
      plan: 'ciclo',
      ciclo_variant: 'clinico',
    },
  });

  assert.deepEqual(grant, {
    plano: 'ciclo_clinico',
    modulosAcesso: [5, 6, 7, 8],
    expira: null,
  });
});

test('builds one access grant for each group participant', () => {
  const grants = buildGroupAccessGrantsForSession({
    id: 'cs_test_123',
    customer: 'cus_123',
    payment_intent: 'pi_123',
    subscription: null,
    metadata: {
      plan: 'ciclo',
      ciclo_variant: 'clinico',
      purchase_mode: 'group',
      group_id: 'grp_test',
      group_size: '2',
    },
  }, ['a@example.com', 'b@example.com']);

  assert.deepEqual(grants.map((g) => g.email), ['a@example.com', 'b@example.com']);
  assert.deepEqual(grants.map((g) => g.payload.plano), ['ciclo_clinico', 'ciclo_clinico']);
  assert.deepEqual(grants[0].payload.modulosAcesso, [5, 6, 7, 8]);
  assert.equal(grants[0].payload.stripeGroupPurchaseId, 'grp_test');
});
