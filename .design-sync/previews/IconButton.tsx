import { HudLabel, Icon, IconButton, Panel, ThemeRoot } from '@japs/encastre';
const IMG_PANEL = 'repeating-linear-gradient(135deg, var(--panel) 0 14px, color-mix(in oklab, var(--panel) 90%, var(--text-on-panel)) 14px 28px)';
const IMG_DARK = 'repeating-linear-gradient(135deg, var(--c-ink) 0 14px, var(--c-graphite) 14px 28px)';
const IMG_LIGHT = 'repeating-linear-gradient(135deg, color-mix(in oklab, var(--c-sage-soft) 70%, var(--c-surface)) 0 14px, var(--c-sage-soft) 14px 28px)';

const row = { display: 'flex', gap: 12, alignItems: 'center' } as const;
const cell = { display: 'grid', justifyItems: 'center', gap: 8 } as const;

export const Variants = () => (
  <div style={row}>
    <IconButton label="Siguiente"><Icon name="arrow-up-right" /></IconButton>
    <IconButton label="Añadir"><Icon name="plus" /></IconButton>
    <IconButton label="Abrir menú" variant="inverse"><Icon name="menu" /></IconButton>
    <IconButton label="Cerrar" variant="inverse"><Icon name="close" /></IconButton>
  </div>
);

export const GlassOnPanel = () => (
  <Panel padding="md" style={{ background: IMG_PANEL }}>
    <div style={{ ...row, gap: 20 }}>
      {(['accent', 'surface', 'signal', 'inverse', 'halo'] as const).map((h) => (
        <div key={h} style={cell}>
          <IconButton variant="glass" hover={h} label={`Abrir (${h})`}><Icon name="arrow-up-right" /></IconButton>
          <HudLabel style={{ fontSize: 11 }}>{h}</HudLabel>
        </div>
      ))}
    </div>
  </Panel>
);

export const GlassTones = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
    <div style={{ ...row, justifyContent: 'center', height: 110, borderRadius: 20, background: IMG_LIGHT }}>
      <IconButton variant="glass" glass="solid" current label="Menú"><Icon name="menu" /></IconButton>
      <IconButton variant="glass" glass="light" label="Nuevo proyecto"><Icon name="plus" /></IconButton>
    </div>
    <div style={{ ...row, justifyContent: 'center', height: 110, borderRadius: 20, background: IMG_PANEL }}>
      <IconButton variant="glass" label="Reproducir"><Icon name="play" size={16} /></IconButton>
      <IconButton variant="glass" hover="halo" label="Añadir"><Icon name="plus" /></IconButton>
    </div>
    <div style={{ ...row, justifyContent: 'center', height: 110, borderRadius: 20, background: IMG_DARK }}>
      <IconButton variant="glass" glass="tinted" hover="surface" label="GitHub" href="#github">GH</IconButton>
      <IconButton variant="glass" glass="tinted" hover="signal" label="En vivo"><Icon name="play" size={16} /></IconButton>
    </div>
  </div>
);

export const DarkMode = () => (
  <ThemeRoot theme="dark" style={{ padding: 16, borderRadius: 16 }}>
    <div style={row}>
      <IconButton label="Siguiente"><Icon name="arrow-up-right" /></IconButton>
      <IconButton label="Abrir menú" variant="inverse"><Icon name="menu" /></IconButton>
      <IconButton label="Siguiente grande" size="lg"><Icon name="arrow-right" /></IconButton>
    </div>
  </ThemeRoot>
);
