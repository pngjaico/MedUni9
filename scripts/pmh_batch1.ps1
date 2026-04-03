$utf8NoBom = New-Object System.Text.UTF8Encoding $false
$base = "C:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app"

# ─── PMH A1 ────────────────────────────────────────────────────────────────────
$c = @'
# PMH — Aula 1: Bioenergética e Termodinâmica do Metabolismo

**Disciplina:** Processos Metabólicos Humanos
**Módulo:** 1 | **Tempo de estudo sugerido:** 10-15 min

---

## Relevância Clínica e Acadêmica

Bioenergética é o alicerce de toda bioquímica clínica. Sem entender ATP, NADH e energia livre de Gibbs (ΔG), é impossível compreender por que vias metabólicas funcionam ou são bloqueadas por doenças. Ishemia miocárdica priva as células de O₂ → queda da fosforilação oxidativa → depleção de ATP → morte celular. Metformina (droga do diabetes tipo 2) age inibindo o complexo I da cadeia mitocondrial. Todos esses mecanismos descendem diretamente da termodinâmica básica que esta aula cobre.

---

## 1. Conceitos Termodinâmicos Essenciais

| Conceito | Definição | Aplicação |
|----------|-----------|-----------|
| **Energia livre de Gibbs (ΔG)** | Energia disponível para realizar trabalho; ΔG < 0 = reação espontânea | Reações do metabolismo com ΔG negativo são "empurradas" para frente |
| **Reação exergônica** | Libera energia (ΔG < 0) | Catabolismo: glicólise, ciclo de Krebs, β-oxidação |
| **Reação endergônica** | Consome energia (ΔG > 0) | Anabolismo: síntese de glicogênio, proteínas, ácidos graxos |
| **Acoplamento energético** | Reação exergônica "paga" pela endergônica via ATP | Glicólise fornece ATP para síntese de proteínas |

---

## 2. ATP — A Moeda Energética Universal

**Adenosina trifosfato (ATP):**
- Hidrolisado a ADP + Pᵢ: ΔG°' = −30,5 kJ/mol (altamente exergônico)
- A energia liberada acopla-se a reações endergônicas
- Renovado continuamente: um ser humano em repouso recicla ~40 kg de ATP/dia

**Mecanismos de regeneração de ATP:**
| Via | Local | Rapidez | Capacidade |
|-----|-------|---------|-----------|
| Sistema fosfato de creatina | Músculo | Imediata (segundos) | Baixa |
| Glicólise (anaeróbica) | Citoplasma | Rápida (segundos-min.) | Baixa |
| Respiração celular (aeróbica) | Mitocôndria | Lenta (minutos) | Alta |

---

## 3. Transportadores de Elétrons — NADH e FADH₂

| Transportador | Precursor oxidado | Onde entra na CTE | ATP equivalentes |
|---------------|-------------------|-------------------|-----------------|
| **NAD⁺ → NADH** | Nicotinamida (vit. B3) | Complexo I | ~2,5 ATP |
| **FAD → FADH₂** | Riboflavina (vit. B2) | Complexo II | ~1,5 ATP |

> NADH e FADH₂ são **doadores de elétrons** para a cadeia transportadora de elétrons (CTE) — o O₂ é o aceptor final.

---

## 4. Anabolismo × Catabolismo

| | Catabolismo | Anabolismo |
|-|------------|-----------|
| **Direção** | Degradação de moléculas complexas | Síntese de moléculas complexas |
| **Energia** | Libera (gera ATP, NADH, FADH₂) | Consome (usa ATP, NADPH) |
| **Exemplos** | Glicólise, β-oxidação, proteólise | Gliconeogênese, síntese de AG, síntese proteica |
| **Regulação hormonal** | ↑ Glucagon, cortisol, adrenalina | ↑ Insulina |

---

## 5. Compartimentalização Celular

| Compartimento | Vias principais |
|---------------|-----------------|
| **Citoplasma** | Glicólise, gliconeogênese, síntese de ácidos graxos, via das pentoses |
| **Mitocôndria** | Ciclo de Krebs, β-oxidação, fosforilação oxidativa, síntese de corpos cetônicos |
| **Retículo endoplasmático** | Síntese de lipídios de membrana, colesterol (início) |
| **Lisossomo** | Degradação de macromoléculas (proteólise, glicogenólise lisossômica) |

> **Por que é importante?** NADH mitocondrial gera ~2,5 ATP; NADH citosólico precisa de sistemas de transporte (malato-aspartato ou glicerol-3-fosfato) para entrar na mitocôndria — com rendimento menor.

---

## Erros Clássicos em Prova (Uninove)

- **ATP tem ΔG positivo na hidrólise:** a hidrólise do ATP tem ΔG NEGATIVO (−30,5 kJ/mol) — é exergônica. Atenção invertida ao sinal.
- **Catabolismo = anabolismo em sentido invertido:** catabolismo e anabolismo NÃO são vias reversas — elas usam enzimas diferentes e regulação independente (regulação anfibólica vs. catabólica).
- **FADH₂ = NADH em rendimento de ATP:** FADH₂ entra no complexo II (gera ~1,5 ATP); NADH entra no complexo I (gera ~2,5 ATP). NADH = mais ATP.
- **Glicólise ocorre na mitocôndria:** glicólise é inteiramente CITOPLÁSMICA. A mitocôndria processa o piruvato produzido.

---

## Checklist de Revisão

- [ ] Sei que ΔG < 0 = reação espontânea = libera energia
- [ ] Distinguo NADH (complexo I, ~2,5 ATP) de FADH₂ (complexo II, ~1,5 ATP)
- [ ] Sei onde cada via ocorre na célula: glicólise = citoplasma; Krebs = mitocôndria
- [ ] Distingo catabolismo (degradação → ATP) de anabolismo (síntese → usa ATP)
- [ ] Sei que insulina favorece anabolismo; glucagon/adrenalina/cortisol favorecem catabolismo

---

## Ponte com a Clínica

No infarto agudo do miocárdio, a oclusão coronária cessa o fornecimento de O₂ → a cadeia respiratória para → NADH e FADH₂ se acumulam → ATP cai a zero → bombas de Na⁺/K⁺ e Ca²⁺ falham → Ca²⁺ intracelular sobe → ativação de lipases e proteases → necrose celular. O troponina (marcador de IAM) sobe porque a célula muscular, sem ATP para manter integridade de membrana, libera seu conteúdo intracelular. Toda essa cascata começa pelo entendimento termodinâmico desta aula.

---

## Pré-Prova

> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### O que você PRECISA saber

- **ΔG < 0:** reação espontânea (exergônica) = libera energia = catabolismo
- **ATP:** hidrólise → ADP + Pᵢ, ΔG = −30,5 kJ/mol; ~40 kg/dia reciclados
- **NADH:** entra no complexo I → ~2,5 ATP; **FADH₂:** entra no complexo II → ~1,5 ATP
- **Glicólise:** citoplasma; **Krebs + FO:** mitocôndria; **Síntese AG:** citoplasma
- **Insulina:** anabolismo; **Glucagon/adrenalina/cortisol:** catabolismo
- **Isquemia:** ↓O₂ → ↓ATP → falência de bombas → necrose

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Como diferenciar |
|------------|------------|-----------------|
| NADH | FADH₂ | NADH: complexo I, 2,5 ATP; FADH₂: complexo II, 1,5 ATP |
| Catabolismo | Anabolismo | Catabolismo: degrada, gera ATP; Anabolismo: sintetiza, consome ATP |
| Glicólise | Ciclo de Krebs | Glicólise: citoplasma; Krebs: matriz mitocondrial |
| Exergônica | Endergônica | Exergônica: ΔG < 0, espontânea, libera energia; Endergônica: ΔG > 0, consome energia |

### Frase-âncora para não esquecer

> "NADH supera FADH₂ (2,5 > 1,5). Glicólise no citoplasma, Krebs na mitocôndria. ΔG negativo = espontâneo."
'@
[System.IO.File]::WriteAllText("$base\data\materiais\pmh\pmh_a1.md", $c, $utf8NoBom)
[System.IO.File]::WriteAllText("$base\materiais\modulo1\pmh\pmh_a1.md", $c, $utf8NoBom)
Write-Host "pmh_a1 OK"

# ─── PMH A2 ────────────────────────────────────────────────────────────────────
$c = @'
# PMH — Aula 2: Regulação Metabólica Geral

**Disciplina:** Processos Metabólicos Humanos
**Módulo:** 1 | **Tempo de estudo sugerido:** 10-15 min

---

## Relevância Clínica e Acadêmica

A regulação metabólica é o mecanismo pelo qual o organismo responde a mudanças no ambiente — estresse, jejum, pós-refeição. Falhas nessa regulação são a base de doenças como diabetes mellitus (falha da sinalização de insulina), síndrome de Cushing (excesso de cortisol — catabolismo crônico) e doenças de depósito (deficiência de enzimas regulatórias). Fármacos que modulam enzimas alostéricas (metformina, estatinas, imatinib) só fazem sentido clínico se você entende como enzimas são reguladas.

---

## 1. Níveis de Regulação Metabólica

| Nível | Mecanismo | Velocidade | Exemplo |
|-------|-----------|-----------|---------|
| **Disponibilidade de substrato** | Concentração do substrato | Imediata | Glicose alta → glicólise aumenta |
| **Modulação alostérica** | Ligação de efetor alostérico à enzima | Segundos | AMP ativa PFK-1 (acelera glicólise) |
| **Modificação covalente** | Fosforilação/desfosforilação por quinases/fosfatases | Segundos-min. | Glucagon → PKA → fosforila glicogênio fosforilase (ativa) |
| **Regulação genética** | Indução/repressão da transcrição enzimática | Horas-dias | Insulina induz expressão de enzimas glicolíticas |

---

## 2. Regulação Alostérica

Enzimas alostéricas têm **sítios reguladores** separados do sítio catalítico. Ligação de efetor:
- **Ativador alostérico:** aumenta atividade enzimática
- **Inibidor alostérico:** diminui atividade enzimática

| Enzima | Ativador | Inibidor | Via |
|--------|----------|----------|-----|
| **PFK-1 (fosfofrutoquinase-1)** | AMP, ADP, frutose-2,6-bisfosfato | ATP, citrato | Glicólise (passo comprometido) |
| **Piruvato quinase** | Frutose-1,6-bisfosfato | ATP, alanina | Glicólise |
| **Piruvato desidrogenase** | CoA, NAD⁺, AMP | NADH, acetil-CoA, ATP | Entrada no ciclo de Krebs |
| **Isocitrato desidrogenase** | ADP, Ca²⁺ | NADH, ATP | Ciclo de Krebs (passo regulatório) |

> Regra geral: **ATP alto = célula energizada = inibe catabolismo; AMP/ADP alto = célula com falta de energia = ativa catabolismo**.

---

## 3. Regulação por Modificação Covalente — Fosforilação

A fosforilação por quinases (ativa ou inativa enzimas) é o mecanismo mais rápido de regulação hormonal:

| Hormônio | Via de sinalização | Enzima fosforilada | Efeito |
|----------|-------------------|--------------------|--------|
| **Glucagon / Adrenalina** | Receptor → adenilciclase → cAMP → PKA | Glicogênio fosforilase (Ser) | Ativada → glicogenólise |
| | | Glicogênio sintase (Ser) | Inativada → para síntese de glicogênio |
| **Insulina** | Receptor-tirosinaquinase → PI3K → Akt | Fosfatase (desfosforila) | Ativa glicogênio sintase; inativa fosforilase |

---

## 4. Hormônios Reguladores do Metabolismo

| Hormônio | Origem | Estado | Efeitos Metabólicos |
|----------|--------|--------|---------------------|
| **Insulina** | Células β pâncreas | Pós-prandial (glicose alta) | ↑ Captação de glicose (GLUT4), ↑ glicogênese, ↑ lipogênese, ↑ síntese proteica; ↓ glicogenólise, ↓ gliconeogênese, ↓ lipólise |
| **Glucagon** | Células α pâncreas | Jejum (glicose baixa) | ↑ Glicogenólise, ↑ gliconeogênese, ↑ cetogênese; ↓ glicogênese |
| **Adrenalina / Noradrenalina** | Medula adrenal | Estresse/exercício | ↑ Glicogenólise (músculo + fígado), ↑ lipólise |
| **Cortisol** | Córtex adrenal | Estresse crônico | ↑ Gliconeogênese, ↑ proteólise (músculos), ↑ lipólise; diabetes por estresse |
| **Insulina × Glucagon** | — | Razão I:G indica estado anabólico (alto) ou catabólico (baixo) | — |

---

## 5. Pontos Comprometidos (Committed Steps)

Uma reação é irreversível e altamente regulada — define o destino do substrato:
- **PFK-1 (glicólise):** passo comprometido; ativação → glicose vai para energia
- **Acetil-CoA carboxilase (síntese de AG):** passo comprometido; ativação → síntese de gordura
- **HMG-CoA redutase (síntese de colesterol):** alvo das estatinas

---

## Erros Clássicos em Prova (Uninove)

- **ATP ativa a glicólise:** ATP ALTO inibe a PFK-1 (a célula já está cheia de energia → não precisa mais glicólise). AMP/ADP ativam.
- **Insulina aumenta a glicogenólise:** insulina INIBE a glicogenólise (desfosforila e inativa a fosforilase). Glucagon ativa.
- **Cortisol é anabólico para músculos:** cortisol causa proteólise muscular (catabolismo) para fornecer aminoácidos à gliconeogênese. É anabólico apenas no fígado (gliconeogênese).
- **Modulação alostérica e fosforilação são a mesma coisa:** alostérica = ligação não covalente (reversível instantânea); fosforilação = modificação covalente por enzima (mais lenta, requer quinase/fosfatase).

---

## Checklist de Revisão

- [ ] Sei os 4 níveis de regulação metabólica (substrato, alostérica, fosforilação, genética)
- [ ] Sei que ATP alto = inibe catabolismo; AMP/ADP alto = ativa catabolismo
- [ ] Distingo efeitos de insulina vs. glucagon (pós-prandial vs. jejum)
- [ ] Sei que cortisol causa proteólise muscular (não é anabólico para músculo)
- [ ] Identifico PFK-1 como passo comprometido da glicólise com seus reguladores

---

## Ponte com a Clínica

Em paciente com sepse grave, o cortisol sobe cronicamente (resposta ao estresse). Resultado: hiperglicemia da sepse (cortisol estimula gliconeogênese no fígado e bloqueia captação de glicose), catabolismo muscular (proteólise → aminoácidos para gliconeogênese), hipertrigliceridemia (lipólise). O controle glicêmico com insulina em UTI (protocolo de Van den Berghe) baseia-se exatamente na compreensão desta sinalização hormonal × metabolismo.

---

## Pré-Prova

> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### O que você PRECISA saber

- **PFK-1:** passo comprometido da glicólise; ativada por AMP/ADP/F-2,6-BP; **inibida por ATP/citrato**
- **Glucagon/adrenalina → PKA → fosforila:** ativa fosforilase (↑ glicogenólise); inativa sintase (↓ glicogênese)
- **Insulina:** desfosforila (oposto do glucagon); ↑ glicogênese; ↑ síntese AG; ↑ captação glicose (GLUT4)
- **Cortisol:** ↑ gliconeogênese + proteólise muscular + lipólise → hiperglicemia
- **ATP alto = inibe catabolismo** (PFK-1, isocitrato DH, piruvato DH)

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Como diferenciar |
|------------|------------|-----------------|
| Regulação alostérica | Modificação covalente | Alostérica: não covalente, instantânea; fosforilação: covalente, precisa de quinase |
| Insulina | Glucagon | Insulina: pós-prandial, anabolismo; glucagon: jejum, catabolismo |
| ATP (efeito em PFK-1) | AMP (efeito em PFK-1) | ATP: inibidor; AMP/ADP: ativador |
| Cortisol (músculo) | Cortisol (fígado) | Músculo: catabolismo (proteólise); Fígado: gluconeogênese (anabolismo local) |

### Frase-âncora para não esquecer

> "AMP ativa PFK-1, ATP a inibe — a célula faminta acelera a glicólise, a célula cheia a freia."
'@
[System.IO.File]::WriteAllText("$base\data\materiais\pmh\pmh_a2.md", $c, $utf8NoBom)
[System.IO.File]::WriteAllText("$base\materiais\modulo1\pmh\pmh_a2.md", $c, $utf8NoBom)
Write-Host "pmh_a2 OK"

# ─── PMH A3 ────────────────────────────────────────────────────────────────────
$c = @'
# PMH — Aula 3: Glicólise e Gliconeogênese

**Disciplina:** Processos Metabólicos Humanos
**Módulo:** 1 | **Tempo de estudo sugerido:** 10-15 min

---

## Relevância Clínica e Acadêmica

Glicólise e gliconeogênese são as vias centrais do metabolismo de carboidratos. A glicólise fornece ATP a todas as células do organismo — especialmente às que dependem exclusivamente de glicose: hemácias (sem mitocôndria) e neurônios (em condições normais). A gliconeogênese mantém a glicemia no jejum. Falhas: intoxicação por flúor (inibe enolase → para glicólise), deficiência de piruvato quinase (anemia hemolítica), uso de metformina (inibe gliconeogênese hepática). Todas as demais vias metabólicas consomem ou produzem intermediários dessas duas vias.

---

## 1. Glicólise — Visão Geral

**Local:** citoplasma | **Resultado:** 1 glicose → 2 piruvatos + 2 ATP líquidos + 2 NADH

### Fases da glicólise:

**Fase de investimento (consome 2 ATP):**
1. Glicose → Glicose-6-fosfato (hexoquinase/glicoquinase; irreversível)
2. G6P → Frutose-6-fosfato (fosfoglicose isomerase)
3. F6P → Frutose-1,6-bisfosfato (**PFK-1**; irreversível — **passo comprometido**)
4-5. F-1,6-BP → 2 × gliceraldeído-3-fosfato

**Fase de geração de energia (gera 4 ATP + 2 NADH):**
6. G3P → 1,3-bisfosfoglicerato (G3P desidrogenase; produz NADH)
7. 1,3-BPG → 3-fosfoglicerato (produz 1 ATP cada = 2 no total; fosforilação ao nível do substrato)
8-9. Isomerização
10. Fosfoenolpiruvato → Piruvato (**piruvato quinase**; irreversível; produz 1 ATP = 2 no total)

### Saldo final:
- 2 ATP líquidos (gera 4, consome 2)
- 2 NADH citosólicos
- 2 piruvatos

---

## 2. Destino do Piruvato

| Condição | Destino do Piruvato | Via |
|----------|---------------------|-----|
| **Aeróbico** | Entra na mitocôndria → Acetil-CoA (piruvato desidrogenase) | Ciclo de Krebs |
| **Anaeróbico (músculo)** | → Lactato (lactato desidrogenase; regenera NAD⁺) | Fermentação lática |
| **Anaeróbico (levedura)** | → Etanol + CO₂ (piruvato descarboxilase) | Fermentação alcoólica |
| **Aminoácidos** | Pode ser transaminado → alanina | Ciclo alanina-glicose |

---

## 3. Regulação da Glicólise

| Enzima | Ativadores | Inibidores | Irreversível |
|--------|-----------|-----------|-------------|
| **Hexoquinase** | Glicose ↑ | Glicose-6-fosfato (inibição produto) | Sim |
| **Glicoquinase** (fígado/pâncreas) | Glicose ↑ (sem inibição por G6P) | Glucagon (indiretamente) | Sim |
| **PFK-1** | AMP, ADP, F-2,6-BP, Pi | ATP, citrato, H⁺ | Sim |
| **Piruvato quinase** | F-1,6-BP (ativação por substrato) | ATP, alanina (glucagon fosforila → inativa) | Sim |

---

## 4. Gliconeogênese — Visão Geral

**Não é a glicólise invertida** — 3 passos irreversíveis da glicólise são contornados por enzimas específicas.

**Local:** fígado (principal) e córtex renal (jejum prolongado)
**Precursores:** lactato, alanina, glicerol, amino-ácidos gliconeogênicos

| Passo irreversível da glicólise | Enzima contornante (gliconeogênese) |
|---------------------------------|--------------------------------------|
| Piruvato quinase (PEP → piruvato) | Piruvato carboxilase (piruvato → OAA) + PEPCK (OAA → PEP) |
| PFK-1 (F6P → F-1,6-BP) | Frutose-1,6-bisfosfatase (F-1,6-BP → F6P) |
| Hexoquinase (glicose → G6P) | Glicose-6-fosfatase (G6P → glicose; APENAS no fígado e rim) |

> **Muscles NÃO fazem gliconeogênese** porque não têm glicose-6-fosfatase!

---

## 5. Regulação da Gliconeogênese

| Indutor | Inibidor |
|---------|---------|
| Glucagon (↑ PEPCK via cAMP) | Insulina (inibe PEPCK, ativa PFK-2) |
| Cortisol (induz transcrição de enzimas) | Frutose-2,6-bisfosfato (inibe F-1,6-BPase) |
| Acetil-CoA (ativa piruvato carboxilase) | AMP (inibe F-1,6-BPase) |

---

## Erros Clássicos em Prova (Uninove)

- **Glicólise e gliconeogênese ocorrem ao mesmo tempo no fígado:** podem co-existir em compartimentos diferentes, mas são reciprocamente reguladas — F-2,6-BP ativa PFK-1 (glicólise) E inibe F-1,6-BPase (gliconeogênese) simultaneamente.
- **Músculo faz gliconeogênese:** músculo NÃO tem glicose-6-fosfatase → não pode liberar glicose livre → não faz gliconeogênese. O músculo faz: ciclo alanina-glicose (manda alanina ao fígado que converte em glicose).
- **Metformina inibe a glicólise:** metformina inibe o complexo I mitocondrial → reduz NADH → reduz substrato para gliconeogênese → inibe GLICONEOGÊNESE, não a glicólise.
- **PFK-1 e PFK-2 são a mesma enzima:** PFK-1 = enzima glicolítica; PFK-2 = enzima bifuncional que produz/degrada F-2,6-BP (regulador da PFK-1).

---

## Checklist de Revisão

- [ ] Sei o saldo final da glicólise (2 ATP líquidos, 2 NADH, 2 piruvatos)
- [ ] Sei os 3 passos irreversíveis da glicólise e as enzimas que os contornam na gliconeogênese
- [ ] Sei que músculo não faz gliconeogênese (sem G6-fosfatase)
- [ ] Distingo hexoquinase (inibida por G6P) de glicoquinase (não inibida por G6P — sensor de glicose no fígado)
- [ ] Sei que F-2,6-BP ativa glicólise e inibe gliconeogênese simultaneamente

---

## Ponte com a Clínica

Na deficiência de piruvato quinase eritrocitária (causa rara de anemia hemolítica hereditária): a hemácia depende exclusivamente da glicólise (sem mitocôndria). Sem piruvato quinase funcional → ATP cai → bomba Na⁺/K⁺ falha → hemácia incha → hemólise. O diagnóstico é feito por dosagem enzimática e teste de autohemólise corrigido com glicose (a adição de glicose ao tubo NÃO corrige a hemólise, ao contrário da deficiência de G6PD). Entender a glicólise eritrocitária é essencial para distinguir as causas de anemia hemolítica não imune.

---

## Pré-Prova

> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### O que você PRECISA saber

- **Glicólise:** citoplasma; 1 glicose → 2 piruvatos + **2 ATP líquidos** + 2 NADH
- **Passos irreversíveis:** hexoquinase, PFK-1, piruvato quinase
- **PFK-1:** passo comprometido; ativada por AMP/F-2,6-BP; inibida por ATP/citrato
- **Gliconeogênese:** fígado + rim; contorna com piruvato carboxilase+PEPCK, F-1,6-BPase, G6-fosfatase
- **Músculo NÃO faz gliconeogênese** (sem G6-fosfatase)
- **Glucagon:** ativa gliconeogênese; **Insulina:** inibe

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Como diferenciar |
|------------|------------|-----------------|
| Glicólise | Gliconeogênese | Glicólise: degrada glicose, citoplasma, todas as células; Gliconeogênese: sintetiza glicose, fígado/rim |
| Hexoquinase | Glicoquinase | HK: baixo Km, inibida por G6P (todas células); GK: alto Km, não inibida por G6P (fígado/pâncreas, sensor) |
| PFK-1 | PFK-2 | PFK-1: catalisa F6P → F-1,6-BP (glicólise); PFK-2: produz F-2,6-BP (regulador) |
| Anaeróbico (músculo) | Anaeróbico (levedura) | Músculo → lactato; Levedura → etanol + CO₂ |

### Frase-âncora para não esquecer

> "Glicólise: 2 ATP, 2 NADH, 2 piruvatos — citoplasma. PFK-1: passo comprometido. Músculo não faz gliconeogênese."
'@
[System.IO.File]::WriteAllText("$base\data\materiais\pmh\pmh_a3.md", $c, $utf8NoBom)
[System.IO.File]::WriteAllText("$base\materiais\modulo1\pmh\pmh_a3.md", $c, $utf8NoBom)
Write-Host "pmh_a3 OK"

Write-Host "=== PMH Batch 1 (a1-a3) concluido ==="
