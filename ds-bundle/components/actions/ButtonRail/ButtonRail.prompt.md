ButtonRail from @japs/encastre. Use via `window.JapsEncastre.ButtonRail` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<ThemeRoot>` (full provider chain in README.md — components read theme/i18n from that context).

Rail de botones circulares de vidrio sobre imagen (lab 4a y 4b). Los hijos son `IconButton variant="glass"`.

- `orientation="vertical"` (4a): rail lateral en vidrio lechoso (`glass="light"`). La opción activa va con `glass="solid"` y `current`. `capsule` cierra el rail al pie con una cápsula alargada (avatar + contador).
- `orientation="horizontal"` (4b): fila social en vidrio tintado sobre imagen oscura, con siglas en mono y `hover="surface"`.
- El rail ocupa el alto de su contenedor; colócalo con `position: absolute` sobre la imagen.

```jsx
<div style={{ position: 'relative', height: 460, borderRadius: 28, background: 'var(--c-sage-soft)' }}>
  <ButtonRail style={{ position: 'absolute', left: 24, top: 24, bottom: 24, height: 'auto' }}
    capsule={<><span style={{ width: 52, height: 52, borderRadius: '50%', background: 'var(--c-mist)' }} /><IconButton variant="glass" glass="bare" label="Notificaciones (3)">03</IconButton></>}>
    <IconButton variant="glass" glass="solid" current label="Menú"><Icon name="menu" /></IconButton>
    <IconButton variant="glass" glass="light" label="Nuevo proyecto"><Icon name="plus" /></IconButton>
    <IconButton variant="glass" glass="light" label="Ver reel"><Icon name="play" size={16} /></IconButton>
  </ButtonRail>
</div>

<ButtonRail orientation="horizontal" label="Redes">
  <IconButton variant="glass" glass="tinted" hover="surface" label="GitHub" href="#github">GH</IconButton>
  <IconButton variant="glass" glass="tinted" hover="surface" label="LinkedIn" href="#linkedin">IN</IconButton>
</ButtonRail>
```

## Props

```ts
interface ButtonRailProps {
  /** vertical = rail lateral sobre imagen (4a) · horizontal = fila social (4b). */
  orientation?: "vertical" | "horizontal";
  /** Nombre accesible de la navegación. */
  label?: string;
  /** Cápsula de cierre en vidrio lechoso (avatar + contador). Va al pie del rail vertical o al final de la fila. */
  capsule?: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  /** IconButton con `variant="glass"`; la opción activa con `glass="solid"` y `current`. */
  children: React.ReactNode;
}
```
