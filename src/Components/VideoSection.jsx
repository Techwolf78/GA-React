const VideoSection = () => (
  <div>
    {/* Heading section */}
    <div className="text-center p-8 bg-[#01224F] mb-0">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-bold text-[#FFC80E] inline-block pb-2 relative">
        Welcome to Our Video Section
      </h1>
    </div>

    {/* Video section */}
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover will-change-transform"
        src="/IMG_5815.mp4"
        autoPlay
        loop
        preload="auto"
        onCanPlayThrough={(e) => e.target.play()} // Ensures the video plays immediately once it's ready
      />
    </div>
  </div>
);

export default VideoSection;
