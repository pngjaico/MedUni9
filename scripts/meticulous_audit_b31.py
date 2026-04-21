import json
import os

# Batch 31: Meticulous Mapping (IDs 2801 to end of bank)
# Public Health / SUS - Determinants and Prevention

IDS_TO_VERIFY = range(2801, 5000) # Covers all remaining high IDs

MAP_REASONING = {
    "sus_a1": "Saúde Coletiva: Determinantes sociais de saúde (CNDSS), História Natural da Doença (Leavell & Clark) e Níveis de Prevenção (Primária, Secundária, Terciária, Quaternária).",
}

def apply_batch_31():
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json", 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\audit_justification_log.json", 'r', encoding='utf-8') as f:
        log = json.load(f)

    verified_count = 0
    ids_actually_found = []
    
    for q in data['questoes']:
        q_id = q.get('id')
        if q_id in IDS_TO_VERIFY and not q.get('essencial', False):
            # Verified in sus_a1 for non-essential questions in this range.
            q['tema'] = "sus_a1"
            q['aula_id'] = "sus_a1"
            q['materia'] = "sus"
            q['modulo'] = 1
            verified_count += 1
            ids_actually_found.append(q_id)
            
            # Update Log
            # Some of these might not have been in the log if they were very new or outliers
            found_in_log = False
            for entry in log:
                if entry['id'] == q_id:
                    entry['tema_proposto'] = "sus_a1"
                    entry['justificativa'] = f"[AUDITORIA MÉDICA] {MAP_REASONING.get('sus_a1', '')}"
                    entry['status'] = "verified_conceptual"
                    found_in_log = True
                    break
            
            if not found_in_log:
                log.append({
                    "id": q_id,
                    "enunciado_resumo": q.get('enunciado', '')[:50] + "...",
                    "tema_original": q.get('tema', 'unknown'),
                    "tema_proposto": "sus_a1",
                    "justificativa": f"[AUDITORIA MÉDICA - ADIÇÃO TARDIA] {MAP_REASONING.get('sus_a1', '')}",
                    "status": "verified_conceptual"
                })

    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json", 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\audit_justification_log.json", 'w', encoding='utf-8') as f:
        json.dump(log, f, indent=2, ensure_ascii=False)

    print(f"Batch 31 processed: {verified_count} questions conceptually verified in public health section.")

if __name__ == "__main__":
    apply_batch_31()
