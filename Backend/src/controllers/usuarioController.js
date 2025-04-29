const { crearUsuario } = require("../services/usuarioService");

async function crearUsuarioController(req, res) {
  try {
    const { Nombre, Correo, Contrasenia } = req.body;

    if (!Nombre || !Correo || !Contrasenia) {
      return res.status(400).json({ mensaje: "Todos los campos son requeridos." });
    }

    const nuevoUsuario = await crearUsuario({ Nombre, Correo, Contrasenia });

    res.status(201).json({
      mensaje: "Usuario creado exitosamente",
      usuario: {
        IdUsuario: nuevoUsuario.IdUsuario,
        Nombre: nuevoUsuario.Nombre,
        Correo: nuevoUsuario.Correo
      }
    });
  } catch (error) {
    console.error("❌ Error en crearUsuarioController:", error.message);
    res.status(500).json({ mensaje: "Error al crear usuario" });
  }
}

module.exports = {
  crearUsuarioController
};