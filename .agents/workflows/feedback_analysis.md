---
description: Análise de Feedback dos Usuários (Diário — 00:30)
---

Este workflow transforma feedback bruto dos usuários em requests acionáveis para revisão do administrador.

## Passo 1 — Baixar Feedback do Firestore

Execute o script Python que puxa os feedbacks do Firestore e salva localmente:

```
python processar_feedback.py
```

Verifique o resultado em `data/agent_logs/status_feedback.json`. Se `status` for `"err"`, pare e registre o erro no status. Se `feedbacks_processados` for 0, encerre com status `"idle"`.

## Passo 2 — Ler Feedbacks Novos

Leia o(s) arquivo(s) mais recentes em `data/feedback/incoming/` (formato `fb_YYYY-MM-DD.json`). Cada feedback tem esta estrutura:

```json
{
  "_id": "firestore-doc-id",
  "tipo": "bug | sugestao | conteudo | interface",
  "mensagem": "texto do usuário",
  "criadoEm": "2026-04-03T00:15:00.000Z",
  "disciplina": "bmf1"  // opcional
}
```

## Passo 3 — Analisar e Gerar Requests

Para cada feedback (ou grupo de feedbacks similares), gere um request acionável em `data/feedback/requests/`.

**Regras de agrupamento:**
- Se 2+ feedbacks reportam o mesmo problema → gere 1 único request com campo `feedback_origem` listando todos os IDs
- Feedbacks muito vagos (ex: "não gostei") → gere request com `prioridade: "baixa"` e descrição resumida

**Formato do arquivo de request** (salve como `req_YYYY-MM-DD_NNN.json` onde NNN é 001, 002, etc.):

```json
{
  "id": "req_2026-04-03_001",
  "status": "pendente",
  "tipo_feedback": "bug",
  "titulo": "Titulo curto e descritivo (max 80 chars)",
  "descricao": "Descrição completa do problema/sugestão reportado pelo(s) usuário(s)",
  "acao_sugerida": "Ação concreta e específica a tomar (ex: 'Corrigir o flashcard id=45 da disciplina bcm1 — verso incompleto')",
  "disciplina": "bcm1",
  "prioridade": "alta | media | baixa",
  "feedback_origem": ["firestore-doc-id-1", "firestore-doc-id-2"],
  "criadoEm": "2026-04-03T00:30:00.000Z"
}
```

**Critérios de prioridade:**
- `alta`: bugs que impedem uso, conteúdo incorreto que pode prejudicar estudos, problemas relatados por 3+ usuários
- `media`: sugestões de melhoria claras, conteúdo incompleto, problemas de interface
- `baixa`: sugestões vagas, elogios com sugestões menores

**Importante:** Seja conservador — gere requests descritivos que expliquem o problema, mas NÃO escreva código ou edite arquivos de conteúdo ainda. O administrador vai revisar e aprovar/negar cada request de manhã.

## Passo 4 — Escrever Status

Escreva `data/agent_logs/status_feedback.json` ao final:

```json
{
  "status": "ok",
  "rodou_em": "DD/MM/YYYY HH:MM",
  "feedbacks_processados": 3,
  "requests_gerados": 2,
  "acoes": [
    { "tipo": "ok",   "hora": "00:31", "texto": "3 feedbacks baixados do Firestore" },
    { "tipo": "ok",   "hora": "00:31", "texto": "Request req_2026-04-03_001 criado (alta prioridade)" },
    { "tipo": "ok",   "hora": "00:32", "texto": "Request req_2026-04-03_002 criado (media prioridade)" }
  ],
  "observacoes": "2 requests gerados para revisão matinal"
}
```

## Passo 5 — Commit

```
git add data/feedback/requests/ data/agent_logs/status_feedback.json
git commit -m "chore: feedback processado — [DATA] — N requests gerados"
git push
```
