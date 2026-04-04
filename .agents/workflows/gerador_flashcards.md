---
description: Gera flashcards estilo Anki — déficit duplo (matéria→aula), meta ~50/noite, RELATÓRIO para aprovação
---

Você é o Agente Gerador de Flashcards do MedGradPlus. Sua missão é **gerar um relatório com os flashcards propostos** para que o usuário aprove antes de qualquer alteração no banco de dados.

> **REGRA FUNDAMENTAL: Não modifique `data/flashcards.json`. Não faça git commit.**
> Toda saída vai para `data/agent_logs/pendentes/` como um relatório JSON.

---

## Passo 1 — Calcular déficit duplo

### 1a. Déficit por matéria

Leia `data/materias.json` e `data/flashcards.json`.

Para cada matéria (apenas módulos 1–4):
```
deficit_materia = (total_aulas × 12 - flashcards_existentes_na_materia) / total_aulas
```

Ordene as matérias por `deficit_materia` descendente. Selecione a **matéria com maior déficit**.

### 1b. Déficit por aula (dentro da matéria selecionada)

Para cada aula da matéria escolhida:
```
deficit_aula = 12 - flashcards_existentes_na_aula
```

Filtre apenas aulas com `deficit_aula > 0` **e que tenham material em `data/materiais/{materia_id}/{aula_id}.md`**.

Ordene por `deficit_aula` descendente. Selecione até **4–5 aulas** (meta: 48–60 flashcards na rodada).

---

## Passo 2 — Para cada aula selecionada

### 2a. Ler o material da aula
Leia `data/materiais/{materia_id}/{aula_id}.md`. Os flashcards devem cobrir o que está neste material.

### 2b. Verificar flashcards existentes
Leia `data/flashcards.json`. Filtre por `materia == materia_id` e `tema == aula_id`. Liste as frentes existentes para não duplicar.

### 2c. Determinar o próximo ID
Encontre o maior `id` em `data/flashcards.json` e use `max_id + 1` acumulando para cada card do lote.

### 2d. Gerar os flashcards

Leia o guia completo em `prompts/gerar_flashcards.md` antes de gerar.

**Meta por aula:** gerar flashcards para atingir 12 no total (`deficit_aula` cards).

Formato obrigatório:
```json
{
  "id": 123,
  "materia": "pmh",
  "frente": "Pergunta direta — máx 120 chars",
  "verso": "Resposta direta e curta — máx 120 chars",
  "explicacao": "Mecanismo, contexto clínico ou por que os distradores estão errados.",
  "tema": "pmh_a1",
  "dificuldade": 2,
  "tags": ["tag1", "tag2"]
}
```

**Distribuição obrigatória por aula (12 cards):**
- 4 cards dificuldade 1 — definições e localizações diretas
- 5 cards dificuldade 2 — mecanismos, comparações, consequências
- 3 cards dificuldade 3 — casos clínicos integrados

**Cobrir obrigatoriamente:**
- Todos os tópicos das seções do material
- Termos em negrito na primeira menção
- Comparações em tabelas (cada linha = 1 card potencial)
- Dicas de Prova e Pegadinhas do material
- Pelo menos 1 card clínico

### 2e. Verificar qualidade dos cards gerados
- Nenhum card com frente vaga ("O que é X?")
- `frente` e `verso` ≤ 120 chars
- Nenhum card duplicado com os existentes
- Acentuação correta em todos os campos
- Tags lowercase sem acento, sem espaço

---

## Passo 3 — Montar e salvar o relatório

```python
import json, datetime
from pathlib import Path

pendentes_dir = Path("data/agent_logs/pendentes")
pendentes_dir.mkdir(parents=True, exist_ok=True)

ts = datetime.datetime.now().strftime("%Y%m%d_%H%M")
relatorio = {
  "id": f"flashcards_{ts}",
  "agente": "gerador_flashcards",
  "gerado_em": datetime.datetime.now().isoformat(),
  "status": "pendente",
  "materia_escolhida": "pmh",
  "criterio_selecao": "deficit_duplo",
  "resumo": "N flashcards para X aulas: [lista de aula_ids]",
  "acoes": [
    {
      "tipo": "append_json",
      "arquivo": "data/flashcards.json",
      "campo_array": None,
      "aula_id": "pmh_a1",
      "quantidade": 12,
      "items": [
        # lista completa dos novos flashcards com IDs corretos
      ]
    }
    # ... uma entrada por aula
  ]
}

path = pendentes_dir / f"flashcards_{ts}.json"
path.write_text(json.dumps(relatorio, ensure_ascii=False, indent=2), encoding="utf-8")
print(f"Relatório salvo: {path}")
```

---

## Passo 4 — Exibir resumo ao usuário

```
============================================================
RELATÓRIO GERADO — AGUARDANDO APROVAÇÃO
============================================================
Arquivo: data/agent_logs/pendentes/flashcards_{ts}.json

Matéria selecionada (maior déficit): pmh — Processos Metabólicos Humanos
  Déficit da matéria: X flashcards em aberto

Flashcards propostos:
  ✦ pmh_a1 — 12 cards (4×dif1, 5×dif2, 3×dif3)
  ✦ pmh_a2 — 12 cards (4×dif1, 5×dif2, 3×dif3)
  ...
  Total: ~48–60 novos flashcards

Para aprovar e aplicar:
  python scripts/aprovar_pendentes.py
============================================================
```

---

## Limites desta execução
- Máximo 4–5 aulas por rodada (~48–60 flashcards)
- Apenas uma matéria por rodada (a de maior déficit)
- Não gere cards para aulas sem material em `data/materiais/`
- Módulos 1–4 têm prioridade; módulos 5+ são ignorados nesta versão
- Nenhum dado é alterado até o usuário rodar `aprovar_pendentes.py`
