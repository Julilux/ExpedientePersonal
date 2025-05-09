const { registrarEmpleado } = require("../services/empleadoService");

/**
 * POST /api/v1/empleado
 * Registra un nuevo empleado
 */

const crearEmpleado = async (req, res) => {
  try {
    const { IdEmpleado, Nombre, Puesto, Direccion } = req.body;

    if (!IdEmpleado || !Nombre || !Puesto) {
      return res.status(400).json({ error: "Los campos IdEmpleado, Nombre y Puesto son obligatorios." });
    }

    const empleado = await registrarEmpleado({ IdEmpleado, Nombre, Puesto, Direccion });

    res.status(201).json({
      mensaje: "Empleado registrado exitosamente",
      empleado
    });
  } catch (error) {
    console.error("❌ Error en crearEmpleado:", error.message);
    res.status(500).json({ error: "No se pudo registrar el empleado" });
  }
};

module.exports = {
  crearEmpleado,
};