# JAPS Studio · Encastre — convenciones para diseñar

Encastre es limpio, futurista y geek con mesura: paneles salvia con radios amplios que **encajan** mediante muescas con filete inverso, carcasa clara u oscura, acento menta y una capa de datos en mono.

## Setup
- Envuelve cada pantalla en `<ThemeRoot theme="light">` o `<ThemeRoot theme="dark">`. Los dos modos van al mismo nivel; una sección puede anidar otro `ThemeRoot`. Sin él no hay fondo de carcasa (`--shell`) ni tipografía base.
- Los estilos llegan por `styles.css` (incluye `fonts/fonts.css` y `_ds_bundle.css`, que es `encastre.css`). No escribas `@font-face` ni importes otras fuentes: Archivo, Geist y Geist Mono ya están.

## Idioma de estilo
Componente para todo control; para el layout propio usa `style` con **tokens CSS**, nunca hex sueltos:
- Superficies: `var(--shell)` (fondo de página), `var(--surface)`, `var(--surface-2)`, `var(--panel)` (salvia), `var(--inverse)`.
- Texto: `var(--text)`, `var(--text-muted)`, `var(--text-on-panel)`, `var(--accent-text)` (único acento válido como texto).
- Acento: `var(--accent)` (menta, rellenos y CTA) · `var(--signal)` (naranja, un solo dato por vista).
- Espacio: `var(--space-1)`…`var(--space-10)` (4 → 128 px) y `var(--gap)` (12 px; separación entre paneles y cards).
- Radios: `var(--r-shell)` 40 · `var(--r-panel)` 28 · `var(--r-card)` 16 · `var(--r-inner)` 8 · `var(--r-pill)`.
- Hairline: `1px solid var(--hairline)`.

## Reglas
1. `Panel` es la pieza protagonista. Sus esquinas y bordes se muerden con `Notch` (`corner` = `tr` `tl` `br` `bl`, `t` `b` centradas, `l` `r` laterales con `HudLabel vertical`) o con `NotchStair` (escalera; cuenta como una muesca): **máximo 2 por panel, en posiciones opuestas**, cada una con **un solo elemento** (Pill, IconButton, Key, StudioMark, titular). Nunca vacías.
2. Todo es curvo: sin esquinas rectas ni chaflanes. Las líneas rectas (`HudRule`, `Timeline`) sí se permiten.
3. Profundidad por color de superficie: **sin `box-shadow`** salvo `Popover`. `Glass` solo sobre `Panel` o imagen.
   Controles de vidrio (`IconButton variant="glass"`, `Pill variant="glass"`, `ExpandButton`, `SplitAction`, `ButtonRail`, `DoubleButton`): `glass` = `clear` sobre panel, `light` sobre foto clara, `tinted` sobre imagen oscura; `hover` = `accent` por defecto, `signal` solo una vez por vista.
4. Un `Heading variant="statement"` por vista. El resto usa `headline`, `h1`, `h2` o `h3`.
5. Una sola `Pill variant="accent"` (CTA) por vista; las demás van en `outline`, `solid` o `glass`.
6. Detalles HUD (`HudLabel`, `HudCross`, `LiveDot`, `Chip`): máximo 1–2 por viewport, con índices reales (`01 — Proceso`).
7. Piezas sobre imagen (`TagCluster`, `PointerLabel`, `Callout`, `CalloutMeter`): van dentro de un contenedor con `position: relative` (la imagen o un `Panel`) y se colocan con coordenadas en px (`anchor`, `x`/`y`, `target`). Como máximo 2–3 por imagen.
8. Cabecera de página: `SiteHeader` (marca, `SearchField`, `AccountCluster`). Para páginas largas, `SectionIndex` o `VerticalNav` en el borde.
9. Cards de caso: `MediaCard` (rejillas), `HeroCard` (titular sobre imagen), `HistoryStack` y `ConsoleCard` (sobre imagen). `DisplayTitle` llena un contenedor con `position: relative`, alto fijo y `overflow: hidden`, y cuenta como el `statement` de la vista. `HudFill` llena el alto de su card (mínimo 300 px).

## Dónde leer
`styles.css` → `_ds_bundle.css` tiene todos los tokens y clases. Cada componente trae su API en `components/<grupo>/<Name>/<Name>.d.ts` y su uso con ejemplos en `<Name>.prompt.md`. La dirección de arte completa está en `guidelines/DIRECCION-DE-ARTE.md`.

## Ejemplo
```jsx
<ThemeRoot theme="light" style={{ padding: 'var(--gap)', minHeight: '100vh', display: 'grid', gap: 'var(--gap)' }}>
  <Panel padding="lg" style={{ minHeight: 460, paddingBottom: 96 }}>
    <Nav><Pill variant="accent" current href="#">Inicio</Pill><Pill href="#servicios">Servicios</Pill></Nav>
    <Notch corner="tr">
      <Pill href="#contacto">Contacto</Pill>
      <IconButton label="Abrir menú" variant="inverse"><Icon name="menu" /></IconButton>
    </Notch>
    <HudLabel>01 — JAPS Studio / 2026</HudLabel>
    <Heading variant="statement">Software<br />que encaja.</Heading>
    <Notch corner="bl" stackOnMobile>
      <Pill variant="solid" size="lg" href="#agenda" icon={<Icon name="arrow-right" size={16} />}>Agenda una conversación</Pill>
    </Notch>
  </Panel>
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--gap)' }}>
    <Card><HudLabel tone="muted">02 — Proceso</HudLabel><Timeline current={1} steps={[{ label: 'Diagnóstico' }, { label: 'Prototipo' }, { label: 'Producción' }]} /></Card>
    <Card variant="muted"><Heading variant="h2">Piezas que se ensamblan</Heading></Card>
    <Card variant="inverse"><Text>Contenido destacado.</Text></Card>
  </div>
</ThemeRoot>
```

# JapsEncastre (@japs/encastre@1.0.0)

This design system is the published @japs/encastre React library, bundled as a single
browser global. All 46 components are the real upstream code.

## Where things are

- `_ds_bundle.js` — the whole-DS bundle at the project root; loads every component to `window.JapsEncastre`. First line is a `/* @ds-bundle: … */` metadata header.
- `styles.css` — the single stylesheet entry: it `@import`s the tokens, fonts, and component styles (`_ds_bundle.css`). Link this one file.
- `components/<group>/<Name>/<Name>.prompt.md` (example JSX + variants), `<Name>.d.ts` (types), `<Name>.html` (variant grid).
- `tokens/*.css` — CSS custom properties, names verbatim from upstream.
- `fonts/` — `@font-face` files + `fonts.css` (when the package ships fonts).
- `guidelines/` — the design system's own usage guidance (1 doc(s), see `guidelines/index.md`). Read these before composing larger layouts.

For a specific component, `read_file("components/<group>/<Name>/<Name>.prompt.md")`.

## Loading

Add these two lines to your page once (React must be on the page first):

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
```

Components are then available at `window.JapsEncastre.*`. Mount into a dedicated child node (e.g. `<div id="ds-root">`), not the host page's own React root, so the two trees don't collide:

```jsx
const { AccountCluster } = window.JapsEncastre;
ReactDOM.createRoot(document.getElementById('ds-root')).render(<AccountCluster />);
```

Wrap the tree in the provider — most components read theme/i18n from context:

```jsx
<ThemeRoot theme={"light"}>{children}</ThemeRoot>
```

## Tokens

98 CSS custom properties from @japs/encastre. Names are
preserved verbatim from upstream. They are declared inside `_ds_bundle.css` (this DS ships one compiled stylesheet rather than separate token files).

- **color** (8): `--c-surface`, `--surface`, `--surface-2`, …
- **spacing** (12): `--space-1`, `--space-2`, `--space-3`, …
- **typography** (3): `--font-display`, `--font-body`, `--font-mono`
- **shadow** (1): `--shadow-float`
- **other** (74): `--c-paper`, `--c-mist`, `--c-ink`, …

## Components

### navigation
- `AccountCluster` — Grupo de cuenta del header: crculo de tema en tinta, cpsula de perfil con avatar y pldora Men, todo a 52 px (lab 7g).
- `IndexList` — ndice numerado: filas de 44 px con nmero en mono y hairline entre ellas hover en --accent-text (lab 7d, 7e).
- `SearchField` — Buscador en cpsula de 52 px con la lupa en un crculo interior y, al lado, el atajo en mono (lab 7f).
- `SectionIndex` — ndice lateral de secciones para pginas largas: destacado, con riel o mnimo (lab 9a9c).
- `SiteHeader` — Header completo: StudioMark + logotipo, buscador con atajo y grupo de cuenta, en una cpsula con hairline (lab 7h).
- `VerticalNav` — Navegacin vertical de borde: enlaces girados (de abajo arriba) repartidos en el alto, con la pgina activa en pldora (lab 10d).

### actions
- `ButtonRail` — Rail de botones circulares de vidrio sobre imagen: navegacin vertical (4a) o fila social (4b).
- `DoubleButton` — Cpsula de 52 px con dos segmentos de 44 px y hover menta por segmento: carrusel, carrusel con contador o accin con atajo (lab 6a6c).
- `ExpandButton` — Crculo de vidrio de 52 px que al pasar el cursor (o con foco) se alarga hasta 176 px y revela su label (lab 5g).
- `IconButton` — Botn circular con un icono: menta, inverso o de vidrio (52 px, cinco hovers) para usar sobre paneles e imgenes.
- `Key` — Tecla: acceso directo grande con forma propia que cambia de radio al pasar el cursor (lab 7a7c, 10a, 10b).
- `Nav` — Grupo de navegacin en vidrio (ref. 12): pills sobre un Panel con la opcin activa en menta.
- `Pill` — Botn o enlace en cpsula: el control base del sistema (CTA, navegacin, acciones secundarias) y su versin de vidrio.
- `SplitAction` — Par partido: pldora de vidrio (accin principal) + crculo (atajo) separados 8 px, cada uno con su hover (lab 5f).

### on-image
- `Callout` — Callout de dato sobre imagen: card con una pestaa que aloja el icono (filete inverso de 16 px) y gua diagonal hasta el punto (lab 6d).
- `CalloutMeter` — Callout con medidor sobre imagen: card en tinta con cifra y barra de progreso menta, unida al punto por una gua en codo (lab 6e).
- `PointerLabel` — Label con gua sobre imagen: anillo + gua hairline + cpsula de vidrio numerada se espeja segn el lado (lab 3b).
- `TagCluster` — Racimo de tags sobre imagen: cpsulas de superficie en mono dentro de un vidrio con un punto de anclaje (lab 3a).

### layout
- `Capsule` — Cpsula en --inverse (sidebar negra de ref. 21): marca, navegacin vertical y toggle de tema.
- `Card` — Card de radio 16 para mdulos de contenido. La profundidad sale del color de superficie, nunca de sombras.
- `Glass` — Superficie de vidrio esmerilado (blur 16, radio 16). Solo sobre Panel, imagen o render nunca sobre fondos planos.
- `Notch` — Muesca con filete inverso: el shell muerde una esquina o un borde del Panel (o Card) y aloja un nico elemento.
- `NotchStair` — Escalera: muesca de esquina inferior con 23 peldaos y una pieza por peldao (lab 1c, 1d).
- `Panel` — Panel salvia de radio 28 (hero de ref. 12): la superficie protagonista que aloja muescas,
- `Popover` — Superficie flotante para mens y popovers: la nica que lleva sombra (--shadow-float).
- `PopoverItem` — tem de un Popover: enlace o botn con hover en --surface-2.
- `Shell` — Carcasa exterior (radio 40, padding  gap): el fondo que muerde los paneles mediante muescas.

### data-display
- `Chip` — Chip de dato relleno en cpsula (mono maysculas, cifras tabulares): versin, ndice, estado o contador.
- `LiveDot` — Punto de 8 px en --signal que marca algo en vivo. Decorativo: acompalo siempre de texto.
- `Tag` — Tag de contorno 1 px en mono maysculas (ref. 21) para clasificar contenido: servicios, tecnologas, temas.
- `Timeline` — Lnea de tiempo vertical con nodos (ref. 21): etapas de un proceso con etiqueta mono y descripcin opcional.

### cards
- `ConsoleCard` — Consola con aro: un vidrio de 8 px abraza una card de superficie (radio 36  28 + 8) con control segmentado, flechas y una sola CTA accent (l
- `HeroCard` — Hero con accin partida: titular arriba y, abajo, pldora larga + crculo en vidrio tintado sobre la imagen (lab 5a).
- `HistoryStack` — Historial en cpsulas sobre imagen: miniatura, hora en mono y acceso la versin actual en --inverse (lab 3c).
- `MediaCard` — Card con imagen y pie de superficie (ttulo + categora) para casos y portafolio (lab 5b5d).

### typography
- `DisplayTitle` — Titular de exhibicin tras un objeto: llena su contenedor (con position: relative y alto fijo) y deja el objeto por encima (lab 9d, 9e, 10d).
- `Heading` — Titular del sistema (Archivo) con escala fluida. Solo un statement por vista.
- `Text` — Texto de lectura en Geist (medida mxima 68 ch para prrafos).

### hud
- `HudCross` — Cruz + de 11 px para marcar intersecciones de retcula. Decorativa mximo 12 detalles HUD por viewport.
- `HudFill` — Relleno HUD para zonas vacas: ocho composiciones tcnicas con movimiento al pasar el cursor (lab 11a11h).
- `HudLabel` — Label HUD: Geist Mono 12 px en maysculas con tracking +0.08em, para ndices (01  Proceso), seriales y metadatos.
- `HudRule` — Divisor hairline de 1 px en --hairline.

### icons
- `Icon` — Icono de trazo redondeado del sistema (2 px, terminaciones round): flechas, men, ms, cerrar, sol, luna, play y bsqueda.

### brand
- `LogoBar` — Barra de marcas en cpsula de 60 px: label HUD a la izquierda y marcas monocromas o tecnologas a la derecha (lab 8a8c).
- `StudioMark` — Marca de JAPS Studio: cuatro cpsulas a 45 (rayado diagonal), en currentColor. Su sitio natural es la muesca tr.

### theme
- `ThemeRoot` — Raz de tema: fija data-theme y pinta el fondo --shell con la tipografa base.
