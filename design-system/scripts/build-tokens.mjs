// Genera css/tokens.css desde tokens.json (formato del Design System de Claude: familias con listas de tokens).
// Uso: node design-system/scripts/build-tokens.mjs [--check]. Con --check no escribe y falla si tokens.css está desactualizado.
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const tokens = JSON.parse(readFileSync(join(root, 'tokens.json'), 'utf8'));
const theme = tokens.color.themes[0].id;

const lines = [];
const group = (title, list, value = t => t.value) => {
  lines.push(`  /* ${title} */`);
  for (const t of list) lines.push(`  --${t.name}: ${value(t)};`);
};
group('color', tokens.color.tokens, t => (typeof t.value === 'string' ? t.value : t.value[theme]));
group('type', Object.entries(tokens.type.families).map(([k, v]) => ({ name: `font-${k}`, value: v })));
for (const [family, def] of Object.entries(tokens)) {
  if (['name', 'version', 'color', 'type', 'meta'].includes(family) || !def?.tokens) continue;
  group(family, def.tokens);
}

const css = `/* JAPS Studio — generated from tokens.json (scripts/build-tokens.mjs). No editar a mano. */
:root {
  color-scheme: dark;
${lines.join('\n')}
}
`;

const out = join(root, 'css', 'tokens.css');
if (process.argv.includes('--check')) {
  if (readFileSync(out, 'utf8') !== css) { console.error('css/tokens.css no coincide con tokens.json: corre npm run tokens'); process.exit(1); }
  console.log('css/tokens.css al día');
} else {
  writeFileSync(out, css);
  console.log(`css/tokens.css: ${lines.filter(l => l.includes('--')).length} tokens`);
}
