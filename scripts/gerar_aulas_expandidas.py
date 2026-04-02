#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Gera aulas expandidas para TODAS as 29 disciplinas do MedUni9.
Cada subtópico do conteúdo programático = 1 aula.
"""

import json
import os

MATERIAS_PATH = os.path.join(os.path.dirname(__file__), "data", "materias.json")

# ============================================================
# AULAS EXPANDIDAS — extraídas dos planos de ensino reais
# ============================================================

AULAS = {}

# ── MÓDULO 1 ──────────────────────────────────────────────────

AULAS["sus"] = [
    ("sus_a1", "Processo Saúde-Doença e Determinantes Sociais", "Conceito de saúde-doença, DSS e vulnerabilidade: condições econômicas e sociais que afetam a saúde."),
    ("sus_a2", "Antecedentes Históricos do SUS — Período Colonial ao Regime Militar", "Período Colonial Imperial (1500-1889), Primeira República (1889-1930), Era Vargas (1930-1945), Redemocratização (1945-1963) e Regime Militar (1964-1984)."),
    ("sus_a3", "Antecedentes Históricos do SUS — Nova República e Reforma Sanitária", "Período da Nova República (1985-1988): Movimento pela Reforma Sanitária, 8ª Conferência Nacional de Saúde e a criação do SUS."),
    ("sus_a4", "O SUS e as Leis Orgânicas da Saúde", "O SUS na Constituição Federal, Leis 8.080 e 8.142, princípios doutrinários e organizativos."),
    ("sus_a5", "Pacto pela Vida", "Saúde do Idoso, Controle do Câncer de Colo e Mama, Redução da Mortalidade Infantil/Materna e Doenças Emergentes/Endemias."),
    ("sus_a6", "Pacto pela Gestão — RAS e Regionalização", "Redes de Atenção à Saúde, pacto pela gestão, Decreto 7508/11 e contratualização de serviços."),
    ("sus_a7", "Pacto em Defesa do SUS", "Fortalecimento do SUS como política de Estado, participação social e financiamento."),
    ("sus_a8", "PNAB e Estratégia Saúde da Família", "Política Nacional de Atenção Básica, implantação e operacionalização da ESF, equipe mínima e atributos da APS."),
    ("sus_a9", "Ferramentas de Abordagem Familiar e Comunitária", "Genograma, ecomapa e Educação Popular em Saúde no contexto territorial."),
]

AULAS["semiologia1"] = [
    ("semio1_a1", "Fundamentos da Semiologia Musculoesquelética", "Princípios de semiologia clínica aplicados ao sistema locomotor; revisão anatômica e biomecânica."),
    ("semio1_a2", "Anamnese Dirigida do Aparelho Locomotor", "Coleta de história clínica: dor, rigidez, fraqueza, limitação de movimento, história ocupacional e esportiva."),
    ("semio1_a3", "Exame Físico — Inspeção", "Técnicas de inspeção postural, avaliação de deformidades e identificação de padrões anormais."),
    ("semio1_a4", "Exame Físico — Palpação", "Técnicas de palpação superficial e profunda de estruturas musculoesqueléticas."),
    ("semio1_a5", "Testes de Mobilidade e Força Muscular", "Amplitude de movimento, testes funcionais, escala de força muscular e testes especiais."),
    ("semio1_a6", "Síndromes Musculoesqueléticas e Propedêutica", "Correlação com diagnósticos diferenciais; síndromes musculoesqueléticas; propedêutica complementar."),
    ("semio1_a7", "Prática Simulada — Manequins e Pacientes Padronizados", "Inspeção, palpação e testes em manequins; cenários com atores para ombro, joelho e coluna."),
    ("semio1_a8", "Prática Real — Ambulatório Supervisionado", "Anamnese e exame físico em pacientes reais sob supervisão; ética e consentimento."),
    ("semio1_a9", "Reunião Clínica — Casos Musculoesqueléticos", "Discussão de casos clínicos reais e simulados; diagnósticos diferenciais e planejamento propedêutico."),
]

AULAS["bmf1"] = [
    # 1. Conceitos gerais
    ("bmf1_a1", "Introdução ao Estudo da Anatomia Humana", "Posição anatômica, planos de delimitação e secção, eixos do corpo humano."),
    ("bmf1_a2", "Introdução aos Tecidos Humanos", "Conceitos, tipos de tecido do corpo humano e suas principais diferenças morfológicas."),
    # 2. Sistema Esquelético
    ("bmf1_a3", "Generalidades do Sistema Esquelético", "Classificação dos ossos, funções do esqueleto e organização geral."),
    ("bmf1_a4", "Tecido Conjuntivo — Células e Matriz", "Células do tecido conjuntivo e composição da matriz conjuntiva."),
    ("bmf1_a5", "Tecido Ósseo — Estrutura e Ossificação", "Características morfológicas do tecido ósseo e processo de ossificação intramembranosa e endocondral."),
    ("bmf1_a6", "Prática — Ossos da Coluna, Membros Superiores e Inferiores", "Identificação de ossos e estruturas do tecido ósseo e conjuntivo em laboratório."),
    # 3. Sistema Articular
    ("bmf1_a7", "Generalidades do Sistema Articular", "Classificação articular (fibrosas, cartilaginosas, sinoviais) e componentes das articulações."),
    ("bmf1_a8", "Tecido Cartilaginoso", "Tipos de cartilagem (hialina, elástica, fibrosa) e suas funções."),
    ("bmf1_a9", "Prática — Articulações da Coluna e Membros", "Articulações da coluna vertebral, membro superior e membro inferior em laboratório."),
    # 4. Sistema Muscular
    ("bmf1_a10", "Generalidades do Sistema Muscular", "Classificação muscular (esquelético, cardíaco, liso), funções dos músculos."),
    ("bmf1_a11", "Histologia do Tecido Muscular", "Estrutura histológica dos tipos de tecido muscular e suas diferenças."),
    ("bmf1_a12", "Fisiologia da Contração Muscular", "Mecanismo molecular da contração, acoplamento excitação-contração."),
    ("bmf1_a13", "Prática — Músculos da Coluna, Membros Superiores e Inferiores", "Identificação de músculos do dorso, MS e MI; histologia do tecido muscular; vasos e nervos."),
    # 5. Sistema Tegumentar
    ("bmf1_a14", "Tegumento — Tecido Epitelial de Revestimento", "Classificação e funções dos epitélios de revestimento; camadas da pele."),
    ("bmf1_a15", "Tegumento — Tecido Epitelial Glandular", "Classificação de glândulas (exócrinas e endócrinas) e mecanismos de secreção."),
    ("bmf1_a16", "Prática — Histologia do Tegumento e Tecido Adiposo", "Tecido epitelial de revestimento, glandular, conjuntivo e adiposo em lâminas."),
    # 6. Sistema Digestório
    ("bmf1_a17", "Anatomia da Boca, Língua, Glândulas Salivares e Faringe", "Cavidade oral, língua, glândulas salivares maiores/menores e faringe."),
    ("bmf1_a18", "Anatomia da Parede Abdominal e Peritônio", "Músculos da parede abdominal, bainha do reto, peritônio e suas reflexões."),
    ("bmf1_a19", "Anatomia dos Intestinos Delgado e Grosso", "Estrutura macroscópica do duodeno, jejuno, íleo, ceco, cólons, sigmoide e reto."),
    ("bmf1_a20", "Inervação e Vascularização Gastrointestinal", "Artérias mesentéricas, tronco celíaco, drenagem venosa portal e inervação autonômica do TGI."),
    ("bmf1_a21", "Anatomia do Fígado, Vias Biliares e Pâncreas", "Segmentação hepática, vesícula biliar, ductos biliares e anatomia do pâncreas."),
    ("bmf1_a22", "Prática — Sistema Digestório em Anatomia", "Identificação de boca, faringe, parede abdominal, intestinos, fígado, vias biliares e pâncreas."),
]

AULAS["pmh"] = [
    # 1. Fundamentos
    ("pmh_a1", "Bioenergética e Termodinâmica do Metabolismo", "Anabolismo e catabolismo, ATP, NAD+, FAD, compartimentalização celular."),
    ("pmh_a2", "Regulação Metabólica Geral", "Mecanismos alostéricos, covalentes e genéticos; insulina, glucagon e catecolaminas; epigenética."),
    # 2. Carboidratos
    ("pmh_a3", "Glicólise e Gliconeogênese", "Etapas, enzimas-chave e regulação da glicólise e gliconeogênese."),
    ("pmh_a4", "Ciclo de Krebs e Fosforilação Oxidativa", "Produção de energia e cadeia transportadora de elétrons."),
    ("pmh_a5", "Metabolismo de Glicogênio e Via das Pentoses", "Glicogênese, glicogenólise e via das pentoses-fosfato."),
    ("pmh_a6", "Regulação Hormonal e Aplicações Clínicas dos Carboidratos", "Controle por insulina/glucagon/cortisol; diabetes mellitus tipo 1 e 2; galactosemia; deficiência de G6PD."),
    # 3. Lipídios
    ("pmh_a7", "Beta-oxidação e Síntese de Ácidos Graxos", "Degradação e biossíntese de ácidos graxos; corpos cetônicos."),
    ("pmh_a8", "Colesterol, Lipoproteínas e Homeostase Lipídica", "Metabolismo do colesterol e lipoproteínas; papel do fígado e tecido adiposo."),
    ("pmh_a9", "Aplicações Clínicas dos Lipídios", "Dislipidemias, esteatose hepática, cetoacidose diabética, síndrome metabólica e aterosclerose."),
    # 4. Proteínas
    ("pmh_a10", "Transaminação, Desaminação e Ciclo da Ureia", "Catabolismo de aminoácidos, ciclo da ureia e balanço nitrogenado."),
    ("pmh_a11", "Aplicações Clínicas de Proteínas e Aminoácidos", "Fenilcetonúria, hiperamonemia, acidemias orgânicas, desnutrição e caquexia."),
    # 5. Nucleotídeos
    ("pmh_a12", "Biossíntese e Degradação de Nucleotídeos", "Vias de novo e salvage de purinas e pirimidinas; metabolismo do ácido úrico; gota e Lesch-Nyhan."),
    # 6. Integração
    ("pmh_a13", "Integração Metabólica entre Órgãos", "Fígado, músculo, tecido adiposo, cérebro; ciclos de Cori e alanina-glicose; microbiota intestinal."),
    ("pmh_a14", "Adaptações Metabólicas e Aplicações Clínicas", "Respostas ao jejum prolongado, exercício, estresse e gravidez; obesidade e caquexia oncológica."),
]

AULAS["pe1"] = [
    ("pe1_a1", "Organização da Atenção Básica e Território", "Gestão administrativa da AB no SUS, histórico dos bairros da STS, mapeamento de equipamentos."),
    ("pe1_a2", "Equipe Multiprofissional e Papel do ACS", "Atribuições do Agente Comunitário de Saúde na territorialização e acompanhamento de famílias."),
    ("pe1_a3", "Roteiro de Apropriação do Território e Primeira Visita", "Elaboração de roteiro para aplicação no primeiro dia de visita prática à UBS."),
    ("pe1_a4", "Promoção da Saúde — Higiene Bucal e Corporal", "Ações educativas sobre higiene bucal e corporal na comunidade."),
    ("pe1_a5", "Promoção da Saúde — Alimentação Saudável e Atividade Física", "Intervenções sobre alimentação saudável e prática de atividade física."),
    ("pe1_a6", "Promoção da Saúde — Tabagismo e Prevenção de Quedas", "Combate ao tabagismo e prevenção de quedas em idosos."),
    ("pe1_a7", "Materiais Educativos e Relatório Extensionista", "Produção de infográficos, folders e cartilhas; artigo/relato de experiência."),
]

# ── MÓDULO 2 ──────────────────────────────────────────────────

AULAS["bmf2"] = [
    # Sistema Cardiocirculatório - Teoria
    ("bmf2_a1", "Potencial de Ação Cardíaco e Sistema de Condução", "Potencial de ação no marcapasso e músculo cardíaco; anatomia do sistema de condução."),
    ("bmf2_a2", "Propriedades do Músculo Cardíaco", "Propriedades do músculo cardíaco e respostas fisiológicas cardiovasculares."),
    ("bmf2_a3", "Circulação Sistêmica e Pulmonar; Tipos de Vasos", "Morfologia e diferenciação dos vasos sanguíneos; circulação sistêmica e pulmonar."),
    ("bmf2_a4", "Câmaras, Valvas e Ciclo Cardíaco", "Morfologia das câmaras e valvas cardíacas; fases do ciclo cardíaco."),
    ("bmf2_a5", "Histologia Cardíaca", "Endocárdio, miocárdio e epicárdio; diferenciação histológica."),
    ("bmf2_a6", "ECG e Ciclo Cardíaco", "Relação das ondas do ECG com o ciclo cardíaco e propagação do potencial de ação."),
    ("bmf2_a7", "Débito Cardíaco e Lei de Starling", "Débito cardíaco, métodos de determinação e como o estiramento aumenta a fração de ejeção."),
    ("bmf2_a8", "Inervação do Coração e Regulação da Pressão Arterial", "Inervação simpática/parassimpática; pressão arterial; controle local, neural e humoral."),
    ("bmf2_a9", "Circulação Coronariana, Microcirculação e Linfática", "Circulação coronariana nas fases do ciclo; microcirculação; sistema linfático; isquemia."),
    # Sistema Respiratório - Teoria
    ("bmf2_a10", "Anatomia da Caixa Torácica e Vias Aéreas", "Morfologia da caixa torácica, vias aéreas (zona de condução e troca), surfactante pulmonar."),
    ("bmf2_a11", "Histologia do Sistema Respiratório", "Túnicas mucosa, submucosa, adventícia; pneumócitos tipo I e II; histologia alveolar."),
    ("bmf2_a12", "Volumes, Capacidades e Mecânica Pulmonar", "Capacidades e volumes pulmonares; complacência e elastância; músculos respiratórios."),
    ("bmf2_a13", "Trocas Gasosas e Relação Ventilação/Perfusão", "Troca gasosa, zonas de West, distribuição de perfusão e ventilação."),
    ("bmf2_a14", "Controle Central da Respiração", "Centro respiratório central, quimiorreceptores periféricos e resposta ao exercício."),
    # Prática
    ("bmf2_a15", "Prática — Anatomia e Histologia Cardiovascular", "Laboratório: circulação sistêmica/pulmonar, vasos, coração, câmaras, valvas, histologia cardíaca e linfóide."),
    ("bmf2_a16", "Prática — Anatomia e Histologia Respiratória", "Laboratório: vias aéreas, pulmões, pleura, diafragma e histologia do sistema respiratório."),
]

AULAS["semiologia2"] = [
    ("semio2_a1", "Fundamentos da Semiologia Cardiorrespiratória", "Princípios de semiologia clínica; revisão anatômica e fisiológica do coração, vasos, pulmões e vias respiratórias."),
    ("semio2_a2", "Anamnese Cardiorrespiratória", "Dispneia, dor torácica, palpitações, tosse; história patológica e fatores de risco (tabagismo, HAS, DM)."),
    ("semio2_a3", "Exame Físico Cardiovascular", "Inspeção (turgência jugular), palpação (frêmito, pulso), percussão (área cardíaca), ausculta (bulhas, sopros)."),
    ("semio2_a4", "Exame Físico Respiratório", "Inspeção (padrão respiratório, deformidades), palpação (expansibilidade, FTV), percussão, ausculta."),
    ("semio2_a5", "Interpretação de Achados e Síndromes Cardiorrespiratórias", "Correlação com diagnósticos diferenciais; síndromes; propedêutica complementar."),
    ("semio2_a6", "Prática Simulada — Manequins e Pacientes Padronizados", "Simulação de achados normais/patológicos (sopros, estertores, roncos); uso de estetoscópio."),
    ("semio2_a7", "Prática Real — Ambulatório Supervisionado", "Anamnese e exame físico em pacientes reais; ausculta cardíaca e pulmonar."),
    ("semio2_a8", "Reunião Clínica — Casos Cardiovasculares", "Discussão de casos reais e simulados do sistema cardiovascular; exames complementares."),
    ("semio2_a9", "Reunião Clínica — Casos Respiratórios", "Discussão de casos reais e simulados do sistema respiratório; diagnósticos diferenciais."),
]

AULAS["mad1"] = [
    ("mad1_a1", "Funções Básicas e Componentes do Sistema Imune", "Sistema imune na homeostase, interação com microbiota; proteínas (anticorpos, citocinas), leucócitos e órgãos linfoides."),
    ("mad1_a2", "Imunidade Inata", "Características (rapidez, inespecificidade), componentes celulares e humorais, sistema complemento."),
    ("mad1_a3", "Imunidade Adaptativa", "Especificidade e memória; linfócitos T (CD4+ e CD8+) e B; produção de anticorpos (classes e funções)."),
    ("mad1_a4", "Inflamação Aguda e Crônica", "Mecanismos de ativação da resposta inflamatória; sinais flogísticos; diferenças entre inflamação aguda e crônica."),
    ("mad1_a5", "Hemograma — Interpretação e Nomenclatura", "Parâmetros do hemograma, nomenclatura e utilização para diagnóstico e acompanhamento."),
    ("mad1_a6", "Imunização — Tipos de Vacinas", "Imunização ativa/passiva, natural/artificial; tipos de vacinas e calendário vacinal."),
    ("mad1_a7", "Imunodeficiências", "Imunodeficiências primárias e secundárias e suas consequências clínicas."),
    ("mad1_a8", "Tolerância Imunológica e Autoimunidade", "Tolerância central e periférica; perda de tolerância e doenças autoimunes."),
    ("mad1_a9", "Transplantes e Transfusão Sanguínea", "Tipos de transplantes, mecanismos de rejeição e princípios de transfusão sanguínea."),
    ("mad1_a10", "Hipersensibilidades (Tipos I a IV)", "Reações de hipersensibilidade imediata e tardia; mecanismos e exemplos clínicos."),
    ("mad1_a11", "Estrutura e Metabolismo Bacteriano", "Morfologia e metabolismo de bactérias Gram-positivas e Gram-negativas."),
    ("mad1_a12", "ISTs Bacterianas — Treponema, Neisseria e Chlamydia", "Sífilis, gonorreia e clamídia: mecanismos de invasão/evasão e resposta imune."),
    ("mad1_a13", "Infecções Bacterianas do Sistema Tegumentar", "Staphylococcus, Streptococcus e Mycobacterium leprae (hanseníase)."),
    ("mad1_a14", "Infecções Bacterianas do Sistema Urinário", "E. coli UPEC, cistite, uretrite e pielonefrite."),
    ("mad1_a15", "Infecções por Gram-negativas e Mycobacterium tuberculosis", "Infecções por enterobactérias, Pseudomonas e tuberculose."),
    ("mad1_a16", "Infecções Respiratórias Virais", "Influenza A, SARS-CoV-2 e vírus respiratórios: epidemiologia e resposta imune."),
    ("mad1_a17", "Infecções por Arbovírus", "Dengue, Zika, Chikungunya: transmissão, patogênese e diagnóstico."),
    ("mad1_a18", "Hepatites Virais (A, B, C, D, E)", "Hepatites virais: características, transmissão, diagnóstico e prevenção."),
    ("mad1_a19", "Infecção pelo HIV e AIDS", "HIV: ciclo replicativo, resposta imune, imunodeficiência e manejo."),
    ("mad1_a20", "Infecções por Herpesvírus", "HSV-1, HSV-2, VZV, EBV, CMV: manifestações clínicas e latência viral."),
    ("mad1_a21", "Infecções Virais do SNC e Doenças Exantemáticas", "Poliovírus; sarampo, rubéola e outras doenças exantemáticas virais."),
    ("mad1_a22", "Parasitoses — Protozoários (Chagas, Malária, Leishmaniose)", "Trypanosoma cruzi, Plasmodium spp., Leishmania: ciclo, patogênese e diagnóstico."),
    ("mad1_a23", "Helmintíases e Cestoidoses", "Estrongiloidíase, ancilostomíase, ascaridíase; Taenia solium e cisticercose."),
    ("mad1_a24", "Infecções Fúngicas Sistêmicas e Superficiais", "Histoplasma, Cryptococcus e dermatofitoses: diagnóstico e tratamento."),
]

AULAS["bcm1"] = [
    ("bcm1_a1", "Organização da Célula Eucariótica", "Organelas, citoesqueleto, dinâmica celular e estrutura do núcleo."),
    ("bcm1_a2", "Tampões Biológicos e Gasometria", "Distúrbios do equilíbrio ácido-base: acidoses e alcaloses respiratórias e metabólicas."),
    ("bcm1_a3", "Organização Genômica e Estrutura Gênica", "Estrutura de genes e cromossomos; polimorfismos; dogma central da biologia molecular."),
    ("bcm1_a4", "Sinalização Celular", "Receptores, mensageiros e efetores intracelulares; vias de sinalização em condições fisiológicas e fisiopatológicas."),
    ("bcm1_a5", "Replicação do DNA e PCR", "Duplicação do DNA in vivo; amplificação por PCR; antibióticos que atuam na replicação."),
    ("bcm1_a6", "Transcrição e Controle da Expressão Gênica", "Transcrição e regulação pré-transcricional, transcricional e pós-transcricional; antibióticos."),
    ("bcm1_a7", "Tradução de Proteínas", "Mecanismos de tradução; controle traducional e pós-traducional; antibióticos na tradução."),
    ("bcm1_a8", "Controle da Expressão Gênica e Doenças", "Integração dos níveis de regulação; modificações que causam câncer."),
    ("bcm1_a9", "Necrose vs Apoptose", "Diferenças entre tipos de morte celular; vias apoptóticas; ativadores e inibidores."),
    ("bcm1_a10", "Ciclo Celular — p53 e Rb1", "Pontos de checagem, controle do ciclo celular e contexto clínico de p53 e Rb1."),
    ("bcm1_a11", "Mutações, Agentes Mutagênicos e Reparo de DNA", "Mutações químicas/físicas/biológicas; BRCA1/BRCA2 e sistemas de reparo."),
    ("bcm1_a12", "Biotecnologias e Bioinformática", "Técnicas moleculares (PCR, eletroforese) e ferramentas de bioinformática diagnóstica."),
    ("bcm1_a13", "Genética Médica — Heredograma e Padrões de Herança", "Conceitos de locus, alelos, homozigose, heterozigose; herança mendeliana."),
    ("bcm1_a14", "Alterações Cromossômicas Numéricas", "Gametogênese; síndromes de Down, Edwards, Patau; aneuploidias."),
    ("bcm1_a15", "Alterações Cromossômicas Estruturais", "Síndrome de Cri-du-Chat; rearranjos e fenótipos sindrômicos."),
    ("bcm1_a16", "Distúrbios de Diferenciação Sexual", "Alterações dos cromossomos sexuais e disgenesia gonadal."),
    ("bcm1_a17", "Herança Ligada ao X — Dominante e Recessiva", "Síndrome do X Frágil, Rett, Duchenne e Hemofilia."),
    ("bcm1_a18", "Herança Autossômica Recessiva 1", "Anemia falciforme, talassemia e fibrose cística."),
    ("bcm1_a19", "Herança Autossômica Recessiva 2 — Erros Inatos do Metabolismo", "Fenilcetonúria, galactosemia e frutosemia."),
    ("bcm1_a20", "Herança Autossômica Dominante", "Huntington, Marfan, Doença Renal Policística, Hipercolesterolemia Familiar e Retinoblastoma."),
    ("bcm1_a21", "Herança Poligênica e Bases Genéticas do Câncer", "Oncogenes, genes supressores tumorais; iniciação, promoção e progressão tumoral."),
]

AULAS["indicadores"] = [
    ("ind_a1", "História da Epidemiologia", "Conceito, aplicações, personagens históricos e a epidemia de cólera em Londres."),
    ("ind_a2", "HND e Níveis de Prevenção", "História Natural da Doença; prevenção primária, secundária, terciária e quaternária."),
    ("ind_a3", "Transição Epidemiológica, Demográfica e Nutricional", "Fases de transição no Brasil e suas características."),
    ("ind_a4", "Indicadores Demográficos", "Principais indicadores demográficos, métodos de cálculo e fontes de informação."),
    ("ind_a5", "Indicadores de Morbidade", "Prevalência, incidência, taxa de ataque e densidade de incidência."),
    ("ind_a6", "Indicadores de Mortalidade Geral e Específica", "Taxa de mortalidade geral, proporcional, por causa, por sexo; SIM e PRO-AIM; declaração de óbito."),
    ("ind_a7", "Indicadores de Mortalidade Materno-Infantil e Perinatal", "Mortalidade infantil, neonatal precoce/tardia, pós-neonatal, perinatal e materna; letalidade."),
    ("ind_a8", "Sistemas de Informação em Saúde", "SIM, SINAN, DATASUS e fontes de dados epidemiológicos."),
    ("ind_a9", "Bioestatística — Conceitos e Tipos de Variáveis", "Definição de bioestatística, tipos de variáveis estatísticas e suas descrições."),
    ("ind_a10", "Análise Descritiva — Tendência Central e Dispersão", "Média, mediana, moda, variância, desvio padrão, coeficiente de variação."),
    ("ind_a11", "Análise Inferencial — Testes de Hipóteses", "Hipótese nula/alternativa, valor de p, significância, erro tipo I/II, intervalos de confiança."),
]

AULAS["ds"] = [
    ("ds_a1", "Desafios Socioambientais Globais e Saúde", "Poluição, mudanças climáticas, riscos socioambientais e seus impactos na saúde humana."),
    ("ds_a2", "Sustentabilidade, ODS e Saúde nas Cidades", "ODS da ONU, IDSC-BR e relação entre sustentabilidade e saúde."),
    ("ds_a3", "Políticas Públicas Socioambientais e Saúde no Brasil", "Saneamento, qualidade da água, biodiversidade e papel do profissional de saúde."),
]

# ── MÓDULO 3 ──────────────────────────────────────────────────

AULAS["bmf3"] = [
    # Módulo 1: Digestório
    ("bmf3_a1", "Anatomia Macro e Microscópica do Trato Digestivo", "Boca, faringe, esôfago, estômago, intestinos delgado e grosso, fígado, pâncreas, vesícula biliar."),
    ("bmf3_a2", "Histologia do Trato Digestivo", "Camadas da parede do TGI, mucosa, submucosa, muscular e serosa; glândulas."),
    ("bmf3_a3", "Fisiologia da Digestão — Motilidade, Secreções e Absorção", "Motilidade GI, secreções digestivas, absorção de nutrientes e metabolismo."),
    # Módulo 2: Renal
    ("bmf3_a4", "Anatomia dos Rins, Ureteres, Bexiga e Uretra", "Anatomia macroscópica e microscópica do sistema urinário."),
    ("bmf3_a5", "Histologia do Néfron e Sistema Coletor", "Estrutura do néfron, glomérulo, túbulos e ductos coletores."),
    ("bmf3_a6", "Fisiologia Renal — Filtração, Reabsorção e Excreção", "Filtração glomerular, reabsorção tubular, equilíbrio hidroeletrolítico e ácido-básico."),
    ("bmf3_a7", "Glândula Suprarrenal — Anatomia, Histologia e Fisiologia", "Anatomia macro/microscópica e funções da glândula suprarrenal."),
    # Módulo 3: Reprodutor
    ("bmf3_a8", "Sistema Reprodutor Masculino", "Testículos, ductos, glândulas acessórias e pênis: anatomia e histologia."),
    ("bmf3_a9", "Sistema Reprodutor Feminino", "Ovários, tubas uterinas, útero, vagina e genitália externa."),
    ("bmf3_a10", "Fisiologia Reprodutiva", "Gametogênese, ciclo menstrual, fertilização, hormônios sexuais, embriologia inicial, parto e lactação."),
]

AULAS["semiologia3"] = [
    ("semio3_a1", "Revisão da Semiologia Abdominal — Anamnese", "Anamnese abdominal: dor, distensão, alterações urinárias e intestinais."),
    ("semio3_a2", "Revisão da Semiologia Abdominal — Exame Físico", "Inspeção, palpação (superficial/profunda), ausculta e percussão; integração clínica."),
    ("semio3_a3", "Semiologia Renal — Anamnese e Exame Físico", "Disúria, hematúria, lombalgia; palpação abdominal e percussão renal; ITU, litíase, IRA/IRC."),
    ("semio3_a4", "Semiologia do Aparelho Reprodutor Masculino", "Anamnese (disfunção erétil, dor testicular, infertilidade); inspeção genital, palpação e toque retal."),
    ("semio3_a5", "Semiologia do Aparelho Reprodutor Feminino", "Anamnese ginecológica; exame especular; toque vaginal; patologias comuns."),
    ("semio3_a6", "Prática Simulada e Real — Aparelhos Renal e Reprodutor", "Ambulatório supervisionado; correlação de achados; diagnósticos diferenciais."),
]

AULAS["mad2"] = [
    ("mad2_a1", "Imunodeficiências Primárias", "Etiologia, características clínicas e consequências das imunodeficiências primárias."),
    ("mad2_a2", "Tolerância Imunológica", "Tolerância central e periférica; participação da imunidade adaptativa na manutenção/perda."),
    ("mad2_a3", "Autoimunidade", "Resposta imune contra o próprio organismo; etiologia e consequências."),
    ("mad2_a4", "Transplantes e Transfusão Sanguínea", "Tipos de transplantes; mecanismos de rejeição; princípios de transfusão."),
    ("mad2_a5", "ISTs Bacterianas — Treponema, Neisseria, Chlamydia", "Sífilis, gonorreia e clamídia: morfologia, transmissão e resposta imune."),
    ("mad2_a6", "Infecções Bacterianas do Tegumento e Hanseníase", "Staphylococcus, Streptococcus e Mycobacterium leprae."),
    ("mad2_a7", "Doenças Exantemáticas Virais (Sarampo, Rubéola)", "Infecção e resposta imune; diagnóstico diferencial das doenças exantemáticas."),
    ("mad2_a8", "Hepatites Virais (A a E)", "Características, transmissão, diagnóstico e prevenção."),
    ("mad2_a9", "Infecção pelo HIV e AIDS", "Ciclo replicativo, imunodeficiência e manejo."),
    ("mad2_a10", "Infecções por Herpesvírus", "HSV, VZV, EBV, CMV: manifestações e latência."),
    ("mad2_a11", "Infecções Virais do SNC — Poliovírus", "Poliovírus, poliomielite e vacinação."),
    ("mad2_a12", "Infecções por Arbovírus", "Dengue, Zika, Chikungunya: patogênese e epidemiologia."),
    ("mad2_a13", "Protozooses — Malária, Chagas e Toxoplasmose", "Plasmodium, Trypanosoma cruzi e Toxoplasma gondii; Trichomonas vaginalis."),
    ("mad2_a14", "Helmintíases — Nematódeos e Estrongiloidíase", "Ascaris, Ancylostoma, Strongyloides: ciclo e diagnóstico."),
    ("mad2_a15", "Cestoidoses — Teníase e Cisticercose", "Taenia solium, Taenia saginata e neurocisticercose."),
    ("mad2_a16", "Antibióticos — Inibidores de Síntese de Parede", "Penicilinas, cefalosporinas, carbapenêmicos e glicopeptídeos."),
    ("mad2_a17", "Antibióticos — Inibidores de Síntese Proteica", "Macrolídeos, aminoglicosídeos, tetraciclinas e lincosaminas."),
    ("mad2_a18", "Antibióticos — Inibidores de Síntese de DNA e Antimetabólitos", "Quinolonas, sulfonamidas e mecanismos de resistência."),
    ("mad2_a19", "Antivirais", "Fármacos para Herpes, Influenza, HIV e Hepatite C."),
    ("mad2_a20", "Antiparasitários e Antifúngicos", "Antiprotozoários, anti-helmínticos e antifúngicos: mecanismos e indicações."),
]

AULAS["fisiopato3"] = [
    # Unidade 1
    ("fp3_a1", "Patologia Geral — Lesão Celular e Morte Celular", "Mecanismos de lesão celular, acúmulos intracelulares, morte celular, calcificação e pigmentação."),
    ("fp3_a2", "Distúrbios Hemodinâmicos", "Edema, hiperemia, hemorragia, trombose, embolia e infarto."),
    ("fp3_a3", "Princípios de Farmacoterapia", "Formas farmacêuticas, vias de administração, farmacocinética e farmacodinâmica."),
    ("fp3_a4", "Farmacologia do SNA Simpático e Substâncias Vasoativas", "Adrenérgicos e antiadrenérgicos: indicação, mecanismo, efeitos adversos."),
    ("fp3_a5", "Farmacologia do SNA Parassimpático", "Colinérgicos muscarínicos e antimuscarínicos: indicação e farmacocinética."),
    # Unidade 2
    ("fp3_a6", "Inflamação — Morfologia e Reparo Tecidual", "Mecanismos da inflamação, cura e reparo; adaptações de crescimento e diferenciação celular."),
    ("fp3_a7", "Anti-inflamatórios — AINEs e Corticoides", "Mecanismo de ação, indicações, contraindicações e efeitos adversos."),
    # Unidade 3
    ("fp3_a8", "Neoplasias — Carcinogênese, Disseminação e Estadiamento", "Conceitos de neoplasias, mecanismos de carcinogênese e estadiamento."),
    ("fp3_a9", "Farmacoterapia Antineoplásica", "Fármacos antineoplásicos: indicações, mecanismo de ação e efeitos adversos."),
    # Unidade 4
    ("fp3_a10", "Patologia das Vias Urinárias e Glomerulopatias", "Patologia das vias urinárias, glomerulopatias, nefrites túbulo-intersticiais e neoplasias renais."),
    # Unidade 7
    ("fp3_a11", "Patologias Endócrinas — Suprarrenal e Próstata", "Patologias da suprarrenal, testículo e próstata."),
    ("fp3_a12", "Patologias do Sistema Reprodutor Feminino", "Corpo uterino, tubas, colo uterino, ovários."),
    ("fp3_a13", "Patologia da Mama — Benigna e Maligna", "Doenças benignas e malignas da mama."),
    ("fp3_a14", "Farmacoterapia do Sistema Genitourinário Masculino", "HPB, câncer de próstata e reposição hormonal: indicações e mecanismos."),
    ("fp3_a15", "Farmacoterapia do Sistema Genitourinário Feminino", "Contraceptivos, terapia da menopausa, distúrbios menstruais, SERMs e terapia de cânceres ginecológicos."),
]

AULAS["saude_trabalhador"] = [
    ("st_a1", "Vigilância em Saúde — Epidemiológica, Sanitária e Ambiental", "Análise da vigilância em saúde, políticas públicas no SUS e prevenção primária a quaternária."),
    ("st_a2", "Notificação Compulsória e Regulamento Sanitário Internacional", "Portaria de doenças de notificação compulsória e regulamento sanitário internacional."),
    ("st_a3", "Política Nacional de Saúde do Trabalhador (PNSTT)", "RENAST, CEREST e sua estrutura na rede de atenção."),
    ("st_a4", "Legislação Trabalhista e Acidente de Trabalho", "Direitos dos trabalhadores, tipos de trabalhadores e preenchimento da CAT."),
    ("st_a5", "Normas Regulamentadoras (NR)", "NR1 (GRO), NR4 (SESMT), NR5 (CIPA), NR6 (EPI), NR7 (PCMSO), NR15/16, NR17 (Ergonomia)."),
    ("st_a6", "Doenças Ocupacionais — LER/DORT, Pneumoconioses e PAIR", "LER/DORT, pneumoconioses, PAIR e dermatites ocupacionais."),
    ("st_a7", "DCNT e Saúde Mental no Trabalho", "DCNT relacionadas ao trabalho; assédio moral e síndrome de burnout."),
    ("st_a8", "ISTs e Sistemas de Informação em Saúde do Trabalhador", "ISTs no trabalho; SINAN, CAT, CIAT e vigilância epidemiológica."),
]

AULAS["pe3"] = [
    ("pe3_a1", "Promoção da Saúde Ocupacional — Planejamento de Intervenções", "Planejamento de intervenções em saúde do trabalhador em equipamentos de saúde."),
    ("pe3_a2", "Importância da Vacinação para os Trabalhadores", "Imunização no contexto ocupacional e calendário vacinal do trabalhador."),
    ("pe3_a3", "Doenças e Agravos Relacionados ao Trabalho", "Principais doenças e agravos que acometem trabalhadores devido às atividades laborais."),
    ("pe3_a4", "Visitas Técnicas e Relatório Extensionista", "Visitas a serviços de saúde; artigo/relato de experiência."),
]

# ── MÓDULO 4 ──────────────────────────────────────────────────

AULAS["bmf4"] = [
    # Bloco I — Básico/Neuroanatomia
    ("bmf4_a1", "Divisão do Sistema Nervoso — Anatômica e Funcional", "Divisão anatômica e funcional/fisiológica do sistema nervoso."),
    ("bmf4_a2", "Embriologia do Sistema Nervoso", "Placa, tubo e cristas neurais; vesículas encefálicas primárias e secundárias."),
    ("bmf4_a3", "Formação do Nervo Espinal", "Radículas sensitivas/motoras, raízes e relações anatômicas."),
    ("bmf4_a4", "Crânio e Fossas Cranianas", "Viscerocrânio, neurocrânio, cavidade craniana e suas fossas."),
    ("bmf4_a5", "Morfologia do Telencéfalo", "Faces, polos, giros, sulcos, hemisférios cerebrais, lobos e ventrículos laterais."),
    ("bmf4_a6", "Córtex Cerebral — Citoarquitetura e Funções", "Classificação filogenética, áreas de Brodmann, áreas de Luria."),
    ("bmf4_a7", "Morfologia do Diencéfalo", "Tálamo, III ventrículo, hipotálamo, subtálamo e epitálamo."),
    ("bmf4_a8", "Morfologia do Tronco Encefálico", "Mesencéfalo, ponte, bulbo, IV ventrículo e fossa romboide."),
    ("bmf4_a9", "Morfologia do Cerebelo", "Hemisférios, pedúnculos, núcleos e camadas histológicas cerebelares."),
    ("bmf4_a10", "Morfologia da Medula Espinal", "Intumescências, cone medular, substância cinzenta/branca, canal central."),
    ("bmf4_a11", "Histologia do Sistema Nervoso — Neurônios e Glia", "Neurônios (classificação), células da glia (SNC e SNP), potencial de ação e sinapses."),
    ("bmf4_a12", "Neurotransmissão e Fibra Nervosa", "PEPS, PIPS, neurotransmissão, fibra nervosa, gânglio nervoso e envoltórios do nervo."),
    ("bmf4_a13", "Nervos Cranianos e Vias Descendentes", "Pares cranianos, vias piramidais, extrapiramidais e reflexos espinais."),
    ("bmf4_a14", "Vascularização do SNC", "Sistema carotídeo interno e vértebro-basilar; seios durais e drenagem venosa."),
    ("bmf4_a15", "Meninges, Sistema Ventricular e Barreiras Encefálicas", "Dura-máter, aracnoide, pia-máter; LCR; plexos coroides; barreiras hemato-encefálica e hemato-liquórica."),
    # Bloco II — Sistema Sensorial
    ("bmf4_a16", "Sensibilidade Geral", "Campo receptivo, potencial de repouso, vias de sensibilidade e receptores."),
    ("bmf4_a17", "Órgãos dos Sentidos", "Visão, audição, olfato, paladar e equilíbrio: anatomia e fisiologia."),
    # Bloco III — Endócrino
    ("bmf4_a18", "Glândulas Endócrinas e Regulação Hormonal", "Anatomia e fisiologia das glândulas endócrinas; regulação neuroendócrina."),
]

AULAS["semiologia4"] = [
    # 1. Semiologia Teórica
    ("semio4_a1", "Fundamentos da Semiologia Neurológica", "Princípios de semiologia do SN; revisão anatômica e fisiológica do SNC, SNP e SNA."),
    ("semio4_a2", "Anamnese Neurológica", "Cefaleia, tontura, fraqueza, convulsões; história patológica e fatores de risco."),
    ("semio4_a3", "Nível de Consciência e Nervos Cranianos", "Escala de Glasgow; avaliação de visão, movimentos oculares, reflexo pupilar, audição, deglutição."),
    ("semio4_a4", "Exame Motor e Reflexos Tendíneos", "Força muscular (escala 0-5), tônus, trofismo e reflexos."),
    ("semio4_a5", "Exame Sensorial e Provas Cerebelares", "Sensibilidade superficial/profunda; dedo-nariz, calcanhar-joelho; equilíbrio e marcha."),
    ("semio4_a6", "Funções Cognitivas", "Memória, atenção, linguagem e praxias."),
    ("semio4_a7", "Síndromes Neurológicas Clínicas", "Síndromes piramidal, extrapiramidal, cerebelar, sensitiva; AVC, epilepsia, parkinsonismo, demências."),
    ("semio4_a8", "Propedêutica Complementar em Neurologia", "Introdução a TC, EEG e ressonância magnética."),
    # 2. Prática Simulada
    ("semio4_a9", "Prática Simulada — Manequins e Pacientes Padronizados", "Exame neurológico em manequins; cenários com atores (cefaleia, vertigem)."),
    # 3. Prática Real
    ("semio4_a10", "Prática Real — Ambulatório de Neurologia", "Anamnese e exame neurológico em pacientes reais; ética e consentimento."),
]

AULAS["fisiopato_farmaco"] = [
    # 1. Introdução
    ("ff4_a1", "Patologia Geral — Lesão Celular e Distúrbios Circulatórios", "Mecanismos de lesão, morte celular, inflamação, reparo, adaptações e neoplasias."),
    ("ff4_a2", "Princípios de Farmacoterapia", "Formas farmacêuticas, vias de administração, farmacocinética e farmacodinâmica."),
    ("ff4_a3", "AINEs, Corticoides e Antineoplásicos", "Indicação, contraindicação, mecanismo de ação e efeitos adversos."),
    # 2. Sistema Nervoso
    ("ff4_a4", "Fisiopatologia das Doenças Cerebrovasculares", "Definição, epidemiologia, mecanismos, morfologia e manifestações de AVCs."),
    ("ff4_a5", "Neoplasias Primárias do SNC", "Definição, epidemiologia, mecanismos e manifestações das neoplasias de SNC."),
    ("ff4_a6", "Farmacologia do SNA — Simpático e Parassimpático", "Adrenérgicos, antiadrenérgicos, colinérgicos muscarínicos e anticolinesterásicos."),
    ("ff4_a7", "Bloqueadores Neuromusculares e Opioides", "Mecanismo de ação, indicações e efeitos adversos."),
    ("ff4_a8", "Anestésicos Locais e Gerais", "Indicação, mecanismo de ação, farmacocinética e efeitos adversos."),
    ("ff4_a9", "Psicofarmacologia", "Antidepressivos, ansiolíticos, hipnóticos, antipsicóticos, anticonvulsivantes e antiparkinsonianos."),
    # 3. Sistema Neuroendócrino
    ("ff4_a10", "Fisiopatologia da Hipófise", "Síndromes de hiper e hipofunção neuro e adeno-hipofisárias."),
    ("ff4_a11", "Fisiopatologia da Glândula Adrenal", "Síndromes de hiper e hipofunção corticais e medulares."),
    ("ff4_a12", "Fisiopatologia do Pâncreas Endócrino", "Síndromes de hiper e hipofunção do pâncreas endócrino."),
    ("ff4_a13", "Hipoglicemiantes e Insulinas", "Indicação, mecanismo de ação, efeitos adversos e farmacocinética."),
    # 4. Aplicações
    ("ff4_a14", "Diagnósticos Diferenciais — Integração Clínica", "Diagnósticos diferenciais baseados em achados anatomopatológicos, laboratoriais, imagenológicos e clínicos."),
]

AULAS["bioestatistica"] = [
    ("bioe_a1", "Aplicações e Definição de Bioestatística", "Conceitos teóricos e aplicabilidades da bioestatística na saúde."),
    ("bioe_a2", "Tipos de Variáveis Estatísticas", "Definição, classificação e descrição dos tipos de variáveis."),
    ("bioe_a3", "Medidas de Tendência Central e Dispersão", "Média, mediana, moda; variância, desvio padrão, coeficiente de variação."),
    ("bioe_a4", "Definição da Amostra e Normalidade dos Dados", "Amostragem, histograma e análise da normalidade."),
    ("bioe_a5", "Análise Inferencial — Testes de Hipóteses", "Hipótese nula/alternativa, valor p, significância; teste t pareado/não pareado; Mann-Whitney; Wilcoxon."),
    ("bioe_a6", "Pesquisas Qualitativas na Saúde", "Construção e metodologia das pesquisas qualitativas e sua importância."),
    ("bioe_a7", "Introdução à Epidemiologia Analítica", "Relevância da epidemiologia analítica; contextualização com artigos e raciocínio epidemiológico."),
    ("bioe_a8", "Estudo Transversal", "Conceito, aplicação; medidas: razão de prevalência e diferença de prevalência."),
    ("bioe_a9", "Estudo de Coorte", "Conceito, aplicação; medidas: risco atribuível e risco relativo."),
    ("bioe_a10", "Estudo Caso-Controle", "Conceito, aplicação; medida: odds ratio (razão de chances)."),
    ("bioe_a11", "Estudo Ecológico", "Conceito, aplicação; medida: coeficiente de correlação de Pearson."),
    ("bioe_a12", "Ensaio Clínico Randomizado e Ensaio Comunitário", "RRR, RAR e NNT; aplicações de estudos experimentais."),
]

AULAS["pe4"] = [
    ("pe4_a1", "Pesquisa Científica e Revisão de Literatura", "Metodologia científica e importância da revisão de literatura."),
    ("pe4_a2", "Intervenção em Saúde — AVC", "Educação em saúde sobre AVC para a comunidade."),
    ("pe4_a3", "Intervenção em Saúde — Parkinson", "Educação em saúde sobre doença de Parkinson."),
    ("pe4_a4", "Intervenção em Saúde — Alzheimer", "Educação em saúde sobre doença de Alzheimer."),
    ("pe4_a5", "Intervenção em Saúde — Queda de Idoso", "Prevenção de quedas em idosos na comunidade."),
    ("pe4_a6", "Rede de Atenção à Saúde e Perfil da População", "Composição da RAS, identificação do público-alvo e território."),
    ("pe4_a7", "Trabalho Escrito — Artigo/Relato de Experiência", "Elaboração do trabalho escrito da prática extensionista."),
]

# ── MÓDULO 5 ──────────────────────────────────────────────────

AULAS["clinica_medica5"] = [
    # Cardiologia
    ("cm5_a1", "Hipertensão Arterial Sistêmica", "Epidemiologia, fisiopatologia, diagnóstico, estratificação de risco e tratamento."),
    ("cm5_a2", "Interpretação do Eletrocardiograma", "Princípios, leitura sistemática e achados patológicos no ECG."),
    ("cm5_a3", "Insuficiência Cardíaca", "Fisiopatologia, classificação (NYHA), diagnóstico e manejo."),
    ("cm5_a4", "Arritmias Cardíacas", "Classificação, diagnóstico eletrocardiográfico e princípios de tratamento."),
    ("cm5_a5", "Doença Arterial Coronariana Crônica", "Fatores de risco, diagnóstico, exames complementares e tratamento."),
    # Endocrinologia
    ("cm5_a6", "Síndrome Metabólica e Diabetes Mellitus", "Critérios diagnósticos, fisiopatologia e manejo de SM e DM."),
    ("cm5_a7", "Doenças da Hipófise e das Adrenais", "Síndromes de hiper/hipofunção hipofisária e adrenal."),
    ("cm5_a8", "Disfunções da Tireoide e Metabolismo Ósseo", "Hiper/hipotireoidismo, bócio, nódulos; osteoporose e metabolismo ósseo."),
    # Nefrologia
    ("cm5_a9", "Doença Renal Crônica", "Classificação, fatores de progressão, diagnóstico e manejo."),
    ("cm5_a10", "Glomerulopatias e Infecção Urinária", "Classificação glomerular, síndrome nefrítica/nefrótica e ITU."),
    # Neurologia
    ("cm5_a11", "Cefaleia", "Classificação, diagnóstico diferencial e manejo."),
    ("cm5_a12", "Demência e Meningite", "Tipos de demência, diagnóstico; meningite infecciosa."),
    # ORL
    ("cm5_a13", "Otites, Rinites e Rinossinusites", "Diagnóstico e manejo das principais afecções otorrinolaringológicas."),
    ("cm5_a14", "Faringotonsilites, Disfonias e Surdez", "Diagnósticos diferenciais e abordagem."),
    ("cm5_a15", "Labirintopatias e Vertigem", "Diagnóstico diferencial de vertigens e labirintopatias."),
    # Oftalmologia
    ("cm5_a16", "Anatomia e Fisiologia da Visão; Olho Vermelho e Trauma", "Bases da visão, olho vermelho, trauma ocular."),
    ("cm5_a17", "Perda Súbita da Visão e Fundo de Olho", "Diagnóstico e exame de fundo de olho."),
    # Dermatologia
    ("cm5_a18", "Dermatoses Virais e Micoses", "Dermatoses virais, micoses superficiais e profundas."),
    ("cm5_a19", "Lesões Eritematodescamativas", "Psoríase, dermatite seborreica e diagnósticos diferenciais."),
    # Diagnósticos Diferenciais
    ("cm5_a20", "Hepatoesplenomegalia, Icterícia Febril e Adenomegalias", "Diagnósticos diferenciais de hepatoesplenomegalia, icterícia febril e adenomegalias."),
    ("cm5_a21", "Perda de Peso Não Intencional", "Abordagem diagnóstica e diagnósticos diferenciais."),
]

AULAS["clinica_cirurgica5"] = [
    ("cc5_a1", "Avaliação Pré-operatória", "Avaliação multidisciplinar e preparo para cirurgia."),
    ("cc5_a2", "Complicações Pós-operatórias", "Principais complicações e manejo pós-operatório."),
    ("cc5_a3", "Infecção em Cirurgia", "Infecção de sítio cirúrgico: prevenção, diagnóstico e tratamento."),
    ("cc5_a4", "Resposta Endócrina-Metabólica ao Trauma", "Resposta neuroendócrina, fases e implicações clínicas."),
    ("cc5_a5", "Cicatrização Normal e Patológica", "Fases da cicatrização, fatores que interferem e cicatrização patológica."),
    ("cc5_a6", "Úlcera de Pressão", "Classificação, prevenção e tratamento das lesões por pressão."),
    ("cc5_a7", "Câncer de Pele", "Carcinoma basocelular, espinocelular e melanoma: diagnóstico e manejo."),
    ("cc5_a8", "Litíase Renal", "Fisiopatologia, diagnóstico e tratamento da litíase renal."),
    ("cc5_a9", "Hiperplasia Prostática Benigna", "Fisiopatologia, diagnóstico e tratamento da HPB."),
    ("cc5_a10", "Câncer de Próstata", "Rastreamento, diagnóstico, estadiamento e tratamento."),
]

AULAS["farmaco_aplicada"] = [
    ("farm_a1", "Farmacologia do Sistema Digestório", "Antiácidos, citoprotetores, antieméticos e procinéticos."),
    ("farm_a2", "Anti-inflamatórios — AINEs e Corticoides", "AINEs e glicocorticoides: indicações, contraindicações e efeitos adversos."),
    ("farm_a3", "Farmacologia do Sistema Respiratório", "Broncodilatadores, anti-histamínicos e anti-inflamatórios para asma, DPOC e alergias."),
    ("farm_a4", "Antibióticos 1 — Inibidores de Síntese de Parede", "Penicilinas, cefalosporinas, monobactâmicos, carbapenêmicos, glicopeptídeos."),
    ("farm_a5", "Antibióticos 2 — Inibidores de Síntese Proteica", "Macrolídeos, aminoglicosídeos, lincosaminas, anfenicois, tetraciclinas."),
    ("farm_a6", "Antibióticos 3 — Inibidores de DNA e Antimetabólitos", "Quinolonas, sulfonamidas e mecanismos de resistência."),
    ("farm_a7", "Antivirais", "Fármacos para Herpes, Influenza, HIV e Hepatite C."),
    ("farm_a8", "Antiparasitários", "Antiprotozoários e anti-helmínticos: mecanismos e uso clínico."),
    ("farm_a9", "Farmacologia Cardiovascular 1 — Anti-hipertensivos", "Classes de anti-hipertensivos: mecanismos, indicações e efeitos adversos."),
    ("farm_a10", "Farmacologia Cardiovascular 2 — Antiarrítmicos e Antianginosos", "Antiarrítmicos, antianginosos e fármacos para IC."),
    ("farm_a11", "Farmacologia Cardiovascular 3 — Anticoagulantes e Antiplaquetários", "Anticoagulantes, antiplaquetários e fibrinolíticos."),
    ("farm_a12", "Prescrição Racional e Simulação no NIS", "Prescrição medicamentosa, interações, relação risco-benefício e prática em simulação."),
]

# ── MÓDULO 6 ──────────────────────────────────────────────────

AULAS["clinica_medica6"] = [
    # Gastroenterologia
    ("cm6_a1", "Cirrose Hepática e Complicações", "Fisiopatologia, diagnóstico, classificação de Child-Pugh e manejo."),
    ("cm6_a2", "Hepatites Virais", "Hepatites A-E: diagnóstico sorológico, evolução e tratamento."),
    # Geriatria
    ("cm6_a3", "Aspectos do Envelhecimento — Senescência e Senilidade", "Fisiologia do envelhecimento e impacto na fisiopatologia das doenças."),
    ("cm6_a4", "Funcionalidade em Geriatria e Síndrome de Fragilidade", "Avaliação funcional e critérios de fragilidade."),
    ("cm6_a5", "Síndromes Geriátricas", "Grandes síndromes geriátricas: incontinência, instabilidade, imobilidade e iatrogenia."),
    # Hematologia
    ("cm6_a6", "Leucemias Agudas e Crônicas", "Classificação, diagnóstico e princípios de tratamento."),
    ("cm6_a7", "Linfomas e Mieloma Múltiplo", "Hodgkin/não-Hodgkin e mieloma múltiplo: diagnóstico e manejo."),
    ("cm6_a8", "Diagnóstico Laboratorial de Hemostasia", "Coagulograma, distúrbios da hemostasia e diagnóstico laboratorial."),
    # Pneumologia
    ("cm6_a9", "Espirometria e Prova de Função Pulmonar", "Indicações, interpretação e padrões obstrutivo/restritivo."),
    ("cm6_a10", "Asma e DPOC", "Diagnóstico, classificação e manejo de asma e DPOC."),
    ("cm6_a11", "Doenças Pulmonares Intersticiais", "Classificação, diagnóstico e abordagem."),
    # Reumatologia
    ("cm6_a12", "Diagnóstico Diferencial das Monoartrites e Poliartrites", "Abordagem diagnóstica das artrites e principais etiologias."),
    ("cm6_a13", "Espondiloartropatias Soronegativas", "Espondilite anquilosante, artrite reativa e artrite psoriásica."),
    ("cm6_a14", "Lúpus Eritematoso Sistêmico", "Critérios diagnósticos, manifestações e tratamento."),
    # Medicina Paliativa
    ("cm6_a15", "Conceitos em Cuidados Paliativos", "Princípios, indicações e equipe multidisciplinar."),
    ("cm6_a16", "Abordagem da Dor e Manejo de Sintomas", "Escada analgésica da OMS, manejo de sintomas refratários."),
    ("cm6_a17", "Comunicação de Más Notícias — Protocolo SPIKES", "Etapas do protocolo SPIKES e habilidades de comunicação."),
    # Prática Simulada
    ("cm6_a18", "Prática — Diarreias, Obstipação e Hepatites", "Diarreias (incluindo DII), obstipação e abordagem prática."),
    ("cm6_a19", "Prática — Delirium e Comunicação de Más Notícias", "Geriatria e medicina paliativa em simulação."),
    ("cm6_a20", "Prática — Anemias e PTI", "Abordagem das anemias e púrpura trombocitopênica idiopática."),
    ("cm6_a21", "Prática — Pneumonia e Toracocentese", "Diagnóstico diferencial das doenças respiratórias; pneumonia e toracocentese."),
    ("cm6_a22", "Prática — Lombalgias, Fibromialgia e Reumatologia", "Lombalgias, fibromialgia e diagnósticos diferenciais em reumatologia."),
    # Reuniões Clínicas
    ("cm6_a23", "Reunião Clínica — Quedas, Polifarmácia e Tabagismo", "Discussão de casos clínicos em geriatria e saúde pública."),
    ("cm6_a24", "Reunião Clínica — Plaquetopenia, DPOC e LES", "Discussão de casos integrando hematologia, pneumologia e reumatologia."),
]

AULAS["mfc6"] = [
    ("mfc_a1", "Medicina de Família e Comunidade — Apresentação da Especialidade", "História da MFC, princípios (abordagem centrada no paciente, longitudinalidade, integralidade)."),
    ("mfc_a2", "Abordagem das Anemias na Atenção Primária", "Classificação, diagnóstico, tratamento e encaminhamento de anemias na APS."),
    ("mfc_a3", "Doenças Respiratórias na APS — IVAS e PAC", "Infecções de vias aéreas superiores e pneumonia adquirida na comunidade."),
    ("mfc_a4", "Programas de Tratamento na APS — Tuberculose e Tabagismo", "Protocolos do MS para diagnóstico, tratamento e vigilância de TB e tabagismo."),
    ("mfc_a5", "Atendimento Domiciliar", "Indicações, legislação SUS, avaliação de riscos e integração com cuidados paliativos."),
    ("mfc_a6", "Abordagem da Dor Crônica na APS", "Dores articulares e miofasciais: fisiopatologia, diagnóstico diferencial e tratamento multimodal."),
]

AULAS["cirurgia_ortopedia"] = [
    # Cirurgia Geral e Gastrocirurgia
    ("cir6_a1", "Abdome Agudo — Classificação e Propedêutica", "Abdome agudo inflamatório, perfurativo, obstrutivo, hemorrágico e vascular."),
    ("cir6_a2", "Apendicite Aguda", "Fisiopatologia, quadro clínico, diagnóstico e tratamento."),
    ("cir6_a3", "Hérnias da Parede Abdominal", "Classificação, diagnóstico e tratamento das hérnias inguinais, femorais e incisionais."),
    ("cir6_a4", "Diagnóstico Diferencial da Icterícia", "Icterícia obstrutiva vs não obstrutiva; abordagem diagnóstica."),
    ("cir6_a5", "Pancreatite Aguda", "Etiologia (biliar, alcoólica), diagnóstico, classificação e manejo."),
    ("cir6_a6", "Litíase de Vias Biliares", "Colelitíase, coledocolitíase: diagnóstico e tratamento."),
    ("cir6_a7", "Doenças do Esôfago — DRGE e Alterações Motoras", "DRGE, acalásia e outras afecções não neoplásicas do esôfago."),
    ("cir6_a8", "Hemorragias Digestivas Alta e Baixa", "Etiologias, diagnóstico e manejo de HDA e HDB."),
    ("cir6_a9", "Doença Ulcerosa Péptica", "Fisiopatologia (H. pylori, AINEs), diagnóstico e tratamento."),
    ("cir6_a10", "Doenças Orificiais e Semiologia Proctológica", "Hemorroidas, fissura anal e fístula perianal."),
    ("cir6_a11", "Doença Diverticular e Diverticulite Aguda", "Fisiopatologia, diagnóstico e manejo."),
    # Neoplasias
    ("cir6_a12", "Neoplasias de Fígado e Vias Biliares", "Hepatocarcinoma e colangiocarcinoma: diagnóstico e tratamento."),
    ("cir6_a13", "Neoplasias de Pâncreas e Estômago", "Adenocarcinoma pancreático e câncer gástrico."),
    ("cir6_a14", "Neoplasias de Esôfago, Colorretal e Canal Anal", "Carcinoma de esôfago, câncer colorretal e neoplasia de canal anal."),
    # Ortopedia
    ("cir6_a15", "Anatomia e Semiologia em Ortopedia", "Exame físico ortopédico e princípios semiológicos."),
    ("cir6_a16", "Exames Complementares (Imagem) em Ortopedia", "Radiografia, TC, RM e suas indicações."),
    ("cir6_a17", "Doenças do Metabolismo Ósseo", "Osteopenia, osteoporose: diagnóstico e tratamento."),
    ("cir6_a18", "Fraturas, Luxações e Imobilizações", "Princípios de tratamento de fraturas, luxações e técnicas de imobilização."),
    ("cir6_a19", "Lesões Ligamentares, Musculares e Tendíneas", "Entorses, rupturas tendinosas e distensões musculares."),
    ("cir6_a20", "Doenças do Quadril em Desenvolvimento", "Displasia, Legg-Calvé-Perthes e epifisiólise."),
    ("cir6_a21", "Infecções Osteoarticulares", "Osteomielite e artrite séptica: diagnóstico e tratamento."),
]

AULAS["tecnica_operatoria"] = [
    ("tcar_a1", "Antissepsia, Assepsia e Esterilização", "Conceitos de antissepsia/assepsia, esterilização e princípios de paramentação."),
    ("tcar_a2", "O Ambiente Cirúrgico", "Zona de proteção, zona limpa, zona estéril; escovação e paramentação cirúrgica."),
    ("tcar_a3", "Operações Fundamentais e Material Cirúrgico", "Passos fundamentais (diérese, hemostasia, síntese); instrumentais cirúrgicos e montagem de mesa."),
    ("tcar_a4", "A Equipe Cirúrgica e Instrumentação", "Elementos da equipe cirúrgica, posicionamento e montagem da mesa cirúrgica."),
    ("tcar_a5", "Fios e Agulhas Cirúrgicas", "Tipos de agulhas; fios cirúrgicos (filamentos, absorção, origem); indicações de uso."),
    ("tcar_a6", "Nós Manuais", "Nó de cirurgião, nó de sapateiro e nó com porta-agulhas."),
    ("tcar_a7", "Suturas Interrompidas", "Ponto simples, Donati, ponto em X e ponto em U."),
    ("tcar_a8", "Suturas Contínuas", "Chuleio simples, chuleio ancorado e sutura intradérmica."),
    ("tcar_a9", "Anestesia Local, Drenagem de Abscessos e Exérese em Fuso", "Anestésicos locais, técnica em leque, drenagem de abscesso e exérese."),
    ("tcar_a10", "Acessos Venosos", "Dispositivos para acesso venoso, técnica de Seldinger e punção periférica."),
]


# ============================================================
# APLICAR AO materias.json
# ============================================================

def main():
    with open(MATERIAS_PATH, "r", encoding="utf-8") as f:
        materias = json.load(f)

    total_before = sum(len(m.get("aulas", [])) for m in materias.values())

    for disc_id, aulas_list in AULAS.items():
        if disc_id not in materias:
            print(f"  [WARN] Disciplina '{disc_id}' nao encontrada em materias.json")
            continue
        materias[disc_id]["aulas"] = [
            {"id": a[0], "tema": a[1], "descricao": a[2]}
            for a in aulas_list
        ]

    total_after = sum(len(m.get("aulas", [])) for m in materias.values())

    with open(MATERIAS_PATH, "w", encoding="utf-8") as f:
        json.dump(materias, f, ensure_ascii=False, indent=2)

    print(f"\n=== Aulas expandidas com sucesso ===")
    print(f"  Antes:  {total_before} aulas")
    print(f"  Depois: {total_after} aulas")
    print(f"  Delta:  +{total_after - total_before}")
    print()
    for disc_id, aulas_list in sorted(AULAS.items()):
        sigla = materias[disc_id]["sigla"]
        print(f"  {sigla:6s} ({disc_id}): {len(aulas_list)} aulas")


if __name__ == "__main__":
    main()
