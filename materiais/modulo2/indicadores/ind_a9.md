# IND — Aula 9: Bioestatística — Conceitos e Tipos de Variáveis

**Disciplina:** Indicadores de Saúde  
**Módulo:** 2 | **Tempo de estudo sugerido:** 20-25 min

---

## Relevância Clínica e Acadêmica

Bioestatística não é "só conta": é a base para interpretar dados com segurança. Em prova, a banca costuma cobrar os conceitos estruturais (população, amostra, parâmetro, estatística, tipos de variáveis e escalas) porque eles determinam se uma conclusão é válida ou não.

Na prática clínica e em saúde coletiva, esse conteúdo evita decisões ruins baseadas em leitura equivocada de dados. Se você confunde variável qualitativa com quantitativa, ou mistura erro aleatório com viés, pode escolher o método errado e tirar conclusões enganosas sobre risco, eficácia ou prioridade de intervenção.

### Figura sugerida

**Figura-ID:** `IND-A9-F01`

- **Momento:** após a relevância, antes dos conceitos centrais.
- **O que mostrar:** fluxo "pergunta clínica/epidemiológica -> população-alvo -> amostra -> coleta de variáveis -> estatística calculada -> inferência para parâmetro".
- **Tipo sugerido:** esquema didático.
- **Legenda (rascunho):** "Da pergunta ao resultado: caminho da inferência bioestatística em saúde."
- **Notas (opcional):** destacar em cor diferente os pontos onde surgem viés e erro.

## Conceitos Fundamentais (núcleo da aula)

### População e amostra

- **População:** conjunto total de indivíduos sobre os quais você quer concluir algo.
- **Amostra:** subconjunto observado da população, usado para estimar características do todo.

Exemplo em saúde: se a pergunta é "qual a prevalência de hipertensão em adultos de um município?", a população é todos os adultos do município; a amostra é o grupo efetivamente avaliado.

### Parâmetro e estatística

- **Parâmetro:** medida numérica da população (normalmente desconhecida), como a média real de glicemia de todos os pacientes com DM2 de uma rede.
- **Estatística:** medida calculada na amostra, usada para estimar o parâmetro, como a média de glicemia dos pacientes avaliados no estudo.

Resumo rápido: **parâmetro pertence à população; estatística pertence à amostra**.

### Erro e viés (não são a mesma coisa)

- **Erro aleatório:** variação imprevisível por acaso (ex.: flutuação amostral). Reduz com amostras maiores e bom desenho.
- **Viés (erro sistemático):** distorção consistente do resultado por falha de método (seleção, informação, aferição, confusão etc.). Não some apenas aumentando n.

Exemplo clássico: aferir pressão arterial com manguito inadequado gera viés de medida; já pequenas oscilações de leitura entre pacientes semelhantes representam componente aleatório.

> **Dica de Prova:** antes de olhar fórmula, identifique "quem é população, quem é amostra, qual é o parâmetro e qual estatística está sendo usada".

> **Pegadinha:** questão dizer que "aumentar amostra sempre corrige o problema". Isso pode reduzir erro aleatório, mas **não corrige viés sistemático**.

## Tipos de Variáveis e Escalas de Medida

A classificação correta da variável define apresentação dos dados, medida de resumo e testes possíveis.

### Variáveis qualitativas (categóricas)

- **Nominal:** categorias sem ordem natural.  
  Ex.: tipo sanguíneo, sexo biológico, presença/ausência de tabagismo.
- **Ordinal:** categorias com ordem, mas sem distância numérica fixa entre níveis.  
  Ex.: dor leve/moderada/intensa; classe funcional I/II/III/IV.

### Variáveis quantitativas (numéricas)

- **Discreta:** contagem em números inteiros.  
  Ex.: número de consultas no mês, número de internações no ano.
- **Contínua:** medida em escala contínua, com casas decimais possíveis.  
  Ex.: peso, altura, pressão arterial, glicemia.

### Escalas clássicas

- **Nominal:** classifica em categorias sem hierarquia.
- **Ordinal:** classifica com hierarquia.
- **Intervalar:** diferenças fazem sentido, mas zero é arbitrário (ex.: temperatura em Celsius).
- **Razão:** diferenças e proporções fazem sentido, com zero absoluto (ex.: massa corporal, tempo, concentração sérica).

## Tabela Comparativa Forte (com foco em prova e saúde)

| Conceito | Definição objetiva | Exemplo em saúde | O que a banca tenta confundir | Como acertar rápido |
|---------|---------------------|------------------|-------------------------------|---------------------|
| **População** | Universo de interesse | Todos os idosos de uma cidade | Trocar por "grupo estudado" | Pergunte: "sobre quem quero concluir?" |
| **Amostra** | Parte observada da população | 600 idosos entrevistados na UBS | Chamar de população por conveniência | Pergunte: "quem foi realmente medido?" |
| **Parâmetro** | Medida verdadeira da população | Prevalência real de diabetes nos idosos | Tratar como valor conhecido do estudo | Lembre: geralmente desconhecido |
| **Estatística** | Medida calculada na amostra | Prevalência de diabetes nos 600 idosos | Dizer que já representa a verdade do município | É estimativa do parâmetro |
| **Viés** | Erro sistemático do método | Seleção só de pacientes que frequentam UBS | Confundir com "azar amostral" | Não some só aumentando amostra |
| **Erro aleatório** | Variação por acaso | Diferença casual entre amostras equivalentes | Interpretar como falha metodológica fixa | Reduz com n maior e padronização |
| **Qualitativa nominal** | Categoria sem ordem | Grupo sanguíneo A/B/AB/O | Aplicar média | Use frequências e proporções |
| **Qualitativa ordinal** | Categoria com ordem | Estadiamento NYHA I-IV | Tratar diferença entre níveis como distância exata | Valorize hierarquia, não intervalos fixos |
| **Quantitativa discreta** | Contagem inteira | Número de crises asmáticas/mês | Tratar como contínua sem critério | Pense "conta eventos" |
| **Quantitativa contínua** | Medida em continuum | Creatinina sérica, IMC | Arredondar em categorias cedo demais | Preserve dado contínuo quando possível |
| **Escala intervalar** | Zero arbitrário | Temperatura em Celsius | Dizer que 20°C é "o dobro" de 10°C | Comparar diferenças, não razão |
| **Escala de razão** | Zero absoluto | Tempo de internação, peso | Confundir com intervalar | Permite razão (ex.: 8 é o dobro de 4) |

## Como esses conceitos aparecem em questões

### Cenário 1: estudo de prevalência

Um enunciado descreve 1.200 adultos avaliados para HAS em um bairro.  
Interpretação correta:

1. 1.200 adultos = **amostra**.
2. Percentual de HAS nessa amostra = **estatística**.
3. Percentual real de HAS de todos os adultos do bairro = **parâmetro**.

Erro comum da prova: chamar o percentual da amostra de "parâmetro definitivo".

### Cenário 2: instrumento de medida inadequado

Pesquisa de obesidade usa balança descalibrada para todos os participantes.  
Isso gera **viés sistemático de aferição**, não mero erro aleatório.

### Cenário 3: classificação de variável

Escala de dor (0-10) pode ser tratada como ordinal em muitos contextos clínicos; se o enunciado enfatizar categorias de intensidade, a leitura ordinal é a mais segura para prova conceitual.

## Erros clássicos de interpretação (e como evitar)

- Confundir **proporção amostral** com verdade populacional sem intervalo de incerteza.
- Achar que **n grande** resolve qualquer problema metodológico.
- Tratar variável **nominal** como numérica.
- Ignorar escala de medida antes de escolher resumo estatístico.
- Categorizar variável contínua cedo demais e perder informação clínica.

## Ponte com a Clínica

Na assistência e na vigilância, você interpreta dados o tempo todo: taxa de infecção, média de permanência, proporção de faltosos, número de reinternações. A qualidade da decisão depende de identificar corretamente o tipo de variável e a fonte de erro.

Exemplo prático: comparar controle glicêmico entre unidades pode ser enganoso se uma unidade mede HbA1c em todos os pacientes e outra mede só em casos mais graves (viés de seleção/informação). Sem reconhecer isso, a gestão pode punir injustamente equipes.

### Figura sugerida

**Figura-ID:** `IND-A9-F02`

- **Momento:** após a ponte com a clínica, antes da revisão final.
- **O que mostrar:** quadro 2x2 "tipo de variável x medida recomendada" com exemplos (frequência/proporção, mediana/IQR, média/DP).
- **Tipo sugerido:** infográfico.
- **Legenda (rascunho):** "Tipo de variável orienta a escolha da síntese estatística."
- **Notas (opcional):** manter poucas palavras por célula para leitura rápida em mobile.

---

## Pontos-Chave para Prova

- **População** é o alvo da inferência; **amostra** é o observado.
- **Parâmetro** descreve a população; **estatística** resume a amostra.
- **Erro aleatório** difere de **viés** (sistemático e mais perigoso).
- Variáveis **qualitativas**: nominal e ordinal.
- Variáveis **quantitativas**: discreta e contínua.
- Escalas (nominal, ordinal, intervalar e razão) mudam a interpretação possível.
- Método estatístico adequado depende do tipo de variável e do desenho.

---

## Pré-Prova

> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### Síntese para a prova

Em qualquer questão de bioestatística, primeiro identifique a arquitetura conceitual: população, amostra, parâmetro e estatística. Se você acerta esse eixo, metade da questão já está resolvida.

Depois, classifique a variável: qualitativa nominal/ordinal ou quantitativa discreta/contínua, e reconheça a escala de medida. Isso define quais medidas fazem sentido (frequência, proporção, média, mediana, dispersão) e evita escolhas incompatíveis.

Por fim, pergunte se o problema é erro aleatório ou viés. Erro aleatório reduz com n e padronização; viés exige correção de método. Essa distinção é recorrente em alternativas de alta dificuldade.

Para estudar por esta plataforma sem perder desempenho em prova, aplique a sintese em um micro-cenario numerico: identifique qual medida deve ser usada, execute uma conta simples (ou interprete a grandeza apresentada) e finalize com a decisao clinico-epidemiologica mais defensavel. Esse roteiro reduz erro por decoracao isolada e aumenta acerto em questoes de interpretacao.

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Como diferenciar |
|------------|------------|-----------------|
| **População** | **Amostra** | População = universo-alvo; amostra = subconjunto observado |
| **Parâmetro** | **Estatística** | Parâmetro é da população; estatística vem da amostra |
| **Viés** | **Erro aleatório** | Viés é sistemático; erro aleatório é variação do acaso |
| **Nominal** | **Ordinal** | Nominal sem ordem; ordinal com hierarquia |
| **Discreta** | **Contínua** | Discreta conta eventos; contínua mede em escala contínua |
| **Intervalar** | **Razão** | Intervalar tem zero arbitrário; razão tem zero absoluto |

### Frase-âncora para não esquecer

> "Em bioestatística, classificar corretamente a variável e distinguir viés de erro evita a maioria dos erros de prova."
