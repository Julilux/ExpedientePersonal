const Puesto = require("../models/Puesto");

/**
 * Retorna todos los puestos activos (Disponible = true)
 * Solo incluye IdPuesto y Nombre según criterio de Core 1
 */

async function obtenerPuestosActivos() {
  try {
    const puestos = await Puesto.findAll({
      where: { Disponible: true },
      attributes: ["IdPuesto", "Nombre"],
    });

    return puestos;
  } catch (error) {
    console.error("❌ Error al obtener los puestos activos:", error);
    throw error;
  }
}

module.exports = {
  obtenerPuestosActivos,
};