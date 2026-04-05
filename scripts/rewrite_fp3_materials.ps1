$ErrorActionPreference = 'Stop'

$utf8NoBom = New-Object System.Text.UTF8Encoding $false

function Build-Material {
    param(
        [string]$title,
        [string]$focus,
        [string]$concept,
        [string]$axis1,
        [string]$axis2,
        [string]$axis3,
        [string]$r1a,
        [string]$r1b,
        [string]$r1c,
        [string]$r2a,
        [string]$r2b,
        [string]$r2c,
        [string]$r3a,
        [string]$r3b,
        [string]$r3c,
        [string]$bridge,
        [string]$anchor
    )

@"
# $title

**Disciplina:** Processos FisiopatolÃ³gicos e FarmacoterapÃªuticos 3  
**MÃ³dulo:** 3 | **Tempo de estudo sugerido:** 15 min

---

## RelevÃ¢ncia ClÃ­nica e AcadÃªmica

$focus

## Conceito Central

$concept

## Eixo 1

$axis1

## Eixo 2

$axis2

## Eixo 3

$axis3

## Tabela de IntegraÃ§Ã£o para Prova

| SituaÃ§Ã£o ClÃ­nica | Mecanismo FisiopatolÃ³gico | Dica de RaciocÃ­nio |
|------------------|---------------------------|--------------------|
| $r1a | $r1b | $r1c |
| $r2a | $r2b | $r2c |
| $r3a | $r3b | $r3c |

## Checklist de RaciocÃ­nio ClÃ­nico

- Localize o sistema primariamente acometido.
- Defina se o processo Ã© inflamatÃ³rio, vascular, neoplÃ¡sico ou farmacolÃ³gico.
- Associe o principal sintoma ao mecanismo mais provÃ¡vel.
- Verifique o marcador laboratorial mais Ãºtil para estratificaÃ§Ã£o.
- Diferencie apresentaÃ§Ã£o aguda de padrÃ£o crÃ´nico.
- Identifique o sinal de gravidade que muda conduta imediata.
- Feche primeiro a sÃ­ndrome clÃ­nica, depois o diagnÃ³stico final.

## Mini-Casos de Treino

**Caso 1:** quadro tÃ­pico do tema com exame chave alterado.  
**Como pensar:** identificar sÃ­ndrome dominante, ligar ao mecanismo central e excluir o principal diferencial.

**Caso 2:** evento adverso relacionado a tratamento.  
**Como pensar:** mecanismo da droga, fator de risco do paciente e ajuste terapÃªutico seguro.

**Caso 3:** cenÃ¡rio de piora rÃ¡pida.  
**Como pensar:** priorizar estabilizaÃ§Ã£o, reconhecer gravidade e sÃ³ entÃ£o completar investigaÃ§Ã£o etiolÃ³gica.

## Ponte com a ClÃ­nica

$bridge

## PrÃ©-Prova

> Leia isso 30 minutos antes da prova. Vai direto ao ponto.

### O que vocÃª PRECISA saber

- **SÃ­ndrome dominante:** definir primeiro acelera acerto em questÃ£o clÃ­nica.
- **Mecanismo principal:** relacionar fisiopatologia com achado clÃ­nico e laboratorial.
- **DiferenÃ§a crÃ­tica:** separar as duas entidades mais parecidas no enunciado.
- **Gravidade:** reconhecer quando o caso deixa de ser ambulatorial.
- **Conduta inicial:** estabilizar, investigar direcionado e tratar causa.

### DiferenciaÃ§Ãµes que a Uninove adora cobrar

| Conceito A | Conceito B | Como diferenciar |
|------------|------------|-----------------|
| Processo agudo | Processo crÃ´nico | Agudo descompensa rÃ¡pido; crÃ´nico mostra adaptaÃ§Ã£o e progressÃ£o |
| LesÃ£o funcional | LesÃ£o estrutural | Funcional altera desempenho; estrutural altera tecido/anatomia |
| Achado de triagem | Achado confirmatÃ³rio | Triagem sugere; confirmatÃ³rio define conduta |
| Controle sintomÃ¡tico | ModificaÃ§Ã£o de doenÃ§a | Um alivia sintomas; outro muda evoluÃ§Ã£o natural |

### Frase-Ã¢ncora para nÃ£o esquecer

> "$anchor"
"@
}

$map = @{
    'a1' = @{ 
        title='FP3 â€” Aula 1: Patologia Geral â€” LesÃ£o Celular e Morte Celular';
        focus='LesÃ£o celular e morte celular sustentam praticamente todo o raciocÃ­nio patolÃ³gico da graduaÃ§Ã£o. A banca cobra esse tema para avaliar se o aluno reconhece reversibilidade, irreversibilidade e padrÃ£o de morte em contextos como hipÃ³xia, toxinas e infecÃ§Ã£o.';
        concept='A cÃ©lula adapta-se ao estresse atÃ© um limite. Se o dano excede a capacidade adaptativa, surge lesÃ£o. Persistindo a agressÃ£o, ocorre morte celular por necrose (desorganizada e inflamatÃ³ria) ou apoptose (programada e mais controlada).';
        axis1='AdaptaÃ§Ã£o celular inclui hipertrofia, hiperplasia, atrofia e metaplasia. LesÃ£o reversÃ­vel associa-se a edema celular e disfunÃ§Ã£o de bomba iÃ´nica.';
        axis2='Necrose envolve ruptura de membrana, extravasamento de conteÃºdo e inflamaÃ§Ã£o local. Subtipos (coagulativa, liquefativa, caseosa e gordurosa) tÃªm contextos clÃ¡ssicos.';
        axis3='Apoptose depende de caspases e ocorre em renovaÃ§Ã£o fisiolÃ³gica ou dano ao DNA. Morfologicamente hÃ¡ fragmentaÃ§Ã£o celular com menor inflamaÃ§Ã£o tecidual.';
        r1a='Infarto agudo do miocÃ¡rdio'; r1b='Necrose coagulativa por hipÃ³xia'; r1c='Troponina e dor tÃ­pica reforÃ§am o padrÃ£o';
        r2a='Abscesso bacteriano'; r2b='Necrose liquefativa por enzimas'; r2c='ColeÃ§Ã£o purulenta aponta liquefaÃ§Ã£o';
        r3a='Dano ao DNA por radiaÃ§Ã£o'; r3b='AtivaÃ§Ã£o apoptÃ³tica'; r3c='Menor inflamaÃ§Ã£o que na necrose extensa';
        bridge='Na prÃ¡tica, saber diferenciar necrose de apoptose ajuda a estimar gravidade, tempo de evoluÃ§Ã£o e possibilidade de recuperaÃ§Ã£o funcional do Ã³rgÃ£o.';
        anchor='Quando a adaptaÃ§Ã£o falha, o padrÃ£o de morte celular revela o mecanismo da doenÃ§a.'
    };
    'a2' = @{
        title='FP3 â€” Aula 2: DistÃºrbios HemodinÃ¢micos';
        focus='Edema, trombose, embolia e choque aparecem em diversas especialidades. O tema Ã© altamente cobrado por integrar hemodinÃ¢mica, inflamaÃ§Ã£o e falÃªncia orgÃ¢nica.';
        concept='DistÃºrbios hemodinÃ¢micos decorrem de desequilÃ­brio entre fluxo sanguÃ­neo, permeabilidade vascular, coagulaÃ§Ã£o e perfusÃ£o tecidual.';
        axis1='Edema surge por aumento de pressÃ£o hidrostÃ¡tica, reduÃ§Ã£o de pressÃ£o oncÃ³tica, retenÃ§Ã£o salina ou obstruÃ§Ã£o linfÃ¡tica.';
        axis2='Trombose segue a trÃ­ade de Virchow: lesÃ£o endotelial, estase/turbulÃªncia e hipercoagulabilidade.';
        axis3='Choque Ã© hipoperfusÃ£o sistÃªmica e pode ser hipovolÃªmico, cardiogÃªnico, distributivo ou obstrutivo.';
        r1a='InsuficiÃªncia cardÃ­aca'; r1b='Aumento de pressÃ£o hidrostÃ¡tica'; r1c='Edema perifÃ©rico e congestÃ£o pulmonar';
        r2a='SÃ­ndrome nefrÃ³tica'; r2b='Hipoalbuminemia'; r2c='Edema difuso com proteinÃºria';
        r3a='ImobilizaÃ§Ã£o prolongada'; r3b='TVP e risco de TEP'; r3c='TrÃ­ade de Virchow orienta prevenÃ§Ã£o';
        bridge='No plantÃ£o, reconhecer cedo o tipo de distÃºrbio hemodinÃ¢mico muda desfecho, principalmente em choque e tromboembolismo.';
        anchor='Fluxo inadequado primeiro descompensa funÃ§Ã£o, depois destrÃ³i Ã³rgÃ£o.'
    };
    'a3' = @{
        title='FP3 â€” Aula 3: PrincÃ­pios de Farmacoterapia';
        focus='Essa aula organiza prescriÃ§Ã£o segura e racional. Em prova, os erros mais cobrados sÃ£o dose inadequada, interaÃ§Ã£o medicamentosa e ausÃªncia de ajuste por funÃ§Ã£o renal/hepÃ¡tica.';
        concept='Farmacoterapia racional combina eficÃ¡cia, seguranÃ§a, individualizaÃ§Ã£o e monitorizaÃ§Ã£o.';
        axis1='FarmacocinÃ©tica: absorÃ§Ã£o, distribuiÃ§Ã£o, metabolismo e excreÃ§Ã£o determinam concentraÃ§Ã£o plasmÃ¡tica e risco de toxicidade.';
        axis2='FarmacodinÃ¢mica: potÃªncia, eficÃ¡cia e interaÃ§Ã£o com receptor explicam resposta clÃ­nica e efeitos adversos.';
        axis3='SeguranÃ§a: interaÃ§Ãµes, contraindicaÃ§Ãµes, adesÃ£o e farmacovigilÃ¢ncia sÃ£o parte do tratamento, nÃ£o etapa opcional.';
        r1a='Idoso com DRC e polifarmÃ¡cia'; r1b='DepuraÃ§Ã£o reduzida'; r1c='Ajuste de dose previne toxicidade';
        r2a='Duas drogas com mesmo alvo'; r2b='SomaÃ§Ã£o farmacodinÃ¢mica'; r2c='Maior risco de evento adverso';
        r3a='Droga de janela estreita'; r3b='Pequena variaÃ§Ã£o de dose'; r3c='Necessidade de monitorizaÃ§Ã£o laboratorial';
        bridge='PrescriÃ§Ã£o segura Ã© processo contÃ­nuo: escolher, ajustar, monitorar e reavaliar conforme resposta clÃ­nica.';
        anchor='Boa prescriÃ§Ã£o comeÃ§a no mecanismo e termina no contexto do paciente.'
    };
    'a4' = @{
        title='FP3 â€” Aula 4: Farmacologia do SNA SimpÃ¡tico e SubstÃ¢ncias Vasoativas';
        focus='Tema essencial para urgÃªncia hemodinÃ¢mica e cardiometabÃ³lica. A banca testa receptor alfa/beta com efeito clÃ­nico esperado e efeito adverso previsÃ­vel.';
        concept='FÃ¡rmacos simpÃ¡ticos modulam tÃ´nus vascular, frequÃªncia cardÃ­aca, contratilidade e broncomotricidade por ativaÃ§Ã£o ou bloqueio de receptores adrenÃ©rgicos.';
        axis1='Alfa-1: vasoconstriÃ§Ã£o e aumento de resistÃªncia perifÃ©rica; bloqueio pode causar hipotensÃ£o postural.';
        axis2='Beta-1: cronotropismo/inotropismo; bloqueio reduz consumo de oxigÃªnio miocÃ¡rdico.';
        axis3='Beta-2: broncodilataÃ§Ã£o e vasodilataÃ§Ã£o muscular; bloqueio nÃ£o seletivo pode causar broncoespasmo.';
        r1a='Choque sÃ©ptico'; r1b='Agonismo alfa-1 predominante'; r1c='Noradrenalina para manter PAM';
        r2a='Asma em uso de beta-bloqueador nÃ£o seletivo'; r2b='Bloqueio beta-2'; r2c='Risco de broncoespasmo';
        r3a='HPB sintomÃ¡tica'; r3b='Bloqueio alfa-1 prostÃ¡tico'; r3c='Melhora fluxo urinÃ¡rio';
        bridge='Em cenÃ¡rio crÃ­tico, pensar receptor antes do nome comercial reduz erro de escolha e acelera ajuste terapÃªutico.';
        anchor='No simpÃ¡tico, receptor certo define resposta certa.'
    };
    'a5' = @{
        title='FP3 â€” Aula 5: Farmacologia do SNA ParassimpÃ¡tico';
        focus='Quadros colinÃ©rgicos e anticolinÃ©rgicos sÃ£o clÃ¡ssicos de prova e plantÃ£o. O tema exige reconhecer padrÃ£o clÃ­nico e terapÃªutica especÃ­fica.';
        concept='O sistema parassimpÃ¡tico atua majoritariamente por acetilcolina em receptores muscarÃ­nicos; fÃ¡rmacos podem aumentar ou bloquear essa sinalizaÃ§Ã£o.';
        axis1='Agonismo muscarÃ­nico aumenta secreÃ§Ãµes, motilidade, broncoconstriÃ§Ã£o e pode gerar bradicardia.';
        axis2='AntimuscarÃ­nicos reduzem secreÃ§Ãµes, causam midrÃ­ase, retenÃ§Ã£o urinÃ¡ria e podem provocar delirium em idosos.';
        axis3='IntoxicaÃ§Ã£o por organofosforado causa excesso colinÃ©rgico e requer atropina/pralidoxima.';
        r1a='Organofosforado'; r1b='Excesso de acetilcolina'; r1c='SÃ­ndrome muscarÃ­nica tÃ­pica';
        r2a='DPOC com broncoconstriÃ§Ã£o'; r2b='Bloqueio muscarÃ­nico inalatÃ³rio'; r2c='BroncodilataÃ§Ã£o terapÃªutica';
        r3a='Idoso com confusÃ£o apÃ³s anticolinÃ©rgico'; r3b='Efeito central antimuscarÃ­nico'; r3c='Revisar carga anticolinÃ©rgica';
        bridge='Na prÃ¡tica, reconhecer o toxidrome certo evita atrasos em tratamento de intoxicaÃ§Ã£o e reduz iatrogenia farmacolÃ³gica.';
        anchor='ColinÃ©rgico molha e desacelera; anticolinÃ©rgico seca e acelera.'
    };
    'a6' = @{
        title='FP3 â€” Aula 6: InflamaÃ§Ã£o â€” Morfologia e Reparo Tecidual';
        focus='InflamaÃ§Ã£o e reparo explicam evoluÃ§Ã£o de infecÃ§Ãµes, autoimunidade, cicatrizaÃ§Ã£o e fibrose. A prova cobra cÃ©lulas predominantes e desfecho tecidual.';
        concept='InflamaÃ§Ã£o Ã© resposta protetora ao dano; reparo pode ocorrer por regeneraÃ§Ã£o ou cicatrizaÃ§Ã£o fibrÃ³tica.';
        axis1='InflamaÃ§Ã£o aguda: neutrÃ³filos, exsudato, vasodilataÃ§Ã£o e aumento de permeabilidade.';
        axis2='InflamaÃ§Ã£o crÃ´nica: mononucleares, destruiÃ§Ã£o tecidual persistente e tentativa de reparo simultÃ¢nea.';
        axis3='Reparo envolve angiogÃªnese, fibroblasto, colÃ¡geno e remodelamento; pode evoluir para fibrose patolÃ³gica.';
        r1a='Apendicite aguda'; r1b='Resposta neutrofÃ­lica'; r1c='Dor + leucocitose + exsudato';
        r2a='Hepatite crÃ´nica'; r2b='InflamaÃ§Ã£o mononuclear + fibrose'; r2c='Risco de progressÃ£o para cirrose';
        r3a='Ferida extensa'; r3b='CicatrizaÃ§Ã£o por segunda intenÃ§Ã£o'; r3c='Maior fibrose e tempo de reparo';
        bridge='Compreender fase inflamatÃ³ria e padrÃ£o de reparo ajuda a estimar prognÃ³stico e necessidade de intervenÃ§Ã£o precoce.';
        anchor='InflamaÃ§Ã£o protege no comeÃ§o; reparo inadequado pode limitar funÃ§Ã£o no fim.'
    };
    'a7' = @{
        title='FP3 â€” Aula 7: Anti-inflamatÃ³rios â€” AINEs e Corticoides';
        focus='AINEs e corticoides estÃ£o entre os fÃ¡rmacos mais prescritos e mais associados a eventos adversos evitÃ¡veis. Tema clÃ¡ssico em questÃµes de seguranÃ§a terapÃªutica.';
        concept='AINEs inibem COX e prostaglandinas; corticoides modulam expressÃ£o gÃªnica anti-inflamatÃ³ria de forma ampla.';
        axis1='AINEs: analgesia/anti-inflamaÃ§Ã£o com risco GI, renal e cardiovascular.';
        axis2='Corticoides: alta eficÃ¡cia em inflamaÃ§Ã£o grave, mas com risco metabÃ³lico, Ã³sseo, infeccioso e adrenal.';
        axis3='PrincÃ­pio de uso: menor dose efetiva, menor tempo possÃ­vel e monitorizaÃ§Ã£o dirigida por risco.';
        r1a='AINE em DRC'; r1b='ReduÃ§Ã£o de perfusÃ£o renal'; r1c='Piora de funÃ§Ã£o renal';
        r2a='Prednisona crÃ´nica'; r2b='SupressÃ£o eixo HHA'; r2c='Desmame gradual Ã© obrigatÃ³rio';
        r3a='Paciente com alto risco GI'; r3b='LesÃ£o de mucosa por AINE'; r3c='Avaliar gastroproteÃ§Ã£o';
        bridge='Na prÃ¡tica, nÃ£o basta prescrever anti-inflamatÃ³rio: Ã© preciso estratificar risco e revisar plano conforme evoluÃ§Ã£o.';
        anchor='Anti-inflamatÃ³rio certo sem monitorizaÃ§Ã£o vira iatrogenia previsÃ­vel.'
    };
    'a8' = @{
        title='FP3 â€” Aula 8: Neoplasias â€” CarcinogÃªnese, DisseminaÃ§Ã£o e Estadiamento';
        focus='Neoplasia Ã© conteÃºdo central de patologia e clÃ­nica. A banca cobra progressÃ£o tumoral, vias de metÃ¡stase e lÃ³gica de estadiamento TNM.';
        concept='Tumores malignos combinam proliferaÃ§Ã£o desregulada, invasÃ£o local e potencial metastÃ¡tico.';
        axis1='CarcinogÃªnese multietÃ¡pica: iniciaÃ§Ã£o, promoÃ§Ã£o e progressÃ£o com acÃºmulo de alteraÃ§Ãµes genÃ©ticas.';
        axis2='DisseminaÃ§Ã£o por via linfÃ¡tica, hematogÃªnica ou semeadura cavitÃ¡ria conforme tipo tumoral.';
        axis3='Estadiamento TNM organiza prognÃ³stico e seleÃ§Ã£o terapÃªutica.';
        r1a='NÃ³dulo infiltrativo'; r1b='InvasÃ£o de membrana basal'; r1c='CritÃ©rio de malignidade';
        r2a='Carcinoma mamÃ¡rio'; r2b='Via linfÃ¡tica axilar'; r2c='Linfonodo altera estÃ¡dio';
        r3a='LesÃ£o hepÃ¡tica secundÃ¡ria'; r3b='MetÃ¡stase hematogÃªnica'; r3c='Buscar sÃ­tio primÃ¡rio';
        bridge='No caso oncolÃ³gico, responder trÃªs perguntas resolve metade da prova: onde comeÃ§ou, por onde espalhou e em que estÃ¡dio estÃ¡.';
        anchor='Em cÃ¢ncer, tamanho importa, mas invasÃ£o e metÃ¡stase decidem prognÃ³stico.'
    };
    'a9' = @{
        title='FP3 â€” Aula 9: Farmacoterapia AntineoplÃ¡sica';
        focus='Tratamento antineoplÃ¡sico moderno combina quimioterapia, terapia-alvo e imunoterapia. A prova exige correlaÃ§Ã£o entre classe e toxicidade principal.';
        concept='A escolha terapÃªutica depende de histologia, biomarcador, estÃ¡dio, condiÃ§Ã£o clÃ­nica e objetivo (curativo, neoadjuvante, paliativo).';
        axis1='Quimioterapia citotÃ³xica afeta cÃ©lulas de alta proliferaÃ§Ã£o e causa mielossupressÃ£o, mucosite e alopecia.';
        axis2='Terapia-alvo atua em vias moleculares especÃ­ficas e exige seleÃ§Ã£o por biomarcador.';
        axis3='Imunoterapia pode causar eventos autoimunes (colite, pneumonite, tireoidite) e requer diagnÃ³stico precoce.';
        r1a='Neutropenia febril pÃ³s-quimio'; r1b='MielossupressÃ£o'; r1c='AntibiÃ³tico imediato e estratificaÃ§Ã£o';
        r2a='Tumor HER2 positivo'; r2b='Alvo molecular definido'; r2c='Maior chance de benefÃ­cio com terapia dirigida';
        r3a='Dispneia em uso de anti-PD-1'; r3b='Pneumonite imuno-mediada'; r3c='Suspender e tratar inflamaÃ§Ã£o';
        bridge='Em oncologia, manejo de toxicidade Ã© parte do tratamento. Reconhecer efeito adverso cedo evita interrupÃ§Ã£o desnecessÃ¡ria e protege desfecho.';
        anchor='Tratar cÃ¢ncer Ã© tratar tumor e toxicidade ao mesmo tempo.'
    };
    'a10' = @{
        title='FP3 â€” Aula 10: Patologia das Vias UrinÃ¡rias e Glomerulopatias';
        focus='Tema frequente por integrar sedimento urinÃ¡rio, sÃ­ndrome clÃ­nica e anatomia do trato urinÃ¡rio. A diferenciaÃ§Ã£o entre nefrÃ­tica e nefrÃ³tica Ã© clÃ¡ssica.';
        concept='DoenÃ§as renais variam conforme compartimento acometido: glomÃ©rulo, tÃºbulo-interstÃ­cio ou vias urinÃ¡rias.';
        axis1='SÃ­ndrome nefrÃ­tica: hematÃºria, hipertensÃ£o, oligÃºria e inflamaÃ§Ã£o glomerular.';
        axis2='SÃ­ndrome nefrÃ³tica: proteinÃºria maciÃ§a, edema e hipoalbuminemia por perda de seletividade da barreira.';
        axis3='Vias urinÃ¡rias: infecÃ§Ã£o, litÃ­ase e obstruÃ§Ã£o com repercussÃµes prÃ³prias.';
        r1a='Edema com proteinÃºria elevada'; r1b='SÃ­ndrome nefrÃ³tica'; r1c='Perda proteica Ã© eixo central';
        r2a='HematÃºria + hipertensÃ£o'; r2b='SÃ­ndrome nefrÃ­tica'; r2c='InflamaÃ§Ã£o glomerular predominante';
        r3a='DisÃºria + febre + dor lombar'; r3b='Pielonefrite'; r3c='Processo infeccioso alto';
        bridge='No raciocÃ­nio clÃ­nico, o exame de urina orienta localizaÃ§Ã£o da lesÃ£o e reduz investigaÃ§Ã£o desnecessÃ¡ria.';
        anchor='No rim, localizar o compartimento acometido resolve o diagnÃ³stico.'
    };
    'a11' = @{
        title='FP3 â€” Aula 11: Patologias EndÃ³crinas â€” Suprarrenal e PrÃ³stata';
        focus='A prova combina sÃ­ndromes hormonais da suprarrenal com sintomas urinÃ¡rios da prÃ³stata para testar raciocÃ­nio integrado.';
        concept='Suprarrenal envolve hipo/hipersecreÃ§Ã£o hormonal; prÃ³stata envolve obstruÃ§Ã£o benigna e neoplasia com comportamento invasivo.';
        axis1='InsuficiÃªncia adrenal e hipercortisolismo tÃªm sinais sistÃªmicos e impacto metabÃ³lico importante.';
        axis2='HPB cursa com LUTS (jato fraco, noctÃºria, hesitaÃ§Ã£o, esvaziamento incompleto).';
        axis3='CÃ¢ncer de prÃ³stata pode ser oligoassintomÃ¡tico no inÃ­cio e metastÃ¡tico tardiamente.';
        r1a='HipotensÃ£o + hiponatremia'; r1b='InsuficiÃªncia adrenal'; r1c='Risco de crise adrenal';
        r2a='NoctÃºria e jato fraco'; r2b='ObstruÃ§Ã£o por HPB'; r2c='CondiÃ§Ã£o benigna porÃ©m impactante';
        r3a='Dor Ã³ssea com perda ponderal'; r3b='Neoplasia prostÃ¡tica avanÃ§ada'; r3c='Investigar estadiamento';
        bridge='Separar quadro hormonal sistÃªmico de quadro urinÃ¡rio obstrutivo evita confusÃ£o diagnÃ³stica e direciona conduta.';
        anchor='Na prÃ³stata, benigno obstrui; maligno invade e pode metastatizar.'
    };
    'a12' = @{
        title='FP3 â€” Aula 12: Patologias do Sistema Reprodutor Feminino';
        focus='ConteÃºdo muito cobrado por unir inflamaÃ§Ã£o, rastreamento, hormÃ´nio e oncologia ginecolÃ³gica. Sangramento anormal Ã© ponto-chave.';
        concept='O trato reprodutor feminino apresenta patologias inflamatÃ³rias, funcionais e neoplÃ¡sicas com expressÃ£o clÃ­nica dependente do sÃ­tio anatÃ´mico.';
        axis1='Colo uterino: relaÃ§Ã£o com HPV e progressÃ£o de lesÃ£o intraepitelial para invasÃ£o.';
        axis2='EndomÃ©trio: hiperestÃ­mulo estrogÃªnico sem oposiÃ§Ã£o aumenta risco de hiperplasia e cÃ¢ncer.';
        axis3='OvÃ¡rios/tubas: cistos, ectÃ³pica, DIP e neoplasias no diferencial de dor pÃ©lvica e massa anexial.';
        r1a='Sangramento pÃ³s-menopausa'; r1b='Suspeita endometrial'; r1c='InvestigaÃ§Ã£o obrigatÃ³ria';
        r2a='LesÃ£o cervical persistente'; r2b='InfecÃ§Ã£o por HPV de alto risco'; r2c='Rastreamento reduz progressÃ£o';
        r3a='Dor pÃ©lvica aguda + atraso menstrual'; r3b='EctÃ³pica no diferencial'; r3c='Primeiro excluir urgÃªncia';
        bridge='A abordagem clÃ­nica comeÃ§a por localizaÃ§Ã£o anatÃ´mica, fase hormonal e presenÃ§a de sinal de gravidade.';
        anchor='No sistema reprodutor feminino, contexto hormonal + localizaÃ§Ã£o orientam diagnÃ³stico.'
    };
    'a13' = @{
        title='FP3 â€” Aula 13: Patologia da Mama â€” Benigna e Maligna';
        focus='NÃ³dulo mamÃ¡rio Ã© cenÃ¡rio clÃ¡ssico de prova. O desafio Ã© distinguir padrÃ£o benigno comum de achado suspeito de malignidade.';
        concept='DoenÃ§as da mama variam de alteraÃ§Ãµes benignas funcionais a carcinoma invasivo com potencial metastÃ¡tico.';
        axis1='Achados benignos: cistos simples, mastalgia cÃ­clica, fibroadenoma em mulheres jovens.';
        axis2='Achados suspeitos: nÃ³dulo endurecido e fixo, retraÃ§Ã£o cutÃ¢nea, linfonodo axilar suspeito.';
        axis3='Rastreamento e diagnÃ³stico por imagem + biÃ³psia direcionam manejo e prognÃ³stico.';
        r1a='NÃ³dulo mÃ³vel e regular'; r1b='PadrÃ£o benigno provÃ¡vel'; r1c='Correlacionar idade e imagem';
        r2a='NÃ³dulo irregular com retraÃ§Ã£o'; r2b='Suspeita de invasÃ£o'; r2c='BiÃ³psia define conduta';
        r3a='Descarga papilar sanguinolenta'; r3b='LesÃ£o ductal relevante'; r3c='InvestigaÃ§Ã£o especializada';
        bridge='EstratificaÃ§Ã£o de risco com mÃ©todo evita tanto atraso diagnÃ³stico quanto intervenÃ§Ã£o excessiva.';
        anchor='Mama suspeita nÃ£o se acompanha no escuro: confirma-se com investigaÃ§Ã£o adequada.'
    };
    'a14' = @{
        title='FP3 â€” Aula 14: Farmacoterapia do Sistema GenitourinÃ¡rio Masculino';
        focus='Aula prÃ¡tica para LUTS, HPB e disfunÃ§Ã£o erÃ©til. A prova integra farmacologia de receptor com perfil do paciente e contraindicaÃ§Ãµes.';
        concept='Tratamento GU masculino exige alinhar mecanismo de droga, sintoma predominante e risco cardiovascular.';
        axis1='HPB: alfa-bloqueadores aliviam sintomas rapidamente; 5-ARI reduzem volume prostÃ¡tico a mÃ©dio prazo.';
        axis2='DisfunÃ§Ã£o erÃ©til: inibidores de PDE-5 dependem de estÃ­mulo sexual e sÃ£o contraindicados com nitratos.';
        axis3='Ajuste terapÃªutico deve considerar hipotensÃ£o, interaÃ§Ãµes e adesÃ£o.';
        r1a='LUTS por HPB'; r1b='Bloqueio alfa-1'; r1c='Melhora fluxo urinÃ¡rio';
        r2a='PDE-5 + nitrato'; r2b='VasodilataÃ§Ã£o excessiva'; r2c='HipotensÃ£o grave';
        r3a='PrÃ³stata volumosa persistente'; r3b='Bloqueio hormonal de DHT'; r3c='BenefÃ­cio em progressÃ£o selecionada';
        bridge='No GU masculino, prescriÃ§Ã£o eficaz depende de expectativa realista e monitorizaÃ§Ã£o de efeitos hemodinÃ¢micos.';
        anchor='No GU masculino, escolha farmacolÃ³gica Ã© sintoma + risco, nÃ£o receita fixa.'
    };
    'a15' = @{
        title='FP3 â€” Aula 15: Farmacoterapia do Sistema GenitourinÃ¡rio Feminino';
        focus='ConteÃºdo relevante por envolver ITU recorrente, dor pÃ©lvica, terapia hormonal e seguranÃ§a em diferentes ciclos de vida.';
        concept='Farmacoterapia GU feminina deve ser individualizada por faixa etÃ¡ria, perfil hormonal, comorbidades e risco trombÃ³tico.';
        axis1='ITU recorrente: antibiÃ³tico orientado por contexto clÃ­nico e estratÃ©gia preventiva quando indicado.';
        axis2='Dor pÃ©lvica e sÃ­ndromes funcionais exigem abordagem multimodal e metas terapÃªuticas funcionais.';
        axis3='Terapias hormonais demandam estratificaÃ§Ã£o prÃ©via de risco cardiovascular e tromboembÃ³lico.';
        r1a='ITU recorrente pÃ³s-coito'; r1b='ColonizaÃ§Ã£o ascendente recorrente'; r1c='PrevenÃ§Ã£o individualizada';
        r2a='Terapia hormonal em paciente de risco'; r2b='Potencial trombÃ³tico'; r2c='Avaliar risco-benefÃ­cio antes de iniciar';
        r3a='Dor pÃ©lvica crÃ´nica'; r3b='Mecanismo multifatorial'; r3c='Plano longitudinal melhora desfecho';
        bridge='No cuidado GU feminino, tratar apenas episÃ³dio agudo Ã© insuficiente: prevenÃ§Ã£o e reavaliaÃ§Ã£o contÃ­nua sÃ£o parte da terapÃªutica.';
        anchor='No GU feminino, conduta eficaz Ã© contÃ­nua, individualizada e preventiva.'
    }
}

foreach ($k in $map.Keys) {
    $m = $map[$k]
    $content = Build-Material -title $m.title -focus $m.focus -concept $m.concept -axis1 $m.axis1 -axis2 $m.axis2 -axis3 $m.axis3 -r1a $m.r1a -r1b $m.r1b -r1c $m.r1c -r2a $m.r2a -r2b $m.r2b -r2c $m.r2c -r3a $m.r3a -r3b $m.r3b -r3c $m.r3c -bridge $m.bridge -anchor $m.anchor

    [System.IO.File]::WriteAllText("data\materiais\fp3\fp3_$k.md", $content, $utf8NoBom)
    [System.IO.File]::WriteAllText("materiais\modulo3\fp3\fp3_$k.md", $content, $utf8NoBom)
}

Write-Host "Reescrita FP3 concluÃ­da em ambos os caminhos."