const sequelize = require("../config/database");

const Concurso = require("./Concurso");
const Empleado = require("./Empleado");
const ExpLaboral = require("./ExpLaboral");
const Oferente = require("./Oferente");
const OferenteConcurso = require("./OferenteConcurso");
const Preparacion = require("./Preparacion");
const Puesto = require("./Puesto");
const Usuario = require("./Usuario");

module.exports = {
  sequelize,
  Concurso,
  Empleado,
  ExpLaboral,
  Oferente,
  OferenteConcurso,
  Preparacion,
  Puesto,
  Usuario,
};