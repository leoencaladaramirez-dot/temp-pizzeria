# Pizzería Mamma Mía - Hito 4

Proyecto desarrollado en React (Vite) en el marco de la Academia de Talentos Digitales (Desafío Latam), enfocado en la conexión con una API backend mediante Node.js, consumo de datos asíncronos (`fetch`, `async/await`), manejo de efectos con `useEffect` y resolución de recursos visuales locales.

## 🚀 Funcionalidades del Hito 4
- **Consumo de API Backend (`Home.jsx`):**
  - Conexión asíncrona con el servidor backend en Node.js (`http://localhost:5000/api/pizzas`) mediante `fetch` y `async/await`.
  - Implementación del hook `useEffect` para realizar la petición HTTP al montar el componente y almacenar la respuesta en el estado local (`useState`).
  - Recorrido dinámico del arreglo de pizzas obtenido desde la API para renderizar las tarjetas correspondientes.

- **Alternativa de Renderizado de Imágenes Locales:**
  - Implementación de un directorio local (`public/img/`) para almacenar las imágenes de las pizzas nombradas por ID (`p001.jpeg`, `p002.jpeg`, etc.) debido a limitaciones de enlaces externos del backend.
  - Asignación dinámica de rutas locales en `CardPizza.jsx` mediante plantillas de texto (`/img/${pizza.id}.jpeg`) para garantizar la consistencia visual de la interfaz.

- **Estructura y Componentes:**
  - Actualización del componente `CardPizza.jsx` para la correcta recepción y visualización de props e imágenes con estilos responsivos de Bootstrap (`object-fit-cover`).
  - Mantenimiento de la navegación fluida y el diseño moderno basado en Bootstrap 5.3.3 y React Router DOM.

## 🛠️ Tecnologías Utilizadas
- React (Vite)
- Node.js & Express (API Backend local)
- Fetch API / Async-Await
- React Router DOM
- Context API (Manejo de estado global del carrito)
- Bootstrap 5.3.3


## 👨‍💻 Hecho por

**Marlon Encalada Ramírez** 😎