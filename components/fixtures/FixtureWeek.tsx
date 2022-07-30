import { NextPage } from "next";
import { MatchModel } from "../../models/match";
import FixtureRow from "./FixtureRow";
import { format } from "date-fns";

interface FixtureWeekProps {
  fixtureWeek: number;
  matches: MatchModel[];
  key: number;
}

const FixtureWeek: NextPage<FixtureWeekProps> = ({ fixtureWeek, matches }) => {
  const weekMatches = matches.filter((match) => match.match_week === fixtureWeek);
  const matchDate = new Date(weekMatches[0].date);

  return (
    <div className='align-center m-2'>
      <div className='w-full  border-b-2 border-b-green-500 text-xl p-2'>
        {format(matchDate, "PPPP")}
      </div>
      {weekMatches.map((match) => {
        return <FixtureRow match={match} key={match.match_id} />;
      })}
    </div>
  );
};

export default FixtureWeek;
