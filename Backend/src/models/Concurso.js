const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Concurso = sequelize.define("Concurso", {
  IdConcurso: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  FechaInicio: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  FechaFin: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  Estado: {
    type: DataTypes.STRING(50),
    allowNull: true,
  }
}, {
  tableName: "Concurso",
  timestamps: false,
});

module.exports = Concurso;