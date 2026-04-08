# Ciclo Celular — p53 e Rb1

## Relevância Clínica e Acadêmica

O ciclo celular é o conjunto de eventos coordenados que permite a uma célula duplicar seu DNA e se dividir com fidelidade. Sua regulação por ciclinas, quinases dependentes de ciclinas (CDKs) e proteínas supressoras de tumor como p53 e Rb é o centro da biologia do câncer. Praticamente toda neoplasia humana apresenta alteração em algum ponto do controle do ciclo celular — o que explica por que esse tema aparece em provas de biologia celular, genética médica e em toda a fisiopatologia oncológica.

A relevância clínica vai além da teoria: inibidores de CDK4/6 como palbociclibe já são usados no câncer de mama; a expressão de p21 induzida por p53 é o mecanismo de ação de vários quimioterápicos; e a perda do retinoblastoma (Rb) é o evento definitório do retinoblastoma hereditário e de outros tumores. Dominar esses mecanismos é essencial para qualquer médico que pretenda entender terapia-alvo.

### Figura sugerida

**Figura-ID:** `BCM1-A10-F01`

- **Momento:** após o bloco de relevância (reserva editorial para imagem no app; aparece inline quando houver URL no catálogo).
- **O que mostrar:** definir na produção — deve ilustrar o tema central da aula de forma clara em mobile.
- **Tipo sugerido:** esquema didático | ilustração estilo atlas | infográfico | foto contextual | outro.
- **Legenda (rascunho):** a fixar junto da imagem final (campo legenda em data/materiais_figuras.json).
- **Notas (opcional):** pesquisar no Wikimedia Commons (buscaCommonsEn / buscaCommonsPt no JSON); licenças livres e atribuição.




---



## Fases do Ciclo Celular

O ciclo celular de células eucarióticas divide-se em **interfase** (G1, S, G2) e **mitose** (M). Após a mitose, a célula pode entrar em **G0** (quiescência) ou reiniciar G1.

| Fase | Duração típica | Principais eventos |
|------|---------------|-------------------|
| **G1** | 6–12 h | Crescimento celular; síntese de proteínas; decisão de replicar |
| **S** | 6–8 h | Replicação do DNA (2N → 4N); síntese de histonas |
| **G2** | 3–5 h | Verificação da replicação; crescimento; preparação para mitose |
| **M** | 1 h | Prófase → metáfase → anáfase → telófase → citocinese |
| **G0** | Indefinido | Células quiescentes (neurônios, cardiomiócitos) ou terminalmente diferenciadas |

---

## Ciclinas e CDKs: O Motor do Ciclo

As CDKs são serina/treonina quinases constitutivamente expressas, mas **inativas** sem sua ciclina parceira. A concentração das ciclinas oscila durante o ciclo — daí o nome.

| Ciclina | CDK parceira | Fase ativa | Função |
|---------|-------------|------------|--------|
| Ciclina D | CDK4, CDK6 | G1 | Fosforila Rb → permite entrada em S |
| Ciclina E | CDK2 | G1 tardio/início de S | Reforça fosforilação de Rb; ativa origem de replicação |
| Ciclina A | CDK2, CDK1 | S, G2 | Mantém replicação e prepara mitose |
| Ciclina B | CDK1 (CDC2) | G2/M | MPF — promove entrada na mitose |

> **Dica:** "Ciclina D + CDK4/6 → fosforila Rb → E2F livre → S" é o caminho mais cobrado. Palbociclibe inibe CDK4/6 → Rb permanece ativo → célula fica em G1.

---

## Pontos de Checagem (Checkpoints)

O ciclo possui três pontos de controle onde a maquinaria verifica se as condições estão adequadas para avançar:

**1. Checkpoint G1/S (Ponto de Restrição):**
Verifica tamanho celular, nutrientes e integridade do DNA. **Rb** é o guardião principal. Rb hipofosforilado aprisiona E2F (fator de transcrição necessário para genes da fase S). Ciclina D/CDK4 fosforila Rb → libera E2F → células entram em S.

**2. Checkpoint G2/M:**
Verifica se o DNA foi corretamente replicado. CDK1/Ciclina B deve ser ativado. ATM/ATR detectam DSBs → ativam Chk1/Chk2 → inibem CDK1 → célula para em G2.

**3. Checkpoint do Fuso (Spindle Assembly Checkpoint — SAC):**
Verifica se todos os cromossomos estão corretamente ligados aos microtúbulos. Qualquer cinetócoro não ligado produz sinal de espera. Falha nesse checkpoint → aneuploidia → CIN (instabilidade cromossômica).

---

## p53: "Guardião do Genoma"

**p53** (proteína de 53 kDa, codificada pelo gene **TP53** no cromossomo 17p13) é o supressor de tumor mais frequentemente mutado em cânceres humanos (~50%). Em condições normais, p53 é degradado rapidamente pela MDM2 (ubiquitina ligase). Em resposta a estresse genotóxico, MDM2 é inibido e p53 se acumula.

### Funções de p53

1. **Parada em G1** — p53 ativa transcrição de **p21** (CDKN1A), inibidor de CDK. p21 inibe ciclina E/CDK2 e ciclina D/CDK4 → Rb permanece hipofosforilado → E2F preso → sem fase S.
2. **Reparo do DNA** — ativa genes de reparo (GADD45, etc.) enquanto a célula está parada.
3. **Apoptose** — se o dano é irreparável, p53 ativa genes pró-apoptóticos (PUMA, NOXA, BAX) → via intrínseca.
4. **Senescência** — bloqueio permanente do ciclo em células com dano acumulado.

### Síndrome de Li-Fraumeni

Mutação germinativa heterozigótica em *TP53* → síndrome de Li-Fraumeni: sarcomas em crianças, câncer de mama precoce, leucemias, tumores cerebrais. Segue a teoria dos dois golpes de Knudson.

> **Pegadinha:** Mutações em *TP53* são a alteração mais frequente em câncer humano COMO UM TODO. Mas o supressor mais comum no retinoblastoma hereditário é *RB1* (não TP53).

---

## Rb1: O Freio do Ciclo

**Rb** (proteína do retinoblastoma, gene *RB1* no cromossomo 13q14) é o guardião do checkpoint G1/S. Existem três membros da família (Rb, p107, p130), mas Rb é o protótipo.

### Mecanismo

- **Rb hipofosforilado (ativo como supressor):** se liga a E2F e o reprime. Sem E2F livre, a célula não produz ciclina E, DNA polimerase δ, DHFR — sem fase S.
- **Rb hiperfosforilado (inativo como supressor):** Ciclina D/CDK4/6 fosforila Rb → Rb libera E2F → E2F ativa genes para fase S.
- **Rb hiperfosforilado (inativo) permanente:** mutação de perda de função em *RB1* → E2F constitutivamente livre → proliferação descontrolada.

### Retinoblastoma

Tumor da retina em crianças (<5 anos). Dois tipos:
- **Hereditário (40%):** uma mutação germinativa em *RB1* (primeiro golpe herdado); segundo golpe somático → tumor bilateral, mais precoce.
- **Esporádico (60%):** dois golpes somáticos no mesmo clone → tumor unilateral, mais tardio.

> **Dica:** Proteínas virais oncogênicas (E7 do HPV, E1A do adenovírus, Antígeno T do SV40) se ligam a Rb e o inativam funcionalmente — equivalente a perda de função sem mutação.

---

## Inibidores de CDK (CKIs)

| Família | Membros | CDKs inibidas | Regulação |
|---------|---------|--------------|-----------|
| **INK4** | p16 (CDKN2A), p15, p18, p19 | CDK4, CDK6 | p16 induzido por senescência; frequente em melanoma |
| **Cip/Kip** | p21 (CDKN1A), p27 (CDKN1B), p57 | CDK2, CDK4, CDK1 | p21 induzido por p53; p27 por privação de mitógenos |

> **Dica Uninove:** p16 é silenciado por metilação do promotor em muitos cânceres → perda de CKI → CDK4/6 desregulada → Rb constantemente fosforilado → proliferação.

---

## Pontos-Chave

- **G1 → S** é o ponto de controle mais importante; Rb é o guardião, E2F é o executor
- **Ciclina D/CDK4/6** fosforila Rb → libera E2F → entra em S
- **p53** acumula em resposta a dano → ativa **p21** → inibe CDK → parada em G1
- **p53 mutado** em ~50% de todos os cânceres humanos; *TP53* em 17p13
- **Rb perda de função** = E2F livre constitutivo = proliferação descontrolada
- **Retinoblastoma hereditário:** dois golpes em *RB1* (13q14); bilateral, precoce
- **Palbociclibe/ribociclibe/abemaciclib:** inibidores de CDK4/6 → Rb ativo → G1 arrest
- **Checkpoint do fuso:** falha → aneuploidia; alvo do paclitaxel (estabiliza microtúbulos)
- **HPV E7** inativa Rb funcionalmente → câncer de colo de útero
- **p16 (CDKN2A)** inibe CDK4/6; perda por metilação em melanoma, pulmão, pâncreas

---

## Ponte com a Clínica

**Câncer de mama HR+/HER2-:** ciclina D superexpressa → CDK4/6 hiperativa → Rb fosforilado cronicamente. Palbociclibe + letrozol bloqueia CDK4/6 → restaura parada em G1. Resposta dramática com aumento de 10+ meses na sobrevida livre de progressão.

**Retinoblastoma:** leucocória (pupila branca) em criança < 5 anos, especialmente bilateral → suspeitar de retinoblastoma hereditário. Solicitar análise de *RB1* germline. Tratamento: quimioterapia intraarterial, termoterapia, enucleação se necessário.

**HPV e câncer cervical:** HPV de alto risco (16, 18) codifica E6 (degrada p53) e E7 (inativa Rb). Dupla eliminação dos dois supressores de tumor principais é o que torna o HPV tão oncogênico. Base mecanística para rastrear com citologia + HPV.

**Síndrome de Li-Fraumeni:** mutação em TP53 germline. Rastrear com protocolo Toronto (RNM corpo inteiro anual, mamografia bilateral, colonoscopia).

---

## Pré-Prova
> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### Síntese para a prova
- **Rb hipofosforilado:** ATIVO como supressor → prende E2F → sem fase S
- **Rb hiperfosforilado:** perde função supressora → E2F livre → fase S
- **Ciclina D/CDK4/6:** fosforila Rb → ponto-chave de G1/S
- **p53 → p21 → inibe CDK:** parada em G1 + reparo DNA ou apoptose se irreparável
- **TP53:** mutado em ~50% dos cânceres; 17p13; Li-Fraumeni = mutação germline
- **RB1:** 13q14; retinoblastoma hereditário = bilateral, precoce, dois golpes
- **p16 (CDKN2A):** inibe CDK4/6; silenciado por metilação em melanoma
- **Palbociclibe:** inibe CDK4/6 → Rb ativo → usado em câncer de mama HR+
- **HPV E6 degrada p53; HPV E7 inativa Rb** — mecanismo do câncer do colo
- **Checkpoint do fuso:** falha → aneuploidia → CIN

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Como diferenciar |
|------------|------------|-----------------|
| Rb hipofosforilado | Rb hiperfosforilado | Hipo = ativo como freio (prende E2F); Hiper = inativo, E2F livre |
| p53 (TP53) | Rb (RB1) | p53 = guardião do genoma, responde a dano DNA, 17p13; Rb = guardião G1/S, 13q14 |
| p21 | p16 | p21 = induzido por p53 (resposta a dano); p16 = INK4, inibe CDK4/6, metilado em melanoma |
| Retinoblastoma hereditário | Retinoblastoma esporádico | Hereditário = bilateral, precoce, 1 golpe germline + 1 somático; Esporádico = unilateral, tardio, 2 somáticos |
| HPV E6 | HPV E7 | E6 degrada p53; E7 inativa Rb — ambos oncoproteínas de HPV alto risco |

### Frase-âncora para não esquecer
> "Rb é a REPRESA que segura o E2F: enquanto não for fosforilada por CDK4/6 (com Ciclina D), a água não flui — a célula não entra em S. p53 é o FISCAL que para tudo quando há dano no DNA e ativa p21 para segurar a represa."
