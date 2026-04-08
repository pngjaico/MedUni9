# Refatorar questões — Clínica Médica 6 (`clinica_medica6`)

**Módulo:** 6 · **Sigla:** CM6 · **Ficheiro de saída:** `data/questoes.json`

---

## Contexto

Prompt operacional para colar num chat com **contexto zerado**, desde que o repositório (ou ficheiros citados) esteja acessível. Objetivo: eliminar questões estilo “associe à linha da tabela”, rótulos artificiais (ex.: `Algo::`), distratores reciclados entre itens do mesmo lote e metalinguagem fraca; substituir por enunciados **individualizados**, com **base no material da aula**, alinhados ao prompt canônico.

## Documento canônico (obrigatório)

1. Leia e siga **integralmente** [`prompts/gerar_questoes_flashcards.md`](../gerar_questoes_flashcards.md) (fonte de verdade para questões em `data/questoes.json`).
2. **Não** edite esse ficheiro; use-o só como regra.
3. Para cada aula, **antes** de reescrever as 10 questões, leia o Markdown em:
   - `data/materiais/clinica_medica6/<aula_id>.md`
   - se faltar, espelho: `materiais/modulo6/clinica_medica6/<aula_id>.md`

## Escopo desta disciplina

- `materia` (JSON): `clinica_medica6`
- Aulas (ordem do catálogo — cada `aula_id` tem **10** questões):  
  cm6_a1, cm6_a2, cm6_a3, cm6_a4, cm6_a5, cm6_a6, cm6_a7, cm6_a8, cm6_a9, cm6_a10, cm6_a11, cm6_a12, cm6_a13, cm6_a14, cm6_a15, cm6_a16, cm6_a17, cm6_a18, cm6_a19, cm6_a20, cm6_a21, cm6_a22, cm6_a23, cm6_a24

## Perfil clínico no lote de 10

- **Casos clínicos (caso_clinico: true):** **2 ou 3 por lote de 10** (~25%) — ver [gerar_questoes_flashcards.md](../gerar_questoes_flashcards.md); intercalar 2 e 3 entre aulas.

## Ciclo por aula (uma aula de cada vez; repetir até esgotar a lista acima)

Para **cada** `aula_id` desta disciplina, **sem saltar** e **sem agrupar** aulas no mesmo raciocínio:

1. Ler o `.md` da aula.
2. Isolar em `data/questoes.json` as **10** entradas com `"materia": "clinica_medica6"` e `"tema": "<aula_id>"`.
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
