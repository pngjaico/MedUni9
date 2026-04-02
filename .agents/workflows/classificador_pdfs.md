---
description: Ler o conteúdo dos PDFs crus com nomes ruins, deduzir a matéria e renomear.
---

Se a pasta inicial estiver caótica (ex: "Scan_4938.pdf", "doc_joao.pdf"), este fluxo orienta você (o agente) a mergulhar no texto deles para classificar.

1. Identifique arquivos em `conteudos/_para_categorizar/` que não contenham "Provas" ou "Resumos" facilmente identificáveis por nome.
2. Utilize uma ferramenta ou script de extração rápida (ex: `pdftotext` cru ou um mini script Python lendo a página 1 e 2 com `pymupdf`) apenas para arrancar a amostragem léxica.
3. Compare as palavras-chaves do texto extraído com o mapeamento mestre de disciplinas `data/materias.json` (Ex: "Osteócitos", "Cartilagem" sugerem BMF1 ou Semiologia Musculoesquelética).
4. **Autonomia (Turbo):** Após descobrir do que se trata, execute o comando de renomear no Windows (`Rename-Item` se Powershell, ou via script `os.rename`) atribuindo um padrão legível como `BMF1_Material_Osteocitos.pdf`.
5. Apresente um log visual sumário listando a conversão "antes -> depois".
