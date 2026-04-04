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
11. O **Pré-Prova é síntese pura** — nenhum conteúdo novo. Apenas o que foi estabelecido no corpo do material, destilado.

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

1. `bmf1` — todas as aulas (Anatomia Módulo 1) — **bmf1_a1 já existe, pule**
2. `sus` — todas as aulas (Políticas de Saúde)
3. `pmh` — todas as aulas (Bioquímica)
4. `bcm1` — todas as aulas (Biologia Celular)
5. `mad1` — todas as aulas (Imunologia)
6. `bmf2` — todas as aulas
7. `mad2` — todas as aulas (Microbiologia)
8. Demais matérias na sequência de módulo

---

## Exemplo de arquivo já pronto (referência)

`data/materiais/bmf1/bmf1_a1.md` — leia antes de começar para calibrar o nível esperado.

---

## Após criar os arquivos

Não é necessário alterar nenhum outro arquivo. O app já está configurado para buscar os materiais em `data/materiais/<materia_id>/<aula_id>.md`. Após criar os arquivos, faça o deploy:

```powershell
cd "C:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app"
npx -y firebase-tools@latest deploy --only hosting
```

---

## Checklist de entrega por arquivo

Antes de salvar, confirme:
- [ ] Nome do arquivo = `<aula_id>.md` (ex: `bmf1_a2.md`)
- [ ] Pasta correta: `data/materiais/<materia_id>/` **e** `materiais/modulo<N>/<materia_id>/`
- [ ] O corpo do material é prosa narrativa — parágrafos densos, não listas de bullets
- [ ] Seção "Relevância Clínica e Acadêmica" presente (2 parágrafos de prosa, sem lista)
- [ ] Dicas de Prova e Pegadinhas **inline** no texto (blockquote `>`), não em seção separada
- [ ] Tabelas apenas onde há comparação real com 3+ entidades e múltiplos atributos
- [ ] Nenhuma seção existe apenas para cumprir template — cada seção tem conteúdo real
- [ ] Seção "Pontos-Chave para Prova" com 6–10 bullets negritados
- [ ] Seção "Pré-Prova" com bloco callout, 8–12 bullets, tabela de diferenciações (mín. 4 linhas) e frase-âncora
- [ ] Sem menção a "banca"
- [ ] Encoding UTF-8 sem BOM (método `[System.IO.File]::WriteAllText` com `New-Object System.Text.UTF8Encoding $false`)
- [ ] Tabelas sem linhas em branco entre as linhas `|...|`


