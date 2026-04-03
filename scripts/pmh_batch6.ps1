$utf8NoBom = New-Object System.Text.UTF8Encoding $false
$base = "C:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app"

# ─── PMH A14 ────────────────────────────────────────────────────────────────────
$c = @'
# PMH — Aula 14: Adaptações Metabólicas e Aplicações Clínicas

**Disciplina:** Processos Metabólicos Humanos
**Módulo:** 1 | **Tempo de estudo sugerido:** 12-18 min

---

## Relevância Clínica e Acadêmica

Metabolismo não é estático — o organismo se adapta continuamente ao estado nutricional, ao exercício, à gravidez, ao estresse cirúrgico e à doença crônica. Compreender essas adaptações é clínico puro: ajuda a entender por que o diabético mal controlado vai para a UTI em cetoacidose, por que o alcoolista desnutrido tem síndrome de realimentação ao receber nutrição parenteral, por que a hiperglicemia de estresse ocorre mesmo sem diagnóstico prévio de diabetes, e por que atletas de endurance têm maior eficiência oxidativa. Esta aula integra tudo o que foi visto no módulo.

---

## 1. Adaptação ao Jejum: Fases Sequenciais

| Fase | Tempo | Substrato principal | Órgão responsável |
|------|-------|---------------------|-------------------|
| **Fed/absorptivo** | 0-2h após refeição | Glicose intestinal | Fígado, músculo, adiposo |
| **Pós-absortivo** | 2-8h | Glicogênio hepático | Fígado (glicogenólise) |
| **Jejum curto** | 8-24h | Glicogênio (esgota 12-18h) + início gliconeogênese | Fígado |
| **Jejum > 24h** | 24h-3 dias | Gliconeogênese intensa (aminoácidos + glicerol) | Fígado, rim |
| **Jejum prolongado** | > 3-7 dias | Cetose + adaptação cerebral (corpos cetônicos) | Fígado produz; músculo/cérebro usam |
| **Inanição crônica (> semanas)** | Semanas | Poupança proteica (↓ gliconeogênese) + cetose máxima | Todo o organismo |

> **Prioridade metabólica durante o jejum:** primeiro glicogênio → depois aminoácidos (necessários) → depois se adapta à cetose para poupar proteína muscular.

---

## 2. Exercício: Aeróbico vs. Anaeróbico

### Exercício aeróbico (endurance — corrida de longa distância, ciclismo):
- O₂ disponível → beta-oxidação → Krebs → ~95% do ATP
- Consome AG (depóstio adiposo, músculo) + glicogênio
- VO₂máx: capacidade de usar ATP aeróbico por minuto
- Treino: ↑ biogênese mitocondrial (PGC-1α) + ↑ enzimas oxidativas

### Exercício anaeróbico (sprint, musculação):
- **0-10 seg:** sistema fosfocreatina (ATP imediato; creatina cinase)
- **10-120 seg:** glicólise anaeróbica → ATP + lactato
- **> 2 min:** metabolismo oxidativo (aeróbico) necessário
- Dívida de oxigênio pós exercício = EPOC (respira muito depois para reoxidar lactato)

### Adaptações ao treinamento de endurance:
- ↑ Densidade mitocondrial; ↑ mioglobina; ↑ LPL muscular (mais captação de AG)
- "Fat oxidation at lower intensities" — atletas treinados poupam glicogênio pela maior oxidação de gordura

---

## 3. Estresse Cirúrgico e Resposta Catabólica

Cirurgia, trauma ou sepse ativam o **eixo neuroendócrino do estresse**:
- **Hormônios secretados:** cortisol + glucagon + adrenalina (tríade catabólica)
- **Efeitos metabólicos:**
  - Hiperglicemia de estresse (gliconeogênese intensa + resistência à insulina → glicose disponível para os tecidos de reparação)
  - Proteólise muscular intensa → aminoácidos para gliconeogênese hepática
  - Lipólise (AG para energia)
  - Supressão da síntese proteica (inversão do anabolismo)
- **Consequência clínica:** "diabetes de estresse" — glicemia > 180 mg/dL mesmo sem DM prévio → associado a maior mortalidade em UTI → meta: controle glicêmico moderado (140-180 mg/dL)

---

## 4. Gravidez: Adaptação Metabólica Fisiológica

| Trimestre | Mudanças metabólicas |
|-----------|---------------------|
| **1° trimestre** | ↑ armazenamento de gordura; ↑ sensibilidade à insulina |
| **2° trimestre** | Início da resistência à insulina (hormônios placentários) |
| **3° trimestre** | ↑↑ Resistência à insulina (hPL, progesterona, prolactina) → glicose priorizada para o feto; gestante usa AG como combustível → tende à cetose pós-prandial acelerada ("accelerated starvation") |
| **Parto** | Demanda extrema de glicose; glicogênio hepático mobilizado |

**Diabetes gestacional (DG):**
- Resistência fisiológica ao 3° trimestre + insuficiência relativa das células β → hiperglicemia
- Critério: glicemia de jejum ≥ 92 mg/dL ou 2h ≥ 153 mg/dL na GTT 75g (critério IADPSG)
- Consequências: macrossomia, distocia de ombro, hipoglicemia neonatal, risco materno de DM2

---

## 5. Síndrome de Realimentação

**Definição:** distúrbio metabólico grave ao realimentar paciente cronicamente desnutrido.

**Mecanismo:**
1. Desnutrição → ↓ insulina → fosfato, potássio e magnésio saem das células
2. Realimentação → ↑ insulina → ↑ captação celular de glicose (precisa de fosfato para fosforilação)
3. **Hipofosfatemia grave** (fosfato entra massiçamente nas células)
4. Outras alterações: hipomagnesemia, hipocalemia, retenção de sódio/água

**Manifestações:** insuficiência cardíaca, insuficiência respiratória, hemólise, convulsões, morte

**Prevenção:** suplementação de fosfato, potássio e magnésio ANTES de iniciar nutrição; aumento gradual de calorias.

---

## 6. Caquexia, Obesidade e Síndrome Metabólica

### Caquexia vs. Kwashiorkor vs. Marasmo (revisão):
| | Causa | Patogênese | Achado principal |
|-|-------|-----------|-----------------|
| **Caquexia** (oncológica, insuficiência cardíaca) | Citocinas (TNF-α, IL-6) | Via ubiquitina-proteassoma + inibição do apetite | Perda de massa magra mesmo com ingestão relativa |
| **Kwashiorkor** | Deficiência proteica | ↓ albumina → ↓ pressão oncótica | Edema + fígado gordo |
| **Marasmo** | Deficiência calórico-proteica | Adaptação ao jejum (corpos cetônicos, poupança proteica) | Emaciação sem edema |

### Síndrome Metabólica — revisão dos critérios (NCEP-ATP III: 3 de 5):
1. Cintura abdominal > 102 cm (H) / > 88 cm (M)
2. TG ≥ 150 mg/dL
3. HDL < 40 mg/dL (H) / < 50 mg/dL (M)
4. PA ≥ 130/85 mmHg
5. Glicemia de jejum ≥ 100 mg/dL

---

## Erros Clássicos em Prova (Uninove)

- **Realimentação causa apenas hipoglicemia:** a síndrome de realimentação causa HIPOFOSFATEMIA (e hipocalemia, hipomagnesemia), não hipoglicemia. O coração e a respiração são os órgãos em risco.
- **Caquexia é igual à desnutrição simples:** caquexia é MEDIADA POR CITOCINAS (TNF-α, IL-6) com degradação proteica ativa via ubiquitina-proteassoma — não responde adequadamente à simples suplementação calórica.
- **No jejum, o cerebro só usa glicose:** só é verdade no jejum curto. No jejum prolongado (> 3-5 dias), o cérebro adapta-se a usar corpos cetônicos, reduzindo a demanda de glicose e poupando proteína muscular.
- **A hiperglicemia de estresse indica DM:** hiperglicemia de estresse é uma resposta adaptativa mediada por cortisol + glucagon + adrenalina; ocorre em pessoas sem DM; resolúvel com insulina IV em UTI.
- **Diabetes gestacional causa sempre macrossomia:** macrossomia ocorre quando há hiperglicemia materna não controlada. Com controle glicêmico rigoroso, o risco de macrossomia é reduzido significativamente.

---

## Checklist de Revisão

- [ ] Descrevo as fases de adaptação ao jejum (glicogênio → gliconeogênese → cetose → poupança)
- [ ] Distingo combustíveis do exercício aeróbico vs. anaeróbico
- [ ] Explico a tríade hormonal do estresse cirúrgico e suas consequências metabólicas
- [ ] Sei o mecanismo da síndrome de realimentação (hipofosfatemia) e como prevenir
- [ ] Distingo caquexia (citocinas) de kwashiorkor (deficiência proteica) e marasmo (calórico)

---

## Ponte com a Clínica

Homem, 68 anos, caquético, com adenocarcinoma gástrico. Internado em jejum há 10 dias. Recebe 1800 kcal/dia de nutrição parenteral total para "suporte nutricional". No 3° dia, queda do nível de consciência, fraqueza muscular grave, fosfato = 0,6 mg/dL (referência: 2,5-4,5 mg/dL). Diagnóstico: síndrome de realimentação grave. Insulina estimulada pela glicose da NP → captação celular massiva de fosfato → hipofosfatemia crítica. O tratamento exige reposição de fosfato EV urgente e redução temporária das calorias. Além disso, o tratamento da caquexia subjacente (via anti-inflamatórios, mirtazapina-apetite) é independente das calorias ofertadas — as citocinas tumorais continuam catabolizando proteína muscular mesmo com NP.

---

## Pré-Prova

> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### O que você PRECISA saber

- **Jejum:** glicogênio (0-18h) → gliconeogênese (18h-3 dias) → cetose + adaptação cerebral (> 3-5 dias)
- **Exercício anaeróbico:** fosfocreatina (0-10s) → glicólise (10-120s) → aeróbico (> 2 min)
- **Estresse cirúrgico:** cortisol + glucagon + adrenalina → hiperglicemia + proteólise
- **Realimentação:** ↑ insulina → hipofosfatemia grave (fosfato entra nas células)
- **3° trimestre de gravidez:** resistência à insulina fisiológica → glicose priorizada para feto
- **Caquexia:** mediada por TNF-α/IL-6 + ubiquitina-proteassoma (não responde a calorias simples)

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Como diferenciar |
|------------|------------|-----------------|
| Síndrome de realimentação | Hipoglicemia | Realimentação → hipofosfatemia; hipoglicemia é ↓ glicose no sangue (diferente) |
| Caquexia | Kwashiorkor | Caquexia: citocinas + proteólise ativa; Kwashiorkor: deficiência proteica + edema |
| DM gestacional | DM2 | DM gestacional: resistência hormonal fisiológica do 3° trimestre; DM2: resistência crônica |
| Hiperglicemia de estresse | DM | Estresse: transitória, hormonal, reversível; DM: crónico, critérios diagnósticos próprios |

### Frase-âncora para não esquecer

> "Jejum: glicogênio → gliconeogênese → cetose. Realimentação → hipofosfatemia (fosfato entra com glicose). Estresse → tríade cortisol-glucagon-adrenalina = hiperglicemia."
'@
[System.IO.File]::WriteAllText("$base\data\materiais\pmh\pmh_a14.md", $c, $utf8NoBom)
[System.IO.File]::WriteAllText("$base\materiais\modulo1\pmh\pmh_a14.md", $c, $utf8NoBom)
Write-Host "pmh_a14 OK"

Write-Host "=== PMH Batch 6 (a14) concluido - FASE 3 COMPLETA ==="
