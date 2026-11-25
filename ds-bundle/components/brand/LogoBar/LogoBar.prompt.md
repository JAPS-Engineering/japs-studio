LogoBar from @japs/encastre. Use via `window.JapsEncastre.LogoBar` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<ThemeRoot>` (full provider chain in README.md — components read theme/i18n from that context).

Barra de marcas en cápsula de 60 px: label HUD a la izquierda y marcas monocromas de 23 px a la derecha, con hover en `--accent-text` (lab 8a–8c).

- `variant="logos"` (8a): en `--surface-2`. `logos`: `{ logo, name, href }[]`, donde `logo` es el **SVG monocromo del cliente en `currentColor`** (nunca logos a color).
- `variant="stack"` (8b): sin logos; `items` con tecnologías en mono separadas por puntos.
- `variant="glass"` (8c): en vidrio sobre panel o imagen. `more` cierra con un `Chip` inverso que resume el resto (p. ej. «+12»).

```jsx
<LogoBar label="Han confiado en nosotros" logos={clients.map((c) => ({ logo: <c.Svg />, name: c.name, href: c.url }))} />
<LogoBar variant="stack" label="Construimos con" items={['React', 'Swift', 'Kotlin', 'Node', 'Postgres']} />
<Panel><LogoBar variant="glass" label="Han confiado en nosotros" logos={clientLogos} more="+12" /></Panel>
```

## Props

```ts
interface LogoBarProps {
  /** logos = marcas de clientes (8a) · stack = tecnologías en mono (8b) · glass = logos en vidrio sobre panel o imagen (8c). */
  variant?: "glass" | "logos" | "stack";
  /** Label HUD de la izquierda. */
  label: string;
  /** Marcas para `logos` y `glass`. */
  logos?: LogoBarLogo[];
  /** Tecnologías para `stack`. */
  items?: string[];
  /** Chip inverso final que resume el resto (p. ej. "+12"). */
  more?: string;
  className?: string;
  style?: CSSProperties;
}
```
