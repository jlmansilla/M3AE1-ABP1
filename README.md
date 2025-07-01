# VerdeModa - Sitio Web de Ropa Sustentable

Un sitio web responsivo para una tienda de ropa ecológica, desarrollado con metodología BEM y arquitectura CSS modular.

## 🌟 Características Principales

### 🎨 Diseño y UX
- **Diseño responsivo** con enfoque mobile-first
- **Interfaz moderna** con esquema de colores naturales
- **Navegación SPA** (Single Page Application) sin recarga de página
- **Modal interactivo** para detalles de productos
- **Animaciones suaves** y transiciones optimizadas
- **Filtros dinámicos** en el catálogo de productos

### 🏗️ Arquitectura CSS
- **Metodología BEM** (Block Element Modifier) para nomenclatura
- **Estructura modular** con separación de responsabilidades
- **Variables CSS personalizadas** para consistencia en el diseño
- **Mobile-first approach** con media queries progresivas
- **Optimización de rendimiento** con will-change y transiciones eficientes

### ♿ Accesibilidad
- **Focus visible** mejorado para navegación por teclado
- **Reducción de animaciones** respetando `prefers-reduced-motion`
- **Contraste adecuado** en texto sobre imágenes
- **Navegación semántica** con HTML5 estructurado

## 📁 Estructura del Proyecto

```
/
├── index.html              # Archivo HTML principal
├── assets/
│   ├── css/
│   │   ├── base/          # Fundamentos
│   │   │   ├── _variables.css    # Variables CSS
│   │   │   ├── _reset.css        # Reset y normalización
│   │   │   ├── _typography.css   # Tipografía
│   │   │   └── _utilities.css    # Utilidades
│   │   ├── components/    # Componentes reutilizables
│   │   │   ├── _button.css       # Botones
│   │   │   ├── _product-card.css # Tarjetas de producto
│   │   │   └── _modal.css        # Modal
│   │   ├── layout/        # Estructura principal
│   │   │   ├── _header.css       # Cabecera
│   │   │   ├── _navigation.css   # Navegación
│   │   │   └── _footer.css       # Pie de página
│   │   ├── pages/         # Estilos específicos por página
│   │   │   ├── _home.css         # Página de inicio
│   │   │   ├── _catalog.css      # Catálogo
│   │   │   └── _contact.css      # Contacto
│   │   ├── responsive/    # Media queries
│   │   │   ├── _tablet.css       # Tablet (768px-1023px)
│   │   │   └── _mobile.css       # Móvil (<768px)
│   │   └── main.css       # Archivo principal
│   ├── img/               # Imágenes del proyecto
│   ├── js/                # Scripts JavaScript
│   └── scss/              # Archivos SCSS (si aplica)
└── README.md              # Este archivo
```

## 🎯 Metodología BEM Implementada

### Bloques Principales
- `.header` - Cabecera del sitio
- `.nav` - Navegación principal
- `.hero` - Sección hero de la página principal
- `.product-card` - Tarjetas de productos
- `.modal` - Modal para detalles de productos
- `.btn` - Botones del sitio
- `.footer` - Pie de página

### Ejemplos de Nomenclatura BEM
```css
/* Bloque */
.product-card { }

/* Elemento */
.product-card__image { }
.product-card__title { }
.product-card__price { }

/* Modificador */
.product-card--featured { }
.btn--primary { }
.btn--secondary { }
```

## 🎨 Sistema de Diseño

### Paleta de Colores
```css
--color-primary: #4A6B5D;    /* Verde bosque oscuro */
--color-secondary: #A8D5BA;  /* Verde menta claro */
--color-accent: #D9A689;     /* Tono tierra/durazno */
--color-text: #333333;       /* Gris oscuro para texto */
--color-light: #F7F7F7;      /* Fondo claro */
--color-white: #FFFFFF;      /* Blanco */
```

### Tipografía
- **Headings**: 'Playfair Display', serif
- **Body**: 'Montserrat', sans-serif

### Espaciados
Sistema de espaciado consistente con variables CSS:
- `--spacing-xs`: 5px
- `--spacing-sm`: 10px
- `--spacing-md`: 15px
- `--spacing-lg`: 20px
- `--spacing-xl`: 30px
- `--spacing-xxl`: 50px

## 📱 Breakpoints Responsivos

- **Móvil**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: > 1024px

## 🚀 Funcionalidades

### Navegación
- **SPA Navigation**: Cambio de páginas sin recarga
- **Menú hamburguesa** en dispositivos móviles
- **Navegación por teclado** optimizada

### Catálogo de Productos
- **Filtrado dinámico** por categorías
- **Grid responsivo** que se adapta a cualquier dispositivo
- **Hover effects** para mejor interactividad

### Modal de Producto
- **Detalles completos** del producto
- **Galería de imágenes** optimizada
- **Tallas disponibles** claramente mostradas
- **Integración con WhatsApp** para consultas

### Rendimiento
- **Lazy loading** de imágenes
- **Transiciones CSS** optimizadas
- **Imports CSS** modulares para mejor carga

## 🛠️ Tecnologías Utilizadas

- **HTML5** semántico
- **CSS3** con variables personalizadas
- **JavaScript vanilla** para interactividad
- **Metodología BEM** para organización CSS
- **Mobile-first design**
- **CSS Grid y Flexbox** para layouts

## 📋 Mejores Prácticas Implementadas

### CSS
- ✅ Metodología BEM consistente
- ✅ Variables CSS para mantenibilidad
- ✅ Estructura modular y escalable
- ✅ Mobile-first approach
- ✅ Optimización de rendimiento

### HTML
- ✅ Semántica HTML5
- ✅ Accesibilidad básica
- ✅ Meta tags responsivos
- ✅ Estructura clara y mantenible

### JavaScript
- ✅ Separación de responsabilidades
- ✅ Event delegation
- ✅ Gestión de estados
- ✅ Código limpio y documentado

## 🎓 Objetivos de Aprendizaje Cumplidos

1. **Estructuración CSS profesional** con metodología BEM
2. **Diseño responsivo** con enfoque mobile-first
3. **Modularidad y escalabilidad** del código CSS
4. **Optimización de rendimiento** web
5. **Buenas prácticas** de desarrollo frontend
6. **Accesibilidad web** básica
7. **Arquitectura de archivos** estándar de la industria

## 🌱 Sostenibilidad y Propósito

Este proyecto representa más que una tienda online; es una declaración de valores hacia la moda sostenible y el desarrollo web responsable, implementando código limpio, eficiente y accesible para todos los usuarios.

---

**Desarrollado con 💚 para un futuro más verde**