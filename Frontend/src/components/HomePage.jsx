import React from "react";
import HomeLayout from "./HomeLayout";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  const location = useLocation();
  const empleadoCreado = location.state?.empleadoCreado;

  return (
    <HomeLayout>
      <h1 className="text-3xl font-bold mb-6">Bienvenido al sistema Expediente Personal</h1>

      {empleadoCreado && (
        <div className="mb-4 text-green-600 text-sm font-semibold">
          Empleado creado exitosamente.
        </div>
      )}

      <p className="text-lg">Seleccione una opción del menú para comenzar.</p>
    </HomeLayout>
  );
};

export default HomePage;