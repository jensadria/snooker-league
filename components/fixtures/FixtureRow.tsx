import { NextPage } from "next";
import { FixtureModel } from "../../models/fixture";
import { format } from "date-fns";

interface FixtureRowProps {
  fixture: FixtureModel;
}

const FixtureRow: NextPage<FixtureRowProps> = ({ fixture }) => {
  return (
    <div className='flex align-center m-2'>
      <div className='w-72'>{fixture.home_team}</div>
      <div className='w-72 text-right'>{fixture.away_team}</div>
    </div>
  );
};

export default FixtureRow;
