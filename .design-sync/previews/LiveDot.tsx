import { Card, HudLabel, LiveDot, ThemeRoot } from '@japs/encastre';

export const WithLabel = () => (
  <div style={{ padding: 16 }}>
  <Card padding="sm" style={{ display: 'flex', alignItems: 'center', gap: 10, width: 260 }}>
    <LiveDot />
    <HudLabel>En vivo · build 2026.10</HudLabel>
  </Card>
  </div>
);

export const DarkMode = () => (
  <ThemeRoot theme="dark" style={{ padding: 16, borderRadius: 16 }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <LiveDot />
      <HudLabel>Transmisión activa</HudLabel>
    </div>
  </ThemeRoot>
);
