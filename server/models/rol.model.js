const { DataTypes: type, Model } = require("sequelize");
const { sequelizeConfig: db } = require("../config/index");

class RolModel extends Model {}

RolModel.init(
  {
    id_rol: {
      autoIncrement: true,
      type: type.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    rol: {
      type: type.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize: db,
    modelName: "rol",
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = RolModel;
