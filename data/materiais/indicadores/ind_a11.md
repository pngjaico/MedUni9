# IND — Aula 11: Análise Inferencial — Testes de Hipóteses

A análise inferencial é o que permite dizer se o resultado de um estudo aconteceu por "sorte" (acaso) ou se existe um efeito real. Na prova, o tema central é entender o **p-valor**, o **Intervalo de Confiança** e as hipóteses **H0** e **H1**.

Na prática, saber interpretar esses números protege o médico de prescrever remédios que não funcionam ou de acreditar em pesquisas mal feitas.

---

### Figura sugerida

**Figura-ID:** `IND-A11-F01`

- **Momento:** Seção de p-valor.
- **O que mostrar:** O "Corte da Significância": uma régua onde valores abaixo de 0,05 são considerados "Significativos" (o efeito é real) e acima de 0,05 são "Não Significativos" (pode ter sido acaso).
- **Tipo sugerido:** Infográfico didático.
- **Legenda (rascunho):** Interpretando o p-valor: a fronteira da evidência científica.

## 1. As Duas Hipóteses

Toda pesquisa começa com um duelo entre duas ideias:
- **H0 (Hipótese Nula):** Diz que "**não há diferença**". O novo remédio é igual ao antigo. Tudo o que aconteceu foi por acaso.
- **H1 (Hipótese Alternativa):** Diz que "**há diferença**". O remédio novo é melhor (ou diferente) do antigo.

---

## 2. O famoso p-valor

O p-valor é a chance de a **Hipótese Nula (H0)** estar certa.
- **p < 0,05:** A chance de ser acaso é menor que 5%. É muito improvável que seja sorte. Dizemos que o resultado é **Estatisticamente Significativo**. Rejeitamos a **H0**.
- **p > 0,05:** A chance de ser acaso é alta. Não podemos dizer que o remédio funciona. Aceitamos (ou não rejeitamos) a **H0**.

---

## 3. Os Erros do Cientista

Ninguém é perfeito, e a estatística pode falhar:
- **Erro Tipo I (Falso Positivo):** Você diz que o remédio funciona, mas na verdade não funciona. (Rejeitou **H0** sem devia).
- **Erro Tipo II (Falso Negativo):** O remédio é bom, mas seu estudo foi pequeno demais e você disse que ele não funciona. (Não rejeitou **H0** quando devia).

---

## 4. Intervalo de Confiança (IC 95%)

Em vez de dar um número fixo, o **IC** dá uma margem de segurança (ex: o remédio reduz a pressão entre 5 e 15 mmHg).
- **A Regra de Ouro:** Se o intervalo passar pelo **Valor Nulo**, ele **não é significativo**.
  - Para diferenças (ex: perda de peso), o valor nulo é **0**.
  - Para riscos (ex: Risco Relativo), o valor nulo é **1**.

---

## Ponte com a Clínica

Um laboratório lança um remédio novo que promete reduzir o tempo de internação. O estudo diz: "Redução de 2 dias (p = 0,001)". O médico vê que o p-valor é bem menor que 0,05, então o efeito é real (não foi sorte). Mas se o remédio custa 10 mil reais e causa efeitos colaterais graves, a **significância estatística** não garante **relevância clínica**. Nem tudo o que é estatisticamente real vale a pena na vida do paciente.

---

## Pontos-Chave para Prova

- **p < 0,05**: Mágico número da significância.
- **H0**: Hipótese da igualdade (nada mudou).
- **Intervalo de Confiança**: Mostra a precisão do resultado (se for muito largo, o estudo foi pequeno).
- **Poder do Teste**: Chance de achar a diferença se ela existir (estudos grandes têm mais poder).
- **IC inclui 0 ou 1**: Se o IC95% passar pela neutralidade, o resultado não vale para mudar conduta.

---

## Pré-Prova

<ctrl94> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### Síntese para a prova

Para gabaritar Inferência, foque na decisão. 
Se o **p** for menor que **0,05**, você "chuta" a Hipótese Nula (H0) para longe e fica com a Alternativa (H1). Se o Intervalo de Confiança (IC) for de 0,8 a 1,5 em um estudo de risco, ele "abraça" o número **1**, o que significa que o resultado **não é significativo**, não importa o que o p-valor diga.

Cuidado com os erros: **Tipo I** é o erro do otimista (vê efeito onde não tem); **Tipo II** é o erro do pessimista (não vê o efeito que existe, geralmente porque o estudo teve pouca gente — "baixo poder"). Em teste de escolher qual conta fazer: se comparar 2 grupos, use **Teste t**; se for sim/não (proporções), use **Qui-quadrado**.

### Diferenciações que a Uninove adora cobrar

| Conceito A | Conceito B | Diferencial Crítico |
|------------|------------|-----------------|
| **p-valor** | **Relevância Clínica** | Probabilidade estatística vs **Importância para o paciente** |
| **Erro Tipo I** | **Erro Tipo II** | **Falso Positivo** vs **Falso Negativo** |
| **H0 (Nula)** | **H1 (Alternativa)** | Sem diferença vs **Com diferença** |
| **IC 95%** | **p-valor** | Mostra a margem do efeito vs **Mostra apenas se é acaso ou não** |
| **Significativo** | **Inconclusivo** | **p < 0,05** vs **p > 0,05** |

### Frase-âncora para não esquecer

> "Se o p baixou da fronteira do cinco, a H0 balança e a evidência te finca; mas se o IC o nulo abraçou, o dado morreu e a dúvida ficou."