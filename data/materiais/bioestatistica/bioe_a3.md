# BIOE — Aula 3: Medidas de Tendência Central e Dispersão — O Coração dos Dados

Um número sozinho não diz nada; precisamos saber onde os dados se agrupam e o quanto eles se espalham. Na prova, os temas centrais são a escolha entre **Média e Mediana**, a sensibilidade aos **Outliers (valores extremos)** e o significado do **Desvio Padrão (DP)** e do **Intervalo Interquartil (IIQ)**.

Na prática, quando você lê que a "sobrevida média" de uma doença é de 6 meses, isso pode ser enganoso se houver um paciente que viveu 10 anos e puxou a média para cima. Nesses casos, a **Mediana** é muito mais honesta, pois ela mostra o valor que divide o grupo exatamente ao meio. Saber qual medida usar é o que evita que você tire conclusões erradas sobre a saúde dos seus pacientes.

---

### Figura sugerida

**Figura-ID:** `BIOE-A3-F01`

- **Momento:** Seção de distribuição simétrica vs assimétrica.
- **O que mostrar:** O "Cabo de Guerra": Três gráficos de curvas. 1. **Simétrica (Normal)**: Média, Mediana e Moda no mesmo lugar. 2. **Assimétrica Direita**: A **Média** sendo puxada para longe pela cauda longa (valores altos). 3. **Assimétrica Esquerda**: A **Média** sendo puxada para valores baixos.
- **Tipo sugerido:** Infográfico de distribuição estatística.
- **Legenda (rascunho):** Como os valores extremos (outliers) deslocam a média e a importância da mediana em dados assimétricos.

## 1. Medidas de Tendência Central: Onde está o meio?

- **Média Aritmética (x̄):** É a soma de todos dividida pelo número de pessoas. **CUIDADO:** Ela é muito sensível a **Outliers**. Se um bilionário entrar em uma sala de estudantes, a "renda média" vai para milhões, mas ninguém ficou rico.
- **Mediana (Md):** É o valor que está no centro da fila ordenada. 50% dos dados estão abaixo dela e 50% estão acima. **VANTAGEM:** Ela ignora os extremos. É a melhor medida para dados "tortos" (renda, tempo de internação, PCR).
- **Moda (Mo):** É o valor que mais se repete. É a única medida que faz sentido para variáveis nominais (Ex: Qual o diagnóstico mais comum? É a moda).

---

## 2. Medidas de Dispersão: O quanto os dados "fogem"?

Duas turmas podem ter média 7.0 na prova, mas em uma todos tiraram 7, e na outra metade tirou 10 e metade tirou 4. A dispersão mostra essa diferença:
- **Amplitude:** O maior valor menos o menor. É simples, mas instável.
- **Desvio Padrão (DP):** Mostra a distância média dos dados em relação ao centro. Quanto maior o DP, mais "espalhados" e heterogêneos estão os dados.
- **Variância:** É o desvio padrão ao quadrado. Usada mais para cálculos internos do que na clínica.
- **Intervalo Interquartil (IIQ):** É a distância entre o 25% e o 75% da amostra. É o "parceiro" da mediana para descrever dados com outliers.

---

## 3. A Regra de Ouro da Distribuição Normal

Em uma distribuição perfeita (em forma de sino/Gaussiana):
- **Média ± 1 DP:** Engloba **68%** da população.
- **Média ± 2 DP:** Engloba **95%** da população (é aqui que definimos os valores de referência de laboratório).
- **Média ± 3 DP:** Engloba **99,7%** da população.

---

## 4. Erro Padrão da Média (EPM): A Precisão do Estudo

O **EPM** não mede a variação dos pacientes, mas sim o quão "certeiro" foi o estudo.
- Se você estudar pouca gente (**n pequeno**), o erro padrão é grande.
- Se você estudar muita gente (**n grande**), o erro padrão diminui e a sua média fica muito mais confiável.
- **Fórmula:** **EPM = Desvio Padrão / Raiz de n**.

---

## Ponte com a Clínica

No laboratório, o "valor de referência" (Ex: Glicemia de 70 a 99) é calculado pegando a média de pessoas saudáveis e somando/subtraindo **2 Desvios Padrões**. Isso significa que, por definição estatística, **5% das pessoas saudáveis** terão exames "alterados" sem estarem doentes. Nunca trate apenas o número; trate o paciente, pois ele pode ser um desses 5% saudáveis que moram nas pontas da curva.

---

## Pontos-Chave para Prova

- **Média**: Melhor para dados simétricos (Peso de adultos saudáveis).
- **Mediana**: Melhor para dados assimétricos (Renda, Dias de hospital).
- **Outliers**: Puxam a média para perto deles, mas quase não afetam a mediana.
- **Box-Plot**: Gráfico que mostra a Mediana (linha do meio) e o IIQ (a caixa).
- **DP vs EPM**: DP descreve o **grupo** de indivíduos; EPM descreve a **precisão** da média do pesquisador.

---

## Pré-Prova

<ctrl94> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### Síntese para a prova

Para gabaritar medidas centrais, desconfie da média. 
**Distribuição Normal** = Média (x̄) ± Desvio Padrão (DP). **Distribuição Assimétrica** = Mediana (Md) + Intervalo Interquartil (IIQ).

A Uninove adora **Outliers**. Lembre-se: Se um valor é muito bizarro (muito alto ou baixo), ele "estraga" a média. Use a **Mediana**. Outro ponto forte: os **95%**. Qualquer coisa que esteja a mais de 2 DPs de distância da média é considerada "anormal" ou "rara" na estatística. Por fim, saiba que o **Erro Padrão** sempre diminui quando você aumenta o número de pessoas no estudo (**n**), tornando o resultado mais preciso.

### Diferenciações que a Uninove adora cobrar

| Medida A | Medida B | Diferencial Crítico |
|------------|------------|-----------------|
| **Média** | **Mediana** | **Sensível vs Resistente** a extremos |
| **Desvio Padrão** | **Variância** | Unidade **Igual** vs Unidade ao **Quadrado** |
| **Desvio Padrão** | **Erro Padrão (EPM)** | Variação entre **Pessoas** vs Incerteza da **Média** |
| **Amplitude** | **IIQ** | Usa os **Extremos** vs Usa o **Meio (50%)** |
| **Simétrica** | **Assimétrica** | **Média = Mediana** vs **Média ≠ Mediana** |

### Frase-âncora para não esquecer

> "A média é frágil, a mediana é rocha; se tem valor extremo, a média se arrocha. O desvio padrão mostra o espalhado, o erro padrão mostra o quão bem foi pesquisado. Na curva de sino, 95% estão no centro; o resto é exceção que mora no relento. Siga a mediana se o dado for torto, e não deixe a média te levar ao porto morto."
