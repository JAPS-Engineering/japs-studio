# SiteHeader

Header de JAPS Studio, espejo del de japs.ing: logo, enlaces, Portafolio con panel de productos, acceso a JAPS Engineering, idioma y la CTA. Al bajar se vuelve una cápsula de vidrio ahumado.

## Cuándo usarlo
- Uno por página, fijo arriba. Lo genera `src/components/site/SiteHeader.astro` desde `src/data/nav.ts` y `src/data/productos.ts`.
- `is-scrolled` (lo pone el script a los 40 px) pasa a la cápsula: vidrio `--glass`, borde `--glass-edge`, radio `--r-pill`.
- Bajo 1100 px los enlaces pasan al menú; bajo 640 la CTA queda solo en ícono.

## Reglas
- El enlace activo se marca con `aria-current` según la URL; no se resalta Portafolio fuera de /portafolio.
- El panel de Portafolio lista los productos con su isotipo, estado y vista previa con foto.
