import { Card, HudCross, HudLabel, ThemeRoot, Timeline } from '@japs/encastre';

const STEPS = [
  { label: 'Diagnóstico', description: 'Mapa del problema y alcance' },
  { label: 'Prototipo', description: 'Interfaz navegable y validada' },
  { label: 'Producción', description: 'Software en manos del equipo' },
];

const ProcessDemo = () => (
  <Card style={{ display: 'grid', gap: 16, width: 320 }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <HudLabel tone="muted">02 — Proceso</HudLabel>
      <HudCross />
    </div>
    <Timeline steps={STEPS} current={1} />
  </Card>
);

export const Process = () => <div style={{ padding: 16 }}><ProcessDemo /></div>;

export const LabelsOnly = () => (
  <div style={{ padding: 16 }}>
    <Timeline current={0} steps={[{ label: '06 — Launch' }, { label: '05 — Beta test' }, { label: '04 — Alpha' }]} />
  </div>
);

export const DarkMode = () => <ThemeRoot theme="dark" style={{ padding: 16, borderRadius: 28 }}><ProcessDemo /></ThemeRoot>;
