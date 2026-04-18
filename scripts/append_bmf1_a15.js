import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3113,
    "materia": "bmf1",
    "aula_id": "bmf1_a15",
    "tema": "bmf1_a15",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 0,
    "enunciado": "As glândulas exócrinas mantêm conexão com o epitélio de origem através de canais que transportam o produto de secreção para a superfície. Como se chamam esses canais?",
    "opcoes": [
      "A) Ductos.",
      "B) Capilares.",
      "C) Alvéolos.",
      "D) Sinuosos."
    ],
    "explicacao_geral": "Diferente das glândulas endócrinas, as exócrinas possuem condutos específicos para levar a secreção ao destino final.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] Os **ductos** glandulares são as vias de saída das glândulas exócrinas.",
      "B": "[INCORRETA] Capilares são vasos sanguíneos, destino da secreção endócrina.",
      "C": "[INCORRETA] Alvéolos são as unidades produtoras de algumas glândulas, não os canais de transporte.",
      "D": "[INCORRETA] Sinuosos refere-se a tipos de capilares ou ao formato do trajeto, não é o nome da estrutura."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3114,
    "materia": "bmf1",
    "aula_id": "bmf1_a15",
    "tema": "bmf1_a15",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "As glândulas sebáceas possuem um modo de secreção no qual a célula produtora morre e é eliminada junto com o produto secretado. Esse modo é chamado de:",
    "opcoes": [
      "A) Merócrino.",
      "B) Apócrino.",
      "C) Holócrino.",
      "D) Parácrino."
    ],
    "explicacao_geral": "O destino da célula durante a secreção define a classificação funcional da glândula.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Merócrinas eliminam apenas o produto (ex: glândula sudorípara écrina).",
      "B": "[INCORRETA] Apócrinas perdem apenas a parte apical do citoplasma (ex: glândula mamária).",
      "C": "[CORRETA] A secreção **holócrina** envolve o sacrifício de toda a célula, típico das glândulas sebáceas.",
      "D": "[INCORRETA] Parácrino é um modo de comunicação celular onde a substância atua nas células vizinhas."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3115,
    "materia": "bmf1",
    "aula_id": "bmf1_a15",
    "tema": "bmf1_a15",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "Um paciente queixa-se de inchaço abaixo da mandíbula que aumenta de tamanho durante as refeições. O médico diagnostica uma 'pedra' (cálculo) obstruindo o ducto de Wharton. Qual glândula salivar está afetada?",
    "opcoes": [
      "A) Glândula Parótida.",
      "B) Glândula Submandibular.",
      "C) Glândula Sublingual.",
      "D) Glândulas Salivares Menores."
    ],
    "explicacao_geral": "Cada glândula salivar maior possui um ducto principal com epônimo característico.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A parótida é drenada pelo ducto de Stenon (parotídeo), no nível do segundo molar superior.",
      "B": "[CORRETA] O **ducto de Wharton** drena a **glândula submandibular** e abre-se no assoalho da boca.",
      "C": "[INCORRETA] A sublingual possui múltiplos ductos curtos de Rivinus.",
      "D": "[INCORRETA] Glândulas menores não possuem ductos únicos nomeados como o de Wharton."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3116,
    "materia": "bmf1",
    "aula_id": "bmf1_a15",
    "tema": "bmf1_a15",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Qual alternativa descreve uma glândula unicelular, comum nos epitélios respiratório e intestinal, responsável pela síntese e secreção de muco?",
    "opcoes": [
      "A) Melanócito.",
      "B) Mastócito.",
      "C) Adipócito.",
      "D) Célula Caliciforme."
    ],
    "explicacao_geral": "Nem todas as glândulas são órgãos complexos multicelulares.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Melanócitos secretam melanina via prolongamentos, mas não são glândulas de muco.",
      "B": "[INCORRETA] Mastócitos liberam histamina na inflamação.",
      "C": "[INCORRETA] Adipócitos armazenam lipídios.",
      "D": "[CORRETA] A **célula caliciforme** (Goblet cell) é a única glândula exócrina **unicelular** humana."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3117,
    "materia": "bmf1",
    "aula_id": "bmf1_a15",
    "tema": "bmf1_a15",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "Na microscopia, os ácinos (adenômeros) podem ser classificados por sua cor de acordo com a secreção. Os ácinos que secretam enzimas proteicas e coram-se intensamente com hematoxilina-eosina (escuros) são do tipo:",
    "opcoes": [
      "A) Seroso.",
      "B) Mucoso.",
      "C) Misto.",
      "D) Adiposo glandulado."
    ],
    "explicacao_geral": "Proteínas têm afinidade por corantes diferentes dos carboidratos viscosos do muco.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] Ácinos **serosos** (ex: parótida e pâncreas) são ricos em proteínas e coram-se com facilidade.",
      "B": "[INCORRETA] Ácinos mucosos são ricos em carboidratos (muco) e aparecem claros e vacuolados.",
      "C": "[INCORRETA] Ácinos mistos contêm ambos, frequentemente vistos como uma semilua serosa sobre ácinos mucosos.",
      "D": "[INCORRETA] Terminologia não utilizada em histologia glandular básica."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3118,
    "materia": "bmf1",
    "aula_id": "bmf1_a15",
    "tema": "bmf1_a15",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "A glândula parótida é atravessada por uma estrutura nervosa importante que, se lesionada em cirurgias, causa paralisia da musculatura da mímica facial. Qual é esse nervo?",
    "opcoes": [
      "A) Nervo Trigêmeo (V par).",
      "B) Nervo Facial (VII par).",
      "C) Nervo Glossofaringeo (IX par).",
      "D) Nervo Vago (X par)."
    ],
    "explicacao_geral": "O nervo entra na parótida e ramifica-se em seu interior, embora não a inerve no sentido de secreção.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O trigêmeo faz a sensibilidade da face e mastigação.",
      "B": "[CORRETA] O **nervo facial** emerge do crânio e atravessa o parênquima da parótida.",
      "C": "[INCORRETA] O glossofaringeo é o responsável pelo estímulo secretor da parótida, mas não cruza seu interior como o facial.",
      "D": "[INCORRETA] O vago tem trajeto descendente pelo pescoço, lateralmente à glote."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3119,
    "materia": "bmf1",
    "aula_id": "bmf1_a15",
    "tema": "bmf1_a15",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 2,
    "enunciado": "As glândulas endócrinas se diferenciam das exócrinas na histologia por qual característica marcante?",
    "opcoes": [
      "A) Presença de ductos muito longos e ramificados.",
      "B) Serem obrigatoriamente unicelulares.",
      "C) Disposição celular em cordões ou folículos circundados por capilares fenestrados.",
      "D) Não possuírem núcleo celular."
    ],
    "explicacao_geral": "A ausência de ducto obriga a glândula a lançar seu conteúdo diretamente no sistema circulatório.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Glândulas endócrinas não possuem ductos.",
      "B": "[INCORRETA] A maioria é multicelular e complexa.",
      "C": "[CORRETA] A **rica vascularização** em contato direto com as células glandulares define a arquitetura endócrina.",
      "D": "[INCORRETA] São células epiteliais íntegras com núcleo evidente."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3120,
    "materia": "bmf1",
    "aula_id": "bmf1_a15",
    "tema": "bmf1_a15",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "A glândula mamária em lactação é um exemplo de glândula que utiliza predominantemente o modo de secreção apócrino para a liberação da porção lipídica do leite. O que acontece com a célula nesse modo?",
    "opcoes": [
      "A) Ela permanece totalmente intacta (apenas exocitose).",
      "B) Ela morre e se desintegra totalmente.",
      "C) Ela se divide para gerar duas células novas no local.",
      "D) O ápice celular (porção superior) é destacado junto com a secreção."
    ],
    "explicacao_geral": "O modo apócrino envolve a perda parcial de material citoplasmático.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Esse seria o modo merócrino.",
      "B": "[INCORRETA] Esse seria o modo holócrino.",
      "C": "[INCORRETA] A divisão celular (mitose) não é o mecanismo de secreção.",
      "D": "[CORRETA] Na secreção **apócrina**, uma parte do citoplasma apical é 'perdida' com o produto de secreção."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bmf1_a15 adicionadas.`);
