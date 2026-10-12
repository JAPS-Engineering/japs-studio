# JAPS Studio

Página temporal de JAPS Studio: **Work in progress**, con diseño cyberpunk retrofuturista. HTML, CSS y JavaScript nativos, sin dependencias ni servicios de terceros. Se adapta a móvil y respeta la preferencia de movimiento reducido.

## Desarrollo

Requiere Node.js 20 o superior. No necesita instalar paquetes.

```sh
npm run dev
```

Abre `http://127.0.0.1:4322`. Puedes cambiar el puerto con `PORT=4323 npm run dev`.

```sh
npm run build
npm run preview
```

`public/` contiene la página y los assets; `dist/` es la salida del build y no se versiona. El reloj usa `America/Santiago`, incluido su cambio de horario de verano. El enlace de contacto abre `contacto@japs.ing`.

## Publicación

Repositorio: https://github.com/JAPS-Engineering/japs-studio

Cada push a `main` ejecuta `.github/workflows/deploy.yml` y publica `dist/` en GitHub Pages. También puedes ejecutar el workflow manualmente. En **Settings → Pages**, la fuente debe ser **GitHub Actions**.

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

## Edición

- Contenido y metadatos: `public/index.html`.
- Colores, tipografía, retícula y animaciones: `public/styles.css`.
- Reloj de Santiago y año: `public/studio.js`.
- Ícono: `public/favicon.svg`.

El fondo y la ilustración se dibujan con CSS y SVG; no cargan fuentes, imágenes, analítica ni scripts externos.
