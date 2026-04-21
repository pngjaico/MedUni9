# IND — Aula 10: Análise Descritiva — Tendência Central e Dispersão

A análise descritiva é o primeiro passo para entender qualquer dado de saúde. Na prova, o tema central é saber quando usar a **Média** ou a **Mediana** (**Tendência Central**) e como medir a "bagunça" ou variação dos dados usando o **Desvio Padrão** (**Dispersão**).

Na prática, um médico que olha apenas para a **média** pode cometer erros graves. Por exemplo, se um hospital tem média de permanência de 5 dias, mas metade dos pacientes sai no 1º dia e a outra metade no 9º, a média de 5 não representa ninguém de verdade.

---

### Figura sugerida

**Figura-ID:** `IND-A10-F01`

- **Momento:** Seção de Tendência Central.
- **O que mostrar:** Dois gráficos comparando uma distribuição simétrica (Média e Mediana no mesmo lugar) e uma assimétrica (com um valor muito alto puxando a Média para longe da Mediana).
- **Tipo sugerido:** Gráfico didático (Curva de Gauss vs. Curva Assimétrica).
- **Legenda (rascunho):** O impacto de valores extremos (outliers) na média aritmética.

## 1. Medidas de Tendência Central (Onde está o meio?)

- **Média:** Soma tudo e divide pelo número de itens. É a mais usada, mas tem um defeito: é muito sensível a valores muito altos ou muito baixos (**Outliers**).
- **Mediana:** É o **valor que fica exatamente no meio** da fila (ordenada). Metade dos dados é menor que ela, metade é maior. É a melhor medida quando os dados são muito variados (ex: salários ou tempos de internação).
- **Moda:** É o valor que **mais se repete**.

---

## 2. Medidas de Dispersão (O quanto os dados variam?)

- **Amplitude:** A diferença entre o maior e o menor valor. É simples, mas ignora tudo o que acontece no meio.
- **Desvio Padrão (DP):** É a medida de dispersão mais importante. Ele diz, em média, o quanto os dados estão longe da média. 
  - **DP Baixo:** Os dados estão todos pertinho da média (**grupo homogêneo**).
  - **DP Alto:** Os dados estão espalhados (**grupo heterogêneo**).

---

## 3. Coeficiente de Variação (CV)

Serve para comparar a variação de coisas diferentes.
- **Exemplo:** O que varia mais: o peso de elefantes ou o peso de formigas? Como as escalas são diferentes (quilos vs. miligramas), usamos o CV (Desvio Padrão dividido pela Média). Ele dá um resultado em **porcentagem**.

---

## Ponte com a Clínica

Imagine que você quer avaliar o controle de glicemia de dois grupos de pacientes. Ambos têm **Média de Glicemia de 120**. 
- No Grupo A, o **Desvio Padrão é 5**. Quase todo mundo está entre 115 e 125. Controle excelente!
- No Grupo B, o **Desvio Padrão é 40**. Tem gente com 80 e gente com 160. Controle perigoso!
Percebeu? Olhar apenas a média de 120 esconderia que o Grupo B está correndo risco. O Desvio Padrão é o seu alerta de perigo.

---

## Pontos-Chave para Prova

- **Assimetria**: Se a **Média** é muito diferente da **Mediana**, a distribuição é assimétrica.
- **Robusta**: A **Mediana** é chamada de medida robusta porque não "liga" para valores extremos.
- **Variância**: É o desvio padrão ao quadrado. Quase não se usa na clínica, mas cai em fórmulas.
- **Intervalo Interquartil (IIQ)**: Mede a dispersão dos 50% centrais dos dados (ignora as pontas).
- **Curva Normal**: É a famosa curva em "sino" onde Média, Mediana e Moda são quase iguais.

---

## Pré-Prova

<ctrl94> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### Síntese para a prova

Para gabaritar Bioestatística Descritiva, foque na escolha da medida. 
Se a questão te der uma lista de números e um deles for muito diferente dos outros (ex: 2, 3, 2, 4, 150), a **Média** vai ficar "mentirosa". Nesse caso, a **Mediana** é a resposta correta para representar o grupo. Lembre-se: média é para grupos parecidos; mediana é para grupos com grandes diferenças.

Sobre o **Desvio Padrão**: ele é o "sobrenome" da média. Se o DP for grande, a média não é confiável. Outro ponto: o **Coeficiente de Variação** é o único que permite comparar grandezas diferentes (ex: comparar a variação da altura com a variação do peso no mesmo grupo de crianças).

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Diferencial Crítico |
|------------|------------|-----------------|
| **Média** | **Mediana** | **Sensível a extremos** vs **Resistente a extremos** |
| **Desvio Padrão** | **Variância** | Unidade original (cm, kg) vs **Unidade ao quadrado** |
| **Amplitude** | **Desvio Padrão** | Só olha as pontas vs **Olha a variação de todos** |
| **Simetria** | **Assimetria** | **Média = Mediana** vs **Média ≠ Mediana** |
| **Q1 e Q3** | **IIQ** | Os pontos da divisão vs **A distância entre eles** |

### Frase-âncora para não esquecer

> "A média soma e divide, a mediana fica no meio; se o desvio for grande, o dado está cheio de receio."
