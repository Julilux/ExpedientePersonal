const express = require("express");
const router = express.Router();

const empleadoRoutes = require("./empleadoRoutes");
const loginRoutes = require("./loginRoutes");
const oferenteRoutes = require("./oferenteRoutes");
const puestoRoutes = require("./puestoRoutes");
const usuarioRoutes = require("./usuarioRoutes");

router.use("/empleado", empleadoRoutes);
router.use("/login", loginRoutes);
router.use("/", oferenteRoutes);
router.use("/puestos", puestoRoutes);
router.use("/usuario", usuarioRoutes);

module.exports = router;