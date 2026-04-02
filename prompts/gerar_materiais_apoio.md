# Briefing: Geração de Materiais de Apoio — MedUni9

## Contexto do projeto

App de estudos de medicina (Uninove) chamado **MedUni9**, hospedado no Firebase em `meduni9-869eb.web.app`.
Stack: único `index.html` com React 18 via CDN. Dados em `data/`. Materiais em `materiais/`.

---

## Onde salvar cada arquivo

```
materiais/
  modulo1/
    bmf1/
      bmf1_a1.md
      bmf1_a2.md
  modulo2/
    bcm1/
      bcm1_a1.md
```

**Regra:** `materiais/modulo{N}/{sigla}/{sigla}_a{N}.md`

O `id` da aula em `data/materias.json` = nome do arquivo sem `.md`.
Ex: `{ "id": "bmf1_a2" }` → arquivo `materiais/modulo1/bmf1/bmf1_a2.md`

> A pasta `materiais/` está no `.gitignore` mas é deployada via Firebase (não via git).

---

## Como descobrir IDs e temas

Leia `data/materias.json`:

```json
{
  "bmf1": {
    "nome": "Bases Morfofuncionais 1",
    "sigla": "BMF1",
    "modulo": 1,
    "aulas": [
      { "id": "bmf1_a1", "tema": "Introdução ao Estudo da Anatomia Humana", "descricao": "..." }
    ]
  }
}
```

---

## Template obrigatório de cada arquivo

```markdown
# <SIGLA> — Aula N: <TEMA>

**Disciplina:** <nome da matéria>
**Módulo:** N | **Tempo de estudo sugerido:** 10-15 min

---

## Por que isso cai na prova?

[Parágrafo direto. Por que a Uninove cobra isso, contexto clínico, por que vale estudar.]

---

## 1. <Conceito Principal>

[Explicação em prosa + tabelas quando a comparação ajudar.
Negrito nos termos-chave. Prefira tabelas a listas longas.]

## 2. <Segundo Conceito>

...

(quantas seções forem necessárias para cobrir o tema completamente)

---

## Erros Clássicos em Prova (Uninove)

- [erro específico e frequente 1]
- [erro específico e frequente 2]
- [erro específico e frequente 3]

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

> "[Uma frase mnemônica ou regra de ouro que resume o tema]"
```

---

## Regras de estilo (obrigatórias)

1. **Tom conversacional e direto** — como um colega explicando antes da prova. Sem "neste material aprenderemos...".
2. **Tabelas** sempre que houver comparação (termos, fármacos, diferenciações).
3. **Negrito** nos termos técnicos na primeira aparição.
4. Sem menção a "banca" — use "a Uninove" ou "os professores".
5. Profundidade: cobrir o suficiente para a prova, sem subespecialidade. Leitura em ~10 min.
6. Encoding UTF-8 sem BOM.
7. **Seção Pré-Prova é obrigatória** — sempre ao final, com o marcador exato `## Pré-Prova`.

---

## Como o app renderiza o material

- O viewer usa `marked.js` para renderizar o markdown como HTML.
- **Checklist (`- [ ]`):** fica interativo e persistido no localStorage do aluno.
- **Seção `## Pré-Prova`:** aparece como accordion colapsável em amber/dourado no final da tela — o aluno clica para expandir.
- Fontes: `Lexend` (corpo) + `Outfit` (títulos). Tema escuro com accent `#00B4D8` (ciano).

---

## Hierarquia de títulos → visual no app

| Markdown | Visual |
|----------|--------|
| `# H1` | Branco grande, sublinhado ciano |
| `## H2` | Borda esquerda ciana |
| `### H3` | Azul `#38BDF8` |
| `#### H4` | Azul claro em maiúsculas |
| `**negrito**` | Branco destacado |
| `> blockquote` | Fundo translúcido ciano — use para macetes |
| `- [ ]` | Checkbox interativo com persistência |

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

1. `bmf1` — todas as aulas (bmf1_a1 já existe, pule)
2. `sus` — todas as aulas
3. `pmh` — todas as aulas
4. `bcm1` — todas as aulas
5. `mad1` — todas as aulas
6. Demais na sequência de módulo

---

## Após criar os arquivos

```bash
cd "C:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app"
firebase deploy --only hosting
```

---

## Checklist de entrega por arquivo

- [ ] Nome = `{aula_id}.md` (ex: `bmf1_a2.md`)
- [ ] Pasta correta: `materiais/modulo{N}/{sigla}/`
- [ ] Seção "Por que isso cai na prova?" presente
- [ ] Pelo menos 2 seções de conteúdo com tabela
- [ ] Seção "Erros Clássicos em Prova (Uninove)" presente
- [ ] Checklist de Revisão com `- [ ]` presente
- [ ] Seção "Ponte com a Clínica" presente
- [ ] **Seção "## Pré-Prova" presente ao final** ← obrigatório
- [ ] Sem menção a "banca"
- [ ] Encoding UTF-8 sem BOM
