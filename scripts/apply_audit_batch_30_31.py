import json

batch_30_31_reviewed = [
  {
    "id": 3111,
    "materia": "bmf1",
    "tema": "bmf1_a1",
    "enunciado": "A 'Pele Espessa' é encontrada nas palmas das mãos e plantas dos pés. Qual característica histológica a diferencia da pele fina do restante do corpo?",
    "opcoes": [
      "A) Presença de muitos folículos pilosos e glândulas sebáceas",
      "B) Ausência de glândulas sudoríparas écrinas",
      "C) Camada granulosa praticamente invisível",
      "D) Presença do Estrato Lúcido e um estrato córneo muito desenvolvido (calosidade)"
    ],
    "correta": 3,
    "dificuldade": 2,
    "modulo": 1,
    "explicacao_geral": "A pele espessa (glabra) é adaptada para resistir ao atrito e pressão constante.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: A pele espessa não possui pelos nem glândulas sebáceas.",
      "B": "INCORRETA: Possui abundantes glândulas sudoríparas para regulação térmica e aderência.",
      "C": "INCORRETA: O estrato granuloso é bem evidente devido à intensa ceratinização.",
      "D": "CORRETA: O Estrato Lúcido é uma camada clara e delgada vista apenas em cortes de pele espessa, situada logo abaixo do massivo estrato córneo."
    },
    "explicacao": "Histologia da Pele: **Pele Espessa = Palma/Planta + Estrato Lúcido + Sem Pelos.**",
    "aula_id": "bmf1_a1"
  },
  {
    "id": 3130,
    "materia": "bmf3",
    "tema": "bmf3_a1",
    "enunciado": "Um hemograma que mostra leucocitose com **Neutrofilia** e presença de formas jovens (**Bastões**) é frequentemente chamado de 'Desvio à Esquerda'. O que esse achado sugere?",
    "opcoes": [
      "A) Infecção viral crônica ou parasitose intestinal",
      "B) Resposta inflamatória ou infecciosa aguda (geralmente bacteriana)",
      "C) Deficiência de Vitamina B12 ou Ácido Fólico",
      "D) Reação alérgica mediada por IgE"
    ],
    "correta": 1,
    "dificuldade": 2,
    "modulo": 1,
    "explicacao_geral": "O desvio à esquerda reflete a liberação apressada de células imunes pela medula óssea durante o estresse infeccioso.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: Viroses costumam causar linfocitose; parasitoses elevam eosinófilos.",
      "B": "CORRETA: Os neutrófilos bastonetes são formas imaturas. Sua presença no sangue indica que a medula está 'trabalhando dobrado' para combater uma invasão bacteriana.",
      "C": "INCORRETA: Isso causaria anemia megaloblástica, com neutrófilos hipersegmentados (desvio à direita).",
      "D": "INCORRETA: Alergias cursam com eosinofilia."
    },
    "explicacao": "Hématologia Clínica: **Desvio à Esquerda = Bastões > 4-5% = Infecção Bacteriana.**",
    "aula_id": "bmf3_a1"
  },
  {
    "id": 3142,
    "materia": "bmf1",
    "tema": "bmf1_a1",
    "enunciado": "Durante a avaliação da cavidade oral, o médico pede para o paciente colocar a língua para fora. Qual nervo craniano é o único responsável por toda a **motricidade** (movimento) da língua?",
    "opcoes": [
      "A) Nervo Facial (VII)",
      "B) Nervo Glossofaríngeo (IX)",
      "C) Nervo Hipoglosso (XII)",
      "D) Nervo Trigêmeo (V)"
    ],
    "correta": 2,
    "dificuldade": 1,
    "modulo": 1,
    "explicacao_geral": "A língua possui inervação motora e sensitiva (geral e paladar) complexa, mas o motor é simples.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: O Facial (Corda do Tímpano) cuida do paladar dos 2/3 anteriores.",
      "B": "INCORRETA: O Glossofaríngeo cuida da sensibilidade e paladar do 1/3 posterior.",
      "C": "CORRETA: O par XII (Hipoglosso) inerva todos os músculos intrínsecos e quase todos os extrínsecos da língua.",
      "D": "INCORRETA: O Trigêmeo (ramo mandibular) cuida apenas da sensibilidade geral (dor/tato/temp) dos 2/3 anteriores."
    },
    "explicacao": "Anatomia Funcional: **Motores da Língua = Hipoglosso (XII).** Se houver lesão, a língua desvia para o lado lesado.",
    "aula_id": "bmf1_a1"
  },
  {
    "id": 3148,
    "materia": "bmf2",
    "tema": "bmf2_a1",
    "enunciado": "As **células parietais** da mucosa gástrica são vitais para a digestão e absorção de nutrientes. Quais são as duas substâncias principais por elas produzidas?",
    "opcoes": [
      "A) Pepsina e Gastrina",
      "B) Ácido Clorídrico (HCl) e Fator Intrínseco",
      "C) Bicarbonato e Muco Protetor",
      "D) Somatostatina e Serotonina"
    ],
    "correta": 1,
    "dificuldade": 2,
    "modulo": 1,
    "explicacao_geral": "A célula parietal possui um complexo sistema de bombas de prótons para acidificar o estômago.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: Pepsina vem das células principais; Gastrina vem das células G do antro.",
      "B": "CORRETA: O HCl acidifica o quimo e ativa o pepsinogênio; o Fator Intrínseco permite a absorção da vitamina B12 no íleo terminal.",
      "C": "INCORRETA: Produzidos pelas células da superfície mucosa.",
      "D": "INCORRETA: Produzidos por células enteroendócrinas (células D e Enterocromafins)."
    },
    "explicacao": "Fisiologia Clínica: **Célula Parietal = HCl (Digestão) + Fator Intrínseco (B12).** Lesão aqui causa anemia perniciosa.",
    "aula_id": "bmf2_a1"
  },
  {
    "id": 3150,
    "materia": "bmf1",
    "tema": "bmf1_a1",
    "enunciado": "A transição epitelial entre o esôfago e o estômago (Linha Z) marca a mudança de função protetora para secretora. Como essa mudança é descrita histologicamente?",
    "opcoes": [
      "A) De epitélio simples colunar para estratificado pavimentoso",
      "B) De epitélio estratificado pavimentoso para simples colunar",
      "C) De epitélio pseudoestratificado para simples pavimentoso",
      "D) De epitélio de transição para cúbico simples"
    ],
    "correta": 1,
    "dificuldade": 3,
    "modulo": 1,
    "explicacao_geral": "O esôfago precisa resistir ao atrito do alimento sólido; o estômago precisa secretar muco e H+.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: Esta seria a transição inversa (ou a ocorrência de Esôfago de Barrett).",
      "B": "CORRETA: O esôfago tem epitélio estratificado pavimentoso (muitas camadas para proteção); no cárdia, vira simples colunar (uma camada alta para secreção).",
      "C": "INCORRETA: Pseudoestratificado é típico do trato respiratório superior.",
      "D": "INCORRETA: Epitélio de transição é exclusivo do trato urinário."
    },
    "explicacao": "Histologia do TGI: **Esôfago (Multicamadas/Atrito) -> Estômago (Uma camada/Secreção).**",
    "aula_id": "bmf1_a1"
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
    print(f"Updated {updated_count} questions in Batch 30-31.")

if __name__ == "__main__":
    update_batch(batch_30_31_reviewed)
