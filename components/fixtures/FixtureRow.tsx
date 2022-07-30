import { NextPage } from "next";
import { MatchModel } from "../../models/match";
import { format } from "date-fns";

interface FixtureRowProps {
  match: MatchModel;
}

const FixtureRow: NextPage<FixtureRowProps> = ({ match }) => {
  return (
    <div className='flex align-center m-2'>
      <div className='w-72'>{match.location}</div>
      <div className='w-72'>{match.home_team}</div>
      <div>{match.home_score}</div>
      <div className='mx-2'>VS</div>
      <div>{match.away_score}</div>
      <div className='w-72 text-right'>{match.away_team}</div>
    </div>
  );
};

export default FixtureRow;
