import json

batch_14_reviewed = [
  {
    "id": 1505,
    "materia": "mad1",
    "tema": "mad1_a5",
    "enunciado": "Em um hemograma de um paciente com infecção bacteriana aguda, é comum observar um **desvio à esquerda**. O que esse termo significa tecnicamente?",
    "opcoes": [
      "A) Predomínio de linfócitos atípicos no sangue",
      "B) Maior presença de plaquetas gigantes",
      "C) Aumento da presença de neutrófilos imaturos (como **bastonetes**) na circulação",
      "D) Hemácias em alvo sem anemia associada"
    ],
    "correta": 2,
    "dificuldade": 2,
    "modulo": 2,
    "explicacao_geral": "O desvio à esquerda é um sinal hematológico clássico de que a medula óssea está liberando leucócitos precocemente devido a uma alta demanda.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: Linfócitos atípicos sugerem infecções virais (como mononucleose).",
      "B": "INCORRETA: Plaquetas gigantes referem-se à série trombocítica, não ao desvio leucocitário.",
      "C": "CORRETA: O **desvio à esquerda** indica que a medula está sendo 'forçada' a liberar formas mais jovens de neutrófilos para combater a infecção. O aumento de bastonetes é o marcador mais comum.",
      "D": "INCORRETA: Hemácias em alvo referem-se à morfologia das hemácias (ex: na talassemia)."
    },
    "explicacao": "Ponto de Prova: **Desvio à Esquerda = Bastonetes altos** (Infecção Bacteriana Aguda).",
    "aula_id": "mad1_a5"
  },
  {
    "id": 1512,
    "materia": "mad1",
    "tema": "mad1_a6",
    "enunciado": "Qual a principal diferença entre a **Imunização Ativa** (vacinas) e a **Imunização Passiva** (soros/imunoglobulinas)?",
    "opcoes": [
      "A) A ativa estimula o próprio sistema imune do hospedeiro a produzir anticorpos e células de **memória**",
      "B) A passiva induz proteção permanente após uma única dose",
      "C) A ativa fornece anticorpos prontos sem necessidade de resposta do paciente",
      "D) A passiva é feita apenas com vírus vivos atenuados"
    ],
    "correta": 0,
    "dificuldade": 1,
    "modulo": 2,
    "explicacao_geral": "Os tipos de imunização são definidos pela origem do anticorpo e pela duração da proteção.",
    "explicacoes_opcoes": {
      "A": "CORRETA: A vacina (ativa) 'treina' o corpo para que, no futuro, ele saiba se defender sozinho por meio da **memória imunológica**.",
      "B": "INCORRETA: A proteção passiva é temporária (os anticorpos injetados são degradados em semanas/meses).",
      "C": "INCORRETA: Isso descreve a imunização passiva.",
      "D": "INCORRETA: A passiva utiliza o produto final da imunidade (anticorpos), não o agente infeccioso."
    },
    "explicacao": "Resumo: **Ativa = Gera Memória**. **Passiva = Proteção Imediata e Temporária**.",
    "aula_id": "mad1_a6"
  },
  {
    "id": 1522,
    "materia": "mad1",
    "tema": "mad1_a7",
    "enunciado": "Um menino de 8 meses apresenta otites e pneumonias de repetição por germes encapsulados. O hemograma mostra ausência de **Linfócitos B** e as imunoglobulinas (IgG, IgA, IgM) estão quase zeradas. Qual o diagnóstico e mecanismo mais provável?",
    "opcoes": [
      "A) **Agamaglobulinemia de Bruton** (Mutação no gene **BTK**)",
      "B) Imunodeficiência Combinada Grave (SCID) por defeito em RAG",
      "C) Síndrome de DiGeorge (22q11)",
      "D) Deficiência seletiva de IgA"
    ],
    "correta": 0,
    "dificuldade": 2,
    "modulo": 2,
    "explicacao_geral": "Imunodeficiências primárias são raras, mas com apresentações clínicas muito características.",
    "explicacoes_opcoes": {
      "A": "CORRETA: A Agamaglobulinemia ligada ao X (Bruton) ocorre por falha na proteína **BTK**, travando a maturação dos linfócitos B na medula óssea. Sem células B, não há anticorpos.",
      "B": "INCORRETA: Na SCID, tanto T quanto B estariam comprometidos, e o bebê apresentaria infecções oportunistas (fungos) logo nas primeiras semanas.",
      "C": "INCORRETA: DiGeorge afeta o desenvolvimento do timo (Linfócitos T), não é puramente uma falta de B.",
      "D": "INCORRETA: Na deficiência de IgA, o IgG e IgM estão normais."
    },
    "explicacao": "Associação: **Menino + Falta de B + Sem Anticorpos = Bruton (BTK)**.",
    "aula_id": "mad1_a7"
  },
  {
    "id": 1533,
    "materia": "mad1",
    "tema": "mad1_a8",
    "enunciado": "No processo de **Tolerância Central**, as células epiteliais medulares do timo expressam o gene **AIRE**. Qual a função fundamental desse gene?",
    "opcoes": [
      "A) Produzir autoanticorpos para testar o sistema",
      "B) Permitir a expressão de antígenos de tecidos periféricos (ex: insulina) no timo para promover a **seleção negativa** de linfócitos autorreativos",
      "C) Inibir a migração de linfócitos para o baço",
      "D) Estímulo à produção de anticorpos IgG"
    ],
    "correta": 1,
    "dificuldade": 3,
    "modulo": 2,
    "explicacao_geral": "A educação tímica é o processo pelo qual o corpo impede que linfócitos que atacam o próprio organismo saiam para o sangue.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: O timo testa células, não produz anticorpos para isso.",
      "B": "CORRETA: O gene **AIRE** permite que proteínas de outros órgãos apareçam no timo. Assim, o timo consegue ver se o novo linfócito T ataca o próprio corpo antes de liberá-lo.",
      "C": "INCORRETA: Não tem relação com a migração esplênica.",
      "D": "INCORRETA: Trata-se de imunidade celular, não humoral."
    },
    "explicacao": "Conceito: **AIRE** = Espelho dos órgãos no timo (Sem AIRE = Doença Autoimune Poliendócrina).",
    "aula_id": "mad1_a8"
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
    print(f"Updated {updated_count} questions in Batch 14.")

if __name__ == "__main__":
    update_batch(batch_14_reviewed)
