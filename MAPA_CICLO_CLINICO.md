# MAPA — Ciclo Clínico MedGradPlus (Mod 5–6, com extensão Mod 7–9)

> Mapa de progresso do ciclo clínico. Equivalente ao [`MAPA_DE_SUCESSO.md`](MAPA_DE_SUCESSO.md) (ciclo básico).
>
> Para a fila de trabalho detalhada e checkboxes por aula, ver [`PLANO_CICLO_CLINICO.md`](PLANO_CICLO_CLINICO.md).
>
> **Última atualização:** 2026-05-07 (CM5 completo estruturalmente + blindagem anti-decaimento).

---

## Legenda

- 🔴 **Crítico** — sem material ou em padrão antigo (v1/v2) que precisa elevação.
- 🟡 **Em revisão** — material existe mas precisa elevação ao v3.
- 🟢 **No padrão v3** — passou pelas 5 camadas de qualidade.
- 🔵 **Fora de escopo imediato** — futuro.
- ⏱️ **Em produção** — atualmente sendo gerado.

---

## Status global

| Métrica | Valor atual | Alvo |
|---|---|---|
| Aulas no `materias.json` (Mod 5–8) | 184 | — |
| Aulas com `.md` em padrão v3 | 23 | 184 |
| Aulas com `.md` em padrão v2 (a elevar) | 62 | 0 |
| Aulas sem `.md` | 99 | 0 |
| Aula piloto aprovada | ✅ sim (`cm5_a1`) | ✅ sim |
| Linter v3 implementado | ✅ sim | ✅ |
| Sistema de qualidade ativo | ✅ definido | ⏱️ em uso |

---

## Módulo 5 (5° Semestre — Clínica e Farmacologia)

| Disciplina | Aulas | `.md` v3 | `.md` v2 | Faltam | Questões | Flashcards | Status |
|---|---|---|---|---|---|---|---|
| **clinica_medica5 (CM5)** | 21 | 21 | 0 | 0 | 252 | 252 | 🟡 completo; dívida de densidade/negrito |
| **clinica_cirurgica5 (CC5)** | 10 | 0 | 0 | 10 | 0 | 0 | 🔴 |
| **farmaco_aplicada (FARM)** | 12 | 2 | 1 | 10 | 61 | 34 | 🟡 iniciado |
| **TOTAL Mod 5** | **43** | **23** | **1** | **20** | **313** | **286** | 🟡 |

---

## Módulo 6 (6° Semestre — Clínica Avançada e Cirurgia)

| Disciplina | Aulas | `.md` v3 | `.md` v2 | Faltam | Questões | Flashcards | Status |
|---|---|---|---|---|---|---|---|
| **clinica_medica6 (CM6)** | 24 | 0 | 24 | 0 | 119 | 0 | 🟡 |
| **mfc6 (MFC)** | 6 | 0 | 6 | 0 | 30 | 0 | 🟡 |
| **cirurgia_ortopedia (CIR6)** | 21 | 0 | 21 | 0 | 104 | 0 | 🟡 |
| **tecnica_operatoria (TO/TCAR)** | 10 | 0 | 10 | 0 | 59 | 59 | 🟡 |
| **TOTAL Mod 6** | **61** | **0** | **61** | **0** | **312** | **59** | 🟡 |

---

## Módulo 8 (Internato 4° ano — futuro, Etapa 6)

| Disciplina | Aulas | `.md` v3 | Status |
|---|---|---|---|
| **eci8** Emergências Cirúrgicas | 30 | 0 | 🔵 |
| **ecl8** Emergências Clínicas | 16 | 0 | 🔵 |
| **sm8** Saúde Mental (Neuro+Psiq) | 28 | 0 | 🔵 |
| **pe8** Projeto Extensionista | 6 | 0 | 🔵 (provavelmente fora de escopo) |
| **TOTAL Mod 8** | **80** | **0** | 🔵 |

---

## Módulo 7 e Mod 9 (não em `materias.json` ainda)

| Quando | Status |
|---|---|
| **Mod 7** (Saúde da Mulher / Criança / Idoso) | 🔵 Aguardando planos da Uninove + Etapa 7 do plano-mestre |
| **Mod 9** (Internato 5° ano — clínica avançada) | 🔵 Após Mod 7 |

---

## Resumo numérico

| Métrica | Mod 5 | Mod 6 | Mod 8 | Mod 7+9 (futuro) | Total |
|---|---|---|---|---|---|
| Aulas no catálogo | 43 | 61 | 80 | ~150 | 334 |
| Materiais v3 | 23 | 0 | 0 | 0 | 23 |
| Materiais v2 (a elevar) | 1 | 61 | 0 | 0 | 62 |
| Faltam completamente | 20 | 0 | 80 | 150 | 250 |
| Questões | 313 | 312 | 1 | 0 | 626 |
| Flashcards | 286 | 59 | 0 | 0 | 345 |

---

## Métricas de qualidade (alvos)

| Métrica | Alvo | Atual |
|---|---|---|
| % aulas com header YAML v3 | 100% | 23/184 |
| % aulas com ≥ 2 macetes assinados | 95% | — |
| % aulas com vinheta clínica de 3 atos | 90% | — |
| % aulas com ≥ 2 fontes canônicas | 95% | — |
| Flashcards/aula clínica | 12 | 345/104 (média bruta; distribuição ruim) |
| Questões inéditas/aula clínica | 5 | 626/104 (média bruta; qualidade não auditada) |
| Questões públicas mapeadas/aula | 3+ | refs internas criadas para CM5 e FARM inicial; qualidade de URLs não auditada |
| Taxa de aprovação Camada 2 | ≥ 80% | — |
| Taxa de aprovação humana sample | ≥ 85% | — |
| Erros críticos publicados | 0 | 0 (sem produção ainda) |

---

## Prioridade de entrega (próxima onda — pré-prova Mod 5)

> Estas são as aulas que o aluno vai ter prova **logo**. Priorizar nesta ordem.

### Onda 1 — Aula piloto (Etapa 1 do plano-mestre)
1. **`cm5_a1`** Hipertensão Arterial Sistêmica → ✅ gold standard local

### Onda 2 — Farmacologia base (Etapa 3A)
2. `farm_a9` Anti-hipertensivos (par com HAS) **ou** `farm_a1` v3 se a prioridade for primeiro elevar o material antigo
3. `farm_a4` Antibióticos 1
4. `farm_a5` Antibióticos 2
5. `farm_a10` Antiarrítmicos / Antianginosos
6. `farm_a11` Anticoagulantes / Antiplaquetários

### Onda 3 — Clínica Médica 5 base (Etapa 3B)
7. `cm5_a2` ECG
8. `cm5_a3` Insuficiência Cardíaca
9. `cm5_a4` Arritmias
10. `cm5_a5` DAC Crônica
11. `cm5_a6` SM e DM

### Onda 4 — Clínica Cirúrgica 5 base (Etapa 3C)
12. `cc5_a1` Avaliação Pré-operatória
13. `cc5_a2` Complicações Pós-op
14. `cc5_a3` Infecção em Cirurgia
15. `cc5_a4` Resposta Endócrino-Metabólica ao Trauma

### Onda 5 — Demais aulas Mod 5 + Mod 6 (Etapas 3 e 4)

---

## Planos de Ensino disponíveis (PDFs)

> Em `conteudos/_para_categorizar/Planos de Ensino/`. Verificado 2026-05-07.

| Módulo | Disciplina (em `materias.json`) | PDF correspondente |
|---|---|---|
| **5** | clinica_medica5 (cm5) | `Módulo 5/5o Módulo Plano de Ensino Clínica Médica .pdf` ✅ |
| **5** | clinica_cirurgica5 (cc5) | `Módulo 5/Plano de Ensino Clínica Cirúrgica.pdf` ✅ |
| **5** | farmaco_aplicada (farm) | `Módulo 5/PLANO DE ENSINO FARMACOLOGIA APLICADA 20261.pdf` ✅ |
| **5** | (não há disciplina pe5) | `Módulo 5/5o Módulo Plano de Ensino PE PROJETOS VOLTADOS A FAMILIA E COMUNIDADE .pdf` ⚠️ verificar |
| **6** | clinica_medica6 (cm6) | `Módulo 6/Plano de Ensino - TPPSD NA PERSPECTIVA DA CLÍNICA MÉDICA - MÓDULO 6 - 2026.1.pdf` ✅ |
| **6** | cirurgia_ortopedia (cir6) | `Módulo 6/Plano de Ensino - TPPSD NA PERSPECTIVA DA CLÍNICA CIRÚRGICA E DA ORTOPEDIA - MÓDULO 6 - 2026.1.pdf` ✅ |
| **6** | mfc6 (mfc) | `Módulo 6/Plano de Ensino - MEDICINA DE FAMÍLIA E COMUNIDADE - MÓDULO 6 - 2026-1.pdf` ✅ |
| **6** | tecnica_operatoria (tcar) | `Módulo 6/Plano de Ensino - TÉCNICA OPERATÓRIA - MÓDULO 6 - 2026.1.pdf` ✅ |
| **8** | eci8 | `Módulo 8/PLANO DE ENSINO EMERGÃ_NCIAS CIRÃ_RGICAS PREVALENTES 8Âº MÃ_DULO_2026.1.pdf` ✅ (renomear) |
| **8** | ecl8 | `Módulo 8/PLANO DE ENSINO EMERGÃ_NCIAS CLÃ_NICAS PREVALENTES 8ÂºMÃ_DULO_ 2026.01.pdf` ✅ (renomear) |
| **8** | sm8 | `Módulo 8/PLANO DE ENSINO TEMAS PREVALENTES DO PROCESSO SAÃ_DE-DOENÃ_A NA PERSPECTIVA DA SAÃ_DE MENTAL 8Âº MÃ_DULO_2026.01.pdf` ✅ (renomear) |
| **8** | sm8 (parte MFC) | `Módulo 8/PLANO ENSINO MEDICINA DA FAMÃ_LIA E COMUNIDADE NA PERSPECTIVA DA SAÃ_DE MENTAL 8Âº MÃ_DULO_2026_01.docx.pdf` ✅ (renomear) |
| **8** | pe8 | `Módulo 8/8o MÃ³dulo_ Plano de Ensino PE_ PROJETOS VOLTADOS A FAMÃ_LIA E COMUNIDADE.pdf` ✅ (renomear) |

**Pendências:**
- `planos_estruturados.json` **não tem** Mod 5 e Mod 8 mapeados (Mod 6 está como dict vazio).
- PDFs do Mod 8 estão com nome de arquivo corrompido — renomear antes de processar.

---

## Histórico

| Data | Evento |
|---|---|
| 2026-05-07 | Criação do mapa. Ciclo clínico ainda não iniciado oficialmente. Persona, prompt v3 e plano-mestre criados. |
| 2026-05-07 | Inventário completo dos planos de ensino: 4 PDFs Mod 5, 4 PDFs Mod 6, 5 PDFs Mod 8 (Mod 8 com nomes corrompidos). |
| 2026-05-07 | Revisão crítica v2.0: sistema de qualidade 5 camadas, aula piloto (`cm5_a1`), linter v3, agente revisor clínico, bibliotecas (macetes/fontes), reorg de pasta legado, risk register, métricas de qualidade, integração end-to-end, roadmap Mod 7+. |
| 2026-05-07 | Codex integrou a branch Claude, fechou `cm5_a1` localmente (linter v3 ok, piloto canônico, 12 flashcards, 12 questões essenciais, refs públicas mapeadas) e corrigiu as contagens do mapa com base no JSON real. |
| 2026-05-07 | Codex fechou CM5 estruturalmente e iniciou FARM, mas a auditoria anti-decaimento rebaixou CM5 para revisão de densidade/negrito antes de considerar padrão elite. |
