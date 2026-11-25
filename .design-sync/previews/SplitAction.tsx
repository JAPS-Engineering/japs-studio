import { Icon, Panel, SplitAction, ThemeRoot } from '@japs/encastre';
const IMG_PANEL = 'repeating-linear-gradient(135deg, var(--panel) 0 14px, color-mix(in oklab, var(--panel) 90%, var(--text-on-panel)) 14px 28px)';
const IMG_DARK = 'repeating-linear-gradient(135deg, var(--c-ink) 0 14px, var(--c-graphite) 14px 28px)';
const IMG_LIGHT = 'repeating-linear-gradient(135deg, color-mix(in oklab, var(--c-sage-soft) 70%, var(--c-surface)) 0 14px, var(--c-sage-soft) 14px 28px)';

export const OnPanel = () => (
  <Panel padding="md" style={{ background: IMG_PANEL }}>
    <SplitAction label="Agenda una llamada" href="#agenda" leadingIcon={<Icon name="arrow-up-right" />}
      shortcut={{ icon: <Icon name="arrow-right" />, label: 'Siguiente' }} />
  </Panel>
);

export const OnDarkImage = () => (
  <div style={{ padding: 32, borderRadius: 28, background: IMG_DARK, display: 'grid', gap: 16 }}>
    <SplitAction glass="tinted" hover="surface" label="Ver portafolio" href="#portafolio" leadingIcon={<Icon name="arrow-up-right" />}
      shortcut={{ icon: <Icon name="plus" />, label: 'Abrir' }} />
    <SplitAction glass="tinted" hover="halo" label="Reproducir reel" leadingIcon={<Icon name="play" size={16} />}
      shortcut={{ icon: <Icon name="menu" />, label: 'Más' }} />
  </div>
);

export const DarkMode = () => (
  <ThemeRoot theme="dark" style={{ padding: 16, borderRadius: 28 }}>
    <Panel padding="md">
      <SplitAction label="Empezar" leadingIcon={<Icon name="arrow-up-right" />} shortcut={{ icon: <Icon name="arrow-right" />, label: 'Siguiente' }} />
    </Panel>
  </ThemeRoot>
);
