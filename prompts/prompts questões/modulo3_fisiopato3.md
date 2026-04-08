# Refatorar questões — Processos Fisiopatológicos e Farmacoterapêuticos 3 (`fisiopato3`)

**Módulo:** 3 · **Sigla:** FP3 · **Ficheiro de saída:** `data/questoes.json`

---

## Contexto

Prompt operacional para colar num chat com **contexto zerado**, desde que o repositório (ou ficheiros citados) esteja acessível. Objetivo: eliminar questões estilo “associe à linha da tabela”, rótulos artificiais (ex.: `Algo::`), distratores reciclados entre itens do mesmo lote e metalinguagem fraca; substituir por enunciados **individualizados**, com **base no material da aula**, alinhados ao prompt canônico.

## Documento canônico (obrigatório)

1. Leia e siga **integralmente** [`prompts/gerar_questoes_flashcards.md`](../gerar_questoes_flashcards.md) (fonte de verdade para questões em `data/questoes.json`).
2. **Não** edite esse ficheiro; use-o só como regra.
3. Para cada aula, **antes** de reescrever as 10 questões, leia o Markdown em:
   - `data/materiais/fisiopato3/<aula_id>.md`
   - se faltar, espelho: `materiais/modulo3/fisiopato3/<aula_id>.md`

## Escopo desta disciplina

- `materia` (JSON): `fisiopato3`
- Aulas (ordem do catálogo — cada `aula_id` tem **10** questões):  
  fp3_a1, fp3_a2, fp3_a3, fp3_a4, fp3_a5, fp3_a6, fp3_a7, fp3_a8, fp3_a9, fp3_a10, fp3_a11, fp3_a12, fp3_a13, fp3_a14, fp3_a15

## Paralelização em 4 blocos (3–4 aulas cada)

Cada bloco = **10 questões por aula** (40, 40, 40 e 30 questões no total). Use **um agente por bloco**.

| Bloco | Aulas (`aula_id`) | Total de questões |
|-------|-------------------|-------------------|
| **1** | fp3_a1, fp3_a2, fp3_a3, fp3_a4 | 40 |
| **2** | fp3_a5, fp3_a6, fp3_a7, fp3_a8 | 40 |
| **3** | fp3_a9, fp3_a10, fp3_a11, fp3_a12 | 40 |
| **4** | fp3_a13, fp3_a14, fp3_a15 | 30 |

**Concorrência e `data/questoes.json`:** vários agentes não devem editar o **mesmo** ficheiro em simultâneo. Opções seguras: (1) **um bloco por sessão**, em sequência; (2) **quatro chats separados**, cada um com instruções só do seu bloco, desde que **só um** grave o JSON de cada vez (commit/merge entre blocos); (3) ramos Git distintos e **merge cuidadoso** do array de questões.

Para colar num chat com contexto zerado, inclua no pedido: disciplina `fisiopato3`, o número do bloco e a lista exata de `aula_id` da tabela acima, mais as secções **Documento canônico**, **Ciclo por aula** e **Perfil clínico** deste ficheiro.

## Perfil clínico no lote de 10

- **Casos clínicos (caso_clinico: true):** **2 ou 3 por lote de 10** (~25%) — ver [gerar_questoes_flashcards.md](../gerar_questoes_flashcards.md); intercalar 2 e 3 entre aulas.

## Ciclo por aula (uma aula de cada vez; repetir até esgotar a lista acima)

Para **cada** `aula_id` desta disciplina, **sem saltar** e **sem agrupar** aulas no mesmo raciocínio:

1. Ler o `.md` da aula.
2. Isolar em `data/questoes.json` as **10** entradas com `"materia": "fisiopato3"` e `"tema": "<aula_id>"`.
3. **Preservar** em cada objeto: `id`, `materia`, `tema`, `modulo` (salvo correção documentada de erro factual de módulo).
4. Substituir `enunciado`, `opcoes`, `correta`, `dificuldade`, `caso_clinico`, `explicacao_geral`, `explicacoes_opcoes`, `explicacao`, garantindo:
   - **sem** templates de tabela copiada; **sem** `::`; distratores **distintos** entre as 10 questões;
   - 4 alternativas `A)`…`D)`;
   - distribuição **2×** `dificuldade: 1`, **5×** `2`, **3×** `3`;
   - `correta` (0–3) **aproximadamente uniforme** no lote (~25% por letra);
   - `explicacao` com resumo + comentário de **todas** as letras, como no canônico;
   - **proibido** enunciado meta (“na aula”, “no material” como núcleo da pergunta).

5. Validar após **cada** `aula_id`: `JSON.parse` em `data/questoes.json`; contar 10 questões; contar 2/5/3; contar letras de `correta`.

## Ordem e conclusão

- Processar as aulas **na ordem listada** (ou ordem numérica natural dos sufixos `_aN`).
- **Não** pedir confirmação entre aulas; terminar só quando **todas** as aulas desta disciplina estiverem refatoradas.
- **Não** criar segundo ficheiro de banco de questões; editar apenas `data/questoes.json`.

## Entrega

Resumo final: aulas alteradas + confirmação de JSON válido + checagem 2/5/3 e distribuição de `correta`.
