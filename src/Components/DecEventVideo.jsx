import React, { useEffect, useState, useRef } from "react";

const VideoSection = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [isSpinnerVisible, setIsSpinnerVisible] = useState(true); // Track spinner visibility
  const [isVideoReady, setIsVideoReady] = useState(false); // Track video readiness
  const videoRef = useRef(null); // Reference to the video element

  // Update video source based on screen width
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

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", updateVideoSource);
  }, []);

  // Handle video loading progress
  const handleProgress = () => {
    if (videoRef.current) {
      const buffered = videoRef.current.buffered;
      if (buffered.length > 0) {
        const totalBuffered = buffered.end(buffered.length - 1); // Get the last buffered byte position
        const duration = videoRef.current.duration;

        if (totalBuffered >= duration) {
          // Video is fully buffered
          setIsVideoReady(true); // Mark video as ready
          setTimeout(() => {
            setIsSpinnerVisible(false); // Hide spinner after buffering is complete
          }, 1000); // Short delay before hiding spinner
        }
      }
    }
  };

  // Handle video load error
  const handleVideoError = () => {
    setIsVideoReady(false); // Video failed to load
    setIsSpinnerVisible(false); // Hide spinner on error
    console.error("Video failed to load");
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
          className={`absolute top-0 left-0 w-full h-full object-cover md:object-fill transition-opacity duration-1000 ${isSpinnerVisible ? "opacity-0" : "opacity-100"}`}
          src={videoUrl}
          autoPlay
          loop
          muted
          preload="auto"
          onProgress={handleProgress} // Monitor progress of video loading
          onError={handleVideoError} // Handle error in loading video
        />
      </div>
    </div>
  );
};

export default VideoSection;
