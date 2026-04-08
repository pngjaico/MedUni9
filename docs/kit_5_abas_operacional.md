# Kit Operacional — 5 Abas (Uninove)

## Objetivo

Executar revisão de questões por disciplina com 5 abas simultâneas, mantendo consistência, paralelismo e gate rígido.

## Mapeamento fixo das abas

- **Aba 1 (`Tab1_GeracaoBlocoA`)**: reescrita de aulas do bloco A.
- **Aba 2 (`Tab2_GeracaoBlocoB`)**: reescrita de aulas do bloco B.
- **Aba 3 (`Tab3_GeracaoBlocoC`)**: reescrita de aulas do bloco C.
- **Aba 4 (`Tab4_AuditoriaAluno`)**: auditoria por aula (PASS/FAIL + nota).
- **Aba 5 (`Tab5_IntegracaoGate`)**: integração de deltas, rebalanceamento e validação final.

## Regra de ouro

Cada aba trabalha em **escopo exclusivo** e não pisa no escopo de outra aba.

---

## Prompt-base da Aba 1/2/3 (Geração)

Use o mesmo template, trocando apenas disciplina e bloco:

```text
Você está responsável apenas pelo bloco [A/B/C] da disciplina [MATERIA].

Escopo:
- aulas: [LISTA_DE_AULAS_DO_BLOCO]
- arquivo alvo: data/questoes.json

Regras:
1) Preservar: id, materia, tema, modulo.
2) Reescrever: enunciado, opcoes, correta, explicacao_geral, explicacoes_opcoes, explicacao.
3) 4 alternativas (A-D), distratores no mesmo microtema.
4) Sem metalinguagem (“na aula”, “no material”, etc.).
5) Sem gabarito óbvio por forma/tamanho/padrão textual.
6) Enunciado no estilo Uninove: contexto útil + decisão objetiva.

Formato de entrega:
- JSON por ID com:
  id, enunciado, opcoes (4 strings sem A/B), correta (0-3),
  explicacao_geral, explicacoes_opcoes (A-D), explicacao.
```

---

## Prompt-base da Aba 4 (Auditoria)

```text
Audite a disciplina [MATERIA] no arquivo data/questoes.json.

Para cada aula, entregue:
- PASS/FAIL em:
  (1) contextualização útil
  (2) distratores no microtema
  (3) anti-obviedade por forma
- nota de 0 a 10
- até 2 IDs críticos por aula

Critérios de reprovação automática:
- qualquer pista formal de gabarito
- distrator de capítulo distante
- metalinguagem no enunciado/opções/explicações
```

---

## Prompt-base da Aba 5 (Integração/Gate)

```text
Integre apenas IDs aprovados das abas 1/2/3 em data/questoes.json.

Depois:
1) rebalancear correta por aula (A=3,B=2,C=3,D=2 em lotes de 10);
2) validar: JSON parse, 10 itens por aula, dificuldade 2/5/3, sem metalinguagem;
3) registrar relatório da disciplina em docs/relatorio_<materia>_<data>.md;
4) concluir com status:
   - aprovada_para_escala
   - nova_iteracao
```

---

## Handoff entre abas

1. Aba 1/2/3 finalizam deltas por ID.
2. Aba 4 audita o estado atualizado.
3. Aba 5 integra ajustes finais e decide status.

## Gate máximo (obrigatório)

Só aprova disciplina se:

- todas as aulas com PASS em (1), (2), (3);
- notas por aula >= 7.0;
- validação estrutural completa.
