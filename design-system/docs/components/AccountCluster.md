---
category: Navigation
---

Grupo de cuenta del header, todo a 52 px (lab 7g): un círculo en tinta para cambiar de tema, una cápsula de perfil (nombre, rol en mono y avatar al final) y una píldora «Menú» en `--inverse`. Los botones pasan a menta en hover.

- `theme` indica el modo actual: el círculo muestra el icono para pasar al otro (luna en claro, sol en oscuro).
- `avatarSrc` es la foto de perfil; sin ella aparece un avatar de marcador.

```jsx
<AccountCluster name="Lucía Romero" role="Cliente — Atlas" theme="light" onToggleTheme={toggle} onMenu={openMenu} />
```
