import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const MATERIAS_PATH = path.join(ROOT, 'data', 'materias.json');
const QUESTOES_PATH = path.join(ROOT, 'data', 'questoes.json');
const OUT_DIR = path.join(ROOT, 'data', 'agent_logs');
const OUT_JSON = path.join(OUT_DIR, 'questoes_audit.json');
const OUT_MD = path.join(OUT_DIR, 'questoes_audit.md');

const LEGACY_MATERIA_ALIASES = new Set([
  'semio1',
  'semio2',
  'semio3',
  'semio4',
  'fp3',
  'ff4',
  'farm',
  'farma1',
  'paps2',
  'paps3',
]);

function loadJson(filePath) {
  return JSON.parse(readFileSync(filePath, 'utf8'));
}

function getCatalog() {
  const materias = loadJson(MATERIAS_PATH);
  const aulasById = new Map();
  const aulasWithMaterial = new Set();
  const aulaMaterialPath = new Map();

  for (const [materiaId, materia] of Object.entries(materias)) {
    for (const aula of materia.aulas || []) {
      aulasById.set(aula.id, {
        aulaId: aula.id,
        materiaId,
        modulo: materia.modulo,
        tema: aula.tema || '',
      });

      const diskPaths = [
        path.join(ROOT, 'materiais', `modulo${materia.modulo}`, materiaId, `${aula.id}.md`),
        path.join(ROOT, 'data', 'materiais', materiaId, `${aula.id}.md`),
      ];
      const existingPath = diskPaths.find((candidate) => existsSync(candidate));
      if (existingPath) {
        aulasWithMaterial.add(aula.id);
        aulaMaterialPath.set(aula.id, existingPath);
      }
    }
  }

  return { materias, aulasById, aulasWithMaterial, aulaMaterialPath };
}

function shortIssue(question) {
  return {
    id: question.id,
    materia: question.materia ?? null,
    aula_id: question.aula_id ?? null,
    tema: question.tema ?? null,
    essencial: question.essencial === true,
  };
}

function buildAudit() {
  const { aulasById, aulasWithMaterial, aulaMaterialPath } = getCatalog();
  const raw = loadJson(QUESTOES_PATH);
  const questoes = Array.isArray(raw) ? raw : raw.questoes || [];

  const mapping = {
    semAulaId: [],
    aulaIdInvalido: [],
    temaIdInvalido: [],
    materiaMismatch: [],
    temaDivergente: [],
    legacyMateriaAlias: [],
    naoCorrigivelAutomaticamente: [],
  };

  const countsByAula = new Map();
  const essentialsByAula = new Map();

  for (const q of questoes) {
    const aulaId = q.aula_id || null;
    const tema = q.tema || null;
    const temaLooksLikeAulaId = typeof tema === 'string' && /.+_a\d+$/i.test(tema);

    if (!aulaId) mapping.semAulaId.push(shortIssue(q));
    if (LEGACY_MATERIA_ALIASES.has(String(q.materia || '').trim())) {
      mapping.legacyMateriaAlias.push(shortIssue(q));
    }

    if (aulaId) {
      if (!aulasById.has(aulaId)) {
        mapping.aulaIdInvalido.push(shortIssue(q));
        mapping.naoCorrigivelAutomaticamente.push({
          ...shortIssue(q),
          reason: 'aula_id nao existe no catalogo',
        });
      } else {
        const owner = aulasById.get(aulaId);
        countsByAula.set(aulaId, (countsByAula.get(aulaId) || 0) + 1);
        if (q.essencial === true) {
          essentialsByAula.set(aulaId, (essentialsByAula.get(aulaId) || 0) + 1);
        }
        if (q.materia !== owner.materiaId) {
          mapping.materiaMismatch.push({
            ...shortIssue(q),
            expectedMateria: owner.materiaId,
          });
        }
        if ((q.tema || null) !== aulaId) {
          mapping.temaDivergente.push({
            ...shortIssue(q),
            expectedTema: aulaId,
          });
        }
      }
    } else if (temaLooksLikeAulaId) {
      if (!aulasById.has(tema)) {
        mapping.temaIdInvalido.push(shortIssue(q));
        mapping.naoCorrigivelAutomaticamente.push({
          ...shortIssue(q),
          reason: 'tema parece aula_id, mas nao existe no catalogo',
        });
      }
    }
  }

  const coverage = {
    aulasComMaterial: [],
    semQuestoes: [],
    abaixoDoMinimoEssenciais: [],
    semEssenciais: [],
    comExcessoEssenciais: [],
    comOkEssenciais: [],
    filaGeracao: [],
  };

  for (const [aulaId, meta] of aulasById.entries()) {
    if (!aulasWithMaterial.has(aulaId)) continue;
    const total = countsByAula.get(aulaId) || 0;
    const essenciais = essentialsByAula.get(aulaId) || 0;
    const item = {
      aula_id: aulaId,
      materia: meta.materiaId,
      modulo: meta.modulo,
      tema: meta.tema,
      totalQuestoes: total,
      essenciais,
      materialPath: aulaMaterialPath.get(aulaId) || null,
    };
    coverage.aulasComMaterial.push(item);
    if (total === 0) coverage.semQuestoes.push(item);
    if (essenciais === 0) coverage.semEssenciais.push(item);
    if (essenciais > 0 && essenciais < 5) coverage.abaixoDoMinimoEssenciais.push(item);
    if (essenciais >= 5 && essenciais <= 7) coverage.comOkEssenciais.push(item);
    if (essenciais > 7) coverage.comExcessoEssenciais.push(item);
    if (total === 0 || essenciais < 5) coverage.filaGeracao.push(item);
  }

  coverage.filaGeracao.sort((a, b) =>
    a.modulo - b.modulo ||
    a.materia.localeCompare(b.materia) ||
    a.aula_id.localeCompare(b.aula_id)
  );

  return {
    generatedAt: new Date().toISOString(),
    summary: {
      totalQuestoes: questoes.length,
      semAulaId: mapping.semAulaId.length,
      aulaIdInvalido: mapping.aulaIdInvalido.length,
      temaIdInvalido: mapping.temaIdInvalido.length,
      materiaMismatch: mapping.materiaMismatch.length,
      temaDivergente: mapping.temaDivergente.length,
      legacyMateriaAlias: mapping.legacyMateriaAlias.length,
      naoCorrigivelAutomaticamente: mapping.naoCorrigivelAutomaticamente.length,
      aulasComMaterial: coverage.aulasComMaterial.length,
      aulasComMaterialSemQuestoes: coverage.semQuestoes.length,
      aulasComMaterialSemEssenciais: coverage.semEssenciais.length,
      aulasComMaterialAbaixoMinimoEssenciais: coverage.abaixoDoMinimoEssenciais.length,
      aulasComMaterialFilaGeracao: coverage.filaGeracao.length,
    },
    mapping,
    coverage,
  };
}

function buildMarkdown(audit) {
  const { summary, mapping, coverage } = audit;
  const lines = [];
  lines.push('# Auditoria de Questoes');
  lines.push('');
  lines.push(`> Gerado em ${audit.generatedAt}`);
  lines.push('');
  lines.push('## Resumo');
  lines.push('');
  lines.push('| Item | Quantidade |');
  lines.push('|---|---:|');
  for (const [key, value] of Object.entries(summary)) {
    lines.push(`| ${key} | ${value} |`);
  }
  lines.push('');
  lines.push('## Problemas de mapeamento');
  lines.push('');
  lines.push(`- Sem \`aula_id\`: ${mapping.semAulaId.length}`);
  lines.push(`- \`aula_id\` invalido: ${mapping.aulaIdInvalido.length}`);
  lines.push(`- \`tema\` com cara de aula invalida: ${mapping.temaIdInvalido.length}`);
  lines.push(`- \`materia\` divergente da dona da aula: ${mapping.materiaMismatch.length}`);
  lines.push(`- \`tema\` divergente de \`aula_id\`: ${mapping.temaDivergente.length}`);
  lines.push(`- Alias legado de materia: ${mapping.legacyMateriaAlias.length}`);
  lines.push(`- Nao corrigivel automaticamente: ${mapping.naoCorrigivelAutomaticamente.length}`);
  lines.push('');
  lines.push('## Cobertura em aulas com material');
  lines.push('');
  lines.push(`- Sem nenhuma questao: ${coverage.semQuestoes.length}`);
  lines.push(`- Sem nenhum essencial: ${coverage.semEssenciais.length}`);
  lines.push(`- Abaixo do minimo de 5 essenciais: ${coverage.abaixoDoMinimoEssenciais.length}`);
  lines.push(`- Dentro da meta 5-7: ${coverage.comOkEssenciais.length}`);
  lines.push(`- Acima de 7 essenciais: ${coverage.comExcessoEssenciais.length}`);
  lines.push(`- Fila de geracao editorial: ${coverage.filaGeracao.length}`);
  lines.push('');

  function appendSample(title, list, extraCols = []) {
    lines.push(`## ${title}`);
    lines.push('');
    if (!list.length) {
      lines.push('- Nenhum item.');
      lines.push('');
      return;
    }
    const sample = list.slice(0, 20);
    const headers = ['id', 'materia', 'aula_id', 'tema', ...extraCols];
    lines.push(`| ${headers.join(' | ')} |`);
    lines.push(`| ${headers.map(() => '---').join(' | ')} |`);
    for (const item of sample) {
      lines.push(`| ${headers.map((key) => String(item[key] ?? '')).join(' | ')} |`);
    }
    lines.push('');
  }

  appendSample('Amostra - materia divergente', mapping.materiaMismatch, ['expectedMateria']);
  appendSample('Amostra - nao corrigivel automaticamente', mapping.naoCorrigivelAutomaticamente, ['reason']);
  appendSample('Amostra - fila de geracao editorial', coverage.filaGeracao, ['modulo', 'totalQuestoes', 'essenciais']);
  return lines.join('\n');
}

const audit = buildAudit();
if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_JSON, JSON.stringify(audit, null, 2), 'utf8');
writeFileSync(OUT_MD, buildMarkdown(audit), 'utf8');

console.log(`✅ Auditoria JSON salva em: ${OUT_JSON}`);
console.log(`✅ Auditoria Markdown salva em: ${OUT_MD}`);
console.log(JSON.stringify(audit.summary, null, 2));
