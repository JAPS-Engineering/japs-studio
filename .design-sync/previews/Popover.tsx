import { Popover, PopoverItem, ThemeRoot } from '@japs/encastre';

const MenuDemo = () => (
  <Popover label="Navegación" style={{ width: 220 }}>
    <PopoverItem href="#servicios" current>Servicios</PopoverItem>
    <PopoverItem href="#proyectos">Proyectos</PopoverItem>
    <PopoverItem href="#estudio">Estudio</PopoverItem>
  </Popover>
);

export const Menu = () => <div style={{ padding: 24 }}><MenuDemo /></div>;

export const DarkMode = () => <ThemeRoot theme="dark" style={{ padding: 24, borderRadius: 28 }}><MenuDemo /></ThemeRoot>;
