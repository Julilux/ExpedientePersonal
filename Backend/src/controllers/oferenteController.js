const { Oferente } = require("../models");
const { obtenerOferentesListos, obtenerDetalleOferente, obtenerTodosOferentes } = require("../services/oferenteService");

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

/**
 * GET /api/v1/oferente/:idOferente
 * Devuelve el detalle de un oferente, o todos si no se especifica ID
 */

const obtenerDetalleOferenteController = async (req, res) => {
  try {
    const idOferente = req.params.idOferente;

    if (typeof idOferente === "undefined") {
      // Si NO se envió idOferente, devolver TODOS los oferentes
      const oferentes = await obtenerTodosOferentes();
      return res.status(200).json(oferentes);
    }

    const oferente = await obtenerDetalleOferente(idOferente);

    if (!oferente) {
      return res.status(404).json({ error: "Oferente no encontrado" });
    }

    res.status(200).json(oferente);
  } catch (error) {
    console.error("❌ Error en obtenerDetalleOferenteController:", error);
    res.status(500).json({ error: "Error al obtener detalle del oferente" });
  }
};

const actualizarOferente = async (req, res) => {
  try {
    const { idOferente } = req.params;
    const { Empleado } = req.body;

    const oferente = await Oferente.findByPk(idOferente);
    if (!oferente) {
      return res.status(404).json({ error: "Oferente no encontrado" });
    }

    await oferente.update({ Empleado });

    res.status(200).json({ mensaje: "Oferente actualizado correctamente" });
  } catch (error) {
    console.error("❌ Error en actualizarOferente:", error);
    res.status(500).json({ error: "Error al actualizar oferente" });
  }
};

module.exports = {
  listarOferentesListos,
  obtenerDetalleOferenteController,
  actualizarOferente,
};