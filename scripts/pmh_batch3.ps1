$utf8NoBom = New-Object System.Text.UTF8Encoding $false
$base = "C:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app"

# ─── PMH A7 ────────────────────────────────────────────────────────────────────
$c = @'
# PMH — Aula 7: Beta-oxidação e Síntese de Ácidos Graxos

**Disciplina:** Processos Metabólicos Humanos
**Módulo:** 1 | **Tempo de estudo sugerido:** 10-15 min

---

## Relevância Clínica e Acadêmica

A beta-oxidação é a principal via de produção de energia no coração, no músculo esquelético em repouso e no fígado em jejum. Quando a glicose é insuficiente (jejum prolongado, diabetes descompensado), os ácidos graxos são convertidos em corpos cetônicos para abastecer o cérebro. Fármacos como fibratos (ciprofibrato) ativam PPARα e aumentam a beta-oxidação. Defeitos na beta-oxidação (ex: deficiência de MCAD) são causas importantes de morte súbita em lactentes.

---

## 1. Ativação e Transporte dos Ácidos Graxos

**Ativação (citoplasma):** Ácido graxo + CoA + ATP → Acil-CoA (via acil-CoA sintetase)

**Transporte para a mitocôndria:**
- Acil-CoA não atravessa a membrana interna mitocondrial
- Transportado como **acilcarnitina** via sistema carnitina-aciltransferase I (CAT-I) na membrana externa e CAT-II na interna
- **Malonil-CoA inibe CAT-I** — quando a síntese de AG está ativa (estado pós-prandial), o transporte de AG para beta-oxidação é inibido (evita ciclo fútil)

**Deficiência de carnitina:** ácidos graxos não entram na mitocôndria → hipoglicemia hipocetótica, miopatia, hepatopatia.

---

## 2. Beta-oxidação — Ciclo

**Local:** matriz mitocondrial
**Substrato:** Acil-CoA
**Cada ciclo produz (para AG de 16C como o palmitato):**
- 1 FADH₂
- 1 NADH
- 1 Acetil-CoA
- Acil-CoA encurtado em 2C

**Para o palmitato (C16): 7 ciclos de beta-oxidação → 8 acetil-CoA + 7 NADH + 7 FADH₂**

| Etapa | Enzima | Produto |
|-------|--------|---------|
| 1. Acil-CoA → trans-enoil-CoA | Acil-CoA desidrogenase | FADH₂ |
| 2. trans-enoil → L-3-hidroxiacil-CoA | Enoil-CoA hidratase | — |
| 3. Hidroxiacil → 3-cetoacil-CoA | L-3-hidroxiacil-CoA desidrogenase | NADH |
| 4. 3-cetoacil → acetil-CoA + acil-CoA (n-2) | Tiolase | Acetil-CoA |

---

## 3. Corpos Cetônicos

**Local de síntese:** fígado (mitocôndria)
**Condição:** excesso de acetil-CoA (jejum, DM1 descompensado, dieta cetogênica)

| Corpo cetônico | Características |
|----------------|----------------|
| **Acetoacetato** | Principal; pode ser oxidado em tecidos extra-hepáticos |
| **β-hidroxibutirato** | Forma reduzida do acetoacetato; predomina em cetoacidose grave |
| **Acetona** | Produzida por descarboxilação espontânea do acetoacetato; volátil (hálito cetônico) |

**Uso:** cérebro (após adaptação em jejum prolongado), coração, músculo renal, músculo esquelético.
**FÍGADO NÃO OXIDA CORPOS CETÔNICOS** (falta succinil-CoA transferase hepática — CoA transferase).

---

## 4. Beta-oxidação em condições especiais

| Ácido graxo | Adaptação necessária |
|-------------|---------------------|
| **AG insaturados (cis)** | Precisa de isomerase (enoil-CoA isomerase) para converter cis em trans |
| **AG de cadeia ímpar** | Último ciclo produz propionil-CoA (3C) → metilmalonil-CoA → succinil-CoA (entra no Krebs); requer vitamina B12 e biotina |
| **AG de cadeia muito longa (VLCFA)** | Oxidação inicial em peroxissomas (sistema diferente) |

---

## 5. Síntese de Ácidos Graxos (Lipogênese)

**Local:** citoplasma (fígado, tecido adiposo, glândula mamária)
**Precursor:** Acetil-CoA (via malonil-CoA)
**Enzima-chave:** **Acetil-CoA carboxilase (ACC)** — passo comprometido

| Diferença | Beta-oxidação | Síntese de AG |
|-----------|--------------|---------------|
| Local | Mitocôndria | Citoplasma |
| Cofator | FAD e NAD⁺ | NADPH |
| Transportador acil | Carnitina | ACP (acyl carrier protein) |
| Malonil-CoA | Inibidor de CAT-I (↓ beta-ox.) | Substrato |
| Regulação hormonal | Glucagon/adrenalina ↑ | Insulina ↑ |

**Regulação da ACC:**
- **Ativa:** insulina (desfosforila ACC); citrate (alostérico)
- **Inibe:** glucagon (fosforila ACC via PKA); malonilCoA feedback; AMP/AMPK

---

## Erros Clássicos em Prova (Uninove)

- **Beta-oxidação ocorre no citoplasma:** beta-oxidação ocorre na MATRIZ MITOCONDRIAL. Síntese de AG é que ocorre no citoplasma.
- **Fígado utiliza corpos cetônicos:** o fígado PRODUZ os corpos cetônicos mas não os utiliza (falta CoA transferase). Eles são exportados ao sangue para consumo em outros tecidos.
- **AG de cadeia ímpar produz só acetil-CoA:** produz propionil-CoA no último ciclo → succinil-CoA → Krebs; requer vitamina B12.
- **Malonil-CoA ativa a beta-oxidação:** malonil-CoA é INIBIDOR de CAT-I (o transportador de acilcarnitina) → malonil-CoA SUPRIME a beta-oxidação quando a síntese de AG está ativa.
- **Jejum aumenta síntese de AG:** no jejum, a síntese de AG CESSA (baixa insulina, alta glucagon → ACC fosforilada e inativa). Beta-oxidação é que aumenta no jejum.

---

## Checklist de Revisão

- [ ] Sei o papel da carnitina (transporta acil-CoA para dentro da mitocôndria)
- [ ] Sei que malonil-CoA inibe CAT-I (evita ciclo fútil — síntese e degradação simultânea)
- [ ] Sei o rendimento da beta-oxidação do palmitato (7 ciclos, 8 acetil-CoA, 7 NADH, 7 FADH₂)
- [ ] Sei que o fígado produz mas não consome corpos cetônicos
- [ ] Distingo beta-oxidação (mitocôndria, FAD+NAD⁺) de síntese de AG (citoplasma, NADPH)

---

## Ponte com a Clínica

Deficiência de MCAD (medium-chain acyl-CoA dehydrogenase — acil-CoA desidrogenase de cadeia média): doença metabólica mais comum de oxidação de AG. Manifesta-se como hipoglicemia hipocetótica em jejum (a célula não consegue oxidar AG de cadeia média → sem acetil-CoA → sem corpos cetônicos → sem substrato alternativo ao cérebro → hipoglicemia grave). A triagem neonatal (teste do pezinho ampliado) identificou a MCAD, reduzindo drasticamente a mortalidade. Sem entender a beta-oxidação, é impossível compreender por que a criança com MCAD entra em crise ao jejar por mais de 6-8 horas.

---

## Pré-Prova

> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### O que você PRECISA saber

- **Beta-oxidação:** mitocôndria; FADH₂ + NADH + acetil-CoA a cada ciclo
- **Carnitina:** transporta acil-CoA; **malonil-CoA inibe CAT-I** (evita degradar o que está sendo sintetizado)
- **Corpos cetônicos:** fígado produz; fígado NÃO consome (sem CoA transferase)
- **Síntese de AG:** citoplasma; NADPH; ACC = passo comprometido; ativada por insulina
- **MCAD deficiency:** hipoglicemia hipoCETÓTICA (sem corpos cetônicos)

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Como diferenciar |
|------------|------------|-----------------|
| Beta-oxidação | Síntese de AG | Beta-ox: mitocôndria, FAD+NAD⁺; Síntese: citoplasma, NADPH |
| Hipoglicemia hipocetótica | Hipoglicemia hipercetótica | Hipocetótica: MCAD ou hiperinsulinismo; hipercetótica: jejum normal, DM1 grave |
| Corpos cetônicos no jejum | Corpos cetônicos no DM1 | Jejum: corpos cetônicos moderados + adaptação; DM1: cetoacidose = pH < 7,3 |
| Malonil-CoA (papel em beta-ox.) | Malonil-CoA (papel em síntese) | Inibe CAT-I (bloqueia beta-ox.); é substrato da síntese de AG (doador de 2C) |

### Frase-âncora para não esquecer

> "Beta-ox na mitocôndria com FAD+NAD⁺. Carnitina carrega. Malonil-CoA freia CAT-I. Fígado cria cetona, não a usa."
'@
[System.IO.File]::WriteAllText("$base\data\materiais\pmh\pmh_a7.md", $c, $utf8NoBom)
[System.IO.File]::WriteAllText("$base\materiais\modulo1\pmh\pmh_a7.md", $c, $utf8NoBom)
Write-Host "pmh_a7 OK"

# ─── PMH A8 ────────────────────────────────────────────────────────────────────
$c = @'
# PMH — Aula 8: Colesterol, Lipoproteínas e Homeostase Lipídica

**Disciplina:** Processos Metabólicos Humanos
**Módulo:** 1 | **Tempo de estudo sugerido:** 10-15 min

---

## Relevância Clínica e Acadêmica

Colesterol e lipoproteínas são o centro da fisiopatologia da aterosclerose — principal causa de morte no mundo (IAM, AVC). As estatinas, os fármacos mais prescritos do planeta, agem bloqueando a HMG-CoA redutase. Os novos anticorpos anti-PCSK9 reduziram o LDL a níveis históricos e diminuíram eventos cardiovasculares. Entender como LDL, HDL e quilomícrons são formados, como chegam aos tecidos e como são removidos é a base da cardiologia preventiva.

---

## 1. Síntese de Colesterol

**Local:** fígado (75%), intestino, córtex adrenal, gônadas, pele
**Via:** todas as célulasque têm mitocôndrias e RER

**Passo comprometido:** Acetil-CoA → ... → **HMG-CoA** → **mevalonato**
- Enzima: **HMG-CoA redutase** (HMGCR)
- **Estatinas** (lovastatina, atorvastatina, rosuvastatina): inibidores competitivos da HMGCR

**Regulação da HMGCR:**
- Inibição: colesterol intracelular alto (via SCAP-INSIG-SREBP2 — bloqueia transcrição)
- Ativação: AMPK inibe (quando energia baixa, não síntese colesterol); insulina ativa; glucagon inibe

---

## 2. Lipoproteínas — Estrutura e Função

Todas as lipoproteínas têm: núcleo hidrofóbico (TG + ésteres de colesterol) + camada anfipática (fosfolipídios + colesterol livre + apolipoproteínas).

| Lipoproteína | Origem | Conteúdo principal | Apolipoproteínas | Função |
|-------------|--------|-------------------|------|--------|
| **Quilomícrons** | Intestino | TG (dieta) | ApoB-48, ApoE, ApoC-II | Transporte de TG dietéticos → tecidos periféricos |
| **VLDL** | Fígado | TG (endógeno) | ApoB-100, ApoC-II, ApoE | Transporte de TG hepáticos → tecidos periféricos |
| **IDL** | Plasma (VLDL → IDL) | TG + colesterol | ApoB-100, ApoE | Intermediário; captado pelo fígado ou vira LDL |
| **LDL** | Plasma (IDL → LDL) | Colesterol (rico) | ApoB-100 | Entrega colesterol a tecidos periféricos; captado pelo receptor de LDL (LDLR) |
| **HDL** | Fígado + intestino | Colesterol (pega dos tecidos) | ApoA-I | Transporte reverso de colesterol (tecido → fígado) |

---

## 3. Metabolismo de Quilomícrons e VLDL — Lipase Lipoproteica

**Lipase lipoproteica (LPL):**
- Localizada no endotélio de capilares do músculo e tecido adiposo
- Ativada por **ApoC-II** (nas lipoproteínas ricas em TG)
- Hidrolisa os TG das lipoproteínas → ácidos graxos livres que entram nas células
- Insulina ativa LPL (no jejum cai → TG acumulam no plasma = hipertrigliceridemia de jejum)

---

## 4. Receptor de LDL (LDLR) e Aterosclerose

1. LDL circulante → liga ao LDLR (ApoB-100 é o ligante)
2. Endocitose
3. Lisossomo degrada LDL → colesterol livre
4. Feedback: colesterol livre inibe HMGCR + reduz expressão de LDLR

**PCSK9:** protease que degrada LDLR → ↓ LDLR na superfície → LDL não é capturado → LDL sobe
- **Inibidores de PCSK9** (evolocumabe, alirocumabe): anticorpos que bloqueiam PCSK9 → mais LDLR → ↓↓ LDL

**Hipercolesterolemia familial (HF):** mutação no LDLR → LDL não é captado → hipercolesterolemia → aterosclerose precoce (IAM antes dos 30 anos na forma homozigótica).

---

## 5. Transporte Reverso de Colesterol (HDL)

HDL nascente (pobre em colesterol) → recebe colesterol de macrófagos/células periféricas via ABCA1 → LCAT (lecitina-colesterol-aciltransferase) esterifica o colesterol → HDL maduro → fígado (receptor SR-BI) → excretado na bile

> **HDL alto = protetor cardiovascular.** HDL baixo (< 40 mg/dL ♂ / < 50 mg/dL ♀) = fator de risco independente para aterosclerose.

---

## Erros Clássicos em Prova (Uninove)

- **Estatinas inibem HMG-CoA sintetase:** estatinas inibem HMG-CoA REDUTASE (HMGCR), não sintetase.
- **LDL tem ApoA-I:** ApoA-I é a principal apolipoproteína do HDL. LDL tem ApoB-100.
- **Quilomícrons vêm do fígado:** quilomícrons são formados no INTESTINO (para absorver gorduras da dieta). VLDL é que vem do fígado.
- **HDL alto é fator de risco:** HDL alto é PROTETOR. HDL baixo é fator de risco.
- **Hipercolesterolemia familiar = excesso na dieta:** HF é uma doença genética do LDLR — presente desde o nascimento, independentemente da dieta (embora a dieta piore).

---

## Checklist de Revisão

- [ ] Sei que HMG-CoA redutase é o alvo das estatinas (passo comprometido da síntese de colesterol)
- [ ] Identifico a fonte e função de cada lipoproteína (quilomícron = intestino, TG dieta; VLDL = fígado; LDL = colesterol; HDL = transporte reverso)
- [ ] Sei que ApoB-100 = ligante para LDLR; ApoC-II = ativador da LPL; ApoA-I = HDL
- [ ] Sei que PCSK9 degrada LDLR → LDL sobe; inibidores PCSK9 reduzem LDL
- [ ] Sei que HDL alto é protetor, não fator de risco

---

## Ponte com a Clínica

Paciente com hipercolesterolemia familial heterozigótica (LDL > 250 mg/dL), sem resposta adequada à estatina máxima. A próxima intervenção é adicionar um inibidor de PCSK9 (evolocumabe/alirocumabe). Mecanismo: a PCSK9 se liga ao LDLR durante a reciclagem → os leva para o lisossomo → LDLR é degradado. Ao bloquear a PCSK9, o LDLR é reciclado de volta à membrana → captura mais moléculas de LDL → LDL plasmático cai em 50-70% adicionais. Entender o eixo LDLR-PCSK9 é entender o mecanismo mais recente de redução de LDL aprovado para uso clínico.

---

## Pré-Prova

> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### O que você PRECISA saber

- **HMG-CoA redutase:** passo comprometido síntese colesterol; inibida por estatinas
- **Quilomícron:** intestino, TG dieta, ApoB-48, ApoC-II
- **VLDL:** fígado, TG endógeno, ApoB-100
- **LDL:** rico em colesterol, ApoB-100; captado via LDLR
- **HDL:** ApoA-I; transporte reverso; protetor cardiovascular
- **PCSK9:** degrada LDLR → ↑ LDL; inibidores PCSK9 reduzem LDL drasticamente

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Como diferenciar |
|------------|------------|-----------------|
| Quilomícron | VLDL | Quilomícron: intestino, TG dieta, ApoB-48; VLDL: fígado, TG endógeno, ApoB-100 |
| LDL | HDL | LDL: entrega colesterol (aterogênico); HDL: retira colesterol (protetor) |
| ApoB-100 | ApoC-II | ApoB-100: ligante para LDLR (LDL, VLDL); ApoC-II: ativa LPL (quilomícron, VLDL) |
| Estatina | Inibidor PCSK9 | Estatina: inibe HMGCR (síntese colesterol); PCSK9: impede degradação de LDLR |

### Frase-âncora para não esquecer

> "VLDL sai do fígado com TG e ApoB-100; perde TG na periferia (LPL com ApoC-II) → vira LDL. HDL faz sentido reverso."
'@
[System.IO.File]::WriteAllText("$base\data\materiais\pmh\pmh_a8.md", $c, $utf8NoBom)
[System.IO.File]::WriteAllText("$base\materiais\modulo1\pmh\pmh_a8.md", $c, $utf8NoBom)
Write-Host "pmh_a8 OK"

# ─── PMH A9 ────────────────────────────────────────────────────────────────────
$c = @'
# PMH — Aula 9: Aplicações Clínicas dos Lipídios

**Disciplina:** Processos Metabólicos Humanos
**Módulo:** 1 | **Tempo de estudo sugerido:** 10-15 min

---

## Relevância Clínica e Acadêmica

Esta aula une a bioquímica dos lipídios com as doenças mais prevalentes da medicina moderna: aterosclerose, dislipidemias, cetoacidose diabética, esteatose hepática (DOENÇA MAIS COMUM DO FÍGADO NO BRASIL — 30% da população), síndrome metabólica. Compreender esses mecanismos é a base de praticamente toda a cardiologia preventiva, endocrinologia e hepatologia clínica.

---

## 1. Dislipidemias — Classificação de Fredrickson

| Fenótipo | Lipoproteína elevada | TG | Colesterol | Causa |
|----------|---------------------|-----|-----------|-------|
| **I** | Quilomícrons | ↑↑↑ | Normal | Deficiência de LPL ou ApoC-II |
| **IIa** | LDL | Normal | ↑ | Hipercolesterolemia familial |
| **IIb** | LDL + VLDL | ↑ | ↑ | Hiperlipidemia familiar combinada |
| **III** | IDL (β-VLDL) | ↑ | ↑ | Deficiência de ApoE (disbetalipoproteinemia) |
| **IV** | VLDL | ↑ | Normal | Hipertrigliceridemia endógena (DM2, obesidade) |
| **V** | VLDL + quilomícrons | ↑↑↑ | ↑ | Mista; pancreatite se TG > 1000 mg/dL |

> Mais cobrados: **Tipo IIa** (LDL alto = aterosclerose precoce) e **Tipo IV** (TG alto = pancreatite, associado à obesidade/DM2).

---

## 2. Cetoacidose Diabética (CAD)

**Contexto:** DM tipo 1 (mais comum), podendo ocorrer no tipo 2 sob estresse grave.
**Mecanismo:**
1. Deficiência absoluta de insulina → células não captam glicose
2. Glucagon ↑ → ativação de lipase hormônio-sensível (LHS) → lipólise intensa
3. Ácidos graxos livres → fígado → CAT-I não inibido (malonil-CoA baixo) → beta-oxidação intensa → excesso de acetil-CoA
4. OAA escasso (usado na gliconeogênese) → acetil-CoA não entra no Krebs → vai para síntese de corpos cetônicos
5. Acetoacetato + β-hidroxibutirato acumulam → acidose metabólica com ânion gap aumentado

| Laboratório | Achado na CAD |
|-------------|--------------|
| pH | < 7,3 |
| HCO₃⁻ | < 15 mEq/L |
| Glicemia | > 250 mg/dL |
| Corpos cetônicos | ↑↑ |
| Ânion gap | ↑ (> 12) |

---

## 3. Esteatose Hepática (NAFLD/MASLD)

**Mecanismo:** excesso de ácidos graxos chegando ao fígado → beta-oxidação saturada → AG se acumulam como TG → esteatose (lipídios em gotículas nos hepatócitos)

| Estágio | Nome | Características |
|---------|------|----------------|
| Simples | Esteatose (NAFLD) | Apenas gordura no hepatócito; benigno |
| Progressivo | NASH (Esteatohepatite não alcoólica) | Esteatose + inflamação + fibrose |
| Avançado | Cirrose NASH | Fibrose extensa → hipertensão portal → carcinoma hepatocelular |

**Causas:** obesidade, DM2, resistência à insulina (síndrome metabólica), hiperlipidemia, medicamentos (amiodarona, methotrexato, corticóides), álcool (AFLD).

---

## 4. Síndrome Metabólica — Critérios

**NCEP ATP III (pelo menos 3 de 5):**
| Critério | Valor |
|----------|-------|
| Circunferência abdominal | > 102 cm ♂ / > 88 cm ♀ |
| TG | ≥ 150 mg/dL |
| HDL | < 40 mg/dL ♂ / < 50 mg/dL ♀ |
| PA | ≥ 130/85 mmHg |
| Glicemia de jejum | ≥ 100 mg/dL |

**Fisiopatologia central:** resistência à insulina → hiperinsulinemia → hipertrigliceridemia, HDL baixo, hipertensão, hiperglicemia → risco cardiovascular aumentado.

---

## Erros Clássicos em Prova (Uninove)

- **CAD é exclusiva do DM tipo 1:** pode ocorrer no DM tipo 2 sob estresse severo (infecção grave, cirurgia). Porém, é muito mais característica do DM tipo 1 (deficiência absoluta de insulina).
- **Esteatose hepática = doença alcoólica:** a NAFLD/MASLD é definida como esteatose SEM consumo significativo de álcool — ligada à síndrome metabólica. Doença hepática alcoólica (AFLD) é uma entidade separada.
- **TG alto = colesterol alto:** é possível ter hipertrigliceridemia com colesterol total normal (Fenótipo IV). Não se deve confundir hipertrigliceridemia isolada com hipercolesterolemia.
- **Síndrome metabólica = diabetes:** síndrome metabólica é um conjunto de fatores de risco (não é diagnóstico de DM). Glicemia ≥ 100 mg/dL em jejum = glicemia de jejum alterada — não é DM (que começa em ≥ 126 mg/dL).
- **Na CAD, o pH ácido vem de lactato:** o anion gap na CAD é por ACÚMULO DE CETOÁCIDOS (acetoacetato e β-hidroxibutirato) — não por lactato. Acidose lática é uma entidade diferente.

---

## Checklist de Revisão

- [ ] Sei os 5 fenótipos de Fredrickson mais cobrados (IIa = LDL; IV = TG; I = quilomícrons)
- [ ] Sei o mecanismo bioquímico completo da cetoacidose (sem insulina → lipólise → beta-ox → excesso acetil-CoA → cetonas)
- [ ] Sei o critério de síndrome metabólica: 3 de 5 (cintura, TG, HDL, PA, glicemia)
- [ ] Sei que NAFLD/MASLD é esteatose SEM álcool, associada à síndrome metabólica
- [ ] Sei que TG > 1000 mg/dL (fenótipos I e V) causa pancreatite aguda

---

## Ponte com a Clínica

Paciente de 45 anos com obesidade grau II, DM2, TG = 350 mg/dL, HDL = 32 mg/dL, PA = 138/88 mmHg e glicemia de jejum = 108 mg/dL: preenche 5 de 5 critérios da síndrome metabólica. Ultrassom de abdome mostrando ecogenicidade aumentada do parênquima hepático (esteatose). Se não tratado → progressão para NASH → cirrose → carcinoma hepatocelular. O tratamento de base é mudança de estilo de vida (perda de peso → reduz resistência à insulina → melhora todos os parâmetros). A bioquímica desta aula explica por que a perda de peso é a intervenção mais eficaz: reduz a lipólise periférica → menos AG chegando ao fígado → melhora esteatose.

---

## Pré-Prova

> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### O que você PRECISA saber

- **Fredrickson IIa:** LDL ↑, colesterol ↑, TG normal = hipercolesterolemia familial
- **Fredrickson IV:** VLDL ↑, TG ↑, colesterol normal = DM2/obesidade
- **CAD:** sem insulina → lipólise → cetogênese → pH < 7,3 + AG ↑
- **NAFLD:** esteatose sem álcool, síndrome metabólica, pode evoluir → NASH → cirrose
- **Síndrome metabólica:** 3/5: cintura, TG ≥ 150, HDL baixo, PA ≥ 130/85, glicemia ≥ 100

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Como diferenciar |
|------------|------------|-----------------|
| CAD | Estado hiperosmolar (EHH) | CAD: cetoácidos, pH < 7,3; EHH: sem cetose, hiperosmolaridade grave, mais no DM2 |
| NAFLD | AFLD | NAFLD: sem álcool, síndrome metabólica; AFLD: álcool |
| Hipertrigliceridemia | Hipercolesterolemia | TG: VLDL ou quilomícrons; Colesterol: LDL elevado |
| Tipo I (Fredrickson) | Tipo V | Tipo I: só quilomícrons; Tipo V: quilomícrons + VLDL |

### Frase-âncora para não esquecer

> "CAD: sem insulina, lipólise, cetose, AG↑. Síndrome met: 3/5 cintura-TG-HDL-PA-glicemia. NAFLD: gordura no fígado sem álcool."
'@
[System.IO.File]::WriteAllText("$base\data\materiais\pmh\pmh_a9.md", $c, $utf8NoBom)
[System.IO.File]::WriteAllText("$base\materiais\modulo1\pmh\pmh_a9.md", $c, $utf8NoBom)
Write-Host "pmh_a9 OK"

Write-Host "=== PMH Batch 3 (a7-a9) concluido ==="
