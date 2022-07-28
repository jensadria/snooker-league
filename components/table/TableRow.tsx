import { NextPage } from "next";
import { TableRowModel } from "../../models/tableRow";

interface TableRowProps {
  team: { name: string; won: number; lost: number; percentage: number };
}

const TableRow: NextPage<TableRowProps> = ({ team }) => {
  return (
    <div className='flex'>
      <div>{team.name}</div>
      <div>{team.won}</div>
      <div>{team.lost}</div>
      <div>{team.percentage}</div>
    </div>
  );
};

export default TableRow;
