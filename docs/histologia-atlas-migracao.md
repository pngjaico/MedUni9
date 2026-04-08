# Migração do Atlas de Histologia

## Resumo
- Origem: `Meus Sites/Atlas Hisotlogia/histologia.icb.ufg.br/images/laminas`
- Destino canônico: `data/histologia/atlas`
- Categorias migradas: **18**
- Imagens migradas: **276**
- Imagens com versão zoom: **271**

## Regra de nomenclatura
- Formato: `histo_<categoria_legada>_<alias_arquivo>.jpg`
- Exemplo: `histo_10_digestorio_j101.jpg`
- Metadados preservados por lâmina: `aliasLegado`, `categoriaLegada`, `urlImagemZoom`, `classificacaoRelevancia`.

## Classificação por categoria
| Categoria | Total | Zoom | Relevância alta | média | baixa |
|---|---:|---:|---:|---:|---:|
| 10_digestorio | 56 | 56 | 56 | 0 | 0 |
| 11_pele | 8 | 8 | 0 | 0 | 8 |
| 12_respiratorio | 12 | 12 | 1 | 0 | 11 |
| 13_urinario | 13 | 13 | 0 | 1 | 12 |
| 14_endocrinas | 13 | 13 | 8 | 0 | 5 |
| 15_sentido | 1 | 1 | 1 | 0 | 0 |
| 16_masculino | 18 | 18 | 18 | 0 | 0 |
| 17_feminino | 28 | 28 | 25 | 3 | 0 |
| 18_embrionario | 4 | 4 | 4 | 0 | 0 |
| 1_citologia | 8 | 8 | 0 | 0 | 8 |
| 2_epitelio | 17 | 17 | 0 | 0 | 17 |
| 3_conjuntivo | 26 | 23 | 0 | 4 | 22 |
| 4_cartilagem | 8 | 6 | 0 | 1 | 7 |
| 5_osso | 12 | 12 | 1 | 0 | 11 |
| 6_musculo | 8 | 8 | 0 | 0 | 8 |
| 7_nervoso | 15 | 15 | 1 | 0 | 14 |
| 8_vascular | 18 | 18 | 0 | 0 | 18 |
| 9_linfatico | 11 | 11 | 0 | 0 | 11 |

## Observações
- O atlas do app foi atualizado para cobrir 100% das 18 categorias legadas.
- A UI existente foi preservada, consumindo o mesmo `data/histologia_atlas.json`.
- A tabela técnica detalhada está em `data/histologia_atlas_migracao_relatorio.json`.
