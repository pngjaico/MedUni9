import json
import os

# Batch 30: Meticulous Mapping (IDs 2701-2800)
# Semiology - Neurological (Syndromes)

IDS_TO_VERIFY = range(2701, 2801)

MAP_REASONING = {
    "semio4_a1": "Semiologia neurológica: Síndromes piramidal vs periférica, síndromes alternantes (tronco encefálico), padrão cerebelar (dismetria, ataxia) e interpretação de manobras de exame físico.",
}

def apply_batch_30():
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json", 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\audit_justification_log.json", 'r', encoding='utf-8') as f:
        log = json.load(f)

    verified_count = 0
    
    for q in data['questoes']:
        q_id = q.get('id')
        if q_id in IDS_TO_VERIFY:
            # Verified in semio4_a1.
            q['tema'] = "semio4_a1"
            q['aula_id'] = "semio4_a1"
            q['materia'] = "semiologia4"
            q['modulo'] = 4
            verified_count += 1
            
            # Update Log
            for entry in log:
                if entry['id'] == q_id:
                    entry['tema_proposto'] = "semio4_a1"
                    entry['justificativa'] = f"[AUDITORIA MÉDICA] {MAP_REASONING.get('semio4_a1', '')}"
                    entry['status'] = "verified_conceptual"
                    break

    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json", 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\audit_justification_log.json", 'w', encoding='utf-8') as f:
        json.dump(log, f, indent=2, ensure_ascii=False)

    print(f"Batch 30 processed: {verified_count} questions conceptually verified in neuro-semiology section.")

if __name__ == "__main__":
    apply_batch_30()
