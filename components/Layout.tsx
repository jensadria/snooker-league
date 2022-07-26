import { FunctionComponent } from "react";
import Header from "./Header";

type LayoutProps = {
  children?: React.ReactNode;
};

export const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header></Header>
      {children}
    </>
  );
};
