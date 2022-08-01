import axios from "axios";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { MatchModel } from "../../models/match";
import FixtureWeek from "../../components/fixtures/FixtureWeek";
//import GetData from "../../utils/dataFetcher";

//interface FixturesProps {}

const Fixtures: NextPage = () => {
  const [matches, setMatches] = useState<MatchModel[]>([]);

  useEffect(() => {
    axios.get("/api/matches").then((res) => setMatches(res.data));
    //  const fetchedFixtures = GetData.getAllFixtures();
    //  setFixtures(fetchedFixtures);
  }, []);

  const fixtureWeeks = Array.from(new Set(matches.map((match) => match.match_week)));

  return (
    <div className='w-4/5 mx-auto'>
      {fixtureWeeks.map((fixtureWeek) => {
        return <FixtureWeek fixtureWeek={fixtureWeek} matches={matches} key={fixtureWeek} />;
      })}
    </div>
  );
};

export default Fixtures;
