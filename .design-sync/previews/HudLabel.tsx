import { HudLabel, ThemeRoot } from '@japs/encastre';

const TonesDemo = () => (
  <div style={{ display: 'grid', gap: 10 }}>
    <HudLabel>01 — JAPS Studio / 2026</HudLabel>
    <HudLabel tone="muted">02 — Proceso</HudLabel>
    <HudLabel tone="accent">Estado activo</HudLabel>
    <HudLabel>SN 00.43/20-34</HudLabel>
  </div>
);

export const Tones = () => <div style={{ padding: 16 }}><TonesDemo /></div>;

export const Vertical = () => (
  <div style={{ padding: 16, display: 'flex', gap: 24, height: 180 }}>
    <HudLabel vertical>Caso 03 — Atlas</HudLabel>
    <HudLabel vertical tone="muted">Reel 2026 — 01:24</HudLabel>
  </div>
);

export const DarkMode = () => <ThemeRoot theme="dark" style={{ padding: 16, borderRadius: 16 }}><TonesDemo /></ThemeRoot>;
