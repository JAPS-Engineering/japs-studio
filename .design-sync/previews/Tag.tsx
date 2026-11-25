import { Tag, ThemeRoot } from '@japs/encastre';

const Tags = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
    <Tag>Producto digital</Tag><Tag>UI/UX</Tag><Tag>IA aplicada</Tag><Tag>Automatización</Tag><Tag>Datos</Tag>
  </div>
);

export const Services = () => <div style={{ padding: 16 }}><Tags /></div>;

export const DarkMode = () => <ThemeRoot theme="dark" style={{ padding: 16, borderRadius: 16 }}><Tags /></ThemeRoot>;
