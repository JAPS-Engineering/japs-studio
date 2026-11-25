import { Heading, Text, ThemeRoot, VerticalNav } from '@japs/encastre';

const ITEMS = [
  { label: 'Inicio', href: '#inicio' }, { label: 'Casos', href: '#casos' },
  { label: 'Estudio', href: '#estudio' }, { label: 'Contacto', href: '#contacto' },
];

export const OnInverse = () => (
  <div style={{ position: 'relative', height: 420, width: 420, borderRadius: 28, background: 'var(--inverse)', color: 'var(--text-on-inverse)', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', left: 28, top: 28, width: 240 }}><Text size="small">Atlas es la plataforma de pagos que diseñamos y construimos de punta a punta.</Text></div>
    <VerticalNav surface="inverse" current={3} items={ITEMS} style={{ position: 'absolute', right: 24, top: 24, bottom: 24 }} />
  </div>
);

export const OnShell = () => (
  <div style={{ position: 'relative', height: 360, width: 300, padding: 24, boxSizing: 'border-box' }}>
    <Heading variant="h3">Estudio</Heading>
    <VerticalNav current={2} items={ITEMS} style={{ position: 'absolute', right: 16, top: 16, bottom: 16 }} />
  </div>
);

export const DarkMode = () => (
  <ThemeRoot theme="dark" style={{ position: 'relative', height: 360, width: 300, borderRadius: 28 }}>
    <VerticalNav current={1} items={ITEMS} style={{ position: 'absolute', right: 16, top: 16, bottom: 16 }} />
  </ThemeRoot>
);
