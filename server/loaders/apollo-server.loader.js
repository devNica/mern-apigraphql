const { ApolloServer, gql } = require("apollo-server-express");
const { BASEAPI } = require("../config/constants.config");
const typeDefs = require("../graphql/schema/index");
const resolvers = require("../graphql/resolvers/index");
const cors = require('cors')
const morgan = require('morgan')

const apolloServer = {};

apolloServer.startServer = async (app = null) => {
  try {
    if (!app) return;

    const server = new ApolloServer({
      introspection: true,
      typeDefs,
      resolvers,
      context: async (req) => {
        authUser: req.user;
      },
    });

    await server.start();

    server.applyMiddleware({ app, path: `${BASEAPI}/graphql` });

    return server;
  } catch (error) {
    console.log("este es un error", error);
  }
};

module.exports = apolloServer;
