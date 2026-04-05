# Esquema — `data/materiais_figuras.json`

| Campo | Obrigatório | Visível ao aluno no app | Uso |
|-------|-------------|-------------------------|-----|
| `id` | sim | não (só interno) | Chave estável; deve coincidir com **`**Figura-ID:**`** no `.md` para figura **inline** no texto |
| `modulo` | sim | não | Número do módulo |
| `disciplina` | sim | não | Id da pasta, ex. `bmf1` |
| `aula` | sim | não (usado para filtrar) | Deve ser igual ao id da aula no catálogo, ex. `bmf1_a5` |
| `caminhoMaterial` | recomendado | não | Caminho do `.md` editável |
| `momento` | opcional | não | Onde a figura entra no texto |
| `descricaoVisual` | recomendado | não | Briefing para busca no Commons |
| `tipoSugerido` | opcional | não | Esquema, micrografia, RX, etc. |
| `buscaCommonsEn` | recomendado | não | Termos para colar na busca EN |
| `buscaCommonsPt` | opcional | não | Termos PT |
| `status` | sim | não | `pendente` \| `encontrada` \| `inserida` \| `descartada` |
| `urlImagem` | quando publicar | **sim** (imagem) | URL HTTPS direto do ficheiro |
| `urlThumbnail` | opcional | não usado ainda | Reserva para miniatura |
| `urlPaginaCommons` | recomendado | **sim** (link “Ver no Commons”) | Página do ficheiro |
| `licenca` | recomendado | **sim** | Texto curto da licença |
| `credito` | recomendado | **sim** | Autor / atribuição |
| `legenda` | recomendado | **sim** | Texto abaixo da imagem |
| `notas` | opcional | não | Observações só para a equipe |

Versão do documento: campo `version` (número inteiro). Atualizar `updatedAt` em ISO 8601 ao salvar.
