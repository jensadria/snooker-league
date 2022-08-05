import { MatchModel } from "../../models/match";
import FixtureRow from "./FixtureRow";
import { format } from "date-fns";
import { FC } from "react";

interface FixtureWeekProps {
  fixtureWeek: number | null;
  matches: MatchModel[];
  key: number | null;
}

const FixtureWeek: FC<FixtureWeekProps> = ({ fixtureWeek, matches }) => {
  const weekMatches = matches
    .filter((match) => match.match_week === fixtureWeek)
    .sort((a, b) => a.match_id - b.match_id);
  const matchDate = new Date(weekMatches[0].date);

  return (
    <div className='align-center m-2'>
      <div className='w-full  border-b-2 border-b-green-700 text-xl p-2'>
        {format(matchDate, "PPPP")}
      </div>
      {weekMatches.map((match) => {
        return <FixtureRow match={match} key={match.match_id} />;
      })}
    </div>
  );
};

export default FixtureWeek;
