const assignmentController = require("../../controllers/assignment.controller");

module.exports = {
  Query: {
    asg: async (parent, { id }) => {
      let data = await assignmentController.findById(id);
      return data.asg;
    },

    asgx: async (parent, {}) => {
      let data = await assignmentController.findAll();
      return data.asgx;
    },
  },

  Mutation: {
    addAssignment: async (parent, args) => {
      //   let result = await assignmentController.addCategory(...args);
      //   return { message: result.msg };
    },
  },
};
