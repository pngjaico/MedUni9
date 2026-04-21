import json

QUESTOES_PATH = r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json"

def final_fixes():
    with open(QUESTOES_PATH, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    for q in data['questoes']:
        if q.get('id') == 272:
            # Anatomy/Histology of muscle is usually bmf1_a15 or similar
            q['tema'] = 'bmf1_a15'
            q['aula_id'] = 'bmf1_a15'
            q['materia'] = 'bmf1'
            q['modulo'] = 1
        elif q.get('id') == 292:
            # Sliding filament theory is bmf2_a1 (Muscle mechanics)
            q['tema'] = 'bmf2_a1'
            q['aula_id'] = 'bmf2_a1'
            q['materia'] = 'bmf2'
            q['modulo'] = 2

    with open(QUESTOES_PATH, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    print("Final technical fixes applied.")

if __name__ == "__main__":
    final_fixes()
