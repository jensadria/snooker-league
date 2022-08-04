import { NextPage } from "next";
import { MatchModel } from "../../models/match";
import { useSession } from "next-auth/react";
import { format } from "date-fns";
import { useState } from "react";
import Link from "next/link";

interface FixtureRowProps {
  match: MatchModel;
}

const FixtureRow: NextPage<FixtureRowProps> = ({ match }) => {
  const { data: session, status } = useSession();

  return (
    //<Link href={`/match/${match.match_id}`}>

    <div className='flex align-center m-2'>
      <div className='w-72'>{match.location}</div>
      <div className='w-72'>{match.home_team}</div>
      <div>{match.home_score}</div>
      <div className='mx-2'>VS</div>
      <div>{match.away_score}</div>
      <div className='w-72 text-right'>{match.away_team}</div>
      {session && (
        <Link href={`/match/${match.match_id}`} className='bg-green-700'>
          Enter Scores
        </Link>
      )}
    </div>

    //</Link>
  );
};

export default FixtureRow;
