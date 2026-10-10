# Pizzería Mamma Mía - Hito 5

Proyecto desarrollado en React (Vite) en el marco de la Academia de Talentos Digitales (Desafío Latam), enfocado en la implementación de rutas dinámicas mediante **React Router DOM**, manejo de parámetros en la URL (`:id`), visualización detallada de productos individuales (`Pizza.jsx`), sincronización de datos locales y globales, y control interactivo de cantidades del carrito de compras.

## 🚀 Funcionalidades del Hito 5
- **Rutas Dinámicas e Identificadores (`App.jsx` y `Pizza.jsx`):**
  - Configuración de una ruta dinámica basada en parámetros (`/pizza/:id`) en `App.jsx` para permitir el acceso individual a cada producto del catálogo.
  - Uso del hook `useParams` de `react-router-dom` para capturar el identificador de la pizza seleccionada desde la URL.

- **Gestión de Datos y Respaldo Local:**
  - Implementación de un catálogo de respaldo robusto en el componente `Pizza.jsx` con asignación flexible de IDs y carga instantánea de información detallada (descripción, ingredientes y precios formateados).
  - Integración de recursos visuales locales almacenados en la carpeta `public/img/` mediante plantillas de texto dinámicas (`/img/${id}.jpeg`) para asegurar la consistencia gráfica.

- **Sincronización Interactiva con el Carrito (`CartContext`):**
  - Incorporación del botón "Añadir 🛒" y controles interactivos de incremento (`+`) y decremento (`-`) sincronizados directamente con el estado global del carrito.
  - Verificación en tiempo real de la cantidad de unidades agregadas de cada pizza para alternar de manera fluida entre la opción de compra inicial y el selector dinámico.

## 🛠️ Tecnologías Utilizadas
- React (Vite)
- React Router DOM (`useParams`)
- Context API (Sincronización del estado global del carrito)
- Bootstrap 5.3.3
- JavaScript (ES6+ / Async-Await)

## 👨‍💻 Hecho por

**Marlon Encalada Ramírez** 😎