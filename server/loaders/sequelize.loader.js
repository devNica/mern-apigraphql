const {
  UserModel,
  RolModel,
  TaskModel,
  ComplexityModel,
  CategoryModel,
  PriorityModel,
  StatusModel,
  AssignmentModel,
} = require("../models/index");

const initModels = (sequelize = null) => {
  if (!sequelize) return;

  //ASSOCIATIONS

  //ASSIGNMENTMODEL
  AssignmentModel.belongsTo(StatusModel, { foreignKey: "fk_status" });
  AssignmentModel.belongsTo(PriorityModel, { foreignKey: "fk_priority" });
  AssignmentModel.belongsTo(TaskModel, { foreignKey: "fk_task" });
  AssignmentModel.belongsTo(UserModel, { foreignKey: "assignment_to", as: "to"});
  AssignmentModel.belongsTo(UserModel, { foreignKey: "assignment_by", as: "by"});

  //CATEGORYMODEL
  CategoryModel.hasMany(TaskModel, { foreignKey: "fk_category" });

  //COMPLEXITYMODEL
  ComplexityModel.hasMany(TaskModel, { foreignKey: "fk_complexity" });

  //PRIORITYMODEL
  PriorityModel.hasMany(AssignmentModel, { foreignKey: "fk_priority" });

  //ROLMODEL
  RolModel.hasMany(UserModel, { foreignKey: "fk_rol" });

  //TASKMODEL
  TaskModel.belongsTo(CategoryModel, { foreignKey: "fk_category" });
  TaskModel.belongsTo(ComplexityModel, { foreignKey: "fk_complexity" });

  //STATUSMODEL
  StatusModel.hasMany(AssignmentModel, { foreignKey: "fk_status" });

  //USERMODEL
  UserModel.belongsTo(RolModel, { foreignKey: "fk_rol" });
  UserModel.hasMany(AssignmentModel, {foreignKey: "assignment_to", as: "assigned" });
  UserModel.hasMany(AssignmentModel, { foreignKey: "assignment_by", as: "assigns"});

  return sequelize;
};

module.exports = initModels;
