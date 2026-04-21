import json

batch_21_reviewed = [
  {
    "id": 2203,
    "materia": "mad2",
    "tema": "mad2_a10",
    "enunciado": "Um paciente realiza teste rápido para HIV 10 dias após uma exposição de alto risco e o resultado é 'Não Reagente'. Qual a orientação correta baseada no conceito de **Janela Imunológica**?",
    "opcoes": [
      "A) O paciente está definitivamente livre do vírus",
      "B) O teste deve ser repetido em 30 dias, pois o resultado pode ser um falso-negativo por falta de anticorpos detectáveis",
      "C) O teste é conclusivo e não há necessidade de acompanhamento",
      "D) O paciente deve iniciar tratamento antirretroviral imediatamente mesmo com teste negativo"
    ],
    "correta": 1,
    "dificuldade": 2,
    "modulo": 2,
    "explicacao_geral": "A janela imunológica é o tempo entre a infecção e a detecção de anticorpos pelos testes disponíveis.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: Dez dias é um tempo muito curto para a maioria dos testes rápidos detectarem a soroconversão.",
      "B": "CORRETA: É necessário aguardar o tempo de soroconversão (geralmente 30 dias para testes de 4ª geração) para confirmar o resultado.",
      "C": "INCORRETA: Ignora o risco de falso-negativo precoce.",
      "D": "INCORRETA: O tratamento (TARV) depende de diagnóstico confirmado, exceto em protocolos de PEP (Profilaxia Pós-Exposição), que deve ser iniciada em até 72h."
    },
    "explicacao": "Conceito de Ouro: **Janela Imunológica = Tempo para soroconversão**. Teste precoce negativo não exclui infecção.",
    "aula_id": "mad2_a10"
  },
  {
    "id": 2212,
    "materia": "semio2",
    "tema": "semio2_a7",
    "enunciado": "A **Síndrome de Conn** (Aldosteronismo Primário) é uma causa importante de hipertensão secundária. Qual a tríade laboratorial e clínica de suspeição?",
    "opcoes": [
      "A) Hipertensão arterial, Hipocalemia (potássio baixo) e Alcalose metabólica",
      "B) Hipotensão, Hipercalemia e Acidose",
      "C) Hipertrofia de ventrículo direito e sopro sistólico",
      "D) Ganho de peso, estrias violáceas e giba dorsal"
    ],
    "correta": 0,
    "dificuldade": 3,
    "modulo": 2,
    "explicacao_geral": "O excesso de aldosterona retém sódio (e água) e excreta potássio e hidrogênio nos túbulos renais.",
    "explicacoes_opcoes": {
      "A": "CORRETA: Aldosterona alta causa retenção de Na+ e perda de K+ e H+ (Alcalose). A hipocalemia é um sinal de alerta clássico em hipertensos.",
      "B": "INCORRETA: Este seria o perfil da Doença de Addison (Insuficiência Adrenal).",
      "C": "INCORRETA: Achados cardíacos estruturais, não endócrinos diretos da tríade.",
      "D": "INCORRETA: Perfil da Síndrome de Cushing (excesso de cortisol)."
    },
    "explicacao": "Semiologia Endócrina: **Conn = HAS + Potássio Baixo**. Sempre suspeite em HAS resistente.",
    "aula_id": "semio2_a7"
  },
  {
    "id": 2249,
    "materia": "paps3",
    "tema": "paps3_a1",
    "enunciado": "No sistema de vigilância em saúde do trabalhador, qual a diferença fundamental entre a emissão da **CAT** (Comunicação de Acidente de Trabalho) e a notificação no **SINAN**?",
    "opcoes": [
      "A) A CAT tem finalidade previdenciária (INSS); o SINAN tem finalidade epidemiológica (Saúde Pública)",
      "B) Ambas servem apenas para trabalhadores informais",
      "C) A CAT é facultativa; o SINAN é exclusivo para médicos do trabalho",
      "D) Não há diferença; são nomes diferentes para o mesmo formulário"
    ],
    "correta": 0,
    "dificuldade": 2,
    "modulo": 3,
    "explicacao_geral": "Existem fluxos diferentes para garantir direitos do trabalhador e para planejar políticas de saúde pública.",
    "explicacoes_opcoes": {
      "A": "CORRETA: A CAT garante benefícios ao segurado do INSS. O SINAN gera dados para a Vigilância em Saúde planejar intervenções no território.",
      "B": "INCORRETA: Trabalhadores informais notificam no SINAN, mas a CAT exige vínculo formal (CLT).",
      "C": "INCORRETA: A notificação em saúde (SINAN) é dever de todo profissional de saúde.",
      "D": "INCORRETA: São sistemas independentes com objetivos distintos."
    },
    "explicacao": "Vigilância: **CAT = Dinheiro/Benefício (INSS)**. **SINAN = Dados/Epidemio (Saúde)**.",
    "aula_id": "paps3_a1"
  },
  {
    "id": 2263,
    "materia": "paps3",
    "tema": "paps3_a1",
    "enunciado": "Diferencie, de acordo com as Normas Regulamentadoras (NR), os conceitos de **Insalubridade** (NR-15) e **Periculosidade** (NR-16).",
    "opcoes": [
      "A) Insalubridade refere-se a agentes nocivos à saúde a longo prazo; Periculosidade refere-se ao risco imediato de vida",
      "B) São sinônimos e pagam o mesmo adicional de 30%",
      "C) Insalubridade é apenas para radiação; Periculosidade é para ruído",
      "D) Insalubridade não gera adicional salarial; Periculosidade gera"
    ],
    "correta": 0,
    "dificuldade": 2,
    "modulo": 3,
    "explicacao_geral": "A distinção baseia-se no tipo de dano: doença ocupacional crônica (insalubre) vs. acidente fatal agudo (perigoso).",
    "explicacoes_opcoes": {
      "A": "CORRETA: Insalubridade (agentes biológicos, químicos, ruído) causa doença. Periculosidade (explosivos, inflamáveis, eletricidade, violência) causa morte.",
      "B": "INCORRETA: Insalubridade paga 10/20/40% do salário mínimo; Periculosidade paga 30% do salário base.",
      "C": "INCORRETA: Inverteu os conceitos (radiação pode ser ambos, mas ruído é clássico de insalubridade).",
      "D": "INCORRETA: Ambos geram adicionais financeiros específicos."
    },
    "explicacao": "NRs de Ouro: **Insalubridade = Doença (Sininho)**. **Periculosidade = Explosão/Morte (Caveira)**.",
    "aula_id": "paps3_a1"
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
    print(f"Updated {updated_count} questions in Batch 21.")

if __name__ == "__main__":
    update_batch(batch_21_reviewed)
