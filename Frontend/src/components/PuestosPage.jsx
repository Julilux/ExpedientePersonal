import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeLayout from "./HomeLayout";
import localAPI from "../controllers/localAPI";

const PuestosPage = () => {
  const [puestos, setPuestos] = useState([]);

  useEffect(() => {
    const fetchPuestos = async () => {
      try {
        const response = await localAPI.get("/puestos");
        setPuestos(response.data);
      } catch (error) {
        console.error("❌ Error al obtener puestos:", error);
      }
    };

    fetchPuestos();
  }, []);

  return (
    <HomeLayout>
      <h1 className="text-2xl font-bold mb-6">Listado de puestos</h1>
      <ul className="space-y-4">
        {puestos.map((puesto) => (
          <li key={puesto.IdPuesto}>
            <Link
              to={`/oferentes-listos/${puesto.IdPuesto}`}
              className="text-blue-600 hover:underline"
            >
              {puesto.Nombre}
            </Link>
          </li>
        ))}
      </ul>
    </HomeLayout>
  );
};

export default PuestosPage;