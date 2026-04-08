# IND — Aula 10: Análise Descritiva — Tendência Central e Dispersão

**Disciplina:** Indicadores de Saúde  
**Módulo:** 2 | **Tempo de estudo sugerido:** 20-30 min

---

## Relevância Clínica e Acadêmica

A análise descritiva é o primeiro filtro para entender dados de saúde antes de qualquer teste inferencial. Na prática, ela responde duas perguntas fundamentais: **onde está o centro da distribuição** e **o quanto os valores variam**.

Em prova, a Uninove costuma explorar cenários em que a média parece "boa", mas há assimetria, outliers ou grande dispersão. Quem sabe escolher a medida certa (média, mediana, moda, desvio-padrão, IIQ, CV) evita erro conceitual e acerta interpretação clínica.

### Figura sugerida

**Figura-ID:** `IND-A10-F01`

- **Momento:** após a introdução da aula, antes das fórmulas de tendência central.
- **O que mostrar:** distribuição comparativa de três conjuntos de dados com mesma média e dispersões diferentes, destacando visualmente concentração e caudas.
- **Tipo sugerido:** esquema didático.
- **Legenda (rascunho):** "Mesmo centro, dispersões diferentes: por que olhar só a média pode enganar."
- **Notas (opcional):** versão limpa para mobile, com eixo horizontal simples e marcações de mediana e quartis.

## Tendência central: média, mediana e moda

As medidas de tendência central resumem o "valor típico" do conjunto, mas cada uma responde a um tipo de pergunta.

### Média aritmética

Fórmula:

\[
\bar{x} = \frac{\sum x_i}{n}
\]

Mini-exemplo de prova: tempos de internação (dias) = 2, 3, 3, 4, 8.  
\[
\bar{x} = \frac{2+3+3+4+8}{5} = \frac{20}{5} = 4
\]

Interpretação: em média, a internação foi de 4 dias.  
Limitação: o valor 8 "puxa" a média para cima.

### Mediana

Definição: valor central da série ordenada; divide os dados em duas metades.

Mini-exemplo (mesmos dados ordenados): 2, 3, 3, 4, 8  
Mediana = 3.

Interpretação: metade dos pacientes ficou até 3 dias e metade ficou 3 dias ou mais.

### Moda

Definição: valor mais frequente.

Mini-exemplo (mesmos dados): moda = 3.

Interpretação em saúde: pode ser útil para apontar o padrão mais comum de uma variável discreta (ex.: número de consultas no mês).

> **Dica de Prova:** em distribuição assimétrica com outliers, a **mediana** tende a representar melhor o "centro clínico" do grupo do que a média.

> **Pegadinha:** marcar "média e mediana são equivalentes" sem avaliar formato da distribuição ou presença de extremos.

## Dispersão: o quanto os dados se espalham

Sem dispersão, a descrição fica incompleta. Dois serviços podem ter a mesma média de permanência e realidades assistenciais totalmente diferentes.

### Amplitude (range)

Fórmula:

\[
Amplitude = x_{máx} - x_{mín}
\]

Mini-exemplo: 2, 3, 3, 4, 8  
Amplitude = 8 - 2 = 6.

Interpretação: há variação total de 6 dias entre o menor e o maior tempo.

### Variância

Fórmula amostral:

\[
s^2 = \frac{\sum (x_i - \bar{x})^2}{n-1}
\]

Mini-exemplo (dados 2, 3, 3, 4, 8; média 4):  
Desvios ao quadrado: 4, 1, 1, 0, 16 (soma = 22)  
\[
s^2 = \frac{22}{4} = 5{,}5
\]

Interpretação: quantifica a variabilidade em torno da média, mas em unidade ao quadrado.

### Desvio padrão

Fórmula:

\[
s = \sqrt{s^2}
\]

Mini-exemplo:
\[
s = \sqrt{5{,}5} \approx 2{,}35
\]

Interpretação clínica: valores de internação costumam variar cerca de 2,35 dias em torno da média.

## Medidas robustas: IIQ (intervalo interquartil)

O **intervalo interquartil (IIQ)** mede a dispersão da metade central dos dados, sendo menos sensível a extremos.

Fórmula:

\[
IIQ = Q3 - Q1
\]

Mini-exemplo: pressão sistólica (mmHg) ordenada = 100, 110, 120, 130, 140, 180  
Q1 = 110; Q3 = 140  
\[
IIQ = 140 - 110 = 30
\]

Interpretação: os 50% centrais dos pacientes variam em 30 mmHg; o 180 sugere cauda alta/outlier.

### Figura sugerida

**Figura-ID:** `IND-A10-F02`

- **Momento:** após a explicação do IIQ.
- **O que mostrar:** boxplot simples com mediana, Q1, Q3, whiskers e um outlier destacado.
- **Tipo sugerido:** infográfico didático.
- **Legenda (rascunho):** "IIQ mostra o miolo da distribuição e reduz influência de extremos."
- **Notas (opcional):** incluir setas curtas para Q1, mediana e Q3.

## Coeficiente de variação (CV)

O **CV** permite comparar variabilidade relativa entre variáveis de escalas diferentes.

Fórmula:

\[
CV(\%) = \frac{s}{\bar{x}} \times 100
\]

Mini-exemplo de prova:  
Grupo A: média de glicemia = 100 mg/dL, DP = 10 mg/dL  
\[
CV_A = \frac{10}{100}\times100 = 10\%
\]
Grupo B: média = 200 mg/dL, DP = 20 mg/dL  
\[
CV_B = \frac{20}{200}\times100 = 10\%
\]

Interpretação: apesar de médias e DP diferentes, a variabilidade relativa é igual (10%).

## Tabela comparativa para decisão em prova

| Medida | O que resume | Vantagem | Limitação | Uso típico em saúde |
|--------|--------------|----------|-----------|---------------------|
| Média | Centro aritmético | Usa toda a amostra | Sensível a outliers | Distribuição aproximadamente simétrica |
| Mediana | Valor central | Robusta a extremos | Ignora distância entre valores | Tempo de espera, renda, LOS assimétrico |
| Moda | Valor mais frequente | Simples e intuitiva | Pode não ser única | Categoria mais comum, contagens discretas |
| Amplitude | Extensão total | Cálculo rápido | Depende só de extremos | Noção inicial de variação |
| Variância | Dispersão quadrática | Base para inferência | Unidade ao quadrado | Cálculo intermediário |
| Desvio padrão | Dispersão na unidade original | Leitura prática | Sensível a extremos | Relatórios de laboratório e coortes |
| IIQ | Dispersão central (Q1-Q3) | Robusto | Não usa toda a cauda | Distribuição assimétrica |
| CV (%) | Dispersão relativa | Compara escalas diferentes | Requer média > 0 | Comparar estabilidade entre indicadores |

## Interpretação em saúde: como a banca contextualiza

Em indicadores de saúde, a escolha errada da medida muda a mensagem clínica. Exemplo clássico: comparar média de dias de internação entre hospitais sem avaliar dispersão pode esconder um subgrupo de longa permanência.

Outro cenário frequente de prova: duas UBS com mesma média de pressão arterial em hipertensos, mas uma com DP muito maior. A UBS com maior dispersão provavelmente tem controle mais heterogêneo e demanda intervenção focalizada.

Regra prática para resposta discursiva curta: descreva **centro + dispersão + possível assimetria/outlier** e feche com implicação clínica (organização do cuidado, risco ou priorização).

## Ponte com a Clínica

Na rotina da APS e da vigilância, análise descritiva orienta decisões rápidas: onde concentrar busca ativa, qual grupo tem maior variabilidade terapêutica e em qual serviço vale revisar protocolo.

No internato, ler um resumo estatístico sem confundir "média alta" com "grupo todo alto" é habilidade crítica. A banca valoriza quem interpreta distribuição, e não apenas quem memoriza fórmula.

---

## Pontos-Chave para Prova

- **Média** é ótima em distribuição simétrica e ruim quando há outliers fortes.
- **Mediana** é a medida de centro mais robusta para dados assimétricos.
- **Moda** indica o valor mais frequente e pode coexistir com média/mediana diferentes.
- **Variância** e **desvio padrão** medem dispersão em torno da média.
- **Amplitude** usa apenas extremos; boa para triagem, fraca sozinha.
- **IIQ** descreve o miolo da distribuição com menor influência de extremos.
- **CV** compara variabilidade relativa entre escalas distintas.
- Em saúde, interpretação completa exige **centro + dispersão + contexto clínico**.

---

## Pré-Prova

> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### Síntese para a prova

Na prova, o primeiro passo é identificar o tipo de distribuição. Se houver assimetria ou outlier, mediana e IIQ geralmente representam melhor o conjunto do que média e desvio padrão. Se a distribuição for aproximadamente simétrica, média e desvio padrão costumam ser a dupla preferida.

Média, mediana e moda não são "concorrentes", mas complementares. A média resume o equilíbrio aritmético, a mediana mostra o centro posicional e a moda aponta o padrão mais frequente. Questões objetivas frequentemente misturam essas definições para testar leitura atenta.

Nas medidas de dispersão, lembre a hierarquia prática: amplitude é rápida, variância é base matemática, desvio padrão é interpretação clínica na unidade original, IIQ é robusto para miolo da distribuição e CV permite comparar heterogeneidade relativa entre grupos diferentes.

Em interpretação em saúde, resposta forte é curta e completa: "o centro é X, a dispersão é Y, há/ não há indício de assimetria, e isso implica Z na tomada de decisão". Esse fechamento costuma diferenciar acerto parcial de acerto pleno em item discursivo.

Para estudar por esta plataforma sem perder desempenho em prova, aplique a sintese em um micro-cenario numerico: identifique qual medida deve ser usada, execute uma conta simples (ou interprete a grandeza apresentada) e finalize com a decisao clinico-epidemiologica mais defensavel. Esse roteiro reduz erro por decoracao isolada e aumenta acerto em questoes de interpretacao.

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Como diferenciar |
|------------|------------|-----------------|
| Média | Mediana | Média sofre influência de extremos; mediana é robusta em assimetria |
| Variância | Desvio padrão | DP é a raiz da variância e volta para a unidade original |
| Amplitude | IIQ | Amplitude usa extremos; IIQ usa quartis centrais (Q1-Q3) |
| DP absoluto | CV percentual | DP mede dispersão na unidade; CV mede dispersão relativa |
| "Mesmo centro" | "Mesmo comportamento" | Mesma média não implica mesma variabilidade |

### Frase-âncora para não esquecer

> "Em dados de saúde, acertar a interpretação é unir centro, dispersão e contexto clínico na mesma resposta."
