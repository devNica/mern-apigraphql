const { DataTypes: type, Model } = require("sequelize");
const { sequelizeConfig: db } = require("../config/index");

class AssignmentModel extends Model {}

AssignmentModel.init(
  {
    id_assignment: {
      autoIncrement: true,
      type: type.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    assignment_to: {
      type: type.INTEGER,
      allowNull: true,
      references: {
        model: "user",
        key: "id_user",
      },
    },
    assignment_by: {
      type: type.INTEGER,
      allowNull: true,
      references: {
        model: "user",
        key: "id_user",
      },
    },
    fk_task: {
      type: type.INTEGER,
      allowNull: true,
      references: {
        model: "task",
        key: "id_task",
      },
    },
    fk_priority: {
      type: type.INTEGER,
      allowNull: true,
      references: {
        model: "priority",
        key: "id_priority",
      },
    },
    duration_sec: {
      type: type.INTEGER,
    },
    assigned_at: {
      type: type.DATE,
    },
    finished_at: {
      type: type.DATE,
    },
    initial_score: {
      type: type.DECIMAL(7, 2),
    },
    penalty_score: {
      type: type.DECIMAL(7, 2),
    },
    final_score: {
      type: type.DECIMAL(7, 2),
    },
    is_notified: {
      type: type.BOOLEAN,
    },
    fk_status: {
      type: type.INTEGER,
      allowNull: true,
      references: {
        model: "status",
        key: "id_status",
      },
    },
  },
  {
    sequelize: db,
    modelName: "assignment",
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = AssignmentModel;
