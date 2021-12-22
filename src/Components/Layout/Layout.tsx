import React from "react";
import Navbar from "../Navbar/Navbar";
import classes from "./Layout.module.css";

const Layout: React.FC = ({ children }) => {
  return (
    <section>
      <Navbar />
      <main className={classes.main}>{children}</main>
    </section>
  );
};

export default Layout;
