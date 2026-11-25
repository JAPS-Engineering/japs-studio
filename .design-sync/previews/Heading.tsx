import { Heading, HudLabel, Notch, Panel, ThemeRoot } from '@japs/encastre';

const IMG_PANEL = 'repeating-linear-gradient(135deg, var(--panel) 0 14px, color-mix(in oklab, var(--panel) 90%, var(--text-on-panel)) 14px 28px)';
const stack = { display: 'grid', gap: 16, paddingBottom: 12 } as const;

export const Scale = () => (
  <div style={stack}>
    <Heading variant="statement" style={{ fontSize: 64 }}>Encaja.</Heading>
    <Heading variant="headline" style={{ fontSize: 48 }}>Futuro modular</Heading>
    <Heading variant="h1" style={{ fontSize: 40 }}>Software a medida</Heading>
    <Heading variant="h2">Diseño que calza con tu operación</Heading>
    <Heading variant="h3">Prototipo navegable y validado</Heading>
  </div>
);

export const Statement = () => (
  <div style={stack}>
    <HudLabel tone="muted">01 — JAPS Studio</HudLabel>
    <Heading variant="statement" style={{ fontSize: 80 }}>Software<br />que encaja.</Heading>
  </div>
);

export const CondensedOnImage = () => (
  <div style={{ position: 'relative', height: 400, width: 640, borderRadius: 28, background: IMG_PANEL, color: 'var(--text-on-panel)', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', right: 28, top: 20, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 12, textAlign: 'right' }}>
      <Heading variant="condensed" style={{ fontSize: 176 }}>Atlas<br />3.0</Heading>
      <HudLabel>Plataforma — Caso 03 / 2026</HudLabel>
    </div>
  </div>
);

export const CondensedInNotch = () => (
  <div style={{ width: 640 }}>
    <Panel padding="none" style={{ height: 400, background: IMG_PANEL, overflow: 'hidden' }}>
      <Notch corner="tl" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: 8, padding: '4px 24px 16px 8px' }}>
        <Heading variant="condensed" style={{ fontSize: 88, lineHeight: 0.82 }}>Atlas 3.0</Heading>
        <HudLabel tone="muted">@japs_studio — 2026</HudLabel>
      </Notch>
    </Panel>
  </div>
);

export const DarkMode = () => (
  <ThemeRoot theme="dark" style={{ padding: 24, borderRadius: 16, display: 'grid', gap: 12 }}>
    <Heading variant="headline" style={{ fontSize: 48 }}>Futuro modular</Heading>
    <Heading variant="h2">Diseño que calza con tu operación</Heading>
  </ThemeRoot>
);
