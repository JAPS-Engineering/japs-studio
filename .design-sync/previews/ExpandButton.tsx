import { ExpandButton, HudLabel, Icon, ThemeRoot } from '@japs/encastre';
const IMG_PANEL = 'repeating-linear-gradient(135deg, var(--panel) 0 14px, color-mix(in oklab, var(--panel) 90%, var(--text-on-panel)) 14px 28px)';
const IMG_DARK = 'repeating-linear-gradient(135deg, var(--c-ink) 0 14px, var(--c-graphite) 14px 28px)';
const IMG_LIGHT = 'repeating-linear-gradient(135deg, color-mix(in oklab, var(--c-sage-soft) 70%, var(--c-surface)) 0 14px, var(--c-sage-soft) 14px 28px)';

const col = { display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 10 } as const;

export const Rail = () => (
  <div style={{ padding: 24, borderRadius: 28, background: IMG_LIGHT, display: 'flex', gap: 48, alignItems: 'flex-start' }}>
    <nav aria-label="Principal" style={col}>
      <ExpandButton label="Menú" icon={<Icon name="menu" />} />
      <ExpandButton label="Nuevo proyecto" icon={<Icon name="plus" />} />
      <ExpandButton label="Ver reel" icon={<Icon name="play" size={16} />} />
    </nav>
    <div style={col}>
      <HudLabel>expanded · como en hover</HudLabel>
      <ExpandButton expanded label="Nuevo proyecto" icon={<Icon name="plus" />} />
    </div>
  </div>
);

export const OnDarkImage = () => (
  <div style={{ padding: 24, borderRadius: 28, background: IMG_DARK }}>
    <nav aria-label="Acciones" style={col}>
      <ExpandButton glass="tinted" hover="surface" label="Ver portafolio" icon={<Icon name="arrow-up-right" />} />
      <ExpandButton glass="tinted" hover="surface" label="Cambiar tema" icon={<Icon name="moon" />} />
    </nav>
  </div>
);

export const DarkMode = () => (
  <ThemeRoot theme="dark" style={{ padding: 24, borderRadius: 28 }}>
    <div style={{ padding: 24, borderRadius: 20, background: IMG_PANEL }}>
      <ExpandButton glass="clear" label="Explorar" icon={<Icon name="arrow-right" />} />
    </div>
  </ThemeRoot>
);
