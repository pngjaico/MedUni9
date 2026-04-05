$ErrorActionPreference = 'Stop'

$root = 'c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\data\materiais\mad2'
$mirror = 'c:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app\materiais\modulo3\mad2'
$utf8NoBom = New-Object System.Text.UTF8Encoding $false

$pairs = @(
    @('padr?o','padrão'),@('cr?nica','crônica'),@('cr?nico','crônico'),@('resist?ncia','resistência'),
    @('Diagn?stico','Diagnóstico'),@('diagn?stico','diagnóstico'),@('Preven??o','Prevenção'),@('preven??o','prevenção'),
    @('Infec??o','Infecção'),@('infec??o','infecção'),@('Infec??es','Infecções'),@('infec??es','infecções'),
    @('Crian?a','Criança'),@('crian?a','criança'),@('cl?ssico','clássico'),@('Cl?nico','Clínico'),@('s?ntese','síntese'),
    @('Doen?a','Doença'),@('doen?a','doença'),@('manifesta??o','manifestação'),@('manifesta??es','manifestações'),
    @('pulm?o','pulmão'),@('cen?rio','cenário'),@('esp?cie','espécie'),@('al?m','além'),@('cut?nea','cutânea'),
    @('efic?cia','eficácia'),@('R?pida','Rápida'),@('Progn?stico','Prognóstico'),@('?rg?os','órgãos'),
    @('lat?ncia','latência'),@('parasit?ria','parasitária'),@('a??o','ação'),@('produ??o','produção'),
    @('cong?nita','congênita'),@('imunol?gico','imunológico'),@('z?ster','zóster'),@('vari?vel','variável'),
    @('gen?tico','genético'),@('avalia??o','avaliação'),@('?nico','único'),@('rela??o','relação'),
    @('secund?ria','secundária'),@('hist?ria','história'),@('p?lvica','pélvica'),@('N?o','Não'),
    @('aten??o','atenção'),@('at?','até'),@('ent?o','então'),@('seguran?a','segurança'),@('import?ncia','importância'),
    @('f?rmaco','fármaco'),@('inflamat?rio','inflamatório'),@('inflamat?ria','inflamatória'),
    @('dissemina??o','disseminação'),@('c?rebro','cérebro'),@('ac?mulo','acúmulo'),@('por?m','porém'),
    @('a?reas','aéreas'),@('t?tulos','títulos'),@('dele??o','deleção'),@('Diferen?a','Diferença'),
    @('frequ?ncia','frequência'),@('linf?cito','linfócito'),@('Linf?citos','Linfócitos'),
    @('Defici?ncia','Deficiência'),@('defici?ncia','deficiência'),@('reposi??o','reposição'),
    @('2?','2ª'),@('3?','3ª'),@('1?','1º')
)

Get-ChildItem "$root\mad2_a*.md" | ForEach-Object {
    $text = Get-Content $_.FullName -Raw -Encoding UTF8
    foreach ($pair in $pairs) {
        $text = $text.Replace($pair[0], $pair[1])
    }

    [System.IO.File]::WriteAllText($_.FullName, $text, $utf8NoBom)
    Copy-Item $_.FullName "$mirror\$($_.Name)" -Force
}

Write-Host 'mad2_encoding_pass2_done'