import React from "react";
import HeroPlacement from "./HeroPlacement"; // Adjust the import path as needed
import PartneredUniversities from "./PartneredUniversities";

const Placement = () => {
  return (
    <div>

      <div className="p-8">
        {/* Render the HeroPlacement component here */}
        <HeroPlacement />
        <PartneredUniversities />
      </div>

    </div>
  );
};

export default Placement;