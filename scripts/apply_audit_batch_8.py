import json

batch_8_reviewed = [
  {
    "id": 906,
    "materia": "bmf1",
    "tema": "bmf1_a11",
    "enunciado": "Como se denomina o processo adaptativo no qual o corpo substitui um tipo de tecido maduro (ex: epitélio respiratório ciliado) por outro tipo de tecido também maduro, mas mais resistente ao estresse crônico (ex: epitélio escamoso)?",
    "opcoes": [
      "A) Neoplasia",
      "B) Metaplasia",
      "C) Hiperplasia",
      "D) Atrofia"
    ],
    "correta": 1,
    "dificuldade": 2,
    "modulo": 1,
    "explicacao_geral": "A metaplasia é uma resposta adaptativa reversível, mas que predispõe à transformação maligna a longo prazo.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: Neoplasia é o crescimento descontrolado e autônomo (tumor).",
      "B": "CORRETA: A **metaplasia** é a 'troca de uniforme' celular. Exemplo clássico: o epitélio dos brônquios de fumantes muda de cilíndrico ciliado para escamoso estratificado (mais resistente, porém sem cílios).",
      "C": "INCORRETA: Hiperplasia é o aumento do número de células em um tecido.",
      "D": "INCORRETA: Atrofia é a redução do tamanho ou número de células de um órgão."
    },
    "explicacao": "Conceito-chave: **Metaplasia** = Troca de um tecido maduro por outro maduro para resistir a uma agressão.",
    "aula_id": "bmf1_a11"
  },
  {
    "id": 919,
    "materia": "bmf1",
    "tema": "bmf1_a11",
    "enunciado": "Uma criança de 8 anos sofre uma queda e fratura a região próxima à articulação do joelho (fêmur distal). Qual a maior preocupação a longo prazo do ortopedista pediatra diante deste trauma específico?",
    "opcoes": [
      "A) Que a pele demore para fechar em cima do osso",
      "B) Que o osso fique fibroso por falta de cálcio",
      "C) A lesão da **Fise** (placa epifisária), o que pode causar encurtamento ou deformidade permanente do membro",
      "D) Que a criança desenvolva osteoporose precoce"
    ],
    "correta": 2,
    "dificuldade": 3,
    "modulo": 1,
    "explicacao_geral": "Traumas na zona de crescimento em crianças são urgências com risco de sequelas longitudinais.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: A cicatrização da pele é secundária ao dano estrutural ósseo.",
      "B": "INCORRETA: O processo de consolidação óssea em crianças geralmente é muito rápido.",
      "C": "CORRETA: A **Fise** é o disco de cartilagem responsável pelo crescimento longitudinal do osso. Se houver lesão compressiva ou destruição da placa, o osso pode parar de crescer ou crescer de forma assimétrica.",
      "D": "INCORRETA: A osteoporose é uma doença metabólica ligada ao envelhecimento ou desequilíbrio hormonal, não a um trauma isolado na infância."
    },
    "explicacao": "Ponto de atenção: **Fratura em Fise** de criança = Risco de parada de crescimento (Discrepância de membros).",
    "aula_id": "bmf1_a11"
  },
  {
    "id": 922,
    "materia": "bmf1",
    "tema": "bmf1_a11",
    "enunciado": "No contexto da genética clássica, o termo **haploinsuficiência** em doenças autossômicas dominantes explica que:",
    "opcoes": [
      "A) Uma única cópia mutada é suficiente para causar o fenótipo porque a dose da proteína funcional (50%) fica abaixo do limiar necessário para a célula",
      "B) Sempre são necessários dois alelos mutados para que qualquer sintoma apareça",
      "C) O mecanismo só ocorre em mutações de ganho de função tóxica",
      "D) A proteína mutante impede fisicamente a função da proteína saudável"
    ],
    "correta": 0,
    "dificuldade": 3,
    "modulo": 1,
    "explicacao_geral": "A haploinsuficiência é o mecanismo de perda de função em doenças dominantes.",
    "explicacoes_opcoes": {
      "A": "CORRETA: Ocorre quando ter apenas **50% da proteína funcional** não é suficiente para manter a homeostase celular (Ex: Síndrome de Marfan ou NF1).",
      "B": "INCORRETA: Isso descreve o mecanismo de **recessividade**.",
      "C": "INCORRETA: Pelo contrário, descreve mutações de **perda de função**.",
      "D": "INCORRETA: Isso descreve o mecanismo de **dominante negativo**."
    },
    "explicacao": "Diferencial Genético: **Haploinsuficiência** (Falta produto) x **Dominante Negativo** (Mutante estraga o saudável).",
    "aula_id": "bmf1_a11"
  },
  {
    "id": 927,
    "materia": "bmf1",
    "tema": "bmf1_a11",
    "enunciado": "A **Doença de Huntington** é o exemplo clássico de herança por **expansão de repetições de nucleotídeos**. Qual o padrão molecular e a característica clínica de transmissão que a definem?",
    "opcoes": [
      "A) Expansão de repeats GAA no íntron; causa perda auditiva",
      "B) Expansão de repeats CAG no gene HTT; apresenta **antecipação fenotípica** (piora nas gerações sucessivas)",
      "C) Deleção de genes supressores de tumor; causa cegueira noturna",
      "D) Inativação do cromossomo X em homens; causa polidactilia"
    ],
    "correta": 1,
    "dificuldade": 3,
    "modulo": 1,
    "explicacao_geral": "Huntington é uma doença neurodegenerativa devastadora com padrão autossômico dominante.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: Repeats GAA estão ligados à Ataxia de Friedreich (recessiva).",
      "B": "CORRETA: A expansão de **CAG** gera uma trilha de poliglutamina tóxica. A **antecipação** ocorre porque o número de repeats tende a aumentar durante a gametogênese (especialmente a paterna), levando a sintomas mais precoces e graves nos filhos.",
      "C": "INCORRETA: Descreve o mecanismo de câncer familiar ou retinoblastoma.",
      "D": "INCORRETA: Homens não inativam o único cromossomo X que possuem (fisiologicamente)."
    },
    "explicacao": "Fatores de Huntington: **Repeat CAG** + **Anticipação** (Manifestação cada vez mais cedo no heredograma).",
    "aula_id": "bmf1_a11"
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
    print(f"Updated {updated_count} questions in Batch 8.")

if __name__ == "__main__":
    update_batch(batch_8_reviewed)
