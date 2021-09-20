require("dotenv").config();

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_DATABASE;
const host = process.env.DB_HOST;
const node_env = process.env.NODE_ENV;
const dialect = process.env.DB_DIALECT;

/**
 * @description configuration for connection of the ORM with the database
 * @returns {Object}
 */
const config = {
  development: {
    user,
    password,
    database,
    options: {
      dialect,
      host,
      dialectOptions: {
        multipleStatements: true,
      },
      logging: false,
      timezone: "-06:00",
    },
  },
  test: {},
  production: {},
};

module.exports = config[node_env];
