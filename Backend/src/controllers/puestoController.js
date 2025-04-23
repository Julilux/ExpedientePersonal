const { obtenerPuestosActivos } = require("../services/puestoService");

/**
 * GET /api/v1/puestos
 * Retorna puestos activos (IdPuesto y Nombre)
 */

const listarPuestosActivos = async (req, res) => {
  try {
    const puestos = await obtenerPuestosActivos();

    res.status(200).json(puestos);
  } catch (error) {
    console.error("❌ Error en listarPuestosActivos:", error);
    res.status(500).json({ error: "Error al obtener los puestos activos" });
  }
};

module.exports = {
  listarPuestosActivos,
};