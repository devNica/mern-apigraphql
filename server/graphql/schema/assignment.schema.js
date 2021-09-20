const {gql} = require('apollo-server-express')

module.exports = gql`
type Assignment {
        id_assignment: ID!
        assignment_to: Int!
        assignment_by: Int!
        fk_task: Int!
        fk_priority: Int!
        duration_sec: Int
        assigned_at: Date!
        finished_at: Date
        initial_score: Float!
        penalty_score: Float
        final_score: Float
        is_notified: Boolean!
        fk_status: Int!
        status: Status!
        priority: Priority!
        task: Task!
        to: User
        by: User!
    }
    extend type Query {
        asg(id: Int!): Assignment
        asgx: [Assignment!]
    }
    extend type Mutation {
        addAssignment(
            assignment_to: Int!,
            assignment_by: Int!,
            fk_task: Int!,
            fk_priority: Int!,
            assigned_at: Date!,
            initial_score: Float!,
            is_notified: Boolean!,
            fk_status: Int!
            ): Message!
    }    
`