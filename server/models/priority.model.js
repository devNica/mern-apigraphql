const { DataTypes: type, Model } = require("sequelize");
const { sequelizeConfig: db } = require("../config/index");

class PriorityModel extends Model {}

PriorityModel.init(
  {
    id_priority: {
      autoIncrement: true,
      type: type.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    level: {
      type: type.TEXT,
      allowNull: false,
    },
    value: {
      type: type.DECIMAL(3, 2),
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "priority",
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = PriorityModel;
