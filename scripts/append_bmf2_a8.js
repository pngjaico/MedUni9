import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3657,
    "materia": "bmf2",
    "aula_id": "bmf2_a8",
    "tema": "bmf2_a8",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "A maior parte das vias aéreas de condução é revestida pelo 'Epitélio Respiratório'. Qual a sua classificação histológica correta?),",
    "opcoes": [
      "A) Epitélio estratificado pavimentoso.",
      "B) Epitélio pseudoestratificado colunar ciliado com células caliciformes.",
      "C) Epitélio simples cúbico.",
      "D) Epitélio de transição."
    ],
    "explicacao_geral": "Este epitélio é especializado na limpeza, aquecimento e umidificação do ar inspirado.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Encontrado na pele e na orofaringe (resistência mecânica).",
      "B": "[CORRETA] O **Epitélio Respiratório** é marcado pelos **cílios e produção de muco**.",
      "C": "[INCORRETA] Encontrado em ductos renais.",
      "D": "[INCORRETA] Encontrado na bexiga."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3658,
    "materia": "bmf2",
    "aula_id": "bmf2_a8",
    "tema": "bmf2_a8",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "Qual a principal função das 'Células Caliciformes' presentes no epitélio respiratório?),",
    "opcoes": [
      "A) Bater os cílios.",
      "B) Realizar trocas gasosas.",
      "C) Destruir vírus com veneno.",
      "D) Produzir e secretar muco para capturar partículas de poeira e microrganismos."
    ],
    "explicacao_geral": "O muco atua como um 'papel pega-moscas' químico nas vias aéreas.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Função das células colunares ciliadas.",
      "B": "[INCORRETA] Função dos pneumócitos no alvéolo.",
      "C": "[INCORRETA] Macrófagos e anticorpos fazem a defesa, não o muco solitário com veneno.",
      "D": "[CORRETA] As **Células Caliciformes** garantem a **lubrificação e proteção** dérmica-mucosa."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3659,
    "materia": "bmf2",
    "aula_id": "bmf2_a8",
    "tema": "bmf2_a8",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "A Traqueia possui anéis incompletos de cartilagem. Qual é o tipo de cartilagem e qual estrutura fecha o anel na sua parte posterior?),",
    "opcoes": [
      "A) Cartilagem Hialina (anéis em C) e Músculo Traqueal (liso).",
      "B) Cartilagem Elástica e Tecido Ósseo.",
      "C) Gordura e Pele.",
      "D) Cartilagem Fibrosa e Epitélio estratificado."
    ],
    "explicacao_geral": "A ausência de cartilagem posterior permite a expansão do esôfago durante a deglutição.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] Os **Anéis de Hialina** impedem o colapso traqueal durante a respiração.",
      "B": "[INCORRETA] Erro de tecido.",
      "C": "[INCORRETA] Não garantem sustentação mecânica.",
      "D": "[INCORRETA] Tecido de discos intervertebrais, não de traqueia."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3660,
    "materia": "bmf2",
    "aula_id": "bmf2_a8",
    "tema": "bmf2_a8",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "À medida que a árvore brônquica se ramifica em direção aos bronquíolos, quais mudanças histológicas ocorrem na parede desses vasos?),",
    "opcoes": [
      "A) A cartilagem aumenta e o músculo liso diminui.",
      "B) O epitélio torna-se mais alto (estratificado).",
      "C) A cartilagem desaparece gradualmente e a proporção de músculo liso aumenta significativamente.",
      "D) Os bronquíolos tornam-se ósseos."
    ],
    "explicacao_geral": "A predominância de músculo liso permite aos bronquíolos controlar a resistência ao fluxo aéreo.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] É o inverso.",
      "B": "[INCORRETA] O epitélio torna-se mais baixo (cúbico simples em bronquíolos menores).",
      "C": "[CORRETA] Os **Bronquíolos** não possuem cartilagem, sendo sítios de **controle muscular** (broncodilatação/constrição).",
      "D": "[INCORRETA] Impossível."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3661,
    "materia": "bmf2",
    "aula_id": "bmf2_a8",
    "tema": "bmf2_a8",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Os alvéolos são revestidos por dois tipos principais de células. Qual a função vital do 'Pneumócito Tipo II'?),",
    "opcoes": [
      "A) Formar a barreira física fina para troca de oxigênio.",
      "B) Produzir e secretar o Surfactante Pulmonar, que reduz a tensão superficial e impede o colapso dos alvéolos (atelectasia).",
      "C) Fagocitar bactérias aspiradas.",
      "D) Contratar-se para expulsar o ar."
    ],
    "explicacao_geral": "A falta de surfactante é a causa da Síndrome do Desconforto Respiratório em recém-nascidos prematuros.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Função do Pneumócito tipo I.",
      "B": "[CORRETA] O **Pneumócito Tipo II** previne o **colapso alveolar**.",
      "C": "[INCORRETA] Função dos Macrófagos Alveolares.",
      "D": "[INCORRETA] Alvéolos não possuem músculo liso próprio para contração ativa vigorosa em sua parede (possuem fibras elásticas para retração passiva)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3662,
    "materia": "bmf2",
    "aula_id": "bmf2_a8",
    "tema": "bmf2_a8",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 3,
    "enunciado": "Um paciente tabagista crônico desenvolve 'Metaplasia Escamosa' no epitélio respiratório. O que esse fenômeno representa na histologia respiratória e qual a consequência?),",
    "opcoes": [
      "A) O epitélio fica mais forte e limpa melhor o pulmão.",
      "B) O epitélio transforma-se em gordura saudável.",
      "C) O pulmão torna-se capaz de respirar debaixo d'água.",
      "D) Substituição do epitélio respiratório frágil por epitélio estratificado pavimentoso (mais resistente), mas com perda de cílios e glândulas, prejudicando a limpeza pulmonar e predispondo ao câncer."
    ],
    "explicacao_geral": "Metaplasia é uma adaptação celular reversível a um estresse crônico.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Resistente ao dano físico, mas ineficaz na função de limpeza.",
      "B": "[INCORRETA] Erro de conceito histológico.",
      "C": "[INCORRETA] Inexistente.",
      "D": "[CORRETA] A **Metaplasia Escamosa** é uma resposta patológica ao **tabagismo**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3663,
    "materia": "bmf2",
    "aula_id": "bmf2_a8",
    "tema": "bmf2_a8",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Um indivíduo que trabalha em minas de carvão sem proteção desenvolve 'Antracose'. No exame histológico do pulmão, onde os pigmentos de carvão são tipicamente encontrados?),",
    "opcoes": [
      "A) No interior de Macrófagos Alveolares (Células da poeira) e no tecido conjuntivo intersticial.",
      "B) Dentro das hemácias.",
      "C) Flutuando livres no sangue arterial.",
      "D) O carvão desaparece sozinho."
    ],
    "explicacao_geral": "Os macrófagos tentam digerir o pigmento, mas não conseguem, permanecendo no pulmão por décadas.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] Os **Macrófagos Alveolares** acumulam o pigmento, gerando manchas escuras no pulmão.",
      "B": "[INCORRETA] Hemácias não fagocitam partículas.",
      "C": "[INCORRETA] O depósito é tecidual/alveolar.",
      "D": "[INCORRETA] O pigmento é inorgânico e persistente."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3664,
    "materia": "bmf2",
    "aula_id": "bmf2_a8",
    "tema": "bmf2_a8",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "A 'Barreira Hemato-Aérea' é a estrutura que o oxigênio deve atravessar para chegar ao sangue. Quais são os seus três componentes principais na sua porção mais fina?),",
    "opcoes": [
      "A) Cartilagem, Músculo e Gordura.",
      "B) Pele, Mucosa e Linfa.",
      "C) Citoplasma do Pneumócito Tipo I, Lâmina Basal fundida e Citoplasma da Célula Endotelial do capilar.",
      "D) Muco, Cílios e Ar."
    ],
    "explicacao_geral": "A espessura média é de apenas 0,5 micrômetros, permitindo a difusão passiva ultrarrápida.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Bloqueariam a difusão gasosa.",
      "B": "[INCORRETA] Componentes sistêmicos/externos.",
      "C": "[CORRETA] A **Barreira Hemato-Aérea** minimiza a distância para a **troca gasosa**.",
      "D": "[INCORRETA] Estão na superfície epitelial das vias de condução, não na área de troca alveolar fina."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bmf2_a8 adicionadas.`);
