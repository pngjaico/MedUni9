# Refatorar questões — Bases Morfofuncionais 4 — Neurossensorial e Endócrino (`bmf4`)

**Módulo:** 4 · **Sigla:** BMF4 · **Ficheiro de saída:** `data/questoes.json`

---

## Contexto

Prompt operacional para colar num chat com **contexto zerado**, desde que o repositório (ou ficheiros citados) esteja acessível. Objetivo: eliminar questões estilo “associe à linha da tabela”, rótulos artificiais (ex.: `Algo::`), distratores reciclados entre itens do mesmo lote e metalinguagem fraca; substituir por enunciados **individualizados**, com **base no material da aula**, alinhados ao prompt canônico.

## Documento canônico (obrigatório)

1. Leia e siga **integralmente** [`prompts/gerar_questoes_flashcards.md`](../gerar_questoes_flashcards.md) (fonte de verdade para questões em `data/questoes.json`).
2. **Não** edite esse ficheiro; use-o só como regra.
3. Para cada aula, **antes** de reescrever as 10 questões, leia o Markdown em:
   - `data/materiais/bmf4/<aula_id>.md`
   - se faltar, espelho: `materiais/modulo4/bmf4/<aula_id>.md`

## Escopo desta disciplina

- `materia` (JSON): `bmf4`
- Aulas (ordem do catálogo — cada `aula_id` tem **10** questões):  
  bmf4_a1, bmf4_a2, bmf4_a3, bmf4_a4, bmf4_a5, bmf4_a6, bmf4_a7, bmf4_a8, bmf4_a9, bmf4_a10, bmf4_a11, bmf4_a12, bmf4_a13, bmf4_a14, bmf4_a15, bmf4_a16, bmf4_a17, bmf4_a18

## Perfil clínico no lote de 10

- **Casos clínicos (caso_clinico: true):** **3 ou 4 por lote de 10** (30-40%) — exceção BMF no canônico; intercalar 3 e 4 entre aulas.

## Execução em blocos (com parcimônia)

Para reduzir fadiga, evitar repetição estrutural e manter qualidade textual, processar `bmf4` em **3 blocos**:

- **Bloco 1 (aulas 1–6):** `bmf4_a1` a `bmf4_a6`
- **Bloco 2 (aulas 7–12):** `bmf4_a7` a `bmf4_a12`
- **Bloco 3 (aulas 13–18):** `bmf4_a13` a `bmf4_a18`

Regras de parcimônia por bloco:

1. Trabalhar **uma aula por vez** dentro do bloco.
2. Ao fechar cada aula, fazer validação completa (10 itens, 2/5/3, equilíbrio de `correta`, JSON válido).
3. Ao fechar o bloco, fazer revisão de anti-repetição antes de avançar.

## Agentes simultâneos (sem conflito)

Permite-se execução paralela com agentes, desde que cada agente trate **apenas seu bloco**.

Fluxo obrigatório:

1. Lançar até **3 agentes simultâneos** (um por bloco) para redigir/validar lotes.
2. Cada agente devolve patch/delta do seu bloco com:
   - aulas cobertas;
   - contagem 2/5/3 por aula;
   - distribuição de `correta` por aula;
   - confirmação de ausência de metalinguagem.
3. Aplicar integrações no `data/questoes.json` com revisão final humana.

Proibido na execução paralela:

- dois agentes editarem a **mesma aula**;
- reutilizar lote-base trocando só substantivos;
- aprovar bloco sem validação de gate antifalha.

## Referências recomendadas (boa qualidade; sem inventar citação)

Usar o `.md` da aula como fonte primária e, para complemento técnico (`extra` no escopo da aula), priorizar:

- **Neuroanatomia e neurofisiologia:** Moore (Anatomia Orientada para a Clínica), Snell (Neuroanatomia Clínica), Guyton & Hall, Costanzo.
- **Histologia e base morfofuncional:** Junqueira & Carneiro.
- **Patologia / fisiopatologia:** Robbins & Cotran.
- **Endócrino:** Williams Textbook of Endocrinology (quando necessário), Guyton & Hall, Costanzo.
- **Semiologia correlata:** Porto / Bates (contexto clínico e exame físico).

Regras de referência:

1. Não inventar guideline nem citação nominal falsa.
2. Não extrapolar para conduta terapêutica fora do escopo da aula.
3. Em divergência, manter formulação conservadora e acadêmica padrão-graduação.

## Estilo banca Uninove (aplicação no piloto)

Seguir `docs/uninove_sinais_estilo_questoes.md` como calibração de forma textual:

1. Enunciado com contexto clínico/acadêmico curto, cobrando decisão objetiva.
2. Evitar moldes repetidos (“Qual afirmação sobre...”) em sequência dentro da mesma aula.
3. Distratores no mesmo microtema da questão; sem alternativa “fora de capítulo”.
4. Proibir correta por destaque formal (mais longa, mais específica, formato de cabeçalho).
5. Ler como aluno antes de salvar: não pode haver acerto por pista de estilo.

## Ciclo por aula (uma aula de cada vez; repetir até esgotar a lista acima)

Para **cada** `aula_id` desta disciplina, **sem saltar** e **sem agrupar** aulas no mesmo raciocínio:

1. Ler o `.md` da aula.
2. Isolar em `data/questoes.json` as **10** entradas com `"materia": "bmf4"` e `"tema": "<aula_id>"`.
3. **Preservar** em cada objeto: `id`, `materia`, `tema`, `modulo` (salvo correção documentada de erro factual de módulo).
4. Substituir `enunciado`, `opcoes`, `correta`, `dificuldade`, `caso_clinico`, `explicacao_geral`, `explicacoes_opcoes`, `explicacao`, garantindo:
   - **sem** templates de tabela copiada; **sem** `::`; distratores **distintos** entre as 10 questões;
   - 4 alternativas `A)`…`D)`;
   - distribuição **2×** `dificuldade: 1`, **5×** `2`, **3×** `3`;
   - `correta` (0–3) **aproximadamente uniforme** no lote (~25% por letra);
   - `explicacao` com resumo + comentário de **todas** as letras, como no canônico;
   - **proibido** enunciado meta (“na aula”, “no material”, “neste tema”, “conforme o texto” como núcleo da pergunta);
   - **proibido** pseudoenunciado abstrato sem conteúdo médico concreto.

5. Validar após **cada** `aula_id`: `JSON.parse` em `data/questoes.json`; contar 10 questões; contar 2/5/3; contar letras de `correta`.

## Ordem e conclusão

- Processar as aulas **na ordem listada** (ou ordem numérica natural dos sufixos `_aN`).
- **Não** pedir confirmação entre aulas; terminar só quando **todas** as aulas desta disciplina estiverem refatoradas.
- **Não** criar segundo ficheiro de banco de questões; editar apenas `data/questoes.json`.

## Entrega

Resumo final: aulas alteradas + confirmação de JSON válido + checagem 2/5/3 e distribuição de `correta`.
