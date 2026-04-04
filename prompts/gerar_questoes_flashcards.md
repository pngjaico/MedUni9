# Prompt Canônico — Geração de Questões e Flashcards (MedGradPlus)

Documentação do repositório: [`AGENTS.md`](../AGENTS.md) na raiz (ordem de leitura para IAs).

## Objetivo

Gerar questões e flashcards de alta qualidade acadêmica para Medicina (Uninove), com rastreabilidade por aula, consistência técnica e foco em revisão para prova.

Este é o documento canônico para geração de:
- `data/questoes.json`
- `data/flashcards.json`

---

## Regras invioláveis de operação

1. Gerar conteúdo com base no material da aula, não por memória solta.
2. Sempre usar `tema` como `aula_id` exato (`sigla_aN`).
3. Não sobrescrever banco inteiro: sempre append com `id` sequencial global.
4. Explicações devem ser didáticas e objetivas, sem jargão vazio.
5. Nunca criar conteúdo genérico sem conexão com o material da aula.

---

## Fonte obrigatória por item

Antes de gerar questões/cards de uma aula:

1. Ler `data/materiais/<materia_id>/<aula_id>.md`.
2. Se não existir, usar `materiais/modulo<N>/<materia_id>/<aula_id>.md`.
3. Se não existir em nenhum dos dois caminhos, não gerar.

Regra: todo item deve ser rastreável a conteúdo explícito do material de apoio.

---

## Categoria e indexação por aula

- `materia`: sigla da disciplina em minúsculo (ex.: `mad2`, `bcm1`, `pmh`).
- `tema`: exatamente o `aula_id` (ex.: `mad2_a10`).
- Proibido `tema` livre como `"glicolise"`, `"acidobase"`, `"imunidade"`.

---

## Questões — padrão obrigatório

### Formato JSON

```json
{
  "id": 1,
  "materia": "mad2",
  "enunciado": "...",
  "opcoes": [
    "A) ...",
    "B) ...",
    "C) ...",
    "D) ..."
  ],
  "correta": 0,
  "explicacao": "...",
  "tema": "mad2_a10",
  "dificuldade": 2,
  "modulo": 3
}
```

### Regras de qualidade

- Enunciado objetivo, com contexto clínico quando possível.
- Sempre 4 alternativas (`A` a `D`).
- Distratores plausíveis (erro real de aluno), sem opções absurdas.
- Balancear posição da correta no lote (evitar viés em B).
- Dificuldade:
  - `1`: conceito direto
  - `2`: mecanismo/comparação
  - `3`: caso clínico integrado

### Explicação obrigatória (alternativa por alternativa)

Campo `explicacao` deve conter:

1. Um resumo curto do raciocínio.
2. Julgamento de cada alternativa no formato abaixo:

```text
Resumo: [mecanismo clínico/fisiopatológico central em 1-2 frases].
A) INCORRETA. [motivo objetivo].
B) CORRETA. [justificativa objetiva].
C) INCORRETA. [motivo objetivo].
D) INCORRETA. [motivo objetivo].
```

Regra: explicar a correta e todas as erradas, sem deixar alternativa sem comentário.

---

## Flashcards — padrão obrigatório

### Formato JSON

```json
{
  "id": 1,
  "materia": "mad2",
  "frente": "...",
  "verso": "...",
  "explicacao": "...",
  "tema": "mad2_a10",
  "dificuldade": 2,
  "tags": ["herpesvirus", "latencia", "reativacao"]
}
```

### Regras de qualidade

- `frente`: pergunta curta e específica (ideal <= 120 chars).
- `verso`: resposta curta, direta, revisável em segundos (ideal <= 140 chars).
- `explicacao`: 1-3 frases com mecanismo/uso clínico.
- `tags`: 2-4 tags, minúsculas, sem acento, separadas por hífen quando composto.

Proibido:
- Verso em formato de mini-aula longa.
- Frente ambígua com múltiplas respostas corretas.
- Tag vazia ou sem relação com o conceito.

---

## Fontes concretas e padrão técnico

Basear formulações em referência clássica da graduação:

- Microbiologia: Murray, Trabulsi, Jawetz.
- Imunologia: Abbas.
- Clínica/infectologia: MS, CDC, OMS quando aplicável.

Regras:
- Não inventar guideline.
- Não afirmar conduta absoluta sem contexto.
- Em tema sensível, adotar formulação conservadora e padrão-ouro.

---

## Checklist de validação (antes de salvar)

- [ ] `tema` está no formato `sigla_aN`.
- [ ] Item foi derivado do material da aula correta.
- [ ] Questão tem 4 alternativas válidas (`A`-`D`).
- [ ] Explicação da questão comenta correta e todas as erradas.
- [ ] Flashcard tem `verso` curto e `explicacao` complementar.
- [ ] `id` novo é sequencial global.
- [ ] JSON final está válido.

---

## Política de continuidade por lote

Para cada lote processado:

1. Validar formato e consistência.
2. Informar quantidade gerada (questões e/ou flashcards).
3. Informar aulas (`tema`) cobertas.
4. Só então seguir para o próximo lote.
