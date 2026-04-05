# Inventário de figuras — Módulo 1

Referência rápida para equipe: cada aula do Módulo 1 tem pelo menos um bloco `### Figura sugerida` com **`Figura-ID`** no Markdown, espelhado em `data/materiais/<disciplina>/`.

## Convenção de IDs (Módulo 1)

| Disciplina (pasta) | Padrão `Figura-ID` | Exemplo |
|--------------------|---------------------|---------|
| `bmf1` | `BMF1-A{N}-F01` (e `F02`, `F03` na aula 5) | `BMF1-A1-F01` |
| `semiologia1` | `SEMIO1-A{N}-F01` | `SEMIO1-A3-F01` |
| `pmh` | `PMH-A{N}-F01` | `PMH-A4-F01` |
| `sus` | `SUS-A{N}-F01` | `SUS-A1-F01` |
| `pe1` | `PE1-A{N}-F01` | `PE1-A2-F01` |

`{N}` = número da aula (`a1` → `1`, `a13` → `13`).

## Onde está cada coisa

| Tipo | Caminho |
|------|---------|
| Material editável (fonte) | `materiais/modulo1/<disciplina>/<aula>.md` |
| Espelho servido / dados | `data/materiais/<disciplina>/<aula>.md` (mesmo conteúdo) |
| Catálogo (URLs, busca Commons, legenda) | `data/materiais_figuras.json` |
| Esquema dos campos | `figuras-materiais/SCHEMA.md` |

## Estado atual

- **Placeholders:** inseridos após o texto de `## Relevância Clínica e Acadêmica`, antes da primeira secção seguinte; não alteram o texto já existente da aula.
- **URLs:** por decisão editorial, preenchimento em lote **depois** que os quatro módulos estiverem revisados; entradas novas no JSON estão com `status: "pendente"` e campos de URL vazios.
- **Wikimedia Commons:** usar `buscaCommonsEn` / `buscaCommonsPt` de cada entrada no JSON (ver também `scripts/README_figuras_commons_batch.md`).

## Contagem

- **61** ficheiros `.md` no Módulo 1; **BMF1 aula 5** mantém **3** figuras (`F01`–`F03`); as restantes aulas têm **1** slot `F01` (placeholder genérico onde antes não havia).

---

*Gerado para alinhar edição no repo com o painel `figuras-materiais/` e o app.*
