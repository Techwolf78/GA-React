// Import components directly (no lazy loading)
// import DecEventHero from "./DecEventHero";
// import DecEventInfo from "./DecEventInfo";
// import DecEventVideo from "./DecEventVideo";
// import DecEventSponsor from "./DecEventSponsor";
// import DecEventBaner from "./DecEventBaner";
// import DecEventSpeaker from "./DecEventSpeaker";
// import DecEventGuest from "./DecEventGuest";
import DecEventHighLights from "./DecEventHighLights";
import DecEventSlider from "./DecEventSlider";
import DecEventBoundary from "./DecEventBoundary";
import DecEventArrivedGuest from "./DecEventArrivedGuest";
import DecEventAgenda from "./DecEventAgenda";

const DecEvent = () => {
  return (
    <div>
      {/* Display components directly */}
      <DecEventBoundary />
      <DecEventHighLights />
      <DecEventArrivedGuest />
      <DecEventAgenda />
      <DecEventSlider />

  
      {/* <DecEventHero />  */}
      {/* <DecEventInfo /> */}
      {/* <DecEventBaner /> */}
      {/* <DecEventGuest /> */}
      {/*  <DecEventSpeaker />*/}
      {/* <DecEventVideo /> */}
      {/* <DecEventSponsor />  */}
    </div>
  );
};

export default DecEvent;
