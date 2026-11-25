Pill from @japs/encastre. Use via `window.JapsEncastre.Pill` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<ThemeRoot>` (full provider chain in README.md — components read theme/i18n from that context).

Botón o enlace en cápsula, el control base de Encastre. Con `href` es un enlace; sin él, un botón.

- `variant`: `outline` (contorno 1 px, por defecto) · `accent` (CTA menta, **una por vista**) · `solid` (`--inverse`) · `glass` (vidrio sobre Panel o imagen).
- `size="lg"` (52 px) es la CTA principal. `icon` se dibuja al final en un círculo menta que rota −45° en hover (outline, accent, solid).
- **Píldora de vidrio** (lab 5e): `variant="glass" size="lg"` con `leadingIcon` (icono + label). Usa `glass` (`clear` sobre panel, `tinted` sobre imagen oscura, `light` sobre foto clara) y `hover` (`accent` por defecto, `surface`, `signal`, `inverse`, `halo`), igual que `IconButton variant="glass"`.
- Todo es cápsula: nunca esquinas rectas.

```jsx
<div style={{ display: 'flex', gap: 8 }}>
  <Pill variant="accent" href="#empezar">Empezar</Pill>
  <Pill variant="solid">Ver proyectos</Pill>
  <Pill href="#contacto">Contacto</Pill>
</div>
<Pill variant="solid" size="lg" href="#agenda" icon={<Icon name="arrow-right" size={16} />}>Agenda una conversación</Pill>

<Panel>
  <Pill variant="glass" size="lg" leadingIcon={<Icon name="arrow-up-right" />}>Ver plan</Pill>
  <Pill variant="glass" size="lg" hover="halo" leadingIcon={<Icon name="plus" />}>Explorar</Pill>
</Panel>
```

## Props

```ts
interface PillProps {
  /** outline = contorno 1 px · accent = CTA menta (una por vista) · solid = `--inverse` · glass = píldora de vidrio sobre Pan */
  variant?: "glass" | "solid" | "accent" | "outline";
  /** md = 40 px (44 en vidrio) · lg = 52 px (CTA principal). */
  size?: "md" | "lg";
  /** Con href se renderiza como enlace; sin él, como botón. */
  href?: string;
  /** Icono en un círculo menta al final (rota −45° en hover). Úsalo con size="lg" en outline/accent/solid. */
  icon?: React.ReactNode;
  /** Icono al inicio, sin círculo: el formato "icono + label" de la píldora de vidrio. */
  leadingIcon?: React.ReactNode;
  /** Superficie del vidrio (solo `variant="glass"`): clear · light · tinted · solid · bare. */
  glass?: "light" | "solid" | "tinted" | "clear" | "bare";
  /** Relleno al pasar el cursor (solo `variant="glass"`): accent (por defecto) · surface · signal · inverse · halo. */
  hover?: "inverse" | "accent" | "signal" | "surface" | "halo";
  /** Marca la opción activa en una navegación (`aria-current="page"`). */
  current?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
  className?: string;
  style?: CSSProperties;
  children: React.ReactNode;
}
```
