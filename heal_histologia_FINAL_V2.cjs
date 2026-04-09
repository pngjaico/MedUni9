const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data', 'histologia_atlas_v2.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

function cleanLine(text, slideTitle) {
  if (!text) return "";
  let t = String(text).trim();
  
  // High intensity de-stucking
  t = t.replace(/CARTILAGEM\s*FIBROSA/ig, 'Cartilagem fibrosa');
  t = t.replace(/TECIDO\s*ADIPOSO/ig, 'Tecido adiposo');
  t = t.replace(/TECIDO\s*CONJUNTIVO/ig, 'Tecido conjuntivo');
  t = t.replace(/CARTILAGEM\s*HIALINA/ig, 'Cartilagem hialina');

  t = t.replace(/^([A-Z]\d+)([A-Z]{3,})/i, '$1 $2');
  t = t.replace(/\b[A-Z]\d+[:\-·—]?\s*/ig, '');
  t = t.replace(/^DHisto\s+/i, '');

  if (slideTitle) {
    const titleBase = slideTitle.split('—')[0].replace(/[\-\s]/g, '').toLowerCase();
    t = t.replace(new RegExp(`^.*?${slideTitle.split('—')[0].trim()}[\\s\\-]*`, 'i'), '');
  }

  t = t.replace(/DECEBOLA/ig, 'DE CEBOLA');
  t = t.replace(/PLANTA\s*DOPE/ig, 'PLANTA DO PÉ');
  t = t.replace(/PONTADE\s*SETA/ig, 'PONTA DE SETA');
  t = t.replace(/ARTEFATO\s*DE\s*TECNICA/ig, 'Artefato de técnica');
  t = t.replace(/GRUPOSISOGENOSAXIAIS/ig, 'Grupos isógenos axiais');
  t = t.replace(/MATRIZAPRESENTANDO/ig, 'Matriz apresentando');

  return t.replace(/\s+/g, ' ').trim();
}

function healLegenda(lines, slideTitle) {
  if (!Array.isArray(lines)) return [];
  let cleaned = lines.map(line => cleanLine(line, slideTitle)).filter(x => x.length > 1);
  let merged = [];
  let buffer = "";

  for (let line of cleaned) {
    if (buffer) {
      const isListItem = /^\(?[a-z0-9]\)?[\s\-\)]/.test(line);
      const endsOpen = !/[.!?;:]$/.test(buffer);
      let shouldJoin = endsOpen || !isListItem || line.length < 15;
      if (line.startsWith('(') || line.toLowerCase().includes('ponta de seta')) shouldJoin = true;
      if (shouldJoin) buffer += " " + line;
      else { merged.push(buffer); buffer = line; }
    } else { buffer = line; }
  }
  if (buffer) merged.push(buffer);

  return merged.map(s => {
    let res = s.toLowerCase().trim();
    if (!res) return "";
    res = res.charAt(0).toUpperCase() + res.slice(1);
    
    // Peel back tissue context if much more follows
    const tissueContexts = ["Cartilagem fibrosa", "Cartilagem hialina", "Tecido conjuntivo", "Epitélio"];
    for(let tissue of tissueContexts) {
       const tissueLow = tissue.toLowerCase();
       if (res.startsWith(tissueLow) && res.length > tissueLow.length + 5) {
          res = res.replace(new RegExp(`^${tissueLow}[\\s\\-·:]*(he|hf)?[\\s\\-·:]*`, 'i'), '');
          break;
       }
    }

    ["HE", "HF", "DNA", "RNA", "PRATA", "MALLORY", "M.GRUNWALD-GIEMSA"].forEach(sig => {
      const r = new RegExp(`\\b${sig.toLowerCase()}\\b`, 'g');
      res = res.replace(r, sig);
    });
    
    res = res.charAt(0).toUpperCase() + res.slice(1);
    res = res.replace(/^sa-HE\s+/i, '');
    res = res.replace(/\.+$/, '');
    return res;
  }).filter(x => x && x.length > 3);
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
console.log(`Sucesso DEFINITIVO-v2!`);
