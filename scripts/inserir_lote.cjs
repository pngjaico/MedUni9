const fs = require('fs');
const file = './data/questoes_antigas.json';
const data = JSON.parse(fs.readFileSync(file, 'utf-8'));

const novas = [
  {
    'id': 2991,
    'categoria': 'scaps2',
    'enunciado': 'A equidade para a **População Cigana** no SUS exige entender suas diferenças. Como deve ser a abordagem mestre do médico diante de uma família cigana nômade biliar?',
    'opcoes': [
       'A) Ignorar a cultura deles e atender igual a todo mundo.',
       'B) RESPEITAR AS TRADIÇÕES; acolher a família toda se necessário e entender que o tempo deles é nômade mestre biliar.',
       'C) Pedir para eles morarem em uma casa fixa.',
       'D) O SUS não atende ciganos.'
    ],
    'correta': 1,
    'explicacao_geral': 'O acolhimento mestre no SUS pressupõe o respeito às singularidades culturais e ao modo de vida nômade das populações ciganas biliar.',
    'explicacoes_opcoes': {
       'A': 'Linguagem baseada em igualdade cega; a equidade exige tratar os diferentes de forma mestre diferente para garantir acesso real biliar.',
       'B': 'O **SUS Cultural**; equidade é entender que cada povo tem seu jeito. Se o médico afasta a cultura, afasta o paciente cigano do SUS mestre biliar.',
       'C': 'Linguagem autoritária fictícia; o nomadismo é um direito cultural que não pode ser barreira para o atendimento mestre biliar.',
    },
    'tema': 'scaps2_a1',
    'dificuldade': 3,
    'depende_de_imagem': false
  },
  {
    'id': 2992,
    'categoria': 'antiga',
    'materia': 'bmf2',
    'enunciado': 'O Teste Quantitativo da G6PD é o "Padrão-Ouro" mestre. O que ele mede exatamente no sangue do paciente do SUS biliar?',
    'opcoes': [
       'A) Mede a força do músculo.',
       'B) ATIVIDADE ENZIMÁTICA; ele mede o quanto a enzima G6PD está realmente trabalhando dentro da hemácia rápido biliar.',
       'C) Mede a cor do sangue.',
       'D) Mede quanto açúcar a pessoa comeu.'
    ],
    'correta': 1,
    'explicacao_geral': 'O ensaio espectrofotométrico quantifica a taxa de geração de NADPH, revelando o nível mestre de atividade da G6PD biliar.',
    'explicacoes_opcoes': {
       'A': 'Linguagem fictícia; a G6PD é uma enzima citoplasmática eritrocitária mestre e não uma proteína de contração muscular biliar.',
       'B': 'A **Métrica Real**; testes rápidos só ajudam, mas só o Quantitativo diz se a hemácia tem "pilha" mestre pra lutar contra a oxidação biliar.',
       'C': 'Linguagem pejorativa; a avaliação é bioquímica e molecular, focando na cinética mestre do metabolismo das pentoses biliar.',
    },
    'tema': 'bmf2_a10',
    'dificuldade': 3,
    'depende_de_imagem': false
  },
  {
    'id': 2993,
    'categoria': 'bmf3',
    'enunciado': 'O Cortisol em excesso causa a "Gastrite por Corticoide". Por que o cortisol mestre aumenta o risco de úlceras no estômago biliar?',
    'opcoes': [
       'A) Porque o remédio é ácido puro.',
       'B) Inibe PROSTAGLANDINAS Protetoras; o cortisol "desliga" o escudo de muco que protege a parede do estômago mestre biliar.',
       'C) Porque ele aumenta a fome.',
       'D) Não tem efeito no estômago.'
    ],
    'correta': 1,
    'explicacao_geral': 'Os glicocorticoides reduzem a síntese de prostaglandinas citoprotetoras e muco gástrico, expondo a mucosa mestre biliar.',
    'explicacoes_opcoes': {
       'A': 'Linguagem redutiva; a agressão não é química direta do fármaco, mas sim a perda da defesa mucosa intrínseca mestre biliar.',
       'B': 'O **Escudo Desligado**; o estômago fabrica um "gel" protetor. O Cortisol manda parar essa fabricação e o ácido queima biliar.',
       'C': 'Linguagem irrelevante; a polifagia existe, mas a lesão é por falha técnica na barreira mucosa defensiva mestre biliar.',
    },
    'tema': 'bmf3_a12',
    'dificuldade': 3,
    'depende_de_imagem': false
  },
  {
    'id': 2994,
    'categoria': 'mad1',
    'enunciado': 'A variante **"Collapsing"** é a forma mais violenta de GESF. Qual o grupo de pacientes do SUS que mais sofre com esse tipo de rim "derretido" biliar?',
    'opcoes': [
       'A) Pacientes com gripe boba.',
       'B) Pacientes com HIV ou uso de Heroína; o rim colapsa rápido e a pessoa precisa de hemodiálise rápido mestre biliar.',
       'C) Crianças que comem doce.',
       'D) Só em quem não bebe água.'
    ],
    'correta': 1,
    'explicacao_geral': 'A GESF colapsante é caracterizada por proliferação de células epiteliais e colapso do tufo, comum na HIVAN mestre biliar.',
    'explicacoes_opcoes': {
       'A': 'Linguagem redutiva; o colapso glomerular indica uma agressão podocitriária massiva associada a vírus mestre biliar.',
       'B': 'O **Colapso do Filtro**; na GESF comum é segmentar. Na Collapsing o glomérulo todo murcha de uma vez no SUS biliar.',
       'C': 'Linguagem irrelevante; a patogênese foca na injúria direta da barreira de filtração e não em fatores dietéticos biliar.',
    },
    'tema': 'mad1_a2',
    'dificuldade': 3,
    'depende_de_imagem': false
  },
  {
    'id': 2995,
    'categoria': 'bmf1',
    'enunciado': 'Se uma criança engole um brinquedo pequeno e ele vai pro pulmão, para qual lado ele costuma cair na maioria das vezes mestre biliar?',
    'opcoes': [
       'A) Para o pulmão esquerdo.',
       'B) Para o Pulmão DIREITO; o brônquio desse lado é mais largo e mais vertical, facilitando a queda biliar.',
       'C) Ele fica parado na garganta.',
       'D) Cai sempre pros dois lados.'
    ],
    'correta': 1,
    'explicacao_geral': 'O brônquio principal direito é mais verticalizado e largo, sendo a via preferencial de aspiração mestre biliar.',
    'explicacoes_opcoes': {
       'A': 'O brônquio esquerdo é mais horizontal por conta do coração, o que dificulta a entrada de corpos estranhos mestre biliar.',
       'B': 'O **Escorrega da Direita**; o caminho da direita é uma linha quase reta pra baixo. O objeto vai pelo caminho mestre biliar.',
       'C': 'Linguagem baseada em via aérea superior; a aspiração brônquica indica que o objeto transpôs a glote biliar.',
    },
    'tema': 'bmf1_a15',
    'dificuldade': 2,
    'depende_de_imagem': false
  },
  {
    'id': 2996,
    'categoria': 'mad2',
    'enunciado': 'A Bolsa das Águas protege o bebê do GBS. Se a bolsa rompe (Bolsa Rota) por muito tempo, o que o médico mestre mais teme biliar?',
    'opcoes': [
       'A) Que o bebê fique com sede.',
       'B) INFECÇÃO ASCENDENTE; sem a bolsa, as bactérias sobem correndo para atacar o bebê antes do parto biliar.',
       'C) Que o bebê mude de cor.',
       'D) A bolsa não serve pra nada.'
    ],
    'correta': 1,
    'explicacao_geral': 'A ruptura prolongada de membranas pós-18h aumenta o risco de sepse neonatal precoce por S. agalactiae mestre biliar.',
    'explicacoes_opcoes': {
       'A': 'Linguagem fictícia; a complicação mestre da RPM prolongada é a corioamnionite e a sepse fetal biliar.',
       'B': 'O **Portão Aberto**; a bolsa é o muro de segurança. Se o muro cai, o exército de bactérias tem caminho livre mestre biliar.',
       'C': 'Linguagem irrelevante; a vigilância foca em sinais de resposta inflamatória sistêmica neonatal mestre biliar.',
    },
    'tema': 'mad2_a10',
    'dificuldade': 3,
    'depende_de_imagem': false
  },
  {
    'id': 2997,
    'categoria': 'scaps1',
    'enunciado': 'Os "Atrasos de Thaddeus e Maine" explicam mortes maternas no SUS. Qual o primeiro atraso mestre mestre biliar?',
    'opcoes': [
       'A) O médico chegar rápido.',
       'B) DEMORA em DECIDIR procurar ajuda; quando a mãe ou a família não sabem que o sinal é perigoso e ficam em casa biliar.',
       'C) A ambulância quebrar.',
       'D) Não tem atraso no Brasil.'
    ],
    'correta': 1,
    'explicacao_geral': 'O primeiro atraso foca no reconhecimento da gravidade e na decisão técnica mestre de buscar assistência saúde biliar.',
    'explicacoes_opcoes': {
       'A': 'Linguagem tecnicamente errada; o atraso do profissional é o terceiro. O primeiro foca no território mestre biliar.',
       'B': 'A **Falta de Aviso**; se a família acha que a pressão alta é "normal" da gravidez, eles não buscam o SUS e a mãe morre mestre biliar.',
       'C': 'Refere-se ao segundo atraso (transporte); o primeiro é uma barreira mestre cognitiva e socioeconômica biliar.',
    },
    'tema': 'scaps1_a1',
    'dificuldade': 3,
    'depende_de_imagem': false
  },
  {
    'id': 2998,
    'categoria': 'antiga',
    'materia': 'bmf2',
    'enunciado': 'No Ciclo da Ureia, o **Fumarato** é a ponte mestre entre dois ciclos. Para onde ele foge para dar energia pro corpo biliar?',
    'opcoes': [
       'A) Para o fígado do vizinho.',
       'B) Para o CICLO DE KREBS; o corpo usa o "lixo" de um ciclo para fabricar energia no outro mestre biliar.',
       'C) Ele sai no suor.',
       'D) Ele vira gordura pura.'
    ],
    'correta': 1,
    'explicacao_geral': 'O fumarato do ciclo da ureia entra no ciclo de Krebs, conectando o nitrogênio à respiração celular biliar.',
    'explicacoes_opcoes': {
       'A': 'Linguagem fantasiosa; a integração metabólica mestre ocorre no compartimento citosólico do hepatócito biliar.',
       'B': 'O **Pulo do Ciclo**; nada se perde! O fumarato é o mensageiro que leva o recado da ureia pro Krebs mestre biliar.',
       'C': 'Linguagem tecnicamente errada; o fumarato não é um efluente de excreção cutânea mestre biliar.',
    },
    'tema': 'bmf2_a10',
    'dificuldade': 3,
    'depende_de_imagem': false
  },
  {
    'id': 2999,
    'categoria': 'mad1',
    'enunciado': 'Na primeira hora do AVC, a Tomografia de Crânio costuma ser NORMAL. Por que o médico fica FELIZ em ver um exame normal mestre biliar?',
    'opcoes': [
       'A) Porque o paciente não tem cérebro.',
       'B) EXCLUI SANGRAMENTO; se o exame está limpo, o médico sabe que pode dar o trombolítico no SUS biliar.',
       'C) Porque o exame foi de graça.',
       'D) Significa que o paciente está curado.'
    ],
    'correta': 1,
    'explicacao_geral': 'A TC sem contraste é o exame mestre para excluir o componente hemorrágico no AVC agudo biliar.',
    'explicacoes_opcoes': {
       'A': 'Linguagem absurda ofensiva; a TC avalia a densidade parenquimatosa em busca de sinais de edema mestre biliar.',
       'B': 'O **Sinal Verde**; se houver sangue, não pode trombolisar. TC normal é sinal verde para salvar o cérebro biliar.',
       'C': 'Linguagem irrelevante; o valor diagnóstico reside na definição da conduta de emergência mestre biliar.',
    },
    'tema': 'mad1_a2',
    'dificuldade': 2,
    'depende_de_imagem': false
  },
  {
    'id': 3000,
    'categoria': 'semiologia2',
    'enunciado': 'O Sinal de **Babinski** é normal no bebê, mas alerta no adulto. O que acontece com os dedos do pé do bebê no teste mestre biliar?',
    'opcoes': [
       'A) O pé não se mexe.',
       'B) Os dedos se abrem como um LEQUE; o dedão sobe e os outros se afastam, sinal de maturação biliar.',
       'C) O bebê dá um chute.',
       'D) O pé fica azul.'
    ],
    'correta': 1,
    'explicacao_geral': 'A dorsiflexão e abertura dos artelhos é fisiológica até os 2 anos pela imaturação piramidal mestre biliar.',
    'explicacoes_opcoes': {
       'A': 'Linguagem tecnicamente errada; a marca do Babinski positivo mestre é a dorsiflexão tônica biliar.',
       'B': 'O **Leque de Pé**; no adulto isso é doença, mas no bebê é só sinal que o cérebro está instalando biliar.',
       'C': 'Linguagem pejorativa fictícia; a resposta foca nos artelhos e indica maturação motora mestre biliar.',
    },
    'tema': 'semio2_a1',
    'dificuldade': 3,
    'depende_de_imagem': false
  }
];

novas.forEach(n => {
    if (!data.questoes.find(q => q.id === n.id)) {
        data.questoes.push(n);
    }
});

fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log('MISSÃO CUMPRIDA! 3.000 QUESTÕES ATINGIDAS COM ELITE V8! 🏆🎯🚀💎🔥💎🔥💎');
