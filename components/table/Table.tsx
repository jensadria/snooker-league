import { NextPage } from "next";
import { TableRowModel } from "../../models/tableRow";
import TableRow from "./TableRow";

interface TableProps {
  tableData: TableRowModel[];
  children?: React.ReactNode;
}

const LeagueTable: NextPage<TableProps> = ({ tableData }) => {
  const computedTableData = tableData.map((team) => {
    return { ...team, percentage: +(team.won / team.lost).toFixed(2) };
  });

  return (
    <div>
      {computedTableData.map((team) => {
        return <TableRow team={team} key={team.name} />;
      })}
    </div>
  );
};

export default LeagueTable;
