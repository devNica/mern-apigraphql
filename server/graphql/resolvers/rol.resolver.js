const rolController = require('../../controllers/rol.controller');

module.exports = {
    Query: {
      roles: async (parent, args) => {
        let data = await rolController.findAll();
        return data.rol
      },
  
      rol: async (parent, { id }) => {
        let data = await rolController.findById(id)
        return data.rol
      },
    },
  
    Mutation: {
      createRol: async(parent, args)=>{
          let data = {
              rol: args.rol,
          }
  
          return rolController.create(data)
      },
    },
  };
  