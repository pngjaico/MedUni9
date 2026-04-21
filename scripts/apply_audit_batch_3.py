import json

batch_3_reviewed = [
  {
    "id": 401,
    "materia": "bmf3",
    "tema": "bmf3_a17",
    "enunciado": "Qual integração **hepatobiliar-pancreática** está mais alinhada com a prática clínica?",
    "opcoes": [
      "A) A cabeça pancreática é independente do trajeto biliar distal",
      "B) A maior parte da bile chega ao duodeno sem armazenamento vesicular",
      "C) Icterícia obstrutiva distal nunca repercute em via biliar intra-hepática",
      "D) A anatomia do colédoco e da ampola explica por que cálculos distais causam icterícia e pancreatite"
    ],
    "correta": 3,
    "dificuldade": 3,
    "modulo": 1,
    "explicacao_geral": "A anatomia da região periampular é crucial para entender a fisiopatologia da obstrução biliar e pancreática.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: O colédoco distal passa por dentro ou por trás da cabeça do pâncreas; neoplasias nessa região costumam obstruir a bile.",
      "B": "INCORRETA: Durante o jejum, a bile é desviada para a vesícula para concentração e armazenamento.",
      "C": "INCORRETA: Obstruções distais geram pressão retrógrada que dilata toda a árvore biliar proximal (intra e extra-hepática).",
      "D": "CORRETA: Como o colédoco e o ducto de Wirsung frequentemente se unem na ampola de Vater, um cálculo impactado ali obstrui ambas as vias."
    },
    "explicacao": "Conceito-chave: **Ampola de Vater** = via final comum. Sua obstrução causa o 'duplo sinal' (dilatação biliar e pancreática) e a clínica de icterícia + dor abdominal.",
    "aula_id": "bmf3_a17"
  },
  {
    "id": 406,
    "materia": "mad1",
    "tema": "mad1_a4",
    "enunciado": "A **ampola duodenal** (hepatopancreática ou de Vater) é clinicamente relevante porque:",
    "opcoes": [
      "A) Marca a transição reto-anal e o local das hemorroidas",
      "B) Reúne o fluxo biliar e pancreático para desembocar na papila maior do duodeno",
      "C) É o ponto onde o jejuno se torna íleo",
      "D) É o local de origem da veia porta hepática"
    ],
    "correta": 1,
    "dificuldade": 2,
    "modulo": 1,
    "explicacao_geral": "A ampola de Vater é o local de convergência do colédoco e do ducto pancreático principal.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: A transição reto-anal é demarcada pela linha pectínea, no final do tubo digestório.",
      "B": "CORRETA: Funciona como uma 'estação de mistura' final antes das secreções enzimáticas e biliares entrarem no duodeno.",
      "C": "INCORRETA: A transição jejuno-íleo é gradual e não marcada por uma ampola.",
      "D": "INCORRETA: A veia porta é formada pela união das veias esplênica e mesentérica superior, atrás do pâncreas."
    },
    "explicacao": "Nas questões de prova, associe sempre a **Ampola de Vater** ao duodeno descendente (2ª porção) e à regulação pelo esfíncter de Oddi.",
    "aula_id": "mad1_a4"
  },
  {
    "id": 422,
    "materia": "bmf1",
    "tema": "bmf1_a4",
    "enunciado": "Qual característica bioquímica dos **Glicosaminoglicanos (GAGs)** é fundamental para garantir a **pressão de turgor** e a resistência à compressão dos tecidos?",
    "opcoes": [
      "A) Presença de resíduos de aminoácidos apolares que repelem a água",
      "B) Alta densidade de cargas positivas que atraem ânions plasmáticos",
      "C) Alta densidade de cargas negativas que atraem íons Na+ e, consequentemente, água",
      "D) Organização em tripla hélice rígida estabilizada por pontes de ferro"
    ],
    "correta": 2,
    "dificuldade": 2,
    "modulo": 1,
    "explicacao_geral": "Os GAGs são polissacarídeos essenciais da substância fundamental amorfa que ditam as propriedades físicas do conjuntivo.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: GAGs são polímeros de açúcares, não aminoácidos, e são altamente hidrofílicos.",
      "B": "INCORRETA: GAGs possuem cargas **negativas** (grupos sulfato e carboxila).",
      "C": "CORRETA: As cargas negativas atraem sódio, que por osmose atrai água. Isso cria um gel hidratado que resiste a pressões (como no disco intervertebral).",
      "D": "INCORRETA: Tripla hélice é a estrutura característica do **colágeno**, que resiste à tração, não à compressão por turgor."
    },
    "explicacao": "Visualize os GAGs como uma esponja que retém água: as cargas negativas 'puxam' o sódio e a água, conferindo volume e elasticidade compressiva ao tecido.",
    "aula_id": "bmf1_a4"
  },
  {
    "id": 428,
    "materia": "bmf1",
    "tema": "bmf1_a4",
    "enunciado": "Um paciente de 32 anos apresenta **choque anafilático** após comer frutos-do-mar. Qual célula do tecido conjuntivo é a responsável primária por essa resposta aguda e qual mediador é liberado?",
    "opcoes": [
      "A) Plasmócito e produção de IgE",
      "B) Macrófago e liberação de IL-1",
      "C) Mastócito e liberação de histamina por desgranulação",
      "D) Fibroblasto e síntese de colágeno III"
    ],
    "correta": 2,
    "dificuldade": 3,
    "modulo": 1,
    "explicacao_geral": "A anafilaxia é uma reação de hipersensibilidade tipo I mediada por anticorpos IgE fixados a células granuladas.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: Plasmócitos produzem a IgE na sensibilização prévia, mas a reação aguda do choque é efeito da ativação de outra célula.",
      "B": "INCORRETA: Macrófagos atuam em respostas imunológicas crônicas ou subagudas, não na liberação imediata de histamina.",
      "C": "CORRETA: O **mastócito**, ao reconhecer o alérgeno via IgE, libera bruscamente seus grânulos de **histamina**, causando vasodilatação e edema de glote.",
      "D": "INCORRETA: O fibroblasto atua no reparo e cicatrização, não possuindo grânulos pré-formados para choque anafilático."
    },
    "explicacao": "O **mastócito** é o 'vigilante' do conjuntivo. Sua desgranulação sistêmica é o que define o perigo de vida na anafilaxia.",
    "aula_id": "bmf1_a4"
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
    print(f"Updated {updated_count} questions in Batch 3.")

if __name__ == "__main__":
    update_batch(batch_3_reviewed)
