const { autenticarUsuario } = require("../services/loginService");

/**
 * POST /api/v1/login
 * Valida las credenciales del usuario
 */

const login = async (req, res) => {
  try {
    const { usuario, contrasenia } = req.body;

    if (!usuario || !contrasenia) {
      return res.status(400).json({ error: "Debe proporcionar usuario y contraseña." });
    }

    const resultado = await autenticarUsuario(usuario, contrasenia);
    res.status(200).json(resultado);
  } catch (error) {
    console.error("❌ Error en login:", error.message);
    res.status(500).json({ error: "Error interno al validar las credenciales." });
  }
};

module.exports = {
  login,
};