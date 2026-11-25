import { Chip, ThemeRoot } from '@japs/encastre';

const row = { display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' } as const;

export const Variants = () => (
  <div style={{ ...row, padding: 16 }}>
    <Chip>v1.0</Chip>
    <Chip variant="accent">Activo</Chip>
    <Chip variant="inverse">Sistema</Chip>
  </div>
);

export const LiveAndSignal = () => (
  <div style={{ ...row, padding: 16 }}>
    <Chip live>En vivo</Chip>
    <Chip variant="signal">Alerta</Chip>
  </div>
);

export const DarkMode = () => (
  <ThemeRoot theme="dark" style={{ padding: 16, borderRadius: 16 }}>
    <div style={row}>
      <Chip>v1.0</Chip><Chip variant="accent">Activo</Chip><Chip variant="inverse">Sistema</Chip><Chip live>En vivo</Chip>
    </div>
  </ThemeRoot>
);
