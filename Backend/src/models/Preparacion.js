const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Preparacion = sequelize.define("Preparacion", {
  IdPreparacion: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  IdOferente: {
    type: DataTypes.INTEGER
  },
  Institucion: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  Nombre: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  FechaInicio: {
    type: DataTypes.DATE
  },
  FechaFin: {
    type: DataTypes.DATE
  },
  IdInstitucion: {
    type: DataTypes.INTEGER
  },
}, {
  tableName: "Preparacion",
  timestamps: false,
});

module.exports = Preparacion;