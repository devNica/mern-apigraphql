const {gql} = require('apollo-server-express')

module.exports = gql`

    type Rol {
        id_rol: ID!
        rol: String!
        users: [User]
    }
    type RolCreated {
        rol: Rol!
    }
    extend type Query {
        rol(id: Int!): Rol
        roles: [Rol!]
    }
    extend type Mutation {
        createRol(rol: String!): Rol!
    }
    extend type Subscription {
        rolCreated: RolCreated!
    }
`