const fs = require('fs');
const path = require('path');

function getFiles(dir) {
  let results = [];
  try {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) results = results.concat(getFiles(fullPath));
      else if (file.toLowerCase().endsWith('.pdf')) results.push(fullPath);
    });
  } catch(e) {}
  return results;
}

const BASE = 'C:\\Users\\Usuario-pc\\Desktop\\Aplicativo Uni9\\meduni9-app\\conteudos\\Materiais para Provas antigas\\Drives Veteranos';
const OUT_DIR = 'C:\\Users\\Usuario-pc\\Desktop\\Aplicativo Uni9\\meduni9-app\\document_pdf';

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR);

const all = getFiles(BASE);

const lixoNome = [
  /resumo/i, /whatsapp/i, /notes_/i, /rang.*dale/i,
  /revisao/i, /revisao/i, /glossario/i, /termos_/i,
  /carboidratos2/i, /tronco.*encef/i
];
const lixoDir = [/resumos/i, /anotac/i, /revisao/i, /revisao/i];

const aproveitavel = [
  /^P\d/i, /prova/i, /atividade/i, /^AF/i, /^TG_/i, /^TH/i,
  /caso.*clinico/i, /INTEGRADA/i, /AVALIATIVA/i, /AVALIACAO/i,
  /GABARITO/i, /pos.*teste/i, /treinamento.*habilidades/i,
  /PONTUADA/i, /INTEGRATIVA/i, /fechamento/i, /farmacocin/i,
  /QUESTOES/i
];

let copiados = 0;
let pulados = 0;

all.forEach(f => {
  const fileName = path.basename(f);
  const dirName = path.dirname(f);
  const sizeMB = fs.statSync(f).size / 1024 / 1024;

  if (lixoDir.some(p => p.test(dirName))) { pulados++; return; }
  if (sizeMB > 10) { pulados++; return; }
  if (lixoNome.some(p => p.test(fileName))) { pulados++; return; }
  if (!aproveitavel.some(p => p.test(fileName))) { pulados++; return; }

  let destName = fileName.replace(/[<>:"/\\|?*]/g, '_');
  let destPath = path.join(OUT_DIR, destName);

  let counter = 1;
  while (fs.existsSync(destPath)) {
    const ext = path.extname(destName);
    const base = path.basename(destName, ext);
    destPath = path.join(OUT_DIR, base + '_' + counter + ext);
    counter++;
  }

  try {
    fs.copyFileSync(f, destPath);
    copiados++;
    console.log('OK: ' + fileName);
  } catch(e) {
    console.error('ERRO: ' + fileName + ': ' + e.message);
  }
});

console.log('\n=== RESULTADO ===');
console.log('Copiados: ' + copiados);
console.log('Ignorados: ' + pulados);
