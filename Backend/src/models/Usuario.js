const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Usuario = sequelize.define("Usuario", {
  IdUsuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Nombre: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  Correo: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  Contrasenia: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  Estado: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  FechaCreacion: {
    type: DataTypes.DATE
  },
  UltimoAcceso: {
    type: DataTypes.DATE
  },
  IntentosFallidos: {
    type: DataTypes.INTEGER,
    allowNull: true,
  }
}, {
  tableName: "Usuario",
  timestamps: false,
});

module.exports = Usuario;