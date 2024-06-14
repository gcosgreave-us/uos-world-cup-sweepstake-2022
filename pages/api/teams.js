import fs from 'fs';
import path from 'path';
import { shuffleAndAssignTeams } from '../../utils/shuffleTeams';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'teams.json');

  if (!fs.existsSync(filePath)) {
    shuffleAndAssignTeams();
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const teams = JSON.parse(fileContents);
  res.status(200).json(teams);
}
