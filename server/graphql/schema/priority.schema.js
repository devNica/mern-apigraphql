const {gql} = require('apollo-server-express')

module.exports = gql`

    type Priority {
        id_priority: ID!
        level: String!
        value: Float!
        assignments: [Assignment]
    }
    extend type Query {
        prt(id: Int!): Priority
        prtx: [Priority!]
    }
    extend type Mutation {
        addPriority(level: String!, value: Float!): Message!
    }    
`