import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link, useLocation } from "react-router-dom";
import HomeLayout from "./HomeLayout";
import localAPI from "../controllers/localAPI";

const OferentesListosPage = () => {
  const { idPuesto } = useParams();
  const navigate = useNavigate();
  const location = useLocation(); // 👈 para detectar cambios de navegación
  const [oferentes, setOferentes] = useState([]);
  const [nombrePuesto, setNombrePuesto] = useState("");

  useEffect(() => {
    const fetchDatos = async () => {
      try {
        const responseOferentes = await localAPI.get(`/oferentesListos/${idPuesto}`);
        setOferentes(responseOferentes.data);

        const responsePuesto = await localAPI.get(`/puestos`);
        const puesto = responsePuesto.data.find(p => p.IdPuesto.toString() === idPuesto);
        if (puesto) {
          setNombrePuesto(puesto.Nombre);
        }
      } catch (error) {
        console.error("❌ Error al obtener datos:", error);
      }
    };

    fetchDatos();
  }, [idPuesto, location.key]);

  const handleRegresar = () => {
    navigate("/puestos");
  };

  return (
    <HomeLayout>
      <h1 className="text-2xl font-bold mb-6">
        Oferentes para el puesto: {nombrePuesto}
      </h1>

      <ul className="space-y-4 mb-8">
        {oferentes.length > 0 ? (
          oferentes.map((oferente) => (
            <li key={oferente.Identificacion}>
              {oferente.Empleado ? (
                <div>
                  <span className="text-gray-400 line-through">
                    {oferente.Nombre} (Empleado)
                  </span>
                  <div className="text-gray-400 text-sm">
                    Cédula: {oferente.Identificacion}
                  </div>
                </div>
              ) : (
                <div>
                  <Link
                    to={`/crear-empleado/${oferente.Identificacion}`}
                    state={{ idPuesto: idPuesto }}
                    className="text-blue-600 hover:underline"
                  >
                    {oferente.Nombre}
                  </Link>
                  <div className="text-gray-600 text-sm">
                    Cédula: {oferente.Identificacion}
                  </div>
                </div>
              )}
            </li>
          ))
        ) : (
          <p>No hay oferentes disponibles para este puesto.</p>
        )}
      </ul>

      <button
        onClick={handleRegresar}
        className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
      >
        Regresar
      </button>
    </HomeLayout>
  );
};

export default OferentesListosPage;