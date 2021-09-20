const {
    PriorityModel,
    AssignmentModel,
    TaskModel,
    UserModel,
    RolModel
  } = require("../models/index");
  
  const priorityService = {};
  
  priorityService.findAll = function () {
    return new Promise(async (resolve, reject) => {
      try {
        let prtx = await PriorityModel.findAll({
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
  
        let r = JSON.stringify(prtx, null, 2);
  
        //console.log(r);
  
        resolve(JSON.parse(r));
      } catch (error) {
        reject("failed");
      }
    });
  };
  
  priorityService.findById = function (id) {
    return new Promise(async (resolve, reject) => {
      try {
        let prt = await PriorityModel.findAll({
          where: { id_priority: id },
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
  
        let r = JSON.stringify(prt, null, 2);
  
        resolve(JSON.parse(r)[0]);
      } catch (error) {
        reject("failed");
      }
    });
  };
  
  priorityService.create = function (data) {
    return new Promise(async (resolve, reject) => {
      try {
        await PriorityModel.create(data);
        resolve(`Success`);
      } catch (error) {
        reject(`failed`);
      }
    });
  };
  
  module.exports = priorityService;