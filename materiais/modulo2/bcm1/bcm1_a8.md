# BCM1 — Aula 8: Controle da Expressão Gênica e Doenças

## Relevância Clínica e Acadêmica

A desregulação do controle da expressão gênica é o denominador comum do câncer. Proto-oncogenes transformados em oncogenes, supressores tumorais inativados, genes de reparo silenciados por metilação — todos esses eventos são falhas no controle que normalmente regula o que, quando e quanto um gene é expresso. Esta aula integra os mecanismos de regulação das aulas anteriores (transcrição, epigenética, pós-transcrição) com as bases moleculares das neoplasias, tornando-a de altíssimo rendimento para medicina oncológica básica.

A Uninove frequentemente apresenta casos de câncer com um perfil molecular e solicita identificação do mecanismo desregulado — amplificação de oncogene, inativação de tumor supressor, instabilidade microsatélite ou alteração epigenética. Este conteúdo treina esse raciocínio.

### Figura sugerida

**Figura-ID:** `BCM1-A8-F01`

- **Momento:** após o bloco de relevância (reserva editorial para imagem no app; aparece inline quando houver URL no catálogo).
- **O que mostrar:** definir na produção — deve ilustrar o tema central da aula de forma clara em mobile.
- **Tipo sugerido:** esquema didático | ilustração estilo atlas | infográfico | foto contextual | outro.
- **Legenda (rascunho):** a fixar junto da imagem final (campo legenda em data/materiais_figuras.json).
- **Notas (opcional):** pesquisar no Wikimedia Commons (buscaCommonsEn / buscaCommonsPt no JSON); licenças livres e atribuição.




---



## Proto-Oncogenes e Oncogenes

**Proto-oncogene:** gene normal que controla positivamente o crescimento e a diferenciação celular. Quando mutado ou superexpresso → **oncogene**.

**Mecanismos de ativação de proto-oncogenes:**
1. **Mutação pontual:** ex.: KRAS G12D (ponto de mutação; RAS travado em forma ativa-GTP)
2. **Amplificação gênica:** ex.: HER2/neu no câncer de mama; NMYC no neuroblastoma → cópias extras → superexpressão
3. **Translocação cromossômica:**
   - t(9;22) → BCR-ABL (cromossomo Philadelphia) → LMC
   - t(8;14) → c-Myc sob controle do promotor de IgH → Linfoma de Burkitt
   - t(14;18) → BCL-2 sob IgH → Linfoma folicular → superexpressão de BCL-2 → apoptose bloqueada
4. **Inserção de retrovírus:** promotor viral (LTR) → ativa gene vizinho

Categorias funcionais de oncoproteínas:
- Fatores de crescimento: PDGF (glioblastoma)
- Receptores de fator de crescimento: HER2, EGFR, KIT
- Transdutores de sinal: RAS, BRAF
- Fatores de transcrição: c-Myc, N-Myc
- Proteínas antiapoptóticas: BCL-2

> **Dica de Prova:** O cromossomo Philadelphia (t9;22) é obrigatório para o diagnóstico de LMC (Leucemia Mieloide Crônica). O BCR-ABL produzido é uma tirosina cinase constitutivamente ativa. O imatinibe e dasatinibe inibem esse RTK → remissão molecular. Essa é a "poesia" da medicina de precisão: biologia molecular → alvo terapêutico.

---

## Genes Supressores de Tumor

**Supressor tumoral:** gene que freie o crescimento celular. Requerem **inativação dos dois alelos** (teoria dos dois golpes de Knudson).

| Gene | Tumor Associado | Função normal |
|------|----------------|---------------|
| TP53 | Virtualmente todos os cânceres | Resposta a dano no DNA; ativa p21 (inibe ciclo) e apoptose |
| RB1 | Retinoblastoma, sarcoma | Inibe E2F (fator de transcrição de proliferação) |
| APC | Câncer colorretal familiar (FAP) | Degrada β-catenina (via Wnt) |
| BRCA1/BRCA2 | Mama e ovário hereditários | Reparo do DNA por recombinação homóloga |
| VHL | Carcinoma de células renais claras | Degrada HIF-1α (sem VHL → HIF ativo → VEGF ↑) |
| MLH1/MSH2 | Câncer colorretal (Lynch) | Reparo de microssatélites (MMR) |

**Teoria de Knudson ("two-hit hypothesis"):**
- Câncer familiar: 1ª mutação herdada (germline, 1 alelo); 2ª mutação somática (segundo alelo) → perda de heterozigosidade (LOH) → tumor
- Câncer esporádico: ambas as mutações somáticas → menos comum, aparecimento mais tardio

> **Pegadinha:** No retinoblastoma familiar, a criança já nasce com 1 alelo de RB1 mutado (germinativo) — precisa de apenas 1 "golpe" adicional → tumor bilateral precoce. No esporádico, necessita 2 mutações somáticas independentes → tumor unilateral e tardio.

---

## Epigenética e Câncer

Além das mutações do DNA, alterações epigenéticas são ubíquas no câncer:

**Metilação de DNA em ilhas CpG:**
- Ilhas CpG em regiões promotoras de genes supressores de tumor → silenciamento (sem mutação da sequência)
- Exemplo: silenciamento de MLH1 por hipermetilação em cânceres colorretais esporádicos (MSI-H)
- Hipometilação global do genoma: instabilidade genômica, reativação de retrotransposons

**Modificação de histonas:**
- Polycomb complexes (PRC1/PRC2): metilam H3K27 → compactam cromatina → silenciam genes supressores (frequentes em glioblastoma, linfomas)
- HAT (histona acetiltransferases) × HDAC (histona deacetilases): equilíbrio regulatório; HDACi (vorinostat) reativam genes silenciados em tumores

**Não codificantes:**
- OncomiRNA: miRNAs que suprimem genes supressores → ex.: miR-21 inibe PTEN em vários tumores
- lncRNA: onco ou supressor funcional dependendo do contexto (HOTAIR, MALAT1)

---

## Instabilidade Genômica

Dois tipos principais de instabilidade nos cânceres:

**MSI (Microsatellite Instability):**
- Defeito no sistema MMR (MLH1, MSH2, MSH6, PMS2)
- Mutações acumulam nos microssatélites → MSI-H
- Cânceres colorretal (Lynch → germinativo; esporádico → MLH1 metilado), endométrio, gástrico
- MSI-H: marcador de resposta à imunoterapia (anti-PD1) → pembrolizumabe aprovado por FDA para tumores sólidos MSI-H

**CIN (Chromosomal Instability):**
- Segregação cromossômica errática; aneuploidia; ganhos/perdas de cromossomos inteiros
- Mais comum em cânceres colorretais esporádicos e mama
- Causas: defeitos em APC (mapa de via Wnt), cohesinas, checkpoint do fuso mitótico

---

## Pontos-Chave

- Proto-oncogene → oncogene: mutação pontual, amplificação, translocação, inserção retroviral
- KRAS mutado: GTPase perdida → RAS sempre ativo (~30% cânceres); alvo do sotorasibe (G12C)
- BCR-ABL (t9;22): tirosina cinase → LMC; alvo do imatinibe; critério diagnóstico de LMC
- c-Myc (t8;14): superexpresso no linfoma de Burkitt
- BCL-2 (t14;18): antiapoptótico; linfoma folicular
- Supressor de tumor: dois golpes de Knudson (família = 1 herdado + 1 somático; esporádico = 2 somáticos)
- RB1: retinoblastoma; TP53: Li-Fraumeni + quase todo câncere; BRCA1/2: mama/ovário; APC: FAP
- Metilação CpG em promotores: silência supressores sem mutar o DNA (epigenética)
- MSI-H: defeito de MMR → marcador de resposta a anti-PD1 (pembrolizumabe)
- HDACi (vorinostat): reaviva genes supressores silenciados por histona deacetilação

---

## Ponte com a Clínica

O painel de reflexo para câncer colorretal recém-diagnosticado inclui obrigatoriamente o teste de MMR/MSI — se MSI-H, a imunoterapia com pembrolizumabe é superior à quimioterapia convencional. Isso é genética molecular traduzida diretamente em decisão terapêutica. No câncer de pulmão, o sequenciamento de KRAS, EGFR e ALK define as terapias-alvo: EGFR com exon 19 del → erlotinibe; ALK rearranjo → crizotinibe; KRAS G12C → sotorasibe. O médico que entende os mecanismos desta aula sabe exatamente por que cada alvo existe e qual droga bloquea qual via.

---

## Pré-Prova

> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### O que você PRECISA saber

- **Oncogene**: ganho de função (mutação, amplificação, translocação)
- **Supressor tumoral**: perda de função; dois golpes (Knudson)
- **BCR-ABL (t9;22)**: LMC; tirosina cinase; imatinibe
- **c-Myc (t8;14)**: linfoma de Burkitt; fator de transcrição
- **BCL-2 (t14;18)**: linfoma folicular; antiapoptótico
- **RB1**: retinoblastoma bilateral precoce (familiar) × unilateral tardio (esporádico)
- **TP53**: guarda do genoma; responde a dano no DNA; mutado em >50% dos cânceres
- **BRCA1/2**: reparo por recombinação homóloga; mama + ovário hereditários
- **MSI-H (deficiência de MMR)**: marcador de resposta a pembrolizumabe (anti-PD1)
- **Metilação de ilhas CpG**: silência supressores sem mutar sequência (epigenético)

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Como diferenciar |
|------------|------------|-----------------|
| Oncogene | Supressor tumoral | Oncogene: ganho de função (1 alelo basta); Supressor: perda de função (2 alelos necessários) |
| LMC (BCR-ABL) | Linfoma de Burkitt (c-Myc) | LMC = t(9;22), célula mieloide; Burkitt = t(8;14), célula B, EBV |
| Instabilidade microssatélite (MSI) | Instabilidade cromossômica (CIN) | MSI = MMR defeituoso (mutações pontuais acumuladas); CIN = aneuploidia cromossômica |
| Metilação DNA silencia | Acetilação histona ativa | Metilação CpG = silencia; HDACi = acetila = ativa; HAT = ativa; HDAC = silencia |
| BRCA1/2 (reparo) | MLH1/MSH2 (reparo) | BRCA: recombinação homóloga (DSB); MLH1/MSH2: mismatch repair (erros de replicação) |

### Frase-âncora para não esquecer

> "Oncogene = acelerador preso; supressor tumoral = freio cortado. O câncer precisa das duas coisas ao mesmo tempo: acelerar e não poder parar."

---

## Referências

- Alberts B et al. *Fundamentos de Biologia Celular e Molecular*. Artmed.
- Junqueira LC, Carneiro J. *Histologia Básica*. Guanabara Koogan.
- Lodish H et al. *Biologia Celular e Molecular*. Artmed.
