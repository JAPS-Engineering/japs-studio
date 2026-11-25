ConsoleCard from @japs/encastre. Use via `window.JapsEncastre.ConsoleCard` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<ThemeRoot>` (full provider chain in README.md — components read theme/i18n from that context).

Consola con aro (lab 3d): un aro de vidrio de 8 px abraza una card de superficie (radio exterior 36 = 28 + 8). Lleva un label mono, flechas (anterior en menta, siguiente en inverso), un control segmentado (`options`, la activa en `solid`) y **una sola** CTA accent (`cta`).

- Va sobre una imagen o un `Panel` (el aro es vidrio), posicionada en una esquina.

```jsx
<ConsoleCard label="Vista — Caso 03" options={['Móvil', 'Tablet', 'Escritorio']} current={0}
  onSelect={setDevice} cta={{ label: 'Ver en vivo', href: '#en-vivo' }} />
```

## Props

```ts
interface ConsoleCardProps {
  /** Label mono de la cabecera (p. ej. "Vista — Caso 03"). */
  label: string;
  /** Opciones del control segmentado (p. ej. Móvil, Tablet, Escritorio). */
  options: string[];
  /** Índice (desde 0) de la opción activa. */
  current?: number;
  onSelect?: (index: number) => void;
  onPrev?: MouseEventHandler<HTMLElement>;
  onNext?: MouseEventHandler<HTMLElement>;
  /** La única CTA accent de la consola. */
  cta: { label: string; href?: string; onClick?: MouseEventHandler<HTMLElement>; };
  className?: string;
  style?: CSSProperties;
}
```
