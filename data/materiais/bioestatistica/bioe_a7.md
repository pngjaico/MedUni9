# Bioestatística — Aula 7: Introdução à Epidemiologia Analítica

**Disciplina:** Bioestatística e Estudos em Saúde
**Módulo:** 4 | **Tempo de estudo sugerido:** 10-15 min

---

## Relevância Clínica e Acadêmica

A epidemiologia analítica é a caixa de ferramentas que permite demonstrar se uma exposição causa ou está associada a um desfecho de saúde. Identificar que tabagismo causa câncer de pulmão, que vacinação previne difteria ou que hipertensão é fator de risco para AVC — tudo isso é produto da epidemiologia analítica. A Uninove cobra medidas de associação (RR, OR), critérios de causalidade e os diferentes desenhos de estudos analíticos.

---

## 1. Da Descrição à Análise

A epidemiologia descritiva caracteriza a doença segundo pessoa (quem), lugar (onde) e tempo (quando) — gera hipóteses. A epidemiologia **analítica** vai além: testa hipóteses causais, quantifica a força de associação entre exposição e desfecho e permite inferir causalidade.

A transição de associação para causalidade é um salto lógico que exige critérios rigorosos. A mera correlação entre duas variáveis não prova que uma causa a outra — fatores de confusão, vieses e acaso podem explicar a associação observada.

---

## 2. Exposição e Desfecho

Em epidemiologia analítica, os estudos comparam grupos segundo a presença ou ausência de uma **exposição** (fator de risco, tratamento, característica) e medem a ocorrência de um **desfecho** (doença, morte, complicação, cura).

A exposição pode ser um comportamento (tabagismo), característica biológica (hipertensão), intervenção (vacina, medicamento) ou condição ambiental (exposição a asbesto). O desfecho é o evento de saúde que se quer explicar ou prevenir.

---

## 3. Medidas de Frequência de Doença

### 3.1 Incidência
Frequência de **casos novos** de uma doença em uma população durante um período de tempo. Mede o risco de desenvolver a doença. Usada em estudos de coorte.

**Incidência cumulativa** = casos novos / população em risco no inicio do periodo (proporção, 0-1)

**Taxa de incidência** = casos novos / pessoas-tempo (ex: por 1000 pessoas-ano) — usada quando o tempo de seguimento varia entre indivíduos.

### 3.2 Prevalência
Frequência de **casos existentes** (novos + antigos) em um momento específico. Mede a proporção da população que tem a doença naquele instante. Usada em estudos transversais.

Prevalência = incidência x duração média da doença (para doenças crônicas estáveis).

> **Dica de Prova:** Incidência mede RISCO (novos casos, dinamica temporal). Prevalência mede CARGA (casos atuais, fotografia). Doença que mata rapidamente tem prevalência baixa mesmo com incidência alta. Doença crônica de longa duração tem prevalência alta mesmo com incidência baixa.

---

## 4. Medidas de Associação

### 4.1 Risco Relativo (RR)
Razão entre o risco no grupo exposto e o risco no grupo não exposto. Usado em estudos de coorte (prospectivos).

RR = incidência nos expostos / incidência nos nao expostos

- RR = 1: nao ha associacao
- RR maior que 1: exposição aumenta o risco (fator de risco)
- RR menor que 1: exposição diminui o risco (fator protetor)

**RR = 3** significa que o risco no grupo exposto é 3 vezes maior (200% maior) em relação ao grupo não exposto.

### 4.2 Odds Ratio (OR)
Razão entre as odds de exposição nos casos e nos controles. Usado principalmente em estudos caso-controle.

OR = (casos expostos / casos nao expostos) / (controles expostos / controles nao expostos)

Quando a doença é rara (prevalência menor que 10%), OR aproxima-se do RR. Quando a doença é comum, OR superestima o RR.

### 4.3 Risco Atribuível (RA) e Fração Atribuível (FA)
**Risco Atribuível (RA):** diferença absoluta de incidência entre expostos e não-expostos. Indica quanto do risco pode ser atribuído especificamente à exposição.

RA = incidência nos expostos menos incidência nos nao expostos

**Fração Atribuível (FA):** proporção da incidência nos expostos que pode ser atribuída à exposição.

FA = (incidência expostos menos incidência nao expostos) / incidência expostos

---

## 5. Critérios de Causalidade de Bradford Hill

Bradford Hill (1965) propôs critérios para avaliar se uma associação observada é causal. Os principais são:

**Força da associação:** quanto maior o RR ou OR, mais difícil de ser explicado por confundimento.
**Consistência:** a associação é replicada em diferentes estudos, populações e métodos.
**Especificidade:** a exposição está associada a um desfecho específico.
**Temporalidade (obrigatório):** a exposição precede o desfecho no tempo — este é o único critério indispensável para causalidade.
**Gradiente biológico (dose-resposta):** maior exposição associada a maior risco.
**Plausibilidade biológica:** o mecanismo é biologicamente verossímil.
**Coerência:** a associação não contradiz o conhecimento biológico estabelecido.
**Evidência experimental:** experimentos controlados confirmam a relação causal.

> **Dica de Prova:** O único critério obrigatório de Bradford Hill é a **temporalidade** — a exposição DEVE preceder o desfecho. Os demais critérios aumentam a plausibilidade causal mas nenhum é individualmente indispensável.

---

## 6. Confundimento e Modificação de Efeito

### 6.1 Fator de Confusão (Confounding)
Uma terceira variável que está associada tanto à exposição quanto ao desfecho e distorce a medida de associação observada. Exemplo: a aparente associação entre porte de isqueiro e câncer de pulmão é confundida pelo tabagismo — quem porta isqueiro provavelmente fuma.

Controle do confundimento: randomização (RCT), pareamento, estratificação, regressão multivariada.

### 6.2 Modificação de Efeito (Interação)
A magnitude da associação entre exposição e desfecho varia em diferentes subgrupos da população. Exemplo: o RR de infarto por hipertensão é diferente em diabéticos e não-diabéticos. A modificação de efeito não é viés — é um achado biologicamente relevante.

---

## Pontos-Chave para Prova

- **Incidência:** casos novos, mede risco, usada em coorte.
- **Prevalência:** casos existentes, fotografia, usada em transversal.
- **RR:** usado em coorte. OR: usado em caso-controle.
- **RR = 1:** sem associacao. RR maior que 1: risco aumentado. RR menor que 1: fator protetor.
- **Temporalidade:** unico criterio obrigatorio de Bradford Hill.
- **Confundimento:** terceira variável que distorce a associação — controle por randomizacao ou regressao.
- **OR aproxima-se de RR apenas quando a doença eh rara.**

---

## Ponte com a Clínica

Os grandes estudos que embasam as diretrizes clínicas dependem de medidas de associação da epidemiologia analítica. O Framingham Heart Study, por exemplo, é uma coorte prospectiva que gerou os escores de risco cardiovascular usados diariamente na prática clínica. O estudo de casos e controles de Doll e Hill sobre tabagismo e câncer de pulmão (1950) foi pioneiro na epidemiologia analítica moderna. Entender RR, OR e critérios de causalidade é a base para interpretar evidências e questionar afirmações de risco e proteção na mídia e na literatura científica.

---

## Pré-Prova

> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### O que você PRECISA saber

- **Incidência:** novos casos. **Prevalência:** casos em um momento (novos + antigos).
- **RR:** coorte prospectiva, razão de incidências.
- **OR:** caso-controle, razão de odds de exposição.
- **RR = OR quando a doença eh rara** (prevalência menor que 10%).
- **Temporalidade:** unico criterio obrigatorio de causalidade — exposição precede desfecho.
- **Confundimento:** variavel que distorce a associação. Controle: randomizacao, pareamento, regressao.

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Como diferenciar |
|------------|------------|-----------------|
| Incidência | Prevalência | Incidencia: novos casos (risco); Prevalência: casos existentes (carga) |
| RR | OR | RR: usado em coorte; OR: usado em caso-controle |
| Confundimento | Modificacao de efeito | Confundimento: distorce — deve ser controlado; Modificacao: achado biologico real — deve ser relatado |
| Risco atribuivel | Fração atribuivel | RA: diferença absoluta; FA: proporção do risco explicada pela exposição |

### Frase-âncora para não esquecer

> "RR compara riscos em coorte. OR compara odds de exposição em caso-controle. A temporalidade é o unico criterio causal indispensavel."