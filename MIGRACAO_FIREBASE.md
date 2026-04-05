# Migração para outro projeto Firebase

Este app usa **Firebase Authentication** (email/senha + Google), **Cloud Firestore** e **Firebase Hosting**. Não há uso de Storage ou Functions no cliente.

A configuração do SDK Web está centralizada em **`firebase-config.js`** (também usada por `index.html` e `admin.html`). O CLI usa **`.firebaserc`** para saber o `projectId` do deploy.

---

## 1. Criar o novo projeto

1. Aceda a [Firebase Console](https://console.firebase.google.com/) → **Add project** (ou **Google Cloud** com billing se precisar de quotas maiores).
2. Escolha um **Project ID** definitivo (fica no URL e não muda).
3. Opcional: ativar Google Analytics no assistente.

---

## 2. Registar a app Web e obter a config

1. No projeto novo: ícone **Web** (`</>`) → registe a app.
2. Em **Project settings** (engrenagem) → **Your apps** → copie o objeto `firebaseConfig` (apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId).
3. Cole esses valores em **`firebase-config.js`**, substituindo o objeto atual.
4. Edite **`.firebaserc`** e altere `"default": "SEU_NOVO_PROJECT_ID"`.

---

## 3. Authentication — ativar e domínios

1. **Build → Authentication → Get started**.
2. **Sign-in method**:
   - Ative **Email/Password** (como no projeto atual).
   - Ative **Google** e configure o **support email** e o nome do projeto OAuth (o Firebase cria o cliente OAuth no Google Cloud).
3. **Settings → Authorized domains**: adicione:
   - `localhost` (já vem por defeito em desenvolvimento)
   - O domínio do **Firebase Hosting** (`seu-projeto.web.app`, `seu-projeto.firebaseapp.com`)
   - O **domínio personalizado** que for ligar ao Hosting (ex.: `app.seudominio.com`)

Sem isto, login e Google Sign-In falham em produção.

---

## 4. Firestore — base de dados e regras

1. **Build → Firestore Database → Create database**.
2. Escolha a localização (região) — **não muda** depois; prefira a mesma região que o utilizador final (ex. `europe-west` / `southamerica-east1`).
3. Modo: pode usar **Production** e depois fazer deploy das regras do repositório (`firestore.rules`).

No terminal (na pasta do projeto), com Firebase CLI:

```bash
npx -y firebase-tools@latest login
npx -y firebase-tools@latest use --add SEU_NOVO_PROJECT_ID
npx -y firebase-tools@latest deploy --only firestore:rules,firestore:indexes
```

As regras atuais incluem emails de admin em `isAdmin()` — confirme se `firestore.rules` está atualizado antes do deploy.

---

## 5. Hosting e domínio

1. **Build → Hosting → Get started** e siga o assistente (ou use o CLI já com `firebase.json` existente).
2. Para **domínio personalizado**: Hosting → **Add custom domain** e siga a verificação DNS (A/TXT).
3. Deploy:

```bash
npx -y firebase-tools@latest deploy --only hosting
```

O projeto usa `public: "."` com rewrite para `index.html` — o ficheiro **`firebase-config.js`** na raiz é servido automaticamente; não precisa de ignorar no deploy.

---

## 6. Dados e utilizadores

- **Firestore**: os dados **não** copiam sozinhos. Opções:
  - [Export/import](https://firebase.google.com/docs/firestore/manage-data/export-import) (bucket Cloud Storage no mesmo ou outro projeto), ou
  - Ferramentas de terceiros / scripts que leiam o projeto antigo e escrevam no novo (cuidado com UIDs e regras de segurança).
- **Authentication**: contas **não** vêm com o export do Firestore. Utilizadores terão de:
  - criar conta de novo no novo projeto, ou
  - usar [import de utilizadores](https://firebase.google.com/docs/auth/web/import-users) (fluxo mais avançado).

Planeje migração de `users`, `email_access`, `feedback`, etc., em conjunto com a estratégia de Auth.

### Script: copiar Firestore (duas chaves JSON)

A chave **não** executa a migração sozinha: corre na **tua máquina** com Node.

1. `npm install` na raiz do repositório.
2. Chave do projeto **antigo** em `.agents/firebase-sa-key.json` (ou outro caminho e `MIGRATE_OLD_KEY`).
3. Chave do **medgradplus** em `.agents/firebase-sa-key-NEW.json` (Firebase Console → Project settings → Service accounts → Generate new private key).
4. `npm run migrate:firestore`

Isto copia as coleções usadas pela app (`users`, `email_access`, `feedback`, `profile_change_requests`, `security_events` e `users/*/sessions`). **Authentication** continua a precisar de `auth:export` / `auth:import` — ver `scripts/MIGRACAO_AUTH.md`.

---

## 7. Service account (scripts / admin server-side)

A chave em `.agents/firebase-sa-key.json` é **só do projeto antigo** e está no `.gitignore`.

No novo projeto: **Project settings → Service accounts → Generate new private key** e guarde **fora do Git** com o mesmo nome ou atualize os scripts que referenciam o ficheiro.

---

## 8. Checklist rápido

- [ ] Novo projeto criado e `firebase-config.js` + `.firebaserc` atualizados
- [ ] Authentication: Email + Google; domínios autorizados
- [ ] Firestore criado + `deploy` de `firestore.rules` e índices
- [ ] Hosting deploy + domínio customizado (se aplicável)
- [ ] Dados e utilizadores migrados conforme a vossa política
- [ ] Nova service account para integrações locais (se usada)

---

## Comandos úteis

| Ação | Comando |
|------|---------|
| Projeto ativo | `npx -y firebase-tools@latest use` |
| Só regras Firestore | `npx -y firebase-tools@latest deploy --only firestore:rules` |
| Só hosting | `npx -y firebase-tools@latest deploy --only hosting` |
| Tudo (regras + hosting) | `npx -y firebase-tools@latest deploy --only firestore,hosting` |
