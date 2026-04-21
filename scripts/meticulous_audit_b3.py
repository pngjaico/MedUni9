import json
import os

# Batch 3: Meticulous Mapping (IDs 301-350)
MAP_REASONING = {
    "bmf1_a17": "Anatomia e histologia da boca, língua, faringe e glândulas salivares (Parótida/Stensen, Submandibular/Wharton, Sublingual).",
}

# Questions 343-350 clearly belong to bmf1_a17
IDS_TO_FIX = range(343, 351)

def get_target_info(q_id):
    if q_id in IDS_TO_FIX: return ("bmf1_a17", "bmf1", 1)
    return None

QUESTOES_PATH = r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json"
LOG_PATH = r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\audit_justification_log.json"

def apply_batch_3():
    with open(QUESTOES_PATH, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    with open(LOG_PATH, 'r', encoding='utf-8') as f:
        log = json.load(f)

    updated_count = 0
    
    for q in data['questoes']:
        q_id = q.get('id')
        target_info = get_target_info(q_id)
        
        if target_info:
            aula_id, materia, modulo = target_info
            q['tema'] = aula_id
            q['aula_id'] = aula_id
            q['materia'] = materia
            q['modulo'] = modulo
            updated_count += 1
            
            # Update Log
            for entry in log:
                if entry['id'] == q_id:
                    entry['tema_proposto'] = aula_id
                    entry['justificativa'] = f"[AUDITORIA MÉDICA] {MAP_REASONING.get(aula_id, '')}"
                    entry['status'] = "updated_conceptual"
                    break

    with open(QUESTOES_PATH, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    with open(LOG_PATH, 'w', encoding='utf-8') as f:
        json.dump(log, f, indent=2, ensure_ascii=False)

    print(f"Batch 3 processed: {updated_count} questions updated conceptually.")

if __name__ == "__main__":
    apply_batch_3()
