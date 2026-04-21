import json

batch_16_reviewed = [
  {
    "id": 1702,
    "materia": "bmf1",
    "tema": "bmf1_a14",
    "enunciado": "A glândula adrenal (suprarrenal) possui um córtex dividido em três zonas distintas. Qual a sequência correta de fora para dentro e os respectivos hormônios produzidos?",
    "opcoes": [
      "A) Glomerulosa (Aldosterona) → Fasciculada (Cortisol) → Reticular (Andrógenos)",
      "B) Reticular (Cortisol) → Fasciculada (Aldosterona) → Glomerulosa (Andrógenos)",
      "C) Medula (Adrenalina) → Córtex (Cortisol)",
      "D) Fasciculada (Andrógenos) → Glomerulosa (Cortisol) → Reticular (Aldosterona)"
    ],
    "correta": 0,
    "dificuldade": 2,
    "modulo": 1,
    "explicacao_geral": "O córtex adrenal é essencial para a vida, regulando eletrólitos, metabolismo e caracteres sexuais secundários.",
    "explicacoes_opcoes": {
      "A": "CORRETA: O mnemônico **GFR** (Glomerulosa, Fasciculada, Reticulada) ajuda a lembrar a ordem. Sal, Açúcar e Sexo (Aldo, Cortisol, Andrógenos).",
      "B": "INCORRETA: Inverte a ordem e os hormônios.",
      "C": "INCORRETA: A medula é a parte mais interna, não uma zona do córtex.",
      "D": "INCORRETA: Ordem e hormônios trocados."
    },
    "explicacao": "Mnemônico Uni9: **GFR** (de fora para dentro). G=Sal (Aldo), F=Açúcar (Cortisol), R=Sexo (Andrógenos).",
    "aula_id": "bmf1_a14"
  },
  {
    "id": 1754,
    "materia": "bmf1",
    "tema": "bmf1_a13",
    "enunciado": "O **Ligamento de Treitz** (músculo suspensor do duodeno) é um marco anatômico fundamental na clínica médica. Qual sua principal utilidade prática?",
    "opcoes": [
      "A) É o marco que divide as Hemorragias Digestivas em Altas (HDA) e Baixas (HDB)",
      "B) Serve para fixar o fígado à parede abdominal posterior",
      "C) Divide o estômago em corpo e antro",
      "D) É o local onde ocorre a maior parte da digestão de gorduras"
    ],
    "correta": 0,
    "dificuldade": 1,
    "modulo": 1,
    "explicacao_geral": "O ângulo de Treitz (junção duodenojejunal) define a fronteira cirúrgica e clínica do trato digestório superior e inferior.",
    "explicacoes_opcoes": {
      "A": "CORRETA: Sangramentos acima do Treitz são HDA; abaixo, são HDB.",
      "B": "INCORRETA: Esse é o papel do ligamento falciforme/coronário.",
      "C": "INCORRETA: Essa divisão é feita pela incisura angular.",
      "D": "INCORRETA: A digestão ocorre no lúmen do duodeno, não no ligamento de suporte."
    },
    "explicacao": "Gatilho de Prova: **Ligamento de Treitz = Divisor HDA vs HDB**.",
    "aula_id": "bmf1_a13"
  },
  {
    "id": 1760,
    "materia": "bmf1",
    "tema": "bmf1_a13",
    "enunciado": "Sobre a anatomia do canal anal, por que a **hemorroida interna** costuma ser indolor em comparação à externa?",
    "opcoes": [
      "A) Porque está acima da **linha pectínea**, onde a inervação é visceral (insensível à dor somática)",
      "B) Porque o sangue da hemorroida interna é oxigenado",
      "C) Porque a interna não possui vasos sanguíneos reais",
      "D) Porque a externa é protegida por mucosa e a interna por pele"
    ],
    "correta": 0,
    "dificuldade": 2,
    "modulo": 1,
    "explicacao_geral": "A sensibilidade dolorosa no canal anal muda drasticamente na linha pectínea.",
    "explicacoes_opcoes": {
      "A": "CORRETA: Acima da linha pectínea a inervação é do sistema autônomo (visceral). Abaixo, a inervação é somática (nervo pudendo), por isso dói muito.",
      "B": "INCORRETA: A oxigenação não determina a sensibilidade à dor.",
      "C": "INCORRETA: Ambas são plexos venosos dilatados.",
      "D": "INCORRETA: É o contrário: a interna é mucosa e a externa é pele/anoderma."
    },
    "explicacao": "Conceito: **Linha Pectínea**. Acima = Visceral (Não dói). Abaixo = Somática (Dói).",
    "aula_id": "bmf1_a13"
  },
  {
    "id": 1762,
    "materia": "bmf1",
    "tema": "bmf1_a14",
    "enunciado": "O hormônio liberador de gonadotrofinas (**GnRH**) é liberado pelo hipotálamo de forma pulsátil. Sobre essa pulsatilidade, qual o efeito correto?",
    "opcoes": [
      "A) Pulsos lentos favorecem a liberação de **FSH**; pulsos rápidos favorecem a liberação de **LH**",
      "B) A pulsatilidade não interfere na produção de gonadotrofinas",
      "C) Pulsos rápidos inibem completamente a hipófise",
      "D) O GnRH é liberado de forma contínua para manter a homeostase"
    ],
    "correta": 0,
    "dificuldade": 3,
    "modulo": 1,
    "explicacao_geral": "A frequência dos pulsos do GnRH é o que dita a fase do ciclo menstrual e a produção hormonal.",
    "explicacoes_opcoes": {
      "A": "CORRETA: É um mecanismo de controle fino. Frequência baixa = mais FSH. Frequência alta = mais LH.",
      "B": "INCORRETA: Se o GnRH for contínuo (não pulsátil), ele dessensibiliza a hipófise (bloqueio hormonal).",
      "C": "INCORRETA: Pulsos rápidos estimulam LH; o estímulo contínuo é que inibe.",
      "D": "INCORRETA: Se fosse contínuo, causaria castração química."
    },
    "explicacao": "Resumo: **GnRH Contínuo = Bloqueio**. **GnRH Pulsátil = Estímulo**. Lento (FSH) vs Rápido (LH).",
    "aula_id": "bmf1_a14"
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
    print(f"Updated {updated_count} questions in Batch 16.")

if __name__ == "__main__":
    update_batch(batch_16_reviewed)
