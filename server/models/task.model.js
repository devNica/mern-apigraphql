const { DataTypes: type, Model } = require("sequelize");
const { sequelizeConfig: db } = require("../config/index");

class TaskModel extends Model {}

TaskModel.init(
  {
    id_task: {
      autoIncrement: true,
      type: type.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    description: {
      type: type.STRING(200),
      allowNull: true,
    },
    fk_category: {
      type: type.INTEGER,
      allowNull: true,
      references: {
        model: "category",
        key: "id_category",
      },
    },
    fk_complexity: {
      type: type.INTEGER,
      allowNull: true,
      references: {
        model: "complexity",
        key: "id_complexity",
      },
    },
    required_time_sec: {
      type: type.INTEGER,
    },
  },
  {
    sequelize: db,
    modelName: "task",
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = TaskModel;
