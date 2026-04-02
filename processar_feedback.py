"""
processar_feedback.py — MedUni9 Feedback Processor
Puxa feedback do Firestore → salva em data/feedback/incoming/ → deleta do Firestore

Dependências:
  pip install firebase-admin

Configuração:
  Coloque sua service account key em: .agents/firebase-sa-key.json
  (Obtenha em: Firebase Console → Project Settings → Service Accounts → Generate new private key)
  NUNCA versione esse arquivo — ele já está no .gitignore.
"""

import json
import os
import sys
from datetime import datetime
from pathlib import Path

ROOT = Path(__file__).parent

STATUS_FILE   = ROOT / "data" / "agent_logs" / "status_feedback.json"
INCOMING_DIR  = ROOT / "data" / "feedback" / "incoming"
SA_KEY_FILE   = ROOT / ".agents" / "firebase-sa-key.json"

INCOMING_DIR.mkdir(parents=True, exist_ok=True)

def log_action(status_data, tipo, texto):
    status_data["acoes"].append({
        "tipo": tipo,
        "hora": datetime.now().strftime("%H:%M"),
        "texto": texto
    })
    print(f"[{tipo.upper()}] {texto}")

def salvar_status(status_data):
    with open(STATUS_FILE, "w", encoding="utf-8") as f:
        json.dump(status_data, f, ensure_ascii=False, indent=2)

def main():
    status_data = {
        "status": "ok",
        "rodou_em": datetime.now().strftime("%d/%m/%Y %H:%M"),
        "feedbacks_processados": 0,
        "requests_gerados": 0,
        "acoes": [],
        "observacoes": ""
    }

    # Verifica dependência firebase-admin
    try:
        import firebase_admin
        from firebase_admin import credentials, firestore
    except ImportError:
        log_action(status_data, "err", "firebase-admin não instalado. Execute: pip install firebase-admin")
        status_data["status"] = "err"
        salvar_status(status_data)
        sys.exit(1)

    # Verifica service account key
    if not SA_KEY_FILE.exists():
        log_action(status_data, "err", f"Service account key não encontrada em: {SA_KEY_FILE}")
        log_action(status_data, "info", "Obtenha em: Firebase Console → Project Settings → Service Accounts → Generate new private key")
        status_data["status"] = "err"
        salvar_status(status_data)
        sys.exit(1)

    # Inicializa Firebase Admin
    try:
        if not firebase_admin._apps:
            cred = credentials.Certificate(str(SA_KEY_FILE))
            firebase_admin.initialize_app(cred)
        db = firestore.client()
        log_action(status_data, "ok", "Conectado ao Firestore")
    except Exception as e:
        log_action(status_data, "err", f"Erro ao conectar ao Firestore: {e}")
        status_data["status"] = "err"
        salvar_status(status_data)
        sys.exit(1)

    # Busca todos os documentos da coleção feedback
    try:
        docs = list(db.collection("feedback").stream())
        log_action(status_data, "info", f"{len(docs)} documento(s) encontrado(s) no Firestore")
    except Exception as e:
        log_action(status_data, "err", f"Erro ao ler feedback: {e}")
        status_data["status"] = "err"
        salvar_status(status_data)
        sys.exit(1)

    if not docs:
        log_action(status_data, "info", "Nenhum feedback novo. Finalizando.")
        status_data["observacoes"] = "Nenhum feedback disponível."
        salvar_status(status_data)
        return

    # Monta lista de feedbacks
    feedbacks = []
    for doc in docs:
        data = doc.to_dict()
        data["_id"] = doc.id
        feedbacks.append(data)

    # Salva em arquivo datado
    today = datetime.now().strftime("%Y-%m-%d")
    out_file = INCOMING_DIR / f"fb_{today}.json"

    # Se já existe um arquivo de hoje, mescla sem duplicar
    existing = []
    if out_file.exists():
        try:
            with open(out_file, "r", encoding="utf-8") as f:
                existing = json.load(f)
        except Exception:
            existing = []

    existing_ids = {fb.get("_id") for fb in existing}
    novos = [fb for fb in feedbacks if fb.get("_id") not in existing_ids]
    combined = existing + novos

    with open(out_file, "w", encoding="utf-8") as f:
        json.dump(combined, f, ensure_ascii=False, indent=2)

    log_action(status_data, "ok", f"{len(novos)} novo(s) feedback(s) salvo(s) em {out_file.name}")
    status_data["feedbacks_processados"] = len(novos)

    # Deleta documentos processados do Firestore (limpa para próximo ciclo)
    deleted = 0
    errors  = 0
    for doc in docs:
        try:
            db.collection("feedback").document(doc.id).delete()
            deleted += 1
        except Exception as e:
            log_action(status_data, "warn", f"Não foi possível deletar doc {doc.id}: {e}")
            errors += 1

    log_action(status_data, "ok", f"{deleted} documento(s) deletado(s) do Firestore")
    if errors:
        log_action(status_data, "warn", f"{errors} erro(s) ao deletar documentos")
        status_data["status"] = "warn"

    status_data["observacoes"] = f"{len(novos)} feedbacks salvos em {out_file.name}"
    salvar_status(status_data)
    print(f"\n✅ processar_feedback.py concluído — {len(novos)} feedbacks processados")


if __name__ == "__main__":
    main()
