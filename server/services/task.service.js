const {
  TaskModel,
  ComplexityModel,
  CategoryModel,
} = require("../models/index");

const taskService = {};

taskService.findById = function (id) {
  return new Promise(async (resolve, reject) => {
    try {
      let task = await TaskModel.findByPk(id, {
        include: [{ model: CategoryModel }, { model: ComplexityModel }],
      });

      let r = JSON.stringify(task, null, 2);

      resolve(JSON.parse(r));
    } catch (error) {
      reject(`failed`);
    }
  });
};

taskService.findAll = function () {
  return new Promise(async (resolve, reject) => {
    try {
      let tasks = await TaskModel.findAll({
        include: [{ model: CategoryModel }, { model: ComplexityModel }],
      });

      let r = JSON.stringify(tasks, null, 2);

      resolve(JSON.parse(r));
    } catch (error) {
      console.log(error);
      reject(`failed`);
    }
  });
};

taskService.create = function (data) {
  return new Promise(async (resolve, reject) => {
    try {
      const newTask = {
        description: data.description,
        fk_category: data.fk_category,
        fk_complexity: data.fk_complexity,
        required_time_sec: data.required_time_sec,
      };

      TaskModel.create(newTask);

      resolve(`success`);
    } catch (error) {
      reject(`failed`);
    }
  });
};

module.exports = taskService;
