import json
import os

# Batch 2: Meticulous Mapping (IDs 251-300)
# Most of these are Physiology/Pharma of Muscle

MAP_REASONING = {
    "bmf1_a12": "Fisiologia da contração muscular, ciclo das pontes cruzadas, papel do Ca2+ e ATP.",
    "ff4_a7": "Bloqueadores neuromusculares e farmacologia da junção neuromuscular (Módulo 4).",
    "bmf4_a12": "Neurotransmissão e placa terminal (aspectos anatômicos/histológicos nervosos)."
}

MAPPINGS = {
    range(293, 296): "bmf1_a12",
    range(296, 300): "bmf1_a12", # Physiology matches
    (300,): "ff4_a7" # NM blockers match FF4
}

def get_target_info(q_id):
    # Mapping q_id to (aula_id, materia, modulo)
    # Most in bmf1_a12 belong to bmf1 (modulo 1)
    # 300 belongs to fisiopato_farmaco (modulo 4)
    if q_id in range(293, 300): return ("bmf1_a12", "bmf1", 1)
    if q_id == 300: return ("ff4_a7", "fisiopato_farmaco", 4)
    return None

QUESTOES_PATH = r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json"
LOG_PATH = r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\audit_justification_log.json"

def apply_batch_2():
    with open(QUESTOES_PATH, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    with open(LOG_PATH, 'r', encoding='utf-8') as f:
        log = json.load(f)

    updated_ids = []
    
    for q in data['questoes']:
        q_id = q.get('id')
        target_info = get_target_info(q_id)
        
        if target_info:
            aula_id, materia, modulo = target_info
            q['tema'] = aula_id
            q['aula_id'] = aula_id
            q['materia'] = materia
            q['modulo'] = modulo
            updated_ids.append(q_id)
            
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

    print(f"Batch 2 processed: {len(updated_ids)} questions updated conceptually.")

if __name__ == "__main__":
    apply_batch_2()
