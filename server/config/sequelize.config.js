const Sequelize = require("sequelize");
const config = require("./db.config");

/**return an instance of the orm */
const sequelize = new Sequelize(
  config.database,
  config.user,
  config.password,
  config.options
);

module.exports = sequelize;
