# Guia de Criação de Materiais de Apoio — MedGradPlus

## Escopo deste guia

Este guia define principalmente **padrão visual, estrutura e UX de leitura** dos materiais.

Regras operacionais de produção (fluxo uma por vez, validação, mínimo de linhas, encoding, caminhos espelhados e checklist final) devem seguir o documento canônico:

- `prompts/gerar_materiais_apoio.md`

## Estrutura de pastas

```
materiais/
  modulo1/
    bmf1/
      bmf1_a1.md   ← Aula 1
      bmf1_a2.md   ← Aula 2
      ...
    pmh/
      pmh_a1.md
  modulo2/
    bcm1/
      bcm1_a1.md
    mad1/
      mad1_a1.md
  ...
```

**Convenção do nome do arquivo:** `{sigla}_{id_aula}.md`
- Sigla = código da disciplina em minúsculas (ex: `bmf1`, `pmh`, `bcm1`)
- ID da aula = `a1`, `a2`, ... conforme `materias.json`

---

## Template de arquivo `.md`

```markdown
# Título da Aula

## Tópico Principal

Texto explicativo claro e direto. Use parágrafos curtos para facilitar a leitura.

### Subtópico

Detalhe o conteúdo aqui.

**Ponto importante:** use negrito para termos-chave ou conceitos críticos.

> **Nota clínica:** use blockquote para destacar informações relevantes para a prática,
> macetes ou alertas importantes.

## Outro Tópico

- Item da lista
- Outro item
- Mais um ponto importante

### Tabela Comparativa

| Conceito | Característica A | Característica B |
|----------|-----------------|-----------------|
| Item 1   | Valor           | Valor           |
| Item 2   | Valor           | Valor           |

---

## Resumo

Pontos-chave da aula em bullets curtos:
- Ponto 1
- Ponto 2
- Ponto 3
```

---

## Hierarquia de títulos e seus estilos

| Elemento | Uso | Visual no app |
|----------|-----|---------------|
| `# H1` | Título da aula | Branco grande, sublinhado ciano |
| `## H2` | Seções principais | Branco, borda esquerda ciana |
| `### H3` | Subtópicos | Azul ciano `#38BDF8` |
| `#### H4` | Sub-subtópicos | Azul claro, maiúsculo |
| `**negrito**` | Termos-chave | Branco destacado |
| `> blockquote` | Notas clínicas / macetes | Fundo azul translúcido |
| `---` | Separador de seção | Linha sutil |

---

## Boas práticas de conteúdo

1. **Comece com o título da aula em `# H1`** — aparece grande e com sublinhado colorido
2. **Use `## H2` para cada grande bloco temático** — cria hierarquia visual clara
3. **Use `> blockquote` para macetes, dicas e notas clínicas** — destaque automático com fundo azul
4. **Prefira listas a parágrafos densos** — mais fácil de revisar antes da prova
5. **Tabelas são ótimas para comparações** (ex: diferenciais diagnósticos)
6. **Negrito `**termo**` nos conceitos principais** de cada parágrafo
7. **Separe seções com `---`** quando o assunto mudar muito
8. **Mantenha consistência entre aulas da disciplina**, sem limitar artificialmente a quantidade de aulas.

---

## Fontes e design (para referência)

- **Fonte leitura:** Lexend (carregada via Google Fonts)
- **Fonte títulos:** Outfit
- **Cor accent:** `#00B4D8` (ciano MedGradPlus)
- **Tema:** escuro — fundo `#0A1628`, texto `#CBD5E1`
- **Blockquote:** fundo `rgba(0,180,216,0.07)` + borda ciana
- **Tabelas:** cabeçalho com fundo translúcido ciano

---

## Como adicionar nova disciplina

1. Criar pasta: `materiais/modulo{N}/{sigla}/`
2. Criar arquivos: `{sigla}_a1.md`, `{sigla}_a2.md`, ...
3. Garantir que o `id` da aula em `data/materias.json` bate com o nome do arquivo
4. Fazer deploy: `firebase deploy --only hosting`

> A pasta `materiais/` está no `.gitignore` — os arquivos existem apenas localmente
> e são enviados manualmente via deploy do Firebase.

---

## Regras de operação (resumo rápido)

- Produzir 1 aula por vez, do início ao fim.
- Após cada aula: validar e informar quantidade de linhas.
- Sempre espelhar a mesma versão em:
  - `data/materiais/<materia_id>/<aula_id>.md`
  - `materiais/modulo<N>/<materia_id>/<aula_id>.md`
- Nunca usar scripts para "escrever em lote" o conteúdo das aulas.
