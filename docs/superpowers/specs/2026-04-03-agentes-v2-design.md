# Design: Agentes v2 — MedGradPlus

**Data:** 2026-04-03  
**Escopo:** Módulos 1–4 concluídos. Refinar agentes antes de avançar para módulos 5–8.

---

## Contexto

O app já tem conteúdo completo nos módulos 1–4 (materiais, questões, flashcards parciais). Os agentes atuais processam por fila de prioridade genérica. Este design atualiza 4 workflows existentes e cria 1 novo para operar com mais foco e inteligência.

---

## Agente 1: Gerador de Questões Noturno

**Arquivo:** `.agents/workflows/gerador_questoes.md`  
**Schedule:** `run_gerador_questoes.bat` (já existe)  
**Meta:** 50 questões por noite

### Lógica de déficit duplo

1. Lê `data/materias.json` — mapa de matérias × aulas dos módulos 1–4
2. Lê `data/questoes.json` — conta questões por matéria
3. Calcula déficit proporcional por matéria: `(aulas_totais × 5 - questoes_existentes) / aulas_totais`
4. Seleciona a matéria com maior déficit
5. Dentro da matéria, calcula déficit por aula: `5 - questoes_existentes_na_aula`
6. Ordena aulas por déficit descendente, seleciona as necessárias para ~50 questões (até 10 aulas × 5)

### Saída

- Relatório em `data/agent_logs/pendentes/questoes_{ts}.json`
- Atualiza `data/agent_logs/status_questoes.json` com matéria escolhida e totais
- **Nenhuma alteração em `data/questoes.json` sem aprovação**

### Regras mantidas

- Seguir `prompts/gerar_questoes.md` integralmente
- Distribuição de dificuldade: 1×dif1, 3×dif2, 1×dif3 por aula
- Posição da correta equilibrada no lote
- `tema` sempre `aula_id` exato

---

## Agente 2: Gerador de Flashcards Noturno

**Arquivo:** `.agents/workflows/gerador_flashcards.md`  
**Schedule:** `run_gerador_flashcards.bat` (já existe)  
**Meta:** ~50 flashcards por noite (arredonda para completar a aula)

### Lógica de déficit duplo

Idêntica ao gerador de questões, com meta de 12 flashcards por aula.  
4–5 aulas por rodada (48–60 flashcards).

### Saída

- Relatório em `data/agent_logs/pendentes/flashcards_{ts}.json`
- Atualiza `data/agent_logs/status_flashcards.json`
- **Nenhuma alteração em `data/flashcards.json` sem aprovação**

### Regras mantidas

- Seguir `prompts/gerar_flashcards.md` integralmente
- Distribuição: 4×dif1, 5×dif2, 3×dif3 por aula
- `verso` máx 120 chars
- Tags lowercase sem acento

---

## Agente 3: Verificador de Categorização

**Arquivo:** `.agents/workflows/verificador_categorizacao.md` *(novo)*  
**Schedule:** novo `.bat` necessário  

### O que verifica

**Questões:**
- `materia` — sigla válida em `data/materias.json`
- `tema` — `aula_id` exato (nunca nome livre)
- `dificuldade` — 1/2/3; coerente com tipo de questão
- `correta` — índice 0–3 (não letra)
- `modulo` — bate com o módulo da matéria

**Flashcards:**
- `materia`, `tema`, `dificuldade` — mesma lógica
- `tags` — lowercase, sem acento, sem espaço
- `frente`/`verso` — dentro de 120 chars

### Estado persistente

`data/agent_logs/status_verificador.json`:
```json
{
  "ultima_execucao": "...",
  "ids_questoes_verificados": [1, 2, 3],
  "ids_flashcards_verificados": [1, 2, 3],
  "total_problemas_encontrados": 0,
  "total_corrigidos": 0
}
```

- Itens já verificados **nunca são reprocessados**, mesmo sem problema
- Limite por rodada: 50 itens (questões + flashcards)

### Saída

- Relatório em `data/agent_logs/pendentes/verificador_{ts}.json`
- Atualiza `status_verificador.json` com IDs processados
- **Nenhum dado alterado sem aprovação**

---

## Agente 4: Revisor de Materiais

**Arquivo:** `.agents/workflows/revisor_materiais.md`  
**Schedule:** `run_revisor.bat` (já existe)  
**Escopo:** Uma matéria inteira por dia

### Seleção da matéria

Score = `dias_sem_revisao × (arquivos_existentes / total_aulas)`  
Prioriza matérias com mais material pronto que faz mais tempo sem revisão.  
Estado em `data/agent_logs/status_revisor_materiais.json` → campo `historico_revisoes: {materia_id: data}`.

### O que revisa em cada arquivo

| Check | Ação |
|---|---|
| Ortografia e português | Corrige erros, acentuação, concordância |
| Clareza | Reescreve trechos confusos; adiciona contexto onde falta |
| Prefixos/rótulos | Insere labels inline (`**Mecanismo:**`, `**Clínico:**`, `**Atenção:**`) |
| Tabelas | Remove linhas em branco entre `\|...\|`; expande tabelas rasas para prosa |
| Fluxos (`flow`) | Corrige fence incorreto; sugere `flow` onde há sequência sem diagrama |
| Tamanho | Sinaliza < 120 ou > 220 linhas |

### Glossário por aula

Gera `data/glossario/{aula_id}.glossario.json`:
```json
{
  "aula_id": "bmf1_a3",
  "materia": "bmf1",
  "siglas": [
    { "termo": "AMP", "expansao": "Adenosina Monofosfato", "contexto": "regulação energética celular" }
  ],
  "abreviacoes": [
    { "termo": "ATP", "expansao": "Adenosina Trifosfato" }
  ]
}
```

Esse arquivo alimentará futura função de tooltip no app.

### Saída

- Relatório em `data/agent_logs/pendentes/revisor_{ts}.json` com campo extra `glossario` por aula
- Atualiza `status_revisor_materiais.json` com data de revisão da matéria
- **Nenhum arquivo `.md` alterado sem aprovação**

---

## Agente 5: Feedback → Planos de Ação

**Arquivo:** `.agents/workflows/feedback_analysis.md`  
**Schedule:** `run_feedback_planos.bat` (já existe)

### Tipos suportados (7)

| Tipo | Origem | ID vinculado |
|---|---|---|
| `bug` | Página principal | Não |
| `sugestao` | Página principal | Não |
| `conteudo` | Página principal | Não |
| `interface` | Página principal | Não |
| `questoes` | Botão na questão | `questao_id` |
| `flashcards` | Botão no flashcard | `flashcard_id` |
| `materiais` | Botão no material | `aula_id` |

### Pipeline (inalterado na lógica)

1. Lê **apenas** `data/feedback/approved/` — nunca `incoming/`
2. Gera plano de ação por tipo:
   - `questoes` → correção proposta no JSON da questão específica
   - `flashcards` → correção proposta no JSON do flashcard específico
   - `materiais` → edição proposta no `.md` da aula
   - Tipos existentes → comportamento atual mantido
3. Salva em `data/agent_logs/pendentes/feedback_{ts}.json`
4. Atualiza `status_feedback_planos.json`

**Nenhum dado é alterado sem aprovação.**

---

## Arquivos novos necessários

| Arquivo | Tipo | Motivo |
|---|---|---|
| `.agents/workflows/verificador_categorizacao.md` | Novo workflow | Não existia |
| `.agents/run_verificador.bat` | Novo bat | Para invocar o verificador |
| `data/agent_logs/status_verificador.json` | Novo status | Estado de IDs verificados |
| `data/glossario/` | Nova pasta | Glossários por aula |

---

## Arquivos modificados

| Arquivo | Mudança |
|---|---|
| `.agents/workflows/gerador_questoes.md` | Déficit duplo + meta 50/noite |
| `.agents/workflows/gerador_flashcards.md` | Déficit duplo + meta ~50/noite |
| `.agents/workflows/revisor_materiais.md` | Uma matéria/dia + glossário |
| `.agents/workflows/feedback_analysis.md` | 3 novos tipos |
| `prompts/automacao_schedules.md` | Documentar novo schedule do verificador |
