# PLANO MESTRE — Ciclo Clínico MedGradPlus (v2.1)

> **Para quem entra agora (Codex / Antigravity / outro Claude):** este é o **único arquivo que você precisa abrir primeiro**. Ele consolida estado, fila de trabalho, sistema de qualidade, agentes recomendados, riscos, rollback e roadmap futuro. Atualiza-se a cada etapa concluída.
>
> **Para começar HOJE:** abra primeiro [`INICIO_OPERACIONAL.md`](INICIO_OPERACIONAL.md) — checklist de 1 página com plano de 7 dias. Volte aqui depois.
>
> **Última atualização:** 2026-05-07 — sessão de revisão crítica + bloco-por-aula (Claude Opus 4.7).
> **Versão:** 2.1 (sequência interna do bloco-por-aula + Etapa 0.5 extração de legado + integração com app via questoes_antigas.json).
>
> **Histórico de versões:**
> - 1.0 (2026-05-07 manhã) — criação inicial.
> - 2.0 (2026-05-07 tarde) — auditoria crítica, sistema de qualidade em camadas, aula piloto, linter v3, reorganização de pasta legado, risk register, rollback plan, roadmap Mod 7+, integração de fluxos no app.
> - 2.1 (2026-05-07 noite) — sequência interna do bloco-por-aula (material → linter → flashcards → questões → mapeamento) + Etapa 0.5 (extração de legado) + script `scripts/inventariar_legado.py` rodado (1.796 arquivos, 112 candidatos).
> - 2.2 (2026-05-07 fim de tarde) — **decisões do usuário aplicadas:**
>   1. **PE (Projeto Extensionista) está FORA DE ESCOPO** — não gerar material, flashcards ou questões para `pe1`, `pe3`, `pe4`, `pe5`, `pe6`, `pe8`. Trata como "futuro indefinido".
>   2. **Tag visual `[PROVA UNI9 ...]` removida do enunciado.** Questão extraída do legado fica limpa. A origem fica em campo de metadata (`fonte_legado`), não no texto da pergunta.
>   3. **Arquivo separado para legado clínico:** `data/questoes_clinico_legado.json` (não mexer em `data/questoes_antigas.json` que é do ciclo básico).
>   4. **Sem deploy Firebase até o ciclo clínico inteiro acabar.** Apenas commits git locais. Deploy ao final, em lote único, após aprovação de todas as 104 aulas.
>   5. **Validação de planos de ensino concluída** — 7 disciplinas (CM5/CC5/FARM/CM6/CIR6/MFC/TCAR) batem com `materias.json` em quantidade e nome de aulas.

---

## ÍNDICE

- [0. Antes de qualquer coisa](#0-antes-de-qualquer-coisa--leia-nesta-ordem)
- [1. Estado atual do app](#1-estado-atual-do-app--fotografia-honesta)
- [2. Auditoria crítica do plano v1.0](#2-auditoria-crítica--erros-do-v10-corrigidos-no-v20)
- [3. Sistema de qualidade em 5 camadas](#3-sistema-de-qualidade--5-camadas)
- [4. Aula piloto — gold standard antes de bulk](#4-aula-piloto--gold-standard-antes-de-bulk)
- [5. Inventário de planos de ensino](#5-invent%C3%A1rio-de-planos-de-ensino-fonte-prim%C3%A1ria-do-conte%C3%BAdo)
- [6. Pendências do Ciclo Básico](#6-pend%C3%AAncias-do-ciclo-b%C3%A1sico)
- [7. Persona, prompt e fontes](#7-persona-prompt-v3-e-fontes--refer%C3%AAncia-r%C3%A1pida)
- [8. Etapas — fila de trabalho](#8-etapas--fila-de-trabalho-com-crit%C3%A9rios-de-aceite)
- [9. Risk register & rollback](#9-risk-register--rollback-plan)
- [10. Métricas de qualidade](#10-m%C3%A9tricas-de-qualidade)
- [11. Integração com o app](#11-integra%C3%A7%C3%A3o-com-o-app--fluxo-end-to-end)
- [12. Roadmap futuro](#12-roadmap-futuro--depois-do-mod-56)
- [13. Como atualizar este plano](#13-como-atualizar-este-plano-regra-obrigat%C3%B3ria)
- [14. Bloqueadores ativos](#14-bloqueadores-ativos)
- [15. Log de execução](#15-log-de-execu%C3%A7%C3%A3o)
- [16. Comandos úteis](#16-comandos-%C3%BAteis-para-o-pr%C3%B3ximo-agente)
- [17. Para Codex / Antigravity](#17-para-codex--antigravity--outro-claude)

---

## 0. Antes de qualquer coisa — leia nesta ordem

1. [`AGENTS.md`](AGENTS.md) — regras de operação (browser proibido, prompts canônicos, encoding).
2. [`PROJECT_CONTEXT.md`](PROJECT_CONTEXT.md) — módulos, disciplinas, fluxo de dados.
3. [`prompts/persona_medgradplus.md`](prompts/persona_medgradplus.md) — voz, macetes, tom de residência.
4. [`prompts/gerar_materiais_apoio_v3.md`](prompts/gerar_materiais_apoio_v3.md) — estrutura técnica do `.md` clínico, anti-encode/tabelas/negrito.
5. [`prompts/agente_revisor_clinico.md`](prompts/agente_revisor_clinico.md) — revisor camada 2 (correção médica).
6. [`data/macetes_medgradplus.json`](data/macetes_medgradplus.json) — biblioteca canônica de macetes.
7. [`data/fontes_padrao.json`](data/fontes_padrao.json) — fontes confiáveis por área.
8. **Este arquivo** — estado, fila, ordem.

Para **questões e flashcards** continue lendo `prompts/gerar_questoes.md` e `prompts/gerar_flashcards.md` (continuam válidos).
Para **reorganização de pasta legado**, ver [`docs/REORG_LEGADO_CICLO_CLINICO.md`](docs/REORG_LEGADO_CICLO_CLINICO.md).

---

## 1. Estado atual do app — fotografia honesta

### 1.1 Ciclo Básico (Módulos 1–4) — status

| Módulo | Disciplina | Aulas | Materiais `.md` | Questões | Flashcards | Status |
|---|---|---|---|---|---|---|
| 1 | **sus** | 9 | 9 | 636 | 172 | ✅ Sólido |
| 1 | **semiologia1** | 9 | 9 | 192 | 177 | ✅ Sólido |
| 1 | **bmf1** | 22 | 22 | 306 | 319 | 🟡 a3–a22 podem precisar revisão de formato |
| 1 | **pmh** | 14 | 14 | 411 | 209 | 🟡 a1–a14 sem breadcrumb / acentuação inconsistente |
| 1 | **pe1** | 7 (inativo) | 7 | — | — | 🔵 Fora de escopo |
| 2 | **bmf2** | 16 | 16 | 270 | 149 | ✅ Sólido |
| 2 | **semiologia2** | 9 | 9 | 141 | 61 | ✅ Sólido |
| 2 | **mad1** | 24 | 24 | 397 | 46 | 🟡 Flashcards baixos |
| 2 | **bcm1** | 21 | 21 | 160 | 47 | 🟡 Flashcards baixos |
| 2 | **indicadores** | 11 | 11 | 167 | 134 | ✅ Sólido |
| 2 | **ds** | 3 | 3 | 118 | — | 🟡 Conteúdo curto (verificar completude) |
| 3 | **bmf3** | 22 | 22 | 229 | 170 | ✅ Sólido |
| 3 | **semiologia3** | 6 | 6 | 136 | 10 | 🟡 Flashcards muito baixos |
| 3 | **mad2** | 20 | 20 | 210 | 113 | ✅ Sólido |
| 3 | **fisiopato3 / fp3** | 15 | 15 | 269 | — | 🟡 Verificar duplicação |
| 3 | **saude_trabalhador / st** | 8 | 8 | 49 | 97 | 🟡 Questões baixas |
| 3 | **pe3** | 4 (inativo) | 0 | — | — | 🔵 Fora de escopo |
| 4 | **bmf4** | 18 | 18 | 206 | 427 | ✅ Sólido |
| 4 | **semiologia4 / semio4** | 10 | 10 | 147 | 231 | ✅ Sólido |
| 4 | **fisiopato_farmaco / ff4** | 14 | 14 | 108 | 169 | ✅ Sólido |
| 4 | **bioestatistica / bioe** | 12 | 12 | 109 | 134 | ✅ Sólido |
| 4 | **pe4** | 7 (inativo) | 0 | — | — | 🔵 Fora de escopo |

**Total Ciclo Básico:** ~227 aulas, ~225 materiais `.md`, ~4.030 questões, ~2.665 flashcards.

### 1.2 Ciclo Clínico (Módulos 5–6) — status

| Módulo | Disciplina | Aulas | Materiais `.md` | Questões | Flashcards | Status |
|---|---|---|---|---|---|---|
| 5 | **clinica_medica5 (CM5)** | 21 | 0 | 0 | 0 | 🔴 Crítico — gerar do zero |
| 5 | **clinica_cirurgica5 (CC5)** | 10 | 0 | 0 | 0 | 🔴 Crítico — gerar do zero |
| 5 | **farmaco_aplicada (FARM)** | 12 | 1 (`farm_a1`, v2) | 39 | 0 | 🔴 Crítico — gerar 11 + revisar a1 |
| 6 | **clinica_medica6 (CM6)** | 24 | 24 (v2) | 0 | 0 | 🟡 Elevar ao v3 |
| 6 | **mfc6 (MFC)** | 6 | 6 (v2) | 0 | 0 | 🟡 Elevar ao v3 |
| 6 | **cirurgia_ortopedia (CIR6)** | 21 | 21 (v2) | 1 | 0 | 🟡 Elevar ao v3 |
| 6 | **tecnica_operatoria (TO/TCAR)** | 10 | 10 (v2) | 21 | 59 | 🟡 Elevar ao v3 |

**Total Ciclo Clínico:** 104 aulas, 62 materiais existentes (todos em v2), ~62 questões, ~80 flashcards. **Gap: 43 a gerar (Mod 5) + 62 a elevar (Mod 6) = 105 entregas.**

### 1.3 Módulo 8 (Internato 4º ano)

| Disciplina | Aulas | Materiais | Status |
|---|---|---|---|
| **eci8** Emergências Cirúrgicas | 30 | 0 | 🔵 Etapa 6 |
| **ecl8** Emergências Clínicas | 16 | 0 | 🔵 Etapa 6 |
| **sm8** Saúde Mental (Neuro+Psiq) | 28 | 0 | 🔵 Etapa 6 |
| **pe8** Projeto Extensionista 8 | 6 | 0 | 🔵 Provavelmente fora de escopo |

### 1.4 Infraestrutura existente (já no projeto, reaproveitar)

| Recurso | Caminho | Uso |
|---|---|---|
| Linter v2 (estrutura básica) | `scripts/validate_materiais_md.mjs` | Valida Pré-Prova, Síntese, Frase-âncora, ordem |
| **Linter v3 (clínico)** | `scripts/lint_material_v3.py` | **Novo.** Encoding, persona, macetes, tabelas, mini quiz |
| Validador de flashcards | `scripts/validate_flashcards_cloze.cjs` | Cloze deletion |
| Validador de matérias | `scripts/validate_materias.py` | JSON de disciplinas |
| Analisador de cobertura | `scripts/analisar_cobertura.py` | Métricas por aula |
| Esquema de refs | `data/refs/<aula_id>.refs.json` | Livros, justificativa, pontos de prova |
| Logs de agentes | `data/agent_logs/` | Status, pendentes, aprovações |
| Pipeline de auditoria | `scripts/apply_audit_batch_*.py` | Batches já rodados (>30) |
| **Macetes canônicos** | `data/macetes_medgradplus.json` | **Novo.** Biblioteca usada pelo revisor |
| **Fontes confiáveis** | `data/fontes_padrao.json` | **Novo.** Biblioteca de livros/diretrizes |

---

## 2. Auditoria crítica — erros do v1.0 corrigidos no v2.0

> **Mea culpa:** o plano v1.0 tinha problemas reais. Listo aqui o que estava errado e como o v2.0 corrige.

| # | Erro do v1.0 | Correção no v2.0 |
|---|---|---|
| E1 | Bloqueador "CC5 sem plano" era **falso** — o PDF está na pasta. | Inventário de planos refeito (Seção 5). Bloqueador removido. |
| E2 | Estimativa de **292h** assumia agente perfeito; ignorava retrabalho. | Adicionado fator de retrabalho 1.4× (Seção 8) → ~408h realistas. |
| E3 | Não havia **definition of done** mensurável por aula. | Linter v3 (`scripts/lint_material_v3.py`) com checklist automatizada. |
| E4 | Não havia **revisão clínica** entre geração e publicação. | Sistema de qualidade em 5 camadas (Seção 3). |
| E5 | Macetes podiam ser **inventados** sem validação. | Biblioteca `data/macetes_medgradplus.json` + Camada 2 (revisor) valida cada um. |
| E6 | Fontes podiam ser **chutadas** ("Cecil 25ª ed."). | Biblioteca `data/fontes_padrao.json` define edições válidas. |
| E7 | Não havia **aula piloto** antes do bulk de 105 entregas. | Etapa 1 nova (Seção 8): gerar `cm5_a1` como gold standard. |
| E8 | Pasta legado **bagunçada** (3 versões do mesmo semestre, encoding ruim). | Plano de reorganização em [`docs/REORG_LEGADO_CICLO_CLINICO.md`](docs/REORG_LEGADO_CICLO_CLINICO.md). |
| E9 | Não havia **rollback plan** para aulas com erro grave. | Risk register (Seção 9) + procedimento de reversão. |
| E10 | Não havia plano para **Mod 7** ou continuidade pós-Mod 6. | Roadmap Seção 12 (Mod 7, 9, simulados, app features, sustentabilidade). |
| E11 | Não havia **integração end-to-end** clara (geração → app). | Fluxo na Seção 11. |
| E12 | **Versionamento** das aulas geradas era implícito (só git). | Adicionar header YAML com `versao_v3` em cada `.md`. |
| E13 | Não havia **teste de persona** mensurável. | Linter v3 conta callouts de persona; +revisor humano sample. |
| E14 | Estratégia de **bancos públicos** era genérica. | Etapa 5 detalhada com 7 bancos específicos + processo manual. |
| E15 | Etapa 5 (flashcards/questões) listada **sequencialmente** após 105 aulas. | Reorganizada como **paralela** por aula, em sub-fluxo. |

---

## 3. Sistema de qualidade — 5 camadas

> Cada aula passa por 5 camadas antes de aparecer no app. Falha em qualquer camada → retorna para a anterior.

```
+------------------+   +------------------+   +------------------+
| Camada 1         |   | Camada 2         |   | Camada 3         |
| GERADOR          |-->| REVISOR CLÍNICO  |-->| CURADOR ESTÉTICO |
| Agente IA        |   | Agente IA        |   | Agente IA        |
| (prompt v3)      |   | (revisor.md)     |   | (negritos.md)    |
+------------------+   +------------------+   +------------------+
                                                     |
                                                     v
+------------------+   +------------------+   +------------------+
| App (publicado)  |<--| Camada 5         |<--| Camada 4         |
| Firebase Hosting |   | APROVAÇÃO HUMANA |   | LINTER v3        |
|                  |   | Você (sample)    |   | Script Python    |
+------------------+   +------------------+   +------------------+
```

### Camada 1 — Geração

- **Quem:** agente IA (Claude/Codex) com prompt v3.
- **Inputs:** plano de ensino, persona, prompt técnico, materiais legado.
- **Output:** `.md` em `materiais/moduloN/<materia>/<aula>.md` + espelho em `data/materiais/<materia>/<aula>.md`.
- **Regras:** 1 aula por vez. Sem batch. Header YAML com `versao_v3: 3.0.0`.

### Camada 2 — Revisão clínica

- **Quem:** agente IA com prompt [`prompts/agente_revisor_clinico.md`](prompts/agente_revisor_clinico.md).
- **Verifica:** doses, condutas, padrão-ouro, diretrizes vigentes, macetes consagrados.
- **Output:** relatório `data/agent_logs/pendentes/revisao_clinica_<aula>_<ts>.json` com `status: approved | approved_with_notes | rejected`.
- **Falha:** retorna para Camada 1 com lista numerada de correções.

### Camada 3 — Curadoria estética

- **Quem:** agente IA com prompt [`prompts/padronizacao_negritos.md`](prompts/padronizacao_negritos.md).
- **Verifica:** densidade de negrito (12–18% corpo, 35–45% Pré-Prova), 1ª coluna de tabela em negrito, tabelas sem `<br>`.
- **Output:** patch ou aprovação.

### Camada 4 — Linter automático

- **Quem:** `python scripts/lint_material_v3.py --aula <aula_id>`.
- **Verifica:** 13 categorias (encoding, caracteres proibidos, estrutura, tamanho, macetes assinados, persona callouts, vinheta 3 atos, mini quiz N e formato, tabelas, fontes, espelhamento).
- **Output:** stdout + JSON em `data/agent_logs/lint_v3_<ts>.json`.
- **Exit code:** 0 (ok), 1 (errors), 2 (warnings).

### Camada 5 — Aprovação humana (sample)

- **Quem:** você (mantenedor).
- **Frequência:** 1 a cada 5 aulas, ou aleatória 20%.
- **Verifica:** voz da persona soa correta? Vinheta clínica é boa? Ficaria envergonhado de mostrar para um R3?
- **Output:** aprovação ou rejeição com nota qualitativa.

### Métricas SLO da pipeline

| Métrica | Alvo |
|---|---|
| % aulas Camada 1 → Camada 2 sem retrabalho | ≥ 80% |
| % aulas Camada 2 → Camada 3 sem retrabalho | ≥ 90% |
| % aulas Camada 4 → ok no primeiro lint | ≥ 95% |
| % aulas Camada 5 → aprovadas pelo humano | ≥ 85% |

Se algum cair abaixo do alvo, **pausar geração** e ajustar o prompt da camada anterior.

---

## 4. Aula piloto — gold standard antes de bulk

> **Princípio:** antes de gerar 105 entregas, gerar **UMA** com qualidade máxima e usar como referência. Se não conseguimos uma, não temos como fazer 105.

### 4.1 Escolha da aula piloto

**Aula:** `cm5_a1 — Hipertensão Arterial Sistêmica`.

**Por quê:**
- Alta cobrança em prova (P1 do 5° semestre + residência).
- Tema com **diretriz brasileira viva** (SBC HAS 2020).
- Macetes consagrados (CHA₂DS₂-VASc não, mas crises hipertensivas têm vários).
- Vinheta clínica natural (paciente com PA descontrolada na emergência).
- Material legado disponível (PDF do plano, resumos antigos).

### 4.2 Critérios de "gold standard"

A aula piloto **só é aprovada** quando:

- [ ] Passa em **todas as 5 camadas** (geração, revisão clínica, curadoria, linter, aprovação humana).
- [ ] Linter v3 retorna `ok` (zero errors, zero warnings).
- [ ] Você (mantenedor) leu de cabo a rabo e aprovou.
- [ ] **Comparada lado-a-lado** com material da MedEvo (Estratégia Saúde da Família ou Abdome Agudo) e está em padrão **igual ou superior**.
- [ ] Você consegue mostrar para um R3 sem se envergonhar.

### 4.3 O que produzir junto com a aula piloto

- O `.md` da aula em si.
- 12 flashcards (`data/flashcards.json`) — também no padrão MedGradPlus.
- 5 questões inéditas (`data/questoes.json`) com explicações no estilo MedGradPlus.
- 3–5 questões públicas mapeadas (`data/refs/cm5_a1.refs.json` com seção nova `questoes_publicas`).
- Captura de tela do app renderizando — para conferir que a render bate com o esperado (tabelas, callouts, mini quiz).

### 4.4 Tempo estimado piloto

- Camada 1 (geração): 2h.
- Camada 2 (revisão clínica): 1h.
- Camada 3 (curadoria): 30 min.
- Camada 4 (linter): 5 min.
- Camada 5 (aprovação humana): 30–60 min.
- Iterações de retrabalho esperadas: 1–2.

**Total:** 4–6h de trabalho corrido.

### 4.5 Após a piloto aprovada

- Salvar como **`piloto/cm5_a1.md`** no repositório (referência).
- Adicionar entrada no top de [`prompts/gerar_materiais_apoio_v3.md`](prompts/gerar_materiais_apoio_v3.md): "**Imite cm5_a1 — esta é a referência canônica.**".
- Liberar para Camada 1 começar bulk (Etapa 2 do plano).

---

## 4-bis. Bloco-por-aula — sequência interna (contrato)

> **Como cada agente processa 1 aula. Ordem fixa, não-negociável.** Esta é a unidade de trabalho do bulk.

```
┌────────────────────────────────────────────────────────────────────┐
│ Bloco aula <X>                                                     │
│                                                                    │
│  A. Material .md  ─┐                                              │
│         │          │ inputs: plano de ensino, persona, prompt v3,  │
│         │          │         fontes_padrao.json,                   │
│         │          │         macetes_medgradplus.json,             │
│         │          │         2-3 questões antigas Uni9 da aula     │
│         │          │         1 referência MedEvo (tom)             │
│         ▼          │                                                │
│  B. Linter v3      │ → falha = volta a A com correções              │
│         │          │                                                │
│         ▼          │                                                │
│  C. Revisão clínica│ → rejected = volta a A com correções           │
│     (Camada 2)     │                                                │
│         │          │                                                │
│         ▼          │                                                │
│  D. Flashcards x12 │ extraídos de "Pontos-Chave" + "Pré-Prova"      │
│         │          │ schema: id seq, materia, frente, verso ≤120ch │
│         │          │         explicacao, tema=aula_id, dificuldade │
│         ▼          │                                                │
│  E. Questões x5    │ mix Uninove: 2 conceit + 2 contexto + 1 caso  │
│     inéditas       │ tom calibrado por questões antigas Uni9       │
│         │          │ A/B/C/D balanceadas                           │
│         ▼          │                                                │
│  F. Q públicas x3-5│ ENARE/USP/Unifesp/Einstein/AMRIGS/Iamspe       │
│     mapeadas       │ data/refs/<aula>.refs.json + seção no .md     │
│         │          │                                                │
│         ▼          │                                                │
│  G. Header YAML    │ status: published, checksum_lint: pass         │
│     atualiza       │                                                │
│         │          │                                                │
│         ▼          │                                                │
│  H. Atualiza plano │ marca [x] na Etapa, incrementa contadores 1.2 │
│                    │                                                │
│         ▼          │                                                │
│  I. Commit atomic  │ git commit -m "feat: <aula> em padrão v3"     │
│                    │ SEM `firebase deploy` (decisão usuário 2.2):  │
│                    │ deploy só ao FIM do ciclo clínico, em lote.   │
└────────────────────────────────────────────────────────────────────┘
```

**Por que essa ordem:**

- **A antes de B–F:** material é fonte de tudo. Não construir derivados sobre conteúdo malformado.
- **B (linter) entre A e C:** detecta erros de formato cedo (encoding, tabela quebrada) — barato corrigir antes de investir revisão clínica.
- **C antes de D–F:** se o material tem erro clínico, flashcards e questões herdariam o erro.
- **D antes de E:** flashcards são extração; questões são síntese (mais difícil). Mais fácil aquecer.
- **F por último:** mapeamento público é pesquisa, não geração. Só faz sentido quando o material está pronto.
- **I (commit) atômico:** 1 aula = 1 commit. Rollback é trivial. PR review é fácil.

**Tempo médio por bloco (com retrabalho 0.4×):**

| Etapa | Tempo |
|---|---|
| A — Material | 90 min |
| B — Linter | 5 min |
| C — Revisão clínica | 30 min |
| D — Flashcards | 30 min |
| E — Questões inéditas | 30 min |
| F — Mapeamento públicas | 20 min |
| G/H/I — YAML, plano, commit | 15 min |
| **Total** | **~3h20** |

**O que NÃO fazer no bloco:**

- Pular B (linter) achando que "tá visualmente ok".
- Inventar macete novo (use só os de `data/macetes_medgradplus.json`).
- Chutar fonte ("Cecil 25ª ed." quando não tem certeza).
- Rodar deploy a cada aula (acumula 5–10 e roda 1 vez).
- Fazer 2 aulas em paralelo (qualidade cai).

---

## 5. Inventário de planos de ensino (fonte primária do conteúdo)

> Todo material clínico **DEVE** ser gerado a partir do plano de ensino oficial. Os planos estão em `conteudos/_para_categorizar/Planos de Ensino/Módulo X/`.

### 5.1 Status de mapeamento (verificado 2026-05-07)

| Módulo | Disciplinas no `materias.json` | PDFs em `Planos de Ensino/` | Status no `planos_estruturados.json` |
|---|---|---|---|
| 1 | sus, semiologia1, bmf1, pmh, pe1 | 5 PDFs | ✅ mapeado |
| 2 | bmf2, semiologia2, mad1, bcm1, indicadores, ds | 6 PDFs | 🟡 parcial |
| 3 | bmf3, semiologia3, mad2, fisiopato3, saude_trabalhador, pe3 | 6 PDFs | 🟡 parcial |
| 4 | bmf4, semiologia4, fisiopato_farmaco, bioestatistica, pe4 | 5 PDFs | 🟡 parcial |
| **5** | clinica_medica5, clinica_cirurgica5, farmaco_aplicada | **4 PDFs** ✅ | 🔴 **ausente** |
| **6** | clinica_medica6, mfc6, cirurgia_ortopedia, tecnica_operatoria | **4 PDFs** ✅ | 🔴 **vazio no JSON** |
| **8** | eci8, ecl8, sm8, pe8 | **5 PDFs** ✅ | 🔴 **ausente** |

### 5.2 Mapeamento PDF → disciplina

**Módulo 5** (`conteudos/_para_categorizar/Planos de Ensino/Módulo 5/`):
- `5o Módulo Plano de Ensino Clínica Médica .pdf` → **clinica_medica5 (cm5)**
- `Plano de Ensino Clínica Cirúrgica.pdf` → **clinica_cirurgica5 (cc5)**
- `PLANO DE ENSINO FARMACOLOGIA APLICADA 20261.pdf` → **farmaco_aplicada (farm)**
- `5o Módulo Plano de Ensino PE PROJETOS VOLTADOS A FAMILIA E COMUNIDADE .pdf` → projeto extensionista (não está em `materias.json` — confirmar com usuário)

**Módulo 6** (`conteudos/_para_categorizar/Planos de Ensino/Módulo 6/`):
- `Plano de Ensino - TPPSD NA PERSPECTIVA DA CLÍNICA MÉDICA - MÓDULO 6 - 2026.1.pdf` → **clinica_medica6 (cm6)**
- `Plano de Ensino - TPPSD NA PERSPECTIVA DA CLÍNICA CIRÚRGICA E DA ORTOPEDIA - MÓDULO 6 - 2026.1.pdf` → **cirurgia_ortopedia (cir6)**
- `Plano de Ensino - MEDICINA DE FAMÍLIA E COMUNIDADE - MÓDULO 6 - 2026-1.pdf` → **mfc6 (mfc)**
- `Plano de Ensino - TÉCNICA OPERATÓRIA - MÓDULO 6 - 2026.1.pdf` → **tecnica_operatoria (tcar)**

**Módulo 8** (`conteudos/_para_categorizar/Planos de Ensino/Módulo 8/`) — Etapa 6:
- 5 PDFs com nome corrompido (renomear na Etapa 0).

### 5.3 Tarefa: re-extrair para JSON estruturado

- [ ] **5.3.1** — Renomear PDFs com nome corrompido (`MÃ_DULO`, `Ã³`, `Â°`).
- [ ] **5.3.2** — Atualizar `scripts/build_materias.py` (ou criar `scripts/extract_planos_v2.py`) para Mod 5/6/8.
- [ ] **5.3.3** — Comparar `aulas_estimadas` extraídas com `data/materias.json`. Decidir caso a caso.
- [ ] **5.3.4** — Identificar com o usuário **qual é o "1 plano que ainda falta"**. Candidatos:
  - **PE5** (tem PDF, mas `pe5` não existe em `materias.json`).
  - **Comunicação 1** (não tem PDF na pasta atual).
  - **PI 5** (sem PDF).

---

## 6. Pendências do Ciclo Básico

> Rodam em paralelo com o clínico. Não bloqueiam, mas o aluno precisa que o básico não regrida.

### 6.1 Bloqueadores (alta prioridade)

| # | Item | Origem |
|---|---|---|
| B1 | **Viés de letra B** nas questões (47% das corretas) | TASKS_FUTURAS.md |
| B2 | **Verso longo demais** em flashcards antigos | TASKS_FUTURAS.md |
| B3 | **Tema com nome livre** em questões antigas | TASKS_FUTURAS.md |
| B4 | **Renderização de `explicacao`** nos flashcards (campo no JSON, não exibido) | TASKS_FUTURAS.md |
| B5 | **PMH a1–a14**: formato antigo, sem breadcrumb | TASKS_FUTURAS.md |
| B6 | **BMF1 a3–a22**: verificar Pré-Prova + breadcrumb | TASKS_FUTURAS.md |
| B7 | **Aprovação de relatórios via admin** (hoje só CLI) | TASKS_FUTURAS.md |

### 6.2 Não-bloqueadores (média prioridade)

| # | Item |
|---|---|
| N1 | Aba Referências no admin (ler `data/refs/*.refs.json`) |
| N2 | Dashboard de cobertura (% por matéria) |
| N3 | Visualizador de logs dos agentes |
| N4 | Imagens nos materiais (esquemas IA) |
| N5 | MAD1 e BCM1 com flashcards baixos |
| N6 | SEMIO3 com 10 flashcards apenas |
| N7 | Verificar duplicação `fisiopato3` vs `fp3` |

---

## 7. Persona, prompt v3 e fontes — referência rápida

### 7.1 Persona

Arquivo canônico: [`prompts/persona_medgradplus.md`](prompts/persona_medgradplus.md).

> **"Aqui no MedGradPlus a gente cobra assim..."** — voz de preceptor (R3/staff) + banca de residência + aluno do ano passado. Macetes assinados (BEATA, MUDPILES, 6 P's), pegadinhas em callout, vinheta clínica de 3 atos por aula, foco em **ENARE/USP/Unifesp/Einstein/AMRIGS/Iamspe**, sem emojis, sem coachês, sem bajulação.

### 7.2 Prompt técnico

Arquivo canônico: [`prompts/gerar_materiais_apoio_v3.md`](prompts/gerar_materiais_apoio_v3.md).

- UTF-8 sem BOM, LF, sem caracteres proibidos.
- Tabelas estritas (1ª coluna 100% negrito, sem `<br>`, máx. 6 colunas).
- Estrutura fixa: Cabeçalho → Relevância → Tópicos → Caso da Semana → Diferencial → Conduta → Ponte → Pontos-Chave → Mini Quiz → Pré-Prova → Fontes → Questões mapeadas.
- Mínimo 180 linhas, 5–8 questões, 2–3 macetes, 2–4 fontes.

### 7.3 Fontes-base por matéria

Ver biblioteca completa em [`data/fontes_padrao.json`](data/fontes_padrao.json). Resumo:

| Disciplina | Fonte primária | Diretrizes |
|---|---|---|
| **CM5 / CM6** | Cecil-Goldman 26ª, Harrison 21ª | SBC, MS, KDIGO, GINA/GOLD |
| **CC5** | Sabiston 21ª, Schwartz 11ª | SBCO, SBU |
| **CIR6** | Sabiston + Campbell 14ª (orto) | SBOT |
| **TO** | Goffi 5ª, Townsend | — |
| **MFC** | SBMFC Tratado 2ª, Cadernos AB | MS — APS |
| **FARM** | Goodman 14ª, Katzung 15ª | ANVISA |
| **ECI8** | ATLS 10ª + Sabiston | — |
| **ECL8** | Tintinalli 9ª, Cecil | SBC, AHA, ESC |
| **SM8** | Adams & Victor 12ª, Kaplan & Sadock | DSM-5-TR |

### 7.4 Macetes canônicos

Ver biblioteca completa em [`data/macetes_medgradplus.json`](data/macetes_medgradplus.json). Lista parcial:

BEATA (Child-Pugh), MUDPILES (acidose AG↑), 6 P's (isquemia arterial), ABCDE (ATLS), CHA₂DS₂-VASc (FA), HAS-BLED (sangramento), BISAP (pancreatite), ROCKALL (HDA), Wells (TEP/TVP), Centor/McIsaac (faringite), Light (transudato/exsudato), MELD (cirrose), APGAR (RN), HEART score (dor torácica).

### 7.5 Bancos de questões públicos

ENARE, USP-SP, Unifesp, Einstein, AMRIGS, Iamspe, Comvest. **Apenas referência (banca + ano + número + URL oficial)** — não scrape, não copia enunciado sem licença.

---

## 8. Etapas — fila de trabalho com critérios de aceite

> Cada etapa tem objetivo, agentes, inputs, output, critério de aceite, checkboxes, estimativa.
> **Estimativas usam fator de retrabalho 1.4×** (cada aula em média volta 0.4 vez a uma camada anterior).

### Etapa 0 — Setup (~1 dia)

- [x] **0.1** — `prompts/persona_medgradplus.md` validado (UTF-8, sem BOM). *(2026-05-07)*
- [x] **0.2** — `prompts/gerar_materiais_apoio_v3.md` validado. *(2026-05-07)*
- [x] **0.3** — `AGENTS.md` atualizado para referenciar v3 e persona. *(2026-05-07)*
- [x] **0.4** — `MAPA_CICLO_CLINICO.md` criado. *(2026-05-07)*
- [x] **0.5** — `prompts/agente_revisor_clinico.md` criado. *(2026-05-07)*
- [x] **0.6** — `data/macetes_medgradplus.json` criado. *(2026-05-07)*
- [x] **0.7** — `data/fontes_padrao.json` criado. *(2026-05-07)*
- [x] **0.8** — `scripts/lint_material_v3.py` criado. *(2026-05-07)*
- [x] **0.9** — `docs/REORG_LEGADO_CICLO_CLINICO.md` criado. *(2026-05-07)*
- [ ] **0.10** — Criar pastas `data/materiais/clinica_medica5/` e `clinica_cirurgica5/`.
- [ ] **0.11** — Criar pastas `materiais/modulo5/clinica_medica5/`, `materiais/modulo5/clinica_cirurgica5/`.
- [ ] **0.12** — Renomear PDFs com encoding corrompido (Mod 4 e 8).
- [ ] **0.13** — Re-extrair planos de ensino para `planos_estruturados.json` (Mod 5/6/8).
- [ ] **0.14** — Confirmar com usuário **qual plano falta** — atualizar Etapa 0.13 conforme resposta.
- [ ] **0.15** — (opcional) Reorganizar pasta legado (`docs/REORG_LEGADO_CICLO_CLINICO.md`). Pode ser feito antes ou em paralelo com Etapa 1.

**Critério de aceite Etapa 0:** todos os checkboxes marcados; lint v3 roda sem erro em arquivo de teste; agente revisor consegue ler todos os JSONs sem erro.

### Etapa 0.5 — Extração de questões do legado (paralela, ~16h)

> **Objetivo:** popular `data/questoes_antigas.json` com questões reais da Uni9 dos 5°-8° semestres ANTES do bulk começar. Isso dá ao agente de geração de questões inéditas (Etapa E do bloco-por-aula) **calibração de dificuldade e estilo** alinhada à banca local.
>
> **Insumo:** inventário rodado em 2026-05-07 (`data/agent_logs/inventario_legado_20260507_131957.json`) identificou 1.796 arquivos, 63 provas + 18 atividades + 12 prováveis = **112 candidatos** com questões para extrair.
>
> **Fluxo:**
> ```
> Inventário → curadoria humana (CSV) → extração IA por PDF →
>   mapeamento aula_id → schema questoes_antigas → publicação no app
> ```

**Tarefas:**

- [x] **0.5.0** — `scripts/inventariar_legado.py` rodado. *(2026-05-07)*
- [ ] **0.5.1** — Curadoria humana do CSV (`data/agent_logs/inventario_legado_*.csv`): mantenedor abre, marca Y/N nas 112 candidatas. ~30 min.
- [ ] **0.5.2** — Decisão sobre `data/questoes_antigas.json` atual (zerado vs backup com 1.010 do básico). Ver Seção 14 e `INICIO_OPERACIONAL.md` D2.
- [ ] **0.5.3** — Restaurar 1.010 questões do básico do backup (se decisão D2 = sim).
- [ ] **0.5.4** — Criar `scripts/extrair_questoes_legado.py` — agente IA processa cada PDF marcado Y na Etapa 0.5.1, extrai questões com `pdftotext`, identifica enunciado/opções/correta/explicação, mapeia a `aula_id`.
- [ ] **0.5.5** — Para cada lote de 30 PDFs processados → adicionar a **`data/questoes_clinico_legado.json`** (arquivo NOVO e SEPARADO de `data/questoes_antigas.json` que é do ciclo básico). Schema:
  ```json
  {
    "id": <seq>,
    "materia": "cm5",
    "aula_id": "cm5_a1",
    "fonte_legado": {
      "banca": "Uni9",
      "ano": 2024,
      "bimestre": "P1",
      "turma": "A",
      "arquivo_origem": "P1 - CLINICA MEDICA 5 - 8A.pdf"
    },
    "enunciado": "...",
    "opcoes": ["A) ...", "B) ...", "C) ...", "D) ..."],
    "correta": 1,
    "explicacao_geral": "...",
    "explicacoes_opcoes": {"A": "...", "B": "...", "C": "...", "D": "..."},
    "tema": "cm5_a1",
    "dificuldade": 2,
    "depende_de_imagem": false
  }
  ```
  **IMPORTANTE:** o **enunciado é limpo** (sem prefixo `[PROVA ...]`). A origem fica só no campo `fonte_legado` (não exibido como texto da pergunta).
- [ ] **0.5.6** — Auditoria: para cada questão extraída, validar:
  - Enunciado coerente (não cortado pelo OCR).
  - 4 alternativas (A-D), uma correta marcada.
  - `aula_id` válido em `data/materias.json`.
  - `categoria` com formato `[FONTE ANO]`.
- [ ] **0.5.7** — Commit + deploy → questões aparecem na aba "Antigas" do app (já tem fluxo, ver `index.html:13458` `qaArray`).
- [ ] **0.5.8** — Auditoria final: aluno do 5° abre app, vê questões da Uni9 reais; mantenedor confere amostra de 20 questões.

**Critério de aceite Etapa 0.5:** ≥ 60 questões extraídas e publicadas no app (mínimo 5 por aula clínica de Mod 5/6 prioritária); cada questão tem fonte verificável (banca + ano + bloco); lint OK em `data/questoes_antigas.json`.

**Importância:** **bloqueador** parcial da Etapa 1 (aula piloto pode rodar com 2-3 questões antigas manualmente; bulk PRECISA dessas 60+).

**Estimativa:** ~16h (curadoria 0.5h + extração 12h IA + auditoria 3h).

### Etapa 1 — Aula piloto `cm5_a1` (~6h)

- [ ] **1.1** — Camada 1: gerar `cm5_a1` com prompt v3 a partir do plano de ensino + persona + fontes.
- [ ] **1.2** — Camada 2: revisão clínica (verificar SBC HAS 2020, doses, macete usado).
- [ ] **1.3** — Camada 3: curadoria estética.
- [ ] **1.4** — Camada 4: linter v3 → exit code 0.
- [ ] **1.5** — Camada 5: aprovação humana (você).
- [ ] **1.6** — Salvar como `piloto/cm5_a1.md` (referência).
- [ ] **1.7** — Atualizar `prompts/gerar_materiais_apoio_v3.md` apontando para piloto.
- [ ] **1.8** — Gerar 12 flashcards de `cm5_a1`.
- [ ] **1.9** — Gerar 5 questões inéditas.
- [ ] **1.10** — Mapear 3–5 questões públicas em `data/refs/cm5_a1.refs.json`.
- [ ] **1.11** — Deploy em ambiente de staging (ou produção) e validar render no app.
- [ ] **1.12** — Captura de tela das principais seções.

**Critério de aceite Etapa 1:** aula piloto aprovada em todas as 5 camadas, render no app validado, mantenedor satisfeito.

### Etapa 2 — Auditoria do Ciclo Básico (paralela, ~24h)

> Pode rodar em background enquanto Etapa 3 começa.

- [ ] **2.1** B1: auditar viés letra B → `data/agent_logs/audit_letra_b.json`.
- [ ] **2.2** B2: migrar `verso` longo → `verso` + `explicacao`.
- [ ] **2.3** B3: normalizar `tema` (de nome livre para `aula_id`).
- [ ] **2.4** B5: revisar PMH a1–a14 com prompt v2.
- [ ] **2.5** B6: revisar BMF1 a3–a22 com prompt v2.
- [ ] **2.6** B4: implementar render de `explicacao` no app (`index.html`).
- [ ] **2.7** B7: implementar UI de aprovação no admin.

### Etapa 3 — Mod 5 do zero (43 aulas, ~85h com retrabalho)

> Após piloto aprovada. Inputs: plano de ensino oficial, persona, prompt v3, MedEvo como referência.

#### Etapa 3A — Farmacologia Aplicada (FARM, 12 aulas)

> Primeiro porque é fundação para CM5 e CC5.

- [ ] **3A.0** — Re-elevar `farm_a1` para v3 (está em v2).
- [ ] **3A.1** a **3A.11** — `farm_a2` ... `farm_a12`.

#### Etapa 3B — Clínica Médica 5 (CM5, 21 aulas)

- [ ] **3B.1** a **3B.21** — `cm5_a1` (já piloto) ... `cm5_a21`.

#### Etapa 3C — Clínica Cirúrgica 5 (CC5, 10 aulas)

- [ ] **3C.1** a **3C.10** — `cc5_a1` ... `cc5_a10`.

**Sub-fluxo por aula** (todas as etapas 3A/3B/3C seguem):

```
1. Camada 1 (gerar) → 2. Camada 2 (revisor clínico) →
3. Camada 3 (curador) → 4. Linter v3 →
5. Camada 5 (aprovação sample) → 6. Gerar 12 flashcards →
7. Gerar 5 questões inéditas → 8. Mapear questões públicas →
9. Atualizar este plano (checkbox + log) → próxima aula
```

**Estimativa por aula:** 1.5h camadas 1+3+4 + 1h camada 2 + 0.5h flashcards + 0.5h questões + retrabalho 0.4× = **~3h por aula**.

### Etapa 4 — Mod 6 elevação (62 aulas, ~135h com retrabalho)

> Materiais já existem em v2. Elevar = comparar com piloto + persona + macetes + vinheta.

#### Etapa 4A — CIR6 (21 aulas)
#### Etapa 4B — CM6 (24 aulas)
#### Etapa 4C — MFC6 (6 aulas)
#### Etapa 4D — TO/TCAR (10 aulas)

**Estimativa por aula (revisão é ~0.6× de geração nova):** ~2.2h.

### Etapa 5 — Mineração de questões públicas (~75h)

> Roda em paralelo com Etapas 3/4. Cada aula tem mineração separada.

- [ ] **5.1** Para cada aula clínica → buscar 3–5 questões públicas.
- [ ] **5.2** Salvar em `data/refs/<aula>.refs.json` com schema novo (campo `questoes_publicas`).
- [ ] **5.3** Adicionar seção `## Questões de Residência (mapeadas)` no `.md`.
- [ ] **5.4** Validar URLs e licenças.

### Etapa 6 — Módulo 8 (~180h, futuro)

- [ ] **6.1** ECI8 — 30 aulas.
- [ ] **6.2** ECL8 — 16 aulas.
- [ ] **6.3** SM8 — 28 aulas.
- [ ] **6.4** PE8 (avaliar fora de escopo).

### Etapa 7 — Roadmap futuro (Seção 12) — **ver detalhes lá**

---

## 9. Risk register & rollback plan

### 9.1 Riscos identificados

| ID | Risco | Probabilidade | Impacto | Mitigação |
|---|---|---|---|---|
| R1 | **Erro clínico grave** publicado (ex.: dose errada, conduta errada) | Baixa | Crítico | Camada 2 (revisor) + Camada 5 (humano sample). Botão de reportar erro no app. |
| R2 | **Macete inventado** errado é decorado pelo aluno | Média | Alto | Biblioteca `macetes_medgradplus.json` + Camada 2 valida cada macete novo. |
| R3 | **Diretriz desatualizada** citada (ex.: Sepsis-2) | Média | Alto | Camada 2 verifica contra `fontes_padrao.json` (campo `diretrizes_que_mudaram_recentemente`). |
| R4 | **Fonte chutada** (ex.: "Cecil 25ª ed." quando é 26ª) | Alta | Médio | `fontes_padrao.json` define edição. Linter v3 alerta se citação não casa. |
| R5 | **Persona inconsistente** entre aulas (uma com voz, outra sem) | Alta | Médio | Linter conta callouts; aula piloto como referência forte. |
| R6 | **Aluno reclama** de conteúdo errado e nada acontece | Média | Alto | Botão "reportar" → fila `data/agent_logs/reports/`. SLA de revisão: 7 dias. |
| R7 | **Encoding quebra** após edição manual no Word | Alta | Baixo | Linter v3 detecta BOM/CRLF/aspas curvas antes de commit. |
| R8 | **Tabela quebra** no render (pipe não-escapado, `<br>`) | Média | Médio | Linter v3 valida tabelas; preview obrigatório antes de aprovar. |
| R9 | **Questão pública** com URL morto (banca tirou do ar) | Alta | Baixo | Re-validação periódica das URLs em `data/refs/`. |
| R10 | **Disponibilidade de agente IA** (token, rate limit) | Média | Médio | Buffer de tempo na estimativa; fila com prioridade. |
| R11 | **Pasta legado** se perde ou corrompe | Baixa | Crítico | Backup obrigatório antes de reorganizar; backup mensal. |
| R12 | **Plano de ensino atualiza** mid-flight (Uninove publica versão nova) | Baixa | Médio | `versao_v3` + diff anual contra plano novo. |

### 9.2 Rollback plan — quando algo dá errado

#### Cenário A — Erro clínico crítico publicado

1. **Detectar:** alerta de aluno via botão / revisão periódica / professor reporta.
2. **Reverter (≤ 30 min):** `git revert <commit>` da aula afetada → `firebase deploy`.
3. **Investigar:** ler relatório de Camada 2 da aula. Por que o revisor deixou passar?
4. **Corrigir:** regerar com nota explícita do erro.
5. **Aprender:** adicionar regra ao `agente_revisor_clinico.md` para evitar reincidência.

#### Cenário B — Aula com erro estrutural (linter falha após publicação)

1. Lint v3 roda em CI/CD (a implementar) → alerta no PR.
2. Se passou direto: `git revert` + correção + republicar.

#### Cenário C — Persona drift (10 aulas seguidas com voz inconsistente)

1. Pausar geração.
2. Auditar últimas 10 aulas com mantenedor.
3. Atualizar `persona_medgradplus.md` com exemplos novos.
4. Re-elevar as 10 aulas afetadas.
5. Retomar geração.

#### Cenário D — Plano de ensino atualizado pela Uninove

1. Comparar plano novo vs antigo (diff de tópicos).
2. Identificar aulas afetadas.
3. Marcar como `revisao_pendente` no header YAML.
4. Re-gerar / elevar aulas afetadas (paralelo ao bulk normal).

---

## 10. Métricas de qualidade

> Painel atualizado a cada 50 aulas. Salvar em `data/agent_logs/metricas_qualidade_<data>.json`.

| Métrica | Cálculo | Alvo |
|---|---|---|
| **Cobertura de aulas v3** | aulas com header `versao_v3` >= 3.0.0 / total aulas | 100% até Etapa 4 |
| **Cobertura de macetes assinados** | aulas com ≥ 2 "Macete MedGradPlus" / total | ≥ 95% |
| **Cobertura de vinheta 3 atos** | aulas com vinheta detectada / total | ≥ 90% |
| **Cobertura de fontes citadas** | aulas com ≥ 2 fontes canônicas / total | ≥ 95% |
| **Flashcards por aula** | total flashcards / aulas no clínico | ≥ 12 média |
| **Questões inéditas por aula** | total questões / aulas no clínico | ≥ 5 média |
| **Questões públicas mapeadas por aula** | aulas com ≥ 3 questões em `.refs.json` / total | ≥ 90% |
| **Taxa de aprovação Camada 2** | aulas approved / total submetidas | ≥ 80% |
| **Taxa de aprovação humana sample** | aulas aprovadas / sample / total | ≥ 85% |
| **Erros críticos publicados** | erros clínicos detectados após publicação | 0 (ideal); SLA: ≤ 1 / trimestre |
| **Tempo médio Camada 1 → publicação** | dias entre geração e publicação | ≤ 2 dias |
| **Aulas com retrabalho** | aulas que voltaram à camada anterior / total | ≤ 30% |

### 10.1 Dashboard (a implementar)

Criar `admin.html` com aba "Qualidade" mostrando:
- Gráfico de cobertura por módulo (% materials v3).
- Lista de aulas com status (pendente Camada 1, 2, 3, 4, 5).
- Top 5 aulas com mais retrabalho.
- Erros críticos abertos.

---

## 11. Integração com o app — fluxo end-to-end

### 11.1 Pipeline atual vs proposta

**Atual:**
```
Agente gera .md
    ↓
Salva em data/materiais/ e materiais/moduloN/
    ↓
git commit → firebase deploy
    ↓
Aluno vê no app (após reload)
```

**Proposta v3:**
```
Camada 1 (Gerar)
    ↓
Header YAML: versao_v3, fontes, macetes_usados, status: "draft"
    ↓
Camada 2 (Revisor) → relatório em data/agent_logs/pendentes/
    ↓ (se approved)
Camada 3 (Curador) → patch em data/agent_logs/pendentes/
    ↓ (se approved)
Camada 4 (Linter v3) → status do arquivo
    ↓ (se ok)
Camada 5 (Sample humano via admin.html)
    ↓ (se aprovado)
Header YAML: status: "published"
    ↓
git commit → firebase deploy
    ↓
Aluno vê no app
    ↓
Aluno reporta erro → data/agent_logs/reports/
    ↓
Volta para Camada 2 com flag urgente
```

### 11.2 Header YAML por aula (novo)

Cada `.md` clínico v3 começa com:

```yaml
---
aula_id: cm5_a1
materia: clinica_medica5
modulo: 5
tema: Hipertensao Arterial Sistemica
versao_v3: 3.0.0
status: published       # draft | review | approved | published | flagged
gerado_em: 2026-05-15
revisado_em: 2026-05-15
revisor: agente_revisor_clinico_v1
fontes_principais:
  - SBC HAS 2020
  - Cecil-Goldman 26a, cap. HAS
macetes_usados:
  - chads2vasc_fa
  - hasbled
tempo_estudo_min: 15
checksum_lint: pass
---

# Hipertensao Arterial Sistemica
[...]
```

**Permite:**
- Auditoria automática (qual versão? quando revisada?).
- Filtro no app por status (mostrar só `published`).
- Sample do humano sortear aleatoriamente entre `approved`.
- Métricas (% v3 vs v2).

### 11.3 Botão "reportar erro" no app

- Aparece no fim de cada material.
- Captura: `aula_id`, descrição do problema, opcional: trecho específico.
- Salva em `data/agent_logs/reports/<aula>_<ts>.json`.
- Admin vê fila com prioridade alta para clínico.
- SLA: revisão em ≤ 7 dias.

### 11.4 CI/CD do conteúdo (a implementar)

- **Pre-commit hook** (`.git/hooks/pre-commit`): roda `lint_material_v3.py` em arquivos modificados; barra commit se erro.
- **GitHub Action** no PR: roda lint completo + validate_materiais_md.mjs + validate_materias.py.
- **GitHub Action** no merge para `main`: trigger `firebase deploy --only hosting`.

---

## 12. Roadmap futuro — depois do Mod 5/6

### 12.1 Conteúdo

| Item | Quando | Esforço |
|---|---|---|
| **Mod 7 (Saúde da Mulher, Criança, Idoso)** | Após Mod 5/6 + planos da Uninove | ~150h (similar Mod 6) |
| **Mod 8 (Internato 4° ano)** | Etapa 6 deste plano | ~180h |
| **Mod 9 (Internato 5° ano — clínica avançada, residência prep)** | Após Mod 8 | ~200h |
| **Eletivas** | Sob demanda de aluno | Variável |
| **Atualização anual** | Ago/Set, todo ano (planos Uninove novos) | ~50h/ano |

### 12.2 Features do app

| Feature | Descrição | Prioridade |
|---|---|---|
| **Modo Pré-Prova 30 min** | Roteiro de revisão usando só `## Pré-Prova` de cada aula | Alta |
| **Simulado temático** | 30 questões aleatórias do banco próprio + público por tema, com timer | Alta |
| **Spaced repetition (flashcards)** | Implementar SM-2 ou FSRS no flashcards | Alta |
| **Autoavaliação pós-aula** | 5 questões após cada aula; < 60% sugere revisão | Média |
| **Calendário de estudos** | Integra com datas de prova da Uninove; sugere quais aulas estudar | Média |
| **Modo offline melhorado** | Cache de aulas recentes para acesso sem rede | Média |
| **Notificações de revisão** | Push de "revise X em Y dias" baseado em SRS | Média |
| **Busca global** | Filtra aulas/flashcards/questões por texto livre | Média |
| **Progresso por matéria** | Barra de progresso baseada em checklists e questões corretas | Baixa |
| **Modo professor** | Painel para professor da Uninove ver erros reportados de suas aulas | Baixa |
| **Modo turma** | Rankings, comparações com colegas (opt-in) | Baixa |
| **Exportar para Anki** | Botão de exportar deck `.apkg` da disciplina | Baixa |

### 12.3 Sustentabilidade

| Item | Status atual | Próximo passo |
|---|---|---|
| **Custo de hospedagem** | Firebase free tier | Monitorar uso; migrar para plano pago se necessário |
| **Custo de geração de IA** | Tokens do mantenedor | Cogitar API com cap mensal; ou fundo de aluno |
| **Manutenção do conteúdo** | Mantenedor solo | Recrutar 2–3 R3/R4 como revisores externos |
| **Modelo de monetização** | Gratuito | Considerar plano Pro (sem ads, conteúdo extra) ou doação |
| **Compliance** | Não-comercial | Adicionar disclaimer "uso educacional, não substitui aula formal" |
| **Acordo Uninove** | Informal | Cogitar parceria oficial (acesso a planos, validação) |

### 12.4 Tecnologia

| Item | Quando |
|---|---|
| **Migrar para Vite + React proper** (sem React UMD/Babel standalone) | Quando arquivos `.md` chegarem a 500+ |
| **Banco SQLite ou Postgres** (sair de JSON estático) | Se precisar busca avançada / multi-usuário |
| **Auth real** (não só Firebase) | Se houver plano Pro |
| **CDN para imagens** (Cloudinary / similar) | Se figuras Wikimedia ficarem lentas |
| **Telemetria** (PostHog / Plausible) | Para entender quais aulas são mais lidas |

### 12.5 Comunidade e crescimento

| Item | Quando |
|---|---|
| **Programa de embaixadores** (já existe `data/embaixadores.json`) | Ativar com plano de incentivo |
| **Discord / Telegram da turma** | Após 100 alunos ativos |
| **Newsletter de atualizações** | Mensal, com aulas novas e dicas |
| **Open source parcial** | Cogitar abrir os prompts e linter (manter conteúdo proprietário) |
| **Parceria com outras faculdades** | Após validação na Uninove |

---

## 13. Como atualizar este plano (regra obrigatória)

> **Cada agente que conclui uma aula DEVE atualizar este arquivo antes de seguir.**

### 13.1 Ao concluir uma aula

1. Marcar `[x]` no checkbox da aula em **Etapa 3** ou **Etapa 4**.
2. Atualizar tabela em **Seção 1.2** (incrementar contador).
3. Adicionar entrada no log na **Seção 15**.
4. Se algum critério falhou e foi adiado, anotar em **Seção 14**.

### 13.2 Ao mudar de etapa

1. Atualizar **"Última atualização"** no topo.
2. Incrementar **versão** (2.0 → 2.1 → 2.2).
3. Resumir o que mudou no log.

### 13.3 Ao descobrir um problema

1. Adicionar em **Seção 14** (bloqueadores) com origem e data.
2. Não silenciar — anotar e tratar como tarefa explícita.

### 13.4 Ao concluir uma etapa inteira

1. Atualizar `MAPA_CICLO_CLINICO.md`.
2. Avisar próximo agente (no log, indicar próxima etapa).
3. Rodar métricas de qualidade (Seção 10).

---

## 14. Bloqueadores ativos

- **2026-05-07 — Planos de ensino do ciclo clínico não estão em `planos_estruturados.json`.** Os 4 PDFs do Mod 5, 4 do Mod 6 e 5 do Mod 8 estão na pasta, mas o JSON estruturado só tem Mod 1–4 (com Mod 6 vazio). O `materias.json` foi alimentado de outra forma. Próxima ação: Etapa 0.13.
- **2026-05-07 — PDFs do Mod 4 e Mod 8 com nome corrompido** (`MÃ_DULO`, `Ã³`, `Â°`). Próxima ação: Etapa 0.12.
- ~~**2026-05-07 — "Plano que falta" mencionado pelo usuário não foi identificado.**~~ **RESOLVIDO 2026-05-07 noite:** todos os 7 planos do ciclo clínico foram validados contra `materias.json`. Todas as 104 aulas (Mod 5+6, exceto PE) estão corretas em quantidade e nome. **PE5, PE6, PE8 estão FORA DE ESCOPO** (decisão usuário) — não gerar material nem questões.
- **2026-05-07 — Pasta legado bagunçada** (3 versões do mesmo semestre). Próxima ação: Etapa 0.15 (opcional, recomendado).
- (próximos bloqueadores aqui)

---

## 15. Log de execução

| Data | Versão | Agente / Sessão | O que mudou |
|---|---|---|---|
| 2026-05-07 | 1.0 | Claude Opus 4.7 | Criação. Persona, prompt v3, plano-mestre. |
| 2026-05-07 | 2.0 | Claude Opus 4.7 (revisão crítica) | Auditoria, sistema de qualidade 5 camadas, aula piloto, linter v3, agente revisor clínico, bibliotecas (macetes/fontes), reorg de pasta legado, risk register, métricas, integração end-to-end, roadmap Mod 7+, header YAML em aulas. |

---

## 16. Comandos úteis para o próximo agente

```powershell
# Validar encoding UTF-8 sem BOM
python -c "import sys; b = open('caminho.md', 'rb').read(); print('BOM!' if b.startswith(b'\xef\xbb\xbf') else 'OK')"

# Comparar arquivo espelhado
Compare-Object (Get-Content "data/materiais/cm5/cm5_a1.md") (Get-Content "materiais/modulo5/clinica_medica5/cm5_a1.md")

# Linter v3 (uma aula)
python scripts/lint_material_v3.py --aula cm5_a1

# Linter v3 (módulo 5 inteiro)
python scripts/lint_material_v3.py --modulo 5

# Linter v3 (todo clínico)
python scripts/lint_material_v3.py --tudo

# Linter v2 (básico)
node scripts/validate_materiais_md.mjs

# Cobertura
python scripts/analisar_cobertura.py --modulo 5

# Build materias após plano novo
python scripts/build_materias.py

# Deploy
firebase deploy --only hosting
```

---

## 17. Para Codex / Antigravity / outro Claude

**Você acabou de abrir o repositório `meduni9-app` (produto: MedGradPlus). Sua tarefa é continuar o ciclo clínico.**

### Sequência obrigatória

1. **Leia este arquivo do início até a Seção 8.**
2. **Confira a Seção 14 (bloqueadores ativos)** — se houver, resolva primeiro.
3. **Encontre a próxima `[ ]`** em ordem de Etapa.
4. **Antes de gerar uma aula, leia:**
   - [`prompts/persona_medgradplus.md`](prompts/persona_medgradplus.md)
   - [`prompts/gerar_materiais_apoio_v3.md`](prompts/gerar_materiais_apoio_v3.md)
   - [`prompts/agente_revisor_clinico.md`](prompts/agente_revisor_clinico.md) (se for revisor)
   - O **plano de ensino** correspondente (Seção 5.2 deste arquivo)
   - O **`piloto/cm5_a1.md`** (referência de qualidade)
5. **Trabalhe 1 aula por vez.** Sem batch, sem script de geração em massa.
6. **Após cada aula:**
   - Rode `python scripts/lint_material_v3.py --aula <aula_id>`.
   - Marque `[x]` neste arquivo.
   - Incremente contador na Seção 1.2.
   - Adicione linha no log da Seção 15.
7. **A cada 5 aulas:** commit isolado com mensagem `feat(materiais): cm5_aN..aM em padrão v3`. **Não** force-push, **não** rode operações destrutivas.
8. **A cada 50 aulas:** rode métricas de qualidade (Seção 10) e atualize MAPA_CICLO_CLINICO.md.

### Se algo travar

1. Abra Seção 14 (bloqueadores) e anote.
2. Não tente burlar o problema.
3. Documente e siga para a próxima aula da fila.

### Princípios

- **Persona é obrigatória** — voz consistente entre aulas.
- **Macetes só dos canônicos** (`data/macetes_medgradplus.json`) ou validados pela Camada 2.
- **Fontes só das canônicas** (`data/fontes_padrao.json`).
- **Quando incerto, marque `[verificar fonte]`** em vez de chutar.
- **Aluno vai prescrever amanhã** — sua paranoia salva vidas.

**Boa sorte. O aluno conta com você.**
