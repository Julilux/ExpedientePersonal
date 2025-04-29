import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogin } from "../actions/loginAction";
import { useNavigate, useLocation } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { isAuthenticated, error } = useSelector(state => state.auth);

  const [usuario, setUsuario] = useState("");
  const [contrasenia, setContrasenia] = useState("");
  const [logoutMessage, setLogoutMessage] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    // Detectar si venimos del logout
    if (location.state?.logout) {
      setLogoutMessage(true);

      // Opcional: esconder el mensaje después de 5 segundos
      setTimeout(() => setLogoutMessage(false), 3000);
    }
  }, [location.state]);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLogin(usuario, contrasenia));
  };

  return (
    <div className="container mx-auto mt-10 p-5 max-w-md border rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Inicio de sesión</h2>

      {logoutMessage && (
        <div className="mb-4 text-green-600 text-sm font-semibold">
          Sesión cerrada exitosamente.
        </div>
      )}

      {error && (
        <div className="mb-4 text-red-500 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block mb-1">Usuario:</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Contraseña:</label>
          <input
            type="password"
            className="w-full p-2 border rounded"
            value={contrasenia}
            onChange={(e) => setContrasenia(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Aceptar
        </button>
      </form>
    </div>
  );
};

export default LoginPage;