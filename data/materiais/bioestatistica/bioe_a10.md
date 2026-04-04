# Bioestatística — Aula 10: Estudo Caso-Controle

**Disciplina:** Bioestatística e Estudos em Saúde
**Módulo:** 4 | **Tempo de estudo sugerido:** 10-15 min

---

## Relevância Clínica e Acadêmica

O estudo caso-controle é o design mais eficiente para investigar doenças raras e para gerar hipóteses etiológicas rapidamente. Foi com esse design que Doll e Hill (1950) estabeleceram a associação entre tabagismo e câncer de pulmão, e que epidemiologistas identificaram a causa da Síndrome da Imunodeficiência Adquirida antes mesmo do HIV ser conhecido. A Uninove cobra sua lógica, o cálculo do Odds Ratio (OR), a distinção em relação à coorte e as principais fontes de viés.

---

## 1. Definição e Lógica do Desenho

No estudo caso-controle, os participantes são selecionados com base no **desfecho** (doença), não na exposição. Os **casos** têm a doença; os **controles** não têm. Ambos os grupos são então interrogados (ou seus registros são consultados) para verificar qual foi a exposição no passado.

O raciocínio temporal é "para trás no tempo" — parte do desfecho (efeito, presente) em direção à exposição (causa, passado). É um estudo retrospectivo por natureza. A medida de efeito não é o risco relativo, mas o **Odds Ratio (OR)** — razão entre as odds de ter sido exposto nos casos versus nos controles.

---

## 2. Seleção de Casos e Controles

### 2.1 Casos
Devem ser casos incidentes (novos), não prevalentes, para evitar o viés de prevalência. Devem ser definidos por critérios diagnósticos claros e objetivos. Idealmente, são casos de base populacional (registro de câncer, registro hospitalar representativo).

### 2.2 Controles
Devem vir da mesma população-fonte que geraria os casos — ou seja, se um controle desenvolvesse a doença, seria elegível como caso. A seleção incorreta de controles é uma das maiores fontes de viés em estudos caso-controle.

**Pareamento:** casos e controles podem ser pareados por características como sexo, idade ou comorbidades para controlar confundimento. O pareamento individual (1:1) ou em grupo pode aumentar a eficiência, mas exige análise estatística específica (McNemar para pareado).

---

## 3. Medida de Efeito: Odds Ratio (OR)

O OR é a razão entre as odds de exposição nos casos e a odds de exposição nos controles:

OR = (casos expostos / casos nao expostos) / (controles expostos / controles nao expostos)

Usando a tabela 2x2:

|  | Casos | Controles |
|---|---|---|
| **Expostos** | a | b |
| **Nao expostos** | c | d |

OR = (a x d) / (b x c) — produto cruzado

- **OR = 1:** sem associação
- **OR maior que 1:** exposição associada a maior odds da doença (fator de risco)
- **OR menor que 1:** exposição associada a menor odds da doença (fator protetor)

> **Dica de Prova:** Quando a doença é rara (prevalência menor que 10%), OR se aproxima do RR e pode ser interpretado quase da mesma forma. Quando a doença é comum, OR superestima (se OR maior que 1) ou subestima (se OR menor que 1) o verdadeiro RR.

---

## 4. Vantagens do Estudo Caso-Controle

**Eficiência para doenças raras:** como selecionamos os casos diretamente, é possível estudar doenças com incidência de 1:10.000 ou menor, o que exigiria coortes imensas.

**Rapidez e custo:** o estudo é retrospectivo — os dados de exposição já existem (prontuários, entrevistas recordatórias). Não há período de espera pelo desfecho.

**Estudo de múltiplas exposições para um único desfecho:** permite investigar dezenas de potenciais fatores de risco para uma doença de interesse em uma única análise.

**Adequado para doenças com longa latência:** como cânceres ocupacionais, em que esperar décadas por uma coorte seria inviável.

---

## 5. Limitações do Estudo Caso-Controle

### 5.1 Viés de Recall (Memória)
Casos tendem a recordar melhor (ou de forma diferente) suas exposições passadas do que controles, porque pensam ativamente nas possíveis causas de sua doença. Isso pode criar uma associação artificial. Exemplo: gestante com filho malformado tende a lembrar mais e relatar mais detalhes de exposições durante a gravidez do que gestante com filho saudável.

### 5.2 Viés de Seleção de Controles
A escolha inadequada dos controles é a principal causa de viés sistemático no caso-controle. Controles hospitalares podem não representar a população-fonte dos casos. Exemplos: controles com outra doença relacionada à exposição investigada (viés de Berkson).

### 5.3 Impossibilidade de Calcular Incidência
Como a proporção de casos e controles é definida pelo pesquisador (não pela natureza), não é possível calcular incidência nem RR diretamente — apenas OR.

### 5.4 Não é Adequado para Exposições Raras
Se a exposição é muito rara, poucos casos e controles terão sido expostos, tornando o estudo insuficientemente potente.

> **Pegadinha:** O viés de recall afeta CASOS mais do que controles — por isso, subestima ou superestima a associação. Controles hospitalares introduzem viés de seleção especifico chamado viés de Berkson.

---

## 6. Tabela Comparativa com a Coorte

| Característica | Coorte | Caso-Controle |
|---|---|---|
| Seleção pela | Exposição | Desfecho |
| Direção temporal | Causa para efeito | Efeito para causa |
| Medida de efeito | RR (incidência) | OR (odds) |
| Doenças raras | Inadequado | Ideal |
| Doenças comuns | Adequado | Menos eficiente |
| Viés principal | Perda de seguimento | Viés de recall |
| Custo e tempo | Alto, longo | Menor, mais rápido |

---

## Pontos-Chave para Prova

- **Caso-controle:** seleciona pelo desfecho, investiga exposição passada.
- **Medida:** OR = produto cruzado (a x d) / (b x c).
- **OR aproxima RR quando a doença eh rara** (prevalência menor que 10%).
- **Ideal para:** doenças raras, múltiplas exposições, estudo rápido.
- **Viés de recall:** casos lembram mais das exposições do que controles.
- **Viés de Berkson:** controles hospitalares podem estar associados à exposição por outra via.
- **NAO calcula incidência** — apenas OR.

---

## Ponte com a Clínica

Na investigação de surtos e doenças emergentes, o caso-controle é o design de escolha quando o desfecho é raro ou a urgência não permite uma coorte. Na crise da talidomida (1959-1962), estudos caso-controle confirmaram rapidamente a associação entre talidomida e focomelia. Em surtos alimentares, o caso-controle compara dietas de quem adoeceu versus quem não adoeceu na mesma refeição — identificando o alimento contaminado em dias ou semanas.

---

## Pré-Prova

> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### O que você PRECISA saber

- **Caso-controle:** casos (tem a doença) vs controles (nao tem). Compara exposicao passada.
- **OR = (a x d) / (b x c)** — produto cruzado da tabela 2x2.
- **OR aproxima RR quando doença rara** (prevalência menor que 10%).
- **Ideal para doenças raras** — coorte seria impraticável.
- **Viés de recall:** principal viés — casos recordam a exposição de forma diferente.
- **NAO calcula incidência nem RR** diretamente.

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Como diferenciar |
|------------|------------|-----------------|
| OR | RR | OR: caso-controle (odds); RR: coorte (riscos/incidências) |
| Viés de recall | Viés de seleção | Recall: memória diferencial entre casos e controles; Seleção: controles nao representam a população-fonte |
| Caso-controle para doença rara | Coorte para doença rara | Caso-controle: eficiente; Coorte: precisaria de n enorme |
| Casos incidentes | Casos prevalentes | Incidentes: novos; Prevalentes: existentes — evitar prevalentes para nao ter vies de sobrevivencia |

### Frase-âncora para não esquecer

> "Caso-controle: do efeito para a causa, mede OR. Ideal para doenças raras. Viés de recall é o inimigo numero um."