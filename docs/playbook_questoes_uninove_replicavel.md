# Playbook Replicável — Questões no Estilo Uninove

## Objetivo

Padronizar, de forma permanente, como **criar**, **auditar** e **corrigir** questões para manter aderência à banca Uninove com 4 alternativas.

## Escopo

- Banco principal: `data/questoes.json`
- Prompt canônico: `prompts/gerar_questoes_flashcards.md`
- Prompts por disciplina: `prompts/prompts questões/*.md`

---

## Ciclo obrigatório (sempre)

1. **Calibração de estilo**
   - Ler `docs/uninove_sinais_estilo_questoes.md`.
   - Confirmar linguagem de prova: contexto útil + decisão objetiva.

2. **Geração por aula (10 questões)**
   - Preservar `id`, `materia`, `tema`, `modulo`.
   - Manter 4 alternativas (`A-D`) com distratores no mesmo microtema.

3. **Passada qualitativa (2ª revisão)**
   - Reescrever itens com cara de template.
   - Remover metalinguagem e instruções no enunciado.
   - Garantir que a correta não se destaque por forma.

4. **Auditoria “como aluno” em blocos**
   - Dividir disciplina em 3 blocos (ou lotes equivalentes).
   - Rodar auditoria paralela com os 3 critérios abaixo.

5. **Correção de IDs críticos**
   - Reescrever apenas os IDs sinalizados.
   - Revalidar lote e rebalancear `correta` se necessário.

6. **Fechamento e registro**
   - Validar JSON.
   - Registrar relatório curto em `docs/`.

---

## Rubrica oficial de auditoria (0-10 por aula)

Para cada aula, classificar PASS/FAIL em:

1. **Contextualização útil**  
   O enunciado usa contexto que muda a decisão; sem “vinheta decorativa”.

2. **Distratores no microtema**  
   As 3 erradas competem com a correta no mesmo eixo conceitual.

3. **Anti-obviedade por forma**  
   Não dá para acertar por tamanho, estilo, especificidade ou opção “tabelada”.

### Regra de bloqueio

Não escalar disciplina enquanto houver:

- qualquer aula com nota `< 7.0`, ou
- critério (2) ou (3) em FAIL.

---

## Checklist técnico por aula

- [ ] 10 questões no `tema` correto
- [ ] dificuldade 2/5/3
- [ ] `correta` equilibrada (~25% por letra; em 10 questões: 2-3 por letra)
- [ ] sem metalinguagem (`na aula`, `no material`, etc.)
- [ ] sem alternativa-cabeçalho como pista de gabarito
- [ ] explicação com resumo + A/B/C/D

---

## Padrões proibidos (hard fail)

- Distrator de capítulo distante só para “preencher”.
- Mistura de microtemas incompatíveis na mesma questão.
- Correta muito mais completa que as outras.
- Enunciado genérico (“Qual afirmação sobre...”) repetido em série.
- Conteúdo OCR/metadata (timestamp, link, cabeçalho de formulário).

---

## Template de relatório de ciclo

Arquivo sugerido: `docs/relatorio_<materia>_<data>.md`

Campos mínimos:

1. Aulas auditadas
2. PASS/FAIL por critério
3. Nota por aula
4. IDs críticos corrigidos
5. Status final: `escala liberada` ou `nova iteração`

## Documentos de suporte para operação contínua

- `docs/rollout_em_massa_uninove.md` (ordem e gate de escala)
- `docs/uninove_sinais_estilo_questoes.md` (calibração de estilo)
