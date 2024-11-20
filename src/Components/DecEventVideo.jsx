import { useState, useEffect } from 'react';

// Skeleton Loader for Video
const VideoSkeleton = () => (
  <div className="w-full h-screen bg-gray-300 animate-pulse"></div>
);

const VideoSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );
    
    const videoElement = document.getElementById('video-section');
    observer.observe(videoElement);
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div id="video-section" className="w-full overflow-hidden">
      <div className="bg-gray-900 px-8 md:px-16 text-center py-4">
        <h1 className="text-4xl font-bold text-[#FFC80E]">EVENT GALLERY</h1>
      </div>

      <div className="relative w-full h-screen">
        {isVisible ? (
          <video
            className="absolute top-0 left-0 w-full h-full object-fill will-change-transform"
            src="/IMG_5815.mp4"
            autoPlay
            loop
            muted
            preload="auto"
            onCanPlayThrough={(e) => e.target.play()}
          />
        ) : (
          <VideoSkeleton />
        )}
      </div>
    </div>
  );
};

export default VideoSection;
