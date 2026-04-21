import json

batch_12_reviewed = [
  {
    "id": 1315,
    "materia": "mad1",
    "tema": "mad1_a17",
    "enunciado": "Um paciente de 32 anos será submetido a uma **esplenectomia** total por trauma abdominal. Na orientação pré-operatória, a equipe enfatiza o risco aumentado de infecções graves por germes **encapsulados** (ex: pneumococo). Qual a justificativa fisiopatológica para esse risco?",
    "opcoes": [
      "A) Perda da barreira epitelial intestinal",
      "B) Deficiência isolada da via alternativa do complemento",
      "C) O baço é o principal local de filtração sanguínea e de **opsonização** de bactérias com cápsulas polissacarídicas",
      "D) Ausência total de linfócitos T no sangue periférico"
    ],
    "correta": 2,
    "dificuldade": 3,
    "modulo": 2,
    "explicacao_geral": "O baço é essencial para a limpeza de antígenos do sangue, especialmente aqueles que tentam 'escapar' da fagocitose por meio de cápsulas.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: O baço é um órgão linfoide, não uma barreira mecânica epitelial.",
      "B": "INCORRETA: O complemento pode estar normal, mas falta o 'filtro' e o ambiente de opsonização eficiente do baço.",
      "C": "CORRETA: Pacientes asplênicos perdem a capacidade de depurar microrganismos **encapsulados** de forma eficiente. A opsonização pelos anticorpos e a fagocitose pelos macrófagos esplênicos são fundamentais para conter esses patógenos.",
      "D": "INCORRETA: Os linfócitos T são maturados no timo e circulam em todo o sistema linfoide; a esplenectomia não causa sua ausência."
    },
    "explicacao": "Resumo Clínico: **Sem baço = Risco de Sepse por Encapsulados** (Pneumococo, Meningococo, Haemophilus).",
    "aula_id": "mad1_a17"
  },
  {
    "id": 1319,
    "materia": "mad1",
    "tema": "mad1_a17",
    "enunciado": "Um paciente apresenta infecções bacterianas recorrentes especificamente pelos gêneros **Neisseria meningitidis** (Meningococo) e **Neisseria gonorrhoeae**. Qual deficiência do sistema imunológico é um 'gatilho' clássico para este padrão de infecção?",
    "opcoes": [
      "A) Deficiência de C3",
      "B) Deficiência isolada de IgA",
      "C) Deficiência de Neutrófilos",
      "D) Deficiência do **Complexo de Ataque à Membrana (C5–C9)**"
    ],
    "correta": 3,
    "dificuldade": 3,
    "modulo": 2,
    "explicacao_geral": "O sistema do complemento possui componentes terminais essenciais para furar a membrana de certas bactérias.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: Deficiência de C3 gera uma imunodeficiência grave e ampla contra quase todos os germes, não se restringindo a Neisseria.",
      "B": "INCORRETA: Predispõe a infecções de mucosas e doenças autoimunes, mas não tem relação direta eletiva com Neisseria sistêmica.",
      "C": "INCORRETA: Geraria abscessos e infecções por estafilococos e fungos.",
      "D": "CORRETA: O complexo C5b-9 (MAC) é fundamental para a lise direta do gênero **Neisseria**. Pacientes sem esses componentes estão altamente vulneráveis a meningites meningocócicas recorrentes."
    },
    "explicacao": "Ponto de Prova: **C5-C9 = Foco em Neisseria**.",
    "aula_id": "mad1_a17"
  },
  {
    "id": 1322,
    "materia": "mad1",
    "tema": "mad1_a17",
    "enunciado": "Uma mulher de 28 anos apresenta urticária generalizada, hipotensão e broncoespasmo poucos minutos após uma picada de abelha. Qual o tratamento de **primeira linha** imediato para reverter este quadro de **Anafilaxia**?",
    "opcoes": [
      "A) Adrenalina (Epinefrina) intramuscular",
      "B) Anti-histamínico oral",
      "C) Corticoide intravenoso isolado",
      "D) Dipirona para a dor da picada"
    ],
    "correta": 0,
    "dificuldade": 1,
    "modulo": 2,
    "explicacao_geral": "A anafilaxia é uma emergência médica que exige ação rápida para estabilizar a hemodinâmica e a via aérea.",
    "explicacoes_opcoes": {
      "A": "CORRETA: A **Adrenalina** é a droga de escolha. Ela causa vasoconstrição (reverte a hipotensão) e broncodilatação (reverte o espasmo respiratório). Deve ser aplicada precocemente via IM.",
      "B": "INCORRETA: São medicamentos auxiliares para sintomas cutâneos (coceira), mas não salvam a vida no choque.",
      "C": "INCORRETA: O corticoide demora horas para agir. É usado como adjuvante para evitar reações tardias, mas nunca como droga de primeira linha.",
      "D": "INCORRETA: Conduta protelatória e sem benefício no choque anafilático."
    },
    "explicacao": "Regra de Vida: **Anafilaxia = Adrenalina de imediato**.",
    "aula_id": "mad1_a17"
  },
  {
    "id": 1339,
    "materia": "mad1",
    "tema": "mad1_a17",
    "enunciado": "As **Endotoxinas** (LPS) das bactérias Gram-negativas diferem das **Exotoxinas** secretadas. Qual a característica principal que define o comportamento da Endotoxina?",
    "opcoes": [
      "A) É secretada ativamente pela bactéria viva como uma arma de ataque",
      "B) É um componente **estrutural** (faz parte do envelope bacteriano) e é liberada principalmente durante a **lise** (morte) da bactéria",
      "C) É facilmente destruída pelo calor (termolábil)",
      "D) É uma proteína altamente específica, como a toxina botulínica"
    ],
    "correta": 1,
    "dificuldade": 3,
    "modulo": 2,
    "explicacao_geral": "O LPS é o principal gatilho para o choque séptico por Gram-negativos.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: Isso descreve as exotoxinas.",
      "B": "CORRETA: A endotoxina (LPS) está 'presa' à membrana externa. Por isso, quando usamos antibióticos que destroem a parede das bactérias, pode haver uma liberação massiva de LPS e piora temporária dos sintomas inflamatórios do paciente.",
      "C": "INCORRETA: O LPS é bastante termoestável (aguenta calor melhor que as toxinas proteicas).",
      "D": "INCORRETA: O LPS causa uma resposta inflamatória generalizada e pouco específica via TLR4."
    },
    "explicacao": "Diferença Chave: **Endo = Estrutural / Lise**. **Exo = Secretada / Proteica**.",
    "aula_id": "mad1_a17"
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
    print(f"Updated {updated_count} questions in Batch 12.")

if __name__ == "__main__":
    update_batch(batch_12_reviewed)
