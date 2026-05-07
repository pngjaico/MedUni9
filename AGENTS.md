# AGENTS.md — MedGradPlus

Leia este arquivo **no início de qualquer sessão** (Cursor, Copilot, Claude, etc.). Ele define a ordem de leitura, o nome do produto e a obrigação de manter a documentação coerente.

## Nome do produto

- **Nome atual:** **MedGradPlus** (interface, prompts, README, comunicação).
- **Legado:** o repositório GitHub pode manter o nome `MedUni9`; o **Firebase de produção** é **`medgradplus`** (ver [`FIREBASE_E_GIT.md`](FIREBASE_E_GIT.md)). Não tratar `meduni9-869eb` como destino ativo.

## Regras de Operação da IA (CRÍTICO)

1. **Uso do Navegador:** O `browser_subagent` (ou qualquer ferramenta de navegação visual) deve ser utilizado **ESTRITAMENTE e APENAS** quando o usuário solicitar explicitamente. Nunca abrir o navegador para verificações automáticas ou "sanity checks" não solicitados.

## Ordem de leitura (rápida)

|  ordering | File | Content |
|-------|---------|----------|
| 1 | Este `AGENTS.md` | Regras para IAs e mapa da documentação |
| 2 | [docs/MAPA_CURRICULAR_ELITE.md](docs/MAPA_CURRICULAR_ELITE.md) | **Referências Padrão-Oura e Tópicos por Matéria** |
| 3 | [CLAUDE_GUIA.md](CLAUDE_GUIA.md) | Stack, pastas, fluxo de deploy, o que não commitar |
| 4 | [PROJECT_CONTEXT.md](PROJECT_CONTEXT.md) | Módulos, disciplinas, `data/materias.json`, planos de ensino |
| 4 | [COMO-ATUALIZAR.md](COMO-ATUALIZAR.md) | Operação: flashcards, questões, admin |
| 5 | [FIREBASE_E_GIT.md](FIREBASE_E_GIT.md) | Projeto Firebase `medgradplus`, deploy, o que não commitar |
| 6 | [`.github/copilot-instructions.md`](.github/copilot-instructions.md) | Regras de materiais `.md` (encoding, Pré-Prova) |
| 7 | Prompts em [prompts/](prompts/) | Ver hierarquia canônica abaixo |

## Prompts canônicos (não misturar prioridade)

| Conteúdo | Documento canônico |
|----------|-------------------|
| **Questões de Prova** | [prompts/gerar_questoes.md](prompts/gerar_questoes.md) |
| Flashcards (`data/flashcards.json`) | [prompts/gerar_flashcards.md](prompts/gerar_flashcards.md) |
| Materiais de apoio — **Ciclo Básico (Mod 1–4)** | [prompts/gerar_materiais_apoio.md](prompts/gerar_materiais_apoio.md) |
| Materiais de apoio — **Ciclo Clínico (Mod 5–8)** | [prompts/gerar_materiais_apoio_v3.md](prompts/gerar_materiais_apoio_v3.md) |
| **Persona MedGradPlus (voz/tom/macetes)** | [prompts/persona_medgradplus.md](prompts/persona_medgradplus.md) |
| **Curadoria de Negritos (Aesthetics)** | [prompts/padronizacao_negritos.md](prompts/padronizacao_negritos.md) |
| **Plano-mestre Ciclo Clínico (handoff)** | [PLANO_CICLO_CLINICO.md](PLANO_CICLO_CLINICO.md) |

Os arquivos `gerar_questoes.md` e `gerar_flashcards.md` são **complementares** (métricas, estilo, JSON); em conflito, prevalece `gerar_questoes_flashcards.md`. **A negritagem estratégica é obrigatória para legibilidade.**

**Para qualquer material do ciclo clínico (Mod 5–8):** ler **antes** `prompts/persona_medgradplus.md`, depois `prompts/gerar_materiais_apoio_v3.md`. O v2 (`gerar_materiais_apoio.md`) continua válido só para revisões do ciclo básico.

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

## ⚠️ Operações destrutivas de Git — LEIA ANTES DE EXECUTAR

**`git filter-repo`, `git reset --hard`, `git rebase`, `git restore .`** apagam mudanças não commitadas **sem aviso**.

Regra obrigatória antes de qualquer operação destrutiva:

```sh
# 1. Verificar se há mudanças não commitadas
git status --short

# 2. Se houver: commitar ou stash ANTES de continuar
git stash push -m "wip: salvar antes de <operação>"
# ou
git add -A && git commit -m "wip: checkpoint antes de <operação>"
```

Para `git filter-repo`, **sempre usar o wrapper seguro**:
```sh
bash scripts/filter_repo_safe.sh <argumentos>
```
O wrapper (`scripts/filter_repo_safe.sh`) faz stash automático se o working tree estiver sujo, roda o filter-repo e depois restaura o stash.

> **Contexto:** Em 2026-04-17 o filter-repo apagou mudanças não commitadas em `data/questoes.json` e `index.html` porque rodou sem stash prévio.

---

## Token Optimization: Graphify Knowledge Graph (⭐ OBRIGATÓRIO)

**Antes de qualquer exploração de código ou leitura de contexto:**

1. **Verificar se `graphify-out/graph.json` existe** no raiz do projeto
2. **Se existir, usar `graphify query "sua pergunta"` SEMPRE** em vez de ler arquivos brutos
3. **Nunca** ler múltiplos arquivos se a busca no graph pode resolver

**Economia:** ~90% de tokens ao usar graph vs ler codebase bruto.

**Comandos essenciais:**
```bash
# Buscar função/componente/padrão no graph
graphify query "where is function X defined"

# Encontrar dependências
graphify query "what calls function X"

# Entender relacionamento
graphify path "nodeA" "nodeB"
```

**Validação:** Se `graphify-out/` não existe, rode `graphify update .` primeiro.

---

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
