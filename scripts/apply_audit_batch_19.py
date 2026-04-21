import json

batch_19_reviewed = [
  {
    "id": 2009,
    "materia": "mad2",
    "tema": "mad2_a1",
    "enunciado": "A **Doxorrubicina** (Antraciclina) é um quimioterápico amplamente utilizado, mas seu uso é limitado por uma toxicidade específica e cumulativa. Qual o principal efeito adverso monitorado?",
    "opcoes": [
      "A) Miocardiopatia dilatada dose-dependente",
      "B) Fibrose pulmonar progressiva",
      "C) Nefrotoxicidade aguda",
      "D) Hemorragia vesical (cistite hemorrágica)"
    ],
    "correta": 0,
    "dificuldade": 2,
    "modulo": 2,
    "explicacao_geral": "As antraciclinas causam dano miocárdico por estresse oxidativo, exigindo acompanhamento com ecocardiograma frequente.",
    "explicacoes_opcoes": {
      "A": "CORRETA: A cardiotoxicidade é a marca desta classe. Existe uma dose cumulativa máxima (ex: 450-550 mg/m²) para evitar insuficiência cardíaca irreversível.",
      "B": "INCORRETA: Típica da Bleomicina.",
      "C": "INCORRETA: Típica da Cisplatina.",
      "D": "INCORRETA: Típica da Ciclofosfamida."
    },
    "explicacao": "Toxicidade Específica: **Antraciclina = Coração**. Monitoração obrigatória.",
    "aula_id": "mad2_a1"
  },
  {
    "id": 2012,
    "materia": "mad1",
    "tema": "mad1_a6",
    "enunciado": "Uma criança com histórico de otites e pneumonias de repetição por **bactérias encapsuladas** (S. pneumoniae, H. influenzae) deve ser investigada para qual tipo de imunodeficiência?",
    "opcoes": [
      "A) Imunodeficiência Humoral (Defeito de anticorpos)",
      "B) Imunodeficiência Celular (Defeito de Linfócito T)",
      "C) Defeito de Fagócitos",
      "D) Deficiência de Complemento Terminal"
    ],
    "correta": 0,
    "dificuldade": 2,
    "modulo": 1,
    "explicacao_geral": "Os anticorpos (IgG) são essenciais para a opsonização e combate a bactérias com cápsulas polissacarídicas.",
    "explicacoes_opcoes": {
      "A": "CORRETA: Defeitos de anticorpos (ex: Agamaglobulinemia) cursam classicamente com infecções sinopulmonares por germes encapsulados.",
      "B": "INCORRETA: Defeitos de T levam a infecções por vírus, fungos e germes oportunistas.",
      "C": "INCORRETA: Fagócitos sugerem abscessos de pele e órgãos sólidos (ex: Estafilococos).",
      "D": "INCORRETA: Sugere infecções recorrentes por Neisseria."
    },
    "explicacao": "Raciocínio Imuno: **Encapsulados = Anticorpos (Humoral)**.",
    "aula_id": "mad1_a6"
  },
  {
    "id": 2046,
    "materia": "mad2",
    "tema": "mad2_a10",
    "enunciado": "Na Dengue, qual o período de maior risco para o aparecimento de sinais de choque e extravasamento plasmático (fase crítica)?",
    "opcoes": [
      "A) No momento da **defervescência** (queda da febre)",
      "B) Durante o pico febril (primeiras 24 horas)",
      "C) Após 14 dias de sintomas",
      "D) Apenas se houver reinfecção imediata"
    ],
    "correta": 0,
    "dificuldade": 1,
    "modulo": 2,
    "explicacao_geral": "O paradoxo da dengue é que a gravidade muitas vezes surge quando a febre cede.",
    "explicacoes_opcoes": {
      "A": "CORRETA: A fase crítica inicia com a queda da febre; o extravasamento plasmático pode levar ao choque e hemorragias.",
      "B": "INCORRETA: O pico febril é a fase febril inicial, onde o risco de choque ainda é baixo.",
      "C": "INCORRETA: Com 14 dias o paciente já deve estar na fase de recuperação.",
      "D": "INCORRETA: A gravidade pode ocorrer na primeira infecção, embora a segunda aumente o risco."
    },
    "explicacao": "Cuidado Clínico: **Febre caiu na Dengue? Fique atento!** Inicia a fase crítica.",
    "aula_id": "mad2_a10"
  },
  {
    "id": 2064,
    "materia": "mad2",
    "tema": "mad2_a10",
    "enunciado": "Qual característica do ciclo biológico do **Strongyloides stercoralis** explica a ocorrência de hiperinfecção disseminada em pacientes imunossuprimidos (ex: uso de corticoides)?",
    "opcoes": [
      "A) Capacidade de **autoinfecção interna**",
      "B) Necessidade de hospedeiro intermediário ruminante",
      "C) Transmissão por picada de mosquito Culex",
      "D) Reprodução exclusivamente extracelular no solo"
    ],
    "correta": 0,
    "dificuldade": 2,
    "modulo": 2,
    "explicacao_geral": "O estrongilóide é o único helminto capaz de completar seu ciclo sem sair do corpo humano.",
    "explicacoes_opcoes": {
      "A": "CORRETA: As larvas rabditoides tornam-se filarioides no intestino e re-penetram a mucosa ou pele perianal, perpetuando o ciclo.",
      "B": "INCORRETA: O ciclo é direto no humano.",
      "C": "INCORRETA: A penetração é ativa pela pele.",
      "D": "INCORRETA: Ele possui fase de vida livre no solo, mas a autoinfecção é parasitária."
    },
    "explicacao": "Gatilho Prova: **Strongyloides = Autoinfecção**. Cuidado extremo com corticoides!",
    "aula_id": "mad2_a10"
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
    print(f"Updated {updated_count} questions in Batch 19.")

if __name__ == "__main__":
    update_batch(batch_19_reviewed)
