import json

batch_20_reviewed = [
  {
    "id": 2102,
    "materia": "farma1",
    "tema": "farma1_a3",
    "enunciado": "A associação de Sulfametoxazol e Trimetoprima (Cotrimoxazol) é clássica pelo seu **bloqueio sequencial** na síntese de folato. Qual enzima é o alvo específico do **Trimetoprima**?",
    "opcoes": [
      "A) Diidrofolato redutase (DHFR)",
      "B) Diidropteroato sintetase",
      "C) DNA-Girase",
      "D) Transpeptidase"
    ],
    "correta": 0,
    "dificuldade": 2,
    "modulo": 1,
    "explicacao_geral": "As sulfonamidas bloqueiam o início da via, enquanto o trimetoprima bloqueia a etapa final de redução do folato.",
    "explicacoes_opcoes": {
      "A": "CORRETA: O Trimetoprima inibe a DHFR, impedindo a formação do tetraidrofolato ativo.",
      "B": "INCORRETA: Este é o alvo do Sulfametoxazol.",
      "C": "INCORRETA: Este é o alvo das Quinolonas (ex: Ciprofloxacino).",
      "D": "INCORRETA: Este é o alvo dos Beta-lactâmicos (síntese de parede)."
    },
    "explicacao": "Mnemônico Folato: **S**ulfametoxazol -> **S**intetase. **T**rimetoprima -> **T**etraidrofolato (via DHFR).",
    "aula_id": "farma1_a3"
  },
  {
    "id": 2114,
    "materia": "farma1",
    "tema": "farma1_a3",
    "enunciado": "O **Aciclovir** é uma pró-droga que exige ativação seletiva para inibir a DNA polimerase viral. Qual enzima viral é responsável pela sua **primeira fosforilação** nas células infectadas por Herpes?",
    "opcoes": [
      "A) Timidina Quinase Viral",
      "B) Transcriptase Reversa",
      "C) Neuraminidase",
      "D) Protease"
    ],
    "correta": 0,
    "dificuldade": 2,
    "modulo": 1,
    "explicacao_geral": "A seletividade do aciclovir deve-se ao fato de que ele é ativado preferencialmente em células infectadas pelo vírus, poupando células sadias.",
    "explicacoes_opcoes": {
      "A": "CORRETA: A timidina quinase do HSV converte o aciclovir em aciclovir-monofosfato. Sem essa etapa, o fármaco não é ativo.",
      "B": "INCORRETA: Relacionada ao ciclo do HIV.",
      "C": "INCORRETA: Relacionada ao ciclo da Influenza (alvo do Oseltamivir).",
      "D": "INCORRETA: Envolvida na maturação de poliproteínas (alvo dos IP no HIV)."
    },
    "explicacao": "Segurança farmacológica: **Aciclovir = Timidina Quinase Viral** (Ativação seletiva).",
    "aula_id": "farma1_a3"
  },
  {
    "id": 2153,
    "materia": "mad1",
    "tema": "mad1_a6",
    "enunciado": "A **Rejeição Hiperaguda** ocorre em minutos ou horas após o transplante de órgãos sólidos. Qual o principal mecanismo fisiopatológico desse evento?",
    "opcoes": [
      "A) Presença de anticorpos pré-formados (anti-HLA ou ABO) contra o doador",
      "B) Ativação tardia de linfócitos T citotóxicos contra o parênquima",
      "C) Fibrose progressiva dos vasos do enxerto",
      "D) Infecção oportunista transmitida pelo órgão transplantado"
    ],
    "correta": 0,
    "dificuldade": 2,
    "modulo": 1,
    "explicacao_geral": "Trata-se de uma reação de hipersensibilidade tipo II imediata, levando à trombose vascular e necrose do enxerto no centro cirúrgico.",
    "explicacoes_opcoes": {
      "A": "CORRETA: Anticorpos pré-existentes ligam-se ao endotélio do doador, ativam o complemento e causam trombose maciça.",
      "B": "INCORRETA: Isso descreve a rejeição aguda (celular), que leva dias ou semanas.",
      "C": "INCORRETA: Isso descreve a rejeição crônica (meses a anos).",
      "D": "INCORRETA: Infecções podem ocorrer, mas não explicam a rejeição hiperaguda fulminante."
    },
    "explicacao": "Transplante: **Hiperaguda = Anticorpos pré-formados**. Evitada pelo Cross-match.",
    "aula_id": "mad1_a6"
  },
  {
    "id": 2157,
    "materia": "mad1",
    "tema": "mad1_a6",
    "enunciado": "Durante uma transfusão de concentrado de hemácias, o paciente apresenta calafrios, febre, dor lombar intensa e urina escura. Qual a conduta imediata obrigatória?",
    "opcoes": [
      "A) Interromper a transfusão imediatamente e manter o acesso venoso com soro fisiológico",
      "B) Reduzir o gotejamento da transfusão e administrar dipirona",
      "C) Manter a transfusão e coletar amostra para teste de Coombs",
      "D) Administrar adrenalina IM e continuar a bolsa"
    ],
    "correta": 0,
    "dificuldade": 1,
    "modulo": 1,
    "explicacao_geral": "Estes são sinais clássicos de Reação Hemolítica Aguda por incompatibilidade ABO, uma emergência médica.",
    "explicacoes_opcoes": {
      "A": "CORRETA: O primeiro passo é parar a infusão para evitar que mais hemácias incompatíveis entrem na circulação.",
      "B": "INCORRETA: Jamais continue a transfusão se houver suspeita de reação hemolítica.",
      "C": "INCORRETA: O teste deve ser feito, mas só após parar a transfusão.",
      "D": "INCORRETA: A adrenalina é para anafilaxia, mas o erro crítico aqui seria continuar a bolsa."
    },
    "explicacao": "Segurança Transfusional: **Suspeita de reação? PARA A BOLSA.**",
    "aula_id": "mad1_a6"
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
    print(f"Updated {updated_count} questions in Batch 20.")

if __name__ == "__main__":
    update_batch(batch_20_reviewed)
