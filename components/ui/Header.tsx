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
      <header className='flex bg-black'>
        {links.map((link) => {
          return (
            <Link href={link.link} key={link.title}>
              <a className='text-2xl p-3 text-white hover:text-red-600'>{link.title}</a>
            </Link>
          );
        })}
      </header>
    </>
  );
};

export default Header;
