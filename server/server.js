const express = require("express");
const loaders = require("./loaders/index");
const { sequelizeConfig, constants } = require("./config/index");
const { api_routes } = require("./api/index");

async function startServer() {
  const app = express();

  await loaders.init({
    expressApp: app,
    expressRoutes: api_routes(),
    sequelizeConfig,
  });

  app.listen(constants.SERVER_PORT, (err) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log(`🚀 Server running at port: ${constants.SERVER_PORT}`);
  });

}

startServer();
