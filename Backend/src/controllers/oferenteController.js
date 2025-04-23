const { obtenerOferentesListos } = require("../services/oferenteService");

/**
 * GET /api/v1/oferentesListos/:idPuesto
 * Devuelve oferentes que cumplen requisitos del puesto
 */

const listarOferentesListos = async (req, res) => {
  try {
    const { idPuesto } = req.params;

    if (!idPuesto || isNaN(idPuesto)) {
      return res.status(400).json({ error: "ID de puesto inválido" });
    }

    const oferentes = await obtenerOferentesListos(parseInt(idPuesto));

    res.status(200).json(oferentes);
  } catch (error) {
    console.error("❌ Error en listarOferentesListos:", error);
    res.status(500).json({ error: "Error al obtener oferentes listos" });
  }
};

module.exports = {
  listarOferentesListos,
};