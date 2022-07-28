import { NextPage } from "next";
import Header from "./Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: NextPage<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
