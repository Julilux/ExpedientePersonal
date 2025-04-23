const Usuario = require("../models/Usuario");
const bcrypt = require("bcrypt");

/**
 * Autentica un usuario por nombre y contraseña
 * @param {string} nombreUsuario 
 * @param {string} contraseniaPlano 
 * @returns {{ Usuario: string, Resultado: boolean }}
 */

async function autenticarUsuario(nombreUsuario, contraseniaPlano) {
  try {
    const usuario = await Usuario.findOne({
      where: {
        Nombre: nombreUsuario,
        Estado: "Activo",
      }
    });

    if (!usuario) {
      return { Usuario: nombreUsuario, Resultado: false };
    }

    const coincide = await bcrypt.compare(contraseniaPlano, usuario.Contrasenia);

    return {
      Usuario: usuario.Nombre,
      Resultado: coincide
    };
  } catch (error) {
    console.error("❌ Error al autenticar usuario:", error.message);
    throw error;
  }
}

module.exports = {
  autenticarUsuario,
};