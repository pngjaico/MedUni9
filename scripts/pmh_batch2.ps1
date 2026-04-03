$utf8NoBom = New-Object System.Text.UTF8Encoding $false
$base = "C:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app"

# ─── PMH A4 ────────────────────────────────────────────────────────────────────
$c = @'
# PMH — Aula 4: Ciclo de Krebs e Fosforilação Oxidativa

**Disciplina:** Processos Metabólicos Humanos
**Módulo:** 1 | **Tempo de estudo sugerido:** 10-15 min

---

## Relevância Clínica e Acadêmica

O ciclo de Krebs e a fosforilação oxidativa (FO) são responsáveis por ~90% da produção de ATP do organismo aeróbico. Qualquer bloqueio nesse sistema resulta em morte celular rápida: venenos como cianeto (bloqueia complexo IV) e monóxido de carbono (CO — bloqueia hemoglobina E complexo IV) causam morte por "sufocamento celular" apesar do oxigênio disponível. Fármacos como metformina e rotenona (inseticida) inibem o complexo I. Mitocôndrias disfuncionais são centrais na fisiopatologia de doenças neurodegenerativas (Parkinson, Alzheimer) e no envelhecimento.

---

## 1. Ciclo de Krebs (Ciclo do Ácido Cítrico) — Visão Geral

**Local:** matriz mitocondrial
**Entrada:** Acetil-CoA (2C) + OAA (4C) → citrato (6C) → ... → OAA regenerado

**Rendimento por volta do ciclo (a partir de 1 acetil-CoA):**
- 3 NADH
- 1 FADH₂
- 1 GTP (ou ATP — fosforilação ao nível do substrato)
- 2 CO₂ liberados

| Etapa | Enzima | Produto | Regulação |
|-------|--------|---------|-----------|
| Acetil-CoA + OAA → Citrato | Citrato sintase | Citrato | Inibida por NADH, ATP, citrato |
| Isocitrato → α-cetoglutarato + CO₂ | **Isocitrato desidrogenase** | NADH, CO₂ | Ativada por ADP; inibida por NADH, ATP |
| α-cetoglutarato → Succinil-CoA + CO₂ | **α-cetoglutarato desidrogenase** | NADH, CO₂ | Inibida por NADH, succinil-CoA |
| Succinil-CoA → Succinato | Succinil-CoA sintetase | GTP (ou ATP) | |
| Succinato → Fumarato | Succinato desidrogenase (complexo II!) | FADH₂ | |
| Malato → OAA | Malato desidrogenase | NADH | |

> **Deficiência de tiamina (B1):** piruvato desidrogenase E α-cetoglutarato desidrogenase precisam de tiamina (B1). Deficiência → bloqueio de 2 etapas → encefalopatia de Wernicke (alcoólatras, desnutridos). Acúmulo de piruvato e α-cetoglutarato.

---

## 2. Cadeia Transportadora de Elétrons (CTE)

**Local:** membrana interna mitocondrial
**Função:** transferir elétrons de NADH/FADH₂ para O₂, gerando gradiente de prótons (H⁺) que move a ATP sintase

| Complexo | Nome | Substrato | Inibidor Clínico |
|----------|------|-----------|-----------------|
| **I** | NADH desidrogenase | NADH | Rotenona, metformina |
| **II** | Succinato desidrogenase | FADH₂ | Malonato |
| **III** | Citocromo bc₁ | CoQ | Antimicina A |
| **IV** | Citocromo c oxidase | Citocromo c + O₂ | **Cianeto, CO, azida sódica** |
| **V** | ATP sintase (ATP-ase) | ADP + Pᵢ → ATP | Oligomicina |

**Complexo IV = aceptor final de elétrons:** 4H⁺ + 4e⁻ + O₂ → 2H₂O

---

## 3. Fosforilação Oxidativa — Rendimento

| Substrato de entrada | ATP produzido |
|---------------------|--------------|
| 1 NADH | ~2,5 ATP |
| 1 FADH₂ | ~1,5 ATP |
| 1 acetil-CoA completo no Krebs | ~10 ATP (3×2,5 + 1×1,5 + 1 GTP) |
| 1 glicose (glicólise + Krebs + FO) | ~30-32 ATP |

---

## 4. Desacoplamento

**Desacopladores:** moléculas que dissipam o gradiente de H⁺ sem produzir ATP → energia liberada como calor.
- **UCP-1 (termogenina):** presente no tecido adiposo marrom → termogênese sem tremor no neonato
- **Dinitrofenol (DNP):** desacoplador artificial; usado ilegalmente como "termogênico" para perda de peso; causa hipertermia fatal
- **Aspirina em overdose:** pode desacoplar mitocôndrias

---

## Erros Clássicos em Prova (Uninove)

- **Cianeto bloqueia o Complexo I:** cianeto bloqueia o Complexo **IV** (citocromo c oxidase), onde O₂ é reduzido. Metformina e rotenona bloqueiam o **Complexo I**.
- **CO₂ no ciclo de Krebs vem do acetil-CoA:** o CO₂ liberado no Krebs vem dos carbonos do OAA, não do acetil-CoA (que entra com 2C e eles só saem como CO₂ em voltas subsequentes — complexo cinético).
- **FADH₂ produz mais ATP que NADH:** FADH₂ gera ~1,5 ATP (entra no complexo II); NADH gera ~2,5 ATP (entra no complexo I). NADH é mais eficiente.
- **Glossando o Krebs como "produz 36 ATP":** a glicólise + Krebs + FO de 1 glicose produz ~30-32 ATP (estimativa moderna, não 36-38 da teoria clássica de P/O = 3 e 2).

---

## Checklist de Revisão

- [ ] Sei o rendimento do Krebs por acetil-CoA (3 NADH, 1 FADH₂, 1 GTP, 2 CO₂)
- [ ] Sei os 5 complexos da CTE e o que cada um faz
- [ ] Sei que cianeto e CO bloqueiam o complexo IV
- [ ] Sei que deficiência de tiamina (B1) bloqueia piruvato DH e α-cetoglutarato DH
- [ ] Sei o papel de UCP-1 no desacoplamento (termogênese, tecido adiposo marrom)
- [ ] Sei o rendimento total: ~30-32 ATP por glicose

---

## Ponte com a Clínica

Poisonamento por cianeto de hidrogênio (HCN): inibição do complexo IV → elétrons não chegam ao O₂ → gradiente de H⁺ não é gerado → ATP se esgota → morte celular — especialmente em neurônios e cardiomiócitos (alta demanda energética). O antídoto clínico é **hidroxicobalamina** (vitamina B12a) — o cobalto se liga ao cianeto. Em incêndios, tanto CO quanto HCN podem ser liberados na fumaça — explicando a morte rápida mesmo sem queimaduras extensas. A cinética de cada antídoto segue diretamente a bioquímica do complexo IV.

---

## Pré-Prova

> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### O que você PRECISA saber

- **Krebs (por acetil-CoA):** 3 NADH + 1 FADH₂ + 1 GTP + 2 CO₂
- **Complexo I:** NADH, inibido por rotenona/metformina
- **Complexo II:** FADH₂ (succinato DH)
- **Complexo IV:** O₂ + elétrons → H₂O; **inibido por cianeto e CO**
- **NADH:** ~2,5 ATP; **FADH₂:** ~1,5 ATP; **1 glicose:** ~30-32 ATP total
- **Tiamina (B1):** cofator de piruvato DH e α-cetoglutarato DH; deficiência = Wernicke

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Como diferenciar |
|------------|------------|-----------------|
| Cianeto | Monóxido de carbono (CO) | Ambos bloqueiam complexo IV; CO também bloqueia hemoglobina |
| NADH (CTE) | FADH₂ (CTE) | NADH: complexo I, 2,5 ATP; FADH₂: complexo II, 1,5 ATP |
| Desacoplamento | Inibição | Desacoplamento: dissipa gradiente (calor, sem ATP); inibição: bloqueia transferência de elétrons |
| UCP-1 | Dinitrofenol | UCP-1: fisiológico (tecido marrom, RN); DNP: artificial, tóxico, hiperthermia fatal |

### Frase-âncora para não esquecer

> "Krebs: 3 NADH + 1 FADH₂ + 1 GTP. Complexo IV = O₂ = alvo do cianeto. Tiamina = B1 = Wernicke."
'@
[System.IO.File]::WriteAllText("$base\data\materiais\pmh\pmh_a4.md", $c, $utf8NoBom)
[System.IO.File]::WriteAllText("$base\materiais\modulo1\pmh\pmh_a4.md", $c, $utf8NoBom)
Write-Host "pmh_a4 OK"

# ─── PMH A5 ────────────────────────────────────────────────────────────────────
$c = @'
# PMH — Aula 5: Metabolismo de Glicogênio e Via das Pentoses

**Disciplina:** Processos Metabólicos Humanos
**Módulo:** 1 | **Tempo de estudo sugerido:** 10-15 min

---

## Relevância Clínica e Acadêmica

O glicogênio é a reserva imediata de glicose — fundamental para manter a glicemia em jejum curto (< 24 h) e para energia muscular durante exercício. Doenças de depósito de glicogênio (glicogenoses) são erros inatos do metabolismo com impacto clínico direto: doença de Pompe (falta de α-glicosidase lisossômica) que causa miopatia e cardiomiopatia graves. A via das pentoses-fosfato produz NADPH — essencial para proteger as hemácias do estresse oxidativo; sua deficiência (G6PD) é a eritroenzimopatia mais comum do mundo, causando anemia hemolítica após exposição a oxidantes.

---

## 1. Síntese de Glicogênio (Glicogênese)

**Local:** fígado (regulação da glicemia) e músculo (uso local)
**Enzima-chave:** **Glicogênio sintase**

| Passo | Enzima | Resultado |
|-------|--------|-----------|
| Glicose-1-P + UTP → UDP-glicose | UDP-glicose pirofosforilase | Ativa o açúcar para transferência |
| UDP-glicose → cadeia glicogênica | **Glicogênio sintase** (forma ligações α-1,4) | Elongação da cadeia |
| Formação de ramificações | Enzima ramificadora (forma ligações α-1,6) | Aumenta solubilidade + pontos de ataque |

**Regulação:** Insulina → desfosforila glicogênio sintase → **ativa** síntese. Glucagon/adrenalina → PKA → fosforila → **inativa** sintase.

---

## 2. Degradação de Glicogênio (Glicogenólise)

**Enzima-chave:** **Glicogênio fosforilase** (quebra ligações α-1,4)
**Enzima desramificadora:** libera glicose nos pontos α-1,6

| Produto | Fígado | Músculo |
|---------|--------|---------|
| Glicose-1-P → G6P | → Glicose livre (G6-fosfatase) → sangue | → Glicólise local; NÃO libera glicose (sem G6-fosfatase) |

**Regulação da fosforilase:** glucagon/adrenalina → PKA → fosforila a fosforilase quinase → fosforila fosforilase b → **fosforilase a ativa**.

---

## 3. Glicogenoses — Doenças de Depósito de Glicogênio

| Doença | Enzima faltante | Órgão | Manifestação |
|--------|----------------|-------|--------------|
| **Von Gierke (tipo I)** | Glicose-6-fosfatase | Fígado, rim | Hipoglicemia grave em jejum; hepatomegalia; sem resposta ao glucagon |
| **Pompe (tipo II)** | α-1,4-glicosidase lisossômica | Músculo, coração | Cardiomiopatia + miopatia; forma infantil fatal sem tratamento |
| **Cori (tipo III)** | Enzima desramificadora | Fígado, músculo | Hipoglicemia moderada; glicogênio com estrutura anormal |
| **McArdle (tipo V)** | Glicogênio fosforilase muscular | Músculo | Cãibras e mioglobinúria ao exercício; sem aumento de lactato no teste isquêmico |
| **Hers (tipo VI)** | Glicogênio fosforilase hepática | Fígado | Hipoglicemia leve; hepatomegalia |

---

## 4. Via das Pentoses-Fosfato

**Local:** citoplasma
**Função principal:** produção de **NADPH** e **ribose-5-fosfato**

| Produto | Uso |
|---------|-----|
| **NADPH** | Proteção antioxidante (glutationa reduzida), síntese de AG, esteroidogênese, atividade dos fagócitos (NADPH oxidase) |
| **Ribose-5-fosfato** | Síntese de nucleotídeos (DNA, RNA, ATP, NADH, FAD) |

**Enzima regulatória:** **Glicose-6-fosfato desidrogenase (G6PD)**
- Produz NADPH a partir de G6P
- NADPH regenera glutationa oxidada (GSSG → GSH)
- GSH neutraliza H₂O₂ e radicais livres nas hemácias

---

## 5. Deficiência de G6PD

- **Herança:** ligada ao X (homens afetados, mulheres portadoras)
- **Problema:** hemácias sem NADPH → glutationa oxidada não é regenerada → hemoglobina oxidada → corpos de Heinz → hemólise intravascular
- **Gatilhos:** primaquina, dapsona, rasburicase, fava (favismo), infecções, nitrofurantoína
- **Laboratório:** Heinz bodies na coloração supravital; teste de Beutler positivo
- **Tratamento:** retirar o gatilho; casos graves: transfusão

---

## Erros Clássicos em Prova (Uninove)

- **Músculo libera glicose no jejum:** músculo NÃO tem G6-fosfatase → não libera glicose livre → não contribui para glicemia. Só produz lactato (ciclo de Cori) e alanina (ciclo alanina-glicose) que o fígado converte em glicose.
- **Glucagon ativa glicogênio sintase:** glucagon INATIVA a sintase (fosforilando-a via PKA). Insulina é que ativa.
- **Deficiência de G6PD causa anemia hemolítica crônica:** G6PD geralmente causa anemia hemolítica EPISÓDICA (crises agudas por gatilho oxidativo) — não crônica como na esferocitose.
- **NADPH = NADH:** funções diferentes. NADH é para geração de ATP (CTE); NADPH é para síntese biossintética e proteção antioxidante.
- **Doença de Von Gierke = músculo:** Von Gierke é fundamentalmente hepática e renal (G6-fosfatase). Doença muscular de glicogênio = McArdle (fosforilase muscular) ou Pompe (lisossômica).

---

## Checklist de Revisão

- [ ] Sei que glicogênio sintase é ativada por insulina e inativada por glucagon/adrenalina (via fosforilação)
- [ ] Sei que músculo não libera glicose (sem G6-fosfatase) — só o fígado e rim o fazem
- [ ] Distingo as 5 glicogenoses principais (Von Gierke, Pompe, Cori, McArdle, Hers)
- [ ] Sei que G6PD produz NADPH → protege hemácias → deficiência = anemia hemolítica episódica
- [ ] Sei que NADPH é diferente de NADH (proteção antioxidante vs. geração de ATP)

---

## Ponte com a Clínica

Um recém-nascido com cardiomiopatia e hipotonia grave apresenta glicogênio acumulado no coração e músculo esquelético — doença de Pompe. A ausência de α-glicosidase lisossômica impede a degradação do glicogênio nos lisossomas, que se incham e rompem, liberando enzimas hidrolíticas intracelularmente. O tratamento com enzima recombinante (alglicosidase alfa — Myozyme®) é a primeira terapia de reposição enzimática para doença do glicogênio — funciona apenas se iniciado cedo (triagem neonatal ampliada). Entender a via metabólica é o que permite entender por que o tratamento funciona e por que o diagnóstico precoce é crítico.

---

## Pré-Prova

> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### O que você PRECISA saber

- **Glicogênio sintase:** ativada por insulina (desfosforilada); inativada por glucagon/adrenalina (fosforilada)
- **Glicogênio fosforilase:** ativada por glucagon/adrenalina (fosforilada)
- **Músculo:** não tem G6-fosfatase → não libera glicose livre no sangue
- **Von Gierke:** fígado/rim, sem G6-fosfatase, hipoglicemia severa, hepatomegalia
- **McArdle:** músculo, sem fosforilase muscular, cãibra ao exercício, sem ↑ lactato isquêmico
- **G6PD:** NADPH → glutationa → protege hemácias; deficiência = anemia hemolítica episódica por oxidantes

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Como diferenciar |
|------------|------------|-----------------|
| Glicogênio sintase | Glicogênio fosforilase | Sintase: faz glicogênio, ativa com insulina; Fosforilase: quebra, ativa com glucagon |
| Von Gierke (tipo I) | McArdle (tipo V) | Von Gierke: fígado+rim, G6-fosfatase; McArdle: músculo, fosforilase muscular |
| NADPH | NADH | NADPH: biossíntese + antioxidante (G6PD, via pentose); NADH: cadeia respiratória, ATP |
| Gatilho G6PD | Anemia hemolítica crônica | G6PD: episódica (crise por oxidante); crônica = esferocitose, eliptocitose |

### Frase-âncora para não esquecer

> "Glucagon fosforila fosforilase (ativa) e sintase (inativa). Músculo não libera glicose. G6PD → NADPH → hemácia vive."
'@
[System.IO.File]::WriteAllText("$base\data\materiais\pmh\pmh_a5.md", $c, $utf8NoBom)
[System.IO.File]::WriteAllText("$base\materiais\modulo1\pmh\pmh_a5.md", $c, $utf8NoBom)
Write-Host "pmh_a5 OK"

# ─── PMH A6 ────────────────────────────────────────────────────────────────────
$c = @'
# PMH — Aula 6: Regulação Hormonal e Aplicações Clínicas dos Carboidratos

**Disciplina:** Processos Metabólicos Humanos
**Módulo:** 1 | **Tempo de estudo sugerido:** 10-15 min

---

## Relevância Clínica e Acadêmica

Esta aula conecta a bioquímica dos carboidratos com as principais doenças clínicas: diabetes mellitus tipo 1 e tipo 2, galactosemia, intolerância à lactose e deficiência de G6PD. Diabetes é a epidemia do século XXI — 13 milhões de brasileiros têm a doença. Entender a fisiopatologia molecular do DM é entender por que a metformina funciona diferente da insulina e diferente dos agonistas de GLP-1.

---

## 1. Regulação Hormonal da Glicemia — Recapitulação

| Estado | Glicemia | Hormônios dominantes | Vias ativas |
|--------|----------|---------------------|-------------|
| **Pós-prandial** | Alta (> 100 mg/dL) | Insulina ↑ | Glicólise, glicogênese, lipogênese, síntese proteica |
| **Jejum (< 24h)** | Baixa | Glucagon ↑ | Glicogenólise hepática, início gliconeogênese |
| **Jejum prolongado** | Muito baixa | Glucagon+cortisol+adrenalina ↑ | Gliconeogênese plena, proteólise, cetogênese |
| **Exercício aeróbico** | Mantida | Adrenalina ↑, queda relativa de insulina | Glicogenólise muscular, oxidação de AG |

---

## 2. Diabetes Mellitus — Fisiopatologia

| | DM tipo 1 | DM tipo 2 |
|-|-----------|-----------|
| **Mecanismo** | Destruição autoimune das células β pancreáticas → deficiência absoluta de insulina | Resistência periférica à insulina + disfunção progressiva das células β |
| **Início** | Infância/adolescência (geralmente) | Adultos (geralmente > 40 anos, obesidade) |
| **Genética** | HLA DR3/DR4; anticorpos anti-ilhota (anti-GAD, anti-IA2, anti-ZnT8) | Polimorfismos múltiplos; forte influência ambiental |
| **Fisiopatologia celular** | Sem insulina: sem GLUT4 → hiperglicemia; lipólise descontrolada → cetoacidose | Células-alvo resistentes ao sinal da insulina → hiperinsulinemia compensatória inicial → exaustão das células β |

---

## 3. Complicações do Diabetes — Mecanismos Bioquímicos

| Via ativada pela hiperglicemia | Complicação |
|-------------------------------|------------|
| Via do poliol (aldose redutase → sorbitol) | Neuropatia, catarata, nefropatia |
| Glicosilação não enzimática (HbA1c, AGEs) | Aterosclerose, nefropatia, retinopatia |
| Ativação de PKC por diacilglicerol | Albuminúria, angiogênese patológica |
| Estresse oxidativo ↑ | Lesão endotelial generalizada |

> **HbA1c:** hemoglobina glicosilada — média da glicemia dos últimos 2-3 meses (meia-vida da hemácia). Meta: < 7% para a maioria dos pacientes. Diagnóstico: ≥ 6,5%.

---

## 4. Farmacologia do Diabetes — Mecanismo de Ação

| Fármaco | Mecanismo | Via bioquímica |
|---------|-----------|---------------|
| **Insulina** | Ligação ao receptor → GLUT4 na membrana | ↑ Captação de glicose; ↓ gliconeogênese; ↑ glicogênese |
| **Metformina** | Inibe complexo I mitocondrial → ativa AMPK | ↓ Gliconeogênese hepática; ↑ sensibilidade à insulina |
| **Inibidores SGLT2** (gliflozinas) | Bloqueiam reabsorção de glicose no túbulo proximal renal | Glicosúria → ↓ glicemia |
| **Agonistas GLP-1** (exenatide, liraglutide) | Imitam GLP-1: ↑ secreção de insulina glicose-dependente | ↑ Insulina só quando glicemia alta → menor risco de hipoglicemia |
| **Sulfonilureias** (glibenclamida) | Fecham canal de K⁺-ATP nas células β → despolarização → exocitose de insulina | ↑ Insulina independente da glicemia → risco de hipoglicemia |

---

## 5. Galactosemia e Intolerância à Lactose

| Condição | Enzima faltante | Acúmulo | Consequência | Tratamento |
|----------|----------------|---------|--------------|------------|
| **Galactosemia clássica** | Uridiltransferase da galactose-1-fosfato | Galactose-1-P + galactitol | Icterícia neonatal, catarata, hepatopatia, déficit cognitivo | Dieta sem galactose (sem leite!) |
| **Galactosemia por deficiência de galactoquinase** | Galactoquinase | Galactitol | Catarata precoce | Dieta sem galactose |
| **Intolerância à lactose** | Lactase (borda em escova intestinal) | Lactose (não galactose-1-P) | Diarreia osmótica, flatulência, distensão | Evitar laticínios; lactase oral |

---

## Erros Clássicos em Prova (Uninove)

- **Metformina estimula secreção de insulina:** metformina NÃO age nas células β. Age no fígado (↓ gliconeogênese via inibição do complexo I / AMPK). Não causa hipoglicemia isoladamente.
- **HbA1c reflete 1 semana de glicemia:** HbA1c reflete ~2-3 meses (meia-vida do eritrócito). Uma semana seria a medida de frutamina (albumina glicosilada).
- **Intolerância à lactose = galactosemia:** intolerância à lactose = falta de lactase (problemas GI). Galactosemia = falta de enzimas do metabolismo da galactose (dano hepático e neurológico grave).
- **DM tipo 1 tem mais resistência que DM tipo 2:** o mecanismo central do DM1 é deficiência absoluta de insulina (autoimune). Resistência à insulina é a base do DM2.
- **Sulfonilureia não causa hipoglicemia no DM2:** sulfonilureia PODE causar hipoglicemia porque fecha canais de K⁺-ATP nas células β independentemente da glicemia atual.

---

## Checklist de Revisão

- [ ] Distingo DM1 (autoimune, deficiência absoluta de insulina) de DM2 (resistência periférica)
- [ ] Sei 4 mecanismos de lesão por hiperglicemia crônica (poliol, glicosilação, PKC, oxidativo)
- [ ] Sei o mecanismo de metformina (complexo I → AMPK → ↓ gliconeogênese hepática; não age nas células β)
- [ ] Sei que HbA1c reflete ~2-3 meses de glicemia média
- [ ] Distingo galactosemia (dano hepático/neurológico) de intolerância à lactose (diarreia osmótica)

---

## Ponte com a Clínica

Paciente com DM2 em uso de metformina há 5 anos. Evolui com insuficiência renal (TFG < 30). A metformina precisa ser suspensa: com TFG reduzida, a droga acumula → inibição excessiva do complexo I mitocondrial → ↑ lactato (lactato desidrogenase usa o NADH excedente) → acidose lática grave (mortalidade de 50%). Esse raciocínio une bioquímica mitocondrial, farmacologia e fisiopatologia renal — exatamente o tipo de questão multidisciplinar que a prova interdisciplinar da Uninove coloca.

---

## Pré-Prova

> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### O que você PRECISA saber

- **DM1:** autoimune, células β destruídas, insulina ZERO → cetoacidose
- **DM2:** resistência à insulina → hiperinsulinemia → exaustão celular β
- **Metformina:** inibe complexo I → AMPK → ↓ gliconeogênese; **não causa hipoglicemia**; contraindicado na TFG < 30 (acidose lática)
- **HbA1c:** 2-3 meses; diagnóstico ≥ 6,5%; meta < 7%
- **Galactosemia clássica:** uridiltransferase, galactose-1-P acumula, dano hepático/neuro; **dieta livre de galactose**
- **Intolerância à lactose:** lactase intestinal, diarreia osmótica (sem dano hepático)

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Como diferenciar |
|------------|------------|-----------------|
| DM tipo 1 | DM tipo 2 | DM1: autoimune, deficiência absoluta, cetoacidose; DM2: resistência, progressivo, cetose menos comum |
| Metformina | Sulfonilureia | Metformina: não causa hipoglicemia, age no fígado; Sulfonilureia: fecha K⁺-ATP, causa hipoglicemia |
| HbA1c | Frutosamina | HbA1c: 2-3 meses; frutosamina (albumina glic.): 2-3 semanas |
| Galactosemia | Intolerância à lactose | Galactosemia: erros inatos + dano sistêmico; Lactose: falta de lactase intestinal + diarreia |

### Frase-âncora para não esquecer

> "Metformina age no fígado via complexo I → não hipoglicemia. HbA1c = 2-3 meses. Sulfonilureia fecha K⁺-ATP = hipoglicemia."
'@
[System.IO.File]::WriteAllText("$base\data\materiais\pmh\pmh_a6.md", $c, $utf8NoBom)
[System.IO.File]::WriteAllText("$base\materiais\modulo1\pmh\pmh_a6.md", $c, $utf8NoBom)
Write-Host "pmh_a6 OK"

Write-Host "=== PMH Batch 2 (a4-a6) concluido ==="
