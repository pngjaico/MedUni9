# Bioestatística — Aula 2: Tipos de Variáveis Estatísticas

**Disciplina:** Bioestatística e Estudos em Saúde
**Módulo:** 4 | **Tempo de estudo sugerido:** 10-15 min

---

## Relevância Clínica e Acadêmica

A classificação de variáveis é o ponto de partida de qualquer análise estatística — porque o tipo da variável determina qual teste usar, qual gráfico construir e como interpretar o resultado. Um erro aqui contamina tudo que vem depois. A Uninove cobra classificação de variáveis em questões de múltipla escolha ("Estadiamento tumoral I-IV é uma variável do tipo...") e também implicitamente em questões sobre escolha de testes ("Para comparar médias de dois grupos independentes, usa-se..."). Dominar essa classificação evita erros em toda a disciplina.

### Figura sugerida

**Figura-ID:** `BIOE-A2-F01`

- **Momento:** após o bloco de relevância (reserva editorial para imagem no app; aparece inline quando houver URL no catálogo).
- **O que mostrar:** definir na produção — deve ilustrar o tema central da aula de forma clara em mobile.
- **Tipo sugerido:** esquema didático | ilustração estilo atlas | infográfico | foto contextual | outro.
- **Legenda (rascunho):** a fixar junto da imagem final (campo legenda em data/materiais_figuras.json).
- **Notas (opcional):** pesquisar no Wikimedia Commons (buscaCommonsEn / buscaCommonsPt no JSON); licenças livres e atribuição.




---

## 1. Classificação das Variáveis

As variáveis se dividem em dois grandes grupos: **qualitativas** (categóricas) e **quantitativas** (numéricas).

### 1.1 Variáveis Qualitativas

São variáveis que expressam categories ou atributos, não valores numéricos com significado aritmético. Subdividem-se em:

**Nominais:** as categorias não têm nenhuma ordem natural entre si. Exemplos: sexo biológico (masculino/feminino), tipo sanguíneo (A, B, AB, O), raça/cor autodeclarada, diagnóstico principal (hipertensão, diabetes, asma). Entre duas categorias nominais, só podemos dizer "igual" ou "diferente". Não podemos dizer que B é "maior" que A, nem somá-las.

**Ordinais:** as categorias têm ordem definida, mas os intervalos entre elas não são necessariamente iguais. Exemplos: estadiamento do câncer (I, II, III, IV), escala de coma de Glasgow (3–15 interpretada por faixas), grau de dor pela EVA em categorias (leve/moderada/intensa), classe funcional da NYHA (I–IV para insuficiência cardíaca), escore APGAR (0–10 interpretado em faixas). Podemos dizer que estadio III é "pior" que estadio II, mas não que a diferença entre II e III é igual à diferença entre I e II.

> **Dica de Prova:** Estadiamento tumoral (I, II, III, IV) é **ordinal**, não intervalar — porque o pior prognóstico não cresce linearmente com o número. Glasgow total pode ser tratado como contínuo em análises, mas seus componentes individuais são ordinais.

### 1.2 Variáveis Quantitativas

São variáveis numéricas com significado aritmético — soma, subtração e comparação de magnitudes fazem sentido. Subdividem-se em:

**Discretas:** só assumem valores inteiros contáveis. Não existe fracionamento possível. Exemplos: número de gestações (0, 1, 2...), número de internações no último ano, número de comprimidos por dia, contagem de leucócitos (em número absoluto de células). Tecnicamente, a contagem de hemácias é discreta — mas com valores tão grandes (4–6 milhões/mm³) que se trata na prática como contínua.

**Contínuas:** podem assumir qualquer valor dentro de um intervalo, incluindo frações. Exemplos: peso (68,4 kg), altura (1,72 m), pressão arterial (127 mmHg), glicemia em jejum (98,5 mg/dL), temperatura corporal (37,2°C), IMC (24,8 kg/m²). A precisão depende do instrumento de medida.

> **Pegadinha:** IMC é uma variável **contínua derivada** (peso ÷ altura²). Apesar de ser classificado em faixas (abaixo do peso, normal, sobrepeso, obeso), a variável em si é contínua. Quando categorizamos o IMC em faixas, criamos uma variável ordinal a partir de uma contínua — perdendo informação estatística no processo.

---

## 2. Escalas de Medida (Revisão Detalhada)

A classificação de Stevens (1946) é usada em bioestatística para definir as operações matemáticas permitidas:

| Escala | Propriedades acumuladas | Exemplos clínicos | Operações |
|--------|------------------------|------------------|----------|
| **Nominal** | Identidade (A = B ou A ≠ B) | Sexo, diagnóstico, grupo sanguíneo | Moda, frequência |
| **Ordinal** | + Ordem (A < B) | Estadiamento, Glasgow por faixas, NYHA | + Mediana, percentis |
| **Intervalar** | + Distância igual (B − A = constante); sem zero absoluto | Temperatura °C, escores de QI | + Média, DP |
| **Razão** | + Zero absoluto (ausência real da propriedade) | Peso, PA, FC, glicemia, enzimas | Todas, inclusive razão A/B |

A escala de razão é a mais completa. Ela permite dizer "o paciente A pesa o dobro do paciente B" — o que não é válido para temperatura em Celsius (30°C não é o dobro de 15°C em calor real).

---

## 3. Variáveis Dependentes e Independentes

Em estudos analíticos, as variáveis têm papéis distintos:

**Variável dependente (desfecho):** é o que o estudo quer medir ou explicar. Exemplos: mortalidade, pressão arterial ao fim do tratamento, tempo até o evento. Também chamada de variável resposta ou outcome.

**Variável independente (exposição/preditora):** é aquela que supostamente explica ou influencia o desfecho. Exemplos: uso de determinado medicamento, hábito de fumar, nível de atividade física, grupo de intervenção vs controle. Em experimentos, é a variável que o pesquisador manipula deliberadamente.

**Variável de confusão (confundidor):** está associada tanto à exposição quanto ao desfecho, distorcendo a associação observada. Exemplo clássico: em estudo sobre café e infarto, o tabagismo é confundidor (fumantes bebem mais café e têm mais infarto). Se não controlarmos o tabagismo, parecerá que café causa infarto.

> **Dica de Prova:** A randomização nos ensaios clínicos elimina os confundidores conhecidos E desconhecidos. Em estudos observacionais, confundidores são controlados por pareamento, estratificação ou regressão multivariada — mas nunca com certeza absoluta.

---

## 4. Transformação de Variáveis

É comum transformar variáveis durante a análise:

### 4.1 Contínua em Categórica (Categorização)
Glicemia → diabetes (sim/não, com ponto de corte ≥ 126 mg/dL). IMC → estado nutricional (abaixo do peso/normal/sobrepeso/obeso). Essa operação **perde informação** e reduz o poder estatístico, mas facilita a interpretação clínica e a comunicação com outros profissionais.

### 4.2 Transformação Logarítmica
Quando a variável tem distribuição assimétrica com cauda longa à direita (ex: triglicerídeos, PCR, carga viral), o logaritmo natural transforma a distribuição para algo mais próximo do normal, permitindo uso de testes paramétricos (que assumem normalidade).

### 4.3 Criação de Escore Composto
Combina múltiplas variáveis em um único índice — como o escore de Framingham (que combina idade, PA, colesterol, tabagismo para estimar risco cardiovascular em 10 anos). O escore é uma variável contínua derivada.

---

## 5. Resumo Gráfico

A escolha do gráfico também depende do tipo de variável:

| Tipo de variável | Gráfico recomendado |
|-----------------|-------------------|
| Qualitativa nominal/ordinal | Gráfico de barras, pizza (se poucas categorias) |
| Quantitativa discreta | Gráfico de barras ou pontos |
| Quantitativa contínua | Histograma, box-plot, curva de densidade |
| Duas variáveis contínuas | Diagrama de dispersão (scatter plot) |
| Tempo até evento (sobrevida) | Curva de Kaplan-Meier |

---

## Pontos-Chave para Prova

- **Nominal:** sem ordem — sexo, diagnóstico, grupo sanguíneo.
- **Ordinal:** com ordem, sem distâncias iguais — estadiamento, NYHA, Glasgow por faixas.
- **Discreta:** inteiros contáveis — número de gestações, contagem de células.
- **Contínua:** qualquer valor no intervalo — peso, PA, glicemia, temperatura.
- **Escala de razão:** tem zero absoluto — peso, PA. Temperatura °C = intervalar (sem zero absoluto).
- **Variável dependente:** desfecho. Independente: exposição/fator.
- **Confundidor:** associado tanto à exposição quanto ao desfecho — distorce a associação.
- **Randomização:** único método que controla confundidores desconhecidos.
- **Categorizar contínua:** perde informação e poder estatístico.

---

## Ponte com a Clínica

Na prática diária, variáveis quantitativas contínuas são categorizadas para facilitar decisão clínica: PA ≥ 140/90 = hipertensão (sim/não); HbA1c ≥ 6,5% = DM (sim/não); IMC ≥ 30 = obesidade. Mas os estudos de risco cardiovascular tratam essas variáveis como contínuas — porque o risco de infarto não "salta" bruscamente ao cruzar um limiar; ele sobe de forma gradual. A categorização cria um ponto de corte clínico útil, mas o risco biológico é um continuum.

---

## Pré-Prova

> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### O que você PRECISA saber

- **Nominal:** sem ordem (sexo, diagnóstico). **Ordinal:** com ordem (estadiamento, NYHA).
- **Discreta:** inteiros (nº gestações). **Contínua:** frações (peso, PA, glicemia).
- **Escala de razão:** zero absoluto real (peso, altura). Intervalar: zero arbitrário (°C).
- **Estadiamento tumoral I–IV = ordinal** (não intervalar — diferenças não são iguais).
- **Variável de confusão:** associada à exposição E ao desfecho — distorce a associação.
- **Histograma:** variável contínua. Barras: variável categórica.
- **Perda de informação:** categorizar variável contínua reduz poder estatístico.
- **Confundidores desconhecidos:** só a randomização controla.

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Como diferenciar |
|------------|------------|-----------------|
| Nominal | Ordinal | Nominal: sem ordem; Ordinal: com ordem definida |
| Discreta | Contínua | Discreta: inteiros (nº filhos); Contínua: frações (peso, PA) |
| Escala intervalar | Escala de razão | Intervalar: sem zero absoluto (°C); Razão: com zero absoluto (peso, PA) |
| Variável dependente | Variável independente | Dependente: desfecho (o que mede); Independente: exposição/predictor |

### Frase-âncora para não esquecer

> "Estadiamento é ordinal, não intervalar — estágio IV não é 'duas vezes pior' que estágio II, apenas 'mais avançado'. Ordem sem distância."