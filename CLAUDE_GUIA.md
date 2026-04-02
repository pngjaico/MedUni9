# Guia de Sessão — MedUni9

> Leia este arquivo no início de qualquer nova sessão de desenvolvimento.

---

## O que é esse projeto

**MedUni9** — PWA de estudos de medicina para alunos da Uninove Vergueiro.
URL: https://meduni9-869eb.web.app

Stack intencional: **um único `index.html`** com React 18 via CDN, sem build step, sem npm run.
Firebase Hosting para deploy. Firestore para dados de usuário.

---

## Estrutura de pastas

```
meduni9-app/
├── index.html              ← TODO o app (React, CSS, lógica)
├── firebase.json           ← Config de deploy (ignore list importante)
├── .gitignore              ← materiais/ e conteudos/ ignorados no git
├── data/
│   ├── materias.json       ← Catálogo de matérias e aulas
│   ├── questoes.json       ← Banco de questões
│   ├── flashcards.json     ← Flashcards
│   └── codigos.json        ← Códigos de acesso
├── materiais/              ← Materiais de apoio (.md) — LOCAL + DEPLOY, não no git
│   ├── GUIA_CRIACAO.md     ← Como criar novos materiais
│   └── modulo{N}/{sigla}/
│       └── {sigla}_a{N}.md
├── conteudos/              ← Apenas local, nunca deployado nem commitado
│   └── materiais/          ← PDFs e livros de referência
├── prompts/
│   └── gerar_materiais_apoio.md  ← Prompt para gerar .md de aulas
└── scripts/
    └── popular_materiais.py
```

---

## Deploy

```bash
firebase deploy --only hosting
```

- `materiais/` → vai para o deploy (Firebase lê do filesystem local)
- `conteudos/` → ignorado no deploy (firebase.json)
- `materiais/` → no `.gitignore` (não sobe pro GitHub)

---

## Como funciona o viewer de materiais

1. Usuário clica em uma aula na aba "Materiais"
2. App faz `fetch()` para `materiais/modulo{N}/{sigla}/{id}.md`
3. Renderiza com `marked.js` na classe `.markdown-body`
4. **Checklist** (`- [ ]`) fica interativo, estado salvo em `localStorage`
5. **Seção `## Pré-Prova`** detectada automaticamente e exibida como accordion amber colapsável no final

---

## CSS e design

- **Tema:** escuro, background `#0A1628`, accent `#00B4D8` (ciano)
- **Fontes:** `Outfit` (títulos/headings) + `DM Sans` (UI) + `Lexend` (leitura de materiais)
- **Markdown body:** classe `.markdown-body` com hierarquia visual definida
- Variáveis CSS: `--primary`, `--text-primary`, `--text-secondary`, `--bg-card`, `--border-card`

---

## Funcionalidades existentes

| Feature | Status |
|---------|--------|
| Questões múltipla escolha | ✅ |
| Flashcards Anki-style | ✅ |
| Caderno de erros | ✅ |
| Materiais de apoio (.md) | ✅ |
| Pré-Prova (accordion) | ✅ |
| Checklist interativo | ✅ |
| Feedback de usuário | ✅ |
| Login por código | ✅ |
| Filtro por semestre | ✅ |

---

## Dados importantes

- Aulas definidas em `data/materias.json` — toda geração de material depende dos IDs aqui
- Para adicionar nova matéria: editar `materias.json` + criar pasta + arquivos .md + deploy
- Banco de questões: `data/questoes.json`

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

**Nunca commitar:** `materiais/`, `conteudos/`, `.claude/settings.local.json`, `data/agent_logs/`

---

## Próximas pendências conhecidas

- [ ] Gerar materiais .md para todas as disciplinas (ver `prompts/gerar_materiais_apoio.md`)
- [ ] Testar Pré-Prova accordion no mobile
- [ ] Adicionar mais questões ao banco

---

## Referências rápidas

- Prompt de geração de materiais: `prompts/gerar_materiais_apoio.md`
- Guia visual dos materiais: `materiais/GUIA_CRIACAO.md`
- Firebase console: https://console.firebase.google.com/project/meduni9-869eb
