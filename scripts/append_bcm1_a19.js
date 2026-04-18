import fs from 'fs';
import path from 'path';

const QUESTOES_PATH = 'data/questoes.json';

const novasQuestoes = [
  {
    "id": 3577,
    "materia": "bcm1",
    "aula_id": "bcm1_a19",
    "tema": "bcm1_a19",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 1,
    "enunciado": "A tradução é o processo de leitura do RNAm para a construção de uma proteína. Onde este processo ocorre predominantemente na célula?),",
    "opcoes": [
      "A) No núcleo.",
      "B) No citoplasma (em ribossomos livres ou no RER).",
      "C) No interior dos lisossomos.",
      "D) Na membrana plasmática externa."
    ],
    "explicacao_geral": "Os ribossomos servem como o andaime para o emparelhamento entre códon e anticódon.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] No núcleo ocorre a transcrição e o processamento.",
      "B": "[CORRETA] A **tradução** é um evento **citoplasmático**.",
      "C": "[INCORRETA] Lisossomos destroem proteínas, não as sintetizam.",
      "D": "[INCORRETA] Secreção termina lá, mas a síntese é interna."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3578,
    "materia": "bcm1",
    "aula_id": "bcm1_a19",
    "tema": "bcm1_a19",
    "modulo": 2,
    "dificuldade": 1,
    "correta": 2,
    "enunciado": "O 'Código Genético' é descrito como DEGENERADO (ou redundante). O que isso significa?),",
    "opcoes": [
      "A) Que ele está sumindo ao longo da evolução.",
      "B) Que um mesmo códon pode codificar vários aminoácidos diferentes.",
      "C) Que mais de um códon diferente pode codificar o mesmo aminoácido.",
      "D) Que o código genético é aleatório para cada pessoa."
    ],
    "explicacao_geral": "Isso oferece proteção contra algumas mutações pontuais que não alteram o aminoácido final (mutações silenciosas).",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Significa algo estrutural, não temporal/evolutivo de extinção.",
      "B": "[INCORRETA] O código é unívoco: cada códon tem apenas UM significado de aminoácido/parada.",
      "C": "[CORRETA] A **degenerescência** significa que existem **sinônimos genéticos** (Ex: 6 códons para Leucina).",
      "D": "[INCORRETA] O código é universal (quase igual em todos os seres vivos)."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3579,
    "materia": "bcm1",
    "aula_id": "bcm1_a19",
    "tema": "bcm1_a19",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "O RNA transportador (RNAt) é o 'tradutor' real. Como ele reconhece a posição correta no RNAm?),",
    "opcoes": [
      "A) Por magnetismo.",
      "B) Através da enzima polimerase.",
      "C) Usando uma etiqueta de glicose.",
      "D) Através do seu anticódon (trinca de bases complementares), que se liga temporariamente ao códon do RNAm."
    ],
    "explicacao_geral": "O RNAt traz o aminoácido específico correspondente ao códon que ele reconhece.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Atração eletrostática fraca e emparelhamento de bases.",
      "B": "[INCORRETA] Polimerases atuam na síntese de ácidos nucleicos, não na tradução.",
      "C": "[INCORRETA] Não há participação de carboidratos nesse reconhecimento.",
      "D": "[CORRETA] O emparelhamento **códon-anticódon** garante a fidelidade da **tradução**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3580,
    "materia": "bcm1",
    "aula_id": "bcm1_a19",
    "tema": "bcm1_a19",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 1,
    "enunciado": "Qual molécula fornece a energia para a formação da ligação peptídica durante o alongamento da cadeia de proteínas no ribossomo?),",
    "opcoes": [
      "A) Calor externo.",
      "B) GTP (e a energia contida na ligação aminoácido-RNAt de alta energia).",
      "C) Luz solar.",
      "D) A célula não gasta energia na tradução."
    ],
    "explicacao_geral": "A síntese proteica é um dos processos que mais consome energia na célula viva.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Energia química.",
      "B": "[CORRETA] O **GTP** é o principal nucleotídeo energético usado no **ribossomo**.",
      "C": "[INCORRETA] Fonte primária para plantas, não metabólica direta para ribossomos humanos.",
      "D": "[INCORRETA] Requer até 4 ligações de alta energia por aminoácido adicionado."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3581,
    "materia": "bcm1",
    "aula_id": "bcm1_a19",
    "tema": "bcm1_a19",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 0,
    "enunciado": "Muitos antibióticos (como a Estreptomicina, Tetraciclina e Cloranfenicol) combatem infecções bacterianas interferindo na tradução. Por que esses remédios matam as bactérias mas não as células humanas?),",
    "opcoes": [
      "A) Porque as bactérias possuem ribossomos diferentes (70S) dos ribossomos humanos (80S), permitindo toxicidade seletiva.",
      "B) Porque humanos não possuem tradução.",
      "C) Porque os humanos tomam o remédio devagar.",
      "D) Porque a bactéria não tem núcleo."
    ],
    "explicacao_geral": "Mutações nos ribossomos bacterianos são uma causa comum de resistência a esses antibióticos.",
    "explicacoes_opcoes": {
      "A": "[CORRETA] A **seletividade antibiótica** baseia-se nas diferenças estruturais entre **ribossomos procariotos e eucariotos**.",
      "B": "[INCORRETA] Essencial para todos os seres vivos.",
      "C": "[INCORRETA] Irrelevante para o mecanismo molecular.",
      "D": "[INCORRETA] Verdadeiro, mas não é a razão da seletividade do ribossomo específica para estes fármacos."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3582,
    "materia": "bcm1",
    "aula_id": "bcm1_a19",
    "tema": "bcm1_a19",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 3,
    "enunciado": "O que acontece com o ribossomo quando ele encontra um 'Códon de Parada' (Stop Codon) no RNAm?),",
    "opcoes": [
      "A) Ele volta ao início e começa tudo de novo.",
      "B) Ele explode.",
      "C) Ele acelera e pula o códon.",
      "D) Fatores de liberação ligam-se ao ribossomo, promovendo a hidrólise da cadeia polipeptídica e o desmanche do complexo de tradução."
    ],
    "explicacao_geral": "Os códons de parada (UAA, UAG, UGA) não codificam aminoácidos.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Ciclos terminam e a proteína é liberada.",
      "B": "[INCORRETA] Ribossomos são reciclados.",
      "C": "[INCORRETA] Interrompem obrigatoriamente a tradução normal.",
      "D": "[CORRETA] O **Códon de Parada** encerra a **síntese proteica**."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  },
  {
    "id": 3583,
    "materia": "bcm1",
    "aula_id": "bcm1_a19",
    "tema": "bcm1_a19",
    "modulo": 2,
    "dificuldade": 3,
    "correta": 1,
    "enunciado": "A Toxina Diftérica (causadora da Difteria) mata as células humanas ao catalizar a inativação do fator de alongamento EF-2 no ribossomo. Qual a consequência clínica direta para o paciente nas membranas respiratórias?),",
    "opcoes": [
      "A) Crescimento excessivo de novos tecidos.",
      "B) Morte das células epiteliais (necrose) e formação de pseudomembranas acinzentadas que podem obstruir a respiração devido à parada completa da tradução.",
      "C) Melhora da fala.",
      "D) O paciente vira um portador assintomático sem qualquer dano."
    ],
    "explicacao_geral": "A parada da tradução é fatal para a célula em poucas horas.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Processo destrutivo, não proliferativo benéfico.",
      "B": "[CORRETA] A **Difteria** é uma doença de **bloqueio da tradução** eucariótica.",
      "C": "[INCORRETA] A voz torna-se rouca ou inexistente pelo dano tecidual.",
      "D": "[INCORRETA] É uma patologia grave e letal sem tratamento."
    },
    "essencial": true,
    "caso_clinico": true,
    "categoria": "inedita"
  },
  {
    "id": 3584,
    "materia": "bcm1",
    "aula_id": "bcm1_a19",
    "tema": "bcm1_a19",
    "modulo": 2,
    "dificuldade": 2,
    "correta": 2,
    "enunciado": "Qual a finalidade de um 'Polirribossomo' (vários ribossomos lendo simultaneamente um único RNAm)?),",
    "opcoes": [
      "A) Digerir o RNAm mais rápido.",
      "B) Produzir proteínas de cores diferentes.",
      "C) Aumentar drasticamente a eficiência da síntese proteica, produzindo várias cópias da mesma proteína a partir de uma única mensagem genética em pouco tempo.",
      "D) Armazenar material genético no citoplasma."
    ],
    "explicacao_geral": "É um mecanismo de amplificação da resposta informacional.",
    "explicacoes_opcoes": {
      "A": "[INCORRETA] Aumentam a vida útil informacional daquele RNA via tradução.",
      "B": "[INCORRETA] Idênticas em sequência.",
      "C": "[CORRETA] Os **Polirribossomos** otimizam a **produção em escala** celular.",
      "D": "[INCORRETA] RNAm é temporário e não serve para herança/armazenamento de longo prazo."
    },
    "essencial": true,
    "caso_clinico": false,
    "categoria": "inedita"
  }
];

const data = JSON.parse(fs.readFileSync(QUESTOES_PATH, 'utf-8'));
data.questoes = data.questoes.concat(novasQuestoes);
fs.writeFileSync(QUESTOES_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Sucesso: 8 questões da aula bcm1_a19 adicionadas.`);
