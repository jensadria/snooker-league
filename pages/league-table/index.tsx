import axios from "axios";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import Table from "../../components/table/Table";
import { MatchModel } from "../../models/match";
import { TeamModel } from "../../models/team";

const mockLeagueTable: {
  name: string;
  won: number;
  lost: number;
}[] = [
  { name: "Jokers", won: 110, lost: 70 },
  { name: "Dark Horse", won: 103, lost: 77 },
  { name: "Titans", won: 102, lost: 78 },
  { name: "Centurians", won: 94, lost: 86 },
  { name: "North Perth Stars", won: 93, lost: 87 },
  { name: "Shooters", won: 83, lost: 97 },
  { name: "168", won: 77, lost: 103 },
  { name: "Kids", won: 58, lost: 122 },
];

const LeagueTable: NextPage = () => {
  const [matches, setMatches] = useState<MatchModel[]>([]);
  const [teams, setTeams] = useState<TeamModel[]>([]);
  const [tableData, setTableData] = useState(mockLeagueTable);

  useEffect(() => {
    axios.get("/api/matches").then((res) => setMatches(res.data));
    axios.get("/api/teams").then((res) => setTeams(res.data));
  }, []);

  const leagueTableData = teams.map((team) => {
    const matchesPlayed = matches.filter((match) => {
      return match.home_team_id === team.team_id;
    });
    let wins = 0;
    let lost = 0;

    matchesPlayed.forEach((match) => {
      if (match.home_team_id === team.team_id) {
        wins += +match.home_score;
        lost += +match.away_score;
      } else if (match.away_team_id === team.team_id) {
        wins += +match.away_score;
        lost += +match.home_score;
      }
    });

    //console.log(matchesPlayed);
    //console.log(wins);
    //console.log(lost);

    return { name: team.name, wins: wins, lost: lost };
  });

  //  console.log(leagueTableData);

  return (
    <div className='w-4/5 mx-auto mt-8'>
      <h1 className='text-4xl font-semibold mb-5'>League Table</h1>
      <Table tableData={tableData} />
    </div>
  );
};

export default LeagueTable;
