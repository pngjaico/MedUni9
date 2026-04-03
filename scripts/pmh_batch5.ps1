$utf8NoBom = New-Object System.Text.UTF8Encoding $false
$base = "C:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app"

# ─── PMH A12 ────────────────────────────────────────────────────────────────────
$c = @'
# PMH — Aula 12: Biossíntese e Degradação de Nucleotídeos

**Disciplina:** Processos Metabólicos Humanos
**Módulo:** 1 | **Tempo de estudo sugerido:** 10-15 min

---

## Relevância Clínica e Acadêmica

O metabolismo de nucleotídeos é o alvo de três das classes farmacológicas mais importantes em medicina: quimioterápicos (metotrexato, 5-fluorouracil — bloqueiam síntese de pirimidinas/purinas), antirretrovirais (análogos de nucleosídeos — zidovudina, tenofovir) e o tratamento da gota (alopurinol — inibe xantina oxidase). A doença de Lesch-Nyhan, por déficit de HGPRT (enzima de salvage), demonstra a importância dessa via no SNC. Entender síntese e degradação de nucleotídeos é entender o mecanismo de ação desses fármacos essenciais.

---

## 1. Visão Geral: Purinas vs. Pirimidinas

| | Purinas (A, G) | Pirimidinas (C, T, U) |
|-|----------------|----------------------|
| **Estrutura** | Base bicíclica | Base monocíclica |
| **Vias de síntese** | De novo (fígado) + salvage | De novo + salvage |
| **Degradação final** | Ácido úrico (em humanos) | CO₂ + NH₃ + β-alanina |
| **Doença de déficit** | Gota, Lesch-Nyhan (déficit salvage) | Acidúria orótica (déficit de novo) |

---

## 2. Síntese De Novo de Purinas

**Local:** fígado (principal) e outros tecidos
**Substrato inicial:** ribose-5-fosfato (da via das pentoses) → PRPP
**Enzima comprometida:** PRPP amidotransferase (1ª etapa)
**Passos (10 reações):** constrói o anel de purina sobre a ribose-5-P usando: glutamina, aspartato, glicina, CO₂, formiato (N¹⁰-formil-THF — requer ácido fólico para os passos N9 e N1)
**Produto final:** IMP (inosinato) → AMP ou GMP

> **Metotrexato e aminopterina** inibem a dihidrofolato redutase (DHFR) → THF cai → síntese de purinas bloqueada → células em proliferação param → quimioterapia, imunossupressão.

---

## 3. Via de Salvage (Reutilização)

O salvage reconstitui nucleotídeos a partir de bases livres (oriundas de degradação de ácidos nucleicos):

| Enzima | Substrato | Produto |
|--------|-----------|---------|
| **HGPRT** (hipoxantina-guanina fosforribosiltransferase) | Hipoxantina ou guanina + PRPP | IMP ou GMP |
| **APRT** (adenina fosforribosiltransferase) | Adenina + PRPP | AMP |

**Deficiência de HGPRT → Doença de Lesch-Nyhan:**
- Ligada ao X (meninos)
- Sem HGPRT: hipoxantina e guanina não são reutilizadas → degradadas para **ácido úrico**
- **Manifestações:** hiperuricemia grave + lesões automutilantes (mordedura do lábio/dedos), coreoatetose, déficit cognitivo, gota
- Tratamento: alopurinol reduz ácido úrico, mas não corrige o dano neurológico (que é por outros mecanismos)

---

## 4. Degradação de Purinas → Ácido Úrico

**Sequência:** AMP → adenosina → inosina → hipoxantina → xantina → **ácido úrico**
**Enzima final:** **Xantina oxidase** (converte hipoxantina → xantina → ácido úrico)

**Ácido úrico em humanos:** pouco solúvel → precipita como cristais de urato monossódico → articulações (gota), rins (cálculos de ácido úrico)

**Alopurinol:** análogo estrutural da hipoxantina → inibe e é substrato da xantina oxidase → reduz produção de ácido úrico → tratamento da gota crônica e prevenção da síndrome de lise tumoral.

---

## 5. Síntese De Novo de Pirimidinas

**Local:** citoplasma (diferente das purinas — purinas constroem o anel sobre a ribose; pirimidinas formam o anel antes de ligar à ribose)
**Enzima comprometida:** **CPS II** (carbamoil-fosfato sintetase II) — citoplásmica (diferente de CPS I do ciclo da ureia — mitocondrial!)
**Produto inicial:** UMP → UDP → UTP → CTP

**5-Fluorouracil (5-FU):**
- Análogo de uracila → inibe timidilato sintase → bloqueia síntese de TMP (timidina) → sem DNA → apoptose em células em proliferação
- Quimioterápico para tumor colorretal, gástrico, mama

---

## Erros Clássicos em Prova (Uninove)

- **CPS II (síntese de pirimidinas) = CPS I (ciclo da Ureia):** são DIFERENTES: CPS I é mitocondrial (ciclo da ureia); CPS II é citosólica (síntese de pirimidinas). Substratos e mecanismos distintos.
- **Alopurinol cura a gota aguda:** alopurinol é para PROFILAXIA/crônico. A gota aguda é tratada com anti-inflamatórios (colchicina, AINEs, corticóides). Iniciar alopurinol durante a crise piora a mobilização de cristais!
- **Lesch-Nyhan tem prognóstico idêntico à gota:** Lesch-Nyhan inclui automutilação, coreoatetose e déficit cognitivo (consequências neurológicas da falta de HGPRT no SNC) — bem mais grave que gota simples.
- **Ácido fólico bloqueia purinas e pirimidinas:** folato é ESSENCIAL para a síntese DE NOVO de purinas (dois passos com N¹⁰-formil-THF). Por isso metotrexato (anti-folato) afeta tanto purinas quanto pirimidinas indiretamente.
- **Síndrome de lise tumoral = apenas hiperpotassemia:** síndrome de lise tumoral libera purinas (hiperuricemia → nefropatia por urato), fosfato, potássio e causa hipocalcemia (fosfato precipita com cálcio). O tratamento preventivo inclui alopurinol + rasburicase + hidratação.

---

## Checklist de Revisão

- [ ] Distingo purinas (bicíclicas, degradam para ácido úrico) de pirimidinas (monocíclicas, degradam para CO₂ + NH₃)
- [ ] Sei que HGPRT deficiente causa Lesch-Nyhan (hiperuricemia + automutilação + coreoatetose)
- [ ] Sei o mecanismo do alopurinol (inibe xantina oxidase → ↓ ácido úrico; profilaxia, não crise aguda)
- [ ] Distingo CPS I (mitocôndria, ciclo ureia) de CPS II (citoplasma, pirimidinas)
- [ ] Sei que metotrexato inibe DHFR → ↓ THF → bloqueia síntese de purinas de novo

---

## Ponte com a Clínica

Paciente com leucemia linfoblástica aguada (LLA) inicia quimioterapia intensa. No 2° dia: creatinina sobe, ácido úrico = 18 mg/dL, K⁺ = 6,5 mEq/L, fosfato = 8 mg/dL, Ca²⁺ = 6 mg/dL. Diagnóstico: síndrome de lise tumoral. Células tumorais destruídas liberam ácidos nucleicos → purinas degradadas → ácido úrico → nefropatia por urato. A prevenção inclui: alopurinol ou rasburicase (converte ácido úrico em alantoína, mais solúvel) antes do início da quimioterapia. Sem entender a via de degradação das purinas, é impossível compreender por que a rasburicase funciona e o alopurinol age em etapa diferente.

---

## Pré-Prova

> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### O que você PRECISA saber

- **Purinas:** bicíclicas (A, G); degradam → ácido úrico; síntese de novo precisa de folato
- **Pirimidinas:** monocíclicas (C, T, U); degradam → CO₂, NH₃; síntese = CPS II no citoplasma
- **Xantina oxidase:** hipoxantina → xantina → ácido úrico; **inibida por alopurinol**
- **HGPRT:** salvage de hipoxantina + guanina; deficiência = **Lesch-Nyhan** (hiperuricemia + automutilação + neurológico)
- **Metotrexato:** inibe DHFR → ↓ THF → bloqueia síntese purinas de novo
- **CPS I ≠ CPS II:** I = mitocôndria (ureia); II = citoplasma (pirimidinas)

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Como diferenciar |
|------------|------------|-----------------|
| Lesch-Nyhan | Gota primária | Lesch-Nyhan: HGPRT deficiente + neurológico + automutilação; gota: hiperuricemia sem esses achados |
| Alopurinol | Colchicina | Alopurinol: profilaxia crônica (↓ produção de ácido úrico); Colchicina: crise aguda (inibe inflamação) |
| CPS I | CPS II | CPS I: mitocôndria, ciclo da ureia, ativada por N-acetilglutamato; CPS II: citoplasma, pirimidinas |
| 5-FU | Metotrexato | 5-FU: inibe timidilato sintase (pirimidinas); Metotrexato: inibe DHFR (purinas de novo) |

### Frase-âncora para não esquecer

> "Purinas → ácido úrico (xantina oxidase = alvo do alopurinol). HGPRT ausente = Lesch-Nyhan. CPS I = ureia = mitocôndria; CPS II = pirimidinas = citoplasma."
'@
[System.IO.File]::WriteAllText("$base\data\materiais\pmh\pmh_a12.md", $c, $utf8NoBom)
[System.IO.File]::WriteAllText("$base\materiais\modulo1\pmh\pmh_a12.md", $c, $utf8NoBom)
Write-Host "pmh_a12 OK"

# ─── PMH A13 ────────────────────────────────────────────────────────────────────
$c = @'
# PMH — Aula 13: Integração Metabólica entre Órgãos

**Disciplina:** Processos Metabólicos Humanos
**Módulo:** 1 | **Tempo de estudo sugerido:** 10-15 min

---

## Relevância Clínica e Acadêmica

Nenhum órgão funciona de forma isolada. O fígado coordena o metabolismo sistêmico; o músculo é o maior reservatório de aminoácidos; o tecido adiposo o maior reservatório energético; o cérebro tem a demanda mais constante. Entender como esses órgãos "conversam" via substratos metabólicos e hormônios é fundamental para compreender as respostas ao jejum, ao exercício, à sepse e ao diabetes. É também o que explica por que a cirurgia bariátrica melhora o diabetes antes mesmo da perda de peso significativa.

---

## 1. Especializações Metabólicas por Órgão

| Órgão | Principal substrato em repouso | Substrato em jejum prolongado | NÃO pode usar |
|-------|-------------------------------|------------------------------|---------------|
| **Fígado** | Glicose, AG, aminoácidos (versátil) | AG → corpos cetônicos; gliconeogênese | Corpos cetônicos para energia (exporta) |
| **Músculo em repouso** | AG (beta-oxidação) | AG + corpos cetônicos | Glicose (insulino-dependente para entrada via GLUT4) sem insulina |
| **Músculo em exercício intenso** | Glicogênio local (glicose) | Glicogênio + AG | — |
| **Cérebro** | Glicose exclusiva (em condições normais) | Corpos cetônicos (> 3 dias de jejum) | AG de cadeia longa (não atravessam a BHE) |
| **Hemácia** | Glicose (glicólise; sem mitocôndria) | Glicose | Qualquer outro substrato |
| **Coração** | AG (60-70% do ATP vem de beta-oxidação) | AG + corpos cetônicos | Depende de O₂ |
| **Tecido adiposo** | Glicose (síntese de glicerol-P para TG) | Lipólise (libera AG) | — |

---

## 2. Ciclos Metabólicos de Integração

### Ciclo de Cori (Lactato-Glicose)
1. Músculo em exercício intenso → glicólise anaeróbica → lactato
2. Lactato entra no sangue → fígado
3. Fígado: lactato → piruvato (lactato desidrogenase) → gliconeogênese → glicose
4. Glicose → sangue → músculo
**Resultado:** transfere o "custo energético" da gliconeogênese para o fígado (o músculo "empurroa conta" ao fígado)

### Ciclo Alanina-Glicose
1. Músculo em catabolismo → transaminação de aminoácidos → alanina + piruvato
2. Alanina exportada ao fígado
3. Fígado: alanina → piruvato (transaminase) → gliconeogênese → glicose
4. Glicose → sangue → músculo + outros tecidos
**Resultado:** transporte seguro de nitrogênio do músculo ao fígado (sem amônia livre)

---

## 3. Papel de Cada Órgão nos Estados Metabólicos

### Estado pós-prandial (insulina dominante):
- **Fígado:** capta glicose, sintetiza glicogênio, síntese de AG e VLDL
- **Músculo:** capta glicose (GLUT4), sintetiza glicogênio muscular, síntese proteica
- **Tecido adiposo:** LPL ativa (insulina) → capta AG de quilomícrons/VLDL → estoca TG

### Estado de jejum (glucagon dominante):
- **Fígado:** glicogenólise → gliconeogênese (a partir de lactato, alanina, glicerol) → exporta glicose
- **Músculo:** mobiliza glicogênio local; libera alanina/lactato
- **Tecido adiposo:** lipólise → AG + glicerol → sangue
- **Cérebro:** continua consumindo glicose (prioridade máxima)

### Jejum prolongado (> 24-48h):
- Glicogênio hepático esgotado
- **Gliconeogênese intensa** (aminoácidos musculares + glicerol)
- **Cetogênese:** AG → acetil-CoA → corpos cetônicos
- Após 3-5 dias: **cérebro adapta** → usa 70% de corpos cetônicos (reduz demanda de glicose)

---

## 4. Microbiota Intestinal e Metabolismo

| Produto da microbiota | Via | Impacto metabólico |
|-----------------------|-----|-------------------|
| **Ácidos graxos de cadeia curta (AGCC):** butirato, propionato, acetato | Fermentação de fibras | Butirato: energia para colonócitos; propionato: substrato gliconeogênese no fígado; acetato: lipogênese |
| **Ácidos biliares secundários** | Conversão de ácidos biliares primários | Ativação de FXR e TGR5 → regulação glicose + energia |
| **Produção de vitaminas K₂, B12** | Síntese bacteriana | Suplementação endógena |
| **Disbiose → permeabilidade intestinal** | LPS bacteriano → circulação portal | Inflamação hepática → NAFLD, resistência à insulina |

---

## Erros Clássicos em Prova (Uninove)

- **Fígado usa corpos cetônicos para energia:** o fígado PRODUZ corpos cetônicos mas não tem succinil-CoA transferase → não pode utilizá-los. Eles são exportados para outros tecidos.
- **Músculo contribui para manter a glicemia:** músculo não tem G6-fosfatase → não libera glicose → não contribui diretamente para a glicemia. Contribui indiretamente via ciclo de Cori e ciclo alanina-glicose.
- **Hemácias usam corpos cetônicos no jejum:** hemácias NÃO TÊM mitocôndria → não podem usar corpos cetônicos → dependem EXCLUSIVAMENTE de glicose.
- **O cérebro nunca usa corpos cetônicos:** o cérebro usa exclusivamente glicose em condições normais, mas ADAPTA-SE a usar corpos cetônicos em jejum prolongado (> 3 dias).
- **Ciclo de Cori gera mais energia que a glicólise direta:** o ciclo de Cori tem CUSTO ENERGÉTICO liquido — o fígado usa 6 ATP para reconverter 2 lactatos em glicose, mas o músculo só gerou 2 ATP. É uma solução de emergência, não eficiente.

---

## Checklist de Revisão

- [ ] Sei que hemácias dependem exclusivamente de glicose (sem mitocôndria)
- [ ] Sei que fígado produz corpos cetônicos mas não os usa (diferencial crítico)
- [ ] Descrevo o ciclo de Cori (lactato muscular → glicose hepática)
- [ ] Descrevo o ciclo alanina-glicose (alanina muscular → glicose hepática)
- [ ] Sei que o cérebro se adapta a usar corpos cetônicos após 3-5 dias de jejum

---

## Ponte com a Clínica

Após cirurgia bariátrica do tipo bypass gástrico em Y-de-Roux, pacientes com DM2 têm melhora da glicemia ANTES de perder peso significativo. O mecanismo: derivação intestinal → comida atinge o íleo distal mais cedo → ↑ liberação de GLP-1 e peptídeo YY pelo intestino distal → aumento da secreção de insulina glicose-dependente + supressão do glucagon. Além disso, a mudança na microbiota intestinal induzida pela cirurgia altera a produção de AGCC e ácidos biliares → regulação do metabolismo de glicose via FXR/TGR5 no fígado e intestino. Entender a integração metabólica entre órgãos é o que explica esse efeito surpreendente.

---

## Pré-Prova

> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### O que você PRECISA saber

- **Hemácia:** só glicose (sem mitocôndria). **Cérebro:** glicose normal + corpos cetônicos após 3-5 dias
- **Fígado:** produz corpos cetônicos, NÃO os usa; faz gliconeogênese
- **Ciclo de Cori:** lactato muscular → glicose hepática (custo no fígado)
- **Ciclo alanina-glicose:** alanina muscular → glicose hepática (transporta nitrogênio seguro)
- **Músculo:** não contribui para glicemia diretamente (sem G6-fosfatase)

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Como diferenciar |
|------------|------------|-----------------|
| Ciclo de Cori | Ciclo alanina-glicose | Cori: carbono (lactato → glicose); Alanina: carbono + nitrogênio (alanina → glicose) |
| Fígado | Músculo | Fígado: gliconeogênese + exporta glicose; músculo: usa glicogênio localmente |
| Cérebro em jejum curto | Cérebro em jejum > 3 dias | Jejum curto: só glicose; > 3 dias: adapta e usa 70% de corpos cetônicos |
| Hemácia | Neurônio | Hemácia: SEMPRE só glicose; neurônio: adapta a corpos cetônicos em jejum prolongado |

### Frase-âncora para não esquecer

> "Cori = lactato volta como glicose. Alanina = nitrogênio + carbono voltam. Hemácia: só glicose SEMPRE. Fígado: faz cetona, não usa."
'@
[System.IO.File]::WriteAllText("$base\data\materiais\pmh\pmh_a13.md", $c, $utf8NoBom)
[System.IO.File]::WriteAllText("$base\materiais\modulo1\pmh\pmh_a13.md", $c, $utf8NoBom)
Write-Host "pmh_a13 OK"

Write-Host "=== PMH Batch 5 (a12-a13) concluido ==="
