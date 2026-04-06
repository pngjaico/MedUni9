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
5. Para **questões**, usar lote por `aula_id` com distribuição fixa de dificuldade e realismo clínico (ver regras abaixo), mantendo aderência estrita ao `aula_id`. Para **flashcards**, ver proporção material / extra abaixo.
6. Enunciados de **questões** devem ser sobre conteúdo médico/didático e **nunca** sobre o material em si (proibido: “na aula X”, “sobre o tema Y”, “conteúdo abordado”, “material”).

---

## Fontes obrigatórias por item (questões)

Antes de gerar **questões** de uma aula:

1. Ler `data/materiais/<materia_id>/<aula_id>.md`.
2. Se não existir, usar `materiais/modulo<N>/<materia_id>/<aula_id>.md`.
3. Se não existir em nenhum dos dois caminhos, não gerar.
4. Separar as questões em dois blocos de fonte:
   - `material`: conteúdo explícito do `.md` da aula.
   - `extra`: conteúdo adicional de referência clássica/literatura confiável, mas **ainda dentro do escopo da mesma aula**.

### Balanceamento obrigatório por aula (questões)

- Gerar **10 questões por `aula_id`**.
- Distribuição fixa de dificuldade por lote de 10:
  - **2** fáceis (`dificuldade: 1`)
  - **5** médias (`dificuldade: 2`)
  - **3** difíceis (`dificuldade: 3`)
- Proporção de caso clínico por lote de 10:
  - Disciplinas de perfil clínico/morfofuncional (ex.: BMF, Semiologia, MAD, FP, Saúde do Trabalhador): **50%** clínico (5/10).
  - Demais disciplinas: **30% a 40%** clínico (usar **4/10** como padrão).
- Tamanho de enunciado:
  - **20%** das questões do lote devem ser um pouco mais longas (2/10), sem exagero e sem texto prolixo.
- O conteúdo `extra` (quando usado) não pode fugir do escopo da aula e não deve repetir com redação mínima o bloco `material`.

### Uso do material como fonte (regra prática)

- O material da aula é **fonte de tópicos cobrados**, não texto para parafrasear no enunciado.
- Primeiro: extrair quais conceitos/mecanismos/condutas serão cobrados.
- Depois: escrever a questão como prova de Medicina (linguagem clínica/didática), sem mencionar “aula”, “tema”, “material” ou nomes de seção.

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
- **Posição da alternativa correta (obrigatório):** em cada lote (10 ou 12 questões), distribuir `correta` (0=A, 1=B, 2=C, 3=D) de forma **aproximadamente uniforme**, **alvo ~25% por letra** (aceitar **22–30%** se o n da aula não dividir exatamente: ex.: 10 questões → típico **2–3 ocorrências por letra**). **Proibido** concentração artificial (ex.: quase todas em **B**). Para cada aula, **embaralhar propositalmente** após redigir as questões e **validar a contagem** antes de salvar.
- Em lote de 10, garantir diversidade de formato: caso clínico, mecanismo, comparação, interpretação de dado, aplicação prática.
- Proibido enunciado metatextual (ex.: “Sobre o tema…”, “Na aula…”, “Conforme o material…”).
- Questões devem ser individualizadas; não usar template repetitivo com mudança mínima de substantivo.
- Proibido enunciado-placeholder genérico (ex.: "mantém coerência", "integra conceito e mecanismo") sem conteúdo médico específico.
- O enunciado deve cobrar **assunto médico real**; o nome da aula serve só para indexação (`tema`), não para virar texto da questão.
- Dificuldade:
  - `1`: conceito direto
  - `2`: mecanismo/comparação
  - `3`: caso clínico integrado

### Caso clínico (padrão mínimo de realismo)

Quando a questão for clínica, incluir pelo menos:
- perfil do paciente (idade/sexo quando útil),
- contexto clínico plausível (sintoma, tempo de evolução, exame/dado relevante),
- pergunta objetiva de decisão diagnóstica/fisiopatológica/conduta.

Evitar “caso clínico fake” genérico sem dado clínico real.

### Explicação obrigatória (alternativa por alternativa + resumo geral)

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

### Estrutura recomendada para o app (preferencial)

Além de `explicacao` em texto, quando possível incluir:

```json
"explicacao_geral": "Resumo curto do raciocínio da questão.",
"explicacoes_opcoes": {
  "A": "Motivo da alternativa A.",
  "B": "Motivo da alternativa B.",
  "C": "Motivo da alternativa C.",
  "D": "Motivo da alternativa D."
}
```

Regras:
- `explicacao_geral` deve existir sempre.
- `explicacoes_opcoes` deve cobrir as 4 letras.
- Após resposta do aluno (certa ou errada), o app deve mostrar `explicacao_geral` + explicações das 4 alternativas.

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
- [ ] Contagem de `correta` por letra no lote: **perto de 25% cada** (±1 alternância aceitável em lotes pequenos); **sem viés** para uma única letra.
- [ ] Lote da aula tem **10 questões**.
- [ ] Lote respeita **2/5/3** (fácil/média/difícil).
- [ ] Itens `material` foram derivados do `.md` da aula correta.
- [ ] Itens `extra` vieram de referência confiável e continuam no escopo da aula.
- [ ] Lote tem proporção clínica correta: **50%** (disciplinas clínicas) ou **30-40%** (demais).
- [ ] Lote tem **20% de enunciados um pouco mais longos** (2/10), sem prolixidade.
- [ ] Questão tem 4 alternativas válidas (`A`–`D`).
- [ ] Explicação da questão comenta correta e todas as erradas.
- [ ] Enunciado **não** menciona “aula/tema/material”.
- [ ] Questões do lote não repetem estrutura/pergunta com simples troca de palavras.

### Gate antifalha (hard fail; obrigatório)

Se qualquer item abaixo falhar, o lote da aula deve ser descartado e refeito:

- [ ] **Unicidade de enunciado:** 10/10 enunciados distintos no `aula_id` (normalização: minúsculas + sem espaços duplicados).
- [ ] **Unicidade de alternativas por questão:** 4 alternativas distintas dentro de cada questão (sem sinônimo trivial).
- [ ] **Unicidade do conjunto de alternativas:** 10/10 questões com conjunto `opcoes` diferente entre si no `aula_id`.
- [ ] **Reuso de distrator controlado:** o mesmo distrator textual não pode aparecer em mais de 2 questões da mesma aula.
- [ ] **Explicações não genéricas:** `explicacao_geral` e `explicacoes_opcoes` devem citar o conteúdo daquela questão; proibido texto-curinga idêntico no lote.
- [ ] **Explicações por alternativa específicas:** cada letra (`A`–`D`) deve justificar por que aquela opção está certa/errada, sem frases copiadas para todas.
- [ ] **Coerência sem metatexto:** nenhuma opção ou explicação pode falar de “aula/material/tema”; foco em conteúdo médico.
- [ ] **Validação semântica final:** leitura humana obrigatória de 3 questões aleatórias do lote para confirmar que cobram conteúdo médico real e não texto de apoio.
- [ ] **Gabarito equilibrado:** contagem de `correta` (A/B/C/D) **sem concentrar** em uma letra; **alvo ~25%** por opção no lote da aula (ajustar embaralhando alternativas após redação).

Regra de bloqueio:
- Não avançar para a próxima aula enquanto o lote atual não passar em **100%** do checklist + gate antifalha.

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

### Geração em blocos por disciplina (qualidade)

- Trabalhar **uma disciplina por vez**.
- Trabalhar **aula por aula** dentro da disciplina (um lote de 10 por `aula_id`).
- Após gerar cada aula: validar checklist e revisar qualidade textual antes de avançar.
- Só avançar para a próxima aula depois de aprovação/validação do lote anterior.
- Ao fechar a disciplina, fazer verificação final de repetição/qualidade antes de seguir para a próxima.

### Geração em escala (flashcards)

- Processar **uma aula por vez**: ler o `.md`, gerar 30 cards, validar checklist, fazer append no JSON.
- Não substituir o array inteiro sem backup.
- Após wipe completo do banco de cards, renumerar `id` de 1 a N globalmente ao fechar o lote final (ou manter append com último `id` + 1 — documentar no commit).
