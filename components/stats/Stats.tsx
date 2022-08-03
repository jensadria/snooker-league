import { NextPage } from "next";
import { PlayerModel } from "../../models/player";
interface StatsProps {
  players: PlayerModel[];
}

const Stats: NextPage<StatsProps> = ({ players }) => {
  console.log(players);

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
            <th>Handicap</th>
          </tr>
        </thead>
        <tbody>
          {players?.map(
            ({
              player_id,
              name,
              team_name,
              frames_won,
              frames_lost,
              previous_handicap,
              total_frames,
            }) => {
              return (
                <tr key={player_id}>
                  <td>{name}</td>
                  <td>{team_name}</td>
                  <td className='text-right'>{frames_won}</td>
                  <td className='text-right'>{frames_lost}</td>
                  <td className='text-right'>{previous_handicap}</td>
                  <td className='text-right'>{total_frames}</td>
                  <td className='text-right'>
                    {total_frames <= 10 && previous_handicap / 2 + frames_lost * 5 - frames_won * 5}
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Stats;
