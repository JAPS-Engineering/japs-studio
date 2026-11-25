"""Descarga Archivo, Geist y Geist Mono (OFL) y genera fonts/fonts.css local.

Solo baja los subconjuntos latin y latin-ext (cubren el español).
Uso: python3 -I design-system/scripts/vendor_fonts.py
"""
import re
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
FONTS = ROOT / "fonts"
CSS_URL = ("https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,100..900"
           "&family=Geist:wght@100..900&family=Geist+Mono:wght@100..900&display=swap")
UA = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36"
SUBSETS = {"latin", "latin-ext"}
LICENSES = {
    "Archivo": "https://raw.githubusercontent.com/google/fonts/main/ofl/archivo/OFL.txt",
    "Geist": "https://raw.githubusercontent.com/google/fonts/main/ofl/geist/OFL.txt",
    "GeistMono": "https://raw.githubusercontent.com/google/fonts/main/ofl/geistmono/OFL.txt",
}


def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=30) as resp:
        return resp.read()


def main():
    FONTS.mkdir(exist_ok=True)
    css = fetch(CSS_URL).decode("utf-8")
    blocks = re.findall(r"/\* ([\w-]+) \*/\s*(@font-face \{.*?\})", css, re.S)
    out = ["/* Fuentes autoalojadas (SIL Open Font License 1.1). Generado por scripts/vendor_fonts.py */"]
    for subset, block in blocks:
        if subset not in SUBSETS:
            continue
        family = re.search(r"font-family: '([^']+)'", block).group(1)
        url = re.search(r"url\((https://[^)]+\.woff2)\)", block).group(1)
        name = f"{family.replace(' ', '')}-{subset}.woff2"
        (FONTS / name).write_bytes(fetch(url))
        out.append(f"/* {family} — {subset} */\n" + block.replace(url, name))
        print(f"  {name}")
    (FONTS / "fonts.css").write_text("\n".join(out) + "\n", encoding="utf-8")
    for family, url in LICENSES.items():
        (FONTS / f"OFL-{family}.txt").write_bytes(fetch(url))
    print("fonts.css y licencias generados")


if __name__ == "__main__":
    main()
