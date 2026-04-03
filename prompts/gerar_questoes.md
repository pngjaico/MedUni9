# Guia Completo: Geração de Questões — MedUni9

> Guia único e autoritativo para gerar questões do app MedUni9.
> Leia por completo antes de gerar qualquer questão.

---

## 1. Contexto

**App:** MedUni9 — PWA de estudos de medicina para alunos da Uninove (1º semestre).
**Questões:** múltipla escolha com 4 opções (A–D), explicação detalhada, estilo Uninove.
**Meta por aula:** 5 questões cobrindo os pontos mais cobrados em prova.
**Arquivo:** `data/questoes.json`

---

## 2. Verificação Obrigatória Antes de Gerar

**Antes de escrever qualquer questão**, confirme em `data/materias.json` e `data/questoes.json`:

1. O `id` exato da aula (ex: `pmh_a3`)
2. O `tema` da aula e subtópicos (campo `descricao`)
3. O número do `modulo` (ex: `1`)
4. A `sigla` da matéria (ex: `pmh`)
5. Quantas questões já existem para essa aula (`tema == aula_id` no JSON)
6. Qual o maior `id` atual no arquivo — o próximo começa em `max_id + 1`

---

## 3. Formato JSON Obrigatório

Cada questão segue este schema exato:

```json
{
  "id": 102,
  "materia": "pmh",
  "enunciado": "Enunciado completo da questão com contexto clínico quando possível",
  "opcoes": [
    "A) Opção correta",
    "B) Opção incorreta plausível",
    "C) Opção incorreta plausível",
    "D) Opção incorreta plausível"
  ],
  "correta": 0,
  "explicacao": "Explicação detalhada de por que A é correta e por que B, C, D estão erradas.",
  "tema": "pmh_a3",
  "dificuldade": 2,
  "modulo": 1
}
```

### Campos obrigatórios

| Campo | Tipo | Regra |
|---|---|---|
| `id` | int | Sequencial global — nunca repetir |
| `materia` | string | Sigla exata (ex: `pmh`, `bmf1`, `bcm1`) |
| `enunciado` | string | Mínimo 60 caracteres; caso clínico ou questão conceitual |
| `opcoes` | array[4] | Exatamente 4 itens; sempre prefixados com `A)`, `B)`, `C)`, `D)` |
| `correta` | int | Índice da opção correta (0 = A, 1 = B, 2 = C, 3 = D) |
| `explicacao` | string | Mínimo 100 caracteres; explica correta E descarta incorretas |
| `tema` | string | Sempre igual ao `aula_id` (ex: `pmh_a3`) |
| `dificuldade` | int | 1 = fácil, 2 = médio, 3 = difícil |
| `modulo` | int | Número do módulo da matéria |

---

## 4. Regras de Qualidade

### Enunciado
- **Estilo Uninove:** direto, sem armadilhas de linguagem, mas exigindo raciocínio
- **Caso clínico quando possível** — "Paciente de 45 anos com DM2 em uso de metformina..." é melhor que definição pura
- **Único ponto de dúvida** — cada questão testa UMA coisa, não três ao mesmo tempo
- **Português correto** — acentuação obrigatória; sem abreviações obscuras

### Opções
- **Exatamente 4 opções** (A, B, C, D)
- **Distradores plausíveis** — os erros devem ser erros que alunos realmente cometem
- **Paralelismo** — todas as opções têm a mesma estrutura gramatical
- **Sem "todas as anteriores" ou "nenhuma das anteriores"**
- **Variar a posição da correta** — não concentrar sempre em A ou B

### Explicação
- **Explica por que a correta está certa** (mecanismo, não só "é isso")
- **Descarta ao menos 2 das incorretas** com justificativa específica
- **Pode referenciar a aula** — "Como visto na regulação do ciclo de Krebs..."
- **Tamanho:** 2–4 frases; não deve ser maior que o enunciado

### Distribuição de dificuldade por aula (5 questões)
- 1 questão dificuldade 1 (conceito básico, definição direta)
- 3 questões dificuldade 2 (aplicação, mecanismo, comparação)
- 1 questão dificuldade 3 (caso clínico integrado, detalhe de prova)

---

## 5. Tipos de Questão — Usar Variedade

| Tipo | Exemplo |
|---|---|
| Definição/conceito | "Qual é a função do NAD+ na glicólise?" |
| Comparação | "Qual a diferença entre NADH e FADH2 na cadeia respiratória?" |
| Caso clínico | "Paciente com intoxicação por cianeto... O que ocorre com a produção de ATP?" |
| Localização | "Onde ocorre a beta-oxidação de ácidos graxos?" |
| Consequência | "O que acontece com o metabolismo quando o AMP acumula?" |

Tente cobrir pelo menos 3 tipos diferentes nas 5 questões de cada aula.

---

## 6. Como Adicionar ao Arquivo

**Nunca sobrescreva o arquivo inteiro.** Sempre:

1. Leia `data/questoes.json` completo
2. Encontre o maior `id` atual
3. Adicione as novas questões ao array existente com ids sequenciais
4. Salve o arquivo completo com encoding UTF-8

```python
import json
from pathlib import Path

path = Path("data/questoes.json")
data = json.loads(path.read_text(encoding="utf-8"))
questoes = data if isinstance(data, list) else data.get("questoes", [])

max_id = max((q["id"] for q in questoes), default=0)
novas = [...]  # lista de novas questões com ids iniciando em max_id + 1

questoes.extend(novas)
result = questoes if isinstance(data, list) else {**data, "questoes": questoes}
path.write_text(json.dumps(result, ensure_ascii=False, indent=2), encoding="utf-8")
```

---

## 7. O que NÃO gerar

- Questões sobre temas fora da `descricao` da aula em `materias.json`
- Mais de 1 questão por subtópico (5 questões = 5 subtópicos diferentes)
- Enunciados com dupla negação ou construções ambíguas
- Opções com "todas as anteriores" ou "nenhuma das anteriores"
- Questões duplicando conteúdo já existente para a mesma `tema`

---

## 8. Checklist de Entrega por Lote

- [ ] Verificou `id` máximo atual antes de criar novos
- [ ] `tema` = `aula_id` exato (ex: `pmh_a3`)
- [ ] `materia` = sigla exata e `modulo` = número correto
- [ ] Exatamente 4 opções em cada questão, prefixadas com `A)`, `B)`, `C)`, `D)`
- [ ] `correta` é o índice (0–3), não a letra
- [ ] Explicação com ≥ 100 caracteres descartando opções incorretas
- [ ] Variedade de tipos de questão (mínimo 3 tipos diferentes)
- [ ] Distribuição de dificuldade: 1/3/1 (fácil/médio/difícil)
- [ ] Acentuação em português em todos os campos
- [ ] Arquivo salvo sem sobrescrever registros existentes
- [ ] Total de questões geradas para a aula: 5
