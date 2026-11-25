import { Card, Chip, HudLabel, Pill, Text, ThemeRoot } from '@japs/encastre';

const Sample = () => (
  <div style={{ display: 'grid', gap: 12 }}>
    <HudLabel tone="muted">ThemeRoot</HudLabel>
    <Card><Text>Superficie, texto y acento resuelven desde los tokens del modo.</Text></Card>
    <div style={{ display: 'flex', gap: 8 }}><Pill variant="accent">Acción</Pill><Chip variant="accent">Activo</Chip></div>
  </div>
);

export const Light = () => (
  <ThemeRoot theme="light" style={{ padding: 20, borderRadius: 28 }}><Sample /></ThemeRoot>
);

export const Dark = () => (
  <ThemeRoot theme="dark" style={{ padding: 20, borderRadius: 28 }}><Sample /></ThemeRoot>
);
