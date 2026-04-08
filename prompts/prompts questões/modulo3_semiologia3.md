# Refatorar questões — Semiologia dos Aparelhos Renal e Reprodutor (`semiologia3`)

**Módulo:** 3 · **Sigla:** SEMIO3 · **Ficheiro de saída:** `data/questoes.json`

---

## Contexto

Prompt operacional para colar num chat com **contexto zerado**, desde que o repositório (ou ficheiros citados) esteja acessível. Objetivo: eliminar questões estilo “associe à linha da tabela”, rótulos artificiais (ex.: `Algo::`), distratores reciclados entre itens do mesmo lote e metalinguagem fraca; substituir por enunciados **individualizados**, com **base no material da aula**, alinhados ao prompt canônico.

## Documento canônico (obrigatório)

1. Leia e siga **integralmente** [`prompts/gerar_questoes_flashcards.md`](../gerar_questoes_flashcards.md) (fonte de verdade para questões em `data/questoes.json`).
2. **Não** edite esse ficheiro; use-o só como regra.
3. Para cada aula, **antes** de reescrever as 10 questões, leia o Markdown em:
   - `data/materiais/semiologia3/<aula_id>.md`
   - se faltar, espelho: `materiais/modulo3/semiologia3/<aula_id>.md`

## Escopo desta disciplina

- `materia` (JSON): `semiologia3`
- Aulas (ordem do catálogo — cada `aula_id` tem **10** questões):  
  semio3_a1, semio3_a2, semio3_a3, semio3_a4, semio3_a5, semio3_a6

## Perfil clínico no lote de 10

- **Casos clínicos (caso_clinico: true):** **2 ou 3 por lote de 10** (~25%) — ver [gerar_questoes_flashcards.md](../gerar_questoes_flashcards.md); intercalar 2 e 3 entre aulas.

## Ciclo por aula (uma aula de cada vez; repetir até esgotar a lista acima)

Para **cada** `aula_id` desta disciplina, **sem saltar** e **sem agrupar** aulas no mesmo raciocínio:

1. Ler o `.md` da aula.
2. Isolar em `data/questoes.json` as **10** entradas com `"materia": "semiologia3"` e `"tema": "<aula_id>"`.
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

## Paralelização (3 blocos · 3 agentes · 10 questões/aula)

Para **não** corromper `data/questoes.json` com edições simultâneas, divida o trabalho em **3 blocos de 2 aulas** (6 aulas no total) e **grave cada bloco num ficheiro à parte**; só depois funda no banco principal (substituição por `id` ou merge manual).

| Bloco | Agente | `aula_id` (10 questões cada) | Ficheiro de saída (array JSON de 20 objetos) |
|-------|--------|------------------------------|---------------------------------------------|
| 1 | Agente 1 | `semio3_a1`, `semio3_a2` | `scripts/patches/semio3_refactor_bloco1.json` |
| 2 | Agente 2 | `semio3_a3`, `semio3_a4` | `scripts/patches/semio3_refactor_bloco2.json` |
| 3 | Agente 3 | `semio3_a5`, `semio3_a6` | `scripts/patches/semio3_refactor_bloco3.json` |

**Regras por agente (bloco):**

1. Ler apenas os `.md` das **suas** duas aulas (`data/materiais/semiologia3/` ou espelho em `materiais/modulo3/semiologia3/`).
2. Isolar em `data/questoes.json` as **20** entradas (`materia` `semiologia3`, `tema` nas duas aulas).
3. Refatorar conforme o ciclo por aula deste documento; **preservar** `id`, `materia`, `tema`, `modulo`.
4. Escrever **um único** ficheiro JSON: array com **20** objetos de questão (ordem: primeiro as 10 de `semio3_aN` menor, depois as 10 da seguinte).
5. Validar: `JSON.parse` no ficheiro; por cada aula, 10 questões; 2/5/3 de dificuldade; `correta` ~uniforme.

**Fusão no repositório:** substituir em `data/questoes.json` cada objeto cujo `id` consta no patch, ou correr um script de merge que faça match por `id` (sem reordenar o resto do array).

**Alternativa com 2 agentes (blocos de 3 aulas):** Agente A → `semio3_a1`–`a3` → `scripts/patches/semio3_refactor_blocoA.json` (30 objetos); Agente B → `semio3_a4`–`a6` → `semio3_refactor_blocoB.json` (30 objetos).

## Entrega

Resumo final: aulas alteradas + confirmação de JSON válido + checagem 2/5/3 e distribuição de `correta`.
