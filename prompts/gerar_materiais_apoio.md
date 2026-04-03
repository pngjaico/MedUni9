# Guia Completo: Geração de Materiais de Apoio — MedGradPlus

> Este arquivo é o guia único e autoritativo para gerar materiais de apoio do app MedUni9.
> Leia-o por completo antes de escrever qualquer arquivo.

---

## 1. Contexto do Projeto

**App:** MedGradPlus — PWA de estudos de medicina para alunos da Uninove (1º semestre).
**URL:** `meduni9-869eb.web.app`
**Stack:** único `index.html` com React 18 via CDN + Firebase Hosting.
**Materiais:** arquivos `.md` servidos estaticamente pelo Firebase. O app os busca via `fetch()` e renderiza o markdown com uma biblioteca própria.
**Gitignore:** a pasta `materiais/` está no `.gitignore`. Ela é deployada pelo Firebase mas NÃO commitada no git.

---

## 2. Passo 0 — Verificação Obrigatória Antes de Qualquer Arquivo

**Antes de escrever uma única linha de conteúdo**, abra `data/materias.json` e confirme:

1. O `id` exato da aula (ex: `pmh_a3`)
2. O `tema` da aula (ex: "Glicólise e Gliconeogênese")
3. A `descricao` da aula (lista os subtópicos esperados)
4. O número do `modulo` (ex: `1`)
5. A `sigla` da matéria (ex: `pmh`)
6. O `nome` completo da matéria (ex: "Processos Metabólicos Humanos")

Só após confirmar todos esses dados comece a escrever.

---

## 3. Onde Salvar Cada Arquivo

```
materiais/
  modulo1/
    pmh/
      pmh_a1.md
      pmh_a2.md
      pmh_a3.md
    sus/
      sus_a1.md
    bmf1/
      bmf1_a1.md
  modulo2/
    bcm1/
      bcm1_a1.md
```

**Regra geral:** `materiais/modulo{N}/{sigla}/{aula_id}.md`

Exemplos:
- Aula `pmh_a3`, módulo 1, sigla `pmh` → `materiais/modulo1/pmh/pmh_a3.md`
- Aula `sus_a2`, módulo 1, sigla `sus` → `materiais/modulo1/sus/sus_a2.md`
- Aula `bcm1_a1`, módulo 2, sigla `bcm1` → `materiais/modulo2/bcm1/bcm1_a1.md`

> Nunca use maiúsculas, espaços ou caracteres especiais nos nomes de pasta/arquivo.

---

## 4. Como Criar o Arquivo — Método Heredoc Bash

**Sempre use o método heredoc** com `cat > arquivo << 'ENDOFFILE'` para criar arquivos. Este método preserva corretamente acentos UTF-8 (ã, â, é, ç, í, ó, etc.) no Git Bash do Windows, ao contrário de outros métodos que podem corrompê-los.

```bash
cat > "C:/Users/Usuario-pc/Desktop/Aplicativo Uni9/meduni9-app/materiais/modulo1/pmh/pmh_a3.md" << 'ENDOFFILE'
[conteúdo completo do arquivo aqui]
ENDOFFILE
```

Para **append** (adicionar seção a arquivo existente), use `cat >>`:

```bash
cat >> "C:/Users/Usuario-pc/Desktop/Aplicativo Uni9/meduni9-app/materiais/modulo1/pmh/pmh_a1.md" << 'ENDOFFILE'

---

## Pré-Prova

[conteúdo da seção]
ENDOFFILE
```

---

## 5. Geração Individual — Um Arquivo por Vez

- Gere **um arquivo por vez**.
- Não agrupe vários arquivos em uma única resposta.
- Após gerar cada arquivo, confirme com o usuário antes de prosseguir ao próximo.
- Se o usuário pedir vários arquivos de uma vez, execute-os em sequência separada, um comando Bash por arquivo.

---

## 6. Template Completo Obrigatório

Todo arquivo de material de apoio deve seguir exatamente este template. Todas as seções são obrigatórias, exceto onde indicado.

```markdown
**{Nome Completo da Matéria} → {Tema Geral da Matéria} → {Tema da Aula}**

# {Tema da Aula} — Material de Estudo

⏱ 10-15 min · Módulo {N} · {SIGLA}

---

## Por que isso cai na prova?

[Parágrafo direto, 3-5 frases. Responda: por que a Uninove cobra isso? Qual é o contexto
clínico? O que o aluno vai usar na vida real? Tom de colega de medicina explicando antes
da prova — sem "neste material vamos aprender...", sem introduções genéricas.]

---

## 1. {Conceito Principal}

[Explicação em prosa fluída. Use **negrito** nos termos técnicos na primeira aparição.
Prefira tabelas a listas longas quando houver comparação entre conceitos.]

## 2. {Segundo Conceito}

[Idem. Continue com quantas seções forem necessárias para cobrir o tema completo da prova.]

## 3. {Terceiro Conceito}

...

(Adapte o número de seções ao tema. Mínimo 2, máximo ~6.)

---

## Erros Clássicos em Prova (Uninove)

- [Erro específico 1: descreva o erro e por que acontece]
- [Erro específico 2]
- [Erro específico 3]
- [Erro específico 4, se relevante]

---

## Checklist de Revisão

- [ ] [Item verificável e específico 1]
- [ ] [Item verificável e específico 2]
- [ ] [Item verificável e específico 3]
- [ ] [Item verificável e específico 4]
- [ ] [Item verificável e específico 5]

---

## Ponte com a Clínica

[Um parágrafo (4-6 frases) conectando o tema à prática médica real: consultório,
diagnóstico, interpretação de exames, raciocínio clínico ou conduta terapêutica.
Exemplos concretos são melhores do que afirmações genéricas.]

---

## Pré-Prova

> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### O que você PRECISA saber

- **[conceito-chave 1]:** [definição completa em uma linha]
- **[conceito-chave 2]:** [definição completa em uma linha]
- **[conceito-chave 3]:** [definição completa em uma linha]
- **[conceito-chave 4]:** [definição completa em uma linha]
- **[conceito-chave 5]:** [definição completa em uma linha, se necessário]

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Diferença principal |
|------------|------------|---------------------|
| [termo 1]  | [termo 2]  | [diferença objetiva] |
| [termo 3]  | [termo 4]  | [diferença objetiva] |
| [termo 5]  | [termo 6]  | [diferença objetiva] |

### Frase-âncora para não esquecer

> "[Frase mnemônica, analogia ou regra de ouro específica ao tema — uma linha que
> resume o ponto mais importante e que o aluno vai lembrar na hora H]"
```

---

## 7. Como o App Renderiza Cada Elemento Markdown

O app converte o markdown para HTML e aplica estilos via CSS. Entender isso ajuda a escrever materiais que ficam bonitos no mobile.

| Elemento markdown | Visual no app |
|---|---|
| `# H1` (ex: título principal) | Texto branco grande com sublinhado na cor ciano |
| `## H2` (ex: seções principais) | Borda esquerda ciana, texto branco em tamanho médio |
| `### H3` (ex: subseções) | Texto azul `#38BDF8`, sem borda, tamanho menor |
| `**negrito**` | Texto branco com peso visual maior — use para termos técnicos |
| `*itálico*` | Texto levemente diferenciado — use com parcimônia |
| `> blockquote` | Bloco com fundo translúcido ciano — ideal para macetes e definições rápidas |
| `` `código inline` `` | Fundo escuro, fonte monoespaçada — use para genes, fórmulas, IDs |
| `- lista` | Lista com marcadores — prefira tabelas para comparações |
| `- [ ] checkbox` | Checkbox interativo — estado persistido no localStorage do navegador |
| `\| tabela \|` | Tabela com bordas suaves, boa para comparações lado a lado |
| `## Pré-Prova` (exatamente assim) | Accordion com fundo âmbar/dourado, colapsável, aparece ao final da tela |
| `---` (linha horizontal) | Divisor visual fino entre seções |

**Importante:** A seção `## Pré-Prova` só vira accordion âmbar se o título for exatamente `## Pré-Prova` — sem variações, sem emoji, sem dois-pontos.

---

## 8. Regras de Estilo e Conteúdo

1. **Português correto com acentuação completa** — ã, â, é, ç, í, ó, etc. O heredoc bash preserva UTF-8 corretamente.
2. **Tom conversacional e direto** — como um colega de medicina explicando na véspera da prova. Sem formalidades acadêmicas, sem introduções genéricas.
3. **Tabelas sempre que houver comparação** — termos vs. definição, fármacos vs. efeito, condição A vs. condição B, diferencial diagnóstico.
4. **Negrito nos termos técnicos** na primeira aparição dentro de cada parágrafo. Não repita negrito no mesmo termo.
5. **Sem menção a "banca"** — use "a Uninove" ou "os professores" ou "a prova".
6. **Profundidade para prova da Uninove** — não é residência, não é sub-especialidade. Leitura em 10-15 min.
7. **Seção `## Pré-Prova` é obrigatória** — sempre ao final, sempre com esse título exato, sempre com as três subseções (O que você PRECISA saber / Diferenciações / Frase-âncora).
8. **Checklist com itens específicos** — não use "Consigo explicar o tema". Use itens verificáveis: "Sei diferenciar anabolismo de catabolismo", "Conheço as 3 enzimas regulatórias da glicólise", etc.

---

## 9. Fontes Recomendadas por Matéria

| Matéria (sigla) | Fontes principais |
|---|---|
| BMF1/2/3/4 — Anatomia, Fisiologia | Gray's Anatomy; Guyton & Hall — Tratado de Fisiologia Médica |
| PMH — Bioquímica e Biologia Molecular | Harper — Bioquímica Ilustrada; Lehninger — Princípios de Bioquímica |
| BCM1 — Biologia Celular e Molecular | Alberts — Biologia Molecular da Célula |
| MAD1/2 — Imunologia e Microbiologia | Janeway — Imunobiologia; Murray — Microbiologia Médica |
| SUS — Saúde Coletiva e APS | Documentos do Ministério da Saúde; Starfield — Atenção Primária |
| SEMIO1/2 — Semiologia | Bickley — Bates: Propedêutica Médica; Porto — Exame Clínico |
| Fisiopatologia | Robbins — Patologia Básica |
| Farmacologia | Goodman & Gilman |

---

## 10. Prioridade de Geração

Quando não houver instrução específica, gere nesta ordem:

1. `pmh` — Processos Metabólicos Humanos (bioquímica, essencial para todas as matérias)
2. `sus` — Saúde Coletiva (prova teórica importante no 1º semestre)
3. `bmf1` — Anatomia/Fisiologia (bmf1_a1 já existe, pule)
4. `bcm1` — Biologia Celular e Molecular
5. `mad1` — Imunologia e Microbiologia
6. Demais matérias na sequência de módulo

---

## 11. Encoding UTF-8 — Regra Crítica

**Problema já acontecido:** arquivos `.md` gerados via PowerShell sem BOM tiveram todos os acentos substituídos por `?` (caractere `U+FFFD`). O app renderizava o arquivo corrompido — não era bug do markdown, era o arquivo em si.

### Métodos seguros para salvar arquivos

| Método | Seguro | Observação |
|---|---|---|
| `bash heredoc` (`cat > file << 'ENDOFFILE'`) | **Sim** | Método preferido — Git Bash usa UTF-8 por padrão |
| Python `path.write_text(content, encoding="utf-8")` | **Sim** | Sempre especificar o encoding explicitamente |
| PowerShell com BOM | **Sim** | PS1 deve ter BOM (`\xef\xbb\xbf`) — verificar antes de executar |
| PowerShell sem BOM | **NÃO** | PS5 lê como CP1252 — acentos viram `?` |
| Claude `Write` tool no Windows | **Evitar** | Pode usar encoding do sistema — use heredoc bash |

### Método heredoc bash — sempre usar assim

```bash
cat > "C:/Users/Usuario-pc/Desktop/Aplicativo Uni9/meduni9-app/materiais/modulo1/pmh/pmh_a3.md" << 'ENDOFFILE'
[conteúdo completo do arquivo aqui com todos os acentos]
ENDOFFILE
```

### Validar após gravar — obrigatório

Após gravar qualquer arquivo, rode:

```bash
python scripts/revisar_materiais.py --materia {sigla} --apenas-relatorio
```

Se aparecer `char_invalido` no relatório, o arquivo está corrompido. Para recuperar a partir dos PS1:

```bash
python scripts/recuperar_de_ps1.py
```

---

## 12. Git — O que commitar

`materiais/` está no `.gitignore` — os arquivos `.md` **não vão para o git**. O que vai para o git:

- Scripts novos ou modificados em `scripts/`
- Arquivos de prompt em `prompts/`
- Arquivos de dados em `data/` (exceto `data/feedback/`)
- Workflows em `.agents/workflows/`
- `data/agent_logs/` — logs de execução dos agentes

### Commit após cada sessão de geração

```bash
cd "C:/Users/Usuario-pc/Desktop/Aplicativo Uni9/meduni9-app"
git add data/agent_logs/ scripts/ prompts/
git commit -m "feat: materiais gerados para {lista_de_aulas}"
```

Se gerar flashcards ou questões, incluir os JSONs:

```bash
git add data/flashcards.json data/questoes.json data/refs/
git commit -m "feat: flashcards/questoes para {lista_de_aulas}"
```

---

## 13. Deploy — Publicar no App

`materiais/` não está no git mas **precisa estar no Firebase** para o app funcionar. O deploy lê os arquivos locais e os publica.

### Deploy completo (após geração)

```bash
cd "C:/Users/Usuario-pc/Desktop/Aplicativo Uni9/meduni9-app"
firebase deploy --only hosting
```

O deploy leva ~30 segundos. Após concluir, os materiais estarão acessíveis em `meduni9-869eb.web.app`.

### Quando fazer deploy

- Após gerar ou corrigir qualquer `.md` em `materiais/`
- Após corrigir corrupção de encoding
- **Não precisa** de deploy para mudanças só em scripts, prompts ou dados que já estão no git (esses não afetam o app diretamente)

### Verificar se chegou ao app

Após o deploy, abra uma aba anônima (sem cache) e navegue até a aula. Se o conteúdo não atualizar, force o service worker:

```
No browser: F12 → Application → Service Workers → Update
```

O service worker do app usa Network-First e tem `materiais/` no `NEVER_CACHE` — normalmente não precisa forçar.

---

## 14. Checklist de Entrega por Arquivo

Execute este checklist antes de confirmar que o arquivo está pronto:

- [ ] Verificou `id`, `tema`, `descricao` e `modulo` em `data/materias.json` antes de escrever
- [ ] Nome do arquivo = `{aula_id}.md` exato (ex: `pmh_a3.md`)
- [ ] Pasta correta: `materiais/modulo{N}/{sigla}/` (ex: `materiais/modulo1/pmh/`)
- [ ] Cabeçalho com breadcrumb (`**Matéria → Tema Geral → Tema da Aula**`)
- [ ] Linha de metadados (`⏱ 10-15 min · Módulo {N} · {SIGLA}`)
- [ ] Seção "Por que isso cai na prova?" — direta, sem introdução genérica
- [ ] Pelo menos 3 seções de conteúdo numeradas, com tabela quando cabível
- [ ] "Erros Clássicos em Prova (Uninove)" com erros específicos ao tema
- [ ] "Checklist de Revisão" com `- [ ]` e itens verificáveis específicos
- [ ] "Ponte com a Clínica" com exemplo concreto
- [ ] **`## Pré-Prova` ao final — obrigatório — com as 3 subseções**
- [ ] Acentuação e ortografia em português corretas — nenhum `nao`, `sao`, `voce` sem acento
- [ ] Sem menção a "banca"
- [ ] **Arquivo criado via heredoc bash** — nunca PS1 sem BOM, nunca Write tool
- [ ] Validado com `revisar_materiais.py` — sem `char_invalido` no relatório
- [ ] `git add` + `git commit` com mensagem descritiva
- [ ] `firebase deploy --only hosting` executado ao final da sessão
