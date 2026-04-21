import json

batch_17_reviewed = [
  {
    "id": 1809,
    "materia": "bmf1",
    "tema": "bmf1_a13",
    "enunciado": "O esôfago possui uma transição muscular característica ao longo de sua extensão. Qual a composição da camada muscular no seu **terço inferior (distal)**?",
    "opcoes": [
      "A) Exclusivamente músculo liso",
      "B) Exclusivamente músculo estriado esquelético",
      "C) Mistura de músculo liso e estriado",
      "D) Ausência de camada muscular"
    ],
    "correta": 0,
    "dificuldade": 2,
    "modulo": 1,
    "explicacao_geral": "A transição de controle voluntário para involuntário no esôfago reflete sua histologia muscular.",
    "explicacoes_opcoes": {
      "A": "CORRETA: O terço distal é composto por músculo liso, sob controle do sistema nervoso autônomo (peristaltismo involuntário).",
      "B": "INCORRETA: O músculo estriado predomina no terço superior (deglutição voluntária).",
      "C": "INCORRETA: A mistura ocorre no terço médio (zona de transição).",
      "D": "INCORRETA: O esôfago é um órgão muscular; a camada é essencial para o transporte do bolo alimentar."
    },
    "explicacao": "Anatomia Esofágica: Superior = Estriado. Médio = Misto. **Inferior = Liso**.",
    "aula_id": "bmf1_a13"
  },
  {
    "id": 1834,
    "materia": "bmf1",
    "tema": "bmf1_a13",
    "enunciado": "O relaxamento do **Esfíncter Esofagiano Inferior (EEI)** é fundamental para a passagem do alimento para o estômago. Quais são os principais neurotransmissores inibitórios envolvidos nesse relaxamento?",
    "opcoes": [
      "A) VIP (Peptídeo Intestinal Vasoativo) e Óxido Nítrico (NO)",
      "B) Acetilcolina e Noradrenalina",
      "C) Gastrina e Histamina",
      "D) Serotonina e Dopamina"
    ],
    "correta": 0,
    "dificuldade": 3,
    "modulo": 1,
    "explicacao_geral": "O EEI mantém um tônus basal alto para evitar o refluxo e deve relaxar ativamente durante a deglutição.",
    "explicacoes_opcoes": {
      "A": "CORRETA: O reflexo de relaxamento vagal utiliza VIP e NO como mediadores para abrir o esfíncter.",
      "B": "INCORRETA: A acetilcolina geralmente aumenta o tônus contrátil no TGI.",
      "C": "INCORRETA: Estes estimulam a secreção ácida gástrica, não o relaxamento do EEI.",
      "D": "INCORRETA: Não são os principais mediadores do relaxamento do EEI."
    },
    "explicacao": "Fisiologia do EEI: **VIP e NO relaxam** o esfíncter para o alimento passar.",
    "aula_id": "bmf1_a13"
  },
  {
    "id": 1858,
    "materia": "bmf1",
    "tema": "bmf1_a13",
    "enunciado": "Sobre a absorção de **Ferro** no trato gastrointestinal, qual o principal local de absorção e a forma iônica preferencial para o transporte pelo transportador DMT1?",
    "opcoes": [
      "A) Duodeno; forma Ferrosa (Fe²⁺)",
      "B) Íleo terminal; forma Férrica (Fe³⁺)",
      "C) Estômago; quelado à Vitamina B12",
      "D) Cólon descendente; forma livre"
    ],
    "correta": 0,
    "dificuldade": 3,
    "modulo": 1,
    "explicacao_geral": "A absorção de ferro é altamente regulada e ocorre predominantemente no segmento mais proximal do intestino delgado.",
    "explicacoes_opcoes": {
      "A": "CORRETA: O ferro é absorvido no duodeno. O ácido clorídrico gástrico ajuda a converter Fe³⁺ em Fe²⁺, que é a forma transportada pelo DMT1.",
      "B": "INCORRETA: O íleo terminal absorve Vitamina B12 e Sais Biliares.",
      "C": "INCORRETA: O estômago prepara o ferro (pH ácido), mas não é o local principal de absorção.",
      "D": "INCORRETA: Não há absorção significativa de ferro no cólon."
    },
    "explicacao": "Ferro: **Duodeno + Fe²⁺** (auxílio do HCl gástrico).",
    "aula_id": "bmf1_a13"
  },
  {
    "id": 1863,
    "materia": "mad1",
    "tema": "mad1_a3",
    "enunciado": "A **necrose coagulativa** é o padrão de morte celular mais comum após isquemia em quase todos os órgãos sólidos. Qual a característica morfológica principal desse processo?",
    "opcoes": [
      "A) Preservação do contorno básico (arcabouço) da célula morta por alguns dias",
      "B) Transformação imediata do tecido em uma massa líquida viscosa",
      "C) Presença de infiltrado celular purulento com destruição total da arquitetura",
      "D) Desintegração das células em fragmentos granulares amarelados (\"queijo\")"
    ],
    "correta": 0,
    "dificuldade": 2,
    "modulo": 1,
    "explicacao_geral": "Na necrose coagulativa, a desnaturação das proteínas estruturais e enzimáticas bloqueia a proteólise imediata.",
    "explicacoes_opcoes": {
      "A": "CORRETA: É a necrose de infarto (exceto cérebro). A célula morre mas mantém o \"fantasma\" da sua estrutura original.",
      "B": "INCORRETA: Isso descreve a necrose liquefativa (ex: cérebro ou abscesso).",
      "C": "INCORRETA: Isso sugere uma inflamação aguda supurativa.",
      "D": "INCORRETA: Isso descreve a necrose caseosa (típica de Tuberculose)."
    },
    "explicacao": "Morfologia Patológica: **Coagulativa = Preservação do contorno**. É a necrose do Infarto (IAM, Infarto Renal).",
    "aula_id": "mad1_a3"
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
    print(f"Updated {updated_count} questions in Batch 17.")

if __name__ == "__main__":
    update_batch(batch_17_reviewed)
