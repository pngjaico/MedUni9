@echo off
REM ============================================================
REM  run_aprovar.bat — Revisa e aprova relatórios dos agentes
REM  Uso: run_aprovar.bat           (interativo)
REM       run_aprovar.bat --listar  (só lista)
REM       run_aprovar.bat --todos   (aprova tudo)
REM ============================================================

cd /d "%~dp0.."

echo.
echo ============================================================
echo   APROVADOR DE RELATÓRIOS — MedGradPlus
echo ============================================================
echo.

python scripts/aprovar_pendentes.py %*

echo.
pause
