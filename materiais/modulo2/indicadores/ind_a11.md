# IND — Aula 11: Análise Inferencial — Testes de Hipóteses

**Disciplina:** Indicadores de Saúde  
**Módulo:** 2 | **Tempo de estudo sugerido:** 15-20 min

---

## Relevância Clínica e Acadêmica

Testes de hipóteses são o núcleo da leitura crítica de resultados em saúde. Na graduação, a banca costuma cobrar se você entende a lógica de comparar o que foi observado com o que seria esperado pelo acaso, sem transformar estatística em "verdade absoluta".

Na prática clínica e em saúde coletiva, essa base evita dois erros frequentes: chamar de "efetivo" um resultado que pode ser ruído e descartar um efeito plausível por interpretação superficial de p-valor.

### Figura sugerida

**Figura-ID:** `IND-A11-F01`

- **Momento:** após a explicação inicial de H0/H1.
- **O que mostrar:** fluxograma simples da decisão inferencial: pergunta clínica -> H0/H1 -> teste -> p-valor/IC -> conclusão clínica.
- **Tipo sugerido:** esquema didático.
- **Legenda (rascunho):** "Teste de hipótese é um processo de decisão, não um número isolado."
- **Notas (opcional):** layout vertical para leitura em mobile.

## Fundamentos: H0, H1 e decisão estatística

A **hipótese nula (H0)** representa o cenário de ausência de diferença, ausência de associação ou ausência de efeito. A **hipótese alternativa (H1)** representa a existência de diferença/associação/efeito.

Em termos práticos, o teste pergunta: "Se H0 fosse verdadeira, quão improvável seria observar dados iguais ou mais extremos do que estes?" A resposta vem na forma de p-valor.

- **Regra operacional:** definir H0/H1 antes de olhar os resultados reduz viés de interpretação.
- **Ponto de corte (alfa):** em graduação, costuma-se usar 0,05, mas isso é convenção, não lei da natureza.

> **Dica de Prova:** escreva explicitamente H0 e H1 na sua cabeça antes de interpretar p-valor; isso evita inverter a lógica da questão.

> **Pegadinha:** concluir que "p > 0,05 prova que não há efeito". Na verdade, indica que faltou evidência para rejeitar H0 naquele cenário.

## Erros tipo I e tipo II, poder e tamanho amostral

O **erro tipo I (alfa)** ocorre quando rejeitamos H0 sendo ela verdadeira (falso positivo). O **erro tipo II (beta)** ocorre quando não rejeitamos H0 sendo ela falsa (falso negativo).

Existe trade-off entre esses erros: reduzir muito alfa pode aumentar beta se a amostra não for adequada.

O **poder estatístico (1 - beta)** é a probabilidade de detectar um efeito que realmente existe. Em linguagem de prova: estudo com baixo poder pode perder efeitos clinicamente relevantes.

| Conceito | Definição curta | Impacto em prova e prática |
|----------|------------------|----------------------------|
| Erro tipo I | Detectar efeito inexistente | Pode levar a condutas desnecessárias |
| Erro tipo II | Não detectar efeito real | Pode atrasar intervenção útil |
| Poder | Chance de identificar efeito verdadeiro | Quanto maior o poder, menor risco de falso negativo |
| Tamanho da amostra | Número de observações do estudo | Amostra pequena tende a instabilidade e baixo poder |

## p-valor, intervalo de confiança e relevância clínica

O **p-valor** quantifica compatibilidade dos dados com H0. Ele **não** informa magnitude do efeito e **não** substitui interpretação clínica.

O **intervalo de confiança (IC)** adiciona direção e precisão da estimativa. Em graduação, é comum usar IC95% para verificar consistência dos resultados.

- Se o IC é muito amplo, a estimativa é imprecisa.
- Se o IC inclui o valor nulo (ex.: diferença = 0; razão = 1), em geral não há significância naquele nível.
- Mesmo com significância estatística, a decisão clínica depende do tamanho do efeito e contexto do paciente/população.

### Figura sugerida

**Figura-ID:** `IND-A11-F02`

- **Momento:** após a leitura de p-valor e IC.
- **O que mostrar:** comparação visual de dois estudos com mesmo p-valor e ICs diferentes (um estreito, outro amplo).
- **Tipo sugerido:** infográfico comparativo.
- **Legenda (rascunho):** "Mesmo p-valor, diferentes níveis de precisão."
- **Notas (opcional):** destacar visualmente o valor nulo no eixo.

## Escolha de testes básicos na graduação (paramétrico vs não paramétrico)

A escolha do teste depende de três perguntas simples:

1. Qual é o tipo de variável (contínua, categórica, ordinal)?
2. Quantos grupos/comparações estão sendo avaliados?
3. Há pressupostos para métodos paramétricos (distribuição aproximadamente normal, variâncias aceitáveis, independência)?

Quando os pressupostos são razoáveis, testes **paramétricos** tendem a ter maior poder. Quando não são, testes **não paramétricos** oferecem alternativa robusta.

| Cenário de graduação | Paramétrico (quando cabe) | Não paramétrico (alternativa) | Uso típico |
|----------------------|---------------------------|--------------------------------|-----------|
| 2 grupos independentes, variável contínua | t de Student independente | Mann-Whitney | Comparar média/distribuição entre grupos |
| 2 medidas pareadas (antes/depois) | t pareado | Wilcoxon pareado | Avaliar mudança no mesmo indivíduo |
| 3+ grupos independentes | ANOVA | Kruskal-Wallis | Comparar grupos múltiplos |
| Associação entre categóricas | Qui-quadrado | Exato de Fisher (amostra pequena) | Proporções/frequências |
| Correlação entre contínuas | Pearson | Spearman | Força e direção de associação |

## Tabela de decisão rápida para prova

Use esta sequência como algoritmo mental:

| Passo | Pergunta de decisão | Se "sim" | Se "não" |
|------|----------------------|-----------|-----------|
| 1 | Variável principal é categórica? | Pense em qui-quadrado/Fisher | Vá para passo 2 |
| 2 | Variável principal é contínua/ordinal? | Vá para passo 3 | Reavalie enunciado |
| 3 | São 2 grupos? | Vá para passo 4 | Considere ANOVA/Kruskal |
| 4 | Dados parecem adequados a paramétrico? | t (independente ou pareado) | Mann-Whitney/Wilcoxon |
| 5 | Objetivo é correlação? | Pearson (paramétrico) | Spearman (não paramétrico/ordinal) |

## Mini-casos de aplicação

**Caso 1 (falso positivo em leitura apressada):**
Estudo pequeno encontra p = 0,04 para redução de dor com nova intervenção, mas IC95% é amplo e efeito absoluto mínimo. Interpretação correta: há sinal estatístico, porém precisão baixa e benefício clínico incerto.

**Caso 2 (p > 0,05 não é "efeito zero"):**
Comparação de duas condutas mostra p = 0,08, tendência favorável e IC compatível com benefício moderado. Interpretação correta: resultado inconclusivo, possivelmente por baixo poder; não autoriza afirmar equivalência.

**Caso 3 (escolha do teste):**
Pressão arterial antes e depois da intervenção no mesmo grupo. Se distribuição de diferenças for adequada, usar t pareado; se não, Wilcoxon pareado.

## Ponte com a Clínica

Ao ler artigo na prática, não pare no "deu significativo". Faça três perguntas curtas:

- O resultado rejeita H0 com coerência metodológica?
- O IC é preciso o suficiente para decisão real?
- O tamanho do efeito muda conduta ou é apenas estatisticamente detectável?

Essa tríade (significância + precisão + relevância) é exatamente o que diferencia acerto mecânico de raciocínio clínico maduro.

---

## Pontos-Chave para Prova

- **H0 e H1** estruturam toda a inferência e devem ser definidos antes da análise.
- **Erro tipo I** é falso positivo; **erro tipo II** é falso negativo.
- **Poder** baixo aumenta chance de perder efeito verdadeiro.
- **p-valor** não mede magnitude nem importância clínica.
- **IC95%** ajuda a julgar precisão e plausibilidade do efeito.
- **Teste estatístico** deve combinar tipo de variável, desenho e pressupostos.
- **Paramétrico vs não paramétrico** é decisão de adequação metodológica, não de preferência pessoal.

---

## Pré-Prova

> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### Síntese para a prova

Na questão de testes de hipóteses, a banca quer ver se você entende a lógica de decisão. Primeiro, identifique H0 (sem efeito) e H1 (com efeito). Depois, interprete p-valor como compatibilidade dos dados com H0, sem tratá-lo como medida de tamanho de efeito.

Em seguida, conecte erro tipo I (falso positivo), erro tipo II (falso negativo) e poder estatístico. Questão com amostra pequena pode falhar em detectar efeito real; por isso, p > 0,05 não é prova de ausência de efeito.

Finalize com intervalo de confiança: ele mostra direção e precisão da estimativa. Em prova e prática, conclusão boa combina significância estatística, precisão (IC) e relevância clínica.

Para estudar por esta plataforma sem perder desempenho em prova, aplique a sintese em um micro-cenario numerico: identifique qual medida deve ser usada, execute uma conta simples (ou interprete a grandeza apresentada) e finalize com a decisao clinico-epidemiologica mais defensavel. Esse roteiro reduz erro por decoracao isolada e aumenta acerto em questoes de interpretacao.

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Como diferenciar |
|------------|------------|-----------------|
| H0 não rejeitada | H0 verdadeira | Não rejeitar H0 significa evidência insuficiente, não confirmação absoluta |
| p-valor baixo | Efeito grande | p indica compatibilidade com H0; magnitude vem da estimativa e do IC |
| Erro tipo I | Erro tipo II | Tipo I cria falso efeito; tipo II perde efeito real |
| Paramétrico | Não paramétrico | Paramétrico exige pressupostos; não paramétrico é alternativa robusta |
| Significância estatística | Relevância clínica | Significância pode existir sem benefício clínico relevante |

### Frase-âncora para não esquecer

> "Teste de hipótese decide contra o acaso; decisão clínica decide a favor do paciente."