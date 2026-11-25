import { Glass, Heading, HudLabel, Icon, IconButton, Nav, Notch, Panel, Pill, Text, ThemeRoot } from '@japs/encastre';

const heroBg = 'radial-gradient(110% 90% at 85% 15%, #6E8F84 0%, transparent 60%), var(--panel)';

const Hero = () => (
  <Panel padding="lg" style={{ minHeight: 460, paddingBottom: 96, background: heroBg, display: 'grid', alignContent: 'start', gap: 20 }}>
    <Nav>
      <Pill variant="accent" current href="#">Inicio</Pill>
      <Pill href="#servicios">Servicios</Pill>
      <Pill href="#proyectos">Proyectos</Pill>
    </Nav>
    <Notch corner="tr">
      <Pill href="#contacto">Contacto</Pill>
      <IconButton label="Abrir menú" variant="inverse"><Icon name="menu" /></IconButton>
    </Notch>
    <HudLabel>01 — JAPS Studio / 2026</HudLabel>
    <Heading variant="statement" style={{ fontSize: 56 }}>Software<br />que encaja.</Heading>
    <Glass style={{ position: 'absolute', right: 24, bottom: 24, width: 260 }}>
      <HudLabel>¿Qué hacemos?</HudLabel>
      <Text size="small">Estrategia, diseño de interfaz y desarrollo de software a medida.</Text>
    </Glass>
    <Notch corner="bl">
      <Pill variant="solid" size="lg" href="#agenda" icon={<Icon name="arrow-right" size={16} />}>Agenda una conversación</Pill>
    </Notch>
  </Panel>
);

export const HeroLight = () => (
  <ThemeRoot theme="light" style={{ padding: 12, borderRadius: 40 }}>
    <Hero />
  </ThemeRoot>
);

export const HeroDark = () => (
  <ThemeRoot theme="dark" style={{ padding: 12, borderRadius: 40 }}>
    <Hero />
  </ThemeRoot>
);

export const Simple = () => (
  <Panel padding="md">
    <HudLabel>02 — Módulo</HudLabel>
    <Heading variant="h2" style={{ marginTop: 8 }}>Diseño que calza con tu operación</Heading>
  </Panel>
);
