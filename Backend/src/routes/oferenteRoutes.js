const express = require("express");
const { listarOferentesListos, obtenerDetalleOferenteController, actualizarOferente } = require("../controllers/oferenteController");

const router = express.Router();

// Ruta: /api/v1/oferentesListos/:idPuesto
router.get("/oferentesListos/:idPuesto", listarOferentesListos);

// Ruta para obtener TODOS los oferentes
router.get("/oferente", obtenerDetalleOferenteController);

// Ruta para obtener UN oferente específico
router.get("/oferente/:idOferente", obtenerDetalleOferenteController);

router.put("/oferente/:idOferente", actualizarOferente);

module.exports = router;