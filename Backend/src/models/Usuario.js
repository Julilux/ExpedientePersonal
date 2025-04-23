const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Usuario = sequelize.define("Usuario", {
  IdUsuario: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  Nombre: { type: DataTypes.STRING(100), allowNull: false }, // se asume que este campo es el nombre de usuario
  Correo: { type: DataTypes.STRING(100), allowNull: false },
  Contrasenia: { type: DataTypes.STRING(100), allowNull: false },
  Estado: { type: DataTypes.STRING(50), defaultValue: "Activo" },
  FechaCreacion: { type: DataTypes.DATE },
  UltimoAcceso: { type: DataTypes.DATE },
  IntentosFallidos: { type: DataTypes.INTEGER, defaultValue: 0 }
}, {
  tableName: "Usuario",
  timestamps: false,
});

module.exports = Usuario;