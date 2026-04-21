import json
import os

# Batch 1 Enrichment Data (IDs 801-851 roughly)
# Adding full explanations to all alternatives

ENRICHMENT_DATA = {
    849: {
        "explicacao_geral": "A **Doença de Von Gierke** (Glicogenose Tipo I) é causada pela deficiência da enzima **Glicose-6-Fosfatase**. Esta enzima é responsável por converter Glicose-6-Fosfato em Glicose livre, permitindo que o fígado exporte açúcar para manter a glicemia plasmática. Sem ela, o glicogênio é quebrado até G6P, mas fica 'preso' na célula, causando hepatomegalia e hipoglicemia severa.",
        "explicacoes_opcoes": {
            "A": "[INCORRETA] A amilase pancreática atua na digestão luminal de amido no intestino, não no metabolismo intracelular do glicogênio.",
            "B": "[INCORRETA] A deficiência de Glicogênio Sintase (Glicogenose Tipo 0) causaria incapacidade de estocar glicogênio, resultando em hiperglicemia pós-prandial e hipoglicemia de jejum, mas sem hepatomegalia.",
            "C": "[CORRETA] A **Glicose-6-Fosfatase** é a 'porta de saída' do fígado. Sua ausência impede a liberação de glicose tanto da glicogenólise quanto da gliconeogênese.",
            "D": "[INCORRETA] A deficiência da enzima ramificadora (Doença de Andersen - Tipo IV) gera um glicogênio de estrutura anormal que causa cirrose hepática precoce, mas não hipoglicemia tão severa quanto o Tipo I. [Referência: Lehninger - Princípios de Bioquímica]."
        }
    },
    850: {
        "explicacao_geral": "O estoque de glicogênio hepático é limitado (aprox. 75-100g no adulto) e serve para manter a glicemia nas primeiras **12 a 24 horas** de jejum. Após este período, a reserva está virtualmente exaurida e a manutenção da glicemia passa a depender inteiramente da **Gliconeogênese** (produção de glicose a partir de precursores não-carboidratos como lactato, glicerol e aminoácidos).",
        "explicacoes_opcoes": {
            "A": "[INCORRETA] O estoque de glicogênio diminui progressivamente durante o jejum; ele não aumenta.",
            "B": "[CORRETA] À medida que o jejum ultrapassa as 24h, o corpo entra em um estado de **gliconeogênese dominante**, pois os estoques de glicogênio tornam-se insuficientes.",
            "C": "[INCORRETA] No jejum, o corpo quebra gordura (lipólise) para gerar energia, mas o glicogênio é quebrado em glicose, não convertido em gordura.",
            "D": "[INCORRETA] O glicogênio é o primeiro recurso a ser mobilizado (em horas). O catabolismo muscular intenso (proteólise) é minimizado inicialmente para preservar a função estrutural, embora ocorra para fornecer esqueletos de carbono para a gliconeogênese. [Referência: Lehninger]."
        }
    },
    851: {
        "explicacao_geral": "Os transportadores de glicose (**GLUT**) possuem distribuição tecidual específica. O **GLUT4** é único por ser o transportador **insulino-dependente**. Em repouso, ele fica armazenado em vesículas citoplasmáticas e é translocado para a membrana plasmática somente após a sinalização via receptor de insulina.",
        "explicacoes_opcoes": {
            "A": "[INCORRETA] O GLUT1 é constitutivo (sempre presente) e garante a captação basal em quase todos os tecidos, especialmente eritrócitos e barreira hematoencefálica.",
            "B": "[CORRETA] O **GLUT4** está presente no **tecido adiposo** e **músculo estriado**. É o responsável pela queda rápida da glicemia após a alimentação mediada pela insulina.",
            "C": "[INCORRETA] O GLUT2 é um transportador de alta capacidade e baixa afinidade, presente no fígado e células beta do pâncreas, não sendo dependente de insulina (ele atua como sensor de glicose).",
            "D": "[INCORRETA] O GLUT3 possui alta afinidade e é o principal transportador neuronal, garantindo que o cérebro capte glicose mesmo em baixas concentrações, independentemente de insulina. [Referência: Devlin - Bioquímica]."
        }
    }
    # (Simplified for demonstration, I will continue the mass enrichment in next steps)
}

QUESTOES_PATH = r"c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\questoes.json"

def enrich():
    with open(QUESTOES_PATH, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    count = 0
    for q in data['questoes']:
        if q['id'] in ENRICHMENT_DATA:
            q.update(ENRICHMENT_DATA[q['id']])
            count += 1
            
    with open(QUESTOES_PATH, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    print(f"Enriched {count} questions.")

if __name__ == "__main__":
    enrich()
