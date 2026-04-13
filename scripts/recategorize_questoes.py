import json
import re
import os
from collections import Counter

# Configurações de Caminho
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(BASE_DIR, 'data')
MATERIAS_PATH = os.path.join(DATA_DIR, 'materias.json')
QUESTOES_PATH = os.path.join(DATA_DIR, 'questoes_antigas.json')
OUTPUT_PATH = os.path.join(DATA_DIR, 'questoes_antigas.json') # Sobrescrever ou salvar novo? Vamos salvar no mesmo.
REPORT_PATH = os.path.join(BASE_DIR, 'relatorio_recategorizacao.md')

def clean_text(text):
    if not text: return ""
    # Remover pontuação e converter para minúsculas
    text = re.sub(r'[^\w\s]', ' ', text.lower())
    # Remover acentos simplificado (se possível) - vamos manter por ora para precisão no PT
    return text

def get_tokens(text):
    words = clean_text(text).split()
    # Filtrar palavras muito curtas (stop words simples)
    return [w for w in words if len(w) > 3]

def run_recategorization():
    print("Iniciando recategorização...")
    
    # 1. Carregar Matérias
    with open(MATERIAS_PATH, 'r', encoding='utf-8') as f:
        materias_data = json.load(f)
    
    # Construir mapa do currículo (Módulos 1-4)
    curriculum = []
    for materia_id, info in materias_data.items():
        if info.get('modulo', 0) > 4:
            continue
            
        materia_sigla = info.get('sigla', '').lower()
        materia_nome = info.get('nome', '').lower()
        
        for aula in info.get('aulas', []):
            aula_id = aula.get('id', '')
            tema = aula.get('tema', '')
            descricao = aula.get('descricao', '')
            
            # Gerar vocabulário da aula
            vocab = {
                'materia': materia_id,
                'sigla': materia_sigla,
                'aula_id': aula_id,
                'tema': tema,
                'terms_tema': set(get_tokens(tema)),
                'terms_desc': set(get_tokens(descricao)),
                'terms_materia': set(get_tokens(materia_nome))
            }
            curriculum.append(vocab)

    # 2. Carregar Questões
    with open(QUESTOES_PATH, 'r', encoding='utf-8') as f:
        questoes_data = json.load(f)
    
    total_questoes = len(questoes_data.get('questoes', []))
    mudancas = []
    
    for q in questoes_data['questoes']:
        original_materia = q.get('materia', 'N/A')
        original_aula = q.get('aula_id', q.get('tema', 'N/A'))
        
        # Texto da questão
        text_content = f"{q.get('enunciado', '')} {q.get('explicacao_geral', '')} "
        for opt_key, opt_text in q.get('explicacoes_opcoes', {}).items():
            text_content += f" {opt_text}"
        
        q_tokens = Counter(get_tokens(text_content))
        
        # Encontrar melhor aula
        best_score = -1
        best_aula = None
        
        # Filtrar candidatos: priorizar a matéria original se ela for válida nos módulos 1-4
        original_materia_valida = any(l['materia'] == original_materia for l in curriculum)
        
        for lesson in curriculum:
            score = 0
            # Pontuação por termos no Tema (Peso 10) - Aumentado
            for t in lesson['terms_tema']:
                if t in q_tokens:
                    score += 10 * q_tokens[t]
            
            # Pontuação por termos na Descrição (Peso 4) - Aumentado
            for t in lesson['terms_desc']:
                if t in q_tokens:
                    score += 4 * q_tokens[t]
            
            # Pontuação por termos na Matéria (Peso 2)
            for t in lesson['terms_materia']:
                if t in q_tokens:
                    score += 2 * q_tokens[t]
            
            # Bônus forte para manter a mesma matéria (Peso 15)
            # Isso evita que a questão "pule" de uma matéria técnica para um Projeto Extensionista
            # só porque uma palavra como "paciente" coincidiu.
            if lesson['materia'] == original_materia:
                score += 15
            
            # Bônus se o ID da aula já batia (Peso 5) - Diminuído para permitir re-alocação interna
            if lesson['aula_id'] == original_aula:
                score += 5

            if score > best_score:
                best_score = score
                best_aula = lesson
        
        # Limiar de confiança: Se a melhor pontuação for muito baixa, não mudar.
        # Ou se a matéria mudou mas a pontuação não foi significativamente maior.
        CONFIDENCE_THRESHOLD = 5
        if best_aula and best_score > CONFIDENCE_THRESHOLD:
            # Só mudar a matéria se a nova pontuação for muito superior ou se a original for inválida
            should_update = False
            if best_aula['materia'] == original_materia:
                should_update = True
            elif not original_materia_valida:
                should_update = True
            elif best_score > 30: # Exige pontuação alta para mudar de matéria
                should_update = True
            
            if should_update:
                q['materia'] = best_aula['materia']
                q['aula_id'] = best_aula['aula_id']
                q['tema'] = best_aula['aula_id']
                
                if best_aula['aula_id'] != original_aula:
                    mudancas.append({
                        'id': q['id'],
                        'enunciado': q['enunciado'][:100] + "...",
                        'de_materia': original_materia,
                        'de_aula': original_aula,
                        'para_materia': best_aula['materia'],
                        'para_aula': best_aula['aula_id'],
                        'score': best_score
                    })

    # 3. Salvar Resultados
    with open(OUTPUT_PATH, 'w', encoding='utf-8') as f:
        json.dump(questoes_data, f, indent=2, ensure_ascii=False)
    
    # 4. Gerar Relatório
    with open(REPORT_PATH, 'w', encoding='utf-8') as f:
        f.write("# Relatório de Recategorização de Questões Antigas\n\n")
        f.write(f"Total de questões processadas: {total_questoes}\n")
        f.write(f"Total de questões re-alocadas: {len(mudancas)}\n\n")
        
        f.write("## Mudanças Realizadas (Amostra)\n\n")
        f.write("| ID | Enunciado | De (Mat/Aula) | Para (Mat/Aula) | Score |\n")
        f.write("|---|---|---|---|---|\n")
        for m in mudancas[:20]: # Mostrando apenas as top 20 no relatório
            f.write(f"| {m['id']} | {m['enunciado']} | {m['de_materia']}/{m['de_aula']} | {m['para_materia']}/{m['para_aula']} | {m['score']} |\n")
            
    print(f"Sucesso! {len(mudancas)} questões foram recategorizadas.")
    print(f"Relatório salvo em: {REPORT_PATH}")

if __name__ == "__main__":
    run_recategorization()
