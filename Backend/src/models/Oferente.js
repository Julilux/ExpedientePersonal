const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Oferente = sequelize.define("Oferente", {
  IdOferente: {
    type: DataTypes.STRING(50),
    primaryKey: true,
    allowNull: false,
  },
  Nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  TipoIdentificacion: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  Direccion: {
    type: DataTypes.STRING(200),
    allowNull: true,
  },
  FechaNacimiento: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  EstadoCivil: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  Nacionalidad: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  Empleado: {                     
    type: DataTypes.BOOLEAN,
  }
}, {
  tableName: "Oferente",
  timestamps: false,
});

module.exports = Oferente;