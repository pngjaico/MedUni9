---
description: Coleta Bruta de Feedback dos Usuários (Diário — 00:30)
---

Este workflow apenas coleta feedback bruto dos usuários e o deixa disponível para a primeira decisão do administrador.

## Passo 1 — Baixar Feedback do Firestore

Execute o script Python que puxa os feedbacks do Firestore e salva localmente:

```
python scripts/processar_feedback.py
```

Verifique o resultado em `data/agent_logs/status_feedback.json`. Se `status` for `"err"`, pare e registre o erro no status. Se `feedbacks_processados` for 0, encerre com status `"idle"`.

## Passo 2 — Salvar Feedback Bruto para Revisão

Salve cada feedback como item bruto em `data/feedback/incoming/`. O administrador vai revisar manualmente e decidir:

- `Aprovar para plano` → mover para `data/feedback/approved/`
- `Negar` → mover para `data/feedback/denied/`

Cada feedback tem esta estrutura:

```json
{
  "_id": "firestore-doc-id",
  "tipo": "bug | sugestao | conteudo | interface",
  "mensagem": "texto do usuário",
  "criadoEm": "2026-04-03T00:15:00.000Z",
  "disciplina": "bmf1"  // opcional
}
```

## Passo 3 — Encerrar

Não gere requests nem planos de ação nesta etapa.
Os planos de ação serão gerados em uma automação separada, somente para feedbacks brutos que o administrador aprovou.

## Passo 4 — Escrever Status

Escreva `data/agent_logs/status_feedback.json` ao final:

```json
{
  "status": "ok",
  "rodou_em": "DD/MM/YYYY HH:MM",
  "feedbacks_processados": 3,
  "requests_gerados": 0,
  "acoes": [
    { "tipo": "ok",   "hora": "00:31", "texto": "3 feedbacks baixados do Firestore" },
    { "tipo": "ok",   "hora": "00:31", "texto": "3 feedbacks brutos salvos em incoming/" }
  ],
  "observacoes": "3 feedbacks brutos salvos para revisão matinal"
}
```
