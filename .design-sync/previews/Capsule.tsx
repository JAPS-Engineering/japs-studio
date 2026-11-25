import { Capsule, HudLabel, Icon, IconButton, ThemeRoot } from '@japs/encastre';

const vertical = { writingMode: 'vertical-rl', rotate: '180deg' } as const;

const Sidebar = () => (
  <Capsule style={{ height: 320 }}>
    <IconButton label="JAPS Studio"><Icon name="plus" /></IconButton>
    <HudLabel style={vertical}>JAPS · Studio</HudLabel>
    <div style={{ flex: 1 }} />
    <IconButton label="Cambiar a modo oscuro"><Icon name="moon" /></IconButton>
  </Capsule>
);

export const Vertical = () => <div style={{ display: 'flex', gap: 24 }}><Sidebar /><ThemeRoot theme="dark" style={{ padding: 12, borderRadius: 40 }}><Sidebar /></ThemeRoot></div>;

export const Horizontal = () => (
  <Capsule orientation="horizontal">
    <IconButton label="JAPS Studio"><Icon name="plus" /></IconButton>
    <HudLabel>JAPS · Studio</HudLabel>
    <div style={{ flex: 1 }} />
    <IconButton label="Abrir menú"><Icon name="menu" /></IconButton>
  </Capsule>
);
