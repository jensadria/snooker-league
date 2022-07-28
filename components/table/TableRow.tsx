import { NextPage } from "next";
import { TableRowModel } from "../../models/tableRow";

interface TableRowProps {
  team: { name: string; won: number; lost: number; percentage: number };
  index: number;
}

const TableRow: NextPage<TableRowProps> = ({ team, index }) => {
  return (
    <div className='flex container w-4/5'>
      <div>{index + 1}</div>
      <div className='mr-auto'>{team.name}</div>
      <div className='mr-3'>{team.won}</div>
      <div className='mr-3'>{team.lost}</div>
      <div className='mr-3'>{team.percentage}</div>
    </div>
  );
};

export default TableRow;
