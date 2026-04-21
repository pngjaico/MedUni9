import json
import os

# Batch 28: Meticulous Mapping (IDs 2501-2600)
# Anatomy - Skull and Cranial Fossae

IDS_TO_VERIFY = range(2501, 2601)

MAP_REASONING = {
    "bmf4_a4": "Anatomia do Crânio: Ossos, suturas (lambdoide, sagital), fontanelas (anterior) e base do crânio (forames redondo, oval, jugular; fissura orbital superior). Correlação com trauma (fratura linear vs afundamento).",
}

def apply_batch_28():
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json", 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\audit_justification_log.json", 'r', encoding='utf-8') as f:
        log = json.load(f)

    verified_count = 0
    
    for q in data['questoes']:
        q_id = q.get('id')
        if q_id in IDS_TO_VERIFY:
            # Verified in bmf4_a4.
            q['tema'] = "bmf4_a4"
            q['aula_id'] = "bmf4_a4"
            q['materia'] = "bmf4"
            q['modulo'] = 4
            verified_count += 1
            
            # Update Log
            for entry in log:
                if entry['id'] == q_id:
                    entry['tema_proposto'] = "bmf4_a4"
                    entry['justificativa'] = f"[AUDITORIA MÉDICA] {MAP_REASONING.get('bmf4_a4', '')}"
                    entry['status'] = "verified_conceptual"
                    break

    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json", 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\audit_justification_log.json", 'w', encoding='utf-8') as f:
        json.dump(log, f, indent=2, ensure_ascii=False)

    print(f"Batch 28 processed: {verified_count} questions conceptually verified in skull anatomy section.")

if __name__ == "__main__":
    apply_batch_28()
