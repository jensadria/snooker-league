import axios from "axios";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import Stats from "../../components/stats/Stats";
import { PlayerModel } from "../../models/player";

//interface StatisticsProps {
//  children: React.ReactNode;
//}

const Statistics: NextPage = () => {
  const [players, setPlayers] = useState<PlayerModel[]>([]);

  useEffect(() => {
    axios.get(`/api/players`).then((res) => setPlayers(res.data));
  }, []);

  return (
    <div className='w-4/5 mx-auto'>
      <Stats players={players} />
    </div>
  );
};

export default Statistics;
