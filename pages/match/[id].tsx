import { NextPage } from "next";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { MatchModel, emptyMatch } from "../../models/match";
import { FrameModel } from "../../models/frame";

const FixtureRow: NextPage = () => {
  const [matchDetails, setMatchDetails] = useState<MatchModel>(emptyMatch);
  const [matchFrames, setMatchFrames] = useState<FrameModel[]>([]);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      axios.get(`/api/matches/${id}`).then((res) => setMatchDetails(res.data));
      axios.get(`/api/frames/${id}`).then((res) => setMatchFrames(res.data));
    }
  }, [id]);

  return (
    <div className='w-4/5 mx-auto mt-5'>
      <div className='flex w-4/5 mx-auto'>
        <div className='mr-3'>
          {matchDetails.date ? format(new Date(matchDetails.date), "PPPP") : ""}
        </div>
        <div className='mr-3'>{matchDetails.location}</div>
        <div className='mr-3'>{matchDetails.home_team}</div>
        <div className='mr-3'>{matchDetails.away_team}</div>
      </div>
      <div className='w-4/5 mx-auto'>
        {matchFrames.length !== 0
          ? matchFrames.map((frame) => {
              return (
                <div className='flex justify-between' key={frame.frame_id}>
                  <div>{frame.player_home}</div>
                  <div>{frame.player_home_score}</div>
                  <div>{frame.player_away_score}</div>
                  <div>{frame.player_away}</div>
                </div>
              );
            })
          : "No Frames"}
      </div>
    </div>
  );
};

export default FixtureRow;
