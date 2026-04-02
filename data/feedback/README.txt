Este diretório é gerenciado automaticamente pelo agente de feedback.

- incoming/  → Feedback bruto dos usuários (puxado do Firestore pelo processar_feedback.py)
- requests/  → Requests gerados pelo Claude Code após análise (status: pendente)
- archived/  → Requests aprovados ou negados pelo admin (status: aprovado / negado)
