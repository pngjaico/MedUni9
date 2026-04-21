import json

batch_4_reviewed = [
  {
    "id": 501,
    "materia": "pmh",
    "tema": "pmh_a2",
    "enunciado": "A **amônia (NH₃)** é um subproduto altamente tóxico do metabolismo proteico. Como o organismo humano realiza sua detoxificação principal e qual o marcador clínico final desse processo?",
    "opcoes": [
      "A) Conversão em glutamina nos rins para excreção direta",
      "B) Ciclo da ureia no fígado, transformando-a em ureia solúvel",
      "C) Transformação em ácido úrico nos macrófagos",
      "D) Fixação em corpos cetônicos para uso energético cerebral"
    ],
    "correta": 1,
    "dificuldade": 2,
    "modulo": 1,
    "explicacao_geral": "A amônia deve ser rapidamente convertida para evitar neurotoxicidade (encefalopatia hepática).",
    "explicacoes_opcoes": {
      "A": "INCORRETA: Embora a glutamina seja um transportador de amônia, o principal mecanismo de detoxificação sistêmica é o ciclo da ureia hepático.",
      "B": "CORRETA: O **ciclo da ureia** ocorre predominantemente no fígado e converte a amônia tóxica em **ureia**, que é inócua e solúvel para excreção renal.",
      "C": "INCORRETA: O ácido úrico é o produto final do metabolismo das **purinas**, não da amônia proteica direta.",
      "D": "INCORRETA: A amônia não participa da formação de corpos cetônicos; na verdade, ela interfere no ciclo de Krebs no cérebro quando em excesso."
    },
    "explicacao": "Conceito-chave: **NH₃ (Tóxico)** → Fígado (Ciclo da Ureia) → **Ureia (Atóxico)**. Níveis elevados de amônia sugerem falha hepática grave.",
    "aula_id": "pmh_a2"
  },
  {
    "id": 505,
    "materia": "pmh",
    "tema": "pmh_a2",
    "enunciado": "Sobre a **Fenilcetonúria (PKU)**, um erro inato do metabolismo detectado no teste do pezinho, qual é o defeito enzimático e a principal consequência clínica se não tratada?",
    "opcoes": [
      "A) Deficiência de cistationina beta-sintase; causa tromboses e ectopia lenticular",
      "B) Deficiência de fenilalanina hidroxilase; causa retardo mental progressivo",
      "C) Deficiência de HGPRT; causa automutilação e artrite gotosa",
      "D) Deficiência de desidrogenase de cadeia ramificada; causa odor de 'xarope de bordo' na urina"
    ],
    "correta": 1,
    "dificuldade": 2,
    "modulo": 1,
    "explicacao_geral": "A PKU é um dos erros inatos mais comuns do metabolismo dos aminoácidos.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: Este é o quadro da **Homocistinúria**.",
      "B": "CORRETA: A falta da **fenilalanina hidroxilase** impede a conversão de fenilalanina em tirosina. O acúmulo de fenilalanina é neurotóxico.",
      "C": "INCORRETA: Refere-se à **Síndrome de Lesch-Nyhan** (metabolismo de purinas).",
      "D": "INCORRETA: Descreve a **Doença do Xarope de Bordo** (leucinose)."
    },
    "explicacao": "O diagnóstico precoce pelo **Teste do Pezinho** e a dieta restrita em fenilalanina são fundamentais para prevenir o dano neurológico irreversível.",
    "aula_id": "pmh_a2"
  },
  {
    "id": 514,
    "materia": "pmh",
    "tema": "pmh_a2",
    "enunciado": "A **Síndrome de Lesch-Nyhan** decorre da deficiência completa da enzima **HGPRT**. Qual via metabólica está comprometida e qual o achado clínico clássico?",
    "opcoes": [
      "A) Via de síntese de novo de pirimidinas; causa anemia megaloblástica",
      "B) Via de salvação (salvage) de purinas; causa automutilação e hiperuricemia grave",
      "C) Ciclo de Cori; causa acidose láctica severa",
      "D) Cadeia transportadora de elétrons; causa miopatia mitocondrial"
    ],
    "correta": 1,
    "dificuldade": 3,
    "modulo": 1,
    "explicacao_geral": "A deficiência de HGPRT impede a reciclagem de hipoxantina e guanina, desviando tudo para a produção de ácido úrico.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: Purinas e pirimidinas são eixos diferentes; a Lesch-Nyhan afeta as purinas.",
      "B": "CORRETA: Sem a **via de salvação**, as purinas são degradadas em excesso a ácido úrico. Clinicamente, destaca-se a **automutilação** e coreoatetose.",
      "C": "INCORRETA: O ciclo de Cori é a via lactato-glicose entre músculo e fígado.",
      "D": "INCORRETA: É uma doença do metabolismo de nucleotídeos, não da bioenergética mitocondrial direta."
    },
    "explicacao": "Associe sempre: **Lesch-Nyhan = HGPRT = Automutilação + Gota Juvenil**.",
    "aula_id": "pmh_a2"
  },
  {
    "id": 530,
    "materia": "pmh",
    "tema": "pmh_a2",
    "enunciado": "Qual a função fisiológica do **Ciclo de Cori** durante o exercício físico intenso?",
    "opcoes": [
      "A) Exportação de amônia do músculo para o fígado via alanina",
      "B) Regeneração de glicose no fígado a partir do lactato produzido pelo músculo",
      "C) Produção de ureia a partir de resíduos nitrogenados musculares",
      "D) Quebra de glicogênio muscular para liberação de glicose no sangue"
    ],
    "correta": 1,
    "dificuldade": 2,
    "modulo": 1,
    "explicacao_geral": "O Ciclo de Cori é uma via de integração metabólica que previne a acidose láctica excessiva.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: Este é o papel do **Ciclo da Alanina** (Ciclo de Cahill).",
      "B": "CORRETA: O músculo em anaerobiose produz **lactato**, que viaja ao fígado para ser convertido de volta em **glicose** (gliconeogênese), retornando ao músculo.",
      "C": "INCORRETA: O ciclo da ureia é independente do ciclo de Cori, embora ambos ocorram no fígado.",
      "D": "INCORRETA: O glicogênio muscular **não** contribui para a glicose sanguínea (falta a enzima Glicose-6-Fosfatase no músculo)."
    },
    "explicacao": "Mnemônico: **C**ori = **C**orrida (Lactato). **C**ahill = **C**abolism (Proteína/Alanina).",
    "aula_id": "pmh_a2"
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
    print(f"Updated {updated_count} questions in Batch 4.")

if __name__ == "__main__":
    update_batch(batch_4_reviewed)
