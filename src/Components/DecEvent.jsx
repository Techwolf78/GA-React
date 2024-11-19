import DecEventHero from "./DecEventHero";
import DecEventInfo from "./DecEventInfo";
import DecEventGallery from './DecEventGallery';
import DecEventVideo from './DecEventVideo';
import DecEventSponsor from './DecEventSponsor';

const DecEvent = () => {
  return (
    <div>
      <DecEventHero />
      <DecEventInfo />
      <DecEventVideo />

      {/* <DecEventGallery /> */}
      <DecEventSponsor/>
    </div>
  );
};

export default DecEvent;
