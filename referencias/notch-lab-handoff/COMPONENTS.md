# Inventario de piezas → API propuesta

Formato: **id · nombre** (`code` de la referencia) → cómo queda en el sistema. Las medidas exactas de cada pieza están en `NotchLab.dc.html`, dentro de `<article id="…">`.

---

## 1. Muescas (layout) — Selección inicial

Amplían `Notch` (hoy acepta `corner = tr | tl | br | bl | t`) con la misma técnica de filete inverso.

- **1a · Pestaña lateral** (`corner="l" | "r"`). La muesca baja por un costado, centrada en vertical (`top:50%; translateY(-50%)`), con fondo `--shell`. El padding es `12px 12px 24px` y el radio `0 28 28 0` (espejado en `r`). Lleva dos filetes de 28×28: uno sobre la pestaña (`bottom:100%`, `circle at 100% 0`) y otro bajo ella (`top:100%`, `circle at 100% 100%`). Contiene un control vertical: `IconButton` de 44 px más un label mono de 12 px girado (`writing-mode: vertical-rl; rotate(180deg)`, `letter-spacing .1em`), separados 20 px. Ancho = control + gap. El panel reserva 100 px de padding en ese lado.
- **1b · Pestaña inferior** (`corner="b"`). Es la gemela de `t`, anclada abajo y centrada: radio `28 28 0 0`, padding `12 12 0`, filetes a izquierda y derecha. Aloja una CTA (`Pill`) o un control de scroll.
- **1c · Escalera** (nuevo componente `NotchStair corner="br"`). Es una muesca de esquina con 2–3 peldaños y **una card por peldaño**. En la referencia (panel de 440 px de alto), los peldaños miden de ancho 232 / 300 / 368 y empiezan en top 112 / 244 / 320. Cada uno es un bloque `--shell` con `border-top-left-radius:28px` y filetes de 28×28 en cada esquina cóncava. Cada escalón debe medir **≥ 56 px** (2 × filete) para que la S se complete. Las cards son `--surface` con radio 16 y quedan a 12 px del borde del peldaño.
  - API: `steps: { width: number; height: number; content: ReactNode }[]`, `corner: "br" | "bl"`.
- **1d · Escalera en L** (`NotchStair corner="bl"`). Es una pestaña lateral que se funde con una repisa inferior: dos peldaños, una columna estrecha (aloja `IconButton` y un label vertical) y una franja ancha.

## 2. Marca

- **2a · Rayado diagonal** (`mark="hatch"`) → `StudioMark`. Son cuatro cápsulas a 45°, todo escalado en `em` y heredando `currentColor`: barras de `1.375em / 3.125em / 3.125em / 1.375em × 0.625em`, `gap .25em`, dentro de una caja de `3.5em` (56 px con `font-size:16px`). Como enlace, el hover pasa a `color: var(--accent-text)`. Su sitio natural es la muesca `tr`.
  - API: `size?: number` (font-size base), `href?`, `label` (aria).

## 3. Sobre imagen — Turno 3

- **3a · Racimo de tags** (`label="cluster"`) → `TagCluster`. Grupos de tags con un punto de anclaje: mono 11 px sobre cápsulas de superficie, todo dentro de un contenedor de vidrio. API: `tags: string[]`, `anchor: {x, y}`, `side`.
- **3b · Label con guía** (`label="pointer"`) → `PointerLabel`. Un anillo, una guía hairline y una cápsula numerada (`Chip`). Se espeja según el lado de la imagen. API: `index`, `label`, `side: "left" | "right"`, `length`.
- **3c · Historial en cápsula** (`card="history"`) → `HistoryStack`. Una pila de cápsulas con miniatura, hora en mono y un acceso. La versión actual va en `--inverse`; el resto en `--surface`.
- **3d · Consola con aro** (`card="console"`) → `ConsoleCard`. Un aro de vidrio de 8 px abraza una card de superficie (radio exterior 36 = 28 + 8). Lleva un control segmentado y **una sola** CTA `Pill accent`, más un `IconButton`.
- **3e · Condensado sobre imagen** (`title="overlay"`) → `Heading variant="condensed"`. Archivo `font-stretch: 62%` a 176 px, en mayúsculas, alineado a la derecha sobre la zona tranquila de la imagen.
- **3f · Titular en muesca** (`title="notch"`). Es el mismo condensado dentro de una `Notch corner="tl"` con un serial en mono; el shell garantiza el contraste. Es una composición de `Notch` + `Heading`, no un componente nuevo.

## 4. Botones circulares de vidrio — Turno 4

Base: un círculo de **52 px** en vidrio (`--glass`, borde `--glass-border`, `backdrop-filter: blur(var(--blur-glass))`), con un icono de 18 px. Propuesta: ampliar `IconButton` con `surface="glass"`, `size="lg"` (52) y `hover`.

- **4c · Menta** (`hover="accent"`). Al pasar el cursor: fondo `--accent` e icono `--text-on-accent`. **Es el hover por defecto.**
- **4d · Superficie** (`hover="surface"`). Se rellena de `--c-surface`. Es el más neutro sobre imágenes oscuras.
- **4e · Señal** (`hover="signal"`). Se rellena de `--signal`. Para acciones en vivo o destructivas, y solo un botón por vista.
- **4f · Inverso** (`hover="inverse"`). Se rellena de tinta. Para imágenes claras o vidrio lechoso.
- **4g · Halo** (`hover="halo"`). Mantiene el vidrio y añade un `outline` menta con `outline-offset: 3px`; solo se rellena en `:active`.
- Variantes de vidrio: `glass="light"` (lechoso, sobre panel) y `glass="tinted"` (sobre imagen oscura).
- **4a · Rail vertical** (`buttons="rail"`) → `ButtonRail orientation="vertical"`. Botones de vidrio lechoso con la opción activa en superficie sólida. Cierra con una cápsula alargada (avatar + contador). Hover menta.
- **4b · Fila social** (`buttons="social"`) → `ButtonRail orientation="horizontal"`. Vidrio sobre imagen oscura con siglas en mono en lugar de logos. Hover `surface`.

## 5. Tarjetas con imagen y botones largos — Turno 5

- **5a · Hero con acción partida** (`card="hero"`) → `HeroCard`. Titular arriba y, abajo, una píldora larga más un círculo en vidrio tintado. Cada uno lleva su propio hover menta.
- **5b · Pie bajo la imagen** (`card="media"`) → `MediaCard variant="media"`. La imagen ocupa el borde superior con su propio radio 28; debajo va un pie `--surface` con título y categoría. Anchos libres.
- **5c · Imagen con aro** (`card="media-inset"`) → `MediaCard variant="inset"`. La imagen flota con 8 px de aire y radio 20 (= 28 − 8).
- **5d · Pie con acción** (`card="media-link"`) → `MediaCard variant="link"`. Es el pie de 5b con un círculo de 44 px a la derecha; toda la card es enlace. Hover menta en el círculo.
- **5e · Píldora de vidrio** (`button="glass-long"`) → `Pill variant="glass" size="lg" hover=…`. 52 px de alto, icono + label, con los mismos cinco hovers de 4c–4g, en vidrio claro sobre panel y tintado sobre imagen.
- **5f · Par partido** (`button="split"`) → `SplitAction`. Una píldora y un círculo separados 8 px (acción principal y atajo), cada uno con su propio hover.
- **5g · Círculo que se alarga** (`button="expand"`) → `ExpandButton`. En reposo es idéntico al rail 4a. Al pasar el cursor, el ancho crece de 52 a **176 px** (`width var(--dur-base)`) y aparece el label.

## 6. Botones dobles y labels de dato — Turno 6

Base: una cápsula de **52 px** con dos segmentos de **44 px** y 4 px de aire, en vidrio. Cada segmento tiene su propio hover menta.

- **6a · Flechas en cápsula** (`double="arrows"`) → `DoubleButton variant="arrows"`. Anterior y siguiente separados por un hairline. Para carruseles.
- **6b · Flechas con contador** (`double="counter"`) → `variant="counter"`. El hueco central muestra `n / total` en mono tabular. API: `index`, `total`, `onPrev`, `onNext`.
- **6c · Label + círculo** (`double="action"`) → `variant="action"`. Una acción con texto y atajo fusionados; el círculo va relleno para marcar la acción principal.
- **6d · Callout con pestaña** (`label="callout-tab"`) → `Callout`. Una card con una pestaña que aloja el icono, unida por un **filete inverso de 16 px**, y una guía diagonal hasta el punto. API: `surface: "glass" | "solid"` (el tweak `calloutSurface`), `title`, `value`, `icon`, `target: {x, y}`.
- **6e · Callout con medidor** (`label="callout-meter"`) → `CalloutMeter`. Card en tinta, sólida o translúcida, con barra de progreso menta y una guía en codo con **curva de 20 px**. API: `progress` (0–1), `surface`.

## 7. Teclas, índices y cabecera — Turno 7

- **7a · Tecla cuadrada** (`key="square"`) → `Key shape="square"`. Mide 112×112 con radio 28. Al pasar el cursor, el radio crece hasta 50 % (círculo), con `border-radius var(--dur-base)`.
- **7b · Tecla alargada** (`key="wide"`) → `Key shape="wide"`. Mide 216×92, con un titular corto y una flecha. Va en `--inverse` y pasa a `--accent` al pasar el cursor.
- **7c · Tecla con dato** (`key="stat"`) → `Key shape="stat"`. Cuadrada en `--surface`, con label mono y una cifra: un acceso directo que además informa.
- **7d · Índice superpuesto** (`list="overlay"`) → `IndexList variant="overlay"`. Una card translúcida que cabalga entre el shell y la imagen. Filas de 44 px numeradas en mono, con hairline entre ellas.
- **7e · Índice en muesca** (`list="notch"`) → `IndexList variant="notch"`. La misma lista dentro de una `Notch corner="bl"`, sin card, directamente sobre el shell. Hover en `--accent-text`.
- **7f · Buscador con atajo** (`header="search"`) → `SearchField`. Una cápsula de 52 px con el icono en un círculo interior y el atajo `⌘K` en mono.
- **7g · Tema, perfil y menú** (`header="account"`) → `AccountCluster`. Un círculo en tinta (cambio de tema), una cápsula de perfil con el avatar al final y una píldora «Menú». Todo a 52 px.
- **7h · Header completo** (`header="full"`) → `SiteHeader`. Compone `StudioMark` (2a), el logotipo en Archivo expandido (125 %), `SearchField` y `AccountCluster`.

## 8. Barra de marcas — Turno 8

Base: una cápsula de **60 px**, label HUD a la izquierda y marcas monocromas de **23 px** a la derecha, con hover `--accent-text`. Componente: `LogoBar`.

- **8a · Barra de logos** (`bar="logos"`). Va en `--surface-2`. API: `label`, `logos: { svg, name, href }[]`.
- **8b · Barra de stack** (`bar="stack"`). Sin logos: tecnologías en mono separadas por puntos. API: `items: string[]`.
- **8c · Barra de vidrio** (`bar="glass"`). En vidrio, sobre imagen o panel. Cierra con un `Chip` inverso que resume el resto (por ejemplo «+12»).

## 9. Índice lateral y titular tras objeto — Turno 9

`SectionIndex` con `variant`, y `items: { n, label, href }[]` + `current`:
- **9a · Índice destacado** (`index="spotlight"`). Alineado a la derecha: las secciones en mono y la actual en Archivo expandido con un punto. Sin triángulos.
- **9b · Índice con riel** (`index="rail"`). Un riel hairline con un marcador menta en la sección actual; numeración mono + nombre.
- **9c · Índice mínimo** (`index="minimal"`). Solo números; la sección actual se despliega con su nombre y un trazo corto. Para el borde de la pantalla.

Titulares tras un objeto (`Heading` + capa de imagen recortada encima):
- **9d · Titular partido** (`title="split-behind"`). La palabra se parte en diagonal (arriba a la izquierda, abajo a la derecha) en Archivo expandido 800 a 200 px; el objeto tapa el corte.
- **9e · Titular condensado** (`title="condensed-behind"`). Una sola línea en Archivo condensado a 260 px, centrada; un objeto vertical tapa el centro.
- API común: `DisplayTitle variant="split" | "condensed"` + `children` (la capa del objeto, con `z-index` superior).

## 10. Tecla de esquina y titular lateral — Turno 10

- **10a · Radio asimétrico** (`key="corner"`) → `Key shape="corner"`. Mide 96×88 con radio 16 y la esquina superior derecha a 48. Al pasar el cursor, esa esquina se abre hasta cuarto de círculo y la tecla pasa a `--accent`.
- **10b · Gota** (`key="drop"`) → `Key shape="drop"`. Radio 44 en tres esquinas y 16 en la que apunta la flecha. Al pasar el cursor se completa el círculo.
- **10d · Titular vertical expandido** (`title="vertical"`) → `DisplayTitle variant="vertical"`. Archivo expandido 800 a 150 px, girado sobre el borde derecho y legible de abajo arriba. Va acompañado de una navegación vertical (`VerticalNav`, con la página activa en píldora). Montaje completo con la tecla 10a.
- (10c fue descartada; no existe.)

## 11. Detalles de relleno (HUD) — Turno 11

Un componente `HudFill` con `fill: …` para zonas vacías. Cuentan para el límite de 1–2 detalles HUD por viewport. Trazos con extremos redondos (`border-radius:999px`), puntos en vez de damero y bloques con radio.

- **11a · Cruces de registro** (`fill="registration"`). `HudCross` con trazos guía y un serial en mono. Al pasar el cursor, las cruces giran 90°.
- **11b · Regla de borde** (`fill="edge-ticks"`). Marcas de 28×4 px en el borde derecho con índices en mono. Al pasar el cursor se alargan hacia dentro (`scaleX 1 → 1.8`), una tras otra (40 ms de desfase).
- **11c · Barra técnica** (`fill="progress"`). Una barra con etiqueta (`SPRINT_07`) y un contador `[ 7 114 / 25 565 ]`. Al pasar el cursor, la barra principal se completa del 34 % al 100 %. API: `progress`, `label`, `count`, `total`.
- **11d · Índice fantasma** (`fill="ghost-index"`). Dígitos en Archivo ExtraBold a 130 px, con `--text` al 12 %, y una ficha tipográfica. Al pasar el cursor, una ola `pulse` recorre los dígitos una sola vez.
- **11e · Tira de puntos** (`fill="dot-strip"`). Es la única pieza que se mueve en reposo: una ola recorre la matriz de puntos de 5 px (gap 3). Al pasar el cursor, las tiras se desplazan 10 px en escalera.
- **11f · Cabecera de serie** (`fill="series"`). Coordenadas, una fecha en serie (`211026`, mono 44 px tabular) y un ratio. Al pasar el cursor, la fecha y el ratio cuentan desde cero.
- **11g · Tarjeta marcada** (`fill="marked-card"`). Una card de 360 px de alto en `--accent` (radio 16) con un `1A` gigante tono sobre tono, marcas y una barra inferior. Al pasar el cursor, las marcas se alargan (`scaleX 1.6`) y el bloque recorre la barra (`translateX 544px`, 900 ms).
- **11h · Guía diagonal** (`fill="leader"`). Una línea con quiebre y etiqueta. Al pasar el cursor, la diagonal se vuelve a trazar desde el quiebre (`rotate(42deg) scaleX 0 → 1`).

Keyframes exactos (de la lógica de la referencia):
```
spin     rotate(0) → rotate(90deg)
extend   scaleX(1) → scaleX(1.8)
complete scaleX(1) → scaleX(2.94)
lift     translateY(0) → translateY(-8px)
slide    translateX(0) → translateX(10px)
grow     scaleX(1) → scaleX(1.6)
travel   translateX(0) → translateX(544px)   (900 ms)
draw     rotate(42deg) scaleX(0) → rotate(42deg) scaleX(1)   (se reinicia en cada entrada)
pulse    opacity 1 → .2 → 1, 320 ms, una pasada
respiro  dot: opacity 1 → .2, 1400 ms alternate infinite, desfase 240 ms
```
Por defecto: 420 ms, `cubic-bezier(.2,.8,.2,1)`, `fill: both`, y se invierte en `pointerleave`.
