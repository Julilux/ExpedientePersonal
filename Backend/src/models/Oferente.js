const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Oferente = sequelize.define("Oferente", {
  IdOferente: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  Nombre: { type: DataTypes.STRING(100), allowNull: false },
  TipoIdentificacion: { type: DataTypes.STRING(50) },
  Direccion: { type: DataTypes.STRING(200) },
  FechaNacimiento: { type: DataTypes.DATE },
  EstadoCivil: { type: DataTypes.STRING(50) },
  Nacionalidad: { type: DataTypes.STRING(50) },
  IdDistrito: { type: DataTypes.INTEGER },
}, {
  tableName: "Oferente",
  timestamps: false,
});

module.exports = Oferente;