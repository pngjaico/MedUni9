$ErrorActionPreference = 'Stop'

$utf8NoBom = New-Object System.Text.UTF8Encoding $false
$enc1252 = [System.Text.Encoding]::GetEncoding(1252)
$utf8 = [System.Text.Encoding]::UTF8

$patterns = @(
    'data\materiais\fp3\*.md',
    'materiais\modulo3\fp3\*.md'
)

foreach ($pattern in $patterns) {
    Get-ChildItem $pattern | ForEach-Object {
        $raw = Get-Content $_.FullName -Raw
        $fixed = $raw
        for ($i = 0; $i -lt 4; $i++) {
            $next = $utf8.GetString($enc1252.GetBytes($fixed))
            if ($next -eq $fixed) {
                break
            }
            $fixed = $next
        }
        [System.IO.File]::WriteAllText($_.FullName, $fixed, $utf8NoBom)
        Write-Host "fixed: $($_.Name)"
    }
}

Write-Host 'done'