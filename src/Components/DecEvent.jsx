import React from "react";

// Import components directly (no lazy loading)
import DecEventHero from "./DecEventHero";
import DecEventInfo from "./DecEventInfo";
import DecEventVideo from "./DecEventVideo";
import DecEventSponsor from "./DecEventSponsor";
import DecEventBaner from "./DecEventBaner";
import DecEventSpeaker from "./DecEventSpeaker";
import DecEventAgenda from "./DecEventAgenda";
import DecEventGuest from "./DecEventGuest";
import DecEventHighLights from "./DecEventHighLights";
import DecEventSlider from "./DecEventSlider";
import DecEventBoundary from "./DecEventBoundary";
import DecEventArrivedGuest from "./DecEventArrivedGuest";

const DecEvent = () => {
  return (
    <div>
      {/* Display components directly */}
      <DecEventBoundary />
      {/* <DecEventHero />  */}
      <DecEventHighLights /> 
      <DecEventArrivedGuest />
      {/* <DecEventInfo /> */}
      {/* <DecEventBaner /> */}
      {/* <DecEventGuest /> */}
      {/*  <DecEventSpeaker />*/}
      <DecEventAgenda /> 
      <DecEventSlider />

      {/* <DecEventVideo /> */}
      {/* <DecEventSponsor />  */}
    </div>
  );
};

export default DecEvent;
