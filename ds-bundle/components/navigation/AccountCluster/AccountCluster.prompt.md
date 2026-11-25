AccountCluster from @japs/encastre. Use via `window.JapsEncastre.AccountCluster` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<ThemeRoot>` (full provider chain in README.md — components read theme/i18n from that context).

Grupo de cuenta del header, todo a 52 px (lab 7g): un círculo en tinta para cambiar de tema, una cápsula de perfil (nombre, rol en mono y avatar al final) y una píldora «Menú» en `--inverse`. Los botones pasan a menta en hover.

- `theme` indica el modo actual: el círculo muestra el icono para pasar al otro (luna en claro, sol en oscuro).
- `avatarSrc` es la foto de perfil; sin ella aparece un avatar de marcador.

```jsx
<AccountCluster name="Lucía Romero" role="Cliente — Atlas" theme="light" onToggleTheme={toggle} onMenu={openMenu} />
```

## Props

```ts
interface AccountClusterProps {
  /** Nombre visible en la cápsula de perfil. */
  name: string;
  /** Rol o cuenta, en mono (p. ej. "Cliente — Atlas"). */
  role?: string;
  /** URL de la foto de perfil. Sin ella se muestra un avatar de marcador. */
  avatarSrc?: string;
  profileHref?: string;
  /** Modo actual: el círculo muestra el icono para pasar al otro. */
  theme?: "light" | "dark";
  onToggleTheme?: MouseEventHandler<HTMLButtonElement>;
  /** Texto de la píldora de menú. */
  menuLabel?: string;
  onMenu?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  style?: CSSProperties;
}
```
