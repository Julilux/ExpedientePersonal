const express = require("express");
const router = express.Router();

const puestoRoutes = require("./puestoRoutes");
const oferenteRoutes = require("./oferenteRoutes");
const empleadoRoutes = require("./empleadoRoutes");
const loginRoutes = require("./loginRoutes");

router.use("/puestos", puestoRoutes);
router.use("/oferentesListos", oferenteRoutes);
router.use("/empleado", empleadoRoutes);
router.use("/login", loginRoutes);

module.exports = router;