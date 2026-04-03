"""
Remove fundo branco do mascote e salva como PNG transparente otimizado para web.
Também gera uma versão webp menor.
"""
from PIL import Image
import numpy as np

def remove_white_bg(img, threshold=30, feather=2):
    """Remove background white pixels, applies soft edge feathering."""
    img = img.convert("RGBA")
    data = np.array(img, dtype=np.float32)

    r, g, b, a = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]

    # Whiteness: all channels close to 255
    whiteness = np.maximum(np.maximum(np.abs(r - 255), np.abs(g - 255)), np.abs(b - 255))

    # Core mask: very white pixels
    mask_white = whiteness < threshold

    # Semi-transparent edge: feather zone
    if feather > 0:
        from scipy.ndimage import uniform_filter
        smooth = uniform_filter(whiteness.astype(float), size=feather * 4)
        alpha_map = np.clip((smooth - 0) / threshold, 0, 1)
        alpha_map[mask_white] = 0  # fully white = fully transparent
    else:
        alpha_map = np.where(mask_white, 0.0, 1.0)

    # Apply alpha
    data[:,:,3] = (alpha_map * 255).astype(np.uint8)

    return Image.fromarray(data.astype(np.uint8), "RGBA")


def remove_white_bg_simple(img, threshold=30):
    """Simpler version without scipy, using flood-fill style removal."""
    img = img.convert("RGBA")
    data = np.array(img)

    r, g, b = data[:,:,0].astype(int), data[:,:,1].astype(int), data[:,:,2].astype(int)

    # Standard white background removal: pixels where all channels > (255 - threshold)
    white_mask = (r > (255 - threshold)) & (g > (255 - threshold)) & (b > (255 - threshold))

    # Additional: near-white greys in background
    # Saturation check: low saturation + bright = background
    max_rgb = np.maximum(np.maximum(r, g), b)
    min_rgb = np.minimum(np.minimum(r, g), b)
    saturation = np.where(max_rgb > 0, (max_rgb - min_rgb) / max_rgb, 0)
    brightness = max_rgb / 255.0

    # Background: high brightness + very low saturation
    bg_mask = (brightness > 0.92) & (saturation < 0.08)

    final_mask = white_mask | bg_mask

    data[:,:,3] = np.where(final_mask, 0, data[:,:,3])

    return Image.fromarray(data, "RGBA")


if __name__ == "__main__":
    print("Carregando mascote.png...")
    img = Image.open("mascote.png")
    print(f"  Tamanho original: {img.size}, Modo: {img.mode}")

    print("Removendo fundo branco...")
    result = remove_white_bg_simple(img, threshold=25)

    # Auto-crop removing transparent borders
    bbox = result.getbbox()
    if bbox:
        result = result.crop(bbox)
        print(f"  Tamanho após crop: {result.size}")

    # Resize for web: max 400px width (good for app usage)
    w, h = result.size
    max_w = 400
    if w > max_w:
        ratio = max_w / w
        new_h = int(h * ratio)
        result_web = result.resize((max_w, new_h), Image.LANCZOS)
        print(f"  Redimensionado para web: {result_web.size}")
    else:
        result_web = result
        print(f"  Sem redimensionamento necessário: {result_web.size}")

    # Save PNG transparent
    result_web.save("mascote_transparent.png", "PNG", optimize=True)
    print("  Salvo: mascote_transparent.png")

    # Save WebP (smaller, better quality for web)
    result_web.save("mascote.webp", "WEBP", quality=90, method=6)
    print("  Salvo: mascote.webp")

    # Also save a smaller version for inline use (200px)
    w2, h2 = result_web.size
    if w2 > 200:
        ratio2 = 200 / w2
        small = result_web.resize((200, int(h2 * ratio2)), Image.LANCZOS)
        small.save("mascote_small.webp", "WEBP", quality=88, method=6)
        print(f"  Salvo: mascote_small.webp ({small.size})")

    import os
    for f in ["mascote_transparent.png", "mascote.webp"]:
        size_kb = os.path.getsize(f) / 1024
        print(f"  {f}: {size_kb:.0f} KB")

    print("\nPronto!")
