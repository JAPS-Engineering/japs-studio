DisplayTitle from @japs/encastre. Use via `window.JapsEncastre.DisplayTitle` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<ThemeRoot>` (full provider chain in README.md — components read theme/i18n from that context).

Titular de exhibición tras un objeto (lab 9d, 9e y 10d). **Llena su contenedor**, que debe tener `position: relative`, un alto fijo y `overflow: hidden`. Los `children` son la capa del objeto (PNG recortado, render), que queda por encima del texto.

- `variant="split"` (9d): la palabra se parte en diagonal, la primera mitad arriba a la izquierda y la segunda abajo a la derecha, en Archivo expandido 800 (200 px). `splitAt` elige el corte. El objeto tapa la unión.
- `variant="condensed"` (9e): una sola línea centrada en Archivo condensado (260 px); un objeto vertical tapa el centro.
- `variant="vertical"` (10d): Archivo expandido (150 px) girado sobre el borde derecho, de abajo arriba; acompáñalo de `VerticalNav`.
- Úsalo una vez por página, como pieza de exhibición. Combínalo con `SectionIndex` (spotlight con split, minimal con condensed).

```jsx
<Card style={{ position: 'relative', height: 560, overflow: 'hidden' }}>
  <DisplayTitle variant="split" text="Software" splitAt={4}>
    <img src="/objeto.png" alt="" style={{ width: 380 }} />
  </DisplayTitle>
</Card>

<Card style={{ position: 'relative', height: 520, overflow: 'hidden' }}>
  <DisplayTitle variant="condensed" text="Encastre"><img src="/figura.png" alt="" style={{ height: 420 }} /></DisplayTitle>
</Card>
```

## Props

```ts
interface DisplayTitleProps {
  /** split = la palabra se parte en diagonal (arriba izquierda, abajo derecha), Archivo expandido 800 (9d) · condensed = una  */
  variant: "vertical" | "split" | "condensed";
  /** La palabra o frase del titular. */
  text: string;
  /** Posición del corte en `split` (por defecto, la mitad de la palabra). */
  splitAt?: number;
  /** Tamaño en px (split 200 · condensed 260 · vertical 150). */
  size?: number;
  className?: string;
  style?: CSSProperties;
  /** Capa del objeto que tapa el titular (PNG recortado, render), con z-index superior. */
  children?: React.ReactNode;
}
```
