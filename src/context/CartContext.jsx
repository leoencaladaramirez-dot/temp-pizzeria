import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    setCart((prevCart) => {
      // Buscamos si la pizza ya existe en el carrito usando su id
      const existingIndex = prevCart.findIndex((item) => item.id === pizza.id);

      if (existingIndex >= 0) {
        // Si ya existe, creamos un nuevo array y aumentamos estrictamente su count en 1
        return prevCart.map((item, index) =>
          index === existingIndex
            ? { ...item, count: (item.count || 1) + 1 }
            : item
        );
      } else {
        // Si es nueva, nos aseguramos de que entre con count: 1 explícito
        const newItem = { ...pizza, count: 1 };
        return [...prevCart, newItem];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === id);

      if (existingItem && existingItem.count > 1) {
        return prevCart.map((item) =>
          item.id === id ? { ...item, count: item.count - 1 } : item
        );
      } else {
        return prevCart.filter((item) => item.id !== id);
      }
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;