import {
  teamMembers,
  teamMember,
  createTeamMember,
  updateTeamMember,
  deleteTeamMember,
} from './teamMembers'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('teamMembers', () => {
  scenario('returns all teamMembers', async (scenario) => {
    const result = await teamMembers()

    expect(result.length).toEqual(Object.keys(scenario.teamMember).length)
  })

  scenario('returns a single teamMember', async (scenario) => {
    const result = await teamMember({ id: scenario.teamMember.one.id })

    expect(result).toEqual(scenario.teamMember.one)
  })

  scenario('creates a teamMember', async () => {
    const result = await createTeamMember({
      input: {
        name: 'String',
        role: 'String',
        imageUrl: 'String',
        twitterUrl: 'String',
        linkedinUrl: 'String',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.role).toEqual('String')
    expect(result.imageUrl).toEqual('String')
    expect(result.twitterUrl).toEqual('String')
    expect(result.linkedinUrl).toEqual('String')
  })

  scenario('updates a teamMember', async (scenario) => {
    const original = await teamMember({ id: scenario.teamMember.one.id })
    const result = await updateTeamMember({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a teamMember', async (scenario) => {
    const original = await deleteTeamMember({ id: scenario.teamMember.one.id })
    const result = await teamMember({ id: original.id })

    expect(result).toEqual(null)
  })
})
