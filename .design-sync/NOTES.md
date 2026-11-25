# design-sync · notas de este repo (JAPS Studio · Encastre)

## Cómo se construye
- El paquete React vive en `design-system/` (`@japs/encastre`). La configuración usa `entry: ./design-system/dist/index.js`; el convertidor sube desde ahí hasta `design-system/package.json`.
- Build de la librería: `npm --prefix design-system run build` (esbuild + `tsc` solo para declaraciones).
- `--node-modules ./design-system/node_modules` (ahí resuelven react y react-dom). Comando del driver:
  `node .ds-sync/resync.mjs --config .design-sync/config.json --node-modules ./design-system/node_modules --entry ./design-system/dist/index.js --out ./ds-bundle [--remote .design-sync/.cache/remote-sync.json]`
- `cssEntry` es `encastre.css`, **no** `theme.css`: `theme.css` solo hace `@import` de `fonts/fonts.css` y `encastre.css`, y un `@import` copiado dentro de `_ds_bundle.css` no funcionaría. Las fuentes llegan por `extraFonts: fonts/fonts.css`.
- Hud.tsx, Typography.tsx y Popover.tsx exportan varios componentes; por eso están fijados en `componentSrcMap`.
- `provider` = `ThemeRoot` en light. Las vistas previas muestran el modo oscuro anidando `<ThemeRoot theme="dark">`.

## Entorno
- `JAPS_Studio/` **no es un repositorio git**: no hay commit ni PR posibles hasta inicializarlo. `workspaceRoot` cae en `design-system/` (dirname de `--node-modules`), así que `extraFonts`, `docsDir` y `guidelinesGlob` deben quedar dentro de `design-system/`.
- Render check: el Chromium en caché es el build 1248 → `playwright@1.64.1` instalado en `.ds-sync/` (`npm i esbuild ts-morph @types/react playwright@1.64.1`).
- npm 12 bloquea el postinstall de esbuild (`allowScripts`), pero el binario opcional funciona igual; no hace falta aprobarlo.

## Vistas previas
- Cuando un componente tiene documentación en `design-system/docs/components/<Name>.md`, el `.prompt.md` es ese documento más las props. Los ejemplos **no** se añaden solos: cada documento trae los suyos. El frontmatter `category` define el grupo (Theme, Layout, Actions, Brand, Navigation, On image, Cards, Data display, HUD, Typography, Icons).
- Las Card blancas (`--surface`) pegadas al borde de la celda pierden su borde izquierdo en la grilla: envolverlas en `<div style={{ padding: 16 }}>` para que se vea la carcasa alrededor.
- `cardMode: column` en Nav, Timeline, Icon, Card, Panel, Heading y en casi todas las piezas del Notch Lab (la lista está en `config.json`). Las piezas anchas (SiteHeader, DisplayTitle) se muestran con `zoom` en la vista previa en lugar de encogerlas.
- Las imágenes de las vistas previas son rayados de tokens (`IMG_PANEL`, `IMG_DARK`, `IMG_LIGHT`, `IMG_SAGE`): el handoff no trae fotos.
- Si una vista previa declara una función local con el mismo nombre que un export de la librería, colisiona: los ayudantes llevan sufijo `*Demo`.
- `[FONT_MISSING]` apareció por fuentes alternativas sin incluir ("Inter", "Arial Black", "JetBrains Mono"). Se quitaron de las pilas en `encastre.css` y `tokens.json`; no reintroducir nombres de fuentes que no se incluyen.

## Known render warns
- Ninguno.

## Re-sync risks
- `design-system/scripts/vendor_fonts.py` descarga las fuentes desde Google Fonts; si cambian las URLs o los subconjuntos, `fonts/` cambia y todas las vistas previas se vuelven a verificar.
- `ThemeRoot`, `Panel` y `Notch` dependen de `--shell-color` y de los pseudo-elementos `.notch::before/::after` en `encastre.css`; cualquier cambio de radios o gap en tokens debe revisarse en las tarjetas Notch y Panel.
- La cabecera `.design-sync/conventions.md` nombra tokens (`--space-*`, `--r-*`, `--accent-text`…) y componentes: revalidar contra el build si se renombran.
- Primera sincronización subida el 21-10-2026 al proyecto "JAPS Studio · Encastre" (`3b8e9d92-b434-44d1-b0df-29ec40baed66`, fijado en `config.json`): 127 archivos, 22 componentes calificados como good, sin borrados. Las próximas sincronizaciones van por la ruta atómica: bajar `_ds_sync.json` a `.design-sync/.cache/remote-sync.json` y correr el driver con `--remote`.
- `_vendor/react.js` pesa 1.2 MB: subirlo en un `write_files` propio, separado de las fuentes y del resto.
- Notch Lab (handoff de Claude Design, copia en `referencias/notch-lab-handoff/`): 24 componentes nuevos subidos en tres cortes el 21-10-2026 (fases 1–3, 4–5 y 6–8). Tras cada corte, copiar `ds-bundle/_ds_sync.json` a `.design-sync/.cache/remote-sync.json`; ese es el ancla del siguiente `--remote`. El proyecto remoto también guarda archivos del usuario (`templates/`, `screenshots/`, `uploads/`, `_adherence.oxlintrc.json`, `_ds_manifest.json`) que nunca deben entrar en los borrados.
- `HudFill` (variante leader) posiciona en unidades `cqw` sobre `.hud-fill--leader` (`container-type: inline-size`): la diagonal de 42° depende del ancho, no del alto. Si se cambia el contenedor, revisar que la etiqueta "02 — DETALLE" no quede cortada.
- `Callout` lleva el `clip-path` en el contenedor `.callout` (no en el vidrio): `backdrop-filter` no se recorta con un clip-path del propio elemento.
- `glassTone.ts` no puede llamarse `glass.ts`: choca con `Glass.tsx` en resoluciones que no distinguen mayúsculas.
