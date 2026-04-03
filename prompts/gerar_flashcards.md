# Guia Completo: Geração de Flashcards — MedUni9

> Guia único e autoritativo para gerar flashcards do app MedUni9.
> Leia por completo antes de gerar qualquer flashcard.

---

## 1. Contexto

**App:** MedUni9 — PWA de estudos de medicina para alunos da Uninove (1º semestre).
**Flashcards:** estilo Anki — frente/verso com dificuldade e tags. Persistidos em `data/flashcards.json`.
**Meta por aula:** 12 flashcards cobrindo os conceitos essenciais da aula.

---

## 2. Verificação Obrigatória Antes de Gerar

**Antes de escrever qualquer flashcard**, confirme em `data/materias.json` e `data/flashcards.json`:

1. O `id` exato da aula (ex: `pmh_a3`)
2. O `tema` da aula (ex: "Glicólise e Gliconeogênese")
3. O número do `modulo` (ex: `1`)
4. A `sigla` da matéria (ex: `pmh`)
5. Quantos flashcards já existem para essa aula (`tema == aula_id` no JSON)
6. Qual o maior `id` atual no arquivo — o próximo começa em `max_id + 1`

---

## 3. Formato JSON Obrigatório

Cada flashcard segue este schema exato:

```json
{
  "id": 123,
  "materia": "pmh",
  "frente": "Pergunta direta ou situação clínica curta",
  "verso": "Resposta completa em 1-3 frases, sem ambiguidade",
  "tema": "pmh_a3",
  "dificuldade": 2,
  "tags": ["glicólise", "enzimas", "atp"]
}
```

### Campos obrigatórios

| Campo | Tipo | Regra |
|---|---|---|
| `id` | int | Sequencial global — nunca repetir |
| `materia` | string | Sigla exata da matéria (ex: `pmh`, `bmf1`, `bcm1`) |
| `frente` | string | Pergunta ou situação clínica — máximo 120 caracteres |
| `verso` | string | Resposta direta — máximo 300 caracteres |
| `tema` | string | Sempre igual ao `aula_id` (ex: `pmh_a3`) |
| `dificuldade` | int | 1 = fácil, 2 = médio, 3 = difícil |
| `tags` | array | 2–5 tags lowercase, sem acento, com hífen se composto |

---

## 4. Regras de Qualidade

### Frente (pergunta)
- **Direta e específica** — evite "O que é..." genérico; prefira "Qual enzima catalisa..."
- **Pode ser clínica** — "Paciente com icterícia e bilirrubina indireta elevada. Qual via está bloqueada?"
- **Sem resposta embutida** — a frente não pode sugerir a resposta
- **Sem abreviações desconhecidas** na frente — escreva por extenso

### Verso (resposta)
- **Completo mas conciso** — 1 a 3 frases
- **Sem "a resposta é..."** — vá direto ao ponto
- **Inclua o mecanismo** quando relevante (ex: "porque inibe o complexo I mitocondrial")
- **Português correto** — acentuação completa obrigatória

### Distribuição por dificuldade por aula
- ~4 flashcards dificuldade 1 (conceitos básicos, definições)
- ~5 flashcards dificuldade 2 (mecanismos, comparações, aplicações)
- ~3 flashcards dificuldade 3 (casos clínicos, integração, detalhes de prova)

---

## 5. Como Adicionar ao Arquivo

**Nunca sobrescreva o arquivo inteiro.** Sempre:

1. Leia `data/flashcards.json` completo
2. Encontre o maior `id` atual
3. Adicione os novos flashcards ao array existente com ids sequenciais
4. Salve o arquivo completo com encoding UTF-8

```python
import json
from pathlib import Path

path = Path("data/flashcards.json")
data = json.loads(path.read_text(encoding="utf-8"))
cards = data if isinstance(data, list) else data.get("flashcards", [])

max_id = max((c["id"] for c in cards), default=0)
novos = [...]  # lista de novos flashcards com ids iniciando em max_id + 1

cards.extend(novos)
result = cards if isinstance(data, list) else {**data, "flashcards": cards}
path.write_text(json.dumps(result, ensure_ascii=False, indent=2), encoding="utf-8")
```

---

## 6. O que NÃO gerar

- Flashcards sobre temas não cobertos na aula (olhar `descricao` em `materias.json`)
- Frentes ambíguas que admitem múltiplas respostas corretas
- Versos com mais de 3 frases — se precisar de mais, divida em dois cards
- Flashcards duplicando conteúdo já existente para a mesma `tema`
- Tags com acento ou maiúscula (ex: use `acido-base` não `Ácido-Base`)

---

## 7. Fontes por Matéria

| Matéria | Fontes principais |
|---|---|
| PMH | Harper — Bioquímica Ilustrada; Lehninger |
| BMF1/2 | Gray's Anatomy; Guyton & Hall |
| BCM1 | Alberts — Biologia Molecular da Célula |
| MAD1/2 | Janeway — Imunobiologia; Murray — Microbiologia Médica |
| SUS | Documentos do MS; Starfield — Atenção Primária |

---

## 8. Checklist de Entrega por Lote

- [ ] Verificou `id` máximo atual antes de criar novos
- [ ] `tema` = `aula_id` exato (ex: `pmh_a3` não `pmh_glicólise`)
- [ ] `materia` = sigla exata da matéria
- [ ] Frentes com máximo 120 caracteres
- [ ] Versos com máximo 300 caracteres
- [ ] Distribuição de dificuldade: ~4/5/3 (fácil/médio/difícil)
- [ ] Tags sem acento, lowercase, com hífen
- [ ] Acentuação em português em todas as frentes e versos
- [ ] Arquivo salvo sem sobrescrever registros existentes
- [ ] Total de flashcards gerados para a aula: 12
