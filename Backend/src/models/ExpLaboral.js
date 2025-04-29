const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const ExpLaboral = sequelize.define("ExpLaboral", {
  IdExperiencia: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  IdOferente: {
    type: DataTypes.INTEGER
  },
}, {
  tableName: "ExpLaboral",
  timestamps: false,
});

module.exports = ExpLaboral;