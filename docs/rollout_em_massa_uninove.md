# Rollout em Massa — Questões Estilo Uninove

## Princípio

Escalar por disciplina **com gate de qualidade por bloco**.  
Não usar rollout “cego” em todas as matérias sem auditoria intermediária.

## Ordem recomendada de execução

1. Disciplinas com menor risco no ranking (quick wins).
2. Disciplinas intermediárias.
3. Disciplinas críticas por último (onde o ganho de iteração é maior).

## Pipeline replicável por disciplina

1. **Preparação**
   - Ler `prompts/gerar_questoes_flashcards.md`
   - Ler `docs/playbook_questoes_uninove_replicavel.md`
   - Ler prompt operacional da disciplina (`prompts/prompts questões/...`)

2. **Geração/Revisão em blocos**
   - Dividir a disciplina em 3 blocos de aulas.
   - Rodar 3 agentes em paralelo para redação/revisão.
   - Preservar `id/materia/tema/modulo`.

3. **Validação estrutural**
   - JSON válido.
   - 10 questões por aula.
   - distribuição 2/5/3 por aula.
   - balanceamento de `correta` por aula.
   - sem metalinguagem.

4. **Auditoria de qualidade (como aluno)**
   - PASS/FAIL em:
     - contextualização útil,
     - distratores no microtema,
     - anti-obviedade por forma.
   - Nota 0-10 por aula.

5. **Correção cirúrgica**
   - Reescrever apenas IDs críticos por aula.
   - Revalidar e reauditar.

6. **Critério de liberação da disciplina**
   - nota >= 7.0 em todas as aulas,
   - PASS em distrator no microtema,
   - PASS em anti-obviedade por forma.

## Critério de “escala global liberada”

Liberar execução em massa contínua quando:

- 3 disciplinas consecutivas passarem no critério de liberação acima;
- sem regressão de metalinguagem/template em auditoria final.

## Registro obrigatório

Para cada disciplina processada, gerar relatório em `docs/relatorio_<materia>_<data>.md` com:

- notas por aula;
- IDs críticos corrigidos;
- decisão: `aprovada para escala` ou `nova iteração`.
