@echo off
cd /d "C:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app"

REM Uso: run_gerador_materiais.bat [modulo]
REM Exemplo: run_gerador_materiais.bat 2

set MODULO=%1
if "%MODULO%"=="" set MODULO=2

echo [%date% %time%] Iniciando Agente Gerador de Materiais — Módulo %MODULO%...

REM Passo 1: Analisa cobertura atual
python scripts\analisar_cobertura.py --modulo %MODULO%
if errorlevel 1 (
    echo [ERRO] Análise de cobertura falhou. Abortando.
    exit /b 1
)

REM Passo 2: Claude gera os materiais
"C:\Users\Usuario-pc\AppData\Roaming\npm\claude.cmd" --print "Execute o workflow '.agents/workflows/gerador_material_apoio.md'. Gere materiais para as 4 aulas de maior score no módulo %MODULO% de data/agent_logs/status_analisador.json. Use o template em prompts/gerar_materiais_apoio.md. Salve em materiais/modulo%MODULO%/. Crie data/refs/ para cada aula. Faça git commit ao final." >> ".agents\logs\gerador_materiais_%date:~6,4%-%date:~3,2%-%date:~0,2%.txt" 2>&1

REM Passo 3: Re-analisa para confirmar arquivos criados
python scripts\analisar_cobertura.py --modulo %MODULO%

echo [%date% %time%] Gerador de materiais concluído. Log em .agents\logs\
