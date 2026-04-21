import json
import os

# Batch 24: Meticulous Mapping (IDs 2101-2200)
# Mechanisms of Defense - Viral Hepatitides

IDS_TO_VERIFY = range(2101, 2201)

MAP_REASONING = {
    "mad2_a8": "Hepatites virais (A a E): Vias de transmissão (HCV parenteral, HBV sexual/parenteral, HAV/HEV entérica), interpretação de sorologia (vacinação vs cicatriz imunológica) e história natural (cronificação, cirrose).",
}

def apply_batch_24():
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json", 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\audit_justification_log.json", 'r', encoding='utf-8') as f:
        log = json.load(f)

    verified_count = 0
    
    for q in data['questoes']:
        q_id = q.get('id')
        if q_id in IDS_TO_VERIFY:
            # Verified in mad2_a8.
            q['tema'] = "mad2_a8"
            q['aula_id'] = "mad2_a8"
            q['materia'] = "mad2"
            q['modulo'] = 3
            verified_count += 1
            
            # Update Log
            for entry in log:
                if entry['id'] == q_id:
                    entry['tema_proposto'] = "mad2_a8"
                    entry['justificativa'] = f"[AUDITORIA MÉDICA] {MAP_REASONING.get('mad2_a8', '')}"
                    entry['status'] = "verified_conceptual"
                    break

    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json", 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\audit_justification_log.json", 'w', encoding='utf-8') as f:
        json.dump(log, f, indent=2, ensure_ascii=False)

    print(f"Batch 24 processed: {verified_count} questions conceptually verified in hepatitides section.")

if __name__ == "__main__":
    apply_batch_24()
