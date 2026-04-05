import fs from "fs";
import path from "path";

const ROOT = path.resolve("materiais/modulo2");
const OUT = path.resolve("data/agent_logs/audit_modulo2_materiais.md");

const out = [];
for (const d of fs.readdirSync(ROOT, { withFileTypes: true }).filter((x) => x.isDirectory())) {
  const sub = path.join(ROOT, d.name);
  for (const f of fs.readdirSync(sub)) {
    if (!f.endsWith(".md")) continue;
    const full = path.join(sub, f);
    const t = fs.readFileSync(full, "utf8");
    const lines = t.split(/\n/).length;
    const hasPonte = /\n## Ponte com a Clínica\n/.test(t) || t.startsWith("## Ponte com a Clínica\n");
    const hasPre = /## Pré-Prova/i.test(t);
    const hasRef = /\n## Referências\n/.test(t) || t.startsWith("## Referências\n");
    out.push({
      rel: path.relative(process.cwd(), full).replace(/\\/g, "/"),
      lines,
      hasPonte,
      hasPre,
      hasRef,
      short: lines <= 100,
    });
  }
}

const short = out.filter((x) => x.short);
const missPonte = out.filter((x) => !x.hasPonte);
const missPre = out.filter((x) => !x.hasPre);
const missRef = out.filter((x) => !x.hasRef);

let md = `# Auditoria Módulo 2 — materiais\n\n`;
md += `Gerado por \`scripts/audit_modulo2_materiais.mjs\`. Critério: linhas ≤100; secções por padrão no texto.\n\n`;
md += `## Resumo\n\n| Métrica | Contagem |\n|---------|----------|\n`;
md += `| Ficheiros | ${out.length} |\n`;
md += `| Linhas ≤100 | ${short.length} |\n`;
md += `| Sem \`## Ponte com a Clínica\` | ${missPonte.length} |\n`;
md += `| Sem Pré-Prova | ${missPre.length} |\n`;
md += `| Sem \`## Referências\` | ${missRef.length} |\n\n`;
md += `## Linhas ≤100\n\n`;
md += short.map((x) => `- \`${x.rel}\` (${x.lines})`).join("\n");
md += `\n\n## Sem Ponte\n\n`;
md += missPonte.map((x) => `- \`${x.rel}\``).join("\n");
md += `\n\n## Sem Pré-Prova\n\n`;
md += missPre.map((x) => `- \`${x.rel}\``).join("\n");
md += `\n\n## Sem Referências\n\n`;
md += missRef.map((x) => `- \`${x.rel}\``).join("\n");
md += `\n`;

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, md, "utf8");
console.log(JSON.stringify({ summary: { total: out.length, short100: short.length, noPonte: missPonte.length, noPre: missPre.length, noRef: missRef.length }, outPath: OUT }, null, 2));
