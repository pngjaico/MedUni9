# Guia de Sessão — MedGradPlus

> Leia [AGENTS.md](AGENTS.md) primeiro, depois este arquivo no início de qualquer sessão de desenvolvimento.

---

## O que é esse projeto

**MedGradPlus** — PWA de estudos de medicina para alunos da Uninove Vergueiro.

URL: https://meduni9-869eb.web.app

Stack intencional: **um único `index.html`** com React 18 via CDN, sem build step, sem `npm run` obrigatório.

Firebase Hosting para deploy. Firestore para dados de usuário.

---

## Estrutura de pastas

```
meduni9-app/
├── AGENTS.md               ← Entrada para IAs: ordem de leitura e glossário
├── index.html              ← TODO o app (React, CSS, lógica)
├── firebase.json           ← Config de deploy (ignore list importante)
├── .gitignore
├── data/
│   ├── materias.json       ← Catálogo de matérias e aulas
│   ├── questoes.json       ← Banco de questões
│   ├── flashcards.json     ← Flashcards
│   ├── codigos.json        ← Códigos de acesso
│   └── materiais/          ← Espelho editável dos .md (versionado no Git)
├── materiais/              ← Materiais servidos pelo app (.md) — versionados para permitir revert
│   ├── GUIA_CRIACAO.md
│   └── modulo{N}/{sigla}/
│       └── {sigla}_a{N}.md
├── conteudos/              ← Local; ignorado no deploy (firebase.json); não versionar PDFs pesados se preferir
├── prompts/
│   ├── gerar_materiais_apoio.md
│   └── gerar_questoes_flashcards.md
└── scripts/
```

---

## Deploy

```bash
firebase deploy --only hosting
```

- `materiais/` e `data/materiais/` entram no deploy a partir do disco local.
- `conteudos/` não vai para o hosting (ver `firebase.json`).

---

## Como funciona o viewer de materiais

1. Usuário clica em uma aula na aba "Materiais".
2. App faz `fetch()` para `materiais/modulo{N}/{sigla}/{id}.md`.
3. Renderiza com `marked.js` na classe `.markdown-body`.
4. **Checklist** (`- [ ]`) fica interativo, estado salvo em `localStorage`.
5. **Seção `## Pré-Prova`** detectada automaticamente e exibida como accordion colapsável no final.

---

## CSS e design

- **Tema:** escuro, background `#0A1628`, accent `#00B4D8` (ciano).
- **Fontes:** `Outfit` (títulos/headings) + `DM Sans` (UI) + `Lexend` (leitura de materiais).
- **Markdown body:** classe `.markdown-body` com hierarquia visual definida.
- Variáveis CSS: `--primary`, `--text-primary`, `--text-secondary`, `--bg-card`, `--border-card`.

---

## Funcionalidades existentes

| Feature | Status |
|---------|--------|
| Questões múltipla escolha | Sim |
| Flashcards estilo Anki | Sim |
| Caderno de erros | Sim |
| Materiais de apoio (.md) | Sim |
| Pré-Prova (accordion) | Sim |
| Checklist interativo | Sim |
| Feedback de usuário | Sim |
| Login por código | Sim |
| Filtro por semestre | Sim |

---

## Dados importantes

- Aulas definidas em `data/materias.json` — toda geração de material depende dos IDs aqui.
- Para adicionar nova matéria: editar `materias.json` + criar pastas + arquivos `.md` + deploy.
- Banco de questões: `data/questoes.json`.

---

## Fluxo de trabalho padrão

```
Edita index.html ou data/*.json
       ↓
git add <arquivos relevantes>
git commit -m "mensagem"
git push origin main
       ↓
firebase deploy --only hosting
```

**Evitar commitar:** segredos locais, `.claude/settings.local.json` se contiver dados pessoais, artefatos gerados listados em `.gitignore`. Materiais `.md` **podem e devem** ser commitados quando fizer parte do fluxo de revisão (ver [AGENTS.md](AGENTS.md)).

---

## Próximas pendências conhecidas

- [ ] Cobertura de materiais `.md` por disciplina (ver `prompts/gerar_materiais_apoio.md`).
- [ ] Pré-Prova no mobile (testes manuais).
- [ ] Expandir banco de questões.

---

## Referências rápidas

- Prompt de geração de materiais: `prompts/gerar_materiais_apoio.md`
- Questões/flashcards: `prompts/gerar_questoes_flashcards.md`
- Guia visual dos materiais: `materiais/GUIA_CRIACAO.md`
- Firebase console: https://console.firebase.google.com/project/meduni9-869eb
