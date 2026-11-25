import { DisplayTitle, HudLabel, SectionIndex, ThemeRoot, VerticalNav, Text } from '@japs/encastre';
const IMG_PANEL = 'repeating-linear-gradient(135deg, var(--panel) 0 14px, color-mix(in oklab, var(--panel) 90%, var(--text-on-panel)) 14px 28px)';
const IMG_DARK = 'repeating-linear-gradient(135deg, var(--c-ink) 0 14px, var(--c-graphite) 14px 28px)';
const IMG_SAGE = 'repeating-linear-gradient(135deg, var(--c-sage-soft) 0 14px, color-mix(in oklab, var(--c-sage-soft) 82%, var(--c-ink)) 14px 28px)';

const SECTIONS = [
  { n: '001.', label: 'El estudio', href: '#el-estudio' }, { n: '002.', label: 'Proceso', href: '#proceso' },
  { n: '003.', label: 'Software', href: '#software' }, { n: '004.', label: 'Casos', href: '#casos' },
];
const stage = { position: 'relative', borderRadius: 28, background: 'var(--surface)', color: 'var(--text)', overflow: 'hidden', width: 1312 } as const;
const object = (w: number, h: number, r: string) => (
  <div style={{ width: w, height: h, borderRadius: r, background: IMG_SAGE, display: 'grid', placeItems: 'center' }}><HudLabel style={{ color: 'var(--c-ink)' }}>Objeto 3D</HudLabel></div>
);

export const Split = () => (
  <div style={{ zoom: 0.48 }}>
    <div style={{ ...stage, height: 560 }}>
      <DisplayTitle variant="split" text="Software" splitAt={4}>{object(380, 380, '50%')}</DisplayTitle>
      <div style={{ position: 'absolute', right: 56, top: 56, zIndex: 3 }}><SectionIndex variant="spotlight" items={SECTIONS} current={2} /></div>
      <span style={{ position: 'absolute', left: 56, bottom: 56, zIndex: 3 }}><HudLabel tone="muted">001 — Servicios</HudLabel></span>
    </div>
  </div>
);

export const Condensed = () => (
  <div style={{ zoom: 0.48 }}>
    <div style={{ ...stage, height: 520 }}>
      <DisplayTitle variant="condensed" text="Encastre">{object(220, 420, '999px')}</DisplayTitle>
      <div style={{ position: 'absolute', left: 40, top: '50%', translate: '0 -50%', zIndex: 3 }}><SectionIndex variant="minimal" items={SECTIONS} current={2} /></div>
    </div>
  </div>
);

export const Vertical = () => (
  <div style={{ zoom: 0.48 }}>
    <div style={{ ...stage, height: 640, background: 'var(--inverse)', color: 'var(--text-on-inverse)' }}>
      <div style={{ position: 'absolute', left: 28, top: 28, width: 236 }}><Text size="small">Atlas es la plataforma de pagos que diseñamos y construimos de punta a punta: app, panel y API.</Text></div>
      <div style={{ position: 'absolute', left: 292, right: 268, top: 28, bottom: 72, borderRadius: 28, background: IMG_PANEL }} />
      <DisplayTitle variant="vertical" text="JAPS" />
      <VerticalNav surface="inverse" current={3} items={[{ label: 'Inicio', href: '#i' }, { label: 'Casos', href: '#c' }, { label: 'Estudio', href: '#e' }, { label: 'Contacto', href: '#k' }]}
        style={{ position: 'absolute', right: 24, top: 24, bottom: 24 }} />
    </div>
  </div>
);

export const DarkMode = () => (
  <ThemeRoot theme="dark" style={{ padding: 12, borderRadius: 40, zoom: 0.48, width: 1336 }}>
    <div style={{ ...stage, height: 520 }}>
      <DisplayTitle variant="condensed" text="Encastre">{object(220, 420, '999px')}</DisplayTitle>
    </div>
  </ThemeRoot>
);
