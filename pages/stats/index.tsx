import axios from "axios";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import Stats from "../../components/stats/Stats";
import { handicaps } from "../../models/handicaps";
import { PlayerModel } from "../../models/player";
import Button from "../../components/ui/Button";

type PlayerRowModel = PlayerModel & { handicap: number; win_percentage: number };

const currentHandicap = (won: number, lost: number, total: number, prev_handicap: number) => {
  if (!total) return prev_handicap;
  if (total <= 10) return prev_handicap / 2 + lost * 5 - won * 5;
  return handicaps[winPercentage(won, total)];
};

const winPercentage = (won, total) => {
  if (!total) return 0;
  return ((won / total) * 100).toFixed(2);
};

const Statistics: NextPage = () => {
  const [players, setPlayers] = useState<PlayerRowModel[]>([]);
  const [search, setSearch] = useState("");
  const [sortedBy, setSortedBy] = useState("percentage");

  useEffect(() => {
    axios.get(`/api/players`).then((res) => {
      const playersWithHandicaps = res.data.map((player) => {
        return {
          ...player,
          handicap: currentHandicap(
            player.frames_won,
            player.frames_lost,
            player.total_frames,
            player.previous_handicap
          ),
          win_percentage: winPercentage(player.frames_won, player.total_frames),
        };
      });
      setPlayers(playersWithHandicaps);
    });
  }, []);

  const filteredPlayers = players.filter((player) => {
    return player.name.toLowerCase().match(search) || player.team_name.toLowerCase().match(search);
  });

  if (sortedBy === "team") {
    filteredPlayers.sort((a, b) => a.team_name.localeCompare(b.team_name));
  }
  if (sortedBy === "handicap") filteredPlayers.sort((a, b) => a.handicap - b.handicap);
  if (sortedBy === "percentage")
    filteredPlayers.sort((a, b) => b.win_percentage - a.win_percentage);

  return (
    <div className='w-4/5 mx-auto mt-8'>
      <div id='filter-bar' className='flex justify-between'>
        <h1 className='text-4xl font-semibold mb-5'>Statistics</h1>
        <input
          type='search'
          name='search'
          id=''
          value={search}
          placeholder='Search Player...'
          className='bg-gray-200 w-96 rounded-md h-10 p-3'
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <div id='sort-buttons'>
          <Button
            onClick={() => {
              setSortedBy("team");
            }}
          >
            Sort By Team Name
          </Button>
          <Button
            onClick={() => {
              setSortedBy("percentage");
            }}
          >
            Sort By Win Percentage
          </Button>
          <Button
            onClick={() => {
              setSortedBy("handicap");
            }}
          >
            Sort By Handicap
          </Button>
        </div>
      </div>
      <Stats players={filteredPlayers} />
    </div>
  );
};

export default Statistics;
