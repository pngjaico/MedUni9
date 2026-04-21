import json
import re
import os
from difflib import SequenceMatcher

# Paths
QUESTOES_PATH = r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json"
MATERIAS_PATH = r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\materias.json"
LOG_PATH = r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\audit_justification_log.json"

def similar(a, b):
    return SequenceMatcher(None, a.lower(), b.lower()).ratio()

def recategorize_batch(batch_size=100):
    with open(QUESTOES_PATH, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    with open(MATERIAS_PATH, 'r', encoding='utf-8') as f:
        materias = json.load(f)

    if os.path.exists(LOG_PATH):
        with open(LOG_PATH, 'r', encoding='utf-8') as f:
            log = json.load(f)
    else:
        log = []

    verified_ids = {entry['id'] for entry in log}
    
    # Map all valid aulas
    all_aulas = []
    for m_id, m_data in materias.items():
        for aula in m_data.get('aulas', []):
            aula['materia_id'] = m_id
            aula['modulo'] = m_data.get('modulo', 0)
            all_aulas.append(aula)

    questoes = data.get('questoes', [])
    processed = 0
    updated_in_batch = 0

    for q in questoes:
        if q.get('essencial') is True:
            continue
        
        q_id = q.get('id')
        if q_id in verified_ids:
            continue
        
        if processed >= batch_size:
            break
        
        current_tema = q.get('tema') or q.get('aula_id', '')
        
        # Check if the current tema is already a valid aula_id
        is_valid = any(a['id'] == current_tema for a in all_aulas)
        
        best_match = None
        best_score = 0
        justification = ""

        if not is_valid or len(current_tema) > 10: # If it's a descriptive string or invalid ID
            # Search for best match in aulas
            for aula in all_aulas:
                # Match against aula tema or current q_tema
                score = similar(current_tema, aula['tema'])
                if score > best_score:
                    best_score = score
                    best_match = aula
            
            if best_score > 0.6:
                new_tema = best_match['id']
                justification = f"Matched current theme '{current_tema}' to aula '{best_match['tema']}' with score {best_score:.2f}"
            else:
                # Try matching keywords from enunciado
                for aula in all_aulas:
                    score = similar(q['enunciado'][:100], aula['tema'])
                    if score > best_score:
                        best_score = score
                        best_match = aula
                
                if best_score > 0.4:
                    new_tema = best_match['id']
                    justification = f"Matched enunciado keywords to aula '{best_match['tema']}' with score {best_score:.2f}"
                else:
                    new_tema = current_tema # Keep for now
                    justification = "No good match found, kept current."
            
            if new_tema != current_tema:
                q['tema'] = new_tema
                q['aula_id'] = new_tema
                q['materia'] = best_match['materia_id']
                q['modulo'] = best_match['modulo']
                updated_in_batch += 1
        else:
            justification = "Existing category is valid."
            new_tema = current_tema

        # Log entry
        log.append({
            "id": q_id,
            "enunciado_resumo": q['enunciado'][:100],
            "tema_antigo": current_tema,
            "tema_proposto": new_tema,
            "justificativa": justification,
            "status": "updated" if new_tema != current_tema else "verified"
        })
        
        processed += 1

    # Save
    with open(QUESTOES_PATH, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    with open(LOG_PATH, 'w', encoding='utf-8') as f:
        json.dump(log, f, indent=2, ensure_ascii=False)

    print(f"Batch processed: {processed} questions. Updated: {updated_in_batch}. Log saved to data/audit_justification_log.json")

if __name__ == "__main__":
    import sys
    size = int(sys.argv[1]) if len(sys.argv) > 1 else 100
    recategorize_batch(size)
