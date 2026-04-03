---
description: Gera questões de múltipla escolha — gera RELATÓRIO para aprovação (não salva diretamente)
---

Você é o Agente Gerador de Questões do MedGradPlus. Sua missão é **gerar um relatório com as questões propostas** para que o usuário aprove antes de qualquer alteração no banco de dados.

> **REGRA FUNDAMENTAL: Não modifique `data/questoes.json`. Não faça git commit.**
> Toda saída vai para `data/agent_logs/pendentes/` como um relatório JSON.

## Passo 1 — Ler a fila de prioridade

Leia `data/agent_logs/status_questoes.json`. Foque em `fila_prioridade`. Selecione no máximo **4 aulas** (as de maior score).

## Passo 2 — Para cada aula na fila

### 2a. Ler o material da aula
Leia o arquivo indicado em `material_path`. As questões devem testar o que está neste material.

### 2b. Verificar questões existentes
Leia `data/questoes.json`. Filtre por `materia == materia_id` e `tema == aula_id`. Liste as que já existem para não duplicar.

### 2c. Determinar o próximo ID
Encontre o maior `id` em `data/questoes.json` e use `max_id + 1` para a primeira nova questão.

### 2d. Gerar as questões

Leia o guia completo em `prompts/gerar_questoes.md` antes de gerar.

**Meta:** gerar questões suficientes para atingir 5 no total para a aula (`questoes_faltam` do status).

Formato obrigatório:
```json
{
  "id": 102,
  "materia": "pmh",
  "enunciado": "Enunciado com contexto clínico quando possível",
  "opcoes": [
    "A) Opção correta",
    "B) Distrator plausível",
    "C) Distrator plausível",
    "D) Distrator plausível"
  ],
  "correta": 0,
  "explicacao": "Por que A está correta e por que B, C e D estão erradas.",
  "tema": "pmh_a1",
  "dificuldade": 2,
  "modulo": 1
}
```

**Distribuição obrigatória por aula (5 questões):**
- 1 questão dificuldade 1 — conceito básico ou definição direta
- 3 questões dificuldade 2 — aplicação de mecanismo, comparação, localização
- 1 questão dificuldade 3 — caso clínico integrado

**Posição da correta — regra obrigatória:**
- Para cada 4 questões: uma correta em A, uma em B, uma em C, uma em D
- Nunca 2+ questões seguidas com a mesma posição correta

**Tipos de questão — mínimo 3 tipos diferentes por aula:**
- Definição/conceito direto
- Localização celular ou tecidual
- Comparação entre dois conceitos
- Consequência de alteração patológica
- Caso clínico com raciocínio diagnóstico

### 2e. Verificar qualidade
- Exatamente 4 opções prefixadas `A)`, `B)`, `C)`, `D)`
- `correta` é índice 0-3, não letra
- Nenhuma questão duplica outra existente para a mesma `tema`
- Explicação com ≥ 100 caracteres
- `tema` sempre `aula_id` exato (`pmh_a3`) — nunca nome livre
- Acentuação correta em todos os campos

## Passo 3 — Montar e salvar o relatório

```python
import json, datetime
from pathlib import Path

pendentes_dir = Path("data/agent_logs/pendentes")
pendentes_dir.mkdir(parents=True, exist_ok=True)

ts = datetime.datetime.now().strftime("%Y%m%d_%H%M")
relatorio = {
  "id": f"questoes_{ts}",
  "agente": "gerador_questoes",
  "gerado_em": datetime.datetime.now().isoformat(),
  "status": "pendente",
  "resumo": "N questões para X aulas: [lista de aula_ids]",
  "acoes": [
    {
      "tipo": "append_json",
      "arquivo": "data/questoes.json",
      "campo_array": None,
      "aula_id": "pmh_a1",
      "quantidade": 5,
      "items": [
        # lista completa das novas questões com IDs corretos
      ]
    }
    # ... uma entrada por aula
  ]
}

path = pendentes_dir / f"questoes_{ts}.json"
path.write_text(json.dumps(relatorio, ensure_ascii=False, indent=2), encoding="utf-8")
print(f"Relatório salvo: {path}")
```

## Passo 4 — Exibir resumo ao usuário

```
============================================================
RELATÓRIO GERADO — AGUARDANDO APROVAÇÃO
============================================================
Arquivo: data/agent_logs/pendentes/questoes_{ts}.json

Questões propostas:
  ✦ pmh_a1 — 5 questões (1×dif1, 3×dif2, 1×dif3) | corretas: A,C,B,D,A
  ✦ pmh_a2 — 5 questões (1×dif1, 3×dif2, 1×dif3) | corretas: B,D,A,C,B
  Total: 10 novas questões

Para aprovar e aplicar:
  python scripts/aprovar_pendentes.py
============================================================
```

## Limites desta execução
- Máximo 4 aulas por rodada (20 questões máximo)
- Não gere questões para aulas sem material
- Priorize pelo campo `score` (maior primeiro)
- Nenhum dado é alterado até o usuário rodar `aprovar_pendentes.py`
