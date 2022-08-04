import { NextPage } from "next";
import Link from "next/link";

interface MainPageLinkProps {
  link: { title: string; link: string };
}

const MainPageLink: NextPage<MainPageLinkProps> = ({ link }) => {
  return (
    <Link href={link.link}>
      <a className='font-semibold text-4xl py-2 hover:underline hover:decoration-green-700 w-fit'>
        {link.title}
      </a>
    </Link>
  );
};

export default MainPageLink;
