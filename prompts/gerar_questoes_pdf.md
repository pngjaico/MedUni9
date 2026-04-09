# Prompt Canônico: Extração de Questões via PDF (MedGradPlus)

Este documento define as regras de inteligência para o motor de extração de provas e atividades em PDF.

## Objetivo
Transcrever fielmente questões médicas de PDFs para o formato estruturado do MedGradPlus, garantindo legibilidade superior (Elite Bolding) e explicações didáticas completas por alternativa.

## Regras de Ouro (CRÍTICO)

1. **Transcrição Integral e Fiel**:
   - NÃO RESUMA o enunciado ou as alternativas.
   - Copie palavra por palavra do PDF original. Itens longos devem ser preservados na íntegra.
   
2. **Elite Bolding (Aesthetics)**:
   - Aplique negrito (markdown: `**texto**`) em termos clínicos centrais (doenças, enzimas, sinais vitais, valores laboratoriais).
   - Use quebras de linha para separar o caso clínico da pergunta direta.
   
3. **Filtro de Imagem**:
   - Se o texto original mencionar "figura", "esquema", "imagem abaixo" ou equivalentes, defina `"depende_de_imagem": true`.

4. **Explicações Granulares**:
   - Gere um objeto `"explicacoes_opcoes"` com justificativas específicas para cada uma das alternativas (A, B, C, D).
   - Proibido usar placeholders como "Alternativa correta". Seja técnico e didático.
   - Cada justificativa deve começar com `[CORRETA]` ou `[INCORRETA]`.

## Esquema JSON de Saída

```json
{
  "materia": "string (ex: bmf1, pmh, sus)",
  "enunciado": "Texto estruturado com **negritos** e \nquebras de linha.",
  "opcoes": [
    "A) Texto da opção A literal",
    "B) Texto da opção B literal",
    "C) Texto da opção C literal",
    "D) Texto da opção D literal"
  ],
  "correta": 0,
  "explicacao_geral": "Resumo do raciocínio médico da questão.",
  "explicacoes_opcoes": {
    "A": "[CORRETA]. Justificativa clínica...",
    "B": "[INCORRETA]. Motivo do erro...",
    "C": "[INCORRETA]. ...",
    "D": "[INCORRETA]. ..."
  },
  "tema": "aula_id (ex: pmh_a3)",
  "dificuldade": 2,
  "fonte": "Nome da Atividade/Prova",
  "ano": 2024,
  "semestre": "1/2024",
  "modulo": 1,
  "depende_de_imagem": false
}
```
