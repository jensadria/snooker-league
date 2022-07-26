import { NextPage } from "next";
import TableRow from "./TableRow";

interface TableProps {
  tableData: { name: string; won: number; lost: number }[];
  children?: React.ReactNode;
}

const LeagueTable: NextPage<TableProps> = ({ tableData }) => {
  //  console.log(tableData);
  const computedTableData = tableData.map((team) => {
    let percentage;
    if (team.won === 0 && team.lost === 0) {
      percentage = 0;
    } else {
      percentage = +((team.won / (team.won + team.lost)) * 100).toFixed(2);
    }
    return { ...team, percentage: percentage.toFixed(2) };
  });

  return (
    <table className='w-full'>
      <thead>
        <tr className='border-b-2 border-green-700'>
          <th className='text-left w-5'>Rank</th>
          <th className='text-left'>Name</th>
          <th className='text-right'>Won</th>
          <th className='text-right'>Lost</th>
          <th className='text-right'>Win %</th>
        </tr>
      </thead>
      <tbody>
        {computedTableData
          .sort((a, b) => b.percentage - a.percentage)
          .map((team, index) => {
            return <TableRow team={team} key={team.name} index={index} />;
          })}
      </tbody>
    </table>
  );
};

export default LeagueTable;
