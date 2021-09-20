const statusController = require("../../controllers/status.controller");

module.exports = {
  Query: {
    sts: async (parent, { id }) => {
      let result = await statusController.findById(id);
      return result.sts;
    },

    stsx: async (parent, args) => {
    //console.log('entro')
      let result = await statusController.findAll();
      return result.stsx;
    },
  },

  Mutation: {
    addStatus: async (parent, args) => {},
  },
};
