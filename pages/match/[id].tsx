import { NextPage } from "next";
import { format } from "date-fns";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { MatchModel, emptyMatch } from "../../models/match";
//import { FrameModel } from "../../models/frame";
import { PlayerModel } from "../../models/player";
import Link from "next/link";
import SubmitMatch from "../../components/fixtures/SubmitMatch";

const FixtureRow: NextPage = () => {
  const [matchDetails, setMatchDetails] = useState<MatchModel>(emptyMatch);
  const [players, setPlayers] = useState<PlayerModel[]>();
  const [framesSubmitted, setFramesSubmitted] = useState<number>(0);

  //  const awayTeamPlayer = useRef();

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      axios.get(`/api/matches/${id}`).then((res) => setMatchDetails(res.data));
      //  axios.get(`/api/frames/match/${id}`).then((res) => setMatchFrames(res.data));
      axios.get(`/api/players`).then((res) => setPlayers(res.data));
    }
  }, [id]);

  if (+matchDetails.home_score + +matchDetails.away_score === 12) {
    return <div>No scores to enter</div>;
  }

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
      {/*// HOME TEAM*/}
      <SubmitMatch players={players} matchDetails={matchDetails} />
    </div>
  );
};

export default FixtureRow;
