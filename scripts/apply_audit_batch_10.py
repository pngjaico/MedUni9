import json

batch_10_reviewed = [
  {
    "id": 1102,
    "materia": "ds",
    "tema": "ds_a3",
    "enunciado": "O **Ureter** é um tubo muscular que transporta a urina do rim à bexiga. Ele possui três pontos anatômicos de **constrição** (estreitamento) onde cálculos renais costumam ficar presos. Quais são eles?",
    "opcoes": [
      "A) Junção ureteropélvica; Cruzamento com os vasos ilíacos; Junção ureterovesical (entrada na bexiga)",
      "B) Perto do umbigo; Atrás do fígado; Dentro do pâncreas",
      "C) Na saída da uretra; No colo do fêmur; No calcanhar",
      "D) Não há estreitamentos; o ureter tem o mesmo calibre em todo o trajeto"
    ],
    "correta": 0,
    "dificuldade": 2,
    "modulo": 2,
    "explicacao_geral": "Os pontos de constrição ureteral são os locais mais prováveis de impacto de cálculos (litíase).",
    "explicacoes_opcoes": {
      "A": "CORRETA: Estes são os três 'gargalos' anatômicos: o início (saída do rim), o meio (passagem sobre as artérias ilíacas) e o fim (entrada na bexiga).",
      "B": "INCORRETA: O ureter é retroperitoneal e não passa por esses órgãos abdominais.",
      "C": "INCORRETA: Locais sem qualquer relação anatômica com o trajeto ureteral.",
      "D": "INCORRETA: Existem estreitamentos claros e descritos na anatomia clássica."
    },
    "explicacao": "Padrão de prova: **Impacto de Cálculo** = JUP, Vasos Ilíacos ou JUV.",
    "aula_id": "ds_a3"
  },
  {
    "id": 1109,
    "materia": "ds",
    "tema": "ds_a3",
    "enunciado": "Um paciente apresenta dor lombar aguda, tipo 'pontada' intensa, que irradia para a região inguinal (virilha) e testículo. O médico suspeita de um cálculo renal descendo pelo ureter. Qual o nome dessa dor e por que ela **irradia** para baixo?",
    "opcoes": [
      "A) Dor de estômago; irradia por gases intestinais",
      "B) Cólica Nefrética; a dor segue o trajeto descendente do ureter e compartilha inervação (dermátomos) com a região genital",
      "C) Apendicite; o cálculo inflamou o ceco",
      "D) Lombalgia mecânica; causada por má postura"
    ],
    "correta": 1,
    "dificuldade": 3,
    "modulo": 2,
    "explicacao_geral": "A dor visceral ureteral é referida em áreas de inervação comum (T11-L2).",
    "explicacoes_opcoes": {
      "A": "INCORRETA: A anatomia renal e gástrica são distintas e a dor em cólica ureteral é muito característica.",
      "B": "CORRETA: A **Cólica Nefrética** é causada pela obstrução/distensão do sistema coletor. A dor se desloca de trás para frente e para baixo à medida que o cálculo progride, refletindo a inervação ureteral.",
      "C": "INCORRETA: Apendicite causa dor em fossa ilíaca direita, mas sem o padrão de irradiação para testículo/lombar típicos do cálculo.",
      "D": "INCORRETA: A dor lombar mecânica costuma ser contínua ou exacerbada pelo movimento, não em cólica paroxística."
    },
    "explicacao": "Semiologia: **Cólica Nefrética** = Lombar → Flanco → Região Inguinal/Escrotal.",
    "aula_id": "ds_a3"
  },
  {
    "id": 1118,
    "materia": "ds",
    "tema": "ds_a3",
    "enunciado": "Qual a principal característica biomecânica da fase **isovolumétrica** de contração ventricular no ciclo cardíaco?",
    "opcoes": [
      "A) O volume ventricular aumenta rapidamente para receber sangue",
      "B) O volume intraventricular permanece constante enquanto há ascensão rápida da pressão",
      "C) As valvas atrioventriculares e semilunares estão todas abertas",
      "D) O músculo cardíaco está relaxando para diminuir a pressão"
    ],
    "correta": 1,
    "dificuldade": 3,
    "modulo": 2,
    "explicacao_geral": "A isovolumetria ocorre quando a pressão sobe sem que o sangue saia do coração.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: O volume não aumenta; isso ocorreria no enchimento ventricular.",
      "B": "CORRETA: Durante a **contração isovolumétrica**, o ventrículo começa a apertar (sístole), mas as valvas semilunares ainda estão fechadas e as AV já fecharam. Por isso, o volume não muda, mas a pressão sobe até 'vencer' as artérias.",
      "C": "INCORRETA: Se as valvas estivessem abertas, o volume mudaria (sangue estaria saindo ou entrando).",
      "D": "INCORRETA: O músculo está em contração (sístole)."
    },
    "explicacao": "Conceito Central: **Isovolumétrico** = Todas as valvas fechadas + Volume fixo.",
    "aula_id": "ds_a3"
  },
  {
    "id": 1128,
    "materia": "ds",
    "tema": "ds_a3",
    "enunciado": "Qual componente estrutural dos discos intercalares permite o **acoplamento elétrico** (passagem rápida de íons) entre cardiomiócitos adjacentes, tornando o coração um sincício funcional?",
    "opcoes": [
      "A) Desmossomos",
      "B) Fibras de Colágeno denso",
      "C) Junções comunicantes (**Gap Junctions**)",
      "D) Bainha de Mielina"
    ],
    "correta": 2,
    "dificuldade": 3,
    "modulo": 2,
    "explicacao_geral": "O coração precisa contrair de forma coordenada através da propagação elétrica rápida.",
    "explicacoes_opcoes": {
      "A": "INCORRETA: Desmossomos promovem a adesão mecânica (impedem que as células se soltem com a força da contração).",
      "B": "INCORRETA: O colágeno é suporte extratêxtil, não conduz eletricidade intracelular.",
      "C": "CORRETA: As **Gap Junctions** são canais que permitem a livre passagem de íons entre as células, garantindo que a despolarização de uma célula se espalhe quase instantaneamente para a vizinha.",
      "D": "INCORRETA: O miocárdio não é mielinizado; a condução é feita célula-a-célula via gap junctions."
    },
    "explicacao": "Padrão de prova: **Gap Junctions** = Sincício elétrico. **Desmossomos** = Adesão mecânica.",
    "aula_id": "ds_a3"
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
    print(f"Updated {updated_count} questions in Batch 10.")

if __name__ == "__main__":
    update_batch(batch_10_reviewed)
