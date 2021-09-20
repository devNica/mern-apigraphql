const assignmentService = require("../services/assignment.service");

const assignmentController = {};

/**
 * @author devNica | Lucas Andres Marsell
 * @description controller that consults the assignment service to retrieve all records
 * @param {*} id 
 * @returns {Object} 
 */
assignmentController.findAll = async () => {
  try {
    let result = await assignmentService.findAll();
    if (result !== "failed") {
      //console.log(result)
      return {
        status: true,
        asgx: result,
      };
    } else {
      throw String(`an error occurred while fetching the data `);
    }
  } catch (error) {
    return { status: false, msg: error };
  }
};


/**
 * @author devNica | Lucas Andres Marsell
 * @description controller that consults the assignment service to retrieve its information by the assignment id
 * @param {*} id 
 * @returns {Object} 
 */
assignmentController.findById = async (id) => {
  try {
    let result = await assignmentService.findById(id);

    if (result !== "failed") {
      return {
        status: true,
        asg: {
          ...result[0]
          // id_assignment: result[0].id_assignment,
          // assignment_to: result[0].assignment_to,
          // assignment_by: result[0].assignment_by,
          // fk_task: result[0].fk_task,
          // fk_priority: result[0].fk_priority,
          // duration_sec: result[0].duration_sec,
          // assigned_at: result[0].assigned_at,
          // finished_at: result[0].finished_at ? result[0].finished_at : null ,
          // initial_score: result[0].initial_score,
          // penalty_score: result[0].penalty_score,
          // final_score: result[0].final_score,
          // is_notified: result[0].is_notified,
          // fk_status: result[0].fk_status,
          // status: result[0].status ? result[0].status : {},
          // priority: result[0].priority ? result[0].status : {},
          // task: result[0].task ? result[0].task : {},
          // to: result[0].to ? result[0].to : {},
          // by: result[0].by ? result[0].by : {},
        },
      };
    } else {
      throw String(`an error occurred while fetching the data `);
    }
  } catch (error) {
    return { status: false, msg: error };
  }
};

module.exports = assignmentController;
