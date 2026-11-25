import { Heading, HudLabel, Notch, Panel, StudioMark, ThemeRoot } from '@japs/encastre';

export const InNotch = () => (
  <div style={{ width: 640 }}>
    <Panel padding="lg" style={{ height: 300, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <HudLabel>01 — Estudio</HudLabel>
      <Heading variant="headline" style={{ fontSize: 48 }}>Software<br />que encaja.</Heading>
      <Notch corner="tr"><StudioMark href="#inicio" label="JAPS Studio — inicio" /></Notch>
    </Panel>
  </div>
);

const tile = { height: 96, borderRadius: 16, padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 } as const;

export const Sizes = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, padding: 16 }}>
    <div style={{ ...tile, background: 'var(--surface)', color: 'var(--text)' }}><HudLabel tone="muted">Superficie · 56</HudLabel><StudioMark /></div>
    <div style={{ ...tile, background: 'var(--panel)', color: 'var(--text-on-panel)' }}><HudLabel>Panel · 42</HudLabel><StudioMark size={42} /></div>
    <div style={{ ...tile, background: 'var(--inverse)', color: 'var(--text-on-inverse)' }}><HudLabel>Inverso · 28</HudLabel><span style={{ color: 'var(--accent)', display: 'flex' }}><StudioMark size={28} /></span></div>
  </div>
);

export const DarkMode = () => (
  <ThemeRoot theme="dark" style={{ padding: 16, borderRadius: 28, display: 'flex', gap: 24, alignItems: 'center' }}>
    <StudioMark /><StudioMark size={42} /><StudioMark size={28} />
  </ThemeRoot>
);
