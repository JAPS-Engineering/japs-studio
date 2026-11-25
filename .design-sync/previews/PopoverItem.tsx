import { Popover, PopoverItem, ThemeRoot } from '@japs/encastre';

export const States = () => (
  <div style={{ padding: 24 }}>
    <Popover label="Cuenta" style={{ width: 220 }}>
      <PopoverItem href="#perfil" current>Perfil (activo)</PopoverItem>
      <PopoverItem href="#ajustes">Ajustes</PopoverItem>
      <PopoverItem href="#salir">Cerrar sesión</PopoverItem>
    </Popover>
  </div>
);

export const DarkMode = () => (
  <ThemeRoot theme="dark" style={{ padding: 24, borderRadius: 28 }}>
    <Popover label="Cuenta" style={{ width: 220 }}>
      <PopoverItem href="#perfil" current>Perfil (activo)</PopoverItem>
      <PopoverItem href="#salir">Cerrar sesión</PopoverItem>
    </Popover>
  </ThemeRoot>
);
