import { NextPage } from "next";
import { TableRowModel } from "../../models/tableRow";
import TableRow from "./TableRow";

interface TableProps {
  tableData: TableRowModel[];
  children?: React.ReactNode;
}

const LeagueTable: NextPage<TableProps> = ({ tableData }) => {
  const computedTableData = tableData.map((team) => {
    return { ...team, percentage: +((team.won / (team.won + team.lost)) * 100).toFixed(2) };
  });

  return (
    <div>
      {computedTableData
        .sort((a, b) => b.percentage - a.percentage)
        .map((team, index) => {
          return <TableRow team={team} key={team.name} index={index} />;
        })}
    </div>
  );
};

export default LeagueTable;
