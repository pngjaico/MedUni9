import json
import re

def fix_mojibake(text):
    if not isinstance(text, str): return text
    try:
        # Common fix: text was read as latin1, but was actually utf-8
        return text.encode('latin-1').decode('utf-8')
    except:
        return text

def diagnose():
    with open('data/questoes.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    non_essentials = [q for q in data['questoes'] if not q.get('essencial', False)]
    mojibake_count = 0
    artifact_count = 0
    missing_explanations_count = 0
    
    artifact_pattern = re.compile(r'\[PROVA.*?\]', re.IGNORECASE)
    
    examples = []
    
    for q in non_essentials:
        e = q.get('enunciado', '')
        has_moji = 'Ã' in e or 'Ã©' in e or 'Ã‰' in e
        has_artif = bool(artifact_pattern.search(e))
        
        # Check for missing individual explanations
        opts_exp = q.get('explicacoes_opcoes', {})
        options = q.get('opcoes', [])
        is_missing_exp = len(opts_exp) < len(options)
        
        if has_moji: mojibake_count += 1
        if has_artif: artifact_count += 1
        if is_missing_exp: missing_explanations_count += 1
        
        if (has_moji or has_artif) and len(examples) < 5:
            examples.append({
                'id': q['id'],
                'enunciado': e,
                'explicacoes_opcoes': opts_exp
            })
            
    print(f"Total Non-Essentials: {len(non_essentials)}")
    print(f"Mojibake Detected: {mojibake_count}")
    print(f"Artifacts ([PROVA...]) Detected: {artifact_count}")
    print(f"Missing Individual Explanations: {missing_explanations_count}")
    print("\nExamples:")
    print(json.dumps(examples, indent=2, ensure_ascii=False))

if __name__ == "__main__":
    diagnose()
