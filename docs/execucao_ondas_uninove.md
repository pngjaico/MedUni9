# Execução das Ondas — 5 Abas (Rigor Máximo)

Fonte de priorização: `docs/relatorio_waves_uninove.json`.

## Regra aplicada nesta execução

- Pipeline de 5 abas configurado.
- Triagem automática rodada em todas as disciplinas.
- Status operacional por disciplina:
  - `aprovada_para_escala`: passa gate máximo.
  - `nova_iteracao`: precisa nova rodada de reescrita/auditoria.

Com gate máximo (PASS nos 3 critérios por aula), nenhuma disciplina é aprovada sem auditoria final por bloco.

---

## Onda 1 — Quick Wins

Disciplinas executadas na onda:

- `tecnica_operatoria`
- `bmf1`
- `bmf4`
- `mad2`
- `semiologia2`
- `fisiopato3`
- `bcm1`

Decisão da onda:

- `bmf4`: `nova_iteracao` (auditoria humana já confirmou gargalos residuais).
- demais da onda 1: `nova_iteracao` (triagem automática sem gate máximo completo por aula).

---

## Onda 2 — Intermediárias

Disciplinas executadas na onda:

- `sus`
- `semiologia1`
- `semiologia3`
- `bmf2`
- `mad1`
- `bioestatistica`

Decisão da onda:

- todas: `nova_iteracao` (necessário ciclo completo geração+auditoria por bloco).

---

## Onda 3 — Críticas

Disciplinas executadas na onda:

- `semiologia4`
- `indicadores`
- `saude_trabalhador`
- `ds`
- `pmh`
- `fisiopato_farmaco`
- `bmf3`

Decisão da onda:

- todas: `nova_iteracao` (alto risco estrutural; exigir múltiplas iterações por bloco).

---

## Saída consolidada para operação contínua

1. Kit de 5 abas: `docs/kit_5_abas_operacional.md`
2. Playbook replicável: `docs/playbook_questoes_uninove_replicavel.md`
3. Rollout em massa com gate: `docs/rollout_em_massa_uninove.md`
4. Priorização por ondas: `docs/relatorio_waves_uninove.json`

## Próximo passo imediato para escala real

Rodar ciclos completos por disciplina, nesta ordem:

1) `tecnica_operatoria`, `bmf1`, `mad2`  
2) `semiologia2`, `fisiopato3`, `bcm1`  
3) manter `bmf4` em paralelo até atingir gate máximo.
