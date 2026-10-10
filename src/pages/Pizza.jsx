import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { formatNumber } from '../utils/format';
import { CartContext } from '../context/CartContext';

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  useEffect(() => {
    const loadPizzaData = () => {
      setLoading(true);
      
      const fallbackPizzas = [
        {
          id: "p001",
          name: "napolitana",
          price: 5950,
          ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
          img: "/img/p001.jpeg",
          desc: "Una clásica pizza napolitana con un toque auténtico y delicioso queso mozzarella."
        },
        {
          id: "p002",
          name: "española",
          price: 6950,
          ingredients: ["mozzarella", "gorgonzola", "parmesano", "provolone"],
          img: "/img/p002.jpeg",
          desc: "Combinación de quesos intensos para los verdaderos amantes del buen sabor."
        },
        {
          id: "p003",
          name: "salame",
          price: 5950,
          ingredients: ["mozzarella", "tomates", "salame italiano", "orégano"],
          img: "/img/p003.jpeg",
          desc: "Deliciosa pizza cubierta con finas rodajas de salame italiano de primera calidad."
        },
        {
          id: "p004",
          name: "cuatro quesos",
          price: 6950,
          ingredients: ["mozzarella", "gorgonzola", "parmesano", "provolone"],
          img: "/img/p004.jpeg",
          desc: "Una explosión de quesos derretidos sobre nuestra masa crujiente artesanal."
        },
        {
          id: "p005",
          name: "pollo",
          price: 7250,
          ingredients: ["mozzarella", "pollo desmenuzado", "champiñones", "cebolla morada"],
          img: "/img/p005.jpeg",
          desc: "Tiernos trozos de pollo combinados con champiñones frescos y cebolla morada."
        },
        {
          id: "p006",
          name: "pepperoni",
          price: 6500,
          ingredients: ["mozzarella", "pepperoni", "orégano"],
          img: "/img/p006.jpeg",
          desc: "El clásico indiscutible con generosas rodajas de pepperoni ligeramente picante."
        }
      ];

      const found = fallbackPizzas.find(p => p.id.toLowerCase() === id?.toLowerCase());
      
      if (found) {
        setPizza(found);
      } else {
        setPizza(fallbackPizzas[0]);
      }
      
      setLoading(false);
    };

    loadPizzaData();
  }, [id]);

  if (loading) {
    return <div className="text-center mt-5"><h3>Cargando detalles de la pizza... 🍕</h3></div>;
  }

  if (!pizza) {
    return <div className="text-center mt-5"><h3>No se encontró la pizza solicitada 😕</h3></div>;
  }

  
  const pizzaInCart = cart?.find(item => item.id === pizza.id);
  const quantity = pizzaInCart ? pizzaInCart.count : 0;

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-9">
          <div className="card shadow-sm p-4">
            <div className="row align-items-center">
              <div className="col-md-6 mb-3 mb-md-0">
                <img 
                  src={pizza.img} 
                  alt={pizza.name} 
                  className="img-fluid rounded shadow-sm w-100" 
                  style={{ height: '320px', objectFit: 'cover' }}
                  onError={(e) => { 
                    e.target.src = "/img/p001.jpeg"; 
                  }}
                />
              </div>
              <div className="col-md-6 d-flex flex-column justify-content-between">
                <div>
                  <h2 className="text-capitalize fw-bold mb-3">{pizza.name}</h2>
                  <p className="text-muted">{pizza.desc}</p>
                  
                  <h5 className="fw-semibold mt-3">Ingredientes:</h5>
                  <ul className="list-unstyled ps-2">
                    {pizza.ingredients?.map((ingredient, index) => (
                      <li key={index} className="text-capitalize text-secondary">🍕 {ingredient}</li>
                    ))}
                  </ul>
                </div>

                
                <div className="mt-4 pt-2 border-top d-flex justify-content-between align-items-center">
                  <h3 className="fw-bold text-dark mb-0">Precio: ${formatNumber(pizza.price)}</h3>
                  
                  <div className="d-flex align-items-center gap-2">
                    {quantity > 0 ? (
                      <div className="d-flex align-items-center gap-2">
                        <button 
                          className="btn btn-outline-danger fw-bold px-3"
                          onClick={() => removeFromCart(pizza.id)}
                        >
                          -
                        </button>
                        <span className="fw-bold fs-5 px-2">{quantity}</span>
                        <button 
                          className="btn btn-dark fw-bold px-3"
                          onClick={() => addToCart(pizza)}
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <button 
                        className="btn btn-dark fw-semibold px-4 py-2"
                        onClick={() => addToCart(pizza)}
                      >
                        Añadir 🛒
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;