# Guia de Flashcards de Elite (AnKing Style) — MedGradPlus

Este guia define o padrão-ouro para flashcards médicos, focado em **retenção de longo prazo** e **alta velocidade de revisão**.

## 1. O Princípio da Informação Mínima (Atomização)
Cada card deve testar **exatamente um fato**. Se um card exige que o aluno lembre de duas coisas independentes, ele deve ser dividido em dois cards.

### Errado (Não-Atomizado):
> **Frente:** Quais são as 3 camadas da glândula suprarrenal e o que cada uma produz?
> **Verso:** Glomerulosa (Aldosterona), Fasciculada (Cortisol) e Reticulada (Androgênios).
> *Problema: Exige 6 fatos simultâneos.*

### Certo (AnKing Style):
> **Card 1:** A camada mais externa da glândula suprarrenal é a {{c1::zona glomerulosa}}.
> **Card 2:** O principal mineralocorticoide produzido pela zona glomerulosa é a {{c1::aldosterona}}.

## 2. Padrão Cloze Deletion (Omissão de Palavras)
Use `{{c1::...}}` para omitir apenas a **palavra-chave**. O resto da frase deve fornecer o contexto necessário para que a resposta seja unívoca.

### Regras de Ouro:
- **3 Segundos:** O aluno deve conseguir ler e responder o card em no máximo 3 segundos.
- **Pista Contextual Zero:** Não use palavras que entreguem a resposta (ex: "O hormônio *insulina* é produzido por {{c1::células beta}}").
- **Destaque:** Use negrito na frente para destacar o sujeito da frase.

## 3. Explicação (A Ponte Clínica)
O campo `explicacao` não deve repetir o verso. Ele deve fornecer:
1.  **Mecanismo:** O "porquê" daquela resposta.
2.  **Mnemônico:** Uma ajuda para memorizar.
3.  **Aplicação Clínica:** Como isso cai na prova da Uninove ou como aparece no hospital.

## 4. Estratégia de Dificuldade
- **Nível 1:** Anatomia pura, Nomenclatura, Definição.
- **Nível 2:** Fisiologia (Mecanismo), Correlação direta.
- **Nível 3:** Vinheta Clínica Curta (ex: "Paciente hipertenso com hipocalemia → suspeitar de hiper{{c1::aldosteronismo}}").

## 5. Exemplo de JSON "Perfeito"
```json
{
  "id": 10001,
  "materia": "bmf3",
  "tema": "bmf3_a12",
  "frente": "A **Taxa de Filtração Glomerular (TFG)** é regulada pelo feedback tubuloglomerular através da {{c1::mácula densa}}.",
  "verso": "mácula densa",
  "explicacao": "A mácula densa (no TCD) detecta a concentração de NaCl. Se baixa, sinaliza a arteríola aferente para dilatar, mantendo a TFG.",
  "dificuldade": 2,
  "tags": ["rim", "tfg", "macula-densa"]
}
```

## 6. Proibições Absolutas
- Não use "O conteúdo diz...".
- Não use listas (mais de 2 itens no verso).
- Não gere cards com frentes maiores que 100 caracteres.
- Não deixe a `explicacao` vazia em cards de dificuldade 2 e 3.
