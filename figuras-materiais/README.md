# Infraestrutura de figuras dos materiais

Objetivo: você **só pesquisa no Wikimedia Commons**, cola o **URL da imagem** e metadados no cadastro; o app lê o JSON no deploy e mostra as figuras na aba Materiais.

## Revisão de expectativas (checklist)

| Expectativa | Como foi atendida |
|-------------|-------------------|
| Briefing longo **não** aparece para o aluno | No `index.html`, `renderMd` remove blocos `### Figura sugerida` e troca por um aviso curto **“Em breve: imagem neste ponto.”** com emoji (não mostra Momento/O que mostrar/Notas do `.md`). |
| Dados para buscar imagem depois **ficam salvos** | Tudo que a equipe precisa (busca EN/PT, descrição, tipo, momento, notas) está em **`data/materiais_figuras.json`** e pode ser editado no painel em **Briefing equipe**. O `.md` no Git continua com o bloco completo para quem edita no Cursor. |
| Placeholder visível | Caixa tracejada com **🖼️** + texto “Em breve…” no fluxo do texto da aula. |
| Imagens no fluxo do texto | Com **`**Figura-ID:**`** igual ao `id` no JSON, a imagem aparece **no ponto do .md** (não no rodapé). |
| Rodapé opcional | Só figuras com URL **e** sem `Figura-ID` no texto aparecem em **Figuras desta aula** no fim. |
| Aviso azul no fim | Sempre **linguagem para o aluno** (mais ilustrações em breve, etc.) — nunca termos internos (Figura-ID, JSON, Commons). |
| Painel local | `node server.js` → `http://localhost:3001/figuras-materiais/` com GET/PUT em `materiais_figuras`. |
| Teste com link real | **BMF1-A5-F01** + `Figura-ID` no `bmf1_a5.md` → [Osteon_cross_section.png](https://commons.wikimedia.org/wiki/File:Osteon_cross_section.png) (CC BY 3.0). |
| Commons como referência | Descrições e buscas pensadas para [Wikimedia Commons](https://commons.wikimedia.org/); script em lote descrito em `scripts/README_figuras_commons_batch.md`. |

Detalhes dos campos: **`SCHEMA.md`** nesta pasta.

## Fonte de verdade

| O quê | Onde |
|-------|------|
| Dados (IDs, aulas, URLs, licença, crédito) | `data/materiais_figuras.json` |
| Painel de edição (local) | `figuras-materiais/index.html` |
| Leitura no PWA | `GET /data/materiais_figuras.json` (Firebase Hosting) |
| API de escrita (só com servidor Node) | `PUT /api/data/materiais_figuras` |

O inventário em Markdown (`figuras-commons/inventario.md`) é **apoio humano**; o JSON é o que o app usa.

**Módulo 1 (IDs e pastas):** ver também [`inventario_modulo1.md`](inventario_modulo1.md).

**Módulo 2 (IDs e pastas):** ver também [`inventario_modulo2.md`](inventario_modulo2.md).

**Módulo 3 (IDs e pastas):** ver também [`inventario_modulo3.md`](inventario_modulo3.md).

**Módulo 4 (IDs e pastas):** ver também [`inventario_modulo4.md`](inventario_modulo4.md).

## 1. Editar links (fluxo recomendado)

1. Na raiz do projeto, suba o servidor admin:
   ```bash
   node server.js
   ```
2. Abra no navegador: **http://localhost:3001/figuras-materiais/**
3. Ou pelo painel admin: **Admin → “Figuras (materiais)”** (abre em nova aba).
4. Para cada linha:
   - Use **Copiar busca EN** (ou PT) e pesquise no [Wikimedia Commons](https://commons.wikimedia.org/).
   - Abra o ficheiro → **Use this file** / URL direto (normalmente `https://upload.wikimedia.org/...`).
   - Cole em **URL da imagem**. Preencha **Página Commons**, **Licença**, **Crédito** (autor) e **Legenda**.
   - Ajuste **Status** (`encontrada` → `inserida` após deploy, se quiser controle manual).
5. Clique **Salvar alterações** (grava `data/materiais_figuras.json`).

**Produção:** o painel **não** salva no Firebase sem backend; por isso o fluxo é sempre: editar local → commit → deploy.

## 2. Publicar no site

```bash
git add data/materiais_figuras.json index.html
# se alterou o painel: git add figuras-materiais/
firebase deploy --only hosting
```

O PWA passa a buscar `/data/materiais_figuras.json` e, para a aula aberta (`aula` = id do tema, ex. `bmf1_a5`), exibe todas as entradas com **URL da imagem** preenchida.

## 3. Esquema do JSON (resumo)

Cada item em `entries`:

- `id` — estável, ex. `BMF1-A5-F01`
- `aula` — deve coincidir com o ficheiro da aula (`bmf1_a5`), **sem** `.md`
- `urlImagem` — HTTPS direto para o ficheiro (imagem)
- `urlPaginaCommons` — página de descrição (atribuição)
- `licenca`, `credito`, `legenda`
- `status` — `pendente` | `encontrada` | `inserida` | `descartada`

Novas linhas podem ser criadas no painel (**+ Nova linha**) ou editando o JSON à mão (cuidado com vírgulas).

## 4. Comportamento no app

- Com **`**Figura-ID:** \`...\``** no `.md` (igual ao `id` no JSON): a imagem aparece **naquele ponto do texto** (inline), com legenda e link “Ver no Wikimedia Commons” quando houver `urlPaginaCommons`. **Não** duplica no rodapé.
- Sem `Figura-ID`: o briefing some e resta só o aviso **🖼️ Em breve: imagem neste ponto.**
- **Rodapé “Figuras desta aula”:** só entradas com `urlImagem` cujo `id` **não** está como `Figura-ID` no texto da aula (figuras extras ou legado).
- Aviso azul no fim: só mensagens **para o aluno** (mais ilustrações no futuro, publicação aos poucos, etc.), sem termos de equipe.

## 5. Script em lote (futuro)

Ver **`scripts/README_figuras_commons_batch.md`**: ideia para filtrar por `disciplina` / `aula` e enriquecer URLs a partir de termos pensados para o Commons.

## 6. Direitos de imagem

- Prefira licenças livres (CC BY-SA, domínio público).
- Registre **crédito** e **licença** como na página do Commons; o app exibe isso abaixo da imagem.

## 7. Troubleshooting

| Problema | O que fazer |
|----------|-------------|
| Painel não carrega dados | Confirme `node server.js` e URL `http://localhost:3001/figuras-materiais/` (não abrir o HTML via `file://`). |
| Salvar falha | Verifique permissões de escrita em `data/materiais_figuras.json`. |
| Imagem não aparece no app | Confira `aula` exatamente igual ao id no `materias.json`; confira URL HTTPS; alguns hotlinks podem bloquear — teste no navegador. |
| CORS | Imagens do Commons costumam permitir hotlink; se usar outro host, teste. |
