const fs = require('fs');
const path = './data/questoes.json';
const data = JSON.parse(fs.readFileSync(path, 'utf8'));
const questoes = data.questoes || data;

const novas = [
  {
    "id": 102,
    "materia": "bioestatistica",
    "enunciado": "Na interpretação de indicadores de saúde, o SIM e o SINASC são fontes distintas no Brasil. Qual informação é captada exclusivamente pelo SINASC?",
    "opcoes": [
      "A) Registro de nascimentos e cálculo da taxa de natalidade",
      "B) Registro de óbitos e cálculo da mortalidade geral",
      "C) Notificação de doenças transmissíveis de interesse coletivo",
      "D) Produção ambulatorial e hospitalar do SUS"
    ],
    "correta": 0,
    "explicacao": "Resumo: SIM e SINASC são sistemas complementares para mortalidade e natalidade. A) CORRETA. O SINASC (Sistema de Informações sobre Nascidos Vivos) registra nascimentos e é a fonte para taxa de natalidade e denominador da mortalidade infantil. B) INCORRETA. Registro de óbitos é função do SIM. C) INCORRETA. Notificação de doenças transmissíveis é responsabilidade do SINAN. D) INCORRETA. Produção ambulatorial e hospitalar é registrada no SIA e SIH.",
    "tema": "bioe_a1",
    "subfoco": "sistemas-informacao",
    "dificuldade": 1,
    "modulo": 4
  },
  {
    "id": 103,
    "materia": "bioestatistica",
    "enunciado": "Uma pesquisa mede a pressão arterial média de 1.500 hipertensos de SP para estimar a PA média real de todos os hipertensos brasileiros. A pressão média calculada nos 1.500 participantes é classificada como:",
    "opcoes": [
      "A) Parâmetro, pois representa a medida da população de interesse",
      "B) Estatística, pois é calculada a partir da amostra coletada",
      "C) Constante, pois o valor é fixo dentro do estudo",
      "D) Variável dependente, pois é o desfecho da pesquisa"
    ],
    "correta": 1,
    "explicacao": "Resumo: Parâmetro descreve a população (μ, σ); estatística descreve a amostra (x̄, s). A) INCORRETA. Parâmetro seria a PA média real de todos os hipertensos brasileiros — não medida diretamente. B) CORRETA. A média dos 1.500 participantes é estatística da amostra (x̄); ela estima o parâmetro populacional (μ). C) INCORRETA. Constante não varia entre sujeitos; PA varia individualmente. D) INCORRETA. Neste contexto descritivo, PA é a variável medida, não necessariamente dependente.",
    "tema": "bioe_a1",
    "subfoco": "populacao-amostra",
    "dificuldade": 2,
    "modulo": 4
  },
  {
    "id": 104,
    "materia": "bioestatistica",
    "enunciado": "Pesquisadores comparam 200 pacientes com câncer de pulmão e 200 controles saudáveis, identificando retrospectivamente a exposição tabágica no passado. Esse delineamento é classificado como:",
    "opcoes": [
      "A) Ensaio clínico randomizado, pois compara dois grupos com desfechos diferentes",
      "B) Estudo de coorte prospectivo, pois acompanha expostos e não-expostos ao longo do tempo",
      "C) Estudo caso-controle, pois parte do desfecho e investiga a exposição retrospectivamente",
      "D) Estudo transversal, pois os dados são coletados em um único momento temporal"
    ],
    "correta": 2,
    "explicacao": "Resumo: Caso-controle parte do desfecho (doença) e olha para trás (retrospectivo). A) INCORRETA. Ensaio clínico envolve intervenção deliberada pelo pesquisador. B) INCORRETA. Coorte começa com expostos/não-expostos e aguarda o desfecho prospectivamente. C) CORRETA. Caso-controle: seleciona pelo desfecho (câncer vs. sem câncer) e investiga retrospectivamente a exposição (tabagismo). É observacional e retrospectivo. D) INCORRETA. Transversal mede exposição e desfecho simultaneamente.",
    "tema": "bioe_a1",
    "subfoco": "tipos-estudo",
    "dificuldade": 3,
    "modulo": 4
  },
  {
    "id": 105,
    "materia": "bioestatistica",
    "enunciado": "O estadiamento do câncer (I, II, III, IV) é uma variável classificada como:",
    "opcoes": [
      "A) Quantitativa contínua, pois pode assumir valores decimais progressivos",
      "B) Qualitativa nominal, pois não existe ordem natural entre os estadios",
      "C) Quantitativa discreta, pois é expressa por números inteiros sequenciais",
      "D) Qualitativa ordinal, pois os estadios têm ordem definida mas distâncias desiguais"
    ],
    "correta": 3,
    "explicacao": "Resumo: Variáveis qualitativas ordinais têm categorias com ordem, mas os intervalos não são necessariamente iguais. A) INCORRETA. Contínua aceita frações; estadiamento não tem estadio 1,5. B) INCORRETA. Nominal não tem ordem — sexo e diagnóstico são exemplos. O estadio II é pior que o I, portanto há ordem. C) INCORRETA. Discreta tem valores numéricos com significado aritmético. Estadiamento é categórico. D) CORRETA. Estadiamento é ordinal: existe ordem (I < II < III < IV), mas a diferença entre estadios não é uniforme.",
    "tema": "bioe_a2",
    "subfoco": "escalas-medida",
    "dificuldade": 1,
    "modulo": 4
  },
  {
    "id": 106,
    "materia": "bioestatistica",
    "enunciado": "Um estudo encontra associação entre café e infarto. Ao estratificar os dados, percebe-se que fumantes bebem mais café e têm mais infarto. O tabagismo, nesse cenário, é classificado como:",
    "opcoes": [
      "A) Variável de confusão, pois está associado tanto à exposição (café) quanto ao desfecho (infarto)",
      "B) Variável dependente, pois é o desfecho que o estudo quer medir",
      "C) Variável moderadora, pois potencializa o efeito do café sobre o coração",
      "D) Variável independente principal, pois é o preditor central da pesquisa"
    ],
    "correta": 0,
    "explicacao": "Resumo: Confundidor está associado à exposição E ao desfecho, distorcendo a associação. A) CORRETA. Tabagismo é confundidor clássico: fumantes bebem mais café (exposição) e têm mais infarto (desfecho). Sem ajuste, o café parece causar infarto — mas o efeito real é do cigarro. B) INCORRETA. Variável dependente é o desfecho — aqui o infarto, não o tabagismo. C) INCORRETA. Moderadora modifica magnitude do efeito em subgrupos; confundidor distorce a associação principal. D) INCORRETA. O preditor principal é o café; tabagismo é fator externo que distorce a relação.",
    "tema": "bioe_a2",
    "subfoco": "variavel-confusao",
    "dificuldade": 2,
    "modulo": 4
  },
  {
    "id": 107,
    "materia": "bioestatistica",
    "enunciado": "Quando um estudo categoriza o IMC contínuo em 'abaixo do peso', 'normal', 'sobrepeso' e 'obeso', que transformação estatística ocorre e qual é sua principal consequência?",
    "opcoes": [
      "A) Transformação de variável discreta em nominal, sem impacto na análise",
      "B) Categorização de variável contínua em ordinal, com perda de informação e redução do poder estatístico",
      "C) Padronização de variável ordinal em escala de razão, ampliando a precisão do teste",
      "D) Criação de variável de confusão a partir de dado originalmente quantitativo"
    ],
    "correta": 1,
    "explicacao": "Resumo: IMC é variável quantitativa contínua; ao categorizá-lo em faixas, transforma-se em variável ordinal com perda de informação. A) INCORRETA. IMC é contínuo, não discreto. A transformação gera ordinal (com ordem), não nominal. B) CORRETA. Categorizar variável contínua cria ordinal e perde informação numérica — IMC 18,5 e 24,9 ficam na mesma categoria 'normal'. Isso reduz poder estatístico. C) INCORRETA. A categorização reduz, não amplia, a precisão analítica. D) INCORRETA. Categorizar IMC não cria confundidor.",
    "tema": "bioe_a2",
    "subfoco": "transformacao-variavel",
    "dificuldade": 2,
    "modulo": 4
  },
  {
    "id": 108,
    "materia": "bioestatistica",
    "enunciado": "Um pesquisador analisa tempo de internação de 100 pacientes cirúrgicos. A maioria fica 3–5 dias, mas 5 pacientes com complicações ficaram 60 dias. A medida de tendência central mais adequada para descrever o tempo típico de internação é:",
    "opcoes": [
      "A) Média aritmética, pois utiliza todos os valores disponíveis sem exclusões",
      "B) Amplitude, pois captura a variação máxima dos dados do grupo",
      "C) Mediana, pois é robusta a valores extremos (outliers)",
      "D) Moda, pois identifica o valor mais frequente e é sempre a mais confiável"
    ],
    "correta": 2,
    "explicacao": "Resumo: Em distribuições assimétricas com outliers, a mediana é a medida de tendência central mais representativa. A) INCORRETA. A média é distorcida pelos 5 outliers de 60 dias — ficaria inflada e não representaria o tempo típico. B) INCORRETA. Amplitude (máx − mín) é medida de dispersão, não de tendência central. C) CORRETA. A mediana é o valor central quando os dados são ordenados; não se move por causa dos outliers. Para tempo de internação (distribuição assimétrica à direita), é a medida ideal. D) INCORRETA. A moda é menos precisa que a mediana para distribuições contínuas assimétricas.",
    "tema": "bioe_a3",
    "subfoco": "tendencia-central",
    "dificuldade": 2,
    "modulo": 4
  },
  {
    "id": 109,
    "materia": "bioestatistica",
    "enunciado": "Em uma população com distribuição normal para pressão arterial sistólica (média 120 mmHg, DP 10 mmHg), qual porcentagem dos indivíduos tem pressão entre 100 e 140 mmHg?",
    "opcoes": [
      "A) 68%, pois esse intervalo corresponde a ±1 desvio padrão da média",
      "B) 99,7%, pois esse intervalo abrange virtualmente toda a distribuição normal",
      "C) 50%, pois metade dos dados fica abaixo e metade acima da média",
      "D) 95%, pois esse intervalo corresponde a ±2 desvios padrão da média"
    ],
    "correta": 3,
    "explicacao": "Resumo: Pela regra empírica 68-95-99,7, o intervalo ±2DP abrange 95% dos dados. A) INCORRETA. ±1DP corresponde a 110–130 mmHg (120 ± 10), não a 100–140. O intervalo 100–140 equivale a ±2DP. B) INCORRETA. ±3DP (90–150 mmHg) abrange 99,7%. C) INCORRETA. 50% acima/abaixo é propriedade da mediana, não quantifica intervalo específico. D) CORRETA. O intervalo 100–140 = 120 ± 20 = ±2DP. Pela regra 68-95-99,7: ±2DP engloba 95% dos dados.",
    "tema": "bioe_a3",
    "subfoco": "dispersao",
    "dificuldade": 1,
    "modulo": 4
  },
  {
    "id": 110,
    "materia": "bioestatistica",
    "enunciado": "Um artigo com 400 participantes apresenta glicemia como '98 ± 3 mg/dL'. Outro com 25 participantes e glicemia semelhante apresenta '100 ± 12 mg/dL'. O valor '3' no primeiro artigo provavelmente representa:",
    "opcoes": [
      "A) Erro padrão da média (EPM), refletindo a alta precisão da estimativa em amostras grandes",
      "B) Desvio padrão (DP), indicando que todos os pacientes tinham glicemia muito próxima de 98 mg/dL",
      "C) Coeficiente de variação expresso em mg/dL em vez de porcentagem",
      "D) Intervalo interquartil, representando os 50% centrais dos dados do estudo"
    ],
    "correta": 0,
    "explicacao": "Resumo: EPM = DP/√n. Com n=400, o EPM é muito menor que o DP real — artigos podem usar EPM para parecer mais precisos. A) CORRETA. Se o DP real fosse ~12 (como no artigo menor), EPM = 12/√400 = 0,6. Um valor de ±3 sugere EPM — os dados reais dos pacientes são muito mais variáveis. Artigo menor com ±12 reporta o DP real. B) INCORRETA. DP de 3 mg/dL implicaria variabilidade biológica extremamente baixa — improvável. C) INCORRETA. Coeficiente de variação é adimensional (%). D) INCORRETA. IIQ acompanha a mediana, não a média.",
    "tema": "bioe_a3",
    "subfoco": "epm-dp",
    "dificuldade": 3,
    "modulo": 4
  },
  {
    "id": 111,
    "materia": "ds",
    "enunciado": "Em saúde pública, qual a principal diferença entre os princípios de igualdade e equidade na distribuição de recursos de saúde?",
    "opcoes": [
      "A) Igualdade prioriza populações vulneráveis; equidade distribui de forma homogênea para todos",
      "B) Igualdade distribui recursos igualmente para todos; equidade distribui conforme a necessidade de cada grupo",
      "C) Igualdade e equidade são sinônimos no contexto do SUS e do Ministério da Saúde",
      "D) Equidade garante acesso apenas universal; igualdade prioriza grupos com maior risco sanitário"
    ],
    "correta": 1,
    "explicacao": "Resumo: Igualdade dá o mesmo a todos; equidade dá mais a quem mais precisa. A) INCORRETA. As funções estão invertidas: quem prioriza vulneráveis é a equidade. B) CORRETA. Igualdade = distribuição homogênea. Equidade = resposta proporcional à necessidade — áreas com maior vulnerabilidade recebem mais recursos. Esse é o princípio central do SUS. C) INCORRETA. Os dois termos têm significados distintos. D) INCORRETA. Universalidade é acesso para todos — conceito diferente de igualdade ou equidade.",
    "tema": "ds_a1",
    "subfoco": "equidade-igualdade",
    "dificuldade": 1,
    "modulo": 2
  },
  {
    "id": 112,
    "materia": "ds",
    "enunciado": "Uma cidade periférica sofre enchente severa que destrói domicílios, contamina poços e interrompe acesso à UBS local. Meses depois, surgem surto de leptospirose e aumento de transtornos de ansiedade. A análise mais adequada segundo a perspectiva socioambiental é:",
    "opcoes": [
      "A) Os casos representam adoecimento individual sem relação com o evento ambiental coletivo",
      "B) A enchente aumentou exposição pontualmente, mas não altera o perfil epidemiológico sustentado",
      "C) O evento ambiental interagiu com vulnerabilidade social preexistente e ampliou o risco coletivo",
      "D) Os agravos decorrem exclusivamente de conduta inadequada dos moradores, sem componente ambiental"
    ],
    "correta": 2,
    "explicacao": "Resumo: O determinante socioambiental interage com vulnerabilidade social preexistente para ampliar o impacto em saúde. A) INCORRETA. Surto de leptospirose pós-enchente é evidência direta de impacto ambiental coletivo. B) INCORRETA. Enchentes em territórios vulneráveis alteram o perfil epidemiológico de forma sustentada. C) CORRETA. O bairro já tinha vulnerabilidade acumulada (moradia precária, acesso limitado). A enchente amplificou essa vulnerabilidade — gerando surto infeccioso e impacto em saúde mental. D) INCORRETA. Atribuir adoecimento exclusivamente à conduta individual desconsidera os determinantes estruturais.",
    "tema": "ds_a1",
    "subfoco": "determinantes-socioambientais",
    "dificuldade": 2,
    "modulo": 2
  },
  {
    "id": 113,
    "materia": "ds",
    "enunciado": "Qual dos seguintes exemplos melhor ilustra o impacto direto de mudanças climáticas sobre a morbimortalidade de populações urbanas vulneráveis?",
    "opcoes": [
      "A) Aumento do consumo de antibióticos por prescrição inadequada em serviços privados",
      "B) Redução da mortalidade materna por melhoria dos protocolos obstétricos hospitalares",
      "C) Ampliação da cobertura vacinal por campanhas nacionais do Ministério da Saúde",
      "D) Ondas de calor que aumentam internações por insuficiência cardíaca e doença renal em idosos"
    ],
    "correta": 3,
    "explicacao": "Resumo: Mudanças climáticas têm impacto sanitário direto — especialmente em populações vulneráveis. A) INCORRETA. Uso inadequado de antibióticos é problema de segurança de medicamentos, não impacto climático. B) INCORRETA. Redução de mortalidade materna decorre de melhoria de assistência. C) INCORRETA. Cobertura vacinal depende de política pública, não de clima. D) CORRETA. Ondas de calor elevam a temperatura corporal, aumentam demanda cardíaca e renal, causam desidratação — elevando internações e óbitos em populações vulneráveis. É o exemplo clássico de impacto sanitário direto de mudança climática.",
    "tema": "ds_a1",
    "subfoco": "mudanca-climatica",
    "dificuldade": 2,
    "modulo": 2
  },
  {
    "id": 114,
    "materia": "ds",
    "enunciado": "O ODS 3 (Saúde e Bem-Estar) não pode ser alcançado de forma isolada pelos serviços de saúde. Qual afirmativa melhor explica essa interdependência entre os Objetivos de Desenvolvimento Sustentável?",
    "opcoes": [
      "A) O ODS 3 depende de metas de outros ODS, como saneamento, educação e redução de pobreza, que são determinantes diretos da saúde",
      "B) O ODS 3 é autossuficiente e pode ser implementado apenas com expansão de hospitais e médicos",
      "C) A saúde melhora automaticamente quando há crescimento econômico, independente de saneamento ou equidade",
      "D) Os ODS são metas redundantes e o foco exclusivo no ODS 3 garante impacto equivalente nos demais"
    ],
    "correta": 0,
    "explicacao": "Resumo: Saúde é resultado de múltiplos determinantes — o ODS 3 depende de ODS como saneamento (6), educação (4) e redução de desigualdade (10). A) CORRETA. Sem saneamento aumentam doenças hídricas; sem educação piora a prevenção; sem redução de pobreza aumenta vulnerabilidade. Os ODS são interconectados. B) INCORRETA. Expansão hospitalar trata consequências; saúde exige ação nos determinantes. C) INCORRETA. Crescimento econômico sem equidade pode coexistir com alta morbimortalidade. D) INCORRETA. Os ODS não são redundantes; são interdependentes.",
    "tema": "ds_a2",
    "subfoco": "ods-saude",
    "dificuldade": 1,
    "modulo": 2
  },
  {
    "id": 115,
    "materia": "ds",
    "enunciado": "Uma cidade com alta densidade populacional, saneamento deficiente, transporte saturado e ausência de áreas verdes apresenta altas taxas de doenças respiratórias, transtornos mentais e infecciosas. O principal conceito que conecta ambiente urbano e esse perfil de adoecimento é:",
    "opcoes": [
      "A) A morbidade é determinada exclusivamente por fatores genéticos individuais, independente do ambiente",
      "B) O planejamento urbano inadequado gera exposição coletiva a riscos que aumentam a carga de doença",
      "C) A falta de acesso a planos de saúde privados explica as altas taxas de adoecimento nessas regiões",
      "D) O adoecimento decorre principalmente de estilo de vida individual, sem relação com infraestrutura urbana"
    ],
    "correta": 1,
    "explicacao": "Resumo: Ambiente urbano é determinante de saúde — saneamento, mobilidade e habitação condicionam o perfil epidemiológico coletivo. A) INCORRETA. Fatores genéticos explicam predisposição individual; adoecimento coletivo reflete exposição ambiental compartilhada. B) CORRETA. Saneamento inadequado favorece infecções; poluição causa doenças respiratórias; ausência de áreas verdes reduz bem-estar mental. Planejamento urbano é política de saúde. C) INCORRETA. A relação é com infraestrutura e território, não com tipo de plano de saúde. D) INCORRETA. Estilo de vida contribui individualmente, mas o perfil coletivo reflete o contexto estrutural.",
    "tema": "ds_a2",
    "subfoco": "cidade-saudavel",
    "dificuldade": 2,
    "modulo": 2
  },
  {
    "id": 116,
    "materia": "ds",
    "enunciado": "Um município prioriza construção de UBS sem investir em saneamento. Dois anos depois, persiste alta taxa de diarreia infantil apesar de 85% de cobertura de consultas pediátricas. A análise mais adequada desse cenário é:",
    "opcoes": [
      "A) A alta cobertura assistencial é suficiente para reduzir morbimortalidade infecciosa em área urbana",
      "B) A taxa de diarreia reflete resistência da população às orientações dos profissionais de saúde",
      "C) O setor saúde não consegue reduzir agravos de transmissão hídrica sem ação intersetorial em saneamento",
      "D) O problema seria resolvido apenas com expansão de leitos hospitalares para internação das crianças"
    ],
    "correta": 2,
    "explicacao": "Resumo: Diarreia por veiculação hídrica depende de saneamento — ação setorial isolada em saúde não remove a causa estrutural. A) INCORRETA. Alta cobertura trata o adoecido, mas não elimina a exposição ao patógeno. B) INCORRETA. Atribuir a persistência à resistência da população desconsidera a causa estrutural — água contaminada. C) CORRETA. Diarreia de transmissão hídrica só cai com saneamento básico. O setor saúde oferece tratamento individual, mas a prevenção coletiva exige ação intersetorial. D) INCORRETA. Internação trata complicações; não reduz incidência.",
    "tema": "ds_a2",
    "subfoco": "intersetorialidade",
    "dificuldade": 3,
    "modulo": 2
  },
  {
    "id": 117,
    "materia": "ds",
    "enunciado": "Segundo o conceito de política pública efetiva em saúde, o que diferencia uma norma publicada de uma política que realmente funciona?",
    "opcoes": [
      "A) A existência de regulamentação federal, independente de monitoramento ou resultado",
      "B) A criação de secretaria ou ministério específico responsável pela área de atuação",
      "C) A disponibilidade de financiamento para o setor, mesmo sem avaliação de resultados",
      "D) O impacto mensurável em indicadores de saúde no território, com cobertura e qualidade verificáveis"
    ],
    "correta": 3,
    "explicacao": "Resumo: Política pública efetiva não se mede pela existência da lei, mas pelo resultado em saúde que produz. A) INCORRETA. Regulamentação é necessária mas não suficiente — sem execução territorial, não há impacto. B) INCORRETA. Criar estrutura administrativa não garante resultado em saúde. C) INCORRETA. Financiamento sem avaliação de resultados pode ser gasto sem impacto. D) CORRETA. Política efetiva muda indicadores de saúde no território — cobertura, incidência, mortalidade. O resultado mensurável é o critério definitivo.",
    "tema": "ds_a3",
    "subfoco": "politica-publica",
    "dificuldade": 1,
    "modulo": 2
  },
  {
    "id": 118,
    "materia": "ds",
    "enunciado": "Por que a atuação isolada do setor saúde é insuficiente para reduzir a morbimortalidade relacionada aos determinantes socioambientais no Brasil?",
    "opcoes": [
      "A) Porque os determinantes estruturais do adoecimento — saneamento, habitação, renda e educação — estão fora da governança exclusiva do setor saúde e exigem ação coordenada",
      "B) Porque o SUS não tem capacidade assistencial suficiente para atender toda a população brasileira",
      "C) Porque os agravos socioambientais têm causas exclusivamente individuais que independem de política pública",
      "D) Porque a saúde pública brasileira é restrita a programas de vacinação e controle de epidemias"
    ],
    "correta": 0,
    "explicacao": "Resumo: Os determinantes que mais adoecem coletividades estão além do setor saúde e exigem intersetorialidade. A) CORRETA. Saneamento é infraestrutura; renda é política econômica; educação é política de ensino. O SUS intervém no dano mas não controla as causas estruturais — para isso é essencial coordenação intersetorial. B) INCORRETA. O problema fundamental não é capacidade assistencial, mas ausência de ação nos determinantes. C) INCORRETA. Agravos como leptospirose, dengue e desnutrição têm causas estruturais coletivas. D) INCORRETA. O SUS abrange atenção primária, vigilância, promoção e alta complexidade.",
    "tema": "ds_a3",
    "subfoco": "sus-vigilancia",
    "dificuldade": 2,
    "modulo": 2
  },
  {
    "id": 119,
    "materia": "ds",
    "enunciado": "Uma secretaria de saúde apresenta relatório mostrando que construiu 40 novas UBS e capacitou 200 profissionais em 2024. Esse tipo de informação é classificado como indicador de:",
    "opcoes": [
      "A) Resultado, pois demonstra impacto direto na saúde da população assistida",
      "B) Processo, pois mede execução de ações sem necessariamente evidenciar mudança em desfecho em saúde",
      "C) Efetividade, pois comprova que a política pública atingiu seus objetivos sanitários concretos",
      "D) Morbimortalidade, pois reflete o estado de saúde da população em termos quantitativos"
    ],
    "correta": 1,
    "explicacao": "Resumo: Indicador de processo mede o que foi feito (execução); indicador de resultado mede o que mudou em saúde. A) INCORRETA. Construção de UBS e capacitação são etapas de implementação; não medem se a saúde melhorou. B) CORRETA. Nº de UBS e profissionais capacitados são indicadores de processo — medem execução, não impacto. Para resultado seria preciso medir internações evitadas ou redução de mortalidade. C) INCORRETA. Efetividade mede resultado, não processo. D) INCORRETA. Indicadores de morbimortalidade medem adoecimento e morte.",
    "tema": "ds_a3",
    "subfoco": "indicadores",
    "dificuldade": 2,
    "modulo": 2
  },
  {
    "id": 120,
    "materia": "bmf2",
    "enunciado": "Paciente de 68 anos apresenta FC 38 bpm, hipotensão e síncope. O ECG mostra ondas P regulares dissociadas dos complexos QRS, configurando bloqueio atrioventricular de alto grau. Qual função fisiológica normal do nó AV está comprometida?",
    "opcoes": [
      "A) Gerar o impulso elétrico primário que inicia cada batimento cardíaco espontaneamente",
      "B) Conduzir o impulso rapidamente aos ventrículos para contração sincronizada e eficiente",
      "C) Introduzir atraso fisiológico entre ativação atrial e ventricular para enchimento ventricular adequado",
      "D) Produzir o potencial de ação de platô que sustenta a contração ventricular prolongada"
    ],
    "correta": 2,
    "explicacao": "Resumo: O nó AV promove atraso fisiológico entre ativação atrial e ventricular, permitindo enchimento ventricular adequado. A) INCORRETA. Gerar impulso primário é função do nó sinoatrial (NS), o marcapasso fisiológico dominante. B) INCORRETA. Condução rápida é função das fibras de Purkinje. C) CORRETA. O nó AV retarda a condução ~120-200 ms. No bloqueio de alto grau, essa sincronia é interrompida — átrios e ventrículos batem dissociados, prejudicando enchimento e sincronia mecânica. D) INCORRETA. O platô do potencial de ação é propriedade dos miócitos ventriculares.",
    "tema": "bmf2_a1",
    "subfoco": "no-sa-no-av",
    "dificuldade": 2,
    "modulo": 2
  },
  {
    "id": 121,
    "materia": "bmf2",
    "enunciado": "Qual afirmativa melhor diferencia automatismo e velocidade de condução no sistema elétrico cardíaco?",
    "opcoes": [
      "A) Automatismo é propriedade exclusiva das fibras de Purkinje; velocidade de condução depende do nó sinoatrial",
      "B) Células com alto automatismo conduzem impulsos mais rapidamente do que células passivas",
      "C) O nó AV tem o maior automatismo do coração e por isso domina o ritmo fisiológico",
      "D) Automatismo é a capacidade de gerar impulso espontaneamente; velocidade de condução é a rapidez de propagação entre células"
    ],
    "correta": 3,
    "explicacao": "Resumo: Automatismo e velocidade de condução são propriedades independentes — a célula mais automática (NS) não é a que conduz mais rápido (Purkinje). A) INCORRETA. O NS também tem alto automatismo; Purkinje tem automatismo mas menor que o NS. B) INCORRETA. Alto automatismo não implica alta velocidade de condução. C) INCORRETA. O NS tem o maior automatismo (~60-100 bpm) — não o AV (~40-60 bpm). D) CORRETA. Automatismo = geração espontânea do impulso. Velocidade de condução = rapidez de transmissão (alta no Purkinje, baixa no nó AV — propositalmente lenta para criar o atraso fisiológico).",
    "tema": "bmf2_a1",
    "subfoco": "automatismo-conducao",
    "dificuldade": 2,
    "modulo": 2
  },
  {
    "id": 122,
    "materia": "bmf2",
    "enunciado": "Paciente em uso de verapamil (bloqueador de canal de cálcio tipo L) apresenta bradicardia sinusal e PR prolongado ao ECG. Qual mecanismo explica simultaneamente esses dois efeitos?",
    "opcoes": [
      "A) Redução da despolarização espontânea no nó SA (diminuindo FC) e retardo da condução no nó AV (aumentando PR), ambos dependentes de correntes de cálcio",
      "B) Bloqueio de canais de sódio nas fibras de Purkinje, reduzindo a velocidade de condução intraventricular",
      "C) Inibição da bomba Na+/K+ ATPase nos miócitos ventriculares, prolongando o potencial de ação",
      "D) Aumento do tônus vagal reflexo que suprime o automatismo nas células marcapasso do nó SA"
    ],
    "correta": 0,
    "explicacao": "Resumo: Os canais de cálcio tipo L são essenciais para o automatismo do NS e para a condução no nó AV — dois alvos do verapamil. A) CORRETA. O NS usa corrente de cálcio (ICa,L) para despolarização espontânea — bloqueá-la reduz a frequência de disparo (bradicardia). O nó AV depende principalmente de cálcio para conduzir — o bloqueio retarda essa condução (PR longo). B) INCORRETA. Canais de sódio são alvo de antiarrítmicos classe I (lidocaína, flecainida). C) INCORRETA. Na+/K+ ATPase é alvo da digoxina. D) INCORRETA. O mecanismo direto do verapamil é bloqueio de canais de Ca²⁺, não ativação vagal.",
    "tema": "bmf2_a1",
    "subfoco": "farmacologia-antiarritmicos",
    "dificuldade": 3,
    "modulo": 2
  },
  {
    "id": 123,
    "materia": "bmf2",
    "enunciado": "Qual das seguintes afirmativas diferencia corretamente o pneumócito tipo I do tipo II na arquitetura alveolar?",
    "opcoes": [
      "A) Pneumócito tipo I produz surfactante; pneumócito tipo II realiza trocas gasosas pela sua grande superfície",
      "B) Pneumócito tipo I cobre ~95% da superfície alveolar e realiza trocas gasosas; tipo II ocupa ~5% e produz surfactante",
      "C) Ambos produzem surfactante, mas somente o tipo II tem função de barreira para trocas gasosas",
      "D) Pneumócito tipo II é o mais abundante em área de superfície e serve de suporte estrutural para o tipo I"
    ],
    "correta": 1,
    "explicacao": "Resumo: Tipo I = troca gasosa (maior área); Tipo II = surfactante (menor área, metabolicamente ativo). A) INCORRETA. As funções estão invertidas: tipo II produz surfactante; tipo I realiza trocas gasosas. B) CORRETA. Pneumócito tipo I: delgado, ~95% da superfície alveolar, especializado em difusão gasosa. Tipo II: cúbico, ~5% da cobertura, produz surfactante (DPPC) e prolifera para reparar lesão alveolar. C) INCORRETA. Apenas o tipo II produz surfactante; o tipo I realiza troca gasosa. D) INCORRETA. O tipo I é mais abundante em área de cobertura (~95%).",
    "tema": "bmf2_a10",
    "subfoco": "pneumocito-I-II",
    "dificuldade": 2,
    "modulo": 2
  },
  {
    "id": 124,
    "materia": "bmf2",
    "enunciado": "Recém-nascido de 30 semanas apresenta gemido expiratório, tiragem intercostal progressiva e cianose central. Gasometria: PaO2 45, PaCO2 58, pH 7,20. Radiografia mostra opacificação difusa em 'vidro fosco' bilateral. Qual é o principal mecanismo fisiopatológico?",
    "opcoes": [
      "A) Pneumonite intersticial por infecção viral intrauterina com citomegalovírus",
      "B) Aspiração de mecônio com obstrução de bronquíolos distais durante o parto",
      "C) Deficiência de surfactante pulmonar por imaturidade dos pneumócitos tipo II, levando a colapso alveolar progressivo",
      "D) Cardiopatia congênita com shunt direita-esquerda causando hipoxemia grave e acidose"
    ],
    "correta": 2,
    "explicacao": "Resumo: Prematuridade < 34 semanas = deficiência de surfactante = SDRN (Doença da Membrana Hialina). A) INCORRETA. Pneumonite por CMV tem apresentação subaguda e imagem diferente. B) INCORRETA. Aspiração de mecônio ocorre em gestações pós-termo — não em prematuros de 30 semanas. C) CORRETA. Com 30 semanas, os pneumócitos tipo II ainda não produzem surfactante adequado (maturidade ~34-36 semanas). Sem surfactante, a tensão superficial colapsa os alvéolos a cada expiração → insuficiência respiratória → vidro fosco bilateral. D) INCORRETA. Cardiopatia congênita causa hipoxemia mas não a imagem em vidro fosco bilateral da SDRN.",
    "tema": "bmf2_a10",
    "subfoco": "surfactante-sdrn",
    "dificuldade": 3,
    "modulo": 2
  },
  {
    "id": 125,
    "materia": "bmf2",
    "enunciado": "Qual é a diferença funcional entre o bronquíolo terminal e o bronquíolo respiratório na arquitetura das vias aéreas?",
    "opcoes": [
      "A) O bronquíolo terminal realiza trocas gasosas; o respiratório apenas conduz o ar sem participar das trocas",
      "B) Ambos fazem parte da zona de troca gasosa, diferindo apenas na geração anatômica",
      "C) O bronquíolo respiratório é exclusivamente zona de condução e compõe o espaço morto anatômico",
      "D) O bronquíolo terminal é zona de condução (sem troca gasosa); o respiratório já possui alvéolos nas paredes e pertence à zona de troca"
    ],
    "correta": 3,
    "explicacao": "Resumo: Terminal = condução (geração 16, sem alvéolos); Respiratório = troca (gerações 17-19, com alvéolos nas paredes). A) INCORRETA. O terminal realiza apenas condução; o respiratório que faz trocas gasosas. B) INCORRETA. O terminal (geração 16) é zona de condução e integra o espaço morto anatômico (~150 mL). C) INCORRETA. O bronquíolo respiratório (gerações 17-19) faz troca gasosa por ter alvéolos nas paredes. D) CORRETA. O bronquíolo terminal é o último segmento da zona de condução. A partir dos respiratórios (geração 17), começam os alvéolos nas paredes — início das trocas gasosas reais.",
    "tema": "bmf2_a10",
    "subfoco": "zona-conducao-troca",
    "dificuldade": 2,
    "modulo": 2
  },
  {
    "id": 126,
    "materia": "st",
    "enunciado": "Qual das seguintes alternativas diferencia corretamente vigilância epidemiológica de vigilância sanitária no contexto da saúde do trabalhador?",
    "opcoes": [
      "A) Vigilância epidemiológica monitora ocorrência e distribuição de agravos; vigilância sanitária regula produtos, serviços e processos com potencial risco à saúde",
      "B) Vigilância epidemiológica regula alimentos e cosméticos; vigilância sanitária acompanha surtos e epidemias",
      "C) As duas vigilâncias têm a mesma função, diferindo apenas pelo órgão executivo responsável",
      "D) Vigilância sanitária foca em exposições ambientais; vigilância epidemiológica regula produtos industrializados"
    ],
    "correta": 0,
    "explicacao": "Resumo: Epidemiológica = monitoramento de agravos na população; sanitária = controle de risco em produtos, serviços e processos. A) CORRETA. Epidemiológica: acompanha quem adoece, como e onde — identifica surtos e tendências. Sanitária: atua sobre o que pode causar adoecimento — alimentos, medicamentos, ambientes. B) INCORRETA. As funções estão trocadas. C) INCORRETA. Têm funções distintas e complementares. D) INCORRETA. Exposições ambientais são objeto da vigilância ambiental.",
    "tema": "st_a1",
    "subfoco": "vigilancias-saude",
    "dificuldade": 1,
    "modulo": 3
  },
  {
    "id": 127,
    "materia": "st",
    "enunciado": "Médico recusa solicitar ressonância de rotina para trabalhador com lombalgia crônica, optando por analgesia e fisioterapia, pois sabe que o exame raramente muda a conduta nesse cenário. Qual nível de prevenção essa conduta exemplifica?",
    "opcoes": [
      "A) Prevenção primária, pois evita que o trabalhador desenvolva doença mais grave no futuro",
      "B) Prevenção quaternária, pois evita intervenção desnecessária que poderia gerar mais dano que benefício",
      "C) Prevenção terciária, pois reabilita um trabalhador já com incapacidade estabelecida",
      "D) Prevenção secundária, pois detecta precocemente a progressão da doença antes de complicações"
    ],
    "correta": 1,
    "explicacao": "Resumo: Prevenção quaternária é a proteção contra intervenções excessivas ou desnecessárias. A) INCORRETA. Prevenção primária age antes do adoecimento, reduzindo exposição ao fator de risco. B) CORRETA. Prevenção quaternária: evitar intervenções que não trazem benefício e podem gerar dano — cascatas diagnósticas, efeitos adversos, falsos positivos. A recusa da ressonância de rotina nesse cenário é prevenção quaternária clássica. C) INCORRETA. Prevenção terciária reduz incapacidade já estabelecida por meio de reabilitação. D) INCORRETA. Prevenção secundária detecta precocemente — triagem e rastreio.",
    "tema": "st_a1",
    "subfoco": "prevencao-quaternaria",
    "dificuldade": 2,
    "modulo": 3
  },
  {
    "id": 128,
    "materia": "st",
    "enunciado": "Em uma fábrica de calçados, três trabalhadores do mesmo setor desenvolvem neuropatia periférica em dois meses. O médico identifica uso de cola com hexano sem ventilação. A conduta mais alinhada com os princípios da saúde do trabalhador é:",
    "opcoes": [
      "A) Tratar cada paciente individualmente com neuroprotectores e encaminhar para neurologia",
      "B) Emitir atestado de afastamento para os três e aguardar resolução espontânea",
      "C) Notificar o agravo, investigar o ambiente de trabalho e propor medidas coletivas para reduzir exposição ao hexano",
      "D) Recomendar uso de luvas e aguardar melhora clínica antes de qualquer intervenção no processo produtivo"
    ],
    "correta": 2,
    "explicacao": "Resumo: Caso sentinela em saúde do trabalhador exige investigação coletiva do ambiente — não apenas tratamento individual. A) INCORRETA. Tratamento individual é necessário mas insuficiente: sem eliminar a exposição, novos casos surgirão. B) INCORRETA. Afastamento sem investigação do processo produtivo não protege os demais trabalhadores. C) CORRETA. O médico deve: (1) notificar como agravo relacionado ao trabalho; (2) investigar o ambiente; (3) propor controle coletivo (substituição do produto, ventilação, EPI). Três casos do mesmo setor = evento sentinela de risco coletivo. D) INCORRETA. Luvas não protegem contra inalação de hexano — a medida prioritária é controle ambiental.",
    "tema": "st_a1",
    "subfoco": "evento-sentinela",
    "dificuldade": 3,
    "modulo": 3
  },
  {
    "id": 129,
    "materia": "st",
    "enunciado": "Médico atende trabalhador com diagnóstico de pneumoconiose relacionada ao trabalho. Qual é a obrigação do profissional em relação à vigilância em saúde?",
    "opcoes": [
      "A) Registrar no prontuário e encaminhar ao especialista, sem necessidade de comunicação externa",
      "B) Comunicar apenas ao empregador para que tome providências no ambiente de trabalho",
      "C) Notificar apenas após confirmação laboratorial completa, antes de qualquer comunicação oficial",
      "D) Notificar compulsoriamente ao sistema de vigilância em saúde, pois pneumoconiose é agravo de notificação obrigatória relacionado ao trabalho"
    ],
    "correta": 3,
    "explicacao": "Resumo: Pneumoconiose é agravo de notificação compulsória — obrigação legal do profissional, independente de confirmação completa. A) INCORRETA. Registro no prontuário é obrigatório mas insuficiente — agravos notificáveis exigem comunicação ao sistema de vigilância. B) INCORRETA. Notificar só ao empregador é insuficiente — a notificação deve ir ao sistema público (SINAN). C) INCORRETA. Em notificação compulsória, a suspeita clínica já justifica notificar. D) CORRETA. Pneumoconiose é agravo de notificação compulsória relacionado ao trabalho no Brasil. O médico deve notificar para ativar investigação do ambiente e proteger os demais expostos.",
    "tema": "st_a2",
    "subfoco": "notificacao-compulsoria",
    "dificuldade": 1,
    "modulo": 3
  },
  {
    "id": 130,
    "materia": "st",
    "enunciado": "Em município industrial com alta prevalência de surdez ocupacional por ruído, o sistema de vigilância registra apenas 10% dos casos esperados. A principal consequência dessa subnotificação para a saúde coletiva é:",
    "opcoes": [
      "A) Invisibilidade do problema para o sistema de saúde, impedindo planejamento de intervenções e proteção de trabalhadores expostos",
      "B) Redução do custo do sistema de saúde, pois menos casos são registrados e tratados formalmente",
      "C) Facilitação da gestão, pois dados subestimados simplificam o planejamento dos serviços",
      "D) Melhora aparente dos indicadores de saúde do trabalhador, sem impacto real na cadeia de adoecimento"
    ],
    "correta": 0,
    "explicacao": "Resumo: Subnotificação torna o problema invisível para o sistema — impossibilitando planejamento e proteção coletiva. A) CORRETA. Se apenas 10% dos casos são registrados, o sistema desconhece a real dimensão do problema. Sem dimensionamento, não há pressão para fiscalização e os trabalhadores continuam expostos. B) INCORRETA. Custo de saúde não diminui — adoecidos continuam buscando cuidado, muitas vezes em estágios mais avançados. C) INCORRETA. Dados subestimados prejudicam o planejamento com base em realidade distorcida. D) INCORRETA. Indicadores melhores por subnotificação são efeito estatístico aparente, não redução real de adoecimento.",
    "tema": "st_a2",
    "subfoco": "subnotificacao",
    "dificuldade": 2,
    "modulo": 3
  },
  {
    "id": 131,
    "materia": "st",
    "enunciado": "Médico de porto marítimo atende tripulante com febre hemorrágica de origem indeterminada e potencial de disseminação internacional. Qual é a resposta mais adequada segundo o Regulamento Sanitário Internacional?",
    "opcoes": [
      "A) Aguardar confirmação laboratorial completa antes de qualquer notificação para evitar alarmismo",
      "B) Notificar imediatamente a autoridade sanitária, pois suspeita de evento com potencial de disseminação internacional já exige comunicação tempestiva",
      "C) Encaminhar apenas ao hospital de referência, mantendo o caso restrito ao atendimento individual",
      "D) Comunicar exclusivamente às autoridades do país de origem do navio, sem acionar vigilância nacional"
    ],
    "correta": 1,
    "explicacao": "Resumo: O RSI prioriza comunicação precoce de eventos suspeitos com potencial internacional — não se espera confirmação completa. A) INCORRETA. Em eventos de alto risco, aguardar confirmação completa atrasa a resposta e pode permitir disseminação. B) CORRETA. O RSI estabelece que eventos suspeitos de constituir Emergência de Saúde Pública de Importância Internacional (ESPII) exigem comunicação tempestiva. Suspeita de febre hemorrágica em porto marítimo justifica notificação imediata à autoridade sanitária nacional. C) INCORRETA. Atendimento individual é necessário mas insuficiente — risco coletivo exige ativação do sistema de vigilância. D) INCORRETA. A notificação nacional (e potencialmente à OMS) é obrigatória pelo RSI.",
    "tema": "st_a2",
    "subfoco": "rsi",
    "dificuldade": 3,
    "modulo": 3
  }
];

questoes.push(...novas);
const result = { ...data, questoes };
fs.writeFileSync(path, JSON.stringify(result, null, 2), 'utf8');
console.log('Salvo! Total agora:', questoes.length, '| Max ID:', Math.max(...questoes.map(q=>q.id)));
