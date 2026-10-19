# Pizzería Mamma Mía - Hito 6

Proyecto desarrollado en React (Vite) en el marco de la Academia de Talentos Digitales (Desafío Latam), enfocado en la implementación y gestión del **Estado Global con Context API** para el manejo completo del carrito de compras.

## 🚀 Funcionalidades del Hito 6
- **Implementación de Estado Global (`CartContext.jsx`):**
  - Creación de un contexto dedicado a administrar el carrito de compras de manera centralizada.
  - Funciones optimizadas para agregar productos (`addToCart`), incrementar cantidades e identificar elementos existentes, además de disminuir o eliminar ítems dinámicamente (`removeFromCart`).

- **Sincronización en el Navbar (`Navbar.jsx`):**
  - Consumo de `CartContext` para calcular en tiempo real el precio total de los productos añadidos al carrito.
  - Visualización automática del monto total actualizado en la barra de navegación superior.

- **Integración en Tarjetas del Catálogo (`CardPizza.jsx`):**
  - Consumo del contexto en las tarjetas del componente principal (`Home`/`CardPizza`) permitiendo al usuario añadir pizzas al carrito de forma interactiva con un solo clic.

- **Gestión Completa en la Vista del Carrito (`Cart.jsx`):**
  - Renderizado dinámico de los productos seleccionados por el usuario utilizando el estado global.
  - Controles interactivos de incremento (`+`) y reducción/eliminación (`-`) por cada ítem.
  - Cálculo automatizado del total de la compra sincronizado de manera exacta con el valor mostrado en el `Navbar`.

## 🛠️ Tecnologías Utilizadas
- React (Vite)
- Context API (`createContext`, `useContext`)
- React Router DOM
- Bootstrap 5.3.3
- JavaScript (ES6+ / Métodos de arreglos como `reduce`, `map`, `find`)

## 👨‍💻 Hecho por

**Marlon Encalada Ramírez** 😎