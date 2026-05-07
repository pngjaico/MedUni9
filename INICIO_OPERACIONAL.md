# Início Operacional — Ciclo Clínico (próximos 7 dias)

> **Para você (mantenedor) começar HOJE.** Este é o checklist pragmático que substitui ler todo o `PLANO_CICLO_CLINICO.md` na primeira sessão. Quando concluir as 4 frentes daqui, abra o plano-mestre para o resto.
>
> **Resposta direta à pergunta "gerar tudo de uma vez por aula?":** sim. Mas **com sequência interna fixa** dentro do bloco — material primeiro, validado pelo linter, depois flashcards e questões usando o material como fonte. Detalhes na Seção 3.
>
> **Princípio:** nada de bulk antes da aula piloto aprovada. Mas a **extração de legado roda em paralelo** com a piloto, porque é insumo das essenciais.

---

## 1. As 3 frentes paralelas que começam hoje

### Frente A — Aula piloto `cm5_a1` (HAS) — 4 a 6h

> Quem faz: agente IA disparado pela conversa. **Vou disparar quando você confirmar.**

Sequência:
1. Agente lê plano de ensino HAS, persona, prompt v3, fontes (SBC HAS 2020 + Cecil cap. HAS).
2. Gera `materiais/modulo5/clinica_medica5/cm5_a1.md` no padrão v3.
3. Espelha em `data/materiais/clinica_medica5/cm5_a1.md`.
4. Linter v3 valida (`python scripts/lint_material_v3.py --aula cm5_a1`).
5. Você aprova (ou rejeita com nota).
6. Aprovada → vira `piloto/cm5_a1.md` + 12 flashcards + 5 questões inéditas + 3 questões públicas mapeadas.

### Frente B — Inventário e extração do legado — 1 a 2 dias

> Quem faz: você executa script + agente IA extrai conteúdo das provas.

Etapas:
1. **Inventário** (já rodado) — `data/agent_logs/inventario_legado_20260507_131957.json`. Resultado: 1.796 arquivos, **63 provas** + 18 atividades + 12 prováveis = **112 candidatos a extrair questões**.
2. **Curadoria humana** — você abre o CSV e marca quais 112 arquivos são realmente úteis (Y/N por linha).
3. **Extração** — agente IA processa cada PDF de prova/atividade, extrai questões, mapeia a `aula_id`, salva em `data/questoes_antigas.json` com tag `[PROVA UNI9 2024.1 - Cir6]`.
4. **Publicação** — `git commit` + `firebase deploy` → questões aparecem na aba "Antigas" do app (já existe! `index.html:13458`).

### Frente C — Pendências de setup (paralelas, leves) — 1h

1. Criar pastas `data/materiais/clinica_medica5/`, `data/materiais/clinica_cirurgica5/` e os espelhos em `materiais/modulo5/...`.
2. Renomear PDFs Mod 8 com nome corrompido (`MÃ_DULO` → `MÓDULO`).
3. Confirmar **qual plano de ensino falta** que você vai conseguir hoje.
4. Decidir se restaura `data/questoes_antigas.json` a partir do backup (1.010 do básico — ver Seção 4).

---

## 2. Pré-requisitos (5 min antes de começar)

- [ ] **Decisões pendentes** (ver Seção 4 para cada uma):
  - [ ] Plano de ensino que falta — qual disciplina?
  - [ ] Restaurar `questoes_antigas.json` (1.010 backup) — sim ou não?
  - [ ] Reorganizar pasta legado **agora** (semana 1) ou **depois** (semana 3)?
- [ ] **Arquivos validados** (já feitos, só conferir):
  - [x] `prompts/persona_medgradplus.md`
  - [x] `prompts/gerar_materiais_apoio_v3.md`
  - [x] `prompts/agente_revisor_clinico.md`
  - [x] `data/macetes_medgradplus.json`
  - [x] `data/fontes_padrao.json`
  - [x] `scripts/lint_material_v3.py`
  - [x] `scripts/inventariar_legado.py` (rodado)
  - [x] `.gitignore` atualizado com pasta legado

---

## 3. Sequência interna do bloco-por-aula (fluxo definitivo)

> Este é o **contrato** que cada agente segue ao processar 1 aula.

```
[ Bloco aula X ]
   │
   ├─ Etapa A — Material .md (90 min)
   │    1. Ler plano de ensino + persona + prompt v3 + fontes
   │    2. Ler 2-3 questões antigas Uni9 da aula (se existirem) — calibra dificuldade/estilo
   │    3. Ler 1 material da MedEvo (referência de tom)
   │    4. Gerar .md no padrão v3
   │    5. Espelhar em data/materiais/<materia>/ e materiais/moduloN/<materia>/
   │
   ├─ Etapa B — Linter v3 (5 min)
   │    python scripts/lint_material_v3.py --aula <aula_id>
   │    Se errors > 0 → volta para Etapa A com correções
   │
   ├─ Etapa C — Revisão clínica (30 min, opcional na piloto, obrigatório no bulk)
   │    Agente revisor lê o .md + verifica doses, condutas, padrão-ouro, macetes
   │    Salva relatório em data/agent_logs/pendentes/revisao_clinica_<aula>_<ts>.json
   │    Se rejected → volta para Etapa A
   │
   ├─ Etapa D — Flashcards (30 min)
   │    Extrair 12 cards a partir das seções "Pontos-Chave" + "Pré-Prova"
   │    Schema: id sequencial, materia, frente, verso (≤120 chars), explicacao, tema=aula_id, dificuldade, tags
   │    Append em data/flashcards.json (NUNCA sobrescrever)
   │
   ├─ Etapa E — Questões inéditas (30 min)
   │    5 questões: 2 conceituais (fácil/médio) + 2 contexto breve (médio) + 1 caso clínico (difícil)
   │    Tom calibrado pelas antigas Uni9 da mesma aula
   │    Distribuição correta: A/B/C/D balanceada (auditar a cada 50 questões para evitar viés)
   │    Append em data/questoes.json
   │
   ├─ Etapa F — Mapeamento de questões públicas (20 min)
   │    Buscar 3-5 questões em ENARE, USP-SP, Unifesp, Einstein que cobrem o tema
   │    Salvar em data/refs/<aula_id>.refs.json (campo questoes_publicas: [...])
   │    Adicionar seção "## Questões de Residência (mapeadas)" no fim do .md
   │
   ├─ Etapa G — Header YAML status (5 min)
   │    Atualizar header YAML do .md com:
   │      versao_v3: 3.0.0
   │      status: published (após aprovação humana)
   │      revisado_em: <data>
   │      checksum_lint: pass
   │
   ├─ Etapa H — Atualizar plano-mestre (5 min)
   │    PLANO_CICLO_CLINICO.md → marcar [x] no checkbox da aula
   │    PLANO_CICLO_CLINICO.md → incrementar contador na Seção 1.2
   │    PLANO_CICLO_CLINICO.md → adicionar linha no log da Seção 15
   │
   └─ Etapa I — Commit + deploy (5 min)
        git add data/materiais/<materia>/<aula>.md materiais/modulo<N>/<materia>/<aula>.md
        git add data/flashcards.json data/questoes.json data/refs/<aula>.refs.json
        git commit -m "feat(materiais): <aula_id> em padrão v3 (material + 12 flashcards + 5 questões + N públicas)"
        # firebase deploy --only hosting (a cada 5 aulas, não 1)
```

**Tempo total estimado por aula:** ~3h (com retrabalho médio 0.4×).

**Por que essa ordem?**
- Material primeiro porque é fonte para todo o resto.
- Linter antes de gerar derivados garante que não construímos sobre conteúdo malformado.
- Flashcards e questões usam o material como fonte → coerência garantida.
- Mapeamento público vem depois porque é trabalho de pesquisa, não geração.
- Commit ao final atomiza a aula (rollback é trivial: 1 commit = 1 aula).

---

## 4. Decisões pendentes — preciso da sua resposta

### D1 — Qual plano de ensino falta?

Você disse "acho que ja tem os planos de ensino necessários falta só 1, vou conseguir ele hoje". A pasta tem **4 PDFs do Mod 5** cobrindo todos os IDs em `materias.json` (cm5, cc5, farm). E 4 do Mod 6 cobrindo cm6, cir6, mfc, tcar.

Possíveis candidatos do "1 que falta":
- **Projeto Extensionista 5 (PE5)** — tem PDF na pasta, mas `pe5` não existe em `materias.json` (precisaria ser adicionado).
- **Comunicação 1** — não tem PDF; fazia parte do currículo antigo de 5° semestre.
- **PI 5 (Projeto Integrador)** — não tem PDF.
- **Outro** — me diga qual.

### D2 — Restaurar `data/questoes_antigas.json` (1.010 do básico)?

Existe backup com 1.010 questões do **ciclo básico** (bmf3, bmf2, mad1, etc.) em `data/questoes_antigas.json.emergency_bak`. O atual está zerado (alguma migração apagou).

- **Sim, restaurar** → aluno do básico volta a ver "Antigas" na aba.
- **Não, manter zerado** → significa que houve motivo (talvez foram migradas para `questoes.json` com `isLegacy: true`).

Recomendo: restaurar, porque o app já tem fluxo separado para `questoes_antigas.json` (linha 13458 do `index.html`).

### D3 — Reorganização da pasta legado: agora ou depois?

Documento `docs/REORG_LEGADO_CICLO_CLINICO.md` propõe migrar `Dados para expansão ciclo clinico/` → `legado_ciclo_clinico/` com hierarquia plana, manifest JSON, gitignore.

- **Agora (semana 1)** → 5h de trabalho braçal antes da piloto. Insumos limpos.
- **Depois (semana 3)** → piloto sai mais rápido; reorganização como dívida técnica.

Recomendo: **depois**. A pasta atual funciona com o inventário do script. Reorganizar antes da piloto é overhead.

### D4 — Como me autorizar a disparar a aula piloto?

Quando você responder D1/D2/D3, eu posso:

- **Opção 1**: gerar `cm5_a1` aqui mesmo nesta sessão (uso meu contexto + ferramentas).
- **Opção 2**: você abre nova janela do Codex/Antigravity com `INICIO_OPERACIONAL.md` + plano-mestre e dispara lá.

Recomendo Opção 1 para a piloto (qualidade alta, eu tenho contexto fresco do projeto). Bulk depois pode ir no Codex/Antigravity.

---

## 5. Plano dos 7 dias

### Dia 1 (HOJE)
- [ ] Você responde D1, D2, D3, D4.
- [ ] Eu (ou Codex) gera `cm5_a1` (Frente A).
- [ ] Você revisa CSV do inventário (Frente B passo 2) e marca 112 candidatos.

### Dia 2
- [ ] Camadas 2/3/4/5 da piloto → aprovação humana.
- [ ] Aula piloto vira referência (`piloto/cm5_a1.md`).
- [ ] 12 flashcards + 5 questões inéditas + 3 questões públicas para `cm5_a1`.
- [ ] Deploy + validar render no app.

### Dia 3
- [ ] Extração de questões legado: agente processa primeiros 30 PDFs de prova → `data/questoes_antigas.json`.
- [ ] Aula 2 (sugestão: `farm_a9` Anti-hipertensivos — par com HAS).

### Dia 4–5
- [ ] Aulas 3–7 (FARM_a4, FARM_a5, CM5_a2, CM5_a3, CM5_a4) — bulk começa.
- [ ] Extração legado: próximos 40 PDFs.

### Dia 6–7
- [ ] Aulas 8–12.
- [ ] 1ª rodada de métricas de qualidade (Seção 10 do plano-mestre).
- [ ] Ajustar prompt v3 se persona drift detectado.

**Meta semana 1:** 12 aulas no padrão v3 + 100 questões antigas extraídas + piloto aprovada.

---

## 6. O que NÃO fazer nas primeiras 12 aulas

- **Não pular linter v3.** Mesmo se "parece ok", roda.
- **Não inventar macete.** Use só `data/macetes_medgradplus.json`. Macete novo precisa validação humana.
- **Não chutar fonte.** Se não tem certeza da edição, escreve genérico ("Cecil-Goldman, capítulo de doença hepática crônica").
- **Não rodar deploy a cada aula.** Acumula 5–10 e roda 1 vez.
- **Não force-push.** Toda mudança vira commit linear.
- **Não fazer 2 aulas em paralelo.** Uma de cada vez para qualidade.

---

## 7. Como saber que está dando certo

- ✅ Linter v3 retorna `ok` em 90%+ das aulas no primeiro lint.
- ✅ Você reconhece a voz da persona em qualquer trecho aleatório.
- ✅ Aluno consegue responder uma questão pública de ENARE com base no material.
- ✅ Em 7 dias você tem 12 aulas + flashcards + questões + render funcionando.

---

## 8. Comandos para começar agora

```bash
# Frente B — abrir CSV do inventário
explorer "data\agent_logs\inventario_legado_20260507_131957.csv"

# Frente C — criar pastas faltantes (Mod 5)
mkdir data\materiais\clinica_medica5
mkdir data\materiais\clinica_cirurgica5
mkdir materiais\modulo5\clinica_medica5
mkdir materiais\modulo5\clinica_cirurgica5

# Frente C — renomear PDFs corrompidos do Mod 8 (script futuro: scripts/fix_filenames.py)
# Por enquanto, manualmente:
# Renomear: PLANO DE ENSINO EMERGÃ_NCIAS CIRÃ_RGICAS PREVALENTES 8Âº MÃ_DULO_2026.1.pdf
# Para:     PLANO DE ENSINO EMERGENCIAS CIRURGICAS PREVALENTES 8 MODULO 2026.1.pdf

# Frente B — restaurar questoes_antigas (se decidir D2 = sim)
copy data\questoes_antigas.json.emergency_bak data\questoes_antigas.json
# (depois revalidar com python -c "import json; print(len(json.load(open('data/questoes_antigas.json', encoding='utf-8-sig'))))")

# Lint da piloto (após gerar)
python scripts\lint_material_v3.py --aula cm5_a1

# Deploy (a cada 5 aulas)
firebase deploy --only hosting
```

---

**Versão 1.0 — 2026-05-07.** Atualizar quando o ritmo do bulk se estabilizar (após dia 7).
