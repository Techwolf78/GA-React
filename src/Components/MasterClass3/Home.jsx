
import GallerySlider from "./GallerySlider"; // Import GallerySlider component

function Home() {
  return (
    <div className="flex h-screen bg-[#00a59f] overflow-hidden px-4 md:px-16">
      {/* Left Side - Content */}
      <div className="w-1/2 flex flex-col justify-center items-start bg-[#00bfa6] px-4">
        <h1 className="text-5xl font-bold mb-6 text-[#000000]">
          Masterclass 3.0: Empowering Trainers and Students to Drive Industry-Ready Skills
        </h1>
        <p className="text-lg text-[#000000] mb-6">
          Masterclass 3.0 empowers both trainers and students by bridging the gap between education and industry needs. The program equips trainers with innovative teaching methods, while providing students with hands-on, industry-relevant skills that enhance their employability. This initiative ensures that graduates are well-prepared to meet the demands of today’s competitive job market.
        </p>
        <button className="hover:bg-transparent  border-[#027093] border-2  px-6 py-2  hover:bg-gradient-to-r bg-[#027093] hover:border-[#027093] text-white hover:text-black transition-all duration-300">
          Explore More {">"}
        </button>
      </div>

      {/* Right Side - GallerySlider component */}
      <GallerySlider />
    </div>
  );
}

export default Home;
