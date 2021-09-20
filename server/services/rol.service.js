const { RolModel, UserModel } = require("../models/index");

const rolService = {};

rolService.findAll = function () {
  return new Promise(async (resolve, reject) => {
    try {
      let roles = await RolModel.findAll({
        include: [{ model: UserModel, required: true }],
      });

      let r = JSON.stringify(roles, null, 2);

      //console.log(r)

      resolve(JSON.parse(r));

      //resolve(roles);
    } catch (error) {
      reject("failed");
    }
  });
};

rolService.findById = function (id) {
  return new Promise(async (resolve, reject) => {
    try {
      let rol = await RolModel.findAll({
        where: { id_rol: id },
        include: UserModel,
      });

      let r = JSON.stringify(rol, null, 2);

      resolve(JSON.parse(r)[0]);
    } catch (error) {
      reject("failed");
    }
  });
};

rolService.create = function (data) {
  return new Promise(async (resolve, reject) => {
    try {
      await RolModel.create(data);
      resolve(`Success`);
    } catch (error) {
      reject(`failed`);
    }
  });
};

module.exports = rolService;
