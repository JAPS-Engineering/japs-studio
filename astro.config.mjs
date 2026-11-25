// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * Sitio estático para GitHub Pages. `build.format: 'file'` genera
 * portafolio.html y contacto.html: GitHub Pages los sirve en /portafolio y
 * /contacto, y los enlaces antiguos con .html siguen funcionando.
 */
export default defineConfig({
  site: 'https://studio.japs.ing',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap()],
});
