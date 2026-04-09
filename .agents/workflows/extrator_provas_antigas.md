---
description: Extrai em lote enunciados e opções de Provas e Atividades (PDF), aplica formatação clínica, remove questões sem imagem e salva pronto para consumo do app.
---

# Workflow: Extrator Inteligente de Provas Antigas

Este workflow gerencia o pipeline de PDFs crus de atividades e os converte em conteúdo inteligente no padrão nativo do MedGradPlus.

## Passo a Passo

1. **Colocar PDFs na Origem**
   Posicione os PDFs das provas ou listas de exercícios que você deseja converter na pasta `/document_pdf` (ou no diretório apontado). Documentos puros (escaneamentos não-OCR) não funcionam.

2. **Acionar o Motor Gemini (`scripts/extrair_provas.mjs`)**
   // turbo
   3. Execute o extrator mestre via terminal:
   ```bash
   node scripts/extrair_provas.mjs
   ```

## O que a automação fará nos bastidores:
- Lerá o buffer dos PDFs via pacote interno `pdf-parse`.
- Enviará blocos lógicos para a IA (Gemini 2.5 Flash).
- A IA reescreverá o caso clínico aplicando **Elite Bolding** nos principais marcadores diagnósticos.
- Elaborará `explicacoes_opcoes` minuciosas (O porquê de cada alternativa A, B, C, D estar certa ou errada).
- Adicionará a flag `depende_de_imagem`.
- O script JavaScript vetará e **deletará sumariamente** questões com a flag "imagem: true" detectada.
- O resultado persistirá limpo na base `questoes_antigas.json`.

## Pós-Processamento e Integração
4. Se a IA colocar categorizações genéricas (ex: "tema": "Glicólise"), use a automação de recategorização com base em `materias.json` para alinhar as aulas aos IDs rígidos (ex: `pmh_a3`).
5. As questões serão carregadas dinamicamente na aba isolada **"Provas Antigas"** do frontend sem conflitar com o algoritmo de repetição espaçada principal da plataforma.
