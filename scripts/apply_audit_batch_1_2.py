import json

batch_1_2_reviewed = [
  {
    "id": 206,
    "materia": "tecnica_operatoria",
    "tema": "tcar_a1",
    "enunciado": "O **indicador biológico** em um ciclo de esterilização visa principalmente:",
    "opcoes": [
      "A) Demonstrar morte microbiana eficaz frente ao processo validado",
      "B) Substituir leitura de temperatura no painel do equipamento",
      "C) Comprovar apenas que o pacote esteve no setor de expurgo",
      "D) Medir umidade relativa exclusivamente da sala limpa"
    ],
    "correta": 0,
    "dificuldade": 2,
    "modulo": 6,
    "explicacao_geral": "O **indicador biológico** é o padrão-ouro para validar a esterilização, pois utiliza esporos bacterianos altamente resistentes (**Geobacillus stearothermophilus**) para testar a letalidade real do ciclo.",
    "explicacoes_opcoes": {
      "A": "CORRETA: Somente a morte dos esporos prova que o ciclo atingiu os parâmetros de letalidade.",
      "B": "INCORRETA: Indicadores biológicos, químicos e físicos (leitura de painel) são **complementares**, um não substitui o outro.",
      "C": "INCORRETA: Estar no expurgo não garante esterilidade; o biológico valida o processo dentro da autoclave.",
      "D": "INCORRETA: Umidade da sala limpa é controle ambiental, sem relação direta com a validação interna do pacote."
    },
    "explicacao": "Enquanto os indicadores químicos (fitas) mostram que o calor chegou ao pacote, o **indicador biológico** prova que o calor foi suficiente para **matar a vida microbiana** mais resistente.",
    "aula_id": "tcar_a1"
  },
  {
    "id": 207,
    "materia": "tecnica_operatoria",
    "tema": "tcar_a1",
    "enunciado": "A **clorexidina alcoólica**, no preparo cutâneo, destaca-se por:",
    "opcoes": [
      "A) Não precisar de tempo de secagem antes da incisão",
      "B) Apresentar ação residual prolongada em pele, com início rápido",
      "C) Ser primeira escolha para irrigação de câmara anterior sem restrição",
      "D) Substituir o controle físico de ciclo em autoclave"
    ],
    "correta": 1,
    "dificuldade": 2,
    "modulo": 6,
    "explicacao_geral": "A clorexidina destaca-se pelo seu **efeito residual** (ação persistente por até 6h) e baixa toxicidade sistêmica, sendo o agente de escolha para a maioria dos sítios cirúrgicos.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: A secagem é obrigatória para evitar risco de **fogos/queimaduras** ao usar bisturi elétrico nos vapores do álcool.",
      "B": "CORRETA: Combina a rapidez do álcool com a **persistência (residual)** da clorexidina.",
      "C": "INCORRETA: É contraindicada em mucosa ocular, ouvido médio e tecido nervoso devido à ototoxicidade e neurotoxicidade.",
      "D": "INCORRETA: Antissépticos não têm relação com processos de esterilização de materiais inanimados."
    },
    "explicacao": "A escolha do antisséptico considera o **início de ação** (álcool é instantâneo) e o **efeito residual** (clorexidina é superior ao PVPI).",
    "aula_id": "tcar_a1"
  },
  {
    "id": 208,
    "materia": "tecnica_operatoria",
    "tema": "tcar_a1",
    "enunciado": "Diante da suspeita de **quebra de esterilidade** do campo durante o procedimento, a conduta correta é:",
    "opcoes": [
      "A) Ignorar se o sangramento for pequeno",
      "B) Prosseguir sem comunicar para não atrasar cirurgia",
      "C) Comunicar imediatamente, repor barreira/material e ajustar técnica",
      "D) Aplicar apenas mais antisséptico sobre campo já montado"
    ],
    "correta": 2,
    "dificuldade": 2,
    "modulo": 6,
    "explicacao_geral": "A manutenção da cadeia asséptica é absoluta. Qualquer dúvida sobre contaminação deve ser tratada como **contaminação real**.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: A segurança do paciente não depende do volume de sangramento, mas da exclusão de germes.",
      "B": "INCORRETA: A ética cirúrgica exige comunicação imediata de qualquer falha técnica para correção.",
      "C": "CORRETA: Deve-se reconhecer a quebra, substituir o material contaminado e, se necessário, refazer a paramentação.",
      "D": "INCORRETA: Antissépticos não estérilizam campos ou materiais já contaminados no intraoperatório."
    },
    "explicacao": "Princípio básico da assepsia: **Na dúvida, está contaminado**. A correção imediata evita complicações infecciosas pós-operatórias graves.",
    "aula_id": "tcar_a1"
  },
  {
    "id": 211,
    "materia": "tecnica_operatoria",
    "tema": "tcar_a1",
    "enunciado": "A **desinfecção** de superfícies não críticas difere da **esterilização** porque:",
    "opcoes": [
      "A) Garante ausência total de esporos em qualquer artigo",
      "B) Reduz carga microbiana, mas não equivale a eliminar toda vida microbiana",
      "C) Só age contra vírus; bactérias resistem sempre",
      "D) Só pode ser feita com autoclave portátil"
    ],
    "correta": 1,
    "dificuldade": 2,
    "modulo": 6,
    "explicacao_geral": "A **desinfecção** elimina a maioria dos microrganismos patogênicos, mas não necessariamente todas as formas de vida (como esporos), que só sucumbem à **esterilização**.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: A eliminação de esporos é exclusividade da esterilização.",
      "B": "CORRETA: A desinfecção é um processo de nível intermediário ou alto, insuficiente para atingir a esterilidade total.",
      "C": "INCORRETA: Desinfetantes hospitalares matam a maioria das bactérias vegetativas e vírus.",
      "D": "INCORRETA: Autoclave é o método de esterilização física, não de desinfecção química de superfícies."
    },
    "explicacao": "Lembre-se da hierarquia: **Limpeza** (remoção de sujidade) < **Desinfecção** (redução de patógenos) < **Esterilização** (eliminação TOTAL, incluindo esporos).",
    "aula_id": "tcar_a1"
  },
  {
    "id": 212,
    "materia": "tecnica_operatoria",
    "tema": "tcar_a1",
    "enunciado": "Em cirurgia geral, o método mais frequente e confiável de **esterilização** de instrumentais é:",
    "opcoes": [
      "A) Secagem ao ar ambiente de instrumental após uso",
      "B) Irradiação ultravioleta de bancada como único passo",
      "C) Autoclave com vapor saturado sob pressão em ciclo validado",
      "D) Imersão em álcool 70% por 30 segundos sem enxágue"
    ],
    "correta": 2,
    "dificuldade": 2,
    "modulo": 6,
    "explicacao_geral": "O **vapor saturado sob pressão** (autoclave) é o método mais seguro, econômico e rápido para materiais termorresistentes.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: Secagem é limpeza/conservação, não esterilização.",
      "B": "INCORRETA: A luz UV não tem poder de penetração em áreas de sombra do instrumental.",
      "C": "CORRETA: Combina temperatura e pressão para penetrar nas embalagens e destruir todas as formas de vida.",
      "D": "INCORRETA: Álcool 70% é desinfetante ou antisséptico, não esterilizante."
    },
    "explicacao": "A **autoclave** atua desnaturando proteínas estruturais e enzimas dos microrganismos através do calor úmido.",
    "aula_id": "tcar_a1"
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
    
    print(f"Updated {updated_count} questions in Batch 1.2.")

if __name__ == "__main__":
    update_batch(batch_1_2_reviewed)
