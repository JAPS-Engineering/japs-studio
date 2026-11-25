import { Card, Heading, HudLabel, Icon, IconButton, LiveDot, NotchStair, Panel, Text, ThemeRoot } from '@japs/encastre';
const IMG_PANEL = 'repeating-linear-gradient(135deg, var(--panel) 0 14px, color-mix(in oklab, var(--panel) 90%, var(--text-on-panel)) 14px 28px)';
const IMG_DARK = 'repeating-linear-gradient(135deg, var(--c-ink) 0 14px, var(--c-graphite) 14px 28px)';
const IMG_LIGHT = 'repeating-linear-gradient(135deg, color-mix(in oklab, var(--c-sage-soft) 70%, var(--c-surface)) 0 14px, var(--c-sage-soft) 14px 28px)';

const Stair = () => (
  <Panel padding="lg" style={{ height: 440 }}>
    <HudLabel>03 — Seguimiento</HudLabel>
    <Heading variant="headline" style={{ fontSize: 40, marginTop: 16 }}>Cada entrega,<br />en su sitio.</Heading>
    <NotchStair corner="br" steps={[
      { width: 232, height: 132, content: (
        <Card padding="sm" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <HudLabel tone="muted" style={{ display: 'flex', alignItems: 'center', gap: 8 }}><LiveDot />En curso</HudLabel>
          <div><Heading variant="h3" style={{ fontSize: 20 }}>Plataforma Atlas</Heading><Text size="small" tone="muted">Sprint 07 de 10</Text></div>
        </Card>
      ) },
      { width: 300, height: 76, content: (
        <Card padding="sm" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 0, paddingBottom: 0 }}>
          <Text size="small" tone="muted">Próxima entrega</Text><HudLabel>14 NOV</HudLabel>
        </Card>
      ) },
      { width: 368, height: 120, content: (
        <Card padding="sm" style={{ display: 'grid', gap: 6, alignContent: 'start' }}>
          <HudLabel tone="muted">Mensaje · Lucía R.</HudLabel>
          <Text size="small">Revisamos el prototipo el jueves, ¿te va bien a las 10:00?</Text>
        </Card>
      ) },
    ]} />
  </Panel>
);

export const Stack = () => <div style={{ width: 640 }}><Stair /></div>;

export const Ledge = () => (
  <div style={{ width: 640 }}>
    <Panel padding="lg" style={{ height: 440, background: IMG_PANEL }}>
      <HudLabel>04 — Reel</HudLabel>
      <Heading variant="headline" style={{ fontSize: 40, marginTop: 16 }}>Movimiento<br />con propósito.</Heading>
      <NotchStair corner="bl" layout="ledge" steps={[
        { width: 68, height: 152, content: (
          <>
            <IconButton label="Ver reel" variant="inverse"><Icon name="play" size={16} /></IconButton>
            <HudLabel vertical>Reel 2026 — 01:24</HudLabel>
          </>
        ) },
        { width: 432, height: 120, content: (
          <Card padding="sm" style={{ display: 'flex', alignItems: 'center' }}>
            <Text size="small">Diseño y código en un mismo equipo: cada pieza se prueba antes de encajar. <a href="#proceso" style={{ color: 'var(--accent-text)', fontWeight: 500, textDecoration: 'none' }}>Ver proceso</a></Text>
          </Card>
        ) },
      ]} />
    </Panel>
  </div>
);

export const DarkMode = () => (
  <ThemeRoot theme="dark" style={{ padding: 12, borderRadius: 40, width: 664 }}><Stair /></ThemeRoot>
);
