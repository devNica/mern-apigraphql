const expressLoader = require("./express.loader");
const sequelizeLoader = require("./sequelize.loader");
const {startServer} = require('./apollo-server.loader')

module.exports = {
  async init({
    expressApp = null,
    expressRoutes = null,
    sequelizeConfig = null,
  }) {
    
    await startServer(expressApp)
    await expressLoader(expressApp, expressRoutes);
    await sequelizeLoader(sequelizeConfig);
  },
};
