import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/home.css";

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook para redirigir

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Guardar el token en el local storage o cookies
        localStorage.setItem('token', data.token);
        // Redireccionar a la página deseada después del login
        navigate('/');
      } else {
        // Manejar errores, como credenciales incorrectas
        setError(data.message);
      }
    } catch (err) {
      console.error('Error en la solicitud:', err);
      setError('Hubo un problema al conectarse con el servidor');
    }
  };

  return (
    <div className="container-fluid">
      <div className="container mt-5">
        <h1>Iniciar Sesión</h1>
        <form onSubmit={handleLogin }>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Ingresa email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Ingresa Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit" className="btn btn-primary mt-2">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
