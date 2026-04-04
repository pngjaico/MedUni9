# Automação de Schedules — MedGradPlus

Os agentes noturnos rodam via **Windows Task Scheduler** (registrado por `registrar_schedules.ps1`).
Cole os prompts abaixo no Claude Code para registrar ou atualizar os schedules.

---

## Agentes Locais (Rodam no seu PC à Madrugada)
*Requisito: PC ligado com o terminal minimizado.*

---

### A. Gerador de Questões (02:00)
Meta: ~50 questões por noite. Lógica de déficit duplo (matéria → aula).

**Cole no Claude Code:**
```text
/schedule --cron "0 2 * * *" --name "Gerador_Questoes" "Execute o workflow '.agents/workflows/gerador_questoes.md'. Use a lógica de déficit duplo: calcule o déficit por matéria (módulos 1-4), selecione a matéria com maior déficit, depois selecione até 10 aulas dessa matéria com maior déficit de questões. Meta: ~50 questões. Siga o guia em prompts/gerar_questoes.md. Gere relatório em data/agent_logs/pendentes/ — não modifique data/questoes.json diretamente."
```

---

### B. Gerador de Flashcards (03:00)
Meta: ~50 flashcards por noite (4-5 aulas × 12). Lógica de déficit duplo.

**Cole no Claude Code:**
```text
/schedule --cron "0 3 * * *" --name "Gerador_Flashcards" "Execute o workflow '.agents/workflows/gerador_flashcards.md'. Use a lógica de déficit duplo: calcule o déficit por matéria (módulos 1-4), selecione a matéria com maior déficit, depois selecione 4-5 aulas dessa matéria com maior déficit de flashcards. Meta: ~50 flashcards. Siga o guia em prompts/gerar_flashcards.md. Gere relatório em data/agent_logs/pendentes/ — não modifique data/flashcards.json diretamente."
```

---

### C. Verificador de Categorização (01:00) — NOVO
Verifica 50 itens por noite (questões + flashcards). Estado persistente — nunca reprocessa.

**Cole no Claude Code:**
```text
/schedule --cron "0 1 * * *" --name "Verificador_Categorizacao" "Execute o workflow '.agents/workflows/verificador_categorizacao.md'. Leia data/agent_logs/status_verificador.json para saber quais IDs já foram verificados. Verifique os próximos 25 questões e 25 flashcards não processados. Gere relatório em data/agent_logs/pendentes/ — não modifique nenhum arquivo de dados."
```

---

### D. Revisor de Materiais (04:00)
Uma matéria inteira por dia. Revisão + glossário por aula.

**Cole no Claude Code:**
```text
/schedule --cron "0 4 * * *" --name "Revisor_Materiais" "Execute o workflow '.agents/workflows/revisor_materiais.md'. Leia data/agent_logs/status_revisor_materiais.json. Selecione a matéria com maior score (dias_sem_revisao × cobertura). Revise todos os materiais dessa matéria: ortografia, tabelas, fluxos, tamanho. Gere glossário para cada aula em data/glossario/{aula_id}.glossario.json. Gere relatório em data/agent_logs/pendentes/ — não modifique arquivos diretamente."
```

---

### E. Coleta de Feedback (00:30)
Puxa feedbacks do Firestore e salva em `incoming/` para revisão matinal.

**Cole no Claude Code:**
```text
/schedule --cron "30 0 * * *" --name "Coleta_Feedback" "Execute o modo A (coleta) do workflow '.agents/workflows/feedback_analysis.md'. Rode python scripts/processar_feedback.py, salve feedbacks brutos em data/feedback/incoming/. Atualize data/agent_logs/status_feedback.json."
```

---

### F. Planos de Ação de Feedback (01:30)
Gera planos para feedbacks já aprovados pelo administrador. Tipos: questoes, flashcards, materiais, bug, sugestao, conteudo, interface.

**Cole no Claude Code:**
```text
/schedule --cron "30 1 * * *" --name "Feedback_Planos" "Execute o modo B (planos de ação) do workflow '.agents/workflows/feedback_analysis.md'. Leia apenas data/feedback/approved/. Para cada tipo (questoes, flashcards, materiais, bug, sugestao, conteudo, interface), gere o plano de ação correspondente em data/agent_logs/pendentes/. Não modifique nenhum arquivo de dados."
```

---

## Agentes de Nuvem (GitHub Actions — não dependem do PC)

### G. Deploy e Validação (05:00)
Avalia integridade dos JSONs e faz deploy no Firebase.

**Cole no Claude Code:**
```text
/schedule --cron "0 5 * * *" --name "FirebaseDeploy_Sync" "Avalie a integridade de data/questoes.json, data/flashcards.json e data/materias.json. Se houver vírgulas soltas ou arrays mal fechados, corrija e faça git commit. Em seguida execute o workflow '.agents/workflows/deploy_meduni9.md'."
```

---

## Resumo dos horários

| Horário | Agente | Arquivo `.bat` |
|---|---|---|
| 00:30 | Coleta Feedback | `run_feedback.bat` |
| 01:00 | Verificador Categorização | `run_verificador.bat` |
| 01:30 | Feedback → Planos | `run_feedback_planos.bat` |
| 02:00 | Gerador Questões | `run_gerador_questoes.bat` |
| 03:00 | Gerador Flashcards | `run_gerador_flashcards.bat` |
| 04:00 | Revisor Materiais | `run_revisor.bat` |
| 05:00 | Deploy Firebase | `run_deploy.bat` |

---

## Como ler cron

- `"30 0 * * *"` → Todo dia às **00h30**
- `"0 1 * * *"` → Todo dia às **01h00**
- `"0 2 * * *"` → Todo dia às **02h00**
- `"0 5 * * *"` → Todo dia às **05h00**
