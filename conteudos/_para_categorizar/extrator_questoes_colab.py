# -*- coding: utf-8 -*-
"""
MedUni9 - Extrator de Questões de PDFs de Provas
=================================================
Este script extrai questões de provas em PDF (exportadas do Google Forms)
e as formata em JSON limpo para uso no app MedUni9.

INSTRUÇÕES:
1. Coloque seus PDFs na pasta /content/pdfs/ no Colab
2. Execute todas as células em sequência
3. O resultado será salvo em /content/questoes_extraidas.json
"""

# =============================================================================
# CÉLULA 1: Instalar dependências
# =============================================================================
# !pip install pymupdf pdfplumber google-generativeai -q

import json
import os
import re
import glob
from pathlib import Path

# =============================================================================
# CÉLULA 2: Configuração — EDITE AQUI
# =============================================================================

# Pasta onde estão os PDFs
PDF_DIR = "/content/pdfs"

# Mapeamento de nome de arquivo para matéria/módulo
# EDITE conforme seus arquivos
MAPEAMENTO = {
    # Módulo 1
    r"BMF1|BMF_1|Bases Morfofuncionais 1": {"materia": "bmf1", "modulo": 1, "disciplina": "BMF1"},
    r"PMH|Humanidades|Prática Médica": {"materia": "pmh", "modulo": 1, "disciplina": "PMH"},
    r"SCAPS.*1|SCAPS POL|Política.*Saúde|Introdução.*Práticas.*Saúde": {"materia": "sus", "modulo": 1, "disciplina": "SUS"},
    r"P1_|P2_|AV2_|Prova Teórica|Prova Prática": {"materia": "bmf1", "modulo": 1, "disciplina": "BMF1"},  # fallback
    
    # Módulo 2
    r"BMF2|BMF_2|Cardiocirculatório|Cardiovascular": {"materia": "bmf2", "modulo": 2, "disciplina": "BMF2"},
    r"PCM|BCM|Bases Moleculares|Bases Celulares": {"materia": "bcm1", "modulo": 2, "disciplina": "BCM"},
    r"epidemio|Indicadores|SCAPS.*2": {"materia": "indicadores", "modulo": 2, "disciplina": "Indicadores"},
    r"Semiologia 2|PROPEDÊUTICA|Propedeutica": {"materia": "semiologia2", "modulo": 2, "disciplina": "Semiologia 2"},
    r"MAD1|MgAD.*1|Imunologia": {"materia": "mad1", "modulo": 2, "disciplina": "MAD1"},
    
    # Módulo 3
    r"MAD2|MgAD.*2|Patologia|LESÃO|INFLAMAÇÃO|NEOPLASIA": {"materia": "mad2", "modulo": 3, "disciplina": "MAD2"},
    r"PFP|SRCD|Fisiopatologia|asma|DPOC": {"materia": "fisiopato3", "modulo": 3, "disciplina": "Fisiopatologia"},
    r"BDEH|BMF3": {"materia": "bmf3", "modulo": 3, "disciplina": "BMF3"},
    r"Saúde.*Trabalh|PPIS": {"materia": "saude_trabalhador", "modulo": 3, "disciplina": "Saúde do Trabalhador"},
    r"INTEGRADA.*3|3.*semestre": {"materia": "integrada3", "modulo": 3, "disciplina": "Integrada"},
    
    # Módulo 4
    r"Farmacologia|Fármaco": {"materia": "fisiopato_farmaco", "modulo": 4, "disciplina": "Farmacologia"},
    r"Bioestatística|Biostat": {"materia": "bioestatistica", "modulo": 4, "disciplina": "Bioestatística"},
    r"4B.*SISTEMA NERVOSO|BMF4|Neuroanatomia": {"materia": "bmf4", "modulo": 4, "disciplina": "BMF4"},
    r"INTEGRADA.*4|4S.*INTEGRADA": {"materia": "integrada4", "modulo": 4, "disciplina": "Integrada"},
}

def categorizar_por_nome(filename):
    """Categoriza o PDF pela regex do nome do arquivo."""
    for pattern, info in MAPEAMENTO.items():
        if re.search(pattern, filename, re.IGNORECASE):
            return info.copy()
    return {"materia": "outros", "modulo": 0, "disciplina": "Não categorizado"}


# =============================================================================
# CÉLULA 3: Extração de texto dos PDFs
# =============================================================================

def extrair_texto_pdf(pdf_path):
    """Extrai texto de um PDF usando pdfplumber (melhor para Google Forms)."""
    import pdfplumber
    
    texto_completo = ""
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            text = page.extract_text()
            if text:
                texto_completo += text + "\n\n"
    return texto_completo


def extrair_texto_pymupdf(pdf_path):
    """Fallback: extrai texto usando PyMuPDF (fitz)."""
    import fitz  # pymupdf
    
    doc = fitz.open(pdf_path)
    texto_completo = ""
    for page in doc:
        texto_completo += page.get_text() + "\n\n"
    doc.close()
    return texto_completo


# =============================================================================
# CÉLULA 4: Parser de questões do Google Forms
# =============================================================================

def parse_questoes_google_forms(texto, info_materia, arquivo_nome):
    """
    Parseia o texto extraído de um PDF do Google Forms e identifica questões.
    
    Padrões típicos do Google Forms:
    - Questões numeradas (1., 2., etc.)
    - Opções com letras (a), b), c)...) ou marcadores
    - Pontuação (X de Y pontos)
    - Respostas marcadas como corretas
    """
    questoes = []
    
    # Limpar metadados do Google Forms
    linhas = texto.split('\n')
    linhas_limpas = []
    for linha in linhas:
        # Remover timestamps, URLs do Google Forms, senhas, formulários
        if any(skip in linha.lower() for skip in [
            'docs.google.com', 'viewscore', 'digite a senha',
            'chame seu professor', 'chame o professor',
            'formulários', 'google formulários',
            '/forms/d/e/', 'respondidas corretamente',
        ]):
            continue
        # Remover linhas que são apenas datas
        if re.match(r'^\d{2}/\d{2}/\d{4}', linha.strip()):
            continue
        # Remover nome da prova repetido (se aparece como header em cada página)
        if re.match(r'^(P[12]|AV\d|PROVA)', linha.strip()) and len(linha.strip()) < 80:
            continue
        linhas_limpas.append(linha)
    
    texto_limpo = '\n'.join(linhas_limpas)
    
    # === ESTRATÉGIA 1: Questões numeradas ===
    # Padrão: "1." ou "Questão 1" ou "1)" seguido de texto
    questao_pattern = re.compile(
        r'(?:^|\n)\s*(?:'
        r'(\d+)\s*[\.\)]\s*(?:de\s+\d+\s+pontos?\s*)?'  # "1." ou "1)" com pontuação
        r'|(?:Questão|QUESTÃO)\s+(\d+)'  # "Questão 1"
        r'|(\d+)\s+de\s+\d+\s+pontos?'  # "X de Y pontos"
        r')\s*(.+?)(?=\n\s*(?:\d+\s*[\.\)]|Questão|QUESTÃO|\Z))',
        re.DOTALL | re.IGNORECASE
    )
    
    # === ESTRATÉGIA 2: Blocos separados por linhas em branco ===
    blocos = re.split(r'\n{2,}', texto_limpo)
    
    blocos_questoes = []
    for bloco in blocos:
        bloco = bloco.strip()
        if len(bloco) < 20:  # Muito curto, pular
            continue
        if '?' in bloco or 'assinale' in bloco.lower() or 'marque' in bloco.lower() or 'correto' in bloco.lower():
            blocos_questoes.append(bloco)
    
    # Tentar identificar cada bloco como questão
    for i, bloco in enumerate(blocos_questoes):
        linhas_bloco = bloco.split('\n')
        
        # Separar enunciado das opções
        enunciado_linhas = []
        opcoes = []
        
        em_opcoes = False
        for linha in linhas_bloco:
            linha_strip = linha.strip()
            
            # Detectar início de opções (a), b), A), B), etc.)
            if re.match(r'^[a-eA-E]\s*[\)\-\.]', linha_strip):
                em_opcoes = True
                # Limpar a letra e adicionar como opção
                opcao = re.sub(r'^[a-eA-E]\s*[\)\-\.]\s*', '', linha_strip)
                if opcao:
                    opcoes.append(opcao)
            elif em_opcoes and linha_strip:
                # Continua sendo opção se não começa com letra
                if opcoes:
                    opcoes[-1] += ' ' + linha_strip
            else:
                enunciado_linhas.append(linha_strip)
        
        enunciado = ' '.join(enunciado_linhas).strip()
        
        # Pular se enunciado muito curto ou sem opções
        if len(enunciado) < 30:
            continue
        
        # Formatar opções com letras
        opcoes_formatadas = []
        for j, opcao in enumerate(opcoes[:5]):  # Max 5 opções
            letra = chr(65 + j)  # A, B, C, D, E
            opcoes_formatadas.append(f"{letra}) {opcao}")
        
        questao = {
            "enunciado": enunciado,
            "opcoes": opcoes_formatadas if opcoes_formatadas else [],
            "correta": None,
            "precisa_revisao": len(opcoes_formatadas) < 2,  # Revisar se <2 opções
            "materia": info_materia["materia"],
            "modulo": info_materia["modulo"],
            "disciplina": info_materia["disciplina"],
            "arquivo_origem": arquivo_nome,
            "id": f"pdf_{info_materia['materia']}_{len(questoes)}",
        }
        
        questoes.append(questao)
    
    return questoes


# =============================================================================
# CÉLULA 5: Processamento principal
# =============================================================================

def processar_todos_pdfs(pdf_dir):
    """Processa todos os PDFs da pasta e retorna lista de questões."""
    
    pdf_files = glob.glob(os.path.join(pdf_dir, "*.pdf")) + \
                glob.glob(os.path.join(pdf_dir, "*.PDF"))
    
    if not pdf_files:
        print(f"❌ Nenhum PDF encontrado em {pdf_dir}")
        print("   Coloque os PDFs na pasta /content/pdfs/")
        return []
    
    print(f"📁 Encontrados {len(pdf_files)} PDFs\n")
    
    todas_questoes = []
    resumo = {}
    
    for pdf_path in sorted(pdf_files):
        nome = os.path.basename(pdf_path)
        info = categorizar_por_nome(nome)
        
        print(f"📄 {nome}")
        print(f"   → {info['disciplina']} (Módulo {info['modulo']})")
        
        # Tentar pdfplumber primeiro, depois pymupdf como fallback
        try:
            texto = extrair_texto_pdf(pdf_path)
            if len(texto.strip()) < 100:
                texto = extrair_texto_pymupdf(pdf_path)
        except Exception as e:
            try:
                texto = extrair_texto_pymupdf(pdf_path)
            except Exception as e2:
                print(f"   ⚠️ Erro ao ler: {e2}")
                continue
        
        # Parsear questões
        questoes = parse_questoes_google_forms(texto, info, nome)
        todas_questoes.extend(questoes)
        
        # Resumo
        key = f"Módulo {info['modulo']} - {info['disciplina']}"
        resumo[key] = resumo.get(key, 0) + len(questoes)
        
        print(f"   ✅ {len(questoes)} questões extraídas")
        print(f"   📝 Texto: {len(texto)} chars\n")
    
    # Mostrar resumo
    print("\n" + "="*50)
    print("📊 RESUMO DA EXTRAÇÃO")
    print("="*50)
    for key, count in sorted(resumo.items()):
        print(f"  {key}: {count} questões")
    print(f"\n  TOTAL: {len(todas_questoes)} questões")
    print(f"  Com revisão necessária: {sum(1 for q in todas_questoes if q.get('precisa_revisao'))}")
    
    return todas_questoes


# =============================================================================
# CÉLULA 6: EXECUTAR EXTRAÇÃO
# =============================================================================

# Criar pasta se não existir
os.makedirs(PDF_DIR, exist_ok=True)

# Processar
questoes = processar_todos_pdfs(PDF_DIR)

# Salvar resultado
if questoes:
    output_path = "/content/questoes_extraidas.json"
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(questoes, f, ensure_ascii=False, indent=2)
    print(f"\n💾 Salvo em {output_path}")
    
    # Mostrar amostra
    print("\n📋 Primeira questão extraída:")
    print(json.dumps(questoes[0], ensure_ascii=False, indent=2))


# =============================================================================
# CÉLULA 7 (OPCIONAL): Usar Gemini para categorizar e formatar
# =============================================================================
"""
Se quiser usar IA para melhorar a categorização, descomente abaixo.
Necessário: google-generativeai instalado + API key

import google.generativeai as genai

genai.configure(api_key="SUA_API_KEY")
model = genai.GenerativeModel("gemini-2.0-flash")

def formatar_com_ia(questao):
    prompt = f'''Analise esta questão de prova de medicina e retorne JSON com:
    - enunciado: texto completo e corrigido
    - opcoes: array com 5 alternativas (A a E), corrigidas
    - correta: índice da correta (0-4) ou null se não souber
    - tema: nome do tema (ex: "Anatomia do Sistema Locomotor")
    - subfocos: array de tags (ex: ["fraturas", "nervos_perifericos"])
    - dificuldade: 1 (fácil), 2 (médio) ou 3 (difícil)
    - explicacao: explicação didática da resposta
    
    Questão original:
    {json.dumps(questao, ensure_ascii=False)}
    
    Responda APENAS com o JSON, sem markdown.'''
    
    response = model.generate_content(prompt)
    try:
        return json.loads(response.text)
    except:
        return questao  # retorna original se falhar

# Exemplo de uso:
# questoes_formatadas = [formatar_com_ia(q) for q in questoes[:5]]
"""

print("\n✅ Script pronto!")
print("📌 Para usar com Gemini, descomente a Célula 7 e adicione sua API key")
