import TeamMember from '../TeamMember/TeamMember'

export const QUERY = gql`
  query FindTeamMembersQuery {
    teamMembers {
      id
      name
      role
      imageUrl
      twitterUrl
      linkedinUrl
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ teamMembers }) => {
  return (
    <div>
      <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
        {teamMembers?.map((teamMember) => (
          <li key={teamMember.id}>
            <TeamMember key={teamMember.id} teamMember={teamMember} />
          </li>
        ))}
      </ul>
    </div>
  )
}
