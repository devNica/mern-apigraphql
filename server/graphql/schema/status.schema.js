const {gql} = require('apollo-server-express')

module.exports = gql`

    type Status {
        id_status: ID!
        status: String!
        assignments: [Assignment]
    }
    extend type Query {
        sts(id: Int!): Status
        stsx: [Status!]
    }
    extend type Mutation {
        addStatus(status: String!): Message!
    }    
`