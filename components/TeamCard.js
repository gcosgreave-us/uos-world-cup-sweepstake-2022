import { defaultTeams } from '../pages/api/data';
import Avatar from './Avatar';

const TeamCard = () => {
  return (
    <ul
      role='list'
      className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
    >
      {defaultTeams.map((team, i) => {
        return (
          <>
            {team.stillInTournament && (
              <li
                key={team.countryCode + i}
                className={`col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg text-center shadow bg-white`}
              >
                <div className='flex flex-1 flex-col p-8'>
                  <h1 className='mt-2 text-lg font-large text-gray-900'>
                    {team.name}
                  </h1>
                  <Avatar countryCode={team.countryCode} wikiLink={team.wiki} />
                  <dl className='mt-1 flex flex-grow flex-col justify-between mb-4'>
                    <dt className='sr-only'>Role</dt>
                    <dd className='mt-3'>
                      <span className='text-lg font-large'>
                        {team.currentTopTeam ? (
                          <span
                            className={`rounded-full px-4 py-2 text-2xl font-large ${
                              team.stillInTournament
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-900 text-white'
                            }`}
                          >
                            {team.teamOwner}
                            <span className='text-2xl pl-2'>🥇</span>
                          </span>
                        ) : team.currentTopLoser ? (
                          <span
                            className={`rounded-full px-4 py-2 text-2xl font-large ${
                              team.stillInTournament
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-900 text-white'
                            }`}
                          >
                            {team.teamOwner}
                            <span className='text-2xl pl-2'>🥄</span>
                          </span>
                        ) : (
                          <span
                            className={`rounded-full px-4 py-2 text-2xl font-large ${
                              team.stillInTournament
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-900 text-white'
                            }`}
                          >
                            {team.teamOwner}
                          </span>
                        )}
                      </span>
                    </dd>
                  </dl>
                  <div>
                    {team.stillInTournament ? (
                      <h1 className='rounded-full bg-green-100 px-4 py-2 text-lg font-large text-green-800'>
                        Still in tournament 🥳
                      </h1>
                    ) : (
                      <h1 className='rounded-full bg-red-900 px-4 py-2 text-lg font-large text-white'>
                        Out 😞
                      </h1>
                    )}
                  </div>
                </div>
              </li>
            )}
          </>
        );
      })}
    </ul>
  );
};

export default TeamCard;
