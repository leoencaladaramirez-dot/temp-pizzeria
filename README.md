# Pizzería Mamma Mía - Hito 3

Proyecto desarrollado en React (Vite) en el marco de la Academia de Talentos Digitales (Desafío Latam), enfocado en la renderización dinámica de componentes, manejo de props y gestión de estados para un carrito de compras[cite: 2, 3].

## 🚀 Funcionalidades del Hito 3
- **Renderización Dinámica en Home (`Home.jsx` & `CardPizza.jsx`):**
  - Importación y lectura de un archivo local de datos (`pizzas.js`).
  - Recorrido del arreglo mediante `.map()` para renderizar dinámicamente múltiples tarjetas de pizza.
  - Paso de información a través de `props` hacia el componente `CardPizza`.
  - Iteración de la lista de ingredientes de cada pizza para mostrarlos de forma limpia mediante etiquetas `<li>`[cite: 3].

- **Simulación de Carrito de Compras (`Cart.jsx`):**
  - Gestión del estado del carrito conectada mediante Context (`CartContext`).
  - Renderizado dinámico de los elementos seleccionados (imagen, nombre, precio unitario y cantidad).
  - Botones interactivos para **aumentar (`+`) y disminuir (`-`)** la cantidad de cada producto, con eliminación automática del ítem si la cantidad llega a 0[cite: 2].
  - Cálculo dinámico y en tiempo real del **total de la compra**[cite: 2, 3].
  - Botón de pago integrado[cite: 2, 3].

- **Navegación y Estilos:**
  - Uso de Bootstrap 5.3.3 para un diseño responsivo y moderno.
  - Integración con React Router DOM para la navegación fluida entre vistas.

## 🛠️ Tecnologías Utilizadas
- React (Vite)
- React Router DOM
- Context API (Manejo de estado global del carrito)
- Bootstrap 5.3.3