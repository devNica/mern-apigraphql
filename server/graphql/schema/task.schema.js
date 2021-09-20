const {gql} = require('apollo-server-express')

module.exports = gql`

    type Task {
        id_task: ID!
        description: String!
        fk_category: Int!
        fk_complexity: Int!
        required_time_sec: Int!
        category: Category
        complexity: Complexity
    }
    extend type Query {
        task(id: Int!): Task
        tasks: [Task!]
    }
    extend type Mutation {
        addTask(task: String!): Task!
    }    
`