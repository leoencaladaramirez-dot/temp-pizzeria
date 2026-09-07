import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { formatNumber } from '../utils/format';

const Navbar = () => {
  const { cart } = useContext(CartContext);

  // Cálculo idéntico y seguro basado estrictamente en los elementos del carrito
  const total = cart.reduce((acc, item) => acc + (Number(item.price) * Number(item.count)), 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-3">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
          Pizzería Mamma Mía!
        </Link>
        <div className="d-flex gap-2">
          <Link to="/" className="btn btn-outline-light btn-sm">
            🍕 Inicio
          </Link>
          <Link to="/login" className="btn btn-outline-light btn-sm">
            🔐 Iniciar sesión
          </Link>
          <Link to="/register" className="btn btn-outline-light btn-sm">
            🔐 Regístrate
          </Link>
        </div>
        <div className="d-flex">
          <Link to="/cart" className="btn btn-outline-info text-white">
            🛒 Total: ${formatNumber(total)}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;