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
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get(`/api/players`).then((res) => setPlayers(res.data));
  }, []);

  const filteredPlayers = players.filter((player) => {
    return player.name.toLowerCase().match(search) || player.team_name.toLowerCase().match(search);
  });

  return (
    <div className='w-4/5 mx-auto'>
      <input
        type='search'
        name='search'
        id=''
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
      <Stats players={filteredPlayers} />
    </div>
  );
};

export default Statistics;
