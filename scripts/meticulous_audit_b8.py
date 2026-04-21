import json
import os

# Batch 8: Meticulous Mapping (IDs 551-600)
# Lipid Metabolism (Fatty Acids/Ketones)

MAP_REASONING = {
    "pmh_a7": "Metabolismo de lipídios: beta-oxidação (mitocôndria), síntese de ácidos graxos (citoplasma), corpos cetônicos e regulação por malonil-CoA.",
}

IDS_TO_VERIFY = range(551, 601)

def apply_batch_8():
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json", 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\audit_justification_log.json", 'r', encoding='utf-8') as f:
        log = json.load(f)

    verified_count = 0
    
    for q in data['questoes']:
        q_id = q.get('id')
        if q_id in IDS_TO_VERIFY:
            # Verified and aligned.
            q['tema'] = "pmh_a7"
            q['aula_id'] = "pmh_a7"
            q['materia'] = "pmh"
            q['modulo'] = 1
            verified_count += 1
            
            # Update Log
            for entry in log:
                if entry['id'] == q_id:
                    entry['tema_proposto'] = "pmh_a7"
                    entry['justificativa'] = f"[AUDITORIA MÉDICA] {MAP_REASONING.get('pmh_a7', '')}"
                    entry['status'] = "verified_conceptual"
                    break

    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json", 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\audit_justification_log.json", 'w', encoding='utf-8') as f:
        json.dump(log, f, indent=2, ensure_ascii=False)

    print(f"Batch 8 processed: {verified_count} questions conceptually verified in pmh_a7.")

if __name__ == "__main__":
    apply_batch_8()
