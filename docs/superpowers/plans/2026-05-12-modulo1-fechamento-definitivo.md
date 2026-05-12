# Modulo 1 Fechamento Definitivo Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** fechar o Modulo 1 de forma auditavel, sem fingir que validacao local equivale a produto final.

**Architecture:** manter o conteudo ja aprovado e resolver somente os bloqueios de fechamento: contrato global de materiais, ruido de essenciais ja triadas, relatorio de fechamento e rodada visual. Nenhuma reescrita ampla de aula deve ocorrer aqui.

**Tech Stack:** arquivos estaticos Markdown/JSON do MedGradPlus, Node scripts locais, validadores `lint_ciclo_basico_v3`, `validate_ciclo_basico_aula`, `validate:materiais`, auditorias de questoes/flashcards.

---

## Evidencia fresca da revisao

Comandos rodados nesta revisao:

```powershell
node scripts/report_modulo1_status.mjs
npm run validate:questoes
npm run audit:questoes
npm run audit:essenciais:local
node scripts/audit_flashcards.cjs
npm run validate:materiais
# Malha local completa: lint_ciclo_basico_v3 + validate_ciclo_basico_aula nas 54 aulas do Modulo 1
```

Estado atual confirmado:

- Modulo 1 em escopo: 54 aulas (`bmf1`, `pmh`, `sus`, `semiologia1`; `pe1` fora).
- Relatorio local: 54/54 aulas limpas, 1097 questoes vinculadas, 648 essenciais, 648 flashcards, 64 decisoes visuais.
- Por materia: BMF1 22/22 OK, PMH 14/14 OK, SUS 9/9 OK, Semiologia1 9/9 OK.
- PMH: 14 mapas unicos, 14 pontes unicas, zero Mini Quiz generico.
- Flashcards do Modulo 1: zero frente longa, zero metatexto, zero explicacao vazia.
- `npm run validate:questoes`: 4965 questoes consistentes com catalogo.
- `npm run audit:questoes`: zero problema estrutural de mapeamento.
- `node scripts/audit_flashcards.cjs`: banco global com 3792 cards, zero explicacao vazia; ainda ha 6 frentes longas e 3 metalinguagens fora do Modulo 1.
- Malha local completa do Modulo 1: 54/54 passaram em `lint_ciclo_basico_v3` e `validate_ciclo_basico_aula`.

Bloqueios reais para chamar de encerrado:

1. `npm run validate:materiais` ainda acusa 13 aulas do Modulo 1 por falta de `### Frase-âncora para não esquecer`:
   - `sus_a1`, `sus_a2`, `sus_a8`, `sus_a9`;
   - `semio1_a1` a `semio1_a9`.
2. O relatorio ainda mostra 26 essenciais suspeitas no Modulo 1, embora elas ja tenham sido triadas manualmente. O fechamento precisa diferenciar `suspeita pendente` de `suspeita revisada/falso positivo`.
3. Figuras: 64 decisoes visuais existem, mas 63 nao tem `urlImagem`; isso nao bloqueia fechamento textual, mas bloqueia fechamento premium visual/vendavel.

## Regra de execucao

- Nao refatorar material inteiro.
- Nao mexer em questoes/cards bons.
- Nao usar API externa.
- Nao abrir navegador.
- Nao corrigir Modulos 2-6 neste plano.
- Cada alteracao textual deve tocar os dois espelhos quando houver material: `data/materiais/...` e `materiais/modulo1/...`.

---

### Task 1: Congelar snapshot e registrar estado inicial

**Files:**
- Read: `data/agent_logs/modulo1_status_report_2026-05-12.json`
- Read: `data/agent_logs/modulo1_essenciais_triage_2026-05-12.json`
- Modify: `data/agent_logs/modulo1_final_closure_2026-05-12.md`

- [ ] **Step 1: Rodar status de entrada**

Run:

```powershell
git status --short -- data/questoes.json data/flashcards.json data/materiais/sus data/materiais/semiologia1 materiais/modulo1/sus materiais/modulo1/semiologia1 data/materiais_figuras.json
node scripts/report_modulo1_status.mjs
```

Expected:

- Sem alteracao inesperada nos arquivos do Modulo 1 enquanto esta task roda.
- `cleanLessons` deve ficar em 54.

- [ ] **Step 2: Criar log de fechamento**

Create `data/agent_logs/modulo1_final_closure_2026-05-12.md` with:

```markdown
# Fechamento definitivo do Modulo 1 - 2026-05-12

## Snapshot de entrada

- Escopo: bmf1, pmh, sus, semiologia1; pe1 fora.
- Aulas limpas no relatorio local: 54/54.
- Essenciais: 648.
- Flashcards: 648.
- Pendencias antes do fechamento: 13 frases-ancora ausentes no validador global, 26 suspeitas ja triadas a reconciliar, 63 imagens sem URL.
```

---

### Task 2: Corrigir o bloqueio global de materiais no Modulo 1

**Files:**
- Modify pairs:
  - `data/materiais/sus/sus_a1.md` and `materiais/modulo1/sus/sus_a1.md`
  - `data/materiais/sus/sus_a2.md` and `materiais/modulo1/sus/sus_a2.md`
  - `data/materiais/sus/sus_a8.md` and `materiais/modulo1/sus/sus_a8.md`
  - `data/materiais/sus/sus_a9.md` and `materiais/modulo1/sus/sus_a9.md`
  - `data/materiais/semiologia1/semio1_a1.md` through `semio1_a9.md`
  - `materiais/modulo1/semiologia1/semio1_a1.md` through `semio1_a9.md`

- [ ] **Step 1: Inserir `### Frase-âncora para não esquecer` nas 13 aulas**

Insert after `### Diferenciações` block, matching the pattern already used by `sus_a3` and `pmh_a1`.

Use these exact anchors:

```markdown
sus_a1: > **A doença aparece no corpo, mas nasce também no território; prevenção muda a linha, promoção muda o cenário.**
sus_a2: > **Antes do SUS, acesso seguia vínculo e campanha; depois do SUS, saúde passa a ser direito de cidadania.**
sus_a8: > **APS forte cadastra, acolhe, acompanha e coordena; não é pronto atendimento barato.**
sus_a9: > **Genograma mostra família, ecomapa mostra rede; ferramenta boa vira plano, não desenho bonito.**
semio1_a1: > **Primeiro padrão, origem e red flags; depois teste especial.**
semio1_a2: > **OPQRST transforma dor em hipótese; red flag transforma hipótese em prioridade.**
semio1_a3: > **Inspecione antes de tocar: global, bilateral, segmentar e dinâmico.**
semio1_a4: > **Palpe comparando e localizando; dor sem mapa vira chute.**
semio1_a5: > **Ativa testa paciente; passiva testa articulação; força testa sistema motor.**
semio1_a6: > **Nomear síndrome vem depois de excluir urgência.**
semio1_a7: > **OSCE bom é segurança, sequência e raciocínio verbalizado.**
semio1_a8: > **Ambulatório bom muda plano real, não só preenche SOAP.**
semio1_a9: > **Reunião clínica forte prioriza risco, hipótese e plano rastreável.**
```

- [ ] **Step 2: Validar espelhos e aulas tocadas**

Run:

```powershell
foreach ($a in @('sus_a1','sus_a2','sus_a8','sus_a9','semio1_a1','semio1_a2','semio1_a3','semio1_a4','semio1_a5','semio1_a6','semio1_a7','semio1_a8','semio1_a9')) {
  node scripts/lint_ciclo_basico_v3.mjs $a
  node scripts/validate_ciclo_basico_aula.mjs $a
}
npm run validate:materiais
```

Expected:

- As 13 aulas tocadas passam em linter e validador local.
- `npm run validate:materiais` nao deve listar nenhuma aula do Modulo 1. Pode continuar falhando por Modulos 2, 5 ou 6; isso deve ser registrado como fora do fechamento do Modulo 1.

---

### Task 3: Reconciliar as 26 essenciais suspeitas ja triadas

**Files:**
- Modify: `scripts/report_modulo1_status.mjs`
- Read: `data/agent_logs/modulo1_essenciais_triage_2026-05-12.json`
- Modify: `data/agent_logs/modulo1_status_report_2026-05-12.md`
- Modify: `data/agent_logs/modulo1_status_report_2026-05-12.json`

- [ ] **Step 1: Fazer o relatorio consumir a triagem**

In `scripts/report_modulo1_status.mjs`, load `data/agent_logs/modulo1_essenciais_triage_2026-05-12.json` when present and calculate:

```js
const triagedIds = new Set((triage.decisions || []).map((item) => Number(item.id)));
const suspiciousTriaged = suspiciousM1.filter((item) => triagedIds.has(Number(item.id)));
const suspiciousUntriaged = suspiciousM1.filter((item) => !triagedIds.has(Number(item.id)));
```

Expose in report:

```js
essenciaisTriage: {
  reviewed: triage.summary?.reviewed || 0,
  triagedSuspicious: suspiciousTriaged.length,
  untriagedSuspicious: suspiciousUntriaged.length,
  decisions: triage.summary || null,
}
```

- [ ] **Step 2: Regenerar relatorio**

Run:

```powershell
node scripts/report_modulo1_status.mjs
```

Expected:

- `suspiciousEssentials` may remain 26 as raw heuristic.
- `essenciaisTriage.untriagedSuspicious` must be 0.
- The Markdown must say that the remaining 26 are heuristica revisada, not pendencia semantica aberta.

---

### Task 4: Declarar corretamente o status das imagens

**Files:**
- Read: `data/materiais_figuras.json`
- Modify: `data/agent_logs/modulo1_final_closure_2026-05-12.md`
- Optional later: `data/materiais_figuras.json`

- [ ] **Step 1: Contar status visual do Modulo 1**

Run:

```powershell
@'
const fs = require('fs');
const materias = JSON.parse(fs.readFileSync('data/materias.json','utf8'));
const raw = JSON.parse(fs.readFileSync('data/materiais_figuras.json','utf8'));
const figs = Array.isArray(raw) ? raw : (raw.entries || raw.figuras || raw.items || []);
const m1 = new Set();
for (const [id,m] of Object.entries(materias)) {
  if (Number(m.modulo) === 1 && id !== 'pe1') for (const a of m.aulas || []) m1.add(a.id);
}
const counts = {};
let noUrl = 0;
for (const f of figs.filter(f => m1.has(f.aula || f.aula_id || f.aulaId || f.tema))) {
  counts[f.status || 'sem_status'] = (counts[f.status || 'sem_status'] || 0) + 1;
  if (!(f.urlImagem || f.url || f.image || f.src)) noUrl += 1;
}
console.log(JSON.stringify({ counts, noUrl }, null, 2));
'@ | node -
```

Expected current baseline:

```json
{
  "counts": {
    "pendente": 43,
    "encontrada": 1,
    "pendente_curadoria": 20
  },
  "noUrl": 63
}
```

- [ ] **Step 2: Decidir fechamento textual vs fechamento visual**

Record exactly this distinction:

```markdown
## Status visual

- Fechamento textual/conteudo: pode ser aprovado apos Tasks 2 e 3.
- Fechamento premium visual: nao esta pronto; 63/64 decisoes visuais ainda nao possuem URL/imagem final.
- Proxima rodada visual: BMF1 primeiro, depois Semiologia1 spots, depois PMH/SUS apenas onde esquema realmente melhora aprendizagem.
```

---

### Task 5: Validacao final de fechamento textual

**Files:**
- Modify: `data/agent_logs/modulo1_final_closure_2026-05-12.md`
- Modify: `docs/CICLO_BASICO_TAREFAS.md`
- Modify: `data/agent_logs/modulo1_continuous_run.md`

- [ ] **Step 1: Rodar a cadeia final**

Run:

```powershell
npm run validate:questoes
npm run audit:questoes
npm run audit:essenciais:local
node scripts/audit_flashcards.cjs
node scripts/report_modulo1_status.mjs
node scripts/audit_ciclo_basico_report.mjs
node scripts/generate_ciclo_basico_queue.mjs
```

Then rerun the 54 local checks:

```powershell
$lessons = @('sus_a1','sus_a2','sus_a3','sus_a4','sus_a5','sus_a6','sus_a7','sus_a8','sus_a9','semio1_a1','semio1_a2','semio1_a3','semio1_a4','semio1_a5','semio1_a6','semio1_a7','semio1_a8','semio1_a9','bmf1_a1','bmf1_a2','bmf1_a3','bmf1_a4','bmf1_a5','bmf1_a6','bmf1_a7','bmf1_a8','bmf1_a9','bmf1_a10','bmf1_a11','bmf1_a12','bmf1_a13','bmf1_a14','bmf1_a15','bmf1_a16','bmf1_a17','bmf1_a18','bmf1_a19','bmf1_a20','bmf1_a21','bmf1_a22','pmh_a1','pmh_a2','pmh_a3','pmh_a4','pmh_a5','pmh_a6','pmh_a7','pmh_a8','pmh_a9','pmh_a10','pmh_a11','pmh_a12','pmh_a13','pmh_a14')
foreach ($a in $lessons) {
  node scripts/lint_ciclo_basico_v3.mjs $a
  node scripts/validate_ciclo_basico_aula.mjs $a
}
```

Expected:

- `report_modulo1_status`: 54/54 clean.
- `essenciaisTriage.untriagedSuspicious`: 0.
- `module1FlashcardIssues`: empty arrays.
- All 54 local checks pass.
- `npm run validate:materiais` has no Modulo 1 entries, even if still failing globally for other modules.

- [ ] **Step 2: Atualizar docs de retomada**

Append to `docs/CICLO_BASICO_TAREFAS.md` and `data/agent_logs/modulo1_continuous_run.md`:

```markdown
## Modulo 1 - fechamento textual aprovado

- Escopo: bmf1, pmh, sus, semiologia1; pe1 fora.
- Aulas: 54/54 limpas no relatorio local e nos validadores por aula.
- Essenciais: 648/648; suspeitas restantes sao heuristica triada, sem pendencia aberta.
- Flashcards: 648/648; sem explicacao vazia/metatexto/frente longa no Modulo 1.
- Materiais: sem pendencia de Modulo 1 no validador global de materiais.
- Pendencia nao bloqueante: rodada visual premium, pois 63/64 decisoes visuais ainda precisam de imagem final/URL.
```

---

## Plano de rodada visual posterior

Nao misturar com fechamento textual. Depois que Tasks 1-5 passarem:

1. BMF1: curar imagem anatomica/histologica/fisiologica por aula; prioridade alta porque a materia depende de visual.
2. Semiologia1: preencher spots/fluxos que mostrem exame, red flags, SOAP e apresentacao de caso; evitar imagem decorativa.
3. PMH: usar esquemas de metabolismo somente onde reduzem carga cognitiva; nao transformar cada aula em desenho redundante.
4. SUS: preferir fluxogramas e linhas do tempo simples; sem ilustração decorativa.
5. Validar `data/materiais_figuras.json` com contagem de `urlImagem`, credito/licenca e legenda.

## Criterio final de aceite

O Modulo 1 so deve ser chamado de finalizado quando:

- 54/54 aulas passam em `lint_ciclo_basico_v3` e `validate_ciclo_basico_aula`.
- `npm run validate:questoes` passa.
- `npm run audit:questoes` passa sem mapeamento quebrado.
- `report_modulo1_status` mostra 54/54 clean.
- `validate:materiais` nao lista nenhuma aula do Modulo 1.
- As 26 suspeitas restantes estao reconciliadas como triadas no relatorio.
- `docs/CICLO_BASICO_TAREFAS.md` e `data/agent_logs/modulo1_continuous_run.md` registram textual aprovado e visual pendente.
