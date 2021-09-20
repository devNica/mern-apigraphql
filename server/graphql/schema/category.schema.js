const {gql} = require('apollo-server-express')

module.exports = gql`
    
type Category {
        id_category: ID!
        category: String!
        tasks: [Task]
    }
    extend type Query {
        category(id: Int!): Category
        categories: [Category!]
    }
    extend type Mutation {
        addCategory(category: String!): Message!
    }    
`