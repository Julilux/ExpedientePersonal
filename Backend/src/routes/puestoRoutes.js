const express = require("express");
const { listarPuestosActivos } = require("../controllers/puestoController");

const router = express.Router();

// Ruta: /api/v1/puestos
router.get("/", listarPuestosActivos);

module.exports = router;