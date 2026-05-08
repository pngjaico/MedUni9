import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const AULAS = process.argv
  .find((arg) => arg.startsWith('--aulas='))
  ?.slice('--aulas='.length)
  .split(',')
  .map((x) => x.trim())
  .filter(Boolean) || ['cm5_a1', 'cm5_a2', 'cm5_a3', 'cm5_a4', 'cm5_a5'];

function p(rel) {
  return path.join(ROOT, rel);
}

function read(rel) {
  return fs.readFileSync(p(rel), 'utf8').replace(/\r\n/g, '\n');
}

function write(rel, text) {
  fs.mkdirSync(path.dirname(p(rel)), { recursive: true });
  fs.writeFileSync(p(rel), `${text.replace(/\n*$/, '')}\n`, 'utf8');
}

function removeSection(md, headingRe) {
  const lines = md.replace(/\r\n/g, '\n').split('\n');
  const out = [];
  let skip = false;

  for (const line of lines) {
    if (!skip && headingRe.test(line.trim())) {
      skip = true;
      continue;
    }

    if (skip && /^##\s+/.test(line.trim())) {
      skip = false;
    }

    if (!skip) out.push(line);
  }

  return out
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .replace(/\n---\s*\n\s*---\s*\n/g, '\n---\n')
    .trim();
}

function removeSubsection(md, headingRe) {
  const lines = md.replace(/\r\n/g, '\n').split('\n');
  const out = [];
  let skip = false;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!skip && headingRe.test(trimmed)) {
      skip = true;
      continue;
    }

    if (skip && /^#{2,3}\s+/.test(trimmed)) {
      skip = false;
    }

    if (!skip) out.push(line);
  }

  return out.join('\n');
}

function clean(md) {
  let next = md;
  next = removeSection(next, /^##\s+Ponte com próximas aulas\s*$/i);
  next = removeSection(next, /^##\s+Questões(?:\s+de\s+Residência)?\s*(?:\(mapeadas\)|mapeadas)?\s*$/i);
  next = removeSubsection(next, /^###\s+Bancas\s+-\s+onde isso cai\s*$/i);
  return next;
}

for (const aula of AULAS) {
  const dataRel = `data/materiais/clinica_medica5/${aula}.md`;
  const mirrorRel = `materiais/modulo5/clinica_medica5/${aula}.md`;
  if (!fs.existsSync(p(dataRel))) {
    console.warn(`Ignorando ${aula}: ${dataRel} ausente`);
    continue;
  }

  const cleaned = clean(read(dataRel));
  write(dataRel, cleaned);
  write(mirrorRel, cleaned);
  console.log(`CM5 limpo e espelhado: ${aula}`);
}
