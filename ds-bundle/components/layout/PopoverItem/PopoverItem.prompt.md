PopoverItem from @japs/encastre. Use via `window.JapsEncastre.PopoverItem` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<ThemeRoot>` (full provider chain in README.md — components read theme/i18n from that context).

Ítem de un `Popover`: enlace con hover en `--surface-2`; `current` marca el activo. Va siempre dentro de un `Popover`.

```jsx
<Popover label="Cuenta">
  <PopoverItem href="#perfil" current>Perfil</PopoverItem>
  <PopoverItem href="#salir">Cerrar sesión</PopoverItem>
</Popover>
```

## Props

```ts
interface PopoverItemProps {
  href?: string;
  /** Marca el ítem activo (`aria-current`). */
  current?: boolean;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}
```
