SplitAction from @japs/encastre. Use via `window.JapsEncastre.SplitAction` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<ThemeRoot>` (full provider chain in README.md — components read theme/i18n from that context).

Par partido: una píldora de vidrio (acción principal) y un círculo de vidrio (atajo), separados 8 px y cada uno con su propio hover (lab 5f).

- `glass`: `clear` sobre panel, `tinted` sobre imagen oscura (`light` sobre foto clara).
- `hover`: el mismo para las dos piezas (`accent` por defecto, `surface`, `signal`, `inverse`, `halo`).
- `shortcut` es el atajo: `{ icon, label, href?, onClick? }`.

```jsx
<SplitAction label="Agenda una llamada" href="#agenda" leadingIcon={<Icon name="arrow-up-right" />}
  shortcut={{ icon: <Icon name="arrow-right" />, label: 'Siguiente' }} />
<SplitAction glass="tinted" hover="surface" label="Ver portafolio" href="#portafolio" leadingIcon={<Icon name="arrow-up-right" />}
  shortcut={{ icon: <Icon name="plus" />, label: 'Abrir' }} />
```

## Props

```ts
interface SplitActionProps {
  /** Texto de la acción principal (píldora). */
  label: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  /** Icono al inicio de la píldora. */
  leadingIcon?: React.ReactNode;
  /** Atajo en el círculo: icono y nombre accesible. */
  shortcut: { icon: ReactNode; label: string; href?: string; onClick?: MouseEventHandler<HTMLElement>; };
  /** Superficie del vidrio de las dos piezas: clear (sobre panel) · tinted (sobre imagen oscura) · light. */
  glass?: "light" | "solid" | "tinted" | "clear" | "bare";
  /** Hover de las dos piezas: accent (por defecto) · surface · signal · inverse · halo. */
  hover?: "inverse" | "accent" | "signal" | "surface" | "halo";
  className?: string;
  style?: CSSProperties;
}
```
