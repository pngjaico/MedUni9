# BCM1 — Aula 4: Sinalização Celular

## Relevância Clínica e Acadêmica

A maioria dos fármacos modernos age em receptores de sinalização celular — dos antihipertensivos às terapias-alvo oncológicas. Entender os tipos de receptores, os segundos mensageiros e as vias de transdução é compreender diretamente a farmacologia. β-bloqueadores, agonistas β₂, insulina, hormônios de crescimento, fatores de crescimento oncogênicos — todos exercem seus efeitos por essas vias. A Uninove integra sinalização celular com farmacologia e oncologia molecular com frequência crescente nos últimos ciclos de provas.

Além disso, as vias de sinalização são o elo entre o ambiente extracelular e a expressão gênica — compreender como um sinal hormonal chega ao núcleo e ativa um gene é a base para entender tanto a homeostase quanto o câncer.

### Figura sugerida

**Figura-ID:** `BCM1-A4-F01`

- **Momento:** após o bloco de relevância (reserva editorial para imagem no app; aparece inline quando houver URL no catálogo).
- **O que mostrar:** definir na produção — deve ilustrar o tema central da aula de forma clara em mobile.
- **Tipo sugerido:** esquema didático | ilustração estilo atlas | infográfico | foto contextual | outro.
- **Legenda (rascunho):** a fixar junto da imagem final (campo legenda em data/materiais_figuras.json).
- **Notas (opcional):** pesquisar no Wikimedia Commons (buscaCommonsEn / buscaCommonsPt no JSON); licenças livres e atribuição.




---



## Tipos de Comunicação Celular

- **Endócrina (hormonal):** mensageiro liberado na corrente sanguínea, age em células distantes
- **Parácrina:** mensageiro age em células vizinhas (sem corrente sanguínea); ex.: prostaglandinas, histamina
- **Autócrina:** célula responde ao próprio sinal; comum em células tumorais (autocrine loop)
- **Sináptica:** neurotransmissores em sinapses (comunicação rápida e localizada)
- **Contato direto (juxtácrina):** sinalização entre células que se tocam; ex.: Notch-Delta

---

## Classificação dos Receptores

### 1. Receptores Ionotrópicos (canais iônicos ligante-dependentes)

Resposta imediata (ms). O ligante abre/fecha diretamente o canal.
- **nAChR** (nicotínico): Na⁺/K⁺ → despolarização (músculo esquelético, gânglio)
- **GABA-A**: Cl⁻ → hiperpolarização (SNC, ansiolítico)
- **NMDA**: Na⁺, Ca²⁺ (requer glicina como co-agonista)

> **Dica de Prova:** Benzodiazepínicos potencializam GABA-A (aumentam frequência de abertura do canal Cl⁻); barbitúricos também (aumentam duração). Flumazenil reverte benzodiazepínico; não reverte barbitúrico.

### 2. Receptores Acoplados à Proteína G (GPCRs)

Os mais numerosos no genoma humano (~800). Sete domínios transmembrana.

| Subtipo | Proteína G | Efetores | Segundo mensageiro | Exemplos |
|---------|-----------|---------|-------------------|---------|
| Gs | Gs → ↑AC | Adenilil ciclase ↑ | cAMP ↑ → PKA ↑ | β₁, β₂, D₁, H₂, V₂ |
| Gi | Gi → ↓AC | Adenilil ciclase ↓ | cAMP ↓ → PKA ↓ | α₂, M₂, D₂, opioide |
| Gq | Gq → ↑PLC | Fosfolipase C ↑ | IP₃ + DAG → ↑Ca²⁺, ↑PKC | α₁, M₁, M₃, H₁, AT₁ |

**Via Gs → cAMP:**
agonista → Gs → adenilil ciclase ↑ → cAMP ↑ → PKA → fosforila alvos (canais, enzimas, fatores de transcrição CREB)

**Via Gq → IP₃/DAG:**
agonista → Gq → PLC-β → IP₃ (libera Ca²⁺ do RE) + DAG (ativa PKC) → contração muscular lisa, secreção, ativação imune

> **Pegadinha:** A toxina do cólera ADP-ribosila Gsα → Gsα permanece ativa → cAMP permanentemente alto no enterócito → canais de Cl⁻ sempre abertos → diarreia aquosa massiva. A toxina da coqueluche ADP-ribosila Giα → Gi inativo → sem inibição da adenilil ciclase → cAMP alto nas células respiratórias.

### 3. Receptores com Atividade de Tirosinocinase Intrínseca (RTKs)

Ativados por fatores de crescimento (EGF, PDGF, VEGF, insulina). Estrutura: domínio extracelular + transmembrana + domínio intracelular tirosina cinase.

Ao ligar o ligante → **dimerização** → autofosforilação em tirosinas → recruta proteínas adaptadoras (Grb2, SOS) → RAS → RAF → MEK → ERK (MAPK) → proliferação, sobrevivência

**Insulina:** RTK especial → IRS-1 → PI3K → PDK1 → Akt → internalização de GLUT4 (captação de glicose no músculo e gordura)

> **Dica de Prova:** Mutações ativadoras em RAS (proto-oncogene → oncogene) estão presentes em ~30% de todos os cânceres humanos (KRAS, NRAS, HRAS). RAS mutado fica sempre em forma ativa (GTP-bound) → proliferação contínua. Inibidores de KRAS (sotorasibe) são usados em câncer de pulmão KRAS G12C mutado.

### 4. Receptores Nucleares (intracelulares)

Ligantes lipossolúveis que entram na célula. Receptores no citoplasma ou núcleo → complexo ligante-receptor age como fator de transcrição.

- Glicocorticoides (cortisol): receptor citosólico → transloca + dimeriza → liga a GRE no DNA → ↑/↓ transcrição
- Estrogênio, progesterona, testosterona, T3/T4, vitamina D, ácido retinóico

> **Pegadinha:** Hormônios esteróides e tireoidianos agem diretamente no NÚCLEO (via receptor nuclear). Hormônios proteicos (insulina, GH, PTH, TSH) agem em RECEPTORES DE SUPERFÍCIE (RTK ou GPCR). Questão clássica: qual hormônio age no núcleo e qual no receptor de membrana?

### 5. Receptores com Atividade de Guanil Ciclase

ANP → receptor de membrana com guanil ciclase → cGMP → PKG → vasodilatação, natriurese
NO → guanil ciclase solúvel → cGMP → vasodilatação (base do mecanismo da nitroglicerina e sildenafil)

---

## Pontos-Chave

- Comunicação celular: endócrina (distante), parácrina (local), autócrina (própria), sináptica (neurônio)
- GPCR: 7 domínios TM; Gs → cAMP↑ (β, D₁, H₂); Gi → cAMP↓ (α₂, M₂); Gq → IP₃+DAG (α₁, M₁, H₁)
- Toxina coléra → Gsα permanente ativa → diarreia; Toxina coqueluche → Giα inativa → perda de regulação
- RTK: dimerização → autofosforilação → RAS → MAPK → proliferação
- KRAS mutado em ~30% dos cânceres; sotorasibe inibe KRAS G12C
- Insulina: RTK → IRS-1 → PI3K → Akt → GLUT4 transloca para membrana
- Receptor nuclear: ligantes lipossolúveis (esteroides, T3/T4, Vit D) → atuam no núcleo
- NO → guanil ciclase solúvel → cGMP → vasodilatação; base do sildenafil
- Ionotrópico = resposta em ms (abrir canal diretamente)
- β-bloqueador antagoniza receptor β (GPCR Gs): bloqueia cronotropismo, inotropismo positivos

---

## Ponte com a Clínica

O **transtuzumabe (Herceptin®)** é um anticorpo monoclonal que bloqueia o receptor HER2 (RTK da família EGF), usado em cânceres de mama e gástrico HER2-positivo. O **imatinibe (Gleevec®)** inibe a tirosina cinase BCR-ABL (resultado da traslocação t(9;22) — cromossomo Philadelphia) na LMC. Ambos atuam diretamente em RTKs ou suas fusões — o conhecimento das vias de sinalização RTK desta aula é o mapa que explica por que esses fármacos são tão específicos. Na adrenal, o feocromocitoma hipersecreta catecolaminas que agonizam α₁ e β₁ → hipertensão (↑RVP por α₁) + taquicardia (↑FC por β₁): fisiologia direta dos GPCRs Gq e Gs.

---

## Pré-Prova
> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### Síntese para a prova
- **Gs (β, D₁, H₂)**: adenilil ciclase ↑ → cAMP ↑ → PKA (broncodilatação, taquicardia)
- **Gi (α₂, M₂, D₂)**: adenilil ciclase ↓ → cAMP ↓ (bradicardia vagal, inibição neuronal)
- **Gq (α₁, M₁, H₁, AT₁)**: PLC → IP₃ (↑Ca²⁺) + DAG → PKC (contração vascular, secreção)
- **Toxina cólera**: Gsα ativa → cAMP↑ → diarreia aquosa
- **RTK**: dimerização → autofosforilação → RAS → MAPK → proliferação
- **KRAS**: oncogene, mutado em ~30% cânceres; sotorasibe para KRAS G12C pulmão
- **Insulina**: RTK → PI3K → Akt → GLUT4 → captação glicose músculo e gordura
- **Receptor nuclear**: esteroides, T3, Vit D — lipossolúveis — agem no núcleo (fator de transcrição)
- **NO/sildenafil**: cGMP → vasodilatação (sildenafil = iPDE5 → ↑cGMP peniano)
- **ionotrópico**: resposta imediata (ms); GPCR: segundos; nuclear: horas

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Como diferenciar |
|------------|------------|-----------------|
| Receptor Gs | Receptor Gi | Gs → cAMP↑ → PKA↑ (estimulante); Gi → cAMP↓ (inibitório) |
| GPCR | RTK | GPCR = 7 TM + proteína G; RTK = dimero, tirosina cinase intrínseca |
| Hormônio proteico | Hormônio esteroide | Proteico (insulina, TSH) = receptor de membrana; Esteroide (cortisol, estrogênio) = receptor nuclear |
| RAS normal | RAS oncogênico | RAS normal: GTPase ativa → desliga; RAS mutado: perde GTPase → sempre ligado |
| IP₃ | DAG | IP₃ = libera Ca²⁺ do RE; DAG = ativa PKC (ambos produtos do PLC-PIP₂) |

### Frase-âncora para não esquecer
> "Gs estimula; Gi inibe; Gq mexe com cálcio. Proteico age na membrana; esteroide entra no núcleo. RAS mutado é acelerador sem freio — é o oncogene mais comum dos cânceres humanos."
