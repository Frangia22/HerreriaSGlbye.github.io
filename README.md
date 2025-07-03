# HerreriaSGlbye.github.io

Sitio web corporativo estático para Herreria SG, desarrollado con tecnologías modernas y diseño responsivo.

## 🏗️ Descripción del Proyecto

Este es un sitio web corporativo para una empresa de herrería que incluye:

- **Página de inicio** con sección hero atractiva
- **Sección "Sobre nosotros"** con información de la empresa
- **Catálogo de servicios** ofrecidos
- **Formulario de contacto** para clientes
- **Footer** con información de contacto y redes sociales

## 🛠️ Tecnologías Utilizadas

### Frontend

- **React 19.1.0** - Biblioteca de JavaScript para interfaces de usuario
- **TypeScript 5.8.3** - Superset de JavaScript con tipado estático
- **Vite 6.3.5** - Herramienta de construcción rápida para desarrollo moderno
- **Tailwind CSS 4.1.8** - Framework CSS utility-first para diseño responsivo
- **GSAP 3.13.0** - Biblioteca para animaciones web avanzadas

### Herramientas de Desarrollo

- **ESLint** - Linter para mantener la calidad del código
- **React Router 7.6.1** - Enrutamiento para aplicaciones React

## 📋 Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 18 o superior)
- **npm** o **yarn** como gestor de paquetes

### Verificar instalación

```bash
node --version
npm --version
```

## 🚀 Instalación y Configuración

### 1. Clonar el repositorio

```bash
git clone https://github.com/HerreriaSGlbye/HerreriaSGlbye.github.io.git
cd HerreriaSGlbye.github.io
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar en modo desarrollo

```bash
npm run dev
```

El servidor de desarrollo se iniciará en `http://localhost:5173` (o el puerto que Vite asigne automáticamente).

## 📁 Estructura del Proyecto

```
HerreriaSGlbye.github.io/
├── public/                 # Archivos estáticos públicos
│   ├── favicon.svg        # Icono del sitio
│   └── favicon-dark.svg   # Icono para modo oscuro
├── src/                   # Código fuente principal
│   ├── assets/           # Recursos estáticos (imágenes, iconos)
│   │   ├── flyer/        # Imágenes promocionales
│   │   └── icons/        # Iconos SVG
│   ├── components/       # Componentes React reutilizables
│   │   ├── navbar.tsx    # Barra de navegación
│   │   ├── hero.tsx      # Sección principal
│   │   ├── about-us.tsx  # Sección sobre nosotros
│   │   ├── our_services.tsx # Catálogo de servicios
│   │   ├── contact.tsx   # Formulario de contacto
│   │   └── footer.tsx    # Pie de página
│   ├── data/             # Datos y constantes
│   │   └── constants.tsx # Constantes de la aplicación
│   ├── utils/            # Utilidades y helpers
│   │   └── handleSection.ts # Funciones para manejo de secciones
│   ├── App.tsx           # Componente principal
│   ├── main.tsx          # Punto de entrada
│   └── style.css         # Estilos globales
├── static/               # Archivos estáticos adicionales
│   ├── css/             # Estilos CSS adicionales
│   ├── icons/           # Iconos adicionales
│   └── img/             # Imágenes adicionales
├── package.json          # Dependencias y scripts
├── vite.config.ts        # Configuración de Vite
├── tsconfig.json         # Configuración de TypeScript
└── README.md            # Este archivo
```

## 🎨 Temas y Colores

El proyecto utiliza un sistema de colores consistente y moderno:

### Paleta de Colores

- **Fondo principal**: `#F6F5F3`
- **Texto principal**: `#161616`
- **Primario**: Azul corporativo (`#1c396d` a `#0f203b`)
- **Secundario**: Beige (`#F5EEE1`)
- **Acentos**: Variaciones de azul y beige para elementos interactivos

### Tipografía

- **Títulos**: Josefin Sans (elegante y moderna)
- **Cuerpo de texto**: Onest (legible y clara)

## 📝 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia el servidor de desarrollo

# Construcción
npm run build        # Construye la aplicación para producción

# Vista previa
npm run preview      # Previsualiza la build de producción
```

## 🔧 Desarrollo

### Agregar nuevos componentes

1. Crea el archivo en `src/components/`
2. Usa la convención de nombres en PascalCase (ej: `MiComponente.tsx`)
3. Importa y usa el componente en `App.tsx`

### Modificar estilos

- Usa Tailwind CSS para estilos utilitarios
- Para estilos personalizados, modifica `src/style.css`
- Los temas se definen en el sistema de colores de Tailwind

### Animaciones

- Utiliza GSAP para animaciones complejas
- Importa `@gsap/react` para hooks de React

## 🚀 Despliegue

### GitHub Pages

El proyecto está configurado para desplegarse automáticamente en GitHub Pages desde la rama `main`.

### Despliegue manual

```bash
npm run build
# Sube la carpeta dist/ a tu servidor web
```

## 🤝 Contribución

1. Haz un fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Contacto

Para consultas sobre el proyecto o la empresa:

- **Empresa**: Herreria SG
- **Desarrollador**: [Tu información de contacto]

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

**Nota**: Este proyecto utiliza tecnologías modernas de desarrollo web. Asegúrate de tener conocimientos básicos de React, TypeScript y Tailwind CSS antes de realizar modificaciones significativas.
