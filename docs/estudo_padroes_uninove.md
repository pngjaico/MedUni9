# Estudo de Padrões e DNA de Questões (Uninove Original)

Este documento formaliza os padrões extraídos da base "Beta" (`questoes_antigas.json`) para orientar a geração de novas questões com fidelidade absoluta ao estilo da banca Uninove.

---

## 🏗️ Triparção de Tipologias (O "Mix" Uninove)

Diferente de bancas puramente clínicas, a Uninove equilibra o lote para testar desde a base até a aplicação:

1.  **Tipo 1: Diretas (30%)**
    - Enunciados curtos e conceituais. Foco em "O que é" ou "Qual a função".
    - *Ex:* "Sobre a estrutura quaternária da hemoglobina, assinale a correta."
2.  **Tipo 2: Contexto Breve (40%)**
    - Uso de uma "âncora" técnica (droga, enzima ou sinal) sem necessariamente contar a história de um paciente.
    - *Ex:* "A Acarbose é usada no DM2. Ela inibe a quebra de ligações do tipo..."
3.  **Tipo 3: Casos Clínicos - 3 Atos (30%)**
    - Vinheta completa (Persona + Contexto + Comando).
    - *Ex:* "Mulher, 66 anos, tremor de repouso... Sobre o caso, assinale a alternativa correta."

---

## 🧪 Sinais de Rigor Técnico

| Característica | Padrão Rigor Uninove | Impacto no Aluno |
|:---|:---|:---|
| **Vocabulário** | Termos Médicos Oficiais | Exige que o aluno domine a linguagem técnica. |
| **Distratores** | Coerentes e Semânticos | Evita o acerto por exclusão de opções absurdas. |
| **Complexidade** | Nível Padrão-Ouro | Alinhado com Guyton, Moore e Robbins. |

---

## 🚫 Anti-Padrões (O que EVITAR)

- **Pergunta de Definição Direta:** "O que é glicogenólise?".
    - *Correção:* "Um paciente em jejum prolongado depende da manutenção da glicemia. Qual hormônio ativa a via de quebra do estoque hepático?".
- **Metalinguagem:** "Como vimos na aula...", "De acordo com o material do módulo...".
- **Gabarito Evidente:** Opções que saltam aos olhos por serem muito mais longas ou curtas que as outras.

---

## 🎯 Aplicação no MedGradPlus

As novas questões geradas em `data/questoes_ineditas.json` devem:
1.  **Mimetizar o tom clínico** descrito acima.
2.  **Manter a estética Elite** (negritos em termos-chave nas explicações).
3.  **Garantir a estanqueidade** (ser autossuficiente).
