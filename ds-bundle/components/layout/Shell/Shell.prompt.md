Shell from @japs/encastre. Use via `window.JapsEncastre.Shell` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<ThemeRoot>` (full provider chain in README.md — components read theme/i18n from that context).

Carcasa exterior de radio 40 con padding igual al gap (12 px; 8 en móvil). Es el color que "muerde" los paneles mediante `Notch`.

- Úsala como contenedor general cuando la página vive dentro de una tarjeta flotante (refs. 12 y 21).
- Radios concéntricos: shell 40 → panel 28 → card 16 → inner 8 (interior = exterior − gap).

```jsx
<Shell style={{ display: 'grid', gridTemplateColumns: '72px 1fr', gap: 'var(--gap)' }}>
  <Capsule>…</Capsule>
  <Panel>…</Panel>
</Shell>
```

## Props

```ts
interface ShellProps {
  as?: "div" | "section" | "main";
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}
```
