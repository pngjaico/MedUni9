#!/bin/sh
# Wrapper seguro para git filter-repo
# Uso: bash scripts/filter_repo_safe.sh --path quarantine/ --invert-paths --force
#
# git filter-repo bypassa todos os hooks e faz reset --hard no final.
# Este script detecta mudancas nao commitadas, faz stash automatico,
# roda o filter-repo e restaura o stash no final.

set -e

STASHED=0

if ! git diff --quiet HEAD 2>/dev/null; then
  STAMP=$(date +%Y%m%d_%H%M%S)
  echo ""
  echo "[filter-repo-safe] Mudancas detectadas — criando stash automatico..."
  git stash push -m "auto-stash antes de filter-repo $STAMP"
  STASHED=1
  echo "[filter-repo-safe] Stash criado: auto-stash antes de filter-repo $STAMP"
  echo ""
fi

echo "[filter-repo-safe] Rodando: git filter-repo $*"
git filter-repo "$@"

if [ "$STASHED" = "1" ]; then
  echo ""
  echo "[filter-repo-safe] Restaurando stash..."
  git stash pop || echo "[filter-repo-safe] AVISO: stash pop falhou — rode 'git stash list' e 'git stash pop' manualmente."
  echo "[filter-repo-safe] Pronto."
fi
