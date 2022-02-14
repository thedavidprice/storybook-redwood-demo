import { MetaTags } from '@redwoodjs/web'
import TeamCell from '../../components/TeamCell'

const TeamPage = () => {
  return (
    <>
      <MetaTags title="Team" description="Team page" />

      <div className="bg-white">
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Our Team
              </h2>
              <p className="text-xl text-gray-500">
                Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum
                dolor ultricies donec risus sodales. Tempus quis et.
              </p>
            </div>
            <TeamCell />
          </div>
        </div>
      </div>
    </>
  )
}

export default TeamPage
