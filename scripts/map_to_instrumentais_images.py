"""
Mapeia imagens extraídas do PDF de instrumentais para `data/to_instrumentais.json`.

1) Lê `data/instrumentais/extract_manifest.json`, `keyword_map.json`, `page_*.txt`.
2) Para cada id: escolhe a página com maior score (termos + extra_boost; must_not aplica penalidade).
3) Na página: entre imagens com área >= limiar, prefere a que casa **`captionNorm`** com `keyword_map`; senão ordem `imageSeqOnPage` / `_imgNN_` e área.
4) Gera `data/instrumentais/to_instrumentais_figuras_map.json`.
5) `--apply` mescla `imagem` (e versionamento) em `data/to_instrumentais.json`.

Requisito: Python 3.10+ (pathlib). PyMuPDF não é necessário para este script.
"""
from __future__ import annotations

import argparse
import json
import re
import sys
import unicodedata
from collections import defaultdict
from datetime import date
from pathlib import Path
from typing import Any


def repo_root() -> Path:
    return Path(__file__).resolve().parents[1]


def strip_accents(s: str) -> str:
    nk = unicodedata.normalize("NFKD", s)
    return "".join(c for c in nk if not unicodedata.combining(c))


def normalize_text(s: str) -> str:
    return strip_accents(s).lower()


def load_pages(instrumentais_dir: Path, page_count: int) -> dict[int, str]:
    pages: dict[int, str] = {}
    for n in range(1, page_count + 1):
        p = instrumentais_dir / f"page_{n:03d}.txt"
        if p.is_file():
            pages[n] = normalize_text(p.read_text(encoding="utf-8", errors="replace"))
        else:
            pages[n] = ""
    return pages


def term_hits(page_norm: str, term_norm: str) -> int:
    if not term_norm:
        return 0
    return page_norm.count(term_norm)


def page_score_for_entry(page_norm: str, entry: dict[str, Any]) -> tuple[int, bool]:
    """Returns (score, must_not_hit)."""
    raw = 0
    for t in entry.get("terms") or []:
        tn = normalize_text(str(t))
        raw += term_hits(page_norm, tn)
    for b in entry.get("extra_boost") or []:
        bn = normalize_text(str(b))
        if bn and bn in page_norm:
            raw += 1
    must_hit = False
    for m in entry.get("must_not") or []:
        mn = normalize_text(str(m))
        if mn and mn in page_norm:
            must_hit = True
            break
    if must_hit:
        raw = int(raw * 0.25)
    return raw, must_hit


def best_pages_for_id(
    pages: dict[int, str], entry: dict[str, Any]
) -> list[tuple[int, int, bool]]:
    """List of (page, score, must_not_hit) sorted by score desc, page asc."""
    ranked: list[tuple[int, int, bool]] = []
    for pn, text in pages.items():
        sc, mh = page_score_for_entry(text, entry)
        ranked.append((pn, sc, mh))
    ranked.sort(key=lambda x: (-x[1], x[0]))
    return ranked


def area(img: dict[str, Any]) -> int:
    w = int(img.get("width") or 0)
    h = int(img.get("height") or 0)
    return w * h


def img_seq_on_page(im: dict[str, Any]) -> int:
    if "imageSeqOnPage" in im:
        try:
            return int(im["imageSeqOnPage"])
        except (TypeError, ValueError):
            pass
    fn = str(im.get("file") or "")
    m = re.search(r"_img(\d+)", fn, flags=re.I)
    return int(m.group(1)) if m else 999


def caption_match_score(im: dict[str, Any], entry: dict[str, Any]) -> int:
    """Quantos termos normalizados do keyword_map aparecem na legenda inferida (substring)."""
    cap = str(im.get("captionNorm") or "").strip()
    if not cap:
        cg = str(im.get("captionGuess") or "")
        if cg:
            cap = normalize_text(cg)
    if not cap:
        return 0
    n = 0
    for t in list(entry.get("terms") or []) + list(entry.get("extra_boost") or []):
        tn = normalize_text(str(t))
        if len(tn) < 2:
            continue
        if tn in cap:
            n += 1
    return n


def images_by_page(manifest: dict[str, Any], min_area: int) -> dict[int, list[dict[str, Any]]]:
    by_page: dict[int, list[dict[str, Any]]] = defaultdict(list)
    for im in manifest.get("images") or []:
        if area(im) < min_area:
            continue
        pg = int(im.get("page") or 0)
        by_page[pg].append(im)
    for pg in by_page:
        # Ordem de leitura no PDF (índice da figura), depois área como desempate.
        by_page[pg].sort(key=lambda x: (img_seq_on_page(x), -area(x)))
    return by_page


def pick_image(
    preferred_page: int,
    ranked_pages: list[tuple[int, int, bool]],
    by_page: dict[int, list[dict[str, Any]]],
    used_paths: set[str],
    page_count: int,
    entry: dict[str, Any],
) -> tuple[str | None, int | None, str]:
    """Try preferred page, then ranked order, then ±1 neighbors. Ordena por caption vs terms."""
    trials: list[int] = []
    seen: set[int] = set()

    def add(p: int) -> None:
        if 1 <= p <= page_count and p not in seen:
            seen.add(p)
            trials.append(p)

    add(preferred_page)
    for p, sc, _ in ranked_pages:
        if sc > 0:
            add(p)
    for delta in (-1, 1, -2, 2):
        add(preferred_page + delta)

    for p in trials:
        imgs = [
            im
            for im in (by_page.get(p) or [])
            if str(im.get("path") or "") and str(im.get("path") or "") not in used_paths
        ]
        imgs.sort(
            key=lambda im: (-caption_match_score(im, entry), img_seq_on_page(im), -area(im))
        )
        for im in imgs:
            path = str(im.get("path") or "")
            if path:
                return path, p, "page_primary" if p == preferred_page else "fallback_page"

    return None, None, "none"


def confidence_label(score: int, must_hit: bool, path: str | None) -> str:
    if not path:
        return "none"
    if score >= 2 and not must_hit:
        return "high"
    if score >= 1:
        return "medium"
    return "low"


def assign_orphans_by_largest_remaining(
    manifest: dict[str, Any],
    per_id: dict[str, dict[str, Any]],
    used_paths: set[str],
    floor_area: int,
) -> None:
    """Preenche ids sem imagem com a maior figura ainda não usada (revisão obrigatória)."""
    pool = sorted(
        (im for im in (manifest.get("images") or []) if area(im) >= floor_area),
        key=lambda x: -area(x),
    )
    for row in sorted(per_id.values(), key=lambda r: r["instrumentoId"]):
        if row.get("imagem"):
            continue
        for im in pool:
            path = str(im.get("path") or "")
            if not path or path in used_paths:
                continue
            row["imagem"] = path
            row["page"] = int(im.get("page") or 0)
            row["confidence"] = "low"
            row["assignedByFallback"] = True
            row["score"] = 0
            used_paths.add(path)
            break


def run_map(
    root: Path,
    min_area: int,
    fallback_floor: int | None,
) -> dict[str, Any]:
    inst_dir = root / "data" / "instrumentais"
    manifest_path = inst_dir / "extract_manifest.json"
    kw_path = inst_dir / "keyword_map.json"
    to_path = root / "data" / "to_instrumentais.json"

    manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
    kw = json.loads(kw_path.read_text(encoding="utf-8"))
    to_data = json.loads(to_path.read_text(encoding="utf-8"))

    page_count = int(manifest.get("pageCount") or 0)
    pages = load_pages(inst_dir, page_count)
    by_page = images_by_page(manifest, min_area)
    entries: dict[str, Any] = kw.get("entries") or {}

    used_paths: set[str] = set()
    instrument_ids = [x.get("id") for x in to_data.get("instrumentos") or [] if x.get("id")]
    missing_kw = [i for i in instrument_ids if i not in entries]

    meta: list[tuple[str, dict[str, Any], list[tuple[int, int, bool]], int, int, bool]] = []
    for iid in instrument_ids:
        entry = entries.get(iid) or {"terms": [iid.replace("_", " ")], "must_not": []}
        ranked = best_pages_for_id(pages, entry)
        best_page, best_score, must_hit = ranked[0]
        meta.append((iid, entry, ranked, best_page, best_score, must_hit))

    meta.sort(key=lambda x: (-x[4], x[0]))

    per_id: dict[str, dict[str, Any]] = {}

    for iid, entry, ranked, best_page, best_score, must_hit in meta:
        path, used_page, _how = pick_image(
            best_page, ranked, by_page, used_paths, page_count, entry
        )
        conf = confidence_label(best_score, must_hit, path)
        if path:
            used_paths.add(path)

        cm = 0
        if path:
            for im in manifest.get("images") or []:
                if str(im.get("path") or "") == path:
                    cm = caption_match_score(im, entry)
                    break
        per_id[iid] = {
            "instrumentoId": iid,
            "imagem": path or "",
            "page": used_page or best_page,
            "score": best_score,
            "captionTermMatches": cm,
            "confidence": conf,
            "rankedPages": [{"page": p, "score": s, "must_not_penalized": mh} for p, s, mh in ranked[:5]],
        }

    if fallback_floor is not None and fallback_floor > 0:
        assign_orphans_by_largest_remaining(manifest, per_id, used_paths, fallback_floor)

    unmapped = [iid for iid, row in per_id.items() if not row.get("imagem")]
    low_confidence = [
        iid
        for iid, row in per_id.items()
        if row.get("confidence") in ("low", "none") or row.get("assignedByFallback")
    ]

    return {
        "version": 1,
        "generatedAt": date.today().isoformat(),
        "minImageArea": min_area,
        "sourceManifest": str(manifest_path.relative_to(root)),
        "sourcePdf": manifest.get("sourcePdf"),
        "missingKeywordEntries": missing_kw,
        "unmappedInstrumentIds": unmapped,
        "reviewSuggestedIds": sorted(set(low_confidence)),
        "fallbackMinArea": fallback_floor,
        "byInstrumentId": per_id,
    }


def apply_map(root: Path, map_path: Path, pdf_note: str) -> None:
    payload = json.loads(map_path.read_text(encoding="utf-8"))
    by_id = payload.get("byInstrumentId") or {}
    to_path = root / "data" / "to_instrumentais.json"
    data = json.loads(to_path.read_text(encoding="utf-8"))

    ver = int(data.get("version") or 0) + 1
    data["version"] = ver
    data["updatedAt"] = date.today().isoformat()
    marker = "map_to_instrumentais_images.py"
    prev_nota = str(data.get("nota") or "").strip()
    extra = (
        f"Figuras do PDF em conteudos/ aplicadas com {marker} ({map_path.name})."
    )
    if marker not in prev_nota:
        data["nota"] = (prev_nota + " " + extra).strip() if prev_nota else extra

    for inst in data.get("instrumentos") or []:
        iid = inst.get("id")
        if not iid or iid not in by_id:
            continue
        row = by_id[iid]
        img = str(row.get("imagem") or "").strip()
        if not img:
            inst["imagem"] = ""
            continue
        inst["imagem"] = img
        if "version" not in inst:
            inst["version"] = 1
        else:
            try:
                inst["version"] = int(inst["version"]) + 1
            except (TypeError, ValueError):
                inst["version"] = 1
        inst["nota"] = pdf_note

    to_path.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")


def main() -> None:
    root = repo_root()
    ap = argparse.ArgumentParser(description="Mapear figuras extraídas aos instrumentos TO.")
    ap.add_argument(
        "--min-area",
        type=int,
        default=40_000,
        help="Área mínima width*height (default 40000)",
    )
    ap.add_argument(
        "--fallback-min-area",
        type=int,
        default=8_000,
        help="Para ids sem match usado: maior imagem >= este valor (0 desliga). Default 8000.",
    )
    ap.add_argument(
        "--out",
        type=Path,
        default=root / "data" / "instrumentais" / "to_instrumentais_figuras_map.json",
        help="Ficheiro JSON de mapeamento",
    )
    ap.add_argument(
        "--apply",
        action="store_true",
        help="Recalcular mapa, gravar --out e aplicar em data/to_instrumentais.json",
    )
    ap.add_argument(
        "--apply-only",
        action="store_true",
        help="Só aplicar o JSON em --out (sem recalcular; use após revisão manual do mapa)",
    )
    ap.add_argument(
        "--pdf-nota",
        type=str,
        default="",
        help="Texto curto para inst['nota'] ao aplicar (ex. nome do PDF em conteudos/)",
    )
    args = ap.parse_args()

    if args.apply_only:
        if not args.out.is_file():
            print(f"Ficheiro de mapa não encontrado: {args.out}", file=sys.stderr)
            sys.exit(1)
        note = args.pdf_nota.strip() or (
            "Figura extraída do PDF de material cirúrgico em conteudos/ (ver extract_manifest.json)."
        )
        apply_map(root, args.out, note)
        print(f"Aplicado a partir de {args.out} -> {root / 'data' / 'to_instrumentais.json'}")
        return

    fb = args.fallback_min_area if args.fallback_min_area > 0 else None
    result = run_map(root, args.min_area, fb)
    args.out.parent.mkdir(parents=True, exist_ok=True)
    args.out.write_text(json.dumps(result, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Escrito: {args.out}")
    print(
        f"Não mapeados: {len(result['unmappedInstrumentIds'])} — "
        f"{result['unmappedInstrumentIds'][:10]}{'...' if len(result['unmappedInstrumentIds']) > 10 else ''}"
    )
    if result.get("missingKeywordEntries"):
        print(f"Aviso: ids sem keyword_map: {result['missingKeywordEntries']}")

    if args.apply:
        note = args.pdf_nota.strip() or (
            "Figura extraída do PDF de material cirúrgico em conteudos/ (ver extract_manifest.json)."
        )
        apply_map(root, args.out, note)
        print(f"Aplicado em {root / 'data' / 'to_instrumentais.json'}")


if __name__ == "__main__":
    main()
