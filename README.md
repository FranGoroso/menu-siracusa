# El Rincón Gourmet - Menú Digital

Aplicación web para mostrar el menú digital del restaurante El Rincón Gourmet, con interfaz moderna, accesible y rendimiento optimizado.

## Características

- 📱 Diseño responsive para móviles, tablets y escritorio
- 🌐 Soporte para múltiples idiomas (ES, EN, FR, DE, PT, CA)
- 🌙 Tema claro/oscuro con detección automática y personalizable
- 📏 Ajuste de tamaño de texto para mejor accesibilidad
- ⚡ Carga optimizada y perezosa para mejor rendimiento
- ♿ Completamente accesible siguiendo WAI-ARIA
- 🖼️ Optimización de imágenes con lazy loading
- ❤️ Función para guardar favoritos con persistencia local
- 🏎️ Animaciones suaves con Framer Motion
- 🧩 Código organizado con componentes reutilizables
- 🔍 SEO optimizado
- 🚀 Mejoras de rendimiento para dispositivos de bajo rendimiento
- 🛡️ Manejo de errores robusto con ErrorBoundary

## Tecnologías utilizadas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [i18next](https://www.i18next.com/)

## Estructura de carpetas

```
src/
├── components/        # Componentes organizados por funcionalidad
│   ├── accessibility/ # Componentes relacionados con accesibilidad
│   ├── common/        # Componentes comunes reutilizables
│   ├── error/         # Componentes para manejo de errores
│   ├── layout/        # Componentes de estructura (Header, Footer)
│   ├── menu/          # Componentes específicos del menú
│   ├── navigation/    # Componentes de navegación
│   └── ui/            # Componentes de UI reutilizables (Button, Modal, etc.)
├── config/            # Configuraciones globales
├── context/           # Contextos de React y proveedores
├── data/              # Datos estáticos y mocks
│   └── parts/         # Datos modularizados
├── hooks/             # Hooks personalizados
├── i18n/              # Configuración y archivos de internacionalización
│   └── locales/       # Archivos de traducciones por idioma
├── types/             # Definiciones de tipos de TypeScript
└── utils/             # Utilidades y funciones auxiliares
```

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tuusuario/project-bolt-sb1-8mv5l6jx.git
   cd project-bolt-sb1-8mv5l6jx/project
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previews the production build locally
- `npm run lint` - Ejecuta el linter para verificar el código

## Optimizaciones implementadas

Este proyecto incluye varias optimizaciones para ofrecer la mejor experiencia de usuario:

### Rendimiento
- **Code Splitting**: Carga perezosa de componentes con React.lazy y Suspense
- **Memoización**: Uso extensivo de useMemo, useCallback y React.memo para evitar renders innecesarios
- **Bundle Optimization**: Configuración avanzada de Vite para optimizar el tamaño final
- **Image Optimization**: Componente LazyImage para cargar imágenes solo cuando son visibles
- **Detección de dispositivos**: Adapta la experiencia según las capacidades del dispositivo

### Accesibilidad
- **ARIA Roles**: Implementación correcta de roles, estados y propiedades ARIA
- **Keyboard Navigation**: Navegación completa con teclado y componente de salto al contenido principal
- **Focus Management**: Gestión adecuada del foco para experiencia mejorada
- **Color Contrast**: Paleta de colores que cumple con WCAG AA
- **Texto Ajustable**: Control para cambiar el tamaño del texto
- **Tema Oscuro**: Soporte para preferencias de tema claro/oscuro

### UX/UI
- **Responsive Design**: Diseño adaptable para todas las pantallas
- **Motion Reduction**: Respeto por preferencias de reducción de movimiento
- **System Preferences**: Detección de preferencias del sistema para tema oscuro
- **Notificaciones**: Sistema de Toast para retroalimentación al usuario
- **Error Handling**: Gestión elegante de errores con ErrorBoundary

## Mejores prácticas

El proyecto sigue estas mejores prácticas:

1. **Estructura modular**: Componentes pequeños y reutilizables
2. **Separación de responsabilidades**: Cada componente tiene un propósito único
3. **Tipado estricto**: TypeScript configurado para máxima seguridad
4. **Estados inmutables**: Evitar mutaciones directas del estado
5. **Componentes memorizados**: Uso de React.memo para evitar renderizados innecesarios
6. **Accesibilidad**: Siguiendo las pautas WCAG 2.1
7. **Context API**: Para estado global del menú, favoritos, tema y tamaño de texto
8. **Custom Hooks**: Para lógica reutilizable

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para cualquier mejora o corrección.

## Licencia

[MIT](LICENSE)
