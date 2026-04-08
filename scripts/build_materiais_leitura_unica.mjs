/**
 * Gera docs/materiais_leitura_unica.md: todos os .md de aula concatenados
 * na ordem de data/materias.json (módulo → disciplina → aula).
 * Não modifica os arquivos-fonte; apenas lê e escreve o doc agregado.
 *
 * Uso: node scripts/build_materiais_leitura_unica.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT = path.join(ROOT, "docs", "materiais_leitura_unica.md");

function resolveAulaMd(modulo, materiaId, aulaId) {
  const candidates = [
    path.join(ROOT, "data", "materiais", materiaId, `${aulaId}.md`),
    path.join(ROOT, "data", "materiais", `modulo${modulo}`, materiaId, `${aulaId}.md`),
    path.join(ROOT, "materiais", `modulo${modulo}`, materiaId, `${aulaId}.md`),
  ];
  for (const p of candidates) {
    if (fs.existsSync(p)) return p;
  }
  return null;
}

function slugify(s) {
  return String(s)
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const materias = JSON.parse(fs.readFileSync(path.join(ROOT, "data", "materias.json"), "utf8"));

/** @type {Array<{ key: string, val: any }>} */
const entries = Object.entries(materias).map(([key, val]) => ({ key, val }));
entries.sort((a, b) => {
  const ma = Number(a.val.modulo) || 0;
  const mb = Number(b.val.modulo) || 0;
  if (ma !== mb) return ma - mb;
  return a.key.localeCompare(b.key, "pt-BR");
});

const stats = { aulasComMd: 0, aulasSemMd: 0, disciplinas: 0 };
const chunks = [];

const titleBlock = ["# Materiais MedGradPlus — leitura única", ""];

const toc = [];
let currentMod = null;

for (const { key, val } of entries) {
  if (!val || !Array.isArray(val.aulas) || val.aulas.length === 0) continue;
  stats.disciplinas++;
  const modulo = Number(val.modulo) || 0;
  if (currentMod !== modulo) {
    currentMod = modulo;
    chunks.push("");
    chunks.push(`---`);
    chunks.push("");
    chunks.push(`# Módulo ${modulo}`);
    chunks.push("");
  }

  const nomeDisc = val.sigla ? `${val.sigla} — ${val.nome}` : val.nome;
  chunks.push("");
  chunks.push(`## ${nomeDisc}`);
  chunks.push("");
  chunks.push(`- **ID disciplina:** \`${key}\``);
  chunks.push(`- **Módulo:** ${modulo}`);

  const aulas = Array.isArray(val.aulas) ? val.aulas : [];
  for (const aula of aulas) {
    const aid = aula && aula.id ? String(aula.id) : "";
    const tema = (aula && aula.tema) || aid;
    const anchor = slugify(`${key}-${aid}`);
    toc.push({ modulo, key, aid, tema, anchor });

    const src = resolveAulaMd(modulo, key, aid);
    chunks.push("");
    chunks.push(`<a id="${anchor}"></a>`);
    chunks.push("");
    chunks.push(`### ${aid} — ${tema}`);
    chunks.push("");

    if (!src) {
      chunks.push(`*(Nenhum \`.md\` encontrado para esta aula nos caminhos padrão.)*`);
      stats.aulasSemMd++;
      continue;
    }

    stats.aulasComMd++;
    chunks.push(
      `*Fonte:* \`${path.relative(ROOT, src).split(path.sep).join("/")}\``,
    );
    chunks.push("");
    const body = fs.readFileSync(src, "utf8").replace(/\r\n/g, "\n").trimEnd();
    chunks.push(body);
    chunks.push("");
  }
}

const tocLines = [`## Índice (sumário)`];
tocLines.push("");
for (const row of toc) {
  const label = `M${row.modulo} · \`${row.key}\` · \`${row.aid}\` — ${row.tema}`;
  tocLines.push(`- [${label}](#${row.anchor})`);
}
tocLines.push("");

const totalAulas = stats.aulasComMd + stats.aulasSemMd;
const metaBlock = [
  `Catálogo: **${stats.disciplinas}** disciplinas, **${totalAulas}** aulas em \`data/materias.json\`. **${stats.aulasComMd}** com conteúdo .md incorporado; **${stats.aulasSemMd}** sem arquivo correspondente (só cabeçalho no índice abaixo).`,
  "",
  "Documento gerado para leitura contínua. **Não é fonte canônica:** os `.md` originais permanecem em `data/materiais/` e `materiais/`. Para regenerar: `node scripts/build_materiais_leitura_unica.mjs`.",
  "",
];

const finalOut =
  [...titleBlock, ...metaBlock, ...tocLines, ...chunks].join("\n") + "\n";

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, finalOut, "utf8");

console.log("Escrito:", OUT);
console.log(stats);
