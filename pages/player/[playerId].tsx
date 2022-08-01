import axios from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { PlayerModel } from "../../models/player";
import { format } from "date-fns";

interface Frame {
  date: string;
  frame_nr: number;
  highest_break: number | null;
  highest_break_score: number | null;
  frame_id: number;
  location: string;
  match_week: number;
  player_away: string;
  player_away_score: number;
  player_away_team: string;
  player_home: string;
  player_home_score: string;
  player_home_team: string;
}

const LeagueTable: NextPage = () => {
  const [playerDetails, setPlayerDetails] = useState<PlayerModel>();
  const [playerFrames, setPlayerFrames] = useState<Frame[]>();

  const router = useRouter();
  const { playerId } = router.query;

  useEffect(() => {
    if (playerId) {
      axios.get(`/api/players/${playerId}`).then((res) => setPlayerDetails(res.data));
      axios.get(`/api/frames/player/${playerId}`).then((res) => setPlayerFrames(res.data));
    }
  }, [playerId]);

  console.log(playerDetails);
  console.log(playerFrames);

  return (
    <div className='w-4/5 m-auto'>
      {playerDetails && (
        <div>
          <div className='text-3xl font-semibold'>{playerDetails.name}</div>
          <div className='text-3xl font-semibold'>{playerDetails.team_name}</div>
        </div>
      )}
      {playerFrames && (
        <div>
          {playerFrames.map((frame) => {
            return (
              <div key={frame.frame_id} className='flex'>
                <div>{frame.date}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LeagueTable;
