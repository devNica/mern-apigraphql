const rolService = require("../services/rol.service");

const rolController = {};

/**
 * @author devNica | Lucas Andres Marsell
 * @description controller that queries the user role service to retrieve all records
 * @param {*} id
 * @returns {Object}
 */
rolController.findAll = async () => {
  try {
    let result = await rolService.findAll();
    if (result !== "failed") {
      //console.log(result)
      return {
        status: true,
        rol: result,
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
 * @description controller that queries the user role service to retrieve a record by its id
 * @param {*} id
 * @returns {Object}
 */
rolController.findById = async (id) => {
  try {
    let result = await rolService.findById(id);

    if (result !== "failed") {
      return {
        status: true,
        rol: {
          id_rol: result.id_rol,
          rol: result.rol,
          users: result.users[0] ? result.users : [],
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
 * @description controller that queries the user role service to add a new role
 * @param {*} id
 * @returns {Object}
 */
rolController.create = async ({ rol }) => {
  try {
    let result = await rolService.create({ rol });
    if (result !== "failed") {
      return { status: true, msg: `rol has been created` };
    } else {
      throw String(
        `Error the rol could not be registered, see the system logs`
      );
    }
  } catch (error) {
    return { status: false, msg: error };
  }
};

module.exports = rolController;
