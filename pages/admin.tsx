import { NextPage } from "next";
import { useSession } from "next-auth/react";
import Link from "next/link";

//interface LeagueTableProps {
//  children: React.ReactNode;
//}

const AdminPage: NextPage = () => {
  const { data: session, status } = useSession();

  return (
    <div>
      {session && (
        <Link href='/api/auth/signin'>
          <a>You need to login to proceed</a>
        </Link>
      )}
      {!session && (
        <div>
          <p>You are logged in</p>
          <br />
          <Link href='/api/auth/signin'>
            <a>Click Here To Log Out</a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
