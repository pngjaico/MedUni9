"""
fix_materiais_v3.py — Limpeza de arquivos de material do ciclo clínico.

Remove:
1. YAML front matter (--- ... ---) no topo do arquivo
2. Bloco de metadata (**Disciplina:** / **Módulo:** / **Tempo de estudo sugerido:**)
3. Seção "## Ponte com a Clínica" e seu conteúdo

Uso:
    python -X utf8 scripts/fix_materiais_v3.py [--dry-run]
"""

import re
import sys
from pathlib import Path

DRY_RUN = "--dry-run" in sys.argv
ROOT = Path(__file__).parent.parent
MATERIAIS = ROOT / "materiais"

MODULOS = ["modulo5", "modulo6"]  # adicionar mais se necessário

# ── regex ────────────────────────────────────────────────────────────────────

# 1. YAML front matter: bloco --- ... --- no início do arquivo
RE_YAML = re.compile(r"^---\n.*?^---\n\n?", re.DOTALL | re.MULTILINE)

# 2. Bloco de metadata (3 linhas bold + linha vazia + possível linha vazia)
#    Cobre variações como "**Módulo:** 6 | **Referência principal:** ..."
RE_META = re.compile(
    r"\n\*\*Disciplina:\*\*[^\n]+\n"
    r"\*\*Módulo:\*\*[^\n]+\n"
    r"\*\*Tempo de estudo sugerido:\*\*[^\n]+\n"
)

# 3. Seção "## Ponte com a Clínica" até o próximo separador (--- ou ## ou EOF)
RE_PONTE = re.compile(
    r"\n## Ponte com a Clínica\n.*?(?=\n---|\n## |\Z)",
    re.DOTALL,
)

# ── helpers ──────────────────────────────────────────────────────────────────

def clean(text: str) -> str:
    # 1. YAML front matter
    text = RE_YAML.sub("", text)
    # 2. Metadata block
    text = RE_META.sub("\n", text)
    # 3. Ponte section
    text = RE_PONTE.sub("", text)
    # Garantir arquivo termina com newline único
    text = text.rstrip("\n") + "\n"
    return text


def process_file(path: Path) -> bool:
    """Retorna True se houve mudança."""
    original = path.read_text(encoding="utf-8")
    fixed = clean(original)
    if fixed == original:
        return False
    if not DRY_RUN:
        path.write_text(fixed, encoding="utf-8")
    return True


# ── main ─────────────────────────────────────────────────────────────────────

def main():
    changed = []
    unchanged = []
    for modulo in MODULOS:
        for md in sorted((MATERIAIS / modulo).rglob("*.md")):
            if process_file(md):
                changed.append(md.relative_to(ROOT))
            else:
                unchanged.append(md.relative_to(ROOT))

    prefix = "[DRY-RUN] " if DRY_RUN else ""
    print(f"{prefix}Arquivos modificados: {len(changed)}")
    for p in changed:
        print(f"  ✓ {p}")
    print(f"{prefix}Arquivos sem mudança: {len(unchanged)}")
    if DRY_RUN:
        print("\nRode sem --dry-run para aplicar as mudancas.")


if __name__ == "__main__":
    main()
