import React from "react";
import Footer from "./Footer";
// import Header from "./Header";
import Navbar from "./Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
