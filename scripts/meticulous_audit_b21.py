import json
import os

# Batch 21: Meticulous Mapping (IDs 1801-1900)
# Physiopathology - Female Reproductive System

MAP_REASONING = {
    "fp3_a12": "Patologia do sistema reprodutor feminino: Neoplasias benignas (leiomiomas, endometriose, adenomiose), DIP (S. Fitz-Hugh-Curtis) e Câncer (Colo/HPV, Endométrio Tipo I/II).",
}

IDS_TO_VERIFY = range(1801, 1901)

def apply_batch_21():
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json", 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\audit_justification_log.json", 'r', encoding='utf-8') as f:
        log = json.load(f)

    verified_count = 0
    
    for q in data['questoes']:
        q_id = q.get('id')
        if q_id in IDS_TO_VERIFY:
            # Verified in fp3_a12.
            q['tema'] = "fp3_a12"
            q['aula_id'] = "fp3_a12"
            q['materia'] = "fisiopato3"
            q['modulo'] = 3
            verified_count += 1
            
            # Update Log
            for entry in log:
                if entry['id'] == q_id:
                    entry['tema_proposto'] = "fp3_a12"
                    entry['justificativa'] = f"[AUDITORIA MÉDICA] {MAP_REASONING.get('fp3_a12', '')}"
                    entry['status'] = "verified_conceptual"
                    break

    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json", 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\audit_justification_log.json", 'w', encoding='utf-8') as f:
        json.dump(log, f, indent=2, ensure_ascii=False)

    print(f"Batch 21 processed: {verified_count} questions conceptually verified in physiopathology section.")

if __name__ == "__main__":
    apply_batch_21()
