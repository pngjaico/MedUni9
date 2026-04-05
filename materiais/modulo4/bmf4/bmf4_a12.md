# BMF4 — Aula 12: Neurotransmissão e Fibra Nervosa

**Disciplina:** Bases Morfofuncionais 4 — Neurossensorial e Endócrino
**Módulo:** 4 | **Tempo de estudo sugerido:** 10-15 min

---

## Relevância Clínica e Acadêmica

Entender neurotransmissão é entender metade da farmacologia. Cada classe de droga psiquiátrica, anestésica ou neurológica atua num ponto desse processo: síntese, liberação, receptor ou recaptação. A Uninove cobra essa aula especialmente quando conecta ao mecanismo de doenças — miastenia gravis, parkinson, epilepsia, depressão. Saber o circuito completo — potencial de ação → vesícula → fenda → receptor → resposta — é o fundamento que sustenta toda neurologia e farmacologia que vem depois.

### Figura sugerida

**Figura-ID:** `BMF4-A12-F01`

- **Momento:** após o bloco de relevância (reserva editorial para imagem no app; aparece inline quando houver URL no catálogo).
- **O que mostrar:** definir na produção — deve ilustrar o tema central da aula de forma clara em mobile.
- **Tipo sugerido:** esquema didático | ilustração estilo atlas | infográfico | foto contextual | outro.
- **Legenda (rascunho):** a fixar junto da imagem final (campo legenda em data/materiais_figuras.json).
- **Notas (opcional):** pesquisar no Wikimedia Commons (buscaCommonsEn / buscaCommonsPt no JSON); licenças livres e atribuição.




---

## A Fibra Nervosa — Estrutura e Classificação

A **fibra nervosa** é o axônio acrescido de sua bainha. Fibras **mielinizadas** conduzem impulsos mais rapidamente por **condução saltatória**: o potencial salta de nódulo de Ranvier em nódulo de Ranvier, poupando energia e tempo. Nas fibras **amielinizadas**, a condução é contínua e muito mais lenta. O diâmetro do axônio e a presença de mielina são os dois determinantes da velocidade de condução.

| Tipo | Mielina | Velocidade | Função principal |
|------|---------|-----------|----------------|
| Aα (Ia/Ib) | Sim | 70–120 m/s | Propriocepção e motor somático |
| Aβ | Sim | 30–70 m/s | Tato fino e pressão |
| Aδ | Sim | 5–30 m/s | Dor rápida, temperatura fria |
| C | Não | 0,5–2 m/s | Dor lenta/difusa, temperatura quente |

> **Dica de Prova:** A dor rápida e precisa ("pontada aguda") é mediada por fibras **Aδ**. A dor lenta e difusa ("queimação") é mediada por fibras **C** amielinizadas. A anestesia local bloqueia preferentemente fibras de menor calibre primeiro — por isso a temperatura vai antes da pressão.

---

## O Potencial de Ação — Do Estímulo à Propagação

Um potencial de ação ocorre quando a membrana neuronal atinge o **limiar de despolarização** (~−55 mV, a partir de −70 mV de repouso). Canais de Na⁺ voltagem-dependentes abrem em massa, o sódio entra, a membrana despolariza até +30 mV. Em seguida, canais de K⁺ abrem e a repolarização ocorre — o interior volta ao negativo. O **período refratário absoluto** (canais de Na⁺ inativados) garante unidirecionalidade e limita a frequência de disparo.

> **Pegadinha:** A lidocaína bloqueia canais de Na⁺ voltagem-dependentes. O neurônio está anatomicamente intacto — ele simplesmente não consegue propagar o sinal. Em overdose, pode atingir o coração e causar arritmia (os canais cardíacos têm cinética diferente, mas em concentrações altas são afetados).

---

## A Sinapse Química — Etapas Obrigatórias

A neurotransmissão química segue uma sequência rígida:

```flow
Potencial de ação chega ao botão terminal
        ↓
Abertura de canais de Ca²⁺ voltagem-dependentes
        ↓
Ca²⁺ entra → proteínas SNARE ancoram vesículas → exocitose
        ↓
Neurotransmissor na fenda sináptica (~20 nm)
        ↓
Liga-se ao receptor pós-sináptico → resposta
        ↓
Remoção: recaptação ativa / degradação enzimática / difusão
```

O **cálcio** é o gatilho da exocitose. A **toxina botulínica** cliva proteínas SNARE → impede fusão das vesículas de ACh → paralisia flácida sem déficit sensitivo.

---

## Receptores: Ionotrópicos vs Metabotrópicos

Essa distinção cai muito em prova. Os receptores pós-sinápticos são de dois tipos fundamentais:

**Ionotrópicos** (canal+receptor no mesmo complexo): a ligação do neurotransmissor abre diretamente um canal iônico. Resposta rápida (milissegundos). Exemplos: receptor nicotínico de ACh (abre canal de Na⁺/K⁺), GABA-A (abre canal de Cl⁻), NMDA de glutamato (abre canal de Ca²⁺/Na⁺/K⁺).

**Metabotrópicos** (receptor acoplado à proteína G): a ligação ativa uma proteína G intracelular, que gera segundo mensageiro (AMPc, IP3) e produz respostas mais lentas e prolongadas. Exemplos: receptor muscarínico de ACh, receptores dopaminérgicos D1/D2, receptores serotoninérgicos 5-HT1/5-HT2, receptores adrenérgicos α e β.

> **Dica de Prova:** Na junção neuromuscular, o receptor de ACh é **nicotínico ionotrópico** — resposta rápida para contração muscular. No coração (nervo vago), o receptor de ACh é **muscarínico metabotrópico** — resposta mais lenta, bradicardia gradual.

---

## Principais Neurotransmissores e Patologias

| Neurotransmissor | Localização | Receptores | Patologia/fármaco |
|-----------------|------------|-----------|-------------------|
| **Acetilcolina** | JNM, SNA pré-ganglionar | Nicotínico, Muscarínico | Miastenia; botulismo; organofosforados |
| **Dopamina** | Via nigroestriatal, mesolímbica | D1, D2 | Parkinson (↓); antipsicóticos (bloqueio D2) |
| **Serotonina** | Núcleos da rafe | 5-HT1–7 | Depressão; ISRS; síndrome serotoninérgica |
| **Noradrenalina** | Locus coeruleus | α1, α2, β1, β2 | Ansiedade; tricíclicos |
| **GABA** | SNC — interneurônios | GABA-A (Cl⁻), GABA-B | Benzodiazepínicos; epilepsia |
| **Glutamato** | Principal excitatório SNC | NMDA, AMPA, Cainato | Excitotoxicidade em AVC; ketamina |

---

## Recaptação e Degradação — Onde os Fármacos Agem

Após a liberação, o neurotransmissor deve ser removido da fenda. **Recaptação ativa** é o principal mecanismo para monoaminas (serotonina, dopamina, noradrenalina) — é o alvo dos ISRS, IRSN e antidepressivos tricíclicos. **Degradação enzimática**: acetilcolinesterase degrada ACh na fenda em microssegundos — organofosforados inibem essa enzima gerando crise colinérgica. **Difusão** contribui de forma menor para neurotransmissores como glutamato (captado por astrócitos vizinhos).

> **Pegadinha:** Inibidores de acetilcolinesterase (neostigmina) são terapêuticos em miastenia gravis — aumentam ACh disponível para os receptores remanescentes. O mesmo princípio em dose tóxica (organofosforados) mata. A diferença é dose e reversibilidade da inibição enzimática.

---

## Pontos-Chave para Prova

- **Fibra C:** amielinizada, 0,5–2 m/s, dor difusa e queimação — a mais lenta.
- **Fibra Aα:** mielinizada, até 120 m/s, propriocepção e motor somático — a mais rápida.
- **Ca²⁺:** dispara exocitose vesicular — sem cálcio, sem neurotransmissão.
- **Toxina botulínica:** cliva SNARE → bloqueia liberação de ACh na JNM → paralisia flácida.
- **Miastenia gravis:** anticorpo anti-receptor nicotínico → fraqueza piora com esforço.
- **Ionotrópico vs Metabotrópico:** JNM = nicotínico ionotrópico (rápido); coração = muscarínico metabotrópico (lento).
- **GABA-A:** canal de Cl⁻; benzodiazepínico aumenta frequência de abertura.
- **Glutamato/NMDA:** excitotoxicidade por entrada excessiva de Ca²⁺ em isquemia cerebral.
- **ISRS:** inibe recaptação de serotonina → mais serotonina na fenda → efeito antidepressivo.
- **Organofosforado:** inibe AChE → acúmulo de ACh → síndrome SLUDGE + bradicardia.

---

## Ponte com a Clínica

Intoxicação por organofosforados inibe acetilcolinesterase → acúmulo de ACh → síndrome colinérgica (SLUDGE: salivação, lacrimejamento, urina, diarreia, distúrbio GI, êmese). Tratamento: atropina (antagonista muscarínico) + pralidoxima (reativa a enzima antes da ligação envelhecer). Na doença de Parkinson, degeneração nigroestriatal reduz dopamina → levodopa repõe o precursor direto. ISRS + tramadol ou linezolida → síndrome serotoninérgica: hipertermia + tremor/mioclonia + agitação — potencialmente fatal.

---

## Pré-Prova

> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### O que você PRECISA saber

- **Fibra C:** amielinizada, 0,5–2 m/s, dor lenta/difusa — bloqueada por último pela anestesia local.
- **Fibra Aα:** mielinizada, 70–120 m/s, propriocepção e motor esquelético.
- **Ca²⁺:** dispara exocitose vesicular — essencial para toda neurotransmissão química.
- **Ionotrópico:** canal diretamente acoplado ao receptor (rápido). Nicotínico = ionotrópico.
- **Metabotrópico:** via proteína G e 2º mensageiro (lento). Muscarínico = metabotrópico.
- **Toxina botulínica:** cliva SNARE → sem ACh → paralisia flácida.
- **Miastenia gravis:** anti-AChR nicotínico → fraqueza que piora com fadiga.
- **Organofosforado:** inibe AChE → SLUDGE + bradicardia.

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Como diferenciar |
|------------|------------|-----------------|
| Miastenia gravis | Lambert-Eaton | MG: anti-AChR pós-sináptico; Lambert: anti-Ca²⁺ pré-sináptico |
| Fibra Aδ | Fibra C | Aδ: dor rápida e localizada; C: dor lenta, difusa, queimação |
| Receptor nicotínico | Receptor muscarínico | Nicotínico: ionotrópico, JNM e gânglios; Muscarínico: metabotrópico, coração e glândulas |
| Toxina botulínica | Organofosforado | Botulinica: bloqueia liberação de ACh; Organofosfato: inibe degradação de ACh |

### Frase-âncora para não esquecer

> "Sem cálcio, sem vesícula, sem sinal — Ca²⁺ é a chave que abre a porta da sinapse, e a toxina botulínica jogou a chave fora."