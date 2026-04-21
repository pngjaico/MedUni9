import json

batch_24_25_reviewed = [
  {
    "id": 2508,
    "materia": "bmf2",
    "tema": "bmf2_a1",
    "enunciado": "O botulismo é uma paralisia flácida grave causada pela toxina do *Clostridium botulinum*. Qual o mecanismo molecular exato que impede a contração muscular?",
    "opcoes": [
      "A) Bloqueio dos receptores nicotínicos na placa motora",
      "B) Clivagem de proteínas SNARE, impedindo a exocitose de Acetilcolina (ACh)",
      "C) Inibição da enzima Acetilcolinesterase na fenda sináptica",
      "D) Bloqueio dos canais de cálcio voltagem-dependentes pré-sinápticos"
    ],
    "correta": 1,
    "dificuldade": 2,
    "modulo": 1,
    "explicacao_geral": "A toxina botulínica é uma protease que ataca o maquinário de fusão das vesículas sinápticas.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: Este é o mecanismo do Curare e da Miastenia Gravis.",
      "B": "CORRETA: A clivagem das proteínas SNARE (como a sinaptobrevina) impede que as vesículas de ACh se fundam à membrana e liberem o neurotransmissor.",
      "C": "INCORRETA: Isso causaria paralisia espástica/crise colinérgica (mecanismo dos organofosforados).",
      "D": "INCORRETA: Mecanismo da Síndrome de Lambert-Eaton."
    },
    "explicacao": "Pilar Molecular: **Botulismo = Clivagem de SNARE = Sem liberação de ACh.**",
    "aula_id": "bmf2_a1"
  },
  {
    "id": 2514,
    "materia": "bmf1",
    "tema": "bmf1_a1",
    "enunciado": "Ao examinar um paciente com paralisia facial, como diferenciar clinicamente uma lesão **Periférica** (Paralisia de Bell) de uma lesão **Central** (AVC)?",
    "opcoes": [
      "A) Na lesão periférica, a fronte é poupada; na central, há paralisia de toda a hemiface",
      "B) Na lesão periférica, há paralisia de toda a hemiface (inclui fronte); na central, a fronte é poupada",
      "C) Ambas poupam a fronte e atingem apenas o terço inferior da face",
      "D) A lesão central sempre causa perda de paladar, a periférica não"
    ],
    "correta": 1,
    "dificuldade": 3,
    "modulo": 1,
    "explicacao_geral": "A musculatura da fronte recebe inervação motora cortical bilateral, enquanto o terço inferior recebe apenas contralateral.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: Inverteu os conceitos anatômicos.",
      "B": "CORRETA: Como o núcleo do nervo facial para a fronte recebe fibras de ambos os hemisférios, um AVC (central) não apaga o movimento da fronte. Na lesão do nervo (periférica), tudo para.",
      "C": "INCORRETA: Erro anatômico crasso.",
      "D": "INCORRETA: O paladar pode estar alterado em ambas dependendo da topografia, mas não é o critério de diferenciação central/periférica."
    },
    "explicacao": "Regra de Ouro: **Frante Poupada = Lesão CENTRAL (AVC).** **Hemiface Toda = Lesão PERIFÉRICA.**",
    "aula_id": "bmf1_a1"
  },
  {
    "id": 2534,
    "materia": "bmf1",
    "tema": "bmf1_a1",
    "enunciado": "Um trauma craniano na região do osso temporal com fratura e lesão da **Artéria Meníngea Média** costuma resultar em qual tipo de hemorragia?",
    "opcoes": [
      "A) Hematoma Epidural (Extradural)",
      "B) Hematoma Subdural",
      "C) Hemorragia Subaracnoide",
      "D) Hematoma Intraparenquimatoso"
    ],
    "correta": 0,
    "dificuldade": 2,
    "modulo": 1,
    "explicacao_geral": "Vasos arteriais de alta pressão entre o crânio e a dura-máter geram hematomas que expandem rapidamente.",
    "explicacoes_opcoes": {
      "A": "CORRETA: O espaço epidural é virtual. A ruptura da artéria meníngea média descola a dura-máter do crânio, gerando a imagem clássica em lente biconvexa.",
      "B": "INCORRETA: Relacionado a veias de ponte (ponte crânio-dura), comum em idosos, imagem em 'crescente'.",
      "C": "INCORRETA: Geralmente por ruptura de aneurisma no polígono de Willis.",
      "D": "INCORRETA: Sangramento dentro do tecido cerebral, comum em crises hipertensivas."
    },
    "explicacao": "Anatomia Cirúrgica: **Meníngea Média + Osso Temporal = Hematoma EPIDURAL.**",
    "aula_id": "bmf1_a1"
  },
  {
    "id": 2542,
    "materia": "bmf2",
    "tema": "bmf2_a1",
    "enunciado": "A via do **Lemnisco Medial** (Funículo Posterior) é responsável por quais modalidades sensoriais e onde ocorre a sua decussação?",
    "opcoes": [
      "A) Dor e Temperatura; decussa na medula espinal",
      "B) Propriocepção consciente e Vibração; decussa no bulbo (nicleos grácil e cuneiforme)",
      "C) Tato grosseiro e pressão; decussa no tálamo",
      "D) Visão e audição; decussa no mesencéfalo"
    ],
    "correta": 1,
    "dificuldade": 2,
    "modulo": 1,
    "explicacao_geral": "Vias ascendentes possuem trajetos e pontos de cruzamento específicos que explicam síndromes medulares.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: Esta é a descrição da via Espinotalâmica lateral.",
      "B": "CORRETA: O funículo posterior transporta sensibilidade fina. O primeiro neurônio sobe ipsilateral até o bulbo, onde o segundo cruza (decussação sensorial).",
      "C": "INCORRETA: Tato grosseiro viaja pela via espinotalâmica anterior.",
      "D": "INCORRETA: Modalidades especiais com vias totalmente distintas."
    },
    "explicacao": "Neurofisiologia: **Coluna Dorsal = Propriocepção/Vibração/Tato Fino. Cruza no BULBO.**",
    "aula_id": "bmf2_a1"
  },
  {
    "id": 2556,
    "materia": "semio2",
    "tema": "semio2_a7",
    "enunciado": "Um paciente com **Adenoma de Hipófise** volumoso apresenta queixa visual. Qual o padrão de defeito de campo visual esperado pela compressão do quiasma óptico?",
    "opcoes": [
      "A) Hemianopsia Bitemporal",
      "B) Hemianopsia Homônima Contralateral",
      "C) Amaurose ipsilateral (cegueira total de um olho)",
      "D) Quadrantanopsia superior"
    ],
    "correta": 0,
    "dificuldade": 3,
    "modulo": 2,
    "explicacao_geral": "O quiasma óptico localiza-se logo acima da sela túrcica e é o ponto de cruzamento das fibras nasais (retina nasal).",
    "explicacoes_opcoes": {
      "A": "CORRETA: As fibras da retina nasal (que enxergam o campo temporal) cruzam no quiasma. A compressão central do quiasma apaga os dois campos temporais.",
      "B": "INCORRETA: Sugere lesão do trato óptico ou radiação óptica (pós-quiasmático).",
      "C": "INCORRETA: Sugere lesão do nervo óptico pré-quiasmático.",
      "D": "INCORRETA: Sugere lesão parcial das radiações ópticas (alça de Meyer ou lobo parietal)."
    },
    "explicacao": "Semiologia Ocular: **Tumor de Hipófise + Compressão Quiasma = Hemianopsia BITEMPORAL.**",
    "aula_id": "semio2_a7"
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
    print(f"Updated {updated_count} questions in Batch 24-25.")

if __name__ == "__main__":
    update_batch(batch_24_25_reviewed)
