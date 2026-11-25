import { ButtonRail, HudLabel, Icon, IconButton, ThemeRoot } from '@japs/encastre';
const IMG_PANEL = 'repeating-linear-gradient(135deg, var(--panel) 0 14px, color-mix(in oklab, var(--panel) 90%, var(--text-on-panel)) 14px 28px)';
const IMG_DARK = 'repeating-linear-gradient(135deg, var(--c-ink) 0 14px, var(--c-graphite) 14px 28px)';
const IMG_LIGHT = 'repeating-linear-gradient(135deg, color-mix(in oklab, var(--c-sage-soft) 70%, var(--c-surface)) 0 14px, var(--c-sage-soft) 14px 28px)';

const avatar = { width: 52, height: 52, borderRadius: '50%', background: 'repeating-linear-gradient(135deg, var(--c-mist) 0 5px, var(--c-sage-soft) 5px 10px)' } as const;

export const Vertical = () => (
  <div style={{ position: 'relative', height: 460, width: 360, borderRadius: 28, background: IMG_LIGHT, overflow: 'hidden' }}>
    <span style={{ position: 'absolute', right: 24, top: 24, padding: '6px 12px', borderRadius: 999, background: 'var(--c-surface)', color: 'var(--c-ink)' }}><HudLabel>Imagen — paisaje</HudLabel></span>
    <ButtonRail style={{ position: 'absolute', left: 24, top: 24, bottom: 24, height: 'auto' }}
      capsule={<><span style={avatar} /><IconButton variant="glass" glass="bare" label="Notificaciones (3)">03</IconButton></>}>
      <IconButton variant="glass" glass="solid" current label="Menú"><Icon name="menu" /></IconButton>
      <IconButton variant="glass" glass="light" label="Nuevo proyecto"><Icon name="plus" /></IconButton>
      <IconButton variant="glass" glass="light" label="Ver reel"><Icon name="play" size={16} /></IconButton>
      <IconButton variant="glass" glass="light" label="Cambiar tema"><Icon name="moon" /></IconButton>
    </ButtonRail>
  </div>
);

export const Horizontal = () => (
  <div style={{ padding: 32, borderRadius: 28, background: IMG_DARK, display: 'grid', gap: 16, color: 'var(--c-paper)' }}>
    <HudLabel style={{ color: 'var(--c-paper)' }}>JAPS Studio — Redes</HudLabel>
    <ButtonRail orientation="horizontal" label="Redes">
      <IconButton variant="glass" glass="tinted" hover="surface" label="GitHub" href="#github">GH</IconButton>
      <IconButton variant="glass" glass="tinted" hover="surface" label="LinkedIn" href="#linkedin">IN</IconButton>
      <IconButton variant="glass" glass="tinted" hover="surface" label="Behance" href="#behance">BE</IconButton>
      <IconButton variant="glass" glass="tinted" hover="surface" label="X" href="#x">X</IconButton>
    </ButtonRail>
  </div>
);

export const DarkMode = () => (
  <ThemeRoot theme="dark" style={{ padding: 16, borderRadius: 28 }}>
    <div style={{ padding: 24, borderRadius: 20, background: IMG_PANEL }}>
      <ButtonRail orientation="horizontal" label="Acciones">
        <IconButton variant="glass" label="Abrir"><Icon name="arrow-up-right" /></IconButton>
        <IconButton variant="glass" label="Añadir"><Icon name="plus" /></IconButton>
        <IconButton variant="glass" hover="halo" label="Menú"><Icon name="menu" /></IconButton>
      </ButtonRail>
    </div>
  </ThemeRoot>
);
