# Bioestatística — Aula 12: Ensaio Clínico Randomizado e Ensaio Comunitário

**Disciplina:** Bioestatística e Estudos em Saúde
**Módulo:** 4 | **Tempo de estudo sugerido:** 10-15 min

---

## Relevância Clínica e Acadêmica

O Ensaio Clínico Randomizado (RCT) é o padrão-ouro para avaliar eficácia de intervenções — tratamentos, vacinas, programas de rastreamento. Por ser experimental e não apenas observacional, é o único design que pode controlar por confundimento desconhecido. A **Uninove** cobra os componentes do RCT (randomização, mascaramento, grupo controle), as medidas de efeito (NNT, RRR, RAR) e os princípios de análise (ITT vs per-protocol). O ensaio comunitário — versão coletiva do RCT — é cobrado em saúde coletiva.

### Figura sugerida

**Figura-ID:** `BIOE-A12-F01`

- **Momento:** após o bloco de relevância (reserva editorial para imagem no app; aparece inline quando houver URL no catálogo).
- **O que mostrar:** definir na produção — deve ilustrar o tema central da aula de forma clara em mobile.
- **Tipo sugerido:** esquema didático | ilustração estilo atlas | infográfico | foto contextual | outro.
- **Legenda (rascunho):** a fixar junto da imagem final (campo legenda em data/materiais_figuras.json).
- **Notas (opcional):** pesquisar no Wikimedia Commons (buscaCommonsEn / buscaCommonsPt no JSON); licenças livres e atribuição.




---

## 1. Definição e Posição na Hierarquia

O RCT é um estudo experimental em que participantes são **alocados aleatoriamente** a pelo menos dois grupos — tratamento (intervenção) e controle (placebo ou tratamento padrão) — e a ocorrência do desfecho é comparada entre os grupos após o período de acompanhamento.

Na hierarquia de evidências, o RCT individual está acima dos estudos observacionais (coorte, caso-controle, transversal, ecológico) porque a randomização distribui igualmente os fatores de confusão conhecidos e desconhecidos entre os grupos — garantindo que qualquer diferença observada no desfecho seja atribuível à intervenção.

---

## 2. Aleatorização (Randomização)

A **randomização** é o processo de alocar participantes ao grupo intervenção ou controle por acaso, eliminando o viés de seleção na alocação. Mecanismos: tabela de números aleatórios, software de aleatorização, envelopes opacos lacrados.

**Randomização simples:** como jogar uma moeda para cada participante.

**Randomização em blocos:** garante equilíbrio no tamanho dos grupos ao longo do tempo — útil quando o recrutamento é prolongado e as condições podem mudar.

**Randomização estratificada:** aleatoriza dentro de subgrupos (ex: por sexo, center) para garantir equilíbrio nas variáveis mais importantes entre os grupos.

> **Dica de Prova:** A randomização controla o CONFUNDIMENTO — distribui igualmente fatores conhecidos e desconhecidos entre os grupos. Nenhum outro recurso estatístico é capaz de controlar confundimento desconhecido.

---

## 3. Mascaramento (Cegamento)

O mascaramento visa eliminar viés de informação — tanto na coleta quanto na avaliação dos desfechos.

**Simples-cego (single-blind):** o participante não sabe a qual grupo pertence. Evita viés de expectativa (efeito placebo diferencial).

**Duplo-cego (double-blind):** nem o participante nem o pesquisador responsável pela coleta de dados sabem a alocação. É o padrão para RCTs farmacológicos — elimina viés de avaliação.

**Triplo-cego:** participante, pesquisador e o estatístico que analisa os dados são cegados. Máximo controle do viés de análise.

**Open-label (aberto):** sem cegamento — necessário em intervenções que não podem ser mascaradas (cirurgia vs tratamento clínico, mudança de estilo de vida). Mais sujeito a viés de performance e detecção.

---

## 4. Grupo Controle

O grupo controle pode receber:
- **Placebo:** substância inativa, indistinguível da intervenção. Padrão quando não há tratamento eficaz disponível.
- **Tratamento padrão (ativo):** quando há tratamento de eficácia comprovada — não seria ético negar a esses pacientes. A nova intervenção é comparada com o melhor tratamento disponível.
- **Nenhuma intervenção:** em estudos de rastreamento, exercício ou educação em saúde.

---

## 5. Medidas de Efeito do RCT

### 5.1 Risco Relativo (RR) e Redução de Risco Relativa (RRR)
RR = risco no grupo tratamento / risco no grupo controle

RRR = (risco controle minus risco tratamento) / risco controle = 1 minus RR

### 5.2 Redução de Risco Absoluta (RRA) e NNT
RRA = risco no controle minus risco no tratamento

**NNT (Número Necessário para Tratar):** quantos pacientes precisam ser tratados para prevenir um evento adicional.

NNT = 1 / RRA

- **NNT baixo (próximo de 1):** intervenção muito eficaz.
- **NNT alto (100, 1000):** intervenção modesta — tratar muitos para beneficiar poucos.

### 5.3 NNH (Número Necessário para Causar Dano)
Para efeitos adversos: NNH = 1 / risco absoluto de dano. NNH alto = **efeito adverso** raro.

> **Dica de Prova:** RRR impressiona mas pode enganar. Redução de 50% do risco relativo soa ótima — mas se o risco basal era de 2%, a RRA é apenas 1% e NNT = 100. Sempre analise o NNT!

---

## 6. Análise: ITT vs Per-Protocol

### 6.1 Intenção de Tratar (ITT — Intention-to-Treat)
Todos os participantes são analisados no grupo ao qual foram alocados, independentemente de terem aderido ao tratamento, abandonado o estudo ou mudado de grupo. Preserva a equivalência criada pela randomização e é o padrão para análise primária de RCTs — reflete o que acontece na prática real.

### 6.2 Per-Protocol (PP)
Analisa apenas quem completou o protocolo conforme planejado. Pode superestimar o efeito da intervenção — pois exclui não-aderentes — e viola a equivalência da randomização. Usada como análise secundária.

> **Pegadinha:** ITT pode SUBESTIMAR o efeito da intervenção (por incluir não-aderentes), mas mantém a validade da randomização. Per-protocol pode SUPERESTIMAR o efeito, pois viola a randomização.

---

## 7. Ensaio Comunitário

O ensaio comunitário é o equivalente do RCT para intervenções aplicadas a grupos ou comunidades inteiras — não a indivíduos. A unidade de randomização é a comunidade (escola, município, bairro).

Exemplos: fluoretação da água por município (com e sem), vacinação em massa de cidades selecionadas aleatoriamente, programas de educação em saúde por escola.

**Diferenças do RCT individual:**
- Unidade de randomização: comunidade (nao individuo)
- Análise estatística específica: leva em conta correlação intraclasse
- Menor número de unidades randomizadas — menor poder estatístico por design

---

## 8. Fases do Ensaio Clínico Farmacológico

| Fase | n | Objetivo |
|------|---|---------|
| Fase I | 20-80 | Segurança, farmacocinética, dose |
| Fase II | 100-300 | Eficácia inicial, efeitos adversos comuns |
| Fase III | 1.000+ | Eficácia definitiva vs controle, aprovação regulatória |
| Fase IV | Miles | Farmacovigilância pós-comercialização, efeitos raros |

---

## Pontos-Chave para Prova

- **RCT:** experimental, aleatorização elimina confundimento, padrão-ouro de eficácia.
- **Randomização:** distribui confundimento conhecido e desconhecido igualmente.
- **Duplo-cego:** participante e pesquisador cegos para a alocação.
- **NNT = 1/RRA:** quantos tratar para prevenir 1 evento. NNT baixo = intervencao eficaz.
- **ITT:** todos analisados no grupo alocado — preserva randomizaçao (análise primária).
- **Per-protocol:** só quem completou — pode superestimar efeito (análise secundária).
- **Ensaio comunitario:** randomiza grupos/comunidades, nao individuos.

---

## Ponte com a Clínica

Quase todo fármaco aprovado pela ANVISA e FDA passou por um RCT fase III bem conduzido. O CONSORT (Consolidated Standards of Reporting Trials) é o checklist internacional que toda revistas científica exige para publicação de RCTs — inclui fluxograma (diagrama CONSORT) mostrando randomização, alocação, seguimento e análise. Um médico que sabe interpretar um RCT e calcular NNT pode comparar intervenções concorrentes para escolher a mais eficaz e segura para seu paciente.

---

## Pré-Prova

> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### Síntese para a prova


RCT: padrao-ouro. Randomizacao elimina confundimento. Duplo-cego: nem participante nem pesquisador sabem a alocacao. NNT = 1/RRA. NNT baixo = intervencao muito eficaz.

RRR impressiona, NNT informa: sempre calcule o NNT antes de concluir eficacia. ITT: analise primaria, mantem randomizacao, pode subestimar efeito. Per-protocol: analise secundaria, pode superestimar efeito.

Ensaio comunitario: unidade = comunidade; menor poder que RCT individual.

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Como diferenciar |
|------------|------------|-----------------|
| ITT | Per-protocol | ITT: todos no grupo alocado (primaria); PP: so quem completou (secundaria) |
| RRR | NNT | RRR: relativa, parece grande; NNT: absoluta, revela impacto real |
| Duplo-cego | Triplo-cego | Duplo: participante + pesquisador; Triplo: inclui o estatístico |
| Fase II | Fase III | Fase II: eficácia inicial, n pequeno; Fase III: eficácia definitiva, n grande, aprovacao |

### Frase-âncora para não esquecer

> "RCT randomiza para eliminar confundimento. ITT preserva essa randomizacao. NNT traduz eficácia em linguagem clinica: quantos tratar para salvar um."