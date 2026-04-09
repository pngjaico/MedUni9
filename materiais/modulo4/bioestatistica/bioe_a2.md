# BIOE — Aula 2: Tipos de Variáveis e Escalas — Organizando o Caos

Classificar as variáveis é o primeiro passo de qualquer pesquisa. Na prova, os temas centrais são a distinção entre **Variáveis Qualitativas e Quantitativas**, a hierarquia das **Escalas de Medida (Nominal, Ordinal, Intervalar, Razão)** e o papel da **Variável Dependente e Independente**.

Na prática, se você errar a classificação da variável, você escolhe o teste estatístico errado e chega a uma conclusão falsa. Dizer que um paciente com "Câncer Estádio IV" é o dobro do paciente com "Câncer Estádio II" é um erro matemático básico, pois o estadiamento é uma variável **Ordinal**, não de **Razão**. Saber essa diferença é o que separa um médico que entende de ciência de um que apenas lê resumos.

---

### Figura sugerida

**Figura-ID:** `BIOE-A2-F01`

- **Momento:** Seção de hierarquia de variáveis.
- **O que mostrar:** A "Escada das Variáveis": Um desenho de degraus. Degrau 1: **Nominal** (nomes); Degrau 2: **Ordinal** (ordem); Degrau 3: **Intervalar** (distância); Degrau 4: **Razão** (zero real). Mostrar que quanto mais alto o degrau, mais cálculos podemos fazer.
- **Tipo sugerido:** Infográfico de hierarquia estatística.
- **Legenda (rascunho):** A hierarquia das escalas de medida de Stevens e suas propriedades matemáticas.

## 1. Variáveis Qualitativas (Categóricas): O "O que é?"

Estas variáveis descrevem atributos ou qualidades que não podem ser medidos numericamente de forma direta:
- **Nominais:** Categorias sem ordem. **Exemplos:** Sexo (M/F), Cor dos olhos, Tipo de patógeno, Especialidade médica. Você só pode dizer se é igual ou diferente.
- **Ordinais:** Existe uma ordem ou "ranking", mas a distância entre os pontos não é igual. **Exemplos:** Escolaridade, Classe social, Gravidade da doença (Leve, Moderada, Grave), Estadiamento tumoral. O grau III é maior que o II, mas não sabemos "o quanto" maior exatamente.

---

## 2. Variáveis Quantitativas (Numéricas): O "Quanto é?"

Estas variáveis expressam quantidades numéricas reais:
- **Discretas:** Resultam de contagens. São números inteiros "saltados". **Exemplos:** Número de filhos, Número de dentes com cárie, Número de cigarros fumados por dia. Não existe "2,5 filhos".
- **Contínuas:** Resultam de medições. Podem ter qualquer valor decimal. **Exemplos:** Peso (kg), Altura (m), Pressão Arterial (mmHg), Tempo de internação. A precisão depende apenas da régua ou balança usada.

---

## 3. Escalas de Medida de Stevens

A escala define quais contas podemos fazer com os números:
- **Nominal:** Apenas frequências e moda.
- **Ordinal:** Podemos calcular mediana e percentis.
- **Intervalar:** Podemos calcular média e desvio padrão. **Ponto de Prova:** Temperatura em Celsius (°C). O zero é arbitrário; 20°C não é o dobro de calor de 10°C.
- **Razão:** A escala mais completa. O zero é absoluto (**Zero = Nada**). **Exemplos:** Peso, Idade, Glicemia. Aqui podemos dizer que 100mg/dL é o dobro de 50mg/dL.

---

## 4. Variáveis nos Estudos: Causa e Efeito

- **Variável Independente (Exposição):** É a "causa" ou o fator que estamos estudando. **Exemplo:** O uso de um novo medicamento para pressão.
- **Variável Dependente (Desfecho):** É o "efeito" que queremos medir. **Exemplo:** O valor final da pressão arterial do paciente.
- **Variável de Confusão:** É uma variável "intrusa" que bagunça o resultado. **Exemplo:** Em um estudo sobre café e infarto, o **Cigarro** é um confundidor, pois quem toma muito café geralmente fuma mais.

---

## Ponte com a Clínica

No dia a dia, você frequentemente transforma variáveis do tipo **Contínuas** em **Ordinais** para facilitar a conduta. Por exemplo: a Glicemia de um paciente é 126 mg/dL (Contínua). Você classifica ele como "Diabético" (Categórica/Nominal). Saiba que ao fazer isso, você perde muita informação estatística detalhada, mas ganha clareza clínica para decidir o tratamento.

---

## Pontos-Chave para Prova

- **Escala de Razão**: É a única onde faz sentido dizer que um valor é o "dobro" do outro.
- **Variável Discreta**: Números inteiros (contagem). Ex: nº de gestações.
- **Ordinal vs Intervalar**: No ordinal a ordem importa (Estágio I, II), mas a "distância" não é fixa; no intervalar a distância é fixa.
- **Confundidores**: Variáveis que estão ligadas tanto à causa quanto ao efeito e podem enganar o pesquisador.
- **Aleatorização (Randomização)**: É a única forma de garantir que os grupos sejam iguais e neutralizar os confundidores.

---

## Pré-Prova

<ctrl94> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### Síntese para a prova

Para gabaritar tipos de variáveis, foque na Operação Matemática. 
**Nominal** = Sem ordem. **Ordinal** = Com ordem (Ranking). **Discreta** = Sem vírgula. **Contínua** = Com vírgula.

A Uninove adora a **Escala de Temperatura**. Lembre-se: Graus Celsius (°C) é **Intervalar**, não é razão. O **Peso** e a **Pressão Arterial** são **Razão**. Outro ponto forte: o **Desfecho**. O desfecho de um estudo (ex: Vida ou Morte) é a **Variável Dependente**. O tratamento (ex: Droga A vs Placebo) é a **Variável Independente**. Por fim, saiba que categorizar uma variável (ex: transformar idade em "jovem" ou "velho") sempre piora o poder do teste estatístico.

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Diferencial Crítico |
|------------|------------|-----------------|
| **Variável Independente**| **Variável Dependente** | É a **Causa/Exposição** vs É o **Efeito/Desfecho** |
| **Ordinal** | **Quantitativa** | Ordem de **Rank** vs Valor de **Medida/Conta** |
| **Discreta** | **Contínua** | Conta **Objetos** (1, 2, 3) vs Mede **Grandezas** (1.5, 2.7) |
| **Nominal** | **Ordinal** | **Cor** dos olhos (Igual/Dif) vs **Dor** (Menor/Maior) |
| **Confundidor** | **Viés** | Erro por **Variável Intrusa** vs Erro por **Falha no Desenho** |

### Frase-âncora para não esquecer

> "O nome é nominal, o rank é ordinal. O inteiro é discreto, o que flutua é contínuo. A causa é independente, o efeito depende dela. Se o zero é absoluto, a razão é real; se o zero é gelado, o intervalo é vital. Classifique certo para o p-valor não ser fatal."
