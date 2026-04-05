# Prompt Canônico — Geração de Questões e Flashcards (MedGradPlus)

Documentação do repositório: [`AGENTS.md`](../AGENTS.md) na raiz (ordem de leitura para IAs).

## Objetivo

Gerar questões e flashcards de alta qualidade acadêmica para Medicina (Uninove), com rastreabilidade por aula, consistência técnica e foco em revisão para prova.

Este é o documento canônico para geração de:
- `data/questoes.json`
- `data/flashcards.json`

---

## Regras invioláveis de operação

1. Gerar conteúdo com base no material da aula e nas referências da disciplina (ver secção Flashcards), não por memória solta.
2. Sempre usar `tema` como `aula_id` exato (`sigla_aN`).
3. Não sobrescrever banco inteiro: sempre append com `id` sequencial global.
4. Explicações devem ser didáticas e objetivas, sem jargão vazio.
5. Para **questões**, cada item deve ser rastreável a conteúdo explícito do material de apoio. Para **flashcards**, ver proporção material / extra abaixo.

---

## Fonte obrigatória por item (questões)

Antes de gerar **questões** de uma aula:

1. Ler `data/materiais/<materia_id>/<aula_id>.md`.
2. Se não existir, usar `materiais/modulo<N>/<materia_id>/<aula_id>.md`.
3. Se não existir em nenhum dos dois caminhos, não gerar.

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

## Flashcards — padrão obrigatório (modelo v2)

### Meta por aula

- **30 flashcards** por `aula_id` (`tema`).
- **25** com `origem`: `"material"` (âncoras explícitas no `.md` da aula, ambos os caminhos espelhados).
- **5** com `origem`: `"extra"` — só conceitos **indispensáveis** para prova que **não** aparecem no material, fundamentados em livro-texto/guideline da lista abaixo; não repetir ideia já coberta por outro card.
- Distribuir categorias de forma mista; **não** fazer 30 cards quase iguais (variar: definição, mecanismo, comparação, detalhe de prova, clínica).

### Anti-repetição

- Dois cards não podem ter a mesma pergunta com mudança mínima de redação.
- Cobrir eixos diferentes da aula (estrutura, passos, comparativos da tabela, “pegadinhas” do material).
- `categoria` `"extra_livro"` reservada aos 5 itens `origem: "extra"` (ou usar `prova` se o extra for só lógica de prova).

### Formato JSON (obrigatório)

```json
{
  "id": 1,
  "materia": "mad2",
  "frente": "Pergunta curta e inequívoca.",
  "verso": "Resposta mínima, memorizável.",
  "explicacao": "Opcional: 0–2 frases curtas; rodapé de contexto (não mini-aula).",
  "tema": "mad2_a10",
  "dificuldade": 2,
  "categoria": "mecanismo",
  "origem": "material",
  "tags": ["herpesvirus", "latencia", "reativacao"]
}
```

| Campo | Descrição |
|-------|-----------|
| `frente` | Pergunta direta; ideal ≤ **100** caracteres. |
| `verso` | Resposta curta; ideal ≤ **120** caracteres; **proibido** parágrafo longo estilo mini-aula. |
| `explicacao` | Complemento opcional para o rodapé do app (mais discreto que o verso); se usar, máx. **2 frases curtas**; pode ser `""` omitido em JSON ou string vazia. |
| `categoria` | Uma das strings fechadas (ver tabela abaixo). |
| `origem` | `"material"` ou `"extra"`. |
| `tags` | 2–4 tags, minúsculas, sem acento; hífen em compostos. |

### Valores fechados: `categoria`

| Valor | Uso |
|-------|-----|
| `definicao` | Termo, classificação, nomenclatura. |
| `mecanismo` | Via, passo bioquímico/fisiopatológico, sequência. |
| `clinica` | Quadro, sinal, conduta de contexto (sem enunciado gigante). |
| `diferenciacao` | Comparar A vs B, tabela da aula. |
| `prova` | Detalhe que a banca cobra, pegadinha, critério numérico. |
| `extra_livro` | Só para os 5 cards `origem: "extra"` quando o foco é referência clássica. |

### Fontes para os 5 extras

Basear-se nas mesmas referências já usadas no repositório / [`PROJECT_CONTEXT.md`](../PROJECT_CONTEXT.md) quando existir plano da disciplina. Exemplos de famílias: anatomia (Moore/Netter), histologia (Junqueira), fisiologia (Guyton/Costanzo), patologia (Robbins), farmacologia (Katzung), imunologia (Abbas/Janeway), semiologia (Porto/Bates), etc. **Não inventar** citação ou guideline.

### Proibido (flashcards)

- Verso em formato de mini-aula longa.
- Frente ambígua com várias respostas aceitáveis.
- Mais de 5 cards `origem: "extra"` por aula.
- Tag vazia ou sem relação com o conceito.
- `categoria` ou `origem` fora dos valores permitidos.

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

### Questões

- [ ] `tema` está no formato `sigla_aN`.
- [ ] Item foi derivado do material da aula correta.
- [ ] Questão tem 4 alternativas válidas (`A`–`D`).
- [ ] Explicação da questão comenta correta e todas as erradas.

### Flashcards

- [ ] Exatamente **30** cards por aula (lote da mesma `tema`).
- [ ] **25** × `origem: "material"` e **5** × `origem: "extra"`.
- [ ] Cada card tem `categoria` e `origem` válidos.
- [ ] `frente` / `verso` dentro dos limites de caracteres recomendados.
- [ ] Nenhum par de cards redundante (releitura humana ou script de similaridade).
- [ ] `id` novo é sequencial global único no array `flashcards`.
- [ ] JSON válido; arquivo em `data/flashcards.json` com chave `"flashcards": [ ... ]`.

---

## Política de continuidade por lote

Para cada lote processado:

1. Validar formato e consistência.
2. Informar quantidade gerada (questões e/ou flashcards).
3. Informar aulas (`tema`) cobertas.
4. Só então seguir para o próximo lote.

### Geração em escala (flashcards)

- Processar **uma aula por vez**: ler o `.md`, gerar 30 cards, validar checklist, fazer append no JSON.
- Não substituir o array inteiro sem backup.
- Após wipe completo do banco de cards, renumerar `id` de 1 a N globalmente ao fechar o lote final (ou manter append com último `id` + 1 — documentar no commit).
