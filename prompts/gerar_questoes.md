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

## Meta obrigatória por aula (rodada atual)

- Gerar **10 questões por `aula_id`**.
- Distribuição fixa por lote:
  - **2** fáceis (`dificuldade: 1`)
  - **5** médias (`dificuldade: 2`)
  - **3** difíceis (`dificuldade: 3`)
- Proporção clínica (ver canônico): regra padrão **2 ou 3 `caso_clinico: true` por lote de 10** (~25%); para BMF (`bmf1`-`bmf4`), usar **3 ou 4** por lote (30-40%). Restante com `caso_clinico: false`; campo obrigatório em toda geração nova.
- Tamanho de enunciado:
  - **20%** das questões do lote (2/10) devem ser um pouco mais longas, sem prolixidade.
- Se houver bloco `extra`, ele deve permanecer estritamente no escopo da aula, sem repetição de superfície do bloco `material`.

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
  "caso_clinico": true,
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

Distribua a posição correta de forma equilibrada **em todo lote da aula** (10 ou 12 questões, ou 30 se legado):

- **Alvo: ~25% em cada letra** (`A`, `B`, `C`, `D`), ou seja `correta` 0/1/2/3 com contagem próxima (em lotes de 10, típico **2–3 vezes por letra**; em 12 questões, **3 vezes cada**).
- **Proibido** viés artificial (ex.: maioria das corretas em **B**).
- Embaralhar alternativas **depois** de redigir o conteúdo, conferir contagem e reajustar se necessário.

Evitar sequências longas e previsíveis da mesma letra correta.

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

Limite: máximo 2 questões negativas por lote de 30. Evite se possível — a Uninove usa pouco.

Regra crítica de estilo:
- Não escrever enunciados metatextuais ("na aula", "sobre o tema", "conforme o material").
- O enunciado deve avaliar conteúdo médico real (fisiologia, patologia, clínica, terapêutica), não o material didático em si.
- Não usar template genérico com troca mínima de substantivo entre questões.
- O nome da aula (`aula_id`) é só para indexação em `tema`, não para aparecer no enunciado.

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

Formato preferencial para integração do app:
- `explicacao_geral`: resumo curto do raciocínio da questão.
- `explicacoes_opcoes`: objeto com chaves `A`, `B`, `C`, `D`, cada uma com justificativa objetiva.
- Mesmo mantendo `explicacao` em texto, garantir que as 4 alternativas fiquem explicitamente justificadas.

---

## Tipos de questão — variar por lote

| Tipo | Quando usar |
|---|---|
| Caso clínico diagnóstico | Dif. 2 e 3; conecta sintoma → mecanismo |
| Localização | Dif. 1; "onde ocorre X?" |
| Comparação | Dif. 2; "A vs B — qual a diferença?" |
| Consequência patológica | Dif. 2 e 3; "o que ocorre quando X falta?" |
| Aplicação farmacológica | Dif. 3; "qual fármaco age neste mecanismo?" |

Mínimo 4 tipos diferentes por lote de 30 questões.

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
- Mais de 2 questões com a mesma posição de resposta correta em sequência
- Lote fora da faixa de `caso_clinico`: padrão 2-3/10; BMF 3-4/10
- Lote sem distribuição obrigatória **2/5/3** (fácil/média/difícil)
- Lote sem contagem correta de `caso_clinico` (padrão **2 ou 3** `true` por 10; BMF **3 ou 4** por 10, ver canônico)
- Lote sem **20% de enunciados mais longos** (2/10)
- Questões duplicando conteúdo já existente para a mesma `tema`
- Questões em formato-template repetido com troca mínima de palavras
- Caso clínico sem dado clínico concreto (idade, contexto, achado relevante)
- Repetir o mesmo conjunto de `opcoes` em duas ou mais questões do mesmo `aula_id`
- Repetir explicações-curinga iguais em várias questões do mesmo `aula_id`
- Explicação que não comenta especificamente o conteúdo da alternativa apresentada

---

## Fluxo obrigatório de execução (qualidade)

- Gerar **aula por aula** (não gerar disciplina/módulo inteiro de uma vez).
- Ao finalizar um `aula_id`:
  - validar formato e checklist;
  - revisar repetição e naturalidade textual;
  - só então seguir para o próximo `aula_id`.

### Validação antifalha (obrigatória antes de salvar)

Para cada `aula_id`, só salvar se passar em tudo:

1. `enunciado`: 10 distintos em 10 questões.
2. `opcoes`: cada questão com 4 alternativas distintas.
3. Conjunto de `opcoes`: 10 conjuntos distintos no lote.
4. Distratores: o mesmo texto não pode repetir em mais de 2 questões do lote.
5. `explicacao_geral`: deve variar entre questões e refletir foco específico da pergunta.
6. `explicacoes_opcoes`: cada letra com justificativa própria; proibido copiar a mesma frase para todas.
7. Sem metatexto em enunciado/opções/explicações (`aula`, `material`, `tema`).

Se falhar em qualquer item, descartar o lote e refazer.
