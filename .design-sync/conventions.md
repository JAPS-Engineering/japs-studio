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
