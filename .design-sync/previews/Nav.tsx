import { Nav, Panel, Pill, ThemeRoot } from '@japs/encastre';

const Items = () => (
  <Nav label="Principal">
    <Pill variant="accent" current href="#">Inicio</Pill>
    <Pill href="#servicios">Servicios</Pill>
    <Pill href="#proyectos">Proyectos</Pill>
    <Pill href="#estudio">Estudio</Pill>
  </Nav>
);

export const OnPanel = () => <Panel padding="md"><Items /></Panel>;

export const DarkMode = () => <ThemeRoot theme="dark" style={{ padding: 12, borderRadius: 28 }}><Panel padding="md"><Items /></Panel></ThemeRoot>;
