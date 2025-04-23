const express = require("express");
const { crearEmpleado } = require("../controllers/empleadoController");

const router = express.Router();

// Ruta: /api/v1/empleado
router.post("/", crearEmpleado);

module.exports = router;