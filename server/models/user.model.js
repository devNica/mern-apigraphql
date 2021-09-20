const { DataTypes: type, Model } = require("sequelize");
const { sequelizeConfig: db } = require("../config/index");

class UserModel extends Model {}

UserModel.init(
  {
    id_user: {
      autoIncrement: true,
      type: type.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    firstname: {
      type: type.TEXT,
      allowNull: true,
    },
    lastname: {
      type: type.TEXT,
      allowNull: true,
    },
    email: {
      type: type.STRING(255),
      allowNull: true,
    },
    password: {
      type: type.STRING(255),
      allowNull: true,
    },
    is_active: {
      type: type.BOOLEAN,
      defaultValue: true,
    },
    fk_rol: {
      type: type.INTEGER,
      allowNull: true,
      references: {
        model: "rol",
        key: "id_rol",
      },
    },
  },
  {
    sequelize: db,
    modelName: "user",
    freezeTableName: true,
    timestamps: false,
    
  }
);

module.exports = UserModel;
