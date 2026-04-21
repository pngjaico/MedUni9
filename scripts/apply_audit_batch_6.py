import json

batch_6_reviewed = [
  {
    "id": 713,
    "materia": "sus",
    "tema": "sus_a9",
    "enunciado": "A aplicação de uma **vacina** em um grupo de adolescentes assintomáticos, visando reduzir a incidência de uma doença antes de qualquer manifestação clínica, é classificada como qual nível de prevenção?",
    "opcoes": [
      "A) Prevenção Primária",
      "B) Prevenção Secundária",
      "C) Prevenção Terciária",
      "D) Prevenção Quaternária"
    ],
    "correta": 0,
    "dificuldade": 1,
    "modulo": 1,
    "explicacao_geral": "A prevenção primária foca em remover a causa ou aumentar a resistência antes que a doença ocorra.",
    "explicacoes_opcoes": {
      "A": "CORRETA: A vacinação é o exemplo clássico de **prevenção primária**, pois atua na fase pré-patogênica.",
      "B": "INCORRETA: A prevenção secundária foca no diagnóstico precoce (ex.: rastreamento).",
      "C": "INCORRETA: A prevenção terciária foca na reabilitação e limitação de sequelas.",
      "D": "INCORRETA: A prevenção quaternária foca em evitar a medicalização excessiva e iatrogenia."
    },
    "explicacao": "Padrão de prova: **Primária** (Vacina/Preservativo) x **Secundária** (Mamografia/Papanicolau/Rastreio).",
    "aula_id": "sus_a9"
  },
  {
    "id": 719,
    "materia": "sus",
    "tema": "sus_a9",
    "enunciado": "Um médico decide revisar a polifarmácia de um idoso assintomático e cancelar exames de rastreio sem evidência científica de benefício para aquela faixa etária. Qual nível de prevenção está sendo exercido?",
    "opcoes": [
      "A) Primária",
      "B) Secundária",
      "C) Terciária",
      "D) Quaternária"
    ],
    "correta": 3,
    "dificuldade": 2,
    "modulo": 1,
    "explicacao_geral": "O conceito de prevenção quaternária (Marc Jamoulle) é vital para evitar o 'overdiagnosis' e o 'overtreatment'.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: Não visa impedir a incidência de uma nova doença, mas sim o dano da intervenção médica.",
      "B": "INCORRETA: O foco não é o diagnóstico precoce, mas evitar diagnósticos desnecessários.",
      "C": "INCORRETA: Não se trata de reabilitação.",
      "D": "CORRETA: A **prevenção quaternária** busca identificar pacientes em risco de sobremedicalização e protegê-los de novas intervenções médicas inapropriadas."
    },
    "explicacao": "Resumo: Prevenir o dano gerado pelo sistema de saúde = **Prevenção Quaternária**.",
    "aula_id": "sus_a9"
  },
  {
    "id": 724,
    "materia": "sus",
    "tema": "sus_a9",
    "enunciado": "A **Lei Eloy Chaves (1923)** é considerada o marco inicial da Previdência Social no Brasil. Como eram chamadas e qual a principal característica das entidades criadas por essa lei?",
    "opcoes": [
      "A) IAPs; organizadas por categorias profissionais nacionais",
      "B) CAPS (Caixas de Aposentadoria e Pensão); organizadas por empresa",
      "C) INAMPS; focadas em hospitais privados contratados",
      "D) Santas Casas; mantidas por caridade religiosa"
    ],
    "correta": 1,
    "dificuldade": 2,
    "modulo": 1,
    "explicacao_geral": "A Lei Eloy Chaves segmentou a proteção social pelo vínculo direto com a empresa.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: Os IAPs (Institutos) surgiram na Era Vargas, unificando as caixas por categoria (Ex: Industriários).",
      "B": "CORRETA: As **CAPS** eram caixas ligadas a **empresas específicas** (Ex: Ferroviários da Cia Paulista). Era um modelo restrito aos trabalhadores formais.",
      "C": "INCORRETA: O INAMPS é do período militar (1977).",
      "D": "INCORRETA: As Santas Casas antecedem a previdência formal, vindo desde o período colonial."
    },
    "explicacao": "Evolução Histórica: **CAPS** (Empresa) → **IAPs** (Categoria) → **INPS/INAMPS** (Unificado/Militar) → **SUS** (Universal).",
    "aula_id": "sus_a9"
  },
  {
    "id": 731,
    "materia": "sus",
    "tema": "sus_a9",
    "enunciado": "Qual a importância histórica da **8ª Conferência Nacional de Saúde (1986)** para a criação do SUS?",
    "opcoes": [
      "A) Foi a primeira aberta à participação popular e consolidou o conceito de 'Saúde como Direito'",
      "B) Foi nela que Getúlio Vargas criou os Institutos de Aposentadoria (IAPs)",
      "C) Marcou a unificação das CAPS em um sistema único de assistência",
      "D) Foi a conferência que decidiu pela estatização de todos os hospitais privados do país"
    ],
    "correta": 0,
    "dificuldade": 1,
    "modulo": 1,
    "explicacao_geral": "A 8ª CNS foi o pilar democrático da Reforma Sanitária brasileira.",
    "explicacoes_opcoes": {
      "A": "CORRETA: Sob o lema 'Saúde é Democracia', contou com usuários, trabalhadores e gestores, servindo de base para o texto do **Art. 196 da CF/88**.",
      "B": "INCORRETA: Os IAPs foram criados nos anos 30, muito antes da conferência.",
      "C": "INCORRETA: A unificação das CAPS em IAPs ocorreu na década de 1930.",
      "D": "INCORRETA: O SUS permite a participação complementar do setor privado, não houve estatização total."
    },
    "explicacao": "A 8ª CNS e a Reforma Sanitária mudaram o paradigma: de saúde como 'favor' ou 'benefício do trabalhador' para **Saúde como Direito de Todos**.",
    "aula_id": "sus_a9"
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
    print(f"Updated {updated_count} questions in Batch 6.")

if __name__ == "__main__":
    update_batch(batch_6_reviewed)
