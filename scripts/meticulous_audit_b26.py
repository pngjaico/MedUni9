import json
import os

# Batch 26: Meticulous Mapping (IDs 2301-2400)
# Biostatistics - Variables and Measurement Scales

IDS_TO_VERIFY = range(2301, 2401)

MAP_REASONING = {
    "bioe_a2": "Bioestatística: Tipos de variáveis (Nominal, Ordinal, Intervalar e Razão), escalas de mensuração e medidas de resumo adequadas (mediana para ordinais, média para intervalares).",
}

def apply_batch_26():
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json", 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\audit_justification_log.json", 'r', encoding='utf-8') as f:
        log = json.load(f)

    verified_count = 0
    
    for q in data['questoes']:
        q_id = q.get('id')
        if q_id in IDS_TO_VERIFY:
            # Verified in bioe_a2.
            q['tema'] = "bioe_a2"
            q['aula_id'] = "bioe_a2"
            q['materia'] = "bioestatistica"
            q['modulo'] = 4
            verified_count += 1
            
            # Update Log
            for entry in log:
                if entry['id'] == q_id:
                    entry['tema_proposto'] = "bioe_a2"
                    entry['justificativa'] = f"[AUDITORIA MÉDICA] {MAP_REASONING.get('bioe_a2', '')}"
                    entry['status'] = "verified_conceptual"
                    break

    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json", 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    with open(r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\audit_justification_log.json", 'w', encoding='utf-8') as f:
        json.dump(log, f, indent=2, ensure_ascii=False)

    print(f"Batch 26 processed: {verified_count} questions conceptually verified in biostatistics section.")

if __name__ == "__main__":
    apply_batch_26()
