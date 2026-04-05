$ErrorActionPreference = 'Stop'

$root = 'c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app'
$utf8NoBom = New-Object System.Text.UTF8Encoding $false

$map = @(
    @('Cl?nica','Clínica'), @('cl?nica','clínica'), @('cl?nico','clínico'), @('cl?nicos','clínicos'),
    @('Acad?mica','Acadêmica'), @('acad?mica','acadêmica'), @('Relev?ncia','Relevância'),
    @('M?dulo','Módulo'), @('Agress?o','Agressão'), @('Sist?micos','Sistêmicos'), @('S?ntese','Síntese'),
    @('Pr?-Prova','Pré-Prova'), @('Diferencia??es','Diferenciações'), @('Frase-?ncora','Frase-âncora'),
    @('voc?','você'), @('n?o','não'), @('s?o','são'), @('tamb?m','também'), @('ap?s','após'), @('est?','está'),
    @('h?','há'), @('tr?s','três'), @('doen?a','doença'), @('doen?as','doenças'), @('les?o','lesão'), @('les?es','lesões'),
    @('infec??o','infecção'), @('infec??es','infecções'), @('inflama??o','inflamação'), @('altera??o','alteração'),
    @('altera??es','alterações'), @('apresenta??o','apresentação'), @('manifesta??es','manifestações'),
    @('complica??es','complicações'), @('preven??o','prevenção'), @('sele??o','seleção'), @('ativa??o','ativação'),
    @('redu??o','redução'), @('rejei??o','rejeição'), @('transmiss?o','transmissão'), @('ades?o','adesão'),
    @('vacina??o','vacinação'), @('exposi??o','exposição'), @('cronifica??o','cronificação'), @('gesta??o','gestação'),
    @('secre??o','secreção'), @('predisposi??o','predisposição'), @('aus?ncia','ausência'), @('pr?tica','prática'),
    @('l?gica','lógica'), @('racioc?nio','raciocínio'), @('diagn?stico','diagnóstico'), @('progn?stico','prognóstico'),
    @('espec?fica','específica'), @('espec?fico','específico'), @('s?ndrome','síndrome'), @('sist?mica','sistêmica'),
    @('sist?mico','sistêmico'), @('imunossupress?o','imunossupressão'), @('epidemiol?gico','epidemiológico'),
    @('terap?utica','terapêutica'), @('terap?utico','terapêutico'), @('antibi?tico','antibiótico'),
    @('antibi?ticos','antibióticos'), @('v?rus','vírus'), @('bact?rias','bactérias'), @('Bact?ria','Bactéria'),
    @('c?lula','célula'), @('c?lulas','células'), @('linf?citos','linfócitos'), @('neutr?filos','neutrófilos'),
    @('fag?citos','fagócitos'), @('fag?cito','fagócito'), @('t?mica','tímica'), @('ant?geno','antígeno'),
    @('ant?genos','antígenos'), @('pr?prio','próprio'), @('gen?tica','genética'), @('sa?de','saúde'),
    @('p?blica','pública'), @('m?ltiplos','múltiplos'), @('perif?rica','periférica'), @('defici?ncia','deficiência'),
    @('Imunodefici?ncia','Imunodeficiência'), @('imunodefici?ncias','imunodeficiências'), @('prim?ria','primária'),
    @('Cl?ssico','Clássico'), @('cl?ssica','clássica'), @('in?cio','início'), @('r?pida','rápida'), @('prov?vel','provável'),
    @('vigil?ncia','vigilância'), @('Estrongiloid?ase','Estrongiloidíase'), @('Hansen?ase','Hanseníase'),
    @('Rub?ola','Rubéola'), @('Ten?ase','Teníase'), @('Coest?mulo','Coestímulo'), @('Imunol?gica','Imunológica'),
    @('?L','µL'), @('2? vez','2ª vez'), @('3? vez','3ª vez'), @('1? ano','1º ano'), @(' ? ',' — ')
)

$files = Get-ChildItem "$root\data\materiais\mad2\mad2_a*.md" | Sort-Object Name

foreach ($f in $files) {
    $txt = Get-Content $f.FullName -Raw -Encoding UTF8
    foreach ($pair in $map) {
        $txt = $txt.Replace($pair[0], $pair[1])
    }

    [System.IO.File]::WriteAllText($f.FullName, $txt, $utf8NoBom)
    Copy-Item -Path $f.FullName -Destination "$root\materiais\modulo3\mad2\$($f.Name)" -Force
}

Write-Host 'mad2_encoding_fix_done'