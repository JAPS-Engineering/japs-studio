HudFill from @japs/encastre. Use via `window.JapsEncastre.HudFill` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<ThemeRoot>` (full provider chain in README.md — components read theme/i18n from that context).

Relleno HUD para zonas vacías (lab 11a–11h): ocho composiciones técnicas en mono con trazos de extremos redondos, puntos en vez de damero y bloques con radio. Reaccionan al pasar el cursor. **Cuentan para el límite de 1–2 detalles HUD por viewport.**

`fill`:
- `registration`: cruces de registro con serial (`label`); en hover las cruces giran 90°.
- `edge-ticks`: regla de borde con marcas e índices (`label`, `items` = 2 índices); en hover se alargan en escalera.
- `progress`: barra técnica (`label`, `progress` 0–1, `value`/`total`, `status`, `code`); en hover se completa.
- `ghost-index`: dígitos fantasma a 130 px con ficha (`items` = `{ digits, title, meta }[]`); en hover pasa una ola.
- `dot-strip`: tiras de puntos que **respiran en reposo** (la única pieza animada sin hover); `items` = 3 etiquetas.
- `series`: coordenadas (`label`, admite `\n`), fecha en serie (`value`) y ratio (`progress`/`total`); en hover cuentan desde cero.
- `marked-card`: card menta de 360 px con código gigante (`code`, `title`, `status`); en hover las marcas se alargan y el bloque recorre la barra.
- `leader`: guía diagonal con quiebre y etiqueta (`code`, `label`, `status`); en hover la diagonal se vuelve a trazar.

Llena su contenedor (mínimo 300 px de alto): ponlo dentro de una `Card` o un hueco de la retícula. Todo el movimiento se apaga con `prefers-reduced-motion` o con `motion={false}`.

```jsx
<Card padding="none" style={{ height: 300 }}><HudFill fill="registration" /></Card>
<Card padding="none" style={{ height: 300 }}><HudFill fill="progress" label="SPRINT_07" progress={0.34} value="7 114" total="25 565" /></Card>
<HudFill fill="marked-card" code="1A" title="Plataforma Atlas" status="Caso 1A" />
```

## Props

```ts
interface HudFillProps {
  /** registration = cruces de registro con serial (11a) · edge-ticks = regla de borde con índices (11b) · progress = barra té */
  fill: "registration" | "edge-ticks" | "progress" | "ghost-index" | "dot-strip" | "series" | "marked-card" | "leader";
  /** Activa el movimiento (hover y respiro). Se apaga siempre con prefers-reduced-motion. */
  motion?: boolean;
  /** Texto principal: serial (registration), sección (edge-ticks), etiqueta de barra (progress), coordenadas (series), etique */
  label?: string;
  /** Título (marked-card) o pie (series). */
  title?: string;
  /** Código corto: "1A" (marked-card), "N1" (leader), "01 >> NUL" (progress). */
  code?: string;
  /** Estado secundario en mono (progress, leader, marked-card). */
  status?: string;
  /** Avance 0–1 (progress). */
  progress?: number;
  /** Valor y total del contador (progress: "7 114" / "25 565"; series: fecha en serie y ratio). */
  value?: string;
  total?: string;
  /** Índices (edge-ticks), etiquetas de fila (dot-strip) o fichas (ghost-index). */
  items?: (string | HudFillItem)[];
  className?: string;
  style?: CSSProperties;
}
```
