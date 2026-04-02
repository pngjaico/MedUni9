"""
Extrator de Planos de Ensino — MedUni9
Lê todos os PDFs de planos de ensino e extrai texto estruturado para JSON.
"""
import fitz
import os
import json
import sys
import re

if sys.stdout.encoding != 'utf-8':
    sys.stdout.reconfigure(encoding='utf-8')

BASE = os.path.dirname(os.path.abspath(__file__))
PLANOS_DIR = os.path.join(BASE, 'conteudos', '_para_categorizar', 'Planos de Ensino')
OUTPUT = os.path.join(PLANOS_DIR, 'planos_extraidos_completos.json')

# Mapeamento de pasta -> módulo
MODULO_MAP = {
    'Módulo 1': 1, 'Modulo 1': 1,
    'Módulo 2': 2, 'Modulo 2': 2,
    'Módulo 3': 3, 'Modulo 3': 3,
    'Módulo 4': 4, 'Modulo 4': 4,
    'Módulo 5': 5, 'Modulo 5': 5,
    'Módulo 6': 6, 'Modulo 6': 6,
}

def extrair_texto_pdf(caminho):
    """Extrai texto completo de um PDF."""
    try:
        doc = fitz.open(caminho)
        texto = ""
        for page in doc:
            texto += page.get_text("text") + "\n"
        doc.close()
        return texto.strip()
    except Exception as e:
        return f"[ERRO: {e}]"

def extrair_secao(texto, inicio_patterns, fim_patterns=None):
    """Extrai uma seção do texto entre padrões de início e fim."""
    for pat in inicio_patterns:
        match = re.search(pat, texto, re.IGNORECASE | re.MULTILINE)
        if match:
            start = match.end()
            if fim_patterns:
                for fpat in fim_patterns:
                    fmatch = re.search(fpat, texto[start:], re.IGNORECASE | re.MULTILINE)
                    if fmatch:
                        return texto[start:start + fmatch.start()].strip()
            return texto[start:start + 5000].strip()  # fallback: 5000 chars
    return ""

def parse_plano(texto, arquivo):
    """Extrai campos estruturados de um plano de ensino."""
    
    # Disciplina
    disciplina = ""
    disc_match = re.search(r'(?:DISCIPLINA|UNIDADE CURRICULAR|COMPONENTE CURRICULAR)[:\s]*([^\n]+)', texto, re.IGNORECASE)
    if disc_match:
        disciplina = disc_match.group(1).strip().strip('–').strip('-').strip()
    if not disciplina:
        # Tenta extrair do nome do arquivo
        disciplina = re.sub(r'(?:PLANO DE ENSINO|plano|_plano|\.pdf|2026\.?\d*|\(\d+\)|módulo|modulo|\d+[oº])', '', 
                           os.path.splitext(arquivo)[0], flags=re.IGNORECASE).strip(' _-–.')
    
    # Carga horária
    ch = ""
    ch_match = re.search(r'(?:CARGA HOR[ÁA]RIA|C\.?H\.?)[:\s]*(\d+\s*(?:h|horas?)?)', texto, re.IGNORECASE)
    if ch_match:
        ch = ch_match.group(1).strip()
    
    # Ementa
    ementa = extrair_secao(texto, 
        [r'EMENTA[:\s]*\n?', r'EMENT[AÁ][:\s]*'],
        [r'\n\s*(?:OBJETIVO|CONTEÚDO|CONTE[ÚU]DO|METODOLOGIA|COMPET[ÊE]NCIA)', r'\n\s*\d+\.\s*OBJETIVO']
    )
    
    # Objetivos
    objetivos = extrair_secao(texto,
        [r'OBJETIVO[S]?\s*(?:GERA[IL]|ESPEC[ÍI]FICO)?[:\s]*\n?', r'OBJETIVOS?\s*(?:DE APRENDIZAGEM)?[:\s]*'],
        [r'\n\s*(?:CONTEÚDO|CONTE[ÚU]DO|METODOLOGIA|EMENTA|ESTRAT[ÉE]GIA)', r'\n\s*\d+\.\s*(?:CONTEÚDO|CONTE[ÚU]DO)']
    )
    
    # Conteúdo Programático — esta é a parte mais importante
    conteudo = extrair_secao(texto,
        [r'CONTE[ÚU]DO\s*PROGRAM[ÁA]TICO[:\s]*\n?', 
         r'CONTE[ÚU]DO[S]?\s*(?:PROGRAM[ÁA]TICO)?[:\s]*\n?',
         r'PROGRAMA\s*(?:DA\s*DISCIPLINA)?[:\s]*\n?',
         r'TEMAS?\s*(?:E\s*CONTE[ÚU]DOS?)?[:\s]*\n?'],
        [r'\n\s*(?:METODOLOGIA|ESTRAT[ÉE]GIA|AVALIA[ÇC][ÃA]O|BIBLIOGRAFIA|REFER[ÊE]NCIA|CRIT[ÉE]RIO)',
         r'\n\s*\d+\.\s*(?:METODOLOGIA|ESTRAT[ÉE]GIA|AVALIA[ÇC][ÃA]O)']
    )
    
    # Bibliografia
    biblio = extrair_secao(texto,
        [r'BIBLIOGRAFIA[:\s]*\n?', r'REFER[ÊE]NCIA[S]?\s*(?:BIBLIOGR[ÁA]FICA)?[:\s]*'],
        [r'\n\s*(?:APROVA[ÇC][ÃA]O|ASSINATURA|DATA DE)', r'$']
    )
    
    # Cronograma/Aulas (se existir)
    cronograma = extrair_secao(texto,
        [r'CRONOGRAMA[:\s]*\n?', r'CALEND[ÁA]RIO[:\s]*\n?', r'PLANEJAMENTO\s*(?:DAS\s*)?AULAS[:\s]*\n?'],
        [r'\n\s*(?:BIBLIOGRAFIA|REFER[ÊE]NCIA|AVALIA[ÇC][ÃA]O)']
    )
    
    return {
        "arquivo": arquivo,
        "disciplina": disciplina,
        "carga_horaria": ch,
        "ementa": ementa[:2000] if ementa else "",
        "objetivos": objetivos[:2000] if objetivos else "",
        "conteudo_programatico": conteudo[:5000] if conteudo else "",
        "cronograma": cronograma[:3000] if cronograma else "",
        "bibliografia": biblio[:2000] if biblio else "",
        "texto_completo_chars": len(texto),
    }

def main():
    resultado = {}
    total_pdfs = 0
    total_extraidos = 0
    
    for pasta in sorted(os.listdir(PLANOS_DIR)):
        pasta_path = os.path.join(PLANOS_DIR, pasta)
        if not os.path.isdir(pasta_path):
            continue
        
        modulo = MODULO_MAP.get(pasta)
        if modulo is None:
            continue
        
        mod_key = f"modulo_{modulo}"
        resultado[mod_key] = []
        
        for arquivo in sorted(os.listdir(pasta_path)):
            if not arquivo.lower().endswith('.pdf'):
                continue
            
            total_pdfs += 1
            caminho = os.path.join(pasta_path, arquivo)
            print(f"  [{modulo}] Extraindo: {arquivo[:60]}...")
            
            texto = extrair_texto_pdf(caminho)
            if texto.startswith("[ERRO"):
                print(f"    ERRO: {texto}")
                continue
            
            plano = parse_plano(texto, arquivo)
            plano["modulo"] = modulo
            resultado[mod_key].append(plano)
            total_extraidos += 1
            
            # Status
            has_conteudo = "SIM" if plano["conteudo_programatico"] else "NAO"
            has_crono = "SIM" if plano["cronograma"] else "NAO"
            print(f"    -> {plano['disciplina'][:50]} | CH: {plano['carga_horaria']} | Conteúdo: {has_conteudo} | Crono: {has_crono}")
    
    # Salvar
    with open(OUTPUT, 'w', encoding='utf-8') as f:
        json.dump(resultado, f, ensure_ascii=False, indent=2)
    
    print(f"\n{'='*60}")
    print(f"Total PDFs encontrados: {total_pdfs}")
    print(f"Total extraídos com sucesso: {total_extraidos}")
    print(f"Saída: {OUTPUT}")
    
    # Resumo por módulo
    for mod_key in sorted(resultado.keys()):
        planos = resultado[mod_key]
        print(f"\n  {mod_key}: {len(planos)} planos")
        for p in planos:
            cp_len = len(p['conteudo_programatico'])
            print(f"    - {p['disciplina'][:50]} ({cp_len} chars conteúdo)")

if __name__ == '__main__':
    main()
