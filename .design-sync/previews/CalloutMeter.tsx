import { CalloutMeter, HudLabel, ThemeRoot } from '@japs/encastre';
const IMG_PANEL = 'repeating-linear-gradient(135deg, var(--panel) 0 14px, color-mix(in oklab, var(--panel) 90%, var(--text-on-panel)) 14px 28px)';
const IMG_DARK = 'repeating-linear-gradient(135deg, var(--c-ink) 0 14px, var(--c-graphite) 14px 28px)';
const IMG_LIGHT = 'repeating-linear-gradient(135deg, color-mix(in oklab, var(--c-sage-soft) 70%, var(--c-surface)) 0 14px, var(--c-sage-soft) 14px 28px)';

const Scene = ({ surface }: { surface: 'glass' | 'solid' }) => (
  <div style={{ position: 'relative', height: 440, width: 640, borderRadius: 28, background: IMG_PANEL, overflow: 'hidden' }}>
    <span style={{ position: 'absolute', right: 24, top: 24, padding: '6px 12px', borderRadius: 999, background: 'var(--panel)' }}><HudLabel style={{ color: 'var(--text-on-panel)' }}>Render — producto 3D</HudLabel></span>
    <CalloutMeter x={96} y={88} target={{ x: 440, y: 304 }} title="Lente — L1" value="92" unit="/ 100" progress={0.92} surface={surface} />
  </div>
);

export const Solid = () => <Scene surface="solid" />;
export const Glass = () => <Scene surface="glass" />;
export const DarkMode = () => <ThemeRoot theme="dark" style={{ padding: 12, borderRadius: 40, width: 664 }}><Scene surface="glass" /></ThemeRoot>;
