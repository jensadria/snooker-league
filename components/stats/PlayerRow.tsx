import { NextPage } from "next";
import Link from "next/link";
import { PlayerModel } from "../../models/player";

type PlayerRowModel = PlayerModel & { handicap: number; win_percentage: number };

interface PlayerRowProps {
  players: PlayerRowModel[];
}

const PlayerRow: NextPage<PlayerRowProps> = ({ players }) => {
  return (
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
          handicap,
          win_percentage,
        }) => {
          return (
            <tr key={player_id}>
              <td>
                <Link href={`/players/${player_id}`}>
                  <a className='hover:underline-offset-2 hover:underline hover:decoration-green-500'>
                    {name}
                  </a>
                </Link>
              </td>
              <td>{team_name}</td>
              <td className='text-right'>{frames_won}</td>
              <td className='text-right'>{frames_lost}</td>
              <td className='text-right'>{previous_handicap}</td>
              <td className='text-right'>{total_frames}</td>
              <td className='text-right'>{win_percentage}</td>
              <td className='text-right'>{handicap}</td>
            </tr>
          );
        }
      )}
    </tbody>
  );
};

export default PlayerRow;
