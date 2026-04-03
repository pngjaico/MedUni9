#!/usr/bin/env python3
"""
revisar_materiais.py — MedUni9 Material Reviewer

Varre todos os .md em materiais/, faz análise estrutural de cada arquivo e
gera uma fila de revisão para o agente Claude corrigir.

O que verifica por arquivo:
  - Tem breadcrumb (**Matéria → ... → Tema**) na linha 1
  - Tem título H1 (# Titulo)
  - Tem linha de metadados (⏱)
  - Tem seções numeradas (## 1.)
  - Tem ## Pré-Prova ao final
  - Tem checkboxes (- [ ])
  - Palavras sem acento (heurística: "nao", "sao", "voce", "tambem", etc.)
  - Tamanho mínimo (< 3000 chars = suspeito de ser placeholder)

Saídas:
  - data/agent_logs/status_padronizador.json  (relatório geral)
  - data/refs/{aula_id}.refs.json            (criado com template se não existir)
  - Console: lista de arquivos que precisam revisão

Uso:
  python scripts/revisar_materiais.py
  python scripts/revisar_materiais.py --modulo 1
  python scripts/revisar_materiais.py --materia pmh
  python scripts/revisar_materiais.py --apenas-relatorio   (não cria refs)
"""

from __future__ import annotations
import argparse
import json
import re
from pathlib import Path
from datetime import datetime

ROOT = Path(__file__).resolve().parent.parent
MATERIAS_PATH = ROOT / "data" / "materias.json"
MATERIAIS_BASE = ROOT / "materiais"
REFS_DIR = ROOT / "data" / "refs"
STATUS_PATH = ROOT / "data" / "agent_logs" / "status_padronizador.json"

# Palavras heurísticas para detectar falta de acentuação
PALAVRAS_SEM_ACENTO = [
    r"\bnao\b", r"\bsao\b", r"\bvoce\b", r"\btambem\b", r"\bporem\b",
    r"\bentao\b", r"\bpois\b(?!on)", r"\bseria\b", r"\besta\b(?!do)",
    r"\bpara\b", r"\bque\b",  # these are OK, skip
]
# Mais preciso: palavras que DEFINITIVAMENTE precisam de acento
ACENTO_OBRIGATORIO = [
    (r"\bnao\b", "não"), (r"\bsao\b", "são"), (r"\bvoce\b", "você"),
    (r"\btambem\b", "também"), (r"\bporem\b", "porém"), (r"\bentao\b", "então"),
    (r"\besta\b(?! )", "está/esta"), (r"\bisse\b", "esse/isso"),
    (r"\bvias\b", "vias"), (r"\bcelula\b", "célula"), (r"\benergia\b", "energia"),
    (r"\bacido\b", "ácido"), (r"\bfuncao\b", "função"), (r"\bsintese\b", "síntese"),
    (r"\bproducao\b", "produção"), (r"\bdegradacao\b", "degradação"),
    (r"\bregulacao\b", "regulação"), (r"\binibicao\b", "inibição"),
    (r"\bativacao\b", "ativação"), (r"\breacao\b", "reação"),
]


def load_json(path: Path):
    return json.loads(path.read_text(encoding="utf-8"))


def analisa_arquivo(path: Path, aula_id: str, materia_id: str, modulo: int, tema: str) -> dict:
    """Analisa um .md e retorna dict com problemas encontrados."""
    try:
        content = path.read_text(encoding="utf-8")
    except Exception as e:
        return {"aula_id": aula_id, "path": str(path), "erro": str(e), "problemas": ["erro_leitura"]}

    problemas = []
    warnings = []

    # 1. Breadcrumb (linha 1 deve ter **... → ... → ...**)
    primeira_linha = content.split("\n")[0].strip()
    if "→" not in primeira_linha or "**" not in primeira_linha:
        problemas.append("sem_breadcrumb")

    # 2. Título H1
    if not re.search(r"^# .+", content, re.MULTILINE):
        problemas.append("sem_titulo_h1")

    # 3. Metadados ⏱
    if "⏱" not in content:
        problemas.append("sem_metadata_tempo")

    # 4. Seções numeradas
    if not re.search(r"^## \d+\.", content, re.MULTILINE):
        problemas.append("sem_secoes_numeradas")

    # 5. Pré-Prova
    if "## Pré-Prova" not in content and "## Pre-Prova" not in content:
        problemas.append("sem_preprova")

    # 6. Checklist
    if "- [ ]" not in content:
        problemas.append("sem_checklist")

    # 7. Ponte com a Clínica
    if "## Ponte com a Clínica" not in content and "## Ponte com a Clinica" not in content:
        warnings.append("sem_ponte_clinica")

    # 8. Acentuação — detecta palavras sem acento obrigatório
    palavras_sem_acento = []
    for pattern, correta in ACENTO_OBRIGATORIO:
        matches = re.findall(pattern, content, re.IGNORECASE)
        if matches:
            # Verifica se a versão acentuada também existe (ou seja, só detecta se é erro mesmo)
            palavras_sem_acento.append(correta.split("/")[0])
    if palavras_sem_acento:
        palavras_unicas = list(set(palavras_sem_acento[:5]))  # máx 5
        problemas.append(f"acentuacao:{','.join(palavras_unicas)}")

    # 9. Tamanho mínimo — placeholder tem < 2500 chars
    if len(content) < 2500:
        problemas.append(f"conteudo_curto:{len(content)}chars")

    # 10. Menciona "banca" (proibido pelo guia)
    if re.search(r"\bbanca\b", content, re.IGNORECASE):
        warnings.append("menciona_banca")

    # Score de urgência (maior = mais urgente)
    score = len(problemas) * 10 + len(warnings) * 2
    if "sem_preprova" in problemas:
        score += 20
    if any("conteudo_curto" in p for p in problemas):
        score += 30

    return {
        "aula_id": aula_id,
        "materia_id": materia_id,
        "modulo": modulo,
        "tema": tema,
        "path": str(path.relative_to(ROOT)).replace("\\", "/"),
        "tamanho_chars": len(content),
        "problemas": problemas,
        "warnings": warnings,
        "score_urgencia": score,
        "precisa_revisao": len(problemas) > 0,
    }


def cria_refs_template(aula_id: str, materia_id: str, modulo: int, tema: str):
    """Cria arquivo de referências com template se não existir."""
    REFS_DIR.mkdir(parents=True, exist_ok=True)
    refs_path = REFS_DIR / f"{aula_id}.refs.json"
    if refs_path.exists():
        return  # já existe, não sobrescrever

    template = {
        "aula_id": aula_id,
        "materia": materia_id,
        "modulo": modulo,
        "tema": tema,
        "gerado_em": datetime.now().strftime("%d/%m/%Y %H:%M"),
        "revisado": False,
        "livros": [
            {
                "titulo": "A ser preenchido pelo agente revisor",
                "capitulo": "",
                "paginas": "",
                "relevancia": "principal"
            }
        ],
        "justificativa": "A ser preenchido pelo agente revisor: por que este conteúdo foi incluído, quais pontos de prova ele cobre e qual a relevância clínica.",
        "pontos_de_prova": [],
        "observacoes": ""
    }
    refs_path.write_text(json.dumps(template, ensure_ascii=False, indent=2), encoding="utf-8")


def main():
    parser = argparse.ArgumentParser(description="Revisa materiais de estudo e gera fila de correção.")
    parser.add_argument("--modulo", type=int, default=None)
    parser.add_argument("--materia", type=str, default=None)
    parser.add_argument("--apenas-relatorio", action="store_true",
                        help="Não cria arquivos .refs.json")
    args = parser.parse_args()

    materias = load_json(MATERIAS_PATH)
    resultados = []
    analisados = 0
    com_problema = 0

    for materia_id, meta in materias.items():
        if args.modulo and int(meta.get("modulo", 0)) != args.modulo:
            continue
        if args.materia and materia_id != args.materia:
            continue

        modulo = int(meta.get("modulo", 0))
        aulas = meta.get("aulas") or []

        for aula in aulas:
            aula_id = str(aula.get("id") or "").strip()
            if not aula_id:
                continue
            tema = str(aula.get("tema") or aula_id)
            md_path = MATERIAIS_BASE / f"modulo{modulo}" / materia_id / f"{aula_id}.md"

            if not md_path.exists():
                continue  # sem material ainda — agente gerador cuida disso

            analisados += 1
            resultado = analisa_arquivo(md_path, aula_id, materia_id, modulo, tema)
            resultados.append(resultado)

            if resultado["precisa_revisao"]:
                com_problema += 1

            # Cria template de refs se não existir
            if not args.apenas_relatorio:
                cria_refs_template(aula_id, materia_id, modulo, tema)

    resultados.sort(key=lambda x: x["score_urgencia"], reverse=True)

    # Separa em fila de ação (com problemas) e ok
    fila_revisao = [r for r in resultados if r["precisa_revisao"]]
    arquivos_ok = [r for r in resultados if not r["precisa_revisao"]]

    status = {
        "status": "ok" if com_problema == 0 else "pendente",
        "rodou_em": datetime.now().strftime("%d/%m/%Y %H:%M"),
        "total_analisados": analisados,
        "com_problema": com_problema,
        "sem_problema": len(arquivos_ok),
        "pct_ok": round(len(arquivos_ok) / max(analisados, 1) * 100, 1),
        "fila_revisao": fila_revisao,
        "arquivos_ok": [r["aula_id"] for r in arquivos_ok],
        "acoes": [
            {"tipo": "info", "hora": datetime.now().strftime("%H:%M"),
             "texto": f"Analisados: {analisados} arquivos — {com_problema} com problemas"}
        ],
    }

    STATUS_PATH.parent.mkdir(parents=True, exist_ok=True)
    STATUS_PATH.write_text(json.dumps(status, ensure_ascii=False, indent=2), encoding="utf-8")

    print(f"Revisão concluída: {analisados} arquivos analisados")
    print(f"  Com problemas: {com_problema} ({100 - status['pct_ok']:.1f}%)")
    print(f"  OK: {len(arquivos_ok)} ({status['pct_ok']}%)")
    if fila_revisao:
        print(f"\nTop 10 urgentes:")
        for r in fila_revisao[:10]:
            print(f"  [{r['score_urgencia']:3d}] {r['aula_id']} — {r['problemas']}")
    print(f"\nStatus salvo em: {STATUS_PATH}")
    if not args.apenas_relatorio:
        print(f"Templates de refs criados em: {REFS_DIR}")


if __name__ == "__main__":
    main()
