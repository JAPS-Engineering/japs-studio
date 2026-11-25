import { Pill, SiteHeader, ThemeRoot } from '@japs/encastre';

export const Full = () => (
  <div style={{ width: 1180, zoom: 0.54 }}>
    <SiteHeader search={{ placeholder: 'Buscar proyectos, casos…' }} account={{ name: 'Lucía Romero', role: 'Cliente — Atlas' }} />
  </div>
);

export const Minimal = () => (
  <div style={{ width: 760 }}>
    <SiteHeader search={false} end={<Pill variant="accent" href="#contacto">Hablemos</Pill>} />
  </div>
);

export const DarkMode = () => (
  <ThemeRoot theme="dark" style={{ padding: 16, borderRadius: 40, width: 1212, zoom: 0.52 }}>
    <SiteHeader account={{ name: 'Lucía Romero', role: 'Cliente — Atlas', theme: 'dark' }} />
  </ThemeRoot>
);
