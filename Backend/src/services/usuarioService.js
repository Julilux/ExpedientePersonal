const { Usuario } = require("../models");
const bcrypt = require("bcrypt");

async function crearUsuario(datosUsuario) {
  try {
    const contraseniaEncriptada = await bcrypt.hash(datosUsuario.Contrasenia, 10);

    const usuario = await Usuario.create({
      Nombre: datosUsuario.Nombre,
      Correo: datosUsuario.Correo,
      Contrasenia: contraseniaEncriptada,
      Estado: "Activo",
      FechaCreacion: new Date(),
      IntentosFallidos: 0
    });

    return usuario;
  } catch (error) {
    console.error("❌ Error en crearUsuario:", error.message);
    throw error;
  }
}

module.exports = {
  crearUsuario
};