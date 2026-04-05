import fs from "fs";
import path from "path";

const ROOT = path.resolve("materiais/modulo2");

function temaFromContent(content) {
  const raw = content.replace(/^\uFEFF/, "");
  const line = raw.split("\n").find((l) => l.replace(/^\uFEFF/, "").trimStart().startsWith("# "));
  if (!line) return null;
  const title = line.replace(/^\uFEFF/, "").replace(/^#\s+/, "").trim();
  return title.replace(/^[^:]+:\s*/, "").trim() || title;
}

let n = 0;
for (const dir of fs.readdirSync(ROOT, { withFileTypes: true })) {
  if (!dir.isDirectory()) continue;
  const sub = path.join(ROOT, dir.name);
  for (const f of fs.readdirSync(sub)) {
    if (!f.endsWith(".md")) continue;
    const full = path.join(sub, f);
    let content = fs.readFileSync(full, "utf8").replace(/\r\n/g, "\n");
    if (!content.includes("Consolidação do tema **esta aula**")) continue;
    const tema = temaFromContent(content);
    if (!tema) continue;
    content = content.replace(
      /Consolidação do tema \*\*esta aula\*\*/,
      `Consolidação do tema **${tema}**`
    );
    fs.writeFileSync(full, content, { encoding: "utf8" });
    n++;
  }
}
console.log(JSON.stringify({ fixed: n }, null, 2));
