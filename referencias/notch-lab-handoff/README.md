# Handoff: Laboratorio de muescas → componentes de @japs/encastre

## Resumen
El «Laboratorio de muescas» reúne unas 60 piezas diseñadas sobre el sistema Encastre en 11 turnos de exploración. Las piezas son nuevas muescas, botones, teclas, índices, cabeceras, tarjetas, labels sobre imagen, titulares y detalles HUD. Este paquete sirve para pasarlas **todas** al repositorio de `@japs/encastre` como componentes oficiales (o como variantes de componentes que ya existen) y volver a sincronizar el sistema con `/design-sync`.

## Sobre los archivos de diseño
`NotchLab.dc.html` es una **referencia de diseño hecha en HTML**: un prototipo que muestra el aspecto y el comportamiento esperados. **No es código de producción para copiar.** La tarea es recrear cada pieza dentro del repo de `@japs/encastre`, con sus patrones (React + CSS en `encastre.css` con tokens, archivos `.tsx` / `.d.ts` / `.prompt.md` / `.html` por componente, como los 22 que ya hay).

Todos los estilos de la referencia están escritos en línea en el propio HTML, así que **cada medida exacta está en la fuente**. Busca `<article id="XX"` (por ejemplo `id="6d"`) para encontrar cada pieza. `COMPONENTS.md` da la API propuesta y las medidas clave; ante cualquier duda de píxeles, manda la fuente.

## Fidelidad
**Alta fidelidad.** Los colores, la tipografía, los radios, los espacios y los hovers son finales y salen de los tokens del sistema. Hay que recrearlos al píxel, pero sustituyendo cada literal por su token (casi todos ya están escritos como `var(--token)` en la fuente).

## Cómo leer la referencia
- Cada `<section>` es un turno; el más reciente va arriba (Turno 11 → Selección inicial).
- Cada `<article id="NN">` es una pieza. Su cabecera trae el id, el nombre, una etiqueta `code` con la **API propuesta** (por ejemplo `hover="halo"` o `fill="dot-strip"`) y una línea con el comportamiento.
- El marco de cada pieza (`height` fija, `border-radius:28px`, fondo `--panel` / `--surface` / imagen) es solo el escenario de demostración. **No forma parte del componente**, salvo donde se indica.
- Las piezas `JapsEncastre.X` montadas con `<x-import>` son componentes que ya existen (Icon, IconButton, Pill, Chip, LiveDot, HudCross). Hay que reutilizarlos, no duplicarlos.
- Tweaks de la página: `theme` (light/dark), `calloutSurface` (translúcido/sólido, para 6d y 6e) y `motion` (activa o desactiva todas las animaciones).

## Reglas del sistema que deben seguir vigentes
1. `Notch`: máximo 2 por panel, en esquinas opuestas, con un solo elemento cada una. `NotchStair` cuenta como una muesca.
2. Todo es curvo: sin esquinas rectas ni chaflanes. Los chaflanes de las referencias se tradujeron a radios (10a, 10b) y las guías llevan codos curvos (6e: curva de 20 px).
3. Sin `box-shadow` (solo `Popover`). La profundidad sale del color de superficie y, en los vidrios, de `backdrop-filter: blur(var(--blur-glass))`.
4. Vidrio solo sobre `Panel`, imagen o render.
5. Una sola CTA `accent` por vista y un solo dato `--signal` por vista (por eso 4e se limita a un botón por vista).
6. HUD: 1–2 detalles por viewport. Esto incluye la familia `HudFill` del Turno 11.

## Interacciones y movimiento (comunes)
- **Hovers de color y forma** (CSS): `transition: background-color var(--dur-fast) var(--ease-standard), color var(--dur-fast) …, border-color …, outline-color …, transform var(--dur-fast) …`. Los cambios de forma (radio de 10a, 10b y 7a; ancho de 5g) usan `var(--dur-base)`.
- **Hovers HUD** (Turno 11, Web Animations en la referencia): 420 ms `cubic-bezier(.2,.8,.2,1)`, `fill: both`, y se **invierten** al salir. Hay excepciones: `travel` dura 900 ms; `draw` se vuelve a reproducir desde cero en cada entrada; `pulse` es una ola de una sola pasada (opacidad 1 → .2 → 1, 320 ms, 50 ms de desfase entre elementos); los contadores cuentan de 0 al valor en 280 ms con ease-out cúbico y vuelven al valor al salir.
- **Respiro en reposo** (solo 11e): bucle `alternate`, `ease-in-out`. Los puntos van de opacidad 1 a .2 en 1400 ms, con 240 ms de desfase en ola.
- **Accesibilidad**: todo el movimiento se apaga con `prefers-reduced-motion: reduce`. Conviene exponer un `motion?: boolean` (o leer un contexto) que haga lo mismo, como el tweak de la página. Los iconos decorativos van `aria-hidden`, los botones de solo icono llevan `label` y el foco usa el `:focus-visible` global.
- Para todo esto, un hook compartido (`useHoverMotion(ref, keyframes, opts)`) evita repetir lógica en los componentes del Turno 11.

## Estado
No hay datos remotos; todo es estado de UI:
- `current` / `active` en índices, rails, navegación vertical (10d) y segmentados (3d).
- La posición `n / total` en `DoubleButton variant="counter"` (6b).
- `progress` (0–1) en `CalloutMeter` (6e) y en `HudFill fill="progress"` (11c).
- Hover y focus por segmento en las cápsulas dobles (cada segmento lleva el suyo).

## Tokens usados (ya existen en `encastre.css`; no hace falta crear ninguno)
- **Color**: `--shell`, `--surface`, `--surface-2`, `--panel`, `--inverse`, `--text`, `--text-muted`, `--text-on-panel`, `--text-on-inverse`, `--text-on-accent`, `--accent` (#7FE3AE), `--accent-hover` (#4CC98A), `--accent-text` (#1F7A55 light / #7FE3AE dark), `--signal` (#FF5B1F), `--hairline`, `--hairline-strong`, `--glass`, `--glass-border`. Primitivos usados directamente: `--c-ink` (#0D1110), `--c-paper` (#F1F3F0), `--c-surface` (#FFFFFF).
- **Espacio**: `--space-1…10` (4, 8, 12, 16, 24, 32, 48, 64, 96, 128) y `--gap` (12; 8 en ≤720 px).
- **Radios**: `--r-shell` 40 · `--r-panel` 28 · `--r-card` 16 · `--r-inner` 8 · `--r-pill` 999. Son concéntricos: un aro de 8 px sobre un radio de 28 da un interior de 20 (5c) y un exterior de 36 (3d).
- **Muesca**: `--notch-r` (= `--r-panel`) y `--notch-gap` (= `--gap`). El filete inverso es un cuadrado de `--notch-r` con `radial-gradient(circle at <esquina>, transparent calc(var(--notch-r) - .5px), var(--shell-color, var(--shell)) var(--notch-r))`, la misma técnica que `.notch`.
- **Tipografía**: `--font-display` (Archivo variable, ancho 62–125 %), `--font-body` (Geist), `--font-mono` (Geist Mono). Los labels mono van a 11–12 px, `letter-spacing: .06–.1em`, en mayúsculas.
- **Movimiento**: `--dur-instant` 120, `--dur-fast` 200, `--dur-base` 320, `--dur-slow` 560, `--ease-standard` `cubic-bezier(.2,.8,.2,1)`, `--ease-exit`.
- **Vidrio**: `--blur-glass` 16 px.

## Recursos
- No hay imágenes reales: los fondos de foto de los turnos 3–6 y 9 son marcadores de posición. Los componentes deben aceptar `children` o una prop de imagen.
- Los logos de 8a son provisionales (reutilizan la marca 2a). Hay que sustituirlos por el SVG monocromo de cada cliente, con `currentColor`.
- Los iconos salen todos del `Icon` del sistema (`arrow-right`, `menu`, `plus`, `close`, `sun`, `moon`, `play`…).

## Archivos
- `../NotchLab.dc.html`: la referencia completa. Para verla renderizada, ábrela dentro del proyecto del sistema de diseño (carga `../../styles.css` y `../../_ds_bundle.js` mediante `ds-base.js`).
- `../ds-base.js` y `../support.js`: el cargador de la referencia. No hay que portarlos.
- `COMPONENTS.md`: inventario completo pieza a pieza con la API propuesta.

## Orden de implementación sugerido
1. **Muescas**: `Notch corner="l" | "r" | "b"` y `NotchStair` (1a–1d). Son la base de varias piezas posteriores (3f, 7e).
2. **Marca**: `StudioMark` (2a). La usan 7h y 8a.
3. **Acciones**: `IconButton` con vidrio y la prop `hover` (4c–4g), y después `ButtonRail`, `GlassPill`, `SplitAction`, `ExpandButton`, `DoubleButton` y `Key`.
4. **Navegación**: `SearchField`, `AccountCluster`, `SiteHeader`, `SectionIndex`, `IndexList`, `LogoBar` y `VerticalNav`.
5. **Sobre imagen**: `TagCluster`, `PointerLabel`, `Callout` y `CalloutMeter`.
6. **Tarjetas**: `MediaCard`, `HeroCard`, `HistoryStack` y `ConsoleCard`.
7. **Titulares**: nuevas variantes de `Heading` / `DisplayTitle`.
8. **HUD**: `HudFill` con sus 8 rellenos y el hook de movimiento.

Por cada componente: `.tsx`, `.d.ts`, `.prompt.md` con ejemplo y reglas, y `.html` con la rejilla de variantes. Después, `/design-sync`.

## Avisos de la comprobación del sistema (corregir en `encastre.css` antes de sincronizar)
1. Hay 19 variables declaradas bajo `:root:not([data-theme])` (el modo oscuro por defecto dentro de `@media (prefers-color-scheme: dark)`) que no se registran como tokens. Hay que mantener ese bloque, pero sin que sea el único sitio donde se declaran: ya están en `[data-theme="dark"]`. Si alguna variable solo aparece ahí, añádela también a `[data-theme="dark"]`.
2. Hay 20 tokens sin categoría. Añade `/* @kind font */` detrás de cada `--fw-*`, `--fwd-*`, `--fs-*` y `--lh-*`. Para los tokens de movimiento (`--dur-*`, `--ease-*`), de borde (`--bw-*`), de vidrio (`--blur-glass`) y `--layout-max`, usa `/* @kind other */`.
