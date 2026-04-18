import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3329,
    "materia": "semiologia1",
    "aula_id": "semio1_a6",
    "tema": "semio1_a6",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 0,
    "enunciado": "Qual das condições abaixo é considerada uma EMERGÊNCIA médica no aparelho locomotor, exigindo diagnóstico e tratamento cirúrgico/antibiótico imediato para evitar a destruição da articulação em poucas horas?),",
    "opcoes": [
      "A) Artrite Séptica (Infecciosa).",
      "B) Osteoartrose (Degenerativa).",
      "C) Fibromialgia.",
      "D) Cisto de Baker roto (sem infecção)."
    ],
    "explicacao_geral": "A infecção bacteriana dentro do espaço sinovial é altamente destrutiva e pode levar à sepse.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Artrite Séptica** exige lavagem articular e antibióticos urgentes.",
      "B": "[INCORRETA] Doença crônica progressiva, não é emergência.",
      "C": "[INCORRETA] Síndrome de dor crônica sem dano estrutural articular agudo.",
      "D": "[INCORRETA] Causa dor aguda, mas o tratamento é geralmente conservador."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3330,
    "materia": "semiologia1",
    "aula_id": "semio1_a6",
    "tema": "semio1_a6",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "Um paciente de 45 anos apresenta dores nas articulações das mãos há 3 meses. Ao exame, nota-se edema e calor nas articulações metacarpofalangeanas e interfalangeanas proximais de forma SIMÉTRICA (em ambas as mãos). Qual a síndrome provável?),",
    "opcoes": [
      "A) Osteoartrose nodal.",
      "B) Artrite Reumatoide.",
      "C) Gota poliartecular.",
      "D) Tenossinovite de De Quervain."
    ],
    "explicacao_geral": "O padrão de acometimento simétrico de pequenas articulações é a marca da artrite reumatoide.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Tipicamente afeta as interfalangeanas distais (nódulos de Heberden) e costuma ser menos inflamatória/simétrica.",
      "B": "[CORRETA] A **simetria** e o tempo de evolução sugerem **Artrite Reumatoide**.",
      "C": "[INCORRETA] A gota tende a ser assimétrica e episódica (crises).",
      "D": "[INCORRETA] Inflamação localizada no rádio distal (tendões do polegar)."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3331,
    "materia": "semiologia1",
    "aula_id": "semio1_a6",
    "tema": "semio1_a6",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "A Síndrome do Túnel do Carpo é causada pela compressão de qual nervo no nível do punho?),",
    "opcoes": [
      "A) Nervo Ulnar.",
      "B) Nervo Radial.",
      "C) Nervo Axilar.",
      "D) Nervo Mediano."
    ],
    "explicacao_geral": "O nervo mediano passa por um túnel osteofibroso estreito junto com os tendões flexores.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O ulnar passa pelo Canal de Guyon.",
      "B": "[INCORRETA] O radial inerva o dorso da mão e extensores.",
      "C": "[INCORRETA] Inerva o ombro (musculo deltóide).",
      "D": "[CORRETA] A compressão do **nervo mediano** gera parestesia nos primeiros 3 dedos e meio."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3332,
    "materia": "semiologia1",
    "aula_id": "semio1_a6",
    "tema": "semio1_a6",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "Um homem de 50 anos acorda com dor insuportável no primeiro dedo do pé esquerdo (hálux). A articulação está muito vermelha, inchada e quente. Ele refere ter exagerado no churrasco e frutos do mar na noite anterior. Qual a suspeita diagnóstica e o achado laboratorial esperado?),",
    "opcoes": [
      "A) Gota; Hiperuricemia (Ácido úrico elevado),",
      "B) Febre Reumática; ASLO positiva.",
      "C) Artrite Séptica; Leucocitose sistêmica apenas.",
      "D) Fascite plantar; Alteração no raio-x calcâneo."
    ],
    "explicacao_geral": "A podagra (gota no hálux) é precipitada por dieta rica em purinas.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O quadro é clássico de uma **crise aguda de Gota**.",
      "B": "[INCORRETA] Febre reumática afeta crianças/jovens e grandes articulações de forma migratória.",
      "C": "[INCORRETA] Embora seja um diferencial, a história alimentar e a topografia (hálux) favorecem fortemente a gota.",
      "D": "[INCORRETA] Causa dor no calcanhar ao pisar, sem sinais flogísticos tão intensos no dedo."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3333,
    "materia": "semiologia1",
    "aula_id": "semio1_a6",
    "tema": "semio1_a6",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Qual a principal característica clínica que diferencia a Fibromialgia de uma Artrite Inflamatória sistêmica?),",
    "opcoes": [
      "A) A fibromialgia causa deformidades ósseas graves.",
      "B) A fibromialgia apresenta exames laboratoriais (VHS/PCR) muito elevados.",
      "C) A fibromialgia apresenta dor generalizada e 'tender points' sem edema ou calor articular.",
      "D) A fibromialgia melhora apenas com antibióticos."
    ],
    "explicacao_geral": "A fibromialgia é uma síndrome de amplificação da dor, sem inflamação tecidual periférica demonstrável.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Não causa dano estrutural ou deformidade.",
      "B": "[INCORRETA] Exames de prova inflamatória costumam ser normais na fibromialgia.",
      "C": "[CORRETA] A **ausência de sinais flogísticos** (inchaço/calor) diferencia a dor difusa da artrite real.",
      "D": "[INCORRETA] Antibióticos não têm indicação."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3334,
    "materia": "semiologia1",
    "aula_id": "semio1_a6",
    "tema": "semio1_a6",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "Um paciente idoso apresenta dor lombar crônica que piora ao ficar em pé e melhora ao sentar ou inclinar-se para frente. O médico suspeita de Estenose do Canal Vertebral. Qual sinal semiológico clinico ajuda a confirmar essa suspeita?),",
    "opcoes": [
      "A) Sinal de Lasègue positivo a 30 graus.",
      "B) Claudicação Neurogênica.",
      "C) Artrite de grandes articulações.",
      "D) Perda total de força nos braços."
    ],
    "explicacao_geral": "O canal estreito comprime as raízes conforme o paciente estende a coluna para caminhar.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Lasègue sugere compressão radicular aguda (Ex: hérnia), não necessariamente estenose de canal.",
      "B": "[CORRETA] A **claudicação neurogênica** (dor ao caminhar que obriga a parar/sentar) é o sinal típico.",
      "C": "[INCORRETA] Patologia de coluna, não necessariamente articular periférica.",
      "D": "[INCORRETA] Sintoma de compressão cervical ou medular alta, não lombar."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3335,
    "materia": "semiologia1",
    "aula_id": "semio1_a6",
    "tema": "semio1_a6",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "A 'Artrite Microcristalina' engloba a Gota e a Pseudogota (Condrocalcinose). Qual a diferença no cristal envolvido na Pseudogota?),",
    "opcoes": [
      "A) Cristal de Pirofosfato de Cálcio.",
      "B) Cristal de Monourato de Sódio.",
      "C) Cristal de Colesterol.",
      "D) Cristal de Oxalato de Cálcio."
    ],
    "explicacao_geral": "A pseudogota mimetiza a gota clinamente, mas ocorre mais em idosos e em joelhos/punhos.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Pseudogota** é causada pelo depósito de **Pirofosfato de Cálcio**.",
      "B": "[INCORRETA] Este é o cristal da Gota clássica.",
      "C": "[INCORRETA] Não causa artrite aguda microcristalina clássica.",
      "D": "[INCORRETA] Comumente associado a cálculos renais."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3336,
    "materia": "semiologia1",
    "aula_id": "semio1_a6",
    "tema": "semio1_a6",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Qual 'Red Flag' semiológica em um paciente com dor articular sugeriria um processo NEOPLÁSICO (Câncer) ósseo?),",
    "opcoes": [
      "A) Dor que ocorre apenas ao meio-dia.",
      "B) Dor que melhora com fisioterapia em uma semana.",
      "C) Fraqueza apenas em um dedo.",
      "D) Dor óssea persistente, que piora à noite e não cede com repouso, associada a perda de peso."
    ],
    "explicacao_geral": "A dor neoplásica é progressiva e incoercível pelo repouso físico.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Horário sem correlação fisiopatológica.",
      "B": "[INCORRETA] Câncer não melhora rapidamente com medidas locais simples.",
      "C": "[INCORRETA] Sugere lesão nervosa focal ou tendínea.",
      "D": "[CORRETA] **Dor noturna** e **perda ponderal** são sinais de alerta para malignidade."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula semio1_a6 adicionadas.`);
