import { NextPage } from "next";
import { totalmem } from "os";
import { PlayerModel } from "../../models/player";
import handicaps from "../../models/handicaps";
interface StatsProps {
  players: PlayerModel[];
}

const Stats: NextPage<StatsProps> = ({ players }) => {
  console.log(players);

  const currentHandicap = (won: number, lost: number, total: number, prev_handicap: number) => {
    if (!total) return prev_handicap;
    if (total <= 10) return prev_handicap / 2 + lost * 5 - won * 5;
    return handicaps[winPercentage(won, total)];
  };

  const winPercentage = (won, total) => {
    if (!total) return 0;
    return ((won / total) * 100).toFixed(2);
  };

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
                  <td className='text-right'>{winPercentage(frames_won, total_frames)}</td>
                  <td className='text-right'>
                    {currentHandicap(frames_won, frames_lost, total_frames, previous_handicap)}
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
