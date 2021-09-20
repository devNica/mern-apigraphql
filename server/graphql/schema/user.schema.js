const {gql} = require('apollo-server-express')

module.exports = gql`

    type Message {
        message: String!
    }

    type Logged {
        token: String!
        firstname: String!
        lastname: String!
        email: String!

    }
    type User {
        id_user: ID!
        firstname: String!
        lastname: String!
        email: String!
        password: String!
        is_active: Boolean!
        rol: Rol!
        assigned: [Assignment!]
    }

    extend type Query {
        user(id: Int!): User!
        users: [User!]
    }
    extend type Mutation {
        signup(
            firstname: String!, 
            lastname: String!, 
            email: String!, 
            password: String!,
            is_active: Boolean!,
            fk_rol: Int!
        ): Message!
        signin(
            email: String!
            password: String!
        ): Logged
    }
    
`