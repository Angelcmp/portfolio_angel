# Registro de Cambios

Este documento detalla las modificaciones realizadas en el proyecto `portfolio_angel`.

## Versión 2.0.0 — Junio 2026

### Rediseño completo — Minimalista tipo rauchg.com

Se reescribió todo el sitio con un enfoque minimalista, tipográfico y sin dependencias externas.

#### `style.css`
- Reducción de ~860 a 198 líneas (77% menos)
- Variables CSS: fondo `#f5f5f7`, texto `#1d1d1f`, azul Apple para links
- Tipografía IBM Plex Serif via Google Fonts
- Animaciones: fade-in de página, hover arrow en Work, translateY en proyectos
- Layout de artículo con aside sticky para TOC (`.has-sidebar`)
- Media queries responsive para mobile

#### `index.html`
- Secciones claras: Portfolio (intro), Work (solo títulos con hover arrow), Blog (año + título)
- Sin descripciones de proyectos, solo títulos con enlaces
- Paleta de colores Apple

#### `about.html`
- Foto + bio con enlaces a GitHub/LinkedIn/Email
- 5 proyectos actuales: Solaria, BookmarkCollab, NormativaUP, ThroneRP, ggstats
- Descripciones narrativas sin tags de lenguajes
- Sin formulario de contacto (links en bio + footer)

#### `blog.html` + `article.html`
- Formato compacto año + título estilo rauchg
- Artículos con layout de 2 columnas: contenido + aside TOC sticky
- TOC generado automáticamente desde los `<h2>` con resaltado de sección activa via IntersectionObserver

#### `main.js`
- Transiciones de página con fade-out al navegar entre links internos
- Generador automático de tabla de contenidos
- Contador de vistas via countapi.xyz
- Sistema de internacionalización ES/EN

#### Internacionalización (i18n)
- Toggle ES/EN en el nav de todas las páginas
- Inline script en el `<head>` para aplicar traducciones antes del renderizado
- Traducciones en localStorage, persisten entre páginas
- Por defecto: inglés
- Traduce: títulos de sección, intro, proyectos, TOC, descripciones

#### Favicon
- SVG inline: fondo gris claro + letra A en IBM Plex Serif

#### Archivos eliminados
- `work.html`, `work2.html` (integrados en about)
- `mixitup.min.js` (sin uso)
- CDNs: Font Awesome, Bootstrap Icons, Swiper, Masonry, GSAP

#### Sistema de publicación (build.js)
- Script Node.js que convierte Markdown a HTML post
- Usa `marked` para conversión MD → HTML
- Genera post completo con layout, TOC, i18n y contador
- Actualiza automáticamente `blog.html` e `index.html`
- Frontmatter requerido: title, date
- Uso: `npm run new _drafts/mi-post.md`

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
