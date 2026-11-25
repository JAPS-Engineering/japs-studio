import { LogoBar, Panel, ThemeRoot } from '@japs/encastre';
const IMG_PANEL = 'repeating-linear-gradient(135deg, var(--panel) 0 14px, color-mix(in oklab, var(--panel) 90%, var(--text-on-panel)) 14px 28px)';
const IMG_DARK = 'repeating-linear-gradient(135deg, var(--c-ink) 0 14px, var(--c-graphite) 14px 28px)';
const IMG_LIGHT = 'repeating-linear-gradient(135deg, color-mix(in oklab, var(--c-sage-soft) 70%, var(--c-surface)) 0 14px, var(--c-sage-soft) 14px 28px)';

const Ring = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><circle cx="9" cy="12" r="6" /><circle cx="15" cy="12" r="6" /></svg>;
const Bars = () => <svg viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="15" width="3.5" height="6" rx="1.75" /><rect x="8.5" y="11" width="3.5" height="10" rx="1.75" /><rect x="14" y="7" width="3.5" height="14" rx="1.75" /><rect x="19.5" y="3" width="3.5" height="18" rx="1.75" /></svg>;
const Dots = () => <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="8" r="2.5" /><circle cx="12" cy="8" r="2.5" /><circle cx="19" cy="8" r="2.5" /><circle cx="5" cy="16" r="2.5" /><circle cx="12" cy="16" r="2.5" /><circle cx="19" cy="16" r="2.5" /></svg>;
const Stripes = () => <svg viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="6" width="20" height="4.5" rx="2.25" /><rect x="2" y="13.5" width="13" height="4.5" rx="2.25" /></svg>;
const Hatch = () => <svg viewBox="0 0 24 24" fill="currentColor"><g transform="rotate(45 12 12)"><rect x="7.5" y="3" width="9" height="3.5" rx="1.75" /><rect x="2" y="8" width="20" height="3.5" rx="1.75" /><rect x="2" y="13" width="20" height="3.5" rx="1.75" /><rect x="7.5" y="18" width="9" height="3.5" rx="1.75" /></g></svg>;

const LOGOS = [
  { logo: <Hatch />, name: 'Cliente — Atlas', href: '#cliente-1' },
  { logo: <Dots />, name: 'Cliente — Orbe', href: '#cliente-2' },
  { logo: <Bars />, name: 'Cliente — Pulso', href: '#cliente-3' },
  { logo: <Stripes />, name: 'Cliente — Vía', href: '#cliente-4' },
  { logo: <Ring />, name: 'Cliente — Nodo', href: '#cliente-5' },
];

export const Logos = () => <div style={{ width: 760 }}><LogoBar label="Han confiado en nosotros" logos={LOGOS} /></div>;

export const Stack = () => <div style={{ width: 760 }}><LogoBar variant="stack" label="Construimos con" items={['React', 'Swift', 'Kotlin', 'Node', 'Postgres']} /></div>;

export const Glass = () => (
  <div style={{ width: 760 }}>
    <Panel padding="md" style={{ background: IMG_PANEL }}>
      <LogoBar variant="glass" label="Han confiado en nosotros" logos={LOGOS.slice(0, 4)} more="+12" />
    </Panel>
  </div>
);

export const DarkMode = () => (
  <ThemeRoot theme="dark" style={{ padding: 16, borderRadius: 40, width: 792 }}>
    <LogoBar label="Han confiado en nosotros" logos={LOGOS} />
  </ThemeRoot>
);
