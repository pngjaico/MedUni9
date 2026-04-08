"""
Extrai imagens (e texto opcional) de PDF de material cirúrgico para data/instrumentais/.

Por defeito grava cada figura como PNG com fundo branco: só assenta o raster sobre um
quadro RGB branco do mesmo tamanho (transparência vê branco por baixo). Não repinta pixels
escuros nem remove fundos.

Grava no manifest, quando possível, rect no PDF e uma hipótese de legenda (texto à esquerda
ou à direita da figura) para ajudar map_to_instrumentais_images.py.

Uso:
  python scripts/extract_instrumentais_pdf.py [--pdf caminho] [--out data/instrumentais] [--text]
  python scripts/extract_instrumentais_pdf.py --no-white-bg   # bytes crus do PDF

Requisitos: pip install pymupdf pillow
"""
from __future__ import annotations

import argparse
import io
import json
import sys
import unicodedata
from pathlib import Path

try:
    import fitz  # PyMuPDF
except ImportError:
    print("Instale PyMuPDF: pip install pymupdf", file=sys.stderr)
    sys.exit(1)

try:
    from PIL import Image
except ImportError:
    Image = None  # type: ignore


def strip_accents(s: str) -> str:
    nk = unicodedata.normalize("NFKD", s)
    return "".join(c for c in nk if not unicodedata.combining(c))


def normalize_caption(s: str) -> str:
    return strip_accents(" ".join(s.split())).lower()


def block_text(block: dict) -> str:
    parts: list[str] = []
    for line in block.get("lines") or []:
        for sp in line.get("spans") or []:
            t = sp.get("text") or ""
            if t:
                parts.append(t)
    return " ".join(parts).strip()


def guess_caption_for_image(page: fitz.Page, r_img: fitz.Rect) -> str:
    """
    Heurística: legenda em caixa à esquerda da figura (brochura UNI9); fallback à direita.
    Ignora blocos muito grandes (marca d'água / texto corrido).
    """
    if r_img.width <= 0 or r_img.height <= 0:
        return ""

    d = page.get_text("dict") or {}
    blocks = [b for b in d.get("blocks") or [] if b.get("type") == 0]
    page_rect = page.rect
    pw, ph = page_rect.width, page_rect.height

    def score_left(bbox: fitz.Rect) -> float | None:
        if bbox.x1 > r_img.x0 + 8:
            return None
        dy0 = max(bbox.y0, r_img.y0)
        dy1 = min(bbox.y1, r_img.y1)
        overlap = max(0.0, dy1 - dy0)
        h = min(bbox.height, r_img.height) or 1.0
        vscore = overlap / h
        gap = max(0.0, r_img.x0 - bbox.x1)
        hscore = 10.0 / (1.0 + gap * 0.02)
        return vscore * 200.0 + hscore

    def score_right(bbox: fitz.Rect) -> float | None:
        if bbox.x0 < r_img.x1 - 8:
            return None
        dy0 = max(bbox.y0, r_img.y0)
        dy1 = min(bbox.y1, r_img.y1)
        overlap = max(0.0, dy1 - dy0)
        h = min(bbox.height, r_img.height) or 1.0
        vscore = overlap / h
        gap = max(0.0, bbox.x0 - r_img.x1)
        hscore = 10.0 / (1.0 + gap * 0.02)
        return vscore * 180.0 + hscore

    best_txt = ""
    best_sc = -1e9

    for b in blocks:
        bbox = fitz.Rect(b["bbox"])
        if bbox.width > pw * 0.88 and bbox.height > ph * 0.35:
            continue
        txt = block_text(b)
        if len(txt) < 2:
            continue
        for fn in (score_left, score_right):
            sc = fn(bbox)
            if sc is None:
                continue
            if sc > best_sc:
                best_sc = sc
                best_txt = txt

    if best_sc < 0.5:
        return ""
    return best_txt[:400]


def bytes_to_white_background_png(raw: bytes) -> tuple[bytes, int, int]:
    """
    Composita só sobre branco: transparência -> branco visível; resto inalterado.
    """
    if Image is None:
        raise RuntimeError("pillow")

    im = Image.open(io.BytesIO(raw))
    w, h = im.size
    bg = Image.new("RGB", (w, h), (255, 255, 255))

    if im.mode in ("RGBA", "LA") or (im.mode == "P" and "transparency" in im.info):
        im_rgba = im.convert("RGBA")
        bg.paste(im_rgba, mask=im_rgba.split()[3])
    else:
        rgb = im.convert("RGB")
        bg.paste(rgb, (0, 0))

    out = io.BytesIO()
    bg.save(out, format="PNG", optimize=True)
    data = out.getvalue()
    return data, w, h


def find_default_pdf(conteudos: Path) -> Path | None:
    for p in conteudos.iterdir():
        if not p.is_file():
            continue
        if p.suffix.lower() != ".pdf":
            continue
        name = p.name.lower()
        if name.startswith("3-") and "material" in name and "cir" in name:
            return p
    return None


def main() -> None:
    root = Path(__file__).resolve().parents[1]
    ap = argparse.ArgumentParser()
    ap.add_argument("--pdf", type=Path, default=None, help="Caminho do PDF")
    ap.add_argument("--out", type=Path, default=root / "data" / "instrumentais", help="Pasta de saída")
    ap.add_argument("--text", action="store_true", help="Gravar texto bruto por página (.txt)")
    ap.add_argument(
        "--no-white-bg",
        action="store_true",
        help="Não pós-processar: manter formato/cores do stream do PDF (sem composição em branco)",
    )
    args = ap.parse_args()
    white_bg = not args.no_white_bg
    if white_bg and Image is None:
        print("Para fundo branco nas figuras instale: pip install pillow", file=sys.stderr)
        sys.exit(1)

    pdf_path = args.pdf
    if pdf_path is None:
        pdf_path = find_default_pdf(root / "conteudos")
    if pdf_path is None or not pdf_path.is_file():
        print("PDF não encontrado. Passe --pdf ou coloque 3-*.pdf em conteudos/", file=sys.stderr)
        sys.exit(1)

    out_dir = args.out
    out_dir.mkdir(parents=True, exist_ok=True)

    doc = fitz.open(pdf_path)
    manifest = {
        "sourcePdf": str(pdf_path.relative_to(root) if pdf_path.is_relative_to(root) else pdf_path),
        "pageCount": len(doc),
        "images": [],
        "baseUrl": "/data/instrumentais/",
        "whiteBackgroundExport": bool(white_bg),
        "compositeNote": "PNG compositado apenas sobre RGB branco (sem limiar de pixels escuros).",
    }

    seen_xref: set[int] = set()

    for page_index in range(len(doc)):
        page = doc[page_index]
        if args.text:
            txt = page.get_text("text") or ""
            txt_path = out_dir / f"page_{page_index + 1:03d}.txt"
            txt_path.write_text(txt, encoding="utf-8", errors="replace")

        img_list = page.get_images(full=True)
        candidates: list[tuple[int, fitz.Rect]] = []
        for img in img_list:
            xref = img[0]
            if xref in seen_xref:
                continue
            rects = page.get_image_rects(xref)
            if rects:
                r = rects[0]
            else:
                r = fitz.Rect(1e9, 1e9, 1e9, 1e9)
            candidates.append((xref, r))

        candidates.sort(key=lambda t: (t[1].y0, t[1].x0))

        for img_seq, (xref, r_pdf) in enumerate(candidates, start=1):
            seen_xref.add(xref)

            try:
                base = doc.extract_image(xref)
            except Exception:
                continue

            raw = base["image"]
            caption_guess = ""
            rect_pdf = None
            if r_pdf.x0 < 1e8:
                rect_pdf = [
                    round(float(r_pdf.x0), 2),
                    round(float(r_pdf.y0), 2),
                    round(float(r_pdf.x1), 2),
                    round(float(r_pdf.y1), 2),
                ]
                caption_guess = guess_caption_for_image(page, r_pdf)

            wb_applied = False
            if white_bg:
                try:
                    out_bytes, w, h = bytes_to_white_background_png(raw)
                    filename = f"mesa_p{page_index + 1:03d}_img{img_seq:02d}_xr{xref}.png"
                    img_path = out_dir / filename
                    img_path.write_bytes(out_bytes)
                    wb_applied = True
                except Exception as e:
                    print(f"Aviso: xref {xref} pág. {page_index + 1} sem pos-processo ({e})", file=sys.stderr)
                    ext = base.get("ext", "png")
                    if not ext or ext == "jpg":
                        ext = "jpeg"
                    file_ext = "png" if ext == "png" else ("jpg" if ext in ("jpeg", "jpg") else ext)
                    filename = f"mesa_p{page_index + 1:03d}_img{img_seq:02d}_xr{xref}.{file_ext}"
                    img_path = out_dir / filename
                    img_path.write_bytes(raw)
                    w, h = base.get("width"), base.get("height")
            else:
                ext = base.get("ext", "png")
                if not ext or ext == "jpg":
                    ext = "jpeg"
                file_ext = "png" if ext == "png" else ("jpg" if ext in ("jpeg", "jpg") else ext)
                filename = f"mesa_p{page_index + 1:03d}_img{img_seq:02d}_xr{xref}.{file_ext}"
                img_path = out_dir / filename
                img_path.write_bytes(raw)
                w, h = base.get("width"), base.get("height")

            entry: dict = {
                "file": filename,
                "path": f"/data/instrumentais/{filename}",
                "page": page_index + 1,
                "width": w,
                "height": h,
                "xref": xref,
                "whiteBackground": wb_applied,
                "imageSeqOnPage": img_seq,
            }
            if rect_pdf is not None:
                entry["rectPdf"] = rect_pdf
            if caption_guess:
                entry["captionGuess"] = caption_guess
                entry["captionNorm"] = normalize_caption(caption_guess)

            manifest["images"].append(entry)

    manifest_path = out_dir / "extract_manifest.json"
    manifest_path.write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")

    print(f"PDF: {pdf_path}")
    print(f"Imagens extraidas: {len(manifest['images'])} -> {out_dir}")
    if white_bg:
        print("Pos-processo: composicao sobre branco (sem limiar de pixels escuros)")
    print(f"Manifest: {manifest_path}")


if __name__ == "__main__":
    main()
