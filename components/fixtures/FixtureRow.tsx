import { MatchModel } from "../../models/match";
import { useSession } from "next-auth/react";
import { FC } from "react";
import Link from "next/link";

interface FixtureRowProps {
  match: MatchModel;
}

const FixtureRow: FC<FixtureRowProps> = ({ match }) => {
  const { data: session, status } = useSession();

  return (
    <>
      <div className='flex align-center m-2'>
        <div className='w-2/12'>{match.location}</div>
        <div className='w-3/12 font-bold text-right'>{match.home_team}</div>
        <div className='w-1/12 text-right'>{match.home_score}</div>
        <div className='w-1/12 mx-2 text-center'>vs</div>
        <div className='w-1/12'>{match.away_score}</div>
        <div className='w-3/12 font-bold text-left'>{match.away_team}</div>
        <Link href={`/match/${match.match_id}`}>
          <a className='w-1/12 text-right hover:underline hover:decoration-green-500'>Details</a>
        </Link>
      </div>
    </>
  );
};

export default FixtureRow;
