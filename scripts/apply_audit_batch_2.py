import json

batch_2_reviewed = [
  {
    "id": 301,
    "materia": "bmf1",
    "tema": "bmf1_a12",
    "enunciado": "A **hipertermia maligna** ancora-se fisiologicamente em qual mecanismo de falha celular?",
    "opcoes": [
      "A) Ausência total de Ca²⁺ no sarcoplasma muscular",
      "B) Bloqueio irreversível de receptores muscarínicos",
      "C) Parada completa da produção de ATP mitocondrial",
      "D) Liberação descontrolada de Ca²⁺ pelo receptor de rianodina (RYR1)"
    ],
    "correta": 3,
    "dificuldade": 3,
    "modulo": 1,
    "explicacao_geral": "A hipertermia maligna é uma condição farmacogenética desencadeada por anestésicos inalatórios, gerando contração muscular sustentada e calor excessivo.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: O quadro é causado pelo **excesso** de cálcio livre, não pela falta.",
      "B": "INCORRETA: Receptores muscarínicos estão ligados ao sistema parassimpático; o problema aqui é na junção neuromuscular e retículo sarcoplasmático.",
      "C": "INCORRETA: Há, na verdade, um consumo maciço de ATP para tentar reabsorver o cálcio, gerando hipermetabolismo.",
      "D": "CORRETA: A mutação no **receptor de rianodina (RYR1)** causa uma inundação de cálcio no citoplasma, levando à rigidez e hipertermia."
    },
    "explicacao": "Conceito-chave: Defeito no canal de cálcio (RYR1) → Contrações mantidas → **Hipermetabolismo** e risco de morte. O tratamento é com **dantrolene**.",
    "aula_id": "bmf1_a12"
  },
  {
    "id": 311,
    "materia": "mad2",
    "tema": "mad2_a1",
    "enunciado": "Qual conjunto de achados sugere fortemente **Síndrome Compartimental Aguda** em um membro traumatizado?",
    "opcoes": [
      "A) Dor proporcional ao esforço e ausência de edema",
      "B) Parestesia isolada sem prejuízo motor ou dor",
      "C) Dor intensa e desproporcional, agravada pela extensão passiva da musculatura",
      "D) Cianose periférica com enchimento capilar normal"
    ],
    "correta": 2,
    "dificuldade": 3,
    "modulo": 1,
    "explicacao_geral": "A síndrome compartimental ocorre quando a pressão dentro de um espaço osteofascial aumenta, comprometendo a perfusão tecidual.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: A dor da síndrome compartimental é caracteristicamente **desproporcional** à lesão visível.",
      "B": "INCORRETA: Parestesia é um sinal tardio; o diagnóstico deve ser precoce baseado na dor.",
      "C": "CORRETA: A dor ao alongar passivamente os músculos do compartimento é o teste clínico mais sensível para isquemia muscular inicial.",
      "D": "INCORRETA: Cianose e ausência de pulso são sinais extremamente tardios (estágios de necrose)."
    },
    "explicacao": "Lembre-se dos 6 P's: **Pain** (desproporcional), **Pressure**, **Paresthesia**, **Pallor**, **Paralysis**, **Pulselessness**. O tratamento é cirúrgico: **fasciotomia**.",
    "aula_id": "mad2_a1"
  },
  {
    "id": 313,
    "materia": "mad2",
    "tema": "mad2_a10",
    "enunciado": "Considerando que a **epiderme é avascular**, como ocorre o suprimento de oxigênio e nutrientes para suas células?",
    "opcoes": [
      "A) Por vasos linfáticos que atravessam o estrato córneo",
      "B) Por difusão a partir dos capilares da derme papilar",
      "C) Através dos poros das glândulas sudoríparas",
      "D) Por absorção direta de umidade do ar ambiente"
    ],
    "correta": 1,
    "dificuldade": 2,
    "modulo": 1,
    "explicacao_geral": "A epiderme depende inteiramente do leito vascular da derme subjacente para sua sobrevivência metabólica.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: Não existem vasos linfáticos ou sanguíneos dentro da epiderme saudável.",
      "B": "CORRETA: Os nutrientes atravessam a membrana basal por **difusão passiva** vindo da derme rica em vasos.",
      "C": "INCORRETA: Glândulas secretam para fora; não servem para nutrição celular epitelial.",
      "D": "INCORRETA: A barreira cutânea é impermeável; a nutrição é endógena via sangue (derme)."
    },
    "explicacao": "Essa dependência explica por que processos que descolam a epiderme da derme (como bolhas grandes) levam à necrose epidérmica rápida.",
    "aula_id": "mad2_a10"
  },
  {
    "id": 324,
    "materia": "mad1",
    "tema": "mad1_a4",
    "enunciado": "Qual é o modo de secreção característico da **glândula sebácea**?",
    "opcoes": [
      "A) Merócrino (exocitose de vesículas)",
      "B) Apócrino (perda da porção apical celular)",
      "C) Holócrino (a célula toda é eliminada na secreção)",
      "D) Endócrino (via corrente sanguínea)"
    ],
    "correta": 2,
    "dificuldade": 1,
    "modulo": 1,
    "explicacao_geral": "O modo de secreção define se a célula sobrevive ou se desintegra para liberar seu produto.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: Merócrino é o modo das glândulas sudoríparas écrinas e do pâncreas.",
      "B": "INCORRETA: Apócrino ocorre em glândulas mamárias e sudoríparas das axilas/pubis.",
      "C": "CORRETA: Na **secreção holócrina**, a célula acumula sebo e se rompe totalmente, tornando-se o próprio produto secretado.",
      "D": "INCORRETA: Glândulas sebáceas possuem ductos que desembocam no folículo piloso (exócrinas)."
    },
    "explicacao": "Mnemônico: **H**olócrino = **H**olocausto celular (a célula morre para secretar).",
    "aula_id": "mad1_a4"
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
    print(f"Updated {updated_count} questions in Batch 2.")

if __name__ == "__main__":
    update_batch(batch_2_reviewed)
