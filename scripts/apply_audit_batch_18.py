import json

batch_18_reviewed = [
  {
    "id": 1902,
    "materia": "mad2",
    "tema": "mad2_a8",
    "enunciado": "Mulher de 24 anos apresenta nódulo mamário indolor, firme, bem delimitado e com grande mobilidade ao exame físico. Qual o diagnóstico mais provável e a conduta inicial?",
    "opcoes": [
      "A) Fibroadenoma; observação ou exérese se houver crescimento rápido",
      "B) Carcinoma Ductal Invasivo; biópsia urgente",
      "C) Mastite; antibioticoterapia imediata",
      "D) Cisto simples; aspiração por agulha fina"
    ],
    "correta": 0,
    "dificuldade": 1,
    "modulo": 2,
    "explicacao_geral": "O fibroadenoma é a neoplasia benigna mais comum em mulheres jovens, caracterizada pela sua mobilidade (\"camundongo na mama\").",
    "explicacoes_opcoes": {
      "A": "CORRETA: Clinicamente é o quadro típico de fibroadenoma. Em jovens (< 30-35 anos), a conduta costuma ser conservadora após confirmação por imagem.",
      "B": "INCORRETA: Carcinomas costumam ser pétreos, irregulares e fixos, além de mais raros nessa idade.",
      "C": "INCORRETA: Mastite cursa com sinais logísticos (dor, calor, rubor).",
      "D": "INCORRETA: Cistos são preenchidos por líquido e costumam ter consistência flutuante ou renitente."
    },
    "explicacao": "Semio de Mama: Nódulo móvel e elástico em jovem = **Fibroadenoma**.",
    "aula_id": "mad2_a8"
  },
  {
    "id": 1912,
    "materia": "mad2",
    "tema": "mad2_a8",
    "enunciado": "Paciente com Hiperplasia Prostática Benigna (HPB) e sintomas obstrutivos necessita de medicação com início de ação rápido. Qual fármaco atua no componente dinâmico relaxando o colo vesical?",
    "opcoes": [
      "A) Tansulosina (Alfa-bloqueador)",
      "B) Finasterida (Inibidor da 5-alfa-redutase)",
      "C) Dutasterida (Inibidor da 5-alfa-redutase)",
      "D) Leuprolida (Análogo de GnRH)"
    ],
    "correta": 0,
    "dificuldade": 2,
    "modulo": 2,
    "explicacao_geral": "O tratamento da HPB divide-se em relaxar a musculatura (alfa-bloqueadores) ou reduzir o volume da próstata (5ARI).",
    "explicacoes_opcoes": {
      "A": "CORRETA: Os alfa-bloqueadores relaxam a musculatura lisa do colo vesical e uretra prostática, com alívio sintomático em poucos dias.",
      "B": "INCORRETA: A finasterida demora de 3 a 6 meses para reduzir o tamanho da próstata significativamente.",
      "C": "INCORRETA: Segue a mesma lógica da finasterida (longo prazo).",
      "D": "INCORRETA: Usado no câncer de próstata avançado, não é conduta de primeira linha para sintomas de HPB."
    },
    "explicacao": "Farmaco HPB: **Alfa-bloqueador = Rápido**. **5ARI = Lento** (reduz volume).",
    "aula_id": "mad2_a9"
  },
  {
    "id": 1932,
    "materia": "mad1",
    "tema": "mad1_a4",
    "enunciado": "A **Tríade de Virchow** descreve os três fatores fundamentais para o desenvolvimento de trombose. Quais são eles?",
    "opcoes": [
      "A) Lesão endotelial, estase ou turbulência do fluxo e hipercoagulabilidade",
      "B) Hipotermia, acidose e coagulopatia (tríade da morte)",
      "C) Taquicardia, hipotensão e cianose",
      "D) Obesidade, tabagismo e sedentarismo"
    ],
    "correta": 0,
    "dificuldade": 1,
    "modulo": 1,
    "explicacao_geral": "A formação do trombo in vivo depende do equilíbrio entre a parede do vaso, o fluxo e os componentes do sangue.",
    "explicacoes_opcoes": {
      "A": "CORRETA: É a definição patológica de Virchow. A lesão endotelial é o fator mais importante.",
      "B": "INCORRETA: Esta é a tríade letal do trauma, não da trombogênese.",
      "C": "INCORRETA: São sinais vitais alterados em choque, não fatores de trombose.",
      "D": "INCORRETA: São fatores de risco clínico, mas não compõem a tríade fisiopatológica de Virchow."
    },
    "explicacao": "Mnemônico Virchow: **Parede (Lesão) + Fluxo (Estase) + Sangue (Hipercoag)**.",
    "aula_id": "mad1_a4"
  },
  {
    "id": 1979,
    "materia": "mad1",
    "tema": "mad1_a5",
    "enunciado": "Sobre o reparo tecidual excessivo, qual a principal diferença clínica e histológica entre o **Quelóide** e a **Cicatriz Hipertrófica**?",
    "opcoes": [
      "A) O quelóide ultrapassa as margens da ferida original; a hipertrófica permanece nos limites da incisão",
      "B) A cicatriz hipertrófica nunca regride espontaneamente; o quelóide sempre regride",
      "C) O quelóide é composto por menos colágeno que a cicatriz normal",
      "D) A cicatriz hipertrófica é mais comum em negros e orientais que o quelóide"
    ],
    "correta": 0,
    "dificuldade": 2,
    "modulo": 1,
    "explicacao_geral": "Ambos são distúrbios da cicatrização por deposição excessiva de colágeno, mas com comportamentos biológicos distintos.",
    "explicacoes_opcoes": {
      "A": "CORRETA: O critério clássico de prova. O quelóide \"invade\" o tecido adjacente normal.",
      "B": "INCORRETA: O quelóide é que raramente regride; a hipertrófica pode melhorar com o tempo.",
      "C": "INCORRETA: Ambos possuem excesso de colágeno.",
      "D": "INCORRETA: O quelóide é nitidamente mais frequente em indivíduos de pele negra."
    },
    "explicacao": "Diferencial de Cicatriz: **Quelóide = Atravessa a fronteira** da ferida.",
    "aula_id": "mad1_a5"
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
    print(f"Updated {updated_count} questions in Batch 18.")

if __name__ == "__main__":
    update_batch(batch_18_reviewed)
