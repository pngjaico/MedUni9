import json

batch_26_27_reviewed = [
  {
    "id": 2716,
    "materia": "bmf4",
    "tema": "bmf4_a1",
    "enunciado": "A **Janela Terapêutica** de um fármaco é um conceito fundamental na farmacologia clínica. Como ela é definida e qual sua utilidade?",
    "opcoes": [
      "A) É o tempo que o fármaco leva para ser totalmente excretado do organismo",
      "B) É a faixa de concentração plasmática entre a dose mínima eficaz e a dose mínima tóxica",
      "C) É a dose exata que causa a morte de 50% dos pacientes em teste",
      "D) É o volume de sangue que o fármaco consegue atingir após a primeira passagem"
    ],
    "correta": 1,
    "dificuldade": 2,
    "modulo": 4,
    "explicacao_geral": "A janela (ou índice) terapêutico define a segurança de um medicamento.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: Isso define o tempo de excreção/meia-vida.",
      "B": "CORRETA: Medicamentos com janela estreita (ex: Digoxina, Varfarina, Lítio) exigem monitorização rigorosa, pois a dose que cura está muito próxima da dose que mata.",
      "C": "INCORRETA: Isso define a DL50 (Dose Letal 50).",
      "D": "INCORRETA: Isso se aproxima do conceito de Volume de Distribuição (Vd)."
    },
    "explicacao": "Ponto de Segurança: **Janela Estreita = Risco Alto.** Alvo clínico: manter o paciente acima da eficácia e abaixo da toxicidade.",
    "aula_id": "bmf4_a1"
  },
  {
    "id": 2724,
    "materia": "bmf4",
    "tema": "bmf4_a1",
    "enunciado": "O uso prolongado de corticoides sintéticos pode levar à supressão do **Eixo Hipotálamo-Hipófise-Adrenal (HHA)**. Qual a recomendação clínica padrão para interromper o tratamento?",
    "opcoes": [
      "A) Suspensão imediata para evitar toxicidade renal",
      "B) Desmame gradual para permitir a recuperação da produção endógena de cortisol",
      "C) Substituição imediata por anti-inflamatórios não esteroidais (AINEs)",
      "D) Dobrar a dose nos últimos 3 dias antes de parar totalmente"
    ],
    "correta": 1,
    "dificuldade": 2,
    "modulo": 4,
    "explicacao_geral": "O feedback negativo causado pelo corticoide exógeno 'desliga' as adrenais.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: Pode causar uma crise adrenal aguda (insuficiência aguda), que é fatal.",
      "B": "CORRETA: O desmame (tapering) é essencial para que o eixo volte a produzir CRH, ACTH e cortisol natural progressivamente.",
      "C": "INCORRETA: AINEs não tratam a insuficiência adrenal causada pela supressão do eixo.",
      "D": "INCORRETA: Isso agravaria a supressão do eixo."
    },
    "explicacao": "Pérola Clínica: **Corticoide crônico não se para de uma vez.** Risco de Hipotensão Refratária e Choque por Insuficiência Adrenal.",
    "aula_id": "bmf4_a1"
  },
  {
    "id": 2754,
    "materia": "bmf2",
    "tema": "bmf2_a1",
    "enunciado": "No Sistema Nervoso Autônomo, os receptores para **Acetilcolina** são classificados em muscarínicos e nicotínicos. Onde são encontrados predominantemente os receptores **Nicotínicos N1 (ou Nm)**?",
    "opcoes": [
      "A) Nos órgãos efetores do parassimpático (ex: coração, glândulas)",
      "B) Nos gânglios autonômicos (simpáticos e parassimpáticos)",
      "C) Na placa motora (junção neuromuscular) do músculo esquelético",
      "D) Nos vasos sanguíneos, causando vasodilatação"
    ],
    "correta": 2,
    "dificuldade": 3,
    "modulo": 1,
    "explicacao_geral": "Diferentes tipos de receptores colinérgicos mediam funções distintas (autônomas vs somáticas).",
    "explicacoes_opcoes": {
      "A": "INCORRETA: Nestes locais predominam os receptores Muscarínicos (M1 a M5).",
      "B": "INCORRETA: Nestes locais predominam os receptores Nicotínicos neuronais (Nn).",
      "C": "CORRETA: O receptor Nm (muscular) é o alvo dos bloqueadores neuromusculares e é essencial para o movimento voluntário.",
      "D": "INCORRETA: Vasos não possuem inervação parassimpática direta na maioria, mas possuem receptores M3 que respondem a ACh circulante."
    },
    "explicacao": "Anatomia Funcional: **Nicotínico Muscular (Nm) = Placa Motora.** **Nicotínico Neuronal (Nn) = Gânglio.**",
    "aula_id": "bmf2_a1"
  },
  {
    "id": 2762,
    "materia": "bmf4",
    "tema": "bmf4_a1",
    "enunciado": "Qual a principal diferença farmacodinâmica entre os bloqueadores neuromusculares **Despolarizantes** (ex: Succinilcolina) e os **Não Despolarizantes** (ex: Rocurônio)?",
    "opcoes": [
      "A) Despolarizantes são antagonistas competitivos; não despolarizantes são agonistas",
      "B) Despolarizantes agem como agonistas persistentes, causando fasciculações antes da paralisia; não despolarizantes bloqueiam o receptor competitivamente",
      "C) Não despolarizantes não podem ser revertidos com neostigmina",
      "D) Despolarizantes têm duração de ação muito mais longa (horas)"
    ],
    "correta": 1,
    "dificuldade": 3,
    "modulo": 4,
    "explicacao_geral": "O tipo de bloqueio determina a velocidade de ação e o perfil de efeitos colaterais.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: Inverteu as classes funcionais.",
      "B": "CORRETA: A Succinilcolina mimetiza a ACh mas não é hidrolisada rapidamente, mantendo o canal aberto e a fibra em estado refratário. O Rocurônio apenas impede a ACh de se ligar.",
      "C": "INCORRETA: Não despolarizantes são revertidos por inibidores da acetilcolinesterase ou sugamadex.",
      "D": "INCORRETA: A succinilcolina é famosa por sua ação ultracurta (minutos), ideal para intubação de sequência rápida."
    },
    "explicacao": "Farmaco de UTI: **Succinilcolina = Fase 1 (Fasciculação) -> Fase 2 (Paralisia).** Risco de Hipercalemia.",
    "aula_id": "bmf4_a1"
  },
  {
    "id": 2778,
    "materia": "bmf4",
    "tema": "bmf4_a1",
    "enunciado": "Os **Anestésicos Locais** (Lidocaína, Bupivacaína) exercem sua função através de qual mecanismo celular?",
    "opcoes": [
      "A) Bloqueio dos canais de Potássio (K+), impedindo a repolarização",
      "B) Bloqueio reversível dos canais de Sódio (Na+) voltagem-dependentes na membrana neuronal",
      "C) Aumento da abertura de canais de Cloro mediada por GABA",
      "D) Inibição da bomba de Sódio-Potássio ATPase"
    ],
    "correta": 1,
    "dificuldade": 2,
    "modulo": 4,
    "explicacao_geral": "Os anestésicos locais impedem a geração e propagação do potencial de ação.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: Isso prolongaria o potencial de ação, não o impediria.",
      "B": "CORRETA: Ao bloquear o canal de sódio por dentro, o neurônio não despolariza e o estímulo doloroso não sobe.",
      "C": "INCORRETA: Mecanismo dos Benzodiazepínicos.",
      "D": "INCORRETA: Causaria colapso iônico celular, mas não é o alvo dos anestésicos."
    },
    "explicacao": "Dica de Prova: **Anestésico Local = Bloqueio de Canal de Sódio.** Lembrar que fibras dolorosas (C e Aδ) são bloqueadas antes das motoras.",
    "aula_id": "bmf4_a1"
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
    print(f"Updated {updated_count} questions in Batch 26-27.")

if __name__ == "__main__":
    update_batch(batch_26_27_reviewed)
