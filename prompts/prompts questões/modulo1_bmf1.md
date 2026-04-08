# Refatorar questões — Bases Morfofuncionais 1 — Locomotor e Digestório (`bmf1`)

**Módulo:** 1 · **Sigla:** BMF1 · **Ficheiro de saída:** `data/questoes.json`

---

## Contexto

Prompt operacional para colar num chat com **contexto zerado**, desde que o repositório (ou ficheiros citados) esteja acessível. Objetivo: eliminar questões estilo “associe à linha da tabela”, rótulos artificiais (ex.: `Algo::`), distratores reciclados entre itens do mesmo lote e metalinguagem fraca; substituir por enunciados **individualizados**, com **base no material da aula**, alinhados ao prompt canônico.

## Documento canônico (obrigatório)

1. Leia e siga **integralmente** [`prompts/gerar_questoes_flashcards.md`](../gerar_questoes_flashcards.md) (fonte de verdade para questões em `data/questoes.json`).
2. **Não** edite esse ficheiro; use-o só como regra.
3. Para cada aula, **antes** de reescrever as 10 questões, leia o Markdown em:
   - `data/materiais/bmf1/<aula_id>.md`
   - se faltar, espelho: `materiais/modulo1/bmf1/<aula_id>.md`

## Escopo desta disciplina

- `materia` (JSON): `bmf1`
- Aulas (ordem do catálogo — cada `aula_id` tem **10** questões):  
  bmf1_a1, bmf1_a2, bmf1_a3, bmf1_a4, bmf1_a5, bmf1_a6, bmf1_a7, bmf1_a8, bmf1_a9, bmf1_a10, bmf1_a11, bmf1_a12, bmf1_a13, bmf1_a14, bmf1_a15, bmf1_a16, bmf1_a17, bmf1_a18, bmf1_a19, bmf1_a20, bmf1_a21, bmf1_a22

## Perfil clínico no lote de 10

- **Casos clínicos (caso_clinico: true):** **3 ou 4 por lote de 10** (30-40%) — exceção BMF no canônico; intercalar 3 e 4 entre aulas.

## Ciclo por aula (uma aula de cada vez; repetir até esgotar a lista acima)

Para **cada** `aula_id` desta disciplina, **sem saltar** e **sem agrupar** aulas no mesmo raciocínio:

1. Ler o `.md` da aula.
2. Isolar em `data/questoes.json` as **10** entradas com `"materia": "bmf1"` e `"tema": "<aula_id>"`.
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
