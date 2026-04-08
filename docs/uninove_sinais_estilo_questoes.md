# Sinais de Estilo da Banca Uninove (extração de base antiga)

## Fontes analisadas

- `conteudos/_para_categorizar/questoes_todas.json`
- `conteudos/_para_categorizar/questoes_categorizadas.json`

## Qualidade dos dados de origem

- Base total categorizada: `1541` itens.
- Itens marcados como `precisa_revisao: false`: `153` (subconjunto mais confiável).
- Ruído frequente de OCR/export: timestamps, URLs de Google Forms, trechos quebrados e mistura de enunciado/opções.
- Conclusão: usar esses dados como **sinal de estilo**, não como gabarito de conteúdo.

## Sinais robustos extraídos (subconjunto mais confiável)

- Predomínio de enunciado mais longo: média ~`166` caracteres.
- Forte presença de contexto aplicado (clínico/propedêutico) antes da pergunta objetiva.
- Alternativas historicamente em `5` opções na banca original; no app manteremos `4`.
- Linguagem de prova tende a ser direta e orientada a decisão (diagnóstico, associação anatômica, mecanismo, interpretação de achado).

## Anti-sinais (evitar no novo padrão)

- Metalinguagem de produção (`na aula`, `no material`, instruções ao aluno dentro do enunciado).
- Alternativa correta evidente por formato de tabela/cabeçalho.
- Distratores de capítulo distante (fora do microtema da pergunta).
- Vinheta decorativa sem impacto na tomada de decisão.

## Tradução para o app (4 alternativas)

Para compatibilizar estilo Uninove com o produto:

1. Manter `4` alternativas (`A-D`) no banco atual.
2. Simular “densidade de banca” com 3 distratores plausíveis e competitivos.
3. Exigir teste anti-obviedade por leitura de aluno.
4. Preservar rastreabilidade por `tema = aula_id`.

## Uso recomendado

Este documento deve orientar:

- ajustes no prompt canônico de questões;
- prompts operacionais por disciplina;
- validação de lotes (gate de qualidade antes de salvar).
