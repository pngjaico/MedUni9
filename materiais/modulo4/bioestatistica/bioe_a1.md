# Bioestatística — Aula 1: Aplicações e Definição de Bioestatística

**Disciplina:** Bioestatística e Estudos em Saúde
**Módulo:** 4 | **Tempo de estudo sugerido:** 10-15 min

---

## Relevância Clínica e Acadêmica

Bioestatística é a ferramenta que transforma dados clínicos em conhecimento científico. Sem ela, não sabemos se um tratamento funciona, se um exame é preciso ou se uma doença está aumentando na população. A Uninove cobra bioestatística em dois contextos: interpretação de tabelas e gráficos em questões de epidemiologia, e cálculo de medidas de associação em estudos clínicos. Nesta aula, construímos o vocabulário fundamental que sustenta todas as aulas seguintes.

### Figura sugerida

**Figura-ID:** `BIOE-A1-F01`

- **Momento:** após o bloco de relevância (reserva editorial para imagem no app; aparece inline quando houver URL no catálogo).
- **O que mostrar:** definir na produção — deve ilustrar o tema central da aula de forma clara em mobile.
- **Tipo sugerido:** esquema didático | ilustração estilo atlas | infográfico | foto contextual | outro.
- **Legenda (rascunho):** a fixar junto da imagem final (campo legenda em data/materiais_figuras.json).
- **Notas (opcional):** pesquisar no Wikimedia Commons (buscaCommonsEn / buscaCommonsPt no JSON); licenças livres e atribuição.




---

## 1. O Que é Bioestatística

**Bioestatística** é a aplicação de métodos estatísticos às ciências biológicas e da saúde. Ela tem dois braços principais: a **estatística descritiva**, que organiza e resume dados observados (médias, desvios, gráficos), e a **estatística inferencial**, que usa amostras para tirar conclusões sobre populações maiores (testes de hipóteses, intervalos de confiança). Na prática clínica, você usará bioestatística toda vez que ler um artigo científico ou avaliar um indicador de saúde.

### 1.1 Por que um médico precisa saber isso?

Porque toda evidência clínica vem de estudos que usam estatística. Um ensaio clínico randomizado diz "o medicamento A reduziu a mortalidade em 30% — p < 0,05". Para interpretar esse dado corretamente — saber se é real, relevante e aplicável ao seu paciente — você precisa entender o que é valor-p, o que significa p < 0,05, o que é intervalo de confiança e o que é tamanho de efeito. Isso não é luxo acadêmico; é medicina baseada em evidências.

---

## 2. Conceitos Fundamentais

### 2.1 População vs Amostra

| Conceito | Definição | Exemplo |
|----------|----------|--------|
| **População** | Conjunto total de indivíduos de interesse | Todos os hipertensos do Brasil |
| **Amostra** | Subconjunto selecionado da população | 2.000 hipertensos de SP selecionados para estudo |
| **Parâmetro** | Medida calculada na população (μ, σ) | Pressão arterial média real do Brasil |
| **Estatística** | Medida calculada na amostra (x̄, s) | Pressão média dos 2.000 participantes |

A inferência estatística é o processo de usar a **estatística** (amostra) para estimar o **parâmetro** (população), com quantificação da incerteza por meio de intervalos de confiança e testes de hipóteses.

> **Dica de Prova:** A Uninove costuma confundir "parâmetro" e "estatística". Parâmetro = população (letra grega: μ, σ). Estatística = amostra (letra latina: x̄, s).

### 2.2 Variável vs Constante

Uma **variável** é uma característica que varia entre os indivíduos do estudo — idade, pressão arterial, sexo, diagnóstico. Uma **constante** tem o mesmo valor para todos. Na análise estatística, trabalhamos com variáveis; constantes não trazem informação.

### 2.3 Dado vs Informação

**Dado** é o registro bruto: "120 mmHg". **Informação** é o dado interpretado no contexto: "Esse paciente tem PA normal para sua faixa etária, sem necessidade de medicação". A bioestatística transforma dado em informação de forma sistemática e reproduzível.

---

## 3. Escalas de Medida — A Base da Classificação de Variáveis

As variáveis podem ser medidas em quatro escalas progressivas, cada uma com mais propriedades matemáticas:

| Escala | Propriedades | Exemplos | Operações válidas |
|--------|------------|---------|------------------|
| **Nominal** | Categorias sem ordem | Sexo, tipo sanguíneo, diagnóstico | = , ≠ |
| **Ordinal** | Categorias com ordem | Estadiamento tumoral, dor EVA (leve/mod/severa) | = , ≠ , < , > |
| **Intervalar** | Distâncias iguais, sem zero absoluto | Temperatura em °C, escores psicológicos | + , − |
| **Razão** | Zero absoluto + distâncias iguais | Peso, altura, FC, PA, glicemia | + , − , × , ÷ |

> **Pegadinha:** Temperatura em Celsius é intervalar — não tem zero absoluto (0°C não significa "ausência de temperatura"). Temperatura em Kelvin é de razão. Na saúde, a maioria das variáveis contínuas (peso, PA, glicemia) é de razão.

---

## 4. Fontes de Dados em Saúde

Os dados bioestatísticos na saúde pública vêm de fontes primárias e secundárias:

### 4.1 Fontes Primárias
Dados coletados pelo próprio pesquisador para o estudo em questão — questionários, exames, medições. Vantagens: controle de qualidade, variáveis definidas a priori. Desvantagem: custo e tempo.

### 4.2 Fontes Secundárias
Dados já coletados por outros, reaproveitados para nova análise:
- **DATASUS:** sistema de informação do Ministério da Saúde (SIM, SINASC, SINAN, AIH).
- **IBGE:** censos, PNS (Pesquisa Nacional de Saúde), PNAD.
- **Prontuário hospitalar:** RNDS, registros eletrônicos.

> **Dica de Prova:** O **SIM** (Sistema de Informações sobre Mortalidade) é a fonte para cálculo da taxa de mortalidade no Brasil. O **SINASC** (Sistema de Nascidos Vivos) é usado para calcular taxa de natalidade e mortalidade infantil. A Uninove adora cobrar qual sistema usar para qual indicador.

---

## 5. Tipos de Estudo — Visão Panorâmica

Antes de entrar nos estudos específicos (nas aulas seguintes), é útil ter o mapa:

| Tipo | Observacional/Experimental | Temporalidade | Exemplo |
|------|--------------------------|--------------|--------|
| Transversal (corte) | Observacional | Um momento | Prevalência de HAS em SP |
| Coorte | Observacional | Longitudinal prospectivo | Tabagismo e câncer de pulmão |
| Caso-controle | Observacional | Longitudinal retrospectivo | Talidomida e focomelia |
| Ecológico | Observacional | Ecológico (grupos) | PIB per capita e expectativa de vida |
| Ensaio clínico | Experimental | Longitudinal prospectivo | Vacina A vs. placebo |

> **Dica de Prova:** Estudos observacionais não permitem inferir causalidade por si só — apenas associação. O ensaio clínico randomizado (RCT) é o único desenho que permite inferência causal, porque a aleatorização controla os confundidores.

---

## Pontos-Chave para Prova

- **Bioestatística:** estatística descritiva + inferencial aplicadas à saúde.
- **Parâmetro:** medida da população (μ, σ). Estatística: medida da amostra (x̄, s).
- **Escala nominal:** sem ordem. Ordinal: com ordem. Intervalar: sem zero absoluto. Razão: zero absoluto.
- **Temperatura °C = intervalar** (zero não é ausência). PA, peso = razão.
- **SIM:** mortalidade. SINASC: nascidos vivos. SINAN: doenças de notificação.
- **RCT:** único estudo que permite causalidade (aleatorização controla confundidores).
- **Dado ≠ informação:** dado é bruto; informação é interpretada no contexto.

---

## Ponte com a Clínica

Quando você lê que "metformina reduziu eventos cardiovasculares em 15% (IC 95%: 8–22%, p = 0,001)", está usando todos os conceitos desta aula: a amostra do estudo estimou um parâmetro da população (redução real); o IC 95% quantifica a incerteza; o p < 0,05 indica que o resultado é improvável de ser acaso. Se o IC 95% cruzasse o zero (ou o 1, para razão de risco), o resultado não seria estatisticamente significativo — e a metformina poderia não ter efeito real. Saber ler esses números é o que distingue o médico que evidencia suas condutas daquele que segue protocolo de cor.

---

## Pré-Prova
> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### Síntese para a prova
- **Estatística descritiva:** resume dados observados (média, mediana, desvio padrão).
- **Estatística inferencial:** usa amostra para concluir sobre população (p-valor, IC 95%).
- **Parâmetro (população):** letras gregas — μ (média), σ (DP). Estatística (amostra): x̄, s.
- **Nominal:** sem ordem (sexo, tipo sanguíneo). Ordinal: com ordem (estadiamento).
- **Intervalar:** sem zero absoluto (°C). Razão: com zero absoluto (peso, PA, glicemia).
- **SIM:** mortalidade. SINASC: nascidos vivos. SINAN: doenças notificáveis.
- **RCT:** causalidade. Observacional: apenas associação.
- **IC 95% não cruzando o nulo:** resultado estatisticamente significativo.

Para estudar por esta plataforma sem perder desempenho em prova, aplique a sintese em um micro-cenario numerico: identifique qual medida deve ser usada, execute uma conta simples (ou interprete a grandeza apresentada) e finalize com a decisao clinico-epidemiologica mais defensavel. Esse roteiro reduz erro por decoracao isolada e aumenta acerto em questoes de interpretacao.

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Como diferenciar |
|------------|------------|-----------------|
| Parâmetro | Estatística | Parâmetro: população (μ, σ); Estatística: amostra (x̄, s) |
| Escala ordinal | Escala intervalar | Ordinal: ordem sem distância igual; Intervalar: distância igual, sem zero absoluto |
| Temperatura °C | Peso corporal | °C: intervalar (zero não é ausência); Peso: razão (zero = ausência de massa) |
| Estudo observacional | Estudo experimental | Observacional: sem intervenção, só associação; Experimental: intervenção, causalidade possível |

### Frase-âncora para não esquecer
> "Parâmetro é da população (letra grega), estatística é da amostra (letra latina) — a inferência é a ponte entre os dois, com IC e p-valor como guardrails."
