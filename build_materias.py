import json
import os

materias = {
  "bmf1": {
    "nome": "Bases Morfofuncionais 1",
    "sigla": "BMF1",
    "modulo": 1, "ativo": True,
    "icon": "🦴", "cor": "#E85D75",
    "descricao": "Anatomia e Histologia do Sistema Locomotor",
    "professores": [], "totalCards": 0, "totalQuestoes": 0,
    "modulos": [{"nome": "Módulo 1", "temas": [{"id": "t1", "nome": "Tópicos de BMF1", "descricao": "Conforme Plano de Ensino Oficial 2026.1"}]}]
  },
  "sus": {
    "nome": "Princípios e Diretrizes do SUS",
    "sigla": "SUS",
    "modulo": 1, "ativo": True,
    "icon": "🏥", "cor": "#6366F1",
    "descricao": "Política de Saúde, Antecedentes Históricos e PNAB",
    "professores": [], "totalCards": 0, "totalQuestoes": 0,
    "modulos": [{"nome": "Módulo 1", "temas": [{"id": "t1", "nome": "Tópicos SUS", "descricao": "Conforme Plano de Ensino Oficial 2026.1"}]}]
  },
  "semio1": {
    "nome": "Semiologia do Sistema Musculoesquelético",
    "sigla": "SEMIO1",
    "modulo": 1, "ativo": True,
    "icon": "🩺", "cor": "#C0392B",
    "descricao": "Anamnese e Exame do Aparelho Locomotor",
    "professores": [], "totalCards": 0, "totalQuestoes": 0,
    "modulos": [{"nome": "Módulo 1", "temas": [{"id": "t1", "nome": "Semiologia Musculoesquelética", "descricao": "Conforme Plano de Ensino Oficial 2026.1"}]}]
  },
  "pmh": {
    "nome": "Processos Metabólicos Humanos",
    "sigla": "PMH",
    "modulo": 1, "ativo": True,
    "icon": "📋", "cor": "#8B5CF6",
    "descricao": "Análise dos Processos Metabólicos e Proteínas",
    "professores": [], "totalCards": 0, "totalQuestoes": 0,
    "modulos": [{"nome": "Módulo 1", "temas": [{"id": "t1", "nome": "Metabolismo Humano", "descricao": "Conforme Plano de Ensino Oficial 2026.1"}]}]
  },
  "pe1": {
    "nome": "Prática Extensionista 1",
    "sigla": "PE1",
    "modulo": 1, "ativo": True,
    "icon": "🤝", "cor": "#10B981",
    "descricao": "Higiene, Alimentação, Combate ao Tabagismo",
    "professores": [], "totalCards": 0, "totalQuestoes": 0,
    "modulos": [{"nome": "Módulo 1", "temas": [{"id": "t1", "nome": "Projetos de Comunidade", "descricao": "Prevenção e promoção da saúde"}]}]
  },
  
  "ind": {
    "nome": "Indicadores de Saúde, Epidemiologia e Bioestatística",
    "sigla": "IND",
    "modulo": 2, "ativo": True,
    "icon": "📊", "cor": "#059669",
    "descricao": "Vigilância, Indicadores de Morbimortalidade",
    "professores": [], "totalCards": 0, "totalQuestoes": 0,
    "modulos": [{"nome": "Módulo 1", "temas": [{"id": "t1", "nome": "Indicadores", "descricao": "Epidemiologia e Bioestatística básica"}]}]
  },
  "bmf2": {
    "nome": "Bases Morfofuncionais Módulo Cardio-Resp",
    "sigla": "BMF2",
    "modulo": 2, "ativo": True,
    "icon": "❤️", "cor": "#EF4444",
    "descricao": "Sistema Cardiorrespiratório Funcional",
    "professores": [], "totalCards": 0, "totalQuestoes": 0,
    "modulos": [{"nome": "Módulo 1", "temas": [{"id": "t1", "nome": "BMF2", "descricao": "Anatomia e Fisiologia Cardiorrespiratória"}]}]
  },
  "ds": {
    "nome": "Dimensões Socioambientais",
    "sigla": "DS",
    "modulo": 2, "ativo": True,
    "icon": "🌍", "cor": "#059669",
    "descricao": "Análise de impacto sócio-ambiental e saúde",
    "professores": [], "totalCards": 0, "totalQuestoes": 0,
    "modulos": [{"nome": "Módulo 1", "temas": [{"id": "t1", "nome": "Meio Ambiente e Sociedade", "descricao": "Tópicos de ecologia médica"}]}]
  },
  "semio2": {
    "nome": "Semiologia do Aparelho Cardiocirculatório e Respiratório",
    "sigla": "SEMIO2",
    "modulo": 2, "ativo": True,
    "icon": "🩺", "cor": "#C0392B",
    "descricao": "Ausculta e exame físico cardiorrespiratório",
    "professores": [], "totalCards": 0, "totalQuestoes": 0,
    "modulos": [{"nome": "Módulo 1", "temas": [{"id": "t1", "nome": "Cardio e Resp", "descricao": "Bases semiológicas cardiopulmonares"}]}]
  },
  "mad": {
    "nome": "Mecanismos de Agressão e Defesa (Imunologia)",
    "sigla": "MAD1",
    "modulo": 2, "ativo": True,
    "icon": "🛡️", "cor": "#F59E0B",
    "descricao": "Imunologia e Agressões Biológicas",
    "professores": [], "totalCards": 0, "totalQuestoes": 0,
    "modulos": [{"nome": "Módulo 1", "temas": [{"id": "t1", "nome": "Imunidade e Infeção", "descricao": "Tópicos imunitários"}]}]
  },
  "bcm": {
    "nome": "Biologia Celular e Molecular",
    "sigla": "BCM",
    "modulo": 2, "ativo": True,
    "icon": "🧬", "cor": "#4A90E2",
    "descricao": "Dinâmica da Célula e Mecanismos Genéticos",
    "professores": [], "totalCards": 0, "totalQuestoes": 0,
    "modulos": [{"nome": "Módulo 1", "temas": [{"id": "t1", "nome": "Célula e Genes", "descricao": "Divisão, Mutações e Genômica"}]}]
  },

  "st": {
    "nome": "Saúde do Trabalhador e Doenças Ocupacionais",
    "sigla": "ST",
    "modulo": 3, "ativo": True,
    "icon": "💼", "cor": "#78716C",
    "descricao": "Medicina Ocupacional e NR",
    "professores": [], "totalCards": 0, "totalQuestoes": 0,
    "modulos": [{"nome": "Módulo 1", "temas": [{"id": "t1", "nome": "Medicina Ocupacional", "descricao": "Lesões por esforço e leis"}]}]
  },
  "pe3": {
    "nome": "Prática Extensionista: Saúde Ocup. Atenção Básica",
    "sigla": "PE3",
    "modulo": 3, "ativo": True,
    "icon": "🤝", "cor": "#10B981",
    "descricao": "Prática com a comunidade",
    "professores": [], "totalCards": 0, "totalQuestoes": 0,
    "modulos": [{"nome": "Módulo 1", "temas": [{"id": "t1", "nome": "Ações Locais", "descricao": "Trabalho na comunidade local"}]}]
  },
  "bmf3": {
    "nome": "Bases Morfofuncionais 3",
    "sigla": "BMF3",
    "modulo": 3, "ativo": True,
    "icon": "📍", "cor": "#3B82F6",
    "descricao": "Bases do aparelho reprodutor e renal",
    "professores": [], "totalCards": 0, "totalQuestoes": 0,
    "modulos": [{"nome": "Módulo 1", "temas": [{"id": "t1", "nome": "Renal e Urogenital", "descricao": "Anatomia Urogenital"}]}]
  },
  "mad2": {
    "nome": "Mecanismos de Agressão e Defesa (Patologia)",
    "sigla": "MAD2",
    "modulo": 3, "ativo": True,
    "icon": "🛡️", "cor": "#EF4444",
    "descricao": "Patologia, Inflamação celular e Reparo",
    "professores": [], "totalCards": 0, "totalQuestoes": 0,
    "modulos": [{"nome": "Módulo 1", "temas": [{"id": "t1", "nome": "Patologia Geral", "descricao": "Lesões e inflamação"}]}]
  },
  "fp3": {
    "nome": "Processos Fisiopatológicos e Farmacoterapêuticos",
    "sigla": "FP3",
    "modulo": 3, "ativo": True,
    "icon": "🧠", "cor": "#F97316",
    "descricao": "Integração fármaco-doença",
    "professores": [], "totalCards": 0, "totalQuestoes": 0,
    "modulos": [{"nome": "Módulo 1", "temas": [{"id": "t1", "nome": "Fisiopatologia", "descricao": "Fisiopatologia e medicamentos"}]}]
  },
  "semio3": {
    "nome": "Semiologia dos Aparelhos Renal e Reprodutor",
    "sigla": "SEMIO3",
    "modulo": 3, "ativo": True,
    "icon": "🩺", "cor": "#C0392B",
    "descricao": "Exame urológico e reprodutivo",
    "professores": [], "totalCards": 0, "totalQuestoes": 0,
    "modulos": [{"nome": "Módulo 1", "temas": [{"id": "t1", "nome": "Semio Renal", "descricao": "Sinais e sintomas nefrológicos"}]}]
  },

  "ff4": {
    "nome": "PFF: Sistemas Neurossensorial e Endócrino",
    "sigla": "FF4",
    "modulo": 4, "ativo": True,
    "icon": "💊", "cor": "#7C3AED",
    "descricao": "Farmacoterapia e Fisiopatologia do sistema nervoso e endócrino",
    "professores": [], "totalCards": 0, "totalQuestoes": 0,
    "modulos": [{"nome": "Módulo 1", "temas": [{"id": "t1", "nome": "Neurofarmacologia", "descricao": "Endocrinologia e SNC"}]}]
  },
  "pe4": {
    "nome": "Prática Extensionista: Epidemiologia Comunitária",
    "sigla": "PE4",
    "modulo": 4, "ativo": True,
    "icon": "🤝", "cor": "#10B981",
    "descricao": "Impacto na Atenção Comunitária",
    "professores": [], "totalCards": 0, "totalQuestoes": 0,
    "modulos": [{"nome": "Módulo 1", "temas": [{"id": "t1", "nome": "Impacto Epidemiológico", "descricao": "Ação em saúde pública"}]}]
  },
  "bioe": {
    "nome": "Bioestatística e Estudos em Saúde",
    "sigla": "BIOE",
    "modulo": 4, "ativo": True,
    "icon": "📈", "cor": "#0EA5E9",
    "descricao": "Métodos estatísticos na evidência médica",
    "professores": [], "totalCards": 0, "totalQuestoes": 0,
    "modulos": [{"nome": "Módulo 1", "temas": [{"id": "t1", "nome": "Bioestatística", "descricao": "Estatísticas em saúde"}]}]
  },
  "bmf4": {
    "nome": "Bases Morfofuncionais 4 (SNC)",
    "sigla": "BMF4",
    "modulo": 4, "ativo": True,
    "icon": "🧠", "cor": "#D946EF",
    "descricao": "Neuroanatomia e Neurofisiologia",
    "professores": [], "totalCards": 0, "totalQuestoes": 0,
    "modulos": [{"nome": "Módulo 1", "temas": [{"id": "t1", "nome": "SNC", "descricao": "Placa neural, trato nervoso, encéfalo"}]}]
  },
  "semio4": {
    "nome": "Semiologia Neurológica e Síndromes Clínicas",
    "sigla": "SEMIO4",
    "modulo": 4, "ativo": True,
    "icon": "🩺", "cor": "#C0392B",
    "descricao": "Semiologia Prática Neurológica",
    "professores": [], "totalCards": 0, "totalQuestoes": 0,
    "modulos": [{"nome": "Módulo 1", "temas": [{"id": "t1", "nome": "Exame Neuro", "descricao": "Síndromes e achados clínicos"}]}]
  }
}

target = r'c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\materias.json'
with open(target, 'w', encoding='utf-8') as f:
    json.dump(materias, f, ensure_ascii=False, indent=2)

print('materias.json atualizado.')
