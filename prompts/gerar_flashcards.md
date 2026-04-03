# Guia de Geração de Flashcards — MedGradPlus

> Leia este arquivo antes de gerar qualquer flashcard.
> Quantidades por aula, metas e schedules ficam nos arquivos de agente — aqui são só as regras de qualidade.

---

## O que é um flashcard no MedGradPlus

Estilo Anki adaptado para medicina. Cada card tem:

- **Frente** — pergunta ou situação clínica
- **Verso** — resposta direta, curta, sem contexto
- **Explicação** — mecanismo, contexto clínico ou justificativa; texto secundário, menor e mais opaco na interface

A separação verso/explicação é intencional: o aluno vê a resposta rápida primeiro e decide se quer o aprofundamento.

---

## Formato JSON

```json
{
  "id": 123,
  "materia": "pmh",
  "frente": "O que o AMP sinaliza para a célula?",
  "verso": "Crise energética — ativa AMPK para acelerar o catabolismo.",
  "explicacao": "O acúmulo de AMP indica que ATP está sendo consumido mais rápido que produzido. A AMPK inibe vias anabólicas e acelera vias catabólicas (glicólise, beta-oxidação) para restaurar o estoque de ATP.",
  "tema": "pmh_a1",
  "dificuldade": 2,
  "tags": ["ampk", "amp", "regulacao-energetica"]
}
```

| Campo | Tipo | Regra |
|---|---|---|
| `id` | int | Sequencial global — nunca repetir; verificar max antes de criar |
| `materia` | string | Sigla exata (`pmh`, `bmf1`, `bcm1`, `mad1`...) |
| `frente` | string | Máximo 120 caracteres; pergunta direta ou situação clínica curta |
| `verso` | string | Máximo 120 caracteres; resposta direta — sem "a resposta é..." |
| `explicacao` | string | 1–3 frases; mecanismo, contexto clínico ou aplicação; pode ser vazio `""` nos cards mais simples |
| `tema` | string | Sempre o `aula_id` exato (`pmh_a1`, `bcm1_a5`) — nunca nome livre |
| `dificuldade` | int | 1 fácil / 2 médio / 3 difícil |
| `tags` | array | 2–4 tags, lowercase, sem acento, hífen para compostas |

---

## Verso — a regra mais importante

O verso deve ser respondível em 3 segundos de leitura.

**Certo:**
> "FADH₂ — entra no Complexo II, gera ~1,5 ATP."

**Errado:**
> "O FADH₂ é uma coenzima reduzida que, ao contrário do NADH que entra no Complexo I e gera 2,5 ATP, entra no Complexo II da cadeia transportadora de elétrons mitocondrial, gerando aproximadamente 1,5 ATP por molécula oxidada."

Isso vai para a `explicacao`, não para o `verso`.

---

## Frente — como formular

- **Específica** — evite "O que é X?"; prefira "Qual a função de X em Y?"
- **Não entrega a resposta** — "Por que o FADH₂ gera menos ATP que o NADH?" já diz que gera menos
- **Pode ser clínica** — "Paciente com intoxicação por cianeto. Por que o ATP cai tão rápido?"
- **Pode ser de localização** — "Onde ocorre a beta-oxidação?"
- **Pode ser de comparação** — "NADH vs FADH₂: qual gera mais ATP e por quê?"

---

## Dificuldade — critério objetivo

| Nível | Critério | Exemplo de frente |
|---|---|---|
| 1 — Fácil | Definição, nomenclatura, localização direta | "Onde ocorre a glicólise?" |
| 2 — Médio | Mecanismo, comparação, consequência | "Por que FADH₂ gera menos ATP que NADH?" |
| 3 — Difícil | Caso clínico integrado, detalhe de prova, erro clássico | "Paciente em sepse com lactato de 6 mmol/L. Qual via predomina e por quê?" |

---

## Explicação — quando usar e o que colocar

Use `explicacao` quando o verso por si só não fecha o raciocínio:

- Mecanismo bioquímico ou fisiológico por trás da resposta
- Correlação clínica que reforça o conceito
- Por que os distradores comuns estão errados
- Regra mnemônica ou analogia

Pode ser `""` (vazio) para cards de dificuldade 1 com resposta autoexplicativa.

---

## Tags — padrão

- Lowercase, sem acento: `acido-base`, `glicolise`, `atp`, `celula-b`
- Represente o conceito, não a aula: `mitocondria` não `pmh-a3`
- 2 a 4 tags por card; mais que isso vira poluição

---

## O que não gerar

- Verso com mais de 120 caracteres — se precisar de mais, é `explicacao`
- Frente ambígua com múltiplas respostas corretas
- Cards duplicados de conteúdo já existente na mesma `tema`
- `tema` com nome livre — sempre `aula_id` (`pmh_a1`, não `bioenergética`)
- Tags com acento ou maiúscula

---

## Como adicionar ao arquivo

Nunca sobrescreva o arquivo. Sempre leia, encontre o `max(id)`, adicione ao array, salve.

```python
import json
from pathlib import Path

path = Path("data/flashcards.json")
data = json.loads(path.read_text(encoding="utf-8"))
cards = data if isinstance(data, list) else data.get("flashcards", [])

max_id = max((c["id"] for c in cards), default=0)
novos = [...]  # novos cards com ids a partir de max_id + 1

cards.extend(novos)
result = cards if isinstance(data, list) else {**data, "flashcards": cards}
path.write_text(json.dumps(result, ensure_ascii=False, indent=2), encoding="utf-8")
```
