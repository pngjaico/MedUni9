# BMF2 — Aula 13: Trocas Gasosas e Relação Ventilação/Perfusão

## Relevância Clínica e Acadêmica

A troca gasosa é o objetivo final de todo o aparelho respiratório. Entender como o O₂ vai do ar alveolar ao sangue arterial e como o CO₂ percorre o caminho inverso é fundamental para interpretar a gasometria arterial — exame obrigatório em qualquer paciente grave. As zonas de West, a relação V̇/Q̇ e os mecanismos de hipoxemia compõem um framework lógico que aparece diretamente em questões de clínica médica, pneumologia e terapia intensiva.

A **Uninove** cobra esses tópicos especialmente em contextos de patologias respiratórias (pneumonia, TEP, DPOC, síndrome do desconforto respiratório agudo — SDRA) em que o aluno precisa identificar o mecanismo de hipoxemia. Dominar essa lógica transforma questões complexas em raciocínio direto.

### Figura sugerida

**Figura-ID:** `BMF2-A13-F01`

- **Momento:** após o bloco de relevância (reserva editorial para imagem no app; aparece inline quando houver URL no catálogo).
- **O que mostrar:** definir na produção — deve ilustrar o tema central da aula de forma clara em mobile.
- **Tipo sugerido:** esquema didático | ilustração estilo atlas | infográfico | foto contextual | outro.
- **Legenda (rascunho):** a fixar junto da imagem final (campo legenda em data/materiais_figuras.json).
- **Notas (opcional):** pesquisar no Wikimedia Commons (buscaCommonsEn / buscaCommonsPt no JSON); licenças livres e atribuição.




---



## Difusão de Gases na Membrana Alvéolo-Capilar

A troca gasosa ocorre por **difusão passiva** segundo a Lei de Fick:

$$\dot{V}_{gas} = \frac{A \times D \times (P_1 - P_2)}{T}$$

Onde:
- A = área de superfície alveolar (~70 m²)
- D = coeficiente de difusão (proporcional à solubilidade e inversamente proporcional à raiz da massa molecular)
- P₁ − P₂ = gradiente de pressão parcial
- T = espessura da membrana

**Comparando O₂ e CO₂:**
- CO₂ é ~20× mais solúvel que O₂ → difunde ~20× mais facilmente
- Por isso, hipercapnia (↑CO₂) raramente é causada por problema de difusão — quase sempre é falência ventilatória
- Hipoxemia pode resultar de difusão prejudicada (espessamento da membrana em fibrose, SDRA)

---

## Pressões Parciais dos Gases

| Gás | Ar inspirado | Ar alveolar | Sangue venoso misto | Sangue arterial |
|-----|-------------|-------------|--------------------|----|
| O₂ (PO₂) | 159 mmHg | ~100 mmHg | ~40 mmHg | ~95–100 mmHg |
| CO₂ (PCO₂) | ~0 mmHg | ~40 mmHg | ~46 mmHg | ~40 mmHg |

O O₂ difunde do alvéolo (~100 mmHg) para o sangue venoso (~40 mmHg) → gradiente de 60 mmHg.
O CO₂ difunde do sangue (~46 mmHg) para o alvéolo (~40 mmHg) → gradiente menor (6 mmHg), mas compensado pela alta solubilidade.

> **Dica de Prova:** A PaO₂ normal é ~95–100 mmHg em jovens ao nível do mar. Com a idade, a PaO₂ esperada cai: fórmula aproximada = 100 − (0,3 × idade). Um idoso de 70 anos pode ter PaO₂ de 79 mmHg normalmente.

---

## Transporte de O₂ e CO₂ no Sangue

**O₂:**
- Ligado à hemoglobina: ~98,5% (como oxiemoglobina)
- Dissolvido no plasma: ~1,5%
- Conteúdo arterial de O₂ (CaO₂) = (Hb × 1,34 × SatO₂) + (PaO₂ × 0,003)

**Curva de dissociação da Hb-O₂:**
- Forma sigmoide; p50 = PO₂ em que Hb está 50% saturada (~26–27 mmHg)
- Desvio à direita (↓Sat para mesma PO₂): acidose, ↑CO₂, ↑temperatura, ↑2,3-DPG → favorece liberação de O₂ nos tecidos
- Desvio à esquerda (↑Sat): alcalose, ↓CO₂, ↓temperatura, carboxiemoglobina (CO) → prejudica liberação de O₂

**CO₂:**
- Bicarbonato (HCO₃⁻): ~70% — CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻ (anidrase carbônica nas hemácias)
- Carbaminoemoglobina: ~23%
- Dissolvido: ~7%

> **Pegadinha:** O CO (monóxido de carbono) tem afinidade pela Hb ~240× maior que o O₂. O envenenamento por CO causa hipoxemia com PaO₂ NORMAL na gasometria convencional — porque a PaO₂ mede O₂ dissolvido, não o ligado à Hb. A oximetria de pulso convencional também pode estar FALSAMENTE NORMAL (lê carboxiemoglobina como oxiemoglobina). O exame correto é a co-oximetria.

---

## Relação Ventilação/Perfusão (V̇/Q̇)

A relação V̇/Q̇ é o índice mais importante para a troca gasosa eficiente. O valor normal global é ~0,8 (4 L/min de ventilação alveolar ÷ 5 L/min de débito cardíaco).

**Variações fisiológicas (Zonas de West — pulmão em posição vertical):**

| Zona | Localização | V̇/Q̇ | PO₂ alveolar | PCO₂ alveolar |
|------|------------|------|-------------|--------------|
| Zona 1 (ápice) | Parte superior | > 1 (V > Q) | Alta (~130 mmHg) | Baixa (~28 mmHg) |
| Zona 2 | Região média | ~1 (equilíbrio) | ~100 mmHg | ~40 mmHg |
| Zona 3 (base) | Base pulmonar | < 1 (Q > V) | Baixa (~89 mmHg) | Alta (~42 mmHg) |

> **Dica de Prova:** Por que a tuberculose prefere o ápice pulmonar? Alta V̇/Q̇ no ápice = alta PO₂ alveolar = ambiente mais rico em O₂, favorecendo o crescimento de M. tuberculosis, que é aeróbio estrito.

**Casos extremos da relação V̇/Q̇:**
- V̇/Q̇ = 0: alvéolo perfundido mas não ventilado → **shunt** (sangue venoso passa sem trocar gases)
- V̇/Q̇ = ∞: alvéolo ventilado mas não perfundido → **espaço morto alveolar**

---

## Mecanismos de Hipoxemia e Hipercapnia

Existem 5 mecanismos de hipoxemia:

| Mecanismo | Exemplo | Responde à O₂ 100%? | Gradiente A-a |
|-----------|---------|----------------------|--------------|
| Baixa PiO₂ (altitude) | Altitude elevada | Sim | Normal |
| Hipoventilação | Sedação, fraqueza muscular | Sim | Normal |
| Distúrbio de difusão | Fibrose, SDRA | Sim | Aumentado |
| V̇/Q̇ desigual | DPOC, asma, pneumonia | Parcialmente | Aumentado |
| Shunt (V̇/Q̇ = 0) | Cardiopatia congênita, SDRA grave | **Não** | Aumentado |

**Gradiente A-a de O₂:**
= PAO₂ − PaO₂ (normal < 10–15 mmHg em jovens; aumenta com idade)
PAO₂ (alveolar) = FiO₂ × (Patm − PH₂O) − PaCO₂/0,8

O shunt é o único mecanismo de hipoxemia que **NÃO responde** adequadamente ao O₂ a 100% — porque o sangue que passa pelo shunt nunca contacta alveólos, por mais O₂ que se ofereça.

> **Pegadinha:** Na **embolia pulmonar (TEP)**, o mecanismo primário é aumento do espaço morto (zona de West com V̇/Q̇ → ∞: alvéolos ventilados sem perfusão). Paradoxalmente, a hipoxemia na TEP muitas vezes se deve ao aumento da V̇/Q̇ desigual global + possível shunt pela reabertura do forame oval.

---

## Pontos-Chave

- Difusão segue Lei de Fick: proporcional a área, solubilidade e gradiente de P; inversamente proporcional à espessura
- CO₂ difunde 20× mais que O₂ (mais solúvel) → hipercapnia é quase sempre por hipoventilação
- PaO₂ normal ~95–100 mmHg; PaCO₂ normal ~40 mmHg; SpO₂ normal ≥ 95%
- Desvio à direita da curva Hb-O₂: acidose, ↑T°, ↑CO₂, ↑2,3-DPG → libera mais O₂ nos tecidos
- V̇/Q̇ global ~0,8; ápice > 1 (mais ventilado); base < 1 (mais perfundida)
- TB prefere ápice: alta PO₂ local (alta V̇/Q̇)
- Shunt (V̇/Q̇ = 0): único mecanismo de hipoxemia que não responde ao O₂ a 100%
- Gradiente A-a elevado + sem resposta ao O₂ = shunt
- TEP: aumento de espaço morto alveolar (V̇/Q̇ → ∞)
- CO (monóxido): PaO₂ normal, SpO₂ normal convencional → diagnóstico por co-oximetria

---

## Ponte com a Clínica

A interpretação correta da gasometria arterial começa exatamente por diferenciar esses mecanismos. Um paciente com PaO₂ de 60 mmHg que não melhora com O₂ a 100% tem quase certamente um **shunt** — seja por cardiopatia congênita com shunt D→E, seja por SDRA grave com alvéolos inundados (V̇/Q̇ = 0). Um paciente com TEP maciço pode ter hipoxemia com PaO₂ que responde parcialmente ao O₂ (espaço morto modulável plus redistribuição de fluxo). Já no paciente com DPOC descompensado, a hipercapnia progressiva indica que a hipoventilação alveolar supera a capacidade de compensação — o gatilho para ventilação mecânica não invasiva (VNI).

---

## Pré-Prova

> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### Síntese para a prova


Lei de Fick: difusão ∝ área × solubilidade × gradiente / espessura. CO₂ 20× mais solúvel: hipercapnia = hipoventilação; hipoxemia pode ser difusão ou V̇/Q̇. PaO₂ normal: ~95–100 mmHg (jovem); cai com idade (~100 − 0,3×idade).

Desvio direito curva Hb: acidose, ↑T°, ↑CO₂, ↑2,3-DPG → libera O₂ nos tecidos (Bohr). V̇/Q̇ = 0 = shunt: único mecanismo que NÃO responde ao O₂ 100%. V̇/Q̇ = ∞ = espaço morto alveolar: TEP é o exemplo clássico.

Gradiente A-a elevado: problema intrapulmonar (difusão, V̇/Q̇ ou shunt); A-a normal = causa extrapulmonar (hipoventilação, altitude). TB no ápice: alta V̇/Q̇ → alta PO₂ local → favorece crescimento de M. tuberculosis. CO: PaO₂ normal (dissolto ok), SpO₂ convencional falsa → co-oximetria para diagnóstico.

SDRA: shunt (alvéolos inundados) + V̇/Q̇ desigual → hipoxemia grave refratária.

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Como diferenciar |
|------------|------------|-----------------|
| Shunt (V̇/Q̇=0) | Espaço morto (V̇/Q̇=∞) | Shunt: perfusado sem ventilação (TEP, hipoxemia refratária); Espaço morto: ventilado sem perfusão |
| Desvio direito | Desvio esquerdo curva Hb | Direito = libera O₂ (acidose, febre); Esquerdo = segura O₂ (alcalose, hipotermia, CO) |
| Hipoxemia por V̇/Q̇ | Hipoxemia por shunt | V̇/Q̇: responde parcialmente ao O₂; Shunt: não responde ao O₂ 100% |
| Gradiente A-a normal | Gradiente A-a elevado | A-a normal + hipoxemia = altitude ou hipoventilação; A-a↑ = problema alvéolo-capilar |
| TEP (espaço morto) | Atelectasia (shunt) | TEP: V̇/Q̇↑ (ventilado + sem perfusão); Atelectasia: V̇/Q̇=0 (perfundido + sem ventilação) |

### Frase-âncora para não esquecer

> "Shunt = sangue que não passa por alvéolo — nenhuma quantidade de oxigênio ajuda. Espaço morto = alvéolo que não é regado — ar desperdiçado sem troca."

---

## Referências

- Guyton AC, Hall JE. *Tratado de Fisiologia Médica*. Elsevier.
- Ganong WF. *Fisiologia Médica*. AMGH/McGraw-Hill.
- Ross MH, Pawlina W. *Histologia: texto e atlas*. Elsevier.
