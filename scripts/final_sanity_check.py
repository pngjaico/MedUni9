import json
import os

QUESTOES_PATH = r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json"
MATERIAS_PATH = r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\materias.json"

def sanity_check():
    with open(QUESTOES_PATH, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    with open(MATERIAS_PATH, 'r', encoding='utf-8') as f:
        materias = json.load(f)

    # Valid Aula IDs
    valid_ids = set()
    for m in materias.values():
        for a in m.get('aulas', []):
            valid_ids.add(a['id'])

    stats = {
        "total": len(data['questoes']),
        "essenciais": 0,
        "todas": 0,
        "missing_tema": 0,
        "invalid_tema": 0,
        "short_explanation": 0,
        "missing_opcoes_explanation": 0,
        "prompt_leaks": 0
    }

    prompt_terms = ["enunciado:", "resposta:", "explicação:", "como um modelo"]

    for q in data['questoes']:
        is_essencial = q.get('essencial', False)
        if is_essencial:
            stats["essenciais"] += 1
            continue
            
        stats["todas"] += 1
        
        tema = q.get('tema') or q.get('aula_id')
        if not tema:
            stats["missing_tema"] += 1
        elif tema not in valid_ids:
            stats["invalid_tema"] += 1
            
        exp = q.get('explicacao_geral', '') or q.get('explicacao', '')
        if len(str(exp)) < 50:
            stats["short_explanation"] += 1
            
        exp_ops = q.get('explicacoes_opcoes', {})
        if not isinstance(exp_ops, dict) or len(exp_ops) < 4:
            stats["missing_opcoes_explanation"] += 1
            
        text = str(q).lower()
        if any(term in text for term in prompt_terms):
            stats["prompt_leaks"] += 1

    print(json.dumps(stats, indent=2))

if __name__ == "__main__":
    sanity_check()
