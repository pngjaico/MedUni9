#!/usr/bin/env python3
"""Gera/atualiza inventário de auditoria de legendas (merge não-destrutivo com estado existente)."""
from __future__ import annotations

import csv
import json
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
ATLAS_PATH = ROOT / "data" / "histologia_atlas.json"
AUDIT_PATH = ROOT / "data" / "histologia_atlas_legenda_audit.json"
CSV_PATH = ROOT / "data" / "histologia_atlas_legenda_audit.csv"
LEGACY_ROOT = ROOT / "Meus Sites" / "Atlas Hisotlogia" / "histologia.icb.ufg.br"

PAGES = [
    "citologia.html", "epite.html", "conj.html", "cartilagem.html", "osso.html", "musc.html",
    "nervo.html", "vasc.html", "linfa.html", "diges.html", "pele.html", "respi.html",
    "urina.html", "endoc.html", "senti.html", "masc.html", "repfem.html", "embri.html",
]


def normalize_legend_compare(s: str) -> str:
    import re
    from html import unescape

    t = unescape(str(s or "")).lower()
    t = t.replace("—", "-").replace("–", "-")
    t = re.sub(r"\s+", " ", t)
    t = re.sub(r"\s*-\s*", " - ", t)
    return t.strip()


def clean_text_short(raw: str) -> str:
    import re
    from html import unescape

    txt = unescape(raw)
    txt = txt.replace("\r", " ").replace("\n", " ")
    txt = re.sub(r"<[^>]+>", " ", txt)
    txt = re.sub(r"\s+", " ", txt).strip(" -\t")
    return txt


def find_legacy_context(category: str, alias_filename: str) -> dict:
    """Localiza página HTML, âncora da miniatura e título H2 da secção."""
    import re

    stem = Path(alias_filename).stem.lower()
    needle = f"laminas/{category.lower()}/{stem}.jpg".lower()
    out: dict = {"paginaLegada": None, "ancora": None, "tituloSecaoH2": None}
    for page in PAGES:
        path = LEGACY_ROOT / page
        if not path.exists():
            continue
        html = path.read_text(encoding="utf-8", errors="ignore")
        low = html.lower()
        pos = low.find(needle)
        if pos < 0:
            continue
        out["paginaLegada"] = page
        chunk = html[max(0, pos - 1500) : pos + 200]
        last_anchor = None
        for m in re.finditer(r'<a\s+href="#([^"]+)"', chunk, re.I):
            a = m.group(1).strip().lower()
            if a not in ("_", ""):
                last_anchor = a
        if last_anchor:
            out["ancora"] = last_anchor
        before = html[:pos]
        h2s = list(re.finditer(r"<h2[^>]*>(.*?)</h2>", before, flags=re.I | re.DOTALL))
        if h2s:
            out["tituloSecaoH2"] = clean_text_short(h2s[-1].group(1))[:200]
        break
    return out


def load_json(path: Path) -> dict:
    if not path.exists():
        return {}
    return json.loads(path.read_text(encoding="utf-8"))


def main() -> None:
    atlas = load_json(ATLAS_PATH)
    prev_audit = load_json(AUDIT_PATH)
    por_id_prev = prev_audit.get("porId") if isinstance(prev_audit, dict) else {}

    rows = []
    por_id: dict = {}

    for sys_obj in atlas.get("sistemas") or []:
        for div in sys_obj.get("divisoes") or []:
            for lam in div.get("laminas") or []:
                lid = lam.get("id")
                if not lid:
                    continue
                cat = lam.get("categoriaLegada") or ""
                alias = lam.get("aliasLegado") or ""
                ctx = find_legacy_context(cat, alias) if cat and alias else {}
                prev = por_id_prev.get(lid) if isinstance(por_id_prev, dict) else None
                estado = "pendente"
                nota = ""
                if isinstance(prev, dict):
                    estado = prev.get("estado") or estado
                    nota = prev.get("nota") or nota

                entry = {
                    "estado": estado,
                    "nota": nota,
                    "titulo": lam.get("titulo"),
                    "aliasLegado": alias,
                    "categoriaLegada": cat,
                    "urlImagem": lam.get("urlImagem"),
                    "legendaTranscrita": lam.get("legendaTranscrita"),
                    **{k: v for k, v in ctx.items() if v},
                }
                if isinstance(prev, dict):
                    for k in ("paginaLegada", "ancora", "tituloSecaoH2"):
                        if not entry.get(k) and prev.get(k):
                            entry[k] = prev[k]
                por_id[lid] = entry
                rows.append(
                    {
                        "id": lid,
                        "estado": estado,
                        "nota": nota,
                        "categoria": cat,
                        "alias": alias,
                        "pagina": ctx.get("paginaLegada") or "",
                        "ancora": ctx.get("ancora") or "",
                        "urlImagem": lam.get("urlImagem") or "",
                        "titulo": (lam.get("titulo") or "")[:120],
                    }
                )

    doc = {
        "version": 1,
        "geradoEm": datetime.now(timezone.utc).isoformat(),
        "porId": por_id,
        "notas": {
            "estados": ["pendente", "ok", "corrigido_manual", "duvida"],
            "normalize": "Use scripts/histologia_legenda_inventory.normalize_legend_compare para comparar texto da figura com legendaTranscrita.",
        },
    }
    AUDIT_PATH.write_text(json.dumps(doc, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    if rows:
        with CSV_PATH.open("w", encoding="utf-8", newline="") as f:
            w = csv.DictWriter(f, fieldnames=list(rows[0].keys()))
            w.writeheader()
            w.writerows(rows)

    print(f"ok {len(por_id)} laminas -> {AUDIT_PATH.relative_to(ROOT)}, {CSV_PATH.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
