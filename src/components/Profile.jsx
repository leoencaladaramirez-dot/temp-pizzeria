const Profile = () => {
  const userEmail = "usuario@mammamía.cl"; // Email de prueba asignado al estado/sesión

  const handleLogout = () => {
    alert("Sesión cerrada correctamente");
  };

  return (
    <div className="container my-5 d-flex justify-content-center">
      <div className="card p-4 shadow-sm text-center" style={{ maxWidth: '400px', width: '100%' }}>
        <h3 className="fw-bold mb-3">Perfil de Usuario</h3>
        <p className="text-muted mb-4">
          <strong>Email:</strong> {userEmail}
        </p>
        <button className="btn btn-danger w-100 fw-bold" onClick={handleLogout}>
          🔒 Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default Profile;