import React from "react";

// Import components directly (no lazy loading)
import DecEventHero from "./DecEventHero";
import DecEventInfo from "./DecEventInfo";
import DecEventVideo from "./DecEventVideo";
import DecEventSponsor from "./DecEventSponsor";

const DecEvent = () => {
  return (
    <div>
      {/* Display components directly */}
      <DecEventHero />
      <DecEventInfo />
      <DecEventVideo />
      <DecEventSponsor />
    </div>
  );
};

export default DecEvent;
