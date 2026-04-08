#!/usr/bin/env python3
"""Gera JPG recortados (remove faixa de legenda típica à direita) em data/histologia/atlas/<cat>/recorte/."""
from __future__ import annotations

import argparse
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
ATLAS_PATH = ROOT / "data" / "histologia_atlas.json"
AUDIT_PATH = ROOT / "data" / "histologia_atlas_legenda_audit.json"
CONFIG_PATH = ROOT / "data" / "histologia_atlas_crop_config.json"


def load_audit_estado() -> dict[str, str]:
    if not AUDIT_PATH.exists():
        return {}
    doc = json.loads(AUDIT_PATH.read_text(encoding="utf-8"))
    out = {}
    for lid, row in (doc.get("porId") or {}).items():
        if isinstance(row, dict) and row.get("estado"):
            out[lid] = row["estado"]
    return out


def merge_rect(base: dict, *overrides: dict) -> dict:
    r = {**base}
    for o in overrides:
        if not o:
            continue
        for k in ("x", "y", "w", "h"):
            if k in o and o[k] is not None:
                r[k] = float(o[k])
    return r


def rect_to_box(w: int, h: int, rel: dict) -> tuple[int, int, int, int]:
    x0 = int(float(rel["x"]) * w)
    y0 = int(float(rel["y"]) * h)
    x1 = x0 + int(float(rel["w"]) * w)
    y1 = y0 + int(float(rel["h"]) * h)
    x1 = min(max(x1, x0 + 1), w)
    y1 = min(max(y1, y0 + 1), h)
    return (x0, y0, x1, y1)


def main() -> None:
    parser = argparse.ArgumentParser(description="Recortar lâminas do atlas (Pillow).")
    parser.add_argument("--max", type=int, default=0, help="Máximo de imagens (0 = sem limite).")
    parser.add_argument("--dry-run", action="store_true", help="Só listar ficheiros.")
    parser.add_argument(
        "--todas",
        action="store_true",
        help="Ignorar auditoria (equivalente a gerarSemAuditoriaOk=true nesta execução).",
    )
    args = parser.parse_args()

    try:
        from PIL import Image
    except ImportError:
        raise SystemExit("Instale Pillow: pip install pillow")

    cfg = json.loads(CONFIG_PATH.read_text(encoding="utf-8")) if CONFIG_PATH.exists() else {}
    default_rel = merge_rect({"x": 0, "y": 0, "w": 0.72, "h": 1.0}, cfg.get("defaultRel") or {})
    por_cat = cfg.get("porCategoria") or {}
    por_id = cfg.get("porId") or {}
    sem_audit = bool(cfg.get("gerarSemAuditoriaOk")) or args.todas
    quality = int(cfg.get("jpegQuality") or 93)
    audit_est = load_audit_estado()

    atlas = json.loads(ATLAS_PATH.read_text(encoding="utf-8"))
    done = 0
    skipped = 0

    for sys_obj in atlas.get("sistemas") or []:
        for div in sys_obj.get("divisoes") or []:
            for lam in div.get("laminas") or []:
                lid = lam.get("id")
                cat = lam.get("categoriaLegada") or ""
                if not lid or not cat:
                    continue
                if not sem_audit and audit_est.get(lid) != "ok":
                    skipped += 1
                    continue
                rel = merge_rect(default_rel, por_cat.get(cat), por_id.get(lid))
                src_u = lam.get("urlImagemCompleta") or lam.get("urlImagem") or ""
                if not src_u.startswith("/"):
                    skipped += 1
                    continue
                src_path = (ROOT / Path(src_u.strip("/"))).resolve()
                if not src_path.is_file():
                    skipped += 1
                    continue
                stem = src_path.stem
                if stem.endswith("_zoom"):
                    base_stem = stem[: -len("_zoom")]
                else:
                    base_stem = stem
                out_dir = ROOT / "data" / "histologia" / "atlas" / cat / "recorte"
                out_path = out_dir / f"{base_stem}_recorte.jpg"
                if args.max and done >= args.max:
                    print(f"limite --max {args.max} atingido")
                    print(f"geradas {done}, ignoradas {skipped}")
                    return

                if args.dry_run:
                    print("DRY", src_path, "->", out_path, rel)
                    done += 1
                    continue

                out_dir.mkdir(parents=True, exist_ok=True)
                im = Image.open(src_path).convert("RGB")
                w, h = im.size
                box = rect_to_box(w, h, rel)
                crop = im.crop(box)
                crop.save(out_path, format="JPEG", quality=quality, optimize=True)
                done += 1

    print(f"ok geradas {done}, ignoradas {skipped}")


if __name__ == "__main__":
    main()
