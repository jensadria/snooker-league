import { NextPage } from "next";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { MatchModel, emptyMatch } from "../../models/match";
import { FrameModel } from "../../models/frame";
import Link from "next/link";

const FixtureRow: NextPage = () => {
  const [matchDetails, setMatchDetails] = useState<MatchModel>(emptyMatch);
  const [players, setPlayers] = useState<[] | undefined>();
  const [matchFrames, setMatchFrames] = useState<FrameModel[]>([]);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      axios.get(`/api/matches/${id}`).then((res) => setMatchDetails(res.data));
      //  axios.get(`/api/frames/match/${id}`).then((res) => setMatchFrames(res.data));
      axios.get(`/api/players`).then((res) => setPlayers(res.data));
    }
  }, [id]);

  const homeTeamPlayers = players?.filter((player) => player.team_name === matchDetails.home_team);
  const awayTeamPlayers = players?.filter((player) => player.team_name === matchDetails.away_team);

  console.log(matchDetails);
  console.log(matchFrames);
  console.log(homeTeamPlayers);
  console.log(awayTeamPlayers);

  const winner = (score, oppScore) => {
    return score > oppScore && "bg-green-200";
  };

  return (
    <div className='w-4/5 mx-auto mt-5'>
      <div className='w-4/5 mx-auto border-b-2 border-b-green-500 text-center mb-5'>
        <div className='mr-5 text-2xl'>
          {matchDetails.date ? format(new Date(matchDetails.date), "PPPP") : ""}
        </div>
        <div className='mr-5 text-2xl font-bold'>
          {matchDetails.home_team} VS {matchDetails.away_team}
        </div>
        <div className='mr-5 text-2xl italic'>{matchDetails.location}</div>
      </div>
    </div>
  );
};

export default FixtureRow;
