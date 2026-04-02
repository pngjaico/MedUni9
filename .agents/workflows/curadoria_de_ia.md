---
description: Lapidar e Curar Pacotes com Inteligência Artificial (Diário)
---

Este workflow serve para que você assuma o papel de um Agente de Integração, lendo os arquivos "crus" para gerar a versão maravilhosa das questões ou repassar essa lógica orientando o usuário a fazer no Claude.

1. Identifique se ainda existem arquivos JSON não processados em `/conteudos/_para_categorizar/lotes_extraidos`.
2. Se o usuário quiser que VOCÊ (a IA na interface Gemini/VSCode local) refine, leia apenas de UM arquivo de lote por vez no máximo.
3. Ao gerar as respostas e explicações de alternativas erradas, siga as instruções explícitas de `/prompts/curadoria_agente_claude.md`.
4. Uma vez que o processamento do lote esteja perfeito e as justificativas cirúrgicas da alternativa correta e incorretas formuladas (Flashcards no padrão Anki conciso com rodapé cinza), você deve DESTRUIR/remover o lote temporário, movendo e fazendo um *append* do conteúdo consolidado diretamente no arquivo `/data/questoes_ineditas.json` ou `/data/flashcards.json`.

5. **Escrever Status JSON (obrigatório):** Ao final, escreva `data/agent_logs/status_curadoria.json`:

```json
{
  "status": "ok",
  "rodou_em": "DD/MM/YYYY HH:MM",
  "lotes_processados": 0,
  "questoes_curadas": 0,
  "flashcards_gerados": 0,
  "acoes": [
    { "tipo": "ok",   "hora": "HH:MM", "texto": "Lote lote_bmf1_01.json → 5 questões adicionadas a questoes_ineditas.json" },
    { "tipo": "info", "hora": "HH:MM", "texto": "Lote removido após consolidação" }
  ],
  "observacoes": null
}
```

Use `"status": "ok"` se processou algum lote, `"warn"` se encontrou inconsistências, `"err"` se falhou. Se não havia lotes, use `"status": "idle"` com `"lotes_processados": 0`.
Depois: `git add data/agent_logs/status_curadoria.json && git commit -m "chore: relatorio curadoria [DATA]" && git push`

6. **Atualizar Dashboard HTML (opcional):** Atualize também `.agents/dashboards/curadoria_meduni9.html` se quiser manter o arquivo standalone.
