Icon from @japs/encastre. Use via `window.JapsEncastre.Icon` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<ThemeRoot>` (full provider chain in README.md — components read theme/i18n from that context).

Iconos de trazo redondeado de 2 px: `arrow-right`, `arrow-left`, `arrow-up-right`, `menu`, `plus`, `close`, `sun`, `moon`, `play` y `search`. Heredan `currentColor`. Sin `title` son decorativos (`aria-hidden`).

```jsx
<Icon name="arrow-right" size={16} />
<Icon name="search" />
<Icon name="sun" title="Modo claro" />
```

## Props

```ts
interface IconProps {
  name: "arrow-right" | "arrow-left" | "arrow-up-right" | "menu" | "plus" | "close" | "moon" | "sun" | "play" | "search";
  /** Lado en px. */
  size?: number;
  /** Texto accesible; sin él el icono es decorativo (`aria-hidden`). */
  title?: string;
  style?: CSSProperties;
}
```
