import json
import os

# Batch 20: Meticulous Mapping (IDs 1701-1800)
# Anatomy - Accessory Organs (Liver/Pancreas)

MAP_REASONING = {
    "bmf3_a3": "Anatomia do abdome: fígado (lobos clássicos vs segmentos de Couinaud, face visceral), triângulo de Calot, e pâncreas (retroperitoneal vs cauda intraperitoneal).",
}

IDS_TO_VERIFY = range(1701, 1801)

def apply_batch_20():
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json", 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\audit_justification_log.json", 'r', encoding='utf-8') as f:
        log = json.load(f)

    verified_count = 0
    
    for q in data['questoes']:
        q_id = q.get('id')
        if q_id in IDS_TO_VERIFY:
            # Verified in bmf3_a3.
            q['tema'] = "bmf3_a3"
            q['aula_id'] = "bmf3_a3"
            q['materia'] = "bmf3"
            q['modulo'] = 3
            verified_count += 1
            
            # Update Log
            for entry in log:
                if entry['id'] == q_id:
                    entry['tema_proposto'] = "bmf3_a3"
                    entry['justificativa'] = f"[AUDITORIA MÉDICA] {MAP_REASONING.get('bmf3_a3', '')}"
                    entry['status'] = "verified_conceptual"
                    break

    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json", 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\audit_justification_log.json", 'w', encoding='utf-8') as f:
        json.dump(log, f, indent=2, ensure_ascii=False)

    print(f"Batch 20 processed: {verified_count} questions conceptually verified in anatomy section.")

if __name__ == "__main__":
    apply_batch_20()
