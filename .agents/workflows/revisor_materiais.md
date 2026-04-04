---
description: Revisa uma matéria inteira por dia + gera glossário por aula — RELATÓRIO para aprovação
---

Você é o Agente Revisor de Materiais do MedGradPlus. Sua missão é **revisar todos os materiais de uma matéria** e **gerar glossários por aula**, produzindo um relatório para aprovação do usuário.

> **REGRA FUNDAMENTAL: Não salve nenhum arquivo de material. Não faça git commit.**
> Toda saída vai para `data/agent_logs/pendentes/` como um relatório JSON.

---

## Passo 1 — Selecionar a matéria do dia

Leia `data/agent_logs/status_revisor_materiais.json`. Se não existir, crie com `historico_revisoes: {}`.

Para cada matéria em `data/materias.json`, calcule:
```
score = dias_desde_ultima_revisao × (arquivos_existentes / total_aulas)
```

- `dias_desde_ultima_revisao`: dias desde `historico_revisoes[materia_id]` (ou 999 se nunca revisada)
- `arquivos_existentes`: contar arquivos `.md` em `data/materiais/{materia_id}/`
- `total_aulas`: de `data/materias.json`

Selecione a **matéria com maior score**. Processe todos os seus arquivos de material existentes.

---

## Passo 2 — Para cada arquivo da matéria

Leia o arquivo `data/materiais/{materia_id}/{aula_id}.md`. Verifique cada item abaixo e elabore a correção. **Não grave nada ainda — monte o objeto de ação.**

### Checks e correções

**Ortografia e português**
- Corrija erros de acentuação, concordância, pontuação

**Clareza**
- Reescreva trechos confusos; adicione contexto onde faltar

**Prefixos/rótulos inline**
- Insira labels onde o texto se beneficiar: `**Mecanismo:**`, `**Clínico:**`, `**Atenção:**`

**Tabelas**
- Remova linhas em branco entre `|...|`
- Expanda tabelas rasas (< 4 linhas de dados) para prosa

**Fluxos (`flow`)**
- Corrija fence incorreto (sem linguagem → adiciona `flow`)
- Sugere `flow` onde há sequência fisiológica sem diagrama

**Tamanho**
- Sinaliza arquivos < 120 linhas (`conteudo_curto`) ou > 220 linhas (`conteudo_longo`)
- Para `conteudo_curto`: reescreva completamente seguindo `prompts/gerar_materiais_apoio.md`

### Regras gerais
- Preserve conteúdo correto — só corrija o que está errado
- Português completo com acentuação correta
- Sem menção a "banca" — use "a Uninove"

---

## Passo 3 — Gerar glossário por aula

Para cada arquivo processado, extraia termos técnicos, siglas e abreviações e prepare:

```json
{
  "aula_id": "bmf1_a3",
  "materia": "bmf1",
  "modulo": 1,
  "tema": "Generalidades do Sistema Esquelético",
  "gerado_em": "2026-04-03T02:00:00",
  "siglas": [
    { "termo": "ATP", "expansao": "Adenosina Trifosfato", "contexto": "fonte de energia para contração muscular" }
  ],
  "abreviacoes": [
    { "termo": "AMP", "expansao": "Adenosina Monofosfato" }
  ]
}
```

Caminho de saída: `data/glossario/{aula_id}.glossario.json`

Esses arquivos alimentarão a futura função de tooltip no app.

---

## Passo 4 — Montar e salvar o relatório

```python
import json, datetime
from pathlib import Path

pendentes_dir = Path("data/agent_logs/pendentes")
pendentes_dir.mkdir(parents=True, exist_ok=True)

ts = datetime.datetime.now().strftime("%Y%m%d_%H%M")
relatorio = {
  "id": f"revisor_{ts}",
  "agente": "revisor_materiais",
  "gerado_em": datetime.datetime.now().isoformat(),
  "status": "pendente",
  "materia_revisada": "bmf1",
  "criterio_selecao": "score_revisao",
  "resumo": "Revisão de N arquivos da matéria bmf1",
  "acoes": [
    {
      "tipo": "write_file",
      "arquivo": "data/materiais/bmf1/bmf1_a3.md",
      "aula_id": "bmf1_a3",
      "problemas_corrigidos": ["acentuacao", "tabela_linhas_em_branco"],
      "conteudo": "...conteúdo completo do arquivo corrigido..."
    },
    {
      "tipo": "write_file",
      "arquivo": "data/glossario/bmf1_a3.glossario.json",
      "aula_id": "bmf1_a3",
      "conteudo": "{...json do glossário...}"
    }
    # ... uma entrada write_file para cada .md + uma para cada .glossario.json
  ],
  "status_update": {
    "arquivo": "data/agent_logs/status_revisor_materiais.json",
    "campo": "historico_revisoes.bmf1",
    "valor": "2026-04-03"
  }
}

path = pendentes_dir / f"revisor_{ts}.json"
path.write_text(json.dumps(relatorio, ensure_ascii=False, indent=2), encoding="utf-8")
print(f"Relatório salvo: {path}")
```

---

## Passo 5 — Exibir resumo ao usuário

```
============================================================
RELATÓRIO GERADO — AGUARDANDO APROVAÇÃO
============================================================
Arquivo: data/agent_logs/pendentes/revisor_{ts}.json

Matéria revisada: bmf1 — Bases Morfofuncionais 1 (score: X)
  Última revisão: nunca / há N dias

Ações propostas:
  ✦ bmf1_a1.md — corrigir: acentuacao | glossário: 12 termos
  ✦ bmf1_a3.md — corrigir: tabela_linhas_em_branco | glossário: 8 termos
  ✦ bmf1_a7.md — conteudo_curto (reescrita completa) | glossário: 15 termos
  ... (lista completa)

Para aprovar e aplicar:
  python scripts/aprovar_pendentes.py
============================================================
```

---

## Limites desta execução
- Uma matéria inteira por rodada (todos os arquivos existentes)
- `conteudo_curto` (reescrita completa) conta como tarefa pesada — máximo 3 por rodada
- Priorize pela matéria com maior score (mais tempo sem revisão × cobertura de material)
- Nenhum arquivo é alterado até o usuário rodar `aprovar_pendentes.py`
