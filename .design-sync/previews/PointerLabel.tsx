import { HudLabel, PointerLabel, ThemeRoot } from '@japs/encastre';
const IMG_PANEL = 'repeating-linear-gradient(135deg, var(--panel) 0 14px, color-mix(in oklab, var(--panel) 90%, var(--text-on-panel)) 14px 28px)';
const IMG_DARK = 'repeating-linear-gradient(135deg, var(--c-ink) 0 14px, var(--c-graphite) 14px 28px)';
const IMG_LIGHT = 'repeating-linear-gradient(135deg, color-mix(in oklab, var(--c-sage-soft) 70%, var(--c-surface)) 0 14px, var(--c-sage-soft) 14px 28px)';

const Scene = () => (
  <div style={{ position: 'relative', height: 400, width: 640, borderRadius: 28, background: IMG_PANEL, overflow: 'hidden' }}>
    <span style={{ position: 'absolute', left: 24, bottom: 24, padding: '6px 12px', borderRadius: 999, background: 'var(--panel)' }}><HudLabel style={{ color: 'var(--text-on-panel)' }}>Imagen — captura de la app</HudLabel></span>
    <PointerLabel anchor={{ x: 72, y: 112 }} index="01" label="Onboarding en 3 pasos" />
    <PointerLabel anchor={{ x: 64, y: 236 }} side="right" index="02" label="Pagos con un toque" />
  </div>
);

export const OnImage = () => <Scene />;

export const DarkMode = () => <ThemeRoot theme="dark" style={{ padding: 12, borderRadius: 40, width: 664 }}><Scene /></ThemeRoot>;
