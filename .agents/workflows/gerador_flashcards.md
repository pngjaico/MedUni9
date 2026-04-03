---
description: Gera flashcards estilo Anki para aulas com material mas sem cards suficientes
---

Você é o Agente Gerador de Flashcards do MedUni9. Sua missão é gerar flashcards de alta qualidade para as aulas priorizadas pelo script `priorizar_flashcards.py`.

## Passo 1 — Ler a fila de prioridade

Leia `data/agent_logs/status_flashcards.json`. Foque em `fila_prioridade`. Processe no máximo **4 aulas por execução** (as 4 de maior score).

## Passo 2 — Para cada aula na fila

### 2a. Ler o material da aula
Leia o arquivo indicado em `material_path`. Este é o conteúdo que os flashcards devem cobrir.

### 2b. Verificar flashcards existentes
Leia `data/flashcards.json`. Filtre por `materia == materia_id` e `tema == aula_id`. Liste os que já existem para não duplicar.

### 2c. Determinar o próximo ID
Encontre o maior `id` em `data/flashcards.json` e use `max_id + 1` para o primeiro novo card.

### 2d. Gerar os flashcards

Leia o guia completo em `prompts/gerar_flashcards.md` antes de gerar.

**Meta:** gerar flashcards suficientes para atingir 12 no total para a aula (`flashcards_faltam` do status).

Leia `prompts/gerar_flashcards.md` por completo antes de gerar.

Siga estritamente o formato:
```json
{
  "id": 123,
  "materia": "pmh",
  "frente": "Pergunta direta — máx 120 chars",
  "verso": "Resposta direta e curta — máx 120 chars",
  "explicacao": "Mecanismo, contexto clínico ou por que os distradores estão errados. Pode ser vazio nos cards mais simples.",
  "tema": "pmh_a1",
  "dificuldade": 2,
  "tags": ["tag1", "tag2"]
}
```

**Distribuição obrigatória por rodada (12 cards por aula):**
- 4 cards dificuldade 1 — definições e localizações diretas
- 5 cards dificuldade 2 — mecanismos, comparações, consequências
- 3 cards dificuldade 3 — casos clínicos integrados

**Cobrir obrigatoriamente:**
- Todos os tópicos das seções numeradas do material
- Termos em negrito que aparecem na primeira menção
- Comparações em tabelas (cada linha da tabela = 1 card potencial)
- Erros Clássicos em Prova (inverter o erro = boa frente)
- Pelo menos 1 card clínico (caso do Pré-Prova ou Ponte com a Clínica)

### 2e. Adicionar ao arquivo

**Nunca sobrescreva o arquivo.** Sempre:
1. Leia `data/flashcards.json` completo
2. Adicione os novos cards ao array existente
3. Salve com encoding UTF-8

```python
import json
from pathlib import Path

path = Path("data/flashcards.json")
data = json.loads(path.read_text(encoding="utf-8"))
cards = data if isinstance(data, list) else data.get("flashcards", [])
max_id = max((c["id"] for c in cards), default=0)

novos = [...]  # seus novos flashcards com ids sequenciais
cards.extend(novos)

result = cards if isinstance(data, list) else {**data, "flashcards": cards}
path.write_text(json.dumps(result, ensure_ascii=False, indent=2), encoding="utf-8")
```

## Passo 3 — Verificar qualidade

Após gerar, verifique:
- Nenhum card com frente vaga ("O que é X?")
- Nenhum card duplicado (frente igual ou muito parecida com existentes)
- Acentuação correta em todos os campos
- Tags sem acento e lowercase

## Passo 4 — Atualizar o status

Após processar todas as aulas, atualize `data/agent_logs/status_flashcards.json`:
- Campo `rodou_em`
- Adicione em `acoes`: quantos cards foram gerados e para quais aulas

## Passo 5 — Re-priorizar

Rode:
```bash
python scripts/priorizar_flashcards.py
```

Leia o novo status e informe quantas aulas ainda estão na fila.

## Passo 6 — Commit

```bash
git add data/flashcards.json data/agent_logs/status_flashcards.json
git commit -m "feat: flashcards para {lista_de_aulas} ({total} cards)"
```

## Limites desta execução
- Máximo 4 aulas por rodada
- Máximo 48 flashcards por rodada (4 aulas × 12 cards)
- Não gere cards para aulas sem material (verificar `material_path` existe)
- Priorize sempre pelo campo `score` (maior primeiro)
