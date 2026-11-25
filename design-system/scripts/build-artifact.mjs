// Arma la carpeta que se publica en el Design System «JAPS Studio» de Claude (ver SOURCE.md).
// Uso: node design-system/scripts/build-artifact.mjs <carpeta de salida>
// Escribe <salida>/project/… con README, tokens, componentes (bundle.css + fichas), media para las vistas previas
// y los README de cada grupo de assets; y <salida>/uploads.json con los archivos que se suben como assets.
import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ds = join(dirname(fileURLToPath(import.meta.url)), '..');
const repo = join(ds, '..');
const out = resolve(process.argv[2] || join(ds, 'dist', 'artifact'));
const project = join(out, 'project');
rmSync(out, { recursive: true, force: true });
mkdirSync(join(project, 'components'), { recursive: true });

const fail = msg => { console.error(msg); process.exit(1); };
const write = (rel, text) => { const p = join(project, rel); mkdirSync(dirname(p), { recursive: true }); writeFileSync(p, text); };

// Brand book y tokens
write('README.md', readFileSync(join(ds, 'README.md'), 'utf8'));
write('tokens.json', readFileSync(join(ds, 'tokens.json'), 'utf8'));

// Hoja de estilos de los componentes: la misma que usa el sitio, sin los tokens (la página genera tokens.css)
const bundle = ['base', 'components', 'site'].map(f => readFileSync(join(ds, 'css', `${f}.css`), 'utf8')).join('\n');
if (/<\/style/i.test(bundle)) fail('bundle.css contiene </style');
write('components/bundle.css', `/* JAPS Studio — css/base.css + css/components.css + css/site.css */\n${bundle}`);

// Sprite de íconos del sitio, para las vistas previas que usan <use href="#i-…">
const sprite = readFileSync(join(repo, 'src/components/site/IconSprite.astro'), 'utf8').replace(/^---[\s\S]*?---\s*/, '').trim();

const comps = readdirSync(join(ds, 'components')).filter(n => statSync(join(ds, 'components', n)).isDirectory());
for (const name of comps) {
  const dir = join(ds, 'components', name);
  for (const file of readdirSync(dir)) {
    let text = readFileSync(join(dir, file), 'utf8');
    if (file === 'preview.html') {
      if (!/^<!-- @dsCard/.test(text)) fail(`${name}/preview.html: falta el marcador @dsCard en la línea 1`);
      text = text.replace('<!-- @sprite -->', sprite);
      if (/<(iframe|frame|object|embed|portal|noscript)\b/i.test(text)) fail(`${name}/preview.html: etiqueta no permitida`);
      if (Buffer.byteLength(text) > 256 * 1024) fail(`${name}/preview.html supera 256 KB`);
    }
    write(`components/${name}/${file}`, text);
  }
}

// Imágenes que usan las vistas previas (../../media/…)
for (const rel of ['heros', 'logos', 'socios', 'team', 'ciuc.svg']) cpSync(join(repo, 'public/img', rel), join(project, 'media', rel), { recursive: true });
for (const f of readdirSync(join(project, 'media'), { recursive: true })) {
  const p = join(project, 'media', f);
  if (statSync(p).isFile() && statSync(p).size > 512 * 1024) fail(`media/${f} supera 512 KB`);
}

// Assets: se suben al almacén del artifact y el índice los registra
const groups = [
  { name: 'Logos', tile: 'l', readme: 'Logo 07d de JAPS Studio: «JAPS» en #F2F5F4 y «Studio» en agua #6ADCDC. `logo-japs-studio.svg` es transparente (para fondo oscuro); `logo-japs-studio-sobre-fondo.svg` lleva el fondo #020304. `favicon.svg` es el ícono de pestaña: la «S» manuscrita en agua sobre un cuadrado #020304.', files: [['design-system/assets/logo-japs-studio.svg'], ['design-system/assets/logo-japs-studio-sobre-fondo.svg'], ['public/img/favicon.svg']] },
  { name: 'Productos', tile: 's', readme: 'Isotipos de los productos del portafolio. Van sobre el color real de su marca (ver ProductLogo): Consenty #EEF0FC, Project Check #E7EDE3, Brixor #EDF5FF, Melian #F5F5F5, Relatio #F7F8FA, Sonicali #FFFFFF. Nunca directo sobre una foto.', files: readdirSync(join(repo, 'public/img/logos')).sort().map(f => [`public/img/logos/${f}`]) },
  { name: 'Contrapartes', tile: 'm', readme: 'Logos de las empresas con que se construyó cada producto: Nevermore (Brixor), DueGreen (Project Check) e Imaginería (Melian). Se muestran sobre la cápsula blanca de PartnerTag, precedidos de «Junto a».', files: [['public/img/socios/nevermore.svg'], ['public/img/socios/duegreen.png'], ['public/img/socios/imagineria.svg']] },
  { name: 'Sellos', tile: 'm', readme: '`ciuc.svg`: Centro de Innovación UC Anacleto Angelini, a color (en el sitio se muestra en blanco con `filter: brightness(0) invert(1)`). `marca-chile.png`: sello Empresa chilena, blanco sobre transparente; necesita fondo oscuro.', files: [['public/img/ciuc.svg'], ['public/img/socios/marca-chile.png']] },
  { name: 'Fotos', tile: 'm', readme: 'Fotos de los paneles del sitio: personas trabajando con tecnología en contextos chilenos y los productos en uso. 1600 px de ancho, JPG calidad 80. Nunca reemplazarlas por formas 3D en CSS.', files: readdirSync(join(repo, 'public/img/heros')).sort().map(f => [`public/img/heros/${f}`]) },
];
const uploads = [];
for (const g of groups) {
  write(`assets/${g.name}/README.md`, `# ${g.name}\n\n${g.readme}\n`);
  for (const [src] of g.files) {
    const file = src.split('/').pop();
    const dest = join(out, 'uploads', g.name, file);
    mkdirSync(dirname(dest), { recursive: true });
    cpSync(join(repo, src), dest);
    uploads.push({ group: g.name, name: file, local: dest, size: statSync(dest).size });
  }
}
writeFileSync(join(out, 'uploads.json'), JSON.stringify({ groups: groups.map(({ name, tile }) => ({ name, tile })), uploads }, null, 1));

// Índice publicado la última vez (con los ids de los assets), si existe
const index = join(ds, 'artifact-index.json');
if (existsSync(index)) write('design-system.json', readFileSync(index, 'utf8'));

const count = readdirSync(project, { recursive: true }).filter(f => statSync(join(project, f)).isFile()).length;
console.log(`${out}: ${count} archivos en project/, ${uploads.length} assets para subir, ${comps.length} componentes`);
