/**
 * IDs de produto Stripe (prod_...). Os price_... são resolvidos no app via getPrices + Firestore
 * (sincronizado pela extensão + webhook). Se ainda não sincronizou, preencha pricePorModulo / priceCiclo.
 */
(function () {
  window.__STRIPE_PAYMENTS__ = {
    customersCollection: 'customers',
    productsCollection: 'products',

    productPorModulo: 'prod_UHaKhhuTVxmZfZ',
    productCiclo: 'prod_UHaKas448vMkbt',
    /** Assinatura mensal — reservado (botão opcional no futuro) */
    productMensal: 'prod_UHaK1Edg46rsoq',

    /** Valores em centavos BRL para casar com o preço default no Stripe */
    unitAmountModulo: 5990,
    unitAmountCiclo: 16990,

    /** Price IDs configurados no Stripe */
    pricePorModulo: 'price_1TJ1A9EIc3OhAJD3rXkMy6dY',
    priceCiclo: 'price_1TJ1A6EIc3OhAJD3bjmeeYRT',
    /** Assinatura mensal — preço recorrente (price_...) */
    priceMensal: 'price_1TJ1ABEIc3OhAJD3OQw563Wo',
    /** Texto no card do plano mensal (ex.: "R$ 24,90/mês") */
    labelPrecoMensal: 'R$ 24,90/mês',
  };
})();
