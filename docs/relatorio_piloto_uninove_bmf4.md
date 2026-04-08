# Relatório de Piloto — Calibração Uninove (BMF4)

## Escopo

- Disciplina piloto: `bmf4` (`bmf4_a1`..`bmf4_a18`).
- Base avaliada: `data/questoes.json`.
- Critérios: contextualização de prova, distratores no microtema, anti-obviedade por forma.

## O que foi aplicado no piloto

1. Reforço do canônico com seção de estilo Uninove e gates anti-obviedade.
2. Reforço do prompt operacional de `bmf4` com regras de calibração da banca.
3. Auditoria em 3 blocos paralelos (a1-a6, a7-a12, a13-a18), leitura “como aluno”.

## Resultado da auditoria por bloco

- Bloco 1 (`a1-a6`): predominância de **FAIL** em contextualização e anti-obviedade.
- Bloco 2 (`a7-a12`): alguns PASS pontuais em contextualização, porém **FAIL** em distratores/microtema.
- Bloco 3 (`a13-a18`): **FAIL** predominante nos 3 critérios.

## Padrões de falha observados

- Enunciado com molde repetitivo e baixo poder discriminativo.
- Distratores “de outro capítulo”, sem competição real com a alternativa correta.
- Opção correta detectável por forma (tamanho, detalhamento, padrão tabelado).
- Vinheta clínica decorativa sem impacto na decisão.

## Decisão de rollout

**Não escalar imediatamente para todas as disciplinas.**  
Aplicar mais um ciclo de refino no piloto antes do rollout global.

## Próxima iteração recomendada (antes de escalar)

1. Reescrever, em `bmf4`, os IDs críticos sinalizados pela auditoria por bloco.
2. Reauditar com a mesma régua em paralelo.
3. Exigir taxa mínima de aprovação por aula:
   - contextualização: >= 80%
   - distratores no microtema: >= 90%
   - anti-obviedade por forma: >= 90%
4. Só então aplicar o mesmo processo nas 3 disciplinas de maior risco do ranking.
