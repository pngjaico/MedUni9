# Migrar utilizadores (Firebase Authentication)

A cópia do **Firestore** (script `migrate-firestore.mjs`) **não** traz contas de login. Para o mesmo email/password ou Google no projeto novo:

## Opção A — Firebase CLI (recomendado para muitos utilizadores)

1. Instale a CLI e faça login: `npx -y firebase-tools@latest login`
2. Export do projeto **antigo**:
   ```bash
   npx -y firebase-tools@latest auth:export users-export.json --project meduni9-869eb
   ```
3. Import no projeto **novo**:
   ```bash
   npx -y firebase-tools@latest auth:import users-export.json --project medgradplus
   ```

Notas:

- O formato e limitações estão em [documentação oficial](https://firebase.google.com/docs/cli/auth-import).
- Contas Google podem precisar que os utilizadores voltem a autorizar no novo projeto (OAuth client novo).
- Teste com uma conta de teste antes de importar tudo.

## Opção B — Utilizadores criam conta de novo

Se forem poucos, podem registar-se outra vez no `medgradplus` e você repõe dados em `users/{uid}` manualmente ou por script alinhando email.
