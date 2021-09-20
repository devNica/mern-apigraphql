const {gql} = require('apollo-server-express')

module.exports = gql`

    type Complexity {
        id_complexity: ID!
        level: String!
        value: Int!
        tasks: [Task]
    }
    extend type Query {
        cplx(id: Int!): Complexity
        cplxs: [Complexity!]
    }
    extend type Mutation {
        addCpl(level: String!, value: Int!): Message!
    }    
`