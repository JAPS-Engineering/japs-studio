import { HistoryStack, HudLabel, ThemeRoot } from '@japs/encastre';
const IMG_PANEL = 'repeating-linear-gradient(135deg, var(--panel) 0 14px, color-mix(in oklab, var(--panel) 90%, var(--text-on-panel)) 14px 28px)';
const IMG_DARK = 'repeating-linear-gradient(135deg, var(--c-ink) 0 14px, var(--c-graphite) 14px 28px)';
const IMG_SAGE = 'repeating-linear-gradient(135deg, var(--c-sage-soft) 0 14px, color-mix(in oklab, var(--c-sage-soft) 82%, var(--c-ink)) 14px 28px)';

const ITEMS = [
  { time: '19:02', label: 'Versión 03 · actual', href: '#version-3' },
  { time: '18:49', label: 'Versión 02', href: '#version-2' },
  { time: '18:36', label: 'Versión 01', href: '#version-1' },
];

const Scene = () => (
  <div style={{ position: 'relative', height: 400, width: 640, borderRadius: 28, background: IMG_PANEL, overflow: 'hidden' }}>
    <span style={{ position: 'absolute', left: 24, top: 24, padding: '6px 12px', borderRadius: 999, background: 'var(--panel)' }}><HudLabel style={{ color: 'var(--text-on-panel)' }}>Imagen — render generado</HudLabel></span>
    <HistoryStack items={ITEMS} current={0} style={{ position: 'absolute', right: 24, bottom: 24 }} />
  </div>
);

export const OnImage = () => <Scene />;
export const DarkMode = () => <ThemeRoot theme="dark" style={{ padding: 12, borderRadius: 40, width: 664 }}><Scene /></ThemeRoot>;
