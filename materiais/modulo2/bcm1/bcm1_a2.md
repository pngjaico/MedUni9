# BCM1 — Aula 2: Tampões Biológicos e Gasometria

## Relevância Clínica e Acadêmica

A gasometria arterial é o exame mais interpretado em UTI e pronto-socorro, e nenhum médico pode trabalhar em urgência sem dominar a leitura dos distúrbios ácido-base. A Uninove integra este tema de bioquímica básica com a fisiologia renal e respiratória, tornando-o um dos tópicos de maior rendimento por aula. Tampões biológicos, compensações e regras práticas de interpretação gasométrica são ferramentas que o aluno usará diariamente desde o internato.

Além do valor clínico imediato, este conteúdo é cobrado também em questões de fisiologia respiratória e nefrologia. Dominar a equação de Henderson-Hasselbalch e os sistemas tampão é a base de toda a fisiopatologia ácido-base.

### Figura sugerida

**Figura-ID:** `BCM1-A2-F01`

- **Momento:** após o bloco de relevância (reserva editorial para imagem no app; aparece inline quando houver URL no catálogo).
- **O que mostrar:** definir na produção — deve ilustrar o tema central da aula de forma clara em mobile.
- **Tipo sugerido:** esquema didático | ilustração estilo atlas | infográfico | foto contextual | outro.
- **Legenda (rascunho):** a fixar junto da imagem final (campo legenda em data/materiais_figuras.json).
- **Notas (opcional):** pesquisar no Wikimedia Commons (buscaCommonsEn / buscaCommonsPt no JSON); licenças livres e atribuição.




---



## Conceitos de pH e Ácido-Base

**pH = −log[H⁺]**. O pH arterial normal é **7,35–7,45** (acidemia < 7,35; alcalemia > 7,45).

Ácido de Brønsted: doador de próton (H⁺). Base: receptor de próton.
Ácido forte (HCl, H₂SO₄): ionização completa. Ácido fraco (H₂CO₃, ácido láctico): ionização parcial — é a base dos sistemas tampão.

---

## Sistemas Tampão Biológicos

Um tampão é uma solução que resiste a mudanças de pH quando ácidos ou bases são adicionados. Compõe-se de ácido fraco + sua base conjugada.

**1. Sistema Bicarbonato/CO₂ (principal tampão extracelular):**

$$\text{CO}_2 + \text{H}_2\text{O} \xrightarrow{\text{anidrase carbônica}} \text{H}_2\text{CO}_3 \xrightarrow{} \text{H}^+ + \text{HCO}_3^-$$

Equação de Henderson-Hasselbalch:

$$\text{pH} = 6{,}1 + \log\frac{[\text{HCO}_3^-]}{0{,}03 \times \text{PCO}_2}$$

Valores normais: pH 7,40; HCO₃⁻ = 24 mEq/L; PCO₂ = 40 mmHg.
Numericamente: log(24 / (0,03 × 40)) = log(24/1,2) = log(20) ≈ 1,3 → 6,1 + 1,3 = **7,4** ✓

**2. Sistema Fosfato (principal tampão intracelular e urinário):**
H₂PO₄⁻ ⇌ H⁺ + HPO₄²⁻; pKa ~6,8 (ideal para pH intracelular ~7,0)

**3. Proteínas/Hemoglobina (principal tampão intracelular):**
Histidinas carregam H⁺; hemoglobina desoxigenada tem maior capacidade tampão (efeito Haldane)

**4. Amônia (tampão urinário — regulação renal):**
NH₃ + H⁺ → NH₄⁺ (excreção renal de ácido)

---

## Quatro Distúrbios Primários

| Distúrbio | pH | PaCO₂ | HCO₃⁻ | Causa exemplar |
|-----------|----|----|-------|---------------|
| Acidose respiratória | ↓ | **↑** | ↑ (compensação) | DPOC descompensado, depressão do SNC |
| Alcalose respiratória | ↑ | **↓** | ↓ (compensação) | Hiperventilação, TEP, altitude |
| Acidose metabólica | ↓ | ↓ (compensação) | **↓** | Cetoacidose, acidose lática, IRC, diarreia |
| Alcalose metabólica | ↑ | ↑ (compensação) | **↑** | Vômito, diurético de alça, hiperaldosteronismo |

> **Dica de Prova:** O distúrbio PRIMÁRIO sempre tem pH anormal. O componente que causa o distúrbio (PCO₂ ou HCO₃⁻) vai na direção do pH (ambos caem na acidose; ambos sobem na alcalose). O componente que COMPENSA vai no mesmo sentido, mas de forma secundária e parcial.

---

## Compensações Esperadas (Regras Práticas)

| Distúrbio | Compensação esperada |
|-----------|---------------------|
| Acidose respiratória aguda | HCO₃⁻ ↑ 1 mEq/L para cada 10 mmHg de ↑PCO₂ |
| Acidose respiratória crônica | HCO₃⁻ ↑ 3,5 mEq/L para cada 10 mmHg de ↑PCO₂ |
| Alcalose respiratória aguda | HCO₃⁻ ↓ 2 mEq/L para cada 10 mmHg de ↓PCO₂ |
| Alcalose respiratória crônica | HCO₃⁻ ↓ 5 mEq/L para cada 10 mmHg de ↓PCO₂ |
| Acidose metabólica | PCO₂ = 1,5 × HCO₃⁻ + 8 ± 2 (fórmula de Winter) |
| Alcalose metabólica | PCO₂ ↑ 0,7 mmHg para cada 1 mEq/L de ↑HCO₃⁻ |

Se a compensação estiver ALÉM do esperado → distúrbio misto.

---

## Ânion Gap (AG)

$$\text{AG} = [\text{Na}^+] - ([\text{Cl}^-] + [\text{HCO}_3^-])$$

Valor normal: **8–12 mEq/L** (alguns labs: 12 ± 4).

**Acidose metabólica com AG elevado (MUDPILES + L):**
- **M**etanol, **U**remia, **D**iabetic ketoacidosis (cetoacidose), **P**araldehyde, **I**Niazida/Isoniazida, **L**actic acidosis (acidose láctica), **E**thanol, **S**alicilatos

**Acidose metabólica com AG normal (hiperclorêmica):**
- Diarreia (perda de HCO₃⁻), acidose tubular renal, fístula pancreática, infusão de NaCl

> **Pegadinha:** No ânion gap elevado, os ácidos adicionados consomem HCO₃⁻ sem aumentar Cl⁻ → AG sobe. Na acidose hiperclorêmica, o HCO₃⁻ é substituído por Cl⁻ → AG normal, mas Cl⁻ sobe.

---

## Interpretação Passo a Passo da Gasometria

1. pH: acidemia < 7,35 / alcalemia > 7,45
2. Identifique o distúrbio primário: PCO₂ alto na acidose? → Respiratória. HCO₃⁻ baixo? → Metabólica
3. Calcule a compensação esperada (tabela acima); se fora do esperado → distúrbio misto
4. Na acidose metabólica: calcule o ânion gap
5. Se AG elevado: calcule o delta-delta = (AG − 12) / (24 − HCO₃⁻) para detectar distúrbio misto oculto

---

## Pontos-Chave

- pH normal: 7,35–7,45; HCO₃⁻ normal: 24 mEq/L; PCO₂ normal: 40 mmHg
- Sistema bicarbonato: tampão extracelular principal; controlado pelos rins (HCO₃⁻) e pulmões (CO₂)
- Na acidose/alcalose: componente primário e compensação vão no mesmo sentido
- Fórmula de Winter (acidose metabólica): PCO₂ esperada = 1,5 × HCO₃⁻ + 8 ± 2
- AG = Na − (Cl + HCO₃⁻); normal 8–12; AG elevado = ácido exógeno ou endógeno
- MUDPILES: causas de acidose metabólica com AG elevado
- Acidose hiperclorêmica: AG normal, Cl⁻ alto; causas: diarreia, ATR, NaCl excessivo
- Compensação: rins demoram horas-dias; pulmões demoram minutos-horas
- Vômito → alcalose metabólica hipoclorêmica por perda de HCl (gástrico)
- Diarreia → acidose metabólica por perda de HCO₃⁻ pancreático/intestinal

---

## Ponte com a Clínica

O paciente com **cetoacidose diabética (CAD)** apresenta pH baixo, HCO₃⁻ baixo, AG elevado (por cetoácidos) e PCO₂ baixa (compensação de Kussmaul — respiração profunda e rápida que reduz o CO₂). Se a PCO₂ for menor que o esperado pela fórmula de Winter, há alcalose respiratória associada (ex.: sepse concomitante). Se for maior, acidose respiratória associada (ex.: pneumonia grave). Essa análise de distúrbio misto é exatamente o que distingue o médico que interpreta a gasometria do que apenas lista os valores.

---

## Pré-Prova

> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### O que você PRECISA saber

- **pH normal**: 7,35–7,45; **PCO₂ normal**: 40 mmHg; **HCO₃⁻ normal**: 24 mEq/L
- **Acidose respiratória**: PCO₂ ↑, pH ↓ (DPOC, depressão ventilatória)
- **Alcalose respiratória**: PCO₂ ↓, pH ↑ (hiperventilação, TEP, ansiedade)
- **Acidose metabólica**: HCO₃⁻ ↓, pH ↓; PCO₂ cai compensatoriamente
- **Alcalose metabólica**: HCO₃⁻ ↑, pH ↑ (vômito, diurético)
- **Fórmula de Winter**: PCO₂ esperada = 1,5 × HCO₃⁻ + 8 ± 2 (acidose metabólica)
- **AG = Na − (Cl + HCO₃⁻)**: normal 8–12; AG alto → MUDPILES
- **Diarreia → acidose hiperclorêmica (AG normal)**; **vômito → alcalose hipoclorêmica**
- **Compensação renal**: lenta (horas a dias); **compensação respiratória**: rápida (minutos)
- **Delta-delta**: para detectar distúrbio misto oculto em AG elevado

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Como diferenciar |
|------------|------------|-----------------|
| Acidose respiratória | Acidose metabólica | Respiratória: PCO₂ ↑ (primário); Metabólica: HCO₃⁻ ↓ (primário) |
| AG elevado | AG normal (hiperclorêmica) | AG alto = ácido exógeno consome HCO₃⁻ (cetoacidose). AG normal = HCO₃⁻ trocado por Cl⁻ (diarreia) |
| Diarreia | Vômito | Diarreia: perde HCO₃⁻ → acidose metabólica; Vômito: perde HCl → alcalose metabólica |
| Compensação respiratória | Compensação renal | Respiratória = minutos; Renal = horas a dias; crônica = melhor compensada |
| Acidose aguda | Acidose crônica | Aguda: ↑HCO₃⁻ 1 mEq / 10 ↑PCO₂; Crônica: ↑HCO₃⁻ 3,5 mEq / 10 ↑PCO₂ |

### Frase-âncora para não esquecer

> "Pulmão corrige em minutos; rim corrige em dias. Distúrbio primário e compensação vão sempre no mesmo sentido — se não forem, desconfie do misto."

---

## Referências

- Alberts B et al. *Fundamentos de Biologia Celular e Molecular*. Artmed.
- Junqueira LC, Carneiro J. *Histologia Básica*. Guanabara Koogan.
- Lodish H et al. *Biologia Celular e Molecular*. Artmed.
