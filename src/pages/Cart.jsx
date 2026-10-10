import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { formatNumber } from '../utils/format';

const Cart = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + (Number(item.price) * Number(item.count)), 0);

  return (
    <div className="container my-5">
      <div className="card shadow p-4 mx-auto" style={{ maxWidth: '700px' }}>
        <h2 className="mb-4">Detalles del pedido:</h2>

        {cart.length === 0 ? (
          <div className="text-center py-4">
            <p className="text-muted fs-5">El carrito está vacío 🍕</p>
          </div>
        ) : (
          <div className="list-group mb-4">
            {cart.map((pizza) => (
              <div key={pizza.id} className="list-group-item d-flex justify-content-between align-items-center py-3">
                <div className="d-flex align-items-center gap-3">
                  <img src={pizza.img} alt={pizza.name} style={{ width: '60px', height: '60px', objectFit: 'cover' }} className="rounded" />
                  <div>
                    <h5 className="mb-0 text-capitalize">{pizza.name}</h5>
                    <small className="text-success fw-bold">${formatNumber(pizza.price)}</small>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <button className="btn btn-outline-danger btn-sm px-2" onClick={() => removeFromCart(pizza.id)}>-</button>
                  <span className="fw-bold px-2">{pizza.count}</span>
                  <button className="btn btn-outline-dark btn-sm px-2" onClick={() => addToCart(pizza)}>+</button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="d-flex justify-content-between align-items-center border-top pt-3 mt-2">
          <h3 className="fw-bold mb-0">Total: ${formatNumber(total)}</h3>
          <button className={`btn ${cart.length === 0 ? 'btn-secondary disabled' : 'btn-dark px-4'}`}>
            Pagar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;