import React, { useEffect, useState, useRef } from "react";

const VideoSection = () => {
  const [videoUrl, setVideoUrl] = useState(""); // Video source state
  const [isSpinnerVisible, setIsSpinnerVisible] = useState(true); // Spinner visibility state
  const [isVideoReady, setIsVideoReady] = useState(false); // Video readiness state
  const videoRef = useRef(null); // Video element reference

  // Update the video source based on screen width
  const updateVideoSource = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1024) {
      return "Event/trynew.mov";
    } else if (screenWidth >= 600 && screenWidth < 1024) {
      return "Event/evenvid.mov";
    } else {
      return "Event/evenmob.mp4";
    }
  };

  useEffect(() => {
    // Set the video source on initial render
    setVideoUrl(updateVideoSource());

    // Update video source on window resize
    const handleResize = () => setVideoUrl(updateVideoSource());
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Handle the video buffering progress
  const handleProgress = () => {
    if (videoRef.current) {
      const buffered = videoRef.current.buffered;
      if (buffered.length > 0) {
        const totalBuffered = buffered.end(buffered.length - 1);
        const duration = videoRef.current.duration;

        if (totalBuffered >= duration) {
          setIsVideoReady(true);
          setTimeout(() => setIsSpinnerVisible(false), 1000); // Delay hiding spinner
        }
      }
    }
  };

  // Handle video loading error
  const handleVideoError = () => {
    setIsVideoReady(false);
    setIsSpinnerVisible(false);
    console.error("Video failed to load");
  };

  // Handle video ready state (alternative to progress)
  const handleCanPlay = () => {
    setIsVideoReady(true);
    setIsSpinnerVisible(false);
  };

  return (
    <div className="w-full overflow-hidden relative font-poppins">
      <div className="bg-gray-900 px-4 sm:px-8 md:px-16 text-center py-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFC80E]">
          Event Gallery
        </h1>
      </div>

      {/* Spinner element */}
      {isSpinnerVisible && (
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 flex items-center justify-center z-20">
          <div className="border-t-4 border-white border-solid rounded-full w-16 h-16 animate-spin"></div>
        </div>
      )}

      {/* Video container */}
      <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen">
        <video
          ref={videoRef} // Ref to track the video element
          className={`absolute top-0 left-0 w-full h-full object-cover md:object-cover transition-opacity duration-1000 ${isSpinnerVisible ? "opacity-0" : "opacity-100"}`}
          src={videoUrl}
          autoPlay
          loop
          muted
          preload="auto"
          onProgress={handleProgress} // Monitor progress of video loading
          onError={handleVideoError} // Handle error in loading video
          onCanPlay={handleCanPlay} // Mark video as ready when it can start playing
        />
      </div>
    </div>
  );
};

export default VideoSection;
