const priorityController = require("../../controllers/priority.controller");

module.exports = {
  Query: {
    prt: async (parent, { id }) => {
      let result = await priorityController.findById(id);
      return result.prt;
    },

    prtx: async (parent, args) => {
      let result = await priorityController.findAll();
      return result.prtx;
    },
  },

  Mutation: {
    addPriority: async (parent, args) => {},
  },
};
