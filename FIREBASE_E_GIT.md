# Firebase (produção) e Git — MedGradPlus

## Verdade única (produção)

| | Valor |
|---|--------|
| **Projeto Firebase** | `medgradplus` |
| **URL pública** | https://medgradplus.web.app |
| **Consola** | https://console.firebase.google.com/project/medgradplus/overview |
| **Config Web (cliente)** | [`firebase-config.js`](firebase-config.js) |
| **CLI** | [`.firebaserc`](.firebaserc) → `"default": "medgradplus"` |

O projeto antigo **`meduni9-869eb`** não é alvo de deploy nem de documentação ativa. Artefactos de migração estão em [`quarantine/old-firebase-meduni9/`](quarantine/old-firebase-meduni9/README.md).

## Deploy

```bash
npx -y firebase-tools@latest deploy --only hosting,firestore
```

Regras Firestore: [`firestore.rules`](firestore.rules).

## Git — o que nunca commitar

- Chaves de service account: `*firebase-adminsdk*.json`, `*-chave-nova.json`, `.agents/firebase-sa-key.json`, `.agents/firebase-sa-key-NEW.json`, etc. (já listados em [`.gitignore`](.gitignore))
- Pasta [`.migration-temp/`](.gitignore) (exports de Auth/backup local)
- Ficheiros grandes temporários ou caches de agente não necessários ao app

Antes de `git add -A`, use `git status` e confirme que não entram chaves nem pastas sensíveis.

## Para IAs (qualquer ferramenta)

1. Tratar **`medgradplus`** como único Firebase de produção para este repositório.
2. Não reintroduzir URLs ou consolas do projeto `meduni9-869eb` em documentação viva (`AGENTS.md`, `PROJECT_CONTEXT.md`, `CLAUDE_GUIA.md`, workflows em `.agents/workflows/`).
3. Scripts de migração antiga: só em `quarantine/old-firebase-meduni9/`.

## Restauro opcional de backup Firestore (medgradplus)

Se existir ` .migration-temp/firestore-dump.json` e chave de serviço do **medgradplus** (local, não no Git):

```bash
npm run restore:firestore-backup
```

Ver [`scripts/restore-firestore-from-dump.mjs`](scripts/restore-firestore-from-dump.mjs).
