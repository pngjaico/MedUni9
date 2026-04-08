const fs = require('fs');

const OUT_MAD2 = 'scripts/tmp_mod3_mad2.json';
const OUT_FP3 = 'scripts/tmp_mod3_fisiopato3.json';

function mk(materia, tema, frente, verso, dificuldade, categoria, origem) {
  const tag = [materia, tema];
  if (origem === 'extra') tag.push('extra');
  return {
    materia,
    tema,
    frente,
    verso: String(verso).trim(),
    explicacao: '',
    dificuldade,
    categoria: origem === 'extra' ? 'extra_livro' : categoria,
    origem,
    tags: tag
  };
}

function pack(materia, tema, materialRows, extraRows) {
  const out = [];
  for (const [frente, verso, dificuldade, categoria] of materialRows) {
    out.push(mk(materia, tema, frente, verso, dificuldade, categoria, 'material'));
  }
  for (const [frente, verso] of extraRows) {
    out.push(mk(materia, tema, frente, verso, 2, 'extra_livro', 'extra'));
  }
  if (out.length !== 12) throw new Error(`${tema}: esperado 12, tem ${out.length}`);
  return out;
}

function buildMad2() {
  const L = pack.bind(null, 'mad2');
  const blocks = [];

  blocks.push(...L('mad2_a1', [
    ['SCID grave costuma associar-se a defeito de linfocitos {{c1::T}}.', 'T', 1, 'clinica'],
    ['Agamaglobulinemia ligada ao X envolve mutação em {{c1::BTK}}.', 'BTK', 2, 'mecanismo'],
    ['CGD caracteriza falha na produção de {{c1::superóxido}} fagocítico.', 'superóxido', 2, 'mecanismo'],
    ['Síndrome de DiGeorge costuma reduzir desenvolvimento do {{c1::timo}}.', 'timo', 1, 'clinica'],
    ['Defeito humoral predispõe a infecções recorrentes por bactérias {{c1::encapsuladas}}.', 'encapsuladas', 1, 'clinica'],
    ['CVID traduz hipogamaglobulinemia com aumento de episódios de {{c1::infecção}}.', 'infecção', 1, 'clinica'],
    ['Defeito de MHC classe II prejudica apresentação de antígeno para {{c1::CD4}}.', 'CD4', 2, 'mecanismo'],
    ['Deficiência de complemento C5-C9 predispõe infecção por {{c1::Neisseria}}.', 'Neisseria', 2, 'prova'],
    ['Dados de laboratório em Bruton costumam mostrar ausência de {{c1::linfocitos B}} circulantes.', 'linfocitos B', 2, 'prova'],
    ['Imunodeficiência combinada grave exige pensar em transplante de {{c1::medula}}.', 'medula', 2, 'clinica']
  ], [
    ['Para alguns SCID, o transplante alogênico de medula pode ser tratamento de {{c1::escolha}}.', 'escolha'],
    ['HIPA por defeito na via do interferon gama aumenta suscetibilidade a {{c1::micobacterias}}.', 'micobacterias']
  ]));

  blocks.push(...L('mad2_a2', [
    ['Tolerância central ocorre principalmente no {{c1::timo}} para linfócitos T.', 'timo', 1, 'definicao'],
    ['Tolerância central de B costuma envolver {{c1::medula ossea}} como sítio principal.', 'medula ossea', 1, 'definicao'],
    ['A expressão de {{c1::AIRE}} no timo ajuda a expor antígenos de periferia ao treinamento T.', 'AIRE', 2, 'mecanismo'],
    ['Linfócitos T reguladores expressam tipicamente o marcador {{c1::CD25}} em humanos.', 'CD25', 2, 'prova'],
    ['Anergia clonal descreve linfócito vivo porém funcionalmente {{c1::inerte}}.', 'inerte', 2, 'definicao'],
    ['Edição de receptor em B pode reduzir autoreatividade no desenvolvimento em {{c1::medula ossea}}.', 'medula ossea', 2, 'mecanismo'],
    ['CTLA-4 no linfócito T atua como freio na segunda {{c1::sinalização}} de ativação.', 'sinalização', 2, 'mecanismo'],
    ['Deleção clonal elimina linfócitos autorreativos por {{c1::apoptose}}.', 'apoptose', 1, 'mecanismo'],
    ['Perda de tolerância periférica pode permitir resposta contra antígeno {{c1::próprio}}.', 'próprio', 1, 'definicao'],
    ['Mecanismo de checkpoints imune inibitório inclui via do receptor {{c1::PD-1}}.', 'PD-1', 2, 'prova']
  ], [
    ['Mutações em FOXP3 levam a síndrome IPEX com falha de linfócitos T {{c1::reguladores}}.', 'reguladores'],
    ['A indução de tolerância por antígeno oral é modelo clássico de tolerância {{c1::periférica}}.', 'periférica']
  ]));

  blocks.push(...L('mad2_a3', [
    ['Autoimunidade caracteriza resposta adaptativa contra antígenos do {{c1::próprio}}.', 'próprio', 1, 'definicao'],
    ['Lúpus eritematoso sistêmico costuma associar-se a anticorpo anti-{{c1::DNA}} de dupla fita.', 'DNA', 2, 'clinica'],
    ['Doença de Hashimoto exemplifica tiroidite autoimune com linfócitos T e {{c1::anticorpos}}.', 'anticorpos', 1, 'clinica'],
    ['Artrite reumatoide envolve inflamação sinovial com papel de citocinas como {{c1::TNF}}.', 'TNF', 2, 'mecanismo'],
    ['Poliendocrinopatia autoimune pode combinar falência de órgãos por linfócitos {{c1::T}}.', 'T', 2, 'clinica'],
    ['Mimetismo molecular sugere ativação cruzada por antígeno infeccioso semelhante ao {{c1::autoantígeno}}.', 'autoantígeno', 2, 'mecanismo'],
    ['Superantígeno bacteriano pode desencadear ativação frágil de linfócitos T sem processamento de {{c1::peptídeo}}.', 'peptídeo', 2, 'prova'],
    ['Autorreatividade em lúpus pode gerar imunocomplexos depositados no {{c1::rim}}.', 'rim', 1, 'clinica'],
    ['Fator reumatoide é autoanticorpo frequentemente contra fragmentos de {{c1::IgG}}.', 'IgG', 2, 'prova'],
    ['Púrpura trombocitopênica imune associa-se a anticorpo contra receptor de {{c1::plaquetas}}.', 'plaquetas', 2, 'clinica']
  ], [
    ['Células plasmáticas anormais em mieloma podem secretar imunoglobulina {{c1::monoclona}}.', 'monoclona'],
    ['Miastenia gravis por anticorpo contra receptor de acetilcolina exemplifica autoimunidade {{c1::anticorpo-mediada}}.', 'anticorpo-mediada']
  ]));

  blocks.push(...L('mad2_a4', [
    ['Compatibilidade de transplante alógeno avalia sistema {{c1::HLA}} como eixo principal.', 'HLA', 1, 'definicao'],
    ['Rejeição hiperaguda costuma envolver anticorpo pré-formado contra antígeno de {{c1::enxerto}}.', 'enxerto', 2, 'mecanismo'],
    ['Rejeição aguda celular traduz infiltrado de linfócitos {{c1::T}} no órgão.', 'T', 1, 'clinica'],
    ['Rejeição crônica pode evoluir com obliteração vascular por fibrose e {{c1::isquemia}}.', 'isquemia', 2, 'mecanismo'],
    ['Doença do enxerto contra hospedeiro pós medula envolve linfócitos doador atacando tecido do {{c1::receptor}}.', 'receptor', 2, 'clinica'],
    ['Transfusão exige teste cruzado para evitar hemólise por anticorpo anti-{{c1::eritrócito}}.', 'eritrócito', 2, 'prova'],
    ['Incompatibilidade ABO grave na transfusão pode desencadear hemólise {{c1::intravascular}}.', 'intravascular', 2, 'prova'],
    ['Ciclosporina inibe calcineurina e reduz ativação de linfócitos {{c1::T}}.', 'T', 1, 'clinica'],
    ['Tacrolímus também inibe calcineurina com uso em imunossupressão pós-{{c1::transplante}}.', 'transplante', 1, 'mecanismo'],
    ['Micofenolato mofetilo interfere na síntese de purinas em linfócitos em {{c1::divisão}}.', 'divisão', 2, 'mecanismo']
  ], [
    ['Basiliximabe bloqueia receptor de {{c1::IL-2}} para reduzir ativação de linfócitos T peri-transplante.', 'IL-2'],
    ['TRALI pós transfusão pode associar-se a anticorpos anti-leucócito no plasma do {{c1::doador}}.', 'doador']
  ]));

  blocks.push(...L('mad2_a5', [
    ['Sífilis na fase secundária pode apresentar lesões cutâneas {{c1::mucocutâneas}} disseminadas.', 'mucocutâneas', 2, 'clinica'],
    ['Treponema pallidum não cultiva em meio comum e exige testes como {{c1::VDRL}} sorológico.', 'VDRL', 1, 'prova'],
    ['Gonorreia por Neisseria gonorrhoeae costuma acometer mucosa de uretra e {{c1::cervix}}.', 'cervix', 2, 'clinica'],
    ['Clamídia pode formar corpos reticulados intracelulares no epitélio de {{c1::colo}}.', 'colo', 2, 'mecanismo'],
    ['Penicilina benzatina é esquema clássico de tratamento da sífilis {{c1::recente}}.', 'recente', 2, 'clinica'],
    ['Sífilis latente prolongada sem tratamento pode evoluir para neurosífilis ou {{c1::terciária}}.', 'terciária', 2, 'prova'],
    ['Gonorreia resistente a múltiplos antibióticos reforça importância de cultura e {{c1::antibiograma}}.', 'antibiograma', 1, 'prova'],
    ['Infecção concomitante por clamídia e gonorreia guia cobertura empírica {{c1::ampla}}.', 'ampla', 1, 'clinica'],
    ['Linfogranuloma venéreo por Chlamydia trachomatis sorovares L costuma drenar para linfonodos {{c1::inguinais}}.', 'inguinais', 2, 'clinica'],
    ['PCR em amostra adequada pode acelerar diagnóstico de clamídia em {{c1::urina}}.', 'urina', 1, 'prova']
  ], [
    ['Reação de Jarisch-Herxheimer pode ocorrer nas primeiras horas após tratar sífilis com {{c1::penicilina}}.', 'penicilina'],
    ['Em gestante com sífilis, penicilina é esquema de tratamento preferido para cruzar {{c1::placenta}}.', 'placenta']
  ]));

  blocks.push(...L('mad2_a6', [
    ['Staphylococcus aureus costuma ser distinguido laboratorialmente por teste de {{c1::coagulase}}.', 'coagulase', 1, 'prova'],
    ['Streptococcus pyogenes grupo A costuma ser beta-hemolítico em ágar {{c1::sangue}}.', 'sangue', 1, 'prova'],
    ['Tratamento empírico de erisipela costuma priorizar cobertura para {{c1::estreptococo}}.', 'estreptococo', 1, 'clinica'],
    ['Furúnculo profundo sugere abscesso por S. aureus com necessidade de {{c1::drenagem}}.', 'drenagem', 2, 'clinica'],
    ['Hanseníase paucibacilar apresenta poucos bacilos e curso mais {{c1::indolente}}.', 'indolente', 2, 'diferenciacao'],
    ['Hanseníase multibacilar exibe carga bacilar maior com risco de resistência ao {{c1::dapsone}}.', 'dapsone', 2, 'prova'],
    ['Predomínio de células T CD4 na hanseníase reacional tipo I reflete fenômeno de {{c1::hipersensibilidade}}.', 'hipersensibilidade', 2, 'mecanismo'],
    ['Infecção estafilocócica de pele pode evoluir com síndrome da pele escaldada por {{c1::exotoxina}}.', 'exotoxina', 2, 'mecanismo'],
    ['Celulite de membros inferiores frequentemente envolve estreptococos e {{c1::estafilococos}}.', 'estafilococos', 1, 'clinica'],
    ['Impetigo crosta melérica costuma associar-se a S. aureus ou estreptococo do {{c1::grupo A}}.', 'grupo A', 2, 'prova']
  ], [
    ['Antibiótico com cobertura MRSA pode ser necessário em abscesso recidivante de {{c1::pele}}.', 'pele'],
    ['Pielonefrite por S. saprophyticus pode ocorrer jovem sexualmente {{c1::ativa}}.', 'ativa']
  ]));

  blocks.push(...L('mad2_a7', [
    ['Sarampo é causado por paramyxovírus com período de incubação de cerca de {{c1::10 dias}}.', '10 dias', 2, 'prova'],
    ['Exantema do sarampo costuma iniciar na face e descender pelo {{c1::tronco}}.', 'tronco', 1, 'clinica'],
    ['Rubéola por togavirus pode cursar com linfadenopatia {{c1::cervical}} posterior.', 'cervical', 1, 'clinica'],
    ['Artralgia transitória pode aparecer em adulta com rubéola pós-{{c1::vacinação}}.', 'vacinação', 2, 'clinica'],
    ['Pneumonite por sarampo compõe causa importante de morbidade em criança não {{c1::imunizada}}.', 'imunizada', 1, 'clinica'],
    ['Encefalite pós-sarampo é complicação rara mas grave do sistema {{c1::nervoso}}.', 'nervoso', 2, 'prova'],
    ['Exantema súbito roséola infantum é causado por herpesvírus humano {{c1::6}}.', '6', 2, 'diferenciacao'],
    ['Febre alta e exantema maculopapular favorece hipótese de vírus {{c1::exantemático}}.', 'exantemático', 1, 'definicao'],
    ['Contagem de linfócitos pode cair no sarampo agudo refletindo {{c1::imunossupressão}} transitória.', 'imunossupressão', 2, 'mecanismo'],
    ['Vacina tríplice viral MMR protege contra sarampo, rubéola e {{c1::caxumba}}.', 'caxumba', 1, 'prova']
  ], [
    ['Gestante não imune exposta a rubéola necessita investigação sorológica {{c1::urgente}}.', 'urgente'],
    ['Suplementação vitamina A reduz complicações graves de sarampo em áreas com {{c1::deficiência}}.', 'deficiência']
  ]));

  blocks.push(...L('mad2_a8', [
    ['Hepatite A transmite-se principalmente por via {{c1::fecal-oral}}.', 'fecal-oral', 1, 'definicao'],
    ['Hepatite B crônica correlaciona-se com DNA viral de {{c1::HBV}} persistindo no fígado.', 'HBV', 1, 'mecanismo'],
    ['Hepatite C cura com antivirais de ação direta que bloqueiam proteínas virais {{c1::não estruturais}}.', 'não estruturais', 2, 'clinica'],
    ['Hepatite E grave em gravidez costuma associar-se a falência hepática {{c1::fulminante}}.', 'fulminante', 2, 'prova'],
    ['Anti-HBs positivo após vacina indica imunidade contra {{c1::hepatite B}}.', 'hepatite B', 1, 'prova'],
    ['HBsAg persistente por meses sugere infecção {{c1::crônica}} por hepatite B.', 'crônica', 1, 'clinica'],
    ['HCV raramente cursa com infecção fulminante aguda mas pode cronificar em até {{c1::80 por cento}} dos casos.', '80 por cento', 2, 'prova'],
    ['Coinfecção HIV-HCV acelera fibrose hepática por inflamação {{c1::contínua}}.', 'contínua', 2, 'mecanismo'],
    ['Vacinação para hepatite B usa antígeno de superfície {{c1::recombinante}}.', 'recombinante', 1, 'definicao'],
    ['Surto de hepatite A costuma relacionar-se a contaminação de alimento ou {{c1::água}}.', 'água', 1, 'clinica']
  ], [
    ['Interferon peguilado foi esquema antigo para HCV antes dos inibidores de {{c1::NS5A}}.', 'NS5A'],
    ['Profilaxise pós-exposição ocupacional HBV pode incluir imunoglobulina específica anti-{{c1::HBs}}.', 'HBs']
  ]));

  blocks.push(...L('mad2_a9', [
    ['O vírus HIV usa proteína {{c1::gp120}} para ligar-se inicialmente ao receptor CD4.', 'gp120', 1, 'mecanismo'],
    ['Co-receptores CCR5 e CXCR4 participam da fusão da membrana do {{c1::vírus}}.', 'vírus', 2, 'mecanismo'],
    ['Integrase viral insere DNA proviral no genoma do {{c1::hospedeiro}}.', 'hospedeiro', 2, 'mecanismo'],
    ['Carga viral plasmática HIV monitora replicação e resposta a {{c1::antirretroviral}}.', 'antirretroviral', 1, 'clinica'],
    ['CD4 baixo predispõe infecções oportunistas como pneumonia por {{c1::Pneumocystis}}.', 'Pneumocystis', 2, 'clinica'],
    ['Profilaxia pré-exposição PrEP combina tenofovir e {{c1::emtricitabina}} em esquema oral.', 'emtricitabina', 2, 'prova'],
    ['CD4 abaixo de 200 por microlitro reforça risco de infecção por citomegalovírus e {{c1::MAC}}.', 'MAC', 2, 'prova'],
    ['Terapia antirretroviral precoce reduz transmissão sexual por supressão de {{c1::viremia}}.', 'viremia', 1, 'mecanismo'],
    ['Resistência a inibidores de protease exige genotipagem antes de trocar {{c1::esquema}}.', 'esquema', 2, 'clinica'],
    ['Linfopenia com inversão razão CD4/CD8 sugere evolução para imunodeficiência {{c1::adquirida}}.', 'adquirida', 1, 'definicao']
  ], [
    ['Maraviroc bloqueia {{c1::CCR5}} e reduz entrada de vírus tropo para esse co-receptor.', 'CCR5'],
    ['Raltegravir inibe integrase e previne inserção do {{c1::provirus}}.', 'provirus']
  ]));

  blocks.push(...L('mad2_a10', [
    ['HSV-1 costuma latenciazar em gânglio {{c1::trigeminal}}.', 'trigeminal', 2, 'prova'],
    ['VZV após varicela latencia no gânglio sensitivo da raiz {{c1::dorsal}}.', 'dorsal', 2, 'mecanismo'],
    ['CMV reativa em hospedeiro imunossuprimido com retinite e {{c1::esofagite}}.', 'esofagite', 2, 'clinica'],
    ['Mononucleose infecciosa por EBV associa-se a linfócitos atípicos no {{c1::sangue}} periférico.', 'sangue', 1, 'clinica'],
    ['Aciclovir atua como análogo de guanosina que bloqueia DNA polimerase de {{c1::herpesvírus}}.', 'herpesvírus', 2, 'mecanismo'],
    ['Herpes neonatal grave exige tratamento intensivo com {{c1::aciclovir}} intravenoso.', 'aciclovir', 1, 'clinica'],
    ['Herpes zoster localizado demanda antiviral precoce para reduzir dor {{c1::neuropática}}.', 'neuropática', 2, 'clinica'],
    ['EBV associa-se a linfoma de Burkitt em contexto de {{c1::malaria}} endêmica.', 'malaria', 2, 'prova'],
    ['CMV congênito pode causar calcificações periventriculares no {{c1::encéfalo}}.', 'encéfalo', 2, 'prova'],
    ['Varicela em imunocompetente costuma ser autolimitada com lesões em {{c1::ondas}}.', 'ondas', 1, 'clinica']
  ], [
    ['Valaciclovir tem maior biodisponibilidade oral que {{c1::aciclovir}}.', 'aciclovir'],
    ['Foscarnet pode ser usado em CMV resistente a {{c1::ganciclovir}}.', 'ganciclovir']
  ]));

  blocks.push(...L('mad2_a11', [
    ['Poliovírus é enterovírus transmitido principalmente por via {{c1::fecal-oral}}.', 'fecal-oral', 1, 'definicao'],
    ['Paralisia flácida aguda assimétrica sugere poliomielite até prova em {{c1::contrário}}.', 'contrário', 2, 'clinica'],
    ['Vacina IPV inativa evita replicação viral no intestino ao contrário da vacina {{c1::oral}}.', 'oral', 2, 'diferenciacao'],
    ['Bulbo e medula anterior perdem neurônios motores na poliomielite {{c1::aguda}}.', 'aguda', 1, 'mecanismo'],
    ['Recuperação parcial pode ocorrer por plastividade de axônios {{c1::remanescentes}}.', 'remanescentes', 2, 'mecanismo'],
    ['Surtos de poliomielite exigem vigilância epidemiológica e cobertura vacinal {{c1::alta}}.', 'alta', 1, 'prova'],
    ['Paralisia associada a vacina oral atenuada é evento {{c1::raro}}.', 'raro', 2, 'prova'],
    ['Líquor na poliomielite pode mostrar pleocitose linfocítica {{c1::inicial}}.', 'inicial', 2, 'clinica'],
    ['Déficit motor proximal progressivo diferencia esclerose lateral amiotrófica de poliomielite {{c1::aguda}}.', 'aguda', 2, 'diferenciacao'],
    ['Imunidade mucosa intestinal é alvo da vacina oral contra {{c1::poliovírus}}.', 'poliovírus', 1, 'mecanismo']
  ], [
    ['Post-poliomyelitis syndrome manifesta fraqueza anos após infecção {{c1::aguda}}.', 'aguda'],
    ['Erradicação global depende de interrupção da circulação de vírus {{c1::selvagem}}.', 'selvagem']
  ]));

  blocks.push(...L('mad2_a12', [
    ['Dengue grave costuma associar-se a aumento de permeabilidade vascular e {{c1::extravasamento}} plasmático.', 'extravasamento', 2, 'mecanismo'],
    ['Trombocitopenia na dengue aumenta risco de sangramento {{c1::mucoso}}.', 'mucoso', 1, 'clinica'],
    ['Zika congênita pode associar-se a microcefalia e calcificações de {{c1::córtex}}.', 'córtex', 2, 'clinica'],
    ['Chikungunya costuma cursar com artralgia intensa persistente após fase {{c1::aguda}}.', 'aguda', 1, 'clinica'],
    ['Hidratação guiada por sinais de alarme é pilar no manejo da dengue sem {{c1::choque}}.', 'choque', 1, 'clinica'],
    ['Repouso e analgesia evitam AINE na dengue por risco de {{c1::sangramento}}.', 'sangramento', 2, 'prova'],
    ['Vírus dengue possui quatro sorotipos que podem influenciar gravidade na {{c1::reinfecção}}.', 'reinfecção', 2, 'mecanismo'],
    ['Transmissão de arbovírus urbanos depende principalmente de mosquito {{c1::Aedes}}.', 'Aedes', 1, 'definicao'],
    ['Guillain-Barré foi descrito como complicação pós infecção por {{c1::Zika}}.', 'Zika', 2, 'prova'],
    ['PCR viral pode confirmar dengue no início da febre com boa {{c1::sensibilidade}}.', 'sensibilidade', 2, 'prova']
  ], [
    ['Plaquetopenia severa com extravasamento é sinal de alarme para expansão rápida de {{c1::volume}}.', 'volume'],
    ['Chikungunya e dengue compartem vetor mas diferem em padrão de dor {{c1::articular}}.', 'articular']
  ]));

  blocks.push(...L('mad2_a13', [
    ['Malária por Plasmodium falciparum pode cursar com hemólise e parasitemia {{c1::alta}}.', 'alta', 2, 'clinica'],
    ['Crescimento intraeritrocitário de Plasmodium gera hemácias com múltiplos anéis de {{c1::Schuffner}}.', 'Schuffner', 2, 'prova'],
    ['Doença de Chagas aguda pode mostrar sinal de {{c1::Romaña}} periorbicular.', 'Romaña', 2, 'clinica'],
    ['Megaesôfago na doença de Chagas reflete destruição de neurônios do plexo {{c1::mioentérico}}.', 'mioentérico', 2, 'mecanismo'],
    ['Toxoplasmose cerebral em AIDS aparece como lesões com realce em anel no {{c1::cérebro}}.', 'cérebro', 2, 'prova'],
    ['Trichomonas vaginalis é protozoário flagelado detectado em esfregaço de {{c1::vaginal}}.', 'vaginal', 1, 'clinica'],
    ['Tratamento de toxoplasmose cerebral combina pirimetamina, sulfadiazina e {{c1::leucovorina}}.', 'leucovorina', 2, 'clinica'],
    ['Benznidazol é droga principal na fase aguda da infecção pelo {{c1::T. cruzi}}.', 'T. cruzi', 1, 'prova'],
    ['Malária benigna por P. vivax pode recrudescer do fígado por forma {{c1::hipnozoíta}}.', 'hipnozoíta', 2, 'mecanismo'],
    ['Gotas grossas ou esfregaço espesso auxiliam diagnóstico parasitológico de {{c1::malária}}.', 'malária', 1, 'prova']
  ], [
    ['Artemisinina derivada reduz carga parasitária rapidamente em malária {{c1::grave}}.', 'grave'],
    ['Profilaxia primária de toxoplasmose em HIV CD4 baixo usa {{c1::trimetoprima-sulfametoxazol}}.', 'trimetoprima-sulfametoxazol']
  ]));

  blocks.push(...L('mad2_a14', [
    ['Ascaris lumbricoides habita lúmen intestinal e pode causar obstrução de {{c1::intestino}} delgado.', 'intestino', 2, 'clinica'],
    ['Vermes Ancylostoma fixam-se na mucosa e podem gerar anemia por perda de {{c1::ferro}}.', 'ferro', 1, 'mecanismo'],
    ['Strongyloides pode perpetuar autoinfecção por larvas que penetram {{c1::pele}}.', 'pele', 2, 'mecanismo'],
    ['Hiperinfecção por Strongyloides em imunossuprimido acomete pulmão e {{c1::intestino}}.', 'intestino', 2, 'clinica'],
    ['Ovos de Ascaris são eliminados nas fezes e contaminação ocorre por ingestão de {{c1::ovo}}.', 'ovo', 1, 'mecanismo'],
    ['Albendazol ou mebendazol tratam geo-helmintos intestinais comuns como {{c1::Ascaris}}.', 'Ascaris', 1, 'clinica'],
    ['Anemia microcítica em criança rural sugere parasitismo crônico por {{c1::ancilostomídeo}}.', 'ancilostomídeo', 2, 'prova'],
    ['Larva migrans cutânea por strongyloides aparece como lesão linear {{c1::pruriginosa}}.', 'pruriginosa', 2, 'clinica'],
    ['Diagnóstico de strongyloides pode usar larvae nas fezes em método de {{c1::Baermann}}.', 'Baermann', 2, 'prova'],
    ['Verminose massiva pode causar colestase por migrção larvaria por {{c1::fígado}}.', 'fígado', 2, 'clinica']
  ], [
    ['Ivermectina é alternativa importante em strongyloides {{c1::disseminada}}.', 'disseminada'],
    ['Tinha não se trata com anti-helmínticos benzimidazóis da mesma linha usada para {{c1::nematódeos}}.', 'nematódeos']
  ]));

  blocks.push(...L('mad2_a15', [
    ['Taenia solium hospeda-se em humano como verme adulto após ingestão de {{c1::cisticerco}}.', 'cisticerco', 2, 'mecanismo'],
    ['Neurocisticercose resulta de cisticercos no parênquima {{c1::encefálico}}.', 'encefálico', 1, 'clinica'],
    ['Taenia saginata transmite-se por carne bovina com {{c1::cisticerco}}.', 'cisticerco', 1, 'mecanismo'],
    ['Diferenciar proglótides ajuda a distinguir T. solium de {{c1::saginata}}.', 'saginata', 2, 'diferenciacao'],
    ['Praziquantel é droga de escolha para teníase intestinal por {{c1::Taenia}}.', 'Taenia', 1, 'clinica'],
    ['Convulsão em área endêmica lembra neurocisticercose até prova em {{c1::contrário}}.', 'contrário', 1, 'clinica'],
    ['Cisticercose ocular pode contraindicar tratamento antiparasitário por risco de {{c1::inflamação}}.', 'inflamação', 2, 'prova'],
    ['Sorologia pode apoiar diagnóstico de neurocisticercose com baixa especificidade em área {{c1::endêmica}}.', 'endêmica', 2, 'prova'],
    ['Controle sanitário de suinagem reduz ciclo de T. solium em {{c1::comunidade}}.', 'comunidade', 1, 'definicao'],
    ['Tomografia cerebral mostra lesões nodulares calcificadas tardias em {{c1::neurocisticercose}}.', 'neurocisticercose', 2, 'clinica']
  ], [
    ['Albendazol é usado com corticoide no tratamento de neurocisticercose {{c1::parenquimatosa}}.', 'parenquimatosa'],
    ['T. saginata raramente causa neurocisticercose porque cisticerco ocorre apenas com {{c1::T. solium}}.', 'T. solium']
  ]));

  blocks.push(...L('mad2_a16', [
    ['Penicilinas ligam-se a proteínas de ligação à penicilina e bloqueiam transpeptidação da {{c1::parede}} celular.', 'parede', 1, 'mecanismo'],
    ['Cefalosporinas de terceira geração cruzam melhor barreira meníngea que de {{c1::primeira}} geração.', 'primeira', 2, 'prova'],
    ['Carbapenêmicos resistem a muitas beta-lactamases de {{c1::classe A}}.', 'classe A', 2, 'diferenciacao'],
    ['Vancomicina bloqueia síntese de parede em cocos Gram {{c1::positivos}} espessos.', 'positivos', 1, 'clinica'],
    ['MRSA expressa PBP2a de afinidade baixa por beta-{{c1::lactâmicos}}.', 'lactâmicos', 2, 'mecanismo'],
    ['Inibidores de beta-lactamase como clavulanato protegem amoxicilina contra destruição {{c1::enzimática}}.', 'enzimática', 2, 'mecanismo'],
    ['Hipersensibilidade IgE mediada à penicilina pode causar anafilaxia {{c1::aguda}}.', 'aguda', 1, 'clinica'],
    ['Cefazolina é cefalosporina parenteral de primeira geração útil em profilaxia {{c1::cirúrgica}}.', 'cirúrgica', 1, 'prova'],
    ['Enterococcus resistente a vancomicina torna infecção grave difícil de {{c1::tratar}}.', 'tratar', 1, 'clinica'],
    ['Teicoplanina é glicopeptídeo com meia-vida longa para uso {{c1::intermitente}}.', 'intermitente', 2, 'prova']
  ], [
    ['Daptomicina destrói membrana mas é inativada pelo surfactante pulmonar não servindo para {{c1::pneumonia}}.', 'pneumonia'],
    ['Alergia cruzada entre penicilina e cefalosporina de primeira geração é mais relevante que com de {{c1::terceira}}.', 'terceira']
  ]));

  blocks.push(...L('mad2_a17', [
    ['Aminoglicosídeos ligam-se subunidade 30S e causam erro de leitura do {{c1::mRNA}}.', 'mRNA', 2, 'mecanismo'],
    ['Macrolídeos bloqueiam túnel ribossomal da subunidade {{c1::50S}}.', '50S', 1, 'mecanismo'],
    ['Tetraciclinas impedem acoplamento aminoacil-tRNA ao {{c1::ribossomo}}.', 'ribossomo', 2, 'mecanismo'],
    ['Clindamicina inibe síntese proteica bacteriana na subunidade {{c1::50S}}.', '50S', 1, 'prova'],
    ['Aminoglicosídeos concentram-se no córtex renal e podem ser {{c1::nefrotóxicos}}.', 'nefrotóxicos', 1, 'clinica'],
    ['Macrolídeo eritromicina inibe citocromo P450 e aumenta níveis de {{c1::varfarina}}.', 'varfarina', 2, 'prova'],
    ['Linezolida cobre MRSA por inibir síntese proteica sem ligação à {{c1::penicilina}}.', 'penicilina', 2, 'clinica'],
    ['Aminoglicosídeos são sinérgicos com beta-lactâmicos contra enterococcus sensível na {{c1::endocardite}}.', 'endocardite', 2, 'clinica'],
    ['Tetraciclina contraindicada em gestante danifica dentes pela deposição em {{c1::dentina}}.', 'dentina', 2, 'prova'],
    ['Macrolídeo azitromicina acumula-se em leucócitos e persiste em {{c1::tecido}}.', 'tecido', 1, 'mecanismo']
  ], [
    ['Gentamicina requer monitorar função renal e níveis séricos em uso {{c1::prolongado}}.', 'prolongado'],
    ['Estreptomicina é aminoglicosídeo chave no esquema inicial de {{c1::tuberculose}}.', 'tuberculose']
  ]));

  blocks.push(...L('mad2_a18', [
    ['Fluoroquinolonas inibem DNA girase e topoisomerase IV em bactérias {{c1::Gram negativas}}.', 'Gram negativas', 2, 'mecanismo'],
    ['Sulfonamida inibe diidropteroato sintase na via de {{c1::folato}}.', 'folato', 1, 'mecanismo'],
    ['Trimetoprima bloqueia diidrofolato redutase gerando efeito sinérgico com {{c1::sulfametoxazol}}.', 'sulfametoxazol', 2, 'prova'],
    ['Resistência a fluoroquinolona pode envolver mutações na {{c1::quirase}}.', 'quirase', 2, 'mecanismo'],
    ['Uso de fluoroquinolona em criança pequena associa-se a risco teórico em {{c1::cartilagem}}.', 'cartilagem', 2, 'prova'],
    ['TMP-SMX é primeira linha para profilaxe de Pneumocystis em {{c1::HIV}}.', 'HIV', 1, 'clinica'],
    ['Nitrofurantoína concentra-se na urina e serve a infecção de {{c1::trato}} urinário baixo.', 'trato', 1, 'clinica'],
    ['Metronidazol não cobre aeróbios estritos mas cobre anaeróbios {{c1::gram negativos}}.', 'gram negativos', 2, 'diferenciacao'],
    ['Quinolona levofloxacino amplia espectro mas aumenta risco de {{c1::tendinite}}.', 'tendinite', 2, 'clinica'],
    ['Gene mecA confere resistência a oxacilina em {{c1::Staphylococcus}} aureus.', 'Staphylococcus', 1, 'prova']
  ], [
    ['Fosfomicina oral monodose pode tratar cistite não complicada por E. {{c1::coli}}.', 'coli'],
    ['Desbalanceamento clostridial após antibióticos de amplo espectro favorece colite por C. {{c1::difficile}}.', 'difficile']
  ]));

  blocks.push(...L('mad2_a19', [
    ['Oseltamivir inibe neuraminidase do vírus da {{c1::influenza}}.', 'influenza', 1, 'mecanismo'],
    ['Zanamivir inibe neuraminidase com administração {{c1::inalatória}}.', 'inalatória', 2, 'prova'],
    ['Aciclovir exige fosforilação viral para atividade contra {{c1::herpes}}.', 'herpes', 1, 'mecanismo'],
    ['Tenofovir é análogo de nucleotídeo usado no bloqueio da transcriptase reversa do {{c1::HIV}}.', 'HIV', 1, 'mecanismo'],
    ['Sofosbuvir é inibidor de polimerase NS5B usado em hepatite {{c1::C}}.', 'C', 1, 'clinica'],
    ['Ganciclovir trata infecção grave por CMV em imunossuprimido mas é {{c1::mielossupressor}}.', 'mielossupressor', 2, 'clinica'],
    ['Baloxavir bloqueia endonuclease dependente de cap do vírus da influenza em dose {{c1::única}}.', 'única', 2, 'prova'],
    ['Ribavirina teve uso histórico em alguns contextos de vírus respiratório mas com {{c1::hemólise}}.', 'hemólise', 2, 'clinica'],
    ['Entecavir suprime replicação de HBV com barreira genética {{c1::alta}}.', 'alta', 2, 'prova'],
    ['Profilaxia pós-exposição a HIV combina três classes de {{c1::antirretrovirais}}.', 'antirretrovirais', 1, 'clinica']
  ], [
    ['Ledipasvir e sofosbuvir formam esquema oral curto para genótipo 1 de {{c1::HCV}}.', 'HCV'],
    ['Cidofovir é análogo de DNA usado em retinite por CMV resistente mas é {{c1::nefrotóxico}}.', 'nefrotóxico']
  ]));

  blocks.push(...L('mad2_a20', [
    ['Metronidazol gera intermediários tóxicos que destroem DNA de protozoários {{c1::anaeróbios}}.', 'anaeróbios', 2, 'mecanismo'],
    ['Albendazol interfere na polimerização de tubulina de helmintos {{c1::nematódeos}}.', 'nematódeos', 2, 'mecanismo'],
    ['Praziquantel aumenta permeabilidade de céstodes ao {{c1::cálcio}}.', 'cálcio', 1, 'mecanismo'],
    ['Anfotericina B liga-se ergosterol e forma poros na membrana de {{c1::fungos}}.', 'fungos', 1, 'mecanismo'],
    ['Fluconazol inibe 14-alfa-desmetilase em leveduras sensíveis como {{c1::Candida}}.', 'Candida', 1, 'clinica'],
    ['Itraconazol acumula-se em queratinoides e serve a dermatofitoses {{c1::crônicas}}.', 'crônicas', 2, 'clinica'],
    ['Caspofungina inibe síntese de parede fúngica por bloqueio de {{c1::glucano}}.', 'glucano', 2, 'mecanismo'],
    ['Nifurtimox é droga usada na fase aguda de doença de {{c1::Chagas}}.', 'Chagas', 1, 'prova'],
    ['Azitromicina não trata protozoários sensíveis a metronidazol como {{c1::Giardia}}.', 'Giardia', 2, 'diferenciacao'],
    ['Terbinafina inibe esqualeno epoxidase em infecções por {{c1::dermatófitos}}.', 'dermatófitos', 2, 'mecanismo']
  ], [
    ['Voriconazol é azol de escolha empírica em aspergilose invasiva pulmonar em {{c1::neutropênico}}.', 'neutropênico'],
    ['Melarsoprol trata segunda fase de tripanossomíase mas tem {{c1::neurotoxicidade}}.', 'neurotoxicidade']
  ]));

  return blocks;
}

function buildFp3() {
  const L = pack.bind(null, 'fisiopato3');
  const blocks = [];

  blocks.push(...L('fp3_a1', [
    ['Redução de ATP por hipóxia leva à falha da bomba de {{c1::sódio}}.', 'sódio', 1, 'mecanismo'],
    ['Necrose coagulativa preserva contorno tecidual por horas em {{c1::isquemia}}.', 'isquemia', 2, 'definicao'],
    ['Apoptose depende de ativação de proteases chamadas {{c1::caspases}}.', 'caspases', 1, 'mecanismo'],
    ['Calcificação distrófica ocorre em tecido necrótico sem hipercalcemia {{c1::sistêmica}}.', 'sistêmica', 2, 'diferenciacao'],
    ['Lipofuscina acumula-se como pigmento de desgaste em células {{c1::envelhecidas}}.', 'envelhecidas', 1, 'definicao'],
    ['Hemosiderina reflete armazenamento de ferro após hemorragia {{c1::local}}.', 'local', 2, 'mecanismo'],
    ['Lesão reversível por hipóxia pode produzir cor edema e bolações de {{c1::retículo}}.', 'retículo', 2, 'prova'],
    ['Autofagia remove organelas danificadas encapsulando-as em {{c1::autofagossomo}}.', 'autofagossomo', 2, 'mecanismo'],
    ['Necrose liquefativa predomina no encéfalo por riqueza em {{c1::lipases}} lipolíticas.', 'lipases', 2, 'prova'],
    ['Free radicals oxidam lipídios da membrana numa reação em {{c1::cadeia}}.', 'cadeia', 1, 'mecanismo']
  ], [
    ['Necroptose é morte celular programada independente de caspases mediada por {{c1::RIP}} quinases.', 'RIP'],
    ['Condensação cromatínica em tijolo é achado clássico de {{c1::apoptose}}.', 'apoptose']
  ]));

  blocks.push(...L('fp3_a2', [
    ['Tríade de Virchow inclui estase, endotélio lesionado e {{c1::hipercoagulabilidade}}.', 'hipercoagulabilidade', 1, 'definicao'],
    ['Embolia pulmonar costuma originar-se de trombo de veia {{c1::profunda}}.', 'profunda', 1, 'clinica'],
    ['Infarto branco ocorre por oclusão arterial sem {{c1::hemorragia}} prévia.', 'hemorragia', 2, 'diferenciacao'],
    ['Edema por baixa oncótica plasmática associa-se a hipoproteinemia ou {{c1::síndrome nefrótica}}.', 'síndrome nefrótica', 2, 'clinica'],
    ['Hiperemia ativa reflete vasodilatação funcional em tecido {{c1::inflamado}}.', 'inflamado', 1, 'mecanismo'],
    ['Choque hipovolêmico reduz pré-carga e débito {{c1::cardíaco}}.', 'cardíaco', 1, 'mecanismo'],
    ['Trombo mural adere-se à parede de câmara dilatada após {{c1::infarto}}.', 'infarto', 2, 'clinica'],
    ['Embolia gordurosa pode seguir fratura de osso {{c1::longo}}.', 'longo', 2, 'prova'],
    ['Trombose venosa profunda predispõe imobilização pós-{{c1::cirúrgica}}.', 'cirúrgica', 1, 'prova'],
    ['Infarto hemorrágico cerebral segue ruptura de ramo de artéria {{c1::cerebral}}.', 'cerebral', 1, 'clinica']
  ], [
    ['Embolia de líquido amniótico pode causar coagulação intravascular {{c1::disseminada}}.', 'disseminada'],
    ['Isquemia crítica de membro com dor em repouso indica redução grave de perfusão {{c1::arterial}}.', 'arterial']
  ]));

  blocks.push(...L('fp3_a3', [
    ['Biodisponibilidade mede fração do fármaco que chega à circulação {{c1::sistêmica}}.', 'sistêmica', 1, 'definicao'],
    ['Primeira passagem hepática reduz disponibilidade oral de fármacos altamente {{c1::metabolizados}}.', 'metabolizados', 1, 'mecanismo'],
    ['Meia-vida plasmática guia intervalo de dose para manter concentração {{c1::eficaz}}.', 'eficaz', 1, 'mecanismo'],
    ['Curva dose-resposta relaciona dose com magnitude de {{c1::efeito}}.', 'efeito', 1, 'definicao'],
    ['Ligação a albumina reduz fração {{c1::livre}} ativa no plasma.', 'livre', 2, 'mecanismo'],
    ['Via sublingual contorna metabolismo de primeira passagem no {{c1::fígado}}.', 'fígado', 1, 'clinica'],
    ['Efeito teto ocorre quando o receptor já está {{c1::saturado}}.', 'saturado', 2, 'mecanismo'],
    ['Biodisponibilidade absoluta compara AUC oral com administração {{c1::intravenosa}}.', 'intravenosa', 2, 'prova'],
    ['Fármaco agonista aumenta eficácia ao imitar o {{c1::ligante}} endógeno.', 'ligante', 2, 'mecanismo'],
    ['Antagonismo competitivo eleva ED50 sem reduzir E{{c1::max}}.', 'max', 2, 'mecanismo']
  ], [
    ['Clearance hepático alto favorece sensibilidade a inibidores de {{c1::CYP3A4}}.', 'CYP3A4'],
    ['Índice terapêutico estreito exige monitorização de níveis como em {{c1::digoxina}}.', 'digoxina']
  ]));

  blocks.push(...L('fp3_a4', [
    ['Norepinefrina predomina em vasoconstrição {{c1::periférica}}.', 'periférica', 1, 'clinica'],
    ['Epinefrina em dose baixa pode dilatar leito muscular esquelético por beta-{{c1::2}}.', '2', 2, 'mecanismo'],
    ['Fenilefrina é agonista alfa-1 com pouco efeito {{c1::cardíaco}} direto.', 'cardíaco', 1, 'diferenciacao'],
    ['Salbutamol inalatório é beta-2 seletivo na asma e {{c1::broncoespasmo}}.', 'broncoespasmo', 1, 'clinica'],
    ['Propranolol bloqueia beta usado em taquiarritmia e {{c1::hipertireoidismo}}.', 'hipertireoidismo', 2, 'clinica'],
    ['Esmolol é betabloqueador de meia-vida muito curta por via {{c1::intravenosa}}.', 'intravenosa', 2, 'prova'],
    ['Clonidina reduz liberação central de noradrenalina agindo em alfa-{{c1::2}} central.', '2', 2, 'mecanismo'],
    ['Dobutamina aumenta contratilidade com menor elevação de {{c1::frequência}}.', 'frequência', 2, 'clinica'],
    ['Noradrenalina intravenosa eleva resistência vascular sistêmica na {{c1::sepse}} refratária.', 'sepse', 2, 'clinica'],
    ['Fentolamina antagoniza alfa em extravasamento perivascular de {{c1::noradrenalina}}.', 'noradrenalina', 2, 'clinica']
  ], [
    ['Isoproterenol não seletivo beta aumenta risco de arritmia em cardiopatia {{c1::isquêmica}}.', 'isquêmica'],
    ['Mirabegron relaxa bexiga por agonismo de beta-3 na musculatura {{c1::detrusora}}.', 'detrusora']
  ]));

  blocks.push(...L('fp3_a5', [
    ['Pilocarpina é agonista muscarínico usada no glaucoma de {{c1::ângulo}} aberto.', 'ângulo', 1, 'clinica'],
    ['Benzodiazepínicos potencializam GABA-A e não são agonistas {{c1::colinérgicos}} diretos.', 'colinérgicos', 2, 'diferenciacao'],
    ['Neostigmina inibe acetilcolinesterase e reverte bloqueio {{c1::não despolarizante}}.', 'não despolarizante', 2, 'clinica'],
    ['Atropina usa-se na bradicardia sinusal {{c1::sintomática}}.', 'sintomática', 1, 'clinica'],
    ['Ipratrópio inalatório bloqueia broncoconstrição {{c1::parassimpática}}.', 'parassimpática', 1, 'mecanismo'],
    ['Escopolamina cruza melhor a barreira hematoencefálica que a {{c1::atropina}}.', 'atropina', 2, 'prova'],
    ['Donepezila inibe colinesterase central na doença de {{c1::Alzheimer}}.', 'Alzheimer', 1, 'clinica'],
    ['Succinilcolina é agonista nicotínico que despolariza placa {{c1::mioneural}}.', 'mioneural', 2, 'mecanismo'],
    ['Betanechol estimula muscarínicos para retenção urinária neurogênica após {{c1::cirúrgica}}.', 'cirúrgica', 2, 'prova'],
    ['Tiotrópio inalatório de longa ação reduz exacerbações na {{c1::DPOC}}.', 'DPOC', 1, 'clinica']
  ], [
    ['Glicopirrolato tem menor penetração SNC que atropina por ser quaternário {{c1::amônio}}.', 'amônio'],
    ['Organofosforados irreversivelmente inibem acetilcolinesterase causando crise {{c1::colinérgica}}.', 'colinérgica']
  ]));

  blocks.push(...L('fp3_a6', [
    ['Histamina ativa H1 em prurido e {{c1::edema}} da urticária.', 'edema', 1, 'mecanismo'],
    ['Prostaglandinas aumentam vasodilatação e {{c1::dor}} na inflamação aguda.', 'dor', 1, 'mecanismo'],
    ['Leucotrienos mediam broncoconstrição na asma {{c1::alérgica}}.', 'alérgica', 1, 'clinica'],
    ['Macrófagos secretam fatores que orientam fibrose no reparo {{c1::defeituoso}}.', 'defeituoso', 2, 'mecanismo'],
    ['Abscesso acumula pus limitado por cápsula de {{c1::granulação}}.', 'granulação', 2, 'definicao'],
    ['Granuloma reflete agregado de macrófagos epiteloides ao redor de {{c1::antígeno}} persistente.', 'antígeno', 2, 'definicao'],
    ['Cicatrização por primeira intenção ocorre em ferida limpa e bordas {{c1::aproximadas}}.', 'aproximadas', 2, 'prova'],
    ['Hiperplasia adapta número celular a estímulo {{c1::fisiológico}} reversível.', 'fisiológico', 2, 'definicao'],
    ['Metaplasia troca um epitélio maduro por outro devido a {{c1::irritação}} crônica.', 'irritação', 1, 'mecanismo'],
    ['Queloide estende colágeno além das margens da {{c1::ferida}} original.', 'ferida', 2, 'clinica']
  ], [
    ['Citocinas TNF e IL-1 mediam febre na resposta a {{c1::pirogênio}}.', 'pirogênio'],
    ['Angiogênese no granuloma piógeno forma massa vascular {{c1::lobulada}}.', 'lobulada']
  ]));

  blocks.push(...L('fp3_a7', [
    ['AINEs inibem COX e reduzem síntese de {{c1::prostaglandinas}}.', 'prostaglandinas', 1, 'mecanismo'],
    ['Inibidor seletivo COX-2 tende a menos toxidade {{c1::gastroduodenal}}.', 'gastroduodenal', 1, 'clinica'],
    ['Prednisolona é glicocorticoide oral com efeito {{c1::anti-inflamatório}}.', 'anti-inflamatório', 1, 'mecanismo'],
    ['Hidrocortisona de reposição imita cortisol em insuficiência {{c1::adrenal}}.', 'adrenal', 1, 'clinica'],
    ['Dexametasona cruza bem a barreira hematoencefálica com baixa atividade {{c1::mineralocorticoide}}.', 'mineralocorticoide', 2, 'diferenciacao'],
    ['Efeito adverso crônico de corticoide inclui osteoporose e {{c1::hiperglicemia}}.', 'hiperglicemia', 1, 'clinica'],
    ['Ácido acetilsalicílico em baixa dose inibe agregação plaquetária por COX-1 em {{c1::plaquetas}}.', 'plaquetas', 2, 'mecanismo'],
    ['Mesalazina atua topicamente na mucosa na doença inflamatória {{c1::intestinal}}.', 'intestinal', 1, 'clinica'],
    ['Flecaina não é AINE e exemplifica antiarrítmico de classe {{c1::IC}}.', 'IC', 2, 'diferenciacao'],
    ['Celecoxibe é exemplo de inibidor preferencial da isoforma {{c1::COX-2}}.', 'COX-2', 1, 'prova']
  ], [
    ['Síndrome de Cushing iatrogênica segue uso prolongado de {{c1::prednisona}}.', 'prednisona'],
    ['Uso de AINE pode precipitar insuficiência renal aguda por hipoperfusão {{c1::medular}}.', 'medular']
  ]));

  blocks.push(...L('fp3_a8', [
    ['Proto-oncogene mutado age como dominante por ganho de {{c1::função}}.', 'função', 2, 'mecanismo'],
    ['Gene supressor de tumor costuma exigir perda dos dois {{c1::alelos}} no modelo two-hit.', 'alelos', 2, 'mecanismo'],
    ['Carcinoma maligno deriva de epitélio; sarcoma deriva de mesênquima ou tecido {{c1::conjuntivo}}.', 'conjuntivo', 2, 'diferenciacao'],
    ['Índice mitótico alto sugere proliferação {{c1::rápida}}.', 'rápida', 1, 'prova'],
    ['Primeiro gânglio linfático a drenar o tumor primário é o {{c1::sentinela}}.', 'sentinela', 1, 'clinica'],
    ['Metástase gástrica bilateral em ovários configura tumor de {{c1::Krukenberg}}.', 'Krukenberg', 2, 'prova'],
    ['Neoplasia benigna tende a ser expansiva; maligna é infiltrativa e pode {{c1::metastatizar}}.', 'metastatizar', 1, 'definicao'],
    ['Displasia é proliferação desordenada sem invasão do {{c1::estroma}}.', 'estroma', 2, 'definicao'],
    ['Anaplasia denota pleomorfismo e núcleos {{c1::atípicos}}.', 'atípicos', 1, 'definicao'],
    ['Na TNM a letra M indica metástase {{c1::à distância}}.', 'à distância', 1, 'definicao']
  ], [
    ['HER2 amplificado guia uso de trastuzumabe em carcinoma de {{c1::mama}}.', 'mama'],
    ['Carcinoma in situ corresponde a malignidade sem romper a membrana {{c1::basal}}.', 'basal']
  ]));

  blocks.push(...L('fp3_a9', [
    ['Metotrexato inibe diidrofolato redutase e é antagonista do {{c1::folato}}.', 'folato', 1, 'mecanismo'],
    ['Ciclofosfamida é alquilador que forma ligações cruzadas no {{c1::DNA}}.', 'DNA', 1, 'mecanismo'],
    ['Platinas como cisplatina formam adutos que impedem replicação do {{c1::DNA}}.', 'DNA', 1, 'mecanismo'],
    ['5-fluoruracilo interrompe síntese de DNA por inibição da {{c1::timidilato}} sintase.', 'timidilato', 2, 'mecanismo'],
    ['Bleomicina causa rupturas de DNA e fibrose {{c1::pulmonar}}.', 'pulmonar', 1, 'clinica'],
    ['Doxorrubicina acumula cardiotoxicidade por radicais e dano {{c1::mitocondrial}}.', 'mitocondrial', 2, 'clinica'],
    ['Vincristina inibe microtúbulos e causa neuropatia {{c1::periférica}}.', 'periférica', 1, 'clinica'],
    ['Imatinibe bloqueia tirosinoquinase BCR-{{c1::ABL}}.', 'ABL', 1, 'mecanismo'],
    ['Rituximabe depleta linfócitos {{c1::B}} CD20-positivos.', 'B', 1, 'mecanismo'],
    ['Pembrolizumabe bloqueia interação PD-1 com {{c1::PD-L1}}.', 'PD-L1', 2, 'mecanismo']
  ], [
    ['Ifosfamida requer mesna para prevenir {{c1::cistite}} hemorrágica.', 'cistite'],
    ['Asparaginase esgota asparagina e fragiliza leucemia {{c1::linfoblástica}} aguda.', 'linfoblástica']
  ]));

  blocks.push(...L('fp3_a10', [
    ['Nefrolitíase obstrui fluxo eleva pressão tubular e pode gerar {{c1::pielonefrite}}.', 'pielonefrite', 2, 'clinica'],
    ['Glomerulonefrite rapidamente progressiva mostra meia-luas em {{c1::glomerulares}}.', 'glomerulares', 2, 'prova'],
    ['Síndrome nefrótica predomina proteinúria massiva e {{c1::hipoalbuminemia}}.', 'hipoalbuminemia', 1, 'clinica'],
    ['Síndrome nefrítica associa hematúria com {{c1::hipertensão}}.', 'hipertensão', 1, 'diferenciacao'],
    ['Nefropatia por IgA frequentemente associa hematúria macroscópica após {{c1::IVAS}}.', 'IVAS', 2, 'clinica'],
    ['Nefropatia diabética inicia com espessamento da membrana {{c1::basal}} glomerular.', 'basal', 1, 'mecanismo'],
    ['Pielonefrite aguda envolve neutrófilos no interstício e {{c1::túbulos}}.', 'túbulos', 2, 'definicao'],
    ['Urotélio da bexiga pode dar carcinoma com displasia associada a {{c1::tabagismo}}.', 'tabagismo', 2, 'clinica'],
    ['Hidronefrose dilata pelve renal por obstrução a {{c1::jusante}}.', 'jusante', 2, 'clinica'],
    ['Glomerulonefrite pós-estreptocócica costuma reduzir o complemento {{c1::C3}} sérico.', 'C3', 2, 'clinica']
  ], [
    ['Glomeruloesclerose segmentar e focal costuma progredir a insuficiência {{c1::renal}}.', 'renal'],
    ['Síndrome nefrótica costuma exigir proteinúria acima de 3,5 g por {{c1::dia}}.', 'dia']
  ]));

  blocks.push(...L('fp3_a11', [
    ['Adenoma adrenal pode secretar aldosterona causando hipocalemia e {{c1::hipertensão}}.', 'hipertensão', 1, 'clinica'],
    ['Feocromocitoma libera catecolaminas e crises de {{c1::hipertensão}} paroxística.', 'hipertensão', 1, 'clinica'],
    ['Insuficiência adrenal aguda apresenta hipotensão e {{c1::hiponatremia}}.', 'hiponatremia', 2, 'clinica'],
    ['Hiperplasia prostática benigna obstrui uretra {{c1::prostática}}.', 'prostática', 1, 'mecanismo'],
    ['Antígeno prostático específico eleva-se na malignidade mas também na {{c1::hipertrofia}}.', 'hipertrofia', 2, 'diferenciacao'],
    ['Câncer de próstata mais comum surge na zona {{c1::periférica}}.', 'periférica', 1, 'prova'],
    ['Adenocarcinoma prostático bem diferenciado forma pequenos acúmulos {{c1::glandulares}}.', 'glandulares', 2, 'definicao'],
    ['Tumor de Leydig pode secretar testosterona e causar puberdade {{c1::precoce}}.', 'precoce', 2, 'clinica'],
    ['Torção testicular é emergência vascular com dor {{c1::aguda}}.', 'aguda', 1, 'clinica'],
    ['Seminoma testicular deriva da linhagem de células {{c1::germinativas}}.', 'germinativas', 1, 'definicao']
  ], [
    ['Síndrome de Conn reflete hiperaldosteronismo primário por adenoma ou {{c1::hiperplasia}}.', 'hiperplasia'],
    ['Fibroma da túnica vaginal pode mostrar padrão em “palha de {{c1::roda}}”.', 'roda']
  ]));

  blocks.push(...L('fp3_a12', [
    ['Leiomioma uterino é tumor benigno de músculo {{c1::liso}}.', 'liso', 1, 'definicao'],
    ['Adenomiose infiltra miométrio ectópico de {{c1::endométrio}}.', 'endométrio', 1, 'definicao'],
    ['Endometriose preserva glândulas funcionantes fora da cavidade {{c1::uterina}}.', 'uterina', 1, 'mecanismo'],
    ['Endometrite puerperal associa-se a flora {{c1::polimicrobiana}}.', 'polimicrobiana', 2, 'clinica'],
    ['Doença inflamatória pélvica envolve salpingite e risco de {{c1::esterilidade}}.', 'esterilidade', 1, 'clinica'],
    ['Cisto folicular retenção de fluido em folículo não {{c1::ovulado}}.', 'ovulado', 2, 'definicao'],
    ['Carcinoma seroso de ovário costuma apresentar-se em estadio {{c1::avançado}}.', 'avançado', 1, 'clinica'],
    ['Câncer de colo inicia em epitélio escamoso na zona de {{c1::transformação}}.', 'transformação', 1, 'prova'],
    ['Condiloma por HPV mostra papiloma acantótico em vulva ou {{c1::perineo}}.', 'perineo', 2, 'clinica'],
    ['Sarcoma uterino difere de fibroide por atipia e maior {{c1::mitose}}.', 'mitose', 2, 'diferenciacao']
  ], [
    ['Corpo lúteo persiste como cisto após ciclo menstrual {{c1::anovulatório}}.', 'anovulatório'],
    ['Tumor borderline de ovário mostra atipia sem invasão definitiva do {{c1::estroma}}.', 'estroma']
  ]));

  blocks.push(...L('fp3_a13', [
    ['Fibroadenoma é nódulo benigno móvel da mama {{c1::jovem}}.', 'jovem', 1, 'clinica'],
    ['Galactocele mama acumula conteúdo leitoso na {{c1::lactação}}.', 'lactação', 1, 'clinica'],
    ['Carcinoma ductal invasivo é o tipo mais frequente de câncer de {{c1::mama}}.', 'mama', 1, 'definicao'],
    ['Carcinoma lobular invasivo tende multicentricidade e falta de {{c1::e-caderina}}.', 'e-caderina', 2, 'prova'],
    ['Paget da mama afeta pele mamilar por extensão ductal {{c1::maligna}}.', 'maligna', 2, 'clinica'],
    ['Linfonodo axilar endurecido fixo sugere metastase {{c1::ganglionar}}.', 'ganglionar', 1, 'clinica'],
    ['Calcificações pleomorfas orientam biópsia por risco de {{c1::malignidade}}.', 'malignidade', 2, 'clinica'],
    ['Tumor filoide pode crescer rapidamente apesar de ser {{c1::borderline}} em parte dos casos.', 'borderline', 2, 'prova'],
    ['RNM orienta extensão de tumor oculto na mama {{c1::densa}}.', 'densa', 2, 'clinica'],
    ['Receptor de estrogênio positivo guia terapia {{c1::endócrina}}.', 'endócrina', 1, 'clinica']
  ], [
    ['Histologia de carcinoide mamário é entidade rara distinta de carcinoma {{c1::invasivo}}.', 'invasivo'],
    ['Câncer triplo negativo não expressa receptores hormonais nem {{c1::HER2}} com amplificação.', 'HER2']
  ]));

  blocks.push(...L('fp3_a14', [
    ['Finasterida inibe 5-alfa-redutase e reduz volume prostático na {{c1::HPB}}.', 'HPB', 1, 'mecanismo'],
    ['Tansulosina bloqueia alfa-1 prostático aliviando sintomas {{c1::obstrutivos}}.', 'obstrutivos', 1, 'clinica'],
    ['Terazosina também reduz resistência ao esvaziamento na {{c1::próstata}}.', 'próstata', 2, 'clinica'],
    ['Inibidores de PDE-5 tratam disfunção erétil aumentando {{c1::GMPc}}.', 'GMPc', 2, 'mecanismo'],
    ['Sildenafila contraindica-se com nitratos pelo risco de hipotensão {{c1::grave}}.', 'grave', 1, 'clinica'],
    ['Bicalutamida é antiandrógeno usado junto ao agonista de LHRH no câncer de {{c1::próstata}}.', 'próstata', 1, 'clinica'],
    ['Agonista de LHRH suprime testosterona com flare inicial prevenível por {{c1::antiandrógeno}}.', 'antiandrógeno', 2, 'mecanismo'],
    ['Docetaxel entra no tratamento de CPRC após falha à {{c1::castração}}.', 'castração', 2, 'clinica'],
    ['Enzalutamida antagoniza receptor de andrógeno na próstata {{c1::resistente}}.', 'resistente', 2, 'prova'],
    ['Vasectomia interrompe ductos deferentes sem bloquear secreção de {{c1::líquido}} seminável.', 'líquido', 2, 'definicao']
  ], [
    ['Espironolactona pode aliviar acne hormonal em mulher por bloqueio do {{c1::andrógeno}}.', 'andrógeno'],
    ['Mitoxantrona teve papel paliativo em CPRC mas perdeu espaço para novos {{c1::imunoterápicos}}.', 'imunoterápicos']
  ]));

  blocks.push(...L('fp3_a15', [
    ['Anticoncepcional combinado suprime ovulação com estrogênio e {{c1::progestínio}}.', 'progestínio', 1, 'mecanismo'],
    ['DIU de cobre provoca inflamação local tóxica ao {{c1::esperma}}.', 'esperma', 2, 'mecanismo'],
    ['Pílula apenas progestágeno segura na {{c1::lactação}}.', 'lactação', 1, 'clinica'],
    ['Terapia hormonal da menopausa alivia fogachos com cautela em tromboembolismo {{c1::prévio}}.', 'prévio', 1, 'clinica'],
    ['Tamoxifeno bloqueia estrogênio na mama mas tem efeito agonista no {{c1::útero}}.', 'útero', 2, 'mecanismo'],
    ['Raloxifeno é SERM que mantém osso com menos risco uterino que {{c1::tamoxifeno}}.', 'tamoxifeno', 2, 'diferenciacao'],
    ['Anastrozol inibe aromatase reduzindo estrogênio em câncer de mama {{c1::hormônio}}-positivo.', 'hormônio', 2, 'clinica'],
    ['Ácido acetilsalicílico baixa dose na gestante pode associar-se a sangramento ou {{c1::atraso}} de fechamento do ducto.', 'atraso', 2, 'clinica'],
    ['Misoprostol é análogo de prostaglandina usado em manejo de abortamento {{c1::medicamentoso}}.', 'medicamentoso', 2, 'clinica'],
    ['Danazol atenua endometriose por perfil {{c1::androgênico}}.', 'androgênico', 2, 'mecanismo']
  ], [
    ['Anticoncepção de emergência com levonorgestrel atrasa ou impede a {{c1::ovulação}}.', 'ovulação'],
    ['Fulvestrant degrada receptor de estrogênio em mama metastática {{c1::positiva}}.', 'positiva']
  ]));

  return blocks;
}

const mad2 = buildMad2();
const fp3 = buildFp3();

fs.writeFileSync(OUT_MAD2, JSON.stringify(mad2, null, 2) + '\n');
fs.writeFileSync(OUT_FP3, JSON.stringify(fp3, null, 2) + '\n');

console.log(`Escritos ${OUT_MAD2}: ${mad2.length} cards`);
console.log(`Escritos ${OUT_FP3}: ${fp3.length} cards`);