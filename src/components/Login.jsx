import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setError(false);
    setSuccess(false);

    
    if (!email.trim() || !password.trim()) {
      setError(true);
      setErrorMessage('Todos los campos son obligatorios.');
      return;
    }

    
    if (password.length < 6) {
      setError(true);
      setErrorMessage('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    
    setSuccess(true);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="container my-5 d-flex justify-content-center">
      <form onSubmit={handleSubmit} className="col-12 col-md-6 border p-4 rounded shadow-sm bg-light">
        <h2 className="text-center mb-4 fw-bold">Login</h2>

        {error && (
          <div className="alert alert-danger text-center" role="alert">
            {errorMessage}
          </div>
        )}

        {success && (
          <div className="alert alert-success text-center" role="alert">
            ¡Inicio de sesión exitoso!
          </div>
        )}

        <div className="mb-3">
          <label className="form-label font-weight-bold">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Ingresa tu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label font-weight-bold">Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-dark w-100 mt-3">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default Login;