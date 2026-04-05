# BCM1 — Aula 5: Replicação do DNA e PCR

## Relevância Clínica e Acadêmica

A replicação fiel do DNA é a garantia da transmissão do material genético a cada divisão celular. Quando esse processo falha, surgem mutações que podem culminar em câncer ou doenças genéticas. Além disso, as enzimas envolvidas na replicação são alvos específicos de antibióticos (fluoroquinolonas, sulfonamidas) e antivirais (aciclovir), tornando este conteúdo diretamente relevante para farmacologia. A PCR — **reação em cadeia** da polimerase — é a tecnologia que revolucionou o diagnóstico médico e que teve seu papel dramático ampliado durante a pandemia de COVID-19: entender seus princípios permite compreender desde o diagnóstico molecular de **HIV** até a detecção de BRCA1/2  em triagem oncológica.

### Figura sugerida

**Figura-ID:** `BCM1-A5-F01`

- **Momento:** após o bloco de relevância (reserva editorial para imagem no app; aparece inline quando houver URL no catálogo).
- **O que mostrar:** definir na produção — deve ilustrar o tema central da aula de forma clara em mobile.
- **Tipo sugerido:** esquema didático | ilustração estilo atlas | infográfico | foto contextual | outro.
- **Legenda (rascunho):** a fixar junto da imagem final (campo legenda em data/materiais_figuras.json).
- **Notas (opcional):** pesquisar no Wikimedia Commons (buscaCommonsEn / buscaCommonsPt no JSON); licenças livres e atribuição.




---



## Replicação do DNA em Procariotos vs Eucariotos

A replicação é **semiconservativa**: cada fita original serve de molde para uma nova fita, gerando duas moléculas-filhas cada uma com 1 fita velha + 1 nova.

**Diferenças fundamentais:**

| Característica | Procariotos | Eucariotos |
|---------------|------------|-----------|
| Origem de replicação | 1 (oriC) | Múltiplas (dezenas de milhares) |
| DNA polimerase principal | DNA Pol III | DNA Pol δ (lagging), DNA Pol ε (leading) |
| Velocidade | ~1.000 pb/s | ~50 pb/s por polimerase (mas paralelo) |
| RNA primers | Removidos pela DNA Pol I | Removidos por RNase H + DNA Pol δ/filling |
| Tamanho do cromossomo | Circular, menor | Linear, grande |

---

## Etapas da Replicação

**1. Iniciação:**
- Helicases (DnaA em procariotos; ORC + Cdc6 em eucariotos) reconhecem a origem de replicação
- **Helicase** desfaz a dupla-fita, criando a "bolha de replicação"
- **SSBs (proteínas de ligação a fita simples):** estabilizam a fita simples, evitam reanelamento
- **Topoisomerase I e II:** removem o superenrolamento positivo à frente da garfo de replicação (DNA Pol avança → gera torção → topoisomerase aliveia)

> **Dica de Prova:** As fluoroquinolonas (ciprofloxacino, levofloxacino) inibem a DNA girase (topoisomerase II bacteriana) e a topoisomerase IV bacteriana, impedindo o alívio do superenrolamento → pausa da replicação → morte bacteriana. NÃO afetam significativamente as topoisomerases humanas (seletividade).

**2. Elongação:**
- **Primase:** sintetiza um curto RNA primer (8–12 nucleotídeos) — a DNA polimerase NÃO consegue iniciar de novo, precisa de uma extremidade 3'-OH
- **DNA Pol III (procariotos) / DNA Pol δ e ε (eucariotos):** sintetiza de 5'→3'; lê a fita molde de 3'→5'
- **Fita líder (leading strand):** síntese contínua, no sentido da garfo
- **Fita retardada (lagging strand):** síntese descontínua em fragmentos de Okazaki (cada um iniciado por um novo primer); depois ligados pela DNA ligase
- **Atividade exonuclease 3'→5':** função de revisão (proofreading) da DNA Pol — retira bases incorporadas incorretamente

**3. Terminação:**
- Remoção dos primers → preenchimento por DNA Pol I (procariotos) ou Pol α/δ (eucariotos)
- DNA ligase une os fragmentos de Okazaki
- **Problema do telômero:** a fita retardada fica com extremidade 5' incompleta ao final de cada ciclo → encurtamento progressivo dos telômeros. **Telomerase** (ribonucleoproteína com RNA molde) restaura as repetições TTAGGG em células germinativas e células-tronco. Células somáticas não expressam telomerase → senescência após ~50–70 divisões (Limite de Hayflick). Células tumorais reativam a telomerase → imortalidade replicativa.

> **Pegadinha:** O encurtamento telomérico é um mecanismo de senescência. QUANDO a célula tumoral supera esse mecanismo? Reativando a telomerase (em ~85–90% dos tumores). Isso é cobrado como "característica de imortalidade celular" segundo Hanahan & Weinberg.

---

## PCR — Reação em Cadeia da Polimerase

A PCR amplifica exponencialmente uma sequência específica de **DNA** in vitro. Cada ciclo dupla o número de cópias → após n ciclos: 2ⁿ cópias.

**Componentes:**
- DNA molde
- Primers (oligonucleotídeos que flanqueiam a região alvo; um para cada fita)
- DNA Pol termoestável (Taq polimerase — de Thermus aquaticus)
- dNTPs (desoxinucleotídeos)
- Tampão com Mg²⁺ (cofator essencial)

**Ciclo PCR — 3 etapas:**

| Etapa | Temperatura | O que acontece |
|-------|-------------|---------------|
| Desnaturação | ~95°C | Quebra das ligações de hidrogênio → fitas se separam |
| Anelamento | ~50–65°C | Primers hibridizam nas regiões complementares |
| Extensão | ~72°C | Taq polimerase sintetiza de 5'→3' a partir de cada primer |

**Variantes importantes:**
- **RT-PCR:** RNA → cDNA (via transcriptase reversa) → PCR → detecta mRNA; diagnóstico de HIV, SARS-CoV-2, expressão gênica
- **PCR quantitativo (qPCR ou PCR Real-Time):** monitora amplificação em tempo real com fluorescência; quantifica carga viral (HIV, HBV, HCV) ou expressão gênica
- **PCR multiplex:** múltiplos pares de primers → detecta várias sequências em uma reação → diagnóstico de síndromes respiratórias (Painel respiratório)

> **Dica de Prova:** A RT-PCR detecta RNA → é usada para vírus com genoma RNA (HIV, HCV, influenza, SARS-CoV-2). A PCR convencional detecta DNA. O teste PCR para COVID-19 era, na verdade, uma RT-qPCR (RT + real-time). Questão clássica: qual o exame de diagnóstico do HIV na janela imunológica antes dos anticorpos aparecerem? RT-PCR (carga viral detectável em ~10 dias de infecção).

---

## Pontos-Chave

- Replicação semiconservativa: 1 fita velha + 1 nova em cada filha
- Primasessintetiza RNA primer (DNA Pol não inicia de novo); primer removido depois
- DNA Pol 5'→3'; atividade proofreading exonuclease 3'→5'
- Fita líder: contínua; fita retardada: fragmentos de Okazaki (descontínua)
- Fluoroquinolonas: inibem DNA girase (topoisomerase II bacteriana) → morte bacteriana
- Telomerase: restaura telômeros; ausente em somáticas (senescência); reativada em tumores
- Limite de Hayflick: ~50–70 divisões em células somáticas antes da senescência
- PCR: 3 etapas (desnaturação 95°C, anelamento, extensão 72°C); Taq polimerase; 2ⁿ cópias
- RT-PCR: detecta RNA (vírus RNA, mRNA); base do diagnóstico de HIV, COVID, HCV
- qPCR (PCR real-time): quantifica carga viral; monitoramento de HIV, HBV, HCV

---

## Ponte com a Clínica

O **aciclovir** inibe a DNA Pol viral do herpesvírus: após ser ativado pela timidinoquinase viral, o aciclovir trifosfatado é incorporado na fita de DNA em crescimento e age como terminador de cadeia (sem -OH na posição 3'). A especificidade para o vírus se deve à dependência da timidinoquinase viral (célula humana não ativa o fármaco). No contexto oncológico, a **amplificação do oncogene HER2** por disfunção na replicação/reparo é detectada por FISH ou qPCR — a mesma tecnologia que diagnostica HIV. Essas conexões entre biologia molecular básica e aplicação clínica são exatamente o tipo de questão que distingue candidatos na prova de residência.

---

## Pré-Prova

> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### Síntese para a prova


Replicação: semiconservativa; precisa de RNA primer; DNA Pol só adiciona 5'→3'. Proofreading: exonuclease 3'→5' da DNA Pol corrige erros de incorporação. Fragmentos de Okazaki: fita retardada; removidos por RNase/DNA Pol; ligados pela ligase.

Fluoroquinolonas: inibem DNA girase (topoisomerase II bacteriana). Telomerase: restora TTAGGG; ausente em somáticas; ativa em tumores (imortalidade). PCR: desnaturação 95°C → anelamento → extensão 72°C (Taq); 2ⁿ cópias por ciclo.

RT-PCR: RNA → cDNA → PCR; diagnóstico de vírus RNA (HIV, COVID). QPCR: quantificação em tempo real; carga viral HIV, HBV, HCV. Aciclovir: incorpora-se ao DNA viral (sem 3'-OH) → termina cadeia; ações via TK viral.

KRAS: proto-oncogene; mutação → RAS sempre ativo (GTPase perdida).

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Como diferenciar |
|------------|------------|-----------------|
| Fita líder | Fita retardada | Líder: síntese contínua (mesma direção da garfo); Retardada: descontínua (fragmentos de Okazaki) |
| RT-PCR | PCR convencional | RT-PCR: detecta RNA (retrovirus, mRNA); PCR convencional: detecta DNA |
| PCR qualitativo | PCR quantitativo (qPCR) | Qualitativo: detecta presença/ausência; qPCR: quantifica (carga viral) |
| Telomerase em somáticas | Telomerase em tumorais | Somática: ausente → senescência; Tumoral: reativada → imortalidade |
| Topoisomerase I | Topoisomerase II (girase) | Topo I: corta 1 fita; Topo II: corta 2 fitas (alvo das fluoroquinolonas bacterianas) |

### Frase-âncora para não esquecer

> "DNA Pol não começa do zero — precisa do primer de RNA. PCR imita a replicação com calor: 95°C separa, resfria para anelar, 72°C para copiar. A Taq não morre de calor — vem de uma bactéria termal."

---

## Referências

- Alberts B et al. *Fundamentos de Biologia Celular e Molecular*. Artmed.
- Junqueira LC, Carneiro J. *Histologia Básica*. Guanabara Koogan.
- Lodish H et al. *Biologia Celular e Molecular*. Artmed.
