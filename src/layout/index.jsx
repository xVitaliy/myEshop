import React from "react";
import Copyright from "../components/copyright";
import Footer from "../components/footer";
import Header from "../components/header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
      <Copyright />
    </div>
  );
};

export default Layout;
