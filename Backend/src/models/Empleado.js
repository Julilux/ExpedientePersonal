const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Empleado = sequelize.define("Empleado", {
  IdEmpleado: {
    type: DataTypes.STRING(50),
    primaryKey: true,
    allowNull: false,
  },
  Nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  Puesto: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  Direccion: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
}, {
  tableName: "Empleado",
  timestamps: false,
});

module.exports = Empleado;