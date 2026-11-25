IconButton from @japs/encastre. Use via `window.JapsEncastre.IconButton` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<ThemeRoot>` (full provider chain in README.md — components read theme/i18n from that context).

Botón circular con un `Icon`. `label` es obligatorio (es el `aria-label`).

- `variant="accent"` (menta, rota −45° en hover) o `variant="inverse"` (`--inverse`; el menú de la muesca TR de la ref. 21). Miden 44 px; `size="lg"` los lleva a 52.
- `variant="glass"` (lab 4c–4g): círculo de vidrio de **52 px** para usar sobre un `Panel`, una imagen o un render.
  - `glass`: `clear` (vidrio del sistema, sobre panel) · `light` (lechoso, sobre foto clara) · `tinted` (sobre imagen oscura) · `solid` (opción activa de un rail) · `bare` (sin fondo, para un contador).
  - `hover`: `accent` (por defecto) · `surface` (se rellena de blanco; el más neutro sobre imágenes oscuras) · `signal` (naranja; **un solo botón por vista**, para acciones en vivo o destructivas) · `inverse` (tinta; sobre imágenes claras) · `halo` (aro menta; solo se rellena al pulsar).
  - Admite siglas en mono como contenido (`"GH"`) para una fila social.
- `current` marca la opción activa de un rail.

```jsx
<IconButton label="Siguiente"><Icon name="arrow-up-right" /></IconButton>
<IconButton label="Abrir menú" variant="inverse"><Icon name="menu" /></IconButton>

<Panel>
  <IconButton variant="glass" label="Abrir"><Icon name="arrow-up-right" /></IconButton>
  <IconButton variant="glass" hover="halo" label="Añadir"><Icon name="plus" /></IconButton>
</Panel>
<IconButton variant="glass" glass="tinted" hover="surface" label="GitHub" href="#github">GH</IconButton>
```

## Props

```ts
interface IconButtonProps {
  /** Nombre accesible obligatorio (`aria-label`). */
  label: string;
  /** accent = menta (rota −45° en hover) · inverse = `--inverse` (menú en la muesca TR) · glass = vidrio sobre Panel o imagen */
  variant?: "glass" | "inverse" | "accent";
  /** Superficie del vidrio (solo `variant="glass"`): clear · light · tinted · solid (activo) · bare. */
  glass?: "light" | "solid" | "tinted" | "clear" | "bare";
  /** Relleno al pasar el cursor (solo `variant="glass"`): accent (por defecto) · surface · signal · inverse · halo. */
  hover?: "inverse" | "accent" | "signal" | "surface" | "halo";
  /** md = 44 px · lg = 52 px. Por defecto 52 en vidrio y 44 en el resto. */
  size?: "md" | "lg";
  /** Marca la opción activa en un rail (`aria-current="page"`). */
  current?: boolean;
  /** Con href se renderiza como enlace. */
  href?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  className?: string;
  style?: CSSProperties;
  /** El icono (normalmente `<Icon name="…" />`) o unas siglas cortas en mono (p. ej. "GH"). */
  children: React.ReactNode;
}
```
