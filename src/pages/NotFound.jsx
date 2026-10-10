import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container my-5 text-center d-flex flex-column align-items-center justify-content-center">
      <div className="p-4 shadow-sm rounded border bg-light" style={{ maxWidth: '500px', width: '100%' }}>
        <h1 className="display-1 fw-bold text-danger mb-0">404</h1>
        <div className="my-3 fs-1">🍕❓</div>
        <h3 className="fw-bold mb-2">¡Página no encontrada!</h3>
        <p className="text-muted mb-4">
          La ruta a la que intentas acceder no existe o fue movida.
        </p>
        <Link to="/" className="btn btn-dark fw-bold px-4">
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;