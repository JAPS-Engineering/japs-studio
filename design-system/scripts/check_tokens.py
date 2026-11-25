"""Verifica el sistema Encastre.

1. Contraste WCAG 2.2 de los pares semánticos de tokens.json (light y dark).
2. Que cada var(--x) usada en encastre.css, preview.html y cards/ esté definida.

Uso: python3 -I design-system/scripts/check_tokens.py
Sale con código 1 si algún par o variable falla.
"""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

# (texto/primer plano, fondo, mínimo, motivo)
PAIRS = [
    ("text", "shell", 4.5, "texto"),
    ("text", "surface", 4.5, "texto"),
    ("text", "surface-2", 4.5, "texto"),
    ("text-muted", "shell", 4.5, "texto secundario"),
    ("text-muted", "surface", 4.5, "texto secundario"),
    ("text-muted", "surface-2", 4.5, "texto secundario"),
    ("text-on-panel", "panel", 4.5, "texto sobre panel hero"),
    ("text-on-inverse", "inverse", 4.5, "texto sobre sidebar/inverso"),
    ("text-on-accent", "accent", 4.5, "texto sobre CTA"),
    ("text-on-accent", "accent-hover", 4.5, "texto sobre CTA hover"),
    ("accent-text", "shell", 4.5, "acento como texto"),
    ("accent-text", "surface", 4.5, "acento como texto"),
    ("text-on-accent", "signal", 4.5, "texto sobre chip señal"),
    ("focus", "shell", 3.0, "indicador de foco (1.4.11)"),
    ("focus", "surface", 3.0, "indicador de foco (1.4.11)"),
    ("accent", "panel", 3.0, "control activo sobre panel (1.4.11)"),
    ("focus-on-panel", "panel", 3.0, "indicador de foco dentro del panel (1.4.11)"),
]


def load_tokens():
    return json.loads((ROOT / "tokens.json").read_text(encoding="utf-8"))


def resolve(tokens, value, depth=0):
    if depth > 10:
        raise ValueError(f"referencia circular: {value}")
    m = re.fullmatch(r"\{([^}]+)\}", value) if isinstance(value, str) else None
    if not m:
        return value
    node = tokens
    for part in m.group(1).split("."):
        node = node[part]
    return resolve(tokens, node["$value"], depth + 1)


def luminance(hex_color):
    h = hex_color.lstrip("#")[:6]
    channels = [int(h[i:i + 2], 16) / 255 for i in (0, 2, 4)]
    lin = [c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4 for c in channels]
    return 0.2126 * lin[0] + 0.7152 * lin[1] + 0.0722 * lin[2]


def contrast(a, b):
    la, lb = luminance(a), luminance(b)
    return (max(la, lb) + 0.05) / (min(la, lb) + 0.05)


def check_contrast(tokens):
    failures = 0
    for mode in ("light", "dark"):
        group = tokens["color"][mode]
        print(f"\n[{mode}]")
        for fg, bg, minimum, why in PAIRS:
            a = resolve(tokens, group[fg]["$value"])
            b = resolve(tokens, group[bg]["$value"])
            ratio = contrast(a, b)
            ok = ratio >= minimum  # sin redondear a favor
            failures += not ok
            print(f"  {'OK ' if ok else 'FAIL'} {fg:>15} / {bg:<13} {ratio:5.2f}:1 (mín {minimum}) — {why}")
    return failures


def check_css_vars():
    files = [ROOT / "theme.css", ROOT / "encastre.css", ROOT / "preview.html", *sorted((ROOT / "cards").glob("*.*"))]
    text = "".join(f.read_text(encoding="utf-8") for f in files if f.suffix in {".css", ".html"})
    defined = set(re.findall(r"(--[\w-]+)\s*:", text))
    used = set(re.findall(r"var\((--[\w-]+)", text))
    # Las que solo se usan con fallback son ajustes por instancia (p. ej. --dt-size desde una prop), no tokens.
    required = set(re.findall(r"var\((--[\w-]+)\s*\)", text))
    missing = sorted(required - defined)
    print("\n[variables CSS]")
    print(f"  definidas: {len(defined)} · usadas: {len(used)} · sin definir: {missing or 'ninguna'}")
    return len(missing)


def main():
    tokens = load_tokens()
    failures = check_contrast(tokens) + check_css_vars()
    print(f"\n{'Todo correcto.' if not failures else f'{failures} fallo(s).'}")
    sys.exit(1 if failures else 0)


if __name__ == "__main__":
    main()
