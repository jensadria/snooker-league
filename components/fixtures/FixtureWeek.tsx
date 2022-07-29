import { NextPage } from "next";
import { FixtureModel } from "../../models/fixture";
import FixtureRow from "./FixtureRow";
import { format } from "date-fns";

interface FixtureWeekProps {
  fixtureWeek: number;
  fixtures: FixtureModel[];
  key: number;
}

const FixtureWeek: NextPage<FixtureWeekProps> = ({ fixtureWeek, fixtures }) => {
  const weekFixtures = fixtures.filter((fixture) => fixture.fixture_week === fixtureWeek);
  const fixtureDate = new Date(weekFixtures[0].date);

  return (
    <div className='align-center m-2'>
      <div>{format(fixtureDate, "PPPP")}</div>
      {weekFixtures.map((fixture) => {
        return <FixtureRow fixture={fixture} key={fixture.fixture_id} />;
      })}
    </div>
  );
};

export default FixtureWeek;
