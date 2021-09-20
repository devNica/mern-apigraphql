const { DataTypes: type, Model } = require("sequelize");
const { sequelizeConfig: db } = require("../config/index");

class ComplexityModel extends Model {}

ComplexityModel.init(
  {
    id_complexity: {
      autoIncrement: true,
      type: type.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    level: {
      type: type.STRING(10),
      allowNull: false,
    },
    value: {
      type: type.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "complexity",
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = ComplexityModel;
