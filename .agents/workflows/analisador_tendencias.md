---
description: Análise de Tendências — Temas mais cobrados nas questões (Diário)
type: local-agent
cron: "30 6 * * *"
---

# Workflow: Analisador de Tendências de Conteúdo

**Tipo:** LOCAL  
**Objetivo:** Mapear quais temas e disciplinas aparecem com mais frequência, identificando lacunas e focos prioritários.

> **Nota de campos:** O banco usa `tema` (ex: `bcm1_acido_base`) e `materia` (ex: `bcm1`). Não existem campos `subfoco` ou `foco`.

## Passo 1 — Coleta dos dados

Leia:
- `data/questoes_ineditas.json` → `questoes[].tema`, `questoes[].materia`, `questoes[].dificuldade`
- Todos os JSONs em `conteudos/_para_categorizar/lotes_extraidos/` → `[].materia`, `[].disciplina`

## Passo 2 — Script Python de contagem

Escreva e execute um script Python usando apenas `json` e `collections.Counter`:

```python
import json, os
from collections import Counter

with open('data/questoes_ineditas.json', encoding='utf-8') as f:
    questoes = json.load(f).get('questoes', [])

temas    = Counter(q.get('tema','sem_tema') for q in questoes)
materias = Counter(q.get('materia','?') for q in questoes)
difs     = Counter(q.get('dificuldade', 0) for q in questoes)

lotes_dir = 'conteudos/_para_categorizar/lotes_extraidos'
lotes_mat = Counter()
total_brutos = 0
for fn in os.listdir(lotes_dir):
    if fn.endswith('.json'):
        with open(os.path.join(lotes_dir, fn), encoding='utf-8') as f:
            for item in json.load(f):
                lotes_mat[item.get('materia','?')] += 1
                total_brutos += 1

print('CURADAS:', len(questoes))
print('BRUTOS:', total_brutos)
print('TOP_TEMAS:', temas.most_common(10))
print('TOP_MATERIAS:', materias.most_common())
print('DIFICULDADES:', sorted(difs.items()))
```

## Passo 3 — Relatório Markdown

Salve em `conteudos/_logs/analise_tendencias_YYYY-MM-DD.md`:

```markdown
# Análise de Tendências MedGradPlus — [DATA]

## Resumo Executivo
- Questões curadas: X | Brutas nos lotes: X | Total potencial: X

## 🔥 Top 10 Temas Mais Cobrados
| Tema | Frequência | Disciplina |
|------|-----------|-----------|
...

## 📚 Distribuição por Disciplina (curadas vs brutas)
...

## 🕳️ Lacunas — Disciplinas sem questões curadas ainda
...

## Próxima Prioridade de Curadoria
Lote mais volumoso pendente: [nome]
```

## Passo 4 — Status JSON

Escreva `data/agent_logs/status_analisador.json`:
```json
{
  "status": "ok",
  "rodou_em": "DD/MM/YYYY HH:MM",
  "questoes_curadas": 0,
  "lotes_brutos": 0,
  "top_tema": "tema_mais_frequente",
  "top_materia": "disciplina",
  "acoes": [
    { "tipo": "ok", "hora": "HH:MM", "texto": "X temas mapeados, relatório salvo" }
  ],
  "observacoes": null
}
```

Depois: `git add data/agent_logs/status_analisador.json && git commit -m "chore: analise tendencias [DATA]" && git push`
