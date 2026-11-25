import { DoubleButton, HudLabel, ThemeRoot } from '@japs/encastre';
const IMG_PANEL = 'repeating-linear-gradient(135deg, var(--panel) 0 14px, color-mix(in oklab, var(--panel) 90%, var(--text-on-panel)) 14px 28px)';
const IMG_DARK = 'repeating-linear-gradient(135deg, var(--c-ink) 0 14px, var(--c-graphite) 14px 28px)';
const IMG_LIGHT = 'repeating-linear-gradient(135deg, color-mix(in oklab, var(--c-sage-soft) 70%, var(--c-surface)) 0 14px, var(--c-sage-soft) 14px 28px)';

const tile = { height: 120, borderRadius: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10 } as const;
const grid = { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 } as const;

const Trio = ({ variant }: { variant: 'arrows' | 'counter' | 'action' }) => (
  <div style={grid}>
    <div style={{ ...tile, background: IMG_PANEL }}>
      <DoubleButton variant={variant} index={2} total={6} label="Ver detalle" actionLabel="Abrir detalle" />
      <HudLabel style={{ fontSize: 11, color: 'var(--text-on-panel)' }}>Vidrio — panel</HudLabel>
    </div>
    <div style={{ ...tile, background: IMG_DARK }}>
      <DoubleButton variant={variant} surface="tinted" index={2} total={6} label="Ver detalle" actionLabel="Abrir detalle" />
      <HudLabel style={{ fontSize: 11, color: 'var(--c-paper)' }}>Tintado — imagen oscura</HudLabel>
    </div>
    <div style={{ ...tile, background: 'var(--surface-2)' }}>
      <DoubleButton variant={variant} surface="solid" index={2} total={6} label="Ver detalle" actionLabel="Abrir detalle" />
      <HudLabel tone="muted" style={{ fontSize: 11 }}>Sólido — superficie</HudLabel>
    </div>
  </div>
);

export const Arrows = () => <Trio variant="arrows" />;
export const Counter = () => <Trio variant="counter" />;
export const Action = () => <Trio variant="action" />;

export const DarkMode = () => (
  <ThemeRoot theme="dark" style={{ padding: 16, borderRadius: 28, display: 'flex', gap: 12 }}>
    <DoubleButton variant="counter" surface="solid" index={3} total={8} />
    <DoubleButton variant="action" surface="solid" label="Ver detalle" actionLabel="Abrir detalle" />
  </ThemeRoot>
);
