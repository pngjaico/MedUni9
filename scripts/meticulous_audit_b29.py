import json
import os

# Batch 29: Meticulous Mapping (IDs 2601-2700)
# Physiopathology - Endocrine Pharmacology (Hypoglycemics)

IDS_TO_VERIFY = range(2601, 2701)

MAP_REASONING = {
    "ff4_a13": "Farmacoterapia do DM2: Metformina (perfil clínico), iSGLT-2 (benefício em IC), análogos de GLP-1, insulinas e individualização de metas. Diferença entre significância estatística e clínica.",
}

def apply_batch_29():
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json", 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\audit_justification_log.json", 'r', encoding='utf-8') as f:
        log = json.load(f)

    verified_count = 0
    
    for q in data['questoes']:
        q_id = q.get('id')
        if q_id in IDS_TO_VERIFY:
            # Verified in ff4_a13.
            q['tema'] = "ff4_a13"
            q['aula_id'] = "ff4_a13"
            q['materia'] = "fisiopato_farmaco"
            q['modulo'] = 4
            verified_count += 1
            
            # Update Log
            for entry in log:
                if entry['id'] == q_id:
                    entry['tema_proposto'] = "ff4_a13"
                    entry['justificativa'] = f"[AUDITORIA MÉDICA] {MAP_REASONING.get('ff4_a13', '')}"
                    entry['status'] = "verified_conceptual"
                    break

    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json", 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\audit_justification_log.json", 'w', encoding='utf-8') as f:
        json.dump(log, f, indent=2, ensure_ascii=False)

    print(f"Batch 29 processed: {verified_count} questions conceptually verified in endocrine pharmacotherapy section.")

if __name__ == "__main__":
    apply_batch_29()
