# 🕒 Automação de Schedules do Claude Code

Como a maior parte dos nossos "Poderes" reside na pasta `conteudos` e nos PDFs pesados (que sabiamente estão no `.gitignore` para o repositório não explodir de tamanho), dividimos nossos agentes automáticos em duas áreas: **Agentes Locais (Seu PC)** e **Agentes em Nuvem (GitHub)**.

Copie e cole os prompts abaixo dentro do seu Terminal rodando o Claude Code para registrar as assinaturas noturnas.

---

## 💻 1. Agentes Locais (Rodam no seu PC na Madrugada)
*Requisito: O seu PC precisa estar ligado e com o Terminal minimizado.*

### A. O Curador Diário (Lapidação de Questões)
Este schedule irá acordar de madrugada, ler a fila de json crus e usar a IA para comentar as respostas sem esgotar cota.
**Cole no Claude Code:**
```text
/schedule --cron "0 2 * * *" --name "Curadoria_Meduni9" "Por favor, ative e execute os passos detalhados no arquivo .agents/workflows/curadoria_de_ia.md. Lembre-se de processar o JSON de lote que está em lotes_extraidos em fatias de pequenas questões. Use a engine local de python e as instruções de 'prompts/curadoria_agente_claude.md' se precisar. Após finalizar, apague o lote temporário."
```

### B. O Bibliotecário (Classificação e Ingestão)
Este agent acordará e empacotará propostas soltas se você desligou o PC e esqueceu de categorizá-las.
**Cole no Claude Code:**
```text
/schedule --cron "0 1 * * *" --name "Ingestão_Pdfs" "Execute rigorosamente o workflow de arquivo '.agents/workflows/ingestao_diaria.md'. Vasculhe a pasta conteudos/_para_categorizar/. Renomeie PDFs estranhos se baseando em seu texto inicial e guarde em suas devidas partições de materiais. Rode o script BMF caso sinta necessidade e avise em um arquivo de texto resumido o que você achou de ontem para hoje."
```

---

## ☁️ 2. Agentes de Nuvem (Github Actions Setup)
*Não dependem do seu computador ligado. Ficam varrendo a estabilidade do código e realizando os Deploys Firebase ou correções analíticas de front-end.*

### C. Deploy e Validação Noturna
Se alguma modificação foi pushada de dia e quebrou formatações do JSON web, a Nuvem avalia os dados limpos de madrugada e dá o Deploy oficial pro ar às 05:00 da manhã.
**Cole no Claude Code (para o próprio Claude já desenhar o yml no github):**
```text
/schedule --cron "0 5 * * *" --name "FirebaseDeploy_Sync" "Por favor, avalie a integridade do arquivo `data/questoes_ineditas.json` e `data/materias.json`. Se achar vírgulas sobrando, feche os arrays, faça git commit. Em seguida encadeie para o workflow '.agents/workflows/deploy_meduni9.md' finalizando no host global do firebase."
```

---

### Dica Prática de `cron` (Como ler os tempos):
- `"0 1 * * *"` -> Todo dia às **01h da manhã**.
- `"0 2 * * *"` -> Todo dia às **02h da manhã**.
- `"0 5 * * *"` -> Todo dia às **05h da manhã** (Deploy pro Vercel/Firebase enquanto tomam café).
