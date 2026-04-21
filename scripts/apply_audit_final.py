import json

batch_final_reviewed = [
  {
    "id": 3526,
    "materia": "bmf1",
    "tema": "bmf1_a1",
    "enunciado": "As glândulas que produzem hormônios esteroides (como as adrenais e as gônadas) apresentam qual característica ultraestrutural marcante em suas células?",
    "opcoes": [
      "A) Abundância de Retículo Endoplasmático Rugoso (RER)",
      "B) Retículo Endoplasmático Liso (REL) altamente desenvolvido",
      "C) Ausência total de mitocôndrias",
      "D) Presença de grânulos de secreção de insulina"
    ],
    "correta": 1,
    "dificuldade": 2,
    "modulo": 1,
    "explicacao_geral": "Os hormônios esteroides são derivados do colesterol, cuja síntese e processamento ocorrem no REL.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: O RER é focado na síntese de proteínas (Ex: enzimas digestivas, anticorpos).",
      "B": "CORRETA: O REL é o sítio principal da biossíntese de lipídios e esteroides, além da desintoxicação celular.",
      "C": "INCORRETA: Essas células são metabolicamente ativas e precisam de muita energia mitocondrial.",
      "D": "INCORRETA: Grânulos de insulina são típicos das Células Beta do pâncreas."
    },
    "explicacao": "Ponto de Prova: **Células Esteroidogênicas (Adrenal/Testículo/Ovário) = Muito REL.**",
    "aula_id": "bmf1_a1"
  },
  {
    "id": 3537,
    "materia": "bmf1",
    "tema": "bmf1_a1",
    "enunciado": "Os lisossomos dependem de um ambiente interno específico para que suas enzimas (hidrolases ácidas) funcionem. Qual o pH ideal e o mecanismo de manutenção desse ambiente?",
    "opcoes": [
      "A) pH básico (8.0) por transporte passivo de íons OH-",
      "B) pH ácido (~5.0) mantido por bombas de H+ dependentes de ATP",
      "C) pH neutro (7.0) para proteger as proteínas internas",
      "D) pH variável conforme a dieta do paciente"
    ],
    "correta": 1,
    "dificuldade": 2,
    "modulo": 1,
    "explicacao_geral": "O gradiente de prótons garante que as enzimas só atuem dentro do compartimento lisossomal, prevenindo a autodigestão celular.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: Ambiente básico inativa as hidrolases ácidas.",
      "B": "CORRETA: As Bombas de Prótons (V-ATPases) concentram H+ no lúmen, criando a acidez necessária para a digestão celular.",
      "C": "INCORRETA: No citosol o pH é ~7.2, onde essas enzimas são menos ativas.",
      "D": "INCORRETA: O pH intracelular das organelas é rigidamente regulado e independente da dieta aguda."
    },
    "explicacao": "Conceito Chave: **Lisossomo = pH 5 = Ativação Enzimática.**",
    "aula_id": "bmf1_a1"
  },
  {
    "id": 3557,
    "materia": "bmf1",
    "tema": "bmf1_a1",
    "enunciado": "Proteínas que exercem sua função dentro do núcleo (ex: DNA Polimerase) precisam ser importadas do citoplasma. Qual o nome da sequência de aminoácidos necessária para essa importação?",
    "opcoes": [
      "A) Peptídeo Sinal de Golgi",
      "B) Sinal de Localização Nuclear (NLS)",
      "C) Cauda Poli-A",
      "D) Códon de Parada (Stop Codon)"
    ],
    "correta": 1,
    "dificuldade": 2,
    "modulo": 1,
    "explicacao_geral": "O NLS funciona como um 'passe' reconhecido por proteínas transportadoras chamadas Importinas.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: Endereça proteínas ao Sistema de Endomembranas (RE).",
      "B": "CORRETA: O **NLS** é a etiqueta molecular que permite a passagem seletiva pelo poro nuclear.",
      "C": "INCORRETA: É uma modificação em extremidades de fitas de RNAm.",
      "D": "INCORRETA: É o sinal de término da tradução no ribossomo."
    },
    "explicacao": "Biologia Celular: **NLS = Entrada no Núcleo.** Proteínas sem NLS ficam restritas ao citoplasma.",
    "aula_id": "bmf1_a1"
  },
  {
    "id": 3594,
    "materia": "bmf3",
    "tema": "bmf3_a1",
    "enunciado": "A **Necrose** é marcadamente diferente da **Apoptose**. Qual o principal achado histológico que caracteriza a necrose tecidual?",
    "opcoes": [
      "A) Encolhimento celular e formação de corpos apoptóticos sem inflamação",
      "B) Ruptura da membrana plasmática, extravasamento de conteúdo e indução de resposta inflamatória",
      "C) Fragmentação ordenada do DNA por caspases",
      "D) Aumento da produção de ATP e síntese proteica"
    ],
    "correta": 1,
    "dificuldade": 2,
    "modulo": 1,
    "explicacao_geral": "A necrose é uma morte celular 'suja' e acidental, resultante de insultos fatais (ex: isquemia).",
    "explicacoes_opcoes": {
      "A": "INCORRETA: Descreve a Apoptose (morte programada).",
      "B": "CORRETA: A perda da integridade da membrana libera enzimas e restos celulares no interstício, convocando neutrófilos e causando inflamação.",
      "C": "INCORRETA: Mecanismo central da Apoptose.",
      "D": "INCORRETA: Na morte celular a produção de ATP cessa e a síntese proteica é interrompida."
    },
    "explicacao": "Patologia Básica: **Necrose = Rompimento + Inflamação.** Apoptose = Silenciosa + Sem Inflamação.",
    "aula_id": "bmf3_a1"
  },
  {
    "id": 3608,
    "materia": "bmf1",
    "tema": "bmf1_a1",
    "enunciado": "No sistema circulatório adulto, qual desses vasos é uma exceção à regra geral de que 'veias transportam sangue venoso'?",
    "opcoes": [
      "A) Veia Cava Superior",
      "B) Veias Pulmonares",
      "C) Veia Jugular Interna",
      "D) Veia Porta-Hepática"
    ],
    "correta": 1,
    "dificuldade": 2,
    "modulo": 1,
    "explicacao_geral": "A nomenclatura de vasos baseia-se na direção do fluxo (Veia = Chegada ao coração; Artéria = Saída).",
    "explicacoes_opcoes": {
      "A": "INCORRETA: Transporta sangue venoso da cabeça/braços ao átrio direito.",
      "B": "CORRETA: As veias pulmonares trazem sangue oxigenado (arterial) dos pulmões para o átrio esquerdo.",
      "C": "INCORRETA: Drena sangue venoso do encéfalo.",
      "D": "INCORRETA: Transporta sangue rico em nutrientes (mas venoso) dos intestinos ao fígado."
    },
    "explicacao": "Anatomia Clássica: **Veias Pulmonares = Únicas veias ricas em Oxigênio** no circuito pós-natal.",
    "aula_id": "bmf1_a1"
  },
  {
    "id": 3620,
    "materia": "bmf2",
    "tema": "bmf2_a1",
    "enunciado": "Nos capilares, a velocidade do sangue é mínima, apesar da alta velocidade na aorta. Qual a explicação física para essa queda brusca de velocidade?",
    "opcoes": [
      "A) A viscosidade do sangue aumenta na periferia",
      "B) A área de secção transversal total dos capilares somados é imensamente maior que a da aorta",
      "C) O coração para de pulsar ao chegar nos tecidos",
      "D) O esfíncter pré-capilar bloqueia o fluxo totalmente"
    ],
    "correta": 1,
    "dificuldade": 3,
    "modulo": 1,
    "explicacao_geral": "Pela Lei da Continuidade (Fluxo = Velocidade x Área), a velocidade cai quando a área total aumenta.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: A viscosidade pouco muda sistemicamente de forma a causar esse efeito.",
      "B": "CORRETA: Embora cada capilar seja minúsculo, o somatório de milhoes de capilares cria uma área de vazão gigantesca, reduzindo a velocidade para facilitar a troca de gases.",
      "C": "INCORRETA: O fluxo é pulsátil até as arteríolas, tornando-se contínuo mas dependente da pressão sistólica média.",
      "D": "INCORRETA: O esfíncter regula, mas não explica a física da velocidade média em todo o leito capilar aberto."
    },
    "explicacao": "Fisologia Hemodinâmica: **Maior Área Total = Menor Velocidade.** Fundamental para as trocas gasosas.",
    "aula_id": "bmf2_a1"
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
    print(f"Updated {updated_count} questions in Final Batch.")

if __name__ == "__main__":
    update_batch(batch_final_reviewed)
