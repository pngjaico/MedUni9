# Inventário de figuras — Módulo 3

Referência rápida para equipe: cada aula canónica tem pelo menos um bloco `### Figura sugerida` com **`Figura-ID`** no Markdown, espelhado em `data/materiais/<disciplina>/`.

## Convenção de IDs (Módulo 3)

| Disciplina (pasta em `materiais/modulo3/`) | Padrão `Figura-ID` | Ficheiro (exemplo) |
|--------------------------------------------|---------------------|---------------------|
| `bmf3` | `BMF3-A{N}-F01` | `bmf3_a1.md` |
| `mad2` | `MAD2-A{N}-F01` | `mad2_a1.md` |
| `fisiopato3` | `FP3-A{N}-F01` | `fp3_a1.md` |
| `semiologia3` | `SEMIO3-A{N}-F01` | `semio3_a1.md` |
| `saude_trabalhador` | `ST-A{N}-F01` | `st_a1.md` |

`{N}` = número da aula (`a1` → `1`, `a22` → `22`).

## Pastas duplicadas no repositório

Existem cópias legadas com o mesmo conteúdo (sincronizadas após gerar placeholders):

| Canónica (`data/materias.json`) | Cópia local |
|---------------------------------|-------------|
| `fisiopato3` | `fp3/` |
| `semiologia3` | `semio3/` |
| `saude_trabalhador` | `st/` |

O catálogo JSON e o caminho preferido no painel usam a pasta **canónica** (`caminhoMaterial`: `materiais/modulo3/<disciplina>/...`).

## Onde está cada coisa

| Tipo | Caminho |
|------|---------|
| Material editável (fonte) | `materiais/modulo3/<disciplina>/<aula>.md` |
| Espelho servido / dados | `data/materiais/<disciplina>/<aula>.md` |
| Catálogo | `data/materiais_figuras.json` |
| Esquema dos campos | `figuras-materiais/SCHEMA.md` |

## Estado atual

- **Placeholders:** após `## Relevância Clínica e Acadêmica`; `status: "pendente"` até escolha no Commons.
- **Contagem:** **71** aulas nas pastas canónicas (22 BMF3 + 20 MAD2 + 15 FP3 + 6 SEMIO3 + 8 ST).

---

*Gerado para alinhar edição no repo com o painel `figuras-materiais/` e o app.*
