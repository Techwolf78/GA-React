import React, { Suspense } from "react";
import Skeleton from "react-loading-skeleton"; // Import the skeleton loader

// Lazy load components
const DecEventHero = React.lazy(() => import("./DecEventHero"));
const DecEventInfo = React.lazy(() => import("./DecEventInfo"));
const DecEventVideo = React.lazy(() => import("./DecEventVideo"));
const DecEventSponsor = React.lazy(() => import("./DecEventSponsor"));

const SkeletonLoader = () => (
  <div className="skeleton-container">
    {/* Placeholder skeletons for each section */}
    <Skeleton height={300} width="100%" />
    <Skeleton height={150} width="100%" />
    <Skeleton height={200} width="100%" />
    <Skeleton height={100} width="100%" />
  </div>
);

const DecEvent = () => {
  return (
    <div>
      <Suspense fallback={<SkeletonLoader />}> {/* Wrap with Suspense and custom loader */}
        <DecEventHero />
        <DecEventInfo />
        <DecEventVideo />
        <DecEventSponsor />
      </Suspense>
    </div>
  );
};

export default DecEvent;
