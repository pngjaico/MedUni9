# Briefing: Geração de Materiais de Apoio — MedUni9

## Contexto do projeto

App de estudos de medicina (Uninove) chamado **MedUni9**, hospedado em `meduni9-869eb.web.app`.
Stack: único `index.html` com React 18 via CDN. Materiais ficam em `materiais/`.

---

## ANTES DE GERAR QUALQUER ARQUIVO — verificação obrigatória

**Leia `data/materias.json` e confirme:**
1. O `id` exato da aula (ex: `bmf1_a2`)
2. O `tema` da aula (ex: "Introdução aos Tecidos Humanos")
3. A `descricao` da aula, se houver
4. O número do `modulo`
5. O nome e a sigla da matéria

Só então comece a escrever o arquivo.

---

## Onde salvar cada arquivo

```
materiais/
  modulo1/
    bmf1/
      bmf1_a1.md   ← já existe, pule
      bmf1_a2.md
  modulo2/
    bcm1/
      bcm1_a1.md
```

**Regra:** `materiais/modulo{N}/{sigla}/{aula_id}.md`

> A pasta `materiais/` está no `.gitignore` mas é deployada pelo Firebase (não pelo git).

---

## Geração individual — um arquivo por vez

Gere **um arquivo de cada vez** usando o Write tool diretamente em markdown.
Não agrupe vários arquivos em uma resposta só.
Confirme com o usuário após cada arquivo antes de gerar o próximo.

---

## Template obrigatório de cada arquivo

> Use acentuação e ortografia correta em português. O app renderiza UTF-8 sem problema.

```markdown
**{Nome da Matéria} → {Tema Geral} → {Tema da Aula}**

# {Tema da Aula} — Material de Estudo

⏱ 10-15 min · Módulo {N} · {SIGLA}

---

## Por que isso cai na prova?

[Parágrafo direto. Por que a Uninove cobra isso, contexto clínico, por que vale estudar.
Tom de colega explicando antes da prova — sem "neste material vamos aprender...".]

---

## 1. {Conceito Principal}

[Explicação em prosa. Use negrito nos termos-chave na primeira aparição.
Prefira tabelas a listas longas quando houver comparação.]

## 2. {Segundo Conceito}

...

(quantas seções forem necessárias para cobrir o tema da prova)

---

## Erros Clássicos em Prova (Uninove)

- [erro frequente e específico 1]
- [erro frequente e específico 2]
- [erro frequente e específico 3]

---

## Checklist de Revisão

- [ ] item verificável 1
- [ ] item verificável 2
- [ ] item verificável 3

---

## Ponte com a Clínica

[Um parágrafo conectando o tema a situações reais: consultório, anamnese, diagnóstico ou tratamento.]

---

## Pré-Prova

> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### O que você PRECISA saber

- **[conceito-chave 1]:** [definição em uma linha]
- **[conceito-chave 2]:** [definição em uma linha]
- **[conceito-chave 3]:** [definição em uma linha]

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Diferença principal |
|------------|------------|---------------------|
| ...        | ...        | ...                 |

### Frase-âncora para não esquecer

> "[Uma frase mnemônica ou regra de ouro que resume o tema em uma linha]"
```

---

## Como o app renderiza o material

| Elemento markdown | Visual no app |
|-------------------|---------------|
| `# H1` | Branco grande, sublinhado ciano |
| `## H2` | Borda esquerda ciana |
| `### H3` | Azul `#38BDF8` |
| `**negrito**` | Branco destacado |
| `> blockquote` | Fundo translúcido ciano — ideal para macetes |
| `- [ ]` | Checkbox interativo persistido em localStorage |
| `## Pré-Prova` | Accordion amber colapsável ao final da tela |

---

## Regras de estilo

1. **Português correto com acentuação** — o app renderiza UTF-8 perfeitamente.
2. **Tom conversacional e direto** — como um colega de medicina explicando antes da prova.
3. **Tabelas** sempre que houver comparação (termos vs. definição, fármacos vs. efeito, diferencial diagnóstico).
4. **Negrito** nos termos técnicos na primeira aparição do parágrafo.
5. Sem menção a "banca" — use "a Uninove" ou "os professores".
6. Profundidade adequada para prova da Uninove, sem subespecialidade. Leitura em ~10-15 min.
7. **Seção `## Pré-Prova` é obrigatória** — sempre ao final, com esse marcador exato.

---

## Fontes por matéria

| Matéria | Fontes principais |
|---|---|
| BMF1/2/3/4 (Anatomia, Fisiologia) | Gray's Anatomy, Guyton & Hall |
| PMH (Bioquímica/Biologia Mol.) | Harper, Lehninger |
| BCM1 (Biologia Celular/Mol.) | Alberts |
| MAD1/2 (Imunologia/Microbiologia) | Janeway, Murray |
| SUS / Epidemiologia | Documentos Min. Saúde, Starfield |
| Semiologia | Bickley — Bates, Porto |
| Fisiopatologia / Farmacologia | Robbins, Goodman & Gilman |

---

## Prioridade de geração

1. `bmf1` — (bmf1_a1 já existe, pule)
2. `sus`
3. `pmh`
4. `bcm1`
5. `mad1`
6. Demais na sequência de módulo

---

## Após criar os arquivos

```bash
cd "C:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app"
firebase deploy --only hosting
```

---

## Checklist de entrega por arquivo

- [ ] Verificou o `id`, `tema` e `modulo` em `data/materias.json` antes de escrever
- [ ] Nome do arquivo = `{aula_id}.md` exato
- [ ] Pasta correta: `materiais/modulo{N}/{sigla}/`
- [ ] Cabeçalho com breadcrumb e metadados
- [ ] Seção "Por que isso cai na prova?" presente
- [ ] Pelo menos 2 seções de conteúdo com tabela
- [ ] "Erros Clássicos em Prova (Uninove)" presente
- [ ] "Checklist de Revisão" com `- [ ]` presente
- [ ] "Ponte com a Clínica" presente
- [ ] **`## Pré-Prova` ao final — obrigatório**
- [ ] Acentuação e ortografia em português corretas
- [ ] Sem menção a "banca"
