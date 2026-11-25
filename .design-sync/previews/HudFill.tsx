import { Card, HudFill, ThemeRoot } from '@japs/encastre';

const cell = { height: 300, padding: 0 } as const;
const grid = { display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 12, padding: 16 } as const;

export const Registration = () => (
  <div style={grid}>
    <Card padding="none" style={cell}><HudFill fill="registration" /></Card>
    <Card padding="none" style={cell}><HudFill fill="edge-ticks" /></Card>
  </div>
);

export const ProgressAndGhost = () => (
  <div style={grid}>
    <Card padding="none" style={cell}><HudFill fill="progress" /></Card>
    <Card padding="none" style={cell}><HudFill fill="ghost-index" /></Card>
  </div>
);

export const DotsAndSeries = () => (
  <div style={grid}>
    <Card padding="none" style={cell}><HudFill fill="dot-strip" motion={false} /></Card>
    <Card padding="none" style={cell}><HudFill fill="series" /></Card>
  </div>
);

export const MarkedCard = () => (
  <div style={{ padding: 16 }}><HudFill fill="marked-card" /></div>
);

export const Leader = () => (
  <div style={{ padding: 16 }}><Card padding="none" style={{ height: 360, padding: 0 }}><HudFill fill="leader" /></Card></div>
);

export const DarkMode = () => (
  <ThemeRoot theme="dark" style={{ ...grid, borderRadius: 28 }}>
    <Card padding="none" style={cell}><HudFill fill="progress" /></Card>
    <Card padding="none" style={cell}><HudFill fill="series" /></Card>
  </ThemeRoot>
);
