*Desafío React*

# Prueba: Pizzería Mamma Mía! 🍕🛒

Este es mi proyecto para la prueba práctica final del módulo en **Desafío Latam**, enfocado en la construcción de una Aplicación de Página Única (SPA) interactiva mediante **React**, gestión de rutas dinámicas con **React Router DOM**, sincronización de estado global con **Context API** y diseño responsivo adaptado con **Bootstrap**.

Todo el diseño visual y la arquitectura del código responden fielmente a los requerimientos técnicos y funcionales planteados en la pauta oficial.

---

## 🚀 ¿Qué hace este proyecto?

En esta prueba desarrollamos una plataforma web completa de comercio electrónico para una pizzería artesanal, simulando una experiencia de usuario fluida y conectada a través de las siguientes funcionalidades:

### 1. Catálogo Dinámico y Detalle de Productos (React Router)
* **Lo que hace:** Muestra un listado general de pizzas disponibles en la página de inicio y permite acceder a una vista de detalle individual con información ampliada (descripción, ingredientes y precio).
* **La lógica detrás:** Implementamos rutas dinámicas mediante **React Router DOM** para navegar sin recargar la página, utilizando parámetros de URL (`useParams`) y componentes optimizados para renderizar la información de forma condicional.

### 2. Gestión Global del Carrito (Context API)
* **Lo que hace:** Permite añadir productos al carro de compras desde cualquier sección, modificar cantidades (incrementar o disminuir) y calcular el total de forma automática y en tiempo real.
* **La lógica detrás:** Diseñamos un componente proveedor (`CartProvider`) utilizando la API de contextos (`Context API`) de React. Esto centraliza el estado del carrito (`cart`) y las funciones de manipulación para que tanto la barra de navegación como las vistas principales se sincronicen de manera inmediata.

### 3. Sincronización y Formato Numérico Seguro
* **Lo que hace:** Muestra de forma limpia los precios y montos acumulados en la interfaz de usuario con separadores de miles estándar.
* **La lógica detrás:** Integramos funciones utilitarias personalizadas con validaciones estrictas (`undefined`, `null`, `NaN`) antes de aplicar métodos de formato numérico, evitando fallos de renderizado en tiempo de ejecución.

### 4. Diseño Responsivo e Interfaz Moderna
* **Lo que hace:** Ofrece una interfaz atractiva, ordenada y adaptable a diferentes tamaños de pantalla (dispositivos móviles y escritorios).
* **La lógica detrás:** Estructuramos la maquetación utilizando clases de **Bootstrap** combinadas con hojas de estilo personalizadas para asegurar una experiencia visual coherente y profesional.

---

## 🛠️ Tecnologías Utilizadas

* **React (Vite):** Librería principal para la construcción de interfaces modulares basadas en componentes y empaquetado rápido.
* **React Router DOM:** Enrutador de cliente para gestionar la navegación entre las vistas de Inicio, Carrito, Perfil, Login, Registro, Detalle de Pizza y la página de error 404.
* **Context API:** Herramienta nativa de React para la administración eficiente del estado global de la aplicación.
* **Bootstrap:** Framework CSS para el diseño responsivo, barras de navegación, tarjetas de productos y botones interactivos.
* **JavaScript (ES6+):** Lógica de componentes, funciones de orden superior (`reduce`, `map`, `findIndex`) y manejo de eventos.

---

## 👨‍💻 Hecho por

**Marlon Encalada Ramírez** 😎