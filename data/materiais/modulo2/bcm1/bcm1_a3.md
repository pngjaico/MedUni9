# BCM1 — Aula 3: Organização Genômica e Estrutura Gênica

## Relevância Clínica e Acadêmica

O genoma humano contém aproximadamente 3,2 bilhões de pares de bases e ~20.000 genes codificadores de proteínas — uma fração surpreendentemente pequena (~1,5%) do **DNA** total. Compreender como o genoma é organizado, como os genes são estruturados e como o dogma central da biologia molecular opera é o fundamento de toda a genética médica, oncologia molecular e farmacogenômica. Saber distinguir exon de íntron, entender o que é um polimorfismo de nucleotídeo único (**SNP**) e reconhecer que a maioria do genoma é "não codificante" (mas não necessariamente "não funcional") são competências que aparecem em questões de diagnóstico molecular, pesquisa e racionalização terapêutica.

Na **Uninove**, essa aula serve de base para as aulas de replicação, transcrição, tradução e genética médica que seguem, tornando o seu domínio imprescindível para o restante do módulo.

### Figura sugerida

**Figura-ID:** `BCM1-A3-F01`

- **Momento:** após o bloco de relevância (reserva editorial para imagem no app; aparece inline quando houver URL no catálogo).
- **O que mostrar:** definir na produção — deve ilustrar o tema central da aula de forma clara em mobile.
- **Tipo sugerido:** esquema didático | ilustração estilo atlas | infográfico | foto contextual | outro.
- **Legenda (rascunho):** a fixar junto da imagem final (campo legenda em data/materiais_figuras.json).
- **Notas (opcional):** pesquisar no Wikimedia Commons (buscaCommonsEn / buscaCommonsPt no JSON); licenças livres e atribuição.




---



## Organização do Genoma Humano

O genoma humano é diploide: 46 cromossomos (44 autossomos + 2 sexuais), dois genomas haploides de 23 cromossomos cada (um de cada progenitor).

**DNA total:** ~3,2 × 10⁹ pb por haplóide → ~6,4 × 10⁹ pb na célula somática

**Composição funcional:**
| Tipo | Proporção | Exemplo |
|------|-----------|---------|
| Exons (seq. codificantes) | ~1,5% | Genes de proteínas |
| Introns e regiões flanqueantes | ~24% | Incluídos em genes |
| Pseudogenes | ~3% | Genes inativados evolutivamente |
| DNA repetitivo (SINEs, LINEs, satélites) | ~50% | Alu (SINE), LINE-1 (transposon) |
| Resto (intergênico, regulatório) | ~22% | Enhancers, lncRNA |

**DNA mitocondrial:** circular, 16.569 pb, 37 genes (13 proteínas da cadeia respiratória + rRNA + tRNA), herança exclusivamente materna.

---

## Estrutura do Cromossomo

O DNA se enrola em torno de octâmeros de histonas (H2A, H2B, H3, H4 × 2) formando **nucleossomos** — a unidade básica da cromatina. Cada nucleossomo tem ~147 pb em ~1,75 voltas em torno do octâmero, ligados por H1 (histona de ligação).

**Níveis de compactação:**
- DNA dupla-fita → nucleossomos ("contas de rosário") → fibra de 30 nm → loops ancorados na matriz nuclear → cromossomo metafásico (compactação ~10.000×)

**Cromatina:**
- **Eucromatina:** descondensada, acessível, transcricionalmente ativa
- **Heterocromatina constitutiva:** permanentemente condensada, repetitiva (centrômero, telômero)
- **Heterocromatina facultativa:** condicionalmente inativa; ex.: corpúsculo de Barr (X inativado pela lyonização em mulheres — XIST RNA)

> **Dica de Prova:** Mulheres têm 2 cromossomos X, mas um é inativado aleatoriamente em cada célula somática (lyonização). O cromossomo X inativado = corpúsculo de Barr. Logo, número de corpúsculos de Barr = número de X − 1. Uma mulher normal (46,XX): 1 corpúsculo; síndrome de Klinefelter (47,XXY): 1 corpúsculo (só 1 X ativo).

**Centrômeros:** sequências ricas em satélites de DNA, local de ancoragem dos cinetocoros (divisão celular).
**Telômeros:** repetições de TTAGGG; encurtam a cada ciclo; telomerase restaura em células germinativas e neoplásicas.

---

## Estrutura de um Gene Eucariótico

Um gene eucariótico típico inclui:

```flow
5' ——[Promotor]——[5'UTR]——[Exon 1]——[Ínton 1]——[Exon 2]——[Ínton N]——[Exon N]——[3'UTR]——[PolyA signal]—— 3'
```

**Promotor:** sequência upstream ao ponto de início de transcrição (+1); contém TATA box (~−25 a −30), CAAT box, GC box; local de ligação do complexo de pré-iniciação (RNA Pol II + fatores gerais)

**5'UTR (região não traduzida 5'):** entre o cap e o códon AUG de início; influencia eficiência de tradução

**Exons:** sequências que permanecerão no mRNA maduro e serão traduzidas (ou serão UTR)

**Íntrons:** removidos por splicing; contêm sequências conservadas nas junções (GT-AG rule: GT no início, AG no final do íntron em eucariotos)

**3'UTR:** após o códon de parada; sítios de ligação de miRNA, regulação da estabilidade do mRNA

**Sinal de poliadenilação:** AATAAA (DNA) / AAUAAA (RNA) → clivagem e adição da cauda poly(A) ~200 A's → proteção do mRNA

> **Pegadinha:** A regra GT-AG é cobrada diretamente: toda junção de splicing eucariótica tem GU no início do íntron (na fita de RNA) e AG no final. Mutações nesses sítios causam splicing aberrante → proteína truncada ou ausente (ex.: talassemias por mutação no sítio de splicing da β-globina).

---

## Dogma Central da Biologia Molecular

**DNA → (Replicação) → DNA**
**DNA → (Transcrição) → RNA → (Tradução) → Proteína**

Exceções ao dogma central:
- Retrovírus: RNA → (Transcriptase Reversa) → DNA → RNA → Proteína
- Víroides: RNA infeccioso sem proteína
- Príons: proteína mal-dobrada muda conformação de proteínas normais (MAL sem ácido nucleico)

---

## Polimorfismos e Variação Genômica

**SNP (Single Nucleotide Polymorphism):** variação de 1 nucleotídeo em ≥ 1% da população; ~10 milhões no genoma humano; base da farmacogenômica e estudos de associação genômica (GWAS)

**Microssatélites (STRs):** repetições curtas em tandem; altamente polimórficos; usados em análise forense, teste de paternidade e detecção de instabilidade de microssatélites (câncer colorretal, síndrome de Lynch)

**CNV (Copy Number Variation):** segmentos de DNA maiores duplicados ou deletados; contribuem para doenças complexas e suscetibilidade ao câncer

**Épigenética:** modificações herdáveis que não alteram a sequência de DNA:
- Metilação do DNA (CpG): silenciamento de genes; hipermetilação de ilhas CpG em genes supressores de tumor → câncer
- Modificação de histonas: acetilação (ativa), metilação (ativa ou inativa dependendo do resíduo), fosforilação, ubiquitinação
- RNA não codificante (miRNA, lncRNA): regulação pós-transcricional

---

## Pontos-Chave

- Genoma humano: ~3,2 × 10⁹ pb haplóide; ~1,5% codifica proteínas; ~50% repetitivo
- Nucleossomo: 147 pb em torno de octâmero de histonas (H2A, H2B, H3, H4 × 2); H1 liga
- Lyonização: inativação aleatória de um X em células somáticas femininas; XIST RNA
- Corpúsculos de Barr = n° de X − 1
- Estrutura gênica: promotor → 5'UTR → exons+íntrons → 3'UTR → sinal polyA
- GT-AG rule: GU no início, AG no final do íntron — mutação → splicing aberrante
- Telômeros: TTAGGG; encurtam com divisões; telomerase presente em células germinativas e tumorais
- Dogma central: DNA → RNA → Proteína; exceção: retrovírus (transcriptase reversa)
- SNP: 1 nucleotídeo polimórfico ≥ 1% da população; base da farmacogenômica e GWAS
- Metilação de ilhas CpG em genes supressores de tumor: mecanismo epigenético de silenciamento no câncer

---

## Ponte com a Clínica

A **Síndrome de Lynch (HNPCC — câncer colorretal hereditário não polipose)** é causada por mutações nos genes de reparo de microssatélites (MLH1, MSH2, MSH6, PMS2), levando à instabilidade de microssatélites (MSI-H). O teste para MSI em tumores colorretais é obrigatório antes de iniciar imunoterapia com anti-PD-1 (pembrolizumabe), que funciona melhor em tumores MSI-H — uma aplicação direta do conhecimento de polimorfismos de DNA. Já a **β-talassemia** é frequentemente causada por mutações nos sítios de splicing (GT-AG) do gene HBB, produzindo mRNA incorreto e globina β deficiente — texto e lâminas de genética que dialogam diretamente com esta aula.

---

## Pré-Prova

> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### Síntese para a prova


~1,5% do genoma codifica proteínas; o resto inclui regulatório, repetitivo, pseudogenes. Nucleossomo: DNA em torno de octâmero de histonas (H2A/H2B/H3/H4 × 2) + H1 linker. Lyonização: inativação de 1 X feminino → corpúsculo de Barr = n° de X − 1.

Exon: permanece no mRNA; Íntron: removido por splicing (GT no início, AG no final). GT-AG rule: mutação → splicing aberrante → doença (talassemia β). Promotor: upstream; TATA box ~−30; sítio de iniciação da transcrição.

Telômero: TTAGGG; telomerase em germinativas e tumorais. SNP: 1 nucleotídeo, ≥ 1% da população; farmacogenômica. Metilação CpG: silencia genes; hipermetilação de supressores tumorais no câncer.

Retrovírus: RNA → DNA (transcriptase reversa) — exceção ao dogma central.

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Como diferenciar |
|------------|------------|-----------------|
| Exon | Íntron | Exon = expresso no mRNA final; Íntron = intervém no gene, removido no splicing |
| Eucromatina | Heterocromatina | Eucromatina = ativa, descondensada; Heterocromatina = inativa, condensada |
| SNP | Microssatélite | SNP = 1 nucleotídeo; Microssatélite = repetições curtas em tandem (forense, MSI) |
| Metilação de DNA | Acetilação de histona | Metilação CpG = silencia; Acetilação histona = ativa transcrição (relaxa cromatina) |
| Telômero | Centrômero | Telômero = extremidade cromossômica (TTAGGG); Centrômero = ancoragem do cinetocoro (divisão) |

### Frase-âncora para não esquecer

> "O genoma é enorme, mas 98% não faz proteína — só 1,5% codifica. O resto regula, silencia e varia. E cada variação pode ser uma doença ou uma resposta diferente ao medicamento."

---

## Referências

- Alberts B et al. *Fundamentos de Biologia Celular e Molecular*. Artmed.
- Junqueira LC, Carneiro J. *Histologia Básica*. Guanabara Koogan.
- Lodish H et al. *Biologia Celular e Molecular*. Artmed.
