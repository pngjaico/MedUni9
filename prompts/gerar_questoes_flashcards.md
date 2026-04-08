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
- Proporção de **caso clínico** por lote de 10 (medição oficial pelo campo `caso_clinico`, ver abaixo):
  - **Regra padrão (~25%)**: em cada `aula_id`, marcar **2 ou 3** questões com `caso_clinico: true` (nunca 0, 1, 4 ou mais no mesmo lote de 10).
  - **Exceção BMF (`bmf1`, `bmf2`, `bmf3`, `bmf4`)**: marcar **3 ou 4** por lote de 10 (alvo 30-40%).
  - Intercalar as contagens entre aulas da mesma disciplina para manter a média-alvo.
  - **Todas** as demais questões do lote: `caso_clinico: false`.
  - **Definição** de “caso clínico” para `true`: vinheta em que **perfil + contexto + dado clínico** são necessários para responder (não basta mencionar “paciente” de forma decorativa).
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
  "caso_clinico": false,
  "explicacao": "...",
  "tema": "mad2_a10",
  "dificuldade": 2,
  "modulo": 3
}
```

- **`caso_clinico` (obrigatório em itens novos):** `true` | `false`. Itens antigos sem o campo são tratados como `false` no app até migração opcional.

### Regras de qualidade

- Enunciado objetivo, com contexto clínico quando possível.
- Sempre 4 alternativas (`A` a `D`).
- Distratores plausíveis (erro real de aluno), sem opções absurdas.
- Distratores devem pertencer ao **mesmo microtema** da questão (não misturar conteúdos de capítulos distantes só para “encher” alternativas).
- **Posição da alternativa correta (obrigatório):** em cada lote (10 ou 12 questões), distribuir `correta` (0=A, 1=B, 2=C, 3=D) de forma **aproximadamente uniforme**, **alvo ~25% por letra** (aceitar **22–30%** se o n da aula não dividir exatamente: ex.: 10 questões → típico **2–3 ocorrências por letra**). **Proibido** concentração artificial (ex.: quase todas em **B**). Para cada aula, **embaralhar propositalmente** após redigir as questões e **validar a contagem** antes de salvar.
- Em lote de 10, garantir diversidade de formato: **2-3** com `caso_clinico: true` (regra padrão) ou **3-4** nas disciplinas BMF; restantes com mecanismo, comparação, interpretação de dado e aplicação teórica — sempre com `caso_clinico: false` quando não for vinheta clínica integral.
- Proibido enunciado metatextual (ex.: “Sobre o tema…”, “Na aula…”, “Conforme o material…”).
- Proibido sufixo instrucional genérico no enunciado (ex.: “Use raciocínio...”, “Considere APS/SUS...”); instruções de método ficam no prompt, não no texto da questão.
- Questões devem ser individualizadas; não usar template repetitivo com mudança mínima de substantivo.
- Proibido enunciado-placeholder genérico (ex.: "mantém coerência", "integra conceito e mecanismo") sem conteúdo médico específico.
- O enunciado deve cobrar **assunto médico real**; o nome da aula serve só para indexação (`tema`), não para virar texto da questão.
- Proibido alternativa “cabeçalho de tabela” (ex.: “X — Y — Z”) como opção correta fácil por formato.
- Evitar “vinheta decorativa”: se houver caso clínico, os dados do caso devem ser necessários para responder.
- Teste anti-obviedade obrigatório: lendo como aluno, a correta não pode ser detectável só por tamanho, estilo ou nível de detalhe muito superior.
- **Passada qualitativa obrigatória (2ª revisão):** após montar o lote e antes de salvar, fazer uma releitura editorial para remover texto-template, metalinguagem residual e frases-curinga; reescrever o que soar mecânico, preservando conteúdo médico e gabarito.
- Dificuldade:
  - `1`: conceito direto
  - `2`: mecanismo/comparação
  - `3`: caso clínico integrado

### Estilo Banca Uninove (obrigatório)

Base operacional: sinais de estilo consolidados em `docs/uninove_sinais_estilo_questoes.md`.
Playbook operacional permanente: `docs/playbook_questoes_uninove_replicavel.md`.

- Manter 4 alternativas no app, com densidade de prova (3 distratores plausíveis e competitivos).
- Priorizar enunciado contextualizado e decisão objetiva (diagnóstico, mecanismo, associação anatômica, interpretação de dado).
- Variar abertura do enunciado; evitar repetição de moldes como “Qual afirmação...”.
- Evitar alternativa correta “destacada” por formato, extensão ou especificidade muito superior.
- Quando houver caso clínico, os dados clínicos devem ser necessários para resolver o item.
- Aceitar enunciado um pouco mais denso quando isso aumentar fidelidade ao estilo de prova, sem prolixidade vazia.
- Após geração por disciplina, executar auditoria em blocos com a rubrica do playbook e só escalar com aprovação.

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
"caso_clinico": false,
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

## Flashcards — padrão obrigatório (modelo cloze v3)

### Meta por aula

- **12 flashcards** por `aula_id` (`tema`).
- **10** com `origem`: `"material"` (âncoras explícitas no `.md` da aula, ambos os caminhos espelhados).
- **2** com `origem`: `"extra"` — conceitos **indispensáveis** e básicos de prova, ainda no escopo da aula, fundamentados em livro-texto/guideline da lista abaixo.
- Priorizar aprendizado essencial: cards de **conceito claro**, curtos e diretos, evitando complexidade desnecessária.

### Anti-repetição

- Dois cards não podem ter a mesma pergunta com mudança mínima de redação.
- Cobrir eixos diferentes da aula (estrutura, passos, comparativos da tabela, “pegadinhas” do material).
- `categoria` `"extra_livro"` reservada aos 5 itens `origem: "extra"` (ou usar `prova` se o extra for só lógica de prova).

### Formato JSON (obrigatório)

```json
{
  "id": 1,
  "materia": "mad2",
  "frente": "A célula apresentadora mais eficiente para ativar linfócito T naive é a {{c1::célula dendrítica}}.",
  "verso": "célula dendrítica",
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
| `frente` | Frase cloze com **exatamente 1 lacuna** no padrão `{{c1::resposta}}`; ideal ≤ **140** caracteres. |
| `verso` | **Somente o preenchimento da lacuna** (texto mínimo, sem frase completa); ideal ≤ **60** caracteres. |
| `explicacao` | Complemento opcional para o rodapé do app (mais discreto que o verso); se usar, máx. **2 frases curtas**; pode ser `""` omitido em JSON ou string vazia. |
| `categoria` | Uma das strings fechadas (ver tabela abaixo). |
| `origem` | `"material"` ou `"extra"`. |
| `tags` | 2–4 tags, minúsculas, sem acento; hífen em compostos. |

### Regras de escrita cloze (obrigatórias)

- Cada card deve ter **1 lacuna clinicamente útil** (não esconder artigo/preposição).
- A lacuna deve ter **resposta inequívoca** para revisão rápida.
- O verso não pode repetir frase inteira; apenas o termo/expressão-alvo.
- A explicação é rodapé: curta, contextual e específica para aquele card.
- Evitar tom genérico/template. A frase deve parecer feita para prova, não slogan.
- Usar frase declarativa de aprendizagem (sem formato de pergunta).
- Priorizar nível **fácil e médio** (`dificuldade: 1` ou `2`) focando fundamentos conceituais.

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
- Frente sem lacuna (`{{c1::...}}`) ou com mais de 1 lacuna.
- Frente ambígua com várias respostas aceitáveis.
- Mais de 2 cards `origem: "extra"` por aula.
- Tag vazia ou sem relação com o conceito.
- `categoria` ou `origem` fora dos valores permitidos.
- Cloze fraca/trivial (ex.: esconder "de", "e", "o").
- Cloze em formato de pergunta (ex.: frase terminando com `?`).

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
- [ ] Lote tem contagem de `caso_clinico: true` correta: **2 ou 3** (padrão) **ou 3 ou 4** para BMF; as outras com `false`.
- [ ] Cada questão nova inclui **`caso_clinico` explícito** (`true` ou `false`).
- [ ] Lote tem **20% de enunciados um pouco mais longos** (2/10), sem prolixidade.
- [ ] Questão tem 4 alternativas válidas (`A`–`D`).
- [ ] Explicação da questão comenta correta e todas as erradas.
- [ ] Enunciado **não** menciona “aula/tema/material”.
- [ ] Questões do lote não repetem estrutura/pergunta com simples troca de palavras.
- [ ] **Passada qualitativa concluída:** removidos templates e metalinguagem residual; leitura final com fluidez de prova real.
- [ ] Distratores permanecem no mesmo microtema do item (sem mistura aleatória de capítulos).
- [ ] Não há alternativa-cabeçalho/tabelada que denuncie a correta por forma.
- [ ] Pelo menos 3 questões do lote foram testadas “como aluno” e exigem raciocínio real, sem acerto por pista superficial.
- [ ] Lote aderente ao estilo Uninove (`docs/uninove_sinais_estilo_questoes.md`): contextualização + decisão objetiva + distratores competitivos.

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
- [ ] **Etiqueta clínica:** soma de `caso_clinico === true` no lote da aula é **2 ou 3** (padrão) **ou 3 ou 4** nas BMF; demais `false`; nenhuma questão sem o campo (lotes novos).

Regra de bloqueio:
- Não avançar para a próxima aula enquanto o lote atual não passar em **100%** do checklist + gate antifalha.
- Não avançar sem a **2ª passada qualitativa** concluída e registrada no resumo do lote.

### Flashcards

- [ ] Exatamente **12** cards por aula (lote da mesma `tema`).
- [ ] **10** × `origem: "material"` e **2** × `origem: "extra"`.
- [ ] Cada card tem `categoria` e `origem` válidos.
- [ ] `frente` está em cloze válido (`{{c1::...}}`) e contém **1 lacuna útil**.
- [ ] `verso` contém apenas o preenchimento da lacuna.
- [ ] `frente` / `verso` dentro dos limites de caracteres recomendados.
- [ ] Nenhum par de cards redundante (releitura humana ou script de similaridade).
- [ ] Dificuldade do lote limitada a **1 ou 2** (fácil/médio).
- [ ] Cards focam conceitos essenciais; sem detalhismo excessivo para revisão inicial.
- [ ] `id` novo é sequencial global único no array `flashcards`.
- [ ] JSON válido; arquivo em `data/flashcards.json` com chave `"flashcards": [ ... ]`.

### Gate antifalha específico (flashcards cloze; hard fail)

Se qualquer item abaixo falhar, descartar e refazer o lote da aula:

- [ ] **Cloze válida:** 30/30 cards com exatamente um padrão `{{c1::...}}`.
- [ ] **Lacuna não-trivial:** 30/30 lacunas cobram conceito médico/sanitário relevante.
- [ ] **Verso minimalista:** 30/30 versos com apenas a resposta da lacuna.
- [ ] **Explicação específica:** sem texto-curinga repetido em massa.
- [ ] **Anti-genérico:** linguagem concreta (mecanismo, critério, comparação, conduta), sem frases vazias.
- [ ] **Duplicidade semântica controlada:** cards quase idênticos reescritos ou removidos antes de salvar.

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
