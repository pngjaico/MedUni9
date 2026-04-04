# Herança Poligênica e Bases Genéticas do Câncer

## Relevância Clínica e Acadêmica

A maioria das doenças comuns que o médico enfrenta na prática — hipertensão arterial, diabetes tipo 2, esquizofrenia, doença cardiovascular, asma — não segue padrões mendelianos simples. São doenças de herança complexa (poligênica/multifatorial), em que múltiplos genes de efeito pequeno interagem com fatores ambientais para determinar o risco individual. Essa herança cria um espectro contínuo de fenótipos e explica por que a predisposição genética pode ser alta sem que todos os parentes afetados. É a genética da maioria dos pacientes.

O câncer, por sua vez, é fundamentalmente uma doença genética adquirida: mutações somáticas em proto-oncogenes, supressores de tumor e genes de reparo do DNA se acumulam progressivamente em um clone celular, conferindo vantagem proliferativa e invasiva. Compreender esse processo de múltiplos golpes (multi-hit), a distinção entre mutações somáticas e germinativas, e os principais oncogenes e supressores de tumor é obrigatório para qualquer médico que trate pacientes oncológicos ou prescreva rastreamento de câncer.

---

## Herança Poligênica/Multifatorial

### Conceito e Modelo

Na herança poligênica, o fenótipo resulta da soma dos efeitos de múltiplos loci, cada um contribuindo com um efeito pequeno. Quando fatores ambientais também contribuem, fala-se em herança **multifatorial**.

**Modelo de limiar:** A suscetibilidade genética distribui-se de forma aproximadamente normal na população. Indivíduos que ultrapassam um limiar fenotipicamente crítico manifestam a doença. Trata-se do modelo para defeitos do fechamento do tubo neural, fenda palatina, cardiopatias congênitas simples e psicoses.

**Implicações do modelo:**
- Parentes de primeiro grau têm risco ~√h² × risco geral (onde h² = herdabilidade)
- Quanto mais grave o caso índice, maior o risco de recorrência (ex: menino com fenda bilateral tem maior risco de recorrência na irmandade do que fenda unilateral)
- Risco decreí com o grau de parentesco (1º > 2º > 3º grau)
- Concordância em gêmeos monozigóticos é maior que em DZ, mas geralmente não é 100% (≠ doença mendeliana)

### Herdabilidade (h²)

Proporção da variância fenotípica atribuível a fatores genéticos na população.

| Condição | Herdabilidade estimada |
|----------|----------------------|
| Estatura | ~80% |
| IMC/Obesidade | 40–70% |
| Hipertensão arterial | 30–50% |
| DM tipo 2 | 40–80% |
| Cardiopatia coronária | ~50% |
| Esquizofrenia | ~80% |
| Autismo | ~70–90% |
| Fenda labial/palatina | ~75% |

> **Dica:** Herdabilidade alta não significa que o ambiente não importa — significa que, na população estudada, as variações genéticas explicam mais das diferenças individuais do que as variações ambientais. Gêmeos monozigóticos discordantes para uma doença de h² alta mostram que o ambiente faz diferença.

### GWAS — Genome-Wide Association Studies

Em doenças complexas, os genes de susceptibilidade são identificados por GWAS: comparação da frequência de SNPs (polimorfismos de nucleotídeo único) entre casos e controles em escala genômica. Cada SNP associado contribui pouco (odds ratio típico: 1,1–1,3). A soma de muitos SNPs constitui um **escore poligênico de risco (PRS — Polygenic Risk Score)**.

**Aplicação clínica em desenvolvimento:** PRS para doença coronariana, DM2, CA mama — ainda com uso clínico limitado (falta de calibração em populações diversas, valor incremental sobre fatores de risco convencionais).

---

## Bases Genéticas do Câncer

### Câncer como Doença Genética Somática

O câncer resulta do acúmulo de mutações somáticas em uma única célula (clonalidade) que conferem vantagem seletiva progressiva: divisão ilimitada, resistência à morte, invasão e metástase. O processo é multistep — múltiplos golpes ao longo de anos a décadas.

**Sequência adenoma–carcinoma coloretal (Fearon e Vogelstein, 1990):** modelo paradigmático.
Epitélio normal → APC mutada → adenoma pequeno → KRAS mutado → adenoma avançado → SMAD4/TP53 mutado → carcinoma → metástase.
Cada passo representa uma vantagem clonal adicional.

### Oncogenes

Proto-oncogenes codificam proteínas pró-proliferativas normais (fatores de crescimento, receptores, transdutores de sinal, fatores de transcrição). Quando mutados ou amplamente expressos, tornam-se **oncogenes** — promovem proliferação constitutiva.

**Mecanismos de ativação:**

| Mecanismo | Exemplo | Resultado |
|-----------|---------|----------|
| Mutação pontual ativadora | *KRAS* G12D (70% do câncer de pâncreas) | RAS constitutivamente ativo → sinalização proliferativa irrestrita |
| Amplificação gênica | *HER2/ERBB2* em câncer de mama | Produção excessiva do receptor → sinalização constitutiva |
| Translocação cromossômica | t(9;22) BCR-ABL1 | Quinase constitutivamente ativa → LMC |
| Superexpressão por translocação do promotor | t(8;14) MYC-IGH | c-Myc hiperproduzido → transcrição massiva de genes proliferativos |

**Oncogenes importantes:**

| Oncogene | Via/Função | Câncer associado |
|---------|-----------|-----------------|
| *RAS* (KRAS, NRAS, HRAS) | Via MAPK, PI3K | Pâncreas (90%), cólon (40%), pulmão (30%) |
| *MYC* | Fator de transcrição | Burkitt, câncer de mama, pulmão |
| *HER2/ERBB2* | RTK (receptor tirosina quinase) | Mama (15–20%), gástrico (10–15%) |
| *BCR-ABL* | Quinase | LMC, LLA Ph+ |
| *BRAF V600E* | Via MAPK | Melanoma (50%), tireoide papilar (40%) |
| *ALK* (fusão EML4-ALK) | RTK | Adenocarcinoma pulmão (5%) |

> **Regra dos oncogenes:** ganho de função; agem de forma dominante (uma cópia mutada basta); mais tipicamente somáticos (raramente germinativos).

### Genes Supressores de Tumor

Supressores de tumor bloqueiam a proliferação ou promovem apoptose. **Precisam de dois golpes** (teoria de Knudson) para serem inativados — a perda de um no câncer esporádico ocorre por mutação/deleção e a perda do segundo por LOH (loss of heterozygosity), metilação ou nova mutação.

**Supressores clássicos:**

| Gene | Proteína | Via | Cânceres |
|------|---------|-----|---------|
| *TP53* | p53 | Checkpoint G1, apoptose | 50% de TODOS os cânceres |
| *RB1* | Retinoblastoma | Checkpoint G1/S | Retinoblastoma, sarcomas |
| *APC* | Supressor WNT/β-catenina | Regulação do desenvolvimento | Cólon (FAP, esporádico) |
| *BRCA1/2* | HRR (DSB repair) | Reparo de DNA | Mama, ovário, pâncreas, próstata |
| *PTEN* | Fosfatase inibidora de PI3K | Via PI3K/AKT | Endométrio, mama, próstata, glioblastoma |
| *VHL* | Regulação de HIF-1α | Adaptação hipóxica | Carcinoma renal de células claras |
| *CDKN2A/p16* | Inibidor de CDK4/6 | Checkpoint G1 | Melanoma, pâncreas, pulmão |
| *SMAD4* | Via TGF-β | Inibição de crescimento | Pâncreas, cólon |

### Genes de Estabilidade do Genoma (Caretakers)

Reparadores de DNA que, quando defeituosos, permitem o acúmulo acelerado de mutações nos demais genes (oncogenes e supressores).

- **MMR (MLH1, MSH2, MSH6, PMS2):** Lynch → MSI-H → acúmulo rápido de mutações em microssatélites
- **NER (XPA-XPG):** Xeroderma Pigmentoso → mutações por UV
- **BRCA1/2:** HRR → instabilidade de DSBs
- **MUTYH:** BER → PAP associada a MUTYH (AR)

### Oncogênese em Múltiplos Golpes

Na prática clínica, o modelo de Fearon-Vogelstein para cáncer colorretal ilustra os múltiplos golpes:

1. APC inativada → adenoma plano (desregulação WNT)
2. KRAS ativada → adenoma tubular (sinalização MAPK irrestrita)
3. SMAD4 inativada → crescimento descontrolado (perda de inibição por TGF-β)
4. TP53 inativada → instabilidade genômica, apoptose reduzida
5. Alterações adicionais → invasão e metástase

**Tempo estimado:** a progressão de epitélio normal a carcinoma in situ leva tipicamente 10–15 anos → janela para rastreamento com colonoscopia (extirpar pólipos antes da transformação).

### Câncer Hereditário vs. Esporádico

| Característica | Hereditário | Esporádico |
|---------------|-------------|-----------|
| Proporção dos cânceres | ~5–10% | ~90–95% |
| Mutação inicial | Germinativa (em todas as células) | Somática (na célula precursora) |
| Golpes necessários | 1 somático adicional (Knudson) | 2 somáticos na mesma célula |
| Início | Mais precoce | Mais tardio |
| Lateralidade/multifocalidade | Bilateral / múltiplos tumores | Unilateral / espórádico |
| Exemplo | Retinoblastoma hereditário, Lynch, PAF, BRCA | Adenocarcinoma de cólon esporádico |

---

## Pontos-Chave

- **Herança poligênica:** múltiplos genes + ambiente; distribuição normal do fenótipo; modelo de limiar
- **Herdabilidade (h²):** proporção da variância fenotípica atribuída à genética; não é destino imutável
- **GWAS + PRS:** identificam variantes de small effect para doenças complexas; PRS ainda com uso clínico limitado
- **Oncogene:** proto-oncogene mutado/amplificado/translocado → atividade proliferativa constitutiva; dominante
- **KRAS:** oncogene mais frequente em cânceres humanos; G12D/G12V; constitutivamente ativo → sem resposta a EGFR-i
- **Supressor de tumor:** dois golpes (Knudson); RB1, TP53, APC, BRCA1/2, PTEN, VHL
- **Caretakers (MMR, NER, BRCA):** defeitos permitem acúmulo acelerado de mutações (instabilidade genômica)
- **Sequência adenoma-carcinoma:** APC → KRAS → SMAD4 → TP53 → progressão; 10–15 anos
- **Hereditário:** mutação germinativa → 1 golpe a mais; bilateral/precoce/múltiplo; 5–10% dos cânceres
- **Esporádico:** 2 golpes somáticos; 90–95%

---

## Ponte com a Clínica

**Rastreamento de cólon:** colonoscopia a partir de 45 anos na população geral (USPSTF 2021); a partir de 25–40 em síndrome de Lynch; a partir de 10–15 anos em PAF. Extirpação de pólipo adenomatoso corta a sequência adenoma-carcinoma.

**KRAS e anti-EGFR:** Paciente com adenocarcinoma coloretal metastático → solicitar KRAS/NRAS/BRAF V600E. Se KRAS mutado → cetuximabe e panitumumabe (anti-EGFR) SÃO INEFICAZES (RAS downstream está sempre ativo independente de EGFR). Só tratar com anti-EGFR se RAS e BRAF wild-type.

**Câncer de mama HER2+:** amplificação de *HER2* → superexpressão de HER2 → alvo para trastuzumabe, pertuzumabe, T-DM1, tucatinibe. Biópsia + imunoistoquímica (IHC) + FISH confirmam.

**BRAF V600E no melanoma:** >50% dos melanomas têm BRAF V600E → dabrafenibe + trametinibe (inibidor BRAF + MEK) → resposta objetiva em ~70%; combinação com imunoterapia prolonga sobrevida.

**Escore Poligênico de Risco (PRS):** em desenvolvimento para triagem de câncer hereditário não-sindrômico. Em hipercolesterolemia familiar, pode complementar o diagnóstico em cerca de 15% dos pacientes com LDL muito alto sem mutação identificada. Ainda fase de pesquisa clínica.

---

## Pré-Prova

> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### O que você PRECISA saber

- **Herança multifatorial:** múltiplos genes + ambiente; distribuição normal; modelo de limiar
- **Herança complexa:** DM2, HAS, cardiopatia coronária, esquizofrenia, autismo
- **Oncogene = ganho de função:** basta UM alelo mutado (dominante); KRAS, HER2, BCR-ABL, MYC
- **Supressor de tumor = perda de função:** precisam de DOIS golpes (Knudson); TP53, RB1, APC, BRCA
- **KRAS mutado → anti-EGFR ineficaz no CCR** — questão-padrão de oncologia
- **Sequência adenoma-carcinoma: APC → KRAS → SMAD4 → TP53** (CCR)
- **Hereditário:** germinativo, precoce, bilateral, múltiplo, 5–10%
- **Esporádico:** somático, tardio, 90–95%
- **MSI-H:** defeito MMR → Lynch; pembrolizumabe funciona em MSI-H de qualquer órgão
- **HER2 amplificado:** mama, gástrico; trastuzumabe

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Como diferenciar |
|------------|------------|-----------------|
| Oncogene | Supressor de tumor | Oncogene = ganho função, 1 alelo basta; Supressor = perda função, 2 alelos necessários (Knudson) |
| Herança poligênica | Herança AR/AD | Poligênica = múltiplos genes + ambiente, fenótipo contínuo; AR/AD = 1 gene, fenótipo discreto |
| Mutação somática | Mutação germinativa | Somática = adquirida em UMA célula; Germinativa = em TODAS as células; Herdável = germinativa |
| MSI-H (Lynch) | CIN (PAF) | MSI-H = MMR defeituoso, microsatélites instáveis, Lynch; CIN = instabilidade cromossômica, PAF (APC) |
| Caretaker | Gatekeeper | Caretaker = reparo DNA (BRCA, MMR); Gatekeeper = regulação do ciclo/crescimento (RB, APC, TP53) |

### Frase-âncora para não esquecer

> "Câncer = revolução celular em múltiplos golpes: os oncogenes são os aceleradores que travam no máximo (1 alelo basta para pisar fundo); os supressores são os freios que precisam ser destruídos DOIS VEZES antes de parar de funcionar. Quando os caretakers (reparadores) também quebram, as mutações se acumulam na velocidade do furacão."
