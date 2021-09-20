const priorityService = require("../services/priority.service");

const priorityController = {};

/**
 * @author devNica | Lucas Andres Marsell
 * @description controller that consults the task priority service to retrieve all its records
 * @param {*} id
 * @returns {Object}
 */
priorityController.findAll = async () => {
  try {
    let result = await priorityService.findAll();
    if (result !== "failed") {
      return {
        status: true,
        prtx: result,
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
 * @description controller that queries the task priorities service to retrieve a record by its id
 * @param {*} id
 * @returns {Object}
 */
priorityController.findById = async (id) => {
  try {
    let result = await priorityService.findById(id);

    if (result !== "failed") {
      return {
        status: true,
        prt: {
          id_priority: result.id_priority,
          level: result.level,
          value: result.value,
          assignments: result.assignments[0] ? result.assignments : [],
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
 * @description controller that queries the task priorities service to add a new priority
 * @param {*} id
 * @returns {Object}
 */
priorityController.create = async (data) => {
  try {
    let result = await priorityService.create(data);
    if (result !== "failed") {
      return { status: true, msg: `priority has been created` };
    } else {
      throw String(
        `Error the priority could not be registered, see the system logs`
      );
    }
  } catch (error) {
    return { status: false, msg: error };
  }
};

module.exports = priorityController;
