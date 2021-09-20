const { DataTypes: type, Model } = require("sequelize");
const { sequelizeConfig: db } = require("../config/index");

class CategoryModel extends Model {}

CategoryModel.init(
  {
    id_category: {
      autoIncrement: true,
      type: type.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    category: {
      type: type.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize: db,
    modelName: "category",
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = CategoryModel;