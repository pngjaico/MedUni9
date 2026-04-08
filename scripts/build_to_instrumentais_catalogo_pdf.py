"""Gera data/to_instrumentais.json com 34 itens alinhados ao catálogo págs. 2–11 do PDF."""
from __future__ import annotations

import json
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

# Ordem = catálogo visual; imagens = extract_manifest atual (mesa_pPPP_imgQQ_*)
ROWS: list[tuple[str, str, str, str, dict | None]] = [
    ("cabo_bisturi_no3", "Cabo de bisturi nº 3", "Diérese", "/data/instrumentais/mesa_p002_img01_xr118.png", {"id": "cabo_bisturi_no4", "nome": "Cabo de bisturi nº 4"}),
    ("cabo_bisturi_no4", "Cabo de bisturi nº 4", "Diérese", "/data/instrumentais/mesa_p002_img02_xr119.png", {"id": "cabo_bisturi_no3", "nome": "Cabo de bisturi nº 3"}),
    ("tesoura_mayo_curva", "Tesoura de Mayo curva", "Diérese", "/data/instrumentais/mesa_p002_img03_xr121.png", {"id": "tesoura_mayo_reta", "nome": "Tesoura de Mayo reta"}),
    ("tesoura_mayo_reta", "Tesoura de Mayo reta", "Diérese", "/data/instrumentais/mesa_p002_img04_xr116.png", {"id": "tesoura_mayo_curva", "nome": "Tesoura de Mayo curva"}),
    ("tesoura_metzenbaum_curva", "Tesoura de Metzenbaum curva", "Diérese", "/data/instrumentais/mesa_p003_img01_xr128.png", {"id": "tesoura_metzenbaum_reta", "nome": "Tesoura de Metzenbaum reta"}),
    ("tesoura_metzenbaum_reta", "Tesoura de Metzenbaum reta", "Diérese", "/data/instrumentais/mesa_p003_img02_xr126.png", {"id": "tesoura_metzenbaum_curva", "nome": "Tesoura de Metzenbaum curva"}),
    ("pinca_kelly_curva", "Pinça de Kelly curva", "Hemostasia", "/data/instrumentais/mesa_p004_img01_xr134.png", {"id": "pinca_crille_curva", "nome": "Pinça de Crille curva"}),
    ("pinca_kelly_reta", "Pinça de Kelly reta", "Hemostasia", "/data/instrumentais/mesa_p004_img02_xr133.png", {"id": "pinca_kelly_curva", "nome": "Pinça de Kelly curva"}),
    ("pinca_crille_curva", "Pinça de Crille curva", "Hemostasia", "/data/instrumentais/mesa_p004_img03_xr138.png", {"id": "pinca_kelly_curva", "nome": "Pinça de Kelly curva"}),
    ("pinca_crille_reta", "Pinça de Crille reta", "Hemostasia", "/data/instrumentais/mesa_p004_img04_xr136.png", {"id": "pinca_crille_curva", "nome": "Pinça de Crille curva"}),
    ("pinca_halsted_curva", "Pinça de Halsted curva (mosquito)", "Hemostasia", "/data/instrumentais/mesa_p005_img01_xr146.png", {"id": "pinca_halsted_reta", "nome": "Pinça de Halsted reta"}),
    ("pinca_halsted_reta", "Pinça de Halsted reta (mosquito)", "Hemostasia", "/data/instrumentais/mesa_p005_img02_xr148.png", {"id": "pinca_halsted_curva", "nome": "Pinça de Halsted curva"}),
    ("pinca_rochester_curva", "Pinça de Rochester curva", "Hemostasia", "/data/instrumentais/mesa_p005_img03_xr144.png", {"id": "pinca_rochester_reta", "nome": "Pinça de Rochester reta"}),
    ("pinca_rochester_reta", "Pinça de Rochester reta", "Hemostasia", "/data/instrumentais/mesa_p005_img04_xr142.png", {"id": "pinca_rochester_curva", "nome": "Pinça de Rochester curva"}),
    ("pinca_kocher_curva", "Pinça de Kocher curva", "Hemostasia", "/data/instrumentais/mesa_p006_img01_xr151.png", {"id": "pinca_kocher_reta", "nome": "Pinça de Kocher reta"}),
    ("pinca_kocher_reta", "Pinça de Kocher reta", "Hemostasia", "/data/instrumentais/mesa_p006_img02_xr153.png", {"id": "pinca_kocher_curva", "nome": "Pinça de Kocher curva"}),
    ("pinca_anatomica", "Pinça anatômica", "Síntese e pinças auxiliares", "/data/instrumentais/mesa_p007_img01_xr159.png", {"id": "pinca_adson_sem_dente", "nome": "Pinça de Adson sem dente"}),
    ("pinca_dente_de_rato", 'Pinça "dente de rato"', "Síntese e pinças auxiliares", "/data/instrumentais/mesa_p007_img02_xr161.png", {"id": "pinca_anatomica", "nome": "Pinça anatômica"}),
    ("pinca_adson_com_dente", "Pinça de Adson com dente", "Síntese e pinças auxiliares", "/data/instrumentais/mesa_p007_img03_xr163.png", {"id": "pinca_adson_sem_dente", "nome": "Pinça de Adson sem dente"}),
    ("pinca_adson_sem_dente", "Pinça de Adson sem dente", "Síntese e pinças auxiliares", "/data/instrumentais/mesa_p007_img04_xr165.png", {"id": "pinca_adson_com_dente", "nome": "Pinça de Adson com dente"}),
    ("porta_agulhas_hegar", "Porta-agulhas Hegar", "Síntese e pinças auxiliares", "/data/instrumentais/mesa_p008_img01_xr169.png", {"id": "porta_agulhas_mathieu", "nome": "Porta-agulhas Mathieu"}),
    ("porta_agulhas_mathieu", "Porta-agulhas Mathieu", "Síntese e pinças auxiliares", "/data/instrumentais/mesa_p008_img02_xr171.png", {"id": "porta_agulhas_hegar", "nome": "Porta-agulhas Hegar"}),
    ("cuba_rim", "Cuba-rim", "Instrumental complementar", "/data/instrumentais/mesa_p009_img01_xr175.png", None),
    ("grampo_backhaus", "Grampo / pinça Backhaus", "Instrumental complementar", "/data/instrumentais/mesa_p009_img02_xr176.png", {"id": "pinca_mixter", "nome": "Pinça de Mixter"}),
    ("pinca_cheron", "Pinça Cheron", "Instrumental complementar", "/data/instrumentais/mesa_p009_img03_xr178.png", {"id": "pinca_mixter", "nome": "Pinça de Mixter"}),
    ("pinca_mixter", "Pinça de Mixter", "Instrumental complementar", "/data/instrumentais/mesa_p009_img04_xr180.png", {"id": "pinca_cheron", "nome": "Pinça Cheron"}),
    ("pinca_foerster_curva", "Pinça de Foerster curva", "Instrumental complementar", "/data/instrumentais/mesa_p010_img01_xr184.png", {"id": "pinca_foerster_reta", "nome": "Pinça de Foerster reta"}),
    ("pinca_foerster_reta", "Pinça de Foerster reta", "Instrumental complementar", "/data/instrumentais/mesa_p010_img02_xr186.png", {"id": "pinca_foerster_curva", "nome": "Pinça de Foerster curva"}),
    ("pinca_allis", "Pinça de Allis", "Instrumental complementar", "/data/instrumentais/mesa_p010_img03_xr187.png", {"id": "pinca_coprostase", "nome": "Pinça de Coprostase"}),
    ("pinca_coprostase", "Pinça de Coprostase", "Instrumental complementar", "/data/instrumentais/mesa_p010_img04_xr189.png", {"id": "pinca_allis", "nome": "Pinça de Allis"}),
    ("afastador_finochietto", "Afastador de Finochietto", "Afastadores", "/data/instrumentais/mesa_p011_img01_xr193.png", {"id": "afastador_farabeuf", "nome": "Afastador de Farabeuf"}),
    ("afastador_farabeuf", "Afastador de Farabeuf", "Afastadores", "/data/instrumentais/mesa_p011_img02_xr194.png", {"id": "afastador_finochietto", "nome": "Afastador de Finochietto"}),
    ("afastador_gosset", "Afastador de Gosset", "Afastadores", "/data/instrumentais/mesa_p011_img03_xr196.png", {"id": "afastador_doyen", "nome": "Afastador de Doyen"}),
    ("afastador_doyen", "Afastador de Doyen", "Afastadores", "/data/instrumentais/mesa_p011_img04_xr197.png", {"id": "afastador_gosset", "nome": "Afastador de Gosset"}),
]

TEXT = {
    "cabo_bisturi_no3": (
        "Encaixar lâminas descartáveis; o nº 3 é mais fino e usual em mãos menores ou trabalho delicado.",
        "Haste mais curta que o nº 4; encaixe para lâmina descartável.",
        "Linha do tabuleiro junto ao campo.",
        "Três é mais miúdo que quatro.",
        "Cabo **nº 3** — não confundir com **nº 4** nem com tesoura.",
    ),
    "cabo_bisturi_no4": (
        "Encaixar lâminas; o nº 4 oferece melhor alavancagem e encaixe maior para lâminas largas.",
        "Haste mais larga e robusta que o nº 3.",
        "Junto ao nº 3 na preparação da incisão.",
        "Quatro alavanca mais.",
        "Cabo **nº 4** — comparar **largura** com o nº 3.",
    ),
    "tesoura_mayo_curva": (
        "Corte de tecidos mais densos; variante curva para contornos.",
        "Tesoura forte; lâmina curva.",
        "Zona de corte central.",
        "Mayo forte; curva segue o arco.",
        "Mayo **curva** vs **reta** — olhe a **curvatura**.",
    ),
    "tesoura_mayo_reta": (
        "Corte de fáscia e tecidos resistentes com lâminas retas.",
        "Robusta; ponta reta.",
        "Ao lado da Mayo curva.",
        "Mayo reta corta reto.",
        "Mayo **reta** — irmã da curva, **sem** arco na ponta.",
    ),
    "tesoura_metzenbaum_curva": (
        "Dissecção delicada; ponta curva para planos areolares.",
        "Lâminas longas e finas; ponta curva.",
        "Perto do campo em dissecção.",
        "Metz longa e leve; curva.",
        "Metzenbaum **curva** — mais longa que Mayo.",
    ),
    "tesoura_metzenbaum_reta": (
        "Dissecção em linha reta com menos trauma que tesouras grossas.",
        "Fina e longa; ponta reta.",
        "Com a Metz curva no tabuleiro.",
        "Metz reta para túnel direto.",
        "Metzenbaum **reta** vs Mayo **curta** e grossa.",
    ),
    "pinca_kelly_curva": (
        "Hemostasia provisória; ranhuras só nos 2/3 superiores da ponta.",
        "Curva; sulcos parciais (até ~2/3).",
        "Hemostáticas da primeira linha.",
        "Kelly parcial ≠ Crille total.",
        "Kelly **curva** — ranhura **não** cobre a ponta toda (vs Crille).",
    ),
    "pinca_kelly_reta": (
        "Hemostasia provisória; ponta reta; mesma lógica de ranhura parcial.",
        "Reta; sulcos nos 2/3 superiores.",
        "Com outras Kelly/Crille.",
        "Kelly reta = base comum de prova.",
        "Kelly **reta** vs **Crille reta** (ranhura em toda ponta).",
    ),
    "pinca_crille_curva": (
        "Oclusão firme; ranhuras em **toda** a face interna da ponta.",
        "Curva; traumatismo contínuo na ponta.",
        "Após Kelly na ordem do catálogo.",
        "Crille = ranhura até o fim.",
        "Crille **curva** — ranhura **completa** (diferente da Kelly).",
    ),
    "pinca_crille_reta": (
        "Hemostasia com pegamento contínuo na ponta reta.",
        "Reta; sulcos em toda extensão.",
        "Com Crille curva.",
        "Crille reta não é Kelly reta.",
        "Crille **reta** — confundir com Kelly só pela **extensão das ranhuras**.",
    ),
    "pinca_halsted_curva": (
        "Hemostasia em vasinhos e pele fina; a menor das hemostáticas do catálogo.",
        "Muito pequena (mosquito); curva.",
        "Pequena cirurgia / primeiro plano.",
        "Mosquito miúdo.",
        "Halsted **curva** — **menor** que Rochester.",
    ),
    "pinca_halsted_reta": (
        "Hemostasia superficial com ponta reta.",
        "Mini hemostática; reta.",
        "Com Halsted curva.",
        "Mosquito reto.",
        "Halsted **reta** — tamanho **mosquito**.",
    ),
    "pinca_rochester_curva": (
        "Hemostasia profunda ou intestino grosso; corpo longo e robusto.",
        "Longa; curva; sulcos em geral completos na ponta.",
        "Com Rochester reta.",
        "Rochester entra fundo.",
        "Rochester **curva** — **longa** vs Kelly curta.",
    ),
    "pinca_rochester_reta": (
        "Hemostasia com alcance e ponta reta.",
        "Robusta; reta.",
        "Hemostasia profunda.",
        "Rochester reta alongada.",
        "Rochester **reta** vs Kelly.",
    ),
    "pinca_kocher_curva": (
        "Fixação de aponeurose e tecidos firmes; dentes 1×2.",
        "Curva; dente típico 1×2.",
        "Pinças fortes.",
        "Kocher morde com dentes.",
        "Kocher **curva** — procure **dentinhos** na ponta.",
    ),
    "pinca_kocher_reta": (
        "Mesma lógica da Kocher com ponta reta.",
        "Reta; dentes 1×2.",
        "Com Kocher curva.",
        "Kocher reta forte.",
        "Kocher **reta** vs pinça **sem** dentes (anatômica).",
    ),
    "pinca_anatomica": (
        "Manipulação atraumática sem dentes agressivos.",
        "Sem dentes; ponta com sulcos suaves.",
        "Síntese e exposição.",
        "Anatômica = dedo educado.",
        "Pinça **sem** dentes traumáticos.",
    ),
    "pinca_dente_de_rato": (
        "Preensão fina com dentes entrelaçados.",
        "Dentes cruzados visíveis.",
        "Com Adson.",
        "Dente de rato entrega tecido.",
        "Nome popular **dente de rato**.",
    ),
    "pinca_adson_com_dente": (
        "Pe e retalho com plataforma larga e ponta com dente.",
        "Adson com dentes na ponta.",
        "Sutura superficial.",
        "Adson com morde.",
        "Adson **com** dente vs **sem** dente.",
    ),
    "pinca_adson_sem_dente": (
        "Mesmo desenho Adson sem dentes na ponta.",
        "Plataforma larga; sem dentes.",
        "Par com Adson com dente.",
        "Adson liso na ponta.",
        "Adson **sem** dente.",
    ),
    "porta_agulhas_hegar": (
        "Segurar agulha com argolas e haste curta e forte (estilo tesoura).",
        "Hegar: argolas + ranhuras na ponta.",
        "Sempre ao alcance para sutura.",
        "Hegar = mão forte da sutura.",
        "Porta-agulhas **Hegar** vs **Mathieu** (alicate).",
    ),
    "porta_agulhas_mathieu": (
        "Sutura com pegada tipo alicate e mola entre hastes.",
        "Mathieu: sem argolas clássicas; alicate.",
        "Ao lado do Hegar.",
        "Mathieu fecha como alicate.",
        "**Mathieu** — formato **alicate**.",
    ),
    "cuba_rim": (
        "Recipiente em forma de rim para fragmentos, agulhas e pequenos materiais.",
        "Bacia metálica côncava.",
        "Mesa do instrumentador.",
        "Cuba-rim no tabuleiro.",
        "Recipiente **oval** — não pinça.",
    ),
    "grampo_backhaus": (
        "Fixar campo em pele com pontas cruzadas e trava.",
        "Ponta curva dentada.",
        "Bordas do campo.",
        "Backhaus morde pano.",
        "**Backhaus** / Backaus no texto.",
    ),
    "pinca_cheron": (
        "Manusear gaze e preparo; ponta em anel.",
        "Longa; extremidade tipo argola para gaze.",
        "Com Mixter na página.",
        "Cheron para gaze.",
        "**Cheron** vs Mixter angular.",
    ),
    "pinca_mixter": (
        "Passar ligadura em plano profundo; ponta a ~90°.",
        "Ângulo reto na ponta.",
        "Campo profundo.",
        "Mixter = cotovelo.",
        "Pinça **angular** (90°).",
    ),
    "pinca_foerster_curva": (
        "Comprimir com fenestra na ponta; variante curva.",
        "Longa; argola/fenestra; curva.",
        "Campo e gaze.",
        "Foerster curva para compressa.",
        "Foerster **curva** — fenestrada.",
    ),
    "pinca_foerster_reta": (
        "Compressa/gaze com pinça fenestrada reta.",
        "Fenestra; haste reta.",
        "Com Foerster curva.",
        "Foerster reta.",
        "Foerster **reta** vs curva.",
    ),
    "pinca_allis": (
        "Biópsia e tecidos com vários dentinhos em fileira.",
        "Mordente múltiplo denso.",
        "Fixação grosseira.",
        "Allis = dentes em fila.",
        "Allis vs Kocher **1×2**.",
    ),
    "pinca_coprostase": (
        "Extrêmamente longa para alça intestinal / conteúdo espesso.",
        "Hastes longas finas.",
        "Bloco visceral.",
        "Coprostase = pinça comprida.",
        "Pinça **longa** intestinal.",
    ),
    "afastador_finochietto": (
        "Autoestático torácico com manivela/cremalheira.",
        "Grande; braços com trava.",
        "Torácico / grande parede.",
        "Finochietto = manivela.",
        "**Grande** autoestático.",
    ),
    "afastador_farabeuf": (
        "Retração de borda em L pequeno.",
        "Par em L; rombo nas pontas.",
        "Incisões curtas.",
        "Farabeuf par pequeno.",
        "Afastador **em L** pequeno.",
    ),
    "afastador_gosset": (
        "Autoestático abdominal (Gosset).",
        "Hastes que abrem em tesoura.",
        "Laparotomia.",
        "Gosset abre abdome.",
        "**Gosset** no PDF (vs Richardson em materiais antigos).",
    ),
    "afastador_doyen": (
        "Lâmina larga e curva suave (Doyen).",
        "Haste longa; pá curva.",
        "Exposição profunda ampla.",
        "Doyen = colher larga.",
        "**Doyen** (PDF) — nome usado no brochura.",
    ),
}


def figuras_map_payload(insts: list[dict]) -> dict:
    by_id = {}
    for row in insts:
        iid = row["id"]
        img = row.get("imagem") or ""
        pg = 0
        if "_p" in img:
            try:
                part = img.split("_p")[1]
                pg = int(part.split("_")[0])
            except (ValueError, IndexError):
                pass
        by_id[iid] = {
            "instrumentoId": iid,
            "imagem": img,
            "page": pg,
            "score": 0,
            "captionTermMatches": 0,
            "confidence": "catalog",
            "rankedPages": [],
        }
    return {
        "version": 2,
        "generatedAt": date.today().isoformat(),
        "minImageArea": 40000,
        "sourceManifest": "data/instrumentais/extract_manifest.json",
        "missingKeywordEntries": [],
        "unmappedInstrumentIds": [],
        "reviewSuggestedIds": [],
        "fallbackMinArea": None,
        "note": "Gerado por build_to_instrumentais_catalogo_pdf.py — imagens fixas por ordem do catálogo PDF.",
        "byInstrumentId": by_id,
    }


def main() -> None:
    insts = []
    for rid, nome, cat, img, conf in ROWS:
        funcao, carac, mesa, mnem, dica = TEXT[rid]
        insts.append({
            "id": rid,
            "nome": nome,
            "imagem": img,
            "categoria": cat,
            "funcao": funcao,
            "caracteristicas": carac,
            "mesaPosicao": mesa,
            "mnemonico": mnem,
            "dicaQuiz": dica,
            "confundeCom": conf,
        })

    assert len(insts) == 34, len(insts)

    out = {
        "version": 10,
        "updatedAt": "2026-04-06",
        "titulo": "Instrumentais do catálogo PDF (págs. 2–11)",
        "nota": "34 itens alinhados ao brochura conteudos/ (curva/reta onde o PDF separa). Imagens por ordem mesa_pPPP_imgNN no extract_manifest. Regenerar: este script.",
        "instrumentos": insts,
    }
    path = ROOT / "data" / "to_instrumentais.json"
    path.write_text(json.dumps(out, ensure_ascii=False, indent=2), encoding="utf-8")
    map_path = ROOT / "data" / "instrumentais" / "to_instrumentais_figuras_map.json"
    map_path.write_text(
        json.dumps(figuras_map_payload(insts), ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
    print(f"Wrote {path} ({len(insts)} instrumentos)")
    print(f"Wrote {map_path}")


if __name__ == "__main__":
    main()
