const AboutHero = () => {
  return (
    <section 
      className="bg-[#003073] text-white flex flex-col md:flex-row items-center justify-between py-4"
    >
      <div className="w-full max-w-screen-lg px-8 md:px-16 flex-1">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 text-[#FFC80E]">
          ABOUT US
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Bridging the Gap Between Industry and Academia
        </h2>
        <p className="text-base md:text-lg font-medium mb-12" style={{ color: '#F0F0F0' }}>
        As India's premier non-ed-tech organization, we are committed to bridging the gap between industry and academia. Providing customized training solutions as per the Industry-centric needs, we help your students to be industry ready.
</p>



      </div>
      <div className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
        <img 
          src="About/heroNew.PNG" // Replace with your vector graphic path
          alt="Vector Graphic"
          className="max-w-full h-auto"
        />
      </div>
    </section>
  );
};

export default AboutHero;
