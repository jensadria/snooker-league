import { NextPage } from "next";

interface LeagueTableProps {
  children: React.ReactNode;
}

const LeagueTable: NextPage<LeagueTableProps> = () => {
  return (
    <div className='w-4/5 mx-auto mt-8'>
      <div>The Official Rules can be found on the WPBSA website</div>
      <a href='https://wpbsa.com/rules/' className='hover:underline hover:decoration-green-500'>
        Official Rules for Snooker
      </a>
    </div>
  );
};

export default LeagueTable;
