import axios from "axios";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { FixtureModel } from "../../models/fixture";
import FixtureWeek from "../../components/fixtures/FixtureWeek";
//import GetData from "../../utils/dataFetcher";

//interface FixturesProps {}

const Fixtures: NextPage = () => {
  const [fixtures, setFixtures] = useState<FixtureModel[]>([]);

  useEffect(() => {
    axios.get("/api/fixtures").then((res) => setFixtures(res.data));
    //  const fetchedFixtures = GetData.getAllFixtures();
    //  setFixtures(fetchedFixtures);
  }, []);

  const fixtureWeeks = Array.from(new Set(fixtures.map((fixture) => fixture.fixture_week)));
  console.log(fixtureWeeks);

  return (
    <div className='w-4/5 mx-auto'>
      {fixtureWeeks.map((fixtureWeek) => {
        return <FixtureWeek fixtureWeek={fixtureWeek} fixtures={fixtures} key={fixtureWeek} />;
      })}
    </div>
  );
};

export default Fixtures;
