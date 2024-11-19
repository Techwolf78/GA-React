const VideoSection = () => (
  <div className="relative w-full h-screen overflow-hidden">
    {/* Video section with infinite loop */}
    <video
      className="absolute top-0 left-0 w-full h-full object-cover will-change-transform"
      src="/IMG_5815.mp4"
      autoPlay
      loop
      muted    // Make sure the video plays without sound
      preload="auto"
      onCanPlayThrough={(e) => e.target.play()} // Ensures the video plays immediately once it's ready
    />
  </div>
);

export default VideoSection;
