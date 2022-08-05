import { NextPage } from "next";
import { format } from "date-fns";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { MatchModel, emptyMatch } from "../../models/match";
import { FrameModel } from "../../models/frame";
import { PlayerModel } from "../../models/player";
import Link from "next/link";
import SubmitFrame from "../../components/fixtures/SubmitFrame";
import { compareSync } from "bcrypt";

const FixtureRow: NextPage = () => {
  const [matchDetails, setMatchDetails] = useState<MatchModel>(emptyMatch);
  const [players, setPlayers] = useState<PlayerModel[]>([]);
  const [frames, setFrames] = useState<FrameModel[]>([]);
  const [framesSubmitted, setFramesSubmitted] = useState<number>();

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      axios.get(`/api/matches/${id}`).then((res) => setMatchDetails(res.data));
      axios.get(`/api/frames/`).then((res) => {
        setFrames(res.data);
        const numberOfFrames = [
          ...new Set(
            res.data.filter((frame) => frame.match_id === +id).map((frame) => frame.frame_nr)
          ),
        ].length;
        setFramesSubmitted(numberOfFrames);
      });
      axios.get(`/api/players`).then((res) => setPlayers(res.data));
    }
  }, [id]);

  const matchFrames = frames?.filter((frame) => frame.match_id === matchDetails.match_id);

  const homePlayers = matchFrames
    .filter((frame) => frame.team_id === matchDetails.home_team_id)
    .sort((a, b) => a.frame_nr - b.frame_nr);
  const awayPlayers = matchFrames
    .filter((frame) => frame.team_id === matchDetails.away_team_id)
    .sort((a, b) => a.frame_nr - b.frame_nr);

  //  console.log(framesSubmitted);

  return (
    <div className='w-4/5 mx-auto mt-5'>
      <div className='w-4/5 mx-auto border-b-2 border-b-green-700 text-center mb-5'>
        <div className='mr-5 text-2xl'>
          {matchDetails.date ? format(new Date(matchDetails.date), "PPPP") : ""}
        </div>
        <div className='mr-5 text-2xl font-bold'>
          {matchDetails.home_team} VS {matchDetails.away_team}
        </div>
        <div className='mr-5 text-2xl italic'>{matchDetails.location}</div>
      </div>
      {/*// HOME TEAM*/}
      {framesSubmitted < 12 && <SubmitFrame players={players} matchDetails={matchDetails} />}
    </div>
  );
};

export default FixtureRow;
