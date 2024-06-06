import React from "react";
import Navbar from "./../Navbar";
import Footer from "../Footer";

function index({ children }) {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center  md:w-[40%] md:mx-auto bg-gray-100">
      <Navbar />
        {children}
      <Footer />
    </div>
  );
}

export default index;
