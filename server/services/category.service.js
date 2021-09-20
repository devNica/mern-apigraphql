const { CategoryModel, TaskModel, ComplexityModel } = require("../models/index");

const categoryService = {};

categoryService.findAll = function () {
  return new Promise(async (resolve, reject) => {
    try {
      let categories = await CategoryModel.findAll({
        include: [{ model: TaskModel, required: true, include: ComplexityModel }],
      });

      let r = JSON.stringify(categories, null, 2);

      //console.log(r);

      resolve(JSON.parse(r));
    } catch (error) {
      reject("failed");
    }
  });
};

categoryService.findById = function (id) {
  return new Promise(async (resolve, reject) => {
    try {
      let category = await CategoryModel.findAll({
        where: { id_category: id },
        include: [{model: TaskModel, include: ComplexityModel}],
      });

      let r = JSON.stringify(category, null, 2);

      resolve(JSON.parse(r)[0]);
    } catch (error) {
      reject("failed");
    }
  });
};

categoryService.create = function (data) {
  return new Promise(async (resolve, reject) => {
    try {
      await CategoryModel.create(data);
      resolve(`Success`);
    } catch (error) {
      reject(`failed`);
    }
  });
};

module.exports = categoryService;
