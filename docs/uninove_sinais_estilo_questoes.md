# Sinais de Estilo da Banca Uninove — Guia Completo de Estilização

Atualizado em: 2026-04-17.  
Complementar a: [`prompts/gerar_questoes_flashcards.md`](../prompts/gerar_questoes_flashcards.md) e [`docs/playbook_questoes_uninove_replicavel.md`](playbook_questoes_uninove_replicavel.md).

---

## 1. Fontes Analisadas e Qualidade dos Dados de Origem

| Fonte | Itens | Observação |
|-------|-------|-----------|
| `conteudos/_para_categorizar/questoes_todas.json` | ~1541 | Base bruta extraída de provas/atividades antigas |
| `conteudos/_para_categorizar/questoes_categorizadas.json` | 153 `precisa_revisao: false` | Subconjunto mais confiável para extração de estilo |

**Ruídos frequentes encontrados:** timestamps, URLs de Google Forms, trechos quebrados por OCR e mistura de enunciado/opções.  
**Conclusão:** usar como **sinal de estilo**, nunca como gabarito de conteúdo.

---

## 2. Como a Uninove Formula as Questões

### 2.1 Estrutura geral de enunciado (padrão dominante)

A Uninove adota o modelo **contexto → pergunta objetiva**. O enunciado apresenta:

1. **Cenário clínico ou conceitual** (1–3 frases densas) que ancora o aluno num problema real.
2. **Comando de decisão** — sempre direto: "Assinale", "Qual", "Em relação a..., é CORRETO afirmar que", "A alternativa INCORRETA é".
3. **Dados autossuficientes:** VR de laboratório fornecidos quando necessário.

#### Padrão de comprimento
- Média histórica de enunciado: ≈ **166 caracteres**
- Questões de caso clínico: 200–400 caracteres (vinheta completa)
- Questões conceituais/diretas: 80–140 caracteres

#### Exemplos de aberturas típicas da Uninove (use como molde, variando)

| Abertura | Tipo de questão |
|----------|----------------|
| "Um homem de 45 anos, hipertenso e etilista, é atendido…" | Caso clínico |
| "Em relação ao ciclo de Krebs, é CORRETO afirmar que…" | Conceitual |
| "Sobre os princípios do SUS, assinale a alternativa CORRETA:" | Direta/definição |
| "Uma paciente de 32 anos, G2P1A0, apresenta…" | Caso clínico obstétrico |
| "Qual é o mecanismo de ação do fármaco X…" | Mecanismo/farmacologia |
| "A figura/tabela abaixo representa…" *(quando há imagem)* | Interpretação de dado |
| "Identifique a alternativa INCORRETA a respeito de…" | Pegadinha/negativa |

> ⚠️ **Anti-sinal:** Nunca iniciar com "Na aula…", "Conforme estudado…", "O material afirma que…" — essas aberturas são metalinguagem proibida.

---

### 2.2 Tipologia de questões por frequência na banca Uninove

| Tipo | Frequência estimada | Características |
|------|---------------------|-----------------|
| **Caso clínico integrado** | ~40% | Vinheta completa (persona + dado + decisão); `caso_clinico: true` |
| **Mecanismo/Via** | ~25% | "Qual enzima regula…?", "O mecanismo de…?"; fisiologia e bioquímica |
| **Associação anatômica** | ~15% | Estrutura → função, topografia, correlação com exame de imagem |
| **Conceitual/Definição** | ~12% | Princípios (SUS, ética), classificações, nomenclatura |
| **Interpretação de dado** | ~8% | Hemograma, gasometria, ECG, curvas, tabelas reproduzidas |

---

### 2.3 Como a Uninove constrói as alternativas

#### Regras observadas
- **4 alternativas** no app (banca original usava 5; mantemos 4 com densidade equivalente).
- Alternativas redigidas como **frases completas** ou **fragmentos comparativos** (nunca colunas de tabela).
- A correta *não* deve ser detectável por tamanho, nível de detalhe ou especificidade excessiva.
- Distratores são **erros lógicos plausíveis dentro do mesmo microtema**:
  - Trocas de enzimas/hormônios da mesma via
  - Inversão de sentidos (ativa vs inibe, aumenta vs diminui)
  - Cortes temporais errados (fase folicular vs lútea)
  - Confusão de camadas / compartimentos / fases
  - Números ligeiramente errados (ex: pH 7,35 vs 7,45)

#### Distribuição de gabarito (A/B/C/D)
- Meta: **≈ 25% por letra** por lote de 10 questões.
- Verificar após gerar: nenhuma letra com >35% ou <15%.

---

### 2.4 Casos clínicos ("3 Atos") — o padrão obrigatório

Para questões com `caso_clinico: true`, a estrutura mínima é:

```
Ato 1 — Persona: "Homem, 54 anos, etilista, tabagista..."
Ato 2 — Dado/Labs: "Apresenta dispneia progressiva, SpO₂ 88%, VEF1/CVF 0,62..."
Ato 3 — Comando: "Qual é o mecanismo fisiopatológico central responsável por esse achado?"
```

**Critério "caso clínico real" (não decorativo):** os dados do Ato 2 devem ser **necessários** para responder corretamente. Se o enunciado puder ser respondido sem a vinheta → não é caso clínico real → marcar `caso_clinico: false`.

#### Tipologia clínica frequente na Uninove (Módulos 1–4)

| Módulo | Perfis de paciente mais cobrados |
|--------|----------------------------------|
| 1 | Adulto jovem atleta (lesão muscular), idoso (fratura osteoporótica), DM2 em jejum prolongado |
| 2 | Lactente (infecção/vacinação), adulto hipertenso (ICC, DPOC), paciente com dispneia |
| 3 | Gestante (hepatite B, Toxoplasma), imunossuprimido (HIV, transplante), trabalhador exposto |
| 4 | Idoso com AVC, adulto com crise epiléptica, DM em CAD, usuário de corticoide |

---

## 3. Estilo de Linguagem e Formatação

### 3.1 Termos obrigatórios (nunca simplificar)
- Nomes enzimáticos corretos: **fosfofrutocinase-1 (PFK-1)**, não "enzima da glicólise"
- Receptores com subtipo: **β1**, **M2**, **GPCR**, não "receptor simpático"
- Valores com unidade: **7.35–7.45** (pH), **125 mL/min** (TFG), **200 células/mm³** (CD4/AIDS)
- Siglas explicadas na 1ª ocorrência do enunciado: ex. **TFG (taxa de filtração glomerular)**

### 3.2 Negritos estratégicos nas explicações (Elite Bolding)
Aplicar negritos para:
- Termos-chave que o aluno deve fixar (ex.: **aciclovir**, **PFK-1**, **tríade de Virchow**)
- Verbos de decisão clínica (**diagnosticar**, **tratar**, **contraindicar**)
- Palavras de discriminação (correta vs incorreta): **[CORRETA]**, **[INCORRETA]**

### 3.3 Estrutura de explicação por alternativa

```
"explicacao_geral": "Parágrafo técnico de 100+ chars sobre o mecanismo central da questão.",
"explicacoes_opcoes": {
  "A": "[INCORRETA] Motivo específico: confunde X com Y. [Mecanismo real: ...].",
  "B": "[CORRETA] Justificativa da veracidade: ... [Base: Guyton cap. X / Abbas cap. Y].",
  "C": "[INCORRETA] Erro lógico: inverte a regulação de ... / troca enzima ... por ...",
  "D": "[INCORRETA] Distrator temporal/conceitual: acontece na fase X, não Y."
}
```

> **Proibido:** explicação genérica tipo "Alternativa incorreta." Cada letra deve ter justificativa específica ao conteúdo daquela questão.

---

## 4. Referências Bibliográficas por Disciplina (Fontes para Estilo e Conteúdo)

Use as referências abaixo para calibrar **terminologia, valores de referência e condutas clínicas** ao gerar questões. Em conflito, prevalece a ordem (livro principal → referência secundária → guideline).

### Módulo 1

| Disciplina | Livro Principal | Livro Secundário | Guideline/Norma |
|-----------|-----------------|------------------|-----------------|
| **BMF1** (anatomia/histologia locomotor e digestório) | Moore — *Anatomia Orientada para a Clínica* 8ª ed. | Junqueira — *Histologia Básica* 13ª ed. | — |
| **PMH** (bioquímica/metabolismo) | Lehninger — *Princípios de Bioquímica* 7ª ed. | Devlin — *Bioquímica* | — |
| **SEMIO1** (semiologia musculoesquelética) | Porto — *Semiologia Médica* 8ª ed. | Bates — *Propedêutica Médica* | — |
| **SUS** (saúde coletiva e políticas) | Gastão Wagner (org.) — *Tratado de Saúde Coletiva* | Rouquayrol — *Epidemiologia & Saúde* | Leis 8.080/1990, 8.142/1990; CF art. 196-200 |

### Módulo 2

| Disciplina | Livro Principal | Livro Secundário | Guideline/Norma |
|-----------|-----------------|------------------|-----------------|
| **BCM1** (biologia celular e genética) | Alberts — *Biologia Molecular da Célula* 6ª ed. | Thompson — *Genética Médica* | — |
| **BMF2** (CardioRespira fisiologia/anatomia/histologia) | Guyton & Hall — *Tratado de Fisiologia* 14ª ed. | Costanzo — *Fisiologia* | — |
| **MAD1** (imunologia e infectologia básica) | Abbas — *Imunologia Celular e Molecular* 10ª ed. + Murray — *Microbiologia Médica* 9ª ed. | Janeway — *Imunobiologia* + Trabulsi — *Microbiologia* | MS — *Manual de Vigilância Epidemiológica* |
| **IND** (epidemiologia e bioestatística básica) | Medronho — *Epidemiologia* 2ª ed. | Rouquayrol — *Epidemiologia & Saúde* | — |
| **SEMIO2** (semiologia cardiorrespiratória) | Porto — *Semiologia Médica* 8ª ed. | Bates — *Propedêutica Médica* | — |
| **DS** (dimensões socioambientais) | ODS/OMS docs | — | PNRS, PNRH |

### Módulo 3

| Disciplina | Livro Principal | Livro Secundário | Guideline/Norma |
|-----------|-----------------|------------------|-----------------|
| **BMF3** (digestório/renal/reprodutor) | Guyton & Hall — *Tratado de Fisiologia* 14ª ed. (caps. GI + Renal) | Junqueira — *Histologia Básica* + Moore | — |
| **FP3** (fisiopatologia e farmacoterapia) | Robbins & Cotran — *Bases Patológicas* 10ª ed. | Katzung — *Farmacologia* 15ª ed. | MS — Protocolos Clínicos; ANVISA |
| **MAD2** (imunologia sistêmica e infectologia + antibióticos) | Abbas + Murray | Katzung (antibióticos) | MS — *DST/AIDS*; OMS — Guia Antibióticos |
| **ST** (saúde do trabalhador) | Rey (para parasitologia) | — | NRs 1, 6, 7, 15, 17, 32; Lei 8.213/91; PNSTT |
| **SEMIO3** (semiologia abdominal/renal/reprodutor) | Porto — *Semiologia Médica* | Bates | — |

### Módulo 4

| Disciplina | Livro Principal | Livro Secundário | Guideline/Norma |
|-----------|-----------------|------------------|-----------------|
| **BMF4** (neuroanatomia, sensorial e endócrino) | Guyton & Hall (caps. neuro + endócrino) | Kandel — *Princípios de Neurociências* 5ª ed. | — |
| **FF4** (fisiopatologia e farmaco neuroendócrino) | Robbins & Cotran + Katzung | Rang & Dale — *Farmacologia* | Diretrizes ADA (DM); SBN; SBC |
| **BIOE** (bioestatística e epidemiologia analítica) | Hulley — *Delineando a Pesquisa Clínica* 4ª ed. | Pagano — *Princípios de Bioestatística* | CONSORT (ECR); STROBE (observacional) |
| **SEMIO4** (semiologia neurológica) | Porto — *Semiologia Médica* (cap. neurológico) | Bates | — |

---

## 5. Anti-Sinais (o que NUNCA fazer)

| Antipadrão | Exemplo proibido | Correção |
|---|---|---|
| Metalinguagem no enunciado | "Na aula sobre glicólise, aprendemos que…" | "A PFK-1 é ativada por…" |
| Alternativa correta evidente por tamanho | Correta com 3 linhas; erradas com 1 linha | Equilibrar extensão de todas as alternativas |
| Distrator de capítulo distante | Questão de ATP pergunta sobre insulina como distrator | Distratores sobre outras enzimas da mesma via |
| Vinheta decorativa | "João, 35 anos, saudável, estuda bioquímica…" | Incluir dado clínico que determine a resposta |
| Enunciado metatextual | "Assinale o item que melhor integra conceito X…" | Formular pergunta médica direta |
| Alternativa-cabeçalho de tabela | "A – Via aérea; B – Via digestória; C – Via…" | Alternativas em forma de afirmação completa |
| Instrução ao aluno no enunciado | "Use raciocínio clínico para…" | Enunciado clínico direto |
| Repetição de molde | Todas as questões começando "Qual afirmação sobre…" | Variar abertura e estrutura |
| Placeholder genérico | "…mantém coerência com o assunto" | Conteúdo médico específico |
| Concentração de gabarito | 7/10 questões com `correta: 1` (letra B) | Redistribuir para ~25% por letra |

---

## 6. Checklist de Calibração Pré-Geração (ler antes de começar cada disciplina)

- [ ] Leu `docs/MAPA_CURRICULAR_ELITE.md` para obter tópicos essenciais da aula.
- [ ] Leu o `.md` da aula em `data/materiais/<materia>/<aula_id>.md`.
- [ ] Identificou o **livro-texto canônico** da disciplina (tabela do item 4 deste arquivo).
- [ ] Confirmou a tipologia de questão dominante da disciplina (caso clínico % esperado).
- [ ] Verificou o perfil de paciente mais cobrado para aquela disciplina (tabela item 2.4).
- [ ] Garantiu que nenhuma abertura de questão vai repetir a mesma fórmula no lote.
- [ ] Vai executar passada qualitativa após gerar o lote (remover metalinguagem residual).

---

## 7. Uso Recomendado deste Documento

Este documento deve orientar:

1. **Geração nova** — ajuste de tom, tipologia, linguagem e fonte ao produzir questões por IA.
2. **Curadoria** — guia de auditoria "estilo faz PASS?" dentro da rubrica do playbook.
3. **Prompts operacionais por disciplina** — cada arquivo em `prompts/prompts questões/*.md` deve referenciar este documento como calibrador de estilo.
4. **Gate de qualidade** — qualquer lote que viole os anti-sinais do item 5 deve ser descartado e refeito.

---

*Referência cruzada: ver também [`docs/playbook_questoes_uninove_replicavel.md`](playbook_questoes_uninove_replicavel.md) (ciclo obrigatório, rubrica e relatório de ciclo) e [`prompts/gerar_questoes_flashcards.md`](../prompts/gerar_questoes_flashcards.md) (regras técnicas de JSON e validação).*
