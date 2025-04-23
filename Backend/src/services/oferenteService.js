const { Oferente, OferenteConcurso, Preparacion, ExpLaboral } = require("../models");
const { Op } = require("sequelize");

async function obtenerOferentesListos(idPuesto) {
  try {
    // Obtener todos los IdOferente relacionados al puesto (concurso)
    const relaciones = await OferenteConcurso.findAll({
      where: { IdConcurso: idPuesto },
      attributes: ["IdOferente"],
    });

    const idsOferentes = relaciones.map(r => r.IdOferente);

    if (idsOferentes.length === 0) return [];

    // Filtrar oferentes que tengan al menos una preparación y una experiencia
    const preparacion = await Preparacion.findAll({
      where: { IdOferente: { [Op.in]: idsOferentes } },
      attributes: ["IdOferente"],
    });

    const experiencia = await ExpLaboral.findAll({
      where: { IdOferente: { [Op.in]: idsOferentes } },
      attributes: ["IdOferente"],
    });

    const idsConPreparacion = new Set(preparacion.map(p => p.IdOferente));
    const idsConExperiencia = new Set(experiencia.map(e => e.IdOferente));

    const idsFinales = [...idsOferentes].filter(id =>
      idsConPreparacion.has(id) && idsConExperiencia.has(id)
    );

    if (idsFinales.length === 0) return [];

    const oferentes = await Oferente.findAll({
      where: { IdOferente: { [Op.in]: idsFinales } },
      attributes: ["IdOferente", "Nombre"]
    });

    return oferentes;
  } catch (error) {
    console.error("❌ Error en obtenerOferentesListos:", error);
    throw error;
  }
}

module.exports = {
  obtenerOferentesListos,
};