Tag from @japs/encastre. Use via `window.JapsEncastre.Tag` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<ThemeRoot>` (full provider chain in README.md — components read theme/i18n from that context).

Tag de contorno 1 px en mono mayúsculas (ref. 21) para **clasificar** contenido: servicios, tecnologías, temas. Para datos con relleno (versión, estado, contador) usa `Chip`.

```jsx
<div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
  <Tag>Producto digital</Tag><Tag>UI/UX</Tag><Tag>IA aplicada</Tag><Tag>Datos</Tag>
</div>
```

## Props

```ts
interface TagProps {
  className?: string;
  style?: CSSProperties;
  children: React.ReactNode;
}
```
