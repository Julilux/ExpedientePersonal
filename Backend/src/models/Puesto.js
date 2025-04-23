const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Puesto = sequelize.define("Puesto", {
  IdPuesto: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  Salario: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
  },
  IdJefatura: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  Disponible: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  }
}, {
  tableName: "Puesto",
  timestamps: false
});

module.exports = Puesto;