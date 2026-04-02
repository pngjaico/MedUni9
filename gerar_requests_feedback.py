import json
import re
from datetime import datetime
from pathlib import Path

ROOT = Path(__file__).parent
INCOMING_DIR = ROOT / "data" / "feedback" / "incoming"
REQUESTS_DIR = ROOT / "data" / "feedback" / "requests"
ARCHIVED_DIR = ROOT / "data" / "feedback" / "archived"
STATUS_FILE = ROOT / "data" / "agent_logs" / "status_feedback.json"

REQUESTS_DIR.mkdir(parents=True, exist_ok=True)
ARCHIVED_DIR.mkdir(parents=True, exist_ok=True)


def load_json(path, default):
    try:
        with open(path, "r", encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        return default


def save_json(path, data):
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)


def read_processed_feedback_ids():
    ids = set()
    for folder in (REQUESTS_DIR, ARCHIVED_DIR):
        for fp in folder.glob("*.json"):
            obj = load_json(fp, {})
            for fb_id in obj.get("feedback_origem", []):
                if fb_id:
                    ids.add(str(fb_id))
    return ids


def next_request_id(today):
    used = set()
    for folder in (REQUESTS_DIR, ARCHIVED_DIR):
        for fp in folder.glob(f"req_{today}_*.json"):
            stem = fp.stem
            m = re.match(rf"req_{re.escape(today)}_(\d+)$", stem)
            if m:
                used.add(int(m.group(1)))
    i = 1
    while i in used:
        i += 1
    return f"req_{today}_{i:03d}"


def guess_priority(tipo, mensagem):
    text = (mensagem or "").lower()
    if tipo in ("bug", "conteudo"):
        if any(k in text for k in ["não abre", "nao abre", "trav", "crash", "erro", "incorreto", "errado"]):
            return "alta"
        return "media"
    if tipo == "interface":
        return "media"
    if len(text.split()) <= 4:
        return "baixa"
    return "media"


def title_from_message(tipo, mensagem):
    t = (mensagem or "").strip().replace("\n", " ")
    if len(t) > 72:
        t = t[:72].rstrip() + "..."
    if not t:
        t = "Feedback sem descrição"
    prefix = {
        "bug": "Corrigir bug reportado",
        "sugestao": "Avaliar sugestão de melhoria",
        "conteudo": "Revisar solicitação de conteúdo",
        "interface": "Ajuste de interface solicitado",
    }.get(tipo, "Analisar feedback")
    return f"{prefix}: {t}"


def action_from_tipo(tipo, disciplina):
    base = {
        "bug": "Reproduzir o problema, identificar causa e aplicar correção no app.",
        "sugestao": "Avaliar impacto/viabilidade e implementar melhoria se aprovada.",
        "conteudo": "Revisar material relacionado e aplicar correção/adição necessária.",
        "interface": "Ajustar posicionamento/estilo da interface conforme feedback.",
    }.get(tipo, "Analisar e propor ação técnica.")
    if disciplina:
        return f"{base} Disciplina relacionada: {disciplina}."
    return base


def append_status_actions(status_data, actions):
    old_actions = status_data.get("acoes", [])
    status_data["acoes"] = old_actions + actions


def main():
    now = datetime.now()
    today_iso = now.strftime("%Y-%m-%d")
    now_iso = now.isoformat()
    now_br = now.strftime("%d/%m/%Y %H:%M")
    now_hhmm = now.strftime("%H:%M")

    status = load_json(STATUS_FILE, {
        "status": "ok",
        "rodou_em": now_br,
        "feedbacks_processados": 0,
        "requests_gerados": 0,
        "acoes": [],
        "observacoes": ""
    })

    processed_ids = read_processed_feedback_ids()
    new_feedbacks = []

    for fp in sorted(INCOMING_DIR.glob("fb_*.json")):
        arr = load_json(fp, [])
        if not isinstance(arr, list):
            continue
        for fb in arr:
            fb_id = str(fb.get("_id", ""))
            if not fb_id or fb_id in processed_ids:
                continue
            new_feedbacks.append(fb)

    if not new_feedbacks:
        status["status"] = "idle"
        status["rodou_em"] = now_br
        status["requests_gerados"] = 0
        append_status_actions(status, [{"tipo": "info", "hora": now_hhmm, "texto": "Nenhum novo feedback para gerar request."}])
        status["observacoes"] = "Sem novos feedbacks para requests."
        save_json(STATUS_FILE, status)
        print("[INFO] Nenhum novo feedback para requests")
        return

    created = []
    for fb in new_feedbacks:
        rid = next_request_id(today_iso)
        tipo = str(fb.get("tipo", "sugestao"))
        msg = str(fb.get("mensagem", "")).strip()
        disc = fb.get("disciplina")

        req = {
            "id": rid,
            "status": "pendente",
            "tipo_feedback": tipo,
            "titulo": title_from_message(tipo, msg),
            "descricao": msg or "Feedback sem mensagem detalhada.",
            "acao_sugerida": action_from_tipo(tipo, disc),
            "disciplina": disc,
            "prioridade": guess_priority(tipo, msg),
            "feedback_origem": [fb.get("_id")],
            "criadoEm": now_iso
        }

        save_json(REQUESTS_DIR / f"{rid}.json", req)
        created.append(rid)
        processed_ids.add(str(fb.get("_id", "")))

    status["status"] = "ok"
    status["rodou_em"] = now_br
    status["requests_gerados"] = len(created)
    append_status_actions(status, [
        {"tipo": "ok", "hora": now_hhmm, "texto": f"{len(created)} request(s) gerado(s) automaticamente."}
    ] + [
        {"tipo": "ok", "hora": now_hhmm, "texto": f"Request {rid} criado"} for rid in created
    ])
    status["observacoes"] = f"{len(created)} request(s) gerado(s) em {today_iso}."

    save_json(STATUS_FILE, status)
    print(f"[OK] {len(created)} request(s) gerado(s)")


if __name__ == "__main__":
    main()
