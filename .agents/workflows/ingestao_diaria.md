---
description: Organizar PDFs novos e Atualizar Materiais (Diário)
type: local-agent
cron: "0 1 * * *"
---

# Workflow: Ingestão Diária de PDFs
**Tipo:** LOCAL — requer PC ligado com acesso à pasta `conteudos/`

Siga os passos abaixo sequencialmente de forma rigorosa:

## Passo 1 — Varredura

Rode `node organizar.js` para mover os PDFs de `conteudos/_para_categorizar/` para suas pastas de disciplina. Verifique o output.

- Se a pasta estiver vazia: registre no relatório final e encerre.
- Se houver erro no script: tente mover manualmente lendo os primeiros parágrafos de cada PDF para identificar a disciplina e módulo.

## Passo 2 — Renomeação de PDFs com Nomes Estranhos

Para cada PDF com nome não descritivo (ex: `doc_12345.pdf`, `Aula.pdf`, `scan001.pdf`):

1. Leia as primeiras páginas do PDF.
2. Identifique: disciplina, módulo e tema principal.
3. Renomeie para o padrão: `[SIGLA]_[tipo]_[tema-curto].pdf`
   - Exemplos: `BMF1_slide_tecido-osseo.pdf`, `MAD_resumo_bacterias-gram.pdf`
   - Use apenas letras minúsculas, números e hífens. Sem espaços ou acentos.

## Passo 3 — Provas e Questões

Se houver PDFs identificados como **provas ou exercícios**, rode:
```
python extrator_questoes_local.py
```
Confirme antes que o arquivo existe com `Glob` ou `Read`.

## Passo 4 — Planos de Ensino e Script BMF

Se houver novos **planos de ensino** ou PDFs de disciplinas BMF (BMF1, BMF2, BMF3, BMF4):

1. Leia `build_materias.py` com `Read` para confirmar que não vai sobrescrever dados do usuário.
2. Se seguro, rode: `python build_materias.py`

## Passo 5 — Relatório

Crie ou atualize `conteudos/_logs/ingestao_YYYY-MM-DD.txt`:

```
INGESTÃO — [DATA]
PDFs processados: X | Não identificados: X
---
[nome_original] → [destino/nome_novo]  [DISCIPLINA/MÓDULO]
OBSERVAÇÕES: [anomalias ou arquivos suspeitos]
```

Se nenhum arquivo foi encontrado: `Nenhum arquivo novo. Nada a fazer.`

## Passo 6 — Relatório de Texto

Crie ou atualize `conteudos/_logs/ingestao_YYYY-MM-DD.txt`:

```
INGESTÃO — [DATA]
PDFs processados: X | Não identificados: X
---
[nome_original] → [destino/nome_novo]  [DISCIPLINA/MÓDULO]
OBSERVAÇÕES: [anomalias ou arquivos suspeitos]
```

Se nenhum arquivo foi encontrado: `Nenhum arquivo novo. Nada a fazer.`

## Passo 7 — Escrever Status JSON (obrigatório)

Ao final, escreva o arquivo `data/agent_logs/status_ingestao.json` com os dados reais:

```json
{
  "status": "ok",
  "rodou_em": "DD/MM/YYYY HH:MM",
  "duracao": "Xs",
  "processados": 0,
  "nao_identificados": 0,
  "acoes": [
    { "tipo": "ok",   "hora": "HH:MM", "texto": "nome_original.pdf → destino/nome_novo.pdf [DISCIPLINA]" },
    { "tipo": "warn", "hora": "HH:MM", "texto": "arquivo_estranho.pdf → _nao_identificado/" }
  ],
  "observacoes": null
}
```

Use `"status": "ok"` se tudo correu bem, `"warn"` se houve não-identificados, `"err"` se houve falha.
Depois faça: `git add data/agent_logs/status_ingestao.json && git commit -m "chore: relatorio ingestao [DATA]" && git push`

## Passo 8 — Atualizar Dashboard HTML (opcional, se possível)

Atualize também `.agents/dashboards/ingestao_pdfs.html`.
Localize o bloco entre os comentários `// DATA_START` e `// DATA_END` e substitua pela linha abaixo com os dados reais:

```js
const REPORT_DATA = {
  "status": "ok",
  "rodou_em": "DD/MM/YYYY HH:MM",
  "duracao": "Xs",
  "processados": N,
  "nao_identificados": N,
  "acoes": [
    { "tipo": "ok", "hora": "HH:MM", "texto": "nome_original.pdf → destino/nome_novo.pdf [DISCIPLINA]" },
    { "tipo": "warn", "hora": "HH:MM", "texto": "arquivo_estranho.pdf → _nao_identificado/" }
  ],
  "observacoes": "Texto livre se houver anomalias, ou null"
};
```

Use `"status": "ok"` se tudo correu bem, `"warn"` se houve não-identificados, `"err"` se houve falha crítica.

## Regras

- Nunca apague um PDF sem mover para algum destino.
- Em dúvida sobre a disciplina, mova para `conteudos/_nao_identificado/`.
- Não modifique nada fora de `conteudos/` e `.agents/dashboards/`.
- Não faça git commit (conteúdos são locais e estão no .gitignore).
