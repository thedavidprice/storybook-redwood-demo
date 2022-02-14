export const schema = gql`
  type TeamMember {
    id: Int!
    name: String!
    role: String!
    imageUrl: String!
    twitterUrl: String!
    linkedinUrl: String!
  }

  type Query {
    teamMembers: [TeamMember!]! @requireAuth
    teamMember(id: Int!): TeamMember @requireAuth
  }

  input CreateTeamMemberInput {
    name: String!
    role: String!
    imageUrl: String!
    twitterUrl: String!
    linkedinUrl: String!
  }

  input UpdateTeamMemberInput {
    name: String
    role: String
    imageUrl: String
    twitterUrl: String
    linkedinUrl: String
  }

  type Mutation {
    createTeamMember(input: CreateTeamMemberInput!): TeamMember! @requireAuth
    updateTeamMember(id: Int!, input: UpdateTeamMemberInput!): TeamMember!
      @requireAuth
    deleteTeamMember(id: Int!): TeamMember! @requireAuth
  }
`
