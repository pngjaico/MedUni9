---
description: Gerar Material de Apoio (Resumos Dinâmicos) baseado na bibliografia e Plano de Ensino
---

Gera materiais instrucionais sintéticos e diretos, unindo o foco específico da Universidade do paciente e as "bíblias" médicas.

1. Escolha 1 (uma) disciplina alvo dentro da estrutura `conteudos/materiais/...` a pedido do usuário.
2. Identifique os livros bases referenciados no Plano de Ensino mapeado correspondente (encontrados no `textos_extraidos.json` ou resumos originais, como Robbins, Guyton, etc.).
3. Consulte o `README_INSTRUCOES.md` desta pasta para garantir que o tom e a diretriz não irão alucinar.
4. Acione a Inteligência Artificial (Claude ou agente local integrando Gemini) com um Prompt focado na criação de um "Summary/Resumo Aula" no formato Markdown ultra-legível.
   - Restrição de contexto: Foco apenas em cobrir os pontos do tópico em questão (ex: Fisiopatologia da Tuberculose, restrito aos conceitos de Inflamação Granulomatosa).
5. Salve o ou os arquivos `.md` criados na respectiva pasta (Ex: `conteudos/materiais/modulo2/mad2/resumo_tuberculose_mad.md`).
6. Se configurado, utilize uma rotina (pandoc / markdown-pdf) para converter a saída visual em PDF para leitura final no App.
