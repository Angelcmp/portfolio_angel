# Registro de Cambios

Este documento detalla las modificaciones realizadas en el proyecto `portfolio_angel`.

## Versión 1.1.0 - 4 de Julio de 2025

### Mejoras Generales

*   **Responsividad:** Se mejoró la adaptabilidad del sitio a diferentes tamaños de pantalla mediante la refactorización de las media queries en `style.css`.
*   **Rendimiento:** Se eliminaron librerías JavaScript (`masonry.pkgd.min.js`, `mixitup.min.js`) que ya no eran necesarias, reduciendo la carga de scripts.
*   **Consistencia de Enlaces:** Se ajustó el color de los enlaces para que siempre sean blancos y tengan un efecto de hover sutil en todo el sitio.

### `work.html`

*   **Galería de Proyectos:**
    *   Se refactorizó el diseño de la galería para utilizar **CSS Grid**, proporcionando una estructura más robusta y flexible.
    *   Se mejoró el estilo visual de las tarjetas de proyecto (`.grid-item`) con `border-radius` y `box-shadow` para un aspecto más moderno y separado.
    *   Se refinó la superposición (`.grid_item-rollover`) para una mejor presentación de la información al pasar el ratón.
    *   Se optimizó la estructura HTML de las tarjetas, asegurando que la información (título, etiquetas, enlaces) se presente de manera clara y concisa, y se eliminaron `div` vacíos.
    *   Se eliminaron las referencias a las librerías JavaScript de Masonry y Mixitup, ya que el diseño ahora se maneja con CSS Grid.
*   **Paginación:** Se mejoró el estilo de los botones de paginación para integrarse mejor con el nuevo diseño de las tarjetas.

### `work2.html`

*   **Aplicación de Mejoras:** Se aplicaron las mismas mejoras visuales y estructurales realizadas en `work.html`, incluyendo la refactorización de la galería a CSS Grid, la optimización de la estructura de las tarjetas y la eliminación de scripts innecesarios.
*   **Referencias de Scripts:** Se eliminaron las referencias a las librerías JavaScript de Masonry y Mixitup.

### `style.css`

*   **Media Queries:** Se refactorizaron y consolidaron las media queries para una mejor gestión de la responsividad.
*   **Galería (CSS Grid):** Se añadieron estilos para implementar CSS Grid en la galería de proyectos.
*   **Imágenes Responsivas:** Se implementaron reglas CSS globales para asegurar que todas las imágenes se escalen correctamente (`max-width: 100%; height: auto;`).
*   **Encabezado Fijo:** Se refactorizó el encabezado fijo para usar `position: sticky` en CSS, eliminando la dependencia de JavaScript para este comportamiento.
*   **Estilo de Tarjetas:** Se ajustaron los estilos de `.grid-item`, `.grid_item-rollover`, `.titleinfo`, y `.tagsinfo` para un diseño más moderno.
*   **Estilo de Paginación:** Se mejoró el estilo de los botones de paginación.
*   **Color de Enlaces:** Se modificaron las reglas CSS para que los enlaces sean blancos por defecto y tengan un efecto de hover con un blanco ligeramente más oscuro.
*   **Sección de Contacto:** Se ajustaron los estilos de los campos de formulario y el botón de envío para un aspecto más moderno (bordes redondeados, padding).

### `main.js`

*   **Limpieza de Código:** Se eliminó el código JavaScript relacionado con la funcionalidad de "sticky header" y la inicialización de Masonry, ya que ahora se manejan con CSS.

### `about.html`

*   **Contenido de Texto:** Se mejoró la redacción de los párrafos de introducción y cierre para hacerlos más impactantes y con una llamada a la acción clara.
*   **Sección "Mis Redes":** Se integraron iconos de Font Awesome en los enlaces de redes sociales y se eliminó el enlace a YouTube si no era activo.
*   **Formulario de Contacto:** Se añadieron atributos `name` y `required` a los campos del formulario para mejorar la semántica y la validación básica. Se añadió un párrafo introductorio al formulario.
