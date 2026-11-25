HistoryStack from @japs/encastre. Use via `window.JapsEncastre.HistoryStack` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<ThemeRoot>` (full provider chain in README.md — components read theme/i18n from that context).

Historial en cápsulas sobre imagen (lab 3c): cada versión con miniatura, hora en mono y acceso. La actual (`current`) va en `--inverse` y el resto en superficie. Colócalo con `position: absolute` en una esquina de la imagen.

```jsx
<div style={{ position: 'relative', height: 400, borderRadius: 28, background: 'url(/render.jpg) center/cover' }}>
  <HistoryStack style={{ position: 'absolute', right: 24, bottom: 24 }} current={0} items={[
    { time: '19:02', label: 'Versión 03 · actual', href: '#version-3' },
    { time: '18:49', label: 'Versión 02', href: '#version-2' },
    { time: '18:36', label: 'Versión 01', href: '#version-1' },
  ]} />
</div>
```

## Props

```ts
interface HistoryStackProps {
  items: HistoryItem[];
  /** Índice (desde 0) de la versión actual; va en `--inverse`. */
  current?: number;
  label?: string;
  className?: string;
  style?: CSSProperties;
}
```
