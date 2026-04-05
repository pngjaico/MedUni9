# Ideia: script em lote (Wikimedia Commons × `materiais_figuras.json`)

Objetivo futuro: para uma **disciplina** (ou lista de `aula`), percorrer entradas em `data/materiais_figuras.json` com `urlImagem` vazio e:

1. Ler `buscaCommonsEn` (ou PT) e opcionalmente consultar a [API do Commons](https://commons.wikimedia.org/wiki/Commons:API/MediaWiki) ou gerar URL de pesquisa.
2. Sugerir ficheiros com licença livre (CC, domínio público) e preencher `urlImagem` + `urlPaginaCommons` + `licenca` + `credito` após revisão humana.
3. Nunca sobrescrever URLs já preenchidos sem flag `--force`.

Pré-requisitos úteis: IDs iguais ao `**Figura-ID:**` nos `.md`; descrições focadas no Commons (ver `prompts/gerar_materiais_apoio.md`).

Este ficheiro é só especificação; implementação fica para quando quiser automatizar.
