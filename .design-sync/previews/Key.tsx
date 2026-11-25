import type { ReactNode } from 'react';
import { HudLabel, Key, Notch, ThemeRoot } from '@japs/encastre';
const IMG_PANEL = 'repeating-linear-gradient(135deg, var(--panel) 0 14px, color-mix(in oklab, var(--panel) 90%, var(--text-on-panel)) 14px 28px)';
const IMG_DARK = 'repeating-linear-gradient(135deg, var(--c-ink) 0 14px, var(--c-graphite) 14px 28px)';
const IMG_LIGHT = 'repeating-linear-gradient(135deg, color-mix(in oklab, var(--c-sage-soft) 70%, var(--c-surface)) 0 14px, var(--c-sage-soft) 14px 28px)';

const Stage = ({ children, label }: { children: ReactNode; label: string }) => (
  <div className="panel" style={{ position: 'relative', height: 300, borderRadius: 28, background: IMG_DARK, overflow: 'hidden' }}>
    <span style={{ position: 'absolute', left: 24, bottom: 24, padding: '6px 12px', borderRadius: 999, background: 'var(--c-ink)', color: 'var(--c-paper)' }}><HudLabel style={{ color: 'var(--c-paper)' }}>{label}</HudLabel></span>
    {children}
  </div>
);

const grid = { display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 12 } as const;

export const InNotch = () => (
  <div style={{ ...grid, gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' }}>
    <Stage label="square"><Notch corner="tr"><Key shape="square" href="#contacto" label="Contacto" /></Notch></Stage>
    <Stage label="wide"><Notch corner="tr"><Key shape="wide" href="#agenda" title={<>Agenda una<br />llamada</>} /></Notch></Stage>
    <Stage label="stat"><Notch corner="tr"><Key shape="stat" href="#casos" label="24 casos publicados" caption="Casos" value="24" /></Notch></Stage>
  </div>
);

export const CornerAndDrop = () => (
  <div style={{ ...grid, gridTemplateColumns: 'repeat(2, minmax(0, 1fr))' }}>
    <div style={{ position: 'relative', height: 240, borderRadius: 28, background: IMG_DARK }}>
      <div style={{ position: 'absolute', left: 24, bottom: 24 }}><Key shape="corner" href="#siguiente" label="Siguiente sección" /></div>
    </div>
    <div style={{ position: 'relative', height: 240, borderRadius: 28, background: IMG_DARK }}>
      <div style={{ position: 'absolute', left: 24, bottom: 24 }}><Key shape="drop" href="#siguiente" label="Siguiente sección" /></div>
    </div>
  </div>
);

export const DarkMode = () => (
  <ThemeRoot theme="dark" style={{ padding: 24, borderRadius: 28, display: 'flex', gap: 16, alignItems: 'flex-end' }}>
    <Key shape="square" label="Contacto" />
    <Key shape="stat" label="24 casos" caption="Casos" value="24" />
    <Key shape="corner" label="Siguiente" />
    <Key shape="drop" label="Siguiente" />
  </ThemeRoot>
);
