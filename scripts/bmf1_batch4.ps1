$utf8NoBom = New-Object System.Text.UTF8Encoding $false
$base = "C:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app"

# ─── BMF1 A12 ─────────────────────────────────────────────────────────────────
$c = @'
# BMF1 — Aula 12: Fisiologia da Contração Muscular

**Disciplina:** Bases Morfofuncionais 1 — Locomotor e Digestório
**Módulo:** 1 | **Tempo de estudo sugerido:** 10-15 min

---

## Relevância Clínica e Acadêmica

A contração muscular é um dos temas mais cobrados em fisiologia porque conecta diretamente com farmacologia (curare, succinilcolina, botox, inibidores de colinesterase), com toxicologia (organofosforados), com fisiopatologia (miastenia gravis, tetania hipocalcêmica) e com anestesiologia. Entender o mecanismo de acoplamento excitação-contração (AEC) é entender por que um veneno que bloqueia a acetilcolinesterase causa paralisia espástica, ou por que a hipocalcemia causa contrações musculares involuntárias.

---

## 1. Junção Neuromuscular (Placa Motora)

A contração começa na **junção neuromuscular (JNM)**:

1. Potencial de ação chega ao terminal axonal
2. Ca²⁺ entra por canais voltagem-dependentes → exocitose de **acetilcolina (ACh)** na fenda sináptica
3. ACh se liga a receptores **nicotínicos (nAChR)** na membrana pós-juncional
4. Abertura de canais de Na⁺/K⁺ → despolarização da membrana muscular → potencial de ação muscular

**Degradação:** ACh é hidrolisada em ácido acético + colina pela **acetilcolinesterase (AChE)** na fenda.

---

## 2. Acoplamento Excitação-Contração (AEC)

| Etapa | Evento |
|-------|--------|
| 1 | Potencial de ação se propaga pelo sarcolema |
| 2 | Entra nos **túbulos T** → ativa receptor dihidropiridínico (DHPR) |
| 3 | DHPR ativa o receptor de rianodina (RyR) do retículo sarcoplasmático |
| 4 | RS libera Ca²⁺ no sarcoplasma (Ca²⁺ citosólico: 10⁻⁷ M → 10⁻⁵ M) |
| 5 | Ca²⁺ liga-se à **troponina C** |
| 6 | Tropomiosina se desloca → expõe sítio ativo da actina |
| 7 | Cabeça de miosina (com ADP+Pi) faz ponte cruzada com actina |
| 8 | Power stroke: liberação de Pi → movimento da cabeça → actina desliza |
| 9 | ATP liga-se à miosina → miosina se desprende da actina |
| 10 | Hidrólise de ATP (→ ADP+Pi) → recarga da miosina |
| 11 | Ca²⁺ é recaptado pelo RS via SERCA (bomba Ca²⁺-ATPase) |

> **Regra:** sem ATP → miosina não se solta da actina → **rigor mortis** (morte celular sem ATP).

---

## 3. Teoria dos Filamentos Deslizantes

Os filamentos NÃO encurtam — **deslizam** um sobre o outro. O sarcômero encurta porque os filamentos finos (actina) deslizam sobre os filamentos grossos (miosina), aproximando as linhas Z.

Resultado: banda I diminui, zona H diminui, linhas Z aproximam — banda A fica igual.

---

## 4. Farmacologia da JNM

| Fármaco/Toxina | Mecanismo | Efeito |
|----------------|-----------|--------|
| **Curare (tubocurarina)** | Antagonista competitivo do nAChR | Paralisia flácida (bloqueador não despolarizante) |
| **Succinilcolina** | Agonista permanente do nAChR | Despolarização prolongada → paralisia flácida (bloqueador despolarizante) |
| **Neostigmina / Fisostigmina** | Inibidor de AChE | ↑ ACh → hiper-estimulação (fasciculações, fraqueza) |
| **Toxina botulínica (Botox)** | Cliva proteínas SNARE → bloqueia exocitose de ACh | Paralisia flácida (sem ACh) |
| **Organofosforados** | Inibidor irreversível de AChE | ↑ ACh → síndrome colinérgica (SLUDGE) |

---

## 5. Patologias Relacionadas

| Doença | Mecanismo | Manifestação |
|--------|-----------|--------------|
| **Miastenia gravis** | Anticorpos contra nAChR → destruição de receptores | Fraqueza muscular progressiva ao longo do dia; ptose, diplopia |
| **Sd. de Lambert-Eaton** | Anticorpos contra canais de Ca²⁺ pré-sinápticos → ↓ exocitose de ACh | Fraqueza que MELHORA com repetição (ao contrário da MG) |
| **Tetania hipocalcêmica** | Ca²⁺ baixo → maior excitabilidade do nervo motor → despolarizações espontâneas | Contração muscular involuntária; sinal de Chvostek/Trousseau |
| **Rigor mortis** | Depleção de ATP → miosina presa à actina | Rigidez cadavérica |

---

## Erros Clássicos em Prova (Uninove)

- **Curare causa espasmo/contração:** curare bloqueia o nAChR competitivamente → sem contração → paralisia FLÁCIDA, não espástica.
- **Succinilcolina é bloqueador não despolarizante:** succinilcolina é bloqueador DESPOLARIZANTE (imita ACh mas não é hidrolisado rapidamente).
- **Na miastenia gravis, a força melhora com repetição:** na MG a força piora com repetição (receptores vão sendo exauridos). Na síndrome de Lambert-Eaton é que melhora com repetição.
- **Tetania hipocalcêmica = convulsão:** tetania é contração muscular tônica involuntária (não é convulsão epiléptica) causada por nervos hiperexcitáveis (o Ca²⁺ estabiliza canais de Na⁺ na membrana neuronal).
- **Rigor mortis = espasmo em vida:** rigor mortis ocorre após a morte, quando não há mais ATP. Em vida, qualquer contração tônica tem ATP e é regulável.

---

## Checklist de Revisão

- [ ] Descrevo as 11 etapas do AEC do potencial de ação até a contração e relaxamento
- [ ] Sei o papel de DHPR (receptor no túbulo T) e RyR (receptor da rianodina no RS)
- [ ] Distingo curare (bloqueador não despolarizante) de succinilcolina (despolarizante)
- [ ] Explico o mecanismo da miastenia gravis e o que a diferencia da Lambert-Eaton
- [ ] Sei por que hipocalcemia causa tetania (Ca²⁺ estabiliza Na⁺ → sem Ca²⁺ → neurônios hiperexcitáveis)
- [ ] Explico rigor mortis pelo mecanismo do AEC (sem ATP, miosina fica presa à actina)

---

## Ponte com a Clínica

Um paciente com exposição a organofosforado (agrotóxico) chega com miose, sialorreia, broncoespasmo, bradicardia, diarreia, êmese e fasciculações musculares — síndrome SLUDGE. O antídoto é **atropina** (antagonista muscarínico para as manifestações parassimpáticas) + **pralidoxima** (reativa a AChE antes que o veneno a ligue irreversivelmente). Para entender a sequência de sinais e o tratamento, você precisa entender exatamente o que AChE faz e o que acontece quando ela é bloqueada.

---

## Pré-Prova

> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### O que você PRECISA saber

- **JNM:** ACh liberada → nAChR (nicotínico) → despolarização → AEC
- **AEC:** túbulo T → DHPR → RyR → Ca²⁺ do RS → troponina C → tropomiosina se move → contração
- **Relaxamento:** SERCA recapta Ca²⁺ para o RS
- **Curare:** não despolarizante, paralisia flácida; **succinilcolina:** despolarizante, paralisia flácida
- **MG:** anticorpo contra nAChR → força piora com exercício
- **Lambert-Eaton:** anticorpo contra Ca²⁺ pré-sináptico → força MELHORA com exercício
- **Rigor mortis:** sem ATP, miosina não se solta da actina

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Como diferenciar |
|------------|------------|-----------------|
| Curare | Succinilcolina | Curare = não despolarizante (competitivo); succinilcolina = despolarizante |
| Miastenia gravis | Lambert-Eaton | MG: força piora com repetição; Lambert-Eaton: força melhora |
| Tetania | Convulsão | Tetania = contração muscular tônica (baixo Ca²⁺); convulsão = descarga neuronal excessiva |
| DHPR | RyR | DHPR = sensor de voltagem (túbulo T); RyR = canal de Ca²⁺ do RS |

### Frase-âncora para não esquecer

> "Ca²⁺ liga Troponina C, move Tropomiosina, expõe a Actina — MG piora com uso, Lambert-Eaton MELHora."
'@
[System.IO.File]::WriteAllText("$base\data\materiais\bmf1\bmf1_a12.md", $c, $utf8NoBom)
[System.IO.File]::WriteAllText("$base\materiais\modulo1\bmf1\bmf1_a12.md", $c, $utf8NoBom)
Write-Host "bmf1_a12 OK"

# ─── BMF1 A13 ─────────────────────────────────────────────────────────────────
$c = @'
# BMF1 — Aula 13: Prática — Músculos da Coluna, Membros Superiores e Inferiores

**Disciplina:** Bases Morfofuncionais 1 — Locomotor e Digestório
**Módulo:** 1 | **Tempo de estudo sugerido:** 10-15 min

---

## Relevância Clínica e Acadêmica

Identificar músculos em peças anatômicas e relacioná-los às suas origens, inserções e ações é habilidade direta da prática clínica: exame físico neurológico (força por grupo muscular + raiz nervosa), propedêutica ortopédica, cirurgia. A Uninove usa imagens de peças ou diagramas na prova prática. Esta aula consolida os principais músculos de cada região com seus nervos de inervação — especialmente importante para entender paresias e localizações de lesão nervosa.

---

## 1. Músculos da Coluna e Postura

| Grupo | Músculos | Ação |
|-------|----------|------|
| **Eretor da espinha** | Iliocostal, longuíssimo, espinal | Extensão e manutenção postural da coluna |
| **Transverso-espinal** | Semiespinal, multífido, rotadores | Rotação e extensão fina da coluna |
| **Quadrado lombar** | Quadrado do lombo | Flexão lateral + fixação da 12ª costela (respiração) |
| **Reto abdominal** | Reto do abdome | Flexão do tronco |

> O **multífido** é o músculo estabilizador profundo da coluna — enfraquecido na lombalgia crônica. Seu fortalecimento é base da reabilitação.

---

## 2. Músculos do Membro Superior — Inervação por Nervo

| Nervo | Músculos principais | Resultado de lesão |
|-------|---------------------|-------------------|
| **Musculocutâneo (C5-C7)** | Bíceps, braquial, coracobraquial | Flexão de cotovelo comprometida; perda de sensibilidade na face lateral do antebraço |
| **Radial (C5-T1)** | Tríceps, extensores do punho (ext. carpi radialis, ulnaris), extensores dos dedos | "Mão caída" (wrist drop) — lesão clássica na fratura do úmero |
| **Mediano (C6-T1)** | Flexores extrínsecos dos dedos (FDP 2-3), FDS, pronadores, músculos tenares (OFALM) | "Mão de bênção" (flexão do 4º e 5º dedos, dedos 2-3 ficam estendidos) |
| **Ulnar (C8-T1)** | Intrínsecos da mão (interósseos, hipotênar), FDP 4-5 | "Mão em garra" (4º e 5º dedos em garra); sinal de Froment |

**Lesão do radial no úmero: "Mão caída (wrist drop)"** — incapacidade de estender o punho e os dedos em extensão.

---

## 3. Músculos do Membro Inferior — Inervação por Nervo

| Nervo | Músculos principais | Resultado de lesão |
|-------|---------------------|-------------------|
| **Femoral (L2-L4)** | Quadríceps, ilíopsoas, sartório, pectíneo | Incapacidade de estender o joelho; marcha com joelho em flexão |
| **Obturador (L2-L4)** | Adutores (longo, curto, magno), grácil | Fraqueza na adução da coxa |
| **Glúteo superior (L4-S1)** | Glúteo médio e mínimo, TFL | Sinal de Trendelenburg + (nádega cai ao andar) |
| **Ciático (L4-S3)** | Isquiotibiais, todos os músculos da perna e pé (via tibial e fibular) | Paralisia do pé (equino) + perda de reflexo de Aquiles |
| **Fibular comum (L4-S2)** | Dorsiflexores, eversores (tibial anterior, ext. longo dos dedos, fibulares) | "Pé caído" (foot drop) — lesão no pescoço da fíbula |
| **Tibial (L4-S3)** | Flexores plantares (gastrocnêmio, sóleo), flexores dos dedos | Incapacidade de ficar na ponta do pé |

---

## 4. Nerve Point Summary — Lesões mais Cobradas

| Lesão | Nervo | Deformidade | Teste |
|-------|-------|-------------|-------|
| Fratura do úmero (1/3 médio) | Radial | Mão caída (wrist drop) | Não consegue estender punho |
| Luxação do ombro / fratura cirúrgica do úmero | Axilar | Incapacidade de abduzir (deltóide) | Hipoestesia "emblema do sargento" |
| Fratura do epicôndilo medial | Ulnar | Mão em garra (4º-5º) | Sinal de Froment (polegar) |
| Síndrome do túnel do carpo | Mediano | Atrofia tenar + parestesia 1-2-3 e ½ do 4º | Phalen + Tinel |
| Fratura do pescoço da fíbula | Fibular comum | Pé caído (foot drop) | Não consegue dorsiflexionar |
| Lesão de L5 | Radicular L5 | Fraqueza na dorsiflexão do hálux | Sinal de Babinski diferencial |

---

## Erros Clássicos em Prova (Uninove)

- **Lesão do radial = mão em garra:** mão em garra é do nervo ulnar. Lesão do radial = wrist drop (mão caída, não consegue estender punho).
- **Nervo femoral inerva glúteo:** glúteo médio e mínimo = nervo glúteo superior. Femoral = quadríceps e hip flexors.
- **Sinal de Trendelenburg = fraqueza do glúteo máximo:** Trendelenburg positivo = fraqueza do glúteo MÉDIO (abdução). Glúteo máximo = extensão do quadril.
- **Síndrome do túnel do carpo afeta todos os dedos:** só o nervo mediano — polegara ao 4º dedo (metade). O 5º dedo e metade do 4º = nervo ulnar.
- **Lesão do ciático = mesma coisa que lesão do fibular:** o ciático inclui fibular e tibial. Lesão específica do fibular → pé caído. Lesão do tibial → perda da flexão plantar.

---

## Checklist de Revisão

- [ ] Sei as deformidades clássicas: radial=wrist drop, ulnar=garra, mediano=bênção, fibular=pé caído
- [ ] Associo Trendelenburg positivo ao glúteo médio (não ao máximo)
- [ ] Sei que síndrome do túnel do carpo = mediano = polegar ao 4º dedo (metade)
- [ ] Identifico os músculos do grupo eretor da coluna e sua função postural
- [ ] Sei que o multífido é o estabilizador profundo relevante na lombalgia
- [ ] Associo cada nervo à sua raiz (radial C5-T1, ulnar C8-T1, femoral L2-L4, ciático L4-S3)

---

## Ponte com a Clínica

Paciente chega após acidente em motocicleta com pé caído — incapacidade de dorsiflexionar o tornozelo, sem conseguir caminhar em calcanhar. Pergunta clínica: onde está a lesão? Pé caído = nervo fibular comum. O ponto mais vulnerável = pescoço da fíbula (onde o nervo envolve lateralmente a fíbula). Confirma-se palpando o trajeto e testando eversão e dorsiflexão. Saber anatomia de nervos periféricos é o que permite localizar a lesão sem imagem — só com exame físico.

---

## Pré-Prova

> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### O que você PRECISA saber

- **Radial:** wrist drop (extensores do punho); fratura 1/3 médio úmero
- **Ulnar:** mão em garra (4º-5º dedos); fratura epicôndilo medial
- **Mediano:** bênção (2º-3º dedos), atrofia tenar; síndrome do túnel do carpo
- **Fibular comum:** pé caído; lesão no pescoço da fíbula
- **Glúteo superior:** abdução; Trendelenburg = sua fraqueza
- **Multífido:** estabilizador profundo da coluna; chave na lombalgia crônica

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Como diferenciar |
|------------|------------|-----------------|
| Lesão radial | Lesão ulnar | Radial = wrist drop; ulnar = mão em garra (4º-5º) |
| Lesão mediano | Lesão ulnar | Mediano = bênção (2º-3º); ulnar = garra (4º-5º); ambos fazem garra no cenário inverso |
| Glúteo médio | Glúteo máximo | Médio = abdução (Trendelenburg); máximo = extensão do quadril |
| Fibular comum | Tibial | Fibular = pé caído (dorsiflexão); tibial = perda flexão plantar |

### Frase-âncora para não esquecer

> "Radial cai (wrist drop) — Ulnar garra — Mediano abençoa — Fibular deixa o pé cair."
'@
[System.IO.File]::WriteAllText("$base\data\materiais\bmf1\bmf1_a13.md", $c, $utf8NoBom)
[System.IO.File]::WriteAllText("$base\materiais\modulo1\bmf1\bmf1_a13.md", $c, $utf8NoBom)
Write-Host "bmf1_a13 OK"

# ─── BMF1 A14 ─────────────────────────────────────────────────────────────────
$c = @'
# BMF1 — Aula 14: Tegumento — Tecido Epitelial de Revestimento

**Disciplina:** Bases Morfofuncionais 1 — Locomotor e Digestório
**Módulo:** 1 | **Tempo de estudo sugerido:** 10-15 min

---

## Relevância Clínica e Acadêmica

A pele é o maior órgão do corpo e a barreira primária contra infecções, raios UV e perda de água. O tecido epitelial de revestimento é o componente celular da epiderme e das mucosas — e sua classificação (simples, estratificado, pseudoestratificado; pavimentoso, cúbico, cilíndrico) é diretamente cobrada em provas histológicas. Mais importante: o tipo de epitélio presente em um local determina qual tipo de tumor pode surgir ali — um carcinoma epidermóide ocorre em epitélio estratificado pavimentoso, não em epitélio simples.

---

## 1. Classificação do Tecido Epitelial de Revestimento

### Por número de camadas

| Tipo | Camadas | Localização |
|------|---------|-------------|
| **Simples** | 1 camada | Alvéolo pulmonar, capilares, túbulo proximal renal |
| **Estratificado** | > 1 camada | Pele (queratinizado), esôfago, vagina (não queratinizado) |
| **Pseudoestratificado** | 1 camada, mas com alturas diferentes criando falsa impressão de estratificação | Traqueia, brônquios, epidídimo |

### Por forma da célula superficial

| Forma | Características | Exemplo |
|-------|------|---------|
| **Pavimentoso (escamoso)** | Células achatadas, núcleos ovais | Pele, endotélio, mesotélio |
| **Cúbico** | Células iguais em altura e largura, núcleo redondo e central | Túbulos coletores renais, ductos glandulares |
| **Cilíndrico (colunar)** | Mais altas que largas, núcleo oval basal | Mucosa intestinal, gástrica |

### Combinações mais cobradas

| Epitélio | Classificação | Localização |
|---------|---------------|-------------|
| Epitélio simples pavimentoso | Simples + pavimentoso | Endotélio de vasos, mesotélio, alvéolo pulmonar, alça de Henle (descendente fina) |
| Epitélio simples cúbico | Simples + cúbico | Túbulo proximal e distal renal, tireóide, ovário (superfície) |
| Epitélio simples cilíndrico | Simples + cilíndrico | Intestino delgado (com microvilosidades), estômago, vesícula biliar |
| Epitélio estratificado pavimentoso queratinizado | Estratificado + pavimentoso | Pele (epiderme) |
| Epitélio estratificado pavimentoso não queratinizado | Estratificado + pavimentoso | Esôfago, vagina, córnea |
| Epitélio pseudoestratificado cilíndrico ciliado | Pseudo + cilíndrico + cílios | Traqueia, brônquios (epitélio respiratório) |
| **Epitélio de transição (urotélio)** | Especial — múltiplas camadas com células em guarda-chuva | Bexiga, ureteres, pelve renal |

---

## 2. Estruturas Especiais da Superfície Apical

| Estrutura | Função | Onde |
|-----------|--------|-------|
| **Microvilosidades** | Aumenta área de absorção (intestino) | Borda em escova do intestino e túbulo renal |
| **Cílios** | Movem substâncias ao longo da superfície | Traqueia (move muco + impurezas), tubas uterinas |
| **Estereocílios** | Microvilosidades longas sem movimento; absorção | Epidídimo |

---

## 3. Junções Intercelulares

| Junção | Estrutura | Função |
|--------|-----------|--------|
| **Zônula de oclusão (tight junction)** | Proteínas claudinas + ocludinas | Vedação — controla passagem paracelular |
| **Zônula de adesão** | Caderinas + actina | Adesão mecânica; posição apical |
| **Desmossomo (mácula de adesão)** | Caderinas desmossômicas + filamentos intermediários (queratina) | Resistência mecânica ao cisalhamento; posição lateral |
| **Gap junction (nexo)** | Conexinas | Comunicação química + elétrica |
| **Hemidesmossomo** | Integrinas + lâmina basal | Ancora célula à membrana basal |

> **Pênfigo vulgar** = doença autoimune que ataca desmogleína (caderina do desmossomo) → bolhas intraepidérmicas.

---

## 4. Pele — Camadas da Epiderme (da superfície para a profundidade)

A epiderme é **stratificado pavimentoso queratinizado**. Camadas (de fora para dentro):

| Camada | Características |
|--------|-----------------|
| **Córnea** | Células mortas, achatadas, cheias de queratina (corneócitos) |
| **Lúcida** | Só em pele espessa (palmas e plantas); células sem núcleo, ricas em eleidina |
| **Granulosa** | Querato-hialina (grânulos basofílicos); início da queratinização |
| **Espinhosa** | Células com projeções (espinhos) = desmogleínas; maior camada em pele espessa |
| **Basal (germinativa)** | Células-tronco da epiderme; melanócitos (1 para cada 10 células); mitoses frequentes |

---

## Erros Clássicos em Prova (Uninove)

- **Traqueia tem epitélio estratificado:** a traqueia tem epitélio pseudoestratificado cilíndrico ciliado — parece estratificado mas é 1 única camada.
- **Bexiga tem epitélio estratificado simples:** a bexiga tem urotélio (epitélio de transição) — que muda de aparência conforme a distensão.
- **Endotélio é epitelial:** endotélio é derivado do mesoderma — é classificado como epitélio especial (simples pavimentoso), mas sua origem embriológica é diferente da maioria dos epitélios.
- **Cílios = flagelos:** cílios = múltiplos, curtos, movem substâncias na superfície; flagelos = único, longo (ex: cauda do espermatozoide para locomoção).
- **Camada basal = mais superficial:** a camada basal da epiderme é a mais PROFUNDA (próxima à membrana basal que a separa da derme).

---

## Checklist de Revisão

- [ ] Classifico epitélios por número de camadas (simples/estratificado/pseudo) e forma (pavimentoso/cúbico/cilíndrico)
- [ ] Associo cada epitélio ao seu local correto (intestino = simples cilíndrico; traqueia = pseudoestratificado)
- [ ] Identifico as 5 camadas da epiderme de fora para dentro (Córnea-Lúcida-Granulosa-Espinhosa-Basal)
- [ ] Diferencio microvilosidade de cílio e estereocílio
- [ ] Sei a função das 5 junções celulares (oclusão, adesão, desmossomo, gap, hemidesmossomo)
- [ ] Associo pênfigo ao desmossomo (desmogleína) e síndrome de Goodpasture à membrana basal

---

## Ponte com a Clínica

No carcinoma epidermóide do esôfago, a transformação maligna ocorre no epitélio estratificado pavimentoso não queratinizado que normalmente reveste o esôfago. No adenocarcinoma do esôfago (ligado ao refluxo), há metaplasia de Barrett — o epitélio pavimentoso é substituído por simples cilíndrico (da mucosa intestinal). Identificar esse processo histológico é a base do diagnóstico de esôfago de Barrett na endoscopia. Uma questão que mostra lâmina de epitélio estratificado pavimentoso com queratina e pergunta o local — resposta: pele ou esôfago com metaplasia. Sem saber histologia, a questão fica impossível.

---

## Pré-Prova

> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### O que você PRECISA saber

- **Traqueia:** pseudoestratificado cilíndrico ciliado (NÃO estratificado)
- **Bexiga:** epitélio de transição (urotélio) — muda com distensão
- **Pele (epiderme):** estratificado pavimentoso queratinizado
- **Esôfago/vagina:** estratificado pavimentoso NÃO queratinizado
- **Intestino:** simples cilíndrico com microvilosidades (borda em escova)
- **Camadas da epiderme (fora→dentro):** Córnea-Lúcida-Granulosa-Espinhosa-Basal
- **Camada basal:** mais profunda, contém células-tronco e melanócitos
- **Desmossomo:** resistência mecânica; desmogleína = alvo no pênfigo

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Como diferenciar |
|------------|------------|-----------------|
| Pseudoestratificado | Estratificado | Pseudo = 1 camada com alturas diferentes; estratificado = > 1 camada real |
| Pele | Esôfago | Ambos estratificados pavimentosos; pele = queratinizado; esôfago = não queratinizado |
| Microvilosidade | Cílio | Microvilosidade = aumenta absorção (intestino/rim); cílio = move muco (traqueia/tubo uterino) |
| Hemidesmossomo | Desmossomo | Hemidesmossomo = célula → membrana basal (integrina); desmossomo = célula-célula (caderina) |

### Frase-âncora para não esquecer

> "Traqueia: PSEUDO — não estratificado. Córnea-Lúcida-Granulosa-Espinhosa-Basal — decora de FORA para DENTRO."
'@
[System.IO.File]::WriteAllText("$base\data\materiais\bmf1\bmf1_a14.md", $c, $utf8NoBom)
[System.IO.File]::WriteAllText("$base\materiais\modulo1\bmf1\bmf1_a14.md", $c, $utf8NoBom)
Write-Host "bmf1_a14 OK"

Write-Host "=== BMF1 Batch 4 (a12-a14) concluido ==="
