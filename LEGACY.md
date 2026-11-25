# Rama `legacy`: diseño anterior de JAPS Studio

Esta rama archiva el trabajo de diseño que existía fuera del repo, en la carpeta local `JAPS_Studio/` (sin git), hasta el 25-nov-2026. No se publica: el deploy sale solo de `main`.

El sitio vigente y el sistema de diseño actual están en `main`.

## Contenido

| Ruta | Qué es |
| --- | --- |
| `design-system/` | Sistema «Encastre» v1.0 (oct-2026): librería React `@japs/encastre`, `encastre.css`, `tokens.json`, `DIRECCION-DE-ARTE.md`, tarjetas y experimentos |
| `ds-bundle/`, `.ds-sync/`, `.design-sync/` | Bundle y herramientas con que Encastre se sincronizaba a Claude Design (proyecto `3b8e9d92-…`) |
| `manual-de-marca.html` | Manual de marca hecho sobre Encastre |
| `propuesta-*.html` | Propuestas por sección (color, headers, heros, A3/A4, A6/A9/A11, soluciones, portafolio, contacto, footers) |
| `landing/` | Landings A Editorial, B Laboratorio, C Exhibición, D Mosaico y vistas de proyecto 1–3 |
| `sitio/` | Las tres páginas HTML del sitio antes de la migración a Astro, incluida la transición de carga del 25-nov |
| `.respaldos/` | Copias fechadas de `sitio/` |
| `img/` | Imágenes que usaban esas páginas (`../img/`) |
| `referencias/` | Moodboard (también queda en `main`) |
| `guia-*.md` | Guías de documento de marca y dirección creativa |

Las rutas son las mismas que tenían en `JAPS_Studio/`, así que los HTML abren con sus estilos e imágenes:

```bash
git switch legacy
python3 -m http.server 8000
# http://localhost:8000/manual-de-marca.html
# http://localhost:8000/landing/propuesta-d-mosaico.html
# http://localhost:8000/sitio/
```

## Otras referencias históricas

- Página cyberpunk original de studio.japs.ing: commit `6b6b8a8`.
- Artifact «JAPS Studio · Encastre» en Claude: https://claude.ai/artifact/SZgvNtWguHprcAtAunvvnM (sin cambios).
- Respaldo completo de la carpeta: `/home/rir/Projects/JAPS/_archivo/JAPS_Studio-20261125.tar.zst` (local).
