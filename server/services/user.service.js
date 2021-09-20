const {
  UserModel,
  RolModel,
  AssignmentModel,
  StatusModel,
  PriorityModel,
  TaskModel,
  CategoryModel,
  ComplexityModel
} = require("../models/index");

const userService = {};

userService.checkUserExistByEmail = function (email) {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await UserModel.findAll({ where: { email }, raw: true });
      resolve(user);
    } catch (error) {
      reject(false);
    }
  });
};

userService.findById = function (id) {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await UserModel.findByPk(id, {
        include: [
          { model: RolModel },
          {
            model: AssignmentModel,
            as: "assigned",
            //where: {assignment_to: id},
            include: [
              { model: StatusModel },
              { model: PriorityModel },
              { model: TaskModel, include: [{model:CategoryModel}, {model: ComplexityModel}] },
              {
                model: UserModel,
                as: "by",
                include: RolModel,
              },
            ],
          },
        ],
      });

      

      let r = JSON.stringify(user, null, 2);

      //console.log(r);

      resolve(JSON.parse(r));

      resolve(user);
    } catch (error) {
      console.log(error);
      reject(`failed`);
    }
  });
};

userService.findAll = function () {
  return new Promise(async (resolve, reject) => {
    try {
      let users = await UserModel.findAll({
        raw: true,
        nest: true,
        include: [{ model: RolModel }],
      });
      resolve(users);
    } catch (error) {
      console.log(error);
      reject(`failed`);
    }
  });
};

userService.create = function (data) {
  return new Promise(async (resolve, reject) => {
    try {
      const newUser = {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        password: data.password,
        fk_rol: data.fk_rol,
        is_active: data.is_active,
      };

      UserModel.create(newUser);

      resolve(`success`);
    } catch (error) {
      reject(`failed`);
    }
  });
};

module.exports = userService;
