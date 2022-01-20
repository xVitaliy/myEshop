import React from "react";
import Copyright from "../components/copyright";
import Footer from "../components/footer";
import Header from "../components/header";
import classes from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={classes.mainWrapper}>
      <Header />
      <main className={classes.main}>{children}</main>
      <Footer />
      <Copyright />
    </div>
  );
};

export default Layout;
