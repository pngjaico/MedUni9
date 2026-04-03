#!/usr/bin/env python3
"""
recuperar_de_ps1.py — Recupera materiais corrompidos extraindo conteúdo dos PS1

Os PS1 em scripts/*.ps1 têm o conteúdo correto em UTF-8, mas foram executados
pelo PowerShell 5 sem BOM, que os leu como CP1252 e gravou \ufffd nos .md.

Este script:
1. Lê cada PS1 como UTF-8 (correto)
2. Extrai os blocos de conteúdo (@'...'@)
3. Grava os .md correspondentes com UTF-8 correto
4. Adiciona BOM aos PS1 para evitar re-corrupção

Uso:
  python scripts/recuperar_de_ps1.py --dry-run   (só mostra o que faria)
  python scripts/recuperar_de_ps1.py              (executa a recuperação)
  python scripts/recuperar_de_ps1.py --add-bom    (só adiciona BOM aos PS1)
"""

from __future__ import annotations
import argparse
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SCRIPTS_DIR = ROOT / "scripts"
MATERIAIS_BASE = ROOT / "materiais"


def extract_blocks(ps1_text: str) -> list[dict]:
    """Extrai pares (caminho_destino, conteúdo) de um PS1."""
    results = []

    # Pega cada bloco: $c = @'...conteudo...'@
    # seguido de WriteAllText("path", $c, ...)
    # Divide em segmentos por $c = @'
    segments = re.split(r'\$c\s*=\s*@\'', ps1_text)

    for seg in segments[1:]:  # primeiro é antes do primeiro bloco
        # Fecha no '@
        end = seg.find("'@")
        if end == -1:
            continue
        content = seg[:end]

        # Depois do '@ vem as linhas de WriteAllText
        after = seg[end + 2:]
        writes = re.findall(
            r'\[System\.IO\.File\]::WriteAllText\(["\']([^"\']+\.md)["\']',
            after
        )

        for dest in writes:
            # Expande $base
            dest = dest.replace("$base", str(ROOT)).replace("\\", "/")
            results.append({"path": dest, "content": content})

    return results


def has_corruption(path: Path) -> bool:
    """Verifica se um .md tem \ufffd nos bytes."""
    try:
        return b"\xef\xbf\xbd" in path.read_bytes()
    except Exception:
        return False


def add_bom_to_ps1(ps1_path: Path, dry_run: bool) -> bool:
    """Adiciona BOM UTF-8 a um PS1 se não tiver."""
    raw = ps1_path.read_bytes()
    if raw[:3] == b"\xef\xbb\xbf":
        return False  # já tem BOM
    if dry_run:
        print(f"  [DRY] Adicionaria BOM: {ps1_path.name}")
        return True
    ps1_path.write_bytes(b"\xef\xbb\xbf" + raw)
    print(f"  BOM adicionado: {ps1_path.name}")
    return True


def main():
    parser = argparse.ArgumentParser(description="Recupera .md corrompidos extraindo conteúdo dos PS1.")
    parser.add_argument("--dry-run", action="store_true", help="Só mostra o que faria, sem gravar")
    parser.add_argument("--add-bom", action="store_true", help="Só adiciona BOM aos PS1, sem recuperar .md")
    parser.add_argument("--force", action="store_true", help="Reescreve mesmo arquivos sem corrupção detectada")
    args = parser.parse_args()

    ps1_files = sorted(SCRIPTS_DIR.glob("*.ps1"))
    print(f"PS1 encontrados: {len(ps1_files)}")

    recuperados = 0
    boms_adicionados = 0
    erros = []

    for ps1 in ps1_files:
        # Lê como UTF-8 (o conteúdo real)
        try:
            text = ps1.read_bytes().decode("utf-8", errors="replace")
        except Exception as e:
            print(f"  ERRO lendo {ps1.name}: {e}")
            continue

        # Adiciona BOM
        bom_added = add_bom_to_ps1(ps1, args.dry_run)
        if bom_added:
            boms_adicionados += 1

        if args.add_bom:
            continue

        # Extrai blocos de conteúdo
        blocks = extract_blocks(text)
        if not blocks:
            continue

        print(f"\n{ps1.name}: {len(blocks)} blocos")

        for block in blocks:
            dest = Path(block["path"])
            content = block["content"]

            # Só processa o caminho em materiais/ (ignora data/materiais/)
            if "materiais/" not in block["path"] or "data/materiais" in block["path"]:
                continue

            # Verifica se precisa recuperar
            if dest.exists():
                corrupted = has_corruption(dest)
                if not corrupted and not args.force:
                    print(f"  OK (sem corrupção): {dest.name}")
                    continue
                status = "corrompido" if corrupted else "OK"
            else:
                status = "não existe"

            sys.stdout.buffer.write(f"  [{status}] -> {dest.relative_to(ROOT)}\n".encode("utf-8"))

            if args.dry_run:
                preview = content.strip()[:80].encode("ascii", errors="replace").decode("ascii")
                sys.stdout.buffer.write(f"    conteudo: {preview}\n".encode("utf-8"))
                continue

            # Cria diretórios e grava
            dest.parent.mkdir(parents=True, exist_ok=True)
            try:
                dest.write_text(content, encoding="utf-8")
                recuperados += 1
                sys.stdout.buffer.write(f"    OK gravado ({len(content)} chars)\n".encode("utf-8"))
            except Exception as e:
                erros.append((str(dest), str(e)))
                sys.stdout.buffer.write(f"    ERRO: {e}\n".encode("utf-8", errors="replace"))

    print(f"\n{'='*50}")
    if args.dry_run:
        print("DRY RUN — nada foi alterado")
    else:
        print(f"Arquivos recuperados: {recuperados}")
        print(f"BOMs adicionados: {boms_adicionados}")
        if erros:
            print(f"Erros: {len(erros)}")
            for path, err in erros:
                print(f"  {path}: {err}")


if __name__ == "__main__":
    main()
