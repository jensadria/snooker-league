import Link from "next/link";
import { FunctionComponent } from "react";

interface HeaderProps {
  children?: React.ReactNode;
}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <>
      <header>
        <Link href='/league-table'>Table</Link>
      </header>
    </>
  );
};

export default Header;
