# BCM1 — Aula 7: Tradução de Proteínas

## Relevância Clínica e Acadêmica

A tradução é o processo pelo qual a informação codificada no **mRNA** é convertida em sequência de aminoácidos — a proteína funcional. Os ribossomos são alvos de uma das maiores classes de antibióticos em uso clínico: aminoglicosídeos, macrolídeos, tetraciclinas, cloranfenicol, linezolida e clindamicina todos interferem em diferentes etapas da síntese proteica bacteriana. Compreender o mecanismo da tradução não só explica a farmacologia desses antibióticos como permite prever seus padrões de toxicidade e resistência.

A **Uninove** frequentemente cobra perguntando qual subunidade ribossomal é alvo de determinado antibiótico, e qual a diferença entre bacteriostático e bactericida entre essas drogas. Esta aula é de alto rendimento para farmacologia de antibióticos.

### Figura sugerida

**Figura-ID:** `BCM1-A7-F01`

- **Momento:** após o bloco de relevância (reserva editorial para imagem no app; aparece inline quando houver URL no catálogo).
- **O que mostrar:** definir na produção — deve ilustrar o tema central da aula de forma clara em mobile.
- **Tipo sugerido:** esquema didático | ilustração estilo atlas | infográfico | foto contextual | outro.
- **Legenda (rascunho):** a fixar junto da imagem final (campo legenda em data/materiais_figuras.json).
- **Notas (opcional):** pesquisar no Wikimedia Commons (buscaCommonsEn / buscaCommonsPt no JSON); licenças livres e atribuição.




---



## O Código Genético

O código genético é a correspondência entre trincas de bases no **mRNA** (códons) e os aminoácidos.

**Características:**
- **Tripleto:** 3 bases por códon → 4³ = 64 combinações para 20 aminoácidos + códons de parada
- **Degenerado (redundante):** a maioria dos aminoácidos é codificada por mais de um códon
- **Não sobreponível:** cada base pertence a apenas um códon
- **Universal (quase):** o mesmo código em procariotos e eucariotos (exceções: mitocôndrias, protozoários)
- **Códon de início:** AUG (metionina — formil-Met em procariotos, Met em eucariotos)
- **Códons de parada (nonsense):** UAA, UAG, UGA — não codificam aminoácidos; reconhecidos por fatores de liberação (RF)

> **Dica de Prova:** Mutações na posição 3 do códon ("posição vacilante" ou wobble) frequentemente geram mutações silenciosas (sinônimas), porque na terceira posição o código é mais degenerado. Mutação de sentido incorreto (missense) = troca de aminoácido. Mutação sem sentido (nonsense) = cria códon de parada prematuro → proteína truncada.

---

## Componentes da Tradução

- **mRNA:** codifica a proteína; traduzido de 5'→3'
- **tRNA:** molécula adaptadora; sequência anticodon (3 nt) na alça anticodon; aminoácido esterificado na extremidade 3' CCA
- **Aminoacil-tRNA sintetase:** carrega o aminoácido correto ao tRNA cognato (uma por aminoácido); usa ATP; é a enzima que garante a "fidelidade" do código genético
- **Ribossomo:** partícula ribonucleoproteica; eucarioto 80S (60S + 40S); procarioto 70S (50S + 30S)

---

## Etapas da Tradução

**1. Iniciação:**

*Procariotos:*
- Base Shine-Dalgarno (SD, na região 5'UTR do mRNA) hibridiza com rRNA 16S da subunidade 30S
- tRNA iniciador: fMet-tRNA fMet
- Fatores de iniciação: IF1, IF2, IF3

*Eucariotos:*
- Cap 5' (m7G) reconhecido pelo complexo eIF4F
- Scanning do 5'UTR até o primeiro AUG (contexto de Kozak favorável)
- tRNA iniciador: Met-tRNA i MET
- Fatores de iniciação: eIF1, eIF2, eIF3, eIF4 (A, B, E, G), eIF5

> **Dica de Prova:** Em eucariotos, a iniciação começa pelo CAP 5' → por isso vírus RNA (ex.: picornavírus, poliovírus) usam IRES (Internal Ribosome Entry Site) para iniciar a tradução sem depender do cap, mesmo depois de clivarem o eIF4G do hospedeiro.

**2. Elongação:**

O ribossomo tem 3 sítios de ligação ao tRNA:
- **Sítio A (aminoacil):** recebe o aminoacil-tRNA trazido pelo complexo EF-Tu·GTP
- **Sítio P (peptidil):** ocupa o tRNA que carrega a cadeia polipeptídica crescente
- **Sítio E (exit):** tRNA descarregado sai por aqui

**Ciclo de elongação:**
1. Entrada do aminoacil-tRNA no sítio A (EF-Tu·GTP → GTP hidrólise → EF-Tu·GDP sai)
2. **Transferência peptídica:** peptidiltransferase (atividade catalítica do rRNA 28S/23S) transfere a cadeia do sítio P para o tRNA no sítio A → nova ligação peptídica formada
3. **Translocação:** EF-G·GTP (procarioto) desloca o ribossomo 1 códon → tRNA do A vai para P; de P vai para E; E sai

**3. Terminação:**

Quando um códon de parada (UAA, UAG, UGA) entra no sítio A → não existe tRNA cognato → fatores de liberação (RF1/RF2 em procariotos; eRF1 em eucariotos) reconhecem o códon de parada → ativam a liberação do polipeptídeo → dissociação do ribossomo

---

## Antibióticos que Inibem a Tradução Bacteriana

| Antibiótico | Subunidade alvo | Mecanismo de ação | Efeito |
|------------|----------------|-------------------|--------|
| Aminoglicosídeos (amicacina, gentamicina) | 30S | Liga ao 16S rRNA → leitura equivocada do mRNA | Bactericida |
| Tetraciclinas | 30S | Bloqueia entrada do aminoacil-tRNA no sítio A | Bacteriostático |
| Cloranfenicol | 50S | Inibe peptidiltransferase (23S rRNA) | Bacteriostático |
| Macrolídeos (azitromicina, eritromicina) | 50S | Liga ao 23S rRNA → bloqueia translocação (saída do sítio A) | Bacteriostático |
| Clindamicina | 50S | Liga ao 23S rRNA (sítio similar macrolídeos) → bloqueia translocação | Bacteriostático |
| Linezolida | 50S | Liga ao 23S rRNA (sítio A) → impede formação do complexo de iniciação 70S | Bacteriostático |

> **Pegadinha 1:** O cloranfenicol inibe a peptidiltransferase do ribossomo 50S bacteriano; mas também pode inibir (em menor grau) a peptidiltransferase mitocondrial (ribossomo 70S da mitocôndria), causando **toxicidade medular** (aplasia) em uso prolongado ou altas doses. Por isso seu uso sistêmico é restrito.

> **Pegadinha 2:** Aminoglicosídeos são bactericidas e têm toxicidade dependente da concentração (pico) → dose única diária preferida. São nefrotóxicos e ototóxicos (efeito na mitocôndria da cóclea, que tem ribossomo 70S). Monitorar nível sérico e função renal.

---

## Controle Traducional e Pós-Traducional

**Controle traducional:**
- Ferritina: quando Fe²⁺ baixo, IRP (Iron Regulatory Protein) liga ao IRE (Iron Response Element) no 5'UTR → bloqueia ribossomo → menos ferritina sintetizada (conserva Fe)
- eIF2α: fosforilado em estresse → inibe tradução global (Unfolded Protein Response — UPR)

**Modificações pós-traducionais:**
- Fosforilação: modifica atividade (PKA fosforila glicogênio fosforilase → ativa)
- Glicosilação: N-linked (RE rugoso) e O-linked (Golgi); targeting para membrana/secreção
- Ubiquitinação + proteassoma: degradação proteica controlada
- Clivagem: pró-insulina → insulina (remoção do peptídeo C)
- Dobramento com chaperones: HSP70, HSP90 evitam agregação

---

## Pontos-Chave

- Código genético: tripleto, degenerado, universal (quase); AUG = início; UAA/UAG/UGA = parada
- Aminoacil-tRNA sintetase: carrega aa no tRNA (fidelidade do código); usa ATP
- Ribossomo: A (entra)-P (peptídeo)-E (sai); transferência peptídica = atividade do rRNA (ribozima)
- Subunidade 30S: alvo de aminoglicosídeos (bactericida) e tetraciclinas (bacteriostático)
- Subunidade 50S: alvo de cloranfenicol (aplasia medular), macrolídeos, clindamicina, linezolida
- Aminoglicosídeos: bactericidas, ototóxico e nefrotóxico; efeito na mitocôndria (70S coclear)
- Cloranfenicol: inibe peptidiltransferase 23S; toxicidade mitocondrial → aplasia medular
- IRES: permite iniciação cap-independente (vírus RNA picorna/polio)
- Ubiquitinação → proteassoma → degradação; base dos inibidores (bortezomibe em mieloma)
- Clivagem pré-proteína → pró-insulina → insulina: exemplo de maturação pós-traducional

---

## Ponte com a Clínica

A **linezolida** é usada em infecções por S. aureus resistente à meticilina (MRSA) e Enterococcus resistente à vancomicina (VRE). Ela inibe a iniciação da tradução na subunidade 50S. Por agir no 50S/70S, tem potencial de toxicidade mitocondrial com uso prolongado → neuropatia periférica e supressão medular. O **bortezomibe**, inibidor do proteassoma, é a segunda linha no tratamento do mieloma múltiplo — uma prova direta de que entender ubiquitinação e proteassoma não é apenas bioquímica básica, é farmacologia oncológica de alto impacto.

---

## Pré-Prova

> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### Síntese para a prova


AUG = início (Met/fMet); UAA, UAG, UGA = parada (nonsense). Ribossomo 70S (bactérias) = 50S + 30S; 80S (eucariotos) = 60S + 40S. Sítios A-P-E: A = entra; P = peptídeo; E = sai.

30S alvo: aminoglicosídeos (bactericida, ototóxico) e tetraciclinas (bacteriostático). 50S alvo: cloranfenicol (aplasia!) + macrolídeos + clindamicina + linezolida. Cloranfenicol inibe peptidiltransferase: bacteriostático + aplasia medular (mitocôndria).

Aminoglicosídeos: bactericidas; dose única diária; monitorar nefro + otoxicidade. IRES: iniciação cap-independente em vírus RNA (poliovírus). Ubiquitinação + proteassoma: degradação proteica; bortezomibe (mieloma).

Pró-insulina → insulina: clivagem do peptídeo C (modificação pós-traducional).

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Como diferenciar |
|------------|------------|-----------------|
| Aminoglicosídeo (30S) | Cloranfenicol (50S) | Amino = 30S (leitura equivocada); Cloran = 50S (inibe peptidiltransferase) |
| Bactericida | Bacteriostático | Bactericida: mata (amino, FQ, β-lactâmicos); Bacteriostático: inibe crescimento (tetra, macro, cloran, linezolida) |
| Mutação missense | Mutação nonsense | Missense = troca aa; Nonsense = cria códon de parada (trunca proteína) |
| Cap-dependente | IRES (cap-independente) | Cap-dependente = eucarioto normal; IRES = vírus RNA que clivam eIF4G |
| Modificação co-traducional | Modificação pós-traducional | Co: glicosilação N-linked no RER; Pós: fosforilação, ubiquitinação, clivagem (insulina) |

### Frase-âncora para não esquecer

> "30S = entrada do tRNA errada (aminoglicosídeo lê errado, tetraciclina não deixa entrar). 50S = cadeia não cresce (cloranfenicol corta no meio, macrolídeo trava a saída). Matar com aminoglic; parar com o resto."

---

## Referências

- Alberts B et al. *Fundamentos de Biologia Celular e Molecular*. Artmed.
- Junqueira LC, Carneiro J. *Histologia Básica*. Guanabara Koogan.
- Lodish H et al. *Biologia Celular e Molecular*. Artmed.
