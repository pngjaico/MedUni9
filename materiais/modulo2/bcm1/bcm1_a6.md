# BCM1 — Aula 6: Transcrição e Controle da Expressão Gênica

## Relevância Clínica e Acadêmica

A transcrição é o ponto onde o genoma "fala" — e o silenciamento ou a superexpressão de genes é a origem de doenças tão diversas quanto câncer, doenças autoimunes e erros inatos do metabolismo. Drogas como a rifampicina (antibiótico antituberculose) inibem diretamente a RNA polimerase bacteriana, e a terapia com inibidores de histona deacetilase (HDACi) como o vorinostat reclassificam genes silenciados em células tumorais. Entender onde e como o controle da expressão gênica é exercido é entender onde os fármacos e as doenças moleculares interferem.

A Uninove cobra transcrição e regulação integrados com SBRT antibióticos, epigenética e oncologia molecular. Esta aula costura a biologia molecular com suas aplicações clínicas mais modernas.

---

## Transcrição: Visão Geral

A transcrição é a síntese de RNA a partir de um molde de DNA, catalisada pela **RNA polimerase**. Ocorre de 5'→3' (RNA), lendo o molde de DNA de 3'→5'.

**Diferenças fundamentais entre transcrição e replicação:**
- RNA pol NÃO precisa de primer (inicia de novo)
- Produto: RNA (fita simples, com U no lugar de T)
- O RNA é sintetizado, processado e exportado para o citoplasma

**Tipos de RNA pol em eucariotos:**
- **RNA Pol I:** genes de rRNA (28S, 18S, 5,8S) — no nucléolo
- **RNA Pol II:** genes codificadores de proteínas (mRNA) e snRNA
- **RNA Pol III:** tRNA, 5S rRNA, snRNA pequenos

Em procariotos: **1 única RNA polimerase** com fator σ (sigma) para reconhecimento do promotor.

---

## Promotor e Início da Transcrição em Eucariotos

O promotor fica upstream ao sítio +1 de início de transcrição. Elementos do promotor central:
- **TATA box** (~−30): ligação de TBP (TATA-binding protein), primeiro passo de montagem do complexo de pré-iniciação
- **Inr (initiator element)**: em genes sem TATA box
- **DPE (downstream promoter element)**: ~+30

Além do promotor central, a transcrição é regulada por elementos distais:
- **Enhancers:** ativam a transcrição a grandes distâncias (até 1 Mb); os fatores de transcrição ativadores ligam-se aos enhancers e fazem contato com o complexo de pré-iniciação por dobrimento do DNA (loop)
- **Silencers:** reprimem a transcrição; ligam repressores

Complexo de pré-iniciação: TBP → TFIID → TFIIA, TFIIB, TFIIF + RNA Pol II → TFIIE e TFIIH (helicase, abre o DNA; cinase para fosforilação do CTD da RNA Pol II, liberando-a para elongação)

---

## Processamento do pré-mRNA (hnRNA → mRNA maduro)

O transcrito primário (pré-mRNA) sofre três modificações antes de sair do núcleo:

**1. Capping 5' (m7GpppN):**
- Adição de 7-metilguanosina na extremidade 5' — ocorre cotranscricionalmente
- Funções: protège o mRNA da degradação por exonucleases 5'→3'; essencial para o reconhecimento pelo ribossomo (binding ao fator de iniciação eIF4E)

**2. Splicing (remoção dos íntrons):**
- Spliceosome: complexo de snRNPs (U1, U2, U4, U5, U6)
- GT...AG rule: sítio doador (5' GU) e sítio aceptor (3' AG)
- Splicing alternativo: mesmo pré-mRNA gera múltiplos mRNAs (isoformas proteicas) — exemplo clássico: troponina T cardíaca tem isoformas diferentes no feto e no adulto

**3. Poliadenilação 3':**
- Sinal AAUAAA → clivagem ~10–30 nt downstream → adição de ~200 A's (poly-A)
- Proteínas PABP (poly-A binding proteins) se ligam → estabilidade do mRNA, regula tradução

> **Dica de Prova:** Os antibióticos que inibem a transcrição bacteriana são: **rifampicina** (bloqueia o canal de saída do RNA na RNA Pol bacteriana → inibe elongação). Não afeta a RNA Pol eucariota (seletividade estrutural). Usado em tuberculose, hanseníase, meningite por N. meningitidis (quimioprofilaxia).

---

## Controle da Expressão Gênica — Níveis

O controle da expressão gênica opera em múltiplos níveis:

| Nível | Mecanismo | Exemplo |
|-------|----------|---------|
| Pré-transcricional | Estrutura da cromatina | Metilação DNA, modificação de histonas |
| Transcricional | Fatores de transcrição + promotors/enhancers | p53 ativa CDKN1A (p21); c-Myc ativa ciclinas |
| Pós-transcricional | Splicing alternativo, estabilidade do mRNA | Ferritina: IRP bloqueia tradução quando Fe²⁺ baixo |
| Traducional | Iniciação da tradução | IRES, miRNA reprime tradução |
| Pós-traducional | Fosforilação, ubiquitinação, clivagem | Ubiquitinação → proteassoma → degradação proteica |

**Controle por miRNA:**
miRNAs (~22 nt) ligam-se a sequências complementares no 3'UTR do mRNA-alvo → silenciamento pós-transcricional (inibição da tradução + desestabilização do mRNA). Aberrações na expressão de miRNA são onipresentes no câncer.

> **Pegadinha:** A rifampicina é potente **indutor** do CYP3A4 e de outras enzimas do sistema P450 — isso acelera a metabolização de contraceptivos orais, anticoagulantes e outros fármacos → reduz suas concentrações → falha terapêutica. Questão clássica: paciente em uso de rifampicina + contraceptivo oral → gestação indesejada.

---

## Pontros-Chave

- RNA Pol eucariota: I (rRNA), II (mRNA), III (tRNA); procariotos: 1 RNA pol + fator σ
- Promotor central: TATA box (−30) → TBP → complexo de pré-iniciação
- Enhancers ativam a transcrição a grande distância (loop cromossômico)
- Processamento do pré-mRNA: capping 5' (m7G) + splicing + poliadenilação 3'
- Splicing: spliceosome (snRNPs U1–U6); GT...AG obrigatório; splicing alternativo → isoformas
- Rifampicina: inibe RNA Pol bacteriana (bloqueia canal de saída de RNA); tuberculose + profilaxia meningite
- Rifampicina: indutor de CYP3A4 → interações com contraceptivos, anticoagulantes, antirretrovirais
- miRNA (22 nt): liga 3'UTR do mRNA alvo → silencia pós-transcricionalmente
- Metilação de ilhas CpG: silência genes (epigenética); hipermetilação de supressores → câncer
- Acetilação de histonas (HAT): abre cromatina → ativa transcrição; HDAC = fecha, silencia

---

## Ponte com a Clínica

A eritropoetina (EPO) é um exemplo magistral de controle transcricional: em hipóxia, o HIF-1α escapa da degradação pelo VHL (Von Hippel-Lindau) → se transloca para o núcleo → ativa a transcrição de EPO, VEGF e outros genes de adaptação à hipóxia. Mutações do gene VHL causam a síndrome de VHL (tumores renais de células claras, hemangioblastomas) — a inativação do supressor tumoral libera HIF permanentemente. Fármacos que inibem a prolil-hidroxilase (que marcam HIF para degradação) elevam o HIF e estimulam EPO — conceito por trás do daprodustat (usado em anemia por DRC). Toda esta em transcrição regulada por enhancers e fatores de transcrição.

---

## Pré-Prova

> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### O que você PRECISA saber

- **RNA Pol I**: rRNA (nucléolo); **RNA Pol II**: mRNA; **RNA Pol III**: tRNA
- **RNA Pol**: não precisa de primer (contrário da DNA Pol)
- **Capping 5' (m7G)**: proteção da extremidade 5' + sinalização ribossomal
- **Splicing**: GT (doador) → AG (aceptor); mutação → splicing aberrante → doença (talassemia)
- **Splicing alternativo**: mesmo gene → diferentes isoformas de proteína
- **Poly-A (AAUAAA)**: estabilidade do mRNA; ~200 adeninas 3'
- **Rifampicina**: inibe RNA Pol bacteriana; indutor CYP3A4 → muitas interações farmacológicas
- **miRNA**: 22 nt; liga 3'UTR → silencia mRNA alvo; desregulado em cânceres
- **Metilação CpG**: silências genes; hipometilação global + hipermetilação local em tumores
- **HDAC inibidores (vorinostat)**: acetilam histonas → reativam genes supressores em tumores

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Como diferenciar |
|------------|------------|-----------------|
| RNA Pol I | RNA Pol II | Pol I = rRNA (nucléolo); Pol II = mRNA (genes proteicos) |
| Enhancer | Silencer | Enhancer = ativa transcrição (fatores ativadores); Silencer = reprime (fatores repressores) |
| miRNA | siRNA | miRNA = endógeno, regula 3'UTR; siRNA = exógeno (terapêutico), degradação direta do mRNA alvo |
| Capping 5' | Poliadenilação 3' | Capping = proteção + início tradução; PolyA = estabilidade + terminação transcrição |
| Metilação DNA | Metilação histona H3K4 | DNA metilação = geralmente SILENCIA; H3K4 metilação = geralmente ATIVA |

### Frase-âncora para não esquecer

> "Rifampicina pega a RNA Pol bacteriana pelo canal de saída do RNA — e de quebra acelera o fígado, tirando o efeito dos outros remédios. Dupla ação, duplo cuidado."
