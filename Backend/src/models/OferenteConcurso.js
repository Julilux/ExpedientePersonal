const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const OferenteConcurso = sequelize.define("OferenteConcurso", {
  IdOferente: { type: DataTypes.INTEGER, primaryKey: true },
  IdConcurso: { type: DataTypes.INTEGER, primaryKey: true },
}, {
  tableName: "OferenteConcurso",
  timestamps: false,
});

module.exports = OferenteConcurso;