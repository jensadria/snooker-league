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
  const [matchFrames, setMatchFrames] = useState<FrameModel[]>([]);

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      axios.get(`/api/matches/${id}`).then((res) => setMatchDetails(res.data));
      axios.get(`/api/frames/match/${id}`).then((res) => setMatchFrames(res.data));
    }
  }, [id]);

  console.log(matchDetails);
  console.log(matchFrames);

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
      <div className='w-4/5 mx-auto'>
        {matchFrames.length !== 0
          ? matchFrames.map((frame) => {
              return (
                <div className='flex justify-between mb-2 gap-5' key={frame.frame_id}>
                  <div
                    className={`w-1/2 justify-end flex ${winner(
                      frame.player_home_score,
                      frame.player_away_score
                    )}`}
                  >
                    <Link href={`/player/${frame.player_home_id}`}>
                      <a>
                        <div>{frame.player_home}</div>
                      </a>
                    </Link>

                    <div className='w-1/5 text-right'>{frame.player_home_score}</div>
                  </div>
                  <div
                    className={`w-1/2 justify-start flex ${winner(
                      frame.player_away_score,
                      frame.player_home_score
                    )}`}
                  >
                    <div className='w-1/5 text-left'>{frame.player_away_score}</div>
                    <div>{frame.player_away}</div>
                  </div>
                  {/*<div>{frame.player_away_score}</div>
                  <div className='w-2/5'>{frame.player_away}</div>*/}
                </div>
              );
            })
          : "No Frames"}
      </div>
    </div>
  );
};

export default FixtureRow;
