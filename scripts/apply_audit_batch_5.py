import json

batch_5_reviewed = [
  {
    "id": 602,
    "materia": "semiologia1",
    "tema": "pmh_a8",
    "enunciado": "Qual é a função primária dos **quilomícrons** e qual a sua origem no organismo?",
    "opcoes": [
      "A) Transportar colesterol do fígado para os tecidos periféricos",
      "B) Transportar triglicerídeos dietéticos do intestino para os tecidos",
      "C) Realizar o transporte reverso de gordura dos tecidos para o fígado",
      "D) Transportar triglicerídeos endógenos recém-sintetizados no fígado"
    ],
    "correta": 1,
    "dificuldade": 2,
    "modulo": 1,
    "explicacao_geral": "Os quilomícrons são as maiores lipoproteínas e as únicas formadas no nível intestinal a partir da absorção da gordura alimentar.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: Essa é a função do LDL (carregador de colesterol).",
      "B": "CORRETA: Os quilomícrons transportam a carga de **triglicerídeos exógenos** (da dieta) até que a lipase lipoproteica os degrade.",
      "C": "INCORRETA: O transporte reverso de colesterol é a função do **HDL**.",
      "D": "INCORRETA: Os triglicerídeos endógenos (produzidos no fígado) são transportadores pelo **VLDL**."
    },
    "explicacao": "Mnemônico: **Q**uilomícron = **Q**uilo (intestino/comida). Tudo o que vem de fora entra via quilomícron.",
    "aula_id": "pmh_a8"
  },
  {
    "id": 610,
    "materia": "semiologia1",
    "tema": "pmh_a8",
    "enunciado": "As **estatinas** são as drogas de primeira linha no controle da dislipidemia. Qual enzima elas inibem competitivamente no fígado?",
    "opcoes": [
      "A) Lipase Lipoproteica (LPL)",
      "B) HMG-CoA redutase",
      "C) Cistationina beta-sintase",
      "D) Xantina oxidase"
    ],
    "correta": 1,
    "dificuldade": 2,
    "modulo": 1,
    "explicacao_geral": "A inibição da síntese de colesterol hepático leva a um aumento компенсаtório na expressão de receptores LDL na superfície celular.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: A LPL atua na quebra de triglicerídeos nos capilares periféricos.",
      "B": "CORRETA: As estatinas inibem a **HMG-CoA redutase**, a enzima limitante (ponto de controle) na síntese endógena de colesterol.",
      "C": "INCORRETA: Enzima ligada ao metabolismo da homocisteína.",
      "D": "INCORRETA: Alvo do alopurinol no tratamento da gota."
    },
    "explicacao": "Ao inibir a enzima, o fígado percebe a baixa de colesterol interno e 'puxa' mais LDL do sangue, reduzindo os níveis séricos.",
    "aula_id": "pmh_a8"
  },
  {
    "id": 622,
    "materia": "semiologia1",
    "tema": "semio1_a1",
    "enunciado": "No diagnóstico diferencial de dor articular, qual característica clínica ajuda a distinguir o padrão **inflamatório** do padrão **mecânico/degenerativo**?",
    "opcoes": [
      "A) Dor que piora com o uso e melhora rapidamente com repouso",
      "B) Rigidez matinal persistente (frequentemente > 60 minutos)",
      "C) Melhora espontânea após o exercício físico intenso",
      "D) Manifestação puramente noturna sem dor ao movimento diurno"
    ],
    "correta": 1,
    "dificuldade": 2,
    "modulo": 1,
    "explicacao_geral": "Diferenciar esses padrões é o primeiro passo para a investigação reumatológica ou ortopédica.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: Esse é o padrão clássico da dor **mecânica** (como na osteoartrite).",
      "B": "CORRETA: A **rigidez matinal prolongada** é o sinal cardeal de sinovite/inflamação articular (como na Artrite Reumatóide).",
      "C": "INCORRETA: Exercício intenso geralmente agrava dores mecânicas e não cura inflamatórias agudas sem repouso.",
      "D": "INCORRETA: A dor inflamatória costuma ser contínua ou piorar com o repouso imobilizado."
    },
    "explicacao": "Padrão de prova: **Inflamatório** = Piora no repouso, rigidez longa. **Mecânico** = Piora no uso, rigidez curta.",
    "aula_id": "semio1_a1"
  },
  {
    "id": 630,
    "materia": "semiologia1",
    "tema": "semio1_a1",
    "enunciado": "Na avaliação da força muscular pela escala **MRC (Medical Research Council)**, um paciente que consegue mover o membro contra a força da gravidade, mas cede ao mínimo toque do examinador, deve ser classificado como grau:",
    "opcoes": [
      "A) Grau 2",
      "B) Grau 3",
      "C) Grau 4",
      "D) Grau 5"
    ],
    "correta": 1,
    "dificuldade": 3,
    "modulo": 1,
    "explicacao_geral": "A escala MRC vai de 0 a 5 e é o padrão-ouro na semiologia neurológica e ortopédica.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: Grau 2 é o movimento que ocorre apenas com gravidade eliminada (plano horizontal).",
      "B": "CORRETA: **Grau 3** é quando o paciente vence apenas a gravidade, mas **não** vence resistência adicional.",
      "C": "INCORRETA: Grau 4 vence resistência moderada do examinador.",
      "D": "INCORRETA: Grau 5 é a força normal plena."
    },
    "explicacao": "Resumo MRC: **0**: Paralisia total. **1**: Esboço. **2**: Plano horizontal. **3**: Vence gravidade apenas. **4**: Vence resistência. **5**: Normal.",
    "aula_id": "semio1_a1"
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
    print(f"Updated {updated_count} questions in Batch 5.")

if __name__ == "__main__":
    update_batch(batch_5_reviewed)
