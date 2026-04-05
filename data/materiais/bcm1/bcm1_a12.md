# Biotecnologias e Bioinformática

## Relevância Clínica e Acadêmica

A medicina contemporânea é inseparável das ferramentas biotecnológicas. O diagnóstico de uma infecção por SARS-CoV-2, a identificação de uma mutação em BRCA2, o desenvolvimento de uma vacina de mRNA e o tratamento de uma criança com imunodeficiência combinada grave por terapia gênica são todos impossíveis sem as técnicas abordadas nesta aula. Para o estudante de medicina da Uninove, o domínio dessas ferramentas é exigido tanto nas provas teóricas quanto na interpretação de exames modernos.

A bioinformática — o uso de algoritmos computacionais para análise de dados biológicos — tornou-se a espinha dorsal do sequenciamento genômico de nova geração (NGS), da identificação de variantes patogênicas e da medicina de precisão. Entender os princípios de PCR, eletroforese, CRISPR e sequenciamento é hoje tão básico para o médico moderno quanto interpretar um eletrocardiograma.

### Figura sugerida

**Figura-ID:** `BCM1-A12-F01`

- **Momento:** após o bloco de relevância (reserva editorial para imagem no app; aparece inline quando houver URL no catálogo).
- **O que mostrar:** definir na produção — deve ilustrar o tema central da aula de forma clara em mobile.
- **Tipo sugerido:** esquema didático | ilustração estilo atlas | infográfico | foto contextual | outro.
- **Legenda (rascunho):** a fixar junto da imagem final (campo legenda em data/materiais_figuras.json).
- **Notas (opcional):** pesquisar no Wikimedia Commons (buscaCommonsEn / buscaCommonsPt no JSON); licenças livres e atribuição.




---



## PCR — Reação em Cadeia da Polimerase

A PCR amplifica exponencialmente uma sequência específica de DNA a partir de quantidades mínimas de material genético. Criada por Kary Mullis em 1983 (Nobel de Química, 1993).

### Componentes Essenciais

| Componente | Função |
|-----------|--------|
| DNA molde | Sequência a ser amplificada |
| Primers (oligonucleotídeos) | Definem os limites da região-alvo; anelam por complementaridade |
| Taq DNA polimerase | Termoestável (Thermus aquaticus); sintetiza nova fita a 72 °C |
| dNTPs (dATP, dGTP, dCTP, dTTP) | Substrato para síntese da nova fita |
| Tampão com Mg²⁺ | Cofator da Taq; afeta especificidade |

### Ciclos da PCR (3 etapas)

1. **Desnaturação:** 94–96 °C — separa as fitas de DNA
2. **Anelamento:** 50–65 °C — primers hibridizam com o molde
3. **Extensão:** 72 °C — Taq sintetiza a nova fita 5'→3'

Após n ciclos: 2ⁿ cópias teóricas.

### Variantes Clinicamente Relevantes

| Variante | Princípio | Uso clínico |
|---------|-----------|-----------|
| **RT-PCR** (reverse transcription) | RNA → cDNA (por transcriptase reversa) → PCR | Detecção de RNA viral (HIV, HCV, SARS-CoV-2) e expressão gênica |
| **qPCR (PCR em tempo real)** | Fluorescência proporcional à quantidade de produto | Quantificação de carga viral; diagnóstico molecular |
| **PCR multiplex** | Vários pares de primers em um único tubo | Painel de patógenos respiratórios, síndrome de microdeleção |
| **ddPCR (droplet digital)** | Partição em microgotículas; contagem absoluta | Detecção de mutações raras em DNA tumoral circulante (ctDNA) |
| **LAMP** (Loop-mediated) | Amplificação isotérmica (sem termociclador) | Diagnóstico de campo (dengue, leishmaniose) |

> **Dica Uninove:** RT-PCR ≠ PCR em tempo real (qPCR). RT-PCR usa transcriptase reversa para converter RNA em cDNA. qPCR quantifica produto em tempo real por fluorescência. A banca adora confundir os dois!

---

## Eletroforese em Gel de Agarose

Separa fragmentos de DNA por tamanho em campo elétrico. DNA carregado negativamente (fosfatos) migra em direção ao polo positivo. Fragmentos menores migram mais rápido na malha de agarose. Após corrida, corado com brometo de etídio ou SYBR Green e visualizado sob UV.

**Aplicações:** Confirmar produto de PCR, analisar tamanho de fragmentos de restrição, padrão de fragmentação (escada de ~200 pb = apoptose), Southern blot.

---

## Sequenciamento de DNA

### Sanger (1ª geração)

Usa didesoxinucleotídeos (ddNTPs) marcados com fluorescência — cada ddNTP termina a síntese quando incorporado. Eletroforese capilar separa os fragmentos → leitura das bandas = sequência. Padrão-ouro para confirmação de variante única. Comprimento máximo ~1.000 pb.

### NGS — Sequenciamento de Nova Geração (2ª/3ª geração)

Sequencia milhões a bilhões de fragmentos em paralelo ("shotgun"). Plataformas: Illumina (por síntese), Ion Torrent (detecção de pH), PacBio/Nanopore (leitura longa).

| Aspecto | Sanger | NGS |
|--------|--------|-----|
| Volume | 1 fragmento/reação | Genoma inteiro em paralelo |
| Custo por Mpb | Alto | Muito baixo |
| Aplicação clínica | Confirmar variante pontual | Painéis genéticos, exoma, genoma completo |
| Precisão | >99,9% | ~99% (corrigido por cobertura) |

**NGS clínico:**
- **Painel de genes:** sequencia somente genes de interesse (ex: BRCA1+BRCA2+PALB2)
- **Exoma completo (WES):** todas as regiões codificantes (~1,5% do genoma)
- **Genoma completo (WGS):** 100% do genoma; mais caro

---

## Ferramentas de Clonagem e Edição Gênica

### Enzimas de Restrição

Endonucleases que cortam DNA em sítios específicos (palindrômicos). *EcoRI* (G↓AATTC), *BamHI* (G↓GATCC). Geram extremidades "pegajosas" (sticky ends) ou cegas (blunt ends). Base da clonagem tradicional e do mapeamento de restrição.

### Vetores de Clonagem

| Tipo | Capacidade | Uso |
|------|-----------|-----|
| Plasmídeo | <20 kb | Produção de proteínas recombinantes (insulina, eritropoietina) |
| Fago λ | 15–25 kb | Genotecas de DNA genômico |
| BAC/YAC | 100–300 kb / até 1.000 kb | Projetos de sequenciamento de genoma |
| Vírus recombinantes | Variável | Terapia gênica (AAV, lentivírus) |

### CRISPR-Cas9: Edição Gênica de Precisão

**Mecanismo:**
1. **gRNA (guide RNA)** — 20 nt complementares ao alvo; guia o complexo até o DNA
2. **Cas9 (endonuclease)** — faz corte de dupla fita no DNA-alvo ~3 pb antes do PAM (NGG)
3. Reparação da DSB pelo NHEJ (gera indel = knockout) ou HRR com molde doador (inserção precisa)

**Aplicações clínicas em desenvolvimento:**
- Doença falciforme/β-talassemia: reativação da γ-globina fetal (Casgevy — 1ª terapia CRISPR aprovada, 2023)
- Distrofia muscular de Duchenne: skip de exon do gene DMD
- Hipercolesterolemia familiar: silenciamento de PCSK9 in vivo
- Câncer: engenharia de células CAR-T

> **Dica:** O PAM (Proto-spacer Adjacent Motif) — sequência NGG — é obrigatório para Cas9 de *S. pyogenes* e determina os sítios-alvo possíveis. Variantes de Cas (Cas12a, Cas13) têm PAMs e alvos diferentes.

---

## Bioinformática — Conceitos Essenciais

**Banco de dados biológicos:**
- **NCBI / GenBank:** sequências de DNA e RNA
- **UniProt/Swiss-Prot:** sequências e funções de proteínas
- **OMIM:** genética médica, doenças monogênicas
- **ClinVar:** variantes patogênicas e benignas clinicamente classificadas

**Alinhamento de sequências:**
- **BLAST** (Basic Local Alignment Search Tool): compara sequência desconhecida com banco de dados → identifica homólogos → utilidade diagnóstica e evolutiva
- **Clustal/MUSCLE:** alinhamento múltiplo para análise filogenética

**Análise de variantes (NGS):**
1. Alinhamento ao genoma de referência (hg38)
2. Chamada de variantes (SNP, indel)
3. Anotação: patogênica / provavelmente patogênica / VUS / benigna (ACMG guidelines)

**Ferramentas de expressão:**
- **RNA-seq:** mensura expressão de todos os genes simultaneamente → identifica genes diferencialmente expressos em doença vs. controle
- **Microarray:** hibridização de cDNA com sondas → estimativa de expressão em escala genômica (substituído pelo RNA-seq)

---

## Proteínas Recombinantes e Terapia Gênica

**Proteínas recombinantes produzidas por biotecnologia:**
| Proteína | Vetor de produção | Uso |
|----------|------------------|-----|
| Insulina humana | *E. coli* (plasmídeo) | DM tipo 1 |
| Eritropoietina (EPO) | Células CHO | Anemia de doença renal crônica |
| Fator VIII/IX | Células CHO | Hemofilia A/B |
| Adalimumabe (anti-TNF) | Células CHO | AR, Crohn, Psoríase |
| Herceptin (trastuzumabe) | Células CHO | Câncer de mama HER2+ |

**Terapia gênica:**
- **Substituição de gene defeituoso:** CRISPR ou vetor viral insere cópia funcional
- **Silenciamento:** siRNA/shRNA/miRNA terapêutico reduz expressão de gene patológico
- **CAR-T:** células T do paciente engenheiradas com receptor quimérico para antígeno tumoral (CD19, BCMA)
- **Onasemnogene (Zolgensma):** AAV9 carregando SMN1 → AME tipo 1 (aprovado FDA 2019)

---

## Pontos-Chave

- **PCR amplifica DNA** exponencialmente (2ⁿ cópias); exige primers, Taq, dNTPs, Mg²⁺
- **RT-PCR:** RNA → cDNA (transcriptase reversa) → PCR; detecta vírus de RNA (SARS-CoV-2, HIV)
- **qPCR (tempo real):** quantifica produto por fluorescência; carga viral, expressão gênica
- **Sanger:** padrão-ouro para confirmar variante única; ddNTPs terminadores
- **NGS:** sequencia milhões de fragmentos em paralelo; WES/WGS/painéis genéticos
- **CRISPR-Cas9:** gRNA guia Cas9 ao alvo; corte antes do PAM (NGG); NHEJ = knockout
- **Casgevy:** 1ª terapia CRISPR aprovada (2023) — falciforme e β-talassemia
- **Enzimas de restrição** cortam em sítios palindrômicos; base da clonagem
- **BLAST** compara sequência com banco de dados (identificação de gene desconhecido)
- **ClinVar** classifica variantes: patogênica/provavelmente patogênica/VUS/benigna

---

## Ponte com a Clínica

**Diagnóstico de COVID-19:** RT-qPCR de swab nasofaríngeo detecta RNA do SARS-CoV-2 com sensibilidade >95%. O teste converte RNA → cDNA → amplifica com primers específicos para regiões N, E, ORF1ab → fluorescência proporcional à carga viral.

**Painel genético para câncer de mama:** Mulher jovem com câncer de mama ou histórico familiar → sequenciamento NGS de painel BRCA1/BRCA2/PALB2/CHEK2/ATM → resultado em 2–3 semanas → orienta decisão de mastectomia preventiva e uso de PARP inibidor.

**Casgevy (exagamglogene autotemcel):** paciente com doença falciforme grave recebe células-tronco hematopoéticas editadas com CRISPR para silenciar BCL11A (repressor da γ-globina) → reativação da HbF → redução/eliminação de crises vaso-oclusivas. Aprovado pela FDA em dezembro de 2023.

**Insulina recombinante:** produzida em *E. coli* ou levedura com gene humano de insulina inserido em plasmídeo. Substituiu insulina de porco/boi na década de 1980. Sem risco de transmissão de príons ou reações alérgicas severas.

---

## Pré-Prova

> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### O que você PRECISA saber

- **PCR:** amplifica DNA; Taq polimerase termoestável; 3 etapas (desnaturação, anelamento, extensão)
- **RT-PCR:** RNA → cDNA (transcriptase reversa) ANTES do PCR — detecta SARS-CoV-2, HIV
- **qPCR:** mede fluorescência em tempo real → quantificação (carga viral, expressão)
- **Sanger:** ddNTPs terminadores; confirma variante única; padrão-ouro
- **NGS:** shotgun massivo; WES = exoma; WGS = genoma completo; painéis = genes selecionados
- **CRISPR-Cas9:** gRNA (20 nt) + Cas9; corte dupla fita; PAM = NGG; NHEJ cria knockout
- **Casgevy = CRISPR aprovado 2023:** falciforme + β-talassemia
- **Enzima de restrição:** corte em sítio palindrômico → base da clonagem
- **BLAST:** compara sequências versus banco de dados
- **Proteínas recombinantes:** insulina (E. coli), EPO/anticorpos (células CHO)

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Como diferenciar |
|------------|------------|-----------------|
| RT-PCR | qPCR (PCR em tempo real) | RT-PCR = usa transcriptase reversa p/ RNA→cDNA; qPCR = mede fluorescência em tempo real (pode ser RT-qPCR quando combina os dois) |
| Sanger | NGS | Sanger = 1 fragmento, padrão-ouro de confirmação; NGS = escala genômica massiva, paralelo |
| NHEJ | HRR | NHEJ = rápido, erro-propenso, G1; HRR = fiel, S/G2, exige cromátide irmã |
| CRISPR knockout | CRISPR knock-in | Knockout = NHEJ (indel, perda de função); Knock-in = HRR com molde doador (inserção precisa) |
| Plasmídeo | Vetor viral (AAV) | Plasmídeo = E. coli, proteínas recombinantes; AAV = terapia gênica in vivo (Zolgensma/AME) |

### Frase-âncora para não esquecer

> "PCR copia DNA como uma fotocopiadora: você escolhe qual trecho (primers), aquece para separar (desnatura), esfria para grudar (anela) e esquenta para produzir (extende). RT-PCR precisa primeiro converter a fita de RNA em cDNA — o 'RT' é o tradutor do RNA para que o PCR possa copiar."

---

## Referências

- Alberts B et al. *Fundamentos de Biologia Celular e Molecular*. Artmed.
- Junqueira LC, Carneiro J. *Histologia Básica*. Guanabara Koogan.
- Lodish H et al. *Biologia Celular e Molecular*. Artmed.
