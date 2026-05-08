# Status Mod 6 — Regeneração v3 (parcial)

**Data:** 2026-05-08 (pós-quota hit em 2026-05-07)

## Resumo

| Status | Quantidade | Conteudo |
|---|---|---|
| **Completas v3** | 10 | Caso da Semana + Mini Quiz + Macetes + Pontos-Chave + Pre-Prova + ≥180 linhas |
| **Incompletas v3** | 51 | Apenas Pontos-Chave + Pre-Prova + Figura (faltam Caso + Quiz + Macetes) |

## Completas (não mexer — qualidade v3 OK)

- `cm6_a1` Cirrose Hepatica e Complicacoes (272 linhas)
- `cm6_a2` Hepatites Virais (186 linhas)
- `cm6_a9` Espirometria e Prova de Funcao Pulmonar (278 linhas)
- `cm6_a10` Asma e DPOC (319 linhas)
- `cm6_a17` Comunicacao de Mas Noticias - SPIKES (265 linhas)
- `cir6_a1` Abdome Agudo (310 linhas)
- `cir6_a12` Neoplasias de Figado e Vias Biliares (276 linhas)
- `cir6_a13` Neoplasias de Pancreas e Estomago (253 linhas)
- `mfc_a1` MFC na APS (255 linhas)
- `tcar_a1` Antissepsia, Assepsia e Esterilizacao (274 linhas)

## Incompletas — pendentes de "completar v3" (apos reset 23:30 em 2026-05-07)

### Clinica Medica 6 (19 aulas)
cm6_a3, cm6_a4, cm6_a5, cm6_a6, cm6_a7, cm6_a8, cm6_a11, cm6_a12, cm6_a13, cm6_a14, cm6_a15, cm6_a16, cm6_a18, cm6_a19, cm6_a20, cm6_a21, cm6_a22, cm6_a23, cm6_a24

### Cirurgia e Ortopedia 6 (18 aulas)
cir6_a2, cir6_a3, cir6_a4, cir6_a5, cir6_a6, cir6_a7, cir6_a8, cir6_a9, cir6_a10, cir6_a11, cir6_a14, cir6_a15, cir6_a16, cir6_a17, cir6_a18, cir6_a19, cir6_a20, cir6_a21

### MFC 6 (5 aulas)
mfc_a2, mfc_a3, mfc_a4, mfc_a5, mfc_a6

### Tecnica Operatoria (9 aulas)
tcar_a2, tcar_a3, tcar_a4, tcar_a5, tcar_a6, tcar_a7, tcar_a8, tcar_a9, tcar_a10

## O que precisa ser adicionado nas 51 incompletas

Para cada uma:
1. **`## Caso da Semana`** — vinheta clinica em 3 atos (persona / dados / comando 3 perguntas)
2. **`## Mini Quiz`** — 5-8 perguntas A-D com gabarito comentado
3. **>=2 Macetes** assinados ("Macete MedGradPlus —") tirados de `data/macetes_medgradplus.json`
4. **Crescimento para >=180 linhas**

**O que JA tem nas incompletas (nao mexer):**
- Titulo, Relevancia Clinica, Definicao, Quadro Clinico, Diagnostico, Tratamento
- Pontos-Chave para Prova
- Pre-Prova (sintese + diferenciacoes + frase-ancora)
- Figura(s) sugerida(s) com termos Wikimedia

## Estrategia de re-disparo (apos reset)

7 agentes Sonnet em background, mas agora com prompt **focado em completar** (nao regerar do zero). Cada agente:
1. Le aula incompleta
2. Adiciona apenas as 3 secoes faltantes (Caso + Quiz + Macetes)
3. Cresce o arquivo para >=180 linhas
4. Mantem o resto intacto

Custo estimado bem menor que o redo completo (~30% do custo): ~$8-12 total.

## Pendencias pos-completar (fase 2)

- Lint v3 nos 61 arquivos finais
- Layer 2 review (Opus) das 8 aulas criticas
- 12 questoes essenciais por aula (61 aulas) -> data/questoes.json
- 12 flashcards por aula (61 aulas) -> data/flashcards.json
- Busca Wikimedia das figuras sugeridas e insercao no markdown
- Commit por sub-disciplina + push (sem firebase deploy ainda)
