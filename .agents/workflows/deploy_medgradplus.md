---
description: Deploy Firebase Hosting (medgradplus) e rotina de sync
---

Sempre que rodar este workflow ou ao final da esteira de atualização local:

1. Verifique as mudanças: `git status`
2. Inclua alterações relevantes: `git add ...` (nunca chaves `*adminsdk*.json` ou `.agents/firebase-sa-key*.json`)
3. Suba o código: `git commit -m "..."` ; `git push`
4. Publique no Firebase: `npx -y firebase-tools@latest deploy --only hosting` (projeto ativo: **medgradplus**)

5. **Status JSON (obrigatório):** após o deploy, atualize `data/agent_logs/status_deploy.json`:

```json
{
  "status": "ok",
  "rodou_em": "DD/MM/YYYY HH:MM",
  "arquivos_alterados": 0,
  "commit_hash": "abc1234",
  "deploy_status": "Hosting release complete",
  "deploy_url": "https://medgradplus.web.app",
  "acoes": [
    { "tipo": "info", "hora": "HH:MM", "texto": "git status" },
    { "tipo": "ok",   "hora": "HH:MM", "texto": "git push → main OK" },
    { "tipo": "ok",   "hora": "HH:MM", "texto": "firebase deploy → Hosting release complete" }
  ],
  "observacoes": null
}
```

6. **Dashboard (opcional):** `.agents/dashboards/firebase_deploy.html` — bloco `REPORT_DATA` / `deploy_url`: **https://medgradplus.web.app**

**Consola Firebase:** https://console.firebase.google.com/project/medgradplus/overview
