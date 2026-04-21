import json

batch_9_reviewed = [
  {
    "id": 1003,
    "materia": "bmf2",
    "tema": "bmf2_a2",
    "enunciado": "O fenômeno do **Rigor Mortis** (rigidez cadavérica) demonstra uma necessidade bioquímica fundamental para o **Relaxamento Muscular**. O que falta no corpo logo após a morte para que o músculo relaxe?",
    "opcoes": [
      "A) Falha no nervo motor primário",
      "B) Excesso de sangue oxigenado",
      "C) Falta de **ATP**, necessário para que a cabeça da miosina se desprenda da actina",
      "D) Falta de cálcio livre no citoplasma"
    ],
    "correta": 2,
    "dificuldade": 2,
    "modulo": 2,
    "explicacao_geral": "O relaxamento é um processo que consome energia de forma ativa.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: A rigidez ocorre independentemente da atividade nervosa após o óbito.",
      "B": "INCORRETA: O corpo para de oxigenar os tecidos após a morte.",
      "C": "CORRETA: No ciclo das pontes cruzadas, a ligação de uma nova molécula de **ATP** à cabeça da miosina é o que causa a sua dissociação da actina. Sem produção de ATP, as pontes ficam 'travadas', gerando a rigidez.",
      "D": "INCORRETA: Pelo contrário, as membranas falham e o cálcio vaza para o citoplasma, promovendo a ligação inicial (mas sem ATP, não solta mais)."
    },
    "explicacao": "Conceito Central: **ATP** é necessário tanto para a contração quanto para o **Descolamento (Relaxamento)** miosina-actina.",
    "aula_id": "bmf2_a2"
  },
  {
    "id": 1009,
    "materia": "bmf2",
    "tema": "bmf2_a2",
    "enunciado": "Durante uma cirurgia eletiva, após a administração de um anestésico inalatório (ex: Halotano), o paciente apresenta rigidez muscular generalizada e temperatura subindo para 41ºC. O diagnóstico é **Hipertermia Maligna**. Qual o defeito fisiológico primário?",
    "opcoes": [
      "A) Defeito nos canais de **Rianodina (RYR1)**, provocando liberação descontrolada de Cálcio do Retículo Sarcoplasmático",
      "B) Bloqueio irreversível da enzima Acetilcolinesterase",
      "C) Perda súbita de todas as mitocôndrias musculares",
      "D) Estímulo excessivo dos receptores de Adrenalina no coração"
    ],
    "correta": 0,
    "dificuldade": 3,
    "modulo": 2,
    "explicacao_geral": "A hipertermia maligna é uma urgência farmacogenética grave.",
    "explicacoes_opcoes": {
      "A": "CORRETA: Mutações nos receptores de **Rianodina** fazem com que estes se 'abram' demais em resposta aos anestésicos, inundando o citoplasma de Cálcio. Isso gera contração muscular sustentada, queima massiva de ATP e calor letal.",
      "B": "INCORRETA: Este seria o mecanismo de intoxicação por organofosforados.",
      "C": "INCORRETA: As mitocôndrias continuam funcionando e até aceleram para tentar repor o ATP consumido.",
      "D": "INCORRETA: A alteração primária é muscular esquelética, não adrenérgica cardíaca."
    },
    "explicacao": "Resumo Clínico: **RYR1 + Anestésico = Vazamento de Cálcio = Hipertermia Maligna**.",
    "aula_id": "bmf2_a2"
  },
  {
    "id": 1014,
    "materia": "bmf2",
    "tema": "bmf2_a2",
    "enunciado": "Qual a função primordial do **Nó Atrioventricular (AV)** para a mecânica cardíaca eficiente durante o ciclo cardíaco?",
    "opcoes": [
      "A) Maximizar a frequência de disparo acima do nó sinoatrial",
      "B) Bloquear completamente a passagem de estímulos elétricos em repouso",
      "C) Introduzir um **atraso fisiológico** na condução, permitindo o enchimento ventricular completo antes da sístole ventricular",
      "D) Acelerar o impulso para que átrios e ventrículos contraiam simultaneamente"
    ],
    "correta": 2,
    "dificuldade": 2,
    "modulo": 2,
    "explicacao_geral": "O tempo no coração é tudo para garantir o débito cardíaco.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: O marcapasso principal é o nó SA.",
      "B": "INCORRETA: O nó AV deve conduzir o estímulo, apenas com um atraso calculado.",
      "C": "CORRETA: O **atraso no nó AV** (~0,1s) é essencial para que o sangue atrial seja ejetado para os ventrículos antes que estes iniciem sua contração. Sem o atraso, o ventrículo contrairia sobre átrios ainda cheios.",
      "D": "INCORRETA: Se contraírem juntos, a eficiência do bombeamento cai drasticamente (falta o 'enchimento atrial adicional')."
    },
    "explicacao": "Ponto de Prova: **Nó AV = Atraso Fisiológico** (Sincronia Atrioventricular).",
    "aula_id": "bmf2_a2"
  },
  {
    "id": 1030,
    "materia": "bmf2",
    "tema": "bmf2_a2",
    "enunciado": "Na avaliação diagnóstica de uma lesão suspeita de **Melanoma**, o patologista documenta o **Índice de Breslow**. O que este índice mede e qual sua importância prognóstica?",
    "opcoes": [
      "A) A distância entre a mancha e o linfonodo mais próximo",
      "B) O número total de mitoses em 24 horas",
      "C) A coloração exata (escala de marrom a preto)",
      "D) A **espessura/profundidade vertical** da invasão tumoral na derme (em milímetros)"
    ],
    "correta": 3,
    "dificuldade": 3,
    "modulo": 2,
    "explicacao_geral": "O melanoma é altamente agressivo e sua profundidade dita o risco de metástase.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: Isso faria parte do estadiamento N (Nodal), mas não é o Breslow.",
      "B": "INCORRETA: A taxa mitótica é outro parâmetro avaliado, mas não define a espessura de Breslow.",
      "C": "INCORRETA: A cor faz parte do critério clínico ABCDE, não do histopatológico de Breslow.",
      "D": "CORRETA: O **Breslow** mede da camada granulosa da epiderme até o ponto mais profundo da invasão. Quanto maior a espessura, maior a chance de as células atingirem vasos profundos e causarem metástase."
    },
    "explicacao": "Fator Prognóstico nº 1: **Índice de Breslow** (Espessura tumoral vertical).",
    "aula_id": "bmf2_a2"
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
    print(f"Updated {updated_count} questions in Batch 9.")

if __name__ == "__main__":
    update_batch(batch_9_reviewed)
