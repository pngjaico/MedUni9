import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3729,
    "materia": "ds",
    "aula_id": "ds_a1",
    "tema": "ds_a1",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "O conceito de 'Desenvolvimento Sustentável' foi popularizado pelo Relatório Brundtland. Como ele é definido?),",
    "opcoes": [
      "A) Desenvolvimento que visa apenas o lucro imediato das empresas.",
      "B) Desenvolvimento que satisfaz as necessidades do presente sem comprometer a capacidade das gerações futuras de satisfazerem as suas próprias necessidades.",
      "C) Desenvolvimento que impede qualquer construção de novas cidades.",
      "D) O uso total de recursos naturais até que eles acabem."
    ],
    "explicacao_geral": "A sustentabilidade equilibra os pilares social, econômico e ambiental.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Visão puramente comercial e insustentável.",
      "B": "[CORRETA] Esta é a **definição clássica** de **Sustentabilidade**.",
      "C": "[INCORRETA] Desenvolvimento é permitido, desde que planejado e responsável.",
      "D": "[INCORRETA] Visão extrativista predatória."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3730,
    "materia": "ds",
    "aula_id": "ds_a1",
    "tema": "ds_a1",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "A Agenda 2030 da ONU estabelece 17 Objetivos de Desenvolvimento Sustentável (ODS). Qual ODS é focado especificamente em 'Saúde e Bem-Estar'?),",
    "opcoes": [
      "A) ODS 1.",
      "B) ODS 5.",
      "C) ODS 10.",
      "D) ODS 3."
    ],
    "explicacao_geral": "O ODS 3 visa assegurar uma vida saudável e promover o bem-estar para todos, em todas as idades.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Erradicação da pobreza.",
      "B": "[INCORRETA] Igualdade de gênero.",
      "C": "[INCORRETA] Redução das desigualdades.",
      "D": "[CORRETA] O **ODS 3** é a meta central para a **Saúde Global**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3731,
    "materia": "ds",
    "aula_id": "ds_a1",
    "tema": "ds_a1",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "O 'Tripé da Sustentabilidade' (Triple Bottom Line) afirma que para ser sustentável, uma ação deve ser ecologicamente correta, socialmente justa e:),",
    "opcoes": [
      "A) Economicamente viável.",
      "B) Divulgada na televisão.",
      "C) Aprovada por todos os países.",
      "D) Extremamente cara."
    ],
    "explicacao_geral": "Sem viabilidade econômica, os projetos sociais e ambientais não se sustentam no longo prazo.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Pilar Econômico** completa o **Tripé da Sustentabilidade**.",
      "B": "[INCORRETA] Marketing não garante sustentabilidade.",
      "C": "[INCORRETA] Consenso global é ideal, mas não define os pilares técnicos.",
      "D": "[INCORRETA] Sustentabilidade pode reduzir custos via eficiência."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3732,
    "materia": "ds",
    "aula_id": "ds_a1",
    "tema": "ds_a1",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Qual a relação entre o ODS 6 (Água Potável e Saneamento) e a saúde pública?),",
    "opcoes": [
      "A) Nenhuma, pois a água serve apenas para as plantas.",
      "B) A água só é importante se houver excesso.",
      "C) O acesso ao saneamento básico reduz drasticamente as doenças de veiculação hídrica (como diarreias e cólera), diminuindo a mortalidade infantil.",
      "D) Saneamento é um luxo opcional."
    ],
    "explicacao_geral": "O saneamento é uma das intervenções de saúde pública mais custo-efetivas.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Água é o nutriente essencial humano.",
      "B": "[INCORRETA] Escassez ou má qualidade são crises humanitárias.",
      "C": "[CORRETA] O **ODS 6** é base para a prevenção de **doenças infectocontagiosas**.",
      "D": "[INCORRETA] É um direito humano fundamental."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3733,
    "materia": "ds",
    "aula_id": "ds_a1",
    "tema": "ds_a1",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "A 'Obsolescência Programada' é um dos grandes desafios da sustentabilidade. O que ela representa?),",
    "opcoes": [
      "A) O avanço tecnológico natural.",
      "B) A prática de fabricar produtos com vida útil curta ou que se tornam inúteis rapidamente para forçar o consumo de novos itens, gerando excesso de resíduos.",
      "C) A reciclagem obrigatória de produtos velhos.",
      "D) O conserto gratuito de eletrodomésticos."
    ],
    "explicacao_geral": "Este fenômeno impulsiona a economia linear (extrair, produzir, descartar), contrária à economia circular.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Avanço é melhorar; obsolescência programada é limitar propositalmente.",
      "B": "[CORRETA] A **Obsolescência Programada** estimula o **descarte excessivo** e o consumo insustentável.",
      "C": "[INCORRETA] Seria uma solução, não o problema citado.",
      "D": "[INCORRETA] Desestimularia a recompra acelerada."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3734,
    "materia": "ds",
    "aula_id": "ds_a1",
    "tema": "ds_a1",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "O conceito de 'Pegada Ecológica' é usado para medir:),",
    "opcoes": [
      "A) O tamanho médio do pé das populações.",
      "B) Quanto lixo uma empresa recicla.",
      "C) A quantidade de árvores plantadas por ano.",
      "D) A quantidade de recursos naturais (água, solo, energia) necessários para sustentar o estilo de vida de uma pessoa ou sociedade."
    ],
    "explicacao_geral": "Atualmente, a pegada ecológica da humanidade excede em muito a biocapacidade da Terra.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Brincadeira sem sentido biológico/sustentável.",
      "B": "[INCORRETA] Indicador de gestão de resíduos, não pegada global.",
      "C": "[INCORRETA] Parte da compensação, mas não a definição do impacto do consumo.",
      "D": "[CORRETA] A **Pegada Ecológica** quantifica a nossa **demanda por recursos naturais**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3735,
    "materia": "ds",
    "aula_id": "ds_a1",
    "tema": "ds_a1",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "A 'Economia Circular' propõe um modelo diferente do tradicional 'extrair-produzir-descartar'. Qual a sua lógica central?),",
    "opcoes": [
      "A) Redesenhar produtos para que os materiais voltem ao ciclo produtivo infinitamente por meio de reúso, reforma e reciclagem.",
      "B) Produzir apenas produtos redondos.",
      "C) Imprimir dinheiro em circulos.",
      "D) Proibir as pessoas de comprarem coisas novas."
    ],
    "explicacao_geral": "A natureza funciona em ciclos; a economia circular visa imitar esse fluxo (biomimética).",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Economia Circular** foca na **eliminação do conceito de lixo**.",
      "B": "[INCORRETA] Forma do objeto é irrelevante para o conceito econômico.",
      "C": "[INCORRETA] Sem relação.",
      "D": "[INCORRETA] Visa o consumo consciente e ciclos de vida longos, não a proibição de mercado."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3736,
    "materia": "ds",
    "aula_id": "ds_a1",
    "tema": "ds_a1",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Um hospital decide instalar painéis solares e trocar lâmpadas por LED. Em quais pilares da sustentabilidade essa ação impacta?),",
    "opcoes": [
      "A) Apenas no ambiental.",
      "B) Apenas no social.",
      "C) Ambiental (redução de emissões) e Econômico (redução de custos com energia).",
      "D) Não tem impacto significativo."
    ],
    "explicacao_geral": "Ações de ecoeficiência costumam ser lucrativas a médio/longo prazo.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Ignora o benefício financeiro direto.",
      "B": "[INCORRETA] Embora econômico/ambiental possam ter reflexos sociais (exemplo: menos poluição local), a resposta C é a mais técnica direta.",
      "C": "[CORRETA] A **Ecoeficiência** une os pilares **Ambiental e Econômico**.",
      "D": "[INCORRETA] Impacta positivamente a pegada de carbono da instituição."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula ds_a1 adicionadas.`);
