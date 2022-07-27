import { NextPage } from "next";
import Link from "next/link";
interface HeaderProps {
  children?: React.ReactNode;
}

const Header: NextPage<HeaderProps> = () => {
  const links = [
    { title: "Home", link: "/" },
    { title: "Table", link: "league-table" },
    { title: "Fixtures & Results", link: "fixtures" },
    { title: "Statistics", link: "/stats" },
    { title: "Rules", link: "/rules" },
  ];

  return (
    <>
      <header>
        {links.map((link) => {
          return (
            <Link href={link.link} key={link.title}>
              <a className='text-3xl p-3'>{link.title}</a>
            </Link>
          );
        })}
      </header>
    </>
  );
};

export default Header;
