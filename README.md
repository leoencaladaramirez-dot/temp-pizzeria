# 🍕 Pizzería Mamma Mía! - Hito 7

Este proyecto forma parte del bootcamp de desarrollo web en React de Desafío Latam. En este **Hito 7**, se implementó una arquitectura avanzada utilizando **React Router II**, gestión global de estados con Context API (`UserContext`), rutas protegidas y consumo de rutas dinámicas por ID (`useParams`).

## 🚀 Características y Requerimientos Implementados

1. **Rutas Dinámicas y Petición por ID (`Pizza.jsx`)**:
   - Implementación de `useParams` para extraer el identificador único de cada pizza.
   - Conexión con el endpoint de la API (`/api/pizzas/:id`) y un sistema de respaldo (*fallback*) integrado para garantizar la estabilidad visual ante interrupciones del servidor local.

2. **Gestión Global de Autenticación (`UserContext`)**:
   - Creación del contexto `UserContext` para administrar de forma centralizada el estado del token de usuario (inicializado en `true`).
   - Implementación de la función `logout` para simular el cierre de sesión cambiando el token a `false`.

3. **Navbar Condicional**:
   - Consumo del `UserContext` en el componente de navegación:
     - Con **Token Activo (`true`)**: Muestra los botones de **Profile** y **Logout** (ejecutando la función de cierre de sesión).
     - Sin Token (`false`): Muestra los botones de **Iniciar sesión** y **Regístrate**.
     - El enlace de **Inicio** y el contador del **Carrito** se mantienen siempre visibles.

4. **Validación de Pago en el Carrito (`Cart.jsx`)**:
   - Integración del `UserContext` para condicionar y deshabilitar automáticamente el botón de **"Pagar"** cuando el usuario no cuenta con una sesión activa (`token` en `false`).

5. **Rutas Protegidas y Restringidas (`App.jsx`)**:
   - Protección de la ruta `/profile`: Redirige automáticamente a `/login` si el token es `false`.
   - Restricción de rutas públicas (`/login` y `/register`): Evita que un usuario con sesión activa acceda a estas vistas, redirigiéndolo al Home.

## 🛠️ Tecnologías Utilizadas
- **React.js** (con Vite)
- **React Router DOM** (`useParams`, `Navigate`, rutas anidadas/protegidas)
- **Context API** (`CartContext` y `UserContext`)
- **Bootstrap 5** para el diseño responsivo
- **JavaScript (ES6+)**


## 👨‍💻 Hecho por

**Marlon Encalada Ramírez** 😎