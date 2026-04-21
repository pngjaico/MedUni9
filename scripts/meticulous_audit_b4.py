import json
import os

# Batch 4: Meticulous Mapping (IDs 351-400)
# Focused on Liver, Pancreas, Biliary Anatomy

MAP_REASONING = {
    "bmf1_a21": "Anatomia do fígado (lobos, circulação portal/hepática), vias biliares (extra-hepáticas, vesícula, colédoco) e pâncreas (topografia e ductos).",
}

# Questions 394-400 are definitely bmf1_a21
IDS_TO_FIX = range(394, 401)

def get_target_info(q_id):
    if q_id in IDS_TO_FIX: return ("bmf1_a21", "bmf1", 1)
    return None

QUESTOES_PATH = r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json"
LOG_PATH = r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\audit_justification_log.json"

def apply_batch_4():
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

    print(f"Batch 4 processed: {updated_count} questions updated conceptually.")

if __name__ == "__main__":
    apply_batch_4()
