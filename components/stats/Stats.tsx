import { NextPage } from "next";
import { PlayerModel } from "../../models/player";
import PlayerRow from "../../components/stats/PlayerRow";

type PlayerRowModel = PlayerModel & { handicap: number; win_percentage: number };

interface StatsProps {
  players: PlayerRowModel[];
}

const Stats: NextPage<StatsProps> = ({ players }) => {
  return (
    <div className='align-center m-2'>
      <table className='w-full'>
        <thead>
          <tr className='text-left'>
            <th className='w-3/12'>Name</th>
            <th className='w-3/12'>Team</th>
            <th className='text-right'>Won</th>
            <th className='text-right'>Lost</th>
            <th className='text-right'>Last Year&apos;s Handicap</th>
            <th className='text-right'>Total Frames</th>
            <th className='text-right'>Win Percentage</th>
            <th className='text-right'>Handicap</th>
          </tr>
        </thead>
        <PlayerRow players={players} />
      </table>
    </div>
  );
};

export default Stats;
