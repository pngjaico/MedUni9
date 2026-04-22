import json
import re
import os

def radical_sterilization():
    print("Iniciando RADICAL STERILIZATION v11...")
    
    corrections = {
        'Ã‡': 'Ç', 'Ã§': 'ç', 'Ãƒ': 'Ã', 'Ã£': 'ã', 'Ã‰': 'É', 'Ã©': 'é',
        'Ã': 'Á', 'Ã¡': 'á', 'Ã“': 'Ó', 'Ã³': 'ó', 'ÃŠ': 'Ê', 'Ãª': 'ê',
        'Ã\xad': 'í', 'Ã²': 'ò', 'Ãº': 'ú', 'Ã¢': 'â', 'Ãµ': 'õ', 'Ã\xa0': 'à',
        'Â°': '°', 'Ã¼': 'ü', 'Ã´': 'ô', 'Ã–': 'Ö', 'Ã¶': 'ö',
        'Ã\x8d': 'Í', 'Ã\x81': 'Á', 'Ã\x93': 'Ó', 'Ã\x9a': 'Ú'
    }

    def heal_text(text):
        if not isinstance(text, str): return text
        # 1. Clean mojibake
        for wrong, right in corrections.items():
            text = text.replace(wrong, right)
        # 2. Fix specifically broken prefixes found in Provas Antigas
        text = text.replace("[PROVA MÃ%DICA]", "[PROVA MÉDICA]")
        text = text.replace("[PROVA MÃ‰DICA]", "[PROVA MÉDICA]")
        text = text.replace("[PROVA MA‰DICA]", "[PROVA MÉDICA]")
        # 3. Final polish for medical clinical cases
        text = text.replace("Dica de Prova", "Dica de Prova:")
        return text

    def process_file(filename):
        path = f'data/{filename}.json'
        if not os.path.exists(path): return
        
        print(f"Processando {filename}.json...")
        # Open with utf-8-sig to handle optional BOM
        with open(path, 'r', encoding='utf-8-sig', errors='ignore') as f:
            data = json.load(f)
        
        original_count = len(data['questoes'])
        cleaned_list = []
        purged_count = 0
        
        for q in data['questoes']:
            enunciado = q.get('enunciado', '')
            tema = q.get('tema', '')
            
            # AGGRESSIVE PURGE CRITERIA
            if any(term in str(q).upper() for term in ["RESTAUR", "V8", "RECUPERAA", "PLACEHOLDER"]):
                purged_count += 1
                continue
            
            # Heal all fields
            q['enunciado'] = heal_text(enunciado)
            q['tema'] = heal_text(tema)
            if 'opcoes' in q:
                q['opcoes'] = [heal_text(opt) for opt in q['opcoes']]
            if 'explicacao' in q:
                q['explicacao'] = heal_text(q['explicacao'])
            if 'explicacao_geral' in q:
                q['explicacao_geral'] = heal_text(q['explicacao_geral'])
                
            cleaned_list.append(q)
            
        data['questoes'] = cleaned_list
        # Save as clean UTF-8 (No BOM)
        with open(path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
            
        print(f"  Finalizado: {purged_count} purgados. {len(cleaned_list)} saudáveis restantes.")

    process_file('questoes')
    process_file('questoes_antigas')

    # Update index.html
    index_path = 'index.html'
    if os.path.exists(index_path):
        with open(index_path, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        new_version = 'v600-RADICAL-STABLE'
        content = re.sub(r"const APP_VERSION = '.*?';", f"const APP_VERSION = '{new_version}';", content)
        with open(index_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"index.html atualizado para {new_version}")

if __name__ == "__main__":
    radical_sterilization()
