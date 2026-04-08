/**
 * Lista preços ativos do Stripe para copiar os price_... para stripe-config.js.
 *
 * Uso (PowerShell):
 *   $env:STRIPE_SECRET_KEY="sk_test_..." ; node scripts/list-stripe-prices.mjs
 *
 * Use a secret key de teste ou live (Dashboard → Developers → API keys).
 * Chaves restritas podem não ter permissão de listagem — use a secret key completa para este script local.
 */

const key = process.env.STRIPE_SECRET_KEY;
if (!key || !key.startsWith('sk_')) {
  console.error('Defina STRIPE_SECRET_KEY com a Secret key (sk_test_... ou sk_live_...).');
  process.exit(1);
}

const url = new URL('https://api.stripe.com/v1/prices');
url.searchParams.set('active', 'true');
url.searchParams.set('limit', '100');

const res = await fetch(url, {
  headers: { Authorization: `Bearer ${key}` },
});

const body = await res.json();
if (!res.ok) {
  console.error('Stripe API:', body.error?.message || body);
  process.exit(1);
}

const rows = (body.data || []).map((p) => ({
  priceId: p.id,
  unit_amount: p.unit_amount,
  currency: p.currency,
  type: p.type,
  product: typeof p.product === 'string' ? p.product : p.product?.id,
}));

rows.sort((a, b) => (a.unit_amount || 0) - (b.unit_amount || 0));

console.log('\nPreços ativos (amount em centavos BRL: 5990 = R$59,90 | 16990 = R$169,90):\n');
for (const r of rows) {
  const brl = r.currency === 'brl' && r.unit_amount != null
    ? ` ≈ R$ ${(r.unit_amount / 100).toFixed(2).replace('.', ',')}`
    : '';
  console.log(`  ${r.priceId}  |  ${r.unit_amount} ${r.currency}${brl}  |  type=${r.type}  |  product=${r.product}`);
}
console.log('\nCole em stripe-config.js:');
console.log('  pricePorModulo: \'price_...\'   ← R$ 59,90');
console.log('  priceCiclo:     \'price_...\'   ← R$ 169,90\n');
