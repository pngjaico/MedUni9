# Inventário de figuras — Módulo 2

Referência rápida para equipe: cada aula do Módulo 2 tem pelo menos um bloco `### Figura sugerida` com **`Figura-ID`** no Markdown, espelhado em `data/materiais/<disciplina>/`.

## Convenção de IDs (Módulo 2)

| Disciplina (pasta) | Padrão `Figura-ID` | Exemplo |
|--------------------|---------------------|---------|
| `bmf2` | `BMF2-A{N}-F01` | `BMF2-A3-F01` |
| `bcm1` | `BCM1-A{N}-F01` | `BCM1-A1-F01` |
| `mad1` | `MAD1-A{N}-F01` | `MAD1-A12-F01` |
| `semiologia2` | `SEMIO2-A{N}-F01` | `SEMIO2-A5-F01` |
| `indicadores` | `IND-A{N}-F01` | `IND-A4-F01` |
| `ds` | `DS-A{N}-F01` | `DS-A2-F01` |

`{N}` = número da aula (`a1` → `1`, `a13` → `13`).

## Onde está cada coisa

| Tipo | Caminho |
|------|---------|
| Material editável (fonte) | `materiais/modulo2/<disciplina>/<aula>.md` |
| Espelho servido / dados | `data/materiais/<disciplina>/<aula>.md` (mesmo conteúdo) |
| Catálogo (URLs, busca Commons, legenda) | `data/materiais_figuras.json` |
| Esquema dos campos | `figuras-materiais/SCHEMA.md` |

## Estado atual

- **Placeholders:** inseridos após o texto de `## Relevância Clínica e Acadêmica`, antes da primeira secção seguinte (com `---` ou antes do próximo `##`).
- **URLs:** preenchimento em lote conforme prioridade editorial; entradas novas no JSON estão com `status: "pendente"` e campos de URL vazios até escolha no Commons.

## Contagem

- **84** ficheiros `.md` no Módulo 2; **1** slot `F01` por aula (placeholder genérico).

---

*Gerado para alinhar edição no repo com o painel `figuras-materiais/` e o app.*
