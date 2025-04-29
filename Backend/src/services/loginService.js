const { Usuario } = require("../models");
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
      }
    });

    if (!usuario) {
      return { Usuario: nombreUsuario, Resultado: false };
    }

    if (usuario.Estado === "Bloqueado") {
      return { Usuario: nombreUsuario, Resultado: false, Bloqueado: true };
    }

    const coincide = await bcrypt.compare(contraseniaPlano, usuario.Contrasenia);

    if (!coincide) {
      // Incrementar intentos fallidos
      const nuevosIntentos = (usuario.IntentosFallidos || 0) + 1;

      if (nuevosIntentos >= 3) {
        await usuario.update({
          IntentosFallidos: nuevosIntentos,
          Estado: "Bloqueado"
        });
        return { Usuario: usuario.Nombre, Resultado: false, Bloqueado: true };
      } else {
        await usuario.update({
          IntentosFallidos: nuevosIntentos
        });
      }
      
      return { Usuario: usuario.Nombre, Resultado: false };
    }

    // Si coincide, reiniciar intentos
    await usuario.update({
      IntentosFallidos: 0
    });

    return {
      Usuario: usuario.Nombre,
      Resultado: true
    };
  } catch (error) {
    console.error("❌ Error al autenticar usuario:", error.message);
    throw error;
  }
}

module.exports = {
  autenticarUsuario,
};