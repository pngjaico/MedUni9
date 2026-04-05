# Figuras — Wikimedia Commons (fluxo de trabalho)

Esta pasta centraliza o que você precisa para **buscar imagens no Commons** e depois encaixar no app ou no `.md` da aula.

## Arquivos

| Arquivo | Uso |
|---------|-----|
| **`data/materiais_figuras.json`** | **Fonte usada pelo app:** URLs, licença, crédito, `aula` = id do tema. |
| **`figuras-materiais/index.html`** | Painel local (com `node server.js`) para colar links sem editar JSON à mão. Ver **`figuras-materiais/README.md`**. |
| `inventario.md` | Lista legível para planejamento e busca; pode espelhar o JSON (opcional). |

## Fluxo sugerido

1. Abrir [Wikimedia Commons](https://commons.wikimedia.org/) e pesquisar pelos termos em inglês (costuma retornar mais resultados) ou pelos indicados na coluna **Busca Commons** / campos `buscaCommonsEn` no JSON.
2. Filtrar por licença livre (ex.: CC BY-SA, domínio público). Ler a página do ficheiro: autor, licença, requisitos de atribuição.
3. Registrar no **`data/materiais_figuras.json`** via painel **http://localhost:3001/figuras-materiais/** (URL da imagem, página Commons, licença, crédito).
4. Opcional: atualizar `inventario.md` só para leitura humana; o texto da aula pode manter `### Figura sugerida` como briefing — as imagens aparecem na secção **Figuras desta aula** no app quando o JSON tiver `urlImagem`.

## Duplicação `materiais/` e `data/materiais/`

O caminho canónico de edição é `materiais/modulo<N>/...`. O mesmo conteúdo deve existir em `data/materiais/...`. Ao atualizar uma aula com figura definitiva, espelhar nos dois (UTF-8 sem BOM), como no `prompts/gerar_materiais_apoio.md`.

## IDs no inventário

Formato: `DISCIPLINA-AULA-F##` (ex.: `BMF1-A5-F01`). Novas linhas seguem a sequência por aula.
