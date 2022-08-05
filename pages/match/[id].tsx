import { format } from "date-fns";
import { FC, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import { useRouter } from "next/router";
import { MatchModel, emptyMatch } from "../../models/match";
import { FrameModel } from "../../models/frame";
import { PlayerModel } from "../../models/player";
import SubmitFrame from "../../components/fixtures/SubmitFrame";
import FrameRow from "../../components/fixtures/FrameRow";

const FixtureRow: FC = () => {
  const [matchDetails, setMatchDetails] = useState<MatchModel>(emptyMatch);
  const [players, setPlayers] = useState<PlayerModel[]>([]);
  const [frames, setFrames] = useState<FrameModel[]>([]);
  const [framesSubmitted, setFramesSubmitted] = useState<number>(0);
  const { data: session, status } = useSession();

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      axios.get(`/api/matches/${id}`).then((res) => setMatchDetails(res.data));
      axios.get(`/api/frames/`).then((res) => {
        setFrames(res.data);
        const framesQty = res.data
          .filter((frame) => frame.match_id === +id)
          .map((frame) => parseInt(frame.frame_nr))
          .reduce((acc, curr) => (!acc.includes(curr) ? acc.concat(curr) : acc), []);
        setFramesSubmitted(framesQty.length);
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

  console.log(framesSubmitted);

  return (
    <>
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
        <div>
          {homePlayers.map((frame, index) => {
            return (
              <FrameRow
                key={frame.frame_id}
                homePlayer={homePlayers[index]}
                awayPlayer={awayPlayers[index]}
              />
            );
          })}
        </div>
        <div>
          {session && framesSubmitted < 12 && (
            <SubmitFrame
              players={players}
              matchDetails={matchDetails}
              framesSubmitted={framesSubmitted}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default FixtureRow;
