import { NextPage } from "next";
import { useState } from "react";
import Table from "../../components/table/Table";
import { TableRowModel } from "../../models/tableRow";
interface LeagueTableProps {
  children: React.ReactNode;
}

const mockLeagueTable: TableRowModel[] = [
  { name: "Jokers", won: 110, lost: 70 },
  { name: "Dark Horse", won: 103, lost: 77 },
  { name: "Jokers", won: 102, lost: 78 },
  { name: "Jokers", won: 94, lost: 86 },
  { name: "Jokers", won: 93, lost: 87 },
  { name: "Jokers", won: 83, lost: 97 },
  { name: "Jokers", won: 77, lost: 103 },
  { name: "Jokers", won: 58, lost: 122 },
];

const LeagueTable: NextPage<LeagueTableProps> = () => {
  const [tableData, setTableData] = useState(mockLeagueTable);
  return (
    <div>
      <Table tableData={tableData} />
    </div>
  );
};

export default LeagueTable;
