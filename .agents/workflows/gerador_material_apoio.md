---
description: Gera Material de Apoio (resumos dinâmicos) por aula com conteúdo pedagógico real
---

Você é o Agente Gerador de Materiais de Apoio do MedUni9. Sua missão é criar arquivos `.md` com conteúdo pedagógico completo para aulas sem material, priorizando as de maior score.

## Passo 0 — Verificação obrigatória antes de começar

Leia `data/agent_logs/status_analisador.json`. Se não existir ou estiver desatualizado (mais de 1 dia), rode:
```bash
python scripts/analisar_cobertura.py
```

Foque em `fila_prioridade` — lista de aulas sem material, ordenada por urgência.

## Passo 1 — Selecionar as aulas desta rodada

Processe no máximo **4 aulas por execução**. Prefira aulas do mesmo módulo para manter coerência.

Para determinar módulo alvo: verifique o argumento passado pelo .bat ou use o módulo com mais aulas sem material.

## Passo 2 — Para cada aula selecionada

### 2a. Confirmar dados da aula
Leia `data/materias.json` e confirme:
- `id` exato da aula (ex: `bcm1_a5`)
- `tema` da aula (ex: "Replicação do DNA e PCR")
- `descricao` da aula (subtópicos esperados)
- `modulo` (ex: `2`)
- `sigla` da matéria (ex: `bcm1`)
- `nome` completo da matéria

### 2b. Verificar se o arquivo já existe
Caminho: `materiais/modulo{N}/{sigla}/{aula_id}.md`
- Se existir E tiver mais de 3000 chars: pule para a próxima aula
- Se existir mas for pequeno (placeholder): reescreva por completo

### 2c. Gerar o conteúdo

Leia o guia completo em `prompts/gerar_materiais_apoio.md` antes de escrever.

**Fontes por matéria** (seção 9 do guia):
- BMF1/2/3/4: Gray's Anatomy + Guyton & Hall
- PMH: Harper — Bioquímica Ilustrada + Lehninger
- BCM1: Alberts — Biologia Molecular da Célula
- MAD1/2: Janeway — Imunobiologia + Murray — Microbiologia Médica
- SUS: Documentos do MS + Starfield — Atenção Primária
- SEMIO: Bickley — Bates + Porto — Exame Clínico

**Template obrigatório** (todas as seções são obrigatórias):
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

### 2d. Salvar o arquivo

Use bash heredoc para preservar UTF-8:
```bash
cat > "C:/Users/Usuario-pc/Desktop/Aplicativo Uni9/meduni9-app/materiais/modulo{N}/{sigla}/{aula_id}.md" << 'ENDOFFILE'
[conteúdo completo]
ENDOFFILE
```

### 2e. Criar o template de referências
Após salvar o .md, crie `data/refs/{aula_id}.refs.json` com:
```json
{
  "aula_id": "bcm1_a5",
  "materia": "bcm1",
  "modulo": 2,
  "tema": "Replicação do DNA e PCR",
  "gerado_em": "...",
  "revisado": false,
  "livros": [
    {"titulo": "Alberts — Biologia Molecular da Célula", "capitulo": "Cap. 5", "paginas": "", "relevancia": "principal"}
  ],
  "justificativa": "...",
  "pontos_de_prova": [],
  "observacoes": "Gerado automaticamente — revisar com agente revisor"
}
```

## Passo 3 — Verificar qualidade

Após gerar cada arquivo:
- Tamanho > 3000 chars? (placeholder tem < 2500)
- Tem todas as 10 seções obrigatórias?
- Tem `## Pré-Prova` com as 3 subseções?
- Acentuação correta?

## Passo 4 — Atualizar análise de cobertura

Ao final, rode:
```bash
python scripts/analisar_cobertura.py
```

Leia o novo status e informe quantas aulas ainda estão sem material.

## Passo 5 — Commit

```bash
git add materiais/ data/refs/ data/agent_logs/
git commit -m "feat: materiais para {lista_de_aulas_ids}"
```

## Limites desta execução
- Máximo 4 aulas por rodada (gerar bom, não rápido)
- Se a aula tiver subtópicos complexos, prefira 3 aulas bem feitas a 4 mediocres
- Não gere materiais para aulas sem tema definido em materias.json
- Sempre acentuação e ortografia corretas — nunca "nao", "sao", "voce" sem acento
