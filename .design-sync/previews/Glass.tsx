import { Glass, HudLabel, Panel, Text, ThemeRoot } from '@japs/encastre';

const render = 'radial-gradient(55% 75% at 72% 35%, #E4F3EB 0%, #A8D3BF 18%, #5E8C7B 42%, transparent 70%), var(--panel)';

const Scene = () => (
  <Panel padding="md" style={{ minHeight: 230, background: render }}>
    <Glass style={{ position: 'absolute', left: 24, bottom: 24, width: 280 }}>
      <HudLabel>¿Qué hacemos?</HudLabel>
      <Text size="small" style={{ marginTop: 6 }}>Estrategia, diseño de interfaz y desarrollo de software a medida.</Text>
    </Glass>
  </Panel>
);

export const OverRender = () => <Scene />;

export const DarkMode = () => <ThemeRoot theme="dark" style={{ padding: 12, borderRadius: 28 }}><Scene /></ThemeRoot>;
