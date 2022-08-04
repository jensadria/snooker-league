import { NextPage } from "next";
import { PlayerModel } from "../../models/player";
import PlayerRow from "../../components/stats/PlayerRow";
interface StatsProps {
  players: PlayerModel[];
}

const Stats: NextPage<StatsProps> = ({ players }) => {
  return (
    <div className='align-center m-2'>
      <table>
        <thead>
          <tr className='text-left'>
            <th className='w-80'>Name</th>
            <th className='w-64'>Team</th>
            <th>Won</th>
            <th>Lost</th>
            <th>Last Year&apos;s Handicap</th>
            <th>Total Frames</th>
            <th>Win Percentage</th>
            <th>Handicap</th>
          </tr>
        </thead>
        <PlayerRow players={players} />
      </table>
    </div>
  );
};

export default Stats;
