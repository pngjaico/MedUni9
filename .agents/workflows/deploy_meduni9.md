---
description: Deploy em Nuvem e Rotina de Sync (Diário)
---

Sempre que rodar este workflow ou ao final da sua esteira de atualização local, cumpra rigorosamente estes passos e confirme pro usuário:

// turbo-all
1. Verifique as mudanças em git: `git status`
2. Adicione os arquivos index.html e jsons `git add .`
3. Suba para o servidor Cloud: `git commit -m "chore: Atualização periódica disparada pelo Agent" ; git push`
4. Acione a publicação pro painel web do aluno: `firebase deploy --only hosting`

5. **Escrever Status JSON (obrigatório):** Após o deploy, escreva `data/agent_logs/status_deploy.json`:

```json
{
  "status": "ok",
  "rodou_em": "DD/MM/YYYY HH:MM",
  "arquivos_alterados": 0,
  "commit_hash": "abc1234",
  "deploy_status": "Hosting release complete",
  "deploy_url": "https://meduni9.web.app",
  "acoes": [
    { "tipo": "info", "hora": "HH:MM", "texto": "git status: 2 arquivos modificados" },
    { "tipo": "ok",   "hora": "HH:MM", "texto": "git push → main OK" },
    { "tipo": "ok",   "hora": "HH:MM", "texto": "firebase deploy → Hosting release complete" }
  ],
  "observacoes": null
}
```

Use `"status": "ok"` se o deploy subiu, `"warn"` se subiu com ressalvas, `"err"` se falhou.
Inclua esse arquivo no próprio commit de deploy: `git add data/agent_logs/status_deploy.json && git commit --amend --no-edit` antes do push.

6. **Atualizar Dashboard HTML (opcional):** Atualize também `.agents/dashboards/firebase_deploy.html`. Localize o bloco entre `// DATA_START` e `// DATA_END` e substitua pela linha abaixo com dados reais:

```js
const REPORT_DATA = {
  "status": "ok",
  "rodou_em": "DD/MM/YYYY HH:MM",
  "arquivos_alterados": N,
  "commit_hash": "abc1234",
  "deploy_status": "Hosting release complete",
  "deploy_url": "https://meduni9.web.app",
  "acoes": [
    { "tipo": "info", "hora": "HH:MM", "texto": "git status: 2 arquivos modificados" },
    { "tipo": "ok",   "hora": "HH:MM", "texto": "git push → main OK" },
    { "tipo": "ok",   "hora": "HH:MM", "texto": "firebase deploy → Hosting release complete" }
  ],
  "observacoes": null
};
```

Use `"status": "ok"` se o deploy subiu, `"warn"` se subiu com ressalvas, `"err"` se falhou.
