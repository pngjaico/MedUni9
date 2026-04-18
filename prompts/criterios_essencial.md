# Critérios de Essencialidade — MedGradPlus

> **Versão:** 1.0 | **Data:** 2026-04-18  
> **Referência:** `AGENTS.md`, `prompts/gerar_questoes.md`

---

## O que é uma questão `essencial: true`?

Uma questão marcada como essencial deve aparecer na aba **"Essenciais"** do app — o conjunto mínimo e insubstituível que o aluno precisa dominar para passar na prova daquela aula. É o núcleo, não o aprofundamento.

---

## Os 5 Critérios (todos obrigatórios)

| # | Critério | Teste prático |
|---|----------|---------------|
| **1** | **Cobre conceito-âncora da aula** | Se o aluno errar, perde uma ideia central da qual o restante da aula depende |
| **2** | **Presente no material da aula** | O `.md` correspondente ensina explicitamente o conceito testado |
| **3** | **Alta recorrência / cobrança clássica** | Tema cai em provas Uninove, concursos de residência ou é considerado "básico clínico" |
| **4** | **Distingue quem estudou de quem não estudou** | Dificuldade 1 (definitória), 2 (aplicada) ou 3 (raciocínio) — não é pegadinha nem trivialidade óbvia |
| **5** | **Enunciado autocontido** | Resolve-se só com o conteúdo do `.md` da aula, sem exigir conhecimento externo avançado |

**Falha em qualquer critério → `essencial: false`** (a questão permanece em "Todas")

---

## Meta de quantidade por aula

| Tipo de aula | Meta de essenciais |
|---|---|
| Aula teórica (conteúdo ativo) | **5–7** |
| Aula prática/simulada | **3–5** (menor volume de teoria) |
| Aula de extensão / relatório | **0–3** (apenas se houver conceito testável) |

---

## Mix de dificuldade alvo

Para cada aula de 5–7 essenciais:

| Dificuldade | Qtd. esperada | O que testa |
|---|---|---|
| **1 — Fácil** (definitória) | 1–2 | Conceito básico, nomenclatura, definição fundamental |
| **2 — Média** (aplicada) | 2–3 | Mecanismo, interpretação, correlação clínica simples |
| **3 — Difícil** (raciocínio) | 1–2 | Caso clínico, diferencial, integração de conceitos |

---

## O que NÃO é essencial

- Detalhe numérico ou memorístico sem aplicação clínica (ex: valores exatos de referência laboratorial que variam entre laboratórios)
- Questão que testa uma exceção rara ou curiosidade
- Questão que repete o mesmo mecanismo de outra essencial da mesma aula (redundância)
- Questão de aula prática sem conceito teórico testável
- Qualquer questão com `caso_clinico: false` que também seja dif=1 **e** não cubra conceito-âncora (trivialidade dupla)

---

## Regra de commit

Ao alterar o campo `essencial` de qualquer questão, o commit deve conter:

```
fix(essenciais) <aula_id>: promove/rebaixa N questões

Critérios: <listar qual dos 5 critérios foi violado ou atendido>
```

---

## Referência rápida de auditoria por aula

Para cada aula:
1. Listar os conceitos-âncora do `.md` correspondente
2. Mapear qual essencial cobre qual conceito-âncora
3. Identificar: gaps (conceito sem essencial) e redundâncias (dois essenciais no mesmo conceito)
4. Aplicar os 5 critérios individualmente em cada questão da lista
5. Ajustar para a meta de 5–7 com o mix de dificuldade correto
