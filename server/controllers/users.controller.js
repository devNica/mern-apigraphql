const bcrypt = require("bcrypt");
const userService = require("../services/user.service");
const { SECRET_KEY } = require("../config/constants.config");
const jwt = require("jsonwebtoken");

const userController = {};

function isObjEmpty(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) return false;
  }

  return true;
}


/**
 * @author devNica | Lucas Andres Marsell
 * @description controller that consults the service of users, to start session
 * @param {*} id
 * @returns {Object}
 */
userController.signin = async (data) => {
  try {
    let user = await userService.checkUserExistByEmail(data.email);

    if (!isObjEmpty(user)) {

      let hashPassword = user[0].password;

      bcrypt.compareSync(data.password, hashPassword);

      let token = jwt.sign(
        { id: user[0].id_user, email: user[0].email },
        SECRET_KEY,
        { expiresIn: "10m" }
      );

      return {
        status: true,
        msg: "User logged in successfully ",
        logged: {token, firstname: user[0].firstname, lastname: user[0].lastname, email: user[0].email},
      };
    } else {
      throw String(
        `the email is not registered, please register to access the system`
      );
    }
  } catch (error) {
    return { status: false, msg: error, logged: null };
  }
};

/**
 * @author devNica | Lucas Andres Marsell
 * @description controller that consults the service of users, to register a new user
 * @param {*} id
 * @returns {Object}
 */
userController.signup = async (data) => {
  try {
    if (!isObjEmpty(data)) {
      let user = await userService.checkUserExistByEmail(data.email);
      if (!user[0]) {
        let hash = bcrypt.hashSync(data.password, 10);
        data.password = hash;

        const result = await userService.create(data);

        if (result === "success")
          return { status: true, msg: `User has been created`};
        else
          throw String(
            `Error the user could not be registered, see the system logs`
          );
      } else {
        throw String(`this email has already been used`);
      }
    } else {
      throw String("the data cannot be empty");
    }
  } catch (error) {
    return { status: false, msg: error };
  }
};

/**
 * @author devNica | Lucas Andres Marsell
 * @description controller that consults the service of users, to retrieve a record by its id
 * @param {*} id
 * @returns {Object}
 */
userController.findById = async (id) => {
  try {
    const result = await userService.findById(id);
    if (result !== `failed`) {
      //return { status: true, user: result };

      //console.log(result)
      return {
        status: true,
        user: {
          id_user: result.id_user,
          firstname: result.firstname,
          lastname: result.lastname,
          email: result.email,
          password: result.password,
          is_active: result.is_active,
          fk_rol: result.fk_rol,
          rol: result.rol,
          assigned: result.assigned[0] ? result.assigned : [],
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
 * @description controller that consults the service of users, to retrieve all records
 * @param {*} id
 * @returns {Object}
 */
userController.findAll = async () => {
  try {
    const users = await userService.findAll();
    if (users !== `failed`) {
      return { status: true, users };
    } else {
      throw String(`an error occurred while fetching the data `);
    }
  } catch (error) {
    return { status: false, msg: error };
  }
};


module.exports = userController;
