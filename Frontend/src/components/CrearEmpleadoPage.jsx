import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import HomeLayout from "./HomeLayout";
import localAPI from "../controllers/localAPI";

const CrearEmpleadoPage = () => {
  const { idOferente } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [oferente, setOferente] = useState(null);
  const [error, setError] = useState("");

  const idPuesto = location.state?.idPuesto;

  useEffect(() => {
    const fetchOferente = async () => {
      try {
        const response = await localAPI.get(`/oferente/${idOferente}`);
        setOferente(response.data);
      } catch (error) {
        console.error("❌ Error al obtener detalle del oferente:", error);
        setError("Error al cargar la información del oferente.");
      }
    };

    fetchOferente();
  }, [idOferente]);

  const handleCancelar = () => {
    navigate(`/oferentes-listos/${idPuesto}`);
  };

  const handleCrearEmpleado = async () => {
    try {
      // 1. Crear nuevo empleado
      await localAPI.post("/empleado", {
        IdEmpleado: oferente.IdOferente,
        Nombre: oferente.Nombre,
        Puesto: idPuesto,
        Direccion: oferente.Direccion || "No especificada"
      });
  
      // 2. Actualizar el oferente para marcarlo como Empleado
      await localAPI.put(`/oferente/${oferente.IdOferente}`, {
        Empleado: true
      });
  
      // 3. Redirigir a Home con mensaje de éxito
      navigate("/home", { state: { empleadoCreado: true } });
    } catch (error) {
      console.error("❌ Error al crear empleado:", error);
      setError("Error al crear el empleado.");
    }
  };

  if (error) {
    return (
      <HomeLayout>
        <h1 className="text-2xl font-bold mb-6">Error</h1>
        <p className="text-red-500">{error}</p>
        <button
          onClick={handleCancelar}
          className="mt-4 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
        >
          Regresar
        </button>
      </HomeLayout>
    );
  }

  if (!oferente) {
    return (
      <HomeLayout>
        <p className="text-center mt-20">Cargando información...</p>
      </HomeLayout>
    );
  }

  return (
    <HomeLayout>
      <h1 className="text-2xl font-bold mb-6">Detalle del oferente</h1>

      <div className="space-y-4 mb-6">
        <p><strong>Cédula:</strong> {oferente.IdOferente}</p>
        <p><strong>Nombre:</strong> {oferente.Nombre}</p>
        <p><strong>Tipo de Identificación:</strong> {oferente.TipoIdentificacion}</p>
        <p><strong>Dirección:</strong> {oferente.Direccion || "No especificada"}</p>
        <p><strong>Fecha de Nacimiento:</strong> {oferente.FechaNacimiento || "No especificada"}</p>
        <p><strong>Estado Civil:</strong> {oferente.EstadoCivil || "No especificado"}</p>
        <p><strong>Nacionalidad:</strong> {oferente.Nacionalidad || "No especificada"}</p>
      </div>

      <div className="flex space-x-4">
        <button
          onClick={handleCrearEmpleado}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          Crear empleado
        </button>

        <button
          onClick={handleCancelar}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
        >
          Cancelar
        </button>
      </div>
    </HomeLayout>
  );
};

export default CrearEmpleadoPage;