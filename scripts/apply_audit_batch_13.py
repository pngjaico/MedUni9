import json

batch_13_reviewed = [
  {
    "id": 1402,
    "materia": "mad1",
    "tema": "mad1_a18",
    "enunciado": "Qual afirmação sobre “Anti-HAV IgM:” está correta?",
    "opcoes": [
      "A) Indica infecção aguda pelo vírus da Hepatite A",
      "B) Cronicidade — Não — Sim (5–10% adulto; 90% neonato) — Sim (~80%)",
      "C) Anti-HBe — Redução da replicação; melhor prognóstico",
      "D) HCV:: 80% cronifica; DAA curam > 95%; anti-HCV é triagem"
    ],
    "correta": 0,
    "dificuldade": 2,
    "modulo": 2,
    "explicacao_geral": "O diagnóstico das hepatites virais depende da interpretação correta dos marcadores sorológicos.",
    "explicacoes_opcoes": {
      "A": "CORRETA: O **IgM** é o marcador de fase aguda. Se reagente para HAV, confirma hepatite A ativa.",
      "B": "INCORRETA: Esta linha descreve taxas de cronicidade de outros vírus (HBV/HCV).",
      "C": "INCORRETA: O Anti-HBe é um marcador da Hepatite B, não da A.",
      "D": "INCORRETA: Refere-se às características da Hepatite C."
    },
    "explicacao": "Resumo Sorológico: **IgM = Agudo (na hora)**; **IgG = Antigo (ganhou imunidade)**.",
    "aula_id": "mad1_a18"
  },
  {
    "id": 1412,
    "materia": "mad1",
    "tema": "mad1_a19",
    "enunciado": "Sobre a estrutura do **envelopamento** do HIV, qual a composição correta?",
    "opcoes": [
      "A) Capsídeo cônico (proteína p24); envelope com glicoproteínas **gp120 + gp41**",
      "B) ITRN — ITRNN — ITRN = análogo nucleosídico",
      "C) Carga viral: (HIV-RNA): objetivo = indetectável (< 50 cópias/mL) após 6 meses",
      "D) Proteína — Gene — Função"
    ],
    "correta": 0,
    "dificuldade": 2,
    "modulo": 2,
    "explicacao_geral": "A estrutura do HIV é alvo de diversos fármacos e testes diagnósticos.",
    "explicacoes_opcoes": {
      "A": "CORRETA: O HIV possui um capsídeo de **p24** (usado no diagnóstico de fase aguda) e um envelope com as proteínas de ancoragem **gp120** (ligação) e **gp41** (fusão).",
      "B": "INCORRETA: Estes são tipos de medicamentos (Inibidores da Transcriptase Reversa).",
      "C": "INCORRETA: Este é um objetivo terapêutico, não uma descrição estrutural.",
      "D": "INCORRETA: Apenas cabeçalho genérico."
    },
    "explicacao": "Anatomia Viral: **p24** = miolo (antígeno); **gp120/41** = chave para entrar na célula.",
    "aula_id": "mad1_a19"
  },
  {
    "id": 1423,
    "materia": "mad1",
    "tema": "mad1_a2",
    "enunciado": "Em um paciente com choque séptico por bacilo Gram-negativo, o **LPS** ativa macrófagos induzindo a 'tempestade de citocinas'. Qual receptor é o principal sensor do LPS?",
    "opcoes": [
      "A) TLR2 (reconhece Gram-positivas)",
      "B) **TLR4** (reconhece LPS de Gram-negativas)",
      "C) TLR9 (reconhece DNA CpG)",
      "D) RIG-I (reconhece RNA viral)"
    ],
    "correta": 1,
    "dificuldade": 2,
    "modulo": 2,
    "explicacao_geral": "Os receptores Toll-like (TLR) são fundamentais na imunidade inata para reconhecer padrões moleculares (PAMPs).",
    "explicacoes_opcoes": {
      "A": "INCORRETA: O TLR2 foca em ácido lipoteicoico e peptidoglicanos de bactérias Gram+.",
      "B": "CORRETA: O **TLR4** é o receptor específico para o Lipopolissacarídeo (Endotoxina) das Gram-negativas.",
      "C": "INCORRETA: O TLR9 fica nos endossomos e detecta DNA bacteriano.",
      "D": "INCORRETA: O RIG-I é um sensor citoplasmático para vírus."
    },
    "explicacao": "Gatilho de Prova: **LPS = TLR4**.",
    "aula_id": "mad1_a2"
  },
  {
    "id": 1425,
    "materia": "mad1",
    "tema": "mad1_a2",
    "enunciado": "Qual célula da imunidade inata reconhece e destrói preferencialmente células que reduziram a expressão de **MHC-I** (estratégia de evasão tumoral ou viral conhecida como 'missing self')?",
    "opcoes": [
      "A) Macrófago alveolar",
      "B) Linfócito T CD8+ citotóxico",
      "C) Eosinófilo",
      "D) **Célula NK** (Natural Killer)"
    ],
    "correta": 3,
    "dificuldade": 3,
    "modulo": 2,
    "explicacao_geral": "A vigilância imunológica detecta células anômalas antes que elas se tornem ameaças maiores.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: Macrófagos fagocitam por opsonização, não pelo critério de ausência de MHC-I.",
      "B": "INCORRETA: O CD8+ precisa justamente da presença do MHC-I para 'enxergar' o antígeno.",
      "C": "INCORRETA: Atua em alergias e parasitoses.",
      "D": "CORRETA: As **Células NK** possuem receptores inibitórios que leem o MHC-I. Se o MHC-I sumir, esses receptores soltam o 'freio' e a NK ataca."
    },
    "explicacao": "Conceito: **NK = Natural Killer**. Se não tem MHC-I (identidade), ela mata.",
    "aula_id": "mad1_a2"
  }
]

def update_batch(batch):
    with open('data/questoes.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    questoes_map = {q['id']: q for q in data['questoes']}
    updated_count = 0
    for q_new in batch:
        if q_new['id'] in questoes_map:
            questoes_map[q_new['id']].update(q_new)
            updated_count += 1
    with open('data/questoes.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"Updated {updated_count} questions in Batch 13.")

if __name__ == "__main__":
    update_batch(batch_13_reviewed)
