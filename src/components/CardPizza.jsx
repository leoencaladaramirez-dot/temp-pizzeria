import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { formatNumber } from '../utils/format';
import { Link } from 'react-router-dom';

const CardPizza = ({ pizza }) => {
  const { addToCart } = useContext(CartContext);

  if (!pizza) return null;

  
  const localImage = `/img/${pizza.id}.jpeg`;

  return (
    <div className="card h-100 shadow-sm">
      <div style={{ height: '220px', overflow: 'hidden' }}>
        <img 
          src={localImage} 
          className="card-img-top w-100 h-100 object-fit-cover" 
          alt={pizza.name}
          
          onError={(e) => { e.target.src = pizza.img; }}
        />
      </div>
      <div className="card-body d-flex flex-column">
        <h3 className="card-title text-capitalize fw-bold fs-4 mb-3">{pizza.name}</h3>
        
        <p className="card-text text-muted mb-1 fw-semibold">Ingredientes:</p>
        <ul className="list-unstyled mb-4 ps-3">
          {pizza.ingredients?.map((ingredient, index) => (
            <li key={index} className="text-muted text-capitalize">🍕 {ingredient}</li>
          ))}
        </ul>

        <div className="mt-auto">
          <p className="text-center fs-4 fw-bold text-dark mb-3">
            Precio: ${formatNumber(pizza.price)}
          </p>
          <div className="d-flex justify-content-between">
            <Link to={`/pizza/${pizza.id}`} className="btn btn-outline-dark btn-sm px-3">
              Ver más 👀
            </Link>
            <button 
              className="btn btn-dark btn-sm px-3" 
              onClick={() => addToCart(pizza)}
            >
              Añadir 🛒
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;