Glass from @japs/encastre. Use via `window.JapsEncastre.Glass` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<ThemeRoot>` (full provider chain in README.md — components read theme/i18n from that context).

Superficie de vidrio esmerilado (blur 16 px, radio 16, hairline blanco). Va **solo sobre un Panel, una imagen o un render**, nunca sobre fondos planos. Ejemplo: la card "¿Qué hacemos?" de ref. 12.

```jsx
<Panel style={{ position: 'relative', minHeight: 360 }}>
  <Glass style={{ position: 'absolute', right: 32, bottom: 32, width: 300 }}>
    <HudLabel>¿Qué hacemos?</HudLabel>
    <Text size="small">Estrategia, diseño de interfaz y desarrollo de software a medida.</Text>
  </Glass>
</Panel>
```

## Props

```ts
interface GlassProps {
  /** Padding interior desde la escala de espacio (sm 16 · md 24 · lg 32). */
  padding?: "none" | "sm" | "md" | "lg";
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}
```
