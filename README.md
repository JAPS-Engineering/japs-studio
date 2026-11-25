# JAPS Studio

Sitio de JAPS Studio, constructora de startups: **https://studio.japs.ing/**. Hecho con [Astro](https://astro.build) con la misma estructura que japs.ing: páginas que montan una vista, componentes reutilizables y datos en un solo lugar. Salida estática, sin framework en el navegador.

## Desarrollo

Requiere Node.js 20 o superior.

```sh
npm install
npm run dev       # http://localhost:4321
npm run check     # tipos y plantillas
npm run build     # genera dist/
npm run preview   # sirve dist/
```

`dist/` es la salida del build y no se versiona.

## Estructura

```
src/pages/          index, portafolio y contacto: cada una monta su vista
src/views/          HomeView, PortfolioView, ContactView
src/layouts/Base    <head>, loader, sprite de íconos, header, footer y botón de WhatsApp
src/components/
  site/             header, footer, Logo, Icon, Cta, ProductLogo, PartnerTag, RoundPhoto, Ciuc, EngMark…
  home/             secciones de la portada (Hero, WhatIsStudio, HowWeWork, Solutions, About, Engineering)
  form/             ContactForm y sus campos (TextField, ChoiceField, SelectField)
  seo/Seo           título, descripción, canonical, Open Graph y Twitter Card
src/data/           site (contacto y enlaces externos), nav (rutas y menú), productos, equipo
src/styles/         global.css (común) + portafolio.css y contacto.css
public/             CNAME, robots.txt e img/ (fotos, logos de productos y socios)
```

## Edición

- **Productos**: `src/data/productos.ts`. El header, la portada, el portafolio y el footer se generan desde esa lista.
- **Menú y rutas**: `src/data/nav.ts`. Ningún enlace interno se escribe a mano en los componentes.
- **Contacto, redes y enlaces a JAPS Engineering**: `src/data/site.ts`.
- **Equipo y reconocimientos**: `src/data/equipo.ts`.
- **Formulario**: `src/components/form/ContactForm.astro`. Envía a JAPS Core (`/api/publico/contacto/`) con `motivo=JAPS Studio`; Core acepta las rutas `/contacto` y `/contacto.html` de este dominio.

Las rutas son `/`, `/portafolio` y `/contacto`. `build.format: 'file'` genera `portafolio.html` y `contacto.html`, así que GitHub Pages sirve ambas formas y los enlaces antiguos con `.html` siguen funcionando. El sitemap lo genera `@astrojs/sitemap`.

## Publicación

Repositorio: https://github.com/JAPS-Engineering/japs-studio

El despliegue es manual: `.github/workflows/deploy.yml` solo corre con `workflow_dispatch` desde `main`, con el SHA probado en local (`sha_probado`) y la evidencia de las pruebas (`evidencia_local`). Instala con `npm ci`, construye y publica `dist/` en GitHub Pages. En **Settings → Pages**, la fuente debe ser **GitHub Actions**.

Dominio previsto: **https://studio.japs.ing/**. Debe configurarse en **Settings → Pages → Custom domain**; el archivo `public/CNAME` registra el mismo dominio en el proyecto.

En el proveedor DNS de `japs.ing`, el registro requerido es:

| Tipo | Nombre | Destino |
| --- | --- | --- |
| CNAME | studio | japs-engineering.github.io |

El destino no lleva protocolo ni ruta del repositorio. Si usas Cloudflare, empieza en **DNS only**, sin proxy, para que GitHub pueda comprobar el dominio y emitir el certificado. Activa **Enforce HTTPS** cuando GitHub indique que el certificado está listo.

Referencia: [dominios personalizados en GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

## Alias estudio.japs.ing

`studio.japs.ing` es un sitio independiente, publicado desde este repositorio. Comparte el destino DNS de la organización con `japs.ing`, pero GitHub distingue cada sitio por su dominio personalizado.

`estudio.japs.ing` debe redirigir a `studio.japs.ing`. Esta redirección se configura en Cloudflare, porque un CNAME no cambia la URL del navegador.

1. Crea un **CNAME** llamado **estudio**, con destino **studio.japs.ing** y proxy **activado** (nube naranja). El registro **studio** se mantiene en **DNS only**.
2. En **Rules → Redirect Rules → Create rule → Single Redirect**, usa el nombre `Estudio → Studio`.
3. Selecciona **Custom filter expression** y escribe `(http.host eq "estudio.japs.ing")`.
4. Elige destino **Dynamic** con la expresión `concat("https://studio.japs.ing", http.request.uri.path)`.
5. Usa código **301**, activa **Preserve query string** y publica la regla.

Así `https://estudio.japs.ing/?utm_source=alias` redirige a `https://studio.japs.ing/?utm_source=alias`, conservando rutas y parámetros. La regla solo afecta al hostname `estudio.japs.ing`.

El objeto de la regla está preparado en `cloudflare/estudio-redirect-rule.json`; corresponde a la fase `http_request_dynamic_redirect`. Es una configuración para aplicar en Cloudflare, no una redirección ejecutada por esta web. No reemplaces reglas existentes al importarla.

Referencia: [redirigir a otro hostname en Cloudflare](https://developers.cloudflare.com/rules/url-forwarding/examples/redirect-all-different-hostname/).
