const express = require("express");
const { crearUsuarioController } = require("../controllers/usuarioController");

const router = express.Router();

router.post("/", crearUsuarioController);

module.exports = router;