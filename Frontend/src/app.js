import React from "react";
import { Routes, Route } from "react-router-dom";
import CrearEmpleadoPage from "./components/CrearEmpleadoPage";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import PuestosPage from "./components/PuestosPage";
import OferentesPage from "./components/OferentesPage";
import OferentesListosPage from "./components/OferentesListosPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/crear-empleado/:idOferente" element={<CrearEmpleadoPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/puestos" element={<PuestosPage />} />
      <Route path="/oferentes" element={<OferentesPage />} />
      <Route path="/oferentes-listos/:idPuesto" element={<OferentesListosPage />} />
    </Routes>
  );
};

export default App;