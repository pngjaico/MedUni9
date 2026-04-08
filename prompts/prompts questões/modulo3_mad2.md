# Refatorar questões — Mecanismos Sistêmicos de Agressão e Defesa (`mad2`)

**Módulo:** 3 · **Sigla:** MsAD · **Ficheiro de saída:** `data/questoes.json`

---

## Contexto

Prompt operacional para colar num chat com **contexto zerado**, desde que o repositório (ou ficheiros citados) esteja acessível. Objetivo: eliminar questões estilo “associe à linha da tabela”, rótulos artificiais (ex.: `Algo::`), distratores reciclados entre itens do mesmo lote e metalinguagem fraca; substituir por enunciados **individualizados**, com **base no material da aula**, alinhados ao prompt canônico.

## Documento canônico (obrigatório)

1. Leia e siga **integralmente** [`prompts/gerar_questoes_flashcards.md`](../gerar_questoes_flashcards.md) (fonte de verdade para questões em `data/questoes.json`).
2. **Não** edite esse ficheiro; use-o só como regra.
3. Para cada aula, **antes** de reescrever as 10 questões, leia o Markdown em:
   - `data/materiais/mad2/<aula_id>.md`
   - se faltar, espelho: `materiais/modulo3/mad2/<aula_id>.md`

## Escopo desta disciplina

- `materia` (JSON): `mad2`
- Aulas (ordem do catálogo — cada `aula_id` tem **10** questões):  
  mad2_a1, mad2_a2, mad2_a3, mad2_a4, mad2_a5, mad2_a6, mad2_a7, mad2_a8, mad2_a9, mad2_a10, mad2_a11, mad2_a12, mad2_a13, mad2_a14, mad2_a15, mad2_a16, mad2_a17, mad2_a18, mad2_a19, mad2_a20

## Blocos (3–4 aulas) e 3–4 agentes em paralelo

Objetivo: dividir as **20** aulas em blocos de **4** aulas (dentro do intervalo 3–4) e distribuir por **até 4 agentes** por onda, sem perder o ciclo “10 questões por `aula_id`” nem as regras do canônico.

| Bloco | `aula_id` (ordem numérica) | Questões (10 × 4) |
|-------|---------------------------|-------------------|
| 1 | mad2_a1 … mad2_a4 | 40 |
| 2 | mad2_a5 … mad2_a8 | 40 |
| 3 | mad2_a9 … mad2_a12 | 40 |
| 4 | mad2_a13 … mad2_a16 | 40 |
| 5 | mad2_a17 … mad2_a20 | 40 |

**Onda A (4 agentes):** blocos **1–4** — cada agente trata **um** bloco, lendo os **4** `.md` antes de reescrever as **40** questões.

**Onda B (1 agente):** bloco **5** — mesma regra para as últimas **4** aulas.

### Por que não editar `data/questoes.json` em paralelo no mesmo diretório

Vários chats a gravarem o mesmo ficheiro ao mesmo tempo geram **sobrescrita** ou JSON inválido. Use **um** destes modos:

1. **Ficheiro de patch por agente (recomendado):** cada agente grava apenas um array JSON em `data/patches/mad2_block_<N>.json` (40 objetos, `id` preservados). Depois mescla no banco com:
   - `node scripts/merge-mad2-patch.cjs data/patches/mad2_block_1.json`
   - repetir para `_2` … `_5` (ordem 1→5) **ou** juntar os cinco arrays num único ficheiro e mesclar uma vez.
2. **Sequencial num único chat:** um agente processa bloco a bloco sem concorrência.
3. **Git worktrees:** cópias separadas do repositório por agente + merge/revisão no fim (mais pesado).

Os patches são **intermediários**; o banco final continua a ser só `data/questoes.json`.

### Prompt mínimo para colar no agente do Bloco *N*

Substitua `<N>` e liste os `aula_id` do bloco. Instrua: ler `prompts/gerar_questoes_flashcards.md`, este ficheiro, os `.md` das aulas do bloco; isolar em `data/questoes.json` as questões `materia: mad2` e `tema` correspondentes; reescrever campos conforme o ciclo por aula; **preservar** `id`, `materia`, `tema`, `modulo`; gravar saída em `data/patches/mad2_block_<N>.json` como **array JSON** de **40** objetos; validar 2/5/3 e `correta` **por aula** (cada 10 questões).

## Perfil clínico no lote de 10

- **Casos clínicos (caso_clinico: true):** **2 ou 3 por lote de 10** (~25%) — ver [gerar_questoes_flashcards.md](../gerar_questoes_flashcards.md); intercalar 2 e 3 entre aulas.

## Ciclo por aula (uma aula de cada vez; repetir até esgotar a lista acima)

Para **cada** `aula_id` desta disciplina, **sem saltar**. No trabalho **por bloco**, “agrupar” só significa **um agente responsável por várias aulas em sequência**; para cada `aula_id` mantenha leitura do `.md` próprio e validação **do lote de 10** antes de passar à seguinte.

1. Ler o `.md` da aula.
2. Isolar em `data/questoes.json` as **10** entradas com `"materia": "mad2"` e `"tema": "<aula_id>"`.
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
