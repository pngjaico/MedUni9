import json

batch_15_reviewed = [
  {
    "id": 1602,
    "materia": "semio2",
    "tema": "semio2_a1",
    "enunciado": "Sobre o papel pedagógico da **simulação clínica** na graduação médica, qual afirmação é a mais adequada?",
    "opcoes": [
      "A) Serve para promover uma ponte segura entre o conhecimento teórico e a execução técnica antes do cenário real com pacientes",
      "B) Substitui integralmente o atendimento a pacientes reais durante toda a graduação",
      "C) Serve apenas como entretenimento, sem critérios objetivos de desempenho",
      "D) Avalia unicamente a velocidade do aluno, dispensando o método"
    ],
    "correta": 0,
    "dificuldade": 1,
    "modulo": 2,
    "explicacao_geral": "A simulação é uma ferramenta de segurança do paciente e educação médica baseada em competências.",
    "explicacoes_opcoes": {
      "A": "CORRETA: O objetivo é treinar habilidades (manobras, comunicação) em ambiente controlado, permitindo o erro sem danos.",
      "B": "INCORRETA: A simulação prepara para o real, mas não o substitui no currículo.",
      "C": "INCORRETA: Existem rubricas e checklists rígidos para avaliação.",
      "D": "INCORRETA: O método e a segurança são prioritários sobre a rapidez."
    },
    "explicacao": "Resumo: Simulação = Treino Seguro. Permite repetir e receber feedback antes de tocar no paciente real.",
    "aula_id": "semio2_a1"
  },
  {
    "id": 1623,
    "materia": "semio2",
    "tema": "semio2_a1",
    "enunciado": "Na discussão de um caso clínico, o que distingue melhor uma **hipótese diagnóstica prioritária** de uma hipótese remota?",
    "opcoes": [
      "A) A hipótese prioritária é sempre a mais rara da epidemiologia",
      "B) A hipótese prioritária combina **probabilidade clínica** e **gravidade potencial** (o que mais mata ou o que é mais provável)",
      "C) A hipótese prioritária é necessariamente a primeira queixa do paciente",
      "D) A hipótese remota é sempre mais perigosa que a prioritária"
    ],
    "correta": 1,
    "dificuldade": 2,
    "modulo": 2,
    "explicacao_geral": "O raciocínio clínico exige priorizar diagnósticos baseando-se no binômio Probabilidade x Gravidade.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: O comum é mais provável que o raro (Lei de Sutton).",
      "B": "CORRETA: Devemos pensar no que é mais comum e, simultaneamente, no que é mais letal (ex: Infarto em dor torácica).",
      "C": "INCORRETA: O paciente pode começar relatando uma queixa irrelevante; o médico deve orientar o raciocínio.",
      "D": "INCORRETA: A remota é apenas menos provável no contexto atual."
    },
    "explicacao": "Raciocínio Clínico: Priorize o que é **Provável** e o que é **Grave**.",
    "aula_id": "semio2_a1"
  },
  {
    "id": 1656,
    "materia": "bmf1",
    "tema": "bmf1_a15",
    "enunciado": "Sobre a anatomia do **Hilo Renal**, qual a disposição correta das estruturas da frente para trás (ântero-posterior)?",
    "opcoes": [
      "A) Veia Renal, Artéria Renal e Ureter (Mnemônico **VAU**)",
      "B) Ureter, Artéria e Veia",
      "C) Artéria, Veia e Ureter",
      "D) Apenas Ureter e Artéria"
    ],
    "correta": 0,
    "dificuldade": 1,
    "modulo": 1,
    "explicacao_geral": "Conhecer a topografia do hilo é essencial para procedimentos cirúrgicos e exames de imagem.",
    "explicacoes_opcoes": {
      "A": "CORRETA: A **Veia** é a mais anterior, seguida pela **Artéria** e, por último, o **Ureter** (Pelve Renal).",
      "B": "INCORRETA: Inverte a disposição anatômica.",
      "C": "INCORRETA: Disposição errada.",
      "D": "INCORRETA: Faltam estruturas."
    },
    "explicacao": "Mnemônico: **VAU** (Veia, Artéria, Ureter) — Da frente para trás.",
    "aula_id": "bmf1_a15"
  },
  {
    "id": 1667,
    "materia": "bmf1",
    "tema": "bmf1_a15",
    "enunciado": "A **barreira de filtração glomerular** é composta por três camadas principais. Quais são elas?",
    "opcoes": [
      "A) Endotélio fenestrado, Membrana Basal Glomerular e Podócitos (folha visceral)",
      "B) Apenas Podócitos e Mesângio",
      "C) Cápsula de Bowman e Túbulo Proximal",
      "D) Mácula densa e células justaglomerulares"
    ],
    "correta": 0,
    "dificuldade": 2,
    "modulo": 1,
    "explicacao_geral": "A barreira de filtração seleciona o que passa para o espaço urinário por tamanho e carga elétrica.",
    "explicacoes_opcoes": {
      "A": "CORRETA: O **endotélio** filtra células; a **membrana basal** filtra por carga (aniônica); e os **podócitos** (pedicelos) garantem a permeabilidade final.",
      "B": "INCORRETA: Faltam componentes essenciais da barreira.",
      "C": "INCORRETA: Estas são partes do néfron, não da barreira microestrutural.",
      "D": "INCORRETA: Estes formam o Aparelho Justaglomerular (controle de PA/Filtração)."
    },
    "explicacao": "Trio da Filtração: **Endotélio + Membrana Basal + Podócitos**.",
    "aula_id": "bmf1_a15"
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
    print(f"Updated {updated_count} questions in Batch 15.")

if __name__ == "__main__":
    update_batch(batch_15_reviewed)
