const categoryController = require("../../controllers/category.controller");

module.exports = {
  Query: {
    category: async (parent, { id }) => {
      let data = await categoryController.findById(id);
      return data.category;
    },

    categories: async (parent, {}) => {
      let data = await categoryController.findAll();
      return data.categories;
    },
  },

  Mutation: {
    addCategory: async (parent, args) => {
      let result = await categoryController.addCategory(...args);

      return { message: result.msg };
    },
  },
};
