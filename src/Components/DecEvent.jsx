import React from 'react';
import DecEventHero from "./DecEventHero";
import DecEventInfo from "./DecEventInfo";
import DecEventGallery from './DecEventGallery';
import DecEventVideo from './DecEventVideo';
import DecEventSponsor from './DecEventSponsor';

const DecEvent = () => {
  return (
    <div>
      <DecEventHero />
      <DecEventVideo />
      <DecEventInfo />
      <DecEventGallery />
      <DecEventSponsor/>
    </div>
  );
};

export default DecEvent;
