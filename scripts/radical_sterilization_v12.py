import json
import re
import os

def radical_sterilization_v12():
    print("Iniciando RADICAL STERILIZATION v12 (Removal Policy)...")
    
    corrections = {
        'Ã‡': 'Ç', 'Ã§': 'ç', 'Ãƒ': 'Ã', 'Ã£': 'ã', 'Ã‰': 'É', 'Ã©': 'é',
        'Ã': 'Á', 'Ã¡': 'á', 'Ã“': 'Ó', 'Ã³': 'ó', 'ÃŠ': 'Ê', 'Ãª': 'ê',
        'Ã\xad': 'í', 'Ã²': 'ò', 'Ãº': 'ú', 'Ã¢': 'â', 'Ãµ': 'õ', 'Ã\xa0': 'à',
        'Â°': '°', 'Ã¼': 'ü', 'Ã´': 'ô', 'Ã–': 'Ö', 'Ã¶': 'ö',
        'Ã\x8d': 'Í', 'Ã\x81': 'Á', 'Ã\x93': 'Ó', 'Ã\x9a': 'Ú'
    }

    # Regex to catch all variations of [PROVA MÉDICA] including corrupted ones
    # and remove them including any leading/trailing space.
    prefix_regex = re.compile(r'\[PROVA M.*?DICA\]\s*', re.IGNORECASE)

    def heal_text(text):
        if not isinstance(text, str): return text
        # 1. REMOVE [PROVA MÉDICA] and variants
        text = prefix_regex.sub('', text)
        
        # 2. Clean mojibake
        for wrong, right in corrections.items():
            text = text.replace(wrong, right)
            
        # 3. Clean any double spaces left behind
        text = text.replace('  ', ' ').strip()
        return text

    def process_file(filename):
        path = f'data/{filename}.json'
        if not os.path.exists(path): return
        
        print(f"Processando {filename}.json...")
        with open(path, 'r', encoding='utf-8-sig', errors='ignore') as f:
            data = json.load(f)
        
        cleaned_list = []
        for q in data['questoes']:
            # No purge criteria changes here, just healing logic
            q['enunciado'] = heal_text(q.get('enunciado', ''))
            q['tema'] = heal_text(q.get('tema', ''))
            if 'opcoes' in q:
                q['opcoes'] = [heal_text(opt) for opt in q['opcoes']]
            if 'explicacao' in q:
                q['explicacao'] = heal_text(q['explicacao'])
            if 'explicacao_geral' in q:
                q['explicacao_geral'] = heal_text(q['explicacao_geral'])
            cleaned_list.append(q)
            
        data['questoes'] = cleaned_list
        with open(path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        print(f"  {filename}.json sanitizado e prefixos removidos.")

    process_file('questoes')
    process_file('questoes_antigas')

    print("RADICAL v12 CONCLUÍDO.")

if __name__ == "__main__":
    radical_sterilization_v12()
