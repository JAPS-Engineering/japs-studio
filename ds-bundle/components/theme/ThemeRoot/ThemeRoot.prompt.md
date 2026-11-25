ThemeRoot from @japs/encastre. Use via `window.JapsEncastre.ThemeRoot` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<ThemeRoot>` (full provider chain in README.md — components read theme/i18n from that context).

Raíz de tema de Encastre: fija `data-theme` (`light` | `dark`), pinta el fondo `--shell` y aplica la tipografía base (Geist 16/1.6). Los dos modos van al mismo nivel.

- Envuelve cada pantalla en un `ThemeRoot`. Sin él no hay fondo de carcasa ni modo explícito (se usa light por defecto y `prefers-color-scheme`).
- Se puede anidar: una sección dentro de una pantalla clara puede ir en `<ThemeRoot theme="dark">`.
- No cambies colores a mano: todo resuelve desde los tokens semánticos (`--shell`, `--surface`, `--text`, `--accent`…).

```jsx
<ThemeRoot theme="dark" style={{ padding: 'var(--gap)', minHeight: '100vh' }}>
  <Panel padding="lg">…</Panel>
</ThemeRoot>
```

## Props

```ts
interface ThemeRootProps {
  /** Modo de color del subárbol. Los dos modos van al mismo nivel. */
  theme?: "light" | "dark";
  /** Elemento HTML que se renderiza. */
  as?: "div" | "section" | "main" | "body";
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}
```
