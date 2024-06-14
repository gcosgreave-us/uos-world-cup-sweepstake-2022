import { useEffect, useState } from 'react';
import Avatar from './Avatar';

const TeamCard = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      const response = await fetch('/api/teams');
      const data = await response.json();
      setTeams(data);
    };

    fetchTeams();
  }, []);

  return (
    <ul
      role='list'
      className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
    >
      {teams.map((team, i) => (
        <div
          key={team.countryCode + i}
          className={team.stillInTournament === false ? 'hidden' : ''}
        >
          {team.stillInTournament && (
            <li
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
                      <span
                        className={`rounded-full px-4 py-2 text-2xl font-large ${
                          team.stillInTournament
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-900 text-white'
                        }`}
                      >
                        {team.teamOwner}
                        {team.currentTopTeam ? (
                          <span className='text-2xl pl-2'>🥇</span>
                        ) : team.currentTopLoser ? (
                          <span className='text-2xl pl-2'>🥄</span>
                        ) : null}
                      </span>
                    </span>
                  </dd>
                </dl>
                <div>
                  {team.stillInTournament ? (
                    <>
                      <h1 className='rounded-full bg-green-100 px-4 py-2 text-lg font-large text-green-800'>
                        Still in tournament
                      </h1>
                      <span className='flex justify-center text-4xl m-4'>
                        🥳
                      </span>
                    </>
                  ) : (
                    <>
                      <h1 className='rounded-full bg-red-900 px-4 py-2 text-lg font-large text-white'>
                        Out 😞
                      </h1>
                      <span className='flex justify-center text-4xl m-4'>
                        😞
                      </span>
                    </>
                  )}
                </div>
              </div>
            </li>
          )}
        </div>
      ))}
    </ul>
  );
};

export default TeamCard;
