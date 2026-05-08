# Seleção de Modelo para Agentes — MedGradPlus

> Guia operacional para decidir entre **Haiku 4.5**, **Sonnet 4.6** e **Opus 4.7** ao spawnar agentes neste projeto. Escrito para minimizar custo sem sacrificar qualidade clinica e pedagogica.
>
> **Versao 1.0 — 2026-05-07.**

---

## TL;DR — decisao em 30 segundos

| Tarefa | Modelo |
|---|---|
| Gerar material de aula seguindo prompt v3 detalhado | **Sonnet** |
| Gerar questoes/flashcards seguindo schema rigido | **Sonnet** |
| Curadoria binaria (relevante? sim/nao) em centenas de itens | **Haiku** |
| Extracao de campos de PDFs antigos | **Haiku** |
| Revisao clinica Layer 2 (doses, condutas, padrao-ouro) | **Opus** |
| Critica de qualidade de material gerado | **Opus** |
| Decisao de arquitetura ambigua (qual estrutura escolher?) | **Opus** |
| Geracao de boilerplate (script, regex, README) | **Sonnet** |
| Revisao de codigo com regras claras | **Sonnet** |
| Refatoracao com escopo aberto | **Opus** |

**Regra pratica:** comece em Sonnet. Suba para Opus so quando o problema exigir julgamento clinico nuancado ou raciocinio aberto. Desca para Haiku quando a tarefa e mecanica e o erro e barato.

---

## 1. Por modelo

### Haiku 4.5 — o operario rapido

- **Forte:** classificacao, extracao, formatacao, lookups, sumarizacao curta
- **Fraco:** raciocinio multi-passo, julgamento clinico, geracao criativa
- **Custo relativo:** 1x (baseline)
- **Use quando:** o erro e detectavel e barato de corrigir

**Use cases MedGradPlus:**
- Curadoria binaria do CSV de inventario do legado (112 candidatos: relevante? Y/N)
- Extracao estruturada de questoes de PDFs antigos (enunciado, opcoes, gabarito)
- Normalizacao de tags em flashcards
- Conversao de listas Excel/CSV para JSON
- Validacao rapida de schema (este JSON tem todos os campos obrigatorios?)
- Renomear arquivos em batch seguindo padrao

**Nao use para:**
- Gerar enunciado clinico
- Decidir se uma fonte esta atualizada
- Sintetizar diretrizes medicas
- Escrever explicacoes de mecanismo de drogas

### Sonnet 4.6 — o cavalo de batalha

- **Forte:** seguir prompts longos e estruturados, codigo, escrita tecnica, conteudo medico com prompt detalhado
- **Fraco:** julgamento ambiguo sem orientacao, decisoes de design abertas
- **Custo relativo:** 3-4x Haiku
- **Use quando:** a tarefa tem rubrica clara e o output tem schema definido

**Use cases MedGradPlus:**
- **Geracao de material v3** (61 aulas) seguindo prompt v3 + persona + fontes + macetes
- **Geracao de questoes essenciais** (12 por aula) seguindo schema JSON do app
- **Geracao de flashcards** com cloze deletion `{{c1::resposta}}`
- Implementar/debugar scripts (lint v3, fix_materiais, inventariar_legado)
- Escrever testes unitarios
- Refatoracao com escopo definido
- Busca de figuras Wikimedia + insercao no markdown

**Nao use para:**
- Layer 2 clinical review (precisa Opus)
- Decidir arquitetura de novo modulo do zero
- Resolver conflito entre fontes (Cecil diz X, SBC diz Y)

### Opus 4.7 — o consultor senior

- **Forte:** raciocinio aberto, julgamento nuancado, sintese de areas conflitantes, critica
- **Fraco:** repeticao mecanica, tarefas onde o prompt ja da toda a resposta
- **Custo relativo:** 15-20x Haiku, 4-5x Sonnet
- **Use quando:** errar e caro e o problema exige discernimento

**Use cases MedGradPlus:**
- **Layer 2 clinical review** das aulas criticas: doses corretas? padrao-ouro atual? guideline 2024-2026?
- **Critica de material gerado** (Sonnet escreveu, Opus revisa as 6-8 aulas mais delicadas)
- Decisao sobre arquitetura quando a documentacao e ambigua
- Resolver conflitos entre fontes (Cecil diz X, SBC 2025 diz Y)
- Planejamento de ciclo (foi o que fizemos no PLANO_CICLO_CLINICO)
- Resposta direta a voce quando o problema e de produto/escopo
- Diagnostico de bug obscuro com sintomas conflitantes

**Nao use para:**
- Gerar 12 questoes seguindo template (desperdicio de capacidade)
- Rodar linter (Sonnet basta)
- Criar pastas/copiar arquivos (Bash basta)
- Geracao bulk de qualquer coisa

---

## 2. Anti-padroes observados

### 2.1 Opus para geracao em massa

Se o prompt e detalhado e o output tem schema, Sonnet entrega ~95% da qualidade por 20% do custo. Reserve Opus para o que precisa de julgamento.

**Sintoma:** voce gastou $200 gerando 60 aulas e a diferenca para Sonnet seriam ajustes de tom em 3 paragrafos.

### 2.2 Haiku para conteudo clinico

Haiku tem mais alucinacoes em terminologia medica e mais erros em doses/condutas. **Nunca** use Haiku para gerar enunciado, explicacao clinica ou flashcard de farmacologia.

**Sintoma:** flashcard com dose errada de furosemida, mecanismo de ARA II descrito como bloqueador beta.

### 2.3 Sonnet para revisao clinica

Sonnet erra ao "validar" condutas — confirma quando deveria questionar. Layer 2 (revisao) precisa Opus.

**Sintoma:** material aprovado pelo Sonnet recomendava sepse-2 em vez de Sepse-3, e Sonnet "validou".

### 2.4 Pular cache

Quando spawnar N agentes Sonnet com o mesmo bloco de contexto fixo (persona + prompt v3 + fontes + macetes), o prompt cache da Anthropic da ~85% desconto a partir do 2o agente. Mantenha o bloco fixo identico entre agentes.

**Sintoma:** custo de geracao cresce linear com N, nao logaritmico.

### 2.5 Modelo unico para todo o pipeline

Pipeline otimo: Haiku triagem -> Sonnet geracao -> Opus revisao -> humano aprovacao. Use o melhor modelo por etapa.

---

## 3. Aplicacao concreta — refazer Modulo 6 (61 aulas)

### Distribuicao por fase

| Fase | Tarefa | Modelo | Volume | Justificativa |
|---|---|---|---|---|
| 0 | Limpar estado (arquivar, backup) | — | shell/Python | sem agente |
| 1 | Geracao de material v3 | **Sonnet** | 61 aulas em 7 batches | prompt rigido, schema claro |
| 2 | Lint v3 + correcao | **Sonnet** | ate 61 chamadas | regras deterministicas |
| 3 | Layer 2 clinical review | **Opus** | 6-8 aulas criticas | julgamento clinico |
| 4 | Geracao de questoes (12/aula) | **Sonnet** | 61 aulas em 7 batches | schema JSON estrito |
| 5 | Geracao de flashcards (12/aula) | **Sonnet** | 61 aulas em 7 batches | template cloze |
| 6 | Busca de figuras Wikimedia | **Sonnet** com WebSearch | 61 aulas | extracao estruturada |
| 7 | Aprovacao final | **humano + Opus** | sample 10% | calibracao de qualidade |

**Aulas criticas para Layer 2 Opus:**
- cm6_a1 (cirrose) — Child-Pugh, MELD, condutas em descompensacao
- cm6_a6 (leucemias) — protocolos quimio, indicacoes de transplante
- cm6_a14 (LES) — criterios SLICC/EULAR, imunossupressao
- cm6_a16 (dor cronica) — escada OMS, opioides, equianalgesia
- cir6_a1 (abdome agudo) — algoritmo decisorio, criterios cirurgicos
- cir6_a2 (apendicite) — criterios Alvarado, indicacao de imagem
- cir6_a5 (pancreatite) — Atlanta 2012, BISAP, suporte
- cir6_a8 (hemorragia digestiva) — Forrest, Glasgow-Blatchford, ROCKALL

### Custo estimado

- Fase 1+4+5+6 (Sonnet bulk): ~1.3M tokens output -> **~$25-30**
- Fase 3 (Opus review 8 aulas): ~80k tokens -> **~$8-12**
- **Total estimado: $35-45**

### Por que nao tudo Opus?

A diferenca qualitativa Opus vs Sonnet em geracao estruturada com prompt v3 e pequena (~5-10% em aspectos sutis de tom). Nao justifica 4-5x o custo quando o material gerado vai passar por:
- Lint v3 automatizado (acha problemas estruturais)
- Layer 2 review (acha erros clinicos)
- Sample humano (acha tom)

### Por que nao tudo Haiku?

Haiku perde fidelidade clinica em conteudo aberto. Erros incluem: inverter mecanismo de drogas, confundir guidelines, simplificar excessivamente cenarios, errar dose. Em material que vai pra aluno de medicina, isso e inaceitavel.

---

## 4. Como invocar cada modelo

No tool `Agent`, passe `model` explicito:

```
Agent({
  description: "Gerar materiais cm6_a1 a cm6_a8",
  subagent_type: "general-purpose",
  model: "sonnet",
  prompt: "..."
})
```

Modelos aceitos: `"haiku"`, `"sonnet"`, `"opus"`. Se omitir, herda do agente pai.

**Importante:** o modelo do agente pai (orquestrador, geralmente Opus) **nao muda** quando spawnamos filhos Sonnet. O pai continua orquestrando em Opus, eles executam em Sonnet. Esse e o padrao certo.

---

## 5. Padroes de spawn

### 5.1 Wave paralela

Para tarefas independentes (cada batch de aulas e independente):

```
Spawn 7 agents Sonnet em paralelo, cada um com escopo proprio
-> menor wallclock time
-> mais context fragmentation
-> maior chance de erro em algum batch
```

Use quando: tarefa repetitiva, sem dependencias, deadline curto.

### 5.2 Wave sequencial

Para tarefas com dependencia (ex: questoes precisam do material pronto):

```
Wave 1: 7 agents Sonnet -> materiais
Wait
Wave 2: 7 agents Sonnet -> questoes (le materiais da wave 1)
Wait
Wave 3: 7 agents Sonnet -> flashcards
```

Use quando: dependencia forte, validacao intermediaria.

### 5.3 Background

Use `run_in_background: true` quando o agente vai rodar > 10 min. Ele notifica ao terminar; o orquestrador segue trabalhando em outras coisas.

```
Agent({
  ...,
  run_in_background: true
})
```

---

## 6. Quando reavaliar este guia

- Quando Anthropic lancar nova geracao (5.x) os ratios de custo/qualidade mudam
- Quando o prompt cache mudar de TTL ou desconto
- Quando observarmos erro clinico repetido em saida Sonnet (sobe pra Opus)
- Quando observarmos Haiku acertando casos que pensavamos exigir Sonnet (desce)
- Apos cada modulo concluido, revisar custo real vs estimado
