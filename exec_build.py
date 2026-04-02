#!/usr/bin/env python
# -*- coding: utf-8 -*-
import sys
import os

# Add project root to path
sys.path.insert(0, r'C:\Users\Usuario-pc\Desktop\Aplicativo Uni9\meduni9-app')

try:
    from build_materias import build
    print("✅ Módulo build_materias importado com sucesso!")
    build()
    print("\n✅ Build concluído!")
except Exception as e:
    print(f"❌ Erro: {type(e).__name__}: {e}")
    import traceback
    traceback.print_exc()
