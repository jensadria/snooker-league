import { NextPage } from "next";
import { format } from "date-fns";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { MatchModel, emptyMatch } from "../../models/match";
//import { FrameModel } from "../../models/frame";
import { PlayerModel } from "../../models/player";
import Link from "next/link";

const FixtureRow: NextPage = () => {
  const [matchDetails, setMatchDetails] = useState<MatchModel>(emptyMatch);
  const [players, setPlayers] = useState<PlayerModel[]>();
  const [framesSubmitted, setFramesSubmitted] = useState<number>(0);
  const [selectedHomePlayerID, setSelectedHomePlayerID] = useState<number>();
  const [selectedAwayPlayerID, setSelectedAwayPlayerID] = useState<number>();
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

  const homeTeamPlayers = players?.filter((player) => player.team_name === matchDetails.home_team);
  const awayTeamPlayers = players?.filter((player) => player.team_name === matchDetails.away_team);

  const handleSubmitScore = (e) => {
    e.preventDefault();
    console.log(selectedHomePlayerID);
    console.log(selectedAwayPlayerID);
    console.log(matchDetails.match_id);
  };

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
      <form>
        {/*// HOME TEAM*/}
        <div className='w-4/5 mx-auto mt-5 flex'>
          <select
            name='home_team'
            id=''
            className='flex-1'
            onChange={(e) => setSelectedHomePlayerID(e.target.value)}
          >
            <option value='select'>Select Player...</option>
            {homeTeamPlayers?.map(({ player_id, name }) => {
              return (
                <option key={player_id} value={player_id}>
                  {name}
                </option>
              );
            })}
          </select>
          {/* RADIO BUTTONS */}
          <div className='w-1/6 text-center flex justify-evenly'>
            <input type='radio' id='home_win' value='home' name='winner' />
            <label htmlFor='home_win'>Home</label>
            <input type='radio' id='away_win' value='away' name='winner' />
            <label htmlFor='away_win'>Away</label>
          </div>
          {/* AWAY TEAM */}
          <select
            name='away_team'
            id=''
            className='flex-1'
            value='select'
            onChange={(e) => setSelectedAwayPlayerID(e.target.value)}
          >
            <option value='select'>Select Player...</option>
            {awayTeamPlayers?.map(({ player_id, name }) => {
              return (
                <option key={player_id} value={player_id}>
                  {name}
                </option>
              );
            })}
          </select>
          <button className='w-1/6' onClick={handleSubmitScore}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FixtureRow;
