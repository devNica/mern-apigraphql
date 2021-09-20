const { GraphQLDateTime } = require("graphql-iso-date");

const customScalarResolver = {
  Date: GraphQLDateTime,
};
const userResolver = require("./user.resolver.js");
const rolResolver = require("./rol.resolver.js");
const categoryResolver = require("./category.resolver");
const taskResolver = require("./task.resolver");
const complexityResolver = require('./complexity.resolver')
const statusResolver = require('./status.resolver')
const priorityResolver = require('./priority.resolver')
const assignmentResolver = require('./assignment.resolver')

module.exports = [
  customScalarResolver,
  userResolver,
  rolResolver,
  categoryResolver,
  taskResolver,
  complexityResolver,
  statusResolver,
  priorityResolver,
  assignmentResolver
];
