import json

batch_1_4_reviewed = [
  {
    "id": 251,
    "materia": "farmaco_aplicada",
    "tema": "farm_a7",
    "enunciado": "A **Poliglactina 910** (ex.: Vicryl) caracteriza-se como um fio:",
    "opcoes": [
      "A) Inabsorvível monofilamentar para hérnias de grande tensão",
      "B) Absorvível multifilamentar para planos intermediários e mucosas",
      "C) Metálico para osteossíntese de fraturas complexas",
      "D) Inabsorvível multifilamentar de seda pura"
    ],
    "correta": 1,
    "dificuldade": 2,
    "modulo": 6,
    "explicacao_geral": "A Poliglactina 910 é o protótipo do **fio absorvível sintético multifilamentar** (trançado), oferecendo bom manuseio e segurança de nó.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: O polipropileno ou poliéster seriam exemplos de inabsorvíveis para tensão.",
      "B": "CORRETA: É amplamente utilizado devido à sua absorção previsível por hidrólise (60-90 dias).",
      "C": "INCORRETA: Fios metálicos são de aço inoxidável ou titânio.",
      "D": "INCORRETA: Seda é um fio inabsorvível natural multifilamentar."
    },
    "explicacao": "O **Vicryl** é versátil: sua natureza trançada facilita o nó, enquanto sua absorção por hidrólise reduz a reação inflamatória tecidual.",
    "aula_id": "farm_a7"
  },
  {
    "id": 252,
    "materia": "farmaco_aplicada",
    "tema": "farm_a7",
    "enunciado": "O **polipropileno** (ex.: Prolene) costuma ser escolhido quando se deseja:",
    "opcoes": [
      "A) Perda rápida de força tensil em até 7 dias",
      "B) Manutenção prolongada de suporte por ser inabsorvível e de baixa reatividade",
      "C) Absorção orgânica completa por fagocitose celular",
      "D) Alta capilaridade para suturas em tecidos infectados"
    ],
    "correta": 1,
    "dificuldade": 2,
    "modulo": 6,
    "explicacao_geral": "O **polipropileno** é um fio sintético, inabsorvível e monofilamentar, conhecido pela sua alta força tênsil e inércia biológica.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: Isso descreve fios absorvíveis rápidos, como o categute simples.",
      "B": "CORRETA: Excelente para suturas vasculares, cardíacas e fechamento de fáscia onde a força deve ser permanente.",
      "C": "INCORRETA: É inabsorvível; permanece no organismo indefinidamente como corpo estranho inerte.",
      "D": "INCORRETA: Por ser **monofilamentar**, possui a menor capilaridade possível, sendo seguro em tecidos contaminados."
    },
    "explicacao": "O **Prolene** é o 'padrão-ouro' para situações que exigem força permanente, como anastomoses vasculares, devido à sua superfície lisa que desliza facilmente.",
    "aula_id": "farm_a7"
  },
  {
    "id": 253,
    "materia": "farmaco_aplicada",
    "tema": "farm_a4",
    "enunciado": "A **agulha com ponta cortante convencional** é preferida para:",
    "opcoes": [
      "A) Mucosa gástrica e tecidos friáveis",
      "B) Sutura de nervos periféricos delicados",
      "C) Parênquima hepático ou renal (ponta romba)",
      "D) Pele e tecidos fibrosos/densos que exigem penetração cortante"
    ],
    "correta": 3,
    "dificuldade": 2,
    "modulo": 6,
    "explicacao_geral": "As agulhas cortantes possuem um corpo triangular que facilita a passagem por tecidos de **alta resistência**.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: Usam-se agulhas cilíndricas (taper) para evitar laceração de tecidos delicados.",
      "B": "INCORRETA: Exige microagulhas cilíndricas de trauma mínimo.",
      "C": "INCORRETA: Órgãos parenquimatosos exigem pontas rombas para não seccionar vasos internos.",
      "D": "CORRETA: A derme e aponeuroses são densas e requerem o gume da agulha cortante para reduzir o esforço de penetração."
    },
    "explicacao": "Diferencie: **Cortante** (triangular) para o que é difícil furar (pele); **Cilíndrica** (redonda) para o que é fácil rasgar (vísceras).",
    "aula_id": "farm_a4"
  },
  {
    "id": 263,
    "materia": "bmf3",
    "tema": "bmf3_a12",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 0,
    "enunciado": "Qual **plano anatômico** divide o corpo em porções direita e esquerda?",
    "opcoes": [
      "A) Plano sagital",
      "B) Plano frontal (coronal)",
      "C) Plano transversal (axial)",
      "D) Plano oblíquo"
    ],
    "correta": 0,
    "dificuldade": 1,
    "modulo": 1,
    "explicacao_geral": "Os planos anatômicos são referências espaciais fundamentais para a descrição de posições e movimentos.",
    "explicacoes_opcoes": {
      "A": "CORRETA: O plano sagital (ou mediano, se passar no centro) separa o corpo nos antímeros direito e esquerdo.",
      "B": "INCORRETA: O plano frontal/coronal separa em **Anterior (ventral)** e **Posterior (dorsal)**.",
      "C": "INCORRETA: O plano transversal separa em **Superior (cranial)** e **Inferior (caudal)**.",
      "D": "INCORRETA: Planos oblíquos não seguem os eixos ortogonais principais."
    },
    "explicacao": "Mnemônico: **S**agital = **S**em elo (divide os lados). **C**oronal = **C**ostas (separa frente e trás).",
    "aula_id": "bmf3_a12"
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
    print(f"Updated {updated_count} questions in Batch 1.4.")

if __name__ == "__main__":
    update_batch(batch_1_4_reviewed)
