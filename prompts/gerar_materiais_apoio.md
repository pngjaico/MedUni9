# Briefing: Geração de Materiais de Apoio — MedUni9

## Contexto do projeto

App de estudos de medicina (Uninove) chamado **MedUni9**, hospedado no Firebase Hosting em `meduni9-869eb.web.app`. O app é um único arquivo `index.html` com React 18 via CDN. Os dados ficam na pasta `data/`.

---

## O que você precisa fazer

Criar arquivos `.md` de material de apoio para cada aula listada em `data/materias.json`.
NUNCA UTILIZE SCRIPTS PYTHONS, FAÇA UM POR UM!


### Onde salvar cada arquivo

```
data/materiais/<materia_id>/<aula_id>.md
```

Exemplos:
- `data/materiais/bmf1/bmf1_a1.md`
- `data/materiais/sus/sus_a4.md`
- `data/materiais/bcm1/bcm1_a2.md`

> **Importante:** os arquivos devem ficar em `data/materiais/`, não em `conteudos/`. A pasta `conteudos/` é ignorada no deploy.

---

## Como descobrir os IDs e temas de cada aula

Leia o arquivo `data/materias.json`. Cada matéria tem a estrutura:

```json
{
  "bmf1": {
    "nome": "Bases Morfofuncionais 1 ...",
    "sigla": "BMF1",
    "modulo": 1,
    "aulas": [
      { "id": "bmf1_a1", "tema": "Introdução ao Estudo da Anatomia Humana", "descricao": "..." },
      { "id": "bmf1_a2", "tema": "Introdução aos Tecidos Humanos", "descricao": "..." }
    ]
  }
}
```

O `id` da aula é o nome do arquivo (ex: `bmf1_a1.md`), e o `tema` é o assunto a escrever.

---

## Template obrigatório de cada arquivo

### Filosofia do material (leia antes de escrever)

O modelo de referência é o **MedEvo** — material de apoio que existe no projeto em:
- `Material_Anemias_no_Adulto_Material_de_Estudo_MedEvo.pdf`
- `conteudos/_para_categorizar/Material_Estrategia_Saude_da_Familia_Material_de_Estudo_MedEvo.pdf`

**O que faz o MedEvo funcionar:**
- O texto é **prosa narrativa densa**, não lista de bullet points. Parágrafos explicam o raciocínio completo.
- O autor explica o **porquê** antes do **o quê**. O estudante deve entender a lógica, não decorar.
- **"Dica de Prova"** e **"Pegadinha de Prova"** são caixas inline no texto, não seções separadas.
- **Tabelas existem apenas para diferencial diagnóstico real** (ex: ferropriva vs. doença crônica) ou para comparações com 3+ itens. Nunca para preencher estrutura.
- A voz é de um colega sênior — direta, pessoal, sem academicismo vazio.

**O que EVITAR (problemas do modelo anterior):**
- NÃO crie seções para preencher template. Se o tema não tem "Tratamento", não crie essa seção.
- NÃO substitua explicação por tabela. A tabela complementa, não substitui a prosa.
- NÃO multiplique checklists, boxes e seções estruturais no lugar de conteúdo.
- NÃO use bullets onde cabe um parágrafo. Uma lista de 8 bullets é um parágrafo disfarçado.

---

### Estrutura do arquivo

```markdown
# <SIGLA> — Aula N: <TEMA>

**Disciplina:** <nome da matéria>
**Módulo:** N | **Tempo de estudo sugerido:** 10-15 min

---

## Relevância Clínica e Acadêmica

[1 a 2 parágrafos de prosa direta. Responde: por que esse tema existe na medicina?
Qual o impacto real? O que a Uninove cobra? Como conecta às aulas seguintes?
Tom: colega explicando antes de entrar na sala. NÃO listar tópicos aqui.]

---

## <Título do primeiro núcleo de conteúdo>

[PROSA DENSA. Explique o conceito como se o estudante nunca tivesse visto.
Inclua mecanismo, contexto, exceções. Use negrito nos termos técnicos na
primeira aparição. Embed inline as dicas de prova assim:]

> **Dica de Prova:** [observação direta sobre como a Uninove cobra isso — uma frase.]

[Continue a prosa após a dica. O texto não para. A dica é um parêntese.]

> **Pegadinha:** [armadilha clássica de questão — explique por que confunde e como escapar.]

[Use tabela APENAS se estiver comparando 3+ itens com múltiplos atributos.
Exemplo válido: diferencial diagnóstico de 4 tipos de anemia microcítica.
Exemplo inválido: tabela com 2 colunas e 2 linhas que caberia em uma frase.]

## <Título do segundo núcleo>

[Mesma abordagem: prosa → dicas inline → tabela só se necessária.
Os títulos das seções devem refletir o conteúdo real, não ser genéricos
("Fisiopatologia", "Diagnóstico"). Use: "A Lógica da Filtração Glomerular",
"Como o Ferro Esgota em Etapas", "O Músculo que Ninguém Examina Direito".]

## <Quantas seções o tema precisar>

[Não há número fixo de seções. O tema determina a estrutura.
Para anatomia: organização topográfica lógica.
Para fisiologia: siga a cadeia fisiológica (estímulo → mecanismo → efeito).
Para semiologia: siga o raciocínio clínico (queixa → exame → interpretação).
Para farmacologia: mecanismo de ação antes da classificação.
Para microbiologia/imunologia: agente → patogênese → resposta do hospedeiro.]

---

## Pontos-Chave para Prova

[NÃO é uma lista de tudo que foi dito. São os 6–10 pontos que com maior probabilidade
caem em questão objetiva. Cada item: negrito no termo + frase definitiva de 1 linha.
Escreva como se fosse o que você gritaria para o colega 5 minutos antes da prova.]

- **[Termo-chave]:** [afirmação direta e definitiva]
- **[Termo-chave]:** [afirmação direta e definitiva]
(mínimo 6, máximo 10 itens)

---

## Pré-Prova

> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### O que você PRECISA saber

- **[Conceito 1]:** [frase curta e definitiva — máximo 15 palavras]
- **[Conceito 2]:** [...]
(8 a 12 itens — só o que é altamente provável de cair)

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Como diferenciar |
|------------|------------|-----------------|
| [termo 1] | [termo 2] | [critério único e claro] |
| [termo 3] | [termo 4] | [...] |
(mínimo 4 linhas — pares que mais confundem na prova)

### Frase-âncora para não esquecer

> "[Frase memorável com rima, analogia ou mnemônico que fixa o ponto mais cobrado.]"
```

---

## Codificação de arquivos — regra obrigatória

**SEMPRE salve arquivos .md com UTF-8 sem BOM.** Use obrigatoriamente este método no PowerShell:

```powershell
$utf8NoBom = New-Object System.Text.UTF8Encoding $false
[System.IO.File]::WriteAllText("data\materiais\<materia>\<aula>.md", $conteudo, $utf8NoBom)
[System.IO.File]::WriteAllText("materiais\modulo<N>\<materia>\<aula>.md", $conteudo, $utf8NoBom)
```

**NUNCA** use `Out-File`, `Set-Content` ou `create_file` — esses comandos inserem BOM ou quebram acentos.
**NUNCA** escreva conteúdo sem acentos** como "workaround" de encoding. O problema não é o encoding, é o método de escrita.
O `firebase.json` já serve `/materiais/**` com `Content-Type: text/markdown; charset=utf-8` — a infraestrutura está correta.

### Regra crítica para tabelas — NUNCA adicionar linhas em branco entre linhas de tabela

As linhas de uma tabela markdown devem ser **consecutivas, sem linhas em branco entre elas**:

```markdown
✅ CORRETO:
| Col A | Col B |
|-------|-------|
| val 1 | val 2 |
| val 3 | val 4 |

❌ ERRADO (quebra a tabela no app):
| Col A | Col B |

|-------|-------|

| val 1 | val 2 |

| val 3 | val 4 |
```

Linhas em branco entre linhas `|...|` fazem o `marked.parse()` tratar cada linha como parágrafo separado com texto puro — a tabela aparece como `| val 1 | val 2 |` sem renderizar. Isso afetou todos os materiais do semio1/sus/pmh antigos.

---

## Diagramas de Fluxo — regra obrigatória

Para vias fisiológicas sequenciais, cascatas hormonais, anatomia com etapas ou qualquer fluxo linear/ramificado, use **obrigatoriamente** o fence `flow`:

````
```flow
Hipotálamo → CRH → Hipófise anterior → ACTH → Suprarrenal → Cortisol
                                                    ↑ Feedback negativo
```
````

O app renderiza `flow` como um **box visual colorido** (gradiente mint/azul da identidade MedUni9), com label "FLUXO" e fonte legível — não como código de programação.

**Quando usar `flow`:**
- Eixos hormonais (HPA, HPG, RAAS, tireoidiano)
- Vias anatômicas sequenciais (ex: ductos biliares, vias urinárias)
- Cascatas bioquímicas (ex: cadeia de síntese das catecolaminas, coagulação)
- Caminhos de sinalização celular (ex: RTK → RAS → MAPK)

**Quando NÃO usar `flow`:**
- Código Python, PowerShell ou qualquer linguagem de programação → use ` ```python ` ou ` ```powershell `
- Estrutura de arquivos ou exemplos de JSON → use ` ```json ` ou ` ```text `

**Regra crítica:** NUNCA use ` ``` ` (fence sem linguagem) para diagramas. Sem a linguagem `flow`, o app renderiza como caixa monospace escura — parece código, não diagrama médico.

**Exemplo completo correto:**

````
```flow
Ductos hepáticos D + E
        ↓
Ducto hepático comum
        ↓
+ Ducto cístico
        ↓
Ducto colédoco
        ↓ (esfíncter de Oddi)
2ª porção do duodeno
```
````

---

## Instruções por Tipo de Disciplina

### ANATOMIA (BMF1/2/3/4)

**Fonte primária:** Moore — Anatomia Orientada para a Clínica (capítulos = aulas)

**Estrutura esperada:**
1. Começar sempre com a **lógica topográfica** (por que essa região é importante clinicamente)
2. Descrever anatomia por **camadas/estruturas relacionadas** — não isoladas
3. **Sempre conectar** achado anatômico com exame físico (palpação, inspeção, ausculta)
4. Incluir uma ou duas **variações anatômicas** que caem em prova

**Exemplo de bom começo:**
> "O abdômen em sua superfície se divide em 9 regiões para localizar dor e massas. Mas clinicamente, o que importa é saber que a linha semi-lunar (borda lateral do reto abdominal) marca o limite entre a inervação segmentar — se você percute e encontra submatidez na região epigástrica, o baço aumentado está palpável lá, não no flanco."

**Dicas inline obrigatórias:**
- Digite ao menos 1 "Dica de Prova" por seção (ex: referências ósseas que a Uninove adora cobrar)
- Inclua 1 "Pegadinha" sobre variação anatômica que confunde (ex: "o pâncreas NÃO é totalmente retroperitoneal — a cauda é intraperitoneal")

**Mínimo de conteúdo:** 4–6 seções de anatomia + 1 de variações clínicas

---

### FISIOLOGIA (integrada com BMF)

**Fonte primária:** Guyton & Hall — Tratado de Fisiologia Médica

**Estrutura esperada:**
1. **Começar pelo estímulo:** "O que ativa esse mecanismo?"
2. **Descrever a cascata:** hormônio → receptor → segundo mensageiro → efeito
3. **Incluir feedback:** como o sistema se auto-regula?
4. **Terminar com deafferentation:** "o que acontece se isso falhar?"

**Exemplo de bom começo:**
> "A pressão arterial é o 'vilão' que a Uninove adora cobrar porque é dinâmica — muda a cada batida, a cada respiração. O barorreceptor (no seio carotídeo) é um mecanoreceptor que sente estiramento — quanto mais pressão, mais dispara. Esse sinal vai para o tronco encefálico (núcleo do trato solitário, bulbo), que diminui o simpático e aumenta o vagal, reduzindo frequência e contratilidade. Se você remove o barorreceptor cirurgicamente, a pressão sai da rédea — hipertensão crônica de desenfreio."

**Mínimo de conteúdo:** 3–5 seções mecanísticas + feedback + patologia

---

### SEMIOLOGIA (SEMIO1/2/3/4)

**Fonte primária:** Porto — Semiologia Médica (cap. por sistema — use em paralelo com tema da aula)

**Regra de ouro:** Semiologia NÃO é anatomia nem fisiologia — é o **raciocínio clínico sequencial**:
1. **Anamnese dirigida** (que perguntas fazer?)
2. **Exame físico** (qual manobra? como interpretar?)
3. **Diagnóstico diferencial** (que achado discrimina?)

**Estrutura obrigatória:**
- Começa com um caso clínico REAL de 3–4 linhas (ex: "Paciente 62a com HAS, vem com "dor no ombro". Você pergunta: piora respirando? Irradia para nuca? Piora com movimento? Porque essas respostas discriminam angina de cervicalgia")
- Depois desenvolve o exame em etapas com ballroom: "primeiro você palpará X, depois ausculta Y, depois a manobra Z"
- Inclui 2–3 síndromes clássicas que acompanham esse achado

**Dicas inline obrigatórias:**
- Mínimo 1 "Pegadinha" por seção sobre erro diagnóstico comum (ex: "muitos confundem hepatomegalia com esplenomegalia porque ambas são infra-costal — mas baço é medial e posterior; fígado é lateral e anterior")
- Mínimo 1 "Dica de Prova" sobre qual achado é patognomônico

**Tabelas:** OBRIGATÓRIAS para diferencial (ex: comparar 4 causas de sopro sistólico, com localização, irradiação, qualidade)

**Mínimo de conteúdo:** 1 caso clínico + 4–5 seções de técnica + 2 diferenciações

---

### EPIDEMIOLOGIA / SAÚDE COLETIVA (SUS, INDICADORES, MAD1 preventiva)

**Fonte primária:** Documentos do Min. da Saúde (DATASUS), Starfield — Atenção Primária; Abbas para epidemiologia de doenças

**Estrutura esperada:**
1. **Começar com a relevância em números** ("No Brasil, 500 mil casos de TB por ano; incidência 45/100 mil")
2. **Cadeia epidemiológica:** agente → porta de entrada → porta de saída → hospedeiro novo
3. **Estratégias de quebra:** qual nível de prevenção intervém onde?
4. **Indicadores:** prevalência vs incidência, taxa de mortalidade, AVAI, DALY

**Exemplo de bom começo:**
> "Tuberculose mata 1 pessoa a cada 15 segundos no mundo. No Brasil, TB é infecção oportunista mais comum em HIV. A cadeia é direta: paciente tosse → droplet → próximo inala → aguarda 3 semanas para PCR/cultura virar positivo. A quebra acontece em 3 níveis: primária (BCG = evita disseminação generalizada), secundária (diagnóstico + isolamento respiratório), terciária (TARV em coinfectados). O professor Uninove vai cobrar qual? Os indicadores que discriminam: incidência (novos casos ano), prevalência (total de casos em um momento), taxa de detecção (como a gente encontra os casos perdidos)."

**Mínimo de conteúdo:** números de impacto + cadeia epidemiológica + prevenção em 3 níveis + indicadores

---

### FARMACOLOGIA (FF1/2/3/4)

**Fonte primária:** Goodman & Gilman; Rang & Dale

**Estrutura esperada:**
1. **Mecanismo de ação ANTES de classificação** (por que funciona, não o que é)
2. **Farmacocinética:** absorção → distribuição → metabolismo → eliminação (e como a Uninove cobra isso)
3. **Efeitos adversos:** não é lista — é sequência do mecanismo (ex: bloqueador beta causa bradicardia porque inibe beta-1 cardíaco)
4. **Interações:** qual fármaco compete? qual inibe CYP? 

**Exemplo de bom começo:**
> "Lisinopril é um inibidor da enzima conversora de angiotensina (ACE). A angiotensina II é vasoconstritora potente que aumenta aldosterona — reduz sódio nos rins. Quando você bloqueia essa enzima, você reduz AII, vasodilatação acontece, e sódio é retido (hiperkalemia em meses). A tosse seca vem de acúmulo de bradicinina. A Uninove não cobra só 'Lisinopril reduz PA' — ela cobra: qual é o risco em paciente com IRC grade 4? (Resp: hiperpotassemia brutal, risco de parada cardíaca). Qual contraindicação? (Resp: gravidez — cause malformação renal fetal no 2º trimestre)."

**Mínimo de conteúdo:** mecanismo + farmacocinética + 3–4 efeitos adversos ligados ao mecanismo + interações

---

## Regras de estilo (obrigatórias)

1. **Prosa narrativa é o padrão** — escreva parágrafos densos que explicam o raciocínio. Bullets e checklists são exceção, não regra.
2. **O porquê antes do o quê** — antes de listar um fato, explique a lógica por trás dele. O estudante entende e retém mais.
3. **"Dica de Prova" e "Pegadinha" são inline** — use o blockquote `>` diretamente no meio do texto, onde o conceito aparece. Não crie seção separada para erros.
4. **Tabelas apenas para comparações reais** — diferencial diagnóstico com 3+ entidades, classificações com múltiplos critérios. Nunca tabela de 2 linhas, nunca tabela no lugar de um parágrafo.
5. **Títulos de seção descrevem o conteúdo** — não use "Fisiopatologia" como título. Use "Por Que a Medula Falha na Anemia de Doença Crônica" ou "A Sequência do Exame Físico Renal". O título prepara o estudante.
6. **Linguagem conversacional e direta** — como um colega sênior explicando antes da prova. Sem academicismo ("é imperativo que", "cabe ressaltar que"). Entre direto no ponto.
7. **Português completo com acentuação correta** — "articulação", "músculo", "fisiológico", "função", "inflamação", "diagnóstico". Nunca omita acentos.
8. **Negrito** nos termos técnicos na primeira aparição e nos valores/critérios cobrados em prova.
9. Sem menção a "banca" — use sempre "a Uninove" ou "os professores".
10. Tempo de estudo fixo: "10-15 min" — não altere.
11. O **Pré-Prova é síntese dos principais pontos da aula** — nenhum conteúdo novo. Apenas o que foi explicado com mais detalhe no corpo do material.
12. **Tamanho intermediário por aula** — evitar material curto demais e evitar verbosidade artificial. Faixa recomendada: **120–220 linhas**, com profundidade real e sem blocos repetitivos.

---

## Fontes por matéria (para embasar o conteúdo)

| Matéria | Fontes principais |
|---|---|
| BMF1/2/3/4 (Anatomia) | Gray's Anatomy, Moore — Anatomia Orientada para a Clínica, Netter |
| BMF1/2/3/4 (Fisiologia) | Guyton & Hall — Tratado de Fisiologia Médica |
| PMH (Bioquímica/Biologia Mol.) | Harper — Bioquímica Ilustrada, Lehninger — Bioquímica |
| BCM1 (Biologia Celular/Mol.) | Alberts — Biologia Molecular da Célula, De Robertis |
| MAD1 (Imunologia) | Janeway — Imunobiologia, Abbas — Imunologia Celular e Molecular |
| MAD2 (Microbiologia) | Murray — Microbiologia Médica, Trabulsi — Microbiologia |
| SUS / Epidemiologia | Documentos do Min. da Saúde, Starfield — Atenção Primária |
| Semiologia | Porto — Semiologia Médica, Bickley — Bates — Propedêutica Médica |
| Fisiopatologia | Robbins — Patologia Básica, Cotran |
| Farmacologia | Goodman & Gilman, Rang & Dale |
| Indicadores de Saúde | DATASUS, IBGE, publicações RIPSA |

---

## Prioridade de matérias

Gere na seguinte ordem:

1. `bmf1` — todas as aulas (Anatomia Módulo 1) — 
2. `sus` — todas as aulas (Políticas de Saúde)
3. `pmh` — todas as aulas (Bioquímica)
4. `bcm1` — todas as aulas (Biologia Celular)
5. `mad1` — todas as aulas (Imunologia)
6. `bmf2` — todas as aulas
7. `mad2` — todas as aulas (Microbiologia)
8. Demais matérias na sequência de módulo

---

## Exemplo de arquivo já pronto (referência)

`data/materiais/bmf1/bmf3_a3.md` — leia antes de começar para calibrar o nível esperado.

---

## Após criar os arquivos

Não é necessário alterar nenhum outro arquivo. O app já está configurado para buscar os materiais em `data/materiais/<materia_id>/<aula_id>.md`. Após criar os arquivos, faça o deploy:

```powershell
cd "C:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app"
npx -y firebase-tools@latest deploy --only hosting
```

---

## Checklist de Entrega por Arquivo

### Para TODA aula (independente do tipo)

- [ ] Nome do arquivo = `<aula_id>.md` (ex: `bmf1_a2.md`)
- [ ] Pasta correta: `data/materiais/<materia_id>/` **E** `materiais/modulo<N>/<materia_id>/`
- [ ] **Faixa intermediária (120–220 linhas)** — conteúdo suficiente para profundidade, sem alongamento artificial
- [ ] Seção "Relevância Clínica e Acadêmica" com 2 parágrafos de PROSA (não lista)
- [ ] Corpo do material é **prosa narrativa** — parágrafos explicam raciocínio, não bullets
- [ ] Títulos de seção descrevem conteúdo específico (não genéricos: "Anatomia" → "Organização do Abdômen em 9 Regiões")
- [ ] Dicas de Prova e Pegadinhas **inline** (blockquote `>`) no meio do texto, não em seção separada
  - N de "Dica de Prova": mínimo 2, máximo 5 por aula
  - N de "Pegadinha": mínimo 1–2 por aula
- [ ] Tabelas **apenas para comparação real** de 3+ itens (diferencial diagnóstico, classificações)
  - Sem linhas em branco entre linhas `|...|`
  - Mínimo 4 linhas de dados
- [ ] Seção "Pontos-Chave para Prova": 6–10 bullets com termo em negrito + frase definitiva (1 linha)
- [ ] Seção "Pré-Prova" com 3 subseções:
  - "O que você PRECISA saber": 6–10 bullets com os principais pontos da aula (já detalhados no corpo)
  - "Diferenciações que a Uninove adora cobrar": tabela com 4–6 linhas de pares confundíveis
  - "Frase-âncora para não esquecer": 1 frase memorável (rima, mnemônico, analogia)
- [ ] Negrito em termos técnicos na 1ª aparição + em valores de corte (ex: "Hemoglobina < 12 g/dL")
- [ ] Sem menção a "banca" — sempre "a Uninove" ou "os professores"
- [ ] Encoding UTF-8 sem BOM (PowerShell: `[System.IO.File]::WriteAllText(..., $utf8NoBom)`)
- [ ] Sem erros de português — acentuação completa obrigatória

---

### Para ANATOMIA (BMF)

- [ ] Começa com **por que essa estrutura é clinicamente importante**
- [ ] Organiza por **topografia lógica** ou **camadas** (não isolada)
- [ ] Inclui **pelo menos 1 achado que correlaciona com exame físico** (palpação, inspeção, ausculta)
- [ ] Menciona **1–2 variações anatômicas** que confundem em questão
- [ ] Inclui ao menos 1 "Pegadinha" sobre uma variação comum
- [ ] Se houver estruturas relacionadas, diferencia-as em tabela (ex: "músculos do compartimento anterior vs. posterior da coxa")

---

### Para FISIOLOGIA

- [ ] Começa explicando o **estímulo inicial** ("O que dispara esse mecanismo?")
- [ ] Descreve a **cascata fisiológica** (passo a passo: receptor → sinal → efetor → resposta)
- [ ] Inclui **feedback** (como o corpo se autocontrola?)
- [ ] Termina com **o que acontece quando falha** (patologia/descompensação)
- [ ] Inclui valores numéricos com padrão normal (ex: "PA normal 120/80 mmHg")
- [ ] Mínimo 1 "Dica de Prova" sobre mecanismo cobrado a cada aula

---

### Para SEMIOLOGIA

- [ ] Começa com **1 caso clínico real** (2–3 linhas de apresentação)
- [ ] Anamnese: apresenta as **perguntas estratégicas** que discriminam diagnósticos
- [ ] Exame físico: descreve **passo a passo** (qual manobra? como executar? como interpretar?)
- [ ] Inclui **2–3 síndromes clássicas** que acompanham esse achado
- [ ] Mínimo 2–3 "Pegadinhas" sobre erros diagnósticos comuns
- [ ] Tabela obrigatória para **diferencial de causas** (ex: sopros sistólicos ou causas de icterícia)
- [ ] Inclui valores quantitativos (ex: "hepatomegalia = fígado > 2 cm abaixo do rebordo espinostal")

---

### Para FARMACOLOGIA (FF)

- [ ] Começa com **mecanismo de ação** (por que funciona?)
- [ ] Depois classificação e fármacos que pertencem a ela
- [ ] Descreve **farmacocinética:** absorção, distribuição, metabolismo, eliminação
- [ ] Lista **3–4 efeitos adversos ligados ao mecanismo** (não lista neutra — explica POR QUE)
- [ ] Inclui **interações** (qual fármaco compete? qual inibe CYP?)
- [ ] Mínimo 1–2 contraindicações com População especial (gestante, IRC, idoso)
- [ ] Tabela Compare 3+ fármacos da classe com mecanismo, via, meia-vida

---

### Para EPIDEMIOLOGIA / SAÚDE COLETIVA

- [ ] Começa com **números de impacto** (incidência, mortalidade, DALY no Brasil)
- [ ] Descreve a **cadeia epidemiológica:** agente → porta entrada → transmissão → porta saída → novo hospedeiro
- [ ] Explica **3 níveis de prevenção** e qual intervém onde
- [ ] Define indicadores usados (prevalência, incidência, taxa detecção, AVAI)
- [ ] Inclui medidas de controle: vacina, quarentena, tratamento, monitoramento
- [ ] Se microbiologia integrada: menciona agente etiológico e patogênese básica

---

### Validação de Profundidade — ANTES de salvar

Faça essas perguntas para cada seção:

1. **"Se um colega de menor ano ler isso, vai entender a lógica?"** (se não, precisa mais prosa explicação)
2. **"Tem pelo menos 1 "Dica de Prova"?"** (se não, onde está o conteúdo cobrado?)
3. **"Tem 1 "Pegadinha"?"** (se não, onde está o erro clássico?)
4. **"Tem valor de corte / número / critério?"** (se não, como o estudante memoriza?)
5. **"Essa tabela substitui um parágrafo?"** (se sim, delete — transforme em prosa)
6. **"Tem 4+ linhas?"** (se não, seção está fraca — expande)

Se a resposta for "não" para qualquer delas, **revise antes de salvar**.


