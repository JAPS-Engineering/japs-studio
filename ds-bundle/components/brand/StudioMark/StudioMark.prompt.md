StudioMark from @japs/encastre. Use via `window.JapsEncastre.StudioMark` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<ThemeRoot>` (full provider chain in README.md — components read theme/i18n from that context).

Marca de JAPS Studio: cuatro cápsulas a 45° (rayado diagonal) dibujadas en `currentColor` y escaladas en `em` (lab 2a). Toma el color de su contenedor: tinta sobre la carcasa, papel sobre el panel y menta sobre `--inverse`.

- `size`: lado en px. Usa 56 en una muesca o un header, 42 en paneles y 28 en chips.
- Con `href` es un enlace (hover en `--accent-text`) y necesita `label`.
- Su sitio natural es la muesca `tr` del hero.

```jsx
<Panel style={{ minHeight: 320 }}>
  <Notch corner="tr"><StudioMark href="#inicio" label="JAPS Studio — inicio" /></Notch>
</Panel>
<Card variant="inverse"><span style={{ color: 'var(--accent)' }}><StudioMark size={28} /></span></Card>
```

## Props

```ts
interface StudioMarkProps {
  /** Lado de la marca en px (56 por defecto; 42 en paneles, 28 en chips). Todo escala en `em`. */
  size?: number;
  /** Con href se renderiza como enlace; en hover pasa a `--accent-text`. */
  href?: string;
  /** Nombre accesible (obligatorio como enlace). */
  label?: string;
  className?: string;
  style?: CSSProperties;
}
```
