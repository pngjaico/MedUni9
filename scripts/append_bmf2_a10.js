import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3673,
    "materia": "bmf2",
    "aula_id": "bmf2_a10",
    "tema": "bmf2_a10",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "A troca de gases entre os alvéolos e o sangue (Hematose) ocorre por qual mecanismo físico?),",
    "opcoes": [
      "A) Transporte Ativo (gasto de ATP).",
      "B) Difusão Passiva a favor do gradiente de pressão parcial.",
      "C) Osmose de gases.",
      "D) Sucção mecânica."
    ],
    "explicacao_geral": "Os gases movem-se da região de maior pressão para a de menor pressão até o equilíbrio.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] A hematose não consome energia celular direta.",
      "B": "[CORRETA] A **Difusão** é o motor das **trocas gasosas** pulmonares.",
      "C": "[INCORRETA] Osmose refere-se ao movimento de solvente (água).",
      "D": "[INCORRETA] Termo não científico para o processo molecular."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3674,
    "materia": "bmf2",
    "aula_id": "bmf2_a10",
    "tema": "bmf2_a10",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 3,
    "enunciado": "A grande maioria do Oxigênio no sangue é transportada de qual forma?),",
    "opcoes": [
      "A) Dissolvido livremente no plasma.",
      "B) Ligado ao Glicogênio.",
      "C) Transformado em Bicarbonato.",
      "D) Ligado à Hemoglobina dentro das hemácias (Oxiemoglobina)."
    ],
    "explicacao_geral": "O O2 tem baixíssima solubilidade no plasma; a hemoglobina aumenta a capacidade de transporte em 70 vezes.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Representa apenas cerca de 1,5% do total.",
      "B": "[INCORRETA] Glicogênio é reserva de glicose.",
      "C": "[INCORRETA] Forma principal de transporte do CO2, não do O2.",
      "D": "[CORRETA] A **Hemoglobina** é a carreadora vital de **Oxigênio**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3675,
    "materia": "bmf2",
    "aula_id": "bmf2_a10",
    "tema": "bmf2_a10",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "O Gás Carbônico (CO2) é transportado no sangue predominantemente sob qual forma?),",
    "opcoes": [
      "A) Íons Bicarbonato (HCO3-) dissolvidos no plasma (após reação catalisada pela anidrase carbônica).",
      "B) Bolhas de gás puro.",
      "C) Ligado permanentemente ao Ferro da hemoglobina.",
      "D) Como glicose."
    ],
    "explicacao_geral": "Cerca de 70% do CO2 segue a via do bicarbonato.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Bicarbonato** é a principal forma de **transporte de CO2** e controle de pH.",
      "B": "[INCORRETA] Causaria embolia gasosa fatal.",
      "C": "[INCORRETA] O CO2 liga-se aos grupos amino da hemoglobina (carbamino-hemoglobina), não ao ferro; e a ligação é reversível.",
      "D": "[INCORRETA] Diferentes moléculas metabólicas."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3676,
    "materia": "bmf2",
    "aula_id": "bmf2_a10",
    "tema": "bmf2_a10",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "O 'Efeito Bohr' descreve a mudança na afinidade da hemoglobina pelo oxigênio. O que ocorre nos tecidos com alta atividade metabólica (ricos em CO2 e H+)?),",
    "opcoes": [
      "A) A hemoglobina segura o O2 com mais força para ele não fugir.",
      "B) A hemoglobina para de funcionar.",
      "C) A afinidade pelo O2 diminui (curva desvia para a direita), facilitando a entrega de oxigênio para as células que precisam.",
      "D) O CO2 transforma-se em oxigênio."
    ],
    "explicacao_geral": "O ambiente ácido e rico em CO2 'empurra' o O2 para fora da hemoglobina.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Isso ocorreria em ambiente básico (Efeito Haldane inverso) ou pulmão.",
      "B": "[INCORRETA] Ela continua circulando e trocando gases.",
      "C": "[CORRETA] O **Efeito Bohr** facilita a **entrega de Oxigênio** nos tecidos periféricos.",
      "D": "[INCORRETA] Impossível transmutação molecular orgânica."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3677,
    "materia": "bmf2",
    "aula_id": "bmf2_a10",
    "tema": "bmf2_a10",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 3,
    "enunciado": "Um paciente é encontrado inconsciente em um ambiente fechado com uma lareira acesa (intoxicação por Monóxido de Carbono - CO). Por que o CO é tão letal?),",
    "opcoes": [
      "A) Porque ele explode as hemácias.",
      "B) Porque ele cheira muito mal e para o nariz.",
      "C) Porque ele causa paralisia do diafragma.",
      "D) Porque ele possui uma afinidade pela hemoglobina 200 vezes maior que o oxigênio, ocupando o local de ligação do O2 de forma estável e impedindo o transporte de oxigênio."
    ],
    "explicacao_geral": "A carboxiemoglobina é ineficaz para o transporte de gases, levando a asfixia tecidual.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Hemácias permanecem intactas (geralmente gerando uma cor cereja na pele do cadáver).",
      "B": "[INCORRETA] O CO é incolor, inodoro e insípido (o vilão silencioso).",
      "C": "[INCORRETA] O dano é no transporte sanguíneo, não mecânico muscular direto.",
      "D": "[CORRETA] O **Monóxido de Carbono** mata por **asfixia química** devido à alta afinidade pela hemoglobina."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3678,
    "materia": "bmf2",
    "aula_id": "bmf2_a10",
    "tema": "bmf2_a10",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "Em grandes altitudes, a pressão atmosférica total cai e, consequentemente, a pressão parcial de Oxigênio (PO2) também cai. Qual a consequência direta para a hematose?),",
    "opcoes": [
      "A) O oxigênio entra mais rápido.",
      "B) A velocidade de difusão diminui porque o gradiente de pressão entre o alvéolo e o sangue é menor, dificultando a oxigenação.",
      "C) O sangue para de circular.",
      "D) Nada ocorre se a pessoa for saudável."
    ],
    "explicacao_geral": "A Lei de Fick diz que o fluxo é proporcional à diferença de pressão.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Entra mais devagar (menos 'força' empurrando).",
      "B": "[CORRETA] A **Baixa PO2 ambiental** reduz a **eficiência da hematose**.",
      "C": "[INCORRETA] Circulação continua, mas hipoxêmica.",
      "D": "[INCORRETA] Mesmo saudáveis sentem 'falta de ar' e fadiga em altitudes elevadas."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3679,
    "materia": "bmf2",
    "aula_id": "bmf2_a10",
    "tema": "bmf2_a10",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "A 'Mioglobina' é uma proteína encontrada nos músculos. Como sua afinidade pelo oxigênio se compara à da hemoglobina?),",
    "opcoes": [
      "A) É menor, para deixar o O2 sair rápido.",
      "B) É muito maior, permitindo que ela 'roube' o oxigênio do sangue e o armazene para uso durante a contração muscular intensa.",
      "C) É idêntica.",
      "D) A mioglobina não se liga ao oxigênio."
    ],
    "explicacao_geral": "A curva da mioglobina é hiperbólica, enquanto a da hemoglobina é sigmoide.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Se fosse menor, o músculo não conseguiria captar o O2 do sangue efetivamente no repouso/estoque.",
      "B": "[CORRETA] A **Mioglobina** é o **reservatório de O2** celular do músculo.",
      "C": "[INCORRETA] Têm afinidades e funções distintas.",
      "D": "[INCORRETA] É sua função primária."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3680,
    "materia": "bmf2",
    "aula_id": "bmf2_a10",
    "tema": "bmf2_a10",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 0,
    "enunciado": "Durante uma pneumonia, o acúmulo de líquido e pus nos alvéolos aumenta a espessura da barreira hemato-aérea. Qual a consequência citada pela Lei de Fick?),",
    "opcoes": [
      "A) Redução da taxa de difusão de gases, levando à hipoxemia (baixo oxigênio no sangue).",
      "B) Aumento da velocidade de troca gasosa.",
      "C) O oxigênio atravessa o líquido mais fácil que o ar.",
      "D) O pus se transforma em oxigênio."
    ],
    "explicacao_geral": "A taxa de difusão é inversamente proporcional à espessura da membrana.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] O **Aumento da Espessura da barreira** prejudica gravemente a **Hematose**.",
      "B": "[INCORRETA] Qualquer barreira extra dificulta o processo.",
      "C": "[INCORRETA] Líquidos dificultam a difusão gasosa em comparação com a interface fina alveolar normal.",
      "D": "[INCORRETA] Absurdo patológico."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bmf2_a10 adicionadas.`);
