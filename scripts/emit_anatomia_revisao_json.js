/**
 * One-shot generator for data/anatomia_revisao.json from embedded structure.
 * Run: node scripts/emit_anatomia_revisao_json.js
 */
const fs = require('fs');
const path = require('path');

const out = path.join(__dirname, '..', 'data', 'anatomia_revisao.json');

const sistemas = [
  {
    id: 'locomotor',
    name: 'Sistema Locomotor',
    icone: 'locomotor',
    color: '#F59E0B',
    subsections: [
      {
        title: 'Esqueleto Axial',
        regiao: 'cabeca_tronco',
        blocks: [
          {
            type: 'hub',
            title: 'Coluna vertebral (ordem cefálico → caudal)',
            center: '33 vértebras',
            branches: [
              { label: 'C1–C7', hint: 'cervicais' },
              { label: 'T1–T12', hint: 'torácicas' },
              { label: 'L1–L5', hint: 'lombares' },
              { label: 'S1–S5', hint: 'sacro fundido' },
              { label: 'Co1–Co4', hint: 'cóccix fundido' },
            ],
          },
          {
            type: 'cards',
            items: [
              { q: 'Ossos do crânio (8)', a: 'Frontal · Parietal ×2 · Temporal ×2 · Occipital · Esfenoide · Etmoide' },
              { q: 'Ossos da face (14)', a: 'Maxilar ×2 · Zigomático ×2 · Nasal ×2 · Lacrimal ×2 · Palatino ×2 · Corneto inferior ×2 · Vômer · Mandíbula' },
              { q: 'Coluna vertebral (33 vértebras)', a: '7 cervicais · 12 torácicas · 5 lombares · 5 sacrais (fundidas) · 4 coccígeas (fundidas)' },
              { q: 'Caixa torácica', a: '12 pares de costelas: 7 verdadeiras (1–7) · 3 falsas (8–10) · 2 flutuantes (11–12) + Esterno (manúbrio, corpo, processo xifoide)' },
            ],
          },
        ],
      },
      {
        title: 'Esqueleto Apendicular Superior',
        regiao: 'membro_superior',
        blocks: [
          {
            type: 'sequence',
            title: 'Cadeia óssea ombro → mão (ordem)',
            steps: [
              { label: 'Clavícula + Escápula', detail: 'cintura escapular' },
              { label: 'Úmero', detail: 'braço' },
              { label: 'Rádio + Ulna', detail: 'antebraço (lateral / medial)' },
              { label: '8 carpos', detail: 'punho' },
              { label: '5 metacarpos', detail: 'palma' },
              { label: '14 falanges', detail: 'dedos' },
            ],
          },
          {
            type: 'cards',
            items: [
              { q: 'Ombro → mão', a: 'Clavícula · Escápula → Úmero → Rádio + Ulna → 8 carpos + 5 metacarpos + 14 falanges' },
              { q: 'Manguito rotador (SIPS)', a: 'Supraespinhoso (abdução) · Infraespinhoso (rot. externa) · Pequeno redondo (rot. externa) · Subescapular (rot. interna)' },
              { q: 'Articulação do ombro', a: 'Glenoumeral: esferóide. A + móvel do corpo = menos estável. Luxação anterior é a mais comum' },
            ],
          },
        ],
      },
      {
        title: 'Esqueleto Apendicular Inferior',
        regiao: 'membro_inferior',
        blocks: [
          {
            type: 'cards',
            items: [
              { q: 'Quadril → pé', a: 'Coxal (ílio + ísquio + púbis) → Fêmur → Patela + Tíbia + Fíbula → 7 tarsos + 5 metatarsos + 14 falanges' },
              { q: 'Articulação do joelho', a: 'Meniscos medial/lateral + LCA (anterior) + LCP (posterior) + ligamentos colaterais medial/lateral' },
              { q: 'Nervo ciático', a: 'L4–S3. Maior nervo do corpo. Divide-se na fossa poplítea → fibular comum + tibial' },
            ],
          },
        ],
      },
      {
        title: 'Músculos Importantes',
        regiao: null,
        blocks: [
          {
            type: 'cards',
            items: [
              { q: 'Músculos da mastigação (4)', a: 'Masseter · Temporal · Pterigóideo medial · Pterigóideo lateral — todos pelo n. Trigêmeo (V3)' },
              { q: 'Quadríceps femoral', a: '4 cabeças: Reto femoral + Vasto lateral + Vasto medial + Vasto intermédio → tendão patelar → extensão do joelho (n. femoral)' },
              { q: 'Tríceps sural', a: 'Gastrocnêmio (2 cabeças) + Sóleo → tendão calcâneo (Aquiles) → flexão plantar (n. tibial)' },
              { q: 'Diafragma pélvico', a: 'Levantador do ânus (pubococcígeo + iliococcígeo) + Isquiococcígeo — suporte dos órgãos pélvicos' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'cardiovascular',
    name: 'Sistema Cardiovascular',
    icone: 'cardiovascular',
    color: '#EF4444',
    subsections: [
      {
        title: 'Coração — Câmaras e Válvulas',
        regiao: 'torax',
        blocks: [
          {
            type: 'hub',
            title: 'Câmaras e fluxo típico',
            center: 'Coração',
            branches: [
              { label: 'AD / VD', hint: 'direito — sangue venoso' },
              { label: 'AE / VE', hint: 'esquerdo — sangue arterial' },
              { label: 'Válvulas AV', hint: 'tricúspide · mitral' },
              { label: 'Semilunares', hint: 'pulmonar · aórtica' },
            ],
          },
          {
            type: 'cards',
            items: [
              { q: 'Câmaras', a: '4 câmaras: AD e VD (coração direito — sangue venoso) · AE e VE (esquerdo — sangue arterial). VE tem parede mais espessa' },
              { q: 'Válvulas AV', a: 'Mitral (bicúspide) → AE para VE | Tricúspide → AD para VD. "Mitral é a única com 2 folhetos"' },
              { q: 'Válvulas semilunares', a: 'Aórtica → VE para Aorta | Pulmonar → VD para A. pulmonar. Ambas com 3 cúspides' },
              { q: 'Coronárias', a: 'CD: nutre VD + parede inferior do VE · CE → DA (parede anterior) + CX (lateral). "Artéria do IAM anterior = DA"' },
            ],
          },
        ],
      },
      {
        title: 'Circulação',
        regiao: null,
        blocks: [
          {
            type: 'sequence',
            title: 'Circulação pulmonar (menor)',
            steps: [
              { label: 'VD', detail: 'ejeção' },
              { label: 'Tronco da artéria pulmonar', detail: '' },
              { label: 'Leito capilar alveolar', detail: 'hematose' },
              { label: 'Veias pulmonares (4)', detail: 'oxigenado' },
              { label: 'AE', detail: 'entrada no coração esquerdo' },
            ],
          },
          {
            type: 'sequence',
            title: 'Circulação sistêmica (maior)',
            steps: [
              { label: 'VE', detail: 'ejeção' },
              { label: 'Aorta → artérias', detail: 'distribuição' },
              { label: 'Capilares', detail: 'troca com tecidos' },
              { label: 'Veias → VCS / VCI', detail: 'retorno' },
              { label: 'AD', detail: 'entrada no coração direito' },
            ],
          },
          {
            type: 'cards',
            items: [
              { q: 'Circulação pulmonar (menor)', a: 'VD → A. pulmonar → pulmão → V. pulmonares (4) → AE. Única veia que carrega sangue arterial!' },
              { q: 'Circulação sistêmica (maior)', a: 'VE → Aorta → órgãos → VCS / VCI → AD' },
              { q: 'Sistema porta hepático', a: 'V. porta: drena intestinos + baço para o fígado antes da circulação geral. Hipertensão porta → varizes esofágicas' },
            ],
          },
        ],
      },
      {
        title: 'Grandes Vasos',
        regiao: null,
        blocks: [
          {
            type: 'cards',
            items: [
              { q: 'Arco aórtico (3 ramos)', a: '① Tronco braquiocefálico (→ subclávea D + carótida D) · ② Carótida comum E · ③ Subclávea E' },
              { q: 'Aorta abdominal', a: 'Tronco celíaco (estômago/fígado/baço) · AMS (intestino delgado) · AMI (intestino grosso) → bifurca em ilíacas comuns em L4' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'respiratorio',
    name: 'Sistema Respiratório',
    icone: 'respiratorio',
    color: '#06B6D4',
    subsections: [
      {
        title: 'Vias Aéreas',
        regiao: 'cabeca_pescoco',
        blocks: [
          {
            type: 'sequence',
            title: 'Percurso do ar (resumo)',
            steps: [
              { label: 'Fossas nasais / boca', detail: 'entrada' },
              { label: 'Faringe', detail: 'naso- / oro- / laringo-' },
              { label: 'Laringe', detail: 'voz; epiglote na deglutição' },
              { label: 'Traqueia', detail: 'carina T4–T5' },
              { label: 'Brônquios → pulmões', detail: 'árvore até alvéolos' },
            ],
          },
          {
            type: 'cards',
            items: [
              { q: 'Via aérea superior', a: 'Fossas nasais → Nasofaringe → Orofaringe → Laringofaringe → Laringe (epiglote cobre na deglutição)' },
              { q: 'Traqueia', a: '16–20 anéis cartilaginosos em "C". Bifurca-se na carina (T4–T5). Brônquio D mais vertical → corpo estranho tende ao D' },
              { q: 'Árvore brônquica', a: 'Traqueia → 2 brônquios principais → lobares → segmentares → bronquíolos terminais → alveolares → alvéolos' },
            ],
          },
        ],
      },
      {
        title: 'Pulmões e Pleura',
        regiao: 'torax',
        blocks: [
          {
            type: 'cards',
            items: [
              { q: 'Lobos pulmonares', a: 'D: 3 lobos (superior, médio, inferior) · E: 2 lobos (superior, inferior) + língula (homóloga ao lobo médio)' },
              { q: 'Pleura', a: 'Visceral (aderida ao pulmão) + Parietal (parede torácica). Espaço pleural com pressão negativa. Pneumotórax → colapso pulmonar' },
              { q: 'Hematose', a: 'CO₂ e O₂ trocados nos alvéolos (as. pulmonares). As. brônquicas nutrem o parênquima (circulação sistêmica)' },
            ],
          },
        ],
      },
      {
        title: 'Músculos da Respiração',
        regiao: 'torax',
        blocks: [
          {
            type: 'cards',
            items: [
              { q: 'Diafragma', a: 'Principal músculo da inspiração. Inervado pelo N. frênico (C3–C5). "C3, C4, C5 keeps the diaphragm alive"' },
              { q: 'Músculos acessórios', a: 'Inspiração forçada: escalenos, ECM, peitorais · Expiração ativa: reto abdominal, oblíquos abdominais' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'nervoso',
    name: 'Sistema Nervoso',
    icone: 'nervoso',
    color: '#8B5CF6',
    subsections: [
      {
        title: 'Encéfalo',
        regiao: 'cabeca',
        blocks: [
          {
            type: 'sequence',
            title: 'Eixo encéfalo (caudal → rostral simplificado)',
            steps: [
              { label: 'Bulbo', detail: 'centros vitais' },
              { label: 'Ponte', detail: 'ponte + cerebelo aderente' },
              { label: 'Mesencéfalo', detail: '' },
              { label: 'Diencéfalo', detail: 'tálamo · hipotálamo' },
              { label: 'Telencéfalo', detail: 'córtex · núcleos da base' },
            ],
          },
          {
            type: 'cards',
            items: [
              { q: 'Divisões', a: 'Telencéfalo (córtex, núcleos da base) · Diencéfalo (tálamo, hipotálamo) · Mesencéfalo · Ponte · Bulbo · Cerebelo' },
              { q: 'Lobos cerebrais', a: 'Frontal (motor, personalidade, linguagem) · Parietal (sensitivo) · Temporal (audição, memória) · Occipital (visão)' },
              { q: 'Hipotálamo', a: 'Centro autonômico: temperatura, fome, sede, sono, ritmo circadiano. Controla a hipófise via eixo hipotálamo-hipofisário' },
              { q: 'Cerebelo', a: 'Coordenação e equilíbrio. Lesão ipsilateral (mesmo lado do cerebelo). Ataxia, disdiadococinesia' },
            ],
          },
        ],
      },
      {
        title: 'Nervos Cranianos (12 pares)',
        regiao: 'cabeca_pescoco',
        blocks: [
          {
            type: 'cards',
            items: [
              { q: 'I – IV', a: 'I Olfatório (olfato) · II Óptico (visão) · III Oculomotor (ptose, midríase) · IV Troclear (oblíquo superior — olha pra baixo ao medializar)' },
              { q: 'V – VIII', a: 'V Trigêmeo (sensib. face + mastigação) · VI Abducente (reto lateral) · VII Facial (mímica + paladar ant.) · VIII Vestibulococlear' },
              { q: 'IX – XII', a: 'IX Glossofaríngeo · X Vago (parassimpático visceral) · XI Acessório (ECM, trapézio) · XII Hipoglosso (língua)' },
            ],
          },
        ],
      },
      {
        title: 'Plexos e SNA',
        regiao: null,
        blocks: [
          {
            type: 'cards',
            items: [
              { q: 'Plexo braquial (C5–T1)', a: 'Erb-Duchenne: C5–C6 ("garçom pedindo gorjeta") · Klumpke: C8–T1 (mão em garra). Raízes → Troncos → Divisões → Fascículos → Ramos' },
              { q: 'Plexo lombossacral', a: 'Femoral (L2–L4): quadríceps · Obturatório (L2–L4): adutores · Ciático (L4–S3): posterior da coxa, perna e pé' },
              { q: 'SNA Simpático vs Parassimpático', a: 'Simpático: T1–L2 (luta/fuga) — usa gânglios para-vertebrais · Parassimpático: III, VII, IX, X + S2–S4 (repouso/digestão)' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'digestorio',
    name: 'Sistema Digestório',
    icone: 'digestorio',
    color: '#10B981',
    subsections: [
      {
        title: 'Trato Gastrointestinal',
        regiao: 'abdome',
        blocks: [
          {
            type: 'sequence',
            title: 'Trato GI (ordem cefálico → caudal)',
            steps: [
              { label: 'Boca → faringe', detail: '' },
              { label: 'Esôfago', detail: '3 estreitamentos' },
              { label: 'Estômago', detail: 'fundus · corpo · antro' },
              { label: 'Duodeno → jejuno → íleo', detail: 'delgado' },
              { label: 'Ceco → cólon → reto → canal anal', detail: 'grosso' },
            ],
          },
          {
            type: 'cards',
            items: [
              { q: 'Boca → Estômago', a: 'Boca → Faringe → Esôfago (25 cm, 3 estreitamentos) → Estômago (fundus, corpo, antro, piloro). EEI → refluxo DRGE' },
              { q: 'Intestino Delgado (6–7 m)', a: 'Duodeno (25 cm, retroperitoneal, fixo) · Jejuno (2/5) · Íleo (3/5). Principal local de absorção de nutrientes' },
              { q: 'Intestino Grosso (1,5 m)', a: 'Ceco (apêndice: ponto de McBurney) → Cólon ascendente → transverso → descendente → sigmoide → Reto → Canal anal' },
            ],
          },
        ],
      },
      {
        title: 'Órgãos Anexos',
        regiao: 'abdome',
        blocks: [
          {
            type: 'cards',
            items: [
              { q: 'Fígado', a: '4 lobos anatômicos (D, E, caudado, quadrado). Funções: síntese proteica, bile, glicogênio, detox. Irrigação: 25% A. hepática + 75% V. porta' },
              { q: 'Pâncreas', a: 'Retroperitoneal. Endócrino: ilhotas de Langerhans (α = glucagon, β = insulina). Exócrino: lipase, amilase, tripsina — via ducto de Wirsung' },
              { q: 'Vesícula biliar', a: 'Armazena/concentra bile. Ducto cístico + Ducto hepático comum = Ducto colédoco → Ampola de Vater (esfíncter de Oddi) no duodeno' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'urinario',
    name: 'Sistema Urinário',
    icone: 'urinario',
    color: '#3B82F6',
    subsections: [
      {
        title: 'Rins',
        regiao: 'abdome',
        blocks: [
          {
            type: 'sequence',
            title: 'Néfron — ordem do filtrado (simplificado)',
            steps: [
              { label: 'Glomérulo', detail: 'filtração' },
              { label: 'Túbulo contorno proximal', detail: 'reabsorção maciça' },
              { label: 'Alça de Henle', detail: 'concentração' },
              { label: 'TCD', detail: 'ajuste fino' },
              { label: 'Ducto coletor', detail: 'água sob ADH' },
            ],
          },
          {
            type: 'cards',
            items: [
              { q: 'Posição e relações', a: 'Retroperitoneal. Rim D mais baixo (fígado acima). Hilo: veia (anterior) → artéria → pelve renal (posterior) — mnemônico: VAP' },
              { q: 'Néfron (unidade funcional)', a: 'Glomérulo → TCP → Alça de Henle (desc. fina / asc. espessa) → TCD → Ducto coletor. ~1 milhão/rim. TFG normal: ~120 mL/min' },
              { q: 'Função tubular resumida', a: 'TCP: reabsorve 67% do filtrado (glicose, Na, HCO₃) · Alça: concentra urina · TCD: regulação fina de Na, K, H (aldosterona, PTH)' },
            ],
          },
        ],
      },
      {
        title: 'Vias Urinárias',
        regiao: 'pelve',
        blocks: [
          {
            type: 'sequence',
            title: 'Drenagem rim → exterior',
            steps: [
              { label: 'Pelve renal', detail: '' },
              { label: 'Ureter', detail: '3 estreitamentos' },
              { label: 'Bexiga', detail: 'trígono' },
              { label: 'Uretra', detail: 'F curta / M longa' },
            ],
          },
          {
            type: 'cards',
            items: [
              { q: 'Ureter', a: '25–30 cm, retroperitoneal. 3 estreitamentos fisiológicos: JUP + cruzamento dos vasos ilíacos + JUV → locais de impactação de cálculo' },
              { q: 'Bexiga e Uretra', a: 'Trígono: 2 óstios ureterais + colo vesical. Uretra F ≈ 4 cm · M ≈ 20 cm (prostática → membranosa → esponjosa)' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'endocrino',
    name: 'Sistema Endócrino',
    icone: 'endocrino',
    color: '#EC4899',
    subsections: [
      {
        title: 'Glândulas e Hormônios',
        regiao: null,
        blocks: [
          {
            type: 'cards',
            items: [
              { q: 'Hipófise — adeno (anterior)', a: 'GH · TSH · ACTH · LH · FSH · Prolactina. Controlada pelos hormônios hipotalâmicos liberadores/inibidores' },
              { q: 'Hipófise — neuro (posterior)', a: 'ADH (vasopressina — reabsorção de água) · Ocitocina (contração uterina + ejeção de leite). Produzidos no hipotálamo!' },
              { q: 'Tireoide', a: 'T3 (ativo) e T4 (pró-hormônio). Regulam metabolismo basal. Células parafoliculares C → Calcitonina (↓Ca²⁺)' },
              { q: 'Paratireoide (4 corpúsculos)', a: 'PTH: ↑Ca²⁺ sérico — ↑reabsorção óssea, ↑reabsorção renal, ↑ativação vit. D. Oposto à calcitonina' },
              { q: 'Suprarrenal (adrenal)', a: 'Córtex: Zona Glomerular (aldosterona) · Z. Fasciculada (cortisol) · Z. Reticular (andrógenos). Medula: adrenalina + noradrenalina' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'linfatico',
    name: 'Sistema Linfático',
    icone: 'linfatico',
    color: '#6366F1',
    subsections: [
      {
        title: 'Órgãos Linfoides',
        regiao: null,
        blocks: [
          {
            type: 'cards',
            items: [
              { q: 'Timo', a: 'Mediastino anterior superior. Maturação de linfócitos T. Maior na infância, involui na puberdade. Timoma → associado à miastenia gravis' },
              { q: 'Baço', a: 'Hipocôndrio esquerdo. Polpa vermelha (destruição de hemácias) + Polpa branca (linfócitos B e T). Maior órgão linfoide do corpo' },
              { q: 'Linfonodos', a: 'Filtram linfa. Cadeias principais: cervical, axilar, inguinal, mediastinal, retroperitoneal. Gânglio de Virchow (supraclavicular E) → neoplasia abdominal' },
              { q: 'Ducto torácico', a: 'Maior vaso linfático. Drena toda a linfa abaixo do diafragma + hemicorpo E superior → Ângulo venoso E (subclávia E + jugular interna E)' },
            ],
          },
        ],
      },
    ],
  },
];

const payload = {
  version: 1,
  updatedAt: new Date().toISOString(),
  sistemas,
};

fs.writeFileSync(out, JSON.stringify(payload, null, 2), 'utf8');
console.log('Wrote', out);
