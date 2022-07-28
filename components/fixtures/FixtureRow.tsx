import { NextPage } from "next";

//interface FixtureRowProps {
//	fixture: FixtureModel;
//}

const FixtureRow: NextPage<any> = ({ fixture }) => {
  return (
    <>
      <div>{fixture.home_team}</div>
      <div>{fixture.away_team}</div>;
    </>
  );
};

export default FixtureRow;
