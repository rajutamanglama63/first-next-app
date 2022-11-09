import { Children } from "react";
import LayoutStyles from "../styles/Layout.module.css";
import Header from "./Header";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={LayoutStyles.container}>
        <div className={LayoutStyles.main}>
          <Header />
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
