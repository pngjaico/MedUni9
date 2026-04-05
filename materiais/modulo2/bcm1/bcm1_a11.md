# Mutações, Agentes Mutagênicos e Reparo de DNA

## Relevância Clínica e Acadêmica

A integridade do genoma é constantemente ameaçada por agentes endógenos e exógenos. Cada célula humana sofre aproximadamente 10.000 lesões no DNA por dia, a grande maioria corrigida por sistemas de reparo especializados. Quando esses sistemas falham — seja por defeito genético ou sobrecarga mutagênica — mutações se fixam, podendo resultar em câncer, doenças hereditárias ou envelhecimento precoce. Essa aula fornece o vocabulário e o mecanismo para entender por que o tabagismo causa câncer de pulmão, por que o sol provoca melanoma e por que o câncer colorretal hereditário sem polipose ocorre em famílias específicas.

Na clínica, os sistemas de reparo são alvos terapêuticos: inibidores de PARP (olaparibe) matam seletivamente tumores com mutações em BRCA1/2, aproveitando a "lethality sintética". O teste de instabilidade de microssatélites (MSI) guia o uso de imunoterapia com anti-PD-1. Entender os mecanismos de reparo é, portanto, essencial para a medicina de precisão.

### Figura sugerida

**Figura-ID:** `BCM1-A11-F01`

- **Momento:** após o bloco de relevância (reserva editorial para imagem no app; aparece inline quando houver URL no catálogo).
- **O que mostrar:** definir na produção — deve ilustrar o tema central da aula de forma clara em mobile.
- **Tipo sugerido:** esquema didático | ilustração estilo atlas | infográfico | foto contextual | outro.
- **Legenda (rascunho):** a fixar junto da imagem final (campo legenda em data/materiais_figuras.json).
- **Notas (opcional):** pesquisar no Wikimedia Commons (buscaCommonsEn / buscaCommonsPt no JSON); licenças livres e atribuição.




---



## Tipos de Mutação

### Quanto ao Número de Bases

| Tipo | Descrição | Consequência |
|------|-----------|-------------|
| **Substituição de base** | Uma base troca por outra | Missense, nonsense ou silenciosa |
| **Transição** | Purina → Purina; Pirimidina → Pirimidina (A↔G, C↔T) | Tipo mais comum |
| **Transversão** | Purina → Pirimidina ou vice-versa (A/G ↔ C/T) | Menos frequente |
| **Inserção/Deleção (indel)** | Adição ou remoção de bases | Frameshift se não múltiplo de 3 |

### Quanto ao Efeito no Códon

| Tipo | Exemplo | Impacto |
|------|---------|---------|
| **Silenciosa (sinônima)** | GAA → GAG (Glu → Glu) | Sem alteração de aminoácido |
| **Missense** | GAA → GUA (Glu → Val) — anemia falciforme | Troca de aminoácido |
| **Nonsense** | GAA → UAA (Glu → STOP) | Stop prematuro → proteína truncada |
| **Frameshift** | Inserção/deleção não múltipla de 3 | Leitura alterada do início da mutação |

> **Dica:** Anemia falciforme = mutação missense no códon 6 do gene da β-globina: GAG → GTG → Glu → Val. A questão clássica da Uninove sobre mutação pontual e doença monogênica.

---

## Agentes Mutagênicos

### Agentes Físicos

**Radiação Ultravioleta (UV):**
Causa **dímeros de pirimidina** (principalmente timina-timina, CPD — cyclobutane pyrimidine dimer) e fotoprodutos 6-4 PP. O DNA desse tipo não pode mais ser lido corretamente. Reparado pelo sistema NER (Nucleotide Excision Repair). Mutação característica UV: C → T em dipyrimidinas.

**Radiação ionizante (RX, raios γ):**
Produz espécies reativas de oxigênio (ROS) → quebras de fita simples e dupla (DSBs). DSBs são os danos mais letais para a célula. Reparados por HRR (Reparo Homólogo) ou NHEJ (Non-Homologous End Joining).

### Agentes Químicos

| Classe | Exemplo | Mecanismo | Lesão |
|--------|---------|-----------|-------|
| **Alquilantes** | Ciclofosfamida, mostarda nitrogenada | Adicionam grupos alquila ao N7 da guanina | Emparelhamento errado, quebras |
| **Policíclicos aromáticos** | Benzopireno (cigarro, churrasco) | Adutos em guanina após ativação por CYP | G → T transversão |
| **Nitrosaminas** | Tabaco, carnes processadas | Alquilação de O6-guanina | G → A transição |
| **Aflatoxina B1** | Amendoim mofado (Aspergillus) | Aduto em N7-guanina | Mutação em TP53 (249 codon) |
| **Agentes intercalantes** | Brometo de etídio, acridinas | Intercalam entre bases | Frameshift por indel |

### Agentes Biológicos

**Vírus:** HPV E6 degrada p53; EBV immortaliza linfócitos B; HBV integra-se ao genoma hepático.

**Erros endógenos:** desaminação espontânea de citosina → uracil (C → U → pareamento errado com A → G → C muta para A); oxiguanina (8-oxo-G) por ROS endógeno → pareamento com A → G → T.

> **Pegadinha:** A desaminação de 5-metilcitosina gera timina (não uracil). Por isso CpG são "hot spots" de mutação — mutação C → T em CpG é a mais frequente em genomas de mamíferos e aparece muito em TP53.

---

## Sistemas de Reparo do DNA

### 1. Reparo por Excisão de Base (BER — Base Excision Repair)

**Lesões:** bases oxidadas (8-oxo-G), bases alquiladas simples, uracil (desaminação de C).

**Mecanismo:**
1. DNA glicosilase específica remove a base alterada → sítio AP (apurínico/apirimidínico)
2. AP-endonuclease (APE1) corta o backbone no sítio AP
3. DNA polimerase β insere base correta
4. DNA ligase sela a nick

**Defeito clínico:** Mutações em genes BER aumentam susceptibilidade a cânceres como cólon (gene MUTYH — Poliposis Asociada a MUTYH).

### 2. Reparo por Excisão de Nucleotídeo (NER — Nucleotide Excision Repair)

**Lesões:** dímeros de pirimidina (UV), adutos volumosos (benzopireno).

**Mecanismo:**
1. Reconhecimento da distorção na hélice
2. Corte em dois pontos flanqueando a lesão (~25–30 nt excisados)
3. DNA polimerase δ/ε resintetiza
4. DNA ligase sela

**Dois subpathways:**
- **GG-NER** (Global Genome): varre o genoma inteiro
- **TC-NER** (Transcription-Coupled): repara genes ativamente transcritos com prioridade

**Defeito clínico — Xeroderma Pigmentoso (XP):** defeito em NER → dímeros de pirimidina acumulam → mutações por UV → câncer de pele >1000× mais frequente, fotofobia, queratose actínica em crianças. Causa AR com 8 genes (XPA–XPG, XPV).

> **Dica Uninove:** XP é o exemplo CLÁSSICO de defeito em NER. Vai cair na prova como "criança com sensibilidade extrema ao sol e múltiplos cânceres de pele".

### 3. Reparo de Incompatibilidades (MMR — Mismatch Repair)

**Lesões:** bases mal emparelhadas (G-T, A-C), loops de inserção/deleção gerados por replicação.

**Mecanismo:**
1. MutSα (MSH2+MSH6) ou MutSβ (MSH2+MSH3) reconhece o par errado
2. MutLα (MLH1+PMS2) é recrutado
3. EXO1 degrada a fita nova contendo o erro
4. DNA polimerase δ ressintetiza; ligase sela

**Defeito clínico — Síndrome de Lynch (HNPCC):**
Mutação germinativa em *MLH1*, *MSH2*, *MSH6*, *PMS2* → MMR ineficiente → acúmulo de erros em microssatélites → **MSI-H (High Microsatellite Instability)**. Risco muito elevado de câncer colorretal (sem polipose), endométrio, gástrico, ovário. Critérios de Amsterdã e Bethesda orientam rastreamento.

Tumores MSI-H respondem ao pembrolizumabe (anti-PD-1) — aprovação para qualquer tumor sólido MSI-H (independente do órgão primário).

### 4. Reparo de Quebras de Dupla Fita (DSB Repair)

**Lesões:** Quebras de dupla fita (DSBs) por radiação ionizante, quimioterápicos, radicais livres.

**Dois mecanismos:**

**HRR (Homologous Recombination Repair):**
- Ocorre em S/G2 (quando a cromátide irmã está disponível)
- Alta fidelidade
- Proteínas: MRN complex → ATM → BRCA1/BRCA2 → RAD51 (invasão de fita, reparo)
- Defeito: mutação em *BRCA1* ou *BRCA2* → câncer de mama, ovário, pâncreas, próstata

**NHEJ (Non-Homologous End Joining):**
- Ocorre em qualquer fase (G1 principalmente)
- Sem modelo; sutura as extremidades diretamente → propensa a erros (pequenas indels)
- Proteínas: Ku70/Ku80 → DNA-PKcs → XRCC4/Ligase IV
- Defeito: linfomas (rearranjos V(D)J do receptor de antígeno usam NHEJ)

> **Pegadinha:** **BRCA1/2 participam do HRR.** Células com BRCA1/2 mutado dependem exclusivamente do NHEJ e do BER via PARP. Se PARP for inibido (olaparibe) → a célula não consegue reparar nada → morte seletiva do tumor (letalidade sintética).

### 5. Reparo Direto

**O6-alquilguanina transferase (MGMT):** remove diretamente o grupo metil do O6-Guanina após alquilação por nitrosaminas. MGMT é um "suicida" — cada molécula repara apenas 1 lesão. Metilação do promotor de *MGMT* → perda de expressão → tumores respondem melhor a temozolomida (glioblastoma).

---

## Pontos-Chave

- **BER:** remove bases únicas danificadas (8-oxo-G, uracil); glicosilase + APE1
- **NER:** remove lesões volumosas (dímeros UV, adutos); excisa ~25 nt; defeito = Xeroderma Pigmentoso
- **MMR:** corrige emparelhamentos errados na replicação; defeito = Síndrome de Lynch, MSI-H
- **HRR:** repara DSBs com alta fidelidade em S/G2; necessita BRCA1/2, RAD51
- **NHEJ:** repara DSBs em G1, propensa a erros; usa Ku70/80
- **BRCA1/2 mutados + PARP inibido = letalidade sintética** — base do olaparibe
- **Xeroderma Pigmentoso** = defeito NER; dímeros de pirimidina; AR
- **Síndrome de Lynch** = defeito MMR; MSI-H; canceres colorretais/endométrio sem polipose
- **Benzopireno → aduto em G → transversão G → T** — assinatura mutacional do tabagismo
- **Desaminação CpG** = hot spot de mutação C → T; frequente em TP53

---

## Ponte com a Clínica

**Câncer de mama BRCA1/2:** Mulher jovem com histórico familiar de câncer de mama/ovário → teste genético para BRCA1/BRCA2. Se positivo, mastectomia/salpingooforectomia preventiva ou vigilância intensiva. Em caso de câncer ativo com mutação BRCA: olaparibe (PARP inibidor) em 1ª ou 2ª linha.

**Síndrome de Lynch:** Câncer colorretal antes dos 50 anos, sem hiperpolipose, ou histórico familiar. Rastrear com PCR para MSI ou imunoistoquímica para MLH1/MSH2/MSH6/PMS2 no tumor. Colonoscopia anual a partir dos 20–25 anos. Tumor MSI-H → pembrolizumabe aprovado.

**Xeroderma Pigmentoso:** Raridade, mas questão clássica. Criança < 5 anos com queimaduras de sol exageradas, múltiplas lesões pré-malignas e cânceres cutâneos precocíssimos. Evitar sol; fotoproteção rigorosa. Sem tratamento etiológico (autossômico recessivo).

**Glioblastoma e temozolomida:** Tumores que metilam o promotor de MGMT não expressam a enzima → não conseguem reverter alquilação por temozolomida → mais sensíveis ao quimioterápico. Teste de metilação de MGMT é biomarcador preditivo obrigatório no glioblastoma.

---

## Pré-Prova

> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### O que você PRECISA saber

- **BER:** bases únicas danificadas (oxidação, desaminação); glicosilase → APE1 → pol β → ligase
- **NER:** lesões volumosas (UV, benzopireno); excisa ~25 nt; XP = defeito NER
- **MMR:** erros de replicação; MSH2/MLH1; Lynch = defeito MMR → MSI-H
- **HRR:** DSBs em S/G2; BRCA1/2 + RAD51; alta fidelidade
- **NHEJ:** DSBs em G1; Ku70/80; propenso a erro
- **BRCA mutado + PARP inibido = letalidade sintética** → olaparibe
- **Missense:** troca de aminoácido (ex: Glu→Val na falciforme)
- **Nonsense:** cria stop prematuro → proteína truncada
- **Frameshift:** indel não múltipla de 3 → leitura completamente alterada
- **UV → dímeros de pirimidina → NER** — se NER falha → XP
- **CpG hot spot:** desaminação de 5-MeC → T; frequente em TP53

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Como diferenciar |
|------------|------------|-----------------|
| BER | NER | BER = base única (oxidada/desaminada); NER = lesão volumosa que distorce a hélice (UV) |
| HRR | NHEJ | HRR = fiel, usa cromátide irmã (S/G2); NHEJ = erro-propenso, G1, une extremidades |
| Síndrome de Lynch | PAF (Polipose Adenomatosa Familiar) | Lynch = defeito MMR, sem polipose, MSI-H; PAF = defeito APC, milhares de pólipos, CIN |
| MSI-H | CIN | MSI-H = instabilidade de microssatélites, defeito MMR; CIN = instabilidade cromossômica, aneuploidia |
| Transição | Transversão | Transição = purina↔purina ou pirimidina↔pirimidina; Transversão = troca de tipo (mais rara) |

### Frase-âncora para não esquecer

> "BER conserta BASE única; NER conserta NUCLEOTÍDEO volumoso; MMR conserta MISMATCH da replicação; HRR conserta DUPLA QUEBRA com FIDELIDADE (exige irmã); NHEJ une tudo a fórceps — às vezes com erro."

---

## Referências

- Alberts B et al. *Fundamentos de Biologia Celular e Molecular*. Artmed.
- Junqueira LC, Carneiro J. *Histologia Básica*. Guanabara Koogan.
- Lodish H et al. *Biologia Celular e Molecular*. Artmed.
