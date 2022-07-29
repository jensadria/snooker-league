import axios from "axios";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import FixtureRow from "../../components/fixtures/FixtureRow";
import { FixtureModel } from "../../models/fixture";
//import GetData from "../../utils/dataFetcher";

//interface FixturesProps {}

const Fixtures: NextPage = () => {
  const [fixtures, setFixtures] = useState<FixtureModel[]>([]);

  useEffect(() => {
    axios.get("/api/fixtures").then((res) => setFixtures(res.data));
    //  const fetchedFixtures = GetData.getAllFixtures();
    //  setFixtures(fetchedFixtures);
  }, []);

  console.log(fixtures);

  return (
    <div>
      {fixtures.map((fixture) => {
        return <FixtureRow fixture={fixture} key={fixture.fixture_id} />;
      })}
    </div>
  );
};

export default Fixtures;
