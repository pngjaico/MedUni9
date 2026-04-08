#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import re
import statistics
from datetime import datetime, timezone
from pathlib import Path

import numpy as np
from PIL import Image
from rapidocr_onnxruntime import RapidOCR

ROOT = Path(__file__).resolve().parents[1]
ATLAS_PATH = ROOT / "data" / "histologia_atlas.json"
REPORT_PATH = ROOT / "data" / "histologia_legendas_ocr_visual_relatorio.json"


def classify_legend_line(line: str) -> str:
    t = line.lower()
    if any(x in t for x in ["epitélio", "epitelio", "mesotélio", "mesotelio", "urotélio", "urotelio"]):
        return "Epitélio"
    if any(x in t for x in ["célula", "celula", "neurônio", "neuronio", "linfócito", "linfocito", "adipócito", "adipocito"]):
        return "Célula"
    if any(x in t for x in ["vaso", "capilar", "artéria", "arteria", "veia", "vênula", "venula", "sinusóide", "sinusoide"]):
        return "Vaso"
    if any(x in t for x in ["nervo", "neuróglia", "neuroglia", "axônio", "axonio"]):
        return "Nervo"
    if any(x in t for x in ["camada", "túnica", "tunica", "mucosa", "submucosa", "serosa", "adventícia", "adventicia", "córtex", "cortex", "medular"]):
        return "Camada"
    if any(x in t for x in ["glândula", "glandula", "folículo", "foliculo", "ácino", "acino"]):
        return "Glândula"
    if any(x in t for x in ["fibra", "matriz", "trabécula", "trabecula", "lamela"]):
        return "Matriz/Fibra"
    return "Estrutura"


def flatten_laminas(atlas: dict) -> list[dict]:
    out: list[dict] = []
    for sys_obj in atlas.get("sistemas", []):
        for div in sys_obj.get("divisoes", []):
            for lam in div.get("laminas", []):
                out.append(lam)
    return out


def cleanup_line(s: str) -> str:
    s = re.sub(r"\s+", " ", (s or "").strip())
    s = s.strip(" -")
    return s


def noise_line(s: str) -> bool:
    t = s.lower()
    if not t:
        return True
    if len(t) <= 2:
        return True
    noise_tokens = [
        "bdhisto", "icb-ufg", "ufg", "instagram", "facebook", "footer",
        "universidade federal", "departamento de histologia", "histologiaufg",
    ]
    return any(tok in t for tok in noise_tokens)


def merge_lines(lines: list[str]) -> list[str]:
    out: list[str] = []
    for line in lines:
        ln = cleanup_line(line)
        if noise_line(ln):
            continue
        if out and (ln.startswith("(") or ln.startswith("-") or ln.startswith(",")):
            out[-1] = cleanup_line(out[-1] + " " + ln)
            continue
        if out and re.match(r"^[a-zà-ú]", ln):
            out[-1] = cleanup_line(out[-1] + " " + ln)
            continue
        out.append(ln)
    # unique preserving order
    seen = set()
    uniq = []
    for x in out:
        k = x.lower()
        if k in seen:
            continue
        seen.add(k)
        uniq.append(x)
    return uniq[:14]


def ocr_legend_lines(ocr: RapidOCR, img_path: Path) -> tuple[list[str], float]:
    img = Image.open(img_path).convert("RGB")
    w, h = img.size
    # Foco na área da legenda à direita; OCR visual puro da imagem.
    crop = img.crop((int(w * 0.58), 0, w, h))
    res, _ = ocr(np.array(crop))
    if not res:
        return ([], 0.0)
    tmp: list[tuple[float, str, float]] = []
    confs = []
    for item in res:
        pts, txt, conf = item
        conf_f = float(conf)
        y = sum(p[1] for p in pts) / len(pts)
        txt = cleanup_line(txt)
        if conf_f < 0.30:
            continue
        if not txt:
            continue
        tmp.append((y, txt, conf_f))
        confs.append(conf_f)
    tmp.sort(key=lambda x: x[0])
    lines = merge_lines([x[1] for x in tmp])
    avg_conf = statistics.mean(confs) if confs else 0.0
    return lines, avg_conf


def source_image_path(lam: dict) -> Path | None:
    src = lam.get("urlImagemCompleta") or lam.get("urlImagemZoom") or lam.get("urlImagem")
    if not src or not str(src).startswith("/"):
        return None
    p = ROOT / str(src).lstrip("/").replace("/", "\\")
    return p if p.is_file() else None


def process_block(atlas: dict, start: int, size: int, ocr: RapidOCR) -> dict:
    laminas = flatten_laminas(atlas)
    end = min(start + size, len(laminas))
    changed = 0
    empty = 0
    errors = 0
    for i in range(start, end):
        lam = laminas[i]
        path = source_image_path(lam)
        if not path:
            errors += 1
            continue
        try:
            lines, avg_conf = ocr_legend_lines(ocr, path)
        except Exception:
            errors += 1
            continue
        if not lines:
            lines = ["Sem legenda detectável na imagem."]
            empty += 1
        lam["legendaTranscrita"] = lines
        lam["legendaCategorias"] = [classify_legend_line(x) for x in lines]
        meta = lam.get("auditoriaLegenda") or {}
        meta["estado"] = "corrigido_visual_ocr"
        meta["nota"] = f"OCR visual puro (conf média {avg_conf:.2f})."
        lam["auditoriaLegenda"] = meta
        changed += 1
    return {
        "start": start,
        "end": end,
        "changed": changed,
        "empty": empty,
        "errors": errors,
        "total": len(laminas),
    }


def main() -> None:
    parser = argparse.ArgumentParser(description="Atualiza legendaTranscrita por OCR visual (imagem apenas), em blocos.")
    parser.add_argument("--start", type=int, default=0, help="Índice inicial global.")
    parser.add_argument("--block-size", type=int, default=25, help="Tamanho do bloco.")
    parser.add_argument("--all", action="store_true", help="Processar todos os blocos até o final.")
    args = parser.parse_args()

    atlas = json.loads(ATLAS_PATH.read_text(encoding="utf-8"))
    ocr = RapidOCR()
    laminas = flatten_laminas(atlas)

    reports: list[dict] = []
    start = args.start
    while start < len(laminas):
        rep = process_block(atlas, start, args.block_size, ocr)
        reports.append(rep)
        print(f"bloco {rep['start']}..{rep['end']-1}: changed={rep['changed']} empty={rep['empty']} errors={rep['errors']}")
        if not args.all:
            break
        start += args.block_size

    ATLAS_PATH.write_text(json.dumps(atlas, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    report = {
        "geradoEm": datetime.now(timezone.utc).isoformat(),
        "modo": "ocr_visual_puro_imagem",
        "blocos": reports,
        "totalLaminas": len(laminas),
    }
    REPORT_PATH.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print("ok")


if __name__ == "__main__":
    main()
