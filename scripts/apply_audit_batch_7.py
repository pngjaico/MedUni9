import json

batch_7_reviewed = [
  {
    "id": 802,
    "materia": "pmh",
    "tema": "pmh_a10",
    "enunciado": "Embora o **NADH** e o **NADPH** sejam transportadores de elétrons quimicamente semelhantes, eles possuem destinos metabólicos distintos. Qual é a principal diferença funcional entre eles?",
    "opcoes": [
      "A) NADH é usado para biossíntese; NADPH é usado para gerar ATP",
      "B) Ambos são usados exclusivamente para digestão de proteínas",
      "C) NADH é direcionado ao Catabolismo (Cadeia Respiratória); NADPH é direcionado ao Anabolismo (Biossíntese) e proteção antioxidante",
      "D) NADH é produzido no núcleo e NADPH no citoplasma"
    ],
    "correta": 2,
    "dificuldade": 3,
    "modulo": 1,
    "explicacao_geral": "Os cofatores redox têm funções compartimentadas para evitar interferências metabólicas.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: Inverte os papéis dos cofatores.",
      "B": "INCORRETA: Eles atuam no metabolismo intermediário celular, não na digestão proteica direta.",
      "C": "CORRETA: O **NADH** fornece elétrons para a produção de **ATP** via fosforilação oxidativa. O **NADPH** fornece poder redutor para biossínteses (ex: lipídios) e para a enzima glutationa redutase (antioxidante).",
      "D": "INCORRETA: Ambos podem ser encontrados em diversos compartimentos (mitocôndria/citoplasma)."
    },
    "explicacao": "Padrão de prova: **NADH** = Energia (ATP). **NADPH** = Construção (Anabolismo) + Defesa (Antioxidante).",
    "aula_id": "pmh_a10"
  },
  {
    "id": 809,
    "materia": "pmh",
    "tema": "pmh_a10",
    "enunciado": "Uma substância que atua como um **desacoplador mitocondrial** (ex: 2,4-dinitrofenol ou termogenina) permite a perda de peso rápida, mas causa febre alta e risco de morte. Qual a base bioenergética desse fenômeno?",
    "opcoes": [
      "A) Bloqueio total do Ciclo de Krebs",
      "B) Inibição competitiva da enzima Citocromo Oxidase",
      "C) Dissipação do gradiente de prótons, convertendo a energia da oxidação em calor ao invés de ATP",
      "D) Estímulo à produção excessiva de ATP, gerando hipertermia"
    ],
    "correta": 2,
    "dificuldade": 3,
    "modulo": 1,
    "explicacao_geral": "O desacoplamento desvia o fluxo da fosforilação oxidativa.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: O ciclo continua rodando; na verdade, ele acelera tentando compensar a falta de ATP.",
      "B": "INCORRETA: Essa é a ação do cianeto e CO, que são inibidores, não desacopladores.",
      "C": "CORRETA: Os desacopladores tornam a membrana mitocondrial interna permeável aos prótons (H+). O gradiente é dissipado e a energia 'vaza' como **calor** (termodinâmica), o que explica a febre severa.",
      "D": "INCORRETA: Não há produção de ATP; a 'turbina' da ATP-sintase para de girar por falta de gradiente."
    },
    "explicacao": "Bioenergética: **Desacoplador** = Permite oxidação, impede fosforilação. Energia final = Calor.",
    "aula_id": "pmh_a10"
  },
  {
    "id": 811,
    "materia": "pmh",
    "tema": "pmh_a10",
    "enunciado": "Uma paciente de 30 anos apresenta dor nas mãos ao acordar, com dificuldade de fechar os punhos por cerca de **2 horas**. Após se movimentar e realizar atividades diárias, a dor e a rigidez melhoram progressivamente. Qual o padrão de dor?",
    "opcoes": [
      "A) Dor Mecânica",
      "B) Dor Inflamatória",
      "C) Dor Neuropática",
      "D) Dor Psicogênica"
    ],
    "correta": 1,
    "dificuldade": 2,
    "modulo": 1,
    "explicacao_geral": "A rigidez matinal persistente é o 'carimbo' da inflamação sinovial crônica.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: A dor mecânica piora com o uso e melhora com repouso (rigidez matinal < 30 min).",
      "B": "CORRETA: A **dor inflamatória** (característica da Artrite Reumatoide) melhora com o movimento e apresenta **rigidez matinal prolongada** (> 60 min).",
      "C": "INCORRETA: Apresentaria queimação, choque ou parestesia.",
      "D": "INCORRETA: Não seguiria um padrão temporal tão típico da fisiopatologia sinovial."
    },
    "explicacao": "Resumo Reumato: **Inflamatório** = Melhora com movimento / Pior no repouso. **Mecânico** = Piora com movimento / Melhor no repouso.",
    "aula_id": "pmh_a10"
  },
  {
    "id": 819,
    "materia": "pmh",
    "tema": "pmh_a10",
    "enunciado": "Um homem de 45 anos chega ao pronto-socorro com dor súbita e intensa em **um único joelho** (monoartrite), com sinais flogísticos exuberantes (calor, rubor) e febre de 38,5°C. Qual a conduta e hipótese prioritária?",
    "opcoes": [
      "A) Artrite Séptica; realizar artrocentese (punção) diagnóstica imediata",
      "B) Gota; prescrição isolada de colchicina e anti-inflamatório",
      "C) Osteoartrite; orientar fisioterapia e analgésico comum",
      "D) Hemartrose; imobilização e observação por 48h"
    ],
    "correta": 0,
    "dificuldade": 3,
    "modulo": 1,
    "explicacao_geral": "Monoartrite aguda febril é uma emergência ortopédica/reumatológica.",
    "explicacoes_opcoes": {
      "A": "CORRETA: Diante de uma **monoartrite aguda febril**, a primeira hipótese a excluir é a **Artrite Séptica bacteriana**. A punção do líquido sinovial é obrigatória para análise e cultura.",
      "B": "INCORRETA: Embora a Gota mimetize o quadro, a febre e o risco de destruição articular pela sepse exigem exclusão de infecção antes.",
      "C": "INCORRETA: Padrão degenerativo não causa febre e inflamação aguda severa.",
      "D": "INCORRETA: Hemartrose exige trauma prévio ou discrasia e não justifica a febre alta de forma isolada."
    },
    "explicacao": "Conduta: **Monoartrite Aguda + Febre = Punção Articular**.",
    "aula_id": "pmh_a10"
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
    print(f"Updated {updated_count} questions in Batch 7.")

if __name__ == "__main__":
    update_batch(batch_7_reviewed)
