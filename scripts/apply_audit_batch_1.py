import json
import os

# Batch 1 processed by AI
batch_1_reviewed = [
  {
    "id": 202,
    "materia": "tecnica_operatoria",
    "tema": "tcar_a1",
    "enunciado": "**Antissepsia**, na prática cirúrgica, objetiva principalmente:",
    "opcoes": [
      "A) Reduzir microrganismos em tecido vivo com agente químico adequado",
      "B) Esterilizar instrumental metálico em autoclave",
      "C) Eliminar esporos de superfícies de mesa não crítica",
      "D) Substituir a troca de luvas perfuradas"
    ],
    "correta": 0,
    "dificuldade": 2,
    "modulo": 6,
    "explicacao_geral": "A **antissepsia** é o processo de redução ou inibição do crescimento de microrganismos em **tecidos vivos** (pele/mucosas) mediante a aplicação de agentes químicos (antissépticos).",
    "explicacoes_opcoes": {
      "A": "CORRETA: Antissepsia é exclusiva para **tecidos vivos** utilizando antissépticos.",
      "B": "INCORRETA: Esterilização de materiais é feita via **processos físicos ou químicos** em objetos inanimados (artigos).",
      "C": "INCORRETA: Eliminação em superfícies inanimadas refere-se à **desinfecção**.",
      "D": "INCORRETA: Luvas perfuradas devem ser **trocadas imediatamente**; a antissepsia não corrige quebras de barreira mecânica."
    },
    "explicacao": "A **antissepsia** diferencia-se da desinfecção e esterilização pelo seu alvo: **tecidos vivos**. Ela visa reduzir a flora transitória e residente para prevenir infecções do sítio cirúrgico.",
    "aula_id": "tcar_a1"
  },
  {
    "id": 203,
    "materia": "tecnica_operatoria",
    "tema": "tcar_a1",
    "enunciado": "**Esterilização** é definida como o processo que:",
    "opcoes": [
      "A) Garante ausência apenas de fungos filamentosos",
      "B) Elimina todas as formas microbianas, inclusive esporos",
      "C) Equivale à antissepsia bem executada da pele",
      "D) Reduz parcialmente bactérias vegetativas em objetos"
    ],
    "correta": 1,
    "dificuldade": 2,
    "modulo": 6,
    "explicacao_geral": "Esterilização é o nível máximo de letalidade microbiana, garantindo a eliminação de **todas as formas de vida**, incluindo as formas esporuladas mais resistentes.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: O espectro é total, não restrito a fungos.",
      "B": "CORRETA: A destruição de **esporos** é o critério que define a esterilização frente à desinfecção.",
      "C": "INCORRETA: Pele é tecido vivo e não pode ser esterilizada sem danos permanentes (usa-se **antissepsia**).",
      "D": "INCORRETA: Redução parcial em objetos é característica da **desinfecção**."
    },
    "explicacao": "O conceito de **esterilização** é binário: ou o objeto está estéril ou não. A validação do processo depende da eliminação de **Geobacillus stearothermophilus** (indicador biológico).",
    "aula_id": "tcar_a1"
  },
  {
    "id": 204,
    "materia": "tecnica_operatoria",
    "tema": "tcar_a1",
    "enunciado": "Em relação à **assepsia** operatória, qual afirmação é mais precisa?",
    "opcoes": [
      "A) Resume-se ao uso de luva estéril pelo cirurgião",
      "B) É sinônimo de desinfecção de piso e macas",
      "C) Conjunto de medidas para impedir contaminação do campo e do ato cirúrgico",
      "D) Aplica-se somente ao paciente, não à equipe"
    ],
    "correta": 2,
    "dificuldade": 2,
    "modulo": 6,
    "explicacao_geral": "A **assepsia** é o conjunto de métodos e processos preventivos que visam impedir a introdução de microrganismos em um ambiente ou corpo que não os contenha.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: Luvas são Equipamentos de Proteção, parte da técnica, mas não definem o conceito todo.",
      "B": "INCORRETA: Desinfecção ambiental é um passo auxiliar da assepsia, mas não seu sinônimo.",
      "C": "CORRETA: Abrange barreiras físicas, comportamento da equipe e rigor técnico para manter o **campo cirúrgico estéril**.",
      "D": "INCORRETA: É uma responsabilidade **coletiva** de toda a equipe e influi sobre o paciente."
    },
    "explicacao": "Visualize a **assepsia** como a estratégia global de 'não deixar o germe entrar'. Envolve desde a circulação restrita até a técnica de escovação e montagem de mesa.",
    "aula_id": "tcar_a1"
  },
  {
    "id": 205,
    "materia": "tecnica_operatoria",
    "tema": "tcar_a1",
    "enunciado": "Na **antissepsia** de pele antes de incisão, a orientação técnica usual do gesto é:",
    "opcoes": [
      "A) Da periferia para o centro, voltando para redistribuir produto",
      "B) Circular aleatório sem critério de área",
      "C) Somente horizontal em um único passe sem tempo de contato",
      "D) Do centro para a periferia, sem retornar ao centro com a mesma compressa"
    ],
    "correta": 3,
    "dificuldade": 2,
    "modulo": 6,
    "explicacao_geral": "A técnica de aplicação do antisséptico deve seguir uma lógica de **barreira mecânica**, movendo a carga microbiana para longe da área onde ocorrerá a incisão.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: Movimentos para o centro levam a microbiota da periferia (área suja) para a zona estéril (área limpa).",
      "B": "INCORRETA: A falta de padrão impede a garantia de cobertura total e quebra a lógica de barreira.",
      "C": "INCORRETA: O **tempo de contato** (ex: 2 min para PVPI) e o atrito são essenciais para a eficácia.",
      "D": "CORRETA: Garante que a zona mais limpa (centro/local da incisão) não seja recontaminada durante o processo."
    },
    "explicacao": "A regra de ouro é: **Limpo para Sujo** (Centro para Periferia). Uma vez que a compressa toca a periferia, ela é descartada ou seu lado é trocado para não retornar ao centro.",
    "aula_id": "tcar_a1"
  }
]

def update_batch(batch):
    with open('data/questoes.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    # Create a map for easy updating
    questoes_map = {q['id']: q for q in data['questoes']}
    
    updated_count = 0
    for q_new in batch:
        if q_new['id'] in questoes_map:
            questoes_map[q_new['id']].update(q_new)
            updated_count += 1
    
    with open('data/questoes.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    
    print(f"Updated {updated_count} questions in Batch 1.")

if __name__ == "__main__":
    update_batch(batch_1_reviewed)
