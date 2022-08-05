import { NextPage } from "next";

interface LeagueTableProps {
  children: React.ReactNode;
}

const LeagueTable: NextPage<LeagueTableProps> = () => {
  return (
    <div className='w-4/5 mx-auto mt-8 flex flex-col'>
      <a
        href='https://wpbsa.com/rules/'
        className='font-semibold text-3xl py-2 hover:underline hover:decoration-green-700 w-fit'
      >
        Official Rules for Snooker
      </a>
      <a
        href='https://pbcentre.com.au/wp-content/uploads/2022/05/Snooker-League-By-Laws.pdf'
        className='font-semibold text-3xl py-2 hover:underline hover:decoration-green-700 w-fit'
      >
        Snooker League By-Laws
      </a>
    </div>
  );
};

export default LeagueTable;
