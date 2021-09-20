const taskController = require('../../controllers/task.controller')

module.exports = {
    Query: {
      task: async (parent, {id}) => {
        let data = await taskController.findById(id);
        return data.task
      },
  
      tasks: async (parent, args) => {
        let data = await taskController.findAll()
        return data.tasks
      },
    },
  
    Mutation: {
      addTask: async(parent, args)=>{
        //   let data = {
        //       rol: args.rol,
        //   }
  
        //   return rolController.create(data)
      },
    },
  };
  