import json

batch_22_reviewed = [
  {
    "id": 2302,
    "materia": "semio2",
    "tema": "semio2_a4",
    "enunciado": "Durante o exame físico abdominal, a sequência das etapas clássicas de propedêutica é alterada. Qual a ordem correta para evitar a modificação dos ruídos hidroaéreos?",
    "opcoes": [
      "A) Inspeção, Ausculta, Percussão e Palpação",
      "B) Inspeção, Palpação, Percussão e Ausculta",
      "C) Ausculta, Inspeção, Palpação e Percussão",
      "D) Inspeção, Percussão, Palpação e Ausculta"
    ],
    "correta": 0,
    "dificuldade": 1,
    "modulo": 2,
    "explicacao_geral": "Diferente do tórax, no abdome a ausculta deve preceder a percussão e a palpação.",
    "explicacoes_opcoes": {
      "A": "CORRETA: A palpação e a percussão estimulam o peristaltismo, podendo gerar ruídos artificiais se feitas antes da ausculta.",
      "B": "INCORRETA: A palpação altera a motilidade antes da ausculta.",
      "C": "INCORRETA: A inspeção é sempre a primeira etapa para notar abaulamentos, cicatrizes e pulsações.",
      "D": "INCORRETA: Deixa a ausculta por último, o erro mais comum."
    },
    "explicacao": "Regra de Ouro: **Abdome = IAPaP** (Inspeção, Ausculta, Percussão, Palpação).",
    "aula_id": "semio2_a4"
  },
  {
    "id": 2314,
    "materia": "semio2",
    "tema": "semio2_a8",
    "enunciado": "Um paciente com febre alta e dor lombar apresenta o achado de **Cilindros Leucocitários** na urinálise. Qual a importância clínica desse achado específico?",
    "opcoes": [
      "A) Indica acometimento do parênquima renal (Pielonefrite)",
      "B) É típico de cistite não complicada",
      "C) Sugere litíase ureteral pura",
      "D) Indica contaminação da amostra por flora vaginal"
    ],
    "correta": 0,
    "dificuldade": 2,
    "modulo": 2,
    "explicacao_geral": "Os cilindros se formam no lúmen dos túbulos renais; sua presença prova que a inflamação está no rim.",
    "explicacoes_opcoes": {
      "A": "CORRETA: A presença de cilindros leucocitários localiza a infecção no trato urinário superior (rim), diferenciando a Pielonefrite da Cistite.",
      "B": "INCORRETA: Na cistite há leucocitúria, mas não cilindros.",
      "C": "INCORRETA: Litíase causa hematúria, e não cilindros leucocitários.",
      "D": "INCORRETA: Contaminação gera células epiteliais e bactérias, mas não cilindros tubulares."
    },
    "explicacao": "Gatilho de Prova: **Cilindro Leucocitário = Pielonefrite** (Acometimento parenquimatoso).",
    "aula_id": "semio2_a8"
  },
  {
    "id": 2338,
    "materia": "semio3",
    "tema": "semio3_a2",
    "enunciado": "Uma mulher jovem com atraso menstrual apresenta dor súbita em fossa ilíaca, sangramento vaginal escurecido e **lipotimia** (desmaio). Qual a principal suspeita clínica?",
    "opcoes": [
      "A) Gravidez Ectópica Rota",
      "B) Apendicite Aguda",
      "C) Doença Inflamatória Pélvica (DIP)",
      "D) Abortamento Incompleto"
    ],
    "correta": 0,
    "dificuldade": 2,
    "modulo": 3,
    "explicacao_geral": "A tríade de atraso menstrual, dor abdominal e sangramento em mulher em idade fértil é ectópica até que se prove o contrário.",
    "explicacoes_opcoes": {
      "A": "CORRETA: A lipotimia sugere instabilidade hemodinâmica por hemoperitônio, característico da ruptura da trompa.",
      "B": "INCORRETA: Não costuma cursar com atraso menstrual e sangramento vaginal.",
      "C": "INCORRETA: Causa dor e febre, mas raramente choque hipovolêmico súbito.",
      "D": "INCORRETA: Causa sangramento mais volumoso e rubro, com dor em baixo ventre, mas raramente dor aguda lateralizada com choque."
    },
    "explicacao": "Emergência GO: **Atraso + Dor + Choque = Ectópica Rota.**",
    "aula_id": "semio3_a2"
  },
  {
    "id": 2362,
    "materia": "paps2",
    "tema": "paps2_a1",
    "enunciado": "Em um estudo de casos e controles, o cálculo da **Odds Ratio (OR)** resultou em **1.0**. Como deve ser interpretado esse resultado?",
    "opcoes": [
      "A) Não há associação entre a exposição e o desfecho estudado",
      "B) A exposição é um fator de risco importante",
      "C) A exposição é um fator de proteção",
      "D) O estudo é inválido por erro sistêmico"
    ],
    "correta": 0,
    "dificuldade": 1,
    "modulo": 2,
    "explicacao_geral": "A Odds Ratio igual a 1 indica que as chances de exposição nos casos e nos controles são idênticas.",
    "explicacoes_opcoes": {
      "A": "CORRETA: O valor unitário (1.0) é a linha de base: sem efeito de risco ou proteção.",
      "B": "INCORRETA: Risco exige OR > 1 com intervalo de confiança que não toque o 1.",
      "C": "INCORRETA: Proteção exige OR < 1 com intervalo de confiança que não toque o 1.",
      "D": "INCORRETA: O valor 1 é um resultado estatístico válido e frequente."
    },
    "explicacao": "Bioestatística: **OR ou RR = 1** significa **SEM ASSOCIAÇÃO**.",
    "aula_id": "paps2_a1"
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
    print(f"Updated {updated_count} questions in Batch 22.")

if __name__ == "__main__":
    update_batch(batch_22_reviewed)
