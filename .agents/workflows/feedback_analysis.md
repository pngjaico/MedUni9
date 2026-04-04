---
description: Coleta feedback bruto do Firestore e gera planos de ação para feedbacks aprovados (7 tipos)
---

Este workflow opera em dois modos: **coleta** (todo feedback novo) e **planos de ação** (apenas feedbacks aprovados).

> **REGRA FUNDAMENTAL: Não modifique `data/questoes.json`, `data/flashcards.json` nem arquivos `.md`.**
> Toda saída vai para `data/agent_logs/pendentes/` como um relatório JSON.

---

## Modo A — Coleta de Feedback Bruto (Diário — 00:30)

### A1. Baixar feedback do Firestore

Execute o script Python que puxa os feedbacks e salva localmente:

```
python scripts/processar_feedback.py
```

Verifique `data/agent_logs/status_feedback.json`. Se `status == "err"`, pare. Se `feedbacks_processados == 0`, encerre com `"idle"`.

### A2. Salvar feedback bruto para revisão

Salve cada feedback como item bruto em `data/feedback/incoming/`. O administrador revisará e decidirá:
- `Aprovar para plano` → mover para `data/feedback/approved/`
- `Negar` → mover para `data/feedback/denied/`

**Tipos suportados:**

| Tipo | Origem | Campo extra |
|---|---|---|
| `bug` | Página principal | — |
| `sugestao` | Página principal | — |
| `conteudo` | Página principal | — |
| `interface` | Página principal | — |
| `questoes` | Botão na questão | `questao_id` |
| `flashcards` | Botão no flashcard | `flashcard_id` |
| `materiais` | Botão no material | `aula_id` |

Estrutura de cada feedback:
```json
{
  "_id": "firestore-doc-id",
  "tipo": "questoes",
  "mensagem": "texto do usuário",
  "criadoEm": "2026-04-03T00:15:00.000Z",
  "questao_id": 47,
  "disciplina": "bmf1"
}
```

### A3. Escrever status

```json
{
  "status": "ok",
  "rodou_em": "03/04/2026 00:31",
  "feedbacks_processados": 3,
  "requests_gerados": 0,
  "acoes": [
    { "tipo": "ok", "hora": "00:31", "texto": "3 feedbacks baixados do Firestore" },
    { "tipo": "ok", "hora": "00:31", "texto": "3 feedbacks brutos salvos em incoming/" }
  ],
  "observacoes": "3 feedbacks brutos salvos para revisão matinal"
}
```

---

## Modo B — Planos de Ação (Apenas aprovados — 01:00)

### B1. Ler feedbacks aprovados

Leia apenas `data/feedback/approved/*.json` — **nunca** `incoming/`.

Se não houver arquivos aprovados, encerre com status `"idle"`.

### B2. Gerar plano de ação por tipo

#### `questoes` — Corrigir questão específica

1. Leia o feedback: identifique `questao_id`
2. Leia `data/questoes.json`: encontre a questão pelo id
3. Analise o problema reportado (enunciado confuso, gabarito errado, opção incorreta, etc.)
4. Proponha a correção completa do objeto da questão

Ação no relatório:
```json
{
  "tipo": "patch_json",
  "arquivo": "data/questoes.json",
  "questao_id": 47,
  "feedback_id": "firestore-doc-id",
  "campo_alterado": "enunciado | opcoes | correta | explicacao",
  "valor_original": "...",
  "valor_proposto": "...",
  "justificativa": "O usuário reportou que..."
}
```

#### `flashcards` — Corrigir flashcard específico

1. Leia o feedback: identifique `flashcard_id`
2. Leia `data/flashcards.json`: encontre o card pelo id
3. Analise o problema (frente vaga, verso impreciso, explicação insuficiente)
4. Proponha a correção completa do objeto

Ação no relatório:
```json
{
  "tipo": "patch_json",
  "arquivo": "data/flashcards.json",
  "flashcard_id": 123,
  "feedback_id": "firestore-doc-id",
  "campo_alterado": "frente | verso | explicacao | tags",
  "valor_original": "...",
  "valor_proposto": "...",
  "justificativa": "O usuário reportou que..."
}
```

#### `materiais` — Editar material da aula

1. Leia o feedback: identifique `aula_id`
2. Leia `data/materiais/{materia_id}/{aula_id}.md`
3. Analise o problema (erro conceitual, conteúdo desatualizado, falta de clareza)
4. Proponha a edição cirúrgica (apenas o trecho afetado, não reescrita completa)

Ação no relatório:
```json
{
  "tipo": "patch_file",
  "arquivo": "data/materiais/bmf1/bmf1_a3.md",
  "aula_id": "bmf1_a3",
  "feedback_id": "firestore-doc-id",
  "trecho_original": "...texto atual...",
  "trecho_proposto": "...texto corrigido...",
  "justificativa": "O usuário reportou que..."
}
```

#### `bug`, `sugestao`, `conteudo`, `interface`

Comportamento mantido do pipeline original:
- Gera `data/agent_logs/pendentes/feedback_{ts}.json` com análise e próximos passos
- Não propõe alterações em arquivos de dados — apenas documentação

### B3. Montar e salvar o relatório

```python
import json, datetime
from pathlib import Path

pendentes_dir = Path("data/agent_logs/pendentes")
pendentes_dir.mkdir(parents=True, exist_ok=True)

ts = datetime.datetime.now().strftime("%Y%m%d_%H%M")
relatorio = {
  "id": f"feedback_{ts}",
  "agente": "feedback_analysis",
  "gerado_em": datetime.datetime.now().isoformat(),
  "status": "pendente",
  "total_aprovados": 3,
  "resumo": "Planos de ação para 3 feedbacks aprovados",
  "acoes": [
    # ... uma ação por feedback aprovado
  ]
}

path = pendentes_dir / f"feedback_{ts}.json"
path.write_text(json.dumps(relatorio, ensure_ascii=False, indent=2), encoding="utf-8")
print(f"Relatório salvo: {path}")
```

### B4. Exibir resumo

```
============================================================
RELATÓRIO GERADO — AGUARDANDO APROVAÇÃO
============================================================
Arquivo: data/agent_logs/pendentes/feedback_{ts}.json

Planos gerados:
  ✦ questoes #47 — corrigir explicacao (bmf1_a3)
  ✦ flashcards #123 — corrigir verso muito longo
  ✦ materiais bmf1_a7 — corrigir erro conceitual na seção 2
  Total: 3 planos de ação

Para aprovar e aplicar:
  python scripts/aprovar_pendentes.py
============================================================
```

---

## Limites desta execução
- Máximo 10 feedbacks aprovados por rodada
- Nenhum dado é alterado até o usuário rodar `aprovar_pendentes.py`
