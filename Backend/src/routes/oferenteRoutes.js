const express = require("express");
const { listarOferentesListos } = require("../controllers/oferenteController");

const router = express.Router();

// Ruta: /api/v1/oferentesListos/:idPuesto
router.get("/:idPuesto", listarOferentesListos);

module.exports = router;