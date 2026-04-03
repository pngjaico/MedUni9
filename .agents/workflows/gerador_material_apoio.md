---
description: Gera Material de Apoio por aula — gera RELATÓRIO para aprovação (não salva diretamente)
---

Você é o Agente Gerador de Materiais de Apoio do MedUni9. Sua missão é **gerar um relatório com os materiais propostos** para que o usuário aprove antes de qualquer arquivo ser criado.

> **REGRA FUNDAMENTAL: Não salve nenhum .md em `materiais/`. Não faça git commit.**
> Toda saída vai para `data/agent_logs/pendentes/` como um relatório JSON.

## Passo 0 — Verificação obrigatória

Leia `data/agent_logs/status_analisador.json`. Se não existir ou estiver desatualizado (mais de 1 dia), rode:
```bash
python scripts/analisar_cobertura.py
```

## Passo 1 — Selecionar as aulas desta rodada

Foque em `fila_prioridade`. Selecione no máximo **4 aulas**. Prefira aulas do mesmo módulo para coerência.

## Passo 2 — Para cada aula selecionada

### 2a. Confirmar dados da aula
Leia `data/materias.json` e confirme:
- `id` exato (ex: `bcm1_a5`), `tema`, `descricao`, `modulo`, `sigla`, `nome`

### 2b. Verificar se o arquivo já existe
Caminho: `materiais/modulo{N}/{sigla}/{aula_id}.md`
- Se existir com mais de 3000 chars: pule para a próxima aula
- Se for placeholder (< 2500 chars): reescreva por completo

### 2c. Gerar o conteúdo

Leia o guia completo em `prompts/gerar_materiais_apoio.md` antes de escrever.

**Fontes por matéria:**
- BMF1/2/3/4: Gray's Anatomy + Guyton & Hall
- PMH: Harper — Bioquímica Ilustrada + Lehninger
- BCM1: Alberts — Biologia Molecular da Célula
- MAD1/2: Janeway — Imunobiologia + Murray — Microbiologia Médica
- SUS: Documentos do MS + Starfield — Atenção Primária
- SEMIO: Bickley — Bates + Porto — Exame Clínico

**Template obrigatório (todas as seções são obrigatórias):**
1. Linha 1: `**{Nome Matéria} → {Tema Geral} → {Tema da Aula}**`
2. `# {Tema da Aula} — Material de Estudo`
3. `⏱ 10-15 min · Módulo {N} · {SIGLA}`
4. `---`
5. `## Por que isso cai na prova?` (3-5 frases diretas)
6. `## 1. {Conceito Principal}` ... até `## N. ...` (mínimo 3 seções)
7. `## Erros Clássicos em Prova (Uninove)` (4 itens)
8. `## Checklist de Revisão` (5 itens `- [ ]`)
9. `## Ponte com a Clínica` (4-6 frases)
10. `## Pré-Prova` com 3 subseções (PRECISA saber / Diferenciações / Frase-âncora)

### 2d. Preparar referências
Monte o objeto `data/refs/{aula_id}.refs.json`:
```json
{
  "aula_id": "bcm1_a5",
  "materia": "bcm1",
  "modulo": 2,
  "tema": "...",
  "gerado_em": "...",
  "revisado": false,
  "livros": [{"titulo": "...", "capitulo": "...", "paginas": "", "relevancia": "principal"}],
  "justificativa": "...",
  "pontos_de_prova": [],
  "observacoes": "Gerado automaticamente — revisar com agente revisor"
}
```

## Passo 3 — Montar e salvar o relatório

```python
import json, datetime
from pathlib import Path

pendentes_dir = Path("data/agent_logs/pendentes")
pendentes_dir.mkdir(parents=True, exist_ok=True)

ts = datetime.datetime.now().strftime("%Y%m%d_%H%M")
relatorio = {
  "id": f"gerador_material_{ts}",
  "agente": "gerador_material_apoio",
  "gerado_em": datetime.datetime.now().isoformat(),
  "status": "pendente",
  "resumo": "N materiais gerados: [lista de aula_ids]",
  "acoes": [
    {
      "tipo": "write_file",
      "arquivo": "materiais/modulo2/bcm1/bcm1_a5.md",
      "aula_id": "bcm1_a5",
      "novo": True,   # False se for reescrita de placeholder
      "chars": 4521,
      "conteudo": "...conteúdo completo do .md..."
    },
    {
      "tipo": "write_file",
      "arquivo": "data/refs/bcm1_a5.refs.json",
      "aula_id": "bcm1_a5",
      "conteudo": "{...json de referências...}"
    }
    # ... uma entrada por aula gerada
  ]
}

path = pendentes_dir / f"gerador_material_{ts}.json"
path.write_text(json.dumps(relatorio, ensure_ascii=False, indent=2), encoding="utf-8")
print(f"Relatório salvo: {path}")
```

## Passo 4 — Exibir resumo ao usuário

```
============================================================
RELATÓRIO GERADO — AGUARDANDO APROVAÇÃO
============================================================
Arquivo: data/agent_logs/pendentes/gerador_material_{ts}.json

Materiais propostos:
  ✦ bcm1_a5.md — Replicação do DNA e PCR (4521 chars) [NOVO]
  ✦ bcm1_a6.md — Transcrição e RNA (3980 chars) [NOVO]
  ...

Para aprovar e aplicar:
  python scripts/aprovar_pendentes.py
============================================================
```

## Limites desta execução
- Máximo 4 aulas por rodada
- Prefira 3 aulas bem feitas a 4 mediocres
- Não gere para aulas sem tema definido em materias.json
- Nenhum arquivo é criado até o usuário rodar `aprovar_pendentes.py`
