import React from "react";

// Import components directly (no lazy loading)
import DecEventHero from "./DecEventHero";
import DecEventInfo from "./DecEventInfo";
import DecEventVideo from "./DecEventVideo";
import DecEventSponsor from "./DecEventSponsor";
import DecEventBaner from "./DecEventBaner";
import DecEventSpeaker from "./DecEventSpeaker";
import DecEventAgenda from "./DecEventAgenda";

const DecEvent = () => {
  return (
    <div>
      {/* Display components directly */}
      <DecEventHero />
      <DecEventInfo />
      <DecEventBaner />
      <DecEventSpeaker />
      <DecEventAgenda />
      <DecEventVideo />
      <DecEventSponsor />
    </div>
  );
};

export default DecEvent;
