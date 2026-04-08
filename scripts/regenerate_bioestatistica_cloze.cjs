const fs = require('fs');

const path = 'data/flashcards.json';
const data = JSON.parse(fs.readFileSync(path, 'utf8'));
const cards = Array.isArray(data.flashcards) ? data.flashcards : [];

function m(frente, verso, categoria, tags, dificuldade = 2, explicacao = '') {
  return { frente, verso, categoria, tags, dificuldade, explicacao, origem: 'material' };
}

function e(frente, verso, tags, dificuldade = 2, explicacao = '') {
  return { frente, verso, categoria: 'extra_livro', tags, dificuldade, explicacao, origem: 'extra' };
}

const byTema = {
  bioe_a1: {
    material: [
      m('A aplicação da estatística às ciências da saúde é chamada de {{c1::bioestatística}}.', 'bioestatística', 'definicao', ['fundamentos']),
      m('A estatística que resume dados observados com médias e gráficos é a {{c1::descritiva}}.', 'descritiva', 'definicao', ['descritiva']),
      m('A estatística que usa amostras para concluir sobre populações é a {{c1::inferencial}}.', 'inferencial', 'definicao', ['inferencial']),
      m('O conjunto total de indivíduos de interesse é a {{c1::população}}.', 'população', 'definicao', ['populacao-amostra']),
      m('O subconjunto selecionado da população para estudo é a {{c1::amostra}}.', 'amostra', 'definicao', ['populacao-amostra']),
      m('Medida calculada na população (como μ e σ) é chamada de {{c1::parâmetro}}.', 'parâmetro', 'diferenciacao', ['parametro-estatistica']),
      m('Medida calculada na amostra (como x̄ e s) é chamada de {{c1::estatística}}.', 'estatística', 'diferenciacao', ['parametro-estatistica']),
      m('Transformar resultado bruto em significado clínico é gerar {{c1::informação}}.', 'informação', 'mecanismo', ['dado-informacao']),
      m('Sexo biológico e tipo sanguíneo são exemplos de escala {{c1::nominal}}.', 'nominal', 'definicao', ['escalas']),
      m('Estadiamento tumoral I-IV representa variável de escala {{c1::ordinal}}.', 'ordinal', 'diferenciacao', ['escalas']),
      m('Temperatura em graus Celsius é variável de escala {{c1::intervalar}}.', 'intervalar', 'prova', ['escalas']),
      m('Peso e pressão arterial são variáveis de escala de {{c1::razão}}.', 'razão', 'definicao', ['escalas']),
      m('No SIM, o indicador principal acompanhado é de {{c1::mortalidade}}.', 'mortalidade', 'clinica', ['sis']),
      m('O sistema SINASC é referência para dados de {{c1::nascidos vivos}}.', 'nascidos vivos', 'clinica', ['sis']),
      m('No estudo transversal, a medida de frequência típica é a {{c1::prevalência}}.', 'prevalência', 'prova', ['estudos']),
      m('Em coortes, a frequência de casos novos é chamada de {{c1::incidência}}.', 'incidência', 'prova', ['estudos']),
      m('No caso-controle, a medida mais usada de associação é o {{c1::odds ratio}}.', 'odds ratio', 'prova', ['estudos']),
      m('No ensaio clínico randomizado, a alocação por sorteio chama-se {{c1::randomização}}.', 'randomização', 'mecanismo', ['rct']),
      m('Entre estudos observacionais e experimentais, quem permite inferência causal mais forte é o {{c1::RCT}}.', 'RCT', 'diferenciacao', ['rct']),
      m('O intervalo de confiança quantifica a {{c1::incerteza}} da estimativa.', 'incerteza', 'mecanismo', ['ic']),
      m('Valor-p pequeno indica baixa compatibilidade dos dados com {{c1::H0}}.', 'H0', 'prova', ['hipoteses']),
      m('Em medicina baseada em evidências, interpretar artigos exige leitura {{c1::estatística}}.', 'estatística', 'clinica', ['mbe']),
      m('Parâmetro usa letra grega; estatística usa letra {{c1::latina}}.', 'latina', 'prova', ['parametro-estatistica']),
      m('Dizer que observacional prova causalidade é erro de {{c1::interpretação}}.', 'interpretação', 'prova', ['causalidade']),
      m('A ponte entre amostra e população chama-se {{c1::inferência}} estatística.', 'inferência', 'mecanismo', ['inferencial'])
    ],
    extra: [
      e('A diretriz STROBE orienta a publicação de estudos {{c1::observacionais}}.', 'observacionais', ['guidelines']),
      e('Em revisão sistemática, a ferramenta para risco de viés em RCT é a {{c1::RoB 2}}.', 'RoB 2', ['mbe']),
      e('A escala GRADE classifica a {{c1::certeza}} da evidência científica.', 'certeza', ['mbe']),
      e('Em artigos, o IC 95% costuma ser reportado junto ao {{c1::efeito}} principal.', 'efeito', ['ic']),
      e('O CONSORT é checklist de relato para ensaio clínico {{c1::randomizado}}.', 'randomizado', ['rct'])
    ]
  },
  bioe_a2: {
    material: [
      m('Variável categórica sem ordem natural é {{c1::qualitativa nominal}}.', 'qualitativa nominal', 'definicao', ['variaveis']),
      m('Variável categórica com ordem, sem distância fixa, é {{c1::qualitativa ordinal}}.', 'qualitativa ordinal', 'definicao', ['variaveis']),
      m('Número de internações no ano é variável quantitativa {{c1::discreta}}.', 'discreta', 'definicao', ['variaveis']),
      m('Peso corporal com casas decimais é variável quantitativa {{c1::contínua}}.', 'contínua', 'definicao', ['variaveis']),
      m('Grupo sanguíneo ABO é exemplo clássico de variável {{c1::nominal}}.', 'nominal', 'prova', ['variaveis']),
      m('Classe funcional NYHA I-IV é variável {{c1::ordinal}}.', 'ordinal', 'prova', ['variaveis']),
      m('A variável que representa o desfecho é chamada de {{c1::dependente}}.', 'dependente', 'mecanismo', ['papel-variavel']),
      m('A variável explicativa/exposição é chamada de {{c1::independente}}.', 'independente', 'mecanismo', ['papel-variavel']),
      m('Variável associada à exposição e ao desfecho é um {{c1::confundidor}}.', 'confundidor', 'diferenciacao', ['confundimento']),
      m('Transformar IMC contínuo em faixas cria variável {{c1::ordinal}}.', 'ordinal', 'diferenciacao', ['transformacao']),
      m('Categorização de variável contínua tende a reduzir {{c1::poder estatístico}}.', 'poder estatístico', 'mecanismo', ['transformacao']),
      m('Transformação log é usada para reduzir {{c1::assimetria}} à direita.', 'assimetria', 'mecanismo', ['transformacao']),
      m('Escala com zero absoluto verdadeiro é escala de {{c1::razão}}.', 'razão', 'definicao', ['escalas']),
      m('Escala intervalar permite somar e subtrair, mas não razões {{c1::proporcionais}}.', 'proporcionais', 'prova', ['escalas']),
      m('Quando os dados são nominais, medida central possível é a {{c1::moda}}.', 'moda', 'prova', ['medidas']),
      m('Histograma é recomendado para variável quantitativa {{c1::contínua}}.', 'contínua', 'prova', ['graficos']),
      m('Gráfico de barras é típico para variável {{c1::categórica}}.', 'categórica', 'prova', ['graficos']),
      m('Diagrama de dispersão relaciona duas variáveis {{c1::contínuas}}.', 'contínuas', 'definicao', ['graficos']),
      m('A randomização é método robusto para controlar confundidores {{c1::desconhecidos}}.', 'desconhecidos', 'mecanismo', ['confundimento']),
      m('Regressão multivariada controla confundidores em estudo {{c1::observacional}}.', 'observacional', 'clinica', ['confundimento']),
      m('Contagem de células é discreta, mesmo quando o valor parece {{c1::alto}}.', 'alto', 'prova', ['variaveis']),
      m('IMC é variável contínua {{c1::derivada}} de peso e altura.', 'derivada', 'diferenciacao', ['transformacao']),
      m('Variável resposta é sinônimo de {{c1::outcome}}.', 'outcome', 'definicao', ['papel-variavel']),
      m('Variável preditora é sinônimo de {{c1::exposição}} em muitos estudos.', 'exposição', 'definicao', ['papel-variavel']),
      m('Escolher teste estatístico sem classificar variável é erro de {{c1::base}}.', 'base', 'prova', ['variaveis'])
    ],
    extra: [
      e('No R, variáveis nominais geralmente são armazenadas como {{c1::factor}}.', 'factor', ['ferramentas']),
      e('Escalas Likert de 5 pontos são tratadas classicamente como {{c1::ordinais}}.', 'ordinais', ['metodologia']),
      e('Z-score padroniza variável para média 0 e DP {{c1::1}}.', '1', ['padronizacao']),
      e('A transformação log10 é comum para biomarcadores com distribuição {{c1::assimétrica}}.', 'assimétrica', ['transformacao']),
      e('ANOVA pressupõe desfecho quantitativo e variável independente {{c1::categórica}}.', 'categórica', ['testes'])
    ]
  },
  bioe_a3: {
    material: [
      m('A soma dos valores dividida por n define a {{c1::média aritmética}}.', 'média aritmética', 'definicao', ['tendencia-central']),
      m('A medida central mais robusta a outliers é a {{c1::mediana}}.', 'mediana', 'diferenciacao', ['tendencia-central']),
      m('Para variável nominal, a medida central adequada é a {{c1::moda}}.', 'moda', 'prova', ['tendencia-central']),
      m('Diferença entre valor máximo e mínimo é a {{c1::amplitude}}.', 'amplitude', 'definicao', ['dispersao']),
      m('A raiz da variância é o {{c1::desvio padrão}}.', 'desvio padrão', 'definicao', ['dispersao']),
      m('Na normalidade, cerca de 68% dos dados ficam em média ± {{c1::1 DP}}.', '1 DP', 'prova', ['normalidade']),
      m('Na normalidade, cerca de 95% dos dados ficam em média ± {{c1::2 DP}}.', '2 DP', 'prova', ['normalidade']),
      m('Intervalo interquartil é calculado por P75 menos {{c1::P25}}.', 'P25', 'definicao', ['iiq']),
      m('IIQ descreve os 50% {{c1::centrais}} da distribuição.', 'centrais', 'mecanismo', ['iiq']),
      m('Distribuição assimétrica à direita tende a ter média maior que {{c1::mediana}}.', 'mediana', 'prova', ['assimetria']),
      m('Em distribuição simétrica, média, mediana e moda tendem a ser {{c1::iguais}}.', 'iguais', 'definicao', ['simetria']),
      m('Coeficiente de variação é DP dividido pela {{c1::média}}.', 'média', 'mecanismo', ['cv']),
      m('CV é útil para comparar dispersão entre variáveis com unidades {{c1::diferentes}}.', 'diferentes', 'clinica', ['cv']),
      m('Erro padrão da média (EPM) é DP dividido por raiz de {{c1::n}}.', 'n', 'definicao', ['epm']),
      m('EPM descreve {{c1::precisão}} da estimativa da média, não variabilidade individual.', 'precisão', 'diferenciacao', ['epm-dp']),
      m('Desvio padrão descreve a variabilidade dos dados {{c1::individuais}}.', 'individuais', 'diferenciacao', ['epm-dp']),
      m('Outlier desloca fortemente a {{c1::média}} em comparação à mediana.', 'média', 'prova', ['outlier']),
      m('Para dados assimétricos, reporte preferencial é mediana com {{c1::IIQ}}.', 'IIQ', 'prova', ['relato']),
      m('P50 corresponde à {{c1::mediana}}.', 'mediana', 'definicao', ['percentis']),
      m('Percentis dividem distribuição conforme proporção {{c1::acumulada}}.', 'acumulada', 'mecanismo', ['percentis']),
      m('Faixa de referência laboratorial de 95% costuma aproximar média ± {{c1::2 DP}}.', '2 DP', 'clinica', ['normalidade']),
      m('Amplitude é muito sensível a valores {{c1::extremos}}.', 'extremos', 'prova', ['dispersao']),
      m('Box-plot é gráfico clássico para mediana e {{c1::quartis}}.', 'quartis', 'definicao', ['graficos']),
      m('Dois grupos com mesma média podem ter dispersão {{c1::diferente}}.', 'diferente', 'clinica', ['dispersao']),
      m('Reportar apenas média sem dispersão prejudica interpretação {{c1::clínica}}.', 'clínica', 'prova', ['relato'])
    ],
    extra: [
      e('Na distribuição normal padrão, a média é {{c1::0}}.', '0', ['normal']),
      e('Na distribuição normal padrão, o desvio padrão é {{c1::1}}.', '1', ['normal']),
      e('O percentil 97,5 corresponde aproximadamente a z = {{c1::1,96}}.', '1,96', ['zscore']),
      e('Regra de Tukey usa 1,5 x IIQ para detectar possível {{c1::outlier}}.', 'outlier', ['iiq']),
      e('Erro padrão menor costuma ocorrer com tamanho amostral mais {{c1::alto}}.', 'alto', ['epm'])
    ]
  },
  bioe_a4: {
    material: [
      m('Amostra com chance conhecida de seleção segue amostragem {{c1::probabilística}}.', 'probabilística', 'definicao', ['amostragem']),
      m('Sorteio em que todos têm mesma chance é amostragem aleatória {{c1::simples}}.', 'simples', 'definicao', ['amostragem']),
      m('Selecionar cada k-ésimo indivíduo caracteriza amostragem {{c1::sistemática}}.', 'sistemática', 'definicao', ['amostragem']),
      m('Dividir população em subgrupos e sortear em cada um é amostragem {{c1::estratificada}}.', 'estratificada', 'definicao', ['amostragem']),
      m('Selecionar unidades como escolas/municípios define amostragem por {{c1::conglomerados}}.', 'conglomerados', 'definicao', ['amostragem']),
      m('Amostragem por conveniência é método {{c1::não probabilístico}}.', 'não probabilístico', 'diferenciacao', ['amostragem']),
      m('Estudo subpotente aumenta chance de erro tipo {{c1::II}}.', 'II', 'prova', ['poder']),
      m('No cálculo amostral, alfa representa risco de erro tipo {{c1::I}}.', 'I', 'prova', ['poder']),
      m('Poder estatístico é 1 menos {{c1::beta}}.', 'beta', 'definicao', ['poder']),
      m('Quanto menor o efeito esperado, maior tende a ser o {{c1::n}} necessário.', 'n', 'mecanismo', ['amostra']),
      m('Maior variabilidade dos dados exige tamanho amostral mais {{c1::alto}}.', 'alto', 'mecanismo', ['amostra']),
      m('Viés de seleção é erro {{c1::sistemático}} e não aleatório.', 'sistemático', 'diferenciacao', ['vies']),
      m('Erro amostral aleatório tende a diminuir quando o n {{c1::aumenta}}.', 'aumenta', 'mecanismo', ['erro-amostral']),
      m('Viés não desaparece com aumento de tamanho {{c1::amostral}}.', 'amostral', 'prova', ['vies']),
      m('Distribuição em sino simétrica caracteriza padrão {{c1::normal}}.', 'normal', 'definicao', ['normalidade']),
      m('Shapiro-Wilk com p > 0,05 sugere não rejeitar {{c1::normalidade}}.', 'normalidade', 'prova', ['normalidade']),
      m('Para dois grupos independentes não normais, alternativa ao t é {{c1::Mann-Whitney}}.', 'Mann-Whitney', 'diferenciacao', ['testes']),
      m('Para três ou mais grupos não normais, usa-se {{c1::Kruskal-Wallis}}.', 'Kruskal-Wallis', 'diferenciacao', ['testes']),
      m('Correlação não paramétrica clássica é a de {{c1::Spearman}}.', 'Spearman', 'diferenciacao', ['testes']),
      m('Teste t e ANOVA são exemplos de testes {{c1::paramétricos}}.', 'paramétricos', 'definicao', ['testes']),
      m('Q-Q plot é ferramenta gráfica para avaliar {{c1::normalidade}}.', 'normalidade', 'mecanismo', ['normalidade']),
      m('Perdas de seguimento acima de 20% costumam ameaçar a {{c1::validade}}.', 'validade', 'clinica', ['coorte']),
      m('Amostra representativa é requisito para boa {{c1::generalização}} dos achados.', 'generalização', 'clinica', ['amostragem']),
      m('Em inquéritos nacionais, conglomerados reduzem custo logístico de {{c1::coleta}}.', 'coleta', 'mecanismo', ['amostragem']),
      m('Escolha do teste depende da distribuição e do tipo de {{c1::variável}}.', 'variável', 'prova', ['testes'])
    ],
    extra: [
      e('O efeito de desenho em amostragem complexa costuma ser chamado de {{c1::design effect}}.', 'design effect', ['amostragem']),
      e('Correção para população finita pode reduzir n quando N é {{c1::pequeno}}.', 'pequeno', ['amostragem']),
      e('Software G*Power é usado para cálculo de {{c1::poder}} estatístico.', 'poder', ['ferramentas']),
      e('No Shapiro-Wilk, a hipótese nula assume distribuição {{c1::normal}}.', 'normal', ['normalidade']),
      e('Transformação Box-Cox é alternativa para aproximar dados da {{c1::normalidade}}.', 'normalidade', ['transformacao'])
    ]
  },
  bioe_a5: {
    material: [
      m('Hipótese nula geralmente representa ausência de {{c1::efeito}}.', 'efeito', 'definicao', ['hipoteses']),
      m('Hipótese alternativa representa presença de {{c1::diferença}} ou associação.', 'diferença', 'definicao', ['hipoteses']),
      m('Valor-p é calculado sob a suposição de que {{c1::H0}} é verdadeira.', 'H0', 'definicao', ['pvalor']),
      m('Com alfa 0,05, p <= alfa leva à {{c1::rejeição}} de H0.', 'rejeição', 'prova', ['decisao']),
      m('Erro tipo I significa concluir efeito quando ele {{c1::não existe}}.', 'não existe', 'diferenciacao', ['erros']),
      m('Erro tipo II significa não detectar efeito que {{c1::existe}}.', 'existe', 'diferenciacao', ['erros']),
      m('Poder estatístico adequado costuma ser pelo menos {{c1::80%}}.', '80%', 'prova', ['poder']),
      m('IC 95% que não cruza 0 para diferença sugere significância {{c1::estatística}}.', 'estatística', 'prova', ['ic']),
      m('Para RR/OR, IC 95% significativo é o que não cruza {{c1::1}}.', '1', 'prova', ['ic']),
      m('Não rejeitar H0 não significa provar sua {{c1::verdade}}.', 'verdade', 'prova', ['interpretacao']),
      m('Valor-p não mede magnitude do {{c1::efeito}}.', 'efeito', 'diferenciacao', ['pvalor']),
      m('Amostras muito grandes podem gerar p pequeno para efeito clinicamente {{c1::irrelevante}}.', 'irrelevante', 'clinica', ['significancia-clinica']),
      m('Teste bilateral avalia diferença em {{c1::duas direções}}.', 'duas direções', 'definicao', ['testes']),
      m('Teste unilateral só é justificável com direção previamente {{c1::especificada}}.', 'especificada', 'prova', ['testes']),
      m('IC estreito indica maior {{c1::precisão}} da estimativa.', 'precisão', 'mecanismo', ['ic']),
      m('RR, OR e diferença média são medidas de {{c1::tamanho de efeito}}.', 'tamanho de efeito', 'definicao', ['efeito']),
      m('A decisão estatística ideal combina p-valor com {{c1::IC 95%}}.', 'IC 95%', 'clinica', ['interpretacao']),
      m('Erro tipo I é também chamado de {{c1::falso positivo}}.', 'falso positivo', 'definicao', ['erros']),
      m('Erro tipo II é também chamado de {{c1::falso negativo}}.', 'falso negativo', 'definicao', ['erros']),
      m('Aumentar n reduz erro padrão e tende a elevar o {{c1::poder}}.', 'poder', 'mecanismo', ['poder']),
      m('Com resultado não significativo, a formulação correta é "não {{c1::rejeitamos}} H0".', 'rejeitamos', 'prova', ['linguagem']),
      m('Valor-p representa P(dados | {{c1::H0}}), não P(H0 | dados).', 'H0', 'prova', ['pvalor']),
      m('Significância estatística não é sinônimo de relevância {{c1::clínica}}.', 'clínica', 'clinica', ['significancia-clinica']),
      m('Intervalo de confiança informa direção e {{c1::magnitude}} provável do efeito.', 'magnitude', 'mecanismo', ['ic']),
      m('Definir alfa após ver os dados aumenta risco de inferência {{c1::enviesada}}.', 'enviesada', 'prova', ['metodologia'])
    ],
    extra: [
      e('Ajuste de Bonferroni é usado para múltiplas {{c1::comparações}}.', 'comparações', ['multiplos-testes']),
      e('Em testes bicaudais com alfa 0,05, cada cauda recebe {{c1::0,025}}.', '0,025', ['testes']),
      e('P-hacking descreve manipulação analítica para obter p {{c1::significativo}}.', 'significativo', ['integridade']),
      e('Pré-registro reduz risco de viés por análises {{c1::seletivas}}.', 'seletivas', ['integridade']),
      e('Quando comparações são muitas, controle de FDR pode usar método de {{c1::Benjamini-Hochberg}}.', 'Benjamini-Hochberg', ['multiplos-testes'])
    ]
  },
  bioe_a6: {
    material: [
      m('Pesquisa qualitativa responde especialmente perguntas de {{c1::como}} e por quê.', 'como', 'definicao', ['qualitativa']),
      m('Pesquisa quantitativa é mais adequada para perguntas de {{c1::quanto}}.', 'quanto', 'diferenciacao', ['quantitativa']),
      m('Na qualitativa, o critério de parada é {{c1::saturação teórica}}.', 'saturação teórica', 'definicao', ['amostragem']),
      m('Amostragem qualitativa costuma ser {{c1::intencional}} e não aleatória.', 'intencional', 'definicao', ['amostragem']),
      m('Entrevista em profundidade é coleta {{c1::individual}} com alto detalhamento.', 'individual', 'definicao', ['metodos']),
      m('Grupo focal explora interação entre {{c1::participantes}}.', 'participantes', 'mecanismo', ['metodos']),
      m('Observação participante registra práticas no {{c1::campo}}.', 'campo', 'definicao', ['metodos']),
      m('Análise de conteúdo organiza dados em {{c1::categorias temáticas}}.', 'categorias temáticas', 'definicao', ['analise']),
      m('Análise de discurso enfatiza como o conteúdo é {{c1::enunciado}}.', 'enunciado', 'diferenciacao', ['analise']),
      m('Grounded theory constrói teoria a partir dos {{c1::dados}}.', 'dados', 'mecanismo', ['analise']),
      m('Na qualitativa, validade externa é discutida como {{c1::transferibilidade}}.', 'transferibilidade', 'diferenciacao', ['qualidade']),
      m('Credibilidade em qualitativa aproxima-se do conceito de {{c1::validade interna}}.', 'validade interna', 'diferenciacao', ['qualidade']),
      m('Dependibilidade envolve rastreabilidade do processo de {{c1::pesquisa}}.', 'pesquisa', 'definicao', ['qualidade']),
      m('Confirmabilidade busca reduzir influência do viés do {{c1::pesquisador}}.', 'pesquisador', 'definicao', ['qualidade']),
      m('Triangulação combina métodos/fontes para aumentar {{c1::credibilidade}}.', 'credibilidade', 'mecanismo', ['qualidade']),
      m('Representatividade estatística não é foco central da pesquisa {{c1::qualitativa}}.', 'qualitativa', 'prova', ['qualitativa']),
      m('Grupo focal costuma reunir cerca de 6 a {{c1::12}} pessoas.', '12', 'prova', ['metodos']),
      m('Temas sensíveis tendem a ser melhor explorados por entrevista {{c1::individual}}.', 'individual', 'clinica', ['metodos']),
      m('Análise documental usa material já {{c1::existente}} como fonte.', 'existente', 'definicao', ['metodos']),
      m('Pergunta "qual a incidência?" pertence ao paradigma {{c1::quantitativo}}.', 'quantitativo', 'diferenciacao', ['paradigmas']),
      m('Pergunta "como pacientes percebem?" pertence ao paradigma {{c1::qualitativo}}.', 'qualitativo', 'diferenciacao', ['paradigmas']),
      m('Saturação ocorre quando novas entrevistas não trazem categorias {{c1::novas}}.', 'novas', 'mecanismo', ['amostragem']),
      m('Objetivo da qualitativa é profundidade de compreensão no {{c1::contexto}}.', 'contexto', 'clinica', ['qualitativa']),
      m('Em pesquisa qualitativa, resultados são interpretados com foco em {{c1::significados}}.', 'significados', 'definicao', ['qualitativa']),
      m('Transferibilidade depende de descrição densa do {{c1::cenário}} estudado.', 'cenário', 'mecanismo', ['qualidade'])
    ],
    extra: [
      e('O checklist COREQ orienta relato de estudos qualitativos com {{c1::entrevistas}}.', 'entrevistas', ['relato']),
      e('Software NVivo auxilia na codificação de dados {{c1::textuais}}.', 'textuais', ['ferramentas']),
      e('Member checking consiste em validar interpretações com os {{c1::participantes}}.', 'participantes', ['qualidade']),
      e('Amostragem em bola de neve é frequente em populações de difícil {{c1::acesso}}.', 'acesso', ['amostragem']),
      e('Diário de campo é instrumento clássico da {{c1::etnografia}}.', 'etnografia', ['metodos'])
    ]
  },
  bioe_a7: {
    material: [
      m('Epidemiologia analítica testa {{c1::hipóteses}} de associação e causalidade.', 'hipóteses', 'definicao', ['epi-analitica']),
      m('Epidemiologia descritiva organiza dados por pessoa, lugar e {{c1::tempo}}.', 'tempo', 'diferenciacao', ['epi']),
      m('Na analítica, comparamos {{c1::exposição}} e desfecho entre grupos.', 'exposição', 'mecanismo', ['epi-analitica']),
      m('Incidência mede ocorrência de casos {{c1::novos}}.', 'novos', 'definicao', ['frequencia']),
      m('Prevalência mede casos existentes em um {{c1::momento}}.', 'momento', 'definicao', ['frequencia']),
      m('Risco relativo é razão de incidências em expostos e {{c1::não expostos}}.', 'não expostos', 'definicao', ['rr']),
      m('RR > 1 sugere fator de {{c1::risco}}.', 'risco', 'prova', ['rr']),
      m('RR < 1 sugere fator {{c1::protetor}}.', 'protetor', 'prova', ['rr']),
      m('Odds ratio é medida típica em estudo {{c1::caso-controle}}.', 'caso-controle', 'definicao', ['or']),
      m('Quando doença é rara, OR tende a aproximar o {{c1::RR}}.', 'RR', 'prova', ['or-rr']),
      m('Risco atribuível é diferença absoluta de incidências entre expostos e {{c1::não expostos}}.', 'não expostos', 'definicao', ['ra']),
      m('Fração atribuível estima proporção do risco explicada pela {{c1::exposição}}.', 'exposição', 'mecanismo', ['fa']),
      m('Nos critérios de Bradford Hill, o critério indispensável é {{c1::temporalidade}}.', 'temporalidade', 'prova', ['causalidade']),
      m('Temporalidade exige que exposição ocorra antes do {{c1::desfecho}}.', 'desfecho', 'definicao', ['causalidade']),
      m('Consistência causal implica replicação da associação em múltiplos {{c1::estudos}}.', 'estudos', 'mecanismo', ['causalidade']),
      m('Gradiente biológico significa relação de {{c1::dose-resposta}}.', 'dose-resposta', 'definicao', ['causalidade']),
      m('Plausibilidade biológica aumenta confiança na relação {{c1::causal}}.', 'causal', 'mecanismo', ['causalidade']),
      m('Confundimento é distorção por terceira variável associada a exposição e {{c1::desfecho}}.', 'desfecho', 'definicao', ['confundimento']),
      m('Modificação de efeito indica que associação varia entre {{c1::subgrupos}}.', 'subgrupos', 'diferenciacao', ['interacao']),
      m('Modificação de efeito não é viés; pode ser achado {{c1::relevante}}.', 'relevante', 'clinica', ['interacao']),
      m('Randomização controla confundidores conhecidos e {{c1::desconhecidos}}.', 'desconhecidos', 'mecanismo', ['confundimento']),
      m('Estratificação e regressão multivariada ajudam no controle de {{c1::confundimento}}.', 'confundimento', 'mecanismo', ['confundimento']),
      m('Incidência cumulativa é proporção de novos casos em população em {{c1::risco}}.', 'risco', 'definicao', ['incidencia']),
      m('Taxa de incidência usa denominador em {{c1::pessoa-tempo}}.', 'pessoa-tempo', 'definicao', ['incidencia']),
      m('Confundir associação com causalidade é erro clássico de {{c1::epidemiologia}}.', 'epidemiologia', 'prova', ['causalidade'])
    ],
    extra: [
      e('Critérios de Hill foram propostos em {{c1::1965}}.', '1965', ['historia']),
      e('A medida "hazard ratio" é comum em análises de {{c1::sobrevida}}.', 'sobrevida', ['medidas']),
      e('Um DAG é um grafo acíclico dirigido para mapear {{c1::causalidade}}.', 'causalidade', ['metodologia']),
      e('Sensibilidade de análise pode testar robustez frente a {{c1::confundimento}} residual.', 'confundimento', ['metodologia']),
      e('E-value é métrica para quantificar força de confundidor {{c1::não medido}}.', 'não medido', ['metodologia'])
    ]
  },
  bioe_a8: {
    material: [
      m('Estudo transversal mede exposição e desfecho no mesmo {{c1::momento}}.', 'momento', 'definicao', ['transversal']),
      m('A principal medida de frequência do transversal é a {{c1::prevalência}}.', 'prevalência', 'definicao', ['transversal']),
      m('Razão de Prevalência é a medida de associação mais adequada no estudo {{c1::transversal}}.', 'transversal', 'definicao', ['rp']),
      m('RP = 1 indica ausência de {{c1::associação}}.', 'associação', 'prova', ['rp']),
      m('RP > 1 sugere maior prevalência do desfecho entre {{c1::expostos}}.', 'expostos', 'prova', ['rp']),
      m('Uma vantagem do transversal é custo {{c1::baixo}} e execução rápida.', 'baixo', 'clinica', ['transversal']),
      m('Sem seguimento longitudinal, não há perdas de {{c1::follow-up}}.', 'follow-up', 'mecanismo', ['transversal']),
      m('Principal limitação: não estabelece {{c1::temporalidade}}.', 'temporalidade', 'diferenciacao', ['causalidade']),
      m('Sem temporalidade, não se conclui {{c1::causalidade}}.', 'causalidade', 'prova', ['causalidade']),
      m('No transversal, causalidade reversa pode confundir direção da {{c1::associação}}.', 'associação', 'mecanismo', ['causalidade']),
      m('Viés de Neyman também é chamado de viés de {{c1::prevalência}}.', 'prevalência', 'definicao', ['vies']),
      m('Doenças de curta duração podem ficar {{c1::sub-representadas}} no transversal.', 'sub-representadas', 'mecanismo', ['vies']),
      m('Para desfechos muito raros, transversal exige amostra {{c1::muito grande}}.', 'muito grande', 'clinica', ['amostra']),
      m('Inquéritos populacionais nacionais frequentemente usam desenho {{c1::transversal}}.', 'transversal', 'clinica', ['inqueritos']),
      m('Transversal é útil para planejar serviços com base em {{c1::carga de doença}}.', 'carga de doença', 'clinica', ['planejamento']),
      m('Em regressão logística transversal, OR pode superestimar efeito quando prevalência é {{c1::alta}}.', 'alta', 'prova', ['or-rp']),
      m('Fotografia epidemiológica descreve situação de saúde em {{c1::ponto único}}.', 'ponto único', 'definicao', ['transversal']),
      m('Estudos transversais podem avaliar múltiplas exposições e {{c1::desfechos}}.', 'desfechos', 'mecanismo', ['transversal']),
      m('Repetir transversais ao longo de anos permite analisar {{c1::tendências}}.', 'tendências', 'clinica', ['monitoramento']),
      m('A unidade de análise usual é o {{c1::indivíduo}} da população-alvo.', 'indivíduo', 'definicao', ['transversal']),
      m('Transversal não calcula incidência por falta de componente {{c1::temporal}}.', 'temporal', 'prova', ['incidencia']),
      m('RP usa prevalência nos expostos dividida pela prevalência nos {{c1::não expostos}}.', 'não expostos', 'definicao', ['rp']),
      m('Transversal é excelente para estimar {{c1::prevalência}}, não para provar causa.', 'prevalência', 'diferenciacao', ['transversal']),
      m('A escolha de amostra representativa é essencial para validade {{c1::externa}}.', 'externa', 'mecanismo', ['amostragem']),
      m('A interpretação correta do transversal prioriza associação e geração de {{c1::hipóteses}}.', 'hipóteses', 'prova', ['transversal'])
    ],
    extra: [
      e('Regressão de Poisson com variância robusta é opção para estimar {{c1::RP}}.', 'RP', ['modelagem']),
      e('Em inquéritos domiciliares, ponderação amostral ajusta estimativas {{c1::populacionais}}.', 'populacionais', ['amostragem']),
      e('PNS é exemplo brasileiro de inquérito {{c1::transversal}}.', 'transversal', ['inqueritos']),
      e('Survey com desenho complexo requer ajuste para {{c1::efeito de desenho}}.', 'efeito de desenho', ['amostragem']),
      e('Em prevalência alta, OR tende a {{c1::superestimar}} RP.', 'superestimar', ['or-rp'])
    ]
  },
  bioe_a9: {
    material: [
      m('Na coorte, participantes são selecionados conforme {{c1::exposição}}.', 'exposição', 'definicao', ['coorte']),
      m('No início da coorte, participantes devem estar livres do {{c1::desfecho}}.', 'desfecho', 'definicao', ['coorte']),
      m('Coorte prospectiva acompanha indivíduos para o {{c1::futuro}}.', 'futuro', 'definicao', ['coorte']),
      m('Coorte retrospectiva usa registros do {{c1::passado}}.', 'passado', 'definicao', ['coorte']),
      m('Mesmo retrospectiva, a lógica da coorte segue exposição para {{c1::desfecho}}.', 'desfecho', 'prova', ['coorte']),
      m('Coorte permite medir diretamente {{c1::incidência}}.', 'incidência', 'diferenciacao', ['frequencia']),
      m('A medida clássica da coorte é o {{c1::risco relativo}}.', 'risco relativo', 'definicao', ['rr']),
      m('RR = incidência em expostos dividido pela incidência em {{c1::não expostos}}.', 'não expostos', 'definicao', ['rr']),
      m('Risco atribuível na coorte é diferença absoluta de {{c1::incidência}}.', 'incidência', 'definicao', ['ra']),
      m('Coorte é forte para múltiplos {{c1::desfechos}} de uma mesma exposição.', 'desfechos', 'mecanismo', ['coorte']),
      m('A temporalidade clara é vantagem chave para inferência {{c1::causal}}.', 'causal', 'diferenciacao', ['causalidade']),
      m('Perda de seguimento diferencial pode introduzir viés de {{c1::seleção}}.', 'seleção', 'prova', ['vies']),
      m('Desfechos raros tornam coorte menos {{c1::eficiente}}.', 'eficiente', 'clinica', ['coorte']),
      m('Estudos de longa latência exigem coortes de alto custo e {{c1::tempo}}.', 'tempo', 'clinica', ['coorte']),
      m('Em coorte ocupacional, comparar com população geral pode gerar viés do trabalhador {{c1::saudável}}.', 'saudável', 'prova', ['vies']),
      m('Na tabela 2x2 de coorte, incidência expostos é a/(a+{{c1::b}}).', 'b', 'prova', ['2x2']),
      m('Na tabela 2x2 de coorte, incidência não expostos é c/(c+{{c1::d}}).', 'd', 'prova', ['2x2']),
      m('Coorte está acima de caso-controle na evidência observacional por garantir {{c1::temporalidade}}.', 'temporalidade', 'diferenciacao', ['evidencia']),
      m('Medição da exposição antes do desfecho reduz viés de {{c1::recall}}.', 'recall', 'mecanismo', ['vies']),
      m('Coortes são adequadas para estudar fatores de risco {{c1::comuns}}.', 'comuns', 'clinica', ['coorte']),
      m('A unidade de seguimento pode ser pessoa-tempo em coortes {{c1::dinâmicas}}.', 'dinâmicas', 'definicao', ['incidencia']),
      m('NNH deriva do inverso do risco absoluto de {{c1::dano}}.', 'dano', 'clinica', ['medidas']),
      m('Coorte retrospectiva depende da qualidade dos {{c1::registros}} existentes.', 'registros', 'mecanismo', ['coorte']),
      m('Perdas acima de limiar alto reduzem validade interna da {{c1::coorte}}.', 'coorte', 'prova', ['vies']),
      m('Uma análise correta de coorte sempre separa expostos e {{c1::não expostos}}.', 'não expostos', 'mecanismo', ['coorte'])
    ],
    extra: [
      e('Modelos de Cox estimam {{c1::hazard ratio}} em seguimento temporal.', 'hazard ratio', ['sobrevida']),
      e('Curva de Kaplan-Meier descreve probabilidade de {{c1::sobrevida}} ao longo do tempo.', 'sobrevida', ['sobrevida']),
      e('Censura à direita ocorre quando o evento não acontece até fim do {{c1::seguimento}}.', 'seguimento', ['sobrevida']),
      e('Person-time permite lidar com tempos de observação {{c1::diferentes}}.', 'diferentes', ['incidencia']),
      e('Coorte aberta permite entrada e saída de participantes ao longo do {{c1::tempo}}.', 'tempo', ['coorte'])
    ]
  },
  bioe_a10: {
    material: [
      m('No caso-controle, a seleção inicial é feita pelo {{c1::desfecho}}.', 'desfecho', 'definicao', ['caso-controle']),
      m('Grupo com doença é chamado de {{c1::casos}}.', 'casos', 'definicao', ['caso-controle']),
      m('Grupo sem doença comparável é chamado de {{c1::controles}}.', 'controles', 'definicao', ['caso-controle']),
      m('A medida principal no caso-controle é o {{c1::odds ratio}}.', 'odds ratio', 'definicao', ['or']),
      m('Na tabela 2x2, OR pode ser calculado por produto {{c1::cruzado}}.', 'cruzado', 'mecanismo', ['2x2']),
      m('Fórmula do OR é (a x d)/(b x {{c1::c}}).', 'c', 'prova', ['2x2']),
      m('Caso-controle é particularmente eficiente para doenças {{c1::raras}}.', 'raras', 'clinica', ['caso-controle']),
      m('Design caso-controle permite estudar múltiplas {{c1::exposições}} para um desfecho.', 'exposições', 'mecanismo', ['caso-controle']),
      m('Como proporção de casos/controles é definida pelo pesquisador, não se calcula {{c1::incidência}}.', 'incidência', 'diferenciacao', ['medidas']),
      m('Quando doença é rara, OR se aproxima do {{c1::RR}}.', 'RR', 'prova', ['or-rr']),
      m('O principal viés clássico no caso-controle é o de {{c1::recall}}.', 'recall', 'prova', ['vies']),
      m('Casos podem lembrar exposições passadas de forma mais {{c1::intensa}}.', 'intensa', 'mecanismo', ['vies']),
      m('Controles devem vir da mesma {{c1::população-fonte}} dos casos.', 'população-fonte', 'definicao', ['selecao']),
      m('Selecionar controles inadequados gera viés de {{c1::seleção}}.', 'seleção', 'prova', ['vies']),
      m('Uso de controles hospitalares pode introduzir viés de {{c1::Berkson}}.', 'Berkson', 'prova', ['vies']),
      m('Casos incidentes são preferíveis a prevalentes para reduzir viés de {{c1::sobrevivência}}.', 'sobrevivência', 'mecanismo', ['selecao']),
      m('Pareamento por idade/sexo é estratégia para controlar {{c1::confundimento}}.', 'confundimento', 'mecanismo', ['pareamento']),
      m('Pareamento exige análise estatística {{c1::apropriada}} para não enviesar efeito.', 'apropriada', 'prova', ['pareamento']),
      m('Caso-controle é desenho retrospectivo do efeito para a {{c1::causa}}.', 'causa', 'definicao', ['caso-controle']),
      m('Para exposições muito raras, caso-controle pode ter baixo {{c1::poder}}.', 'poder', 'clinica', ['caso-controle']),
      m('OR > 1 sugere associação positiva entre exposição e {{c1::doença}}.', 'doença', 'prova', ['or']),
      m('OR < 1 sugere efeito {{c1::protetor}} da exposição.', 'protetor', 'prova', ['or']),
      m('Rapidez e custo menor são vantagens do caso-{{c1::controle}}.', 'controle', 'clinica', ['caso-controle']),
      m('Coorte e caso-controle diferem porque a primeira seleciona pela {{c1::exposição}}.', 'exposição', 'diferenciacao', ['coorte-vs-cc']),
      m('No caso-controle, interpretação causal exige cautela por risco de {{c1::viés}}.', 'viés', 'prova', ['causalidade'])
    ],
    extra: [
      e('Odds é razão entre probabilidade do evento e probabilidade de {{c1::não evento}}.', 'não evento', ['conceitos']),
      e('Regressão logística estima OR ajustado para variáveis de {{c1::confusão}}.', 'confusão', ['modelagem']),
      e('Matching individual 1:1 é forma de {{c1::pareamento}}.', 'pareamento', ['metodologia']),
      e('Estudo nested case-control seleciona casos e controles dentro de uma {{c1::coorte}}.', 'coorte', ['designs']),
      e('Viés de memória tende a aumentar quando exposição é muito {{c1::antiga}}.', 'antiga', ['vies'])
    ]
  },
  bioe_a11: {
    material: [
      m('No estudo ecológico, a unidade de análise é o {{c1::grupo}} populacional.', 'grupo', 'definicao', ['ecologico']),
      m('Dados usados em estudos ecológicos são geralmente {{c1::agregados}}.', 'agregados', 'definicao', ['ecologico']),
      m('Comparar estados por taxa de mortalidade é exemplo de análise {{c1::ecológica}}.', 'ecológica', 'definicao', ['ecologico']),
      m('Série temporal ecológica observa variação ao longo do {{c1::tempo}}.', 'tempo', 'definicao', ['ecologico']),
      m('Comparação geográfica ecológica contrasta regiões no mesmo {{c1::período}}.', 'período', 'definicao', ['ecologico']),
      m('Uso clássico do estudo ecológico é geração de {{c1::hipóteses}}.', 'hipóteses', 'mecanismo', ['ecologico']),
      m('Outra utilidade é avaliar impacto de políticas {{c1::coletivas}}.', 'coletivas', 'clinica', ['ecologico']),
      m('Falácia ecológica é inferir nível individual a partir do nível {{c1::grupal}}.', 'grupal', 'definicao', ['falacia']),
      m('Falácia ecológica não invalida totalmente a associação {{c1::populacional}}.', 'populacional', 'diferenciacao', ['falacia']),
      m('Erro central é extrapolar dado de grupo para cada {{c1::indivíduo}}.', 'indivíduo', 'prova', ['falacia']),
      m('Confundimento ecológico ocorre por variável agregada não {{c1::controlada}}.', 'controlada', 'mecanismo', ['vies']),
      m('Estudos ecológicos são rápidos por usar bases de dados {{c1::secundárias}}.', 'secundárias', 'clinica', ['ecologico']),
      m('Dado agregado pode ocultar heterogeneidade {{c1::interna}} do grupo.', 'interna', 'mecanismo', ['ecologico']),
      m('Correlação ecológica entre variáveis não prova {{c1::causalidade}} individual.', 'causalidade', 'prova', ['falacia']),
      m('Em saúde pública, ecológico é útil para {{c1::vigilância}} de tendências.', 'vigilância', 'clinica', ['ecologico']),
      m('Intervenção coletiva, como fluoretação, pode ser avaliada por desenho {{c1::ecológico}}.', 'ecológico', 'clinica', ['ecologico']),
      m('Quando exposição só existe em nível de cidade, o desenho viável pode ser {{c1::ecológico}}.', 'ecológico', 'diferenciacao', ['ecologico']),
      m('Série temporal ecológica pode analisar antes e depois de {{c1::política}} pública.', 'política', 'mecanismo', ['ecologico']),
      m('Análise ecológica deve evitar conclusão automática para o nível {{c1::individual}}.', 'individual', 'prova', ['falacia']),
      m('Associação de grupo pode refletir variável socioeconômica {{c1::subjacente}}.', 'subjacente', 'mecanismo', ['confundimento']),
      m('Estudo ecológico é observacional e não controla totalmente confundidores {{c1::individuais}}.', 'individuais', 'diferenciacao', ['vies']),
      m('Uso de taxa por 100 mil habitantes é típico de indicador {{c1::agregado}}.', 'agregado', 'definicao', ['indicadores']),
      m('Ecológico é excelente para hipóteses, mas fraco para inferência {{c1::causal}} individual.', 'causal', 'prova', ['falacia']),
      m('A interpretação correta distingue nível de análise {{c1::coletivo}} e individual.', 'coletivo', 'mecanismo', ['falacia']),
      m('No ecológico, a pergunta principal é sobre população, não sobre {{c1::paciente}}.', 'paciente', 'diferenciacao', ['ecologico'])
    ],
    extra: [
      e('Modelo joinpoint é usado para tendência temporal em série {{c1::ecológica}}.', 'ecológica', ['analise']),
      e('Moran I é índice para autocorrelação {{c1::espacial}}.', 'espacial', ['geoepidemiologia']),
      e('Mapas coropléticos representam taxas por unidade {{c1::geográfica}}.', 'geográfica', ['geoepidemiologia']),
      e('Estudo ecológico pode usar dados do {{c1::DATASUS}} como fonte secundária.', 'DATASUS', ['fontes']),
      e('Correlação de Pearson mede associação linear entre duas variáveis {{c1::contínuas}} agregadas.', 'contínuas', ['correlacao'])
    ]
  },
  bioe_a12: {
    material: [
      m('Ensaio clínico randomizado é desenho {{c1::experimental}} para avaliar intervenção.', 'experimental', 'definicao', ['rct']),
      m('No RCT, participantes são alocados por {{c1::randomização}}.', 'randomização', 'definicao', ['rct']),
      m('Randomização equilibra confundidores conhecidos e {{c1::desconhecidos}}.', 'desconhecidos', 'mecanismo', ['rct']),
      m('Grupo comparador pode receber {{c1::placebo}} ou tratamento padrão.', 'placebo', 'definicao', ['rct']),
      m('Mascaramento reduz viés de avaliação de {{c1::desfecho}}.', 'desfecho', 'mecanismo', ['cegamento']),
      m('No duplo-cego, participante e pesquisador desconhecem a {{c1::alocação}}.', 'alocação', 'definicao', ['cegamento']),
      m('Análise por intenção de tratar preserva benefício da {{c1::randomização}}.', 'randomização', 'definicao', ['analise']),
      m('Análise per-protocol inclui quem completou o {{c1::protocolo}}.', 'protocolo', 'diferenciacao', ['analise']),
      m('ITT tende a refletir melhor efetividade de mundo {{c1::real}}.', 'real', 'clinica', ['analise']),
      m('Per-protocol pode superestimar efeito por seleção de aderentes {{c1::completos}}.', 'completos', 'prova', ['analise']),
      m('RR em RCT compara risco no tratamento e no {{c1::controle}}.', 'controle', 'definicao', ['medidas']),
      m('RRR é calculada como 1 menos {{c1::RR}}.', 'RR', 'definicao', ['medidas']),
      m('RRA é risco controle menos risco de {{c1::tratamento}}.', 'tratamento', 'definicao', ['medidas']),
      m('NNT é inverso da {{c1::RRA}}.', 'RRA', 'definicao', ['medidas']),
      m('NNT baixo indica intervenção mais {{c1::eficaz}}.', 'eficaz', 'clinica', ['medidas']),
      m('NNH quantifica número necessário para causar {{c1::dano}}.', 'dano', 'clinica', ['medidas']),
      m('RRR pode impressionar sem mostrar impacto absoluto no {{c1::paciente}}.', 'paciente', 'prova', ['medidas']),
      m('Para prática clínica, RRA e NNT são medidas mais {{c1::interpretáveis}}.', 'interpretáveis', 'clinica', ['medidas']),
      m('Ensaio comunitário randomiza {{c1::grupos}} em vez de indivíduos.', 'grupos', 'diferenciacao', ['ensaio-comunitario']),
      m('No ensaio comunitário, a unidade pode ser escola, bairro ou {{c1::município}}.', 'município', 'definicao', ['ensaio-comunitario']),
      m('Correlação intraclasse deve ser considerada em ensaios por {{c1::clusters}}.', 'clusters', 'mecanismo', ['ensaio-comunitario']),
      m('Fase I farmacológica foca segurança e {{c1::dose}} inicial.', 'dose', 'definicao', ['fases']),
      m('Fase III busca eficácia definitiva para {{c1::aprovação}} regulatória.', 'aprovação', 'definicao', ['fases']),
      m('Fase IV acompanha farmacovigilância pós-{{c1::comercialização}}.', 'comercialização', 'definicao', ['fases']),
      m('RCT bem conduzido fica acima dos observacionais na hierarquia de {{c1::evidência}}.', 'evidência', 'diferenciacao', ['rct'])
    ],
    extra: [
      e('Checklist CONSORT padroniza relato de ensaios {{c1::randomizados}}.', 'randomizados', ['relato']),
      e('Alocação oculta em RCT é chamada de allocation {{c1::concealment}}.', 'concealment', ['metodologia']),
      e('Em cluster RCT, cálculo amostral inclui coeficiente de correlação {{c1::intraclasse}}.', 'intraclasse', ['ensaio-comunitario']),
      e('Placebo controlado pode ser antiético quando existe tratamento {{c1::eficaz}} estabelecido.', 'eficaz', ['bioetica']),
      e('Registro prévio de ensaio clínico em plataforma pública melhora {{c1::transparência}}.', 'transparência', ['integridade'])
    ]
  }
};

function toCard(tema, item) {
  return {
    materia: 'bioestatistica',
    tema,
    frente: item.frente,
    verso: item.verso,
    explicacao: item.explicacao || '',
    dificuldade: item.dificuldade || 2,
    categoria: item.categoria,
    origem: item.origem,
    tags: item.tags
  };
}

const regenerated = [];
for (const [tema, parts] of Object.entries(byTema)) {
  if (parts.material.length !== 25) throw new Error(`Tema ${tema} sem 25 material`);
  if (parts.extra.length !== 5) throw new Error(`Tema ${tema} sem 5 extra`);
  parts.material.forEach((x) => regenerated.push(toCard(tema, x)));
  parts.extra.forEach((x) => regenerated.push(toCard(tema, x)));
}

const clozeOk = regenerated.every((c) => (String(c.frente).match(/\{\{c1::[^}]+\}\}/g) || []).length === 1);
if (!clozeOk) throw new Error('Falha: card sem exatamente uma cloze');
const versoOk = regenerated.every((c) => {
  const m = String(c.frente).match(/\{\{c1::([^}|]+)(?:\|[^}]+)?\}\}/);
  return m && String(c.verso).trim().toLowerCase() === String(m[1]).trim().toLowerCase();
});
if (!versoOk) throw new Error('Falha: verso diferente do preenchimento');

const kept = cards.filter((c) => c.materia !== 'bioestatistica');
let nextId = kept.reduce((m, c) => Math.max(m, Number(c.id) || 0), 0) + 1;
regenerated.forEach((c) => {
  c.id = nextId++;
});

data.flashcards = [...kept, ...regenerated];
fs.writeFileSync(path, JSON.stringify(data, null, 2) + '\n', 'utf8');

const resumo = regenerated.reduce((acc, c) => {
  if (!acc[c.tema]) acc[c.tema] = { total: 0, material: 0, extra: 0 };
  acc[c.tema].total += 1;
  acc[c.tema][c.origem] += 1;
  return acc;
}, {});

console.log('Bioestatistica regenerada em cloze:', regenerated.length, 'cards');
Object.entries(resumo).forEach(([tema, r]) => {
  console.log(`${tema}: total=${r.total}, material=${r.material}, extra=${r.extra}`);
});
