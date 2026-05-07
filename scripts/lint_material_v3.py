#!/usr/bin/env python3
"""
lint_material_v3.py — Linter para materiais clinicos (Mod 5-8) no padrao v3.

Estende `scripts/validate_materiais_md.mjs` (que valida v2/basico) com:
  - Encoding UTF-8 sem BOM, LF
  - Caracteres proibidos (setas Unicode, NBSP, aspas curvas, em/en-dash)
  - Tabelas estritas (1a coluna negrito, sem <br>, sem listas em celula)
  - Persona MedGradPlus (>= 3 callouts)
  - Macetes assinados (>= 2 com prefixo "Macete MedGradPlus")
  - Vinheta clinica de 3 atos
  - Mini Quiz com 5-8 questoes, 1 caso longo
  - Fontes (>= 2 com livro/edicao)
  - Mais de 180 linhas
  - Espelhamento data/materiais <-> materiais/moduloN

Uso:
  python scripts/lint_material_v3.py --aula cm5_a1
  python scripts/lint_material_v3.py --materia cm5
  python scripts/lint_material_v3.py --modulo 5
  python scripts/lint_material_v3.py --tudo

Saida: relatorio em stdout + JSON em data/agent_logs/lint_v3_<timestamp>.json
Codigo de saida: 0 (sucesso), 1 (erros), 2 (warnings).
"""

from __future__ import annotations
import argparse
import json
import re
import sys
import unicodedata
from datetime import datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MATERIAS = ROOT / "data" / "materias.json"
LOG_DIR = ROOT / "data" / "agent_logs"

# Modulos do ciclo clinico (v3 aplica)
MOD_CLINICO = {5, 6, 8}

# Caracteres proibidos no corpo
PROIBIDOS = {
    "→": "->",
    "←": "<-",
    "↔": "<->",
    "−": "-",
    "…": "...",
    "–": "-",
    "—": " - ",
    "“": '"',  # "
    "”": '"',  # "
    "‘": "'",  # '
    "’": "'",  # '
    " ": " ",  # NBSP
}

# Limites do v3
MIN_LINHAS = 180
MIN_MACETES = 2
MIN_PERSONA_CALLOUTS = 3
MIN_FONTES = 2
MIN_MINI_QUIZ = 5
MAX_MINI_QUIZ = 8
MIN_VINHETA = 1


def load_materias() -> dict:
    return json.loads(MATERIAS.read_text(encoding="utf-8"))


def material_paths(modulo: int, materia_id: str, aula_id: str) -> tuple[Path, Path]:
    return (
        ROOT / "data" / "materiais" / materia_id / f"{aula_id}.md",
        ROOT / "materiais" / f"modulo{modulo}" / materia_id / f"{aula_id}.md",
    )


def check_encoding(path: Path) -> list[dict]:
    issues = []
    raw = path.read_bytes()
    if raw.startswith(b"\xef\xbb\xbf"):
        issues.append({"sev": "error", "cat": "encoding", "msg": "Arquivo tem BOM UTF-8 (proibido)"})
    if b"\r" in raw:
        issues.append({"sev": "error", "cat": "encoding", "msg": "Arquivo tem CR (CRLF). Usar LF apenas."})
    return issues


def check_proibidos(text: str) -> list[dict]:
    issues = []
    for char, sub in PROIBIDOS.items():
        n = text.count(char)
        if n > 0:
            issues.append({
                "sev": "warn",
                "cat": "encoding",
                "msg": f"Caractere proibido {repr(char)} ({n}x). Substituir por {repr(sub)}.",
            })
    return issues


def check_estrutura(text: str) -> list[dict]:
    issues = []
    obrigatorios = [
        ("# ", "Titulo H1"),
        ("## Relevancia Clinica", "Secao Relevancia Clinica e Academica"),
        ("## Pre-Prova", "Secao Pre-Prova"),
        ("### Sintese para a prova", "Subsecao Sintese para a prova"),
        ("### Macete-ancora", "Subsecao Macete-ancora"),
        ("## Mini Quiz", "Secao Mini Quiz"),
    ]
    # Comparacao tolerante a acento
    norm = unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode("ascii").lower()
    for needle, desc in obrigatorios:
        n = unicodedata.normalize("NFKD", needle).encode("ascii", "ignore").decode("ascii").lower()
        if n not in norm:
            issues.append({"sev": "error", "cat": "estrutura", "msg": f"Falta: {desc}"})
    return issues


def check_tamanho(text: str) -> list[dict]:
    n = len(text.split("\n"))
    if n < MIN_LINHAS:
        return [{"sev": "error", "cat": "tamanho", "msg": f"Apenas {n} linhas (minimo v3: {MIN_LINHAS})"}]
    return []


def check_macetes_assinados(text: str) -> list[dict]:
    pattern = re.compile(r"\*\*Macete MedGradPlus\s*[—\-]", re.IGNORECASE)
    n = len(pattern.findall(text))
    if n < MIN_MACETES:
        return [{"sev": "error", "cat": "macetes", "msg": f"{n} macete(s) assinado(s); minimo {MIN_MACETES}"}]
    return []


def check_persona_callouts(text: str) -> list[dict]:
    """
    Conta blockquotes com palavras-chave da persona:
    - Pegadinha
    - Armadilha de banca
    - Perola Clinica
    - Macete MedGradPlus
    - Aqui no MedGradPlus
    - Caso da Semana
    """
    norm = unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode("ascii").lower()
    keywords = [
        "pegadinha",
        "armadilha de banca",
        "perola clinica",
        "macete medgradplus",
        "aqui no medgradplus",
        "caso da semana",
    ]
    blockquote_lines = [l for l in text.split("\n") if l.strip().startswith(">")]
    bq_text = "\n".join(blockquote_lines).lower()
    bq_norm = unicodedata.normalize("NFKD", bq_text).encode("ascii", "ignore").decode("ascii").lower()
    n = sum(1 for kw in keywords if kw in bq_norm)
    if n < MIN_PERSONA_CALLOUTS:
        return [{"sev": "warn", "cat": "persona", "msg": f"{n} callout(s) de persona detectado(s); minimo {MIN_PERSONA_CALLOUTS}"}]
    return []


def check_vinheta_3atos(text: str) -> list[dict]:
    norm = text.lower()
    if "ato 1" in norm and "ato 2" in norm and "ato 3" in norm:
        return []
    if "caso da semana" in norm and "pergunta 1" in norm and "pergunta 2" in norm:
        return []
    return [{"sev": "warn", "cat": "vinheta", "msg": "Vinheta clinica de 3 atos nao detectada"}]


def check_mini_quiz(text: str) -> list[dict]:
    """Conta questoes em ## Mini Quiz pelo padrao **N. ...** + opcoes."""
    issues = []
    m = re.search(r"## Mini Quiz([\s\S]*?)(?=\n## |\Z)", text)
    if not m:
        return [{"sev": "error", "cat": "mini_quiz", "msg": "Secao ## Mini Quiz nao encontrada"}]
    body = m.group(1)
    questoes = re.findall(r"^\s*\*\*\d+\.\s", body, flags=re.MULTILINE)
    n = len(questoes)
    if n < MIN_MINI_QUIZ:
        issues.append({"sev": "error", "cat": "mini_quiz", "msg": f"{n} questoes; minimo {MIN_MINI_QUIZ}"})
    if n > MAX_MINI_QUIZ:
        issues.append({"sev": "warn", "cat": "mini_quiz", "msg": f"{n} questoes; maximo recomendado {MAX_MINI_QUIZ}"})
    # alternativas marcadas
    corretas = re.findall(r"^\s*-\s\[x\]", body, flags=re.MULTILINE)
    if len(corretas) != n:
        issues.append({"sev": "error", "cat": "mini_quiz", "msg": f"{n} questoes mas {len(corretas)} marcadas como corretas (devia ser {n})"})
    # explicacoes
    explicacoes = body.count("**Explicação:**") + body.count("**Explicacao:**")
    if explicacoes < n:
        issues.append({"sev": "warn", "cat": "mini_quiz", "msg": f"{explicacoes} explicacoes para {n} questoes"})
    return issues


def check_tabelas(text: str) -> list[dict]:
    """Pega blocos de tabela e valida formato."""
    issues = []
    lines = text.split("\n")
    in_table = False
    table_block = []
    for i, line in enumerate(lines):
        if "|" in line:
            if line.strip().startswith("|"):
                table_block.append((i + 1, line))
                in_table = True
                continue
        if in_table and not line.strip().startswith("|"):
            # fim da tabela
            issues.extend(_validar_tabela(table_block))
            table_block = []
            in_table = False
    if table_block:
        issues.extend(_validar_tabela(table_block))
    return issues


def _validar_tabela(block: list[tuple[int, str]]) -> list[dict]:
    issues = []
    if len(block) < 2:
        return []
    header_line = block[0][1]
    sep_line = block[1][1] if len(block) > 1 else ""
    header_cols = [c.strip() for c in header_line.strip("|").split("|")]
    n_cols = len(header_cols)
    if n_cols > 6:
        issues.append({"sev": "warn", "cat": "tabela", "linha": block[0][0], "msg": f"Tabela com {n_cols} colunas (>6 nao recomendado)"})
    # checa <br> em qualquer linha
    for ln, line in block:
        if "<br>" in line.lower() or "<sub>" in line.lower() or "<sup>" in line.lower():
            issues.append({"sev": "error", "cat": "tabela", "linha": ln, "msg": "HTML inline em celula (<br>/<sub>/<sup>)"})
        # listas em celula
        if re.search(r"\|\s*-\s+", line):
            issues.append({"sev": "warn", "cat": "tabela", "linha": ln, "msg": "Possivel lista dentro de celula"})
    # primeira coluna nas linhas de dados deveria estar em negrito
    # Aceita: '**termo**' OR '**termo** (extras)' OR '**termo principal**, **termo secundario**'
    for ln, line in block[2:]:  # pula header e separador
        cols = [c.strip() for c in line.strip("|").split("|")]
        if cols and cols[0] and not cols[0].startswith("**"):
            issues.append({"sev": "warn", "cat": "tabela", "linha": ln, "msg": f"1a coluna sem negrito no inicio: '{cols[0][:40]}'"})
    return issues


def check_fontes(text: str) -> list[dict]:
    """Conta menções a livros/sociedades canonicos do data/fontes_padrao.json."""
    livros = ["Cecil", "Harrison", "Sabiston", "Schwartz", "Goodman", "Katzung", "ATLS", "Tintinalli", "Nelson", "Campbell", "Hebert", "Goffi", "DSM-5", "Adams", "Kaplan"]
    sociedades = ["SBC", "SBP", "SBD", "SBPT", "SBN", "SBOT", "SBU", "SBCO", "FEBRASGO", "AHA", "ACC", "ESC", "KDIGO", "GOLD", "GINA", "IDSA", "AASLD", "MS-PCDT", "Ministerio da Saude"]
    n_livros = sum(text.count(l) for l in livros)
    n_socs = sum(text.count(s) for s in sociedades)
    n_total = n_livros + n_socs
    if n_total < MIN_FONTES:
        return [{"sev": "warn", "cat": "fontes", "msg": f"{n_total} mencao(oes) de fonte canonica detectada(s); minimo {MIN_FONTES}"}]
    return []


def check_espelho(p1: Path, p2: Path) -> list[dict]:
    if not p1.exists() and not p2.exists():
        return [{"sev": "error", "cat": "espelho", "msg": "Arquivo nao existe em nenhum dos caminhos"}]
    if not p1.exists():
        return [{"sev": "error", "cat": "espelho", "msg": f"Faltando: {p1}"}]
    if not p2.exists():
        return [{"sev": "error", "cat": "espelho", "msg": f"Faltando: {p2}"}]
    if p1.read_text(encoding="utf-8") != p2.read_text(encoding="utf-8"):
        return [{"sev": "error", "cat": "espelho", "msg": "Conteudo divergente entre data/materiais e materiais/moduloN"}]
    return []


def lint_aula(modulo: int, materia_id: str, aula_id: str) -> dict:
    p_data, p_mod = material_paths(modulo, materia_id, aula_id)
    espelho_issues = check_espelho(p_data, p_mod)
    primary = p_mod if p_mod.exists() else (p_data if p_data.exists() else None)
    if primary is None:
        return {
            "aula_id": aula_id,
            "materia": materia_id,
            "modulo": modulo,
            "status": "missing",
            "issues": espelho_issues,
        }
    text = primary.read_text(encoding="utf-8")
    issues = []
    issues.extend(espelho_issues)
    issues.extend(check_encoding(primary))
    issues.extend(check_proibidos(text))
    issues.extend(check_estrutura(text))
    issues.extend(check_tamanho(text))
    issues.extend(check_macetes_assinados(text))
    issues.extend(check_persona_callouts(text))
    issues.extend(check_vinheta_3atos(text))
    issues.extend(check_mini_quiz(text))
    issues.extend(check_tabelas(text))
    issues.extend(check_fontes(text))

    n_err = sum(1 for i in issues if i["sev"] == "error")
    n_warn = sum(1 for i in issues if i["sev"] == "warn")
    status = "fail" if n_err > 0 else ("warn" if n_warn > 0 else "ok")
    return {
        "aula_id": aula_id,
        "materia": materia_id,
        "modulo": modulo,
        "status": status,
        "n_errors": n_err,
        "n_warnings": n_warn,
        "issues": issues,
        "linhas": len(text.split("\n")),
    }


def run(scope: dict) -> int:
    materias = load_materias()
    resultados = []
    for materia_id, m in materias.items():
        if scope.get("materia") and scope["materia"] != materia_id:
            continue
        modulo = m.get("modulo")
        if scope.get("modulo") and scope["modulo"] != modulo:
            continue
        if modulo not in MOD_CLINICO and not scope.get("forcar"):
            continue
        for aula in m.get("aulas", []):
            aula_id = aula["id"]
            if scope.get("aula") and scope["aula"] != aula_id:
                continue
            r = lint_aula(modulo, materia_id, aula_id)
            resultados.append(r)

    n_ok = sum(1 for r in resultados if r["status"] == "ok")
    n_warn = sum(1 for r in resultados if r["status"] == "warn")
    n_fail = sum(1 for r in resultados if r["status"] == "fail")
    n_missing = sum(1 for r in resultados if r["status"] == "missing")

    print(f"\n=== Resumo lint v3 ===")
    print(f"Total avaliadas: {len(resultados)}")
    print(f"  OK:      {n_ok}")
    print(f"  WARN:    {n_warn}")
    print(f"  FAIL:    {n_fail}")
    print(f"  MISSING: {n_missing}")

    print(f"\n=== Detalhes ===")
    for r in resultados:
        if r["status"] == "ok":
            continue
        print(f"\n[{r['status'].upper()}] {r.get('aula_id')} ({r.get('materia')}) - linhas={r.get('linhas','?')}")
        for issue in r.get("issues", []):
            print(f"   [{issue.get('sev')}/{issue.get('cat')}] {issue.get('msg')}")

    LOG_DIR.mkdir(parents=True, exist_ok=True)
    log = LOG_DIR / f"lint_v3_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
    log.write_text(json.dumps(resultados, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"\nLog salvo em: {log}")

    if n_fail > 0:
        return 1
    if n_warn > 0:
        return 2
    return 0


def main():
    p = argparse.ArgumentParser()
    p.add_argument("--aula", help="ID da aula (ex.: cm5_a1)")
    p.add_argument("--materia", help="ID da materia (ex.: cm5)")
    p.add_argument("--modulo", type=int, help="Modulo (5, 6 ou 8)")
    p.add_argument("--forcar", action="store_true", help="Forca avaliar mesmo modulos basicos")
    p.add_argument("--tudo", action="store_true", help="Avalia tudo do clinico")
    a = p.parse_args()

    scope = {
        "aula": a.aula,
        "materia": a.materia,
        "modulo": a.modulo,
        "forcar": a.forcar,
    }
    sys.exit(run(scope))


if __name__ == "__main__":
    main()
