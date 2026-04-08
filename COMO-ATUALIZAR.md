# Como atualizar o MedGradPlus

Guia para manter e atualizar o MedGradPlus. Leia também [`AGENTS.md`](AGENTS.md) na raiz do repositório.

---

## 1. ESTRUTURA DO PROJETO

Antes de começar, entenda o que cada arquivo faz:

### index.html
O arquivo principal do app. Contém a interface visual e toda a lógica do frontend. Você só precisa mexer aqui se quiser mudar o design ou adicionar novas funcionalidades (como filtros, nova tela, etc).

**Materiais em Markdown e `material_overrides` (Firestore):** o texto das aulas vem dos ficheiros `.md` em `data/materiais/<materia>/` e `materiais/moduloN/<materia>/` (dupla versionada no Git). A conta admin (mesmo critério que `isAdmin()` em [`firestore.rules`](firestore.rules): email na lista e verificado) pode, no app autenticado com a aba **Materiais** e uma aula aberta, gravar uma **sobreposição** na coleção Firestore `material_overrides`, com ID `{materiaId}__{temaId}`. Esse texto **prevalece** sobre o `.md` servido pelo Hosting até **Repor ficheiro do site** no painel de edição (apaga o documento de override). Para tornar a alteração **canónica no repositório**, copie o Markdown de volta para os dois caminhos `.md` correspondentes e faça commit/deploy como de costume. Ao alterar regras desta coleção, faça deploy com `firebase deploy --only firestore:rules` no projeto **medgradplus** (ver [`FIREBASE_E_GIT.md`](FIREBASE_E_GIT.md)).

- **Checagem automática da estrutura canónica** (`## Pré-Prova` único por fim, `### Síntese para a prova`, `### Figura sugerida`, sem `### O que você PRECISA saber`): `npm run validate:materiais` (falha só em ficheiros existentes; aulas ativas sem `.md` geram aviso, a menos que defina `VALIDATE_MATERIAIS_FAIL_ON_MISSING=1`). Scripts de manutenção em lote: `scripts/fix_precisa_to_sintese.mjs`, `scripts/fix_h2_after_preprova.mjs`, `scripts/fix_tcar_duplicate_preprova.mjs`, `scripts/add_figura_if_missing.mjs`, `scripts/sync_st_folder_from_saude_trabalhador.mjs`.

### admin.html
Painel administrativo para gerenciar o app. Aqui você pode adicionar flashcards, questões e códigos de ativação sem mexer no código. Use este arquivo para operações de rotina.

### manifest.json
Configuração da PWA (Progressive Web App). Define o nome do app, ícones, cores e comportamento quando instalado no celular. Geralmente não precisa mexer.

### sw.js
Service Worker que permite o app funcionar offline. Gerencia cache de arquivos. Não mexer a menos que queira melhorar a funcionalidade offline.

### firebase.json
Configuração para deploy no Firebase Hosting. Define pastas públicas e regras. Deixe como está, você não precisa mexer.

### data/materias.json
Lista de todas as matérias, semestres e blocos do curso. Exemplo:
```json
{
  "materias": [
    {
      "id": "farmacologia_bloco1",
      "nome": "Farmacologia",
      "semestre": 1,
      "bloco": 1,
      "descricao": "Introdução à Farmacologia Geral"
    }
  ]
}
```

### data/flashcards.json
Seus flashcards de estudo. O modelo editorial atual (**cloze v3**) está descrito no prompt canônico [`prompts/gerar_questoes_flashcards.md`](prompts/gerar_questoes_flashcards.md): **30 cards por aula** (`tema` = `aula_id`), **25** com `origem: "material"` e **5** com `origem: "extra"`, campo **`categoria`** (filtro no app), e formato cloze em `frente` (`{{c1::...}}`) + `verso` apenas com o preenchimento da lacuna. `explicacao` segue curta para rodapé discreto. O app mantém fallback para cards legados (`pergunta`/`resposta`).

- **Backup:** antes de um “wipe” ou regeneração em massa, mantenha uma cópia (ex.: `data/flashcards.json.bak`). Após substituir o JSON por um deck novo, chaves antigas do **SM-2** podem ficar órfãs no `localStorage` (`meduni9_sr_data`); isso é inofensivo e pode ser ignorado ou limpo manualmente se quiser.

- **Geração por lote:** trabalhe **aula a aula** (ou blocos pequenos), valide o checklist do prompt (30 itens, proporção material/extra, categorias, anti-repetição) e faça uma passagem de QA para não duplicar cards semanticamente próximos.
- **Validação cloze por disciplina:** `node scripts/validate_flashcards_cloze.cjs <materia_id>`
- **Piloto DS pronto:** para referência de regeneração em cloze, existe `scripts/regenerate_ds_cloze.cjs`.

### data/questoes.json
Questões de simulado extraídas de provas antigas. Contém enunciado, alternativas, resposta correta e explicação. Você vai atualizar bastante aqui.

### data/codigos.json
Códigos de ativação para alunos novos. Cada código tem um ID único e status de uso.

### data/anatomia_atlas.json
Catálogo da aba **Anatomia → Atlas interativo**: sistemas (como no Asclépio), divisões anatômicas e lâminas com URL de imagem e, opcionalmente, **pinos** (`x`/`y` em percentagem 0–100 sobre a imagem).

- **`fonte`: `"asclepio"`** — use `urlImagem` do atlas UFU; preencha `credito` e mantenha o link em `referenciaAsclepio` no topo do JSON.
- **`fonte`: `"commons"`** — prefira [Wikimedia Commons](https://commons.wikimedia.org/): `urlImagem` direto (`upload.wikimedia.org`), `urlPaginaFonte` para a página do ficheiro, `licenca` e `credito`.
- Divisões com `laminas: []` aparecem como **Em breve** no app até você adicionar entradas.

### data/anatomia_revisao.json
Revisão escrita (**Anatomia → Revisão rápida**): `version`, `updatedAt`, `sistemas[]` com `id`, `name`, `color`, `icone` (chave: `locomotor`, `muscular`, `cardiovascular`, …) e `subsections[]`. Cada subseção tem `title`, opcional `regiao` (metadado; pode ser `cabeca`, `torax`, `abdome`, `membro_superior`, etc., ou `null`) e `blocks[]`: `cards` (`items: [{ q, a }]`), `sequence` (`steps: [{ label, detail? }]`) ou `hub` (`center`, `branches: [{ label, hint? }]`). Na interface, todo o conteúdo listado no JSON fica disponível (sem filtro por região); a busca filtra por texto. Legado: subseção só com `items` vira um bloco `cards` automático.

### data/histologia_revisao.json
Revisão em texto (**Histologia → Revisão rápida**): mesmo modelo que `anatomia_revisao.json` (`sistemas`, `subsections`, `blocks`). Ícones usam chaves do atlas (`bone`, `joint`, `heart`, …). Na interface, todo o conteúdo do JSON fica disponível; a busca filtra por texto. Opcional `regiao` permanece como metadado. Não há campo `livrosBase` no JSON gerado.

### data/histologia_atlas.json
Atlas de lâminas (**Histologia → Atlas de lâminas**): `sistemas[]` com `divisoes[]` (tecido/órgão) e `laminas[]` (`titulo`, `urlImagem`, `descricaoNecessaria`, `pinos`).

- Migração canônica do acervo legado local (`Meus Sites/Atlas Hisotlogia/.../images/laminas`) para o app:
  - `python scripts/migrate_histologia_atlas_from_legacy.py`
- Destino das imagens canônicas: `data/histologia/atlas/`
- Metadados híbridos por lâmina:
  - `aliasLegado` (nome original da imagem)
  - `categoriaLegada` (ex.: `10_digestorio`)
  - `urlImagemZoom` (quando existir versão ampliada)
  - `urlImagemCompleta` — fotografia **com** legenda embutida (geralmente o mesmo ficheiro que era usado como principal antes dos recortes)
  - `urlImagemRecorte` — opcional; JPG só com a área da lâmina (sem a faixa de legenda). Quando existe, `urlImagem` aponta para o recorte (vista compacta) e, no app, **Toque para ampliar** abre a vista completa com legenda em texto
  - `auditoriaLegenda` — opcional; copiado de `data/histologia_atlas_legenda_audit.json` no rebuild (`estado`, `nota`, referência à página legada)
  - `classificacaoRelevancia` (`alta`, `media`, `baixa`)
- Relatórios de migração:
  - `data/histologia_atlas_migracao_relatorio.json`
  - `docs/histologia-atlas-migracao.md`

**Legendas e QA (rebuild a partir do HTML UFG):** `python scripts/rebuild_histologia_atlas_structure.py` — regera `histologia_atlas.json` e `data/histologia_legendas_qc_relatorio.json` (inclui contagem por estado de auditoria e lâminas com recorte).

**Inventário para revisão humana (uma lâmina por vez):** `python scripts/histologia_legenda_inventory.py` — atualiza `data/histologia_atlas_legenda_audit.json` e exporta `data/histologia_atlas_legenda_audit.csv`. Ao voltar a correr, preserva `estado` e `nota` já preenchidos por id. Valores típicos de `estado`: `pendente`, `ok`, `corrigido_manual`, `duvida`.

**Recortes (Pillow):** `pip install pillow` se necessário. Configuração: `data/histologia_atlas_crop_config.json` (`defaultRel` em frações 0–1, overrides por categoria ou por id, `gerarSemAuditoriaOk` para gerar sem marcar `ok` na auditoria). Geração: `python scripts/generate_histologia_atlas_recortes.py` (por defeito só lâminas com `estado: ok` no audit); `python scripts/generate_histologia_atlas_recortes.py --todas` ignora a auditoria; `--max N` limita o lote. Saída: `data/histologia/atlas/<categoria>/recorte/*_recorte.jpg`. Depois volte a correr o **rebuild** para ligar `urlImagem` / `urlImagemRecorte`.

**Peso no Git e deploy:** cada recorte duplica ~efeitos de armazenamento; para lotes grandes avalie `.gitignore` local dos `recorte/` até validar qualidade, ou Git LFS, ou gerar recortes só na máquina de deploy.

`referenciaAsclepio` no JSON reutiliza o nome do campo; conteúdo pode apontar para OpenStax/OER. Para regenerar apenas estrutura base sem imagens: `node scripts/generate_histologia_content.js`.

Planeamento extra: [`docs/histologia-revisao-roadmap.md`](docs/histologia-revisao-roadmap.md).

### data/to_instrumentais.json
Instrumentais de **Técnica Operatória** na aba **Materiais** (**TO Estudos**): guia com função, características, posição sugerida na mesa, mnemônico e bloco “não confunda com”, além de **quiz** com resposta digitada e correção **caractere a caractere** (verde/vermelho; comparação após normalizar: `trim`, espaços múltiplos → um espaço, minúsculas). Estrutura sugerida:

- `version`, `updatedAt`, opcional `titulo`, `nota`
- `instrumentos[]`: `id`, `nome`, `imagem` (URL ou caminho relativo ao site, ex.: `/data/instrumentais/mesa_p005_img01_xr123.png`, ou `""` para placeholder), `categoria`, `funcao`, `caracteristicas`, `mesaPosicao`, `mnemonico`, `dicaQuiz` (pode usar `**negrito**` no texto), `confundeCom`: `null` ou `{ "id", "nome" }`.

O bloco de entrada aparece para quem tem acesso ao **módulo 6** e com a disciplina `tecnica_operatoria` ativa no catálogo; também há atalhos na ficha da disciplina TO na lista de materiais.

**Catálogo PDF (34 instrumentos, brochura págs. 2–11):** lista fixa com variantes **curva/reta** onde o PDF separa (Kelly, Crille, Halsted, Rochester, Kocher, Foerster, Mayo; cabos nº 3 e nº 4; Adson com/sem dente; Metzenbaum; Hegar/Mathieu; Gosset/Doyen, etc.). Para regenerar `to_instrumentais.json` e `to_instrumentais_figuras_map.json` a partir da ordem em [`data/instrumentais/catalogo_visual_instrucoes.md`](data/instrumentais/catalogo_visual_instrucoes.md) (e paths `mesa_*` coerentes com a última extração): `python scripts/build_to_instrumentais_catalogo_pdf.py`. Depois de reextrair figuras (`extract_instrumentais_pdf.py`), **atualize** os paths em `ROWS` nesse script se `imgNN` ou `xr` mudarem.

**Extrair figuras de PDF (material cirúrgico):** com o PDF em `conteudos/` (ex.: `3- Material cirúrgico e montagem da mesa*.pdf`), rode `python scripts/extract_instrumentais_pdf.py --text`. Por defeito cada figura sai como **PNG** só com **composito** da transparência sobre branco (`pillow`), **sem** repintar pixels escuros por limiar. O `extract_manifest.json` inclui **`rectPdf`**, **`captionGuess`** / **`captionNorm`** e **`imageSeqOnPage`** (ordem visual por página) para o `map_to_instrumentais_images.py`. Para bytes crus do PDF: `--no-white-bg`. As imagens vão para `data/instrumentais/`; os `.txt` são o texto bruto por página. **Nota:** reextrair pode mudar nomes (`imgNN` conforme posição na página); apague `mesa_p*.png` antigos se quiser pasta limpa; volte a correr o mapeamento ou atualize `imagem` em `to_instrumentais.json`.

**Mapear figuras → `imagem` em lote:** após a extração, use `data/instrumentais/keyword_map.json` (termos por `id`) e:

1. `python scripts/map_to_instrumentais_images.py` — gera ou sobrescreve `data/instrumentais/to_instrumentais_figuras_map.json` (scores por página, ordem de leitura das figuras, área mínima configurável com `--min-area`; órfãos sem texto no PDF podem ser preenchidos com `--fallback-min-area`, revisar ou apagar no mapa).
2. Revisão humana do mapa usando o guia visual em [`data/instrumentais/catalogo_visual_instrucoes.md`](data/instrumentais/catalogo_visual_instrucoes.md) (ordem das figuras por página; na p. 11: Finochietto → Farabeuf → Gosset → Doyen, com ids `afastador_finochietto`, `afastador_farabeuf`, `afastador_gosset`, `afastador_doyen`).
3. `python scripts/map_to_instrumentais_images.py --apply-only --pdf-nota "…"` — aplica só o mapa já editado a `data/to_instrumentais.json` (atualiza `imagem`, limpa `imagem` onde o mapa está vazio, e `nota` por instrumental); use isto após a revisão para não sobrescrever o mapa manualmente ajustado.

**Ajustar figuras:** não há ferramenta de recategorização no browser. Edite `imagem` em `data/to_instrumentais.json`, ou volte a gerar com `build_to_instrumentais_catalogo_pdf.py` / `map_to_instrumentais_images.py` conforme acima.

---

## 2. COMO ADICIONAR FLASHCARDS

### Novo padrão recomendado (cloze)

Cada card deve ter:
- `frente` com **uma lacuna** no formato `{{c1::resposta}}`
- `verso` com **somente a resposta da lacuna**
- `explicacao` curta (rodapé opaco no app)

Exemplo:

```json
{
  "materia": "mad2",
  "tema": "mad2_a10",
  "frente": "A latência do HSV ocorre principalmente no {{c1::gânglio sensitivo}}.",
  "verso": "gânglio sensitivo",
  "explicacao": "No HSV, a persistência neuronal explica reativações recorrentes.",
  "dificuldade": 2,
  "categoria": "mecanismo",
  "origem": "material",
  "tags": ["hsv", "latencia"]
}
```

### Manualmente via admin.html:
1. Abra `admin.html` no navegador
2. Vá para aba "Adicionar Flashcards"
3. Preencha:
   - **Pergunta**: A questão do flashcard
   - **Resposta**: A resposta correta
   - **Matéria**: Selecione de materias.json
   - **Dificuldade**: Fácil, Média ou Difícil
4. Clique em "Salvar"
5. O flashcard é adicionado ao `data/flashcards.json`

### Manualmente editando JSON:
Abra `data/flashcards.json` e adicione:

```json
{
  "flashcards": [
    {
      "id": "flsh_farm_001",
      "pergunta": "Qual é o mecanismo de ação da aspirina?",
      "resposta": "Inibição irreversível da ciclooxigenase (COX), reduzindo a síntese de prostaglandinas e tromboxanos.",
      "materia": "farmacologia_bloco1",
      "dificuldade": "media",
      "dataCriacao": "2026-03-29"
    },
    {
      "id": "flsh_farm_002",
      "pergunta": "Cite 3 efeitos adversos dos AINE.",
      "resposta": "1) Lesão GI (úlceras, gastrite); 2) Nefrotoxicidade; 3) Hipersensibilidade",
      "materia": "farmacologia_bloco1",
      "dificuldade": "dificil",
      "dataCriacao": "2026-03-29"
    }
  ]
}
```

### Usando Claude Code:
Prompt exemplo:
```
Adicione 15 flashcards de Farmacologia sobre analgésicos e anti-inflamatórios
baseados nesta prova: [cole o texto da prova aqui]

Mantenha as respostas concisas e use a dificuldade apropriada.
```

---

## 3. COMO ADICIONAR QUESTÕES

### Manualmente via admin.html:
1. Abra `admin.html`
2. Vá para aba "Adicionar Questões"
3. Preencha:
   - **Enunciado**: O texto completo da questão
   - **Alternativas**: A, B, C, D, E
   - **Resposta Correta**: A alternativa certa
   - **Explicação**: Por que esta resposta está correta
   - **Matéria**: Selecione de materias.json
   - **Semestre**: Em qual semestre foi cobrado
4. Clique em "Salvar"

### Manualmente editando JSON:
Abra `data/questoes.json` e adicione:

```json
{
  "questoes": [
    {
      "id": "quest_farm_001",
      "enunciado": "Um paciente chega ao PS com infarto agudo do miocárdio. Qual medicamento deve ser administrado imediatamente?",
      "alternativas": {
        "a": "Atorvastatina 80mg",
        "b": "Ácido acetilsalicílico 500mg + Clopidogrel 600mg",
        "c": "Metoprolol 100mg",
        "d": "Furosemida 40mg",
        "e": "Doxiciclina 100mg"
      },
      "respostaCorreta": "b",
      "explicacao": "No infarto agudo do miocárdio, é fundamental iniciar dupla antiagregação (AAS + Clopidogrel) o mais rapidamente possível para prevenir trombose e melhoria do fluxo coronariano.",
      "materia": "cardiologia_bloco3",
      "semestre": 3,
      "fonte": "ENAM 2024",
      "dificuldade": "dificil",
      "dataCriacao": "2026-03-29"
    }
  ]
}
```

### Importante: Reformule as questões!
**NUNCA copie questões palavra por palavra das provas originais**. Sempre reformule com palavras diferentes, mantenha o conceito e a resposta, mas mude a estrutura.

---

## 4. COMO ADICIONAR CÓDIGOS DE ATIVAÇÃO

### Gerar códigos:
Você pode usar Claude para gerar códigos. Prompt:
```
Gere 30 códigos de ativação únicos para MedGradPlus.
Cada código deve ter 8 caracteres (letras maiúsculas e números).
Retorne em formato JSON pronto para adicionar ao data/codigos.json
```

### Adicionar manualmente via admin.html:
1. Abra `admin.html`
2. Vá para aba "Códigos de Ativação"
3. Gere códigos ou Cole códigos gerados
4. Clique em "Salvar"

### Formato JSON:
```json
{
  "codigos": [
    {
      "codigo": "UNIMED9K",
      "ativo": true,
      "dataGeracao": "2026-03-29",
      "dataUso": null,
      "usuarioId": null,
      "limite": 1
    },
    {
      "codigo": "MEDGRADPLUSX",
      "ativo": true,
      "dataGeracao": "2026-03-29",
      "dataUso": null,
      "usuarioId": null,
      "limite": 1
    }
  ]
}
```

**Importante**: Cada código é usado apenas uma vez. Depois que um aluno ativa com um código, o campo `dataUso` é preenchido e `usuarioId` recebe o ID do aluno.

---

## 5. COMO FAZER DEPLOY NO FIREBASE

### Primeira vez (Setup inicial):

#### Passo 1: Instale Firebase Tools
```bash
npm install -g firebase-tools
```

#### Passo 2: Faça login
```bash
firebase login
```
Isso vai abrir navegador para você logar com sua conta Google.

#### Passo 3: Inicialize o projeto
```bash
cd /seu/caminho/para/meduni9-app
firebase init
```

Durante a inicialização:
- Selecione "Hosting"
- Escolha o projeto "meduni9"
- Public directory: `.` (ponto, a raiz)
- Configure as rewrites para SPA (y/n): `Y`
- Sobrescrever index.html: `N`

#### Passo 4: Primeiro deploy
```bash
firebase deploy
```

### Depois (Deploy rápido):

Toda vez que fizer mudanças:

```bash
firebase deploy
```

Pronto! Seu app está atualizado em produção.

### Ver logs e status:
```bash
firebase hosting:channel:list
firebase open hosting:site
```

---

## 6. COMO USAR COM CLAUDE CODE

Claude Code é uma forma rápida de fazer atualizações sem ter que mexer manualmente em tudo.

### Instalar Claude Code:
```bash
npm install -g @anthropic-ai/claude-code
```

### Usar no seu projeto:

```bash
cd /seu/caminho/para/meduni9-app
claude code
```

### Exemplos de prompts úteis:

**Adicionar flashcards de uma prova:**
```
Adicione 20 flashcards de Farmacologia baseados nesta prova:

[Cole aqui o texto de uma prova sobre Farmacologia]

Mantenha respostas concisas, use dificuldade apropriada (facil/media/dificil),
e reformule as questões com palavras diferentes.
Adicione ao data/flashcards.json
```

**Gerar códigos de ativação:**
```
Gere 30 códigos de ativação únicos para MedGradPlus.
Cada código deve ter 8 caracteres (letras maiúsculas e números, sem repetição).
Adicione ao data/codigos.json com o formato correto.
```

**Atualizar interface:**
```
Atualize o index.html para adicionar um filtro por dificuldade (Fácil, Média, Difícil)
na seção de flashcards. Os cards devem filtrar quando o usuário seleciona uma dificuldade.
```

**Adicionar questões de simulado:**
```
Extraia as questões abaixo e adicione ao data/questoes.json:

[Cole as questões aqui]

Importante:
- Reformule cada questão com palavras diferentes
- Mantenha a resposta correta e o conceito
- Adicione uma explicação clara do porquê da resposta
```

---

## 7. COMO EXTRAIR QUESTÕES DE PROVAS

### Passo a passo:

#### 1. Abra a prova PDF
Abra a prova da qual quer extrair questões.

#### 2. Copie ou descreva as questões
Copie o texto das questões ou descreva-as:
```
Questão 1:
Um paciente com febre, tosse e dispneia é internado...
a) Penicilina
b) Ceftriaxona
...

Questão 2:
...
```

#### 3. Use Claude para reformular
Abra Claude Code e use um prompt como:

```
Extraia estas questões de prova e reformule-as para o MedGradPlus:

[Cole as questões aqui]

Para cada questão:
1. Reformule o enunciado com palavras diferentes (mantenha o conceito)
2. Mantenha as 5 alternativas
3. Indique qual é a correta
4. Explique por que é a resposta correta
5. Retorne em formato JSON para data/questoes.json

Importante: NUNCA copie o enunciado original. Sempre reformule!
```

#### 4. Revise e adicione
Claude vai gerar o JSON. Revise para garantir que:
- As respostas estão corretas
- As explicações fazem sentido
- As questões foram reformuladas
- O JSON está válido

#### 5. Adicione ao arquivo
Cole o JSON no final de `data/questoes.json` (dentro do array "questoes").

---

## 8. FLUXO DE ATUALIZAÇÃO RÁPIDA

A maioria das atualizações segue este fluxo simples:

### Para adicionar CONTEÚDO (flashcards, questões, códigos):
```
1. Edite o arquivo JSON em data/
2. Rode: firebase deploy
3. Pronto! Conteúdo está atualizado em produção
```

Você **não precisa** mexer em HTML, CSS ou JavaScript para adicionar conteúdo!

### Escala com qualidade (1 disciplina por vez + paralelismo controlado)

1. Atualize o prompt canônico.
2. Rode piloto em 1 disciplina e valide no app.
3. Para escala, processe disciplinas em paralelo (2-3 por vez), mas **sempre** valide cada disciplina antes de avançar.
4. Em cada disciplina:
   - gerar aula a aula;
   - validar com `node scripts/validate_flashcards_cloze.cjs <materia_id>`;
   - corrigir falhas e só então consolidar.
5. Em caso de falha, bloquear avanço daquela disciplina até passar 100% no checklist.

### Para mudar FUNCIONALIDADE (nova tela, novo filtro, novo design):
```
1. Use Claude Code para atualizar index.html ou criar novo arquivo
2. Teste localmente: abra index.html no navegador
3. Rode: firebase deploy
4. Pronto!
```

---

## 9. DICAS IMPORTANTES

### 1. NUNCA copie questões literalmente
Se você copiar questões palavra por palavra das provas, está violando direitos autorais. Sempre reformule com palavras diferentes, mantendo apenas o conceito e a resposta.

**Exemplo errado:**
```
Original: "Um paciente com infarto agudo do miocárdio apresenta dor no peito..."
Sua versão: "Um paciente com infarto agudo do miocárdio apresenta dor no peito..."  ❌
```

**Exemplo certo:**
```
Original: "Um paciente com infarto agudo do miocárdio apresenta dor no peito..."
Sua versão: "Paciente chega ao PS relatando dor torácica súbita com eletrocardiograma mostrando..." ✅
```

### 2. Mantenha backup do data/ folder
A pasta `data/` contém todo seu conteúdo. Faça backup regularmente:

```bash
cp -r data/ data_backup_$(date +%Y%m%d)/
```

### 3. Teste localmente antes de deploy
Antes de fazer deploy no Firebase, teste localmente:

```bash
# Abra o arquivo no navegador
# Windows:
start index.html

# Mac:
open index.html

# Linux:
xdg-open index.html
```

Testar localmente não afeta os alunos e você não perde acesso se algo der errado.

### 4. JSON válido é essencial
Se você adicionar flashcards ou questões manualmente, certifique-se de que o JSON é válido:
- Use vírgulas entre objetos no array
- Use aspas duplas em chaves e valores
- Não deixe vírgula no último item

Use um validador: https://jsonlint.com/

### 5. Organize seus IDs
Use IDs consistentes:
- Flashcards: `flsh_materia_numero` (ex: `flsh_farm_001`)
- Questões: `quest_materia_numero` (ex: `quest_cardio_042`)
- Códigos: Apenas os 8 caracteres

### 6. Faça commits no Git (se estiver usando)
Se está versionando com Git:

```bash
git add data/
git commit -m "Adicionado 20 flashcards de Farmacologia"
git push
```

### 7. Monitore uso de códigos
De vez em quando, verifique quais códigos foram usados:

```bash
# Abra data/codigos.json e veja quais têm "dataUso" preenchido
# Esses já foram usados e não podem ser usados novamente
```

---

## RESUMO RÁPIDO

| Ação | Como fazer |
|------|-----------|
| Adicionar flashcard | Editar `data/flashcards.json` + `firebase deploy` |
| Adicionar questão | Editar `data/questoes.json` + `firebase deploy` |
| Gerar códigos | Usar Claude Code ou editar `data/codigos.json` + deploy |
| Mudança visual | Editar `index.html` + `firebase deploy` |
| Deploy | `firebase deploy` |
| Testar | Abrir `index.html` no navegador |
| Backup | `cp -r data/ data_backup/` |

---

## PRÓXIMOS PASSOS

1. **Hoje**: Configure Firebase seguindo a seção 5
2. **Amanhã**: Adicione seus primeiros flashcards
3. **Esta semana**: Extraia questões de uma prova e adicione
4. **Sempre**: Use Claude Code para atualizações rápidas

---

Dúvidas: releia a seção correspondente ou descreva o problema na ferramenta de IA que estiver usando.
