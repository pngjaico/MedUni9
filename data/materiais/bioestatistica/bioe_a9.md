# Bioestatística — Aula 9: Estudo de Coorte

**Disciplina:** Bioestatística e Estudos em Saúde
**Módulo:** 4 | **Tempo de estudo sugerido:** 10-15 min

---

## Relevância Clínica e Acadêmica

O estudo de coorte é o design observacional mais próximo do experimento — por isso ocupa um nível elevado na hierarquia de evidências. Nele, a temporalidade fica clara: os participantes são selecionados pela exposição e acompanhados ao longo do tempo até desenvolver (ou não) o desfecho. Framingham, Nurses Health Study e UK Biobank são coortes que geraram décadas de evidências sobre doenças cardiovasculares, câncer e mortalidade. A Uninove cobra a lógica do desenho, o cálculo do Risco Relativo e as vantagens e limitações específicas desse tipo de estudo.

---

## 1. Definição e Lógica do Desenho

No estudo de coorte, os participantes são selecionados com base na **exposição** (não na doença), no início do estudo são livres do desfecho de interesse, e são **seguidos ao longo do tempo** para observar quem desenvolve o desfecho.

O raciocínio temporal é "para frente no tempo" — parte da exposição (causa) em direção ao desfecho (efeito). Por isso, é possível calcular a **incidência** do desfecho em cada grupo e mensurar diretamente o **Risco Relativo (RR)**.

---

## 2. Tipos de Coorte

### 2.1 Coorte Prospectiva
Os participantes são identificados no presente e acompanhados para o futuro. A coleta de dados ocorre em tempo real, à medida que os eventos acontecem. Permite coletar exposições com grande precisão e detalhe, mas exige anos ou décadas de seguimento — custo e tempo elevados.

Exemplos: Framingham Heart Study (seguimento de 70 anos), Nurses Health Study (1976-presente), estudos de vacinação com seguimento pós-campanha.

### 2.2 Coorte Retrospectiva (Histórica)
Os participantes são identificados a partir de registros passados (prontuários, fichas de trabalho, registros de exposição ocupacional), e o seguimento já ocorreu no passado — o pesquisador analisa registros históricos. Mais rápida e barata do que a prospectiva, mas depende da qualidade dos registros existentes.

Exemplo: estudo sobre operários expostos a asbesto usando fichas históricas de emprego e prontuários médicos para calcular incidência de mesotelioma décadas depois.

> **Dica de Prova:** Na coorte retrospectiva, os dados já existem no passado, mas O RACIOCÍNIO ainda é prospectivo: parte da exposição em direção ao desfecho. Isso a diferencia do estudo caso-controle.

---

## 3. Medida de Efeito: Risco Relativo (RR)

O **Risco Relativo** é a medida de associação clássica do estudo de coorte:

RR = incidencia nos expostos / incidencia nos nao expostos

- **RR = 1:** sem diferença de risco entre grupos
- **RR maior que 1:** exposição associada a maior risco (fator de risco)
- **RR menor que 1:** exposição protege contra o desfecho (fator protetor)

**Risco Atribuível (RA):** mostra a diferença absoluta de incidência.

RA = incidencia nos expostos menos incidencia nos nao expostos

**Número Necessário para Causar Dano (NNH):** inverso do RA — quantos expostos são necessários para que um desfecho adicional ocorra.

---

## 4. Tabela 2x2 da Coorte

|  | Desfecho presente | Desfecho ausente | Total |
|---|---|---|---|
| **Expostos** | a | b | a+b |
| **Nao expostos** | c | d | c+d |

Incidência nos expostos = a / (a+b)
Incidência nos não expostos = c / (c+d)
RR = [a/(a+b)] / [c/(c+d)]

---

## 5. Vantagens da Coorte

**Temporalidade clara:** a exposição precede o desfecho por definição — é possível inferir causalidade com mais confiança do que em estudos transversais ou caso-controle.

**Permite calcular incidência e RR diretamente:** é a única forma de medir incidência em um grupo exposto em estudo observacional.

**Adequada para múltiplos desfechos:** um único estudo de coorte pode avaliar o impacto de uma exposição sobre vários desfechos diferentes.

**Adequada para estudar doenças frequentes:** ao contrário do caso-controle, a coorte exige que o desfecho ocorra com alguma frequência para ser estatisticamente viável.

---

## 6. Limitações da Coorte

### 6.1 Perda de Seguimento (Attrition)
Participantes que abandonam o estudo antes do desfecho podem introduzir viés se a perda não for aleatória — por exemplo, se os mais doentes abandonam mais. Perdas maiores que 20% comprometem a validade do estudo.

### 6.2 Custo e Tempo
Coortes prospectivas para desfechos de longa latência (cânceres, demência, DCV) exigem décadas de seguimento e recursos imensos.

### 6.3 Inadequada para Doenças Raras
Se o desfecho é raro, mesmo uma coorte grande pode não ter casos suficientes para análise — o caso-controle é mais eficiente nessa situação.

### 6.4 Viés do Trabalhador Saudável
Em coortes ocupacionais, os trabalhadores tendem a ser mais saudáveis do que a população geral (precisam estar aptos para trabalhar). A comparação com a população geral pode subestimar o risco associado à exposição ocupacional.

> **Pegadinha:** "Perda de seguimento diferencial" (quando os que abandonam diferem sistematicamente dos que ficam) é um viés de seleção específico das coortes. Pequena perda aleatória é tolerável; perda diferencial invalida os resultados.

---

## 7. Hierarquia da Evidência

Na pirâmide de evidências observacionais, a coorte prospectiva está acima do caso-controle e do transversal porque:
1. Mede incidência e RR diretamente
2. A temporalidade é garantida pelo design
3. A exposição é medida antes do desfecho, evitando viés de memória

Porém, como estudo observacional, a coorte não pode controlar todos os fatores de confundimento — para isso, é necessário o ensaio clínico randomizado (RCT).

---

## Pontos-Chave para Prova

- **Coorte:** seleciona pela exposição, acompanha para o desfecho — "causa para efeito".
- **Medida:** Risco Relativo (RR) e incidência em cada grupo.
- **Prospectiva:** acompanha para o futuro. Retrospectiva: usa registros do passado.
- **Vantagem:** temporalidade clara, mede incidência diretamente.
- **Limitação:** cara, lenta, inadequada para desfechos raros, sujeita a perda de seguimento.
- **Perda diferencial:** viés de seleção específico de coortes.
- **Viés do trabalhador saudavel:** subestima risco em estudos ocupacionais.

---

## Ponte com a Clínica

O Framingham Heart Study, iniciado em 1948, é o exemplo clássico de coorte prospectiva. A partir do seguimento de moradores de Framingham, Massachusetts, foram identificados os principais fatores de risco cardiovascular (hipertensão, hipercolesterolemia, tabagismo, diabetes, obesidade), e foram desenvolvidos os escores de risco de Framingham usados rotineiramente na prática clínica. Sem essa coorte, não saberíamos que hipertensão sistólica é um fator de risco independente para AVC — desfecho que só fica claro anos após a exposição.

---

## Pré-Prova

> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### O que você PRECISA saber

- **Coorte:** exposição primeiro, depois desfecho — temporalidade garantida.
- **RR:** medida de efeito da coorte = incidência expostos / incidência não expostos.
- **Prospectiva:** dados coletados para frente. Retrospectiva: dados históricos existentes.
- **Vantagem sobre caso-controle:** mede incidência, sem viés de recall.
- **Inadequada para:** doenças raras (precisa de muitos casos).
- **Viés de perda diferencial:** compromete validade se os que abandonam diferem dos que ficam.

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Como diferenciar |
|------------|------------|-----------------|
| Coorte prospectiva | Coorte retrospectiva | Prospectiva: segue para o futuro; Retrospectiva: analisa registros do passado |
| Coorte | Caso-controle | Coorte: exposição → desfecho (calcula RR); Caso-controle: desfecho → exposição (calcula OR) |
| RR | OR | RR: coorte, razão de incidências; OR: caso-controle, razão de odds de exposição |
| Perda aleatória | Perda diferencial | Aleatória: tolerável; Diferencial: compromete validade (viés de seleção) |

### Frase-âncora para não esquecer

> "Coorte vai da exposição ao desfecho — por isso calcula RR e garante temporalidade. Cara, lenta, mas a mais próxima do experimento entre os observacionais."