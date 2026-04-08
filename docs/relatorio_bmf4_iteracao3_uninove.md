# Relatório BMF4 — Iteração 3 (Uninove)

## Escopo

- Disciplina: `bmf4`
- Foco: aulas mais fracas da iteração anterior (`a5`, `a7-a12`, `a17`, `a18`)
- Ação: reescrita de 27 IDs críticos + rebalanceamento de gabarito

## Validação estrutural

- JSON válido: sim
- Metalinguagem alvo: 0
- 10 questões por aula: sim
- Dificuldade por aula (2/5/3): sim
- Gabarito por aula (A=3, B=2, C=3, D=2): sim

## Reauditoria por blocos (como aluno)

### Bloco `a1-a6`
- `a5` evoluiu para PASS amplo.
- `a1-a3` e parte de `a4/a6` ainda com fragilidade em anti-obviedade por forma.

### Bloco `a7-a12`
- melhoria pontual, porém ainda com FAIL recorrente em microtema e forma.

### Bloco `a13-a18`
- `a18` mais consistente.
- `a13-a17` ainda com FAIL predominante em anti-obviedade.

## Diagnóstico final da iteração 3

Houve evolução técnica e editorial, mas `bmf4` ainda não atingiu padrão estável para servir como “disciplina referência” de escala global sem mais uma rodada focada de refinamento psicométrico.

## Recomendação para escalar em massa com segurança

Escalar o processo (pipeline), mas com gate obrigatório por disciplina conforme:

- `docs/playbook_questoes_uninove_replicavel.md`
- `docs/rollout_em_massa_uninove.md`

Assim a escala avança sem repetir regressões de qualidade.
