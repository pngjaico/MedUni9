import json
import os

# Batch 5: Meticulous Mapping (IDs 401-450)
# Focused on Skeletal Anatomy

MAP_REASONING = {
    "bmf1_a3": "Generalidades do sistema esquelético: divisões axial e apendicular, tipos de ossos.",
    "bmf1_a6": "Identificação prática de ossos: coluna vertebral, gradil costal (costelas verdadeiras/falsas), membros superiores (rádio/ulna/carpo) e inferiores.",
    "bmf4_a4": "Anatomia do crânio: fossas cranianas e forames (neurovasculatura atravessada)."
}

# Refined Mapping for Batch 5
def get_target_info(q_id):
    if q_id == 442: return ("bmf1_a3", "bmf1", 1) # Axial vs Apendicular (Generalities)
    if q_id in [443, 444, 445, 447, 448, 449, 450]: return ("bmf1_a6", "bmf1", 1) # Practical IDs
    if q_id == 446: return ("bmf4_a4", "bmf4", 4) # Cranial Foramina
    return None

QUESTOES_PATH = r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json"
LOG_PATH = r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\audit_justification_log.json"

def apply_batch_5():
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

    print(f"Batch 5 processed: {updated_count} questions updated conceptually.")

if __name__ == "__main__":
    apply_batch_5()
