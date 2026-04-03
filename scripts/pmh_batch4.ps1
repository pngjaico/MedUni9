$utf8NoBom = New-Object System.Text.UTF8Encoding $false
$base = "C:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app"

# ─── PMH A10 ────────────────────────────────────────────────────────────────────
$c = @'
# PMH — Aula 10: Transaminação, Desaminação e Ciclo da Ureia

**Disciplina:** Processos Metabólicos Humanos
**Módulo:** 1 | **Tempo de estudo sugerido:** 10-15 min

---

## Relevância Clínica e Acadêmica

O catabolismo proteico produz amônia (NH₃) — uma molécula altamente tóxica para o sistema nervoso central. O ciclo da ureia, exclusivamente hepático, converte essa amônia em ureia para excreção renal. Doenças hepáticas graves (cirrose, hepatice fulminante) e defeitos genéticos do ciclo (hiperamonemia) causam encefalopatia. As transaminases hepáticas (TGO e TGP — AST e ALT) são os marcadores de lesão hepatocelular aguda mais utilizados na prática clínica diária.

---

## 1. Catabolismo de Aminoácidos — Visão Geral

**Etapas principais:**
1. **Transaminação:** transferência do grupo amino (–NH₂) para α-cetoglutarato → glutamato + novo α-cetoácido
2. **Desaminação oxidativa:** glutamato → α-cetoglutarato + NH₄⁺ (amônia livre)
3. **Disposição do NH₄⁺:** ciclo da ureia no fígado

**Esqueleto carbônico** do aminoácido → piruvato, acetil-CoA, oxaloacetato ou outros intermediários do Krebs → gluconeogênese ou oxidação.

---

## 2. Transaminação

**Enzimas:** aminotransferases (transaminases)
**Cofator:** vitamina B6 (piridoxal fosfato, PLP) — sempre necessário

| Enzima | Sigla antiga | Nome atual | Localização | Marcador de |
|--------|-------------|------------|-------------|------------|
| Glutamato-oxaloacetato transaminase | GOT / **TGO** | **AST (aspartato aminotransferase)** | Fígado, coração, músculo, rim (múltiplos fins) | Lesão hepática, IAM, miosite |
| Glutamato-piruvato transaminase | GPT / **TGP** | **ALT (alanina aminotransferase)** | Fígado (mais específico) | Lesão hepatocelular (mais específica) |

> **Relação AST/ALT:** Se AST/ALT > 2 com ambas elevadas = hepatite alcoólica (doença alcoólica hepática). Se ALT > AST = hepatite viral aguda ou NAFLD. Se AST elevada isolada = infarto do miocárdio (AST é cardíaca também).

---

## 3. Desaminação Oxidativa

**Enzima:** Glutamato desidrogenase (no fígado e rim)
**Reação:** Glutamato + NAD⁺ → α-cetoglutarato + NH₄⁺ + NADH

**Transporte de NH₄⁺ ao fígado (no músculo):**
- NH₄⁺ é tóxico → não viaja livre no sangue
- No músculo: NH₄⁺ + piruvato → alanina (via transaminase) → alanina é exportada ao fígado
- **Ciclo alanina-glicose:** alanina chega ao fígado → transaminação reversa → piruvato → gliconeogênese → glicose → volta ao músculo

---

## 4. Ciclo da Ureia

**Local:** exclusivamente FÍGADO (hepatócitos — mitocôndria + citoplasma)
**Resultado:** 2 NH₄⁺ + CO₂ + 3 ATP + aspartato → ureia + fumarato

### Etapas simplificadas:
1. NH₄⁺ + CO₂ → carbamoil-fosfato (carbamoil-fosfato sintetase I — CPS1; na mitocôndria; requer N-acetilglutamato como ativador)
2. Carbamoil-P + ornitina → citrulina (ornithine transcarbamylase — OTC; mitocôndria)
3. Citrulina sai da mitocôndria + aspartato → argininossuccinato (citoplasma)
4. Argininossuccinato → arginina + fumarato
5. Arginina → ornitina + **ureia** (arginase; libera ureia para sangue → rim)

> Mnemônico para os intermediários: **O**pera **C**om **A**rte: Ornitina → Citrulina → Argininossuccinato → Arginina → (Ureia)

---

## 5. Marcadores de Função Hepática

| Marcador | Avalia | Elevado em |
|----------|--------|-----------|
| **ALT (TGP)** | Integridade hepatocelular | Hepatites virais, NAFLD, hepatotoxicidade |
| **AST (TGO)** | Integridade hepatocelular + músculo | Hepatites, IAM, miosite, doença alcoólica (AST/ALT > 2) |
| **GGT (γ-GT)** | Colestase e uso de álcool | Colestase, alcoolismo (indutor microsomal) |
| **Fosfatase alcalina (FA)** | Colestase, osso | Obstrução biliar, doença óssea (Paget) |
| **Bilirrubina** | Metabolismo da hemoglobina | Icterícia por múltiplas causas |
| **Albumina** | Síntese hepática | Baixa: insuficiência hepática crônica |
| **TP/INR** | Fatores de coagulação (II, V, VII, X — hepáticos) | Elevado: insuficiência hepática |

---

## Erros Clássicos em Prova (Uninove)

- **TGP (ALT) elevada isolada indica IAM:** ALT é específica do fígado. IAM eleva AST (e CK, troponina), não ALT.
- **O ciclo da ureia ocorre no rim:** o ciclo da ureia é exclusivamente HEPÁTICO. O rim reabsorve/excreta ureia, mas não a sintetiza pelo ciclo completo.
- **N-acetilglutamato é produto do ciclo:** NAG é o ATIVADOR alostérico da CPS1 (1ª enzima do ciclo). Sem NAG, o ciclo para.
- **Relação AST/ALT > 2 = hepatite viral:** AST/ALT > 2 = hepatite ALCOÓLICA (álcool interfere no metabolismo da piridoxina, fazendo AST subir mais). Nas hepatites virais, geralmente ALT ≥ AST.
- **A ureia excretada pelo rim indica função renal:** a ureia é produzida pelo fígado e excretada pelo rim. Ureia alta pode ser por insuficiência RENAL (não excreta) ou por hipercatabolismo proteico (produção excessiva) — não necessariamente doença hepática.

---

## Checklist de Revisão

- [ ] Sei que transaminases usam vitamina B6 (PLP) como cofator
- [ ] Sei a diferença clínica entre ALT (fígado-específico) e AST (fígado + músculo/coração)
- [ ] Sei que AST/ALT > 2 sugere hepatite alcoólica
- [ ] Sei o ciclo da ureia com os 5 intermediários (Ornitina→Citrulina→Arginossuccinato→Arginina→Ureia)
- [ ] Sei que o ciclo da ureia é EXCLUSIVAMENTE hepático
- [ ] Sei o papel do N-acetilglutamato como ativador da CPS1

---

## Ponte com a Clínica

Paciente com cirrose hepática avançada apresenta confusão mental progressiva, asterixis (flapping tremor) e EEG com ondas trifásicas — encefalopatia hepática. O mecanismo: sem hepatócitos funcionantes → ciclo da ureia comprometido → NH₃ não convertida em ureia → acumula no sangue → cruza a barreira hematoencefálica → altera neurotransmissão e metabolismo energético neuronal (amônia inibe α-cetoglutarato desidrogenase → Krebs freia nos neurônios). Tratamento: lactulose (acidifica o cólon → converte NH₃ em NH₄⁺ não absorvível), rifaximina (reduz bactérias produtoras de amônia), restrição proteica cuidadosa, rifaximina.

---

## Pré-Prova

> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### O que você PRECISA saber

- **ALT (TGP):** específica do fígado (hepatite viral, NAFLD)
- **AST (TGO):** fígado + coração + músculo (IAM, doença alcoólica)
- **AST/ALT > 2:** hepatite alcoólica
- **Ciclo da Ureia:** SOMENTE no fígado; intermediários = Ornitina-Citrulina-Arginossuccinato-Arginina-Ureia
- **CPS1:** 1ª enzima; ativada por N-acetilglutamato; mitocôndria
- **Transaminases:** cofator B6 (piridoxal fosfato)

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Como diferenciar |
|------------|------------|-----------------|
| ALT (TGP) | AST (TGO) | ALT: específica do fígado; AST: fígado + coração + músculo |
| Hepatite viral | Hepatite alcoólica | Viral: ALT ≥ AST; Alcoólica: AST/ALT > 2 |
| Hiperamonemia hepática | Insuficiência renal (ureia alta) | NH₃ alta: ciclo da ureia comprometido (fígado); Ureia alta: não excreção (rim) |
| Ciclo da ureia | Ciclo do ácido cítrico | Ureia: fígado, disposição de NH₃; Krebs: mitocôndria todas as células, energia |

### Frase-âncora para não esquecer

> "ALT = fígado; AST = fígado+coração. AST/ALT > 2 = álcool. Ciclo ureia: Ornitina-Citrulina-Arginina-Ureia — só no fígado."
'@
[System.IO.File]::WriteAllText("$base\data\materiais\pmh\pmh_a10.md", $c, $utf8NoBom)
[System.IO.File]::WriteAllText("$base\materiais\modulo1\pmh\pmh_a10.md", $c, $utf8NoBom)
Write-Host "pmh_a10 OK"

# ─── PMH A11 ────────────────────────────────────────────────────────────────────
$c = @'
# PMH — Aula 11: Aplicações Clínicas de Proteínas e Aminoácidos

**Disciplina:** Processos Metabólicos Humanos
**Módulo:** 1 | **Tempo de estudo sugerido:** 10-15 min

---

## Relevância Clínica e Acadêmica

Erros inatos do metabolismo de aminoácidos são doenças raras individualmente, mas coletivamente frequentes — e estão no "teste do pezinho" ampliado. Fenilcetonúria (PKU) é a mais conhecida: causa deficiência intelectual grave se não tratada, mas completamente prevenida com dieta. Hiperamonemia destrói neurônios. A desnutrição proteica (kwashiorkor) é uma emergência pediátrica em países de baixa renda. Caquexia oncológica é marcador de prognóstico independente no câncer. O entendimento bioquímico dessas condições é o que permite compreender o tratamento.

---

## 1. Fenilcetonúria (PKU)

| Aspecto | Detalhes |
|---------|----------|
| **Enzima deficiente** | Fenilalanina hidroxilase (FAH) — converte Phe → Tyr; requer BH4 (tetra-hidrobiopterina) |
| **Metabolismo alternativo** | Phe → fenilpiruvato, fenilacetato, fenilactato (metabolitos neurotóxicos) |
| **Manifestação sem tratamento** | Deficiência intelectual progressiva, cabelo/pele claros (melanina depende de tirosina), odor de "rato" (ácido fenilacético) |
| **Diagnóstico** | Triagem neonatal (7° dia de vida) — Guthrie (bacterioinihibição) ou MS/MS |
| **Tratamento** | Dieta pobre em fenilalanina (restrição de proteínas naturais; fórmulas especiais); BH4 (sapropterina) nas formas BH4-responsivas |

---

## 2. Outras Aminoacidopatias Cobradas

| Doença | Enzima | Substância acumulada | Manifestação principal |
|--------|--------|---------------------|----------------------|
| **Alcaptonúria** | Oxidase do ácido homogentísico | Ácido homogentísico | Urina escurece ao ar, artropatia degenerativa (ocronose), calcificações |
| **Tirosinemia tipo I** | Fumarilacetoacetase | Fumarilacetoacetato | Cirrose hepática, crise neurológica, tubulopatia renal (síndrome de Fanconi) |
| **Homocistinúria** | Cistationina β-sintetase (deficiência mais comum) | Homocisteína | Deficiência intelectual, luxação do cristalino (ectopia lentis), tromboembolismo, marfanoide |
| **Doença da urina com odor de xarope de bordo (MSUD)** | α-cetoácido desidrogenase (ramificados) | Leucina, isoleucina, valina (ramificados) | Encefalopatia, urina com odor doce, cetoacidose neonatal |

---

## 3. Hiperamonemia — Defeitos do Ciclo da Ureia

**Causa mais comum de defeito do ciclo da ureia:** Deficiência de OTC (ornitina transcarbamilase) — ligada ao X
**Manifestação:** Letargia, vômitos, encefalopatia nos primeiros dias de vida (após ingesta proteica); alcalose respiratória (NH₃ estimula respiração), seguida de encefalopatia progressiva

| Tratamento da Hiperamonemia | Mecanismo |
|----------------------------|-----------|
| Benzoato de sódio | Liga-se à glicina → hipurato excretado na urina (elimina 1N) |
| Fenilbutirato de sódio | Convertido a fenilacetato → liga-se à glutamina → fenilacetilglutamina excretada (elimina 2N) |
| Dieta pobre em proteínas | Reduz produção de NH₃ |
| Hemodiálise | Urgência: remove NH₃ rapidamente |

---

## 4. Desnutrição Proteica

| | **Kwashiorkor** | **Marasmo** |
|-|----------------|------------|
| **Mecanismo** | Deficiência proteica com calorias relativamente preservadas | Deficiência calórica global (proteínas + energia) |
| **Albumina** | Baixa (edema por hipoalbuminemia) | Normal ou levemente reduzida |
| **Aspecto** | Edema, barriga distendida ("barriga d'água"), cabelo despigmentado (sinal de bandeira) | Desnutrição severa, "pele-e-osso", sem edema |
| **Imunidade** | Comprometida (infecções oportunistas) | Comprometida |

---

## 5. Caquexia Oncológica

**Definição:** perda involuntária de peso > 5% em 12 meses + inflamação crônica (IL-6, TNF-α, IL-1β) em contexto de câncer avançado.
**Mecanismo bioquímico:**
- Proteólise muscular exacerbada (TNF-α ativa ubiquitina-proteassoma)
- Lipólise aumentada (TNF-α inibe lipase lipoproteica)
- Gliconeogênese aumentada (ciclo alanina-glicose em overdrive)
- Anorexia central (citocinas cruzam a BHE → suprimem apetite)

**Impacto clínico:** redução de resposta à quimioterapia, piora da qualidade de vida, mortalidade aumentada — caquexia mata mais que o tumor em ~20% dos casos de câncer.

---

## Erros Clássicos em Prova (Uninove)

- **PKU: o acúmulo de tirosina causa dano:** na PKU, a tirosina fica BAIXA (pois não consegue ser produzida da fenilalanina). É o acúmulo de fenilalanina e seus metabólitos tóxicos que causam dano.
- **Kwashiorkor = marasmo:** kwashiorkor é deficiência proteica com edema e albumina baixa. Marasmo é deficiência calórica global sem edema. O clínico mais diferencia pelo edema.
- **Alcaptonúria causa dano neurológico:** alcaptonúria causa artropatia (ocronose) e urina escura, mas SEM deficiência intelectual (ao contrário da PKU).
- **Homocistinúria = homocistinemia autoimune:** homocistinúria é um erro inato do metabolismo (cistationina β-sintetase). Não confundir com hiperhomocisteinemia adquirida (deficiência de B6, B12, ácido fólico) — que é mais comum e menos grave.
- **Caquexia = emagrecimento por falta de comida:** caquexia é um processo bioquímico ativo de proteólise e lipólise mediado por citocinas inflamatórias — não é simplesmente anorexia.

---

## Checklist de Revisão

- [ ] Sei a enzima deficiente na PKU (fenilalanina hidroxilase), o cofator (BH4) e o tratamento (dieta + sapropterina)
- [ ] Sei que na PKU o problema é acúmulo de Phe (não de Tyr) e que Tyr fica baixa
- [ ] Distingo kwashiorkor (proteico, edema, albumina baixa) de marasmo (calórico, sem edema)
- [ ] Sei o tratamento da hiperamonemia aguda (benzoato + fenilbutirato + diálise)
- [ ] Sei o mecanismo de caquexia (citocinas → proteólise ubiquitina-proteassoma + gliconeogênese)

---

## Ponte com a Clínica

Recém-nascido com vômitos, letargia e encefalopatia após as primeiras mamadas. NH₃ = 450 μmol/L (referência: < 50). Diagnóstico diferencial: defeito do ciclo da ureia. Deficiência de OTC (a mais comum, ligada ao X): meninos afetados na forma grave neonatal; meninas portadoras podem ter formas parciais no adulto precipitadas por estresse (cirurgia, parto). O tratamento de urgência é: suspender ingestão proteica, glicose + lipídios IV (fornecer calorias sem nitrogênio), benzoato/fenilbutirato IV, hemodiálise se NH₃ > 300 μmol/L. O entendimento bioquímico do ciclo é a base do algoritmo de tratamento.

---

## Pré-Prova

> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### O que você PRECISA saber

- **PKU:** FAH deficiente, BH4 cofator, Phe acumula → dano SNC; Tyr fica baixa (sem melanina = pele clara)
- **Homocistinúria:** cistationina β-sintetase; ectopia lentis + trombose + Marfanoide
- **MSUD:** aminoácidos ramificados; odor de xarope de bordo; cetoacidose neonatal
- **Kwashiorkor:** proteínas, edema, albumina baixa. **Marasmo:** calórico, sem edema
- **Hiperamonemia:** defeito ciclo ureia; tratamento = benzoato + fenilbutirato + dialise

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Como diferenciar |
|------------|------------|-----------------|
| PKU | Alcaptonúria | PKU: SNC, fenilalanina; Alcaptonúria: articulações/urina escura, sem dano SNC |
| Kwashiorkor | Marasmo | Kwashiorkor: edema, albumina baixa; Marasmo: sem edema, caquexia severa |
| PKU (fenilalanina hidroxilase) | MSUD (α-cetoácido DH ramificados) | PKU: Phe → neurotóxico; MSUD: leucina/iso/val → cetoacidose + encefalopatia |
| Homocistinúria | Síndrome de Marfan | Homocistinúria: ectopia lentis INFERIOR; Marfan: ectopia lentis SUPERIOR |

### Frase-âncora para não esquecer

> "PKU: fenilalanina sobe, tirosina cai — SNC. Kwashiorkor: edema, albumina baixa. MSUD: ramificados + odor bordo."
'@
[System.IO.File]::WriteAllText("$base\data\materiais\pmh\pmh_a11.md", $c, $utf8NoBom)
[System.IO.File]::WriteAllText("$base\materiais\modulo1\pmh\pmh_a11.md", $c, $utf8NoBom)
Write-Host "pmh_a11 OK"

Write-Host "=== PMH Batch 4 (a10-a11) concluido ==="
