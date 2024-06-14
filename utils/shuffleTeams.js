import fs from 'fs';
import path from 'path';
import { defaultTeams } from '../pages/api/data';
import { teamOwners } from '../pages/api/people';

// Function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export function shuffleAndAssignTeams() {
  const teamsCopy = [...defaultTeams];
  const ownersCopy = [...teamOwners];

  // Shuffle both arrays
  shuffleArray(teamsCopy);
  shuffleArray(ownersCopy);

  // Assign each owner to one team, leave the rest as "To be drawn"
  teamsCopy.forEach((team, index) => {
    team.teamOwner =
      index < ownersCopy.length ? ownersCopy[index] : 'To be drawn';
  });

  // Write the shuffled teams to a JSON file
  const filePath = path.join(process.cwd(), 'teams.json');
  fs.writeFileSync(filePath, JSON.stringify(teamsCopy, null, 2));
}
