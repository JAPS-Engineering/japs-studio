import { Card, HudCross, HudLabel, ThemeRoot } from '@japs/encastre';

const Module = () => (
  <Card style={{ width: 300 }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <HudLabel tone="muted">02 — Proceso</HudLabel>
      <HudCross />
    </div>
  </Card>
);

export const InModuleHeader = () => <div style={{ padding: 16 }}><Module /></div>;

export const DarkMode = () => <ThemeRoot theme="dark" style={{ padding: 16, borderRadius: 28 }}><Module /></ThemeRoot>;
