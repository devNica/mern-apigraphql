const {
  StatusModel,
  AssignmentModel,
  TaskModel,
  UserModel,
  RolModel
} = require("../models/index");

const statusService = {};

statusService.findAll = function () {
  return new Promise(async (resolve, reject) => {
    console.log("lego hasta el servicio");
    try {
      let stsx = await StatusModel.findAll({
        include: [
          {
            model: AssignmentModel,
            //required: true,
            include: [{ model: TaskModel }, { model: UserModel, as: "to", include: RolModel }],
          },
          {
            model: AssignmentModel,
            //required: true,
            include: [{ model: TaskModel }, { model: UserModel, as: "by", include: RolModel }],
          },
        ],
      });

      let r = JSON.stringify(stsx, null, 2);

      //console.log(r);

      resolve(JSON.parse(r));
    } catch (error) {
      console.log(error);
      reject("failed");
    }
  });
};

statusService.findById = function (id) {
  return new Promise(async (resolve, reject) => {
    try {
      let sts = await StatusModel.findAll({
        where: { id_status: id },
        include: [
          {
            model: AssignmentModel,
            //required: true,
            include: [{ model: TaskModel }, { model: UserModel, as: "to" }],
          },
          {
            model: AssignmentModel,
            //required: true,
            include: [{ model: TaskModel }, { model: UserModel, as: "by" }],
          },
        ],
      });

      let r = JSON.stringify(sts, null, 2);

      resolve(JSON.parse(r)[0]);
    } catch (error) {
      reject("failed");
    }
  });
};

statusService.create = function (data) {
  return new Promise(async (resolve, reject) => {
    try {
      await StatusModel.create(data);
      resolve(`Success`);
    } catch (error) {
      reject(`failed`);
    }
  });
};

module.exports = statusService;
