const statusService = require("../services/status.service");

const statusController = {};

/**
 * @author devNica | Lucas Andres Marsell
 * @description controller that queries the status service of an assignment to retrieve all its records
 * @param {*} id
 * @returns {Object}
 */
statusController.findAll = async () => {
  try {
    let result = await statusService.findAll();
    if (result !== "failed") {
      return {
        status: true,
        stsx: result,
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
 * @description controller that consults the status service of an assignment to retrieve a record by its id
 * @param {*} id
 * @returns {Object}
 */
statusController.findById = async (id) => {
  try {
    let result = await statusService.findById(id);

    if (result !== "failed") {
      return {
        status: true,
        sts: {
          id_status: result.id_status,
          status: result.status,
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
 * @description controller that queries the state service of an assignment to add a new state
 * @param {*} id
 * @returns {Object}
 */
statusController.create = async ({ status }) => {
  try {
    let result = await statusService.create({ status });
    if (result !== "failed") {
      return { status: true, msg: `status has been created` };
    } else {
      throw String(
        `Error the status could not be registered, see the system logs`
      );
    }
  } catch (error) {
    return { status: false, msg: error };
  }
};

module.exports = statusController;
