const categoryService = require("../services/category.service");

const categoryController = {};

/**
 * @author devNica | Lucas Andres Marsell
 * @description controller that consults the category service to retrieve all records
 * @param {*} id 
 * @returns {Object} 
 */
categoryController.findAll = async () => {
  try {
    let result = await categoryService.findAll();
    if (result !== "failed") {
      //console.log(result)
      return {
        status: true,
        categories: result,
      };
    } else {
      throw String(`an error occurred while fetching the data `);
    }
  } catch (error) {
    return { status: false, msg: error };
  }
};

/**
 * @author devNica | Lucas Andres Marsell
 * @description controller that consults the categories service to retrieve a record by its id
 * @param {*} id 
 * @returns {Object} 
 */
categoryController.findById = async (id) => {
  try {
    let result = await categoryService.findById(id);

    if (result !== "failed") {
      return {
        status: true,
        category: {
          id_category: result.id_category,
          category: result.category,
          tasks: result.tasks[0] ? result.tasks : [],
        },
      };
    } else {
      throw String(`an error occurred while fetching the data `);
    }
  } catch (error) {
    return { status: false, msg: error };
  }
};

/**
 * @author devNica | Lucas Andres Marsell
 * @description controller that consults the category service to add a new category
 * @param {*} id 
 * @returns {Object} 
 */
categoryController.addCategory = async (category) => {
  try {
    let result = await categoryService.create({ category });
    if (result !== "failed") {
      return { status: true, msg: `category has been created` };
    } else {
      throw String(
        `Error the category could not be registered, see the system logs`
      );
    }
  } catch (error) {
    return { status: false, msg: error };
  }
}

module.exports = categoryController;
