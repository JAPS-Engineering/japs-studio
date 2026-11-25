import { ConsoleCard, HudLabel, ThemeRoot } from '@japs/encastre';
const IMG_PANEL = 'repeating-linear-gradient(135deg, var(--panel) 0 14px, color-mix(in oklab, var(--panel) 90%, var(--text-on-panel)) 14px 28px)';
const IMG_DARK = 'repeating-linear-gradient(135deg, var(--c-ink) 0 14px, var(--c-graphite) 14px 28px)';
const IMG_SAGE = 'repeating-linear-gradient(135deg, var(--c-sage-soft) 0 14px, color-mix(in oklab, var(--c-sage-soft) 82%, var(--c-ink)) 14px 28px)';

const Scene = () => (
  <div style={{ position: 'relative', height: 400, width: 640, borderRadius: 28, background: IMG_PANEL, overflow: 'hidden' }}>
    <span style={{ position: 'absolute', right: 24, top: 24, padding: '6px 12px', borderRadius: 999, background: 'var(--panel)' }}><HudLabel style={{ color: 'var(--text-on-panel)' }}>Imagen — pantalla del caso</HudLabel></span>
    <ConsoleCard label="Vista — Caso 03" options={['Móvil', 'Tablet', 'Escritorio']} current={0} cta={{ label: 'Ver en vivo', href: '#en-vivo' }}
      style={{ position: 'absolute', left: 24, bottom: 24 }} />
  </div>
);

export const OnImage = () => <Scene />;
export const DarkMode = () => <ThemeRoot theme="dark" style={{ padding: 12, borderRadius: 40, width: 664 }}><Scene /></ThemeRoot>;
