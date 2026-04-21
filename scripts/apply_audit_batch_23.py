import json

batch_23_reviewed = [
  {
    "id": 2412,
    "materia": "paps2",
    "tema": "paps2_a1",
    "enunciado": "Ao realizar um estudo com uma amostra pequena (n < 50), qual teste de normalidade é o mais recomendado para verificar se os dados seguem uma distribuição gaussiana?",
    "opcoes": [
      "A) Shapiro-Wilk",
      "B) Kolmogorov-Smirnov (KS)",
      "C) Teste t de Student",
      "D) Qui-quadrado de aderência"
    ],
    "correta": 0,
    "dificuldade": 2,
    "modulo": 2,
    "explicacao_geral": "Testes de normalidade verificam a hipótese nula (H0) de que a amostra provém de uma população normal.",
    "explicacoes_opcoes": {
      "A": "CORRETA: O Shapiro-Wilk é o teste mais potente e recomendado para amostras pequenas (geralmente até 50 ou 100 indivíduos).",
      "B": "INCORRETA: O KS é muito insensível para amostras pequenas e costuma ser usado apenas para grandes conjuntos de dados.",
      "C": "INCORRETA: O Teste t é um teste paramétrico que EXIGE normalidade, não serve para testá-la.",
      "D": "INCORRETA: Geralmente usado para variáveis categóricas, não para testar normalidade de variáveis contínuas em amostras pequenas."
    },
    "explicacao": "Dica de Ouro: **Shapiro-Wilk = Amostras Pequenas**. Se p > 0,05, os dados são normais.",
    "aula_id": "paps2_a1"
  },
  {
    "id": 2430,
    "materia": "paps2",
    "tema": "paps2_a1",
    "enunciado": "Em bioestatística, o que caracteriza a ocorrência de um **Erro do Tipo II (ou erro beta)** em um teste de hipóteses?",
    "opcoes": [
      "A) Aceitar a hipótese nula (H0) quando ela é, na verdade, falsa",
      "B) Rejeitar a hipótese nula (H0) quando ela é verdadeira",
      "C) Obter um valor-p menor que 0,05 por puro acaso",
      "D) Concluir que há uma diferença que realmente existe"
    ],
    "correta": 0,
    "dificuldade": 3,
    "modulo": 2,
    "explicacao_geral": "Erros de decisão ocorrem porque trabalhamos com amostras, não com a população total.",
    "explicacoes_opcoes": {
      "A": "CORRETA: É o 'Falso Negativo'. O pesquisador diz que não há efeito, mas o efeito existe (falta de poder estatístico).",
      "B": "INCORRETA: Este é o Erro Tipo I (Falso Positivo), geralmente definido pelo alpha (0,05).",
      "C": "INCORRETA: Isso define o Erro Tipo I.",
      "D": "INCORRETA: Isso define um acerto (Poder Estatístico = 1 - beta)."
    },
    "explicacao": "Mnemônico: **Tipo I = Falso Positivo** (Rejeita o que é certo). **Tipo II = Falso Negativo** (Aceita o que é errado).",
    "aula_id": "paps2_a1"
  },
  {
    "id": 2450,
    "materia": "paps2",
    "tema": "paps2_a1",
    "enunciado": "Dentre os critérios de causalidade de **Bradford Hill**, qual é considerado o único critério absolutamente obrigatório para estabelecer relação causa-efeito?",
    "opcoes": [
      "A) Temporalidade",
      "B) Gradiente Dose-Resposta",
      "C) Analogia",
      "D) Plausibilidade Biológica"
    ],
    "correta": 0,
    "dificuldade": 2,
    "modulo": 2,
    "explicacao_geral": "Os critérios ajudam a diferenciar associação estatística de causalidade real.",
    "explicacoes_opcoes": {
      "A": "CORRETA: A causa DEVE obrigatoriamente preceder o efeito no tempo. Sem temporalidade, não há causalidade.",
      "B": "INCORRETA: Importante (mais dose, mais efeito), mas nem toda relação é linear.",
      "C": "INCORRETA: Ajuda a entender por comparação, mas é um critério fraco.",
      "D": "INCORRETA: Desejável, mas muitas vezes a ciência descobre o efeito antes de entender o mecanismo biológico."
    },
    "explicacao": "Conceito de Ouro: **Bradford Hill - Temporalidade é o único SINE QUA NON**.",
    "aula_id": "paps2_a1"
  },
  {
    "id": 2473,
    "materia": "bmf2",
    "tema": "bmf2_a1",
    "enunciado": "Sobre a organização funcional do Sistema Nervoso Autônomo **Simpático**, qual a configuração correta de sua origem e fibras?",
    "opcoes": [
      "A) Origem Toracolombar (T1-L2); Fibras pré-ganglionares curtas",
      "B) Origem Crânio-sacral; Fibras pré-ganglionares longas",
      "C) Origem Cervical; Fibras pós-ganglionares curtas",
      "D) Origem Sacral; Fibras adrenérgicas pré-ganglionares"
    ],
    "correta": 0,
    "dificuldade": 2,
    "modulo": 1,
    "explicacao_geral": "O sistema simpático prepara o corpo para 'luta ou fuga' e possui gânglios próximos à medula.",
    "explicacoes_opcoes": {
      "A": "CORRETA: Origem na coluna intermédio-lateral de T1 a L2. Fibras pré curtas pois os gânglios paravertebrais estão próximos à saída da medula.",
      "B": "INCORRETA: Esta é a descrição do Sistema Parassimpático.",
      "C": "INCORRETA: Não há origem autônoma simpática primária na região cervical (os nervos sobem da região torácica).",
      "D": "INCORRETA: Fibras pré-ganglionares são SEMPRE colinérgicas, tanto no simpático quanto no parassimpático."
    },
    "explicacao": "Fisiologia: **Simpático = Toracolombar + Pré Curta**. **Parassimpático = Crâniosacral + Pré Longa**.",
    "aula_id": "bmf2_a1"
  },
  {
    "id": 2480,
    "materia": "bmf1",
    "tema": "bmf1_a1",
    "enunciado": "No Sistema Nervoso Central, a distribuição das substâncias cinzenta e branca varia conforme a localização. Qual a descrição anatômica correta dessa inversão?",
    "opcoes": [
      "A) No encéfalo a cinzenta é periférica; na medula a cinzenta é central",
      "B) No encéfalo a cinzenta é central; na medula a cinzenta é periférica",
      "C) Ambas possuem substância cinzenta central e branca periférica",
      "D) Não há substância branca na medula espinal"
    ],
    "correta": 0,
    "dificuldade": 1,
    "modulo": 1,
    "explicacao_geral": "A substância cinzenta contém os corpos celulares, enquanto a branca contém os axônios mielinizados.",
    "explicacoes_opcoes": {
      "A": "CORRETA: No cérebro e cerebelo o córtex (cinzenta) é externo. Na medula, o 'H medular' (cinzenta) é interno, cercado por tratos de fibras (branca).",
      "B": "INCORRETA: Inverteu os dois conceitos.",
      "C": "INCORRETA: Ignora a organização cortical do encéfalo.",
      "D": "INCORRETA: A medula possui extensos funículos de substância branca (tratos ascendentes e descendentes)."
    },
    "explicacao": "Anatomia Básica: **Encéfalo (Capa cinza)** vs **Medula (H cinza no centro)**.",
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
    print(f"Updated {updated_count} questions in Batch 23.")

if __name__ == "__main__":
    update_batch(batch_23_reviewed)
