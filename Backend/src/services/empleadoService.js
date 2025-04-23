const Empleado = require("../models/Empleado");

/**
 * Registra un nuevo empleado
 * @param {Object} datosEmpleado - Objeto con Nombre, Puesto (IdPuesto) y Direccion
 * @returns {Object} - Empleado creado
 */

async function registrarEmpleado(datosEmpleado) {
  try {
    const { Nombre, Puesto, Direccion } = datosEmpleado;

    if (!Nombre || !Puesto) {
      throw new Error("Nombre y Puesto son campos obligatorios");
    }

    const nuevoEmpleado = await Empleado.create({ Nombre, Puesto, Direccion });

    return nuevoEmpleado;
  } catch (error) {
    console.error("❌ Error en registrarEmpleado:", error.message);
    throw error;
  }
}

module.exports = {
  registrarEmpleado,
};