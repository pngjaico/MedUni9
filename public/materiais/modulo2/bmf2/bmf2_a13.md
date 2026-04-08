# BMF2 — Aula 13: Trocas gasosas e relação ventilação/perfusão

## Relevância Clínica e Acadêmica

Troca gasosa não é detalhe de fisiologia: é o desfecho final da mecânica respiratória e do transporte sanguíneo. Quando a banca apresenta gasometria arterial, saturação, dispneia e imagem pulmonar, ela está testando se você entende como O2 e CO2 atravessam a membrana alvéolo-capilar e como ventilação e perfusão se distribuem no pulmão real.

Na prática clínica, esse raciocínio diferencia condições comuns e graves: asma e DPOC (desigualdade V/Q), pneumonia lobar (shunt regional), tromboembolismo pulmonar (efeito espaço morto) e SDRA (shunt importante). Em prova, quem domina o mecanismo fisiopatológico erra menos mesmo quando o enunciado muda de cenário.

---


### Figura sugerida

**Figura-ID:** `BMF2-A13-F01`

- **Momento:** após a relevância clínica (visualizar o eixo principal da aula no app).
- **O que mostrar:** esquema ou ilustração alinhada ao tema central — produção deve detalhar na arte final.
- **Tipo sugerido:** esquema didático | ilustração estilo atlas | infográfico | foto contextual | outro.
- **Legenda (rascunho):** a fixar junto da imagem final (`data/materiais_figuras.json`).
- **Notas (opcional):** busca em Wikimedia Commons quando fizer sentido; respeitar licença e crédito.

## Difusão alvéolo-capilar e gradientes de pressão parcial

A passagem de gases pela membrana respiratória ocorre por difusão passiva, dirigida por gradientes de pressão parcial. O modelo clássico é a Lei de Fick:

Vgas = (A x D x DeltaP) / T

Em termos clínicos:
- **A (área):** quanto maior a superfície disponível, maior a difusão.
- **D (difusibilidade):** depende da solubilidade e da massa molecular do gás.
- **DeltaP (gradiente):** é a força motriz da troca.
- **T (espessura):** quanto mais espessa a barreira, menor a difusão.

A membrana alvéolo-capilar normal é extremamente fina, o que favorece trocas rápidas. Isso explica por que o sangue capilar costuma atingir equilíbrio com o gás alveolar antes de sair do capilar pulmonar em repouso.

### Gradientes típicos de O2 e CO2

| Compartimento | PO2 (mmHg) | PCO2 (mmHg) | Interpretação fisiológica |
|---|---:|---:|---|
| Ar inspirado seco | ~159 | ~0,3 | Valor teórico antes da umidificação |
| Alvéolo | ~100 | ~40 | Referência para troca eficiente |
| Sangue venoso misto | ~40 | ~46 | Sangue que chega ao capilar pulmonar |
| Sangue arterial | ~95 a 100 | ~40 | Resultado final da hematose |

O gradiente de O2 entre alvéolo e sangue venoso misto é grande, o que favorece difusão. Já o gradiente de CO2 é menor, mas o CO2 difunde com facilidade porque é muito mais solúvel.

> **Dica de Prova:** se a pergunta sugerir "problema de difusão", pense primeiro em queda de O2. Alteração isolada de CO2 por difusão é menos típica no início.

### Por que o CO2 atravessa tão bem?

Apesar de gradiente de pressão menor, o CO2 é aproximadamente 20 vezes mais difusível que o O2. Por isso:
- doença intersticial costuma causar hipoxemia antes de hipercapnia;
- hipercapnia importante sugere também falha ventilatória global;
- em esforço, a limitação de difusão aparece primeiro no O2.

---

## Curva de dissociação Hb-O2 e deslocamentos

A maior parte do O2 circula ligada à hemoglobina. A relação entre PO2 e saturação da Hb é sigmoide, o que permite captação pulmonar eficiente e liberação tecidual responsiva.

### Conceitos centrais da curva

- **Trecho plano (PO2 alta):** mantém saturação mesmo com pequenas quedas de PO2.
- **Trecho íngreme (PO2 tecidual):** pequena queda de PO2 libera muito O2.
- **P50 (~26-27 mmHg):** PO2 na qual a Hb está 50% saturada.

### Deslocamento para a direita vs esquerda

| Deslocamento | Fatores clássicos | Efeito na afinidade | Consequência clínica |
|---|---|---|---|
| Direita | acidose, aumento de CO2, aumento de temperatura, aumento de 2,3-DPG | Diminui afinidade Hb-O2 | Facilita liberação de O2 aos tecidos |
| Esquerda | alcalose, redução de CO2, redução de temperatura, Hb fetal, CO | Aumenta afinidade Hb-O2 | Dificulta entrega tecidual de O2 |

No contexto de prova, lembre-se do efeito Bohr: aumento de CO2 e H+ favorece a descarga de O2 nos tecidos (desvio à direita).

> **Pegadinha:** em intoxicação por monóxido de carbono, a PaO2 pode estar normal, mas o conteúdo total de O2 está reduzido e a curva desloca à esquerda para o O2 remanescente ligado à Hb.

---

## Relação ventilação/perfusão (V/Q)

A relação V/Q expressa o equilíbrio entre ar que chega ao alvéolo (ventilação alveolar) e sangue que chega ao capilar (perfusão). O valor global médio é cerca de 0,8, mas essa média esconde variações regionais fisiológicas importantes.

### Zonas de West e distribuição vertical

Em posição ortostática, ventilação e perfusão aumentam da região apical para a basal. No entanto, a perfusão aumenta proporcionalmente mais, o que cria um gradiente regional de V/Q.

| Zona de West | Relação de pressões | Tendência de V/Q | Característica de gases |
|---|---|---|---|
| Zona 1 (ápice) | PA > Pa > Pv | Alta V/Q (>1) | PO2 mais alta e PCO2 mais baixa |
| Zona 2 (média) | Pa > PA > Pv | Intermediária | Valores próximos da média |
| Zona 3 (base) | Pa > Pv > PA | Baixa V/Q (<1) | PO2 menor e PCO2 maior |

Interpretação prática:
- ápice: relativamente mais ventilado que perfundido;
- base: relativamente mais perfundida que ventilada;
- pulmão normal já apresenta desigualdade V/Q fisiológica.

### Extremos da relação V/Q

- **V/Q = 0:** há perfusão sem ventilação local, equivalente a **shunt**.
- **V/Q muito alto (tendendo ao infinito):** há ventilação sem perfusão local, equivalente a **efeito espaço morto**.

Esses extremos são conceitos-chave para interpretar hipoxemia e resposta ao oxigênio suplementar.

---

## Shunt e efeito espaço morto: interpretação clínica básica

### Shunt (V/Q = 0)

No shunt, parte do sangue atravessa o pulmão sem contato efetivo com alvéolo ventilado. Exemplos:
- atelectasia importante;
- pneumonia com consolidação extensa;
- edema alveolar e SDRA.

Comportamento típico:
- hipoxemia relevante;
- resposta limitada ao aumento de FiO2 quando o shunt é grande.

### Efeito espaço morto (V/Q muito alto)

No efeito espaço morto, há alvéolo ventilado com pouca ou nenhuma perfusão. Exemplo clássico:
- tromboembolismo pulmonar.

Comportamento típico:
- ventilação "desperdiçada";
- aumento do trabalho respiratório;
- hipoxemia por redistribuição V/Q e não apenas pelo território obstruído.

### Tabela comparativa de alto rendimento

| Ponto | Shunt | Efeito espaço morto |
|---|---|---|
| Fisiologia | Perfusão sem ventilação | Ventilação sem perfusão |
| Relação V/Q | 0 | Muito alta (tendendo ao infinito) |
| Exemplo clássico | Pneumonia/atelectasia/SDRA | Tromboembolismo pulmonar |
| Resposta a O2 | Pior resposta quando grave | Em geral melhora parcial |
| Imagem mental | "sangue que não vê ar" | "ar que não vê sangue" |

> **Dica de Prova:** se o enunciado disser "hipoxemia refratária mesmo com alta FiO2", o mecanismo mais provável é shunt importante.

> **Pegadinha:** nem toda hipoxemia com doença pulmonar é shunt puro. Em DPOC e asma, o padrão dominante costuma ser desigualdade V/Q, não shunt anatômico total.

---

## Ponte com a Clínica

Em paciente com dispneia aguda, o raciocínio pode ser sequencial: primeiro, identificar se há insuficiência respiratória; depois, inferir o mecanismo da hipoxemia. Se a clínica e a imagem sugerem consolidação lobar, e a resposta ao O2 é pobre, o componente de shunt é dominante. Se há dor pleurítica súbita, taquicardia e fatores de risco tromboembólicos, pense em efeito de espaço morto por TEP, com aumento de ventilação ineficaz.

Na UTI, esse entendimento orienta conduta: recrutamento alveolar e PEEP buscam reduzir shunt; anticoagulação e reperfusão atacam causa de espaço morto tromboembólico; ajuste ventilatório corrige hipoventilação e CO2. Fisiologia bem feita vira decisão terapêutica mais rápida e segura.

---

## Pontos-Chave para Prova

- Troca gasosa depende de gradiente de pressão parcial e integridade da membrana alvéolo-capilar.
- CO2 difunde mais facilmente que O2, então distúrbio inicial de difusão costuma aparecer como hipoxemia.
- Curva Hb-O2 desloca à direita com acidose, hipercapnia, hipertermia e aumento de 2,3-DPG.
- Relação V/Q varia regionalmente no pulmão e explica parte da diferença entre ápice e base.
- Zonas de West são cobradas para interpretar distribuição de perfusão e ventilação.
- Shunt e efeito espaço morto são extremos fisiopatológicos com implicações distintas na resposta ao O2.

---

## Pré-Prova
> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### Síntese para a prova
A hematose normal depende de três pilares que a banca adora misturar: difusão alvéolo-capilar, transporte pela hemoglobina e acoplamento ventilação/perfusão. Se o enunciado trouxer alteração de membrana (fibrose, edema intersticial), espere queda de O2 antes de retenção de CO2, porque o CO2 é muito mais difusível.

Na curva Hb-O2, grave a lógica dos deslocamentos: direita facilita entrega tecidual de oxigênio (acidose, hipercapnia, febre, 2,3-DPG alto), esquerda dificulta entrega (alcalose, hipotermia, Hb fetal, CO). Esse detalhe aparece em questão de gasometria e também em contexto de sepse, intoxicação e choque.

Quando a pergunta migrar para V/Q, pense em extremos: shunt é perfusão sem ventilação (V/Q = 0) e espaço morto é ventilação sem perfusão (V/Q muito alto). O diferencial prático mais cobrado é a resposta ao O2: shunt importante tende a responder mal, enquanto desigualdade V/Q e espaço morto costumam ter alguma melhora com oxigenoterapia.

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Como diferenciar |
|---|---|---|
| Distúrbio de difusão | Hipoventilação alveolar | Difusão: problema de barreira e gradiente; hipoventilação: queda global da ventilação com retenção de CO2 |
| Desvio à direita da curva Hb-O2 | Desvio à esquerda da curva Hb-O2 | Direita libera O2 ao tecido; esquerda prende O2 na Hb |
| Shunt | Efeito espaço morto | Shunt: sangue sem contato com alvéolo ventilado; espaço morto: alvéolo sem fluxo sanguíneo eficaz |
| V/Q desigual | Shunt maciço | V/Q desigual geralmente melhora com O2; shunt importante pode permanecer refratário |
| Zona 1 apical | Zona 3 basal | Zona 1 com V/Q mais alto; zona 3 com V/Q mais baixo |

### Frase-âncora para não esquecer
> "Se o sangue não encontra ar, é shunt; se o ar não encontra sangue, é espaço morto."
