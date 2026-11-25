import { HudLabel, IndexList, Panel, Text, ThemeRoot } from '@japs/encastre';
const IMG_PANEL = 'repeating-linear-gradient(135deg, var(--panel) 0 14px, color-mix(in oklab, var(--panel) 90%, var(--text-on-panel)) 14px 28px)';
const IMG_DARK = 'repeating-linear-gradient(135deg, var(--c-ink) 0 14px, var(--c-graphite) 14px 28px)';
const IMG_LIGHT = 'repeating-linear-gradient(135deg, color-mix(in oklab, var(--c-sage-soft) 70%, var(--c-surface)) 0 14px, var(--c-sage-soft) 14px 28px)';

const ITEMS = [
  { n: '01', label: 'Producto digital', href: '#servicio-01' },
  { n: '02', label: 'Diseño de interfaz', href: '#servicio-02' },
  { n: '03', label: 'Desarrollo a medida', href: '#servicio-03' },
];

const Overlay = () => (
  <div style={{ position: 'relative', height: 400, width: 640 }}>
    <div style={{ position: 'absolute', left: 0, top: 24, width: 200, display: 'grid', gap: 12 }}>
      <HudLabel tone="muted">01 — Servicios</HudLabel>
      <Text size="small" tone="muted">Un equipo de diseño y código para llevar tu producto de la idea a producción.</Text>
    </div>
    <div style={{ position: 'absolute', left: 232, right: 0, top: 0, bottom: 0, borderRadius: 28, background: IMG_DARK }} />
    <IndexList label="Servicios" items={ITEMS} style={{ position: 'absolute', left: 120, top: 176 }} />
  </div>
);

export const OverlayLight = () => <div style={{ padding: 16 }}><Overlay /></div>;

export const InNotch = () => (
  <div style={{ width: 640 }}>
    <Panel padding="none" style={{ height: 400, background: IMG_DARK, overflow: 'hidden' }}>
      <IndexList variant="notch" label="Servicios" items={ITEMS} />
    </Panel>
  </div>
);

export const DarkMode = () => <ThemeRoot theme="dark" style={{ padding: 16, borderRadius: 28, width: 672 }}><Overlay /></ThemeRoot>;
