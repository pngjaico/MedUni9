#!/usr/bin/env python3
"""
inventariar_legado.py — inventaria a pasta de legado do ciclo clinico.

Escaneia recursivamente, classifica cada arquivo por:
  - tipo: prova | atividade | resumo | slide | plano_ensino | livro | imagem | lixo
  - materia_provavel: cm5 | cc5 | farm | cm6 | cir6 | mfc | tcar | eci8 | ecl8 | sm8 | basico | indef
  - tem_questoes: bool (heuristica do nome)
  - encoding_nome_ok: bool (nome sem caracteres corrompidos)
  - tamanho_kb: int

Saida:
  - data/agent_logs/inventario_legado.json (machine-readable)
  - data/agent_logs/inventario_legado.csv  (humano)

Uso:
  python scripts/inventariar_legado.py
  python scripts/inventariar_legado.py --pasta "C:/caminho/custom"

Nao move nem renomeia arquivos. Inventario apenas.
"""

from __future__ import annotations
import argparse
import csv
import json
import re
import sys
from datetime import datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
LEGADO_DEFAULT = Path("C:/Users/Usuario-pc/Desktop/Aplicativo Uni9/Dados para expansão ciclo clinico")
LOG_DIR = ROOT / "data" / "agent_logs"

# Heuristicas de classificacao por nome de arquivo

PADROES_TIPO = [
    ("prova", re.compile(r"\b(prov|p[1-4]|gabarit|enem|residencia|enare)\b", re.IGNORECASE)),
    ("atividade", re.compile(r"\b(atividade|exerc|quiz|simulado|quest)\b", re.IGNORECASE)),
    ("plano_ensino", re.compile(r"\b(plano.de.ensino|pens|pen)\b", re.IGNORECASE)),
    ("slide", re.compile(r"\.(pptx?|key)$|slides?", re.IGNORECASE)),
    ("livro", re.compile(r"\b(sabiston|cecil|harrison|goodman|katzung|nelson|tintinalli|robbins|atlas|tratado)\b", re.IGNORECASE)),
    ("imagem", re.compile(r"\.(png|jpg|jpeg|gif|tiff|bmp)$", re.IGNORECASE)),
    ("resumo", re.compile(r"\b(resumo|sintese|esquema|map[ao].mental)\b", re.IGNORECASE)),
    ("lixo", re.compile(r"^(documento.sem.t.tulo|arquivo.tmp|.+\.tmp$|~\$|untitled)", re.IGNORECASE)),
]

PADROES_MATERIA = [
    # Mod 5
    ("cm5", re.compile(r"\b(cl.nica.m.dica|cm5|hipertens|insufic|diabetes|cefaleia|otite|tireoide|dermat|olho|fundo)\b", re.IGNORECASE)),
    ("cc5", re.compile(r"\b(cl.nica.cir.rgica|cc5|pre.operat|p.s.operat|cicatriz|.lcera.de.press|c.ncer.de.pele|lit.ase.renal|prost|hpb)\b", re.IGNORECASE)),
    ("farm", re.compile(r"\b(farmaco|antibi.tico|antiinflam|antiviral|antiparas|aines|corticoide|insulin|hipoglic|antialerg)\b", re.IGNORECASE)),
    # Mod 6
    ("cir6", re.compile(r"\b(abdome.agudo|h.rnia|apendicite|pancreatite|colecist|diverticul|hemorragia.dig|.lcera.p.ptica|orificial|neoplasia|fratura|luxa..o|imobiliz|ortoped|.sseo)\b", re.IGNORECASE)),
    ("cm6", re.compile(r"\b(cirrose|hepatites|envelhec|geriatr|fragilid|leucemi|linfoma|mieloma|hemostas|espirometr|asma|dpoc|intersticial|monoartrite|poliartrite|espondilo|lupus|cuidados.paliativos|spikes|delirium|tabagismo)\b", re.IGNORECASE)),
    ("mfc", re.compile(r"\b(medicina.de.fam.lia|mfc|aps|aten..o.prim.ria|domicil|tabagismo|tuberculose)\b", re.IGNORECASE)),
    ("tcar", re.compile(r"\b(t.cnica.operat|antissep|asseps|esteriliz|sutura|n.s|fios|agulhas|drenagem|acessos.venosos)\b", re.IGNORECASE)),
    # Mod 8
    ("eci8", re.compile(r"\b(emerg.ncias.cir.rgicas|atls|trauma|choque|tce|queimadura)\b", re.IGNORECASE)),
    ("ecl8", re.compile(r"\b(emerg.ncias.cl.nicas|sepse|tep|sca|ica|ira|cetoacid)\b", re.IGNORECASE)),
    ("sm8", re.compile(r"\b(sa.de.mental|psiq|neuro|avc|epilepsia|coma|psicos|ansiedade|depress|tept|toc|esquizofrenia|demencia)\b", re.IGNORECASE)),
    # Basico (referencia, nao prioridade)
    ("basico", re.compile(r"\b(bmf[1-4]|semio[1-4]|mad[12]|bcm1|pmh|sus|bioestat|saude.do.trabalhador)\b", re.IGNORECASE)),
]


def classificar_tipo(nome: str) -> str:
    for tipo, regex in PADROES_TIPO:
        if regex.search(nome):
            return tipo
    return "indef"


def classificar_materia(caminho_completo: str) -> str:
    """Tenta mapear pelo caminho completo (pasta + nome)."""
    for materia, regex in PADROES_MATERIA:
        if regex.search(caminho_completo):
            return materia
    return "indef"


def encoding_nome_ok(nome: str) -> bool:
    """Detecta nomes com encoding corrompido (Ã_, Ã³, Â° comuns)."""
    suspeitos = ["Ã_", "Ã³", "Â°", "Â­", "Ã©", "Ã§", "Ãº", "Ã¡", "Ã£"]
    return not any(s in nome for s in suspeitos)


def heuristica_tem_questoes(nome: str, tipo: str, tamanho_kb: int) -> bool:
    """Probabilidade do arquivo conter questoes para extracao."""
    if tipo in ("prova", "atividade"):
        return True
    if tipo == "slide" and tamanho_kb > 500:
        return True
    return False


def inventariar(pasta: Path) -> list[dict]:
    if not pasta.exists():
        print(f"ERRO: pasta nao existe: {pasta}")
        return []
    entries = []
    for path in pasta.rglob("*"):
        if path.is_dir():
            continue
        try:
            tamanho_kb = path.stat().st_size // 1024
        except Exception:
            tamanho_kb = 0
        rel = path.relative_to(pasta).as_posix()
        nome = path.name
        ext = path.suffix.lower().lstrip(".")
        tipo = classificar_tipo(nome)
        materia = classificar_materia(rel)
        entries.append({
            "path_rel": rel,
            "nome": nome,
            "ext": ext,
            "tamanho_kb": tamanho_kb,
            "tipo": tipo,
            "materia_provavel": materia,
            "tem_questoes_provavel": heuristica_tem_questoes(nome, tipo, tamanho_kb),
            "encoding_nome_ok": encoding_nome_ok(nome),
        })
    return entries


def gerar_relatorio(entries: list[dict]) -> dict:
    by_tipo = {}
    by_materia = {}
    encoding_ruim = []
    com_questoes = []
    for e in entries:
        by_tipo[e["tipo"]] = by_tipo.get(e["tipo"], 0) + 1
        by_materia[e["materia_provavel"]] = by_materia.get(e["materia_provavel"], 0) + 1
        if not e["encoding_nome_ok"]:
            encoding_ruim.append(e["path_rel"])
        if e["tem_questoes_provavel"]:
            com_questoes.append(e["path_rel"])
    return {
        "total_arquivos": len(entries),
        "por_tipo": dict(sorted(by_tipo.items(), key=lambda x: -x[1])),
        "por_materia_provavel": dict(sorted(by_materia.items(), key=lambda x: -x[1])),
        "arquivos_encoding_ruim": len(encoding_ruim),
        "arquivos_com_questoes_provavel": len(com_questoes),
        "amostra_encoding_ruim": encoding_ruim[:10],
        "amostra_com_questoes": com_questoes[:20],
    }


def salvar(entries: list[dict], relatorio: dict, json_out: Path, csv_out: Path):
    LOG_DIR.mkdir(parents=True, exist_ok=True)
    json_out.write_text(json.dumps({
        "_meta": {"gerado_em": datetime.now().isoformat(timespec="seconds"), "total": len(entries)},
        "relatorio": relatorio,
        "arquivos": entries,
    }, ensure_ascii=False, indent=2), encoding="utf-8")
    with csv_out.open("w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=["path_rel", "nome", "ext", "tamanho_kb", "tipo", "materia_provavel", "tem_questoes_provavel", "encoding_nome_ok"])
        writer.writeheader()
        for e in entries:
            writer.writerow(e)


def imprimir_relatorio(relatorio: dict):
    print("\n=== Inventario do Legado ===")
    print(f"Total de arquivos: {relatorio['total_arquivos']}")
    print("\nPor tipo:")
    for k, v in relatorio["por_tipo"].items():
        print(f"  {k:20s} {v}")
    print("\nPor materia (heuristica):")
    for k, v in relatorio["por_materia_provavel"].items():
        print(f"  {k:20s} {v}")
    print(f"\nArquivos com encoding ruim no nome: {relatorio['arquivos_encoding_ruim']}")
    if relatorio.get("amostra_encoding_ruim"):
        print("  Amostra:")
        for x in relatorio["amostra_encoding_ruim"][:5]:
            print(f"    {x}")
    print(f"\nArquivos com questoes provaveis: {relatorio['arquivos_com_questoes_provavel']}")
    if relatorio.get("amostra_com_questoes"):
        print("  Amostra:")
        for x in relatorio["amostra_com_questoes"][:10]:
            print(f"    {x}")


def main():
    p = argparse.ArgumentParser()
    p.add_argument("--pasta", default=str(LEGADO_DEFAULT), help="Pasta raiz do legado")
    a = p.parse_args()

    pasta = Path(a.pasta)
    print(f"Inventariando: {pasta}")
    entries = inventariar(pasta)
    if not entries:
        sys.exit(1)

    relatorio = gerar_relatorio(entries)
    imprimir_relatorio(relatorio)

    ts = datetime.now().strftime("%Y%m%d_%H%M%S")
    json_out = LOG_DIR / f"inventario_legado_{ts}.json"
    csv_out = LOG_DIR / f"inventario_legado_{ts}.csv"
    salvar(entries, relatorio, json_out, csv_out)
    print(f"\nSalvo em:\n  {json_out}\n  {csv_out}")


if __name__ == "__main__":
    main()
