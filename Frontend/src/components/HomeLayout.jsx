import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../actions/loginAction";

const HomeLayout = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/", { state: { logout: true } });
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-700 text-white flex flex-col">
        <div className="p-6 font-bold text-2xl">
          <Link to="/home">Expediente Personal</Link>
        </div>
        <nav className="flex-1 px-4 space-y-4">
          <Link to="/puestos" className="block py-2 hover:bg-blue-600 rounded px-2">Puestos</Link>
          <Link to="/oferentes" className="block py-2 hover:bg-blue-600 rounded px-2">Oferentes</Link>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Top bar */}
        <header className="flex justify-end bg-white shadow p-4">
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Cerrar sesión
          </button>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default HomeLayout;
