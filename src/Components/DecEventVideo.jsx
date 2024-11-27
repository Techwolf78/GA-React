import React, { useEffect, useState } from "react";

const VideoSection = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  const updateVideoSource = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1024) {
      setVideoUrl("Event/Trynew.mp4");
    } else if (screenWidth >= 600 && screenWidth < 1024) {
      setVideoUrl("Event/evenvid.mov");
    } else {
      setVideoUrl("Event/evenmob.mp4");
    }
  };

  useEffect(() => {
    updateVideoSource();
    window.addEventListener("resize", updateVideoSource);
    return () => window.removeEventListener("resize", updateVideoSource);
  }, []);

  const handleVideoLoaded = () => {
    setIsLoading(false); // Video has loaded
  };

  const handleVideoError = () => {
    setIsLoading(false); // Handle video load failure
    console.error("Video failed to load");
  };

  return (
    <div className="w-full overflow-hidden">
      <div className="bg-gray-900 px-4 sm:px-8 md:px-16 text-center py-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFC80E]">
          Event Gallery
        </h1>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="absolute top-0 left-0 w-full h-full bg-blue-800 opacity-50 flex items-center justify-center">
          <div className="text-white">Loading Video...</div>
        </div>
      )}

      <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover md:object-fill"
          src={videoUrl}
          autoPlay
          loop
          muted
          preload="auto"
          onLoadedData={handleVideoLoaded}
          onError={handleVideoError}
        />
      </div>
    </div>
  );
};

export default VideoSection;
