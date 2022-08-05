import axios from "axios";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { MatchModel } from "../../models/match";
import { PlayerModel } from "../../models/player";
import Button from "../../components/ui/Button";
import Router from "next/router";

//import { MatchModel } from "../../models/match";

interface SubmitFrameProps {
  players: PlayerModel[];
  matchDetails: MatchModel;
  framesSubmitted: number;
}

const SubmitFrame: NextPage<SubmitFrameProps> = ({ players, matchDetails, framesSubmitted }) => {
  const [selectedHomePlayerID, setSelectedHomePlayerID] = useState<number>(0);
  const [selectedAwayPlayerID, setSelectedAwayPlayerID] = useState<number>(0);
  const [selectedWinner, setSelectedWinner] = useState<string>("home");

  const homeTeamPlayers = players?.filter((player) => player.team_name === matchDetails.home_team);
  const awayTeamPlayers = players?.filter((player) => player.team_name === matchDetails.away_team);

  const handleSubmitScore = (e) => {
    const data = {
      homePlayer: {
        frame_nr: framesSubmitted + 1,
        match_id: matchDetails.match_id,
        player_id: selectedHomePlayerID,
        score: selectedWinner === "home" ? 1 : 0,
        location: "home",
      },
      awayPlayer: {
        frame_nr: framesSubmitted + 1,
        match_id: matchDetails.match_id,
        player_id: selectedAwayPlayerID,
        score: selectedWinner === "away" ? 1 : 0,
        location: "away",
      },
    };

    axios
      .post("/api/frames/", data)
      .then((res) => (window.location.href = `/match/${matchDetails.match_id}`));
  };

  return (
    <div>
      <div className='w-4/5 mx-auto pt-8 border-t-2 flex'>
        <select
          name='home_team'
          id=''
          className='flex-1 bg-gray-200 rounded-md'
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
        <div className='w-1/6 text-center flex justify-evenly align-middle'>
          <label htmlFor='home_win'>Home</label>
          <input
            type='radio'
            id='home_win'
            value='home'
            name='winner'
            checked={selectedWinner === "home"}
            onChange={(e) => setSelectedWinner(e.target.value)}
          />
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
          className='flex-1 bg-gray-200 rounded-md'
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
        <Button onClick={handleSubmitScore}>Submit</Button>
      </div>
    </div>
  );
};

export default SubmitFrame;
