import { SectionIndex, ThemeRoot } from '@japs/encastre';

const SECTIONS = [
  { n: '01', label: 'El estudio', href: '#el-estudio' },
  { n: '02', label: 'Proceso', href: '#proceso' },
  { n: '03', label: 'Software', href: '#software' },
  { n: '04', label: 'Casos', href: '#casos' },
  { n: '05', label: 'Equipo', href: '#equipo' },
  { n: '06', label: 'Contacto', href: '#contacto' },
];
const MIN = SECTIONS.map((s, i) => ({ ...s, n: `00${i + 1}.` }));
const box = { height: 320, boxSizing: 'border-box', padding: '24px 20px', borderRadius: 28, background: 'var(--surface)', display: 'flex', alignItems: 'center' } as const;

export const Variants = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 12, padding: 16 }}>
    <div style={{ ...box, justifyContent: 'flex-end' }}><SectionIndex variant="spotlight" items={SECTIONS} current={2} /></div>
    <div style={box}><SectionIndex variant="rail" items={SECTIONS} current={2} /></div>
    <div style={{ ...box, justifyContent: 'center' }}><SectionIndex variant="minimal" items={MIN} current={2} /></div>
  </div>
);

export const DarkMode = () => (
  <ThemeRoot theme="dark" style={{ padding: 16, borderRadius: 28, display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 12 }}>
    <div style={{ ...box, justifyContent: 'flex-end' }}><SectionIndex variant="spotlight" items={SECTIONS} current={3} /></div>
    <div style={box}><SectionIndex variant="rail" items={SECTIONS} current={4} /></div>
    <div style={{ ...box, justifyContent: 'center' }}><SectionIndex variant="minimal" items={MIN} current={1} /></div>
  </ThemeRoot>
);
