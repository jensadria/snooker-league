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
  const [playerFixtures, setPlayerFixtures] = useState();

  const router = useRouter();
  const { playerId } = router.query;

  useEffect(() => {
    if (playerId) {
      fetchData();
    }
  }, []);

  const fetchData = async () => {
    const playerDetailsResponse = await axios.get(`/api/players/${playerId}`);
    setPlayerDetails(playerDetailsResponse.data);
    const playerFramesResponse = await axios.get(`/api/frames/player/${playerId}`);
    setPlayerFrames(playerFramesResponse.data);
    const playerFixturesResponse = await axios.get(`/api/frames/team/${playerDetails.team_id}`);
    setPlayerFixtures(playerFixturesResponse.data);
  };

  console.log(playerFixtures);

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
                <div>{format(new Date(frame.date), "PPPP")}</div>
                <div>{frame.match_week}</div>
                <div>{frame.player_home}</div>
                <div>{frame.player_home_score}</div>
                <div>{frame.player_away_score}</div>
                <div>{frame.player_away}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LeagueTable;
