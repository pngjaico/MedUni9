# Relatorio critico - Ciclo Basico MedGradPlus

Gerado em: 2026-05-12T20:51:41.299Z

## Veredito

O ciclo basico nao esta pronto. A indexacao estrutural de questoes esta melhor do que antes, mas ainda ha falhas suficientes para atrapalhar estudo real: material fora do contrato, espelhos ausentes/divergentes, essenciais semanticamente suspeitas, metatexto em questoes e flashcards abaixo do padrao por aula.

O ponto mais importante: `npm run validate:questoes` passar nao prova que a questao esta na aula certa em termos semanticos. Ele so prova que as chaves existem e batem com o catalogo.

## Escopo

- Modulos auditados: 1 a 4.
- PE fora de remediacao por regra atual: 0 aulas em PE1/PE3/PE4.
- Aulas em escopo real: 263.
- Disciplinas em escopo real: 19.
- Aulas com algum material: 263.

## Painel geral

| Item | Qtd |
| --- | ---: |
| Aulas sem `data/materiais` | 0 |
| Aulas sem espelho usado pelo app | 0 |
| Espelhos divergentes | 0 |
| Materiais que falham contrato | 25 |
| Materiais sem refs | 0 |
| Materiais sem Resumo A4 | 263 |
| Questoes no ciclo basico | 3605 |
| Aulas sem questoes | 0 |
| Aulas com <12 questoes | 0 |
| Aulas sem essenciais | 0 |
| Aulas com 1-11 essenciais | 0 |
| Essenciais suspeitas semanticamente | 240 |
| Questoes com metatexto/template | 9 |
| Questoes sem `categoria` | 189 |
| Questoes com alternativas != 4 | 0 |
| Questoes com `correta` fora do contrato | 0 |
| Questoes com `modulo` divergente | 0 |
| Questoes sem `modulo` | 56 |
| Questoes com explicacao geral fraca | 222 |
| Questoes com explicacao de opcao fraca | 191 |
| IDs de questoes duplicados | 0 |
| Flashcards no ciclo basico | 3156 |
| Aulas sem flashcards | 0 |
| Aulas com <12 flashcards | 0 |
| Flashcards com categoria invalida/ausente | 0 |
| Flashcards com tema invalido/livre | 0 |
| Flashcards com materia divergente do tema | 0 |
| Flashcards com origem invalida/ausente | 0 |
| Flashcards com tags invalidas | 0 |
| Flashcards com dificuldade fora do padrao | 1378 |
| Flashcards com cloze invalido | 0 |
| IDs de flashcards duplicados | 0 |

## Falhas de schema e indexacao

| Falha | Qtd |
| --- | ---: |
| Questao: alternativas != 4 | 0 |
| Questao: `correta` nao numerico 0-3 | 0 |
| Questao: `modulo` divergente da aula | 0 |
| Questao: `modulo` ausente | 56 |
| Questao: explicacao geral fraca | 222 |
| Questao: explicacao por opcao fraca | 191 |
| Questao: metatexto/template | 9 |
| Questao: essencial suspeita sem overlap | 240 |
| Questao: `categoria` ausente | 189 |
| Flashcard: tema livre/invalido | 0 |
| Flashcard: materia divergente do tema | 0 |
| Flashcard: categoria invalida/ausente | 0 |
| Flashcard: origem invalida/ausente | 0 |
| Flashcard: tags invalidas | 0 |
| Flashcard: dificuldade fora do padrao | 1378 |
| Flashcard: cloze invalido | 0 |

## Por modulo

| Modulo | Aulas | Com material | Falha material | Sem questoes | <12 Q | <12 Ess | Sem cards | <12 cards |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 1 | 54 | 54 | 0 | 0 | 0 | 0 | 0 | 0 |
| 2 | 84 | 84 | 25 | 0 | 0 | 0 | 0 | 0 |
| 3 | 71 | 71 | 0 | 0 | 0 | 0 | 0 | 0 |
| 4 | 54 | 54 | 0 | 0 | 0 | 0 | 0 | 0 |

## Por disciplina

| Mod | Materia | Aulas | Material | Q | Ess | Cards | Falha mat | Sem Q | <12 Q | <12 Ess | Sem cards | <12 cards |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 1 | bmf1 | 22 | 22 | 387 | 264 | 264 | 0 | 0 | 0 | 0 | 0 | 0 |
| 1 | pmh | 14 | 14 | 494 | 168 | 168 | 0 | 0 | 0 | 0 | 0 | 0 |
| 1 | semiologia1 | 9 | 9 | 108 | 108 | 108 | 0 | 0 | 0 | 0 | 0 | 0 |
| 1 | sus | 9 | 9 | 108 | 108 | 108 | 0 | 0 | 0 | 0 | 0 | 0 |
| 2 | bcm1 | 21 | 21 | 252 | 252 | 252 | 0 | 0 | 0 | 0 | 0 | 0 |
| 2 | bmf2 | 16 | 16 | 192 | 192 | 192 | 2 | 0 | 0 | 0 | 0 | 0 |
| 2 | ds | 3 | 3 | 36 | 36 | 36 | 3 | 0 | 0 | 0 | 0 | 0 |
| 2 | indicadores | 11 | 11 | 132 | 132 | 132 | 11 | 0 | 0 | 0 | 0 | 0 |
| 2 | mad1 | 24 | 24 | 288 | 288 | 288 | 0 | 0 | 0 | 0 | 0 | 0 |
| 2 | semiologia2 | 9 | 9 | 108 | 108 | 108 | 9 | 0 | 0 | 0 | 0 | 0 |
| 3 | bmf3 | 22 | 22 | 264 | 264 | 264 | 0 | 0 | 0 | 0 | 0 | 0 |
| 3 | fisiopato3 | 15 | 15 | 180 | 180 | 180 | 0 | 0 | 0 | 0 | 0 | 0 |
| 3 | mad2 | 20 | 20 | 240 | 240 | 240 | 0 | 0 | 0 | 0 | 0 | 0 |
| 3 | saude_trabalhador | 8 | 8 | 96 | 96 | 96 | 0 | 0 | 0 | 0 | 0 | 0 |
| 3 | semiologia3 | 6 | 6 | 72 | 72 | 72 | 0 | 0 | 0 | 0 | 0 | 0 |
| 4 | bioestatistica | 12 | 12 | 144 | 144 | 144 | 0 | 0 | 0 | 0 | 0 | 0 |
| 4 | bmf4 | 18 | 18 | 216 | 216 | 216 | 0 | 0 | 0 | 0 | 0 | 0 |
| 4 | fisiopato_farmaco | 14 | 14 | 168 | 168 | 168 | 0 | 0 | 0 | 0 | 0 | 0 |
| 4 | semiologia4 | 10 | 10 | 120 | 120 | 120 | 0 | 0 | 0 | 0 | 0 | 0 |

## Falhas principais

1. **Material ainda e o gargalo mais visivel.** O ciclo basico tem contrato editorial inconsistente. Sem isso, gerar questoes/flashcards por aula vira chute com chave correta.
2. **A categorizacao estrutural das questoes passa, mas a semantica nao esta garantida.** Ha essenciais sem overlap com o material da propria aula e amostras com cara de importacao/geracao mecanica.
3. **`categoria` de questoes esta incompleta.** Hoje isso nao quebra o quiz principal, mas bloqueia filtros melhores e auditoria fina por tipo de cobranca.
4. **Flashcards precisam de normalizacao.** O padrao canonico pede 12 por aula, categoria fechada, origem material/extra e cloze unico; o banco ainda tem lacunas objetivas.
5. **Resumo A4 e refs estao longe de cobertura total.** Se a ideia e produto premium mobile-first, isso aparece como aula incompleta para o aluno.

## Amostras - material com problema

| Mod | Aula | data | app | igual | erros |
| --- | --- | --- | --- | --- | --- |
| 2 | bmf2/bmf2_a15 | ok | ok | sim | em ## Pré-Prova, falta ### Frase-âncora para não esquecer |
| 2 | bmf2/bmf2_a16 | ok | ok | sim | em ## Pré-Prova, falta ### Frase-âncora para não esquecer |
| 2 | ds/ds_a1 | ok | ok | sim | em ## Pré-Prova, falta ### Frase-âncora para não esquecer |
| 2 | ds/ds_a2 | ok | ok | sim | em ## Pré-Prova, falta ### Frase-âncora para não esquecer |
| 2 | ds/ds_a3 | ok | ok | sim | em ## Pré-Prova, falta ### Frase-âncora para não esquecer |
| 2 | indicadores/ind_a1 | ok | ok | sim | em ## Pré-Prova, falta ### Frase-âncora para não esquecer |
| 2 | indicadores/ind_a2 | ok | ok | sim | em ## Pré-Prova, falta ### Frase-âncora para não esquecer |
| 2 | indicadores/ind_a3 | ok | ok | sim | em ## Pré-Prova, falta ### Frase-âncora para não esquecer |
| 2 | indicadores/ind_a4 | ok | ok | sim | em ## Pré-Prova, falta ### Frase-âncora para não esquecer |
| 2 | indicadores/ind_a5 | ok | ok | sim | em ## Pré-Prova, falta ### Frase-âncora para não esquecer |
| 2 | indicadores/ind_a6 | ok | ok | sim | em ## Pré-Prova, falta ### Frase-âncora para não esquecer |
| 2 | indicadores/ind_a7 | ok | ok | sim | em ## Pré-Prova, falta ### Frase-âncora para não esquecer |
| 2 | indicadores/ind_a8 | ok | ok | sim | em ## Pré-Prova, falta ### Frase-âncora para não esquecer |
| 2 | indicadores/ind_a9 | ok | ok | sim | em ## Pré-Prova, falta ### Frase-âncora para não esquecer |
| 2 | indicadores/ind_a10 | ok | ok | sim | em ## Pré-Prova, falta ### Frase-âncora para não esquecer |
| 2 | indicadores/ind_a11 | ok | ok | sim | em ## Pré-Prova, falta ### Frase-âncora para não esquecer |
| 2 | semiologia2/semio2_a1 | ok | ok | sim | em ## Pré-Prova, falta ### Frase-âncora para não esquecer |
| 2 | semiologia2/semio2_a2 | ok | ok | sim | em ## Pré-Prova, falta ### Frase-âncora para não esquecer |
| 2 | semiologia2/semio2_a3 | ok | ok | sim | em ## Pré-Prova, falta ### Frase-âncora para não esquecer |
| 2 | semiologia2/semio2_a4 | ok | ok | sim | em ## Pré-Prova, falta ### Frase-âncora para não esquecer |
| 2 | semiologia2/semio2_a5 | ok | ok | sim | em ## Pré-Prova, falta ### Frase-âncora para não esquecer |
| 2 | semiologia2/semio2_a6 | ok | ok | sim | em ## Pré-Prova, falta ### Frase-âncora para não esquecer |
| 2 | semiologia2/semio2_a7 | ok | ok | sim | em ## Pré-Prova, falta ### Frase-âncora para não esquecer |
| 2 | semiologia2/semio2_a8 | ok | ok | sim | em ## Pré-Prova, falta ### Frase-âncora para não esquecer |
| 2 | semiologia2/semio2_a9 | ok | ok | sim | em ## Pré-Prova, falta ### Frase-âncora para não esquecer |

## Amostras - questoes/essenciais com lacuna

Nenhuma lacuna quantitativa de questoes/essenciais encontrada.

## Amostras - essenciais suspeitas

| ID | Aula | Enunciado |
| --- | --- | --- |
| 346 | bmf1/bmf1_a17 | A glândula submandibular é melhor reconhecida por qual conjunto anatômico-clínico? |
| 347 | bmf1/bmf1_a17 | Qual característica identifica melhor a glândula sublingual? |
| 349 | bmf1/bmf1_a17 | Paciente relata dor abaixo da mandíbula e aumento local que surgem principalmente ao iniciar a refeição. Qual mecanismo explica melhor esse... |
| 439 | bmf1/bmf1_a5 | A maioria dos ossos longos se forma principalmente por: |
| 445 | bmf1/bmf1_a6 | Durante o exame físico, o processo espinhoso mais evidente na base do pescoço costuma ser usado como marco para contar níveis vertebrais. Q... |
| 624 | semiologia1/semio1_a1 | Queimação, choque, formigamento e irradiação em trajeto sugerem mais fortemente dor: |
| 625 | semiologia1/semio1_a1 | Dor máxima sobre tendão patelar, fora da interlinha, reproduzida por extensão resistida do joelho, sugere origem: |
| 629 | semiologia1/semio1_a1 | Dor vertebral com febre, perda de peso, trauma relevante ou déficit neurológico deve levar o examinador a: |
| 630 | semiologia1/semio1_a1 | Na escala MRC, grau 3 significa: |
| 663 | semiologia1/semio1_a5 | A manobra de gaveta anterior no joelho avalia principalmente: |
| 671 | semiologia1/semio1_a5 | Neer e Hawkins são manobras relacionadas principalmente a: |
| 3005 | bmf1/bmf1_a1 | O movimento de aproximar o queixo do tórax, reduzindo o ângulo na região cervical, é chamado de: |
| 3095 | bmf1/bmf1_a12 | Como se chama a fusão de contrações musculares quando estímulos chegam em frequência muito alta? |
| 3175 | bmf1/bmf1_a22 | Qual relação diferencia corretamente omento menor e omento maior? |
| 3385 | sus/sus_a4 | A Lei 8.080/90 é mais bem associada a qual função dentro do SUS? |
| 3406 | sus/sus_a6 | Qual alternativa diferencia corretamente CIB e CIT? |
| 4628 | semiologia3/semio3_a1 | Qual diferença semiológica separa melhor dor visceral de dor somática parietal? |
| 4659 | semiologia3/semio3_a5 | Qual característica é típica da candidíase vulvovaginal? |
| 4664 | semiologia3/semio3_a5 | Quais achados compõem os critérios de Amsel para vaginose bacteriana? |
| 6129 | bmf3/bmf3_a16 | Homem usa prednisona em altas doses há meses e interrompe abruptamente. Dias depois, apresenta hipotensão, astenia e náuseas. Qual mecanism... |

## Amostras - metatexto/template em questoes

| ID | Aula | Enunciado |
| --- | --- | --- |
| 295 | bmf1/bmf1_a12 | No relaxamento muscular, por que o retorno do Ca²⁺ ao retículo é descrito como ‘custo energético’ no texto? |
| 455 | pmh/pmh_a10 | A cartilagem hialina que recobre as superfícies articulares em sinoviais é avascular. Qual mecanismo a conteúdo destaca para nutrição e lub... |
| 462 | pmh/pmh_a10 | A cartilagem madura é predominantemente avascular e aneural. Qual consequência fisiológica a conteúdo destaca como central para nutrição e ... |
| 463 | pmh/pmh_a10 | Na cartilagem hialina adulta, qual colágeno predomina na matriz, conforme o texto? |
| 466 | pmh/pmh_a10 | Qual distinção corresponde ao par condroblasto versus condrócito no material? |
| 470 | pmh/pmh_a10 | Após lesão osteocondral profunda, por que a cartilagem hialina madura raramente se regenera de modo completo, segundo o texto? |
| 475 | pmh/pmh_a10 | Na junção occipito-atlo-axial, qual distinção de movimento predomina, segundo o material? |
| 477 | pmh/pmh_a10 | No joelho, qual é a função biomecânica básica atribuída ao LCA no texto? |
| 481 | pmh/pmh_a10 | A classificação revisão final contrasta menisco medial e lateral. Qual diferença conceitual a conteúdo enfatiza? |

## Amostras - flashcards com lacuna

Nenhuma lacuna quantitativa de flashcards encontrada.

## Ordem de ataque recomendada

1. **Nao gerar conteudo novo ainda.** Primeiro corrigir espelhos e contrato dos materiais que ja existem; senao a questao nova nasce de fonte fraca.
2. **Reclassificar essenciais suspeitas por aula.** Comecar pelas amostras com metatexto e sem overlap; remover/promover apenas depois de leitura do material da aula.
3. **Fechar cobertura minima por aula com material:** exatamente 12 questoes essenciais boas, 12 flashcards, refs e espelho sincronizado.
4. **Normalizar metadados:** `categoria` em questoes se voce quer filtros futuros; flashcards obrigatoriamente com categoria fechada, origem e tags validas.
5. **So depois gerar lacunas reais.** Gaps quantitativos sem QA semantico viram volume falso.

## Arquivos de evidencia

- `data/agent_logs/ciclo_basico_audit.json`
- `data/agent_logs/relatorio_ciclo_basico_2026-05-11.md`
- `data/agent_logs/questoes_audit.json`
- `data/agent_logs/essenciais_alignment_audit.json`
- `scripts/flashcards_audit_report.json`
