@echo off
cd /d "C:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app"

REM Uso: run_gerador_flashcards.bat [modulo] [materia]
REM Exemplo: run_gerador_flashcards.bat 2
REM Exemplo: run_gerador_flashcards.bat 1 pmh

set MODULO=%1
set MATERIA=%2

echo [%date% %time%] Iniciando Agente Gerador de Flashcards...

REM Passo 1: Priorização Python
if not "%MATERIA%"=="" (
    python scripts\priorizar_flashcards.py --materia %MATERIA%
) else if not "%MODULO%"=="" (
    python scripts\priorizar_flashcards.py --modulo %MODULO%
) else (
    python scripts\priorizar_flashcards.py
)

if errorlevel 1 (
    echo [ERRO] Priorização falhou. Abortando.
    exit /b 1
)

REM Passo 2: Claude gera os flashcards com lógica de déficit duplo
"C:\Users\Usuario-pc\AppData\Roaming\npm\claude.cmd" --print "Execute o workflow '.agents/workflows/gerador_flashcards.md'. Use a lógica de déficit duplo: calcule o déficit por matéria (módulos 1-4), selecione a matéria com maior déficit, depois selecione 4-5 aulas dessa matéria com maior déficit de flashcards. Meta: ~50 flashcards (arredonda para completar a aula). Siga o guia em prompts/gerar_flashcards.md. Gere relatório em data/agent_logs/pendentes/ — não modifique data/flashcards.json diretamente." >> ".agents\logs\gerador_flashcards_%date:~6,4%-%date:~3,2%-%date:~0,2%.txt" 2>&1

REM Passo 3: Re-prioriza para confirmar
python scripts\priorizar_flashcards.py

echo [%date% %time%] Gerador de flashcards concluído. Log em .agents\logs\
