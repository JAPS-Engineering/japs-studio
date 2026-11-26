# Design System «JAPS Studio» en Claude

Este directorio es la fuente del Design System publicado en Claude. El sitio usa los mismos archivos: lo que se cambie aquí cambia el sitio y, al republicar, el Design System.

| Campo | Valor |
|---|---|
| URL | https://claude.ai/artifact/LewhGbWUp1UbinA5fxoxBG |
| Tipo | Design System (`https://claude.ai/artifact/5M7UeXXcx16TP3vzVFNDzd`) |
| Versión publicada | `1795637247-34ae` (25-nov-2026) |
| Índice publicado | `artifact-index.json` (ids de los assets subidos) |

El sistema anterior, «JAPS Studio · Encastre» (https://claude.ai/artifact/SZgvNtWguHprcAtAunvvnM), queda como referencia histórica junto con la rama `legacy`.

## Qué se publica

`npm run ds:artifact -- <carpeta>` arma `<carpeta>/project/` con:

- `README.md` y `tokens.json` de este directorio.
- `components/bundle.css`: `css/base.css` + `css/components.css` + `css/site.css` (la página genera `tokens.css` desde `tokens.json`).
- `components/<Nombre>/README.md` y `preview.html`; el marcador `<!-- @sprite -->` se reemplaza por el sprite de íconos del sitio (`src/components/site/IconSprite.astro`).
- `media/`: las imágenes de `public/img` que usan las vistas previas (`../../media/…`).
- `assets/<Grupo>/README.md` y, en `<carpeta>/uploads/`, los archivos que se suben como assets (logos, isotipos, contrapartes, sellos y fotos).
- `design-system.json`: copia de `artifact-index.json`.

## Cómo republicar

1. Cambiar aquí lo que haga falta (tokens, CSS, fichas) y verificar el sitio (`npm run check && npm run build`).
2. `npm run ds:artifact -- <carpeta temporal>`.
3. Con la herramienta de artifacts de Claude: publicar en la URL de arriba, con `root` = la carpeta, solo los archivos `project/…` que cambiaron.
4. Si se agrega o cambia un asset: subirlo (`asset: true`), registrar su id en `artifact-index.json` (`assetGroups.<Grupo>.files`) y publicar `project/design-system.json` en la última llamada, con `lastChange` al día.
5. Actualizar la versión de la tabla.

Los cambios hechos directamente en la página del Design System no vuelven solos al repo: hay que traerlos aquí antes de la próxima publicación.
