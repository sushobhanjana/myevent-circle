import React from "react";
import Navbar from "./../Navbar";
import Footer from "../Footer";

function index({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default index;
