import axios from "axios";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { MatchModel } from "../../models/match";
import { PlayerModel } from "../../models/player";
//import { MatchModel } from "../../models/match";

interface SubmitMatchProps {
  players: PlayerModel[];
  matchDetails: MatchModel;
}

const SubmitMatch: NextPage<SubmitMatchProps> = ({ players, matchDetails }) => {
  const [selectedHomePlayerID, setSelectedHomePlayerID] = useState<number>(0);
  const [selectedAwayPlayerID, setSelectedAwayPlayerID] = useState<number>(0);
  const [selectedWinner, setSelectedWinner] = useState<string>("home");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const homeTeamPlayers = players?.filter((player) => player.team_name === matchDetails.home_team);
  const awayTeamPlayers = players?.filter((player) => player.team_name === matchDetails.away_team);

  const handleSubmitScore = (e) => {
    console.log(selectedHomePlayerID);
    console.log(selectedAwayPlayerID);
    console.log(matchDetails.match_id);
    console.log(selectedWinner);
  };

  useEffect(() => {
    axios.get("/api/frames");
  });

  return (
    <div>
      <div className='w-4/5 mx-auto mt-5 flex'>
        <select
          name='home_team'
          id=''
          className='flex-1'
          value={selectedHomePlayerID}
          onChange={(e) => setSelectedHomePlayerID(+e.target.value)}
        >
          <option value='0'>Select Player...</option>
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
          <input
            type='radio'
            id='home_win'
            value='home'
            name='winner'
            checked={selectedWinner === "home"}
            onChange={(e) => setSelectedWinner(e.target.value)}
          />
          <label htmlFor='home_win'>Home</label>
          <input
            type='radio'
            id='away_win'
            value='away'
            name='winner'
            checked={selectedWinner === "away"}
            onChange={(e) => setSelectedWinner(e.target.value)}
          />
          <label htmlFor='away_win'>Away</label>
        </div>
        {/* AWAY TEAM */}
        <select
          name='away_team'
          id=''
          className='flex-1'
          value={selectedAwayPlayerID}
          onChange={(e) => setSelectedAwayPlayerID(+e.target.value)}
        >
          <option value='0'>Select Player...</option>
          {awayTeamPlayers?.map(({ player_id, name }) => {
            return (
              <option key={player_id} value={player_id}>
                {name}
              </option>
            );
          })}
        </select>
        {!submitted && (
          <button className='w-1/6' onClick={handleSubmitScore}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default SubmitMatch;
