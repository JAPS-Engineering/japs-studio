import { HudLabel, TagCluster, ThemeRoot } from '@japs/encastre';
const IMG_PANEL = 'repeating-linear-gradient(135deg, var(--panel) 0 14px, color-mix(in oklab, var(--panel) 90%, var(--text-on-panel)) 14px 28px)';
const IMG_DARK = 'repeating-linear-gradient(135deg, var(--c-ink) 0 14px, var(--c-graphite) 14px 28px)';
const IMG_LIGHT = 'repeating-linear-gradient(135deg, color-mix(in oklab, var(--c-sage-soft) 70%, var(--c-surface)) 0 14px, var(--c-sage-soft) 14px 28px)';

const Scene = () => (
  <div style={{ position: 'relative', height: 400, width: 640, borderRadius: 28, background: IMG_PANEL, overflow: 'hidden' }}>
    <span style={{ position: 'absolute', right: 24, bottom: 24, padding: '6px 12px', borderRadius: 999, background: 'var(--panel)' }}><HudLabel style={{ color: 'var(--text-on-panel)' }}>Imagen — ilustración del caso</HudLabel></span>
    <TagCluster anchor={{ x: 56, y: 88 }} tags={['#Producto', '#UI/UX']} />
    <TagCluster anchor={{ x: 300, y: 184 }} tags={['#IA aplicada', '#Fintech']} />
    <TagCluster anchor={{ x: 112, y: 276 }} side="right" tags={['#2026']} />
  </div>
);

export const OnImage = () => <Scene />;

export const DarkMode = () => <ThemeRoot theme="dark" style={{ padding: 12, borderRadius: 40, width: 664 }}><Scene /></ThemeRoot>;
