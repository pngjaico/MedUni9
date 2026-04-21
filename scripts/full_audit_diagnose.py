import json
import re

def fix_mojibake(text):
    if not isinstance(text, str): return text
    try:
        # If it was UTF-8 saved as if it were Latin-1, this fixes it
        return text.encode('latin-1').decode('utf-8')
    except:
        return text

def analyze_file(filepath, encoding='utf-8'):
    print(f"\n--- Analyzing: {filepath} ---")
    try:
        with open(filepath, 'r', encoding='utf-8-sig') as f:
            data = json.load(f)
    except Exception as e:
        print(f"Failed to load {filepath}: {e}")
        return []
            
    if isinstance(data, dict) and 'questoes' in data:
        items = data['questoes']
    elif isinstance(data, list):
        items = data
    else:
        print(f"Unknown structure for {filepath}")
        return []

    non_essentials = [q for q in items if not q.get('essencial', False)]
    mojibake_count = 0
    artifact_count = 0
    missing_exp_count = 0
    
    # Very loose artifact pattern to catch anything Prova/Medica
    artifact_pattern = re.compile(r'PROVA|MÃ‰DICA|MÉDICA', re.IGNORECASE)
    
    for q in non_essentials:
        s = str(q)
        if 'Ã' in s: mojibake_count += 1
        if artifact_pattern.search(s): artifact_count += 1
        
        opts = q.get('opcoes', [])
        exps = q.get('explicacoes_opcoes', {})
        if not exps or len(exps) < len(opts):
            missing_exp_count += 1
            
    print(f"Total Non-Essentials: {len(non_essentials)}")
    print(f"Potential Mojibake: {mojibake_count}")
    print(f"Artifacts [PROVA...]: {artifact_count}")
    print(f"Questions Missing Option Explanations: {missing_exp_count}")
    
    return non_essentials

if __name__ == "__main__":
    ne1 = analyze_file('data/questoes.json')
    ne2 = analyze_file('data/questoes_antigas.json')
    print(f"\nTotal combined non-essentials to audit: {len(ne1) + len(ne2)}")
