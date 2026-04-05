# Épico futuro: Histologia — revisão em texto e atlas de lâminas

Planeamento à parte da revisão escrita de Anatomia (`data/anatomia_revisao.json`). Não implementado; serve de guia quando for priorizado.

## Objetivos

1. **Revisão em texto** alinhada a **Junqueira & Carneiro** e **Ross & Pawlina**, por **ordem sistemática** (igual à aba Anatomia) e, onde fizer sentido, por **tipo de tecido** (epitélio, conjuntivo, cartilagem, osso, sangue, muscular, nervoso) e depois **órgãos** por sistema.
2. **Mesmo modelo de blocos** que em anatomia: `cards`, `sequence` (ordem: ex. fluxo do filtrado glomerular, camadas da parede digestiva), `hub` (ex.: eixo hipófise–alvo).
3. **UI**: segundo segmento em **Histologia** — **Atlas de lâminas** vs **Revisão rápida**, espelhando `AnatomiaScreen` (fetch, loading/erro, busca, chips opcionais por `regiao` ou `tecido`).
4. **Dados**: novo ficheiro `data/histologia_revisao.json` (`version`, `updatedAt`, `sistemas[]` com `subsections` e `blocks[]`). Reutilizar helpers em `index.html` se o schema for idêntico ou extrair funções partilhadas.

## Atlas de imagens (lâminas)

- Manter **catálogo** em `data/histologia_atlas.json`: `sistemas` → `divisoes` → `laminas` com `urlImagem`, metadados de licença quando existir conteúdo.
- **Não** copiar fluxos de atlas comerciais (ex. histology “guide” proprietário); inspirar-se na **navegação** (sistema → órgão/tecido → lâmina), não no conteúdo protegido.
- Fontes preferenciais para **imagens com licença explícita**: [Wikimedia Commons](https://commons.wikimedia.org/) (categorias de histologia), [OpenStax Anatomy & Physiology](https://openstax.org/details/books/anatomy-and-physiology-2e) (CC BY), materiais **OER** de universidades, sempre com `credito`, `licenca` e `urlPaginaFonte` no JSON.

## Ordem e currículo

- Mapear **módulos BMF** (1–4) e **disciplinas** em `data/materias.json` / `PROJECT_CONTEXT.md` para campos opcionais `modulo` ou `disciplina` nas subseções, permitindo filtro futuro “por módulo”.
- Ordem base dos **sistemas** já definida em `histologia_atlas.json` (`ordem` 1–9); expandir `divisoes` com tecidos antes de órgãos quando o plano de ensino o exigir.

## Verificação

- Após implementação: `fetch` local e produção para `/data/histologia_revisao.json`, mesmo padrão de cache que `anatomia_revisao.json`.
