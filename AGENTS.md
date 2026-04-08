# AGENTS.md — MedGradPlus

Leia este arquivo **no início de qualquer sessão** (Cursor, Copilot, Claude, etc.). Ele define a ordem de leitura, o nome do produto e a obrigação de manter a documentação coerente.

## Nome do produto

- **Nome atual:** **MedGradPlus** (interface, prompts, README, comunicação).
- **Legado:** o repositório GitHub pode manter o nome `MedUni9`; o **Firebase de produção** é **`medgradplus`** (ver [`FIREBASE_E_GIT.md`](FIREBASE_E_GIT.md)). Não tratar `meduni9-869eb` como destino ativo.

## Ordem de leitura (rápida)

| Ordem | Arquivo | Conteúdo |
|-------|---------|----------|
| 1 | Este `AGENTS.md` | Regras para IAs e mapa da documentação |
| 2 | [CLAUDE_GUIA.md](CLAUDE_GUIA.md) | Stack, pastas, fluxo de deploy, o que não commitar |
| 3 | [PROJECT_CONTEXT.md](PROJECT_CONTEXT.md) | Módulos, disciplinas, `data/materias.json`, planos de ensino |
| 4 | [COMO-ATUALIZAR.md](COMO-ATUALIZAR.md) | Operação: flashcards, questões, admin |
| 5 | [FIREBASE_E_GIT.md](FIREBASE_E_GIT.md) | Projeto Firebase `medgradplus`, deploy, o que não commitar |
| 6 | [`.github/copilot-instructions.md`](.github/copilot-instructions.md) | Regras de materiais `.md` (encoding, Pré-Prova) |
| 7 | Prompts em [prompts/](prompts/) | Ver hierarquia canônica abaixo |

## Prompts canônicos (não misturar prioridade)

| Conteúdo | Documento canônico |
|----------|-------------------|
| Materiais de apoio (`.md` de aula) | [prompts/gerar_materiais_apoio.md](prompts/gerar_materiais_apoio.md) |
| Questões e flashcards (`data/questoes.json`, `data/flashcards.json`) | [prompts/gerar_questoes_flashcards.md](prompts/gerar_questoes_flashcards.md) |
| **Curadoria de Negritos (Aesthetics)** | [prompts/padronizacao_negritos.md](prompts/padronizacao_negritos.md) |

Os arquivos `gerar_questoes.md` e `gerar_flashcards.md` são **complementares** (métricas, estilo, JSON); em conflito, prevalece `gerar_questoes_flashcards.md`. **A negritagem estratégica é obrigatória para legibilidade.**

## Glossário mínimo

| Termo | Significado |
|-------|-------------|
| `materia` / ID da disciplina | Chave em `data/materias.json` (ex.: `bmf1`, `mad2`). |
| `aula_id` | ID da aula no catálogo (ex.: `bmf1_a3`); usado em arquivos `.md` e no campo `tema` em questões/flashcards. |
| `modulo` | Número do módulo curricular (1–6); pasta `materiais/modulo{N}/`. |
| Dupla de materiais | Mesmo conteúdo em `data/materiais/<materia>/<aula>.md` e `materiais/modulo<N>/<materia>/<aula>.md`. |
| `caso_clinico` | Campo booleano em itens de `data/questoes.json`: vinheta clínica integral. Novas questões devem incluir; legado sem campo equivale a `false` no app. |

## Stack (verdade no código)

- **Frontend:** um único [index.html](index.html), **React 18** (UMD) + Babel standalone, sem build obrigatório.
- **Hospedagem:** Firebase Hosting ([firebase.json](firebase.json)).
- **Dados estáticos:** JSON em `data/` carregados via `fetch`.

## Repositório: `materiais/` no Git

A pasta **`materiais/`** (e o espelho em **`data/materiais/`**) **é versionada de propósito**, para permitir **reverter** alterações de conteúdo se algo sair ruim. Qualquer doc antigo que diga "não commitar materiais" está **obsoleto**.

## Obrigação para IAs (atualizar docs ao mudar o projeto)

Ao alterar convenções (nomes, caminhos, formato JSON, regras de prompt, deploy):

1. Atualize **este** `AGENTS.md` se a ordem de leitura ou o glossário mudarem.
2. Atualize [CLAUDE_GUIA.md](CLAUDE_GUIA.md) para stack, pastas ou fluxo de trabalho.
3. Atualize [PROJECT_CONTEXT.md](PROJECT_CONTEXT.md) se módulos, `materias.json` ou scripts de dados mudarem.
4. Atualize [COMO-ATUALIZAR.md](COMO-ATUALIZAR.md) se o fluxo operacional do mantenedor mudar.
5. Atualize [FIREBASE_E_GIT.md](FIREBASE_E_GIT.md) se o projeto Firebase, URL ou política de secrets no Git mudarem.
6. Atualize [`.github/copilot-instructions.md`](.github/copilot-instructions.md) se regras de materiais `.md` mudarem.
7. Atualize o prompt canônico correspondente em `prompts/`.

Evite duplicar parágrafos longos entre arquivos: **um lugar canônico** + referência cruzada.

## Links úteis

- App: https://medgradplus.web.app  
- Firebase Console: https://console.firebase.google.com/project/medgradplus/overview  
