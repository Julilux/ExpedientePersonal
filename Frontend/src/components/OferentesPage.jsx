import React, { useEffect, useState } from "react";
import HomeLayout from "./HomeLayout";
import localAPI from "../controllers/localAPI";

const OferentesPage = () => {
  const [oferentes, setOferentes] = useState([]);

  useEffect(() => {
    const fetchOferentes = async () => {
      try {
        const response = await localAPI.get("/oferente");
        setOferentes(response.data);
      } catch (error) {
        console.error("❌ Error al obtener oferentes:", error);
      }
    };

    fetchOferentes();
  }, []);

  return (
    <HomeLayout>
      <h1 className="text-2xl font-bold mb-6">Todos los oferentes</h1>

      <ul className="space-y-4">
        {oferentes.length > 0 ? (
          oferentes.map((oferente) => (
            <li key={oferente.IdOferente}>
              <div className="text-lg font-semibold">{oferente.Nombre}</div>
              <div className="text-gray-600 text-sm">Cédula: {oferente.IdOferente}</div>
            </li>
          ))
        ) : (
          <p>No hay oferentes registrados.</p>
        )}
      </ul>
    </HomeLayout>
  );
};

export default OferentesPage;