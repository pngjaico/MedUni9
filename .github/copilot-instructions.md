# Copilot Instructions — MedUni9

## Regra crítica de encoding (SEMPRE seguir)

Ao escrever ou reescrever qualquer arquivo `.md` de material de apoio neste projeto, use **obrigatoriamente** este padrão PowerShell:

```powershell
$utf8NoBom = New-Object System.Text.UTF8Encoding $false
[System.IO.File]::WriteAllText("data\materiais\<materia>\<aula>.md", $conteudo, $utf8NoBom)
[System.IO.File]::WriteAllText("materiais\modulo<N>\<materia>\<aula>.md", $conteudo, $utf8NoBom)
```

**Proibido:**
- `Out-File` — adiciona BOM
- `Set-Content` — pode quebrar acentos
- ferramenta `create_file` do agente — não controla encoding
- Escrever conteúdo em ASCII sem acentos como "workaround"

**A infraestrutura já está correta:** `firebase.json` serve `/materiais/**` com `Content-Type: text/markdown; charset=utf-8`. O problema histórico eram os arquivos escritos sem diacríticos.

## Sempre escreva português completo

Use acentuação correta: "articulação", "função", "músculo", "fisiológico", "diagnóstico", "inflamação", etc.
NUNCA omita acentos pensando que é mais "seguro" para encoding.

## Seção Pré-Prova obrigatória em todo material

Todo arquivo `.md` de material de apoio deve terminar com a seção `## Pré-Prova` após a "Ponte com a Clínica", seguindo este design exato:

```markdown
## Pré-Prova

> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### O que você PRECISA saber

- **[Conceito]:** [frase curta e definitiva]
- ...

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Como diferenciar |
|------------|------------|-----------------|
| ... | ... | ... |

### Frase-âncora para não esquecer

> "[Frase memorável com mnemônico ou analogia]"
```

A primeira seção de conteúdo é **"Relevância Clínica e Acadêmica"** (não "Por que isso cai na prova?").
Ver `materiais/modulo1/bmf1/bmf1_a1.md` como referência canônica de estilo.
Ver `prompts/gerar_materiais_apoio.md` para o template completo atualizado.

## Estrutura de arquivos

- Fonte editável: `data/materiais/<materia_id>/<aula_id>.md`
- Caminho servido pelo app: `materiais/modulo<N>/<materia_id>/<aula_id>.md`
- **Sempre salvar nos dois caminhos** ao criar ou atualizar um arquivo.

## Deploy

```powershell
cd "C:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app"
npx -y firebase-tools@latest deploy --only hosting
```

## Referência de prompt completo

Ver `prompts/gerar_materiais_apoio.md` para template, regras de estilo e lista de matérias.
