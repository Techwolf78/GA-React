const CollegeInfoSection = () => {
  return (
    <section className="bg-[#122949] text-white mx-auto px-8 sm:px-8 md:px-16 lg:px-16 py-4">
      <div className="flex flex-col md:flex-row justify-start items-start space-x-0 md:space-x-4 space-y-4 md:space-y-0">
        <div className="flex items-center font-bold text-base sm:text-lg md:text-xl lg:text-2xl space-x-2">
          <img src="Clgimage/checklist.png" alt="Tick" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          <span>Complete offline mode</span>
        </div>
        <div className="flex items-center font-bold text-base sm:text-lg md:text-xl lg:text-2xl space-x-2">
          <img src="Clgimage/checklist.png" alt="Tick" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          <span>Content approved by the Industry & then delivered</span>
        </div>
        <div className="flex items-center font-bold text-base sm:text-lg md:text-xl lg:text-2xl space-x-2">
          <img src="Clgimage/checklist.png" alt="Tick" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          <span>Real – Scenario based learning</span>
        </div>
      </div>
    </section>
  );
};

export default CollegeInfoSection;
