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
        <div className=' w-4/5 mx-auto'>
          {links.map((link) => {
            return (
              <Link href={link.link} key={link.title}>
                <a className='text-2xl p-3 text-white hover:text-red-600'>{link.title}</a>
              </Link>
            );
          })}
        </div>
      </header>
    </>
  );
};

export default Header;
