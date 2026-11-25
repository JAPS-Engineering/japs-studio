import { Card, Heading, HudLabel, Tag, Text, ThemeRoot } from '@japs/encastre';

const grid = { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--gap)' } as const;

const Trio = () => (
  <div style={grid}>
    <Card><HudLabel tone="muted">default</HudLabel><Text size="small" style={{ marginTop: 8 }}>Superficie principal.</Text></Card>
    <Card variant="muted"><HudLabel tone="muted">muted</HudLabel><Text size="small" style={{ marginTop: 8 }}>Superficie secundaria.</Text></Card>
    <Card variant="inverse"><HudLabel>inverse</HudLabel><Text size="small" style={{ marginTop: 8 }}>Contenido destacado.</Text></Card>
  </div>
);

export const Variants = () => <div style={{ padding: 16 }}><Trio /></div>;

export const ContentModule = () => (
  <Card variant="muted" style={{ display: 'grid', gap: 14 }}>
    <HudLabel tone="muted">03 — Capacidades</HudLabel>
    <Heading variant="headline" style={{ fontSize: 40 }}>Piezas que se ensamblan</Heading>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}><Tag>Producto digital</Tag><Tag>UI/UX</Tag><Tag>IA aplicada</Tag></div>
  </Card>
);

export const DarkMode = () => <ThemeRoot theme="dark" style={{ padding: 16, borderRadius: 28 }}><Trio /></ThemeRoot>;
