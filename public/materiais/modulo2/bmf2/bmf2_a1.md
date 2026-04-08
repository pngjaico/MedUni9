# BMF2 — Aula 1: Potencial de Ação Cardíaco e Sistema de Condução

**Disciplina:** Bases Morfofuncionais 2  
**Módulo:** 2 | **Tempo de estudo sugerido:** 25-35 min

---

## Relevância Clínica e Acadêmica

Entender eletricidade cardíaca é o ponto de encontro entre fisiologia, farmacologia e clínica. Nesta aula, você conecta o comportamento dos canais iônicos com o que aparece no eletrocardiograma, com a mecânica da sístole/diástole e com as arritmias que mais caem em prova.

Na Uninove, as questões costumam exigir raciocínio de mecanismo: não basta decorar que existem nó SA, nó AV e Purkinje; é preciso explicar por que o nó AV atrasa, por que o ventrículo tem platô e por que isso protege contra tetania. Na prática, essa base permite interpretar bradicardia sinusal, extrassístoles, taquicardias supraventriculares, bloqueios AV e alterações dos intervalos PR e QRS.

## Arquitetura elétrica do coração: de onde nasce e por onde passa o impulso

O impulso fisiológico nasce no **nó sinoatrial (SA)**, região com maior automatismo em repouso. A despolarização se propaga pelos átrios (inclusive pelo feixe de Bachmann para o átrio esquerdo), alcança o **nó atrioventricular (AV)**, segue para feixe de His, ramos direito e esquerdo, e termina na rede de Purkinje.

Dois princípios organizam essa sequência:

1. **Quem dispara primeiro nem sempre conduz mais rápido.**  
2. **Atraso nodal é funcional, não defeito.**

O nó AV conduz lentamente porque suas células têm menos junções comunicantes e cinética eletrofisiológica própria. Esse atraso garante tempo para contração atrial completar enchimento ventricular antes da sístole dos ventrículos.

### Velocidade de condução e impacto funcional

| Estrutura | Velocidade aproximada | Papel fisiológico | Consequência clínica se alterado |
|----------|------------------------|-------------------|----------------------------------|
| Nó SA | baixa a moderada | iniciar ritmo | disfunção do nó sinusal, pausas |
| Miocárdio atrial | moderada | sincronizar contração atrial | atraso atrial, predisposição a reentrada |
| Nó AV | lenta | filtrar e atrasar impulso | PR prolongado, bloqueios AV |
| Feixe de His e ramos | alta | levar impulso ao septo/ventrículos | bloqueio de ramo, QRS alargado |
| Fibras de Purkinje | muito alta | despolarização ventricular quase simultânea | assincronia ventricular quando comprometidas |

> **Dica de Prova:** a condução mais lenta fisiológica é no **nó AV**, e a mais rápida é na **rede de Purkinje**.

> **Pegadinha:** confundir **automatismo** (gerar impulso) com **velocidade de condução** (transmitir impulso).

## Potencial de ação cardíaco: comparação entre célula marcapasso e miócito contrátil

No coração, existem dois padrões eletrofisiológicos principais:

- **Resposta lenta (nó SA e nó AV):** sem potencial de repouso estável; despolarização espontânea diastólica.
- **Resposta rápida (miócito atrial/ventricular e Purkinje):** potencial de repouso estável e fases 0-4 clássicas, com platô evidente no ventrículo.

A distinção explica frequência cardíaca, refratariedade, forma do potencial e resposta a drogas antiarrítmicas.

### Fases 0-4 no miócito ventricular (resposta rápida)

**Fase 4 (repouso):** potencial de membrana próximo de -90 mV, dominado por condutância de K+ (IK1).  
**Fase 0 (despolarização rápida):** abertura de canais rápidos de Na+ (INa) com subida íngreme do potencial.  
**Fase 1 (repolarização inicial):** inativação de INa e corrente transitória de K+ para fora (Ito).  
**Fase 2 (platô):** equilíbrio entre entrada de Ca2+ por canais tipo L (ICa-L) e saída de K+ (IKr/IKs).  
**Fase 3 (repolarização final):** predomínio de correntes de K+ e fechamento progressivo dos canais de Ca2+, retornando ao repouso.

O **platô** prolonga período refratário efetivo, impedindo somação de contrações e tetania, algo essencial para a função de bomba.

### Fases no marcapasso (nó SA e nó AV)

Nas células marcapasso, não se descrevem as fases 1 e 2 típicas. O ciclo útil para prova é:

- **Fase 4 (despolarização diastólica espontânea):** corrente funny (If, entrada mista de Na+/K+) + redução de efluxo de K+ + participação de Ca2+ tipo T no final da rampa.
- **Fase 0 (despolarização):** entrada de Ca2+ por canais tipo L (não por canais rápidos de Na+, como no miócito ventricular).
- **Fase 3 (repolarização):** saída de K+.

Quanto mais inclinada a fase 4 do marcapasso, maior a frequência de disparo. Estímulo simpático aumenta essa inclinação; estímulo parassimpático reduz.

### Comparação estratégica para prova

| Elemento | Marcapasso (nó SA/AV) | Miócito ventricular |
|----------|------------------------|---------------------|
| Potencial de repouso | instável | estável, negativo |
| Fase 0 | entrada de Ca2+ (lenta) | entrada rápida de Na+ |
| Platô (fase 2) | ausente/típico não definido | presente e prolongado |
| Automatismo | presente | ausente em condições fisiológicas |
| Relevância clínica | define frequência e cronotropismo | define força e sincronia contrátil |

> **Dica de Prova:** se a questão falar em **despolarização espontânea**, pense em **fase 4 nodal** e corrente **If**.

> **Pegadinha:** dizer que toda célula cardíaca despolariza na fase 0 por Na+ é falso; no nó SA/AV predomina Ca2+.

## Acoplamento excitação-contração: da membrana ao sarcômero

O potencial de ação não é só fenômeno elétrico: ele inicia contração mecânica. No miócito ventricular, o Ca2+ que entra pelos canais L durante a fase 2 ativa receptores de rianodina no retículo sarcoplasmático (liberação de Ca2+ induzida por Ca2+). O aumento de Ca2+ citosólico permite interação actina-miosina.

O relaxamento depende da remoção de Ca2+ do citosol:

- recaptação pelo retículo via SERCA;
- extrusão pelo trocador Na+/Ca2+ (NCX);
- contribuição menor da Ca2+-ATPase sarcolemal.

Alterações nesse eixo modificam inotropismo e favorecem pós-despolarizações. Em nível introdutório, basta reconhecer que distúrbio eletrolítico, isquemia e drogas podem desorganizar esse equilíbrio e gerar arritmia.

## Sistema nervoso autônomo, intervalos do ECG e arritmias básicas

O simpático (beta-1) aumenta frequência, condução no nó AV e contratilidade por aumento de AMPc/PKA, elevando correntes If e ICa-L. O parassimpático (M2), principalmente no nó SA e AV, reduz frequência e retarda condução.

Relações fundamentais com ECG:

- **Onda P:** despolarização atrial.
- **Intervalo PR:** tempo de condução átrio-nó AV-His inicial (inclui atraso nodal).
- **QRS:** despolarização ventricular rápida via His-Purkinje.
- **QT:** despolarização + repolarização ventricular (depende da duração do potencial ventricular).

### Arritmias e distúrbios básicos cobrados no ciclo inicial

| Situação | Base eletrofisiológica resumida | Pista comum no ECG |
|---------|----------------------------------|--------------------|
| Bradicardia sinusal | automatismo sinusal reduzido | ritmo sinusal lento |
| Taquicardia sinusal | aumento de automatismo sinusal | ritmo sinusal acelerado |
| Extrassístole atrial/ventricular | foco ectópico ou gatilho | batimento prematuro |
| Bloqueio AV de 1º grau | condução nodal lenta | PR prolongado |
| Bloqueio de ramo | atraso intraventricular | QRS alargado |

No nível desta aula, o objetivo não é classificar todos os subtipos de taquiarritmia, mas dominar o nexo entre canal, tecido e fase do potencial com o achado eletrocardiográfico.

> **Dica de Prova:** PR longo aponta para atraso de condução AV; QRS largo aponta para atraso de condução intraventricular.

> **Pegadinha:** atribuir todo QRS alargado a isquemia aguda; bloqueio de ramo é causa frequente.

## Ponte com a Clínica

Paciente de 68 anos, hipertenso, refere tontura e cansaço aos esforços. O ECG mostra ritmo sinusal com frequência de 48 bpm e PR de 240 ms.  
Integração esperada da aula:

- frequência baixa sugere redução de automatismo sinusal ou excesso vagal;
- PR prolongado sugere lentificação de condução no nó AV (bloqueio AV de 1º grau);
- se QRS estiver estreito, a condução ventricular distal está preservada;
- correlação com sintomas e medicações cronotrópicas negativas (por exemplo, betabloqueador) é obrigatória.

O raciocínio clínico inicial depende diretamente de saber onde cada fase do potencial predomina e qual segmento anatômico do sistema de condução está envolvido.

---


### Figura sugerida

**Figura-ID:** `BMF2-A1-F01`

- **Momento:** após a relevância clínica (visualizar o eixo principal da aula no app).
- **O que mostrar:** esquema ou ilustração alinhada ao tema central — produção deve detalhar na arte final.
- **Tipo sugerido:** esquema didático | ilustração estilo atlas | infográfico | foto contextual | outro.
- **Legenda (rascunho):** a fixar junto da imagem final (`data/materiais_figuras.json`).
- **Notas (opcional):** busca em Wikimedia Commons quando fizer sentido; respeitar licença e crédito.

## Pontos-Chave para Prova

- O nó SA é o marcapasso fisiológico por maior automatismo espontâneo.
- O nó AV conduz lentamente para permitir enchimento ventricular antes da sístole.
- Purkinje tem condução muito rápida e sincroniza despolarização dos ventrículos.
- No miócito ventricular, fase 0 depende de Na+ rápido e fase 2 (platô) depende de Ca2+ tipo L.
- No marcapasso nodal, fase 4 espontânea envolve corrente If; fase 0 depende de Ca2+.
- Platô ventricular prolonga refratariedade e previne tetania cardíaca.
- PR reflete, em grande parte, condução atrioventricular; QRS reflete despolarização ventricular.
- Bloqueio AV tende a prolongar PR; bloqueio de ramo tende a alargar QRS.
- Simpático acelera automatismo/condução; parassimpático reduz ambos, sobretudo em SA/AV.

---

## Pré-Prova
> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### Síntese para a prova
Na prova, pense no coração como um circuito com hierarquia: o nó SA inicia, o nó AV filtra e atrasa, e o sistema His-Purkinje distribui o impulso rapidamente para contração ventricular coordenada. Esse atraso AV não é patológico por si; é requisito para boa mecânica de enchimento e ejeção.

Quando a banca comparar marcapasso e miócito ventricular, o núcleo é: no marcapasso há despolarização diastólica espontânea (fase 4 inclinada), com fase 0 por Ca2+; no miócito ventricular há repouso estável, fase 0 por Na+ rápido e platô (fase 2) por entrada de Ca2+ tipo L equilibrada por saída de K+.

O platô ventricular prolonga refratariedade e impede tetania, distinguindo músculo cardíaco do esquelético. Alterações de condução aparecem no ECG: PR sugere trânsito AV, QRS sugere condução intraventricular. Logo, PR prolongado aponta para problema nodal AV, enquanto QRS alargado sugere atraso distal (como bloqueio de ramo).

Em arritmias básicas do ciclo inicial, evite decorar listas longas: priorize mecanismo. Pergunte sempre: o problema é geração do impulso (automatismo/gatilho) ou propagação do impulso (condução/reentrada)? Essa pergunta resolve grande parte das questões introdutórias.

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Como diferenciar |
|------------|------------|-----------------|
| Automatismo | Condução | Automatismo é capacidade de gerar impulso espontâneo; condução é capacidade de transmitir o impulso entre células |
| Nó SA | Nó AV | Nó SA dispara primeiro; nó AV é a região de condução fisiologicamente mais lenta |
| Fase 0 nodal | Fase 0 ventricular | Nodal: entrada de Ca2+ tipo L; ventricular: entrada rápida de Na+ |
| Célula marcapasso | Miócito contrátil | Marcapasso tem fase 4 espontânea; miócito tem repouso estável e platô |
| PR prolongado | QRS alargado | PR prolongado indica atraso AV; QRS alargado sugere atraso de condução intraventricular |

### Frase-âncora para não esquecer
> "No coração, ritmo nasce no nó SA, passa pelo freio fisiológico do nó AV e só então ganha velocidade em Purkinje para contrair com eficiência."
