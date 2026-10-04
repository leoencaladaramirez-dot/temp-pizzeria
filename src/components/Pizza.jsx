import { useState, useEffect, useContext } from 'react';
import { formatNumber } from '../utils/format';
import { CartContext } from '../context/CartContext';

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const { addToCart } = useContext(CartContext);

  const consultarApi = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/pizzas/p001");
      const data = await response.json();
      setPizza(data);
    } catch (error) {
      console.error("Error al cargar la pizza:", error);
    }
  };

  useEffect(() => {
    consultarApi();
  }, []);

  if (!pizza) return <div className="text-center my-5">Cargando pizza...</div>;

  return (
    <div className="container my-5 d-flex justify-content-center">
      <div className="card mb-3 shadow" style={{ maxWidth: '800px' }}>
        <div className="row g-0 align-items-center">
          <div className="col-md-6">
            <img 
              src={pizza.img} 
              className="img-fluid rounded-start h-100 object-fit-cover" 
              alt={pizza.name} 
            />
          </div>
          <div className="col-md-6">
            <div className="card-body p-4">
              <h3 className="card-title text-capitalize fw-bold mb-3">{pizza.name}</h3>
              <p className="card-text text-muted">{pizza.desc}</p>
              
              <p className="fw-bold mb-2">Ingredientes:</p>
              <ul className="list-unstyled mb-4">
                {pizza.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-muted">🍕 {ingredient}</li>
                ))}
              </ul>

              <div className="d-flex justify-content-between align-items-center">
                <h4 className="fw-bold mb-0">Precio: ${formatNumber(pizza.price)}</h4>
                <button 
                  className="btn btn-dark"
                  onClick={() => addToCart(pizza)}
                >
                  Añadir 🛒
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;