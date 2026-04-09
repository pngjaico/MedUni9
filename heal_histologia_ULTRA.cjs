const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data', 'histologia_atlas_v2.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Dicionário de fragmentos para junção imediata (Suffix removal/join)
const fragments = {
  "PAVI": "MENTOSO", "PAVIMEN": "TOSO", "CILIN": "DRICO", "CILIN": "DRICAS",
  "ESTRA": "TIFICADO", "ESTRATIFICA": "DO", "ESTRATIFICADOPAVIMEN": "TOSO",
  "QUERA": "TINIZADO", "QUERA": "TINA", "QUERATINAESPES": "SA",
  "PSEUDO-ESTRA": "TIFICADO", "PSEUDOESTRA": "TIFICADO", "MICRO": "TUBULOS",
  "NETO": "COROS", "REORGANI": "ZACAO", "SUDO": "RIPARA", "SUDORÍ": "PARA",
  "EXO": "CRINA", "EXO": "CRINO", "ENDO": "CRINA", "ENDO": "CRINO",
  "CALICI": "FORME", "CALICI": "FORMES", "BASE": "MENTAL", "CON": "JUNTIVO",
  "ADIP": "OSO", "MUSCU": "LAR", "CARTI": "LAGINOSO", "CARTILAGEM": "FIBROSA",
  "OS": "SEO", "HEMA": "CIAS", "ERITRO": "CITOS", "LEUCO": "CITOS",
  "PLA": "QUETAS", "NEU": "RO", "GLIA": "IS", "PROCES": "SO", "MATE": "RIAL",
  "ESTRU": "TURA", "EPITE": "LIO", "MEMBRA": "NA", "GRANU": "LOSA",
  "DESCON": "DENSACAO", "CROMOSSO": "MOS", "ACIDO": "FILA", "CARIOTE": "CA",
  "TRANS": "VERSAL", "LONGI": "TUDINAL", "INFI": "TRACAO", "NITRA": "TADO",
  "PAVIMEN": "TOSAS", "DE": "CEBOLA", "FIBRO": "SA", "HIALI": "NA",
  "CONDROBLAS": "TOS", "CONDRO": "CITOS", "PERICONDRIO": "FIBROSO",
  "TERRITO": "RIAL"
};

function cleanLine(text, slideTitle) {
  if (!text) return "";
  let t = String(text).trim();
  
  // 1. Descolar códigos e nomes colados
  t = t.replace(/^([A-Z]\d+)([A-Z]{3,})/i, '$1 $2');
  
  // 2. Remover códigos de sistema (ex: d3:, K1-, C10:)
  t = t.replace(/\b[A-Z]\d+[:\-·—]?\s*/ig, '');
  t = t.replace(/^DHisto\s+/i, '');

  // 3. Remover repetição do título da lâmina se estiver no início da legenda
  if (slideTitle) {
    const titleBase = slideTitle.split('—')[0].replace(/[\-\s]/g, '').toLowerCase();
    const lineBase = t.substring(0, slideTitle.length + 5).replace(/[\-\s]/g, '').toLowerCase();
    if (lineBase.includes(titleBase)) {
      t = t.replace(new RegExp(`^.*?${slideTitle.split('—')[0].trim()}[\\s\\-]*`, 'i'), '');
    }
    // Caso específico: Menisco-HE
    t = t.replace(/^Menisco-HE\s*/i, '');
  }

  // 4. Manuais específicos
  t = t.replace(/DECEBOLA/ig, 'DE CEBOLA');
  t = t.replace(/PLANTA\s*DOPE/ig, 'PLANTA DO PÉ');
  t = t.replace(/SEAPRESENTAM/ig, 'SE APRESENTAM');
  t = t.replace(/SEROSOSFOR/ig, 'SEROSOS FOR');
  t = t.replace(/PONTADE\s*SETA/ig, 'PONTA DE SETA');
  t = t.replace(/ARTEFATO\s*DE\s*TECNICA/ig, 'Artefato de técnica');

  // 5. Junção de fragmentos
  Object.entries(fragments).forEach(([pre, suf]) => {
    // Caso 1: fragmento pontuado (fibro. sa)
    const r1 = new RegExp(`\\b${pre}\\.?\\s+${suf}\\b`, 'ig');
    t = t.replace(r1, pre + suf);
    // Caso 2: fragmento limpo (hiali na)
    const r2 = new RegExp(`\\b${pre}\\s+${suf}\\b`, 'ig');
    t = t.replace(r2, pre + suf);
  });

  t = t.replace(/\s+/g, ' ').trim();
  return t;
}

function healLegenda(lines, slideTitle) {
  if (!Array.isArray(lines)) return [];
  
  // Primeiro passo: Limpeza individual e remoção de redundância de título
  let cleaned = lines.map(line => cleanLine(line, slideTitle)).filter(x => x.length > 2);
  
  // Segundo passo: Unificação de frases fragmentadas
  let merged = [];
  let buffer = "";

  for (let line of cleaned) {
    if (buffer) {
      const lastChar = buffer.slice(-1);
      const isListItem = /^\(?[a-z0-9]\)?[\s\-\)]/.test(line); // Se parecer o início de um novo item (a), (1), etc
      
      // Se a linha atual for pequena ou a anterior não terminar com pontuação forte, ou for um fragmento conhecido
      let shouldJoin = !/[.!?;:]$/.test(buffer) && !isListItem;
      
      // Caso especial para (ponta de seta) ou continuações de parênteses
      if (line.startsWith('(') || line.toLowerCase().includes('ponta de seta')) shouldJoin = true;

      if (shouldJoin) {
        buffer += " " + line;
      } else {
        merged.push(buffer);
        buffer = line;
      }
    } else {
      buffer = line;
    }
  }
  if (buffer) merged.push(buffer);

  return merged.map(s => {
    let res = s.toLowerCase().trim();
    if (!res) return "";
    res = res.charAt(0).toUpperCase() + res.slice(1);
    
    // Siglas
    ["HE", "HF", "DNA", "RNA", "PRATA", "MALLORY", "M.GRUNWALD-GIEMSA"].forEach(sig => {
      const r = new RegExp(`\\b${sig.toLowerCase()}\\b`, 'g');
      res = res.replace(r, sig);
    });

    return res;
  }).filter(x => x.length > 3);
}

data.sistemas.forEach(s => {
  s.divisoes.forEach(d => {
    d.laminas.forEach(l => {
      l.titulo = cleanLine(l.titulo || '').replace(/^Raiz de cebola - hf —\s*/i, '');
      l.titulo = l.titulo.charAt(0).toUpperCase() + l.titulo.slice(1);
      l.legendaTranscrita = healLegenda(l.legendaTranscrita || [], l.titulo);
    });
  });
});

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
console.log(`Sucesso ULTRA!`);
