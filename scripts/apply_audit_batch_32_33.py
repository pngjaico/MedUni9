import json

batch_32_33_reviewed = [
  {
    "id": 3303,
    "materia": "semio4",
    "tema": "semio4_a1",
    "enunciado": "A 'Claudicação Neurogênica' é um sintoma caracterizado por dor e fraqueza nas pernas ao caminhar, que alivia quando o paciente inclina o tronco para frente. Qual a base anatômica desse fenômeno?",
    "opcoes": [
      "A) Obstrução aterosclerótica da artéria ilíaca comum",
      "B) Estenose do Canal Vertebral Lombar",
      "C) Insuficiência venosa crônica com edema de membros",
      "D) Compressão do nervo fibular comum na cabeça da fíbula"
    ],
    "correta": 1,
    "dificuldade": 3,
    "modulo": 4,
    "explicacao_geral": "A posição de flexão do tronco (posição de 'carrinho de supermercado') aumenta o espaço no canal vertebral, reduzindo a compressão radicular.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: Isso causaria claudicação vascular, onde o alívio ocorre com o repouso parado, independente da posição do tronco.",
      "B": "CORRETA: A estenose de canal reduz o espaço para a cauda equina; a inclinação frontal abre o canal e alivia os sintomas.",
      "C": "INCORRETA: Causa dor tipo peso/queimação que melhora com a elevação dos membros.",
      "D": "INCORRETA: Causaria queda do pé (foot drop) e alteração sensitiva lateral, sem relação com a marcha claudicante neurogênica clássica."
    },
    "explicacao": "Pérola de Semiologia: **Claudicação Neurogênica = Melhora ao inclinar (abre o canal).** Claudicação Vascular = Melhora ao parar (reduz demanda de O2).",
    "aula_id": "semio4_a1"
  },
  {
    "id": 3335,
    "materia": "semio4",
    "tema": "semio4_a1",
    "enunciado": "A Gota e a Pseudogota são as principais artrites microcristalinas. Qual o cristal depositado na articulação que define o diagnóstico de **Pseudogota** (Condrocalcinose)?",
    "opcoes": [
      "A) Monourato de Sódio",
      "B) Pirofosfato de Cálcio",
      "C) Hidroxiapatita",
      "D) Oxalato de Cálcio"
    ],
    "correta": 1,
    "dificuldade": 2,
    "modulo": 4,
    "explicacao_geral": "Diferentes metabolismos levam ao depósito de cristais distintos, causando inflamação aguda.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: Este é o cristal da Gota clássica (hiperuricemia).",
      "B": "CORRETA: O Pirofosfato de Cálcio causa a pseudogota, comum em idosos e frequentemente atingindo os joelhos.",
      "C": "INCORRETA: Associado a tendinites calcáreas e doença por depósito de fosfato básico de cálcio.",
      "D": "INCORRETA: Associado principalmente a cálculos renais."
    },
    "explicacao": "Dica de Prova: **Gota = Urato.** **Pseudogota = Pirofosfato.** Radiologicamente, a pseudogota mostra calcificação da cartilagem (condrocalcinose).",
    "aula_id": "semio4_a1"
  },
  {
    "id": 3361,
    "materia": "sus",
    "tema": "sus_a1",
    "enunciado": "Antes da criação do SUS em 1988, o acesso à saúde pública no Brasil era excludente. Quem era o público-alvo do **INAMPS**?",
    "opcoes": [
      "A) Toda a população residente no território nacional (Universal)",
      "B) Apenas os trabalhadores com carteira assinada e seus dependentes",
      "C) Apenas pessoas em situação de rua e extrema pobreza",
      "D) Exclusivamente os militares e servidores públicos federais"
    ],
    "correta": 1,
    "dificuldade": 1,
    "modulo": 3,
    "explicacao_geral": "O sistema era contributivo: só tinha direito quem contribuía para a previdência social.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: A universalidade é um princípio do SUS, instituído apenas pela CF/88.",
      "B": "CORRETA: O INAMPS era o braço assistencial da Previdência. Quem não tinha carteira era chamado de 'indigente' e dependia de caridade.",
      "C": "INCORRETA: Este grupo era justamente o que ficava sem assistência formal do estado.",
      "D": "INCORRETA: Havia subsistemas para estes, mas o INAMPS era a massa dos trabalhadores formais urbanos."
    },
    "explicacao": "História do SUS: **Pré-88 = Contributivo (INAMPS).** Pós-88 = Universal (Direito de Cidadania).",
    "aula_id": "sus_a1"
  },
  {
    "id": 3366,
    "materia": "sus",
    "tema": "sus_a1",
    "enunciado": "A Conferência de **Alma-Ata (1978)** é o marco mundial para a organização dos sistemas de saúde modernos. Qual sua recomendação central?",
    "opcoes": [
      "A) Investimento maciço em hospitais quaternários de alta tecnologia",
      "B) Fortalecimento da Atenção Primária à Saúde como estratégia para 'Saúde para todos'",
      "C) Privatização dos serviços de saúde para garantir eficiência",
      "D) Foco exclusivo em doenças infectocontagiosas tropicais"
    ],
    "correta": 1,
    "dificuldade": 2,
    "modulo": 3,
    "explicacao_geral": "A conferência definiu a saúde como um estado de completo bem-estar e um direito humano fundamental.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Alma-Ata criticava o foco excessivo no hospital e na doença curável apenas com alta tecnologia.",
      "B": "[CORRETA] A **Atenção Primária à Saúde (APS)** foi definida como a porta de entrada e a base para a equidade no sistema.",
      "C": "[INCORRETA] Defendia a responsabilidade do Estado e a participação comunitária.",
      "D": "[INCORRETA] Defendia uma abordagem integral das necessidades de saúde."
    },
    "explicacao": "Marco Histórico: **Alma-Ata (78) = Atenção Primária.** Sem Alma-Ata, não haveria a base conceitual da Estratégia Saúde da Família.",
    "aula_id": "sus_a1"
  },
  {
    "id": 3370,
    "materia": "sus",
    "tema": "sus_a1",
    "enunciado": "Na Constituição Federal de 1988, a Saúde faz parte da **Seguridade Social**. Quais são os outros dois pilares que compõem este sistema de proteção?",
    "opcoes": [
      "A) Educação e Segurança Pública",
      "B) Previdência e Assistência Social",
      "C) Habitação e Saneamento Básico",
      "D) Cultura e Lazer"
    ],
    "correta": 1,
    "dificuldade": 2,
    "modulo": 3,
    "explicacao_geral": "A Seguridade Social é o conjunto de ações para assegurar direitos relativos à saúde, previdência e assistência.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: São direitos sociais, mas não compõem a 'Tríade da Seguridade'.",
      "B": "CORRETA: O financiamento da Seguridade cobre a **Saúde** (universal), a **Previdência** (contributiva) e a **Assistência Social** (para quem dela precisar).",
      "C": "INCORRETA: São direitos sociais e deveres do estado, mas com financiamento e regras distintas.",
      "D": "INCORRETA: Idem à anterior."
    },
    "explicacao": "Conceito Constitucional: **Seguridade = Saúde + Previdência + Assistência.** É o 'Pacto Social' de 88.",
    "aula_id": "sus_a1"
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
    print(f"Updated {updated_count} questions in Batch 32-33.")

if __name__ == "__main__":
    update_batch(batch_32_33_reviewed)
