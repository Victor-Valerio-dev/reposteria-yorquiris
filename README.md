# 🎂 Landing Page — Repostería Yorquiris

> *Pasteles perfectos que transportan a un lugar donde todo es dulzura y felicidad.*

---

## 📌 Descripción

**Repostería Yorquiris** es un negocio local de repostería artesanal con sede en Santiago, República Dominicana. Este proyecto es su landing page oficial, diseñada con el propósito de presentar la marca de forma elegante, generar confianza en nuevos clientes y convertir visitas en pedidos directos a través de WhatsApp.

El diseño visual se fundamenta en una paleta de tonos cálidos y pasteles — crema, menta, chocolate y rosa — combinada con tipografías serif elegantes, logrando una identidad visual que transmite dulzura, profesionalismo y distinción.

---

## 🛠️ Stack Tecnológico

| Tecnología | Uso |
|---|---|
| **HTML5** | Estructura semántica y accesible |
| **CSS3** | Estilos, animaciones y diseño responsive |
| **CSS Custom Properties** | Paleta de colores centralizada con variables globales |
| **Vanilla JavaScript** | Interactividad sin dependencias externas |
| **Google Fonts** | Tipografías: Playfair Display + Lato |
| **SVG Inline** | Iconografía sin librerías externas |

Sin frameworks. Sin dependencias. Frontend limpio y de alto rendimiento.

---

## 🎨 Paleta de Colores Oficial

```css
--cream:      #F1E5E0   /* Fondo principal        */
--teal:       #69BCB4   /* Color de acción        */
--teal-light: #85BEB6   /* Hover y acentos        */
--pink:       #C05D74   /* Tags y etiquetas       */
--chocolate:  #30180D   /* Textos y fondos oscuros*/
--gold:       #AF8E6A   /* Estrellas y detalles   */
```

---

## 🏗️ Arquitectura de la Página

La página está construida en **5 bloques secuenciales**:

### 1. Header + Hero Section
Header fijo (`sticky`) con el logotipo Yorquiris, navegación principal y botón de acción directa a WhatsApp. El Hero ocupa el 100% de la altura visible con imagen de fondo, overlay oscuro suave y llamado a la acción principal: *"Explorar Categorías"*.

### 2. ¿Cómo Funciona?
Sección con fondo menta y un grid de **3 columnas** que explica el proceso del pedido paso a paso: **Pedido → Diseña → Retira**. Cada columna incluye un icono SVG, número de paso y descripción clara del proceso.

### 3. Nuestras Categorías
Grid de **3 tarjetas interactivas** — Bodas, Niños y Cumpleaños — con imagen de portada, overlay con botón de pedido al hacer hover, tag de categoría y descripción. Cada tarjeta enlaza directamente a WhatsApp.

### 4. Testimonios
Sección sobre fondo chocolate oscuro con **3 tarjetas de reseñas** de clientes reales. Cada tarjeta incluye comillas decorativas, texto de reseña, avatar con inicial, nombre, rol del cliente y calificación de 5 estrellas en color dorado.

### 5. CTA Final + Footer
**Pre-footer** dividido en dos mitades: imagen de pastel a la izquierda y bloque de llamado a la acción sobre fondo teal a la derecha. El **footer** se organiza en 3 columnas: logo y descripción de la marca, información de contacto con íconos, y enlaces a redes sociales. La barra inferior incluye Términos, Política de Privacidad y crédito de desarrollo.

---

## 📁 Estructura del Proyecto

```
reposteria-yorquiris/
│
├── index.html              # Documento principal
├── css/
│   └── styles.css          # Estilos globales + responsive
├── js/
│   └── app.js              # Interactividad (scroll, nav activa, menú móvil)
└── assets/
    └── images/
        ├── hero-bg.jpg     # Imagen del Hero
        ├── cat-bodas.jpg   # Tarjeta Bodas
        ├── cat-ninos.jpg   # Tarjeta Niños
        ├── cat-cumpleanos.jpg  # Tarjeta Cumpleaños
        └── cta-pastel.jpg  # Imagen del CTA final
```

---

## ⚡ Funcionalidades JavaScript

- **Efecto scroll en header** — sombra dinámica al desplazarse hacia abajo.
- **Navegación activa** — resalta automáticamente el enlace de la sección visible usando `IntersectionObserver`.
- **Menú hamburguesa** — desplegable animado para dispositivos móviles con animación de ícono X.

---

## 📱 Responsive Design

La página es completamente adaptable a dispositivos móviles (`max-width: 768px`):

- Los grids de 3 columnas colapsan a **1 columna**.
- El menú de navegación se convierte en un **menú hamburguesa**.
- El bloque CTA pasa de horizontal a **vertical apilado**.
- El footer se reorganiza en **columna única**.

---

## 🚀 Cómo usar

```bash
# Clonar el repositorio
git clone https://github.com/Victor-Valerio-dev/reposteria-yorquiris.git

# Abrir en el navegador
# Simplemente abre index.html con Live Server en VS Code
```

No requiere instalación de dependencias ni build process.

---

## 👤 Créditos

Desarrollado por **Valeron** — *Built to Conquer Tomorrow.*
