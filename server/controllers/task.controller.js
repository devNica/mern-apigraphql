const taskService = require("../services/task.service");

const taskController = {};

/**
 * @author devNica | Lucas Andres Marsell
 * @description controller that consults the task service, to retrieve all the records
 * @param {*} id
 * @returns {Object}
 */
taskController.findAll = async () => {
  try {
    let result = await taskService.findAll();
    if (result !== "failed") {
      return {
        status: true,
        tasks: result,
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
 * @description controller that consults the task service, to retrieve a record by its id
 * @param {*} id
 * @returns {Object}
 */
taskController.findById = async (id) => {
  try {
    let result = await taskService.findById(id);

    if (result !== "failed") {

      console.log('result', result)

      return {
        status: true,
        task: result,
      }

    } else {
      throw String(`an error occurred while fetching the data `);
    }
  } catch (error) {
    return { status: false, msg: error };
  }
}


module.exports = taskController