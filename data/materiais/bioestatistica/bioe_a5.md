# Bioestatística — Aula 5: Análise Inferencial — Testes de Hipóteses

**Disciplina:** Bioestatística e Estudos em Saúde
**Módulo:** 4 | **Tempo de estudo sugerido:** 10-15 min

---

## Relevância Clínica e Acadêmica

Toda afirmação científica sobre eficácia de um tratamento, associação entre fator de risco e doença, ou diferença entre grupos é sustentada por um teste de hipótese. Saber interpretar um valor-p, distinguir significância estatística de relevância clínica e reconhecer os tipos de erro é competência essencial tanto para a prova quanto para a leitura crítica de artigos científicos. A Uninove cobra esses conceitos diretamente e também embutidos em questões de epidemiologia e ensaio clínico.

---

## 1. A Lógica do Teste de Hipóteses

Um teste de hipóteses começa pela formulação de duas hipóteses opostas. A **hipótese nula (H0)** afirma que não existe efeito, diferença ou associação — é a posição de ceticismo científico. A **hipótese alternativa (H1 ou Ha)** afirma que existe um efeito real. O teste avalia a probabilidade de observar os dados obtidos (ou dados mais extremos) assumindo que H0 é verdadeira — esse é o valor-p.

O objetivo não é provar a hipótese alternativa, mas sim reunir evidências suficientes para rejeitar a hipótese nula. A analogia jurídica é conveniente: H0 é "inocente até prova em contrário", e o valor-p define quão improvável seria observar esses resultados se a inocência fosse verdade. O pesquisador define antes do estudo qual limiar de probabilidade aceitará para rejeitar H0 — esse é o nível de significância alfa.

---

## 2. Valor-p — Definição Correta e Erros Comuns

O **valor-p** é a probabilidade de obter uma estatística de teste igual ou mais extrema do que a observada, **supondo que H0 seja verdadeira**. É uma probabilidade condicional: P(dados | H0).

Interpretações **incorretas** sobre o valor-p são cobradas com frequência:
- [ERRADO] "Probabilidade de H0 ser verdadeira"
- [ERRADO] "Probabilidade de o resultado ser ao acaso" (impreciso)
- [ERRADO] "O tamanho do efeito" — p não informa magnitude
- [CORRETO] "Probabilidade de obter esses resultados — ou mais extremos — se H0 for verdadeira"

> **Dica de Prova:** Um p = 0,03 significa que, se não houvesse diferença real, haveria apenas 3% de chance de observar uma diferença tão grande ou maior por acaso. Com alfa = 0,05, rejeita-se H0.

---

## 3. Nível de Significância e Decisão

O **nível de significância alfa** é o limiar pré-definido para decidir quando rejeitar H0. Convencionalmente alfa = 0,05 (5%).

**Regra de decisão:**
- Se p menor ou igual a alfa: rejeita H0 — resultado **estatisticamente significativo**
- Se p maior que alfa: não rejeita H0 — resultado não significativo

> **Pegadinha:** "Não rejeitar H0" NAO significa "provar que H0 é verdadeira". Significa apenas que as evidências não foram suficientes para rejeitá-la com o n e alfa escolhidos.

---

## 4. Erros Tipo I e Tipo II

### 4.1 Erro Tipo I (alfa) — Falso Positivo
Ocorre quando se rejeita H0 sendo ela verdadeira — ou seja, conclui-se que há efeito quando na verdade não há. A probabilidade de cometer erro tipo I é exatamente alfa. Com alfa = 0,05, aceita-se 5% de chance de falso positivo.

Exemplo prático: o medicamento não funciona, mas o estudo conclui que sim.

### 4.2 Erro Tipo II (beta) — Falso Negativo
Ocorre quando não se rejeita H0 sendo ela falsa — o estudo não detecta um efeito que existe. A probabilidade de erro tipo II é beta. Convencionalmente beta deve ser menor ou igual a 0,20 (20%).

Exemplo prático: o medicamento funciona, mas o estudo não detecta o efeito (normalmente por amostra insuficiente — estudo subpotente).

### 4.3 Poder Estatístico (1 menos beta)
O **poder** é a probabilidade de detectar um efeito real quando ele existe. Poder = 1 menos beta. Convencionalmente deve ser no mínimo 80%. Aumenta com: maior n, maior tamanho de efeito, menor variabilidade e alfa mais permissivo.

| Decisão do estudo | H0 Verdadeira | H0 Falsa |
|-------------------|-----------|----|
| Rejeita H0 | Erro tipo I (alfa) | Decisao correta = Poder |
| Nao rejeita H0 | Decisao correta | Erro tipo II (beta) |

---

## 5. Intervalo de Confiança (IC 95%)

O **intervalo de confiança de 95%** é o intervalo que, repetindo o estudo muitas vezes, conteria o parâmetro verdadeiro em 95% das amostras. Fornece informação tanto sobre a magnitude do efeito quanto sobre a precisão da estimativa.

Relação com o valor-p: se o IC 95% de uma diferença **não contém o zero** (para diferenças entre médias) ou **não contém 1** (para razões como RR e OR), o resultado é significativo com alfa = 0,05, equivalente a p menor ou igual a 0,05.

> **Dica de Prova:** IC 95% é mais informativo que o valor-p isolado porque informa tanto a direção quanto a precisão do efeito. Um p = 0,001 com IC 95% estreito e um p = 0,001 com IC 95% amplíssimo têm o mesmo nível de significância, mas impacto clínico muito diferente.

---

## 6. Teste Uni vs Bilateral

**Teste bilateral (two-tailed):** testa se existe diferença em qualquer direção — maior ou menor. É o padrão para a maioria dos estudos clínicos, pois na maioria das situações o efeito contrário também seria clinicamente relevante.

**Teste unilateral (one-tailed):** testa diferença em apenas uma direção específica. Tem mais poder para detectar diferença naquela direção, porém não deve ser usado quando o efeito contrário seria clinicamente importante. É raramente justificado — e seu uso inadequado pode ser manipulação estatística.

---

## 7. Significância Estatística vs Relevância Clínica

Com amostras muito grandes, diferenças mínimas e clinicamente irrelevantes tornam-se estatisticamente significativas. Exemplo: um RCT com 50.000 pacientes detecta que um anti-hipertensivo reduz a PA em 0,5 mmHg com p menor que 0,0001. A diferença é real e estatisticamente significativa, mas tem pouca importância clínica. O julgamento correto exige avaliar também a magnitude do efeito, o NNT e o impacto na morbimortalidade.

---

## Pontos-Chave para Prova

- **H0:** hipótese da ausência de efeito — é a que o teste tenta rejeitar.
- **Valor-p:** probabilidade dos dados observados (ou mais extremos) se H0 for verdadeira.
- **p menor ou igual a 0,05:** rejeita H0 — resultado estatisticamente significativo.
- **Erro tipo I (alfa):** falso positivo — rejeita H0 verdadeira.
- **Erro tipo II (beta):** falso negativo — não rejeita H0 falsa.
- **Poder (1 menos beta):** probabilidade de detectar efeito real — minimo de 80%.
- **IC 95% sem o zero (diferenças) ou sem o 1 (razões):** resultado significativo.
- **p pequeno nao igual a efeito grande** — tamanho amostral influencia o p.

---

## Ponte com a Clínica

Na prática de medicina baseada em evidências, ao avaliar um artigo deve-se sempre verificar além do valor-p: o tamanho do efeito (RR, OR, diferença de médias), o IC 95% e o NNT. Organizações como GRADE e o movimento "New Statistics" defendem reportar efeitos com IC em vez de apenas p menor que 0,05, pois um resultado com p = 0,049 e IC 95%: (0,1% a 14%) é muito diferente clinicamente de p = 0,049 com IC 95%: (5% a 12%) — mesmo nível de significância, mas precisões completamente distintas.

---

## Pré-Prova

> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### O que você PRECISA saber

- **H0:** sem efeito. H1: com efeito.
- **Valor-p:** probabilidade dos resultados (ou mais extremos) se H0 for verdadeira.
- **p menor ou igual a 0,05:** rejeita H0. p maior que 0,05: nao rejeita (nao "prova" H0).
- **Erro tipo I:** falso positivo. Erro tipo II: falso negativo.
- **Poder = 1 menos beta:** chance de detectar efeito real. Minimo: 80%.
- **IC 95%:** se nao inclui 0 (diferencas) ou 1 (RR/OR), resultado significativo.

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Como diferenciar |
|------------|------------|-----------------|
| Erro tipo I (alfa) | Erro tipo II (beta) | Tipo I: falso positivo; Tipo II: falso negativo |
| Valor-p baixo | Efeito grande | p depende do n; efeito depende da magnitude real |
| Nao rejeitar H0 | Provar H0 verdadeira | Nunca provamos H0 — apenas falta evidencia para rejeitá-la |
| IC 95% | p-valor | IC informa precisao e magnitude; p so informa decisao binaria |

### Frase-âncora para não esquecer

> "O valor-p diz quao improvavel sao os dados SE nao ha efeito. Nao diz a probabilidade de o efeito ser real."