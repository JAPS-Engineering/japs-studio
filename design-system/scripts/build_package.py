"""Empaqueta el sistema Encastre en un ZIP listo para cargar en Claude Design.

Primero corre check_tokens.py y aborta si algo falla.
Salida: <repo>/dist/japs-studio-encastre-design-system.zip
Uso: python3 -I design-system/scripts/build_package.py
"""
import subprocess
import sys
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent          # design-system/
REPO = ROOT.parent                                      # JAPS_Studio/
REFS = REPO / "referencias" / "pinterest-japs-studio"
OUT = REPO / "dist" / "japs-studio-encastre-design-system.zip"
PREFIX = "japs-studio-encastre"

FILES = [
    "README.md",
    "DIRECCION-DE-ARTE.md",
    "tokens.json",
    "theme.css",
    "encastre.css",
    "package.json",
    "tsconfig.json",
    "preview.html",
    "preview-light.png",
    "preview-dark.png",
]
DIRS = ["fonts", "cards", "scripts", "src", "docs"]

# Referencias base (12 y 21) y apoyos de curvas, con nombres legibles
REFERENCES = {
    "12_729794314666148449.jpg": "12-nexa-base.jpg",
    "21_729794314666060398.jpg": "21-futuristic-base.jpg",
    "15_729794314666148280.jpg": "15-curvas-orizon.jpg",
    "16_729794314666148273.jpg": "16-curvas-ai-platform.jpg",
    "18_729794314666148268.png": "18-curvas-mnear.png",
    "03_729794314666200219.png": "03-curvas-konexy.png",
}


def main():
    check = subprocess.run([sys.executable, "-I", str(ROOT / "scripts" / "check_tokens.py")])
    if check.returncode != 0:
        sys.exit("check_tokens.py falló: no se genera el paquete.")

    entries = [(ROOT / f, f) for f in FILES]
    for d in DIRS:
        for p in sorted((ROOT / d).rglob("*")):
            if p.is_file() and "__pycache__" not in p.parts:
                entries.append((p, p.relative_to(ROOT).as_posix()))
    for src, dst in REFERENCES.items():
        entries.append((REFS / src, f"references/{dst}"))

    missing = [str(src) for src, _ in entries if not src.is_file()]
    if missing:
        sys.exit("Faltan archivos:\n  " + "\n  ".join(missing))

    OUT.parent.mkdir(exist_ok=True)
    with zipfile.ZipFile(OUT, "w", zipfile.ZIP_DEFLATED, compresslevel=9) as zf:
        for src, arc in entries:
            zf.write(src, f"{PREFIX}/{arc}")
    print(f"\n{len(entries)} archivos → {OUT} ({OUT.stat().st_size / 1024:.0f} KiB)")


if __name__ == "__main__":
    main()
