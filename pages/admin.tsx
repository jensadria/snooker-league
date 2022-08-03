import { NextPage } from "next";
import Link from "next/link";
import { useSession } from "next-auth/react";

//interface LeagueTableProps {
//  children: React.ReactNode;
//}

const AdminPage: NextPage = () => {
  const { data: session, status } = useSession();

  if (!session) {
    return (
      <div>
        <Link href='/api/auth/signin'>
          <a>You need to login to proceed</a>
        </Link>
      </div>
    );
  }

  if (session) {
    return <div>Test</div>;
  }
};

export default AdminPage;
