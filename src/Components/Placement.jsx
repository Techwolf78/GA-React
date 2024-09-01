import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Placement = () => {
  return (
    <div>
      <Navbar />
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-4">Placement</h1>
        <p className="text-xl">Detailed placement information goes here.</p>
      </div>
      <Footer />
    </div>
  );
};

export default Placement;
