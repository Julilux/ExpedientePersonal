const sequelize = require("../config/database");

const Puesto = require("./Puesto");
const Oferente = require("./Oferente");
const OferenteConcurso = require("./OferenteConcurso");
const Preparacion = require("./Preparacion");
const ExpLaboral = require("./ExpLaboral");
const Empleado = require("./Empleado");
const Usuario = require("./Usuario");

module.exports = {
  sequelize,
  Puesto,
  Oferente,
  OferenteConcurso,
  Preparacion,
  ExpLaboral,
  Empleado,
  Usuario,
};