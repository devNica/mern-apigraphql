const { UserInputError } = require("apollo-server-errors");
const userController = require("../../controllers/users.controller");

module.exports = {
  Query: {
    users: async (parent, args, { authUser }) => {
      let result = await userController.findAll();
      return result.users;
    },

    user: async (parent, { id }) => {
      let result = await userController.findById(id);
      return result.user
    },

  },

  Mutation: {
    signup: async (parent, args) => {
      let result = await userController.signup({ ...args });
      return {message: result.msg}
    },

    signin: async (parent, args) => {
      const result = await userController.signin({ ...args });

      if (!result.status) {
        throw new Error(result.msg);
      } else {
        return result.logged;
      }
    },
  },
};
