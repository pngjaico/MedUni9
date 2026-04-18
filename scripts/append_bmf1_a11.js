import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3081,
    "materia": "bmf1",
    "aula_id": "bmf1_a11",
    "tema": "bmf1_a11",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 0,
    "enunciado": "A unidade funcional e contrátil da fibra muscular estriada, compreendida entre duas linhas Z vizinhas, é denominada:",
    "opcoes": [
      "A) Sarcômero.",
      "B) Miofibrila.",
      "C) Sarcolema.",
      "D) Sarcoplasma."
    ],
    "explicacao_geral": "O **sarcômero** é a menor unidade capaz de realizar a contração muscular, organizada de forma repetitiva ao longo da fibra.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **sarcômero** é o segmento delimitado pelas linhas Z.",
      "B": "[INCORRETA] Miofibrila é o feixe de sarcômeros que preenche o citoplasma da célula.",
      "C": "[INCORRETA] Sarcolema é o nome dado à membrana plasmática da fibra muscular.",
      "D": "[INCORRETA] Sarcoplasma é o citoplasma da célula muscular."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3082,
    "materia": "bmf1",
    "aula_id": "bmf1_a11",
    "tema": "bmf1_a11",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "No músculo estriado esquelético, o conjunto formado por um túbulo T central ladeado por duas cisternas terminais do retículo sarcoplasmático é chamado de:",
    "opcoes": [
      "A) Díade.",
      "B) Tríade.",
      "C) Junção comunicante.",
      "D) Placa Motora."
    ],
    "explicacao_geral": "Essa organização permite que o potencial de ação da membrana chegue rapidamente ao local de estoque de cálcio.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Díades (um túbulo T e uma cisterna) são típicas do músculo cardíaco.",
      "B": "[CORRETA] A **tríade** é a estrutura clássica de acoplamento excitação-contração no músculo esquelético.",
      "C": "[INCORRETA] Junções comunicantes permitem troca de íons entre células, não armazenamento de cálcio.",
      "D": "[INCORRETA] Placa motora é o local de contato do neurônio com o músculo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3083,
    "materia": "bmf1",
    "aula_id": "bmf1_a11",
    "tema": "bmf1_a11",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Durante a contração muscular, os filamentos de actina e miosina deslizam entre si. Qual banda do sarcômero NÃO altera seu comprimento durante o encurtamento do músculo?",
    "opcoes": [
      "A) Banda I.",
      "B) Banda H.",
      "C) Sarcômero total.",
      "D) Banda A."
    ],
    "explicacao_geral": "A banda A corresponde ao comprimento total dos filamentos grossos de miosina, que não encurtam, apenas se sobrepõem.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A banda I (apenas actina) diminui de tamanho conforme os filamentos deslizam.",
      "B": "[INCORRETA] A banda H (apenas miosina central) também diminui.",
      "C": "[INCORRETA] O sarcômero como um todo encurta, pois as linhas Z se aproximam.",
      "D": "[CORRETA] A **banda A** mantém seu comprimento constante durante todo o processo de contração."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3084,
    "materia": "bmf1",
    "aula_id": "bmf1_a11",
    "tema": "bmf1_a11",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "A Distrofia de Duchenne é causada pela ausência de distrofina. Histologicamente, qual a função dessa proteína que, quando ausente, causa necrose da fibra muscular por estresse mecânico?",
    "opcoes": [
      "A) Ancorar o citoesqueleto de actina à matriz extracelular via sarcolema.",
      "B) Bloquear os sítios de ligação da miosina na actina.",
      "C) Bombear cálcio de volta ao retículo sarcoplasmático.",
      "D) Unir os discos intercalares entre células cardíacas."
    ],
    "explicacao_geral": "A distrofina atua como um 'amortecedor' que estabiliza a membrana plasmática durante as contrações repetitivas.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **distrofina** conecta o sarcômero à membrana e ao conjuntivo; sem ela, a fibra 'rasga' ao contrair.",
      "B": "[INCORRETA] Esta é a função do complexo troponina-tropomiosina.",
      "C": "[INCORRETA] O bombeamento de cálcio é feito pela bomba SERCA.",
      "D": "[INCORRETA] Discos intercalares são exclusivos do músculo cardíaco."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3085,
    "materia": "bmf1",
    "aula_id": "bmf1_a11",
    "tema": "bmf1_a11",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "No músculo estriado cardíaco, as células são unidas por complexos juncionais especializados que permitem a transmissão rápida do impulso elétrico (sinapses elétricas). Como se chamam essas estruturas?",
    "opcoes": [
      "A) Tríades.",
      "B) Túbulos T.",
      "C) Discos Intercalares.",
      "D) Sarcossomos."
    ],
    "explicacao_geral": "O coração funciona como um sincício funcional devido à conectividade elétrica entre suas células.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Tríades são estruturas internas de acoplamento de cálcio.",
      "B": "[INCORRETA] Túbulos T são invaginações da membrana que levam o potencial de ação para dentro da fibra.",
      "C": "[CORRETA] Os **discos intercalares** contêm junções gap (comunicantes) que propagam o estímulo elétrico.",
      "D": "[INCORRETA] Sarcossomo é o nome das mitocôndrias volumosas na célula muscular."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3086,
    "materia": "bmf1",
    "aula_id": "bmf1_a11",
    "tema": "bmf1_a11",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "Qual proteína do filamento fino é o 'sensor' que, ao se ligar ao cálcio, promove uma mudança conformacional na tropomiosina para expor o sítio de ligação da actina?",
    "opcoes": [
      "A) Tropomiosina.",
      "B) Troponina C.",
      "C) Meromiosina pesada.",
      "D) Titina."
    ],
    "explicacao_geral": "O cálcio é o gatilho, e sua recepção na fibra ocorre em uma subunidade específica do complexo regulador.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A tropomiosina é a 'corda' que bloqueia o sítio, mas ela não se liga ao cálcio.",
      "B": "[CORRETA] A **troponina C** possui alta afinidade por íons cálcio.",
      "C": "[INCORRETA] Miosina faz parte do filamento grosso.",
      "D": "[INCORRETA] Titina é uma proteína elástica que ancora a miosina à linha Z."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3087,
    "materia": "bmf1",
    "aula_id": "bmf1_a11",
    "tema": "bmf1_a11",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 2,
    "enunciado": "Um paciente sofre um infarto e enzimas cardíacas (Troponinas I e T) são solicitadas no hospital. Por que a presença dessas proteínas no sangue confirma lesão no músculo cardíaco?",
    "opcoes": [
      "A) Porque as troponinas são hormônios liberados no estresse.",
      "B) Porque as troponinas são gorduras que entopem as artérias.",
      "C) Porque são proteínas intracelulares que só aparecem no sangue se houver morte celular e ruptura da membrana (sarcolema).",
      "D) Porque servem para diluir os coágulos sanguíneos."
    ],
    "explicacao_geral": "Proteínas estruturais do sarcômero não devem circular no plasma em condições normais.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Troponinas são proteínas contráteis, não hormônios.",
      "B": "[INCORRETA] Troponinas não têm relação com o colesterol.",
      "C": "[CORRETA] A liberação de **troponinemia** é marcador de necrose miocárdica (isquemia).",
      "D": "[INCORRETA] Elas não possuem função fibrinolítica."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3088,
    "materia": "bmf1",
    "aula_id": "bmf1_a11",
    "tema": "bmf1_a11",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "O músculo liso é encontrado na parede das vísceras e vasos. Diferente do esquelético e cardíaco, ele não possui estriações transversais visíveis. Por que isso ocorre?",
    "opcoes": [
      "A) Porque ele não possui actina nem miosina.",
      "B) Porque ele não utiliza cálcio para contração.",
      "C) Porque ele não possui mitocôndrias.",
      "D) Porque os seus miofilamentos não estão organizados em sarcômeros repetitivos paralelos."
    ],
    "explicacao_geral": "O músculo liso contrai por um mecanismo de 'rede' ancorada em corpos densos, o que dá um aspecto liso à microscopia.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Ele possui ambas, mas em arranjo diferente.",
      "B": "[INCORRETA] Ele utiliza cálcio, mas via calmodulina (não troponina).",
      "C": "[INCORRETA] Todas as células musculares são ricas em energia.",
      "D": "[CORRETA] A **ausência de sarcômeros** organizados impede a visualização de estrias."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bmf1_a11 adicionadas.`);
