---
description: Padronizar Nomenclatura de PDFs e JSONs de maneira Limpa
---

Este workflow visa limpar a sujeira na árvore de diretórios renomeando arquivos com acentos, espaços estanhos ou nomes longos, padronizando-os para uso em endpoints sem bugs.

// turbo-all
1. Vasculhe recursivamente a pasta solicitada pelo usuário (ex: `lotes_extraidos/` ou `materiais/`).
2. Utilize scripts de *Regex* (Node ou Python) para localizar arquivos fora do padrão imposto:
   - Sem acentos, sem ç, sem espaços (substituir por underscores `_` ou hifens `-`).
   - Tudo em minúsculo.
   - Formato base Arquivo Final (JSON): `lote_01_modulo2_bcm.json`.
   - Formato base Material (PDF): `modulo2_bcm_resumo_ciclo_celular.pdf`.
3. Aplique as modificações pelo terminal (`os.rename` via python ou loop cmd) substituindo o nome dos arquivos encontrados.
4. Confirme que todos os diretórios e seus sub-arquivos seguem a nova convenção de nomenclatura.
