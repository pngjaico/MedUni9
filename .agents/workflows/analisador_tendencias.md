---
description: Fazer análise de tendências do conteúdo mais cobrado em prova (Relatório Analítico)
---

Este workflow atrela uma rotina de *Data Science* às questões inseridas no aplicativo. Ele vasculhará todos os lotes de provas extraídas e mapeará a frequência com que cada subfoco ou tópico é cobrado, devolvendo essa visão para o usuário final.

1. Direcione a sua exploração à pasta `/lotes_extraidos/` ou à listagem matriz em `/data/questoes_ineditas.json`.
2. Escreva (ou invoque um template preparado) um script rápido de Data Analytics em Python (`pandas` ou contagem simples `collections.Counter`) escrutinando o campo `Subfoco` e `Foco` de todas as questões do Módulo/Disciplina designada.
3. Classifique os subfocos por reincidência decrescente (ex: 20x Asma, 12x DPOC, 5x Tosse).
4. Elabore um documento executivo em formato Markdown: `analise_incidencia_[disciplina].md` mostrando:
   - Os 5 tópicos mais quentes.
   - Os "Buracos" do semestre (Conteúdo do syllabus que quase não vira questão).
   - Abordagens Preferidas (Ex: "Foca 80% em Casos Clínicos diagnosticados contra 20% em decoreba fisiológica").
5. Opcional: Atualize um JSON de Analytics localmente no app para renderizar o resultado de "Trending Topics de Fisiopato" visualmente no Front-End futuramente.
