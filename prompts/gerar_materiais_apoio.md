# Prompt Canônico — Geração de Materiais de Apoio (MedGradPlus)

Documentação do repositório: [`AGENTS.md`](../AGENTS.md) na raiz (ordem de leitura para IAs).

## Objetivo

Gerar material de apoio acadêmico de alta qualidade para Medicina (Uninove), com linguagem clara, profundidade clínica, excelente escaneabilidade e consistência visual no app.

Este documento é o padrão canônico para criar e revisar materiais em `.md`.

---

## Regras invioláveis de operação

1. Gerar exatamente **1 aula por vez**.
2. Escrever conteúdo **manualmente**, com texto autoral e personalizado para a aula.
3. **Proibido** usar scripts para acelerar escrita em lote.
4. Cada aula deve ter **mais de 100 linhas**.
5. Ao finalizar cada aula, obrigatoriamente:
   - validar estrutura e qualidade;
   - validar integridade (acentuação, sem mojibake, sem placeholders **genéricos** tipo `TODO`, `[inserir]` ou lacunas vazias — **exceção:** blocos `### Figura sugerida` no formato canônico, para produção futura de imagens);
   - informar a **quantidade de linhas**;
   - só então seguir para a próxima aula.

---

## Regra de encoding (obrigatória)

Ao salvar arquivos `.md` de material, usar UTF-8 sem BOM via PowerShell:

```powershell
$utf8NoBom = New-Object System.Text.UTF8Encoding $false
[System.IO.File]::WriteAllText("data\materiais\<materia_id>\<aula_id>.md", $conteudo, $utf8NoBom)
[System.IO.File]::WriteAllText("materiais\modulo<N>\<materia_id>\<aula_id>.md", $conteudo, $utf8NoBom)
```

Proibido:
- `Out-File`
- `Set-Content`
- escrever sem acentuação para "evitar erro"

---

## Caminhos de salvamento (sempre em ambos)

- Fonte editável: `data/materiais/<materia_id>/<aula_id>.md`
- Caminho servido: `materiais/modulo<N>/<materia_id>/<aula_id>.md`

Os dois arquivos devem ter o mesmo conteúdo.

---

## Padrão editorial e UX (obrigatório)

### Qualidade de escrita

- Português completo, com acentuação correta.
- Tom didático, objetivo e clínico.
- Evitar texto genérico, repetitivo ou "templateado".
- Evitar blocos extensos: preferir parágrafos curtos e progressão lógica.
- Padrão de capitalização: usar maiúscula apenas no início de frase, em nomes próprios e em rótulos de tabelas/cabeçalhos; evitar Title Case no corpo do texto.

### Hierarquia visual no markdown

- `#` para título da aula.
- `##` para blocos principais.
- `###` para subtópicos.
- `**negrito**` para conceitos-chave.
- `>` para dica clínica, pegadinha e macete de prova.
- Tabelas quando realmente melhorarem comparação e memorização.
- `---` para separar grandes blocos.

### Fluxos, sequências e diagramas (padrão visual)

Objetivo: **sequências lógicas** (ex.: inflamação → reparo, via metabólica, peristaltismo) devem ser **rápidas de ler** em qualquer tela — inclusive **app** que pode não estilizar Mermaid de forma bonita ou pode exibir **código cru**.

**Ordem de preferência (do mais confiável ao mais dependente de renderizador):**

1. **Tabela de etapas** — colunas como `Etapa | O que ocorre | Detalhe / prova` ou `Fase | Evento | Marco`. Funciona em todo renderizador Markdown e imprime bem.
2. **Lista numerada encadeada** — parágrafos curtos; em cada item, **negrito** no conceito-chave; opcional usar seta `→` no texto quando a leitura fluir.
3. **Mermaid** — só quando o fluxo for **simples e sequencial**; **nunca** como única fonte da informação (sempre repetir a sequência em **tabela** ou lista **abaixo** do diagrama, por acessibilidade e se o Mermaid falhar).

**Se usar Mermaid, regras rígidas:**

- Preferir `flowchart TD` (vertical) a `LR` em telas estreitas; **no máximo 5–6 nós**.
- Rótulos **curtos** (2–4 palavras em português); **evitar** frases longas dentro de `[ ]`.
- **Não** usar `subgraph`, cores, `style` ou temas customizados — renderização inconsistente entre GitHub, app e PDF.
- **Evitar** fluxos “largos” que duplicam o que já está no parágrafo acima (ruído visual).

**O que evitar:** diagramas só decorativos; blocos Mermaid enormes; fluxos que competem com tabelas já claras no mesmo tópico.

### Figuras sugeridas (placeholders para o futuro)

Objetivo: reservar **espaço editorial** e **briefing** para quando houver tempo de produzir ou licenciar imagens no app — sem obrigar todo material a ter figura.

**Quantidade (critério de bom senso):**

- Alguns temas são **quase só texto/tabela** (ética, epidemiologia leve): **zero** figuras ou no máximo **uma** se houver um esquema que realmente ajude.
- Anatomia, histologia, semiologia física, interpretação de exame: **1 a 3** figuras bem escolhidas ao longo da aula — **poucas**, cada uma com função clara (não encher de decoração).
- Materiais muito visuais (ex.: ossos, músculos, pele): pode chegar a **mais**, desde que cada bloco descreva **uma** necessidade visual distinta.

**Onde colocar:** imediatamente **depois** do parágrafo ou seção que a figura ilustra melhor (o leitor lê o conceito e “enxerga” o reforço).

**Formato canônico (copiar e preencher):** usar `### Figura sugerida` para aparecer no Markdown e ser fácil de buscar no repositório (`Figura sugerida`).

```markdown
### Figura sugerida

**Figura-ID:** `SIGLA-AULA-F01`  ← obrigatório; deve ser o mesmo `id` em `data/materiais_figuras.json` para a imagem aparecer **neste ponto** do texto (sem repetir no rodapé do app).

- **Momento:** qual seção/trecho esta imagem acompanha (ex.: “após tabela de ossificação”).
- **O que mostrar:** descrição objetiva em 1–3 frases (o que deve aparecer na imagem).
- **Tipo sugerido:** um de — esquema didático | ilustração estilo atlas (Netter/Moore) | fotomicrografia | radiografia/TC/US exemplo | foto de propedêutica | outro.
- **Legenda (rascunho):** texto curto para a legenda final no app.
- **Notas (opcional):** referência de capítulo/atlas, ângulo, ou o que **evitar** (ex.: “sem marca d’água”; “versão simplificada para mobile”).
```

**Fonte das imagens (equipe):** priorizar sempre o [Wikimedia Commons](https://commons.wikimedia.org/) — conteúdo gratuito, reutilizável e com licença explícita; os campos `buscaCommonsEn` / `buscaCommonsPt` no JSON e as descrições do briefing devem ser pensados para pesquisa **lá** (evitar referências só a atlas comerciais fechados como única pista).

**Versão mínima** (quando uma figura basta com briefing curto):

```markdown
### Figura sugerida

**Figura-ID:** `SIGLA-AULA-F01`

Briefing: [1–2 frases: o quê + tipo sugerido]. Legenda rascunho: [frase].
```

**Regras:**

- Não substituir texto obrigatório da aula: o material deve ser **completo** sem as imagens.
- Não usar figuras para duplicar uma **tabela** que já é suficiente — prefira tabela para comparação e figura para **morphologia** ou **gesto clínico**.
- Manter o mesmo bloco nos dois caminhos espelhados (`materiais/` e `data/materiais/`).
- Registrar cada figura planejada em **`figuras-commons/inventario.md`** (ID, caminho da aula, momento, descrição, termos de busca EN/PT, status) para facilitar pesquisa futura no [Wikimedia Commons](https://commons.wikimedia.org/). Ver **`figuras-commons/README.md`**.
- **App (aluno):** o PWA **não** exibe o texto longo do bloco `### Figura sugerida` — com **Figura-ID** o slot recebe a imagem do JSON **no ponto do texto**; sem ID, só o aviso **“Em breve: imagem neste ponto”**. URLs e legendas ficam em **`data/materiais_figuras.json`** (painel `figuras-materiais/`). Ver **`figuras-materiais/README.md`**.
- **Automação futura:** um script poderá percorrer `materiais_figuras.json` (por `disciplina` / `aula`) e sugerir ou validar links do Commons em lote; manter IDs e termos de busca consistentes facilita isso.

### Direção de UX

- Material deve ser fácil de revisar rapidamente antes da prova.
- O leitor deve conseguir "varrer" seções e encontrar síntese em segundos.
- Cada seção precisa responder: o que é, por que importa, como cai, como diferenciar.

### Pré-Prova (regra editorial)

- **Não** é checklist telegráfico nem lista de tópicos soltos como substituto do texto da aula.
- A seção **Pré-Prova** deve entregar, em **prosa sintética** (parágrafos curtos), o que o aluno precisa **entender e levar para a prova** — definição mínima, por que cai e detalhe para acertar a questão típica.
- O título `### Síntese para a prova` concentra esse bloco; tabela de diferenciações e frase-âncora fecham o pacote.
- **App (split de texto):** no PWA, **todo o Markdown a partir de `## Pré-Prova`** entra no painel **Pré-Prova**. Portanto: (1) **`## Pré-Prova` deve ser a última seção de nível 2 (`##`) do arquivo** — o ficheiro termina na frase-âncora (`### Frase-âncora para não esquecer` + blockquote); (2) **não** colocar, depois da frase-âncora, secções de corpo da aula como `## Conceitos Essenciais`, `## Aplicação em Caso Clínico`, `## Ponte com a Clínica` ou `## Erros Comuns de Prova` — esse conteúdo fica **acima** de `## Pré-Prova` (por exemplo após `## Pontos-Chave para Prova`); (3) **não** duplicar `## Aplicação em Caso Clínico` nem segunda `## Ponte com a Clínica` com texto genérico repetido entre aulas — uma ponte no corpo basta quando fizer sentido.

### Mnemônicos e siglas de memorização (uso restrito)

Objetivo: reforçar **só** o que já é **amplamente ensinado** em graduação e em manuais de referência, sem virar “curso de piadas mnemônicas”.

**Incluir** quando **todas** forem verdadeiras:

1. O mnemônico **já existir** na tradição acadêmica (livros-texto, aulas, provas) — não inventar siglas novas.
2. For **realmente útil** para lembrar **lista fechada** de critérios (ex.: variáveis do **Child-Pugh**).
3. Estiver **explicitado o que cada letra significa** em português (tabela ou lista logo abaixo), para não gerar ambiguidade.

**Não incluir:** jogos de palavras forçados, siglas “bonitinhas” criadas pela IA, ou mnemônicos para coisas que são melhor compreendidas por **lógica clínica** do que por decoração.

**Exemplo válido:** **BEATA** para os **cinco parâmetros do Child-Pugh** — **B**ilirrubina, **E**ncefalopatia, **A**scite, **T**empo de protrombina (INR), **A**lbumina — expressão difundida em materiais de medicina em português.

**Se não houver mnemônico clássico aceito para o tema:** não preencher o vazio; o texto completo basta.

---

## Estrutura obrigatória de cada aula

```markdown
# [Título da Aula]

## Relevância Clínica e Acadêmica

[Texto contextualizando por que o tema importa para prova e prática]

## [Bloco Temático 1]

[Desenvolvimento]

> **Dica de Prova:** [macete objetivo]

> **Pegadinha:** [erro comum da banca/aluno]

## [Bloco Temático 2]

[Desenvolvimento]

<!-- Opcional: após um trecho que peça reforço visual, incluir `### Figura sugerida` (ver seção "Figuras sugeridas" neste documento). -->

### [Subtópico comparativo]

| Conceito | Ponto-chave | Como diferenciar |
|----------|-------------|------------------|
| ... | ... | ... |

## Ponte com a Clínica

[Aplicação em caso real/resumo clínico de integração]

---

## Pontos-Chave para Prova

- [Ponto 1]
- [Ponto 2]
- [Ponto 3]

---

## Pré-Prova

> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### Síntese para a prova

[Ir direto à prosa de revisão: 2 a 5 parágrafos curtos — não lista telegráfica; **não** usar parágrafo introdutório genérico de “metatexto”. Cada parágrafo integra o conceito central, como a banca costuma cobrar e o detalhe mínimo para não errar. Pode usar frases como “Na prova, lembre que…” quando fizer sentido.]

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Como diferenciar |
|------------|------------|-----------------|
| ... | ... | ... |

### Frase-âncora para não esquecer

> "[Frase memorável com mnemônico ou analogia]"
```

---

## Fontes concretas e checagem de conteúdo

Sempre usar base técnico-científica reconhecida e coerente com graduação médica:

- Anatomia: Moore (Anatomia Orientada para a Clínica), Netter (Atlas de Anatomia Humana).
- Histologia e biologia celular: Junqueira e Carneiro; Alberts (Biologia Molecular da Célula).
- Embriologia: Langman (Embriologia Médica).
- Bioquímica: Lehninger; Harper.
- Fisiologia: Guyton & Hall; Costanzo (BRS Fisiologia).
- Patologia geral e sistêmica: Robbins e Cotran (Bases Patológicas das Doenças).
- Farmacologia: Katzung; Goodman & Gilman.
- Microbiologia: Murray, Rosenthal e Pfaller; Trabulsi; Jawetz, Melnick & Adelberg.
- Imunologia: Abbas, Lichtman e Pillai; Janeway.
- Parasitologia: Neves (Parasitologia Humana); Rey (Bases da Parasitologia Médica).
- Semiologia: Porto (Semiologia Médica); Bates (Propedêutica Médica).
- Clínica médica (ciclo clínico): Goldman-Cecil Medicine.
- Cirurgia (ciclo clínico): Sabiston Textbook of Surgery.
- Pediatria: Nelson Textbook of Pediatrics; Sociedade Brasileira de Pediatria (SBP).
- Ginecologia e obstetrícia: Williams Obstetrics; Berek & Novak; FEBRASGO.
- Medicina preventiva e saúde coletiva: Rouquayrol; Medronho (Epidemiologia); Ministério da Saúde.
- Medicina de família e comunidade / APS: WONCA; Tratado de MFC (SBMFC); Cadernos de Atenção Básica.
- Infectologia clínica e condutas: Ministério da Saúde, CDC, OMS e diretrizes de sociedades brasileiras quando aplicável.
- Bioestatística e metodologia científica: Altman; Hulley (Delineando a Pesquisa Clínica); Pagano & Gauvreau.
- Saúde baseada em evidências: JAMA Users' Guides; Cochrane Handbook.

Regras:
- Não inventar guideline.
- Não usar afirmações absolutas sem base.
- Quando houver conduta sensível, preferir formulação conservadora e padrão-ouro.

---

## Checklist de validação por aula (antes de avançar)

- [ ] Arquivo com mais de 100 linhas.
- [ ] Seção inicial é `## Relevância Clínica e Acadêmica`.
- [ ] Contém `## Ponte com a Clínica`.
- [ ] Termina com `## Pré-Prova` no formato canônico: `### Síntese para a prova` (prosa sintética, **não** substituir por lista “o que precisa saber”), `### Diferenciações que a Uninove adora cobrar` (tabela), `### Frase-âncora para não esquecer` (blockquote); **nenhum** outro `##` após a frase-âncora (o app agrega o restante ao painel Pré-Prova).
- [ ] Há pelo menos uma tabela útil (não decorativa) quando o tema pede comparação.
- [ ] Se houver **fluxo/sequência**, está em **tabela ou lista** OU Mermaid **curto** (regras acima) **com** redundância segura em texto/tabela.
- [ ] Não há caracteres corrompidos (ex.: `Ã`, `�`, `???`).
- [ ] Não há texto genérico repetido de outras aulas.
- [ ] Capitalização revisada: maiúscula apenas no início de frase, em nomes próprios e em rótulos de tabelas/cabeçalhos; sem Title Case no corpo.
- [ ] **Figuras (opcional):** se houver `### Figura sugerida`, está no formato canônico e a quantidade faz sentido para o tema (poucas onde bastam; mais só quando o conteúdo pede).
- [ ] **Mnemônicos:** só se forem **consagrados** e úteis; cada letra explicada; **nenhuma** sigla inventada pela redação.
- [ ] Conteúdo salvo nos dois caminhos espelhados.
- [ ] Quantidade de linhas reportada.

---

## Política de continuidade

Após concluir e validar uma aula:
1. Informar o total de linhas.
2. Confirmar que os dois caminhos foram atualizados.
3. Seguir para a próxima aula (uma por vez).

Nunca pular validação de linha e estrutura.