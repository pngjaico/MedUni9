import json

batch_28_29_reviewed = [
  {
    "id": 2903,
    "materia": "bmf2",
    "tema": "bmf2_a1",
    "enunciado": "A glicosúria (presença de glicose na urina) é um sinal clássico de Diabetes Mellitus descompensado. Qual o mecanismo fisiológico que explica esse achado no néfron?",
    "opcoes": [
      "A) Inibição da secreção de glicose no túbulo distal",
      "B) Saturação dos transportadores SGLT-2 no túbulo contorcido proximal após exceder o limiar renal",
      "C) Perda de permeabilidade da alça de Henle aos solutos orgânicos",
      "D) Aumento da filtração glomerular de proteínas que carregam a glicose"
    ],
    "correta": 1,
    "dificuldade": 2,
    "modulo": 1,
    "explicacao_geral": "O rim possui uma capacidade máxima de reabsorver glicose (Vmax).",
    "explicacoes_opcoes": {
      "A": "INCORRETA: A glicose é reabsorvida, não secretada.",
      "B": "CORRETA: Quando a glicemia supera ~180 mg/dL (limiar renal), os transportadores SGLT-2 ficam saturados e não conseguem recolher toda a glicose filtrada, que acaba saindo na urina.",
      "C": "INCORRETA: A alça de Henle foca em íons e água, não em glicose.",
      "D": "INCORRETA: A glicose é filtrada livremente, não depende de proteínas carreadoras no filtrado."
    },
    "explicacao": "Conceito Chave: **Glicosúria = Limiar Renal Ultrapassado (~180mg/dL).** Alvo principal: Túbulo Contorcido Proximal.",
    "aula_id": "bmf2_a1"
  },
  {
    "id": 2913,
    "materia": "bmf4",
    "tema": "bmf4_a1",
    "enunciado": "Um fármaco administrado por via oral atinge concentrações plasmáticas menores do que quando injetado diretamente na veia. Qual fenômeno clássico da farmacocinética explica essa redução de dose?",
    "opcoes": [
      "A) Excreção biliar imediata",
      "B) Efeito de Primeira Passagem Hepática",
      "C) Ligação definitiva às proteínas da mucosa gástrica",
      "D) Filtração glomerular seletiva antes da absorção"
    ],
    "correta": 1,
    "dificuldade": 1,
    "modulo": 4,
    "explicacao_geral": "O trajeto gastrointestinal obriga o fármaco a passar pelo sistema porta.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: A excreção biliar ocorre após a distribuição.",
      "B": "CORRETA: O sangue drenado do trato digestivo passa primeiro pelo fígado via veia porta. Ali, o fármaco pode ser metabolizado e inativado antes de chegar ao restante do corpo.",
      "C": "INCORRETA: Proteínas gástricas não retêm fármacos em massa dessa forma.",
      "D": "INCORRETA: A filtração renal só ocorre após o fármaco estar na circulação sistêmica."
    },
    "explicacao": "Pilar Farmacocinético: **Via Oral -> Veia Porta -> Fígado (Metabolismo) -> Sangue.** Isso reduz a bioestatística.",
    "aula_id": "bmf4_a1"
  },
  {
    "id": 2918,
    "materia": "mad1",
    "tema": "mad1_a1",
    "enunciado": "Durante a paramentação cirúrgica e preparo da pele, a **Clorexidina** é frequentemente preferida ao PVPI em procedimentos longos. Qual a principal vantagem farmacológica para essa escolha?",
    "opcoes": [
      "A) Menor custo por litro de solução",
      "B) Alto efeito residual (ação prolongada por até 6 horas na pele)",
      "C) Capacidade de esterilizar totalmente a pele eliminando esporos",
      "D) Não necessita de fricção mecânica para agir"
    ],
    "correta": 1,
    "dificuldade": 2,
    "modulo": 5,
    "explicacao_geral": "Antissépticos possuem diferentes perfis de tempo de início e duração de ação.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: O PVPI costuma ser mais barato que a clorexidina.",
      "B": "CORRETA: A clorexidina adere à queratina da pele, mantendo uma barreira antimicrobiana ativa por várias horas após a aplicação.",
      "C": "INCORRETA: Nenhum antisséptico 'esteriliza' a pele viva; eles apenas reduzem a carga microbiana (antissepsia).",
      "D": "INCORRETA: A fricção mecânica é parte fundamental da técnica de degermação."
    },
    "explicacao": "Técnica Operatória: **Clorexidina = Efeito Residual.** PVPI = Inativado por matéria orgânica (sangue/pus).",
    "aula_id": "mad1_a1"
  },
  {
    "id": 3013,
    "materia": "bmf1",
    "tema": "bmf1_a1",
    "enunciado": "A bainha de mielina é essencial para a condução saltatória do impulso nervoso. Qual célula é responsável por produzir a mielina no **Sistema Nervoso Central (SNC)**?",
    "opcoes": [
      "A) Célula de Schwann",
      "B) Astrócito",
      "C) Oligodendrócito",
      "D) Micróglia"
    ],
    "correta": 2,
    "dificuldade": 2,
    "modulo": 1,
    "explicacao_geral": "A neuroglia de suporte varia conforme a divisão do sistema nervoso.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: A Célula de Schwann produz mielina apenas no Sistema Nervoso Periférico (SNP).",
      "B": "INCORRETA: Astrócitos fornecem sustentação e formam a barreira hematoencefálica.",
      "C": "CORRETA: O oligodendrócito consegue envolver diversos axônios ao mesmo tempo no cérebro e medula para formar a mielina.",
      "D": "INCORRETA: Micróglias são as células de defesa (macrófagos) do tecido nervoso."
    },
    "explicacao": "Histologia Padrão: **Oligodendrócito = SNC.** **Schwann = SNP.**",
    "aula_id": "bmf1_a1"
  },
  {
    "id": 3040,
    "materia": "bmf1",
    "tema": "bmf1_a1",
    "enunciado": "No tecido ósseo compacto, a nutrição ocorre através de canais que transportam vasos sanguíneos. Como se chamam os canais **transversais** que conectam os canais de Havers entre si?",
    "opcoes": [
      "A) Canais de Volkmann",
      "B) Canalículos",
      "C) Lacunas de Howship",
      "D) Forames Nutritivos"
    ],
    "correta": 0,
    "dificuldade": 2,
    "modulo": 1,
    "explicacao_geral": "O osso cortical possui um sistema complexo de canais para garantir que o sangue chegue aos osteócitos.",
    "explicacoes_opcoes": {
      "A": "CORRETA: Canais de Volkmann atravessam o osso transversalmente, ligando os osteons.",
      "B": "INCORRETA: Canalículos são micro-túneis que conectam osteócitos vizinhos.",
      "C": "INCORRETA: Lacunas de Howship são as cavidades onde os osteoclastos degradam o osso.",
      "D": "INCORRETA: Forames nutritivos são as entradas macroscópicas de vasos no osso."
    },
    "explicacao": "Anatomia Microscópica: **Havers = Longitudinais (centro do Osteon).** **Volkmann = Transversais.**",
    "aula_id": "bmf1_a1"
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
    print(f"Updated {updated_count} questions in Batch 28-29.")

if __name__ == "__main__":
    update_batch(batch_28_29_reviewed)
