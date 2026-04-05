# Handoff: materiais Módulo 1 (estilo + o que falta + prompt para outro chat)

Documento de continuidade para quem entra no repositório **sem o contexto** das conversas anteriores. O canônico de escrita continua sendo [`gerar_materiais_apoio.md`](gerar_materiais_apoio.md).

---

## Como estávamos fazendo quando o utilizador aprovou (receita editorial)

**Referências de estilo no repo (abrir e imitar tom e densidade):**

- [`materiais/modulo1/semiologia1/semio1_a3.md`](../materiais/modulo1/semiologia1/semio1_a3.md) — parágrafos fluidos, **negrito só em conceitos-chave**, tabelas quando ajudam.
- [`materiais/modulo1/bmf1/bmf1_a1.md`](../materiais/modulo1/bmf1/bmf1_a1.md) — mesmo padrão: clareza, prova, integração clínica sem “encher de negrito”.
- [`materiais/modulo1/bmf1/bmf1_a5.md`](../materiais/modulo1/bmf1/bmf1_a5.md) — exemplo com **Figura-ID** + blocos `### Figura sugerida` alinhados ao catálogo de imagens.

**Regra de ouro:** negrito para **termos e ideias que caem em prova**, não para quase cada palavra. Evitar o padrão “uma palavra negrito / outra não” em sequência (visto em várias aulas BMF antes da reescrita).

**Documento canônico (obrigatório para quem continua):**

- [`prompts/gerar_materiais_apoio.md`](gerar_materiais_apoio.md) — estrutura da aula (`## Relevância…`, blocos temáticos, `## Ponte com a Clínica`, `## Pré-Prova`), **>100 linhas**, tabelas vs Mermaid, **figuras**, **fontes bibliográficas**, checklist, encoding UTF-8 sem BOM, espelho `data/materiais/` + `materiais/moduloN/`.
- [`materiais/GUIA_CRIACAO.md`](../materiais/GUIA_CRIACAO.md) — convenção de pastas e nomes de ficheiro.

**Fontes (usar a lista do próprio prompt; não inventar guideline):**

- Seção **“Fontes concretas e checagem de conteúdo”** em [`gerar_materiais_apoio.md`](gerar_materiais_apoio.md) — Moore/Netter, Junqueira, Porto/Bates para semiologia, etc.

**Imagens (fluxo atual):**

- Catálogo: [`data/materiais_figuras.json`](../data/materiais_figuras.json) — `id` igual a `**Figura-ID:**` no `.md`; `buscaCommonsEn` / `buscaCommonsPt` pensados para [Wikimedia Commons](https://commons.wikimedia.org/).
- Documentação: [`figuras-materiais/README.md`](../figuras-materiais/README.md), [`figuras-materiais/SCHEMA.md`](../figuras-materiais/SCHEMA.md), inventário opcional [`figuras-commons/inventario.md`](../figuras-commons/inventario.md).
- App: briefing longo some; com `Figura-ID` a imagem aparece **inline**; rodapé só para figuras com URL **sem** slot no texto; aviso azul final em **linguagem de aluno** (sem termos internos).
- Ideia de script em lote: [`scripts/README_figuras_commons_batch.md`](../scripts/README_figuras_commons_batch.md).

---

## Onde paramos / o que falta (inventário)

| Disciplina | Situação (alto nível) |
|------------|------------------------|
| **semiologia1** (`semio1_a1` … `semio1_a9`) | Modelo de qualidade; tratar como **concluído** salvo revisão pontual. |
| **bmf1** | **Referência / tom ok:** `bmf1_a1`, `a2`, `a3`, `a4`, `a5`, `a6`, `a7`, `a13`. |
| **bmf1** | **Reescrita estilo “semio”** (negrito excessivo): `bmf1_a8`–`a12`, `a14`, `a15` — **feito neste handoff** quando o todo “execute-bmf-rewrite” estiver concluído. |
| **bmf1** | **Substituir template genérico:** `bmf1_a16` … `a22` — **feito neste handoff** quando o todo estiver concluído. |
| **pmh**, **sus**, etc. | Priorizar conforme pedido; mesmo [`gerar_materiais_apoio.md`](gerar_materiais_apoio.md). |
| **pe1** | Confirmar se continua fora do escopo de materiais. |

Ordem sugerida para fechar BMF1: **a8–a15** → **a16–a22** → espelhar cada `.md` em `data/materiais/bmf1/` e validar linhas + encoding.

---

## Prompt para colar noutro chat (sem contexto)

Copie o bloco abaixo **inteiro** para o novo chat (anexar o repositório ou o caminho `meduni9-app`).

```markdown
Tu és a IA que continua o projeto MedGradPlus (meduni9-app). Trabalha em **1 aula por vez**, manualmente, sem scripts de escrita em lote.

## Obrigatório ler antes
1. [AGENTS.md](AGENTS.md) na raiz do repo.
2. [prompts/gerar_materiais_apoio.md](prompts/gerar_materiais_apoio.md) — regras invioláveis, estrutura da aula, **>100 linhas**, fluxos em tabela/lista (Mermaid só curto e com redundância), **figuras**, **fontes bibliográficas**, checklist.
3. [materiais/GUIA_CRIACAO.md](materiais/GUIA_CRIACAO.md) — caminhos `materiais/modulo1/<disciplina>/<aula>.md` e espelho `data/materiais/<disciplina>/`.
4. [prompts/handoff_modulo1_materiais.md](prompts/handoff_modulo1_materiais.md) — estilo aprovado e inventário.

## Estilo de referência (imitar estes ficheiros)
- Semiologia: [materiais/modulo1/semiologia1/semio1_a3.md](materiais/modulo1/semiologia1/semio1_a3.md) (e restantes semio1_a*.md já no repo).
- BMF “bom”: [materiais/modulo1/bmf1/bmf1_a1.md](materiais/modulo1/bmf1/bmf1_a1.md), [bmf1_a6.md](materiais/modulo1/bmf1/bmf1_a6.md), [bmf1_a7.md](materiais/modulo1/bmf1/bmf1_a7.md), [bmf1_a13.md](materiais/modulo1/bmf1/bmf1_a13.md).
- Parágrafos naturais; **negrito só em conceitos-chave** — NÃO repetir o erro de negritar quase cada palavra (ex.: primeiras linhas de bmf1_a8–a12, a14–a15 no estado antigo).
- Tabelas úteis onde comparar; evitar tabelas só decorativas.

## Figuras e Wikimedia Commons
- Cada `### Figura sugerida` deve incluir **`**Figura-ID:** \`SIGLA-AULA-F01\``** igual ao `id` em [data/materiais_figuras.json](data/materiais_figuras.json).
- Preencher no JSON (e no painel local [figuras-materiais/](figuras-materiais/)): `descricaoVisual`, `tipoSugerido`, `buscaCommonsEn`, `buscaCommonsPt`, `legenda`; **priorizar sempre** [Wikimedia Commons](https://commons.wikimedia.org/) para URLs e descrições de busca (licenças livres, atribuição clara).
- Espelhar conteúdo idêntico em `materiais/modulo1/...` e `data/materiais/...`; UTF-8 **sem BOM** (ver comando PowerShell no prompt canônico).
- Ver [figuras-materiais/README.md](figuras-materiais/README.md) e [figuras-materiais/SCHEMA.md](figuras-materiais/SCHEMA.md).

## Trabalho priorizado (BMF1)
- Reescrever no estilo acima: **bmf1_a8, a9, a10, a11, a12, a14, a15** (substituir negrito excessivo por texto fluido + densidade real).
- Substituir por completo o template genérico: **bmf1_a16 … a22**.
- Semiologia 1: tratar como referência; só revisar se pedido explícito.
- **PE1:** confirmar com o utilizador se continua fora do escopo de materiais.

## Ao terminar cada aula
- Validar checklist do [prompts/gerar_materiais_apoio.md](prompts/gerar_materiais_apoio.md); reportar **número de linhas**; garantir espelho nos dois caminhos; não inventar diretrizes clínicas.
```
