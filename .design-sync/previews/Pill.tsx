import { HudLabel, Icon, Panel, Pill, ThemeRoot } from '@japs/encastre';
const IMG_PANEL = 'repeating-linear-gradient(135deg, var(--panel) 0 14px, color-mix(in oklab, var(--panel) 90%, var(--text-on-panel)) 14px 28px)';
const IMG_DARK = 'repeating-linear-gradient(135deg, var(--c-ink) 0 14px, var(--c-graphite) 14px 28px)';
const IMG_LIGHT = 'repeating-linear-gradient(135deg, color-mix(in oklab, var(--c-sage-soft) 70%, var(--c-surface)) 0 14px, var(--c-sage-soft) 14px 28px)';

const row = { display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' } as const;

export const Variants = () => (
  <div style={row}>
    <Pill variant="accent" href="#empezar">Empezar</Pill>
    <Pill variant="solid">Ver proyectos</Pill>
    <Pill href="#contacto">Contacto</Pill>
  </div>
);

export const PrimaryCta = () => (
  <Pill variant="solid" size="lg" href="#agenda" icon={<Icon name="arrow-right" size={16} />}>
    Agenda una conversación
  </Pill>
);

export const GlassLong = () => (
  <Panel padding="md" style={{ background: IMG_PANEL, display: 'grid', gap: 12 }}>
    <HudLabel>Vidrio claro — sobre panel</HudLabel>
    <div style={{ ...row, gap: 12 }}>
      <Pill variant="glass" size="lg" leadingIcon={<Icon name="arrow-up-right" />}>Ver plan</Pill>
      <Pill variant="glass" size="lg" hover="surface" leadingIcon={<Icon name="arrow-right" />}>Descargar</Pill>
      <Pill variant="glass" size="lg" hover="halo" leadingIcon={<Icon name="plus" />}>Explorar</Pill>
    </div>
  </Panel>
);

export const GlassTinted = () => (
  <div style={{ display: 'grid', gap: 12, padding: 24, borderRadius: 28, background: IMG_DARK }}>
    <HudLabel style={{ color: 'var(--c-paper)' }}>Vidrio tintado — sobre imagen oscura</HudLabel>
    <div style={{ ...row, gap: 12 }}>
      <Pill variant="glass" glass="tinted" size="lg" leadingIcon={<Icon name="arrow-up-right" />}>Ver plan</Pill>
      <Pill variant="glass" glass="tinted" size="lg" hover="signal" leadingIcon={<Icon name="play" size={16} />}>En vivo</Pill>
      <Pill variant="glass" glass="tinted" size="lg" hover="inverse" leadingIcon={<Icon name="arrow-right" />}>Contactar</Pill>
    </div>
  </div>
);

export const DarkMode = () => (
  <ThemeRoot theme="dark" style={{ padding: 16, borderRadius: 16 }}>
    <div style={row}>
      <Pill variant="accent" href="#empezar">Empezar</Pill>
      <Pill variant="solid">Ver proyectos</Pill>
      <Pill href="#contacto">Contacto</Pill>
    </div>
  </ThemeRoot>
);
