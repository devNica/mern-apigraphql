const {
  UserModel,
  PriorityModel,
  StatusModel,
  TaskModel,
  AssignmentModel,
  RolModel,
} = require("../models/index");

const assignmentService = {};

assignmentService.findAll = function () {
  return new Promise(async (resolve, reject) => {
    try {
      let asgx = await AssignmentModel.findAll({
        include: [
          {
            model: UserModel,
            as: "to",
            include: RolModel,
          },
          {
            model: UserModel,
            as: "by",
            include: RolModel,
          },
          {
            model: TaskModel,
          },
          { model: StatusModel },
          { model: PriorityModel },
        ],
      });

      let r = JSON.stringify(asgx, null, 2);

      //console.log(r);

      resolve(JSON.parse(r));
    } catch (error) {
      console.log(error);
      reject("failed");
    }
  });
};

assignmentService.findById = function (id) {
  return new Promise(async (resolve, reject) => {
    try {
      let asg = await AssignmentModel.findAll({
        where: { id_assignment: id },
        include: [
          {
            model: UserModel,
            as: "to",
            include: RolModel,
          },
          {
            model: UserModel,
            as: "by",
            include: RolModel,
          },
          {
            model: TaskModel,
          },
          { model: StatusModel },
          { model: PriorityModel },
        ],
      });

      let r = JSON.stringify(asg, null, 2);

      //console.log(r);

      resolve(JSON.parse(r));
    } catch (error) {
      console.log(error);
      reject("failed");
    }
  });
};

module.exports = assignmentService;
