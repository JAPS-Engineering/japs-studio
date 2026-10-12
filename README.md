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

## Edición

- Contenido y metadatos: `public/index.html`.
- Colores, tipografía, retícula y animaciones: `public/styles.css`.
- Reloj de Santiago y año: `public/studio.js`.
- Ícono: `public/favicon.svg`.

El fondo y la ilustración se dibujan con CSS y SVG; no cargan fuentes, imágenes, analítica ni scripts externos.
