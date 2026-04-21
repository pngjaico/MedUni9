import json

batch_1_3_reviewed = [
  {
    "id": 213,
    "materia": "tecnica_operatoria",
    "tema": "tcar_a1",
    "enunciado": "Sobre **embalagem e esterilização** de instrumental cirúrgico, é correto afirmar:",
    "opcoes": [
      "A) Pacote rasgado pode ser usado se o interior “parecer” íntegro",
      "B) Indicador químico ausente dispensa abertura em sala",
      "C) Lote e validade não precisam ser conferidos pelo usuário",
      "D) Sem embalagem adequada e rastreabilidade não há garantia de esterilização válida"
    ],
    "correta": 3,
    "dificuldade": 2,
    "modulo": 6,
    "explicacao_geral": "A manutenção da esterilidade depende da **integridade da barreira estéril** (embalagem) e do monitoramento por indicadores de processo.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: Qualquer rasgo ou furo rompe a barreira microbiana; o material deve ser reprocessado.",
      "B": "INCORRETA: O indicador químico é a prova visual de que o calor chegou ao pacote.",
      "C": "INCORRETA: A conferência de lote e validade é regra de segurança obrigatória para o instrumentador/enfermeiro.",
      "D": "CORRETA: Esterilidade é um conceito de **processo validado**; a falha em qualquer etapa (embalagem/rastreio) invalida o uso."
    },
    "explicacao": "A segurança cirúrgica exige que cada item estéril seja rastreável e esteja com sua embalagem **perfeitamente íntegra** até o momento do uso.",
    "aula_id": "tcar_a1"
  },
  {
    "id": 214,
    "materia": "tecnica_operatoria",
    "tema": "tcar_a2",
    "enunciado": "A **área restrita** do Centro Cirúrgico (CC) inclui tipicamente:",
    "opcoes": [
      "A) Sala cirúrgica e adjacências com barreira máxima junto ao campo",
      "B) Farmácia central aberta ao público",
      "C) Estacionamento externo e refeitório do hospital",
      "D) Recepção administrativa sem vestimenta especial"
    ],
    "correta": 0,
    "dificuldade": 2,
    "modulo": 6,
    "explicacao_geral": "O Centro Cirúrgico é dividido em áreas (Não restrita, Semirrestrita e Restrita) para controlar o fluxo de contaminantes.",
    "explicacoes_opcoes": {
      "A": "CORRETA: A sala de operação e as áreas de escovação são zonas restritas que exigem paramentação completa.",
      "B": "INCORRETA: A farmácia central do hospital é uma área não restrita ao fluxo cirúrgico.",
      "C": "INCORRETA: São áreas externas ao bloco operatório.",
      "D": "INCORRETA: Áreas administrativas do CC são, em geral, semirrestritas ou não restritas."
    },
    "explicacao": "A **área restrita** é aquela onde o risco de infecção é mais crítico, exigindo rigor no controle de circulação e vestimentas privativas.",
    "aula_id": "tcar_a2"
  },
  {
    "id": 219,
    "materia": "bmf2",
    "tema": "bmf2_a1",
    "enunciado": "O **Time-out cirúrgico**, realizado imediatamente antes da incisão, visa:",
    "opcoes": [
      "A) Reduzir o número de compressas disponíveis na mesa",
      "B) Pausa de segurança: conferir paciente, sítio, lateralidade e itens críticos",
      "C) Documentar o tempo operatório em minutos",
      "D) Substituir o consentimento informado"
    ],
    "correta": 1,
    "dificuldade": 2,
    "modulo": 6,
    "explicacao_geral": "O **Time-out** é a etapa final do Checklist de Cirurgia Segura da OMS, envolvendo toda a equipe em uma confirmação verbal ativa.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: A contagem de compressas é outro protocolo de segurança, não o objetivo do time-out.",
      "B": "CORRETA: É o momento de 'parar tudo' para garantir que é o paciente certo, no local certo e com o material necessário pronto.",
      "C": "INCORRETA: Cronometragem é um registro administrativo secundário.",
      "D": "INCORRETA: O consentimento deve ser obtido muito antes, em ambiente ambulatorial ou internamento."
    },
    "explicacao": "O **Time-out** é uma barreira contra o erro humano, prevenindo cirurgias em locais errados ou no paciente incorreto.",
    "aula_id": "bmf2_a1"
  },
  {
    "id": 226,
    "materia": "semiologia1",
    "tema": "semio1_a5",
    "enunciado": "O tempo operatório da **diérese** corresponde a:",
    "opcoes": [
      "A) Abertura de planos anatômicos por corte, dissecção ou energia",
      "B) Somente ligaduras definitivas de pedículos volumosos",
      "C) Fechamento por planos com suturas",
      "D) Reposicionamento do paciente na mesa"
    ],
    "correta": 0,
    "dificuldade": 1,
    "modulo": 6,
    "explicacao_geral": "Os tempos fundamentais da cirurgia são: **Diérese** (abrir), **Hemostasia** (parar sangrar), **Exérese** (o objetivo/extração) e **Síntese** (fechar).",
    "explicacoes_opcoes": {
      "A": "CORRETA: Engloba o bisturi (frio), eletrocautério (calor) e dissecções rombas.",
      "B": "INCORRETA: Corresponde ao tempo de **hemostasia**.",
      "C": "INCORRETA: Corresponde ao tempo de **síntese**.",
      "D": "INCORRETA: É parte da logística de sala, não um tempo operatório fundamental."
    },
    "explicacao": "A **diérese** é o primeiro tempo cirúrgico, criando o acesso necessário para o procedimento propriamente dito.",
    "aula_id": "semio1_a5"
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
    print(f"Updated {updated_count} questions in Batch 1.3.")

if __name__ == "__main__":
    update_batch(batch_1_3_reviewed)
