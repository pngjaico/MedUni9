# BIOE — Aula 7: Epidemiologia Analítica — Causa e Efeito

A epidemiologia analítica é a ciência de ligar os pontos. Na prova, os temas centrais são a diferença entre **Incidência e Prevalência**, o cálculo de **RR e OR**, e os **Critérios de Bradford Hill** para dizer que algo causa uma doença.

Na prática, não basta saber que "muita gente tem câncer". O médico precisa saber **por que** elas têm. O fumo causa o câncer ou é apenas uma coincidência? Existe um fator de **Confusão** no meio dessa história? Saber calcular o risco é o que permite você orientar seu paciente de forma precisa: "Se o senhor parar de fumar, seu risco de infarto cai pela metade em dois anos". Isso é transformar estatística em vida salva.

---

### Figura sugerida

**Figura-ID:** `BIOE-A7-F01`

- **Momento:** Seção de Incidência vs Prevalência.
- **O que mostrar:** O "Tanque da Doença": Um tanque de água. A água que entra pela torneira é a **Incidência** (casos novos). O nível de água acumulada no tanque é a **Prevalência** (casos totais). O ralo por onde a água sai representa a **Cura** ou o **Óbito**.
- **Tipo sugerido:** Infográfico de dinâmica populacional.
- **Legenda (rascunho):** A dinâmica entre casos novos, casos existentes e a saída por cura ou morte no sistema de saúde.

## 1. Incidência vs Prevalência: O Fluxo e o Estoque

- **Incidência (Casos Novos):** É a velocidade com que as pessoas ficam doentes. Mede o **Risco**. É como a torneira aberta enchendo a banheira.
- **Prevalência (Casos Totais):** É a "fotografia" do momento. Inclui quem ficou doente hoje e quem já estava doente há anos. Mede a **Carga** da doença na sociedade.
- **Regra:** Se uma doença mata rápido (ex: Ebola), a **incidência** pode ser alta, mas a **prevalência** será baixa (porque as pessoas não ficam doentes por muito tempo).

---

## 2. Medidas de Associação: O Tamanho do Risco

- **Risco Relativo (RR):** Usado em estudos de **Coorte** (quem seguimos no tempo). **RR = 3** significa que o grupo exposto tem 3 vezes mais chance de adoecer.
- **Odds Ratio (OR):** Usado em estudos de **Caso-Controle** (quem já está doente). É uma estimativa do risco quando não podemos medir a incidência diretamente.
- **Risco Atribuível:** É a conta de "subtração". Diz quanto da doença sumiria se tirássemos o fator de risco (ex: Se ninguém fumasse, quantos casos de câncer seriam evitados?).

---

## 3. Causalidade: Os Critérios de Bradford Hill

Como provar que A causa B? Usamos nove critérios, mas os mais importantes para a prova são:
1. **Temporalidade (Obrigatório!):** A causa deve vir **Antes** do efeito. Não existe causa que vem depois da doença.
2. **Dose-Resposta:** Quanto mais você fuma, maior a chance de ter câncer.
3. **Plausibilidade Biológica:** A explicação tem que fazer sentido para a biologia humana.
4. **Força da Associação:** Se o RR é gigante (ex: **RR = 20**), é quase certo que a causa é real.

---

## 4. O Fator de Confusão: A Armadilha

Um **Confundidor** é uma variável intrusa que faz duas coisas parecerem ligadas quando não estão:
- **Exemplo Clássico:** Observa-se que quem toma muito café tem mais infarto.
- **A Confusão:** O café causa o infarto? Não! Acontece que quem toma muito café geralmente **fuma mais**. O **fumo** é o verdadeiro causador, mas o café leva a culpa injustamente.
- **Como resolver:** No estudo, você deve "limpar" os dados separando fumantes de não-fumantes.

---

## Ponte com a Clínica

No consultório, você usará o **Risco Relativo** para convencer o paciente a mudar de hábitos. Dizer "o cigarro faz mal" é vago. Dizer "Seu risco de ter um AVC é **4 vezes maior** (RR=4) do que o do seu vizinho que não fuma" é um dado científico poderoso que ajuda na adesão ao tratamento e na mudança de estilo de vida.

---

## Pontos-Chave para Prova

- **Incidência**: Foca em casos **Novos**.
- **Prevalência**: Foca em casos **Existentes**.
- **Relação**: **Prevalência = Incidência x Duração da doença**.
- **Temporalidade**: É o único critério de causalidade que é **indispensável**.
- **RR = 1**: Significa que o fator não fede nem cheira (não há associação).

---

## Pré-Prova

<ctrl94> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### Síntese para a prova

Para gabaritar epidemiologia analítica, foque na Torneira e no Risco. 
**Incidência** = Casos Novos (Torneira). **Prevalência** = Casos Atuais (Banheira cheia).

A Uninove adora o **Estudo de Coorte**. Lembre-se: Coorte mede incidência e usa **RR**. Caso-Controle usa **OR**. Outro ponto forte: o **Confundidor**. Se uma terceira variável explica o resultado, ela é o confundidor. Por fim, saiba que para ser **Causa**, o fator tem que vir sempre **Antes** da doença (Temporalidade). Se o estudo é transversal (foto), ele não prova causa porque não sabemos quem veio primeiro.

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Diferencial Crítico |
|------------|------------|-----------------|
| **Incidência** | **Prevalência** | **Casos Novos (Risco)** vs **Casos Totais (Carga)** |
| **Risco Relativo (RR)**| **Odds Ratio (OR)** | Usado em **Coorte** vs Usado em **Caso-Controle** |
| **Fator de Risco** | **Fator de Proteção** | **RR Maior que 1** vs **RR Menor que 1** |
| **Confundidor** | **Modificador de Efeito** | **Deve ser Removido** vs **Deve ser Relatado** (É biológico) |
| **Associação** | **Causalidade** | **Estão Juntos** vs **Um Gera o outro** |

### Frase-âncora para não esquecer

> "Incidência é o risco que chega, prevalência é a carga que fica. No RR o futuro se mede, no OR o passado se explica. Sem temporalidade não há causa, apenas confusão que o dado disfarça. Se o RR é 1, nada mudou; se é maior, o perigo chegou. Calcule o risco, salve a vida."
