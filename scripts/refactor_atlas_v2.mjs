import fs from 'fs';
import path from 'path';

const atlasPath = 'data/histologia_atlas.json';
const outputPath = 'data/histologia_atlas_v2.json';

const rawData = JSON.parse(fs.readFileSync(atlasPath, 'utf8'));

// Define the 3 main categories
const CATEGORIES = [
  { id: 'cat_geral', titulo: 'Histologia Geral (Tecidos)', cor: '#10B981', icone: 'muscle' },
  { id: 'cat_especial', titulo: 'Histologia Especial (Sistemas)', cor: '#8B5CF6', icone: 'bone' },
  { id: 'cat_outros', titulo: 'Embriologia e Citologia', cor: '#F59E0B', icone: 'heart' }
];

// Mapping current systems to new systems and categories
const SYSTEM_MAPPING = {
  'Tecidos fundamentais e pele': { cat: 'cat_geral', names: ['Epitélio', 'Tecido conjuntivo', 'Pele'] },
  'Sistema esquelético (osso, cartilagem)': { cat: 'cat_geral', names: ['Tecido Ósseo e Cartilaginoso'] },
  'Sistema articular (cartilagem, sinóvia)': { cat: 'cat_geral', names: ['Tecido Ósseo e Cartilaginoso'] },
  'Sistema muscular (tecido muscular)': { cat: 'cat_geral', names: ['Tecido Muscular'] },
  'Sistema circulatório (vasos, sangue, coração)': { cat: 'cat_especial', names: ['Sistema Cardiovascular', 'Sangue e Linfa'] },
  'Sistema respiratório (vias e parênquima)': { cat: 'cat_especial', names: ['Sistema Respiratório'] },
  'Sistema digestório (tubo e anexos)': { cat: 'cat_especial', names: ['Sistema Digestório'] },
  'Sistema urinário (rins e vias)': { cat: 'cat_especial', names: ['Sistema Urinário'] },
  'Sistema genital masculino': { cat: 'cat_especial', names: ['Sistema Reprodutor Masculino'] },
  'Sistema genital feminino': { cat: 'cat_especial', names: ['Sistema Reprodutor Feminino'] },
  'Sistema neural (encéfalo, medula e nervos)': { cat: 'cat_especial', names: ['Sistema Nervoso', 'Sistema Endócrino', 'Órgãos dos Sentidos'] }
};

// Organ deduction map
const ORGAN_RULES = [
  { pattern: /Fígado/i, organ: 'Fígado' },
  { pattern: /Vesícula biliar/i, organ: 'Vesícula biliar' },
  { pattern: /Língua/i, organ: 'Língua' },
  { pattern: /Esôfago/i, organ: 'Esôfago' },
  { pattern: /Estômago/i, organ: 'Estômago' },
  { pattern: /Duodeno/i, organ: 'Duodeno' },
  { pattern: /Jejuno-íleo/i, organ: 'Jejuno-íleo' },
  { pattern: /Pâncreas/i, organ: 'Pâncreas' },
  { pattern: /Intestino Grosso/i, organ: 'Intestino Grosso' },
  { pattern: /Apêndice/i, organ: 'Apêndice' },
  { pattern: /Adrenal|Supra-renal/i, organ: 'Adrenal' },
  { pattern: /Hipófise/i, organ: 'Hipófise' },
  { pattern: /Tireoide/i, organ: 'Tireoide' },
  { pattern: /Paratireoide/i, organ: 'Paratireoide' },
  { pattern: /Pele/i, organ: 'Pele' },
  { pattern: /Coração/i, organ: 'Coração' },
  { pattern: /Artéria/i, organ: 'Artéria' },
  { pattern: /Veia/i, organ: 'Veia' },
  { pattern: /Rim/i, organ: 'Rim' },
  { pattern: /Ureter/i, organ: 'Ureter' },
  { pattern: /Bexiga/i, organ: 'Bexiga' },
  { pattern: /Testículo/i, organ: 'Testículo' },
  { pattern: /Epidídimo/i, organ: 'Epidídimo' },
  { pattern: /Próstata/i, organ: 'Próstata' },
  { pattern: /Pênis/i, organ: 'Pênis' },
  { pattern: /Ovário/i, organ: 'Ovário' },
  { pattern: /Tuba uterina/i, organ: 'Tuba uterina' },
  { pattern: /Útero/i, organ: 'Útero' },
  { pattern: /Vagina/i, organ: 'Vagina' },
  { pattern: /Mama/i, organ: 'Glândula Mamária' },
  { pattern: /Placenta/i, organ: 'Placenta' },
  { pattern: /Cordão umbilical/i, organ: 'Cordão Umbilical' },
  { pattern: /Cérebro/i, organ: 'Cérebro' },
  { pattern: /Cerebelo/i, organ: 'Cerebelo' },
  { pattern: /Medula espinhal/i, organ: 'Medula Espinhal' },
  { pattern: /Nervo/i, organ: 'Nervo Periférico' },
  { pattern: /Gânglio/i, organ: 'Gânglio' },
  { pattern: /Olho/i, organ: 'Olho' },
  { pattern: /Orelha/i, organ: 'Orelha' },
  { pattern: /Traqueia/i, organ: 'Traqueia' },
  { pattern: /Pulmão/i, organ: 'Pulmão' },
  { pattern: /Laringe/i, organ: 'Laringe' },
  { pattern: /Linfonodo|Gânglio linfático/i, organ: 'Linfonodo' },
  { pattern: /Baço/i, organ: 'Baço' },
  { pattern: /Timo/i, organ: 'Timo' },
  { pattern: /Tonsila/i, organ: 'Tonsila' }
];

function getOrgan(lamina) {
  for (const rule of ORGAN_RULES) {
    if (rule.pattern.test(lamina.titulo)) return rule.organ;
  }
  // Try previous metadata
  if (lamina.auditoriaLegenda && lamina.auditoriaLegenda.tituloSecaoH2) {
    for (const rule of ORGAN_RULES) {
      if (rule.pattern.test(lamina.auditoriaLegenda.tituloSecaoH2)) return rule.organ;
    }
  }
  return 'Geral / Outros';
}

const newHierarchy = {
  ...rawData,
  updatedAt: new Date().toISOString(),
  categorias: CATEGORIES.map(c => ({ ...c, sistemas: [] }))
};

// Distribute current data into the new hierarchy
rawData.sistemas.forEach(oldSys => {
  const mapping = SYSTEM_MAPPING[oldSys.titulo];
  if (!mapping) return;

  const targetCategory = newHierarchy.categorias.find(c => c.id === mapping.cat);
  
  oldSys.divisoes.forEach(oldDiv => {
    // Determine which "new system" it belongs to
    let targetSysName = mapping.names[0];
    if (oldDiv.titulo === 'Citologia' || oldDiv.titulo === 'Embriologia') {
      const outCat = newHierarchy.categorias.find(c => c.id === 'cat_outros');
      let sys = outCat.sistemas.find(s => s.titulo === oldDiv.titulo);
      if (!sys) {
        sys = { id: `sys_${oldDiv.id}`, titulo: oldDiv.titulo, orgaos: [] };
        outCat.sistemas.push(sys);
      }
      // Group by organ
      oldDiv.laminas.forEach(lam => {
        const organName = getOrgan(lam);
        let org = sys.orgaos.find(o => o.titulo === organName);
        if (!org) {
          org = { id: `org_${lam.id}_${Math.random().toString(36).substr(2, 5)}`, titulo: organName, laminas: [] };
          sys.orgaos.push(org);
        }
        org.laminas.push(lam);
      });
      return;
    }

    // Special case for neural/endocrine/senses
    if (oldSys.titulo === 'Sistema neural (encéfalo, medula e nervos)') {
      if (oldDiv.titulo === 'Endócrinas') targetSysName = 'Sistema Endócrino';
      else if (oldDiv.titulo === 'Órgãos dos sentidos') targetSysName = 'Órgãos dos Sentidos';
      else targetSysName = 'Sistema Nervoso';
    }

    // Special case for fundamental tissues
    if (oldSys.titulo === 'Tecidos fundamentais e pele') {
      if (oldDiv.titulo === 'Epitélio') targetSysName = 'Epitélio';
      else if (oldDiv.titulo === 'Tecido conjuntivo') targetSysName = 'Tecido conjuntivo';
      else if (oldDiv.titulo === 'Pele') targetSysName = 'Tegumentar';
    }

    let sys = targetCategory.sistemas.find(s => s.titulo === targetSysName);
    if (!sys) {
      sys = { id: `sys_${targetSysName.toLowerCase().replace(/\s+/g, '_')}`, titulo: targetSysName, orgaos: [] };
      targetCategory.sistemas.push(sys);
    }

    // Group by organ
    oldDiv.laminas.forEach(lam => {
      const organName = getOrgan(lam);
      let org = sys.orgaos.find(o => o.titulo === organName);
      if (!org) {
        org = { id: `org_${lam.id}_${Math.random().toString(36).substr(2, 5)}`, titulo: organName, laminas: [] };
        sys.orgaos.push(org);
      }
      org.laminas.push(lam);
    });
  });
});

// Final cleanup: remove redundant division levels if I want, but I'll stick to the requested structure.
// Sort everything
newHierarchy.categorias.forEach(cat => {
  cat.sistemas.sort((a,b) => a.titulo.localeCompare(b.titulo));
  cat.sistemas.forEach(sys => {
    sys.orgaos.sort((a,b) => a.titulo.localeCompare(b.titulo));
  });
});

fs.writeFileSync(outputPath, JSON.stringify(newHierarchy, null, 2));
console.log('Restructuring complete: ' + outputPath);
