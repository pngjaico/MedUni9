# Prompt Canônico v3 — Geração de Materiais de Apoio (Ciclo Clínico, MedGradPlus)

> **Hierarquia de prompts:** este v3 **substitui** `prompts/gerar_materiais_apoio.md` para o **ciclo clínico (Mod 5–8)**. O ciclo básico continua usando o v2 até receber revisão. Em conflito de regras, prevalece v3.
>
> **Persona obrigatória:** ler antes [`prompts/persona_medgradplus.md`](persona_medgradplus.md) — voz, macetes, tom de residência. Este arquivo cobre **estrutura, fontes, formato e armadilhas técnicas**; a persona cobre **como o autor fala**.
>
> **Referência canônica de qualidade:** antes de gerar qualquer aula clínica nova, leia [`piloto/cm5_a1.md`](../piloto/cm5_a1.md). A aula `cm5_a1` é o padrão visual, clínico e narrativo mínimo para o ciclo clínico.
>
> **Contrato operacional por aula:** além do `.md`, gerar **10-12 questões essenciais** em `data/questoes.json` e **10-12 flashcards** em `data/flashcards.json`, sempre com `aula_id` e `tema` iguais ao ID da aula. Questões essenciais pertencem à aba **Questões Essenciais**, não ao corpo do material.
>
> **Imagens:** avaliar figura durante a geração, mas incluir imagem inline somente quando ela for realmente importante para entendimento clínico, anatômico ou visual. Se a imagem não agregar muito, registrar a decisão em `data/refs/<aula_id>.refs.json` e não criar slot visual decorativo.

---

## 0. O que mudou em relação ao v2

| v2 (ciclo básico) | v3 (ciclo clínico) |
|---|---|
| Estilo neutro técnico, pouca persona | **Persona MedGradPlus obrigatória** (preceptor/banca/aluno) |
| Foco em prova Uninove | **Foco em residência** (ENARE, USP, Unifesp, Einstein, AMRIGS, Iamspe) |
| 100+ linhas | **240+ linhas como piso real de aprovação** para clínica/cirurgia/ortopedia/farm; 180 linhas é só erro estrutural legado |
| Mini Quiz com 3–5 questões | **Mini Quiz com 5–8 questões**; casos clínicos só dentro do quiz/questões, quando úteis |
| Negritagem 10–15% no corpo | **Negritagem 12–18% no corpo, 35–45% no Pré-Prova** |
| Tabelas livres em Markdown | **Tabelas com regras estritas** (anti-quebra, anti-encode) |
| Diretriz citada genericamente | **Citação obrigatória** com nome do livro/sociedade/edição |
| 1 caso ilustrativo no fim | **Sem `Caso da Semana`**; aplicação clínica deve aparecer integrada ao raciocínio, não como seção fixa |

---

## 1. Encoding e arquivo (não-negociável)

> **A causa raiz dos problemas no app é encoding e Markdown malformado. Esta seção é obrigatória.**

### 1.1 Encoding

- Sempre **UTF-8 sem BOM**.
- **Nunca** use Latin-1, Windows-1252 ou UTF-16. Se o editor abrir `Ã©` no lugar de `é`, **pare e corrija a fonte**.
- Salvar via PowerShell:
  ```powershell
  [IO.File]::WriteAllText("caminho.md", $conteudo, (New-Object System.Text.UTF8Encoding $false))
  ```
- Salvar via Python:
  ```python
  Path("caminho.md").write_text(conteudo, encoding="utf-8", newline="\n")
  ```

### 1.2 Caracteres proibidos

| Proibido | Substituir por | Motivo |
|---|---|---|
| `→` `←` `↔` (setas Unicode) | `->`, `<-`, `<->` | Quebram em fonts antigas |
| `−` (minus Unicode) | `-` (hífen ASCII) | Confunde parser MathJax |
| `…` (ellipsis Unicode) | `...` | Idem |
| `–` `—` (en-dash, em-dash) | `--`, ` — ` (em-dash com espaços só em prosa) | Quebra em colunas de tabela |
| Aspas curvas `"` `"` `'` `'` | `"` `'` retas | Compatibilidade copy-paste |
| Emojis fora de callouts | (remover) | Material clínico não tem emoji no corpo |
| ` ` (NBSP) | espaço normal | Quebra `wc -l` e formatação |

### 1.3 Quebras de linha

- **`\n` (LF)**, nunca `\r\n` (CRLF). Configure editor.
- Linha em branco entre **cada bloco** (parágrafo, lista, tabela, callout).
- **Sem trailing spaces** no fim das linhas.

---

## 2. Tabelas — regras estritas (anti-quebra)

> **As tabelas quebram no app por causa de pipes não-escapados e cabeçalho com `:` mal alinhado. Siga estritamente o padrão abaixo.**

### 2.1 Formato canônico

```markdown
| Coluna A         | Coluna B           | Coluna C       |
|------------------|--------------------|----------------|
| **Linha-chave** | Texto curto        | Diferencial    |
| **Linha-chave** | Texto curto        | Diferencial    |
```

- **Sempre** alinhe pipes da forma que o renderer parser preferir (alinhamento visual ajuda code review).
- A **linha de separador** (`|----|----|`) é obrigatória — não pule.
- **Não** use alinhamento por `:` (`|:---:|`) sem necessidade — quebra em alguns parsers.
- Cada célula com **no máximo 60 caracteres** (linhas longas viram poluição mobile).

### 2.2 Conteúdo proibido em células

- **Pipes literais** dentro de célula: escape como `\|` ou reescreva.
- **Quebra de linha** dentro de célula: substitua por ` / ` ou `; `.
- **Listas dentro de célula** (com `-` ou `*`): substitua por separador ` • ` ou `; `.
- **Negrito multilinha** dentro de célula: nunca.
- **HTML inline** (`<br>`, `<sub>`, `<sup>`): proibido.

### 2.3 Negritagem em tabela

- **Primeira coluna sempre 100% negrito** (é a chave de comparação).
- **Diferenciais entre linhas** em outras colunas: negrito apenas na palavra-pivô (não na linha inteira).
- **Valores numéricos críticos** (ex.: `> 250`, `≥ 3×`): negrito.

### 2.4 Quando NÃO usar tabela

- Quando há só **1 coluna de informação** real (vire lista).
- Quando há **mais de 6 colunas** (vira poluição; quebre em duas tabelas).
- Quando há texto **muito longo** em alguma célula (vire seção `### Subseção`).

---

## 3. Negritagem (Elite Bolding v3)

> **Resumo:** corpo 12–18%, tabelas com 1ª coluna 100% + diferenciais, Pré-Prova 35–45%. Detalhe em `prompts/padronizacao_negritos.md`.

### 3.1 Densidades por seção

| Seção | Densidade |
|---|---|
| Introdução / Relevância | 8–12% |
| Tópicos de desenvolvimento | 12–18% |
| Tabelas (corpo) | 1ª col. 100% + diferenciais |
| Ponte com a Clínica | 15–20% |
| Pontos-Chave | 30–40% |
| Pré-Prova | 35–45% |

### 3.2 O que negritar

- **Diagnóstico padrão-ouro** ("**colangiopancreatografia retrógrada endoscópica**").
- **Conduta de escolha** ("**laparotomia exploradora**").
- **Valores de corte** ("PMN **> 250/mm³**").
- **Sinal/manobra clínica** ("**sinal de Murphy**").
- **Nome de fármaco / classe** ("**ceftriaxona**", "**IECA**").
- **Patógeno** ("**Streptococcus pneumoniae**").
- **Critério/escala** ("**Child-Pugh**", "**MELD**", "**BISAP**").
- **Red flag / armadilha** ("**dor desproporcional ao exame físico**").

### 3.3 O que NÃO negritar

- **Verbos comuns** ("é", "tem", "ocorre").
- **Preposições e conjunções** ("de", "para", "e", "ou").
- **Frases inteiras** com mais de 6 palavras.
- **Linhas alternadas** ("uma palavra negrito / outra não").

---

## 4. Estrutura obrigatória do arquivo `.md`

> A ordem é **fixa**. O agente revisor checa por seção.

```markdown
# [Título da Aula em Title Case]

**Disciplina:** [Nome completo da disciplina]
**Módulo:** [N] | **Referência principal:** [livro + capítulo / sociedade + diretriz]
**Tempo de estudo sugerido:** [10–20 min]

---

## Relevância Clínica e Acadêmica

[Parágrafo de 4–6 linhas: por que esse tema cai em prova de residência, o que muda no plantão, qual a "porta de entrada" do raciocínio. Persona MedGradPlus presente.]

---

## [Tópico 1 — geralmente Definição/Conceito ou Fisiopatologia]

[Texto fluido. Tabelas comparativas onde fizer sentido. Persona presente.]

> **Pegadinha:** [callout breve com armadilha de banca]

---

## [Tópico 2, 3, ... conforme necessário]

[Cada `##` é um bloco temático. Mínimo 3 tópicos, máximo 7.]

> **Macete MedGradPlus — [NOME]:** [definição linha-a-linha + regra prática]

### Figura sugerida (somente se indispensável)

**Figura-ID:** `SIGLA-AULA-FXX`
- **Momento:** [onde inserir no app]
- **Descrição técnica:** [o que a imagem mostra]
- **Busca Commons (PT):** [termos]
- **Busca Commons (EN):** [termos]
- **Legenda rascunho:** [texto da legenda]

Se a imagem não for indispensável, omita esta subseção e registre em `data/refs/<aula_id>.refs.json`: `image_decision.usar_imagem = false` + motivo.

---

## Diagnóstico Diferencial

[Tabela comparativa OU texto estruturado por hipótese]

---

## Conduta (Stepwise)

| Passo | Ação | Justificativa |
|-------|------|---------------|
| 1 | [...] | [...] |
| 2 | [...] | [...] |

---

## Ponte com a Clínica

[Como esse conhecimento muda o paciente real. 1–2 parágrafos.]

---

## Pontos-Chave para Prova

- **[Termo]:** [explicação curta com negritagem 30–40%]
- **[Termo]:** [...]
- **[Termo]:** [...]

[Mínimo 10, máximo 15 bullets. Cada bullet deve ter pelo menos 1 termo-pivô em negrito; a seção inteira precisa ter 8+ marcações em negrito.]

---

## Mini Quiz

**1. [Pergunta com vinheta breve quando possível].**

- [ ] Alternativa A
- [x] Alternativa B (correta)
- [ ] Alternativa C
- [ ] Alternativa D

> **Explicação:** [Persona MedGradPlus, 2–3 linhas, dizendo POR QUE A é errada também quando relevante.]

**2. ...**

[Mínimo 5, máximo 8 questões. Inclua 1 caso clínico longo.]

---

## Pré-Prova

> **30 minutos antes da prova. Direto ao ponto.**

### Síntese para a prova

[Prosa de 5–8 linhas com altíssima densidade de negrito. Persona presente.]

### Diferenciações Críticas

| Conceito A | Conceito B | Como diferenciar |
|------------|------------|------------------|
| **Termo**  | **Termo**  | **Diferencial** |

### Macete-âncora

> **Macete MedGradPlus — [NOME]:** [a frase que fica na cabeça]

### Bancas — onde isso cai

- **USP-SP / Unifesp / Einstein / ENARE / AMRIGS / Iamspe:** [onde a banca foca, se houver padrão conhecido]

---

## Fontes

1. [Livro/diretriz com edição/ano se conhecido]
2. [Artigo pivô se for o caso]
3. [Diretriz brasileira / internacional]
4. [(referência a confirmar) — quando o conteúdo precisa de revisão de fonte]
```

---

## 5. Mini Quiz — formato estrito do parser

O app usa parser estrito. **Qualquer desvio quebra a renderização.**

```markdown
**1. [Enunciado da questão. Pode incluir vinheta clínica curta. Termina em ponto final ou interrogação.]**

- [ ] Alternativa A
- [x] Alternativa B (correta)
- [ ] Alternativa C
- [ ] Alternativa D

> **Explicação:** [Texto explicativo. Comece com "Explicação:" exatamente. Pode ter quebra de linha dentro do blockquote.]
```

### Regras

- Cada questão começa com **`**N. ...**`** em **negrito** + número + ponto + espaço.
- Alternativas: **`- [ ]`** para erradas, **`- [x]`** para correta. Apenas **uma** correta.
- 4 alternativas (A, B, C, D). **Nunca** 5.
- Explicação em **blockquote** com prefixo **`**Explicação:**`** literal.
- **Mínimo 5, máximo 8 questões** por aula clínica.
- Pelo menos **1 questão é caso clínico longo** (180–400 chars no enunciado).
- **Sem metatexto** ("conforme estudado", "a aula mostra...").

---

## 6. Macetes assinados — onde colocar

Por aula, **2 a 3 macetes** assinados como `> **Macete MedGradPlus — [NOME]:**`. Distribua:

1. **Um nos tópicos de desenvolvimento** (em contexto de uso real).
2. **Um na seção de conduta** (regra prática).
3. **Um obrigatório na seção `### Macete-âncora` do Pré-Prova** (a frase final).

**Macetes consagrados a usar quando o tema bater:**

- **BEATA do Child-Pugh** (Bilirrubina, Encefalopatia, Ascite, TP/INR, Albumina).
- **MUDPILES** (acidose com AG aumentado: Methanol, Uremia, DKA, Paraldehyde, Iron/INH, Lactate, Ethylene glycol, Salicylates).
- **6 P's da isquemia arterial** (Pain, Pallor, Pulselessness, Paresthesia, Paralysis, Poikilothermia).
- **ABCDE do trauma** (Airway, Breathing, Circulation, Disability, Exposure).
- **HEAT do AVC** (Hipoglicemia, Eletrólitos, Atrial fibrillation, Time/Trombólise).
- **PIRO da sepse** (Predisposição, Infecção, Resposta, Disfunção orgânica).
- **APGAR do RN** (Aparência, Pulso, Gesticulação, Atividade, Respiração).

Quando criar **macete novo** (não consagrado): marque com `[verificar consenso]` para revisor checar.

---

## 7. Aplicação clínica sem seção fixa de caso

Não usar `## Caso da Semana`, "Ato 1/Ato 2/Ato 3" ou bloco de caso longo fora do Mini Quiz. Esse formato foi reprovado pelo mantenedor por quebrar o ritmo do material.

O raciocínio clínico deve entrar de forma mais natural:

- Em **frases curtas dentro dos tópicos**, conectando achado -> hipótese -> conduta.
- Em **callouts de pegadinha**, quando a banca troca um diagnóstico por outro.
- Em **Ponte com a Clínica**, com 1-2 parágrafos aplicados e objetivos.
- No **Mini Quiz** e nas **Questões Essenciais**, onde a vinheta faz sentido como avaliação.

Se o conteúdo precisar de uma história clínica longa para ensinar, prefira transformar em **Mini Quiz** ou em questão essencial, não em seção visível no material.

---

## 8. Mapeamento interno de questões públicas

Sempre que o material aborda um tema cobrado em provas públicas, registre referências **apenas em `data/refs/<aula_id>.refs.json`**. Não liste questões públicas, questões de residência ou questões mapeadas no corpo do `.md`, porque o aluno já terá a aba de Questões Essenciais e o banco de questões antigas.

- **Resmedicina, Estratégia MED Q-bank gratuita, Sanar Up, MedQuest, Medway Q** (alguns gratuitos, outros parcialmente).
- **Bancos abertos**: ENARE (provas oficiais públicas), provas de concursos públicos médicos (Iamspe, FCC-Saúde).
- **Sites com provas oficiais**: enare.gov.br, sis.fas.usp.br (USP arquivos), unicamp (Comvest), unifesp (CRMV).

A mineração efetiva é tarefa de curadoria/revisor e deve ficar invisível para o aluno, servindo só para calibrar geração e auditoria.

---

## 9. Política de salvamento (mantida do v2)

Toda aula é salva nos **dois caminhos espelhados**:

1. `data/materiais/<materia_id>/<aula_id>.md`
2. `materiais/modulo<N>/<materia_id>/<aula_id>.md`

**Validação obrigatória após salvar:**

```powershell
Compare-Object (Get-Content "data/materiais/cir6/cir6_a1.md") (Get-Content "materiais/modulo6/cirurgia_ortopedia/cir6_a1.md")
# Esperado: nenhum output (arquivos idênticos)
```

---

## 10. Checklist final (rodar antes de aprovar)

### Encoding e formato

- [ ] **UTF-8 sem BOM** confirmado?
- [ ] **Sem caracteres proibidos** (setas Unicode, NBSP, aspas curvas)?
- [ ] **Sem trailing spaces** ou `\r\n`?
- [ ] **Linhas em branco** entre blocos?

### Estrutura

- [ ] **Cabeçalho** (Disciplina/Módulo/Referência/Tempo) presente?
- [ ] **Mínimo 240 linhas** para clínica/cirurgia/ortopedia/farm? (180 linhas é apenas piso estrutural legado, não aprovação de qualidade.)
- [ ] **Ordem das seções** correta? (Relevância → Tópicos → Diferencial/Conduta quando fizer sentido → Ponte com a Clínica → Pontos-Chave → Mini Quiz → Pré-Prova → Fontes)
- [ ] **Sem seção `## Caso da Semana`, `## Ponte com próximas aulas`, `## Questões mapeadas` ou `## Questões de Residência`** no corpo do material?

### Conteúdo

- [ ] **2 a 3 macetes assinados** "Macete MedGradPlus —"?
- [ ] **5 a 8 questões** no Mini Quiz, com **1 caso longo**?
- [ ] **2 a 4 fontes** citadas (livro/sociedade/edição)?
- [ ] **Persona MedGradPlus** presente em pelo menos **3 callouts**?
- [ ] Cita **MedGradPlus** em primeira pessoa do plural **2 a 3 vezes**?

### Tabelas

- [ ] **1ª coluna 100% negrito**?
- [ ] **Diferenciais** destacados nas demais colunas?
- [ ] **Sem pipes literais**, sem `<br>`, sem listas dentro de células?

### Negritagem

- [ ] **Corpo 12–18%**, **Pré-Prova 35–45%**?
- [ ] **Sem frases longas inteiras** negritadas?
- [ ] **Pontos-Chave** com 10–15 bullets e pelo menos **8 marcações em negrito**?

### Salvamento

- [ ] **Espelhado** em `data/materiais/` e `materiais/moduloN/`?
- [ ] **Quantidade de linhas** reportada?

### Citação a banca (residência)

- [ ] Pelo menos **1 menção a banca de residência** (ENARE, USP, Unifesp, Einstein, AMRIGS, Iamspe) em texto fluido, sem criar seção visível de questões ou lista de provas?

---

## 11. Política de continuidade (1 aula por vez)

Após validar uma aula:

1. Reportar **número de linhas**.
2. Confirmar **espelhamento** nos dois caminhos.
3. Atualizar `PLANO_CICLO_CLINICO.md` (status da aula → ✅).
4. Seguir para a próxima aula **da mesma disciplina** (não pular).
5. Entre disciplinas, atualizar também **`MAPA_CICLO_CLINICO.md`**.

**Nunca** rodar script para escrever em lote o conteúdo final. Agente trabalha **manualmente, uma aula por vez**, com revisão.

### 11.1 Anti-decaimento em sessões longas

- Subagente pode ajudar em **pesquisa, auditoria e checklist**, mas não assume a redação final de material clínico.
- A redação final deve ser feita/revisada pelo agente principal de maior capacidade e maior reasoning.
- Se a aula ficar com 200–239 linhas, sem negritos nos Pontos-Chave, ou com persona apenas protocolar, marque como **rascunho fraco**, não como aprovado.
- A cada 2 aulas novas, rodar auditoria de linhas, seções, persona, Mini Quiz e Pontos-Chave. Se 2 aulas seguidas falharem, parar geração e revisar prompt/modelo antes de continuar.

---

**Versão 3.0 — 2026-05-07.** Atualize quando a persona ou estrutura mudar de forma vinculante. Cada mudança aqui propaga para o checklist do agente revisor.
