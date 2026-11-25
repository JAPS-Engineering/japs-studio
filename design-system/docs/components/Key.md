---
category: Actions
---

Tecla: acceso directo grande con forma propia que cambia de radio al pasar el cursor (lab 7a–7c, 10a, 10b). Va en una muesca (`tr`) o en una esquina del panel o la imagen.

- `square` (7a): 112×112, radio 28, menta. En hover se redondea hasta círculo.
- `wide` (7b): 216×92 en `--inverse` con un titular corto (`title`, admite `<br />`) y flecha. Pasa a menta en hover.
- `stat` (7c): 112×112 en superficie con `caption` mono y `value` en Archivo 44: acceso directo que además informa.
- `corner` (10a): 96×88, radio 16 con la esquina superior derecha a 48; en hover esa esquina se abre hasta cuarto de círculo.
- `drop` (10b): gota de 88 px con radio 44 en tres esquinas y 16 en la que apunta la flecha; en hover se completa el círculo.
- `square`, `corner` y `drop` solo llevan icono: pasa `label`.

```jsx
<Panel style={{ minHeight: 340 }}>
  <Notch corner="tr"><Key shape="square" href="#contacto" label="Contacto" /></Notch>
</Panel>
<Key shape="wide" href="#agenda" title={<>Agenda una<br />llamada</>} />
<Key shape="stat" href="#casos" label="24 casos publicados" caption="Casos" value="24" />
<Key shape="corner" href="#siguiente" label="Siguiente sección" />
```
