# Bioestatística — Aula 3: Medidas de Tendência Central e Dispersão

**Disciplina:** Bioestatística e Estudos em Saúde
**Módulo:** 4 | **Tempo de estudo sugerido:** 10-15 min

---

## Relevância Clínica e Acadêmica

Quando um artigo científico apresenta os dados dos participantes, usa medidas de tendência central e dispersão para resumir a informação. "Pacientes tinham média de 58 ± 12 anos de idade" — o 58 é a média, o 12 é o desvio padrão. Saber interpretar esses números é essencial para avaliar se a amostra do estudo é parecida com seus pacientes e se as conclusões se aplicam à sua realidade. A **Uninove** cobra essas medidas tanto de forma conceitual ("qual medida de tendência central é mais adequada para variáveis com distribuição assimétrica?") quanto com cálculo direto.

### Figura sugerida

**Figura-ID:** `BIOE-A3-F01`

- **Momento:** após o bloco de relevância (reserva editorial para imagem no app; aparece inline quando houver URL no catálogo).
- **O que mostrar:** definir na produção — deve ilustrar o tema central da aula de forma clara em mobile.
- **Tipo sugerido:** esquema didático | ilustração estilo atlas | infográfico | foto contextual | outro.
- **Legenda (rascunho):** a fixar junto da imagem final (campo legenda em data/materiais_figuras.json).
- **Notas (opcional):** pesquisar no Wikimedia Commons (buscaCommonsEn / buscaCommonsPt no JSON); licenças livres e atribuição.




---

## 1. Medidas de Tendência Central

As medidas de tendência central descrevem o valor típico ou central de um conjunto de dados.

### 1.1 Média Aritmética (x̄)

A média é a soma de todos os valores dividida pelo número de observações. É a medida mais usada em bioestatística porque incorpora todas as observações e tem propriedades matemáticas que permitem o uso de testes paramétricos. Porém, a média é sensível a **valores extremos (outliers)**: uma única observação muito alta ou baixa puxa a média para longe do centro real dos dados.

Exemplo: salários de cinco pessoas: R$2.000, R$2.200, R$2.500, R$2.800, R$50.000. Média = R$11.900 — um valor que não representa nenhum dos cinco funcionários adequadamente, porque o outlier (R$50.000) distorceu o resultado.

> **Dica de Prova:** Em distribuições assimétricas (income, tempo de internação, PCR), a média é enganosa. Use a mediana nesses casos. A questão geralmente apresenta um conjunto de dados com um outlier óbvio e pede "qual a melhor medida de tendência central?".

### 1.2 Mediana

A mediana é o valor central quando os dados são ordenados de forma crescente. Se o número de observações for par, a mediana é a média dos dois valores centrais. A mediana é **robusta a outliers** — não importa quão extremo seja o maior valor, a mediana não se move. Por isso, é usada para descrever variáveis com distribuição assimétrica: renda familiar, tempo até o óbito (curvas de sobrevida), custos hospitalares, concentrações de marcadores inflamatórios.

### 1.3 Moda

A moda é o valor (ou valores) que aparece com maior frequência. Uma distribuição pode ter uma moda (unimodal), duas modas (bimodal) ou nenhuma (quando todos os valores têm a mesma frequência). Na prática clínica a moda tem uso limitado, mas é cobrada conceitualmente — especialmente em questões sobre variáveis nominais, onde a média e a mediana não fazem sentido e a moda é a única medida de tendência central aplicável.

> **Pegadinha:** Para variáveis **nominais** (sexo, diagnóstico), a única medida de tendência central válida é a **moda**. Calcular média ou mediana de categoria não faz sentido matemático. Se a questão pede "qual medida para variável nominal?", a resposta é moda.

---

## 2. Relação entre Média, Mediana e Moda segundo a Distribuição

A posição relativa dessas três medidas revela a forma da distribuição:

| Forma da distribuição | Relação | Gráfico |
|----------------------|---------|---------|
| **Simétrica (normal)** | Média = Mediana = Moda | Curva de sino | 
| **Assimétrica à direita (positiva)** | Moda < Mediana < Média | Cauda longa à direita |
| **Assimétrica à esquerda (negativa)** | Média < Mediana < Moda | Cauda longa à esquerda |

> **Dica de Prova:** Renda, tempo de espera, marcadores inflamatórios tipicamente têm distribuição assimétrica à direita — a cauda vai em direção a valores altos. Nesses casos, Média > Mediana, e usar a média subestima a medida central "representativa".

---

## 3. Medidas de Dispersão

As medidas de tendência central descrevem o centro; as de dispersão descrevem **o espalhamento** dos dados em torno desse centro. Dois grupos podem ter a mesma média mas dispersões muito diferentes — o que tem impacto clínico enorme.

### 3.1 Amplitude (Range)

Diferença entre o maior e o menor valor. Simples de calcular, mas extremamente sensível a outliers — um único valor extremo muda toda a amplitude. Uso limitado em bioestatística formal.

### 3.2 Variância (s²)

Média dos quadrados dos desvios em relação à média. Mede o espalhamento "médio" dos dados, mas em unidade quadrática — o que dificulta a interpretação clínica. Quase nunca usada diretamente; serve de base para o desvio padrão.

### 3.3 Desvio Padrão (DP ou s)

Raiz quadrada da variância — volta à unidade original dos dados. O DP é a medida de dispersão mais usada em bioestatística. Em uma distribuição normal, a regra empírica ("68-95-99,7") diz:
- 68% dos dados ficam entre **x̄ ± 1 DP**
- 95% dos dados ficam entre **x̄ ± 2 DP**
- 99,7% dos dados ficam entre **x̄ ± 3 DP**

> **Dica de Prova:** Média ± DP descreve variáveis com distribuição normal. Mediana com intervalo interquartil descreve variáveis assimétricas. Se a questão apresenta "dados com distribuição não-normal", use mediana + IIQ, não média ± DP.

### 3.4 Intervalo Interquartil (IIQ)

O IIQ é a diferença entre o 3º quartil (P75) e o 1º quartil (P25), contendo os 50% centrais dos dados. É a medida de dispersão ideal para acompanhar a mediana — ambas são robustas a outliers. Representado graficamente pelo **box-plot** (caixinha + bigodes).

### 3.5 Coeficiente de Variação (CV)

CV = (DP / Média) × 100%. Expressa o desvio padrão como porcentagem da média, permitindo comparar a dispersão de variáveis em unidades diferentes. CV < 15%: baixa variabilidade. CV > 30%: alta variabilidade.

---

## 4. Erro Padrão da Média (EPM) vs Desvio Padrão

Essa distinção cai muito em prova e confunde bastante:

| Medida | O que descreve | Fórmula | Uso |
|--------|---------------|---------|-----|
| **Desvio Padrão (DP)** | Dispersão dos dados individuais da amostra | s = √(variância) | Describir a variabilidade dos sujeitos |
| **Erro Padrão da Média (EPM)** | Precisão da estimativa da média populacional | EPM = DP / √n | Construir intervalos de confiança |

Quanto maior a amostra, menor o EPM — a estimativa da média fica mais precisa. O DP não diminui com o aumento do n (ele descreve a variabilidade intrínseca dos dados, não a precisão da estimativa).

> **Pegadinha:** Artigos que querem "parecer mais precisos" às vezes apresentam EPM em vez de DP nas tabelas — porque EPM é sempre menor que DP. O leitor crítico identifica isso e sabe que a variabilidade real dos dados é maior do que o gráfico mostra.

---

## 5. Percentis e Quartis

Um percentil divide a distribuição de forma que X% dos dados ficam abaixo dele. O **P50** é a mediana. Os quartis (P25, P50, P75) dividem os dados em 4 partes iguais. Referências de crescimento infantil (curvas de peso, altura, PC) são expressas em percentis — P3, P10, P50, P90, P97. Uma criança no P10 para peso está acima de apenas 10% das crianças da mesma idade e sexo.

---

## Pontos-Chave para Prova

- **Média:** sensível a outliers. Melhor para distribuição simétrica.
- **Mediana:** robusta a outliers. Melhor para distribuição assimétrica.
- **Moda:** única medida válida para variável nominal.
- **Assimétrica à direita:** Moda < Mediana < Média (cauda longa positiva).
- **DP:** descreve variabilidade dos dados. EPM: precisão da estimativa da média.
- **Regra 68-95-99,7:** x̄ ± 1DP = 68%; x̄ ± 2DP = 95%; x̄ ± 3DP = 99,7%.
- **IIQ (P25–P75):** acompanha a mediana nas distribuições assimétricas.
- **EPM: DP/√n** — diminui com tamanho amostral. DP não diminui.

---

## Ponte com a Clínica

Curvas de crescimento do SINASC/**OMS** usam percentis para identificar desnutrição (< P3) e sobrepeso (> P97). Um exame laboratorial "normal" significa que o resultado cai dentro da faixa que engloba 95% da população saudável (x̄ ± 2 DP) — portanto, 5% da população saudável terá resultado "fora do normal". Quanto mais exames você pede, maior a chance de um resultado falso positivo por pura variação estatística.

---

## Pré-Prova

> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### Síntese para a prova


Distribuição assimétrica à direita: Moda < Mediana < Média — usa mediana + IIQ. Distribuição normal/simétrica: Média = Mediana = Moda — usa média ± DP. Moda: única medida para variável nominal.

Regra empírica: ±1DP = 68%; ±2DP = 95%; ±3DP = 99,7%. IIQ = P75 − P25 (50% centrais dos dados); vai com mediana. EPM = DP/√n — precisão da estimativa; DP = variabilidade dos dados individuais.

Outlier: puxa a média, não afeta a mediana. Percentis crescimento: P3–P97 = faixa normal; abaixo P3 = baixo peso.

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Como diferenciar |
|------------|------------|-----------------|
| Desvio padrão | Erro padrão da média | DP: variabilidade dos sujeitos; EPM = DP/√n: precisão da estimativa |
| Média | Mediana | Média: afetada por outlier; Mediana: robusta a outlier |
| IIQ | Amplitude (Range) | IIQ: P25–P75 (50% centrais); Range: max − min (sensível a outlier) |
| Assimétrica direita | Assimétrica esquerda | Direita: cauda positiva, Média > Mediana; Esquerda: cauda negativa, Média < Mediana |

### Frase-âncora para não esquecer

> "Outlier puxa a média mas nunca move a mediana — se tiver um milionário na sala, a renda média explode, mas a mediana mal se move."