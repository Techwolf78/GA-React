import React, { Suspense } from "react";

// Lazy load components
const DecEventHero = React.lazy(() => import("./DecEventHero"));
const DecEventInfo = React.lazy(() => import("./DecEventInfo"));
const DecEventVideo = React.lazy(() => import("./DecEventVideo"));
const DecEventSponsor = React.lazy(() => import("./DecEventSponsor"));

const DecEvent = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <DecEventHero />
        <DecEventInfo />
        <DecEventVideo />
        <DecEventSponsor />
      </Suspense>
    </div>
  );
};

export default DecEvent;
