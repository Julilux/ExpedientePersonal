const Empleado = require("../models/Empleado");

/**
 * Registra un nuevo empleado
 * @param {Object} datosEmpleado - Objeto con IdEmpleado, Nombre, Puesto y Direccion
 * @returns {Object} - Empleado creado
 */
async function registrarEmpleado(datosEmpleado) {
  try {
    const { IdEmpleado, Nombre, Puesto, Direccion } = datosEmpleado;

    if (!IdEmpleado || !Nombre || !Puesto) {
      throw new Error("IdEmpleado, Nombre y Puesto son campos obligatorios");
    }

    const nuevoEmpleado = await Empleado.create({
      IdEmpleado,
      Nombre,
      Puesto,
      Direccion
    });

    return nuevoEmpleado;
  } catch (error) {
    console.error("❌ Error en registrarEmpleado:", error.message);
    throw error;
  }
}

module.exports = {
  registrarEmpleado,
};