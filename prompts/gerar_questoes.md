# Guia de Geração de Questões — MedGradPlus

## Prioridade de uso

Este arquivo é complementar.

Documento canônico para geração de questões e flashcards:

- `prompts/gerar_questoes_flashcards.md`

Se houver conflito entre regras, o documento canônico prevalece.

> Leia este arquivo antes de gerar qualquer questão.
> Quantidades por aula e schedules ficam nos arquivos de agente.

---

## Veredito sobre as questões existentes

Análise de 101 questões do banco atual (bcm1, bmf1, sus):

**O que está bom:**
- 51% têm caso clínico — alinhado com o estilo Uninove
- Enunciados com média de 178 chars — tamanho adequado
- Explicações com média de 244 chars — detalhe suficiente
- Formato JSON consistente e completo

**O que precisa corrigir em novas gerações:**

| Problema | Dado | Impacto |
|---|---|---|
| Posição da correta enviesada | B = 47%, D = 6% | Aluno marca B sempre e acerta ~metade |
| `tema` inconsistente | Mistura `aula_id` com nomes livres | Filtragem por aula quebra |
| Pouca dificuldade 3 | Só 8% difícil | Casos integrados são os mais cobrados em prova |

**Conclusão:** qualidade de conteúdo boa, problemas são estruturais. As novas questões devem manter o estilo clínico e corrigir os três pontos acima.

---

## Formato JSON

```json
{
  "id": 102,
  "materia": "pmh",
  "enunciado": "Paciente de 58 anos com histórico de alcoolismo crônico apresenta encefalopatia e oftalmoplegia. A deficiência de qual vitamina explica o quadro e por qual mecanismo metabólico?",
  "opcoes": [
    "A) Vitamina B1 (tiamina) — cofator essencial da piruvato desidrogenase e alfa-cetoglutarato desidrogenase",
    "B) Vitamina B12 — necessária para síntese de DNA nas células nervosas",
    "C) Vitamina B6 (piridoxina) — cofator nas reações de transaminação",
    "D) Vitamina C — antioxidante protetor do sistema nervoso central"
  ],
  "correta": 0,
  "explicacao": "A Síndrome de Wernicke é causada por deficiência de tiamina (B1), cofator do complexo piruvato desidrogenase. Sem tiamina, a glicose não entra no ciclo de Krebs — o encéfalo, dependente exclusivo de glicose, sofre disfunção aguda. B12 causa neuropatia subaguda, não encefalopatia aguda. B6 e C não causam este quadro.",
  "tema": "pmh_a3",
  "dificuldade": 3,
  "modulo": 1
}
```

| Campo | Tipo | Regra |
|---|---|---|
| `id` | int | Sequencial global — verificar max antes |
| `materia` | string | Sigla exata (`pmh`, `bmf1`, `sus`...) |
| `enunciado` | string | 60–300 chars; caso clínico quando possível |
| `opcoes` | array[4] | Exatamente 4, sempre prefixadas `A)`, `B)`, `C)`, `D)` |
| `correta` | int | Índice 0–3 (0=A, 1=B, 2=C, 3=D) — não é a letra |
| `explicacao` | string | Mín. 100 chars; explica a correta E descarta ≥2 incorretas |
| `tema` | string | Sempre `aula_id` exato (`pmh_a3`) — nunca nome livre |
| `dificuldade` | int | 1 fácil / 2 médio / 3 difícil |
| `modulo` | int | Número do módulo |

---

## Posição da correta — regra obrigatória

Distribua a posição correta de forma equilibrada **dentro de cada lote gerado**:

Para cada 4 questões: uma correta em A, uma em B, uma em C, uma em D.
Para 5 questões: distribua 4 posições diferentes e repita a de maior ausência.

**Nunca** concentre mais de 2 questões com a mesma posição correta em sequência.

---

## Dificuldade — critério objetivo

| Nível | Critério |
|---|---|
| 1 — Fácil | Definição direta, nomenclatura, "qual célula faz X?" — resposta no material sem interpretação |
| 2 — Médio | Mecanismo, comparação entre conceitos, consequência de alteração — requer raciocínio |
| 3 — Difícil | Caso clínico com múltiplas variáveis, integração entre vias/sistemas, detalhes específicos de prova |

---

## Enunciado — como construir

**Caso clínico (preferido para dif. 2 e 3):**
> "Paciente de [idade] com [contexto]. [Dado laboratorial ou clínico]. [Pergunta direta]."

**Conceitual (aceitável para dif. 1):**
> "Qual enzima catalisa [etapa específica] na [via]?"

**Negativa — usar com extrema parcimônia:**
> "Qual das alternativas NÃO é característica de X?"

Limite: máximo 1 questão negativa por lote de 5. Evite se possível — a Uninove usa pouco.

---

## Distradores — como construir

Cada distrator deve ser um erro que alunos realmente cometem. Tipos:

| Tipo de distrator | Exemplo |
|---|---|
| Conceito correto mas contexto errado | "Osteoclastos" quando a resposta é "osteoblastos" |
| Parte do processo, não o todo | "Piruvato desidrogenase" quando a pergunta é sobre a via completa |
| Confusão de nomenclatura | "FADH₂" quando a resposta é "NADH" |
| Conceito de matéria adjacente | Vitamina B12 quando a resposta é B1 |

**Nunca:**
- "Todas as anteriores" ou "Nenhuma das anteriores"
- Opção obviamente absurda (o aluno elimina sem raciocínio)
- Opções com comprimento muito diferente entre si (entrega a correta visualmente)

---

## Explicação — o que deve conter

1. Por que a opção correta está certa (mecanismo, não só "é isso")
2. Descarte de ao menos 2 distradores com justificativa específica
3. Referência ao conteúdo clínico quando possível

Tamanho: 2–4 frases. Não deve ser maior que o enunciado.

---

## Tipos de questão — variar por lote

| Tipo | Quando usar |
|---|---|
| Caso clínico diagnóstico | Dif. 2 e 3; conecta sintoma → mecanismo |
| Localização | Dif. 1; "onde ocorre X?" |
| Comparação | Dif. 2; "A vs B — qual a diferença?" |
| Consequência patológica | Dif. 2 e 3; "o que ocorre quando X falta?" |
| Aplicação farmacológica | Dif. 3; "qual fármaco age neste mecanismo?" |

Mínimo 3 tipos diferentes por lote de 5 questões.

---

## Como adicionar ao arquivo

Nunca sobrescreva. Leia, encontre max(id), adicione, salve.

```python
import json
from pathlib import Path

path = Path("data/questoes.json")
data = json.loads(path.read_text(encoding="utf-8"))
questoes = data if isinstance(data, list) else data.get("questoes", [])

max_id = max((q["id"] for q in questoes), default=0)
novas = [...]  # novas questões com ids a partir de max_id + 1

questoes.extend(novas)
result = questoes if isinstance(data, list) else {**data, "questoes": questoes}
path.write_text(json.dumps(result, ensure_ascii=False, indent=2), encoding="utf-8")
```

---

## O que não gerar

- `tema` com nome livre — sempre `aula_id` (`pmh_a3`, não `"Glicólise"`)
- Mais de 1 questão sobre o mesmo subtópico por lote
- Dupla negação no enunciado
- Mais de 2 questões com a mesma posição de resposta correta no mesmo lote
- Questões duplicando conteúdo já existente para a mesma `tema`
