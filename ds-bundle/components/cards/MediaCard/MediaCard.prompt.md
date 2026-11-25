MediaCard from @japs/encastre. Use via `window.JapsEncastre.MediaCard` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<ThemeRoot>` (full provider chain in README.md — components read theme/i18n from that context).

Card de caso o portafolio con imagen y pie de superficie (título + categoría), lab 5b–5d. Los anchos son libres (`width`); el alto por defecto es 400.

- `variant="media"` (5b): la imagen ocupa el borde superior con su propio radio 28.
- `variant="inset"` (5c): la imagen flota con 8 px de aire y radio 20 (= 28 − 8); más ligera sobre la carcasa.
- `variant="link"` (5d): el pie lleva un círculo de 44 px con flecha y **toda la card es enlace** (`href`); el círculo pasa a menta en hover.
- `image`: URL o un nodo propio (render, video). `badge`: label mono sobre la imagen.

```jsx
<div style={{ display: 'flex', gap: 'var(--gap)' }}>
  <MediaCard image="/atlas.jpg" badge="Caso 03" title="Plataforma Atlas" category="Producto digital" />
  <MediaCard variant="inset" width={248} image="/reel.jpg" title="Reel 2026" category="Motion" />
  <MediaCard variant="link" href="/casos/atlas" image="/atlas.jpg" title="Plataforma Atlas" category="Producto digital" />
</div>
```

## Props

```ts
interface MediaCardProps {
  /** media = la imagen ocupa el borde superior con su propio radio 28 (5b) · inset = la imagen flota con 8 px de aire y radio */
  variant?: "media" | "inset" | "link";
  /** URL de la imagen o un nodo propio (render, video, ilustración). */
  image?: React.ReactNode;
  /** Label mono sobre la imagen (p. ej. "Caso 03"). */
  badge?: string;
  title: string;
  /** Categoría bajo el título (p. ej. "Producto digital"). */
  category?: string;
  /** Destino del enlace (`link`) o del título. */
  href?: string;
  /** Ancho en px (los anchos son libres; 380 por defecto). */
  width?: string | number;
  /** Alto total en px (400 por defecto). */
  height?: number;
  className?: string;
  style?: CSSProperties;
}
```
