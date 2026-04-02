# Briefing: Geração de Materiais de Apoio — MedUni9

## Contexto do projeto

App de estudos de medicina (Uninove) chamado **MedUni9**, hospedado no Firebase Hosting em `meduni9-869eb.web.app`. O app é um único arquivo `index.html` com React 18 via CDN. Os dados ficam na pasta `data/`.

---

## O que você precisa fazer

Criar arquivos `.md` de material de apoio para cada aula listada em `data/materias.json`.

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

Use o arquivo `data/materiais/bmf1/bmf1_a1.md` como referência de estilo já produzida. O template é:

```markdown
# <SIGLA> — Aula N: <TEMA>

**Disciplina:** <nome da matéria>
**Módulo:** N | **Tempo de estudo sugerido:** 10-15 min

---

## Por que isso cai na prova?

[Parágrafo conversacional. Explicar por que a Uninove e os professores cobram isso,
qual o contexto clínico, e por que vale estudar. Tom direto, sem enrolação.]

---

## 1. <Conceito Principal>

[Explicação em prosa + tabelas quando a comparação ajudar.
Use negrito para termos-chave. Sem listas longas: prefira tabelas.]

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

[Um parágrafo conectando o tema a situações reais: como aparece no consultório,
na anamnese, no diagnóstico ou no tratamento.]
```

---

## Regras de estilo (obrigatórias)

1. **Linguagem conversacional e direta** — como um colega de medicina explicando antes da prova. Sem passos introdutórios genéricos como "neste material aprenderemos...".
2. **Sem acentos/caracteres especiais** nos arquivos salvos — salve em UTF-8, mas evite deixar caracteres quebrados. Se o sistema tiver problema de encoding, use palavras sem acento ou substitua por equivalente ASCII.
3. **Tabelas** sempre que houver lista de comparação (termos vs. definição, fármacos vs. efeito, etc.).
4. **Negrito** nos termos técnicos na primeira aparição.
5. Sem menção a "banca" — use sempre "a Uninove" ou "os professores".
6. Sem tempo de estudo diferente de "10-15 min".
7. Profundidade: cobrir o suficiente para a prova da Uninove, sem entrar em subespecialidade. Cada arquivo deve ser lido em ~10 min.

---

## Fontes por matéria (para embasar o conteúdo)

| Matéria | Fontes principais |
|---|---|
| BMF1/2/3/4 (Anatomia, Fisiologia) | Gray's Anatomy, Guyton & Hall |
| PMH (Bioquímica/Biologia Mol.) | Harper, Lehninger |
| BCM1 (Biologia Celular/Mol.) | Alberts — Biologia Molecular da Célula |
| MAD1/2 (Imunologia/Microbiologia) | Janeway, Murray — Microbiologia Médica |
| SUS / Epidemiologia | Documentos do Min. da Saúde, Starfield |
| Semiologia | Bickley — Bates, Porto — Semiologia Médica |
| Fisiopatologia / Farmacologia | Robbins, Goodman & Gilman |
| Indicadores de Saúde | DATASUS, publicações IBGE/MS |

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
- [ ] Pasta correta: `data/materiais/<materia_id>/`
- [ ] Seção "Por que isso cai na prova?" presente
- [ ] Pelo menos 2 seções de conteúdo com tabela ou negrito
- [ ] Seção "Erros Clássicos em Prova (Uninove)" presente
- [ ] Seção "Checklist de Revisão" presente
- [ ] Seção "Ponte com a Clínica" presente
- [ ] Sem menção a "banca"
- [ ] Encoding UTF-8 sem BOM
