/** FP3 fp3_a9–a15 × 12 — materia fisiopato3 — node scripts/append_flashcards_fp3_m3_part2.js */
const fs = require('fs');
const path = require('path');
const OUT = path.join(__dirname, '..', 'data', 'flashcards.json');
function c(t, f, v, e, cat, o, tags) {
  return { materia: 'fisiopato3', tema: t, frente: f, verso: v, explicacao: e || '', dificuldade: 2, categoria: cat, origem: o, tags: tags || [] };
}
const LOTS = [
  [ // fp3_a9
    c('fp3_a9', 'Quimioterapia alquila: exemplo?', 'Ciclofosfamida — liga DNA.', '', 'mecanismo', 'material', ['alquilante']),
    c('fp3_a9', 'Antimetabólito: metotrexato?', 'Inibe DHFR — síntese de timidina.', '', 'mecanismo', 'material', ['mtz']),
    c('fp3_a9', '5-FU: alvo?', 'Timidilato sintase.', '', 'mecanismo', 'material', ['5fu']),
    c('fp3_a9', 'Vincristina: classe?', 'Alcaloide vinca — microtúbulos.', '', 'mecanismo', 'material', ['vinca']),
    c('fp3_a9', 'Platina: cisplatina?', 'Liga DNA intracadeia.', '', 'mecanismo', 'material', ['platina']),
    c('fp3_a9', 'Efeito adverso comum quimio?', 'Mielossupressão, náusea, alopécia.', '', 'clinica', 'material', ['toxicidade']),
    c('fp3_a9', 'Dexrazoxana?', 'Cardioproteção antraciclinas (contexto).', '', 'clinica', 'material', ['dexrazoxana']),
    c('fp3_a9', 'Trastuzumabe: alvo?', 'HER2+ mama.', '', 'clinica', 'material', ['trastuzumabe']),
    c('fp3_a9', 'Imatinibe: alvo?', 'BCR-ABL.', '', 'clinica', 'material', ['imatinibe']),
    c('fp3_a9', 'Anti-PD-1: exemplo?', 'Nivolumabe — reativação imune.', '', 'clinica', 'material', ['pdl1']),
    c('fp3_a9', 'Tumor lysis syndrome?', 'Ácido úrico/potássio/fosfato ↑ pós-quimio — hidratação/alopurinol.', '', 'extra_livro', 'extra', ['tls']),
    c('fp3_a9', 'Folinato de cálcio rescue MTX?', 'Antídoto em doses altas.', '', 'extra', 'extra', ['leucovorin']),
  ],
  [ // fp3_a10
    c('fp3_a10', 'Nefrolitíase: composição mais comum?', 'Oxalato de cálcio.', '', 'clinica', 'material', ['litíase']),
    c('fp3_a10', 'Glomerulonefrite difusa aguda pós-estrepto?', 'Hematúria + hipocomplementemia.', '', 'clinica', 'material', ['gn']),
    c('fp3_a10', 'Nefrite lúpica Class IV?', 'Proliferativa difusa — imunossupressão.', '', 'clinica', 'material', ['lupus']),
    c('fp3_a10', 'Pielonefrite crônica: causa?', 'Refluxo vesico-ureteral (criança) ou obstrução.', '', 'clinica', 'material', ['pne']),
    c('fp3_a10', 'RCC: tipo mais comum?', 'Carcinoma de células claras.', '', 'clinica', 'material', ['rcc']),
    c('fp3_a10', 'Tumor de Wilms?', 'Criança — massa abdominal.', '', 'clinica', 'material', ['wilms']),
    c('fp3_a10', 'Bexiga: fator de risco câncer?', 'Tabagismo, exposição ocupacional aromáticas.', '', 'clinica', 'material', ['bexiga']),
    c('fp3_a10', 'Proteinúria nefrótica: padrão?', 'Lesão podocitos (membranosa, lesão mínima).', '', 'clinica', 'material', ['nefrotica']),
    c('fp3_a10', 'IRA pré-renal: causa?', 'Hipoperfusão (choque, desidratação).', '', 'clinica', 'material', ['ira']),
    c('fp3_a10', 'Necrose tubular aguda isquêmica?', 'Manchas de células tubulares — cilindros.', '', 'clinica', 'material', ['nta']),
    c('fp3_a10', 'Síndrome hemolítico-urêmica típica?', 'Shiga-toxina E. coli — anemia + trombocitopenia + IRA.', '', 'extra_livro', 'extra', ['shu']),
    c('fp3_a10', 'Papiloma virus vesical?', 'Schistosoma hematobium — risco câncer (endêmico).', '', 'extra', 'extra', ['schistosoma']),
  ],
  [ // fp3_a11
    c('fp3_a11', 'Síndrome de Cushing iatrogênica?', 'Excesso corticoide exógeno.', '', 'clinica', 'material', ['cushing']),
    c('fp3_a11', 'Feocromocitoma: triade?', 'Cefaleia, sudorese, taquicardia episódica.', '', 'clinica', 'material', ['feocromocitoma']),
    c('fp3_a11', 'Hiperaldosteronismo primário (Conn)?', 'Hipertensão + hipocalemia + alcalose metabólica.', '', 'clinica', 'material', ['conn']),
    c('fp3_a11', 'Adenocarcinoma de próstata: marcador?', 'PSA elevado (não específico).', '', 'clinica', 'material', ['prostata']),
    c('fp3_a11', 'HPB: sintomas obstrutivos?', 'Jato fraco, hesitância, esvaziamento incompleto.', '', 'clinica', 'material', ['hpb']),
    c('fp3_a11', 'Prostatite bacteriana aguda?', 'ITU masculina febre — fluoroquinolona (protocolo).', '', 'clinica', 'material', ['prostatite']),
    c('fp3_a11', 'Tumor de testículo: tipo mais comum jovem?', 'Germinativo seminoma vs não-seminoma.', '', 'clinica', 'material', ['testiculo']),
    c('fp3_a11', 'Torsão de testículo: urgência?', 'Orquidopexia em horas.', '', 'clinica', 'material', ['torsao']),
    c('fp3_a11', 'Epididimite vs torsão: primeiro exame?', 'USG Doppler urgente.', '', 'clinica', 'material', ['epididimite']),
    c('fp3_a11', 'Câncer de pênis: fator?', 'HPV, fimose crônica.', '', 'clinica', 'material', ['penis']),
    c('fp3_a11', 'Finasterida: mecanismo?', 'Inibe 5α-redutase — HBP e calvície.', '', 'extra_livro', 'extra', ['finasterida']),
    c('fp3_a11', 'Abiraterona: alvo?', 'Inibe CYP17 — câncer próstata resistente.', '', 'extra', 'extra', ['abiraterona']),
  ],
  [ // fp3_a12
    c('fp3_a12', 'Leiomioma uterino?', 'Benigno mais comum — sangramento uterino aumentado.', '', 'clinica', 'material', ['mioma']),
    c('fp3_a12', 'Endometriose: definição?', 'Endométrio fora da cavidade — dor e infertilidade.', '', 'clinica', 'material', ['endometriose']),
    c('fp3_a12', 'Câncer de colo: rastreamento?', 'Papanicolau + HPV (protocolos).', '', 'clinica', 'material', ['colo']),
    c('fp3_a12', 'Câncer de endométrio: fator?', 'Estrogênio não oposto (obesidade, pós-menopausa).', '', 'clinica', 'material', ['endometrio']),
    c('fp3_a12', 'Câncer de ovário: síntomas precoces?', 'Inespecíficos — estadiamento tardio comum.', '', 'clinica', 'material', ['ovario']),
    c('fp3_a12', 'Síndrome dos ovários policísticos?', 'Hiperandrogenismo + ovários policísticos ao USG + anovulação.', '', 'clinica', 'material', ['sop']),
    c('fp3_a12', 'Endometrite pós-parto?', 'Fever + dor uterina — antibiótico empírico.', '', 'clinica', 'material', ['endometrite']),
    c('fp3_a12', 'Doença inflamatória pélvica?', 'Cervicite + anexite — ceftriaxona + doxiciclina + metronidazol (protocolo).', '', 'clinica', 'material', ['dip']),
    c('fp3_a12', 'Prolapso uterino?', 'Suporte ligamentar fraco — pessário ou cirurgia.', '', 'clinica', 'material', ['prolapso']),
    c('fp3_a12', 'Cisto folicular funcional?', 'Regressão espontânea em ciclos.', '', 'clinica', 'material', ['cisto']),
    c('fp3_a12', 'Tamoxifeno: risco endométrio?', 'Agonista parcial — vigilância.', '', 'extra_livro', 'extra', ['tamoxifeno']),
    c('fp3_a12', 'Letrozol em indução ovulação?', 'Inibidor aromatase SOP (contexto).', '', 'extra', 'extra', ['letrozol']),
  ],
  [ // fp3_a13
    c('fp3_a13', 'Carcinoma ductal invasivo mama?', 'Mais comum — nódulo endurecido.', '', 'clinica', 'material', ['mama']),
    c('fp3_a13', 'Carcinoma lobular?', 'Multifocal, bilateral mais frequente.', '', 'clinica', 'material', ['lobular']),
    c('fp3_a13', 'Doença de Paget mamária?', 'Lesão mamilo e erosão — subjacente DCIS/carcinoma.', '', 'clinica', 'material', ['paget']),
    c('fp3_a13', 'Fibroadenoma?', 'Benigno móvel "pele de laranja" — jovem.', '', 'clinica', 'material', ['fibroadenoma']),
    c('fp3_a13', 'Cisto mamário simples?', 'Benigno — aspirado se sintomático.', '', 'clinica', 'material', ['cisto']),
    c('fp3_a13', 'Mastalgia cíclica?', 'Relacionada ciclo — suporte e AINE.', '', 'clinica', 'material', ['mastalgia']),
    c('fp3_a13', 'Rastreio mamografia?', 'Início e intervalo conforme diretrizes brasileiras.', '', 'clinica', 'material', ['rastreio']),
    c('fp3_a13', 'BRCA1/2: risco?', 'Mama/ovário — profilaxia cirúrgica discutida.', '', 'clinica', 'material', ['brca']),
    c('fp3_a13', 'Receptor ER/PR positivo tumor?', 'Hormonoterapia (tamoxifeno, AI).', '', 'clinica', 'material', ['receptores']),
    c('fp3_a13', 'HER2 positivo?', 'Trastuzumabe + quimio.', '', 'clinica', 'material', ['her2']),
    c('fp3_a13', 'Linfedema pós-axilectomia?', 'Fisioterapia, compressão.', '', 'extra_livro', 'extra', ['linfedema']),
    c('fp3_a13', 'Biópsia por agulha grossa?', 'Diagnóstico histológico antes de cirurgia.', '', 'extra', 'extra', ['biopsia']),
  ],
  [ // fp3_a14
    c('fp3_a14', 'Finasterida/dutasterida: uso?', 'HPB — reduz volume próstata.', '', 'clinica', 'material', ['5ari']),
    c('fp3_a14', 'Tansulosina: classe?', 'α1-bloqueador — relaxa colo bexiga/próstata.', '', 'clinica', 'material', ['tansulosina']),
    c('fp3_a14', 'Tadalafila 5 mg diário?', 'HPB e disfunção erétil.', '', 'clinica', 'material', ['pde5']),
    c('fp3_a14', 'Câncer próstata metastático hormônio-sensível?', 'Bloqueio androgênico (LHRH agonista + antiandrógeno).', '', 'clinica', 'material', ['m1']),
    c('fp3_a14', 'Enzalutamida/abiraterona?', 'Castration-resistant (contexto).', '', 'clinica', 'material', ['crpc']),
    c('fp3_a14', 'Reposição testosterona: contraindicação?', 'Câncer próstata não tratado, hematócrito alto.', '', 'clinica', 'material', ['trt']),
    c('fp3_a14', 'Sildenafila: interação?', 'Nitrados — hipotensão.', '', 'clinica', 'material', ['sildenafil']),
    c('fp3_a14', 'Priapismo isquêmico tratamento?', 'Aspiração + fenilefrina intra-cavernosa (urgência).', '', 'clinica', 'material', ['priapismo']),
    c('fp3_a14', 'Infertilidade masculina: exame?', 'Espermograma duas amostras.', '', 'clinica', 'material', ['infertilidade']),
    c('fp3_a14', 'Varicocele e infertilidade?', 'Correção cirúrgica pode ajudar (debate).', '', 'clinica', 'material', ['varicocele']),
    c('fp3_a14', 'Docetaxel em próstata?', 'Quimio + prednisona em CRPC.', '', 'extra_livro', 'extra', ['docetaxel']),
    c('fp3_a14', 'PSA após prostatectomia?', 'Deve ser indetectável — recidiva bioquímica se sobe.', '', 'extra', 'extra', ['psa']),
  ],
  [ // fp3_a15
    c('fp3_a15', 'ACO combinado: componentes?', 'Estrogênio + progestagênio.', '', 'definicao', 'material', ['aco']),
    c('fp3_a15', 'DIU de cobre?', 'Mecanismo principal — toxicidade espermatozoide.', '', 'mecanismo', 'material', ['diu']),
    c('fp3_a15', 'DIU hormonal (levonorgestrel)?', 'Espessamento muco + atrofia endometrial.', '', 'mecanismo', 'material', ['mirena']),
    c('fp3_a15', 'Terapia hormonal menopausa: risco?', 'TEP, mama, CV — individualizar.', '', 'clinica', 'material', ['thm']),
    c('fp3_a15', 'Raloxifeno: classe?', 'SERM — osso sem útero estimulado como estrogênio.', '', 'clinica', 'material', ['raloxifeno']),
    c('fp3_a15', 'Anovulação SOP: tratamento?', 'Metformina + anticoncepcional ou indução com letrozol.', '', 'clinica', 'material', ['sop']),
    c('fp3_a15', 'Tranexâmico em menorragia?', 'Antifibrinolítico — reduz sangramento.', '', 'clinica', 'material', ['tranexamico']),
    c('fp3_a15', 'Goserelina LHRH?', 'Supressão ovariana em câncer mama.', '', 'clinica', 'material', ['lhrh']),
    c('fp3_a15', 'Inibidores aromatase mama?', 'Pós-menopausa — letrozol, anastrozol.', '', 'clinica', 'material', ['ai']),
    c('fp3_a15', 'Câncer endométrio: tratamento principal?', 'Histerectomia + anexectomia em estádios precoces.', '', 'clinica', 'material', ['cancer']),
    c('fp3_a15', 'Pílula do dia seguinte?', 'Levonorgestrel ou acetato de ulipristal — janela 120h/72h.', '', 'extra_livro', 'extra', ['emergencia']),
    c('fp3_a15', 'Anticoncepcional apenas progestagênio?', 'Amamentação — menor risco trombótico que combinado.', '', 'extra', 'extra', ['minipilula']),
  ],
];

const data = JSON.parse(fs.readFileSync(OUT, 'utf8'));
let id = 0;
for (const f of data.flashcards) if (f.id > id) id = f.id;
id++;
for (const lot of LOTS) for (const x of lot) data.flashcards.push({ ...x, id: id++ });
fs.writeFileSync(OUT, JSON.stringify(data, null, 2), 'utf8');
console.log('OK fp3 part2 total', data.flashcards.length, 'last id', id - 1);
