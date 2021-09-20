const { DataTypes: type, Model } = require("sequelize");
const { sequelizeConfig: db } = require("../config/index");

class StatusModel extends Model {}

StatusModel.init(
  {
    id_status: {
      autoIncrement: true,
      type: type.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    status: {
      type: type.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize: db,
    modelName: "status",
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = StatusModel;