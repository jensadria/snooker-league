import { NextPage } from "next";
import MainPageLink from "./MainPageLink";

const MainPage: NextPage = () => {
  const links = [
    { title: "League Table", link: "/league-table" },
    { title: "Fixtures", link: "/fixtures" },
    { title: "Statistics", link: "/stats" },
    { title: "Rules", link: "/rules" },
  ];
  return (
    <div>
      <h1 className='text-6xl font-bold mb-8 text-green-700'>Pot Black Snooker League</h1>
      <div className='align-center flex flex-col'>
        {links.map((link, index) => {
          return <MainPageLink link={link} key={index} />;
        })}
      </div>
    </div>
  );
};

export default MainPage;
