/**
 * Bloco C — Módulo 3 (próximo após mad2 + fisiopato3)
 *
 * Escopo atual:
 * - semiologia3: 6 aulas × 12 cards (gerado aqui, alinhado aos materiais em data/materiais/semiologia3/)
 * - bmf3: 22 aulas × 12 = 264 cards (scripts/build_bmf3_blockC.cjs — lotes paralelos curados)
 *
 * Após editar:
 *   node scripts/regenerate_blockC_bmf3_semio3.cjs
 *   node scripts/consolidate_discipline_12_simple.cjs semiologia3 scripts/tmp_mod3_semiologia3.json
 *   node scripts/validate_flashcards_cloze_custom.cjs semiologia3
 *
 * Quando buildBmf3 estiver completo:
 *   node scripts/consolidate_discipline_12_simple.cjs bmf3 scripts/tmp_mod3_bmf3.json
 *   node scripts/validate_flashcards_cloze_custom.cjs bmf3
 */

const fs = require('fs');

const OUT_SEMIO3 = 'scripts/tmp_mod3_semiologia3.json';
const OUT_BMF3 = 'scripts/tmp_mod3_bmf3.json';

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

const { buildBmf3: buildBmf3BlockC } = require('./build_bmf3_blockC.cjs');

function buildBmf3() {
  return buildBmf3BlockC(pack);
}

function buildSemio3() {
  const L = pack.bind(null, 'semiologia3');
  const blocks = [];

  blocks.push(...L('semio3_a1', [
    ['Anamnese abdominal útil começa pela queixa principal e {{c1::tempo}} de evolução.', 'tempo', 1, 'clinica'],
    ['Mnemônico SOCRATES inclui sítio início caráter irradiação associações timing exacerbação e {{c1::gravidade}}.', 'gravidade', 1, 'definicao'],
    ['OPQRST destaca início provocação qualidade região gravidade e {{c1::tempo}} da dor.', 'tempo', 2, 'definicao'],
    ['Dor visceral costuma ser mal localizada em aperto ou {{c1::cólica}}.', 'cólica', 1, 'clinica'],
    ['Dor somática parietal tende a ser pontual e piora com {{c1::movimento}}.', 'movimento', 1, 'clinica'],
    ['Dor cólica em ondas com intervalos livres sugere obstrução ou {{c1::cálculo}} em vias urinárias.', 'cálculo', 2, 'clinica'],
    ['Irritação diafragmática pode irradiar dor para o {{c1::ombro}}.', 'ombro', 2, 'clinica'],
    ['Abdome agudo é {{c1::síndrome}} clínica e não um diagnóstico etiológico fechado.', 'síndrome', 1, 'definicao'],
    ['Red flag vascular inclui dor intensa desproporcional ao exame inicial como isquemia {{c1::mesentérica}}.', 'mesentérica', 2, 'clinica'],
    ['História de cirurgia prévia e aderências orienta hipótese de obstrução {{c1::intestinal}}.', 'intestinal', 1, 'clinica']
  ], [
    ['Perguntar se a dor {{c1::migrou}} ajuda a reconstruir apendicite e outras causas quirúrgicas.', 'migrou'],
    ['Náuseas antes da dor intensa pode inverter a ordem esperada na pancreatite e {{c1::colecistite}}.', 'colecistite']
  ]));

  blocks.push(...L('semio3_a2', [
    ['Inspeção abdominal avalia cicatrizes distensão massas visíveis e {{c1::pulsação}} anormal.', 'pulsação', 2, 'clinica'],
    ['Palpação superficial detecta defesa contratura e {{c1::dor}} à descompressão brusca.', 'dor', 1, 'clinica'],
    ['Palpação profunda mapeia visceromegalias e {{c1::massas}} intra-abdominais.', 'massas', 1, 'clinica'],
    ['A ausculta intestinal vigora antes da palpação para não alterar o {{c1::peristaltismo}}.', 'peristaltismo', 1, 'prova'],
    ['Ruídos hidroaéreos diminuídos sugerem íleo paralítico ou {{c1::obstrução}} avançada.', 'obstrução', 2, 'clinica'],
    ['Percussão timpânica predominante sugere distensão por {{c1::ar}} ou gás.', 'ar', 2, 'clinica'],
    ['Sinal de Murphy positivo associa-se a irritação pericolecística no hipocôndrio {{c1::direito}}.', 'direito', 1, 'clinica'],
    ['Descompressão brusca dolorosa em fossa ilíaca direita reforça apendicite com {{c1::peritonismo}}.', 'peritonismo', 2, 'clinica'],
    ['Massa palpável em epigástrio após etilismo intenso chama atenção para {{c1::pseudocisto}} pancreático.', 'pseudocisto', 2, 'prova'],
    ['Ascite importante pode gerar {{c1::flutuação}} à percussão para deslocamento do líquido.', 'flutuação', 2, 'clinica']
  ], [
    ['Piora da dor com tosse sugere envolvimento da parede e {{c1::irritação}} peritoneal.', 'irritação'],
    ['Paciente com cólica renal muda de posição buscando alívio diferindo de peritonite que {{c1::imobiliza}}.', 'imobiliza']
  ]));

  blocks.push(...L('semio3_a3', [
    ['Disúria com polaciúria sem febre alta sugere infecção de {{c1::baixo}} trato urinário.', 'baixo', 1, 'clinica'],
    ['Disúria com febre calafrios e dor lombar sugere {{c1::pielonefrite}}.', 'pielonefrite', 1, 'clinica'],
    ['Edema periorbitário matinal sugere retenção hídrica por {{c1::glomerulopatia}} ou nefrótica.', 'glomerulopatia', 2, 'clinica'],
    ['Cólica nefrética é dor em flanco em {{c1::ondas}} com inquietação marcante.', 'ondas', 1, 'clinica'],
    ['Hematúria dolorosa com cólica favorece {{c1::litíase}} ureteral.', 'litíase', 1, 'clinica'],
    ['Hematúria indolor persistente exige excluir causa {{c1::estrutural}} e neoplásica.', 'estrutural', 2, 'clinica'],
    ['Urina cor de coca-cola após infecção respiratória sugere origem {{c1::glomerular}}.', 'glomerular', 2, 'clinica'],
    ['Percussão costovertebral dolorosa reforça envolvimento do rim ou {{c1::pelve}} perinefrítica.', 'pelve', 2, 'clinica'],
    ['ITU recorrente deve buscar obstrução litíase ou esvaziamento {{c1::incompleto}}.', 'incompleto', 2, 'clinica'],
    ['Poliúria crônica com noctúria pode refletir perda de capacidade de {{c1::concentração}} tubular.', 'concentração', 2, 'mecanismo']
  ], [
    ['Hipertensão nova com edema e alteração urinária integra suspeita de acometimento {{c1::renal}}.', 'renal'],
    ['Antecedente de diabetes e nefrotoxinas deve ser sempre perguntado na queixa {{c1::urinária}}.', 'urinária']
  ]));

  blocks.push(...L('semio3_a4', [
    ['Queixa de disfunção erétil exige rastrear causas vasculares neurológicas e {{c1::psicogênicas}}.', 'psicogênicas', 2, 'clinica'],
    ['Dor testicular súbita intensa com náuseas exige descartar {{c1::torção}} espermática.', 'torção', 1, 'clinica'],
    ['Hernia inguinal palpável pode ampliar-se com esforço ou {{c1::tosse}}.', 'tosse', 1, 'clinica'],
    ['Inspeção do pênis identifica lesões ulceradas e {{c1::descarga}} uretral.', 'descarga', 1, 'clinica'],
    ['Palpação de testículos compara volume consistência e {{c1::dor}} à manipulação.', 'dor', 1, 'clinica'],
    ['Toque retal avalia próstata em tonalidade tamanho e {{c1::superfície}}.', 'superfície', 1, 'clinica'],
    ['Próstata nodular dura assimétrica exige investigação de {{c1::neoplasia}}.', 'neoplasia', 2, 'clinica'],
    ['Epididimite costuma cursar com dor local febre e sensibilidade no {{c1::epidídimo}}.', 'epidídimo', 2, 'clinica'],
    ['Varicocele predominante à esquerda costuma ser {{c1::idiopática}} benigna.', 'idiopática', 2, 'prova'],
    ['Infertilidade masculina pede história de infecções trauma e {{c1::cirúrgica}} prévia.', 'cirúrgica', 2, 'clinica']
  ], [
    ['Priapismo prolongado é emergência urológica por risco de {{c1::isquemia}} cavernosa.', 'isquemia'],
    ['Secreção uretral purulenta com disúria reforça uretrite por infecção sexualmente {{c1::transmissível}}.', 'transmissível']
  ]));

  blocks.push(...L('semio3_a5', [
    ['Anamnese ginecológica registra data da última menstruação fluxo e {{c1::dispareunia}}.', 'dispareunia', 1, 'clinica'],
    ['Exame especular visualiza colo vagina e possível {{c1::leucorréia}} anormal.', 'leucorréia', 1, 'clinica'],
    ['Toque bimanual palpa útero anexos e {{c1::fundo}} de saco vaginal.', 'fundo', 2, 'clinica'],
    ['Massa anexial móvel pode corresponder a cisto {{c1::ovariano}} simples.', 'ovariano', 1, 'clinica'],
    ['Sangramento pós-menopausa exige investigação de endométrio e {{c1::colo}}.', 'colo', 2, 'clinica'],
    ['Dor à mobilização do colo no toque sugere irritação peritoneal em {{c1::pelve}}.', 'pelve', 2, 'clinica'],
    ['Corrimento fétido associado a dor pélvica pós-parto chama piómetra ou {{c1::endometrite}}.', 'endometrite', 2, 'clinica'],
    ['Antecedente de HPV alterações citológicas e vacinação entram na história de {{c1::risco}}.', 'risco', 2, 'clinica'],
    ['Vulvite intensa com prurido pode associar-se a candidíase ou {{c1::dermatite}} irritativa.', 'dermatite', 2, 'clinica'],
    ['Gravidez não excluída deve ser considerada antes do exame {{c1::ginecológico}}.', 'ginecológico', 1, 'clinica']
  ], [
    ['Lábios abertos do colo com massa exofítica requer biópsia para excluir {{c1::malignidade}}.', 'malignidade'],
    ['Amenorreia secundária com galactorreia sugere investigar {{c1::prolactina}} elevada.', 'prolactina']
  ]));

  blocks.push(...L('semio3_a6', [
    ['Integrar queixa exame e exames complementares reduz fechamento {{c1::diagnóstico}} prematuro.', 'diagnóstico', 2, 'clinica'],
    ['Correlacionar achado renal isolado com PA e edema evita subdiagnóstico de {{c1::glomerular}}.', 'glomerular', 2, 'clinica'],
    ['Paciente jovem com dor lombar sem alarmes deve registrar sintomas e sinais de {{c1::alerta}}.', 'alerta', 2, 'clinica'],
    ['Registro objetivo de achados respeita linguagem neutra sem juízo sobre adesão do {{c1::paciente}}.', 'paciente', 1, 'clinica'],
    ['Simulação supervisionada treina comunicação de notícias difíceis com clareza e {{c1::empatia}}.', 'empatia', 2, 'clinica'],
    ['Ao finalizar anamnese fechar com pergunta livre captura informações {{c1::omitidas}}.', 'omitidas', 2, 'clinica'],
    ['Checklist de segurança antes do toque inclui privacidade acompanhante e {{c1::consentimento}}.', 'consentimento', 1, 'clinica'],
    ['Retroalimentação entre pares após simulação foca comportamento observável e não {{c1::personalidade}}.', 'personalidade', 2, 'definicao'],
    ['Discriminar urgência médica de eletivo usa sinais vitais dor refratária e {{c1::instabilidade}}.', 'instabilidade', 1, 'clinica'],
    ['Documentar hipóteses ordenadas facilita continuidade no {{c1::ambulatorial}}.', 'ambulatorial', 2, 'clinica']
  ], [
    ['Repita exame após analgesia se segurança permitir para confirmar sinais de {{c1::irritação}} peritoneal.', 'irritação'],
    ['Correlacionar urina rotina com quadro evita tratamento empírico sem critério em {{c1::disúria}}.', 'disúria']
  ]));

  return blocks;
}

const semio3 = buildSemio3();
fs.writeFileSync(OUT_SEMIO3, JSON.stringify(semio3, null, 2) + '\n');
console.log(`Escritos ${OUT_SEMIO3}: ${semio3.length} cards`);

const bmf3 = buildBmf3();
if (bmf3.length) {
  fs.writeFileSync(OUT_BMF3, JSON.stringify(bmf3, null, 2) + '\n');
  console.log(`Escritos ${OUT_BMF3}: ${bmf3.length} cards`);
} else {
  console.log(`bmf3: aviso — 0 cards gerados (revisar build).`);
}
