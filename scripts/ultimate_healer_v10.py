import json
import re
import os

def ultimate_healer():
    print("Iniciando Ultimate Healer v10...")
    
    file_path = 'data/questoes.json'
    if not os.path.exists(file_path):
        print("Erro: questoes.json não encontrado.")
        return

    with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
        data = json.load(f)

    original_count = len(data['questoes'])
    print(f"Banco carregado: {original_count} questões.")

    # 1. Dicionário de Correção de Mojibake (UTF-8 como Latin-1)
    # Padrão: Ã + caractere = acento correto
    corrections = {
        'Ã‡': 'Ç', 'Ã§': 'ç',
        'Ãƒ': 'Ã', 'Ã£': 'ã',
        'Ã‰': 'É', 'Ã©': 'é',
        'Ã': 'Á', 'Ã¡': 'á',
        'Ã“': 'Ó', 'Ã³': 'ó',
        'ÃŠ': 'Ê', 'Ãª': 'ê',
        'Ã': 'Í', 'Ã\xad': 'í',  # ad-hoc handling for the í escape
        'Ã’': 'Ò', 'Ã²': 'ò',
        'Ãš': 'Ú', 'Ãº': 'ú',
        'Ã‚': 'Â', 'Ã¢': 'â',
        'Ã•': 'Õ', 'Ãµ': 'õ',
        'Ã€': 'À', 'Ã\xa0': 'à',
        'Â°': '°'
    }

    def heal_text(text):
        if not isinstance(text, str): return text
        for wrong, right in corrections.items():
            text = text.replace(wrong, right)
        return text

    # 2. Heuristic Cleaning & Ghost Purge
    cleaned_questoes = []
    purged_count = 0
    
    for q in data['questoes']:
        enunciado = q.get('enunciado', '')
        # Critérios de Purga: Placeholders genéricos ou metalinguagem de restauração
        if "RESTAURAÇÃO V8" in enunciado or \
           "RESTAURAA" in enunciado or \
           "RECUPERAÇÃO ELITE" in enunciado or \
           "QUESTÃO ESSENCIAL" in enunciado and "Opção 1" in str(q.get('opcoes', [])):
            purged_count += 1
            continue
            
        # Aplicar Cura de Mojibake em todos os campos de texto
        q['enunciado'] = heal_text(enunciado)
        if 'opcoes' in q:
            q['opcoes'] = [heal_text(opt) for opt in q['opcoes']]
        if 'explicacao' in q:
            q['explicacao'] = heal_text(q['explicacao'])
        if 'explicacao_geral' in q:
            q['explicacao_geral'] = heal_text(q['explicacao_geral'])
            
        cleaned_questoes.append(q)

    data['questoes'] = cleaned_questoes
    print(f"Purga concluída: {purged_count} fantasmas removidos.")
    print(f"Cura de Mojibake aplicada a {len(cleaned_questoes)} itens.")

    # 3. Save with strict UTF-8
    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    
    # 4. Patch index.html
    index_path = 'index.html'
    if os.path.exists(index_path):
        with open(index_path, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        
        # Force cache break with a nuclear version
        new_version = 'v500-ULTIMATE-RECOVERY-STABLE'
        content = re.sub(r"const APP_VERSION = '.*?';", f"const APP_VERSION = '{new_version}';", content)
        
        with open(index_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"index.html atualizado para {new_version}")

    print("Processo concluído com sucesso.")

if __name__ == "__main__":
    ultimate_healer()
