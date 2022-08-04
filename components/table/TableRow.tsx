import { NextPage } from "next";
import { TableRowModel } from "../../models/tableRow";

interface TableRowProps {
  team: { name: string; won: number; lost: number; percentage: number };
  index: number;
}

const TableRow: NextPage<TableRowProps> = ({ team, index }) => {
  return (
    <tr>
      <td className='text-3xl'>{index + 1}</td>
      <td className='text-3xl font-medium'>{team.name}</td>
      <td className='text-3xl text-right'>{team.won}</td>
      <td className='text-3xl text-right'>{team.lost}</td>
      <td className='text-3xl text-right'>{team.percentage}</td>
    </tr>
  );
};

export default TableRow;
