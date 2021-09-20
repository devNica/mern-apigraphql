const complexityController = require("../../controllers/complexity.controller");

module.exports = {
  Query: {
    cplx: async (parent, { id }) => {
      let result = await complexityController.findById(id);
      return result.cpl;
    },

    cplxs: async (parent, {}) => {
      let result = await complexityController.findAll();
      return result.cplxs;
    },
  },

  Mutation: {
    addCpl: async (parent, args) => {
      let result = await complexityController.addComplexity(...args);
      return { message: result.msg };
    },
  },
};
