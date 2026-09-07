import { useState } from 'react';

const Register = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState(false);

  
  const handleSubmit = (e) => {
    e.preventDefault();

    
    setError(false);
    setSuccess(false);

    
    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      setError(true);
      setErrorMessage('Todos los campos son obligatorios.');
      return;
    }

    
    if (password.length < 6) {
      setError(true);
      setErrorMessage('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    
    if (password !== confirmPassword) {
      setError(true);
      setErrorMessage('Las contraseñas no coinciden.');
      return;
    }

    
    setSuccess(true);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="container my-5 d-flex justify-content-center">
      <form onSubmit={handleSubmit} className="col-12 col-md-6 border p-4 rounded shadow-sm bg-light">
        <h2 className="text-center mb-4 fw-bold">Registro</h2>

        {/* Mensaje de Error */}
        {error && (
          <div className="alert alert-danger text-center" role="alert">
            {errorMessage}
          </div>
        )}

        {/* Mensaje de Éxito */}
        {success && (
          <div className="alert alert-success text-center" role="alert">
            ¡Registro completado con éxito!
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

        <div className="mb-3">
          <label className="form-label font-weight-bold">Confirmar contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirma tu contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-dark w-100 mt-3">
          Enviar Registro
        </button>
      </form>
    </div>
  );
};

export default Register;