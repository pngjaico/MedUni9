import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3745,
    "materia": "ds",
    "aula_id": "ds_a3",
    "tema": "ds_a3",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "Os Resíduos de Serviços de Saúde (RSS) precisam de manejo especial. Qual grupo de resíduos é caracterizado por apresentar risco biológico (contaminados com sangue, secreções ou partes de órgãos)?),",
    "opcoes": [
      "A) Grupo D.",
      "B) Grupo A.",
      "C) Grupo B.",
      "D) Grupo E."
    ],
    "explicacao_geral": "O Grupo A inclui resíduos infectantes que exigem tratamento prévio ao descarte final.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Resíduos comuns (semelhantes aos domésticos).",
      "B": "[CORRETA] O **Grupo A** representa o **Risco Biológico** hospitalar.",
      "C": "[INCORRETA] Resíduos químicos (medicamentos, reagentes).",
      "D": "[INCORRETA] Materiais perfurocortantes (agulhas, bisturis)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3746,
    "materia": "ds",
    "aula_id": "ds_a3",
    "tema": "ds_a3",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "Agulhas e lâminas de bisturi usadas devem ser descartadas em qual tipo de recipiente?),",
    "opcoes": [
      "A) Saco de lixo azul comum.",
      "B) Caixa de papelão de sapato aberta.",
      "C) Embalagem de vidro.",
      "D) Recipientes rígidos, estanques, resistentes à punctura e com tampa (caixa coletora amarelo-laranja do Grupo E)."
    ],
    "explicacao_geral": "O descarte incorreto de perfurocortantes causa milhares de acidentes de trabalho com risco de HIV e Hepatites anualmente.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Risco altíssimo de perfuração para o coletor.",
      "B": "[INCORRETA] Não garante estanqueidade nem resistência.",
      "C": "[INCORRETA] Vidro quebra e pode causar novos cortes.",
      "D": "[CORRETA] O descarte de **Perfurocortantes** deve ser em **caixas rígidas (Descarpack)**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3747,
    "materia": "ds",
    "aula_id": "ds_a3",
    "tema": "ds_a3",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "O 'Grupo B' de resíduos hospitalares refere-se a substâncias químicas. Qual o procedimento correto para o descarte de medicamentos quimioterápicos ou vencidos?),",
    "opcoes": [
      "A) Devem ser segregados e enviados para tratamento específico (incineração ou aterro industrial), nunca descartados no esgoto comum.",
      "B) Jogar no vaso sanitário.",
      "C) Enterrar no jardim do hospital.",
      "D) Doar para pacientes que não têm dinheiro."
    ],
    "explicacao_geral": "Resíduos químicos podem contaminar lençóis freáticos e causar danos ambientais graves.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Grupo B (Químico)** exige **gerenciamento rigoroso**.",
      "B": "[INCORRETA] Contamina rios e águas.",
      "C": "[INCORRETA] Crime ambiental.",
      "D": "[INCORRETA] Medicamentos vencidos ou danificados são resíduos, não terapias seguras."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3748,
    "materia": "ds",
    "aula_id": "ds_a3",
    "tema": "ds_a3",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "A 'Logística Reversa' de medicamentos é um direito do consumidor brasileiro. Como ela funciona na prática para o cidadão?),",
    "opcoes": [
      "A) O cidadão deve pagar para a prefeitura buscar o remédio.",
      "B) Deve-se queimar o remédio em casa.",
      "C) Farmácias e drogarias devem manter pontos de coleta para que o cidadão possa devolver medicamentos vencidos ou em desuso, garantindo o descarte seguro.",
      "D) Não existe esse sistema no Brasil."
    ],
    "explicacao_geral": "A política nacional de resíduos sólidos estabelece essa responsabilidade compartilhada.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O custo é internalizado na cadeia produtiva.",
      "B": "[INCORRETA] Gera poluição atmosférica tóxica caseira.",
      "C": "[CORRETA] A **Logística Reversa** previne o descarte inadequado de **fármacos** domésticos.",
      "D": "[INCORRETA] Regulamentado por decreto federal recente."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3749,
    "materia": "ds",
    "aula_id": "ds_a3",
    "tema": "ds_a3",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "Um hospital quer ser reconhecido como um 'Hospital Verde' (Green Hospital). Qual ação é mais coerente com este objetivo?),",
    "opcoes": [
      "A) Pintar todas as paredes de verde.",
      "B) Implementar um plano de redução de gases anestésicos (que são potentes gases de efeito estufa) e otimizar o uso de materiais de uso único (descartáveis).",
      "C) Atender apenas pessoas que amam a natureza.",
      "D) Parar de usar eletricidade."
    ],
    "explicacao_geral": "O setor saúde é um grande emissor de carbono e gerador de resíduos plásticos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Marketing puramente estético ('greenwashing').",
      "B": "[CORRETA] A **redução de resíduos e emissões** é o núcleo do **hospital sustentável**.",
      "C": "[INCORRETA] Discriminatório e sem relação com gestão ambiental institucional.",
      "D": "[INCORRETA] Inviável farmacêutica e cirurgicamente."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3750,
    "materia": "ds",
    "aula_id": "ds_a3",
    "tema": "ds_a3",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "Durante uma cirurgia, uma gaze cai no chão limpo. Ela de deve ser descartada em qual recipiente, segundo as normas da ANVISA?),",
    "opcoes": [
      "A) Lixo reciclável de papel.",
      "B) No bolso do assistente.",
      "C) Lixo comum do banheiro.",
      "D) Saco de lixo branco leitoso (Grupo A - resíduo infectante), pois foi exposta ao ambiente cirúrgico e pode conter fluídos."
    ],
    "explicacao_geral": "Gaze em ambiente cirúrgico é tratada preventivamente como risco biológico.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Papel/Papelão contaminado perde reciclabilidade.",
      "B": "[INCORRETA] Risco de contaminação cruzada.",
      "C": "[INCORRETA] Gaze cirúrgica exige rigor de infectante.",
      "D": "[CORRETA] O **Gerenciamento de RSS** exige a **segregação correta na fonte**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3751,
    "materia": "ds",
    "aula_id": "ds_a3",
    "tema": "ds_a3",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "O lixo do 'Grupo C' (Radioativos) é gerado em quais setores de um hospital moderno?),",
    "opcoes": [
      "A) Medicina Nuclear e Radioterapia.",
      "B) Cozinha e refeitório.",
      "C) Recepção e administrativo.",
      "D) O grupo C não existe no Brasil."
    ],
    "explicacao_geral": "Resíduos radioativos exigem blindagem e desintegração controlada por tempo (meia-vida).",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Grupo C (Radioativo)** exige protocolos da **CNEN** (Comissão Nacional de Energia Nuclear).",
      "B": "[INCORRETA] Geram lixo comum (D).",
      "C": "[INCORRETA] Geram lixo comum e reciclável (D).",
      "D": "[INCORRETA] É uma categoria fundamental em hospitais oncológicos ou de diagnóstico por imagem avançado."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3752,
    "materia": "ds",
    "aula_id": "ds_a3",
    "tema": "ds_a3",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "A 'Segregação' é o passo mais importante do Plano de Gerenciamento de Resíduos de Serviços de Saúde (PGRSS). Onde ela deve ocorrer?),",
    "opcoes": [
      "A) No caminhão do lixo.",
      "B) No aterro sanitário.",
      "C) No momento e local de sua geração, por quem produziu o resíduo.",
      "D) O lixo deve ser misturado e separado depois por máquinas."
    ],
    "explicacao_geral": "Se misturar lixo comum com infectante, todo o volume se torna infectante (aumento de custo e perigo).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Tarde demais; risco ao pessoal.",
      "B": "[INCORRETA] Impossível.",
      "C": "[CORRETA] A **Segregação na Fonte** é a base da **gestão eficiente de resíduos**.",
      "D": "[INCORRETA] Economicamente inviável e tecnicamente inseguro para riscos biológicos."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula ds_a3 adicionadas.`);
