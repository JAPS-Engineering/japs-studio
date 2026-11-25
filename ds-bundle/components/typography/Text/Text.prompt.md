Text from @japs/encastre. Use via `window.JapsEncastre.Text` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<ThemeRoot>` (full provider chain in README.md — components read theme/i18n from that context).

Texto de lectura en Geist (16/1.6; `body-l` 18; `small` 14), con medida máxima de 68 ch en párrafos.

- `tone`: `inherit` (por defecto; correcto sobre `Panel`, `Card` y `ThemeRoot`) · `default` (fuerza `--text`) · `muted` · `accent` (`--accent-text`).
- Nunca pongas menta (`--accent`) como color de texto sobre fondos claros: usa `tone="accent"`.

```jsx
<Text size="body-l">Diseñamos y construimos producto digital modular.</Text>
<Text size="small" tone="muted">Texto secundario y notas de apoyo.</Text>
```

## Props

```ts
interface TextProps {
  /** body 16/1.6 · body-l 18 · small 14. */
  size?: "body" | "body-l" | "small";
  /** inherit = color del contenedor (correcto sobre Panel, Card y ThemeRoot) · default = fuerza `--text` · muted = `--text-mu */
  tone?: "default" | "muted" | "accent" | "inherit";
  as?: "div" | "p" | "span";
  className?: string;
  style?: CSSProperties;
  children: React.ReactNode;
}
```
