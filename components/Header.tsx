import { NextPage } from "next";
import Link from "next/link";
//import { FunctionComponent } from "react";

interface HeaderProps {
  children?: React.ReactNode;
}

const Header: NextPage<HeaderProps> = () => {
  return (
    <>
      <header>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/league-table'>
          <a>Table</a>
        </Link>
        <Link href='/fixtures'>
          <a>Fixtures & Results</a>
        </Link>
        <Link href='/stats'>
          <a>Statistics</a>
        </Link>
      </header>
    </>
  );
};

export default Header;
