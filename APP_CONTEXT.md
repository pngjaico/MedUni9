# APP_CONTEXT.md — MedGradPlus

Resumo executivo do app para onboarding rápido, sessões com IA e alinhamento de contexto.

Documentos canônicos:
- [`AGENTS.md`](AGENTS.md): regras para IA, ordem de leitura e glossário
- [`PROJECT_CONTEXT.md`](PROJECT_CONTEXT.md): catálogo curricular, módulos e estrutura de dados
- [`CLAUDE_GUIA.md`](CLAUDE_GUIA.md): stack, pastas e fluxo de trabalho
- [`FIREBASE_E_GIT.md`](FIREBASE_E_GIT.md): produção, deploy e política de Git

## O que é o app

**MedGradPlus** é uma plataforma web/PWA de estudos para alunos de medicina, organizada por módulo, disciplina e aula. O produto entrega:

- flashcards com lógica de revisão
- questões objetivas com filtros e caderno de erros
- materiais em Markdown por aula
- atlas/revisões de anatomia e histologia
- acesso por login e regras de liberação ligadas a compra/código

Produção atual:
- URL: `https://medgradplus.web.app`
- Firebase de produção: `medgradplus`

## Arquitetura real

- O app principal vive em **[`index.html`](index.html)**.
- A interface usa **React 18 via CDN/UMD**, sem build step obrigatório.
- O conteúdo estático é carregado de `data/*.json` via `fetch`.
- Os materiais de aula ficam em `materiais/modulo{N}/{materia}/{aula}.md`.
- O app registra **service worker** via [`sw.js`](sw.js), então funciona como PWA.
- O deploy do frontend é feito por **Firebase Hosting** com rewrite global para `index.html`.

## Backend e integrações

- O frontend inicializa **Firebase App**, **Firestore** e **Firebase Auth** dentro do próprio `index.html`.
- Há uma camada leve de backend em [`functions/index.js`](functions/index.js).
- As Cloud Functions concentram principalmente:
  - regras de checkout Stripe no servidor
  - concessão/revogação de acesso por email após pagamento/refund
  - integrações auxiliares com Firestore
- O projeto também usa **Stripe** para monetização e liberação de acesso.

## Estrutura de dados

Arquivos principais em `data/`:

- `materias.json`: catálogo de disciplinas, módulos e aulas
- `questoes.json`: banco principal de questões
- `flashcards.json`: banco principal de flashcards
- `materiais_index.json`: índice auxiliar dos materiais
- `anatomia_atlas.json` e `histologia_atlas.json`: conteúdo visual/atlas
- `vendas_mensais.json`: dados consumidos por partes da experiência comercial

Regras importantes:

- `materia` é a chave da disciplina em `data/materias.json`
- `aula_id` segue o padrão usado no catálogo e nos arquivos `.md`
- os materiais existem em dupla versionada: `materiais/` e `data/materiais/`
- mudanças em IDs podem quebrar questões, flashcards e links de materiais

## Funcionalidades centrais do produto

- Home com progresso e estatísticas locais
- Flashcards com estado salvo em `localStorage`
- Questões com histórico, revisão e caderno de erros
- Viewer de Markdown com renderização por `marked`
- Checklist interativo em materiais
- Seção “Pré-Prova” tratada de forma especial no viewer
- Login/cadastro/recuperação de senha com Firebase Auth
- Controle de acesso por semestre/módulo e por origem da concessão

## Onde mexer em cada tipo de mudança

- UI, navegação e lógica principal: [`index.html`](index.html)
- Regras de hosting/PWA/cache: [`firebase.json`](firebase.json) e [`sw.js`](sw.js)
- Regras/indexes do Firestore: [`firestore.rules`](firestore.rules) e [`firestore.indexes.json`](firestore.indexes.json)
- Pagamentos e grants de acesso: [`functions/index.js`](functions/index.js)
- Catálogo curricular: [`data/materias.json`](data/materias.json)
- Banco de conteúdo: `data/questoes.json`, `data/flashcards.json` e `materiais/`

## Restrições e convenções do projeto

- O nome do produto é **MedGradPlus**; `MedUni9` é legado de repositório.
- O Firebase ativo é **`medgradplus`**.
- `materiais/` é versionado de propósito e pode ser commitado.
- O app evita build complexo: a fonte de verdade do frontend continua sendo um único arquivo.
- Ao mudar convenções, a documentação viva precisa ser atualizada, especialmente `AGENTS.md`, `PROJECT_CONTEXT.md`, `CLAUDE_GUIA.md` e `FIREBASE_E_GIT.md`.

## Resumo em uma frase

O MedGradPlus é um app web/PWA de estudos médicos com frontend React single-file, conteúdo acadêmico estático em JSON/Markdown, autenticação e dados de usuário em Firebase, e monetização/acesso controlados por Stripe + Cloud Functions.
