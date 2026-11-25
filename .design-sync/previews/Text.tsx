import { Panel, Text, ThemeRoot } from '@japs/encastre';

const SizesDemo = () => (
  <div style={{ display: 'grid', gap: 10 }}>
    <Text size="body-l">Diseñamos y construimos producto digital modular.</Text>
    <Text>Revisamos tu operación, explicamos el diagnóstico y construimos por módulos que calzan entre sí. Cifras: 0123456789.</Text>
    <Text size="small" tone="muted">Texto secundario y notas de apoyo.</Text>
    <Text size="small" tone="accent">Enlace o énfasis con accent-text</Text>
  </div>
);

export const Sizes = () => <div style={{ padding: 16 }}><SizesDemo /></div>;

export const OnPanel = () => (
  <Panel padding="md"><Text size="body-l">Sobre un Panel, el texto hereda --text-on-panel.</Text></Panel>
);

export const DarkMode = () => <ThemeRoot theme="dark" style={{ padding: 16, borderRadius: 16 }}><SizesDemo /></ThemeRoot>;
