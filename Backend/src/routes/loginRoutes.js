const express = require("express");
const { login } = require("../controllers/loginController");

const router = express.Router();

// Ruta: /api/v1/login
router.post("/", login);

module.exports = router;