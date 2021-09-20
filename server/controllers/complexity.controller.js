const complexityService = require("../services/complexity.service");

const complexityController = {};

/**
 * @author devNica | Lucas Andres Marsell
 * @description controller that consults the task complexity service to retrieve all its records
 * @param {*} id
 * @returns {Object}
 */
complexityController.findAll = async () => {
  try {
    let result = await complexityService.findAll();
    if (result !== "failed") {
      //console.log(result)
      return {
        status: true,
        cplxs: result,
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
 * @description controller that consults the service of the complexity of the tasks to retrieve information from a record
 * @param {*} id
 * @returns {Object}
 */
complexityController.findById = async (id) => {
  try {
    let result = await complexityService.findById(id);

    if (result !== "failed") {
      return {
        status: true,
        cpl: {
          id_complexity: result.id_complexity,
          level: result.level,
          value: result.value,
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
 * @description controller that consults the service of the complexity of the tasks to add a new complexity
 * @param {*} id
 * @returns {Object}
 */
complexityController.addComplexity = async (complexity) => {
  try {
    let result = await complexityService.create({ complexity });
    if (result !== "failed") {
      return { status: true, msg: `complexity has been created` };
    } else {
      throw String(
        `Error the complexity could not be registered, see the system logs`
      );
    }
  } catch (error) {
    return { status: false, msg: error };
  }
};

module.exports = complexityController;
