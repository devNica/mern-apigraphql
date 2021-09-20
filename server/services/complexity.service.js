const {
  CategoryModel,
  TaskModel,
  ComplexityModel,
} = require("../models/index");

const complexityService = {};

complexityService.findAll = function () {
  return new Promise(async (resolve, reject) => {
    try {
      let cplxs = await ComplexityModel.findAll({
        include: [{ model: TaskModel, include: CategoryModel }],
      });

      let r = JSON.stringify(cplxs, null, 2);

      //console.log(r);

      resolve(JSON.parse(r));
    } catch (error) {
      reject("failed");
    }
  });
};

complexityService.findById = function (id) {
  return new Promise(async (resolve, reject) => {
    try {
      let cpl = await ComplexityModel.findAll({
        where: { id_complexity: id },
        include: [{ model: TaskModel, include: CategoryModel }],
      });

      //console.log('id', id)

      let r = JSON.stringify(cpl, null, 2);

      resolve(JSON.parse(r)[0]);
    } catch (error) {
      reject("failed");
    }
  });
};

complexityService.create = function (data) {
  return new Promise(async (resolve, reject) => {
    try {
      await ComplexityModel.create(data);
      resolve(`Success`);
    } catch (error) {
      reject(`failed`);
    }
  });
};

module.exports = complexityService;
