import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3201,
    "materia": "pmh",
    "aula_id": "pmh_a4",
    "tema": "pmh_a4",
    "modulo": 1,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "O Ciclo de Krebs (Ciclo do Ácido Cítrico) é a via final comum para a oxidação de carboidratos, lipídios e proteínas. Em qual compartimento celular ocorrem as reações deste ciclo?",
    "opcoes": [
      "A) Citosol.",
      "B) Matriz Mitocondrial.",
      "C) Membrana Interna da Mitocôndria.",
      "D) Retículo Endoplasmático Rugoso."
    ],
    "explicacao_geral": "O ciclo de Krebs é uma via puramente mitocondrial que processa o Acetil-CoA.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A glicólise ocorre no citosol.",
      "B": "[CORRETA] Todas as enzimas do ciclo de Krebs (exceto a succinato desidrogenase) estão dissolvidas na **matriz mitocondrial**.",
      "C": "[INCORRETA] A cadeia de transporte de elétrons localiza-se na membrana interna.",
      "D": "[INCORRETA] O RER está envolvido na síntese proteica."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3202,
    "materia": "pmh",
    "aula_id": "pmh_a4",
    "tema": "pmh_a4",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Antes de entrar no Ciclo de Krebs, o piruvato deve ser convertido em Acetil-CoA pelo complexo da Piruvato Desidrogenase (PDH). Qual vitamina é o precursor essencial da coenzima TPP (Pirofosfato de Tiamina), necessária para esta enzima?",
    "opcoes": [
      "A) Vitamina B1 (Tiamina).",
      "B) Vitamina B12 (Cobalamina).",
      "C) Vitamina C (Ácido Ascórbico).",
      "D) Vitamina D."
    ],
    "explicacao_geral": "A deficiência de B1 impede o uso de glicose pelo cérebro e coração por bloquear o complexo PDH.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **Vitamina B1** é fundamental para o complexo PDH e para o alfa-cetoglutarato desidrogenase.",
      "B": "[INCORRETA] A B12 está envolvida no metabolismo de ácidos graxos de cadeia ímpar.",
      "C": "[INCORRETA] Atua como antioxidante e na síntese de colágeno.",
      "D": "[INCORRETA] Atua na homeostase do cálcio."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3203,
    "materia": "pmh",
    "aula_id": "pmh_a4",
    "tema": "pmh_a4",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "O Ciclo de Krebs produz coenzimas reduzidas que levarão elétrons para a cadeia respiratória. Qual o rendimento total de NADH e FADH2 por cada volta completa do ciclo (partindo de 1 Acetil-CoA)?",
    "opcoes": [
      "A) 1 NADH e 1 FADH2.",
      "B) 2 NADH e 2 FADH2.",
      "C) 3 NADH e 1 FADH2.",
      "D) 10 NADH e 2 FADH2."
    ],
    "explicacao_geral": "O ciclo é uma máquina de extração de elétrons de alta energia.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Rendimento subestimado.",
      "B": "[INCORRETA] Número de NADH está incorreto.",
      "C": "[CORRETA] Cada volta produz **3 NADH**, **1 FADH2** e **1 GTP** (ATP).",
      "D": "[INCORRETA] Valores exagerados."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3204,
    "materia": "pmh",
    "aula_id": "pmh_a4",
    "tema": "pmh_a4",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "A Fosforilação Oxidativa é o processo de síntese de ATP a partir da energia liberada pelo fluxo de elétrons. Segundo a Teoria Quimiosmótica de Mitchell, o que aciona diretamente a enzima ATP Sintase (Complexo V) para produzir ATP?",
    "opcoes": [
      "A) A quebra direta do oxigênio molecular.",
      "B) O gradiente de prótons (H+) acumulado no espaço intermembranas.",
      "C) A transferência direta de elétrons para o ADP.",
      "D) O calor gerado pela fricção das membranas."
    ],
    "explicacao_geral": "Os complexos I, III e IV bombeiam prótons, criando uma 'represa' de energia potencial.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] O oxigênio é apenas o aceptor final de elétrons no complexo IV.",
      "B": "[CORRETA] O **luxo de retorno dos prótons** através da ATP Sintase fornece a força mecânica para a síntese.",
      "C": "[INCORRETA] Elétrons não se ligam ao ADP; o processo é mediado por força próton-motriz.",
      "D": "[INCORRETA] O calor é dissipado, não usado como motor para a síntese de ATP."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3205,
    "materia": "pmh",
    "aula_id": "pmh_a4",
    "tema": "pmh_a4",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "O monóxido de carbono (CO) é um gás perigoso que pode causar morte rápida por asfixia celular. Além de se ligar à hemoglobina, ele bloqueia qual componente da cadeia de transporte de elétrons?",
    "opcoes": [
      "A) Complexo I (NADH Desidrogenase).",
      "B) Citocromo C.",
      "C) Complexo II (Succinato Desidrogenase).",
      "D) Complexo IV (Citocromo C Oxidase)."
    ],
    "explicacao_geral": "O bloqueio do complexo IV impede que o oxigênio seja reduzido a água, parando todo o fluxo de elétrons.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Inibido por substâncias como a rotenona.",
      "B": "[INCORRETA] É um carregador móvel, não o alvo principal do CO.",
      "C": "[INCORRETA] Inibido pelo malonato.",
      "D": "[CORRETA] O **CO** e o **Cianeto** competem com o oxigênio pelo sítio do **Complexo IV**."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3206,
    "materia": "pmh",
    "aula_id": "pmh_a4",
    "tema": "pmh_a4",
    "modulo": 1,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "Substâncias desacopladoras, como o 2,4-dinitrofenol (DNP) ou a termogenina (UPC-1), tornam a membrana mitocondrial interna permeável aos prótons. Qual o efeito clínico esperado no paciente após a ingestão de um desacoplador?",
    "opcoes": [
      "A) Hipertermia (febre alta) e perda rápida de peso, mas pouco ou nenhum ATP produzido.",
      "B) Hipotermia severa e ganho de peso excessivo.",
      "C) Aumento da produção de ATP e melhora do desempenho físico.",
      "D) Parada cardíaca imediata por falta de oxigênio pulmonar."
    ],
    "explicacao_geral": "O desacoplamento separa a oxidação (queima de combustível) da fosforilação (síntese de ATP), dissipando a energia como calor.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A energia do gradiente de prótons 'escapa' como calor (**hipertermia**) sem passar pela ATP Sintase.",
      "B": "[INCORRETA] O consumo de combustível aumenta, o que levaria à perda de peso.",
      "C": "[INCORRETA] A síntese de ATP cai drasticamente.",
      "D": "[INCORRETA] A respiração celular continua (e até acelera), logo o oxigênio é consumido; o problema é a ineficiência energética."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3207,
    "materia": "pmh",
    "aula_id": "pmh_a4",
    "tema": "pmh_a4",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Qual enzima do Ciclo de Krebs é a mesma enzima que compõe o Complexo II da cadeia respiratória, servindo como ponto de conexão entre as duas vias?",
    "opcoes": [
      "A) Citrato Sintase.",
      "B) Isocitrato Desidrogenase.",
      "C) Succinato Desidrogenase.",
      "D) Fumarase."
    ],
    "explicacao_geral": "Esta enzima é a única do ciclo ligada à membrana mitocondrial interna.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Localizada livre na matriz.",
      "B": "[INCORRETA] Enzima reguladora do ciclo, mas não participa da cadeia.",
      "C": "[CORRETA] A **Succinato Desidrogenase** transfere elétrons do succinato diretamente para o FAD, formando o Complexo II.",
      "D": "[INCORRETA] Catalisa a hidratação do fumarato a malato."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3208,
    "materia": "pmh",
    "aula_id": "pmh_a4",
    "tema": "pmh_a4",
    "modulo": 1,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "Um paciente alcoólatra crônico apresenta confusão mental e ataxia. O médico diagnostica Síndrome de Wernicke-Korsakoff e inicia reposição rápida de Tiamina (Vitamina B1). Qual enzima do ciclo de Krebs terá sua atividade imediatamente melhorada com este tratamento?",
    "opcoes": [
      "A) Citrato Sintase.",
      "B) Alfa-cetoglutarato Desidrogenase.",
      "C) Malato Desidrogenase.",
      "D) Aconitase."
    ],
    "explicacao_geral": "O complexo alfa-cetoglutarato desidrogenase requer os mesmos cinco cofatores que a PDH, incluindo a tiamina.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Não requer derivados vitamínicos como cofatores de transferência.",
      "B": "[CORRETA] Esta enzima é **dependente de tiamina**, sendo gravemente afetada no alcoolismo crônico.",
      "C": "[INCORRETA] Depende apenas de NAD+.",
      "D": "[INCORRETA] Não depende de tiamina."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula pmh_a4 adicionadas.`);
