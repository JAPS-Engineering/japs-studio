import { MediaCard, ThemeRoot } from '@japs/encastre';
const IMG_PANEL = 'repeating-linear-gradient(135deg, var(--panel) 0 14px, color-mix(in oklab, var(--panel) 90%, var(--text-on-panel)) 14px 28px)';
const IMG_DARK = 'repeating-linear-gradient(135deg, var(--c-ink) 0 14px, var(--c-graphite) 14px 28px)';
const IMG_SAGE = 'repeating-linear-gradient(135deg, var(--c-sage-soft) 0 14px, color-mix(in oklab, var(--c-sage-soft) 82%, var(--c-ink)) 14px 28px)';

const Panel = () => <div style={{ position: 'absolute', inset: 0, background: IMG_PANEL }} />;
const Dark = () => <div style={{ position: 'absolute', inset: 0, background: IMG_DARK }} />;
const row = { display: 'flex', gap: 12, padding: 16 } as const;

export const Media = () => (
  <div style={row}>
    <MediaCard image={<Panel />} badge="Imagen — interfaz" title="Plataforma Atlas" category="Producto digital" />
    <MediaCard width={248} image={<Dark />} badge="Imagen — fotograma" title="Reel 2026" category="Motion" />
  </div>
);

export const Inset = () => (
  <div style={row}>
    <MediaCard variant="inset" image={<Panel />} badge="Imagen — interfaz" title="Plataforma Atlas" category="Producto digital" />
    <MediaCard variant="inset" width={248} image={<Dark />} title="Reel 2026" category="Motion" />
  </div>
);

export const Link = () => (
  <div style={row}>
    <MediaCard variant="link" href="#atlas" image={<Panel />} title="Plataforma Atlas" category="Producto digital" />
    <MediaCard variant="link" href="#reel" width={248} image={<Dark />} title="Reel 2026" category="Motion" />
  </div>
);

export const DarkMode = () => (
  <ThemeRoot theme="dark" style={{ ...row, borderRadius: 40 }}>
    <MediaCard variant="link" href="#atlas" image={<Panel />} title="Plataforma Atlas" category="Producto digital" />
    <MediaCard variant="inset" width={248} image={<Dark />} title="Reel 2026" category="Motion" />
  </ThemeRoot>
);
