import { Children } from "react";
import LayoutStyles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={LayoutStyles.container}>
      <div className={LayoutStyles.main}>{children}</div>
    </div>
  );
};

export default Layout;
