import json

batch_11_reviewed = [
  {
    "id": 1225,
    "materia": "indicadores",
    "tema": "ind_a8",
    "enunciado": "Na análise estatística de um estudo epidemiológico, o pesquisador deve evitar erros de inferência. Qual a diferença fundamental entre o **Erro Tipo I** e o **Erro Tipo II**?",
    "opcoes": [
      "A) Tipo I é um falso negativo; Tipo II é um falso positivo",
      "B) Ambos referem-se apenas ao tamanho da amostra (n)",
      "C) **Erro Tipo I** é um **Falso Positivo** (rejeitar H0 sendo ela verdadeira); **Erro Tipo II** é um **Falso Negativo** (não rejeitar H0 sendo ela falsa)",
      "D) Erro Tipo I ocorre apenas em estudos qualitativos"
    ],
    "correta": 2,
    "dificuldade": 3,
    "modulo": 2,
    "explicacao_geral": "Os erros de hipótese são conceitos fundamentais da bioestatística.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: As definições estão invertidas.",
      "B": "INCORRETA: Embora o tamanho da amostra influencie o poder do teste, os erros referem-se à decisão sobre a hipótese nula.",
      "C": "CORRETA: O **Erro Alfa (Tipo I)** é achar que há diferença quando não há. O **Erro Beta (Tipo II)** é não detectar uma diferença que realmente existe.",
      "D": "INCORRETA: São conceitos de estatística inferencial (quantitativa)."
    },
    "explicacao": "Mnemônico: **I** = **I**nventou uma diferença. **II** = **I**gnorou uma diferença.",
    "aula_id": "ind_a8"
  },
  {
    "id": 1234,
    "materia": "indicadores",
    "tema": "ind_a8",
    "enunciado": "A aplicação de medidas que visam **evitar a ocorrência** de uma doença na população, agindo sobre os determinantes e fatores de risco antes que a patologia se instale, é classificada como:",
    "opcoes": [
      "A) Prevenção Primária",
      "B) Prevenção Secundária",
      "C) Prevenção Terciária",
      "D) Prevenção Quaternária"
    ],
    "correta": 0,
    "dificuldade": 2,
    "modulo": 2,
    "explicacao_geral": "Os níveis de Leavell & Clark definem as fases da intervenção em saúde.",
    "explicacoes_opcoes": {
      "A": "CORRETA: A **Prevenção Primária** atua no período pré-patogênico (ex: vacinação, uso de preservativos, saneamento).",
      "B": "INCORRETA: A secundária foca no diagnóstico precoce e tratamento imediato de doenças já instaladas.",
      "C": "INCORRETA: A terciária foca na reabilitação e redução de sequelas crônicas.",
      "D": "INCORRETA: A quaternária foca em evitar a iatrogenia (excesso de intervenção médica)."
    },
    "explicacao": "Resumo: **Primária = Antes da doença**. Evita o surgimento do caso.",
    "aula_id": "ind_a8"
  },
  {
    "id": 1240,
    "materia": "indicadores",
    "tema": "ind_a8",
    "enunciado": "O conceito de **Prevenção Quaternária** tem ganhado destaque na Atenção Primária à Saúde. Qual o seu objetivo principal?",
    "opcoes": [
      "A) Realizar cirurgias complexas em ambiente hospitalar",
      "B) Identificar pacientes em risco de **sobremedicalização** e evitar intervenções médicas desnecessárias ou iatrogênicas",
      "C) Vacinar 100% da população infantil",
      "D) Promover a reabilitação física de pacientes amputados"
    ],
    "correta": 1,
    "dificuldade": 3,
    "modulo": 2,
    "explicacao_geral": "A prevenção quaternária protege o paciente do próprio sistema de saúde quando este é excessivo.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: Isso seria nível secundário/terciário de atenção.",
      "B": "CORRETA: A **Prevenção Quaternária** visa detectar o risco de intervenções excessivas (exames desnecessários, tratamentos sem evidência) que podem causar mais dano que benefício (Primum non nocere).",
      "C": "INCORRETA: Vacinação é prevenção primária.",
      "D": "INCORRETA: Reabilitação é prevenção terciária."
    },
    "explicacao": "Gatilho: **Quaternária = Contra a Iatrogenia / Excesso de Medicina**.",
    "aula_id": "ind_a8"
  },
  {
    "id": 1269,
    "materia": "indicadores",
    "tema": "ind_a8",
    "enunciado": "Em epidemiologia, distinguir **Prevalência** de **Incidência** é crucial. Qual a definição correta de Incidência?",
    "opcoes": [
      "A) É o número total de casos (antigos + novos) em um dado momento",
      "B) É o número de **casos novos** que surgem em uma população em risco durante um período específico",
      "C) É a taxa de mortalidade infantil de uma cidade",
      "D) É o número de pessoas que se curaram da doença"
    ],
    "correta": 1,
    "dificuldade": 2,
    "modulo": 2,
    "explicacao_geral": "Incidência mede velocidade e risco; Prevalência mede a carga da doença na população.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: Esta é a definição de Prevalência.",
      "B": "CORRETA: A **Incidência** foca estritamente nos novos eventos. É o melhor indicador para avaliar se uma epidemia está em expansão.",
      "C": "INCORRETA: Mortalidade é outro tipo de indicador de saúde.",
      "D": "INCORRETA: Isso refere-se à taxa de cura ou remissão."
    },
    "explicacao": "Ponto de Prova: **Incidência = Casos NOVOS**. **Prevalência = Casos TOTAIS**.",
    "aula_id": "ind_a8"
  }
]

def update_batch(batch):
    with open('data/questoes.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    questoes_map = {q['id']: q for q in data['questoes']}
    updated_count = 0
    for q_new in batch:
        if q_new['id'] in questoes_map:
            questoes_map[q_new['id']].update(q_new)
            updated_count += 1
    with open('data/questoes.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"Updated {updated_count} questions in Batch 11.")

if __name__ == "__main__":
    update_batch(batch_11_reviewed)
