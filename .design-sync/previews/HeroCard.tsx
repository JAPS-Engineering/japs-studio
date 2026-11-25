import { HeroCard, ThemeRoot } from '@japs/encastre';
const IMG_PANEL = 'repeating-linear-gradient(135deg, var(--panel) 0 14px, color-mix(in oklab, var(--panel) 90%, var(--text-on-panel)) 14px 28px)';
const IMG_DARK = 'repeating-linear-gradient(135deg, var(--c-ink) 0 14px, var(--c-graphite) 14px 28px)';
const IMG_SAGE = 'repeating-linear-gradient(135deg, var(--c-sage-soft) 0 14px, color-mix(in oklab, var(--c-sage-soft) 82%, var(--c-ink)) 14px 28px)';

export const Default = () => (
  <div style={{ width: 640, padding: 16 }}>
    <HeroCard badge="Imagen — retrato del caso" title="Rediseño de la app de pagos" actionLabel="Ver plan" href="#ver-plan" style={{ backgroundImage: IMG_PANEL }} />
  </div>
);

export const OnDarkImage = () => (
  <div style={{ width: 640, padding: 16 }}>
    <HeroCard badge="Caso 05" title="Un panel para operar en tiempo real" actionLabel="Ver caso" hover="surface" style={{ backgroundImage: IMG_DARK }} />
  </div>
);

export const DarkMode = () => (
  <ThemeRoot theme="dark" style={{ width: 640, padding: 16, borderRadius: 40 }}>
    <HeroCard title="Rediseño de la app de pagos" actionLabel="Ver plan" style={{ backgroundImage: IMG_PANEL }} />
  </ThemeRoot>
);
