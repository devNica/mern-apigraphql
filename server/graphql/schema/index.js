const { gql } = require("apollo-server-express");
const userSchema = require("./user.schema");
const rolSchema = require("./rol.schema");
const categorySchema = require("./category.schema");
const taskSchema = require("./task.schema");
const complexitySchema = require('./complexity.schema')
const statusSchema = require('./status.schema')
const prioritySchema = require('./priority.schema')
const assignmentSchema = require('./assignment.schema')

const baseSchema = gql`
  scalar Date

  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

module.exports = [
  baseSchema,
  userSchema,
  rolSchema,
  categorySchema,
  taskSchema,
  complexitySchema,
  statusSchema,
  prioritySchema,
  assignmentSchema
];
